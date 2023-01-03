Creature.prototype.eat = function () {
  console.log(`${this.name} is eating`);
};

function Creature(name) {
  this.name = name;
}

let c1 = new Creature("Raj");

Human.prototype.sleep = function () {
  console.log(`${this.name} is sleeping`);
};

Object.setPrototypeOf(Human.prototype, Creature.prototype);

function Human(name) {
  Creature.call(this, name);
}

let H1 = new Human(`anil`);

function Employee(name) {
  Human.call(this, name);
}

Employee.prototype.salary = function () {
  console.log(`${this.name} has salary 10000`);
};
Object.setPrototypeOf(Employee.prototype, Human.prototype);

function Engineer(name) {
  Employee.call(this, name);
}

Engineer.prototype.coding = function () {
  console.log(`${this.name} is coding`);
};

Object.setPrototypeOf(Engineer.prototype, Employee.prototype);
