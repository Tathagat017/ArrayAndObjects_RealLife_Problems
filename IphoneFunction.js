// create an iphone factory with
// 2-3 properties
// 1-2 methods
// create an iphone Ojbect
// create an iphone factory with
// 2-3 properties
// 1-2 methods
// create an iphone Ojbect

function factoryFunction(name, realease, cost, brand, discount) {
  let obj = {};
  obj.model = name;
  obj.realease = realease;
  obj.cost = cost;
  obj.brand = brand;
  obj.sayDetails = function () {
    return `${this.model} has realease ${this.realease} and cost:${this.cost},brand:${this.brand} `;
  };

  obj.discountedPrice = function () {
    let discountedPrice = cost - cost * (discount / 100);
    return `The price after discount is ${discountedPrice}`;
  };
  return obj;
}
let customer = factoryFunction("iphone5S", 2001, 101, "Apple", 10);
console.log(customer.sayDetails());
console.log(customer.discountedPrice());
//THE DISADVANTAGE IS A LOT OF MEMORY IS REQUIRED AS METHODS ARE COPIED EVERY TIME
