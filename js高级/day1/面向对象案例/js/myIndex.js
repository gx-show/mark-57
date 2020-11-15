
var that;

class Tab {
    constructor(id) {
        that = this;
        // 获取元素
        this.main = document.querySelector(id);
        this.lis = this.main.querySelectorAll(".fisrstnav li");
        this.sections = this.main.querySelectorAll("section");
        this.init()
    }

    // 初始化 遍历标题
    init() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggle;
        }

    }

    remove() {
        for (var i = 0; i < that.lis.length; i++) {
            console.log(i);
            that.lis[i].classList.remove('liactive')
            that.sections[i].classList.remove('conactive')

        }
    }
    toggle(){
       that.remove() 
       this.classList.add('liactive')
       that.sections[this.index].classList.add('conactive')
    }
}
new Tab("#tab");