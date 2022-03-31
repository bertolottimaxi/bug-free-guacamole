import { Container, Sprite } from "pixi.js";


export  class VaguitoFlor extends Container{

    constructor(){
        super()
        const vaguito: Sprite = Sprite.from("myVaguito");
    	const flower: Sprite = Sprite.from("myFlower");

	    //const proporción = vaguito.width/vaguito.height

        flower.scale.set(0.1,0.1)
        flower.position.set(150,100)

        this.addChild(vaguito);
        this.addChild(flower);
        this.scale.set(0.5,0.5)

;
    }

}