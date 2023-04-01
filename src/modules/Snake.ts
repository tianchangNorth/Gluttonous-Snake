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
        this.head.style.left = value +'px'
    }
    set Y(value:number){
        this.head.style.top = value +'px'
    }

    //设置🐍增加身体的一个坐标
    addBody(){ 
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }
}
export default Snake