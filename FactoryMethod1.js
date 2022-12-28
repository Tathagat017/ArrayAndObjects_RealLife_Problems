// just a made up example to demonstrate object creation & inheritance.
let sharedIphone1Functionalities = {};

sharedIphone1Functionalities.dial = function () {
  console.log("tring.. tring...");
};

sharedIphone1Functionalities.sendMessage = function () {
  console.log("Sending message...");
};

sharedIphone1Functionalities.cameraClick = function () {
  console.log("Camera clicked");
};

function iPhone1(generation, ASIN, weight, OS, RAM, color, display, camera) {
  let obj = {};
  Object.setPrototypeOf(obj, sharedIphone1Functionalities);

  obj.generation = generation;
  obj.asin = ASIN;
  obj.weight = weight;
  obj.os = OS;
  obj.ram = RAM;
  obj.color = color;
  obj.display = display;
  obj.camera = camera;

  return obj;
}

let i1 = iPhone1(
  1,
  "B09X67JBQV",
  7.8,
  "IOS",
  "128mb",
  "Gray",
  "90mm",
  "2.0 MP"
);

// --------------------------------
// bluetooth feature added
// 3g Internet feature added
// high resolution capture added
// --------------------------------

let sharedIphone2Functionalities = {};
Object.setPrototypeOf(
  sharedIphone2Functionalities,
  sharedIphone1Functionalities
);

sharedIphone2Functionalities.connectWithBlutoothDevice = function () {
  console.log("Connecting with bluetooth divice...");
};

sharedIphone2Functionalities.connectWithInternet = function () {
  console.log("Connecting with 3g Internet...");
};

sharedIphone2Functionalities.cameraClick = function () {
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
  Object.setPrototypeOf(obj, sharedIphone2Functionalities);

  obj.generation = generation;
  obj.asin = ASIN;
  obj.weight = weight;
  obj.os = OS;
  obj.ram = RAM;
  obj.color = color;
  obj.display = display;
  obj.camera = camera;

  obj.bluetooth = bluetooth;
  obj.internet = internetType;

  return obj;
}

let i2 = iPhone2(
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
// Possible improvements:

// - use the built in `prototype` object of the function
// -  copy all the properties from `iPhone1` to `iPhone2`
