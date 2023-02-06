var nam = $("nam");
var nams = nam.children;
var dao = $("dao");
var daos = dao.children;
var leader = 0,target = 0 ,timer = null;
for( var i = 0 ; i < daos.length ; i++){
    daos[i].index = i;  //当前索引号
    daos[i].onclick = function(event){
        leader = 0;
        window.scrollTo(0,0);
        clearInterval(dao.timer);
        target = nams[this.index].offsetTop;
        dao.timer = setInterval(function(){
            var ers = (target - leader)/10;
            ers = Math.ceil(ers);
            leader = leader + ers;
            if(leader == target){
                clearInterval(dao.timer);
            }
            window.scrollTo(0,leader);
            console.log(leader);
        },30)
    }
}
// window.onscroll = function(){
//     clearInterval(timer);
// }
    var homebottom = $("homebottom");
    // var Sobrei = $("Sobre");
    // var telephonei = $("telephone");
    var homeul = homebottom.children;
    var homelis = homeul[0].children;
    // var shu = [$("Sobre"),$("telephone")]
    homelis[0].onclick = function(){
        animate(Sobre,{top:660});
        animate(telephone,{top:660});
        animate(mailbox,{top:660});
        animate(weixin,{top:660});
        animate(more,{top:660});
    }
    homelis[1].onclick = function(){
        // Sobre.style.top = "100";
        // console.log(Sobre.offsetTop);
        animate(Sobre,{top:0});
        animate(telephone,{top:660});
        animate(mailbox,{top:660});
        animate(weixin,{top:660});
        animate(more,{top:660});
    }
    homelis[2].onclick = function(){
        animate(telephone,{top:0});
        animate(mailbox,{top:660});
        animate(weixin,{top:660});
        animate(more,{top:660});
    }
    homelis[3].onclick = function(){
        animate(mailbox,{top:0});
        animate(weixin,{top:660});
        animate(more,{top:660});
    }
    homelis[4].onclick = function(){
        animate(weixin,{top:0});
        animate(more,{top:660});
    }
    homelis[5].onclick = function(){
        animate(more,{top:0});
    }
    // for( var i = 1 ; i < homelis.length;i++){
    //     homelis[i].onclick = function(){
    //         alert(11);
    //         animate(shu[i-1],0)
    //     }
    // }
    
        // 轮播图
        var Carousel = document.getElementById("Carousel");
        var Carouselul = Carousel.children[0];
        var Carousellis = Carouselul.children;
        Carouselul.appendChild(Carouselul.children[0].cloneNode(true));  //1克隆图一
    // 2创建ol li
        var ol = document.createElement("ol");
        Carousel.appendChild(ol);
        for(var i = 0 ; i < Carousellis.length-1 ; i++){
            var li = document.createElement("li");
            ol.appendChild(li);    //添加li标签
        }
        
        // 3动画部分ol
        var ollis = ol.children;
        for(var i = 0 ; i < ollis.length; i++){
            ollis[i].index =i; 
            ollis[i].onmouseover = function(){
                for(var j = 0 ; j < ollis.length; j++){
                    ollis[j].className = "";
                }
                this.className = "current";
                animateleft(Carouselul,-this.index*1000);
            }
        }
        // 添加定时器
        var timer = null;
        var key = 0;
        var square = 0;
        timer = setInterval(autoplay,2000);
        function autoplay(){
            key++;
            if(key > Carousellis.length-1){
                key = 1;
                Carouselul.style.left = 0;
            }
            animateleft(Carouselul, -key*1000)
                // 添加小方块
            square++;
            if(square > ollis.length-1){
                square = 0;
            }
            
            for(var i = 0 ; i < ollis.length;i++){
                ollis[i].className = "";
            }
            ollis[square].className = "current";
        }
            //  添加箭头
        var leftarrow = document.getElementById("leftarrow");
        var rightarrow = document.getElementById("rightarrow");
        var leader2 = 0;
        var target2 = 0;
        var timer3 = null;
        leftarrow.onclick = function(){
            target2 = Carouselul.offsetLeft + 1000;
            animateleft(Carouselul,target2);
        }
        rightarrow.onclick = function(){
            target2 = Carouselul.offsetLeft - 1000;
            animateleft(Carouselul,target2);
        }
    
    
        // 鼠标经过大盒子时要停止定时器
         Carousel.onmouseover = function(){
            clearInterval(timer);
         }
         Carousel.onmouseout = function(){
            timer = setInterval(autoplay,2000);
         }