"use strict";
// Task1
let arr = [5, 25, 89, 120, 36];
let newArr = arr.push("javascript", "python");
let addStringArr = arr.unshift("html", "css");
let removeElStart = arr.shift();
let removeElEnd = arr.pop();
console.log(arr.length);
console.log(arr);

console.log("---Task2---");

let fruits = ["Orange", "Bananas", "Pear"];
console.log(fruits.length);
let pushFruit = fruits.push("Apple", "Pineapple");
console.log(pushFruit);
let addFruit = fruits.unshift("Watermelon");
let spliceFruit = fruits.splice(3, 0, "Mango");
let popFruit = fruits.pop();
let shifFruit = fruits.shift();
console.log(fruits.length);
console.log(fruits);

console.log("---Task3---");

let aRray = [12, 25, 3, 6, 8, 14, 7, 23].map(function (currEl) {
  return currEl / 3;
});
console.log(aRray);

console.log("---Task4---");

let arRay = [
  "Hello",
  125,
  "Javascript",
  "html",
  43,
  "css",
  "scss",
  "bootstrap",
  88,
  59,
  "python",
].filter(function (currEl) {
  if (typeof currEl === "number") {
    console.log(currEl);
  }
});

console.log("---Task5---");

let languages = ["html", "css", "javascript", "python", "php"].filter(
  (currEl) => currEl.length > 3
);
console.log(languages);

console.log("---Task6---");

let arraY = ["academy", "of", "digital", "industries"].reduce(
  (prevEl, currEl) => prevEl + " " + currEl
);
console.log(arraY);

console.log("---Task7---");

let item = [12, "google", 32, null, "yahoo", 25].map(function (currEl) {
  if (typeof currEl === "number") {
    return currEl * currEl;
  } else {
    let newARRay = [];
    newARRay.push(currEl); // ??
  }
});
console.log(item);

console.log("---Task8---");

let words = ["Madrid", "Rome", "Milan", "Berlin"].filter(
  (item) => item.includes("m") || item.includes("M")
);
console.log(words);
