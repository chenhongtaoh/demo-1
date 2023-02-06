
    $(function(){
        $("#daotop li").mouseenter(function(){
            // 当前元素添加active这个样式
            // 所有兄弟元素移出样式
            // alert("111ad");
            // $(this).addClass("active")
            // .siblings()
            // .removeClass("active");

            // 获取当前的变量
            var index = $(this).index();
            $(".main").eq(index)
            .addClass("active")
            .siblings(".main")
            .removeClass("active")
            
        });
    });
