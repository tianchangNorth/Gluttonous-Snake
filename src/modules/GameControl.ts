import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

//游戏控制器，控制其他的所有类
class GameControl{
    //定义三个属性
    snake:Snake
    food:Food
    scorePanel:ScorePanel

    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init()
    }

    //调用后游戏开始
    init(){ 
        //绑定键盘按下事件
        document.addEventListener("keydown",this.keydownHandler)
    }

    //创建一个键盘按下的响应函数
    keydownHandler(event:KeyboardEvent){
        console.log(event.key); 
    }
}
export default GameControl