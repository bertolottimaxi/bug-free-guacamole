import { Graphics, Rectangle, Sprite } from "pixi.js";
import { IHitbox } from "./IHitbox";
import { PhysicsContainer } from "./PhysicsContainer";

export class Platform extends PhysicsContainer implements IHitbox {
    private hitbox: Graphics;
    
    constructor(x:number,y:number)
    {
        super();
        

        
        const spr = Sprite.from("Platform");        
        spr.scale.x =1
        spr.scale.y =1

        this.addChild(spr);

        this.position.set(x,y);        

        this.hitbox = new Graphics();
        this.hitbox.beginFill(0x00FFFF, 0);
        this.hitbox.drawRect(spr.width/2 ,spr.height/2,spr.width,spr.height);
        this.hitbox.endFill();
        this.addChild(this.hitbox);


    }
    

    public getHitbox():Rectangle
    {
        return this.hitbox.getBounds()
    }

    
}