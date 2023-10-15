import React, { useState, useEffect } from 'react';
import '../../../assets/font-awesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Row, Col, Table, CardBody, InputGroup, Input, InputGroupText, Modal } from 'reactstrap';

import HotelService from '../services/HotelService';
import { FormHotel } from './FormHotel';
import { Hotels, ResultData} from '../../../interfaces/data-hotels';

export const ListHotels = () => {
    const [dataHotel, setDataHotel] = useState<Hotels[] | null>(null);
    const [dataHotelFilter, setDataHotelFilter] = useState<Hotels[] | null>(null);
    const [modal, setModal] = useState(false);
    const [hotel, setHotel] = useState<Hotels | null>(null);
    const [refresh, setRefresh] = useState<boolean | undefined>();
    const [inputText, setInputText] = useState('');

    const SearchHotel = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    useEffect(() => {
        getHotels();
    }, [refresh]);

    
    const getHotels = async () => {
        try {
            // Llamamos el servicio
            const result: ResultData = await HotelService.getHotels() as ResultData;
            
            // Asignamos el valor del resultado
            setDataHotel(result.data.hotels);
            setDataHotelFilter(result.data.hotels);
    
            return result;
        } catch (error) {
            console.log(error);
        }
    };

    // Búsqueda por correo, nombre, apellido o país
    const handleInputChange = (input: React.ChangeEvent<HTMLInputElement>) => {
        // limpiar arreglo
        setDataHotelFilter(null);
        var newArray: Hotels[] = [];
        const { value } = input.target;
        //Cambiar entrada a mayúsculas
        setInputText(value.toUpperCase());

        if (dataHotel && Array.isArray(dataHotel)) {
            dataHotel.map((dataHotel: Hotels, index: number) => {
                if (
                    dataHotel?.name.toUpperCase().includes(value.toUpperCase()) ||
                    dataHotel?.email.toUpperCase().includes(value.toUpperCase()) ||
                    dataHotel?.street.toUpperCase().includes(value.toUpperCase()) ||
                    dataHotel?.phone.toUpperCase().includes(value.toUpperCase()) ||
                    dataHotel?.country.toUpperCase().includes(value.toUpperCase()) ||
                    dataHotel?.city.toUpperCase().includes(value.toUpperCase())
                ) {
                    newArray.push(dataHotel);
                    setDataHotelFilter(newArray);
                }
                return dataHotel;
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
    const formHotel = (hotel?: Hotels) => {
        if (hotel) {
            setHotel(hotel);
        } else {
            setHotel(null);
        }
        toggle();
    };

    return (
        <div className="content">
            <Row>
                <Col md="12">
                    <Card>
                        <CardBody>
                            <Col md="12" className="">
                                <Table className="">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <form onSubmit={SearchHotel}>
                                                    <Row >
                                                        <Col md={4}>
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
                                                                <Button color='primary'  onClick={() => formHotel()}>
                                                                    <FontAwesomeIcon icon="plus" /> Nuevo Hotel
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
                                                <th>Nombre</th>
                                                <th>Email</th>
                                                <th>Dirección</th>
                                                <th>Teléfono</th>
                                                <th>País</th>
                                                <th>Ciudad</th>
                                                <th>Estatus</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dataHotelFilter && dataHotelFilter.length > 0 && dataHotelFilter.map((dataRes, index: number) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{dataRes.id}</td>
                                                        <td>{dataRes.name}</td>
                                                        <td>{dataRes.email}</td>
                                                        <td>{dataRes.street}</td>
                                                        <td>{dataRes.phone}</td>
                                                        <td>{dataRes.country}</td>
                                                        <td>{dataRes.city}</td>
                                                        <td>{dataRes.status === true ? 'Activo' : 'Inactivo'}</td>
                                                        <td style={{ textAlign: 'center', alignSelf: 'stretch' }}>
                                                            <Button title="Editar hotel" color="link" onClick={() => formHotel(dataRes)}>
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
                    <FormHotel toggle={toggle} hotel={hotel} refreshList={refreshList}></FormHotel>
                </Modal>
            </div>
        </div>
    )
}
