$(function () {
    // 初始化
    $('#container').fullpage({
        // 设置背景颜色
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#85d9ed", "blue", "yellow"],
        // 设置内容不垂直居中
        verticalCentered: false,
        // 设置指示器——屏幕右边的滚动小点
        navigation: true,
        afterLoad: function (link, index) {
            /*index 序号 1开始  当前屏的序号*/
            $('.section').eq(index - 1).addClass('now');
        },
        // 离开某一个屏幕的时候触发
        onLeave: function (index, nextIndex, direction) {
            if (index == 2 & nextIndex == 3) {
                // 从第二页到第三页
                $('.section').eq(index - 1).addClass('leaved');
            } else if (index == 3 && nextIndex == 4) {
                /*当前是从第三页到第四页*/
                $('.section').eq(index - 1).addClass('leaved');

            }       //第五屏到第六屏沙发掉下来
                else if(index==5&&nextIndex==6){
                $('.section').eq(index-1).remove('now').addClass('leaved');
                $('.screen06 .box').addClass('show');
            }
            // 第六屏到第七屏
            else if(index==6&&nextIndex==7){
                console.log(12);
                $('screen07 .text').addClass('show');
                $('.screen07 .star img').each(function(i,item){
                    $(this).delay(i*0.25*2000).fadeIn();
                });
            }
        },
        // 点击更多切换下一页
        afterRender: function () {

            // 绑定more事件
            $('.more').on('click', function () {
                $.fn.fullpage.moveSectionDown();
            });
            // 当第四屏的购物车动画结束之后执行收货地址的动画
            $('.screen04 .cart').on('transitionend', function () {
                /*:last :frist :visible :hidden :checked :selected jquery扩展选择器*/
                $('.screen04 .address').show().find('img:last').fadeIn(1000);
                $('.screen04 .text').addClass('show');
            });
            /*第八屏功能*/
            /*1.手要跟着鼠标移动*/
            $('.screen08').on('mousemove',function (e) {
                /*鼠标的坐标设置给手*/
                $(this).find('.hand').css({
                    left:e.clientX -190,
                    top:e.clientY - 20
                });
            }).find('.again').on('click',function () {
                /*2.点击再来一次重置动画跳回第一页*/
                /*动画怎么怎么进行的？*/
                /*2.1 加now  类*/
                /*2.2 加leaved  类*/
                /*2.3 加show 类*/
                $('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
                /*2.4 加css属性  后果：加一个style属性*/
                /*2.5 用jquery方法  show() fadeIn() 后果：加一个style属性*/
                $('.content [style]').removeAttr('style');

                /*跳回第一页*/
                $.fn.fullpage.moveTo(1);
            });
        }
         
    });
});