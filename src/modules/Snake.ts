class Snake{
    //定义蛇头元素
    head:HTMLElement
    //定义蛇的身体（包括蛇头）
    boides:HTMLCollection
    //获取设的容器
    element:HTMLElement

    constructor(){
        this.element = document.querySelector("#snake")!
        this.head = document.querySelector("#snake > div")!;
        this.boides = this.element.getElementsByTagName("div");
    }

    //获取蛇的坐标
    get X(){
        return this.head.offsetLeft
    }
    get Y(){
        return this.head.offsetTop
    }

    //设置蛇的坐标
    set X(value:number){
        if (this.X === value) {
            return
        }
        //X值的合法范围0-290
        if(value < 0 || value > 290){
            //进入判断说明🐍撞墙了,抛出一个异常
            throw new Error("🐍撞墙了");
        }
        //禁止掉头 即往左时不可往右 反之同理
        if (this.boides[1] && (this.boides[1] as HTMLElement).offsetLeft === value) {
            // console.log('调头了');
            //如果调头了 让🐍继续向反方向移动
            if (value > this.X) {
                //说明🐍在向右走 发生了掉头 应该使🐍继续向右走
                value = this.X - 10
            }else{
                value = this.X + 10
            }
        }

        this.moveBody()

        this.head.style.left = value +'px'
        //检查是否撞到
        this.checkHeadBody()
    }
    set Y(value:number){
        if (this.Y === value) {
            return
        }
        if (this.boides[1] && (this.boides[1] as HTMLElement).offsetTop === value) {
            // console.log('调头了');
            //如果调头了 让🐍继续向反方向移动
            if (value > this.Y) {
                value = this.Y- 10
            }else{
                value = this.Y + 10
            }
        }

        this.moveBody()

        this.head.style.top = value +'px'
        //检查是否撞到
        this.checkHeadBody()
    }

    //设置🐍增加身体的一个坐标
    addBody(){ 
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }

    //身体移动 
    moveBody(){
        /* 将后边的身体设置为前边身体的位置 */
        //遍历获取所有的身体
        for(let i = this.boides.length -1 ;i > 0;i--){
            //获取前边身体的位置
            let X = (this.boides[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.boides[i - 1] as HTMLElement).offsetTop;

            //赋值给当前的身体
            (this.boides[i] as HTMLElement).style.left = X + 'px';
            (this.boides[i] as HTMLElement).style.top = Y + 'px'
        }
    }

    //检查蛇头是否撞到身体 
    checkHeadBody(){
        //获取所有的身体 检查是否位置重合 
        for (let i = 1; i < this.boides.length;i++){
            let bd = this.boides[i] as HTMLElement
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                // 说明蛇头撞到了身体
                throw new Error("撞到自己了");   
            }
        }
    }
}
export default Snake