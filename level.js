import Cell, { drawGraph, generateGraph } from "./cell.js";
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let rows = 15;
let cols = 19;
let arr = [];

var bgImg = new Image();
bgImg.src = "./img/maze.png";
bgImg.onload = () => {
  generateGraph(arr, rows, cols);

  main();
};

/////////////////////3//////////////////////////////////
let keyPressed;

addEventListener(
  "keydown",
  function(e) {
    keyPressed = e.keyCode;
  },
  false
);

/*addEventListener(
  "keyup",
  function(e) {
    delete keysDown[e.keyCode];
  },
  false
);*/
///////////////////////////////////////////////////////

let pacman = new Pacman(360, 440, ctx, arr);

let main = () => {
  ctx.drawImage(bgImg, 0, 0);
  pacman.draw(ctx);
  pacman.update(keyPressed);
  requestAnimationFrame(main);
};
