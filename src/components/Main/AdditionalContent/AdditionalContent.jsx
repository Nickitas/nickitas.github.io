import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import img from '../../../img/piople.jpg'
import './additional_content.css'

const AdditionalContent = () => {
    
    const [show, setShow] = useState(
        setTimeout(() => {
            setShow(true)
        }, 500000)
    )

    return (
        <section className='AdditionalContent mt-4 mb-4'>
            {show&&<Alert variant="primary">
                <Container>
                    <Row>
                        <Col>
                            <Alert.Heading><h2 style={{marginTop:0, textAlign:'left'}}>Спецпредложение!</h2></Alert.Heading>
                            <p>При оплате проживания на срок от 10 суток и более стоимость места в 10-местном номере 400 рублей с человека.</p>
                        </Col>
                        <Col className='img-block'></Col>
                    </Row>
                    <hr />
                    <Row>
                        <Button variant="primary" size="lg" onClick={() => setShow(false)}>
                            Понятно!
                        </Button>
                    </Row>
                </Container>
            </Alert>}
        </section>
    )
}
export default AdditionalContent