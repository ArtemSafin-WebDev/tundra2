$(document).ready(function () {

// Parallax
    if ($('.px').length) {
        $("body").mousemove(function (event) {
            sw = $(window).width();
            sh = $(window).height();
            eX = event.pageX;
            eY = event.pageY;

            move1x = (eX - sw / 2) / sw * 60;
            move1y = (eY - sh / 2) / sh * -30;

            move2x = move1x / 2;
            move2y = move1y / 2;

            $('.px1').css('transform', 'translate3d(' + move1x + 'px, ' + move1y + 'px, 0px)');
            $('.px2').css('transform', 'translate3d(' + move2x + 'px, ' + move2y + 'px, 0px)');
        });
    }


// window.onload=function() {
//     var a = document.getElementById("fb-link");

//     var svgDoc = a.contentDocument;
//         var svgItem = svgDoc.getElementById("fb");

//         // fb
//         var fb = document.getElementById('fb-link');
//         var fb_svg = svgDoc.getElementById('fb');

//         fb.onmouseover = function(e){
//             if (fb.hover != true){
//                 fb_svg.classList.remove('st4');
//             } else {
//                 fb_svg.classList.add('st4');
//             }
//         }
// }

    if ($('.jarallax').length) {
        $('.jarallax').jarallax({
            speed: 0.2
        });
    }


// Parallax
    if ($(window).width() > 1024) {

        if ($('.px').length) {
            $("body").mousemove(function (event) {
                sw = $(window).width();
                sh = $(window).height();
                eX = event.pageX;
                eY = event.pageY;

                move1x = (eX - sw / 2) / sw * 60;
                move1y = (eY - sh / 2) / sh * -30;

                move2x = move1x / 2;
                move2y = move1y / 2;

                $('.px1').css('transform', 'translate3d(' + move1x + 'px, ' + move1y + 'px, 0px)');
                $('.px2').css('transform', 'translate3d(' + move2x + 'px, ' + move2y + 'px, 0px)');
            });
        }
    }

// Wow
    new WOW().init();


// Burger menu
    $('.header__menu').on('click', function () {
        $('.header__menu-burger').toggleClass('open').promise().done(function () {
            $('.menu').fadeToggle(300, function () {
                $('body').toggleClass('menu--open');
            });
        });
    });

    $('.menu').on('click', function () {
        $('.header__menu-burger').removeClass('open');

        $('.menu').fadeOut(300);

        $('body').removeClass('menu--open');
    });

// Slider products
    $('.products').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

// Slider top details
    $('.top__details-r').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.prev-mini'),
        nextArrow: $('.next-mini'),
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


// Slider counter
    var $status = $('.pagingInfo');
    var $slickElement = $('.slider__items');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });

    $slickElement.slick({
        slide: '.slider__item',
        autoplay: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: true,
        centerPadding: '50px',
        arrows: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

// Loader
    $(window).on('load', function () {
        $('body').removeClass('hold');
        $('.preloader').fadeOut(300);
        setTimeout(function () {
            $('body').addClass('animateOnLoad');
        }, 300);
    });

// Video
    var about_player;

    function onPlayerStateChange(event) {
        if (event.data === 0) {
            $('.main-about__video').removeClass('main-about__video--active');
        }
    }

    function onYouTubeIframeAPIReady() {
        about_player = new YT.Player('about_video', {
            height: '360',
            width: '640',
            videoId: $('#about_video').data('code'),
            rel: 0,
            modestbranding: 1,
            events: {
                'onStateChange': onPlayerStateChange,
                'onReady': function () {
                    var totalSec = about_player.getDuration();
                    var hours = parseInt(totalSec / 3600) % 24;
                    var minutes = parseInt(totalSec / 60) % 60;
                    var seconds = totalSec % 60;
                    var result = (hours < 1 ? "" : hours + ":") + (minutes < 1 ? "0" : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);

                    $('.main-about__video .time').html(result);
                }
            }
        });
    }

// About video
    $('.js-about_video-btn').on('click', function () {
        $('.main-about__video').addClass('main-about__video--active');
        about_player.playVideo();
    });


    $(function () {

        // slick slider

        if ($('*').is('.media-slider')) {
            $('.media-slider.outher').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: false,
                speed: 750,
                arrows: true,
                dots: false,
                fade: false,
                prevArrow: '<button class="slick-prev slick-arrow media-slider__prev" aria-label="Prev" type="button" style="">Prev</button>',
                nextArrow: '<button class="slick-next slick-arrow media-slider__next" aria-label="Next" type="button" style="">Next</button>',
                responsive: [{
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 4
                    }
                }, {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 3
                    }
                }, {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            });

            $('.media-slider.inner').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: false,
                speed: 750,
                arrows: true,
                dots: false,
                fade: false,
                prevArrow: '<button class="slick-prev slick-arrow media-slider__prev" aria-label="Prev" type="button" style="">Prev</button>',
                nextArrow: '<button class="slick-next slick-arrow media-slider__next" aria-label="Next" type="button" style="">Next</button>',
                responsive: [{
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 4
                    }
                }, {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 3
                    }
                }, {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                }]
            });
        }

    });

});


/*var parent = document.querySelector('object');
parent.addEventListener('mouseover', function (event) {
    var svg = event.target.querySelector('object').contentDocument;
    var styleElement = svg.createElementNS("http://www.w3.org/2000/svg", "style");
    styleElement.textContent = "svg * { fill: red!Important }"; // add whatever you need here
    svg.appendChild(styleElement);
});*/