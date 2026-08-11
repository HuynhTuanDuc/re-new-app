import React, { useState } from "react";
import {Button, Card} from "react-bootstrap";
import { CardBody, CardTitle } from "react-bootstrap";
function Usercard(user) {
    const [isLike, setIsLike] = useState(false);
    return (
        <div class="card" style={{ width: "18rem", border: "1px solid black", margin: "10px", display: "flex", borderRadius: "5px", flexDirection: "column", alignItems: "center" }}>
            <Card.Img src={user.avatar} alt={user.name} class="card-img-top" width="50%" height="auto"/>
            <CardBody class="card_info">
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>{user.age}</Card.Text>
                <Card.Text>{user.email}</Card.Text>
            </CardBody>
            <Button>

            </Button>
        </div>
    )
}
export default Usercard;