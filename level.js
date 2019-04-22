import Cell, { drawGraph, generateGraph } from "./cell.js";
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let rows = 15;
let cols = 19;
let arr = [];

var bgImg = new Image();
bgImg.src = "./img/maze.png";
bgImg.onload = () => {
  // ctx.drawImage(bgImg, 0, 0);
  generateGraph(arr, rows, cols);
  main();
  // drawGraph(ctx, arr, rows, cols);
};

///////////////////////////////////////////////////////
var keysDown = {};

addEventListener(
  "keydown",
  function(e) {
    keysDown[e.keyCode] = true;
  },
  false
);

addEventListener(
  "keyup",
  function(e) {
    delete keysDown[e.keyCode];
  },
  false
);
///////////////////////////////////////////////////////

let pacman = new Pacman(4, 4, ctx);

let main = () => {
  ctx.drawImage(bgImg, 0, 0);
  pacman.draw(ctx);
  pacman.update(keysDown);
  requestAnimationFrame(main);
};
