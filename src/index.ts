import { Application,Loader, Ticker} from 'pixi.js'
import { assets } from './assets';
//import { Minotauro } from './Minotauro';
//import { Scene } from './Scene';
import './diagonal.png';
import { TickerScene } from './scenes/TickerScene';
import { Keyboard } from './utils/Keyboard';

export const WIDTH=1920
export const HEIGHT=1080

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0xFFFFFF,
	width: WIDTH,
	height: HEIGHT,
});

Keyboard.initialize();

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
	const escenaActualizable = new TickerScene()
	escenaActualizable.position.y = 0
	app.stage.addChild(escenaActualizable)

	Ticker.shared.add(function (deltaFrame){
		escenaActualizable.update(Ticker.shared.deltaMS,deltaFrame)
	})
	

}
)

Loader.shared.load()

