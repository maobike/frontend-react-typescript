import React, { useState, useEffect } from 'react';
import '../../../assets/font-awesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Row, Col, Table, CardBody, Modal, CardTitle } from 'reactstrap';

import ReservationService from '../services/reservationService';
import { Reservations, ResultData } from '../../../interfaces/data-reservations';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { DetailReservation } from './DetailReservation';

export const ListReservations = () => {
    const [dataReservations, setDataReservations] = useState<Reservations[] | null>(null);
    const [reservation, setReservation] = useState<Reservations | null>(null);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        getReservations();
    }, []);

    const getReservations = async () => {
        try {
            // Llamamos el servicio
            const result: ResultData = await ReservationService.getReservations() as ResultData;
            
            // Asignamos el valor del resultado
            setDataReservations(result.data.reservations);
    
            return result;
        } catch (error) {
            console.log(error);
        }
    };

    const toggle = () => {
        setModal(!modal);
    };

    // Abrir modal detalle de reserva
    const detailReservation = (reservation?: Reservations) => {
        if (reservation) {
            setReservation(reservation);
        }
        toggle();
    };

    return (
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
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dataReservations && dataReservations.length > 0 && dataReservations.map((dataRes: Reservations, index: number) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{dataRes.id}</td>
                                                        <td>{dataRes.hotel.name}</td>
                                                        <td>{dataRes.hotel.city}</td>
                                                        <td>{dataRes.room.type}</td>
                                                        <td>{dataRes.room.guests}</td>
                                                        <td>${dataRes.room.price}</td>
                                                        <td style={{ textAlign: 'center', alignSelf: 'stretch' }}>
                                                            <Button title="Ver detalle de reserva" color="link" onClick={() => detailReservation(dataRes)}>
                                                                <FontAwesomeIcon icon={faEye} />
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
                    <DetailReservation toggle={toggle} reservation={reservation} ></DetailReservation>
                </Modal>
            </div>
        </div>
    )
}
