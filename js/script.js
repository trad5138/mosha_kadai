$(function() {

//    $(window).on('load resize', function(){
//    $(window).resize(function() {
    $(window).on('resize', function(){
        var timer = 'false';
        //var timer = '';
        var windowWidth = window.innerWidth;
        //var windowWidth = $(window).width();
        var breakPoint = 1200;
        if (timer !== false) {
        //if (timer) {    
            clearTimeout(timer);
        }
        timer = setTimeout(function(){
             if (windowWidth <= breakPoint){
                $(".nav_area").addClass("close").removeClass("open").slideUp('fast');
                //$(".nav_area").addClass("close").removeClass("open").slideUp('fast').css("display","block");//display:blockつけると縮めている間表示・非表示を繰り返す
            }else{
                $(".nav_area").removeClass("close").removeClass("open").css("display","block"); //display:blockをつけると、スマホ時にdisplay:noneが付きクリックで開かない
                //$(".nav_area").removeClass("close").removeClass("open"); 
                $("ul.sub-menu").removeAttr("style");
            }
        },50);
    });

    /**********ハンバーガーボタン クリック 表示・非表示**********/
    $(".nav_btn").on("click", function() {
        var $menu = $(this).parent().find(".nav_area"); 
        if ($menu.hasClass('open')){
            $(".nav_area").slideUp('fast');//display:noneがつく
            $menu.removeClass("open");
            $menu.addClass("close");
            $(this).removeClass( "is-open" );
        }else{
            $(".nav_area").slideDown('fast');//display:blockがつく
            $menu.removeClass("close");
            $menu.addClass( "open" );
            $( this ).addClass( "is-open" );
        };
    });

    /**********ハンバーガーボタン クリック 表示・非表示 END**********/

    /**********スマホメニュー ウィンド幅動いたら閉じる**********/
    $(window).resize(function() {
        $acodion = $(".nav_btn");
        $navArea = $(".nav_area");
        $hasSubmenu =  $(".menu-item-has-submenu");
        $subMenu = $(".sub-menu")
        $acodion.removeClass( "is-open" );
        $acodion.parent().next($navArea).slideUp('fast');
        $navArea.removeClass("open");
        $hasSubmenu.removeClass("open");
        $hasSubmenu.children("ul").slideUp('fast');
        $navArea.addClass("close");
        $subMenu.removeAttr("style");

    });

    /**********スマホメニュー ウィンド幅動いたら閉じる END**********/

    /**********submenu hover dropdown**********/
    $( ".menu-item" ).on({
        'mouseenter':function(){
            $(this).children("ul").stop().slideDown(200);
            $(this).addClass("open");
       },
        'mouseleave':function(){
            $(this).children("ul").stop().slideUp(0);
            $(this).removeClass("open");
        }
    });
    /**********submenu hover dropdown END **********/

    /********** parallax**********/
    //$(window).scroll(function(){
    $(window).on('scroll',function(){
        // var yLine = $(this).scrollTop();
        var yLine = $(window).scrollTop();
        
        var bgPosition = yLine / 8;
        if(bgPosition){
            //$('.parallax_layer_back').css('background-position', 'center center'+ bgPosition + 'px');
            $('.parallax_layer_back').css('background-position', 'center +'+ bgPosition + 'px'); 
                        // center centerだとダメ、+ bgPositionは、’+で+がカンマにくっついとかないと動かない
        }
    });
    
    /********** parallax END**********/

});








        



