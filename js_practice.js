// let a = 10;
// const b = 2;
// const myName = "nico";

// console.log(a+b);
// console.log(a*b);
// console.log(a/b);
// console.log("hello " + myName)

// myName = "nicolas"

// console.log("your new name is " + myName)

// true와 false도 다룸
// const amIFat = null; // null : 아무것도 없음. 이라고 확실히 표시
// let something; // 값을 주고 있지 않다. - undefined
// console.log(something, amIFat)

// const daysOfWeek = ["mon" , "tue" , "wed" , "thu" , "fri" , "sat" , "sun"];
// const nonsense = [1, 2, "hello", false, null, true, undefined, "nico"];
// console.log(daysOfWeek);

// Get Item from Array
// console.log(daysOfWeek[4]);
// Add one more day to the array
// daysOfWeek.push("sun");
// console.log(daysOfWeek);

// const player = {
//   name: "nico",
//   points: 10,
//   fat: true,
// };
// console.log(player);
// console.log(player.name);
// console.log(player["name"]);

// console.log(player.fat);
// player.fat = false;
// console.log(player.fat);

// console.log(player);
// player.lastName = "potato";
// player.points = player.points + 15;
// console.log(player);

// function sayHello(nameOfPerson, age) {
//   console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// }

// sayHello("nico", 10);
// sayHello("dal", 23);
// sayHello("lynn", 21);

// function plus(firstNumber, secondNumber) {
//   console.log(firstNumber+secondNumber);
// }

// function divide(a, b) {
//   console.log(a/b);
// }

// plus(8, 60);
// divide(98, 20);

// const player = {
//   name: "nico",
//   sayHello: function(otherPersonsName) {
//     console.log("Hello " + otherPersonsName + "! Nice to meet you!");
//   },
// };

// console.log(player.name);
// player.sayHello("lynn");

// const calculator = {
//   add: function(a, b) {
//     console.log(a+b);
//   },
//   sub: function(a, b) {
//     console.log(a-b);
//   },
//   mul: function(a, b) {
//     console.log(a*b);
//   },
//   div: function(a, b) {
//     console.log(a/b);
//   },
//   pow: function(a, b) {
//     console.log(a**b);
//   },
// }
// calculator.add(1, 2)
// calculator.sub(5, 1)
// calculator.mul(3, 4)
// calculator.div(12, 5)
// calculator.pow(3, 3)

// const age = 96;
// function calculateKrAge(ageOfForeigner) {
//   return ageOfForeigner + 2;
//   console.log("hello");
// }
// const krAge = calculateKrAge(age);
// console.log(krAge);

// const age = parseInt(prompt("How old are you?", 0));


// if (isNaN(age) || age < 0) {
//   console.log("양수를 입력해 주세요");
// } else if (age < 18) {
//   console.log("너무 어립니다");
// } else if (age >= 18 && age < 50) {
//   console.log("마실 수 있습니다");
// } else if (age >= 50 && age < 80) {
//   console.log("운동하세요")
// }

// const title = document.getElementById("title");
// title.innerText = "Got you!";
// console.log(title);
// console.dir(title)

// const hellos = document.getElementsByClassName("hello");
// console.log(hellos);

// const title = document.getElementsByTagName("h1");
const h1 = document.querySelector(".hello h1");
console.dir(h1);

// title.style.color = "blue";

function handleTitleClick() {
  // const clickedClass = "clicked";
  h1.classList.toggle("clicked");
  // if (h1.classList.contains(clickedClass)) {
  //   h1.classList.remove(clickedClass);
  // } else {
  //   h1.classList.add(clickedClass);
  // }

  // const currentColor = h1.style.color;
  // let newColor;
  // if (currentColor === "blue") {
  //   newColor = "tomato";
  // } else {
  //   newColor = "blue";
  // }
  // h1.style.color = newColor;
  // console.log(h1.style.color);
  // h1.style.color = "blue";
  // console.log(h1.style.color);
  // console.log("title was clicked!");
}
// function handleMouseEnter() {
//   h1.innerText = "mouse is here!";
// }
// function handleMouseLeave() {
//   h1.innerText = "mouse is gone!";
// }

h1.onclick = handleTitleClick;
// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);

// function handleWindowResize() {
//   document.body.style.backgroundColor = "tomato";
// }
// function handleWindowCopy() {
//   alert("copier!");
// }
// function handleWindowOffline() {
//   alert("SOS no wifi");
// }
// function handleWindowOnline() {
//   alert("ALL GOOOD");
// }

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);