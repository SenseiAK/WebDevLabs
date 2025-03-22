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

// findTheBanana(L1);
// findTheBanana(L2);

function findTheBananaForEach(arr) {
  arr.forEach(item => {
    if (item === "Banana") {
      alert("Banana found using forEach in array: " + arr);
    }
  });
}
function validateForm() {
  const form = document.getElementById("contactForm");
  const errorDiv = document.getElementById("errorMsg");
  
  if(!form.checkValidity()) {
      errorDiv.style.display = "block";
      errorDiv.textContent = "Please fill out all required fields";
      return false;
  }
  return true;
}
// findTheBananaForEach(L1);
// findTheBananaForEach(L2);

function addYear() {
  const year = new Date().getFullYear();
  document.getElementById("copyYear").textContent = year;
}
// function showList() {
//   document.querySelector(".hidden-list").style.display = "block";
//   document.getElementById("showListBtn").style.display = "none";
// }
function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let greeting = "";
    if (h < 12) {
      greeting = "Good morning";
    } else if (h >= 12 && h < 18) { // Covers 12 PM to 5:59 PM
      greeting = "Good afternoon";
    } else if (h >= 18 && h < 20) { // Covers 6 PM to 7:59 PM
      greeting = "Good evening";
    } else { // Covers 8 PM to 11:59 PM and 0 AM to 4:59 AM
      greeting = "Good night";
    }
    if (window.location.href.indexOf("index.html") !== -1 || window.location.pathname === "/") {
    let greetingElem = document.getElementById("greeting");
    if (greetingElem) {
      greetingElem.innerHTML = greeting +  ", my name is Jerry";
    }
  } else {
    console.log(greeting);
  }
}
$(document).ready(function() {
  $('.extended-bio').hide();
  $('#readToggle').click(function() {
      $('.extended-bio').slideToggle(400);
      $(this).text(function(i, text) {
          return text === "Read More" ? "Read Less" : "Read More";
      });
  });
});document.addEventListener("DOMContentLoaded", function() {
  let btn = document.getElementById("findBananaBtn");
  if (btn) {
    btn.addEventListener("click", function() {
      findTheBanana(L1);
    });
  }
});
function getAdvice() {
  fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
          document.getElementById('adviceText').textContent = data.slip.advice;
      })
      .catch(error => {
          console.error('Error:', error);
          document.getElementById('adviceText').textContent = 
              "Failed to load advice. Please try again.";
      });
}

// Enhanced Validation
function validateForm() {
  const inputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
  let isValid = true;
  
  inputs.forEach(input => {
      if (!input.value.trim()) {
          isValid = false;
          input.style.border = "1px solid red";
      } else {
          input.style.border = "";
      }
  });

  const errorMsg = document.getElementById('errorMsg');
  if (!isValid) {
      errorMsg.textContent = "Please fill all required fields!";
      errorMsg.style.display = "block";
      return false;
  }
  return true;
}