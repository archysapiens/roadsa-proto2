/*
Author       : Code-Theme
Template Name: BuildPower - HTML5 Template
Version      : 1.0
*/

jQuery(document).on('ready', function ($) {
    "use strict";

    /*---------------------------------
     //------ PRELOADER ------//
     ----------------------------------*/
    $('#status').fadeOut();
    $('#preloader').delay(200).fadeOut('slow');

    /*---------------------------------
     //------ ANIMATE HEADER ------//
     ----------------------------------*/
    $(window).on('scroll', function () {
        var sticky = $(".sticky-header");
        var scroll = $(window).scrollTop();
        if (scroll < 265) {
            sticky.removeClass("sticky");
        } else {
            sticky.addClass("sticky");
        }
    });

    /*---------------------------------
     //------ Rev Slider ------//
     ----------------------------------*/
    var tpj = jQuery;

    var revapi1078;
        if (tpj("#rev_slider_1078_1").revolution === undefined) {
            revslider_showDoubleJqueryError("#rev_slider_1078_1");
        } else {
            revapi1078 = tpj("#rev_slider_1078_1").show().revolution({
                sliderType: "standard",
                jsFileLocation: "revolution/js/",
                sliderLayout: "auto",
                dottedOverlay: "none",
                delay: 9000,
                navigation: {
                    keyboardNavigation: "off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    mouseScrollReverse: "default",
                    onHoverStop: "off",
                    touch: {
                        touchenabled: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        style: "zeus",
                        enable: true,
                        hide_onmobile: true,
                        hide_under: 600,
                        hide_onleave: true,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 30,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 30,
                            v_offset: 0
                        }
                    },
                },
                viewPort: {
                    enable: true,
                    outof: "pause",
                    visible_area: "80%",
                    presize: false
                },
                responsiveLevels: [1240, 1024, 778, 480],
                visibilityLevels: [1240, 1024, 778, 480],
                gridwidth: [1240, 1024, 778, 480],
                gridheight: [600, 600, 500, 400],
                lazyType: "none",
                parallax: {
                    type: "mouse",
                    origo: "slidercenter",
                    speed: 2000,
                    levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 46, 47, 48, 49, 50, 55],
                    type: "mouse",
                },
                shadow: 0,
                spinner: "off",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false,
                }
            });
        }

    /*----------------------------------
    //------ SMOOTHSCROLL ------//
    -----------------------------------*/
    smoothScroll.init({
        speed: 1000, // Integer. How fast to complete the scroll in milliseconds
        offset: 200, // Integer. How far to offset the scrolling anchor location in pixels

    });

    /*----------------------------------
    //------ LIGHTCASE ------//
    -----------------------------------*/
    $('a[data-rel^=lightcase]').lightcase();


    /*----------------------------------
    //------ ISOTOPE GALLERY ------//
    -----------------------------------*/
    /* activate jquery isotope */
       $(window).on('load', function () {
        var $container = $('.portfolio-items').isotope({
            itemSelector: '.item',
            masonry: {
                columnWidth: '.col-md-6'
            }
        });
    });
    // bind filter button click
    var filters = $('.filters-group ul li');
    filters.on('click', function () {
        filters.removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        $('.portfolio-items').isotope({
            filter: filterValue
        });
    });

    /*----------------------------------
    //------ OWL CAROUSEL ------//
    -----------------------------------*/
        $('.style1').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: false,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1,
                    margin: 20
                },
                500: {
                    items: 1,
                    margin: 20
                },
                768: {
                    items: 1,
                    margin: 20
                },
                992: {
                    items: 2,
                    margin: 20
                },
                1000: {
                    items: 3,
                    margin: 20
                }
            }
        });

        $('.style2').owlCarousel({
            loop: true,
            margin: 0,
            dots: false,
            autoWidth: false,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 2,
                    margin: 20
                },
                400: {
                    items: 2,
                    margin: 20
                },
                500: {
                    items: 3,
                    margin: 20
                },
                768: {
                    items: 4,
                    margin: 20
                },
                992: {
                    items: 5,
                    margin: 20
                },
                1000: {
                    items: 6,
                    margin: 20
                }
            }
        });

    /*----------------------------------
    //------ JQUERY SCROOLTOP ------//
    -----------------------------------*/
        var go = $(".go-up");
        $(window).on('scroll', function () {
            var scrolltop = $(this).scrollTop();
            if (scrolltop >= 50) {
                go.fadeIn();
            } else {
                go.fadeOut();
            }
        });

    /*----------------------------------
    //----- JQUERY COUNTER UP -----//
    -----------------------------------*/
    $('.counter').counterUp({
        delay: 10,
        time: 5000,
        offset: 100,
        beginAt: 0,
        formatter: function (n) {
            return n.replace(/,/g, '.');
        }
    });
    
    /*----------------------------------
    //------ MAGNIFIC POPUP ------//
    -----------------------------------*/
    $(document).ready(function () {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    });

}(jQuery));
