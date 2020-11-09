
$(function () {
    load()
    // 1. 按下回车 把完整的数据存储到本地存储里
    $("#title").on("keydown", function (event) {
        // 存储的数据格式  var todolist = [{title: "xxx", done: false}]

        if (event.keyCode == 13) {
            //   获取本地存储
            if ($(this).val() === '') {
                alert("请输入内容")
            } else {
                // 霍 获取本地存储
                var local = getData()
                // 秀 修改数据
                local.push({ title: $(this).val(), done: false });
                // 春 保存到本地存储
                saveData(local);
                //2. 重新渲染页面
                // 宣 重新渲染页面
                load()
                $(this).val("")
            }
        }
    })


    // 3. 删除操作 要删除当前项要先自定义索引 找到当前项 利用遍历里面的i
    $("ol,ul").on("click", "a", function () {
        // 霍秀春宣
        var data = getData();
        var index = $(this).attr("id")
        // console.log(index);
        // data.splice(index, 1)
        data.splice(index, 1)

        saveData(data)

        load()

    })

    // 4.正在进行和已完成选项操作
    $("ol,ul").on("click", "input", function () {
        var data = getData()
        var index = $(this).siblings("a").attr("id")
        // console.log(index);
        data[index].done = $(this).prop("checked")
        console.log(data[index].done);
        saveData(data);
        load()
    })

    // 获取本地存储
    function getData() {
        var data = localStorage.getItem("todoList");
        if (data !== null) {
            // 本地存储里面的数据是字符串格式的 但是我们需要的是对象格式的
            return JSON.parse(data);
        } else {
            return [];
        }
    }

    
    // 保存本地存储
    function saveData(data) {
        // 本地存储里面的数据是字符串格式的,我们的数据要把对象格式转换成字符串格式才能存储
        var data = localStorage.setItem("todoList", JSON.stringify(data))
    }

    // 渲染页面  要遍历data
    function load() {
        var data = getData();
        $("ol,ul").empty()
        var todoCount = 0;
        var doneCount = 0;
        $.each(data, function (i, dom) {
            if (dom.done) {
                $("ul").prepend("<li><input type='checkbox' checked> <p> " + dom.title + " </p> <a href='javascript:;' id=" + i + "></a></li>");
                doneCount++;
            } else {
                $("ol").prepend("<li><input type='checkbox' > <p> " + dom.title + " </p> <a href='javascript:;' id=" + i + "></a></li>");
                todoCount++;
            }
        })
        $("#todocount").text(todoCount)
        $("#donecount").text(doneCount)
    }

})