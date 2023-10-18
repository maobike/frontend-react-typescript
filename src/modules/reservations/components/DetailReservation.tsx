import React, { Fragment } from 'react'
import { Row, Col, FormGroup, Label, Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import '../../../assets/font-awesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Reservations } from '../../../interfaces/data-reservations';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export function DetailReservation({
        toggle,
        reservation,
    }: {
        toggle: () => void;
        reservation: Reservations | null;
    }) {
    
    return (
        <Fragment>
            <ModalHeader toggle={toggle}><span data-testid="titleApp">Detalle de la reserva</span></ModalHeader>
            <ModalBody>
                <form name="form-list" id="form-list">
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Nombre</Label>
                                <span className='form-control content-detail'>{reservation?.name}</span>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Fecha nacimiento</Label>
                                <span className='form-control content-detail'>{reservation?.birthday ? reservation.birthday.toLocaleDateString() : ''}</span>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <FormGroup>
                                <Label>Género</Label>
                                <span className='form-control content-detail'>{reservation?.gender}</span>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label>tipo de documento</Label>
                                <span className='form-control content-detail'>{reservation?.typeDocument}</span>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label>Número de documento</Label>
                                <span className='form-control content-detail'>{reservation?.document}</span>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <FormGroup>
                                <Label>Email</Label>
                                <span className='form-control content-detail'>{reservation?.email}</span>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label>Phone</Label>
                                <span className='form-control content-detail'>{reservation?.phone}</span>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Nombre contacto de emergencia</Label>
                                <span className='form-control content-detail'>{reservation?.nameContact}</span>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Teléfono contacto de emergencia</Label>
                                <span className='form-control content-detail'>{reservation?.phoneContact}</span>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Hotel</Label>
                                <span className='form-control content-detail'>{reservation?.hotel.name}</span>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Ciudad</Label>
                                <span className='form-control content-detail'>{reservation?.hotel.city}</span>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <FormGroup>
                                <Label>Tipo de habitación</Label>
                                <span className='form-control content-detail'>{reservation?.room.type}</span>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label>Cantidad de huéspedes</Label>
                                <span className='form-control content-detail'>{reservation?.room.guests}</span>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label>Precio</Label>
                                <span className='form-control content-detail'>{reservation?.room.price}</span>
                            </FormGroup>
                        </Col>
                    </Row>

                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>
                    <FontAwesomeIcon icon={faXmark} /> Cerrar
                </Button>
            </ModalFooter>
        </Fragment>
    )
}