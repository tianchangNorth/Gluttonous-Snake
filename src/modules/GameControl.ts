import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

//游戏控制器，控制其他的所有类
class GameControl{
    //定义三个属性
    snake:Snake
    food:Food
    scorePanel:ScorePanel

    //创建一个属性来存储蛇的移动方向（也就是按键的方向）
    direction:string = ''

    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init()
    }

    //调用后游戏开始
    init(){ 
        //绑定键盘按下事件 
        document.addEventListener("keydown",this.keydownHandler.bind(this))
    }

    //创建一个键盘按下的响应函数
    keydownHandler(event:KeyboardEvent){
        //需要检查event.key的值是否合法{用户是否按了正确的按键}
        
        //修改direction
        this.direction = event.key
    }
}
export default GameControl