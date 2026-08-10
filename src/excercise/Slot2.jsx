function Slot2() {
    class product {
        constructor(id, name, inputPrice, outputPrice, stock) {
            this.id = id;
            this.name = name;
            this.inputPrice = inputPrice;
            this.outputPrice = outputPrice;
            this.stock = stock;
        }
    }

    const products = [
        { id: 1, name: "Laptop ASUS", inputPrice: 15000, outputPrice: 18500, stock: 5 },
        { id: 2, name: "Chuột", inputPrice: 300, outputPrice: 450, stock: 0 },
        { id: 3, name: "Bàn phím", inputPrice: 800, outputPrice: 700, stock: 10 },
        { id: 4, name: "Màn hình Dell", inputPrice: 3500, outputPrice: 4200, stock: 2 }
    ];

    const productList = products.map(p =>
        new product(
            p.id,
            p.name,
            p.inputPrice,
            p.outputPrice,
            p.stock
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
            <p>Ex1: Danh sách sản phẩm </p>
            {productList.map(p => (
                <div key={p.id}>
                    id: {p.id} - name: {p.name} - inputPrice: {p.inputPrice} - outputPrice: {p.outputPrice} - stock: {p.stock} - {p.stock > 0 ? "Còn hàng" : "Hết hàng"}
                </div>
            ))}
            <p>Ex2</p>
            <p>Sản phẩm có giá trị lớn nhất là id: {maxProduct.id} - name: {maxProduct.name} - inputPrice: {maxProduct.inputPrice} - outputPrice: {maxProduct.outputPrice} - {maxProduct.stock > 0 ? "Còn hàng" : "Hết hàng"}</p>
            <p>Sản phẩm có giá trị nhỏ nhất là id: {minProduct.id} - name: {minProduct.name} - inputPrice: {minProduct.inputPrice} - outputPrice: {minProduct.outputPrice} - {minProduct.stock > 0 ? "Còn hàng" : "Hết hàng"}</p>
            <p>Ex3: Danh sách sản phẩm sắp xếp theo lợi nhuận tăng dần:</p>
            {sortedProducts.map(p => (
                <p key ={p.id}>
                    id: {p.id} - name: {p.name} - inputPrice: {p.inputPrice} - outputPrice: {p.outputPrice} - stock: {p.stock} - {p.stock > 0 ? "Còn hàng" : "Hết hàng"} - lợi nhuận: {calculateProfit(p)}
                </p>
            ))}
        </div>
    )
}

export default Slot2;