export class Rectangle{

    public x: number;
    public y: number;

    public width: number;
    public height: number;
    top: () => any;
    bottom: () => any;
    left: () => any;
    right: () => any;

    constructor(x: number, y: number , width: number, height: number){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }    
    
    public intersect: (rect: any) => boolean;
    public contains: (x: any, y: any) => boolean;


}

Rectangle.prototype.intersect =  function(rect){
    if (this.contains(rect.x, rect.y)){
        return true;
    }
    if (this.contains(rect.x + rect.width, rect.y)){
        return true;
    }
    if (this.contains(rect.x, rect.y + rect.height)){
        return true;
    }
    if (this.contains(rect.x + rect.width, rect.y + rect.height)){
        return true;
    }
    return false;
}

Rectangle.prototype.contains = function(x, y){
    if (x > this.x && x < this.x + this.width &&
        y > this.y && y < this.y + this.height){
        return true;        
    }else{
        return false
    }
}

Rectangle.prototype.top = function(){
    return this.y;
}

Rectangle.prototype.bottom = function(){
    return this.y + this.height;
}

Rectangle.prototype.left = function(){
    return this.x;
}

Rectangle.prototype.right = function(){
    return this.x + this.width;
}



