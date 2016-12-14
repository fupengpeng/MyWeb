/**
 * Created by fp on 2016/12/8.
 */
$(function () {
    //鼠标划入事件  小图变大
    $("li").hover(
        function () {//鼠标划入执行事件
        $(this).find("img")//在li中寻找img
            .stop()//停止动画（）
            .css("z-index","999")
            .animate(//设置新的动画属性
                {"width":"200px" ,"height":"200px",//新属性值
                "left":"-50px","top":"-50px"}
                ,300//动画变化时间
                );//图片位置调整
    },function () {//鼠标划出执行事件
            $(this).find("img").stop().css("zindex","20").animate({
                "width":"110px" ,"height":"110px",//新属性值
                "left":"0","top":"0"
            },300);
    })
    //鼠标点击事件  鼠标点击小兔   小图变幻成相应的大图
    $("li").click(function () {
        var index=$(this).index();// 当前对象的索引值
        $(".box").find("img").attr("src","images/ab"+(index+1)+".jpg");//给img使用attr方法设置属性
    })

})