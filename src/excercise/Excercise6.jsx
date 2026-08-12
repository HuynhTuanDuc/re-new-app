import React from "react";
import { Container, Row, Col, Nav, Navbar, Form, Button, Dropdown, Card, Carousel } from "react-bootstrap";
import "../css/excercise6.css";
import pizza1 from "../data/pizza";
import ProductCard from "../component/ProductCard";
function Excercise6() {
    return (
        <div className="exercise6">

            {/*NAVBAR*/}
            <Navbar bg="light" expand="lg" className="border-bottom">
                <Container>
                    <Navbar.Brand href="#">
                        Navbar
                    </Navbar.Brand>

                    <Navbar.Toggle />

                    <Navbar.Collapse>
                        <Nav className="me-auto">
                            <Nav.Link href="#" active>
                                Home
                            </Nav.Link>

                            <Nav.Link href="#">
                                Link
                            </Nav.Link>

                            <Dropdown>
                                <Dropdown.Toggle
                                    variant="light"
                                    id="dropdown-basic"
                                >
                                    Dropdown
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">
                                        Action
                                    </Dropdown.Item>

                                    <Dropdown.Item href="#">
                                        Another action
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>

                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                            />

                            <Button variant="outline-primary">
                                Search
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            {/*CAROUSEL*/}
            <Carousel className="product-carousel">

                <Carousel.Item>
                    <div className="carousel-placeholder">
                        <h1>1920 x 530</h1>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="carousel-placeholder">
                        <h1>1920 x 530</h1>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="carousel-placeholder">
                        <h1>1920 x 530</h1>
                    </div>
                </Carousel.Item>

            </Carousel>


            {/* NEW PRODUCT */}
            <Container className="product-section">

                <h2>NEW PRODUCT</h2>

                <p className="product-description">
                    List product description
                </p>


                <Row className="g-3">
                    {pizza1.slice(0, 4).map((pizza, index) => (
                        <Col md={3} key={index}>
                            <ProductCard
                                name={pizza.name}
                                price={pizza.price}
                                salePrice={pizza.salePrice}
                                img={pizza.img}
                            />
                        </Col>
                    ))}
                </Row>

            </Container>

        </div>
    );
}

export default Excercise6;