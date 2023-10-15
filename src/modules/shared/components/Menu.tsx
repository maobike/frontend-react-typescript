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
                        <hr></hr>
                        <NavLink
                            to="other"
                            className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                        >
                            Búsqueda
                        </NavLink>
                    </Nav>
                </ul>
            </div>
            <div>
                <AppRouter />
            </div>
        </>
    );
}

export default NavBar;