/** Работа с сущностью козины:
  * --  Организуйте такой массив для хранения товаров в корзине;
  * --  Организуйте функцию countBasketPrice, которая будет считать стоимость корзины.

	var basket = [
		["Phone", 500, 3],
		["Laptop", 850, 5],
		["Tablet", 230, 2],
	];

	function countBasketPrice(basket) {
		var sum = 0;

		for ( i = 0; i < basket.length; i++ ) {
			sum += basket[i][1] * basket[i][2];
		}

	return sum;
};

console.log(countBasketPrice(basket));

*/

/** В прошлом ДЗ Вы реализовали корзину на базе массивов.
  * --  Какими объектами можно заменить элементы данных массивов? Реализуйте такие объекты;
  * --  Перенесите функционал подсчета корзины на объектно-ориентированную базу;
  * --  Подумайте над глобальными сущностями. К примеру, сущность “Продукт” в интернет-магазине
	    актуальна не только для корзины, но и для каталога. Стремиться нужно к тому, чтобы объект
    	“Продукт” имел единую структуру для различных модулей нашего сайта, но в разных местах давал
    	возможность вызывать разные методы.
*/

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
	countTotalPrice() {
		var sum = 0;
			for ( var i = 0; i < this.products.length; i++ ) {
				sum += this.products[i].price;
			}
			this.sum = sum;
	},
	addProduct: function(product) {
		this.products.push(product);
		this.products = products;
		this.countTotalPrice();
	},
};