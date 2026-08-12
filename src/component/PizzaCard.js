import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { CardBody, CardTitle } from "react-bootstrap";
import "../css/zaloExcercise128.css";
function PizzaCard(pizza) {
    return (
        <div className="pizza-card">
            <Card.Img variant="top"
                src={pizza.img}
                className="pizza-img" />
            <Card.Body class="pizza-card-body">
                <Card.Title>{pizza.name}</Card.Title>
                <div className="d-flex justify-content-center gap-3">
                    <Card.Text className="text-decoration-line-through text-secondary"
                    >{pizza.price}</Card.Text>
                    <Card.Text>{pizza.salePrice} VND</Card.Text>
                </div>
            </Card.Body>
            <Button variant="dark" className="buy-button">
                Buy
            </Button>
        </div>
    )
}
export default PizzaCard;