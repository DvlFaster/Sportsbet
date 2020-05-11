import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import {NavLink as RRNavLink} from 'react-router-dom';

const HeaderNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="dark" dark expand="md">
            <div className="container">
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink
                                tag={RRNavLink}
                                exact
                                to="/"
                                activeClassName="active"
                            ><h1>Sportsbet.io</h1></NavLink>
                        </NavItem>
                       {/* <NavItem>
                            <NavLink
                                tag={RRNavLink}
                                to="/gallery"
                                activeClassName="active"
                            >Gallery</NavLink>
                        </NavItem>*/}
                    </Nav>
                </Collapse>
                <select className="d-flex align-items-lg-end justify-content-lg-end">
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="ja">日本語</option>
                    <option value="pt">Português</option>
                    <option value="ru">Русский</option>
                    <option value="tr">Türkçe</option>
                    <option value="de">Deutsch</option>
                </select>

            </div>

        </Navbar>

    );
}

export default HeaderNavbar;
