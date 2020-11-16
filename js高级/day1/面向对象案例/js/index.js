var that;
class Tab{
    constructor(id){
        that = this;
        //获取元素
        this.main = document.querySelector(id);   
        this.tabadd = this.main.querySelector(".tabadd");
        // li的父元素
        this.ul = this.main.querySelector(".fisrstnav ul")
        // section的父元素
        this.tabscon = this.main.querySelector(".tabscon");

        this.init()
    }



    init(){
        that.updateNode();
        //init初始化操作然相关的元素绑定事件
        // 给添加按钮绑定点击事件
        this.tabadd.onclick = this.addTab;
        // 给每一个小li绑定事件
        for(var i =0;i<this.lis.length;i++){
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.remove[i].onclick = this.removeTab;
        }
    }
    // 因为我们动态添加元素 需要重新获取对应的元素
    updateNode(){
        this.lis = this.main.querySelectorAll("li");
        this.sections = this.main.querySelectorAll("section");
        this.remove = this.main.querySelectorAll(".icon-guanbi")

    }
    // 1.切换功能
    toggleTab(){
        // 这里的this指向当前点击的li
        that.clearClass()
        this.className = 'liactive'
        that.sections[this.index].className ='conactive'
    }
    // 排他 清除所有li 和 section的类
    clearClass(){
        for(var i = 0;i<this.lis.length;i++){
            this.lis[i].className = '';
            this.sections[i].className = ''
        }
    }
    // 2.添加功能
    addTab(){
        // 添加之前先排他
        that.clearClass()
        var  random = Math.random()
        // 1.创建li元素和section元素
        var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>'
        var section = '<section class="conactive">测试'+random+'</section>'
        // 2.把这两个元素追加到对应的父元素里面
        that.ul.insertAdjacentHTML('beforeend', li)
        that.tabscon.insertAdjacentHTML("beforeend", section)
        that.init()
    }

    // 3.删除功能
    removeTab(e){
        e.stopPropagation()
        var index = this.parentNode.index;
        console.log(index);
    }

    // 4.修改功能
    editTab(){

    }
}

new Tab("#tab")