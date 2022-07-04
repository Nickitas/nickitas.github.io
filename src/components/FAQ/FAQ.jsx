import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import { Send } from '../svg.module'
import './faq.css'

const faqDate = [
    {
        text:'Наша платформа бронирования разработана для того, чтобы помочь каждому более быстро и своевременно найти жилье на различный период для различных целей. Мы часто встречаемся с клиентами и обсуждаем все интересующие их вопросы при брнировании или аренде жилья. Но вы всегда можете не ждать встречи и задать интересующий Вас вопрос прямо сейчас!',
        mail:'hold_rnd@gmail.com',
        phone:'+7 (967) 318-03-09',
        plase:'344002, г. Ростов-на-Дону, ул. Тургеневская, 80',

        li:[
            'менее 12 часов ответа на Ваш вопрос',
            'ответственный подход к составлению ответа на интересующую Вас проблему или аспект',
            'кратко изложенный план действий в электронном письме'
        ],

        about:'Никита Кодацкий вносит большой вклад в продвижение и развитие платформы бронирования Hold.com.  На сегодняшний день опубликовано свыше 260 его печатных работ, в том числе 30 монографий, 180 статей, 5 авторских свидетельств, дипломов, патентов и лицензий и 45 учебно-методических пособий. Никита активно участвует и в расселении новых клиентов по всему Ростову-на-Дону.'


    }
]

const FAQ = () => {
    
    const [surname, setSurname] = useState('Кодацкий')
    const [name, setName] = useState('Никита')
    const [lastname, setLastname] = useState('Максимович')
    const [mail, setMail] = useState('nickitadatsky@gmail.com')
    const [text, setText] = useState('')
    
    return (
        <section className='FAQ mt-4 mb-4'>
             <Container>
                <Row>
                    <Col sm={8}>
                        <h2>Мы всегда на связи</h2>
                        <p>{faqDate.map(e => e.text)}</p>
                        <p><b>Электронная почта</b>: {faqDate.map(e => e.mail)}</p>
                        <p><b>Телефон</b>: {faqDate.map(e => e.phone)}</p>
                        <p><b>Адрес</b>: {faqDate.map(e => e.plase)}</p>

                        <h3>Что Вы получаете, задавая вопрос?</h3>
                        <ul>
                            {
                                faqDate.map(e => e.li.map((item, key) => <li key={key}>{item}</li>))
                            }
                        </ul>

                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicSurname">
                                <Form.Control type="text" placeholder="Введите Вашу фамилию..." value={surname} onChange={() => setSurname(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Control type="text" placeholder="Введите Ваше имя..." value={name} onChange={() => setName(e.target.value)}  />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicLastname">
                                <Form.Control type="text" placeholder="Введите Ваше отчество..." value={lastname} onChange={() => setLastname(e.target.value)}  />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Сверьте Вашу почту</Form.Label>
                                <Form.Control type="email" placeholder={mail} onChange={() => setMail(e.target.value)}  />
                                <Form.Text className="text-muted">
                                    Мы никогда не будем делиться вашей электронной почтой с кем-либо еще.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                                >
                                <Form.Label>Как мы можем Вам помочь?</Form.Label>
                                <Form.Control as="textarea" rows={4} onChange={() => setText(e.target.value)}  />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={() => {




                            }}>
                                Отправить{' '}<Send/>
                            </Button>
                        </Form>

             
                    </Col>
                    <Col sm={4}>
                        <Stack gap={3}>
                            <div className='owner-img'>
                                <h6>Кодацкий Никита Максимович</h6>
                            </div>
                            <div className='about_owner'>
                                <h3>Обо мне</h3>
                                {
                                    faqDate.map((e, i) => <p key={i}>{e.about}</p>)
                                }
                            </div>
                            <Link to='/booking'>
                                <Button variant="primary" size="lg">Начать!</Button>
                            </Link>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default FAQ