import Cell, {
  drawGraph,
  generateGraph,
  data,
  generateCoins,
  drawCoins
} from "./cell.js";
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let rows = 15;
let cols = 19;
let arr = [];
let sprite = [];
let deleted = [];
let bgLoaded = false;

let pacman = new Pacman(360, 440, ctx, arr);

var bgImg = new Image();
bgImg.src = "./img/maze.png";
bgImg.onload = () => {
  bgLoaded = true;
  generateGraph(arr, rows, cols, ctx);
  generateCoins(data, arr);
  console.log(arr);
  main();
};

////////////////////////////////////////////////////////

let keyPressed;

addEventListener(
  "keydown",
  function(e) {
    keyPressed = e.keyCode;
  },
  false
);

////////////////////////////////////////////////////////

let main = () => {
  ctx.drawImage(bgImg, 0, 0);
  if (bgLoaded) {
    drawCoins(arr, ctx);
    pacman.draw();
    pacman.update(keyPressed);
    if (pacman.x % 40 == 0 && pacman.y % 40 == 0) {
      if (arr[pacman.y / 40][pacman.x / 40].coin == true)
        arr[pacman.y / 40][pacman.x / 40].coin = false;
    }
  }
  // pacman.draw(ctx);
  // pacman.update(keyPressed);
  requestAnimationFrame(main);
};
