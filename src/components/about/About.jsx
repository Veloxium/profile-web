import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import './about.css';
import Css from './filetype-css.svg';
import Drop from './droplet.svg';
import Android from './android.svg';
import Button from 'react-bootstrap/esm/Button';
import './Transition.js';
import './transition.css';

const About = () => {
  return (
    <div className="about">
      <h1 className="judul">My Intrest</h1>
      <Container>
        <Row>
        <Col lg={4}>
          <Card >
            <Card.Body >
              <img src={Css} alt="css" className="card-img"/>
              <Card.Title>CSS WEB</Card.Title>
              <Card.Text>Saya belajar mengenai CSS dari youtube dan blog-blog dokumentasi. Saya akan terus meningkatkan skill di bidang UI/UX.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
        <Card >
            <Card.Body className='ui'>
              <img src={Drop} alt="ui" className="card-img"/>
              <Card.Title>UI DESIGN</Card.Title>
              <Card.Text>Saya suka sekali dalam hal men-desain, dan kenyamanan dalam hasil karya suatu desain adalah tujuan saya.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
                    <Card>
            <Card.Body>
              <img src={Android} alt="android" className="card-img"/>
              <Card.Title>APP DEV</Card.Title>
              <Card.Text>Saya juga tertarik untuk belajar membuat aplikasi dan saat ini saya sedang mempelajari Flutter.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>
      </Container>
      <Row>
      <Col md={6}>
      <div  className="exp">
        <h1>
          <span>5</span>
          <br />Months Experience
        </h1>
        <Button href="#" className="button-know">KNOW MORE</Button>
      </div>
      </Col>
      <Col md={6}>
        <div >
        </div>
      </Col>
      </Row>
    </div>
  )
}

export default About