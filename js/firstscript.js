document.addEventListener("DOMContentLoaded",function(){
    var windowSize = window.innerWidth;
    var brPoint = 1200;
    if (windowSize <= brPoint){
        $(".nav_area").addClass("close").removeClass("open").slideUp(0);
    }else{
        $(".nav_area").removeClass("close").removeClass("open"); //display:blockをつけると、スマホ時にdisplay:noneが付きクリックで開かない
    }
});