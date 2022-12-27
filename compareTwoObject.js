let ob1 = {
  id: 1,
  name: "Arun",
};

let ob2 = {
  id: 1,
  name: "Arun",
};
console.log(ob1 == ob2); //false

console.log(JSON.stringify(ob2) == JSON.stringify(ob1)); //true
