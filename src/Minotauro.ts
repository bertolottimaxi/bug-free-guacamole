import { Container, Sprite } from "pixi.js";


export  class Minotauro extends Container{
	center: any;
    public brazoizquierdo:Sprite = Sprite.from("Left Arm.png")

    constructor(){
        super()
        const cuerpo: Sprite = Sprite.from("Body.png");
    	const cabeza: Sprite = Sprite.from("Head.png");
        const cara: Sprite = Sprite.from("Face 01.png");
        const brazoderecho:Sprite = Sprite.from("Right Arm.png")
        

	    //const proporción = vaguito.width/vaguito.height

        //cabeza.scale.set(0.1,0.1)
        this.brazoizquierdo.position.set(120,270)
        this.brazoizquierdo.anchor.set(0.5)
        brazoderecho.position.set(0,205)        
        
        //brazoderecho.pivot.set(25+brazoderecho.width*0.5,150+brazoderecho.height*0.5)
        
        brazoderecho.rotation=Math.PI/4
        //brazoizquierdo.rotation=-Math.PI/4
        cuerpo.position.set(25,175)
        cabeza.position.set(-5,0)
        cara.position.set(95,125)

      //this.addChild(brazoizquierdo);
        //this.addChild(cuerpo);
        //this.addChild(brazoderecho);
        //this.addChild(cabeza);
        //this.addChild(cara);
        
        
        this.scale.set(2,2)
                

;
    }

    public Caminar(radianes:number):void {
        var sentido=1
        if(this.brazoizquierdo.rotation>0||this.brazoizquierdo.rotation<-Math.PI/2)
		 sentido*=-1
		 this.brazoizquierdo.rotation += radianes*sentido

    }


    }


    

