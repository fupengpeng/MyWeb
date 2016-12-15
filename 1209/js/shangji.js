/**
 * Created by Administrator on 2016-8-26.
 */
$(function(){
//    head;
       (function(){
           /*找到头部导航*/
           $(".head .head_top ").hover(function(){
               /*头部导航字条目中的鼠标移入移出事件*/
               $(this).find("ul").stop().slideDown(600)
               /*找到  ul  即下拉菜单  实现下拉*/
           },function(){
               $(this).find("ul").stop().slideUp(200)
           });
       })();

//    轮播
       (function(){
           /*找到所有需要操作的组件*/
           var li=$(".banner_turn1");/*轮播图片*/
           var lis=$(".banner_turnul li");/*轮播小点*/
           var wri=$(".write");/*轮播文字*/
           var s=lis.length;/*轮播小点的总长度*/
           var c=0;/*定义c变量*/
           function turn(){/*轮播封装*/
               c=
                   c>3?    /*判断条件*/
                       0   /*大于三   给c 赋值  0*/
                       :c;   /*不大于3 则等于当前c 值 */        /*三目表达式*//*目的  使轮播到达*/
               //  由于无缝轮播 布局和这两种不一样 所以无缝轮播 我会单独写一个来共给大家学习
               // li.css({"display":"none"}).eq(c).css({"display":"block"});
               //  上面已经被注释的部分 是用CSS 来控制出现消失 但是因为效果比较生硬 所以下面用的淡入淡出
               // 如果想看 效果 可以先注释下面一行代码 再解开上面一行代码
               li.fadeOut(200).eq(c).fadeIn(400);
               /*li(轮播的图片)  淡出 （200ms）  。eq（c）  当前要展示的图片  淡入（400ms）*/

               lis.removeClass("banner_now")/*移除红色小点的样式*/
                   .eq(c)/*选择当前小点*/
                   .addClass("banner_now");/*给当前小点增加红色样式*/
               wri.css({"display":"none"}).eq(c).css({"display":"block"});/*同上*/
           }

           $(".banner_turnbtn .next").click(function(){/*点击右边按钮，使得 c++  c值改变  调用turn（）方法*/
               c++;
               turn();
           });

           $(".banner_turnbtn .prev").click(function(){/*点击左边按钮， 使得 c-- 进行判断c值，不能让其一直递减，否则不能形成循环，对c 值进行判断，限制其值大于0 */
               c--;
               c=c<0?3:c;
               turn();
           });

           $(".banner_turnul li").hover(function(){/*触摸小点  发生划入事件*/
               c=$(this).index();/*使 c 等于当前触摸到的小点的索引值  */
               turn();
           });
       })();

       (function(){
           $(".foot_more .foot_li").click(function(){/*找到 要点击的位置  图片上的加号以及文字区域 并添加点击事件*/
              $(".foot_moreban").stop().slideToggle(400)
               $(".foot_more .foot_li").find("span").toggleClass("span")
               /*找到加号部分  因为使用的类名来添加背景图片，  删除比这个优先级高的类名，以后就不会展示曾经的图片*/
           });
       })()
});
