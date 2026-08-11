import React, { useState } from "react";
import { Card, Button, CardBody, CardText, CardTitle, CardImg } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
function Slot2() {


    class product {
        constructor(id, name, inputPrice, outputPrice, stock, imgURL) {
            this.id = id;
            this.name = name;
            this.inputPrice = inputPrice;
            this.outputPrice = outputPrice;
            this.stock = stock;
            this.imgURL = imgURL;
        }
    }

    const [products, setProducts] = useState([
        { id: 1, name: "Laptop ASUS", inputPrice: 15000, outputPrice: 18500, stock: 5, imgURL: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS7ujv22_oIAAjLe8qiE0Ile846W68YYirXHOTg0_kaaPsV-6KHWvidXtjMNnl-hPYKdelW_LnwGNgFHXeZObBTbmUGu6VSKSR2hmFB1j0KeeCr0N9Q2p44Eu9spr6SgMgvXUCAZQH4LQ&usqp=CAc" },
        { id: 2, name: "Chuột", inputPrice: 300, outputPrice: 450, stock: 0, imgURL: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS7ujv22_oIAAjLe8qiE0Ile846W68YYirXHOTg0_kaaPsV-6KHWvidXtjMNnl-hPYKdelW_LnwGNgFHXeZObBTbmUGu6VSKSR2hmFB1j0KeeCr0N9Q2p44Eu9spr6SgMgvXUCAZQH4LQ&usqp=CAc" },
        { id: 3, name: "Bàn phím", inputPrice: 800, outputPrice: 700, stock: 10, imgURL: "https://ngocnguyencare.com/cdn/images/202304/goods_img/thay-ban-phim-laptop-lenovo-g550-G9278-1682243222218.jpg" },
        { id: 4, name: "Màn hình Dell", inputPrice: 3500, outputPrice: 4200, stock: 2, imgURL: "https://cdni.dienthoaivui.com.vn/x420,webp,q100/https://media-asset.dienthoaivui.com.vn/uploads/wp-content/uploads/images/thay-man-hinh-dell-latitude-3540-a1.jpg" }
    ]);

    function handleBuy(id){
        setProducts(
        products.map(p =>
            p.id === id
                ? { ...p, stock: p.stock - 1 } : p
        )
    );
    }

    const productList = products.map(p =>
        new product(
            p.id,
            p.name,
            p.inputPrice,
            p.outputPrice,
            p.stock,
            p.imgURL
        )
    )

    const maxProduct = productList.reduce((max, p) => p.outputPrice > max.outputPrice ? p : max, productList[0]);
    const minProduct = productList.reduce((min, p) => p.outputPrice < min.outputPrice ? p : min, productList[0]);

    function calculateProfit(product) {
        return product.outputPrice - product.inputPrice;
    }
    const sortedProducts = productList.sort((a, b) => calculateProfit(a) - calculateProfit(b));
    return (
        <div>

            <p>Ex1: Danh sách sản phẩm</p>

            <Container>
                <Row className="g-3">
                    {productList.map(p => (
                        <Col key={p.id} md={3}>
                            <Card
                                style={{
                                    border: "1px solid black",
                                    borderRadius: "8px",
                                    height: "100%"
                                }}
                            >
                                <CardImg
                                    src={p.imgURL}
                                    alt={p.name}
                                    style={{
                                        height: "180px",
                                        objectFit: "cover"
                                    }}
                                />

                                <CardBody>
                                    <CardTitle>{p.name}</CardTitle>

                                    <CardText>
                                        Giá bán: {p.outputPrice}
                                    </CardText>

                                    <CardText>
                                        Số lượng: {p.stock}
                                    </CardText>

                                    <CardText>
                                        {p.stock > 0
                                            ? "Còn hàng"
                                            : "Hết hàng"}
                                    </CardText>

                                    <Button
                                        style={{ backgroundColor: p.stock > 0 ? "green" : "grey" }}
                                        disabled = {p.stock === 0}
                                        onClick ={() => {handleBuy(p.id)}} 
                                    >
                                        Mua
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <p>Ex2</p>
            <p>Sản phẩm có giá trị lớn nhất là id: {maxProduct.id} - name: {maxProduct.name} - inputPrice: {maxProduct.inputPrice} - outputPrice: {maxProduct.outputPrice} - {maxProduct.stock > 0 ? "Còn hàng" : "Hết hàng"}</p>
            <p>Sản phẩm có giá trị nhỏ nhất là id: {minProduct.id} - name: {minProduct.name} - inputPrice: {minProduct.inputPrice} - outputPrice: {minProduct.outputPrice} - {minProduct.stock > 0 ? "Còn hàng" : "Hết hàng"}</p>
            <p>Ex3: Danh sách sản phẩm sắp xếp theo lợi nhuận tăng dần:</p>
            {sortedProducts.map(p => (
                <p key={p.id}>
                    id: {p.id} - name: {p.name} - inputPrice: {p.inputPrice} - outputPrice: {p.outputPrice} - stock: {p.stock} - {p.stock > 0 ? "Còn hàng" : "Hết hàng"} - lợi nhuận: {calculateProfit(p)}
                </p>
            ))}
        </div>
    )
}

export default Slot2;