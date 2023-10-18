import React, { Fragment, useState, useEffect } from 'react'
import { Row, Col, FormGroup, Label, Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import '../../../assets/font-awesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import RoomService from '../services/roomService'
import Swal from 'sweetalert2';
import { Rooms, ResultData } from '../../../interfaces/data-rooms';
import { Hotels, ResultData as ResultDataH } from '../../../interfaces/data-hotels';
import HotelService from '../../hotels/services/HotelService';

export function FormRoom({
        toggle,
        room,
        refreshList,
    }: {
        toggle: () => void;
        room: Rooms | null;
        refreshList: () => void;
    }) {
    
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [title, setTitle] = useState<string | null>(null);
    const [dataHotel, setDataHotel] = useState<Hotels[] | null>(null);

    // Función para saber si viene a crear o editar el cliente
    useEffect(() => {
        getHotels();
        const getTitle = () => {
            if (room) {
                setTitle('Editar habitación');
                try {
                    setValue("hotel", room.hotel.id)
                    setValue("number", room.number)
                    setValue("type", room.type)
                    setValue("price", room.price)
                    setValue("reserved", room.reserved)
                    setValue("status", room.status)
                } catch (error) {
                    console.log(error);
                }
            } else {
                setTitle('Crear habitación');
            }
        };
        setTimeout(() => {
            getTitle();
        }, 500);
    }, [setValue, room]);

    // Función para obtener los hoteles
    const getHotels = async() => {
        const result: ResultDataH = await HotelService.getHotels() as ResultDataH;
        setDataHotel(result.data.hotels)
    }

    // Función para enviar a guardar
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const hotel = dataHotel?.find(elemento => elemento.id === parseInt(data.hotel));
            const roomData: Rooms = {
                id: data.id,
                number: data.number,
                type: data.type,
                price: data.price,
                reserved: data.reserved,
                status: data.status,
                guests: 1,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt,
                hotel: {
                    id: data.hotel,
                    name: `${hotel?.name}`,
                    city: `${hotel?.city}`,
                }
            };
            // Crear o editar
            if (room) {
                updateRoom(roomData);
            } else { 
                addRoom(roomData);
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Crear habitación
    const addRoom = async (data: Rooms) => {
        const result: ResultData = await RoomService.addRoom(data) as ResultData;
        
        try {
            if (result.status === 200) {
                Swal.fire({
                    title: "Habitación creada con éxito",
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

    // Actualizar habitación
    const updateRoom = async (data: Rooms) => {
        try {
            const roomId = room?.id ?? 0;

            const result: ResultData = await RoomService.editRoom(roomId, data) as ResultData;

            if (result.status === 200) {
                Swal.fire({
                    title: "Habitación editada con éxito",
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
                        <Col md={4}>
                            <FormGroup>
                                <Label>Hotel <span className="input-obligatorio">*</span></Label>
                                <select className="form-control"
                                    {...register("hotel", {
                                        required: true,
                                    })}
                                >
                                    <option value="">Seleccione hotel</option>
                                    {dataHotel?.map((nameData, index: number) => {
                                        return (
                                            <option key={index} value={nameData.id}>{nameData.name}</option>
                                        );
                                    }
                                )}
                                </select>
                                <div className="text-error">
                                    {errors.hotel?.type === "required" && "El hotel es requerido"}
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <Label>Numero <span className="input-obligatorio">*</span></Label>
                                <input className="form-control"
                                    type="number"
                                    autoFocus
                                    maxLength={10}
                                    {...register("number", { 
                                        required: true,
                                        maxLength: 10,
                                        pattern: /^[0-9]+$/
                                    })}
                                />
                                <div className="text-error">
                                    {errors.number?.type === "required" && "El número es requerido"}
                                    {errors.number?.type === "maxLength" && "Este campo debe contener máximo 10 caracteres"}
                                    {errors.number?.type === "pattern" && "Este campo debe ser un número valido" }
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <Label>Tipo de habitación <span className="input-obligatorio">*</span></Label>
                                <select className="form-control"
                                    {...register("type", {
                                        required: true,
                                    })}
                                >
                                    <option value="Sencilla">Sencilla</option>
                                    <option value="Doble">Doble</option>
                                    <option value="Ejecutiva">Ejecutiva</option>
                                    <option value="Suite">Suite</option>
                                </select>
                                <div className="text-error">
                                    {errors.type?.type === "required" && "El tipo de habitación es requerido"}
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label># Huéspedes <span className="input-obligatorio">*</span></Label>
                                <input className="form-control"
                                    type="number"
                                    autoFocus
                                    maxLength={10}
                                    {...register("guests", { 
                                        required: true,
                                        maxLength: 2,
                                        pattern: /^[0-9]+$/
                                    })}
                                />
                                <div className="text-error">
                                    {errors.guests?.type === "required" && "El número de huéspedes es requerido"}
                                    {errors.guests?.type === "maxLength" && "Este campo debe contener máximo 2 caracteres"}
                                    {errors.guests?.type === "pattern" && "Este campo debe ser un número valido" }

                                </div>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <FormGroup>
                                <Label>Precio <span className="input-obligatorio">*</span></Label>
                                <input className="form-control"
                                    type="text"
                                    autoFocus
                                    maxLength={7}
                                    {...register("price", { 
                                        required: true,
                                        maxLength: 200,
                                        pattern: /^[0-9]+(\.[0-9]+)?$/
                                    })}
                                />
                                <div className="text-error">
                                    {errors.price?.type === "required" && "El precio es requerido"}
                                    {errors.price?.type === "maxLength" && "Este campo debe contener máximo 7 caracteres"}
                                    {errors.price?.type === "pattern" && "Este campo debe ser un número valido" }
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label>Reservada <span className="input-obligatorio">*</span></Label>
                                <select className="form-control"
                                    {...register("reserved", {
                                        required: true,
                                    })}
                                >
                                    <option value="">Seleccione estado de reserva</option>
                                    <option value="false">Libre</option>
                                    <option value="true">Reservada</option>
                                </select>
                                <div className="text-error">
                                    {errors.reserved?.type === "required" && "El estado de reserva es necesario"}
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label>Estado <span className="input-obligatorio">*</span></Label>
                                <select className="form-control"
                                    {...register("status", {
                                        required: true,
                                    })}
                                >
                                    <option value="true">Activa</option>
                                    <option value="false">Inactiva</option>
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