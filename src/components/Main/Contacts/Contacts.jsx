import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import Alert from 'react-bootstrap/Alert'
import { Map, GPS, Phone, Mail, Copy, Happy } from '../../svg.module'
import './contacts.css'

const Contacts = () => {

    const [show, setShow] = useState(false)
    setTimeout(() => {
        setShow(false)
    }, 5000)
    const [copyText, setCopyText] = useState()

    return (
        <section className='Contacts mt-4 mb-4' id='contacts'>
            <Container>
                <h2><Badge bg="secondary">Контакты</Badge></h2>
                <Row className='mb-3 d-flex justify-content-between align-items-end'>
                    <Col lg={12} xl={6}>
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A74d1196fc100450036fc407d6605c4bd1020f078dd761649d6ce521febf0958a&amp;source=constructor" width="100%" height="608" frameBorder="0"></iframe>
                    </Col>
                    <Col lg={12} xl={6}>
                        <div className='rostov_img mb-4'>
                            <h1>HOLD.com™ - платформа бронирования в Вашем городе!</h1>
                        </div>
                        <div className='line'>
                            <p><Phone/>{' '}<a href='tel:89673180309' id='phone'>+7 (967) 318-03-09</a></p>
                            <div className='copy_btn' onClick={() => {
                                setCopyText(document.getElementById('phone').innerHTML )
                                navigator.clipboard.writeText(copyText)
                                setShow(true)
                            }}><Copy/></div>
                        </div>
                        <div className='line'>
                            <p><Mail/>{' '}<a href='mail:hold_rnd@gmail.com' id='mail'>hold_rnd@gmail.com</a></p>
                            <div className='copy_btn' onClick={() => {
                                setCopyText(document.getElementById('mail').innerHTML)
                                navigator.clipboard.writeText(copyText)
                                setShow(true)
                            }}><Copy/></div>
                        </div>
                        <div className='line'>
                            <p><Map/>{' '}<span id='map'>Адрес: 344002, г. Ростов-на-Дону, ул. Тургеневская, 80</span></p>
                            <div className='copy_btn' onClick={() => {
                                setCopyText(document.getElementById('map').innerHTML) 
                                navigator.clipboard.writeText(copyText)
                                setShow(true)
                            }}><Copy/></div>
                        </div>
                        <div className='line'>
                            <p><GPS/>{' '}<span  id='gps'>GPS-координаты: 47.218014, 39.720223</span></p>
                            <div className='copy_btn' onClick={() => {
                                setCopyText(document.getElementById('gps').innerHTML)
                                navigator.clipboard.writeText(copyText)
                                setShow(true)
                            }}><Copy/></div>
                        </div>
                    </Col>
                </Row>
            </Container>
            
            {show&&
                <div className='fixed-block'>
                    <Alert variant='success'>
                        <Happy/>{' '}Текст <b>{copyText}</b> скопирован!
                    </Alert>
                </div>
            }

        </section>
    )
}
export default Contacts