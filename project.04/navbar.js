$(document).ready(function(){
    $("nav div").click(function(){
        $("ul").slideToggle();
        $("ul ul").css("display","none");
    });
    $("ul li").click(function(){
        $("ul ul").slideUp();
        $(this).find("ul").slideToggle();
    });
    $(window).resize(function(){
        if($(window).width()>700){
            $("ul").removeAttr("style");
        }
    });

});