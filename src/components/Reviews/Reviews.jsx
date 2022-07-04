import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { SmileHome, SmileFase, SmileWink, Star, UserSolid } from '../svg.module'
import ReviewsModal from './ReviewsModal/ReviewsModal'
import './reviews.css'

const icons = [
    {
        count:1000,
        ico:<SmileHome/>
    },
    {
        count:1000,
        ico:<SmileFase/>
    },
    {
        count:1000,
        ico:<SmileWink/>
    }
]

const reviewsData = [
    {
        id:1,
        name:'Стильные апартаменты в историческом центре Липецка',
        place:'Липецк, Россия',
        mark:9.7,
        comment:'Очень удобные и стильные апартаменты. Есть все необходимое как на кухне, так и ванной комнате. Расположение тоже удобное. Парковка прямо под окном. Магазины в пешей доступности. Хозяйка очень гостеприимная. Обязательно вернёмся ещё!',
        date:'28 июня 2022',
        person:'IrinAlexeevna'
    },
    {
        id:2,
        name:'Стильные апартаменты в историческом центре Липецка',
        place:'Липецк, Россия',
        mark:4,
        comment:'Очень удобные и стильные апартаменты. Есть все необходимое как на кухне, так и ванной комнате. Расположение тоже удобное. Парковка прямо под окном. Магазины в пешей доступности. Хозяйка очень гостеприимная. Обязательно вернёмся ещё!',
        date:'28 июня 2022',
        person:'IrinAlexeevna'
    },
    {
        id:3,
        name:'Стильные апартаменты в историческом центре Липецка',
        place:'Липецк, Россия',
        mark:6.2,
        comment:'Очень удобные и стильные апартаменты. Есть все необходимое как на кухне, так и ванной комнате. Расположение тоже удобное. Парковка прямо под окном. Магазины в пешей доступности. Хозяйка очень гостеприимная. Обязательно вернёмся ещё!',
        date:'28 июня 2022',
        person:'IrinAlexeevna'
    },
    {
        id:4,
        name:'Стильные апартаменты в историческом центре Липецка',
        place:'Липецк, Россия',
        mark:2.5,
        comment:'Очень удобные и стильные апартаменты. Есть все необходимое как на кухне, так и ванной комнате. Расположение тоже удобное. Парковка прямо под окном. Магазины в пешей доступности. Хозяйка очень гостеприимная. Обязательно вернёмся ещё!',
        date:'28 июня 2022',
        person:'IrinAlexeevna'
    },
]



const Reviews = () => {

    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)

    const [number, setNumber] = useState(1204)
    useEffect(() => {
        setTimeout(() => {
            setNumber(number+1)
            if(number == 2605) {
                setNumber(number)
            }
        }, 5)
    }, [number])

    return (
        <section className='Reviews mt-0'>
            <div className='baner'>
                <Container>
                    <Row>
                        <Col md={6}>
                            <h2>{number}</h2>
                            <h3>довольных пользователей уже здесь</h3>
                            <Button variant="outline-light" onClick={handleShow}>
                               Что скажете Вы?
                            </Button>
                        </Col>
                        <Col md={6}>
                            <Row>
                                {
                                    Array.from({length: 100}).map((_, key) => (
                                        <Col key={key} className={key%2===0?`animated`:`animated2`}>
                                            <SmileFase/>{' '}<SmileHome/>{' '}<SmileWink/>{' '}<SmileHome/>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Col>
                    </Row>    
                </Container>
            </div>
             <Container>
                <h4>Последние отзывы</h4>
                <div className='reviews_wrapper'>
                    {
                        reviewsData.map((item, key) => { return (
                            <Card key={key} className="text-left mt-4">
                                <Card.Header>
                                    <Row className='align-items-center'>
                                        <Col xs={6}>
                                            <p className='marks'>
                                                <span>Средняя оценка по отзывам:</span> <b>{item.mark}</b>
                                                <Star/>{' '}
                                            </p>
                                        </Col>
                                        <Col xs={6}>
                                            <ProgressBar striped variant="warning" now={item.mark * 10} />
                                        </Col>
                                    </Row>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>
                                        <Link to={`/homes/${item.id}`} className='name'>{item.name}</Link><br/>
                                        <span className='place'>{item.place}</span>
                                    </Card.Title>
                                    <Card.Text>{item.comment}</Card.Text>
                                    <span className='person'><UserSolid/>{' '}{item.person}</span>
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                    <p className='date'>Дата отзыва: {item.date}</p>
                                </Card.Footer>
                            </Card>
                        )})
                    }
                </div>
            </Container>
            {show&&<ReviewsModal show={show} setShow={setShow}/>}
        </section>
    )
}
export default Reviews