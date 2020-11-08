





$(document).ready(function () {
    // 1. tool 显示和隐藏
    var toolTop = $(".recommend").offset().top;
    toggleTool()
    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn()
        } else {
            $(".fixedtool").fadeOut()

        }
    }
    // 当页面滚动
    $(document).scroll(function () {
        toggleTool()
        // 3. 页面滚动到某个区域, 左侧电梯导航 li 相应添加删除 current
        $(".floor .w").each(function (i, dom) {
            if ($(document).scrollTop() >= $(dom).offset().top) {
                $(".fixedtool li").eq(i).addClass("current").siblings().removeClass("current")
            }
        })
    })
    //    2.点击电梯导航页面可以滚动到相应内容区域
    $(".fixedtool li").click(function () {
        $(this).addClass("current").siblings().removeClass("current")
        var index = $(this).index()
        var top = $(".floor .w").eq(index).offset().top
        $("html,body").stop().animate({
            scrollTop: top
        })
    })
})