import React from "react";
import { Button, Card } from "react-bootstrap";
import { CiShoppingCart } from "react-icons/ci";
function ProductCard(product) {
    return (
        <div
            className="card"
            style={{
                width: "18rem",
                border: "1px solid #ddd",
                margin: "10px",
                borderRadius: "5px",
                overflow: "hidden",
            }}
        >
            <Card.Img
                src={product.img}
                className="card-img-top"
            />

            <Card.Body>
                <Card.Title>{product.name}</Card.Title>

                <div className="d-flex justify-content-between align-items-center">
                    <Card.Text className="text-decoration-line-through text-secondary">
                        {product.price} VND
                    </Card.Text>

                    <Card.Text className="text-warning">
                        {product.salePrice} VND
                    </Card.Text>
                </div>

                <div className="d-flex gap-1">
                    <Button variant="primary">
                        <CiShoppingCart />
                    </Button>

                    <Button variant="outline-secondary">
                        Xem chi tiết
                    </Button>
                </div>
            </Card.Body>
        </div>
    );
}

export default ProductCard;