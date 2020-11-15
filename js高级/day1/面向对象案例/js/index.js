var that;
class Tab{
    constructor(id){
        that = this;
        //获取元素

        this.main = document.querySelector(id);
        this.lis = this.main.querySelectorAll("li");
        this.sections = this.main.querySelectorAll("section");
        this.init()
    }



    init(){
        //init初始化操作然相关的元素绑定事件
        for(var i =0;i<this.lis.length;i++){
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
        }
    }

    // 1.切换功能
    toggleTab(){
        // 这里的this指向当前点击的li
        that.clearClass()
        this.className = 'liactive'
        that.sections[this.index].className ='conactive'
    }
    // 排他
    clearClass(){
        for(var i = 0;i<this.lis.length;i++){
            this.lis[i].className = '';
            this.sections[i].className = ''
        }
    }
    // 2.添加功能
    addTab(){}
}

new Tab("#tab")