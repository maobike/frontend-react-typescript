import React, { Fragment, useState, useEffect } from 'react'
import { Row, Col, FormGroup, Label, Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import '../../../assets/font-awesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HotelService from '../services/HotelService'
import Swal from 'sweetalert2';
import { Hotels, ResultData } from '../../../interfaces/data-hotels';
import { DataCountries } from '../../../interfaces/data-countries';

export function FormHotel({
        toggle,
        hotel,
        refreshList,
    }: {
        toggle: () => void;
        hotel: Hotels | null;
        refreshList: () => void;
    }) {
    
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [title, setTitle] = useState<string | null>(null);
    const [dataCountries, setDataCountries] = useState<DataCountries[] | null>(null);

    // Función para saber si viene a crear o editar el cliente
    useEffect(() => {
        getCountries();
        const getTitle = () => {
            if (hotel) {
                setTitle('Editar Hotel');
                try {
                    setValue("name", hotel.name)
                    setValue("email", hotel.email)
                    setValue("phone", hotel.phone)
                    setValue("street", hotel.street)
                    setValue("phone", hotel.phone) 
                    setValue("country", hotel.country)
                    setValue("city", hotel.city)
                    setValue("status", hotel.status)
                } catch (error) {
                    console.log(error);
                }
            } else {
                setTitle('Crear Hotel');
            }
        };
        setTimeout(() => {
            getTitle();
        }, 500);
    }, [setValue, hotel]);

    // Función para obtener el país
    const getCountries = async() => {
        const result = await HotelService.getCountries();
        setDataCountries(result.data)
    }

    // Función para enviar a guardar
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const hotelData: Hotels = {
                id: data.id,
                name: data.name,
                email: data.email,
                street: data.street,
                phone: data.phone,
                country: data.country,
                city: data.city,
                status: parseInt(data.status),
                createdAt: data.createdAt,
                updatedAt: data.updatedAt,            
            };
            // Crear o editar
            if (hotel) {
                updateHotel(hotelData);
            } else {
                addHotel(hotelData);
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Crear hotel
    const addHotel = async (data: Hotels) => {
        const result: ResultData = await HotelService.addHotel(data) as ResultData;
        
        try {
            if (result.status === 200) {
                Swal.fire({
                    title: "Hotel creado con éxito",
                    text: result.message,
                    icon: "success",
                    confirmButtonText: "Aceptar",
                });
            } else {
                Swal.fire({
                    title: "Transacción errónea",
                    text: `${result.message}`,
                    icon: "error",
                    confirmButtonText: "Aceptar",
                });
            }
            toggle();         
        } catch (error) {
            console.log(error);
        } finally {
            refreshList();
        }
    }

    // Actualizar hotel
    const updateHotel = async (data: Hotels) => {
        try {
            const hotelId = hotel?.id ?? 0;

            const result: ResultData = await HotelService.editHotel(hotelId, data) as ResultData;

            if (result.status === 200) {
                Swal.fire({
                    title: "Hotel editado con éxito",
                    text: result.message,
                    icon: "success",
                    confirmButtonText: "Aceptar",
                });
            } else {
                Swal.fire({
                    title: "Transacción errónea",
                    text: result.message,
                    icon: "error",
                    confirmButtonText: "Aceptar",
                });
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: "Transacción errónea",
                text: "Ocurrió un error, por favor intente de nuevo",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        } finally {
            refreshList();
            toggle();
        }
    }

    return (
        <Fragment>
            <ModalHeader toggle={toggle}><span data-testid="titleApp">{title}</span></ModalHeader>
            <ModalBody>
                <form name="form-list" id="form-list">
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Nombre <span className="input-obligatorio">*</span></Label>
                                <input className="form-control"
                                    type="text"
                                    autoFocus
                                    maxLength={200}
                                    {...register("name", { 
                                        required: true,
                                        minLength: 5,
                                        maxLength: 200,
                                        pattern: /^[a-zA-ZñÑ\s]*$/i 

                                    })}
                                />
                                <div className="text-error">
                                    {errors.name?.type === "required" && "El nombre es requerido"}
                                    {errors.name?.type === "minLength" && "Este campo debe contener mínimo 5 caracteres"}
                                    {errors.name?.type === "maxLength" && "Este campo debe contener máximo 100 caracteres"}
                                    {errors.name?.type === "pattern" && "Este campo no debe contener números ni caracteres especiales" }

                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                                <Label>Email <span className="input-obligatorio">*</span></Label>
                                <input className="form-control"
                                    type="email"
                                    maxLength={150}
                                    { ...register("email", { 
                                        required: true,
                                        pattern: /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/i
                                    })}
                                />
                                <div className="text-error">
                                    {errors.email?.type === "required" && "El email es requerido"}
                                    {errors.email?.type === "maxLength" && "Este campo debe contener máximo 150 caracteres"}
                                    {errors.email?.type === "pattern" && "Este campo debe ser un correo valido" }
                                </div>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Dirección <span className="input-obligatorio">*</span></Label>
                                <input className="form-control"
                                    type="text"
                                    maxLength={200}
                                    { ...register("street", { 
                                        required: true,
                                    })}
                                />
                                <div className="text-error">
                                    {errors.street?.type === "required" && "La dirección es requerida"}
                                    {errors.street?.type === "maxLength" && "Este campo debe contener máximo 200 caracteres"}
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                                <Label>Teléfono <span className="input-obligatorio">*</span></Label>
                                <input className="form-control"
                                    type="number"
                                    maxLength={10}
                                    { ...register("phone", { 
                                        required: true,
                                        maxLength: 10,
                                        pattern: /^[0-9]+$/
                                    })}
                                />
                                <div className="text-error">
                                    {errors.phone?.type === "required" && "El teléfono es requerido"}
                                    {errors.phone?.type === "maxLength" && "Este campo debe contener máximo 10 caracteres"}
                                    {errors.phone?.type === "pattern" && "Este campo debe ser un teléfono valido" }
                                </div>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label>País <span className="input-obligatorio">*</span></Label>
                                <select className="form-control"
                                    {...register("country", {
                                        required: true,
                                    })}
                                >
                                    <option value="">Seleccione el país</option>
                                    {dataCountries?.map((nameData: DataCountries, index: number) => {
                                        return (
                                            <option key={index} value={nameData.name.common}>{nameData.name.common}</option>
                                        );
                                    }
                                )}
                                </select>
                                <div className="text-error">
                                    {errors.country?.type === "required" && "El país es requerido"}
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Ciudad <span className="input-obligatorio">*</span></Label>
                                <input className="form-control"
                                    type="text"
                                    maxLength={200}
                                    { ...register("city", { 
                                        required: true,
                                    })}
                                />
                                <div className="text-error">
                                    {errors.city?.type === "required" && "La ciudad es requerida"}
                                    {errors.city?.type === "maxLength" && "Este campo debe contener máximo 200 caracteres"}
                                </div>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Estado <span className="input-obligatorio">*</span></Label>
                                <select className="form-control"
                                    {...register("status", {
                                        required: true,
                                    })}
                                >
                                    <option value="1">Activo</option>
                                    <option value="0">Inactivo</option>
                                </select>
                            </FormGroup>
                        </Col>
                    </Row>

                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSubmit(onSubmit)}>
                    <FontAwesomeIcon icon="save" /> Guardar
                </Button>
                <Button color="secondary" onClick={toggle}>
                    <FontAwesomeIcon icon="eraser" /> Cancel
                </Button>
            </ModalFooter>
        </Fragment>
    )
}