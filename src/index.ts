import { Application, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});


Loader.shared.add({url: "./vaguito.png", name: "myVaguito"})
Loader.shared.add({url: "./clampy.png", name: "myClampy"})

Loader.shared.onComplete.add(()=>{
	const clampy: Sprite = Sprite.from("myVaguito");

	console.log("Hello World!", clampy.width,clampy.height)

//clampy.anchor.set(0);

clampy.x = 300 //app.screen.width / 2;
clampy.y = 300 //app.screen.height / 2;

app.stage.addChild(clampy);

}
)

Loader.shared.load()

