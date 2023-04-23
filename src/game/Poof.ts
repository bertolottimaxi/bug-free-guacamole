import { AnimatedSprite, Texture } from "pixi.js";
import { PhysicsContainer } from "./PhysicsContainer";





export class Poof extends PhysicsContainer
{    
    private poof:AnimatedSprite;
        
    constructor()
    {
        super();

        this.poof=new AnimatedSprite(
            [
                Texture.from("poof01"),
                Texture.from("poof02"),
                Texture.from("poof03"),
                Texture.from("poof04"),
                Texture.from("poof05"),
                Texture.from("poof06"),
                Texture.from("poof07"),
                Texture.from("poof08"),
                Texture.from("poof09"),
                Texture.from("poof10"),
                Texture.from("poof11"),
                Texture.from("poof12"),
                                
            ],false)
            
            
        this.poof.play();        
        this.poof.animationSpeed = 0.7;
        

        this.addChild(this.poof);        
        
        
    }

    public override update(deltaMS:number)
    {
        super.update(deltaMS/1000);
        this.poof.update(deltaMS / (1000/60));

    }

}
    