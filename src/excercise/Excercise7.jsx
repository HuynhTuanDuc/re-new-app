import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CarCard from "../component/CarCart";
import car1 from "../data/car";
import "../css/excercise7.css";

function Excercise7() {
    return (
        <Container>
            <div className="cards-container">
                <h5>Cards Columns</h5>

                 <Row className="g-3">

                    {car1.map((car, index) => (
                        <Col md={4} key={index}>
                            <CarCard {...car} />
                        </Col>
                    ))}

                </Row>
            </div>
        </Container>
    );
}

export default Excercise7;