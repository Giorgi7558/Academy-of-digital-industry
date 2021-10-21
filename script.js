"use strict";

// Tast1
let user = {
  firsName: "giorgi",
  lastName: "smith",
  age: 25,
  studentStatus: "active",
};

console.log(user.studentStatus);
console.log("---ForLoop---");
// Task2
/// For Loop
let arr = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

///While Loop
console.log("---WhileLoop---");
let i = 0;
while (i < arr.length) {
  i++;
  console.log(arr[i]);
}
//Task3
console.log("---Task3---");
let arrNumbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (let i = 0; i < arrNumbers.length; i++) {
  if (arrNumbers[i] > 5) {
    console.log(arrNumbers[i]);
  }
}

console.log("---Task4---");

let users = [
  { username: "test1", status: false },
  { username: "test2", status: false },
  { username: "test3", status: true },
];

for (let i = 0; i < users.length; i++) {
  if (users[i].status === true) {
    console.log(users[i]);
  }
}

console.log("---Task5---");

let nestedArr = [
  [2, -3, 5, 11],
  [1, -30, -11, 1000],
  [-1, -3, -4],
];

for (let i = 0; i < nestedArr.length; i++) {
  // console.log(nestedArr[i]);
  for (let j = 0; j < nestedArr.length; j++) {
    if (nestedArr[i][j] > 0) {
      console.log(nestedArr[i][j]);
    }
  }
}

console.log("---Task6---");

console.log(6 === "6"); // return false because srting is not number

console.log("---Task7---");

let wordsArray = ["html", "css", "bootstrap", "javascript", "python"];

for (let i = 0; i < wordsArray.length; i++) {
  if (wordsArray[i].length > 5 && wordsArray[i].includes("ava")) {
    console.log(wordsArray[i]);
  }
}

console.log("---Task8---");

let studentUser = {
  name: "giorgi",
  age: 20,
  studentStatus: "active",
};

if (studentUser.age > 18) {
  console.log("Hello Student");
}
if (studentUser.name === "giorgi") {
  console.log("Hello Giorgi");
}
if (studentUser.status === "active" || studentUser.age < 25) {
  console.log("Hello JavaScript world");
} else {
  console.log("Error");
}

console.log("---Task9---");

let stringArray = ["watermelon", "pear", 10, 45, 50, "apple", "ananas"];

for (let i = 0; i < stringArray.length; i++) {
  if (typeof stringArray[i] === "string") {
    console.log(stringArray[i]);
  }
}
