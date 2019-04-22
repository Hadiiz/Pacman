class Pacman {
  constructor(x, y, ctx) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "./img/pacman.png";
    this.imgY = 0;

    this.imgW = 40;
    this.imgH = 40;
    this.frame = 1;
    this.tickCount = 0;
  }

  update = keysdown => {
    this.tickCount++;
    if (this.tickCount > 20) {
      this.frame++;
      this.tickCount = 0;
      this.frame = this.frame % 2;
    }
    if (39 in keysdown) {
      this.x++;
      this.imgY = 0;
    }
    if (37 in keysdown) {
      this.x--;
      this.imgY = 1;
    }
    if (38 in keysdown) {
      this.y--;
      this.imgY = 2;
    }
    if (40 in keysdown) {
      this.y++;
      this.imgY = 3;
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
}
