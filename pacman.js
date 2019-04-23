class Pacman {
  constructor(x, y, ctx, arr) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.arr = arr;

    this.img = new Image();
    this.img.src = "./img/pacman.png";
    this.imgY = 0;
    this.imgW = 40;
    this.imgH = 40;

    this.frame = 1;
    this.tickCount = 0;

    this.pacmanCol = this.x / 40;
    this.pacmanRow = this.y / 40;

    this.direction;
    this.directionToBe;
  }

  update = keyPressed => {
    this.tickCount++;
    if (this.tickCount > 20) {
      this.frame++;
      this.tickCount = 0;
      this.frame = this.frame % 2;
    }

    if (this.direction != null) {
      this.directionToBe = keyPressed;
    } else {
      this.direction = keyPressed;
    }

    //Right
    if (this.direction == 39) {
      if (this.arr[this.pacmanRow][this.pacmanCol + 1].wall == false) {
        this.x++;
        if (this.x % 40 == 0) {
          this.pacmanCol = this.x / 40;
          this.updateDirection();
        }
      } else {
        this.updateDirection();
      }
    }
    //Left
    else if (this.direction == 37) {
      if (this.arr[this.pacmanRow][this.pacmanCol - 1].wall == false) {
        this.x--;
        if (this.x % 40 == 0) {
          this.pacmanCol = this.x / 40;
          this.updateDirection();
        }
      } else {
        this.updateDirection();
      }
    }
    //Up
    else if (this.direction == 38) {
      if (this.arr[this.pacmanRow - 1][this.pacmanCol].wall == false) {
        this.y--;
        if (this.y % 40 == 0) {
          this.pacmanRow = this.y / 40;
          this.updateDirection();
        }
      } else {
        this.updateDirection();
      }
    }
    //Down
    else if (this.direction == 40) {
      if (this.arr[this.pacmanRow + 1][this.pacmanCol].wall == false) {
        this.y++;
        if (this.y % 40 == 0) {
          this.pacmanRow = this.y / 40;
          this.updateDirection();
        }
      } else {
        this.updateDirection();
      }
    }
  };

  draw = () => {
    this.ctx.drawImage(
      this.img,
      this.frame * 40,
      this.imgY * 40,
      40,
      40,
      this.x,
      this.y,
      40,
      40
    );
  };

  updateDirection = () => {
    //left
    if (this.directionToBe == 37) {
      if (this.arr[this.pacmanRow][this.pacmanCol - 1].wall == false) {
        this.direction = this.directionToBe;
        this.imgY = 1;
      }
    }
    //Right
    else if (this.directionToBe == 39) {
      if (this.arr[this.pacmanRow][this.pacmanCol + 1].wall == false) {
        this.direction = this.directionToBe;
        this.imgY = 0;
      }
    }
    //Up
    else if (this.directionToBe == 38) {
      if (this.arr[this.pacmanRow - 1][this.pacmanCol].wall == false) {
        this.direction = this.directionToBe;
        this.imgY = 2;
      }
    }
    //Down
    else if (this.directionToBe == 40) {
      if (this.arr[this.pacmanRow + 1][this.pacmanCol].wall == false) {
        this.direction = this.directionToBe;
        this.imgY = 3;
      }
    }
  };
}
