function $(id) {return document.getElementById(id);}
function show(obj) { obj.style.display = "block";}
function hide(obj) { obj.style.display = "none";}
// 被卷去的头部
function scroll() {
    if(window.pageYOffset != null)  //  ie9+ 和其他浏览器
    {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode == "CSS1Compat")  // 声明的了 DTD
    // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
    {
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return { //  怪异浏览器
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}
//监测屏幕宽度
function client(){    
    if(window.innerWidth != null){    //  ie9+ 和其他浏览器
        return{
            width:window.innerHeight,
            height:window.innerWidth
        }
    }
    else if(document.compatMode === "CSS1Compate"){  //标准浏览器
        return{
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientWidth
        }
    }
    return{    //怪异浏览器
        width: document.body.clientWidth,
        height: document.body.clientHeight
    }
}
// 匀速运动 上
function animatetop(obj,target){
    clearInterval(obj.timer);   //运行前先清理定时器
    var speed = obj.offsetTop < target ? 5 : -5;  //用来判断 因该加还是减

    obj.timer = setInterval(function(){     //自定义属性不需要加var
        var result = obj.offsetTop - target;   // 差值不会超过五
        obj.style.top = obj.offsetTop + speed + "px";
        if(Math.abs(result) <= 5){    //小于五时到位置了
            clearInterval(obj.timer);
            obj.style.top = target + "px";  //有5像素差距，直接跳转
        }
    },20);

}
// 匀速运动左
function animateleft(obj,target){
    clearInterval(obj.timer);   //运行前先清理定时器
    var speed = obj.offsetLeft < target ? 5 : -5;  //用来判断 因该加还是减

    obj.timer = setInterval(function(){     //自定义属性不需要加var
        var result = obj.offsetLeft - target;   // 差值不会超过五
        obj.style.left = obj.offsetLeft + speed + "px";
        if(Math.abs(result) <= 5){    //小于五时到位置了
            clearInterval(obj.timer);
            obj.style.left = target + "px";  //有5像素差距，直接跳转
        }
    },5);

}
  // 封装多个变速函数
  function animate(obj,json,fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var flag = true;
        // 计算步长     用target 
        // 遍历json
        for(var k in json){
            var current = 0;
            if(k == "opacity")
            {
                current = getstyle(obj,k)*100 ||0;
            }
            else
            {
                current = parseInt(getstyle(obj,k));  //数值
            }
            var step = (json[k] - current)/10;  //步长
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            
            // 判断透明度
            if(k == "opacity")
            {
                if("opacity" in obj.style)
                {
                    obj.style.opacity = (current + step)/100;
                }
                else
                {
                    obj.style.filter = "alpha(opacity = " +  (current + step) + ")";
                }
            }
            // 层级
            else if(k == "zIndex")
            {
                obj.style.zIndex = json[k];
            }
            else
            {
                obj.style[k] = current + step + "px"; 
            }

            // if(当前位置 == 目标位置){clearInterval(定时器)}
            if(current != json[k]){   //只要其中一个不满足条件，就不应该停止定时器；
                flag = false;
            }
        }
        if(flag)   //flag为真
        {
            clearInterval(obj.timer);
            if(fn)
            {
                fn();
            }
        }
    },30)

}
//返回当前样式
function getstyle(obj,attr){  //谁的  属性

    if( obj.currentStyle){
        return obj.currentStyle[attr];
    }
    else{
        return window.getComputedStyle(obj,null)[attr];
    }
} 

