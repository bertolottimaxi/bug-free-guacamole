import { AnimatedSprite, Graphics, Rectangle,  Texture } from "pixi.js";
import { Keyboard } from "../utils/Keyboard";
import { IHitbox } from "./IHitbox";
import { PhysicsContainer } from "./PhysicsContainer";
import { Platform } from "./Platform";

export class Player extends PhysicsContainer implements IHitbox
{
    private static readonly GRAVITY = 300;
    private static readonly SPEED = 100;
    private static readonly JUMP_SPEED = 500;
    
    public canJump = true;
    
    private gorduCorriendo:AnimatedSprite;
    //private pikachu:Spritesheet;
    

    private hitbox:Graphics;
    constructor()
    {
        super();

        // Animated Sprite
        this.gorduCorriendo=new AnimatedSprite(
            [
                Texture.from("gordito01"),
                Texture.from("gordito02"),
                Texture.from("gordito03"),
                Texture.from("gordito04"),
                Texture.from("gordito05"),
                Texture.from("gordito06"),
                Texture.from("gordito07"),
                Texture.from("gordito08"),
                Texture.from("gordito09"),
                Texture.from("gordito10"),
                Texture.from("gordito11"),
                Texture.from("gordito12"),
                Texture.from("gordito13"),
                Texture.from("gordito14"),
                Texture.from("gordito15"),
                Texture.from("gordito16"),
                Texture.from("gordito17"),
                Texture.from("gordito18"),
            ],false)

            
            
        this.gorduCorriendo.play();
        //this.gorduCorriendo.anchor.set(0.3,1);
        this.gorduCorriendo.animationSpeed = 0.2;

        const auxZero = new Graphics();
        auxZero.beginFill(0xAA0099,0.5);
        auxZero.drawCircle(0,0,300);
        auxZero.endFill();

       
        this.hitbox = new Graphics();
        this.hitbox.beginFill(0xFF00FF, 0);
        this.hitbox.drawRect(0,0,this.gorduCorriendo.width, this.gorduCorriendo.height);
        this.hitbox.endFill();
        this.hitbox.x = 0;
        this.hitbox.y = 0;
        
        
        this.addChild(this.gorduCorriendo);
        this.gorduCorriendo.addChild(this.hitbox);
        this.acceleration.y = Player.GRAVITY;
       
        

        
        
        Keyboard.down.on("Space", this.jump, this);
    }

    public override destroy(options:boolean) {
        super.destroy(options);
        Keyboard.down.off("Space",this.jump);
    }

    public override update(deltaMS:number)
    {
        super.update(deltaMS/1000);
        this.gorduCorriendo.update(deltaMS / (1000/60));

        if (Keyboard.state.get("ControlLeft"))
        {
            this.position.set(600,10)
            this.acceleration.y = Player.GRAVITY;
            this.canJump=true
        }
        else if (Keyboard.state.get("ArrowRight"))
        {
            this.speed.x = Player.SPEED;
            this.gorduCorriendo.scale.x = 1;
        }else if (Keyboard.state.get("ArrowLeft"))
        {
            this.speed.x = -Player.SPEED;
            this.gorduCorriendo.scale.x = -1;
        }else{
            this.speed.x = 0;
        }

        if (Keyboard.state.get("ArrowDown"))
        {
            this.acceleration.y = Player.GRAVITY * 5;
        }else
        {
            this.acceleration.y = Player.GRAVITY;
        }

    }

    private jump()
    {
        if(this.canJump)
        {
            this.canJump = false;
            this.speed.y = -Player.JUMP_SPEED;
        }
    }

    public getHitbox():Rectangle
    {
        return this.hitbox.getBounds()
    }

    public separate(overlap: Rectangle, platform: Platform) {
                    if ((this.y+this.height) > platform.y)
                    {                        
                        this.y -= overlap.height;
                        this.speed.y = 200;
                        this.canJump = true;
                        this.jump()
                    }

                }
    }

