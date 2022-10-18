import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import './email.css'
import Logo2 from './logo2.png'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'

const Email = () => {
  return (
    <div className="email">
        <div className="bar">
            <Container>
            <Row>
                <Col lg={4}>
                    <img src={Logo2} alt="logo" className="img-email"/>
                </Col>
                <Col lg={7} className='teks-email'>
                    <h1>Let’s work together on your next project</h1>
                    <h5>Mari membuat website Anda menjadi lebih keren dan nyaman bagi user, mari bekerja sama !</h5>
                    <Button href="#" className="button-email">CONTACT ME</Button>
                </Col>
            </Row>
            </Container>
        </div>
    </div>
  )
}

export default Email