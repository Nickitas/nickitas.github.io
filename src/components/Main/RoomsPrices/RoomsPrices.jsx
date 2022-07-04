import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { ArrowRight, ArrowLeft, RightArrowAlt } from '../../svg.module'
import slide1 from '../../../img/t2.jpg'
import slide2 from '../../../img/t1.jpg'
import slide3 from '../../../img/t3.jpg'
import slide4 from '../../../img/t4.jpg'
import './rooms_prices.css'

const homesData = [
    {
        img:slide1,
        title:'Место в 6-ти местном номере',
        prices:6000,
        text:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        updated:'1'
    },
    {
        img:slide4,
        title:'Место в 10-ти местном номере',
        prices:3000,
        text:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        updated:'1'
    },
    {
        img:slide3,
        title:'Двухместный номер',
        prices:15000,
        text:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        updated:'1'
    },
    {
        img:slide4,
        title:'Место в 2-ти местном номере',
        prices:11000,
        text:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        updated:'1'
    },
    {
        img:slide3,
        title:'Двухместный номер',
        prices:15000,
        text:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        updated:'1'
    },
    {
        img:slide2,
        title:'Люкс номер',
        prices:30000,
        text:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        updated:'1'
    },
]


const RoomsPrices = () => {

    const step = 2
    const [cardCount, setCardCount] = useState(0)
    const cards = homesData.filter((_, i) => cardCount <= i && i < cardCount + step)

    return (
        <section className='mt-4 mb-4' id='rooms_prices'>
             <Container>
                <h2><Badge bg="secondary">Номера и цены</Badge></h2>
                <CardGroup>
                    {
                        cards.map((item, key) => { return (
                            <Card key={key} style={{width:'100%'}}>
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.text}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Стоимость за месяц: <b>{item.prices} руб.</b></small><br/>
                                    <small className="text-muted">Последнее обновление <Badge pill bg="primary">{item.updated} минут назад</Badge></small><br/>
                                    <Button className='mt-3' variant="primary" size="sm">посмотреть{' '}<RightArrowAlt/></Button>
                                </Card.Footer>
                            </Card>
                        )})
                    }
                </CardGroup>
                <Row className='mt-4'>
                    <Col>
                        <Stack gap={2} className="col-md-5 mx-auto">
                            <Button variant="primary" onClick={() => setCardCount(cardCount-step)} disabled={cardCount<1?true:false}><ArrowLeft/>{' '}Назад</Button>
                        </Stack>
                    </Col>
                    <Col>
                        <Stack gap={2} className="col-md-5 mx-auto">
                            <Button className='col-md-12' variant="primary" onClick={() => setCardCount(cardCount+step)} disabled={cardCount==4?true:false}>Веред{' '}<ArrowRight/></Button>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default RoomsPrices