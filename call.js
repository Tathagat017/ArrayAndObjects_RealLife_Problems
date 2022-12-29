let student = {
  name: "John",
  subject: "Javascript",
};

function sayHi() {
  return `Hi, my name is ${this.name}. I am learning ${this.subject}`;
}

student.sayHi = sayHi;

console.log(student.sayHi()); // making function a method in obj;

console.log(sayHi.call(student)); // by using call inbuilt
// your code below it. Donot touch the code above it
// invoke sayHi() in such a way that this points to the student object.
// way1: make sayHi a method of student
// way2: use call() to invoke the function to set the context of this
