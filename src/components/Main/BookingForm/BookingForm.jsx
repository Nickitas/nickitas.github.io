import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Alert from 'react-bootstrap/Alert'
import { CalendarIcon, CalendarCheck, UserPluse, UserSolid, Trash, UserCheck, Confused } from '../../svg.module'
import Calendar from '../../Calendar/Calendar'
import './booking_form.css'


const personOption = [
    '1 Взрослый',
    '2 Взрослых',
    '3 Взрослых',
    '4 Взрослых',
    '5 Взрослых',
    '6 Взрослых',
    '7 Взрослых',
    '8 Взрослых',
    '9 Взрослых',
    '10 Взрослых'
]
const childrenOption = [
    '1 ребенок',
    '2 ребенка',
    '3 ребенка',
    '4 ребенка',
    '5 детей',
    '6 детей',
]


const BookingForm = () => {

    const [show, setShow] = useState(false)
    const [count, setCount] = useState(1)

    return (
        <section className='BookingForm mt-4 mb-4' id='booking_form'>
            <Container>
                <h2><Badge bg="secondary">Бронирование</Badge></h2>
                <Form>
                    <h3>Найдите жилье, подходящее именно Вам</h3>
                    <hr/>

                    <Row className="justify-content-center">
                        <Button className='mb-2' variant="primary" size="sm" onClick={() => setShow(e => !e)}>
                            {show?<CalendarCheck/>:<CalendarIcon/>}{' '}
                            {show?'Закрыть':'Открыть'} календарь
                        </Button>
                    </Row>

                    {show&&<Calendar monthsCount={3} directionCalendar='horizontal' />}
                    <hr/>

                    <Form.Label htmlFor="person">Гости в номере:</Form.Label>
                    {
                        count>0?
                        <>
                        {[...new Array(count)].map((_, key) => { return (
                            <Row key={key}>
                                <Col sm={1}>
                                    <b>№ {key+1}</b>
                                </Col>
                                <Col sm={5}>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="person"><UserSolid/></InputGroup.Text>
                                        <Form.Select id="person">
                                            {
                                                personOption.map((item, key) => <option key={key}>{item}</option>)
                                            }
                                        </Form.Select>
                                    </InputGroup>
                                </Col>
                                <Col sm={5}>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="children"><UserPluse/></InputGroup.Text>
                                        <Form.Select id="children">
                                            {
                                                childrenOption.map((item, key) => <option key={key}>{item}</option>)
                                            }
                                        </Form.Select>
                                    </InputGroup>
                                </Col>
                                <Col sm={1}>
                                    <div className='delete_btn' onClick={() => setCount(count-1)}>
                                        <Trash/>
                                    </div>
                                </Col>
                            </Row>
                        )})}
                        </>
                        :
                        <Alert variant='danger'>
                            <Confused/>{' '}
                            Ни одного номера <b>не было добавлено</b>! Добавьте номер.
                        </Alert>
                    }
                    <Row className="justify-content-center">
                        {
                            count<10?
                            <Button variant="primary" size="sm" onClick={() => setCount(count+1)}>
                                <UserCheck/>{' '}
                                Добавить еще <b>один</b> номер
                            </Button>
                            :
                            <Alert variant='danger'>
                                <Confused/>{' '}
                                Извините, Вы <b>не можете добавить</b> еще больше номеров. Максимум достигнут.
                            </Alert>
                        }
                    </Row>
                    <hr/>
                    <Form.Label htmlFor="checkbox">Добавьте информацию о себе:</Form.Label>
                    <Row className='mt-2 d-flex justify-content-center align-items-center'>
                        <Form.Group className="mb-1" controlId="travels">
                            <Form.Check type="checkbox" label="Я путешествую по работе" />
                        </Form.Group>
                    </Row>
                    <Row className='mt-1 d-flex justify-content-center align-items-center'>
                        <Form.Group className="mb-1" controlId="animal">
                            <Form.Check type="checkbox" label="Буду с питомцем (кошка/собака)" />
                        </Form.Group>
                    </Row>
                    <hr/>
                    <Row className="justify-content-md-center">
                        <Link to='booking' style={{textAlign:'center'}}>
                            <Button variant="primary" size="lg">
                                Подобрать!
                            </Button>
                        </Link>
                    </Row>
                </Form>
            </Container>
        </section>
    )
}
export default BookingForm