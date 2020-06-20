

export interface IUpdatable{
    update(dt);
}

export interface IDrawable{
    draw(dt, ctx);
}

export interface ICollidable{
    onCollide()
}