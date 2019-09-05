var catalog = {
	items: [{
		id: 0,
		title: "Phone",
		price: 500,
		src: ''
	}, {
		id: 1,
		title: "Laptop",
		price: 850,
		src: ''
	}, {
		id: 2,
		title: "Tablet",
		price: 230,
		src: ''
	}],
	render: function() {
		for ( var i = 0; i < this.items.length; i++ ) {
			var product = this.items[i];
			var section = this.createElement('section');
			var name = product.title;
			var price = product.price;
			section.innerHTML = '<span>Product title: ' + price + ';<br>' + 'Price: ' + price + '</span>';
			section.id = name;

			document.body.appendChild(section);

			if ( product.src ) {
				var img = document.createElement('img');
				img.src = product.src;
				section.appendChild(img);
			}

			var input = document.createElement('input');
			input.type = 'button';
			input.value = 'Add to basket';
			input.id = name + '-input';

			input.addEventListener('click', function() {
				cart.addProduct(product);
			});

			section.appendChild(input);
		}
	}
};

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

window.addEventListener('load', function() {
	catalog.render();
});