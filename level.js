var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var keysDown = {};
var bgImg = new Image();
bgImg.src = "./img/maze.png";
var rows = 28;
var cols = 31;
var gr = [];
graph = () => {
  for (let i = 0; i < cols; i++) {
    gr[i] = [];
    for (let j = 0; j < rows; j++) {}
  }
};

drawGraph = (x, y) => {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      ctx.rect(j * 16.1, i * 16, 16.1, 16);
      ctx.lineWidth = 0.1;
      ctx.strokeStyle = "red";
      ctx.stroke();
      //   ctx.fillRect(i * 30, j * 30, 30, 30);
    }
  }
};

var main = () => {
  ctx.drawImage(bgImg, 0, 0);
  drawGraph(15, 15);
  requestAnimationFrame(main);
};
graph();
main();
