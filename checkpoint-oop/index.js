
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    calculateTotalPrice() {
        return this.product.price * this.quantity;
    }
}

class ShoppingCart {
    constructor(shoppingCartItems) {
        this.items = shoppingCartItems;
    }
    getTotalItems() {
        return this.items.length;
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter(i => i !== item);
    }

    displayCartItems() {
        return this.items;
    }
    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.calculateTotalPrice(), 0);
    }
}

const product1 = new Product(1, 'Product 1', 100);
const product2 = new Product(2, 'Product 2', 200);
const product3 = new Product(3, 'Product 3', 300);

const cart = new ShoppingCart([new ShoppingCartItem(product1, 2), new ShoppingCartItem(product2, 3), new ShoppingCartItem(product3, 4)]);

console.log(cart.getTotalPrice());
console.log(cart.getTotalItems());
console.log(cart.displayCartItems());
cart.addItem(new ShoppingCartItem(product1, 1));
console.log(cart.displayCartItems());
cart.removeItem(product2);
console.log(cart.displayCartItems());