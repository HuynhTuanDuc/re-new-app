import React from "react";
import Usercard from "../component/Usercard";
import user1 from "../data/user1";
import { Container, Row, Col } from "react-bootstrap";
function Slot3() {

    return (
        <div>
            <Container className ="d-flex flex-wrap justify-content-center gap-3">
                <Row>
                {user1.map((user, index) => (
                    <Col key = {index} sm={12} md={6} lg={4}>
                    <Usercard key={index} name={user.name} age={user.age} email={user.email} avatar={user.avatar} />
                    </Col>
                    
                ))}
                </Row>
            </Container>


        </div>
    )
}

export default Slot3;