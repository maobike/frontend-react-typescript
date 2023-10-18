import React from 'react';

import { NavLink } from 'react-router-dom';
import { AppRouter } from '../../../router/AppRouter';

import {
    Nav,
} from 'reactstrap';

function NavBar() {
    return (
        <>
            <div className="sidebar">
                <ul>
                    <Nav className="me-auto" navbar>

                        <hr className='hr-menu'></hr>

                        <span className='title-menus'>Menú agencia</span>
                        <NavLink
                            to="/"
                            className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                        >
                            Hoteles
                        </NavLink>
                        <NavLink
                            to="rooms"
                            className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                        >
                            Habitaciones
                        </NavLink>
                        <NavLink
                            to="reservations"
                            className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                        >
                            Reservaciones
                        </NavLink>

                        <hr className='hr-menu'></hr>

                        <span className='title-menus'>Menú viajeros</span>
                        <NavLink
                            to="search/rooms"
                            className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                        >
                            Búsqueda
                        </NavLink>
                    </Nav>
                </ul>
            </div>
            <div className='app-router'>
                <AppRouter />
            </div>
        </>
    );
}

export default NavBar;