import { Container, Texture, TilingSprite } from "pixi.js";
import { HEIGHT, WIDTH } from "..";

import { checkCollision } from "../game/IHitbox";
import { Platform } from "../game/Platform";
import { Player } from "../game/Player";
import { Poof } from "../game/Poof";
import { IUpdateable } from "../utils/IUpdateable";

export class TickerScene extends Container implements IUpdateable {

    private cositoRojo: Player;

    private platforms:Platform[];

    private poof:Poof;

    private world:Container;
    private background: TilingSprite;
    //private fondo:Fondo;

    private gameSpeed:number = 100;

    private timePassed:number = 0;

    private menos:Boolean = false

    constructor()
    {
        super();

        this.world = new Container();

        this.background = new TilingSprite(Texture.from("fondo"), WIDTH, HEIGHT);
        this.addChild(this.background);

        this.platforms = [];

        this.poof=new Poof()
        

        this.cositoRojo = new Player();
        this.cositoRojo.x = 600;
        this.cositoRojo.y = 0;
        this.cositoRojo.scale.set(3);
        this.world.addChild(this.cositoRojo);
        

        this.poof.scale.set(3);        
        this.poof.x = 600;
        this.poof.y = 0;

        this.poof.scale.set(4)
        

        this.addChild(this.world);

    }

    public update(deltaTime: number, _deltaFrame: number):void 
    {
        this.poof.update(deltaTime)
        

        this.timePassed += deltaTime;

        if (this.timePassed > (200000/this.gameSpeed))
        {
            this.gameSpeed += 1;
            
            this.timePassed = 0;            
            //this.platforms.push(new Platform(WIDTH/2,Math.random()*1080))
            //this.world.addChild(this.platforms[this.platforms.length-1])
        }

        
        this.cositoRojo.update(deltaTime); // update animation
        
        


        for (let platform of this.platforms) {
            platform.speed.x = - this.gameSpeed;
            platform.update(deltaTime/1000);
            const overlap = checkCollision(this.cositoRojo, platform);
            if (overlap != null)
            {
                this.cositoRojo.separate(overlap, platform);

                this.poof.position.x=platform.position.x
                this.poof.position.y=platform.position.y

                this.world.removeChild(platform)
                platform.destroy()

                
                
                this.world.addChild(this.poof)
                                                
                setTimeout(()=>this.world.removeChild(this.poof),850)
                

            }
            else

            if (platform.getHitbox().right < 0)
            {
                platform.destroy();
            }

            
        }

        

        this.platforms = this.platforms.filter((elem) => !elem.destroyed);        
        

        if(this.background.tilePosition.x < -WIDTH)            
                this.menos=true
        else if(this.background.tilePosition.x>0)            
             this.menos=false             
            
            
        if(this.menos)
            this.background.tilePosition.x += this.gameSpeed * deltaTime/1000;
        else
            this.background.tilePosition.x -= this.gameSpeed * deltaTime/1000;
    }
}