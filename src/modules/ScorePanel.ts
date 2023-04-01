//定义记分牌类
class ScorePanel{
    //用来记录分数和等级
    score:number = 0;
    level:number = 1;
    //分数和等级所在元素，在构造函数中进行初始化
    scoreSpan:HTMLElement;
    levelSpan:HTMLElement;

    //设置一个变量限制等级
    maxLevel:number;
    //设置变量表示升级
    upScore:number

    constructor(maxLevel = 10,upScore = 10){
        this.scoreSpan = document.querySelector("#score")!
        this.levelSpan  = document.querySelector("#level")!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    //设置一个加分方法
    addScore(){
        this.score++;
        this.scoreSpan.innerHTML = this.score + '';
        //判断分数
        if(this.score % this.upScore === 0){
            this.levelUp()
        }
    }

    //提升等级方法
    levelUp(){
        if (this.level < this.maxLevel) {
            this.level++;
            this.levelSpan.innerHTML = this.level + '';
        }else{
            alert('恭喜您通关了游戏，请联系游戏制作人 wechat:18539162972获取专属奖励😊')
        }
    }
}

export default ScorePanel