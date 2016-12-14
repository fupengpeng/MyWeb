/**
 * Created by fp on 2016/12/8.
 */
$(function () {//等待整个html页面加载完成后再执行js文件
    var i=0;
    var timer=null;
    var moveBox=$(".boxContainer");
    var box=$(".bigBox");
    timer=setInterval(//计时器
        move,2000);//时间间隔，隔2秒切换一次图片
    //封装计时器里面的代码
    function move() {
        i++;
        if(i>5){//判断图片轮播到5个后准备返回轮播第1个
            i=1;//1  意思是缩短轮播图片1的时间（因为图片1播放两次）
            moveBox.css("left","0");
        }
        moveBox.animate({
            "left":-i*300+"px" //负号，意思是左移。300 意思是左移300px（图片的宽度）
        });
        console.log(moveBox.css("left"));
        //实现圆点切换
        if(i==5){//在index等于5时，因为图片1轮播了两次，故
            $("li").eq(0)//通过index找到当前图片对应的小圆点
                .addClass("active")//给对应的小圆点添加active属性
                .siblings()//找到当前小圆点的兄弟姐妹
                .removeClass("active");//并移除他们的active属性
        }else {
            $("li").eq(i)//通过index找到当前图片对应的小圆点
                .addClass("active")//给对应的小圆点添加active属性
                .siblings()//找到当前小圆点的兄弟姐妹
                .removeClass("active");//并移除他们的active属性
        }
    }

    //鼠标划入图片时，停止轮播
    box.hover(function () {
        clearInterval(timer);
    },function () {//鼠标划出
        timer=setInterval(//计时器
            move,2000);//时间间隔，隔2秒切换一次图片
    });

    //点击小圆点实现对应的图片切换
    $("li").click(function () {
        i=$(this).index();
        $("li").eq(i).addClass("active").siblings().removeClass("active");
        moveBox.animate({
            "left":-i*300+"px"
        },1000);
    });

    //点击右边按钮
    $(".right").click(function () {
        clearInterval(timer);
        move();
    });
    $(".left").click(function () {
        i--;//点击左边按钮时，index减小
        if(i<0){
            i=4;
            moveBox.css("left","1500px");
        }
        moveBox.animate({
            "left":-i*300+"px"
        });
        //实现圆点切换
        if(i==5){//在index等于5时，因为图片1轮播了两次，故
            $("li").eq(0)//通过index找到当前图片对应的小圆点
                .addClass("active")//给对应的小圆点添加active属性
                .siblings()//找到当前小圆点的兄弟姐妹
                .removeClass("active");//并移除他们的active属性
        }else {
            $("li").eq(i)//通过index找到当前图片对应的小圆点
                .addClass("active")//给对应的小圆点添加active属性
                .siblings()//找到当前小圆点的兄弟姐妹
                .removeClass("active");//并移除他们的active属性
        }
    });
});