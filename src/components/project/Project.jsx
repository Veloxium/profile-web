import React from "react";
import "./project.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Web from "./imgweb.png";
import Dots from "./three-dots.svg"

const Project = () => {
  return (
    <div className="project">
    <div>
      <h1 className="judul-project">Featured Project</h1>
    </div>
      <Container>
        <Row className="project-card">
          <Col sm={4} className="card-col">
            <Card className="featured">
              <Card.Img className="imgcard" variant="top" src={Web}/>
              <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="button-card" href="">Link to Project</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4} className="card-col">
            <Card className="featured">
              <Card.Img className="imgcard" variant="top" src={Web}/>
              <Card.Body>
                <Card.Title>Project 2</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="button-card" href="">Link to Project</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4} className="card-col">
            <Card className="featured">
              <Card.Img className="imgcard" variant="top" src={Web}/>
              <Card.Body>
                <Card.Title>Project 3</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="button-card" href="">Link to Project</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <img src={Dots} alt="dot" className="dots" />
      </Container>
      </div>
  );
};

export default Project;
