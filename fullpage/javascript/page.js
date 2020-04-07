$(function () {
    var bool = false;
    var sw=false;
    $(".next").click(function(event) {
        $(this).hide()
        $.fn.fullpage.moveSectionDown();
     });
    $('#fullpage').fullpage({
        // 启用显现导航点方法
        navigation: true,
        //设置导航点浮动方向
        // navigationPosition:'left',
        // navigationColor:'#f50', 
        keyboradScroll: true,
        //滚动速度
        scrollingSpeed: 1000,
        //回调函数,index为页码数
        afterLoad: function (anchorLink, index) {
            if (index == 2&&bool==false) {
                $('.next').hide();
                $('.search').show().animate({ 'right': 40 + '%' }, 500, function () {
                    $(this).hide()
                    $('.search-copy').show().animate({ 'bottom': 75 + '%', 'left': 69 + '%', 'height': 30 }, 500)
                    $('.sofas').animate({ 'width': 441, 'height': 218, 'opacity': 1 }, 800)
                    $('.words-01').hide()
                    $('.words-02').animate({ 'opacity': 1 })
                    bool=true;
                    $('.next').show()
                })
            }
        },
        // 刚开始滚动屏幕就触发的回调函数 onLeave
        // 滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：index 是离开的“页面”的序号，
        // 从1开始计算；nextIndex 是滚动到的“页面”的序号，从1开始计算；direction 判断往上滚动还是往下滚动，值是 up 或 down。
       
        onLeave: function (index, nextIndex, direction) {
            if (index == 2 && nextIndex == 3 && bool ==true&sw==false) {
                $('.next').hide();
                // 沙发要往第三屏幕走
                $('.white').show();
                $('.movesofa').show().animate({ 'width': 207, 'bottom': (-70) + '%', 'left': 48 + '%' }, 800, function () {
                    $('.sele-02').show()
                    $('.next').show()
                })
                bool=false
               
            }
            if (index == 3 && nextIndex == 4&&bool==false &&sw==false) {
                $('.next').hide();
                bool=true;
                sw=true;
                $('.movesofa').hide()
                $('.movesofa-02').show().animate({ 'bottom': (-58) + '%', 'left': 64 + '%', 'width': 204 }, 800, function () {
                    $(this).hide()
                    $('.car').hide()
                    $('.movecar').show().animate({ 'left': 45 + '%' }, 200, function () {
                        $(this).animate({ 'left': 54 + '%' }, 200, function () {
                            $(this).animate({ 'left': 40 + '%' }, 100, function () {
                                $(this).animate({ 'left': 200 + '%' }, 500, function () {
                                    $(this).hide()
                                    $('.note').show()
                                    $('.word-04').show().addClass('word-04-a')
                                    $('.information').show();
                                    $('.next').show()
                                })
                            })
                        })
                    })
                })
            }
            if (index == 4 && nextIndex == 5) {
                $('.next').hide();
                $('.hand').animate({ 'bottom': (-5) + '%' }, 1000, function () {
                    $('.mouse').hide()
                    $('.mouse-a').show()
                    $('.word-05').addClass('word-05-a')
                    $('.order').animate({ 'bottom': 60 + '%' }, 500, function () {
                        $('.page5sofa').animate({ 'bottom': 0 + '%' }, 1000)
                        $('.next').show()
                    })
                })
            }
            if (index == 5 && nextIndex == 6) {
                $('.next').hide();
                $('.page5sofa').animate({ 'bottom': (-10) + '%', 'left': 56 + '%', 'width': 60 }, 500, function () {
                    $(this).hide()
                })
                $('.package').animate({ 'left': 45 + '%' }, 500, function () {
                    $(this).animate({ 'bottom': 5 + '%' }, 1000, function () {
                        $(this).hide()
                        $('.word-06').show().addClass('word-06-a')
                        $('.page6').animate({ 'backgroundPosition': 80 + '%' }, 2000, function () {
                            $('.courier').animate({ 'width': 200 }, 1000, function () {
                                $(this).animate({ 'left': 55 + '%' }, 1000, function () {
                                    $('.hello').show()
                                    $('.door').animate({ 'opacity': 1 }, 500, function () {
                                        $('.woman').show().animate({ 'width': 80, 'left': 75 + '%' })
                                        $('.next').show()
                                    })
                                })
                            })
                        })
                    })

                })
            }
            if(index==7){
                $('.next').hide();
            }
            // 大手跟随鼠标移动 
            var k = $(window).height(); // 当前屏幕的高度 
            $(document).mousemove(function (event) {
                
                var x = event.pageX - $(".hand7").width() / 2;  // 获得鼠标在页面中的x坐标
                var y = event.pageY + 10;  // 获得鼠标在页面中的y坐标

                // 手的top 值不能小于 这个大小minY   当前屏幕的高度 K  减去手的高度  449 
                var minY = k - 449;
                // 把 鼠标在页面中的坐标 给  hand 大手 left  top 
                if (y < minY) {
                    y = minY;
                }

                $(".hand7").css({ "left": x, "top": y });
            });
            $(".again").click(function(event) {
                window.location.reload()
              });
        }
    })
})