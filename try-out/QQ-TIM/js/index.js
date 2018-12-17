$(function(){
    // 1. 在需要视差效果的背景后加  data-stellar-background-ratio="0.2"
    // 2.给需要加视差效果的背景类名加 background-attachment: fixed;
    // 3.初始化js插件
    $.stellar({
        horizontalScrolling: false,
        responsive: true
    });
})