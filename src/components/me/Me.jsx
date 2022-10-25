import "./me.css";
import "../home/home.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Wa from "../home/whatsapp.svg";
import Ig from "../home/instagram.svg";
import Github from "../home/github.svg";
import Meimg from "../home/me.png";
import ProgressBar from "react-bootstrap/ProgressBar";

const Me = () => {
  return (
    <div className="home">
      <Container>
        <Row>
          <Col md={6}>
            <div className="mini">
              <a href="https://www.instagram.com/mchfrnnda_">
                <img className="icon" src={Ig} alt="instagram" />
              </a>
              <a href="https://wa.link/38kfeb">
                <img className="icon" src={Wa} alt="whatsapp" />
              </a>
              <a href="https://github.com/Veloxium">
                <img className="icon" src={Github} alt="github" />
              </a>
            </div>
            <div className="imgpos-me">
              <img src={Meimg} alt="Me" className="me" />
            </div>
          </Col>
          <Col md={6}>
            <div id="dev">
              <h2 className="judulkecil">My Name is Fernanda</h2>
              <h1 className="judulbesar">Front End Developer</h1>
              <p className="biodata">
                <span> Nama</span> : Mochammad Fernanda
                <br/>
                <span> Saat ini</span> : Mahasiswa
                <br/>
                <span> Kuliah</span> : Universitas Bumigora
                <br/>
                <span> Cita-cita</span> : 
                <br/>
                1. Pengen jadi Fullstack Developer
                <br/>
                2. Pengen Dia
                <br/>
                3. Pengen beli Boba 1 truk
              </p>
              <div className="load">
                <div className="flex">
                  <h5>HTML</h5>
                  <ProgressBar striped variant="html" now={80} />
                </div>
                <div className="flex">
                  <h5>JAVA</h5>
                  <ProgressBar striped variant="java" now={40} />{" "}
                </div>
                <div className="flex">
                  <h5>CSS</h5>
                  <ProgressBar striped variant="css" now={60} />{" "}
                </div>
                <h6>progress on learning</h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Me;
