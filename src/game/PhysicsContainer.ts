
import { Container } from "@pixi/display";
import { Point } from "@pixi/math";


export class PhysicsContainer extends Container
{
    public speed:Point=new Point();
    public acceleration:Point = new Point();

    public update(deltaSeconds:number)
    {
        this.x += this.speed.x * deltaSeconds
        this.y += this.speed.y * deltaSeconds + 1/2 * this.acceleration.y * Math.pow(deltaSeconds,2)

        this.speed.y += this.acceleration.y * deltaSeconds;


    }
}