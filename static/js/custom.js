(function ($) {
    "use strict";

    //sticky menu
    $(window).on('scroll', function () {
        var window_top = $(window).scrollTop() + 0;
        if (window_top > 0) {
            $('.ch_header_part').addClass('menu_fixed animated slideInDown');
        } else {
            $('.ch_header_part').removeClass('menu_fixed animated slideInDown');
        }
    });

    //wow js
    var wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        mobile: false,
        duration: 1000,
    });
    wow.init();

    //parallax js
    // if ($('.parallax_shape').length > 0) {
    //     $('.parallax_shape').parallax({
    //         scalarX: 10.0,
    //         scalarY: 10.0
    //     });
    // }

    //video popup
    var video_popup = $('.video_popup');
    if (video_popup.length > 0) {
        video_popup.magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
    }

    //data bg image sec
    $("[data-bg-img]").each(function () {
        var bg = $(this).data("bg-img");
        $(this).css({
            "background": "no-repeat center/cover url(" + bg + ")",
        })
    })

    $("[data-bg-color]").each(function () {
        var bg_color = $(this).data("bg-color");
        $(this).css({
            "background-color": (bg_color)
        })
    })

    $(".ch_slider_wrapper").each(function () {
        var swiperJs = $(this),
            perpage = ($(this).attr("id"), $(this).data("perpage") || 1),
            loop = $(this).data("loop"),
            speed = $(this).data("speed") || 1000,
            space = $(this).data("space") || 0,
            effect = $(this).data("effect"),
            center = $(this).data("center"),
            pl = $(this).data("autoplay"),
            nex = $(this).data("next"),
            pre = $(this).data("prev"),
            pag = $(this).data("pagination"),
            mous = $(this).data("mousewheel"),
            pagtype = $(this).data("paginationtype"),
            direction = $(this).data("direction") || "horizontal",
            cfr = $(this).data("rotate"),
            cfs = $(this).data("stretch"),
            cfd = $(this).data("depth"),
            lops = $(this).data("loopslides"),
            scol = $(this).data("slidescolumn"),
            breakpoints = $(this).data("breakpoints");
        new Swiper(swiperJs, {
            slidesPerView: perpage,
            direction: direction,
            spaceBetween: space,
            loop: loop,
            speed: speed,
            effect: effect,
            breakpoints: breakpoints,
            centeredSlides: center,
            mousewheel: mous,
            slidesPerColumn: scol,
            slideToClickedSlide: true,
            loopedSlides: lops,
            autoplay: pl,
            coverflowEffect: {
                rotate: cfr,
                stretch: cfs,
                depth: cfd,
                modifier: 1,
                slideShadows: false,
            },
            pagination: {
                el: pag,
                type: pagtype,
                clickable: !0
            },
            navigation: {
                nextEl: nex,
                prevEl: pre
            }
        })
    })

    //maasonry js
    $(".ch_addons_grid_wrapper").each(function () {
        var ch_addons_grid_wrapper = $('.ch_addons_grid_wrapper');
        if (ch_addons_grid_wrapper.length) {
            $(this).ch_dlAddonsGridLayout();
        }
    });

    //count up
    var counter = $('.counter');
    if (counter.length > 0) {
        counter.counterUp({
            time: 2000
        });
    }

    //top scroll
    var ch_top_scroll = $('.ch_top_scroll');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            ch_top_scroll.addClass('show');
        } else {
            ch_top_scroll.removeClass('show');
        }
    });
    ch_top_scroll.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    //pricing part css
    var pricingPart = $('.ch_pricing_part');
    if (pricingPart.length) {
        var e = document.getElementById("ch_filt_monthly"),
            d = document.getElementById("ch_filt_yearly"),
            t = document.getElementById("ch_switcher"),
            m = document.getElementById("ch_monthly"),
            y = document.getElementById("ch_yearly");

        e.addEventListener("click", function () {
            t.checked = false;
            e.classList.add("toggler--is-active");
            d.classList.remove("toggler--is-active");
            m.classList.remove("ch_hide");
            y.classList.add("ch_hide");
        });

        d.addEventListener("click", function () {
            t.checked = true;
            d.classList.add("toggler--is-active");
            e.classList.remove("toggler--is-active");
            m.classList.add("ch_hide");
            y.classList.remove("ch_hide");
        });

        t.addEventListener("click", function () {
            d.classList.toggle("toggler--is-active");
            e.classList.toggle("toggler--is-active");
            m.classList.toggle("ch_hide");
            y.classList.toggle("ch_hide");
        })
    }

}(jQuery));