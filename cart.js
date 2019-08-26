
var basket = [
  ["Телефон", 500, 3],
  ["Ноутбук", 850, 5],
  ["Планшет", 230, 2],
];

function countBasketPrice(basket) {
  var sum = 0;

  for ( i = 0; i < basket.length; i++ ) {
    sum += basket[i][1] * basket[i][2];
  }

  return sum;
};

console.log(countBasketPrice(basket));