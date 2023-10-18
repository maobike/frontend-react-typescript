import React, { useState, useEffect } from 'react';
import '../../../assets/font-awesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Row, Col, Table, CardBody, Modal, CardTitle, FormGroup, Label } from 'reactstrap';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { Rooms, ResultData} from '../../../interfaces/data-rooms';
import SearchService from '../services/searchService';
import { FormRoomsReserved } from './FormRoomsReserved';
import { faPlaneCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { Reservations, ResultData as ResultDataReservation } from '../../../interfaces/data-reservations';

export const ListRoomsHotel = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [dataRoom, setDataRoom] = useState<any | null>(null);
    const [dataReservation, setDataReservation] = useState<Reservations[] | null>(null);
    const [modal, setModal] = useState(false);
    const [room, setRoom] = useState<Rooms | null>(null);
    const [refresh, setRefresh] = useState<boolean | undefined>();

    useEffect(() => {
        getReservations();
    }, []);

    const getReservations = async () => {
        try {
            // Llamamos el servicio
            const result: ResultDataReservation = await SearchService.getReservations() as ResultDataReservation;         
            // Asignamos el valor del resultado
            setDataReservation(result.data.reservations)
            return result;
        } catch (error) {
            console.log(error);
        }
    };

    // Función para buscar
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const result: ResultData = await SearchService.searchRooms(data) as ResultData;
            setDataRoom(result)
            if (result.length === 0) {
                Swal.fire({
                    title: "No se encontraron resultados",
                    text: "No se encontraron habitaciones disponibles con los criterios de búsqueda.",
                    icon: "error",
                    confirmButtonText: "Aceptar",
                });
            }        
        } catch (error) {
            console.log(error);
        }
    }

    const toggle = () => {
        setModal(!modal);
    };

    const refreshList = () => {
        setRefresh(!refresh);
    };

    // Abrir modal crear o editar
    const formRoom = (room?: Rooms) => {
        if (room) {
            setRoom(room);
        } else {
            setRoom(null);
        }
        toggle();
    };
    
    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardTitle className='title'>Búsqueda de habitaciones</CardTitle>
                            <CardBody>
                                <form name="form-list" id="form-list">
                                    <Row>
                                        <Col md={2}>
                                            <FormGroup>
                                                <Label>Fecha de ingreso <span className="input-obligatorio">*</span></Label>
                                                <input className="form-control"
                                                    type="date"
                                                    autoFocus
                                                    maxLength={10}
                                                    {...register("checkIn", { 
                                                        required: true,
                                                    })}
                                                />
                                                <div className="text-error">
                                                    {errors.checkIn?.type === "required" && "La fecha de ingreso es requerida"}
                                                </div>
                                            </FormGroup>
                                        </Col>
                                        <Col md={2}>
                                            <FormGroup>
                                                <Label>Fecha de salida <span className="input-obligatorio">*</span></Label>
                                                <input className="form-control"
                                                    type="date"
                                                    autoFocus
                                                    maxLength={10}
                                                    {...register("checkOut", { 
                                                        required: true,
                                                    })}
                                                />
                                                <div className="text-error">
                                                    {errors.checkOut?.type === "required" && "La fecha de salida es requerida"}
                                                </div>
                                            </FormGroup>
                                        </Col>
                                        <Col md={3}>
                                            <FormGroup>
                                                <Label>Cantidad de personas <span className="input-obligatorio">*</span></Label>
                                                <input className="form-control"
                                                    type="number"
                                                    autoFocus
                                                    maxLength={2}
                                                    {...register("guests", { 
                                                        required: true,
                                                        maxLength: 2,
                                                        pattern: /^[0-9]+$/
                                                    })}
                                                />
                                                <div className="text-error">
                                                    {errors.guests?.type === "required" && "La cantidad es requerido"}
                                                    {errors.guests?.type === "maxLength" && "Este campo debe contener máximo 2 caracteres"}
                                                    {errors.guests?.type === "pattern" && "Este campo debe ser un número valido" }
                                                </div>
                                            </FormGroup>
                                        </Col>
                                        <Col md={3}>
                                            <FormGroup>
                                                <Label>Ciudad <span className="input-obligatorio">*</span></Label>
                                                <select className="form-control"
                                                    {...register("city", {
                                                        required: true,
                                                    })}
                                                >
                                                    <option value="Bogota">Bogotá, D.C. (Distrito Capital)</option>
                                                    <option value="Medellin">Medellín</option>
                                                    <option value="Cali">Cali</option>
                                                    <option value="Barranquilla">Barranquilla</option>
                                                    <option value="Cartagena">Cartagena</option>
                                                    <option value="Bucaramanga">Bucaramanga</option>
                                                    <option value="Cucuta">Cúcuta</option>
                                                    <option value="Pereira">Pereira</option>
                                                    <option value="SantaMarta">Santa Marta</option>
                                                    <option value="Villavicencio">Villavicencio</option>
                                                    <option value="Manizales">Manizales</option>
                                                    <option value="Armenia">Armenia</option>
                                                    <option value="Pasto">Pasto</option>
                                                    <option value="Ibague">Ibagué</option>
                                                    <option value="Neiva">Neiva</option>
                                                    <option value="Popayan">Popayán</option>
                                                    <option value="Tunja">Tunja</option>
                                                    <option value="Monteria">Montería</option>
                                                    <option value="Sincelejo">Sincelejo</option>
                                                    <option value="Valledupar">Valledupar</option>
                                                </select>
                                                <div className="text-error">
                                                    {errors.type?.type === "required" && "El tipo de habitación es requerido"}
                                                </div>
                                            </FormGroup>
                                        </Col>
                                        <Col md={2}>
                                            <FormGroup className='mt-auto'>
                                                <Label>&nbsp;</Label>
                                                <Button className='form-control' color='primary' onClick={handleSubmit(onSubmit)} >
                                                    <FontAwesomeIcon icon="search" /> Búscar
                                                </Button>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>

            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardTitle className='title'>Habitaciones disponibles</CardTitle>
                            <CardBody>
                            <div style={{ overflow: 'auto' }}>
                                    <Table hover striped bordered className="borde-tabla">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Hotel</th>
                                                <th>#</th>
                                                <th>Tipo</th>
                                                <th>Huéspedes</th>
                                                <th>Precio</th>
                                                <th>Reservada</th>
                                                <th>Estado</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dataRoom && dataRoom.length > 0 && dataRoom.map((dataRes: Rooms, index: number) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{dataRes.id}</td>
                                                        <td>{dataRes.hotel.name}</td>
                                                        <td>{dataRes.number}</td>
                                                        <td>{dataRes.type}</td>
                                                        <td>{dataRes.guests}</td>
                                                        <td>${dataRes.price}</td>
                                                        <td className={dataRes.reserved === true ? 'text-danger' : ''}>
                                                            {dataRes.reserved === true ? 'Reservada' : 'Libre'}
                                                        </td>
                                                        <td>{dataRes.status === true ? 'Activa' : 'Inactiva'}</td>
                                                        <td style={{ textAlign: 'center', alignSelf: 'stretch' }}>
                                                            <Button title="Crear reserva" color="link" onClick={() => formRoom(dataRes)}>
                                                                <FontAwesomeIcon icon={faPlaneCircleCheck} />
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </Table>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <div>
                    <Modal isOpen={modal} toggle={toggle} size="xl">
                        <FormRoomsReserved toggle={toggle} room={room} refreshList={refreshList} />
                    </Modal>
                </div>
            </div>

            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardTitle className='title'>Mis reservaciones</CardTitle>
                            <CardBody>
                            <div style={{ overflow: 'auto' }}>
                                    <Table hover striped bordered className="borde-tabla">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Hotel</th>
                                                <th>Ciudad</th>
                                                <th>Tipo</th>
                                                <th>Huéspedes</th>
                                                <th>Precio</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dataReservation && dataReservation.length > 0 && dataReservation.map((dataRes: Reservations, index: number) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{dataRes.id}</td>
                                                        <td>{dataRes.hotel.name}</td>
                                                        <td>{dataRes.hotel.city}</td>
                                                        <td>{dataRes.room.type}</td>
                                                        <td>{dataRes.room.guests}</td>
                                                        <td>${dataRes.room.price}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </Table>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <div>
                    <Modal isOpen={modal} toggle={toggle} size="xl">
                        <FormRoomsReserved toggle={toggle} room={room} refreshList={refreshList} />
                    </Modal>
                </div>
            </div>
        </>
    )
}
