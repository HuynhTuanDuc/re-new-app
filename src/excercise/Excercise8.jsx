import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../css/excercise8.css";

function Excercise8() {
    return (
        <Container className="exercise8">

            <Row className="exercise8-content justify-content-center">

                {/* Form */}
                <Col md={5}>
                    <div className="booking-form">

                        <div className="form-header">
                            <h2>Form đặt vé máy bay</h2>
                        </div>

                        {/* Họ tên */}
                        <Form.Group className="mb-3">
                            <Form.Label>Họ tên</Form.Label>

                            <Form.Control
                                type="text"
                                placeholder="Họ tên"
                            />

                            <Form.Text className="text-muted">
                                Phải nhập 5 ký tự, in hoa...
                            </Form.Text>
                        </Form.Group>

                        {/* Địa chỉ */}
                        <Form.Group className="mb-3">
                            <Form.Label>Địa chỉ</Form.Label>

                            <Form.Control
                                type="text"
                            />

                            <Form.Text className="text-muted">
                                Phải nhập 5 ký tự, in hoa...
                            </Form.Text>
                        </Form.Group>

                        {/* Đi từ - Đến */}
                        <Row>

                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Đi từ</Form.Label>

                                    <Form.Select>
                                        <option>Hà Nội</option>
                                        <option>Đà Nẵng</option>
                                        <option>TP. Hồ Chí Minh</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Đến</Form.Label>

                                    <Form.Select>
                                        <option>Hà Nội</option>
                                        <option>Đà Nẵng</option>
                                        <option>TP. Hồ Chí Minh</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                        </Row>

                        {/* Chiều đi */}
                        <Form.Label>
                            Chọn chiều đi (Khứ hồi)
                        </Form.Label>

                        <Form.Check
                            type="checkbox"
                            label="Đi"
                        />

                        <Form.Check
                            type="checkbox"
                            label="Về"
                        />

                        {/* Button */}
                        <Button
                            variant="primary"
                            className="booking-button"
                        >
                            Đặt vé
                        </Button>

                    </div>
                </Col>
            </Row>

        </Container>
    );
}

export default Excercise8;