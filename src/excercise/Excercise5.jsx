import React from "react";
import { Container, Row, Col, Nav, Navbar, Form, Button } from "react-bootstrap";
import "../css/excercise5.css"
function Excercise5() {
    return (
        <Container className="content">
            <div className="part1">
                <header1>
                    Let's test the grid
                </header1>
                <Nav>
                    <Nav.Link active>
                        Active
                    </Nav.Link>
                    <Nav.Link active>
                        Link
                    </Nav.Link>
                    <Nav.Link href="#">
                        Link
                    </Nav.Link>

                    <Nav.Link disabled>
                        Disable
                    </Nav.Link>
                </Nav>
                <div className="grid-table">
                    <Row>
                        <Col md={6}>First Col</Col>
                        <Col md={6}>Second Col</Col>
                    </Row>
                    <Row>
                        <Col md={4}>Col</Col>
                        <Col md={4}>Col</Col>
                        <Col md={4}>Col</Col>
                    </Row>
                    <Row>
                        <Col md={3}>Col</Col>
                        <Col md={3}>Col</Col>
                        <Col md={3}>Col</Col>
                        <Col md={3}>Col</Col>
                    </Row>

                </div>

                <footer1>
                    Created by ABC!
                </footer1>
            </div>

            <div className="part2">
                <header1>
                    My first Bootstrap Page
                </header1>
                <Row className="justify-content-center">
                    <Col xs="auto">
                        <img src="/images/excercise5/js1.png" />
                    </Col>

                    <Col xs="auto">
                        <img src="/images/excercise5/js2.png" />
                    </Col>

                    <Col xs="auto">
                        <img src="/images/excercise5/js3.png" />
                    </Col>
                </Row>
            </div>

        </Container>
    );
}

export default Excercise5;