import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Badge from 'react-bootstrap/Badge'
import { UserSolid, Lock, Mail, Phone } from '../svg.module'
import './authreg.css'

const AuthReg = () => {

    const [toggle, setToggle] = useState(true)
    const [err, setErr] = useState('')

    const [login, setLogin] = useState()
    const [password, setPassword] = useState()

    const [name, setName] = useState()
    const [mail, setMail] = useState()
    const [phone, setPhone] = useState()


    return (
        <section className='AuthReg mb-4'>
            <Container md="auto">
                {
                    toggle?
                    <div className='Auth'>
                        <h2><Badge bg="secondary">Авторизация</Badge></h2>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="login"><Mail/></InputGroup.Text>
                            <Form.Control
                            autoFocus={true}
                            placeholder="Логин"
                            aria-label="login"
                            aria-describedby="login"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="password"><Lock/></InputGroup.Text>
                            <Form.Control
                            placeholder="Пароль"
                            type="password"
                            aria-label="password"
                            aria-describedby="password"
                            />
                        </InputGroup>
                        <Button variant="link" onClick={() => {

                            alert('Открыть модалку для ввода кода пришедшего на почту')

                        }}>Получить пароль</Button>
                        <p>Еще нет учетной записи? <a className="link-primary" onClick={() => {setToggle(false)}}>Создать</a></p>
                        <Button variant="primary" onClick={() => {





                        }}>Войти</Button>
                    </div>
                    :
                    <div className='Reg'>
                        <h2><Badge bg="secondary">Регистрация</Badge></h2>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="name"><UserSolid/></InputGroup.Text>
                            <Form.Control
                            autoFocus={true}
                            placeholder="Ваше имя"
                            aria-label="name"
                            aria-describedby="name"
                            value=''
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="login"><Mail/></InputGroup.Text>
                            <Form.Control
                            autoFocus={true}
                            placeholder="Эл. почта"
                            aria-label="login"
                            aria-describedby="login"
                            value=''
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inn"><Phone/></InputGroup.Text>
                            <Form.Control
                            placeholder="Телефон"
                            type="tel"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            aria-label="inn"
                            aria-describedby="inn"
                            value=''
                            />
                        </InputGroup>
                       
                        <OverlayTrigger placement='bottom' overlay={
                            <Tooltip id={`tooltip-bottom`}>
                                Мы не отправляем рекламные сообщения. Ваш номер и почта нужны для того, чтобы оперативно получать информацию о бронировании
                            </Tooltip>
                        }>
                            <Button variant="link" onClick={true}>Зачем указывать номер телефона и электронную почту?</Button>
                        </OverlayTrigger>
                        <p>Уже есть учетная запись? <a className="link-primary" onClick={() => {setToggle(true)}}>Войти</a></p>
                        <Button variant="primary" onClick={() => {




                        }}>Зарегестрироваться</Button>
                    </div>
                }
                <hr/>
                <p className='adoption-text'>Входя в аккаунт или создавая новый, вы соглашаетесь с нашими <Link className="link-primary" to='/rules'>Правилами и условиями</Link> и <Link className="link-primary" to='/politic'>Положением о конфиденциальности</Link></p>
            </Container>
        </section>
    )
}
export default AuthReg