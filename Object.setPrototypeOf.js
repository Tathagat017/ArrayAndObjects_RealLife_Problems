// Every object in javascript has hidden property called: __proto__

let ob1 = {
  name: "Arun",
  sayHello: function () {
    console.log("HEllo");
  },
};

let ob2 = {
  salary: 100,
  work: function () {
    console.log("Working now");
  },
};
Object.setPrototypeOf(ob2, ob1); // ob2 gets all ACCESS the functions and properties ( via a link created) from ob1 without copying it
ob2.sayHello();
//console.log(ob2.__proto__===ob1) is true
console.log(ob2.__proto__ === ob1);

/*
ob2 ={
key:value,
key:value,
.
.
.
__proto__: ob1,

}

*/
