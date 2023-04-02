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

    //创建一个属性判断游戏是否结束
    isLive = true

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
        //调用run方法使🐍移动
        this.run()
    }

    //创建一个键盘按下的响应函数
    keydownHandler(event:KeyboardEvent){
        //需要检查event.key的值是否合法{用户是否按了正确的按键}

        //修改direction
        this.direction = event.key
    }

    //让蛇移动的方法
    run(){
        //根据方向来使蛇的位置发生改变
        /*
            向上 top 减少
            向下 top 增加
            向左 left 减少
            向右 left 增加
        */ 
       //获取当前坐标
       let X = this.snake.X
       let Y = this.snake.Y
       switch (this.direction) {
        case "ArrowUp":
            Y-=10;           
            break;
        case "ArrowDown": 
            Y+=10;          
            break;
        case "ArrowLeft":
            X-=10;            
            break;
        case "ArrowRight": 
            X+=10;       
            break;
       }
       //检查🐍是否吃到了food
       this.checkEat(X,Y)

       //修改蛇的位置
       try{
        this.snake.X = X
        this.snake.Y = Y
       }catch(e){
        //进入catch出现异常 游戏结束
        alert("GAME OVER")
        //将islive设置
        this.isLive = false
       }
  
       //开启定时器
       this.isLive && setTimeout(this.run.bind(this),200-(this.scorePanel.level-1)*20)
    }

    //定义方法检查是否吃food
    checkEat(X:number,Y:number){
        if (X === this.food.X && Y === this.food.Y){
            //食物位置进行重置
            this.food.change()
            //分数增加
            this.scorePanel.addScore()
            //蛇增加
            this.snake.addBody()
        }
    }
}
export default GameControl