import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import { Star, TV, Kitchen, Fridge, MicroWave, Plate, Tableware, Table, Library, Shower, Toilet, Cupboard, Socket, Lamps, Parking, Internet, Cofe } from '../../svg.module'
import './services.css'

const servicesData = [
    {
        ico:<TV/>,
        text:'Общая гостиная с телевизором',
        mark:5
    },
    {
        ico:<Kitchen/>,
        text:'Общая кухонная зона',
        mark:3
    },
    {
        ico:<Fridge/>,
        text:'Холодильник в зоне общего пользования',
        mark:3
    },
    {
        ico:<MicroWave/>,
        text:'Микроволновая печь в зоне общего пользования',
        mark:1
    },
    {
        ico:<Plate/>,
        text:'Электрическая плита в зоне общего пользования',
        mark:4
    },
    {
        ico:<Tableware/>,
        text:'Посуда в зоне общего пользования',
        mark:2
    },
    {
        ico:<Table/>,
        text:'Обеденный стол в зоне общего пользования',
        mark:5
    },
    {
        ico:<Library/>,
        text:'Библиотека',
        mark:5
    },
    {
        ico:<Shower/>,
        text:'Душевые в зоне общего пользования',
        mark:5
    },
    {
        ico:<Toilet/>,
        text:'Санузлы в зоне общего пользования',
        mark:4
    },
    {
        ico:<Cupboard/>,
        text:'Индивидуальные шкафчики для хранения вещей',
        mark:4
    },
    {
        ico:<Socket/>,
        text:'Индивидуальные прикроватные розетки',
        mark:5
    },
    {
        ico:<Lamps/>,
        text:'Индивидуальные прикроватные светильники',
        mark:5
    },
    {
        ico:<Parking/>,
        text:'Бесплатная парковка для автомобилей',
        mark:5
    },
    {
        ico:<Internet/>,
        text:'Бесплатный Wi-Fi доступ к сети Интернет',
        mark:3
    },
    {
        ico:<Cofe/>,
        text:'Летняя веранда',
        mark:3
    }
]

const Services = () => {

    return (
        <section className='Services mt-4 mb-4' id='services'>
             <Container>
                <h2><Badge bg="secondary">Услуги</Badge></h2>
                <Row className='mt-4'>
                    {
                        servicesData.map((item, key) => { return (
                            <Col className='cards-wrapper' key={key}>
                                <Card className="mb-2" border="primary" text='#000'>
                                    <Card.Header className='d-flex justify-content-between align-items-center'>
                                        {item.ico}
                                        <Row>
                                            {
                                                [...new Array(item.mark)].map((_, i) => <Col className='star_col' key={i}><Star/></Col>)
                                            }
                                        </Row>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Text>{item.text}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )})
                    }
                </Row>
            </Container>
        </section>
    )
}
export default Services