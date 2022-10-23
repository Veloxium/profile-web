import React from "react";
import "./home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Me from "./me.png";
import Button from "react-bootstrap/Button";
import Wa from './whatsapp.svg';
import Ig from './instagram.svg';
import Github from './github.svg';

const Home = () => {
  return (
    <div className="home">
      <Container>
        <Row>
          <Col md={6}>
            <div className="mini">
              <a href="https://www.instagram.com/mchfrnnda_">
                <img className="icon" src={Ig} alt="instagram" />
              </a>
              <a href="#">
                <img className="icon" src={Wa} alt="whatsapp" />
              </a>
              <a href="#">
                <img className="icon" src={Github} alt="github" />
              </a>
            </div>
            <div className="imgpos">
              <img src={Me} alt="Me" className="me" />
            </div>
          </Col>
          <Col md={6}>
            <div id="dev">
              <h2 className="judulkecil">Hello Im Fernanda</h2>
              <h1 className="judulbesar">Front End Developer</h1>
              <p className="teks">
                Saya sangat tertarik dalam hal design terlebih lagi tentang
                programming. Mendesign website, dan app mobile adalah hal yang
                sangat menyenangkan. Mari bekerja sama dalam project website dan
                app mobile anda berikutnya!
              </p>
              <Button href="#" className="button">
                ABOUT ME
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
