import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import ListGroup from 'react-bootstrap/ListGroup'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import Calendar from '../Calendar/Calendar'
import AlertBlock from '../AlertBlock/AlertBlock'

import { Cog, Internet, Cofe, Socket, Cupboard, Lamps, Parking, Discount, Star } from '../svg.module'
import preview from '../../img/t4.jpg'
import preview2 from '../../img/t1.jpg'
import preview3 from '../../img/t2.jpg'
import preview4 from '../../img/t3.jpg'
import preview5 from '../../img/t4.jpg'


import './booking.css'



const hostelsData = [
    {
        name:'Отель "ГРАНДВЕЙ Чайковский"',
        imgs:[preview, preview2, preview3, preview4, preview5],
        stars:3,
        city:'Сочи',
        area:'Новый Сочи',
        distance_to_center:1.3,
        distance_other:1,
        services: [<Internet/>, <Cofe/>, <Socket/>, <Cupboard/>, <Lamps/>, <Parking/>],
        last_booking:'04.07.2022',
        price:7800,
        discount:34,
        past_sentence:470360,
        yet_sentence:320460,
        sentence_days:44,
        cashback:30,
        disc:'Уютный новый отель 3* в самом центре города Сочи. Вид из номера - на реку Сочи. Имеется собственная парковка. Стойка регистрации гостей работает круглосуточно.',
        review:[
            {
                mark:4,
                ava:'',
                author:'Никита Кодацкий',
                text:'Хороший отель, удобное местоположение, близко и море и парки и вокзал, в номерах чисто, персонал доброжелательный, единственный минус - плохая шумоизоляция',
                date:'01.07.2022'
            },
            {
                mark:3,
                ava:'',
                author:'Муратов Илимдар',
                text:'На сайте было написано, что в трехместном номере три отдельные кровати, но в итоге две кровати и диван( разочарованы. И персонал не пошёл навстречу ',
                date:'01.07.2022'
            },
        ]
    },
    {
        name:'Отель "Экодом Сочи"',
        imgs:[preview, preview3, preview2, preview5, preview4],
        stars:5,
        city:'Сочи',
        area:'Новый Сочи',
        distance_to_center:3.5,
        distance_other:0.8,
        services: [<Internet/>, <Socket/>, <Cofe/>, <Lamps/>, <Parking/>],
        last_booking:'05.07.2022',
        price:2300,
        discount:34,
        past_sentence: 488400,
        yet_sentence: 400400,
        sentence_days:44,
        cashback:30,
        disc:'Комфортабельный обновленный отель расположен в Центральном районе г. Сочи, неподалеку от президентской резиденции. На уютной территории отеля расположено кафе, где гости могут выбрать блюда национальной, русской и европейской кухни. Полная реновация отеля завершилась в начале 2019 года. Сейчас Экодом Сочи представляет собой современный новый отель и располагает номерами с кофе-машинами и рабочими зонами, что особенно важно во время бизнес-путешествия.',
        review:[
            {
                mark:5,
                ava:'',
                author:'Никита Кодацкий',
                text:'Гостевой дом полностью соответствует своей небольшой стоимости. Номера чистые и опрятные. Но в ванной не хватало крючков. Очень понравилось гостеприимство хозяйки! Просто на высшем уровне! Доброжелательная и радушная! До моря достаточно близко. С горки спуститься и все.  В шаговой доступности продуктовые магазины, столовые, ресторан. До центра на машине 5 мин.',
                date:'01.07.2022'
            }
        ]
    },
]


