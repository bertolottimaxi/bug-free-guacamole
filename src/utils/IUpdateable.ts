

export interface IUpdateable
{

 update(deltaTime:number,deltaFrame?:number):void;
    /*{ 

        //this.fondo.update(deltaFrame)
        //this.gorduCorriendo.update(deltaFrame)
        if(Keyboard.state.get("ArrowRight"))
        {         
         if(this.gorduCorriendo.scale.x<0)
           this.gorduCorriendo.scale.x*=-1;
         this.gorduCorriendo.play();
         this.removeChild(this.gorduSaltando)
         this.removeChild(this.gorduAgachado)
         this.addChild(this.gorduCorriendo)
         this.gorduCorriendo.x+=5
         this.gorduCorriendo.update(deltaFrame)
        }
        else if(Keyboard.state.get("ArrowLeft"))
        {
         if(this.gorduCorriendo.scale.x>0)
            this.gorduCorriendo.scale.x*=-1;
         this.gorduCorriendo.play();
         this.removeChild(this.gorduCorriendo)
         this.removeChild(this.gorduSaltando)
         this.removeChild(this.gorduAgachado)
         this.addChild(this.gorduCorriendo)
         this.gorduCorriendo.x-=5
         this.gorduCorriendo.update(deltaFrame)
        }

        else if(Keyboard.state.get("Space"))
        {         
         //this.gorduSaltando.position.x=this.gorduCorriendo.position.x
         //this.gorduSaltando.position.y=this.gorduCorriendo.position.y
         this.gorduSaltando.height=this.gorduCorriendo.height
         this.gorduSaltando.width=this.gorduCorriendo.width  
         this.gorduSaltando.animationSpeed=0.2
         this.gorduSaltando.y = this.gorduCorriendo.y--
         this.gorduSaltando.x = this.gorduCorriendo.x++

         this.removeChild(this.gorduCorriendo)
         this.addChild(this.gorduSaltando)
         
         this.gorduSaltando.update(deltaFrame)
        }
        else if(Keyboard.state.get("ArrowDown"))
        {         
         this.gorduAgachado.position.x=this.gorduCorriendo.position.x
         this.gorduAgachado.position.y=this.gorduCorriendo.position.y
         this.gorduAgachado.height=this.gorduCorriendo.height/2+50
         this.gorduAgachado.width=this.gorduCorriendo.width  
         this.removeChild(this.gorduCorriendo)
         this.addChild(this.gorduAgachado)         
         this.gorduAgachado.update(deltaFrame)
        }
        else this.gorduCorriendo.stop();      
        

     }*/

    }