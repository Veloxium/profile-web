import React from "react";
import "./send.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import Ig from './instagram.svg';
import Wa from './whatsapp.svg';
import Github from './github.svg';

const Send = () => {
  return (
    <div className="send">
      <Container>
        <Row>
          <Col md={6} className="kolom">
            <h1>CONTACT ME</h1>
            <div className="bg-kolom">
              <label htmlFor="username">Username</label>
              <div className="name">
                <Col md={6} id="first">
                  <input type="text" placeholder="First Name" required />
                </Col>
                <Col md={6} id="last">
                  <input type="text" placeholder="Last Name" required />
                </Col>
              </div>
              <label htmlFor="email">Email</label>
              <Col md={12} id="email">
                <input type="email" placeholder="Email Address" required />
              </Col>
              <label htmlFor="number">Phone Number</label>
              <Col md={12} id="number">
                <input type="number" placeholder="Phone Number" required />
              </Col>
              <label htmlFor="pesan">Your messages</label>
              <Col md={12} id="pesan">
                <textarea
                  type="text"
                  placeholder="Let us know how we can help"
                  required
                />
              </Col>
              <Button id="submit" required>
                Submit
              </Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-envelope-heart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555l-4.2 2.568a2.785 2.785 0 0 0-.051-.105c-.666-1.3-2.363-1.917-3.699-1.25-1.336-.667-3.033-.05-3.699 1.25l-.05.105L.05 3.555ZM11.584 8.91a4.694 4.694 0 0 1-.073.139L16 11.8V4.697l-4.003 2.447c.027.562-.107 1.163-.413 1.767Zm-4.135 3.05c-1.048-.693-1.84-1.39-2.398-2.082L.19 12.856A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144L10.95 9.878c-.559.692-1.35 1.389-2.398 2.081L8 12.324l-.551-.365ZM4.416 8.91c-.306-.603-.44-1.204-.413-1.766L0 4.697v7.104l4.49-2.752a4.742 4.742 0 0 1-.074-.138Z" />
                <path d="M8 5.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
              </svg>
            </div>
          </Col>
          <Col md={6}>
            <div className="email-teks">
              <h2>VELOXIUM <span>CORPORATION</span></h2>
              <h4>My Social Media
                <br />
              <a href='https://www.instagram.com/mchfrnnda_' ><img className="icon" src={Ig} alt="instagram"/></a>
              <a href='#' ><img className="icon" src={Wa} alt="whatsapp" /></a>
              <a href='#' ><img className="icon" src={Github} alt="github" /></a>
              </h4>
              <p>Website ini di-Design dengan Figma dan di-Develop dengan React JS dengan bantuan FrameWork React-Bootstrap. 
                <br />
                <br /> 
                Terimakasih sudah mampir</p>
                <h5>PORTOFILIO/BLOG</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Send;
