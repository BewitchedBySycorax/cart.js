var products = [{
	id: 1,
	title: "Phone",
	price: 500,
}, {
	id: 2,
	title: "Laptop",
	price: 850,
}, {
	id: 3,
	title: "Tablet",
	price: 230,
}];

var cart = {
	products: [],
	sum: 0,
	getProductById(productId) {
		for (var i = 0; i < this.products.length; i++ ) {
			if ( this.products[i].id == productId ) {
				return this.products[i];
			}
		}

		return false;
	},
	addProduct: function(product) {
		var item = this.getProductById(product.id);

		if ( !item ) {
			item = {};
			item.quantity = 1;
			item.id = product.id;
			item.price = product.price;
			this.products.push(item);
		} else {
			++item.quantity;
		}
		this.countTotalPrice();
	},
	countTotalPrice() {
		var sum = 0;
			for ( var i = 0; i < this.products.length; i++ ) {
				sum += this.products[i].price * this.products[i].quantity;
			}
			this.sum = sum;
	},
};

cart.addProduct(products[0]);
cart.addProduct(products[0]);
cart.addProduct(products[0]);
cart.addProduct(products[1]);
cart.addProduct(products[2]);