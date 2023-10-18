import React, { Fragment } from 'react'
import { Row, Col, FormGroup, Label, Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import '../../../assets/font-awesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SearchService from '../services/searchService'
import Swal from 'sweetalert2';
import { Rooms } from '../../../interfaces/data-rooms';
import { Reservations, ResultData } from '../../../interfaces/data-reservations';

export function FormRoomsReserved({
        toggle,
        room,
        refreshList,
    }: {
        toggle: () => void;
        room: Rooms | null;
        refreshList: () => void;
    }) {
    
    const { register, handleSubmit, formState: { errors } } = useForm();
   
    // Función para enviar a guardar
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const reservationData: Reservations = {
                id: 0,
                name: data.name,
                birthday: data.birthday,
                gender: data.gender,
                typeDocument: data.typeDocument,
                document: data.document,
                email: data.email,
                phone: data.phone,
                nameContact: data.nameContact,
                phoneContact: data.phoneContact,
                createdAt: new Date(),
                updatedAt: new Date(),
                hotel : {
                    id: room?.hotel?.id || 0,
                    name: `${room?.hotel.name}`,
                    city: `${room?.hotel.city}`,
                },
                room : {
                    id: room?.id || 0,
                    price: `${room?.price}`,
                    type: `${room?.type}`,
                    guests: room?.guests || 0
                }
            };

            createReservation(reservationData);
        } catch (error) {
            console.log(error);
        }
    }

    // Crear reserva
    const createReservation = async (data: Reservations) => {
        const result: ResultData = await SearchService.createReservation(data) as ResultData;
        
        try {
            if (result.status === 200) {
                Swal.fire({
                    title: "Reserva creada con éxito",
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

    return (
        <Fragment>
            <ModalHeader toggle={toggle}><span data-testid="titleApp">Crear reserva</span></ModalHeader>
            <ModalBody>
                <form name="form-list" id="form-list">
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Nombre y apellido <span className="input-obligatorio">*</span></Label>
                                <input className="form-control"
                                    type="text"
                                    autoFocus
                                    maxLength={200}
                                    {...register("name", { 
                                        required: true,
                                        minLength: 10,
                                        maxLength: 200,
                                        pattern: /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]*$/i
                                    })}
                                />
                                <div className="text-error">
                                    {errors.name?.type === "required" && "El nombre es requerido"}
                                    {errors.name?.type === "minLength" && "Este campo debe contener mínimo 10 caracteres"}
                                    {errors.name?.type === "maxLength" && "Este campo debe contener máximo 100 caracteres"}
                                    {errors.name?.type === "pattern" && "Este campo no debe contener números ni caracteres especiales" }
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                          <FormGroup>
                                <Label>Fecha de nacimiento <span className="input-obligatorio">*</span></Label>
                                <input className="form-control"
                                    type="date"
                                    maxLength={150}
                                    { ...register("birthday", { 
                                        required: true,
                                    })}
                                />
                                <div className="text-error">
                                    {errors.birthday?.type === "required" && "La fecha de nacimiento es requerida"}
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <Label>Genero <span className="input-obligatorio">*</span></Label>
                                <select className="form-control"
                                    {...register("gender", {
                                        required: true,
                                    })}
                                >
                                    <option value="">Selecciona el genero</option>
                                    <option value="Femenino">Femenino</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Otro">Otro</option>
                                </select>
                                <div className="text-error">
                                    {errors.gender?.type === "required" && "El genero es requerido"}
                                </div>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                    <Col md={3}>
                            <FormGroup>
                                <Label>Tipo de documento <span className="input-obligatorio">*</span></Label>
                                <select className="form-control"
                                    {...register("typeDocument", {
                                        required: true,
                                    })}
                                >
                                    <option value="">Selecciona tipo de documento</option>
										<option value="TI">Tarjeta de identidad</option>
										<option value="RC">Registro civil de nacimiento</option>
										<option value="CC">Cédula de ciudadanía</option>
										<option value="CR">Certificado registraduría sin identificación</option>
										<option value="TE">Tarjeta de extranjería</option>
										<option value="CE">Cédula de extranjería</option>
										<option value="PS">Pasaporte</option>
										<option value="DIE">Documento de identificación extranjero</option>
										<option value="DFD">Sin identificación del exterior o para uso definido DIAN</option>
										<option value="EXJ">Documento de identificación extranjeros persona jurídica</option>
										<option value="CD">Carné diplomático</option>
										<option value="PEP">Permiso especial de permanencia PEP</option>
										<option value="PPT">Permiso por protección temporal PPT</option>
                                    </select>
                                <div className="text-error">
                                    {errors.typeDocument?.type === "required" && "El tipo de documento es requerido"}
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label>Número documento <span className="input-obligatorio">*</span></Label>
                                <input className="form-control"
                                    type="text"
                                    minLength={8}
                                    maxLength={16}
                                    { ...register("document", { 
                                        required: true,
                                        pattern: /^[a-zA-Z0-9ñÑ\s]*$/i
                                    })}
                                />
                                <div className="text-error">
                                    {errors.document?.type === "required" && "El número de documento es requerido"}
                                    {errors.document?.type === "minLength" && "Este campo debe contener mínimo 8 caracteres"}
                                    {errors.document?.type === "maxLength" && "Este campo debe contener máximo 16 caracteres"}
                                    {errors.document?.type === "pattern" && "Este campo no debe contener caracteres especiales" }
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={5}>
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

                    <Col md={12}>&nbsp;</Col>

                    <Col md={12}>
                        <span className='sub-title'>Contacto de emergencia</span>
                    </Col>
                    <hr></hr>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Nombre y apellido <span className="input-obligatorio">*</span></Label>
                                <input className="form-control"
                                    type="text"
                                    autoFocus
                                    maxLength={200}
                                    {...register("nameContact", { 
                                        required: true,
                                        minLength: 10,
                                        maxLength: 200,
                                        pattern: /^[a-zA-ZáéíóúüÁÉÍÓÚÜñÑ\s]*$/i
                                    })}
                                />
                                <div className="text-error">
                                    {errors.nameContact?.type === "required" && "El nombre es requerido"}
                                    {errors.nameContact?.type === "minLength" && "Este campo debe contener mínimo 10 caracteres"}
                                    {errors.nameContact?.type === "maxLength" && "Este campo debe contener máximo 200 caracteres"}
                                    {errors.nameContact?.type === "pattern" && "Este campo no debe contener números ni caracteres especiales" }
                                </div>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Teléfono <span className="input-obligatorio">*</span></Label>
                                <input className="form-control"
                                    type="number"
                                    maxLength={10}
                                    { ...register("phoneContact", { 
                                        required: true,
                                        maxLength: 10,
                                        pattern: /^[0-9]+$/
                                    })}
                                />
                                <div className="text-error">
                                    {errors.phoneContact?.type === "required" && "El teléfono es requerido"}
                                    {errors.phoneContact?.type === "maxLength" && "Este campo debe contener máximo 10 caracteres"}
                                    {errors.phoneContact?.type === "pattern" && "Este campo debe ser un teléfono valido" }
                                </div>
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