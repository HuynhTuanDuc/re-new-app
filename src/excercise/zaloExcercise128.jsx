import React from "react";
import { Container, Row, Col, Nav, Navbar, Form, Button } from "react-bootstrap";
import "../css/zaloExcercise128.css";
import { CiSearch } from "react-icons/ci";

import pizza1 from "../data/pizza";
import PizzaCard from "../component/PizzaCard";
function ZaloExcercise128() {
    return (
        <div className="pizza-page">
            {/* Navbar */}
            <Navbar variant="dark">
                <Container fluid className="d-flex align-items-end">
                    <Navbar.Brand href="#" className="fw-bold">
                        Pizza House
                    </Navbar.Brand>

                    <Nav className="d-flex align-items-center ms-3 gap-5">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About us</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                        <div className="d-flex flex-row align-items-center gap-3">
                            <Form>
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="search-box"
                                />
                            </Form>
                            <CiSearch
                                style={{
                                    color: "red",
                                    fontSize: "24px",
                                }}
                            />
                        </div>
                    </Nav>
                </Container>
            </Navbar>
            {/* Hero */}
            <section className="hero" style={{ backgroundImage: `url("/images/image.png")` }}>
                {/* <section className="hero" style={{ backgroundImage: `url(${image})` }}></section>    */}
                <div style={{ border: "solid 1px black", borderRadius: "10px", padding: "20px", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                    <h1>Neapolitan Pizza</h1>
                    <p>Authentic Italian taste in every bite</p>
                </div>
            </section>
            {/* Menu */}
            <section class="menu-section">
                <Container fluid className="text-center">
                    <h2 className="section-title">Our Menu</h2>
                    <Row>
                        {pizza1.slice(0, 4).map((p, index) => (
                            <Col md={3} key={index}>
                                <PizzaCard key={index}
                                    name={p.name}
                                    price={p.price}
                                    salePrice={p.salePrice}
                                    img={p.img}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section className="booking-section">
                <h2>Book Your Table</h2>
                <div className="d-flex justify-content-center">
                    <Form className="form-content">
                        <Row>
                            <Col md={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Your Name*</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        className="booking-input"
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>
                                        Date*
                                    </Form.Label>
                                    <Form.Control
                                        type="date"
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>
                                        Select service*
                                    </Form.Label>
                                    <Form.Select>
                                        <option>Choose service...</option>
                                        <option>Ăn tối</option>
                                        <option>Ăn trưa</option>
                                        <option>Ăn sáng</option>
                                        <option>Sinh nhật</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={12}>
                                <Form.Group>
                                    <Form.Label>
                                        Please share your message
                                    </Form.Label>

                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        placeholder="Write your message..."
                                    />

                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="d-flex justify-content-center">
                            <Button className="send-button">
                                Send
                            </Button>
                        </div>
                    </Form>
                </div>

            </section>
        </div>
    );
}

export default ZaloExcercise128;