import React, { useState, useEffect } from 'react';
import '../../../assets/font-awesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Row, Col, Table, CardBody, InputGroup, Input, InputGroupText, Modal, CardTitle } from 'reactstrap';

import { FormRoom } from './FormRoom';
import { Rooms, ResultData} from '../../../interfaces/data-rooms';
import RoomService from '../services/roomService';

export const ListRooms = () => {
    const [dataRoom, setDataRoom] = useState<Rooms[] | null>(null);
    const [dataRoomFilter, setDataRoomFilter] = useState<Rooms[] | null>(null);
    const [modal, setModal] = useState(false);
    const [room, setRoom] = useState<Rooms | null>(null);
    const [refresh, setRefresh] = useState<boolean | undefined>();
    const [inputText, setInputText] = useState('');

    const SearchHotel = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    useEffect(() => {
        getRooms();
    }, [refresh]);

    
    const getRooms = async () => {
        try {
            // Llamamos el servicio
            const result: ResultData = await RoomService.getRooms() as ResultData;
            
            // Asignamos el valor del resultado
            setDataRoom(result.data.rooms);
            setDataRoomFilter(result.data.rooms);
    
            return result;
        } catch (error) {
            console.log(error);
        }
    };

    // Búsqueda por correo, nombre, apellido o país
    const handleInputChange = (input: React.ChangeEvent<HTMLInputElement>) => {
        // limpiar arreglo
        setDataRoomFilter(null);
        var newArray: Rooms[] = [];
        const { value } = input.target;
        //Cambiar entrada a mayúsculas
        setInputText(value.toUpperCase());

        if (dataRoom && Array.isArray(dataRoom)) {
            dataRoom.map((dataRoom: Rooms, index: number) => {
                const numberString = dataRoom?.number.toString();
            
                if (
                    numberString?.toUpperCase().includes(value.toUpperCase()) ||
                    dataRoom?.type.toUpperCase().includes(value.toUpperCase()) ||
                    dataRoom?.price.toUpperCase().includes(value.toUpperCase()) ||
                    dataRoom?.hotel.name.toUpperCase().includes(value.toUpperCase())
                ) {
                    newArray.push(dataRoom);
                    setDataRoomFilter(newArray);
                }
                return dataRoom;
            });
        }
    };

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
        <div className="content">
            <Row>
                <Col md="12">
                    <Card>
                        <CardTitle className='title'>Listado de habitaciones</CardTitle>
                        <CardBody>
                            <Col md="12" className="">
                                <Table className="">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <form onSubmit={SearchHotel}>
                                                    <Row >
                                                        <Col md={6}>
                                                            <InputGroup className="no-border">
                                                                <Input
                                                                    placeholder="Buscar..."
                                                                    autoComplete="off"
                                                                    name="SearchHotel"
                                                                    value={inputText}
                                                                    onChange={handleInputChange}
                                                                />
                                                                <InputGroupText>
                                                                    <FontAwesomeIcon icon="search" />
                                                                </InputGroupText>
                                                                <Button color='primary'  onClick={() => formRoom()}>
                                                                    <FontAwesomeIcon icon="plus" /> Nueva habitación
                                                                </Button>
                                                            </InputGroup>
                                                        </Col>
                                                    </Row>
                                                </form>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <div style={{ overflow: 'auto' }}>
                                    <Table hover striped bordered className="borde-tabla">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Hotel</th>
                                                <th>Número</th>
                                                <th>Tipo</th>
                                                <th>Precio</th>
                                                <th>Reservada</th>
                                                <th>Estado</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dataRoomFilter && dataRoomFilter.length > 0 && dataRoomFilter.map((dataRes, index: number) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{dataRes.id}</td>
                                                        <td>{dataRes.hotel.name}</td>
                                                        <td>{dataRes.number}</td>
                                                        <td>{dataRes.type}</td>
                                                        <td>${dataRes.price}</td>
                                                        <td>{dataRes.reserved === true ? 'Reservada' : 'Libre'}</td>
                                                        <td>{dataRes.status === true ? 'Activa' : 'Inactiva'}</td>
                                                        <td style={{ textAlign: 'center', alignSelf: 'stretch' }}>
                                                            <Button title="Editar habitación" color="link" onClick={() => formRoom(dataRes)}>
                                                                <FontAwesomeIcon icon="edit" />
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <div>
                <Modal isOpen={modal} toggle={toggle} size="xl">
                    <FormRoom toggle={toggle} room={room} refreshList={refreshList} />
                </Modal>
            </div>
        </div>
    )
}
