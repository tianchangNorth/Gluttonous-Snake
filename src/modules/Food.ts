//定义食物类
class Food{
    //定义一个属性表示食物所对应的元素
    element:HTMLElement;
    constructor(){
        //!-----表示element不可能为空
        this.element = document.querySelector("#food")!;
    }

    //定义获取食物x轴坐标的方法
    get X(){
        return this.element.offsetLeft;
    }
    //定义获取Y轴坐标的方法
    get Y(){
        return this.element.offsetTop;
    }

    //修改食物weihzi
    change(){
        //生成随机位置 食物位置最小是0 最大是290
        //🐍每次移动一格 一格大小为10px 所以食物坐标是整十
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

export default Food