const Booking = () => {
    
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <section className='Booking mt-3 mb-4'>
            <Container>
                <Row>
                    <AlertBlock 
                        text={'На нашем сайте доступен 71% вариантов жилья по этому направлению на выбранные вами даты.'}
                        subtext={'Если у вас гибкие планы, попробуйте изменить даты, чтобы увидеть больше вариантов.'} 
                    />

                    <h4 className='search_сity_header'>Новый Сочи, Сочи</h4>
                    <p className='searching_results'>Мы подобрали для Вас <b>{hostelsData.length}</b> вариантов</p>

                    <div className='cards_wrapper'>
                        {
                            hostelsData.map((card, key) => { return (
                                <Card key={key}>
                                    <Row>
                                        <Col sm={4}>
                                            {
                                                Array.from({length: 2}).map((_, key) => { return (
                                                    <Carousel key={key}>
                                                        {
                                                            card.imgs.map((img, i) => { return (
                                                                <Carousel.Item key={i}>
                                                                    <Card.Img variant="top" src={img} />
                                                                </Carousel.Item>
                                                            )})
                                                        }
                                                    </Carousel>
                                                )})
                                            }
                                        </Col>
                                        <Col sm={8}>
                                            <Card.Body>
                                                <Card.Title>
                                                    <div className='card_name'>{card.name}</div>
                                                    <div className='card_stars'>{card.stars}<Star/></div>
                                                </Card.Title>
                                                <Card.Text className='card_details'>
                                                    <span>{card.city}</span>,
                                                    <span>{card.area}</span>
                                                    <span>Центр ~ {card.distance_to_center} км</span> 
                                                    <span>Море ~ {card.distance_other} км</span> 
                                                </Card.Text>
                                                <Row className='card_services'>
                                                    {card.services.map((ico, i) => <Col key={i}>{ico}</Col>)}
                                                </Row>
                                            </Card.Body>
                                            <ListGroup className="list-group-flush">
                                                <ListGroup.Item className='card_last_booking'>
                                                    Последнее бронирование {card.last_booking}
                                                </ListGroup.Item>
                                                <ListGroup.Item className='card_price'>
                                                    <b>{card.price}  ₽</b> за сутки
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <span className='card_discount'>-{card.discount}%</span> 
                                                    <span className='card_past_sentence'>{card.past_sentence} ₽</span><br/>
                                                    <span className='card_yet_sentence'><b>{card.yet_sentence} ₽</b> за {card.sentence_days} ночи</span>
                                                </ListGroup.Item>
                                                <ListGroup.Item className='cashback_wrapp'>
                                                    <Discount/>
                                                    <span><b>Вернём {card.cashback}%</b> на следующую поездку!</span>
                                                </ListGroup.Item>
                                                <ListGroup.Item>


                                                <Tabs className="mb-3" defaultActiveKey="profile" id="uncontrolled-tab-example">
                                                    <Tab eventKey="disc" title="Описание">
                                                        {card.disc}
                                                    </Tab>
                                                    <Tab eventKey="review" title={`Отзывы ${card.review.length}`}>
                                                        <Carousel key={key} variant="dark">
                                                            {
                                                                card.review.map((rws, i) => { return (
                                                                    <Carousel.Item key={i}>
                                                                        <div className='review_bg' src={preview}></div>
                                                                        <Carousel.Caption>
                                                                            <h3>{rws.author}</h3>
                                                                            <h3>Оценка: {rws.mark}</h3>
                                                                            <p>{rws.text}</p>
                                                                            <span>{rws.date}</span>
                                                                        </Carousel.Caption>
                                                                    </Carousel.Item>
                                                                )})
                                                            }
                                                        </Carousel>
                                                    </Tab>
                                                </Tabs>


                                                </ListGroup.Item>
                                            </ListGroup>
                                            <Card.Body className='btn_row'>
                                                <Button variant="outline-primary">Подробней</Button>
                                                <Button variant="primary">Бронирую!</Button>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            )})
                        }
                    </div>
                </Row>
            </Container>




            <div className='booking_filter_btn'>
                <Button variant="primary" onClick={handleShow} title='Поисковые фильтры'>
                    <Cog/>
                </Button>
            </div>

            <Offcanvas show={show} onHide={handleClose} backdrop="static" id='Offcanvas'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title><b>Меню</b></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Offcanvas.Title>Искать</Offcanvas.Title>
                    
                    <Calendar show={show} monthsCount={1} directionCalendar='vertical' />
                    Номер 1<br/>
                    Взрослые - 0 +<br/>
                    Дети - 0 +<br/><br/>

                    Добавить номер +<br/>

                    Едуе питомцем<br/>
                    Еду по работе<br/><br/>

                    Применить


                
                </Offcanvas.Body>
                <Offcanvas.Body>
                    <Offcanvas.Title>Фильтры</Offcanvas.Title>
                    Тип жилья <br/>
                    Количество комнат <br/>
                    Удаленность от центра <br/>
                    Удаленность от моря <br/>
                    Удобства персональные <br/>
                    Особенности жилья <br/>
                    Места рядом <br/>
                </Offcanvas.Body>
            </Offcanvas>

        </section>
    )
}
export default Booking