export default class Cell {
  constructor(row, column, ctx) {
    this.row = row;
    this.column = column;
    this.wall = false;
    this.coin = false;
    this.ctx = ctx;
    this.coinW = 7;
  }
}
//prettier-ignore
export var data = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

export function generateGraph(arr, rows, cols, ctx) {
  for (let i = 0; i < rows; i++) {
    arr[i] = [];
    for (let j = 0; j < cols; j++) {
      arr[i][j] = new Cell(j, i, ctx);
      if (data[i][j] == 1) {
        arr[i][j].wall = true;
      }
    }
  }
}

export function drawGraph(ctx, arr, rows, cols) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      /*if (arr[i][j].wall == true) {
        ctx.fillStyle = "black";
        ctx.fillRect(j * 40, i * 40, 40, 40);
        ctx.stroke();
      } else {
        ctx.fillStyle = "blue";
        ctx.fillRect(j * 40, i * 40, 40, 40);
        ctx.stroke();
      }*/
      ctx.strokeStyle = "red";
      ctx.rect(j * 40, i * 40, 40, 40);
      ctx.stroke();
    }
  }
}

export function generateCoins(data, arr) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[0].length; j++) {
      if (data[i][j] == 0)
        if (i != 11 || j != 9) {
          //   sprite.push(new Coin(j, i, ctx));
          // console.log(`R: ${i}\tC: ${j}`);
          arr[i][j].coin = true;
        }
    }
  }
}
export function drawCoins(arr, ctx) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j].coin == true) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(
          arr[i][j].row * 40 + 20 - arr[i][j].coinW / 2,
          arr[i][j].column * 40 + 20 - arr[i][j].coinW / 2,
          arr[i][j].coinW,
          arr[i][j].coinW
        );
      }
    }
  }
}
