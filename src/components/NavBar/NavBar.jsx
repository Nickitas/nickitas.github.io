import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'


import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import { User, Enter, EngFlag, RusFlag } from '../svg.module'
import { translation } from '../translation.module'
import logo from '../../logo.svg'
import './navbar.css'

const NavBar = ({lengToggle, setLengToggle}) => {


    let location = useLocation()



    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand onClick={() => { window.scrollTo(0, 0)}}>
                    <Link to='/'>
                        <img className="d-inline-block align-top" alt="logo"
                            src={logo}
                            width="30"
                            height="30"
                        /><b>HOLD</b></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav">
                    {
                        location.pathname!='/profile'?
                        <Nav className="me-auto">
                            <Nav.Link href={'#booking_form'}>
                                <Button variant="outline-primary" size="sm">
                                    {translation.map(e => lengToggle?e.rus.booking:e.eng.booking)}
                                </Button>
                            </Nav.Link>
                            <Nav.Link href="#rooms_prices">
                                {translation.map(e => lengToggle?e.rus.rooms_and_prices:e.eng.rooms_and_prices)}
                            </Nav.Link>
                            <Nav.Link href="#services">
                                {translation.map(e => lengToggle?e.rus.services:e.eng.services)}
                            </Nav.Link>
                            <Nav.Link href="#contacts">
                                {translation.map(e => lengToggle?e.rus.contacts:e.eng.contacts)}
                            </Nav.Link>
                            <NavDropdown id="dropdown-autoclose-outside" autoClose="outside" title={translation.map(e => lengToggle?e.rus.information:e.eng.information)}>
                                <Link to='/reviews'>
                                    {translation.map(e => lengToggle?e.rus.reviews:e.eng.reviews)}
                                </Link>
                                <Link to='/faq'>
                                    {translation.map(e => lengToggle?e.rus.faq:e.eng.faq)}
                                </Link>
                                <Link to='/rules'>
                                    {translation.map(e => lengToggle?e.rus.terms_and_conditions:e.eng.terms_and_conditions)}
                                </Link>
                                <Link to='/politic'>
                                    {translation.map(e => lengToggle?e.rus.privacy_statement:e.eng.privacy_statement)}
                                </Link>
                            </NavDropdown>
                        </Nav>
                        :
                        <Nav className="me-auto">
                           <Nav.Link href=''>
                                <Button variant="outline-primary" size="sm">
                                    Панель
                                </Button>
                            </Nav.Link>
                           <Nav.Link href=''>
                                Календарь
                            </Nav.Link>
                           <Nav.Link href=''>
                                Мои объекты
                            </Nav.Link>
                           <Nav.Link href=''>
                                Клиенты
                            </Nav.Link>
                            <NavDropdown id="basic-nav-dropdown" title='Настройки'>
                                <Link to=''>
                                   Редактировать объекты
                                </Link>
                                <Link to=''>
                                    Изменить информацию
                                </Link>
                                <Link to=''>
                                    Аналитика
                                </Link>
                                <Link to=''>
                                    Мой аккаунт
                                </Link>
                            </NavDropdown>
                        </Nav>
                    }

                    <Nav>
                        <Nav.Item title={translation.map(e => lengToggle?e.rus.change_language:e.eng.change_language)} onClick={() => setLengToggle(e => !e)}>
                            {lengToggle?<RusFlag/>:<EngFlag/>}
                        </Nav.Item>
                        <Nav.Item title={translation.map(e => lengToggle?e.rus.profile:e.eng.profile)}>
                            <Link to='/profile'><User/></Link>
                        </Nav.Item>
                        <Nav.Item className='enter-btn'>
                            <Link to='/auth'>
                                <Enter/>
                                {translation.map(e => lengToggle?e.rus.exit:e.eng.exit)}
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar