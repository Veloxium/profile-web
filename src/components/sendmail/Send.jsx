import React from "react";
import "./send.css";
import { Container, Col, Row,} from "react-bootstrap";
import Ig from "./instagram.svg";
import Wa from "./whatsapp.svg";
import Github from "./github.svg";
import { motion } from "framer-motion";


const Send = () => {
  return (
    <motion.div
    initial={{ width : 0}}
        animate={{width : "100%"}}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
    className="send">
      <Container>
        <Row>
          <Col md={6}>
            <div className="email-teks">
              <h2>
                VELOXIUM <span>CORPORATION</span>
              </h2>
              <h4>
                My Social Media
                <br />
                <a href="https://www.instagram.com/mchfrnnda_">
                  <img className="icon" src={Ig} alt="instagram" />
                </a>
                <a href="https://wa.link/38kfeb">
                  <img className="icon" src={Wa} alt="whatsapp" />
                </a>
                <a href="https://github.com/Veloxium">
                  <img className="icon" src={Github} alt="github" />
                </a>
              </h4>
              <p>
                Website ini di-Design dengan Figma dan di-Develop dengan React
                JS dengan bantuan FrameWork React-Bootstrap.
                <br />
                <br />
                Terimakasih sudah mampir
              </p>
              <h5>PORTOFILIO/BLOG</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Send;
