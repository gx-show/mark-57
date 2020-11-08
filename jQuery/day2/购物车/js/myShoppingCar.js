$(function () {
    getCount()
    // 1. 全选和反选全选
    // 全选
    $(".checkall").change(function () {
        $(".j-checkbox, .checkall ").prop("checked", $(this).prop("checked"))
        // 5. 增减背景类名
        if($(this).prop("checked")){
            $(".cart-item").addClass("check-cart-item")
        }else{
            $(".cart-item").removeClass("check-cart-item")

        }
    })
    // 反选
    $(".j-checkbox").change(function () {
        if ($(".j-checkbox:checked").length == $(".j-checkbox").length) {
            $(".checkall").prop("checked", true)
        } else {
            $(".checkall").prop("checked", false)
            // 5. 增减背景类名
            
        }
        if($(this).prop("checked")){
            $(this).parents(".cart-item").addClass("check-cart-item")
        }else{
            $(this).parents(".cart-item").removeClass("check-cart-item")

        }

    })
    // 2. 数量增减 价格相对应变化
    // 增加
    $(".increment").on("click", function () {
        var num = parseInt($(this).siblings(".itxt").val());
        num++;
        $(this).siblings(".itxt").val(num)
        var price = parseFloat($(this).parents(".p-num").siblings(".p-price").text().substring(1)) * num
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + price.toFixed(2))
        getCount()
    })
    // 减少
    $(".decrement").on("click", function () {
        var num = parseInt($(this).siblings(".itxt").val());
        if (num == 1) {
            return false
        }
        num--;
        $(this).siblings(".itxt").val(num)
        var price = parseFloat($(this).parents(".p-num").siblings(".p-price").text().substring(1)) * num
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + price.toFixed(2))
        getCount()
    })
    // 当 itxt 框中的数量别手动修改 发生变化时, 价格相对变化
    $(".itxt").change(function () {
        var num = parseInt($(this).val());
        var price = parseFloat($(this).parents(".p-num").siblings(".p-price").text().substring(1)) * num
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + price.toFixed(2))
        getCount()
    })
    // 3. 统计总数量和总价格
    function getCount() {
        var count = 0;
        var money = 0;
        // 遍历所有的itxt
        $(".itxt").each(function (i, dom) {
            count += parseInt($(dom).val())
        })
        $(".amount-sum em").text(count);
        $(".p-sum").each(function (i, dom) {
            money += parseFloat($(dom).text().substring(1))
        })
        console.log(money);
        $(".price-sum em").text("￥" + money.toFixed(2))
    }
    // 4. 删除商品
    // 1.点击删除
    $(".p-action").on("click", function () {
        $(this).parent().remove()
        getCount()
    })
    // 2.删除选中商品
    $(".remove-batch").on("click", function () {
        $(".j-checkbox:checked").parents(".cart-item").remove()
        getCount()
    })
    // 3.清理购物车
    $(".clear-all").on("click", function () {
        $(".cart-item").remove()
        getCount()
    })

})