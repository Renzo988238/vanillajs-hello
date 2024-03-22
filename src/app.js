/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - 1 - min + 1)) + min;
};

window.onload = function() {
  //write your code here
  const whoElement = who[getRandomNumber(0, who.length)];
  const actionElement = action[getRandomNumber(0, action.length)];
  const whatElement = what[getRandomNumber(0, what.length)];
  const whenElement = when[getRandomNumber(0, when.length)];

  const excuse = `${whoElement} ${actionElement} ${whatElement} ${whenElement} `;
  document.getElementById("excuse").innerHTML = excuse;
};
