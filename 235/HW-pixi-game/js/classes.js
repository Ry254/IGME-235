class Ship extends PIXI.Sprite {
    constructor(texture, x = 0, y = 0) {
        super(texture);
        this.anchor.set(.5, .5);
        this.scale.set(.1);
        this.x = x;
        this.y = y;
    }
}