
$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#amz-toolbar").show();
        } else {
            $("#amz-toolbar").hide();
        }
    });

    var startY, endY;
    document.addEventListener("touchstart", touchStart, false);
    document.addEventListener("touchmove", touchMove, false);
    document.addEventListener("touchend", touchEnd, false);

    function touchStart(event) {
        var now_touch = event.touches[0];
        startY = now_touch.pageY;
    }

    function touchMove(event) {
        var now_touch = event.touches[0];
        endY = (startY - now_touch.pageY);
    }

    function touchEnd(event) {
        if (endY > 1) {
            $('header').hide(0);
        } else if ((endY < -20) || $(window).scrollTop() < 100) {
            $('header').show(0);
        }
    }

    $("#amz-toolbar").click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        $('header').show(0);
        return false;
    });
    $("#amz-toolbar").mouseover(function() {
        $(this).css('background', 'url("img/top-sel.png") no-repeat center center');
    });
    $("#amz-toolbar").mouseleave(function() {
        $(this).css('background', 'url("img/top.png") no-repeat center center');
    });
});
$('body').mouseover(function(event) {
    if (!$(event.target).parents('#yee-dropdown-content').is('#yee-dropdown-content') &&
        !$(event.target).is('#yee-show-product') &&
        !$(event.target).is('.am-topbar-fixed-top') &&
        !$(event.target).is('.am-icon-caret-down')
    ) {
        var sli = $('#yee-show-product').parent();
        $('#yee-dropdown-content').fadeOut(0);
        sli.removeClass('am-active');
    } else {
        if ($(event.target).is('#yee-show-product')) {
            var sli = $(this).parent();
            var osli = $('#yee-show-developer').parent();

            $('#yee-dropdown-dev-content').fadeOut(0);
            osli.removeClass('am-active');
            $('#yee-dropdown-content').fadeIn(0);
            sli.addClass('am-active');
        }
    }
});

$('body').mouseover(function(event) {
    if (!$(event.target).parents('#yee-dropdown-dev-content').is('#yee-dropdown-dev-content') &&
        !$(event.target).is('#yee-show-developer') &&
        !$(event.target).is('.am-topbar-fixed-top') &&
        !$(event.target).is('.am-icon-caret-down')
    ) {
        var sli = $('#yee-show-developer').parent();
        $('#yee-dropdown-dev-content').fadeOut(0);
        sli.removeClass('am-active');
    } else {
        if ($(event.target).is('#yee-show-developer')) {
            var sli = $(this).parent();
            var osli = $('#yee-show-developer').parent();

            $('#yee-dropdown-content').fadeOut(0);
            osli.removeClass('am-active');
            $('#yee-dropdown-dev-content').fadeIn(0);
            sli.addClass('am-active');
        }
    }
});
