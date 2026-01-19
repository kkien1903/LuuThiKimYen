// câu 1
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// câu 2
const products = [
    new Product(1, "Mouse Logitech", 25, 10, "Accessories", true),
    new Product(2, "Keyboard Razer", 55, 0, "Accessories", true),
    new Product(3, "iPhone 15", 999, 5, "Electronics", true),
    new Product(4, "Samsung S24", 850, 3, "Electronics", false),
    new Product(5, "USB Drive", 15, 20, "Accessories", true)
];

// câu 3
const nameAndPrice = products.map(p => ({ name: p.name, price: p.price }));
console.log(nameAndPrice);

// câu 4
const inStock = products.filter(p => p.quantity > 0);
console.log(inStock);

// câu 5
const hasExpensive = products.some(p => p.price > 30);
console.log("Kết quả:", hasExpensive);

// câu 6
const allAccAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable === true);
console.log("Kết quả:", allAccAvailable);

// cau 7
const totalInventoryValue = products.reduce((total, p) => total + (p.price * p.quantity), 0);
console.log("Tổng giá trị kho hàng:", totalInventoryValue);

// câu 8
for (const p of products) {
    console.log(`${p.name} - ${p.category} - ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`);
}

// câu 9
const firstProduct = products[0];
for (const key in firstProduct) {
    console.log(`${key}: ${firstProduct[key]}`);
}

// câu 10: Lấy mảng tên sản phẩm đang bán và còn bán
const availableNames = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);
console.log(availableNames);