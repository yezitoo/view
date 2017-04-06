var swipnum = 0;
$(".carousel ul").on("swipeleft", function(e) {
    // console.log(e);
    // console.log($(this).width());打印ul宽度
    swipnum = swipnum + (e.swipestart.coords[0] - e.swipestop.coords[0]);
    if (swipnum <= ($(this).width() * 2 / 3)) {
        // console.log(swipnum);
        $(this).css({
            "right": swipnum + "px"
        })
    }else{
    	swipnum =$(this).width() * 2 / 3
    }
});
$(".carousel ul").on("swiperight", function(e) {
    // console.log(e);
    // console.log($(this).width());打印ul宽度
    swipnum = swipnum + (e.swipestart.coords[0] - e.swipestop.coords[0]);
    console.log(e.swipestart.coords[0] - e.swipestop.coords[0]);
    if (swipnum >= 0) {
        // console.log(swipnum);
        $(this).css({
            "right": swipnum + "px"
        })
    } else {
     swipnum=0
    }
});
