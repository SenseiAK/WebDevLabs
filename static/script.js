let x = 5;
let y = 7;
let z = x + y;
console.log("Sum of x and y:", z); // Expected output: 12

let A = "Hello ";
let B = "world!";
let C = A + B;
console.log("Concatenated string:", C); // Expected output: "Hello world!"

// --- SumNPrint Function ---
function SumNPrint(x1, x2) {
  let result = x1 + x2;
  console.log("Result from SumNPrint:", result);
  return result;
}

SumNPrint(x, y);
SumNPrint(A, B);

if (C.length > z) {
  console.log(C);
} else if (C.length < z) {
  console.log(z);
} else {
  console.log("good job!");
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Banana") {
      alert("Banana found using for loop in array: " + arr);
      break;
    }
  }
}

findTheBanana(L1);
findTheBanana(L2);

function findTheBananaForEach(arr) {
  arr.forEach(item => {
    if (item === "Banana") {
      alert("Banana found using forEach in array: " + arr);
    }
  });
}

findTheBananaForEach(L1);
findTheBananaForEach(L2);

function greetingFunc() {
  let d = new Date();
  let h = d.getHours();
  let greeting = "";
  if (h < 12) {
    greeting = "Good morning";
  } else if (h >= 12 && h < 18) {
    greeting = "Good afternoon";
  } else if (h >= 18 && h < 20) {
    greeting = "Good evening";
  } else if ((h >= 20 && h <= 23) || (h >= 0 && h < 5)) {
    greeting = "Good night";
  } else {
    greeting = "Hello";
  }
  if (window.location.href.indexOf("index.html") !== -1 || window.location.pathname === "/") {
    let greetingElem = document.getElementById("greeting");
    if (greetingElem) {
      greetingElem.innerHTML = greeting;
    }
  } else {
    console.log(greeting);
  }
}

if (window.location.href.indexOf("index.html") !== -1 || window.location.pathname === "/") {
  greetingFunc();
}

document.addEventListener("DOMContentLoaded", function() {
  let btn = document.getElementById("findBananaBtn");
  if (btn) {
    btn.addEventListener("click", function() {
      findTheBanana(L1);
    });
  }
});
