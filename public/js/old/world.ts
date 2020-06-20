import {IUpdatable, IDrawable, ICollidable} from "./intefaces";

class World{
    public updatebles;
    public drawables;
    public collidables;
    update: (dt: any) => void;
    draw: (dt: any, ctx: any) => void;

    constructor(){
        this.updatebles = [];
        this.drawables = []
    }


}

World.prototype.update = function(dt){
    this.updatebles.array.forEach(e => {
        e.update(dt);
    });
}

World.prototype.draw = function(dt, ctx){
    this.drawables.array.forEach(e => {
        e.draw();
    });
}
/*
class CollidableCollection{
    public staticObjects = [];
    public dynamicObject = [];
    collisionUpdate: (dt: number) => void;

}

CollidableCollection.prototype.collisionUpdate = function (dt :number) {
    this.dynamicObject.array.forEach(e => {
        e.onCollide
    });
}

*/