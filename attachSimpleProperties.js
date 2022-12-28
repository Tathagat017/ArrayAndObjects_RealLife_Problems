// make objectCreator2 DRY
// you may make modifications to objectCreator1 if required
// invoke objectCreator1 inside objectCreator2 in such a way that property1 to property5 are attached to the obj in objectCreator2
// You dont need to create a protoype chain
// you are expected to copy them / attach them to the new obj

// this function has capability of attaching 5 properties to an obj
// function objectCreator1() {
//   let obj = {};

//   obj.property1 = 1;
//   obj.property2 = 2;
//   obj.property3 = 3;
//   obj.property4 = 4;
//   obj.property5 = 5;

//   return obj;
// }

// function objectCreator2() {
//   let obj = {};

//   obj.property1 = 1;
//   obj.property2 = 2;
//   obj.property3 = 3;
//   obj.property4 = 4;
//   obj.property5 = 5;
//   obj.property6 = 6;

//   return obj;
// }

// make objectCreator2 DRY
// you may make modifications to objectCreator1 if required
// invoke objectCreator1 inside objectCreator2 in such a way that property1 to property5 are attached to the obj in objectCreator2
// You dont need to create a protoype chain
// you are expected to copy them / attach them to the new obj

// this function has capability of attaching 5 properties to an obj
function objectCreator1() {
  let obj = {};

  obj.property1 = 1;
  obj.property2 = 2;
  obj.property3 = 3;
  obj.property4 = 4;
  obj.property5 = 5;

  return obj;
}

function objectCreator2() {
  let obj = {};
  let obj2 = objectCreator1();

  obj = { ...obj2 };
  obj.property6 = 6;
  console.log(obj2); // obj2 is not changed i.e original is not changed
  return obj;
}
console.log(objectCreator2());
