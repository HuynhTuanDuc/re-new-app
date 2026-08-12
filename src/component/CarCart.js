import React from "react";
import { Card } from "react-bootstrap";

function CarCard({ img, text, color }) {
    return (
        <Card className={`car-card ${color}`}>
            <Card.Img
                src={img}
                className="car-img"
            />

            <Card.Body>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CarCard;