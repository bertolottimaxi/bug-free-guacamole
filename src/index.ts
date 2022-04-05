import { Application,Graphics,Loader, Sprite} from 'pixi.js'
import { assets } from './assets';
import { Minotauro } from './Minotauro';

import { Scene } from './Scene';


const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x649595,
	width: 1280,
	height: 720,
});

window.addEventListener("resize", ()=>{

	console.log("resized");

	const scaleX= window.innerWidth/app.screen.width
	const scaleY=window.innerHeight/app.screen.height

	const scale=Math.min(scaleX,scaleY)

	const gameWidth=Math.round(app.screen.width*scale)
	const gameHeight= Math.round(app.screen.height*scale)

	const marginHorizontal=Math.floor((window.innerWidth-gameWidth)/2)
	const marginVertical=Math.floor((window.innerHeight-gameHeight)/2)


	app.view.style.width=gameWidth+"px"
	app.view.style.height=gameHeight+"px"
	app.view.style.marginLeft=marginHorizontal+"px"
	app.view.style.marginRight=marginHorizontal+"px"
	app.view.style.marginTop=marginVertical+"px"
	app.view.style.marginBottom=marginVertical+"px"



});

window.dispatchEvent(new Event("resize"))

Loader.shared.add(assets)

Loader.shared.onComplete.add(()=>{

	const b1:Sprite = Sprite.from("diagonal.png")
	const b2:Sprite = Sprite.from("diagonal.png")
	const b3:Sprite = Sprite.from("Left Arm.png")

	
	b1.position.set(400,405)        
	b2.x=400;b2.y=405
	b3.position.set(400,405)        
	
	
	

	b1.anchor.set(32/256)        
	b3.anchor.set(100/140,40/140)
	//b3.pivot.set(100,40)
	//b1.pivot.set(0,)
	b1.scale.set(0.5)
	b2.scale.set(0.5)
	
	//app.stage.addChild(b3);
	app.stage.addChild(b1);
	
	app.stage.addChild(b2);
	

	const myGraph:Graphics =new Graphics();
        myGraph.lineStyle({color:0xFF0000,width:5,alpha:1})
        myGraph.moveTo(b2.x,b2.y)
        myGraph.lineTo(b2.x+256,b2.y)
		myGraph.lineTo(b2.x+256,b2.y+256)
		myGraph.lineTo(b2.x,b2.y+256)
		myGraph.lineTo(b2.x,b2.y)
		var c=32
		myGraph.lineTo(b2.x+c,b2.y)
		myGraph.lineTo(b2.x+c,b2.y+c)
		myGraph.lineTo(b2.x,b2.y+c)
		myGraph.lineTo(b2.x,b2.y)
		myGraph.drawCircle(400,405,32)
		
        
        app.stage.addChild(myGraph);

	const myScene=new Scene();
	app.stage.addChild(myScene);
	const minotauro:Minotauro=new Minotauro()
	app.stage.addChild(minotauro);
	//var x=1
	//var y=1
	var r=Math.PI/256
	
	b3.rotation+=r
	app.ticker.add(() => {			
		 b1.rotation += r
		 minotauro.Caminar(r)
		 
		
		
				
	});




//alert(vaguitoconFlor.toGlobal(flower.position))

//flower.position.set(flower.parent.toLocal(new Point(window.innerWidth/2,window.innerHeight/2)).x,flower.parent.toLocal(new Point(window.innerWidth/2,window.innerHeight/2)).y)



}
)

Loader.shared.load()

