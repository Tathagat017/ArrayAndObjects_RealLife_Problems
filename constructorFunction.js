// Any function intened to be called with new keyword is called a constructor function
// it creates 1. A plain Javascript Object
//2. Attaches the functions prototype with the object
//3.The value is returned
//A new empty object is created and assigned to this.
// The function body executes. Usually it modifies this, adds new properties to it.
// The value of this is returned.

iPhone1.prototype.dial = function () {
  console.log("tring.. tring...");
};

iPhone1.prototype.sendMessage = function () {
  console.log("Sending message...");
};

iPhone1.prototype.cameraClick = function () {
  console.log("Camera clicked");
};

function iPhone1(o, generation, ASIN, weight, OS, RAM, color, display, camera) {
  //   let obj = o;
  //   Object.setPrototypeOf(obj, iPhone1.prototype);

  this.generation = generation;
  this.asin = ASIN;
  this.weight = weight;
  this.os = OS;
  this.ram = RAM;
  this.color = color;
  this.display = display;
  this.camera = camera;

  //   return obj;
}

let i1 = new iPhone1(
  {},
  1,
  "B09X67JBQV",
  7.8,
  "IOS",
  "128mb",
  "Gray",
  "90mm",
  "2.0 MP"
);

console.log(i1);
console.log(i1.dial());
// --------------------------------
// bluetooth feature added
// 3g Internet feature added
// high resolution capture added
// --------------------------------

Object.setPrototypeOf(iPhone2.prototype, iPhone1.prototype); // we need this for now

iPhone2.prototype.connectWithBlutoothDevice = function () {
  console.log("Connecting with bluetooth divice...");
};

iPhone2.prototype.connectWithInternet = function () {
  console.log("Connecting with 3g Internet...");
};

iPhone2.prototype.cameraClick = function () {
  console.log("Clicking a high resolution pic...");
};

function iPhone2(
  generation,
  ASIN,
  weight,
  OS,
  RAM,
  color,
  display,
  camera,
  bluetooth,
  internetType
) {
  let obj = {};
  iPhone1(obj, generation, ASIN, weight, OS, RAM, color, display, camera);

  //   Object.setPrototypeOf(obj, iPhone2.prototype);

  this.bluetooth = bluetooth;
  this.internet = internetType;

  //   return obj;
}

let i2 = new iPhone2(
  2,
  "B09dfgsgQV",
  9.8,
  "IOS 2",
  "256mb",
  "Gray",
  "99mm",
  "4.0 MP",
  "2.0",
  "3g"
);
console.log(i2);
console.log(i2.dial());
console.log(i2.cameraClick());
console.log(i2.connectWithBlutoothDevice());
