import { Container } from "pixi.js";
import { Minotauro } from "./Minotauro";

export class Scene extends Container{
    constructor(){
        super();

        const minotauro:Minotauro =new Minotauro();
        this.addChild(minotauro);

    }
}