function factoryFunction(name, age, balance, active) {
  let obj = {};
  obj.name = name;
  obj.age = age;
  obj.balance = balance;
  obj.active = active;
  obj.sayDetails = function () {
    return `${this.name} has age ${this.age} and balance:${this.balance},status:${this.active}`;
  };
  return obj;
}
let customer = factoryFunction("raj", 12, 101, "active");
console.log(customer.sayDetails());
