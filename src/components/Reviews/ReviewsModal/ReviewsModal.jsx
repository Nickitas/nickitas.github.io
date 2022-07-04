import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import './reviews_modal.css'

const ReviewsModal = ({show, setShow}) => {

    const handleClose = () => setShow(false)
    const [mail, setMail] = useState()
    const [comment, setComment] = useState()

    return (
        <Modal show={show} onHide={handleClose} className='ReviewsModal'>
            <Modal.Header closeButton>
                <Modal.Title>Для нас важно каждое мнение</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Оставьте нам Вашу почту</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            autoFocus
                            onChange={(e) => setMail(e.target.value)}
                        />
                        </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Ваше сообщение</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={(e) => setComment(e.target.value)} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Закрыть
                </Button>
                <Button variant="primary" onClick={() => {
                    console.log(`почта: ${mail} Текст: ${comment}`)
                    setShow(false)
                }}>
                    Отправить!
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default ReviewsModal