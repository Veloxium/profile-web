import React from 'react'
import './home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Me from './me.png'
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <div className="home">
        <Container>
            <Row>
                <Col md={6}>
                    <img src={Me} alt="Me" className="me"/>
                </Col>
                <Col md={6} className="tengah">
                    <h2 className="judulkecil">Hello Im Fernanda</h2>
                    <h1 className='judulbesar'>Front End Developer</h1>
                    <p className='teks'>Saya sangat tertarik dalam hal design terlebih lagi tentang programming. Mendesign website, dan app mobile adalah hal yang sangat menyenangkan. Mari bekerja sama dalam project website dan app mobile anda berikutnya!</p>
                    <Button href="#" className="button">ABOUT ME</Button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Home