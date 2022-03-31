import { Container } from "pixi.js";
import { VaguitoFlor } from "./VaguitoFlor";

export class Scene extends Container{
    constructor(){
        super();

        const vaguitoconFlor:VaguitoFlor =new VaguitoFlor();
        this.addChild(vaguitoconFlor);

    }
}