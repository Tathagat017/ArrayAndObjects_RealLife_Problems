// make objectCreator2 DRY
// you may make modifications to objectCreator1 if required
// invoke objectCreator1 inside objectCreator2 in such a way that property1 to property5 are attached to the obj in objectCreator2

function objectCreator1(o, a, b, c, d, e) {
  let obj = o;

  obj.property1 = a;
  obj.property2 = b;
  obj.property3 = c;
  obj.property4 = d;
  obj.property5 = e;

  return obj;
}

function objectCreator2(a, b, c, d, e, f) {
  let obj = {};

  let obj2 = {};
  obj2 = objectCreator1(obj2, a, b, c, d, e);
  obj = { ...obj2 };
  obj.property6 = f;

  return obj;
}

console.log(objectCreator2("a", "b", "c", "d", "e", "f"));
