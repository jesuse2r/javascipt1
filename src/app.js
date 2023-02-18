/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["dog", "cat", "turtle", "bird"];
  let what = ["ate", "pissed", "crushed", "broke"];
  let toWhat = ["my homework", "my car", "my shoe", "my bike"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoRandom = Math.floor(Math.random() * who.length);
  let whatRandom = Math.floor(Math.random() * what.length);
  let toWhatRandom = Math.floor(Math.random() * toWhat.length);
  let whenRandom = Math.floor(Math.random() * when.length);

  let excuse = `${who[whoRandom]} ${what[whatRandom]} ${toWhat[toWhatRandom]} ${when[whenRandom]}`;

  let newElement = document.createElement("p");
  newElement.innerHTML = excuse;

  let excuseContainer = document.querySelector("#excuse");

  excuseContainer.appendChild(newElement);
};

console.log;
