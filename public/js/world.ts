

class World{
    public updateble //update 
    public drawable // draw
    public collidable ///collidable


}

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