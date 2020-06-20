import {Vector2} from "./vector2";

export class BasicKinematicBody{
    public velocity : Vector2;
    public update: (dt: number, position: Vector2) => Vector2;

    constructor(velocity : Vector2){
        this.velocity = velocity;
    }
    
    
}

BasicKinematicBody.prototype.update = function(dt: number, position: Vector2) {
    return Vector2.add(position, Vector2.multiply(this.velocity,dt));
}