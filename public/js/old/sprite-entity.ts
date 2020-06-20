import {Vector2} from "./vector2";
import {Sprite} from "./sprite";
import {Rectangle} from "./rectangle";
import {BasicKinematicBody} from "./basic-kinematic";

class SpriteEntity{
    public position: Vector2;
    public body: BasicKinematicBody;
    public sprite: Sprite;
    public collider: Rectangle;
    public update: (dt: number) => void;

    constructor(position: Vector2,body: BasicKinematicBody ,sprite: Sprite ){
        this.position = position;
        this.body = body;
        this.sprite = sprite;
    }

    
}

SpriteEntity.prototype.update = function update(dt:number) {
    this.position = this.body.update(dt, this.position);
}