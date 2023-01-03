//syntactic sugar : internally behaves just as contructor functions

class IPhone1 {
  constructor(generation, color) {
    this.generation = generation;
    this.color = color;
  }

  dial() {
    console.log("tring... tring...");
  }
}

class IPhone2 extends IPhone1 {
  constructor(generation, color, bluetoothType) {
    super(generation, color);
    this.bluetoothType = bluetoothType;
  }

  connectToABlueToothDevice() {
    console.log("Connected to the BT device.");
  }
}

class IPhone3 extends IPhone2 {
  constructor(generation, color, bluetoothType, SiriAssistant) {
    super(generation, color, bluetoothType);
    this.SiriAssistant = SiriAssistant;
  }

  respondToHey() {
    console.log("SIRI:How can I help ");
  }

  videoCalling() {
    console.log("calling via videoCalling");
  }
}
let i1 = new IPhone1(1, "red"); // function not present in obj
let i2 = new IPhone2(2, "black", "BT 5.0"); // function not present in obj
let i3 = new IPhone3(3, "black", "BT 5.0", true);
i3.dial();
i3.videoCalling();

console.log(i1);
console.log(i2);
i1.dial();
i2.dial();
i2.connectToABlueToothDevice();
i3.connectToABlueToothDevice();

// constructor function

// iPhone1.prototype.dial = function () {
//   console.log("tring.. tring...");
// };

// function iPhone1(o, generation, ASIN, weight, OS, RAM, color, display, camera) {
//   //   let obj = o;
//   //   Object.setPrototypeOf(obj, iPhone1.prototype);

//   this.generation = generation;
//   this.asin = ASIN;
//   this.weight = weight;
//   this.os = OS;
//   this.ram = RAM;
//   this.color = color;
//   this.display = display;
//   this.camera = camera;

//   //   return obj;
// }

// let i1 = new iPhone1(
//   {},
//   1,
//   "B09X67JBQV",
//   7.8,
//   "IOS",
//   "128mb",
//   "Gray",
//   "90mm",
//   "2.0 MP"
// );

// console.log(i1);
// console.log(i1.dial());
