
export class Vector2{
    public x : number;
    public y : number;
    static add: (v1: Vector2, v2: Vector2) => Vector2;
    static multiply: (v: any, n: any) => Vector2;
    constructor(x : number, y : number){
        this.x = x;
        this.y = y;
    }
}


Vector2.add = function(v1 : Vector2, v2 : Vector2){
    v1.x += v2.x;
    v1.y += v2.y;
    return v1;
}

Vector2.multiply = function(v : Vector2, n : number){
    v.x *= n;
    v.y *= n; 
    return v;
}

Vector2.multiply = function(v1 : Vector2, v2 : Vector2){
    v1.x *= v2.x;
    v1.y *= v2.y;``
    return v1;
}


