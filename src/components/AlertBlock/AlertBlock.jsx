import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CloseButton from 'react-bootstrap/CloseButton'
import { Info } from '../svg.module'
import './alert_block.css'

const AlertBlock = ({text, subtext}) => {

    const [hidden, setHidden] = useState(false)

    return (
        <Alert className='AlertBlock' variant='primary' hidden={hidden}>
            <Row>
                <Col sm={1}>
                    <Info/>
                </Col>
                <Col sm={10}>
                    <b>{text}</b>
                    <p>{subtext}</p>
                </Col>
                <Col sm={1}><CloseButton onClick={() => setHidden(true)}/></Col>
            </Row>
        </Alert>
    )
}
export default AlertBlock