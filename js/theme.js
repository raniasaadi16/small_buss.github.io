
(function ($) {
    'use strict';

    /*--------------------------------------------------------
     / 1. All Revolution Slider
     /--------------------------------------------------------*/
  

    /*--------------------------------------------------------
     / 2. All Suffle
     /--------------------------------------------------------*/
  

    /*--------------------------------------------------------
     / 3. All Skills
     /--------------------------------------------------------*/
   

   

  
  
    /*--------------------------------------------------------
     / 4. All Testimonial and slider 
     /--------------------------------------------------------*/
  

    if ($('.work_loop_slider_3').length > 0) {
        $('.work_loop_slider_3').owlCarousel({
            loop: false,
            margin: 0,
            responsiveClass: true,
            autoplay: false,
            dots: false,
            nav: true,
            navText: ['<i class="arrowicon-arrows-4"></i>', '<i class="arrowicon-arrows-3"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1199: {
                    items: 4
                },
                1600: {
                    items: 5
                }
            }
        });
    }


    /*--------------------------------------------------------
     / 5. Inner Column Inside
     /--------------------------------------------------------*/
    function tw_stretch() {
        var i = $(window).width();
        $(".row .tw-stretch-element-inside-column").each(function () {
            var $this = $(this),
                    row = $this.closest(".row"),
                    cols = $this.closest('[class^="col-"]'),
                    colsheight = $this.closest('[class^="col-"]').height(),
                    rect = this.getBoundingClientRect(),
                    l = row[0].getBoundingClientRect(),
                    s = cols[0].getBoundingClientRect(),
                    r = rect.left,
                    d = i - rect.right,
                    c = l.left + (parseFloat(row.css("padding-left")) || 0),
                    u = i - l.right + (parseFloat(row.css("padding-right")) || 0),
                    p = s.left,
                    f = i - s.right,
                    styles = {
                        "margin-left": 0,
                        "margin-right": 0
                    };
            if (Math.round(c) === Math.round(p)) {
                var h = parseFloat($this.css("margin-left") || 0);
                styles["margin-left"] = h - r;
            }
            if (Math.round(u) === Math.round(f)) {
                var w = parseFloat($this.css("margin-right") || 0);
                styles["margin-right"] = w - d;
            }
            $this.css(styles);
        });
    }
    tw_stretch();

    /*--------------------------------------------------------
     / 6. Work Toggle and Scroll Off
     /--------------------------------------------------------*/
    var wn2 = $('.work_nav_2');
    if (wn2.length > 0) {
        $('.work_nav_2 h6').on('click', function () {
            wn2.toggleClass('active');
        });
    }

    $('.scrollOff').on('click', function () {
        $('html, body').animate({scrollTop: $(this.hash).offset().top - 68}, 1000);
        return false;
    });

    /*--------------------------------------------------------
     / 7. Typeping Animation
     /--------------------------------------------------------*/
   

    /*--------------------------------------------------------
     / 8. Fun Fact Count
     /----------------------------------------------------------*/
    

    /*--------------------------------------------------------
     / 9. Back To Top and Preloader
     /----------------------------------------------------------*/
    var back = $("#backtotop"),
            body = $("body, html");
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height())
        {
            back.css({bottom: '50px', opacity: '1', visibility: 'visible'});
        } else
        {
            back.css({bottom: '-50px', opacity: '0', visibility: 'hidden'});
        }

    });
    body.on("click", "#backtotop", function (e) {
        e.preventDefault();
        body.animate({scrollTop: 0}, 800);
        return false;
    });

    $(window).on('load', function () {
        if ($('.preloader').length > 0) {
            $('.preloader').delay(800).fadeOut('slow');
        }
    });

    /*--------------------------------------------------------
     / 10. Magnificant Popup
     /----------------------------------------------------------*/
   
    /*--------------------------------------------------------
     / 11. Menu PopUp 
     /---------------------------------------------------------*/
    $(document).on('ready', function () {
        $("#close-popup").on('click', function (e) {
            e.preventDefault();
            $("body").removeClass("menu__open show-overlay-nav")
        })
        $(".hamburger").on("click", function () {
            $(this).toggleClass("is_active"), $("body").toggleClass("menu__open")
        }), $(document).keyup(function (e) {
            27 === e.keyCode && $(".menu__open .hamburger").on('click')
        }), $("#open-overlay-nav").on("click", function () {
            $("body").toggleClass("show-overlay-nav")
        }), $(".dl-menu__wrap").dlmenu({
            animationClasses: {
                classin: "dl-animate-in-3",
                classout: "dl-animate-out-3"
            }
        });
    });


    /*--------------------------------------------------------
     / 12. Fixed Header
     /--------------------------------------------------------*/


 

    /*--------------------------------------------------------
     / 13. Scroll Menu Function
     /--------------------------------------------------------*/
   

    /*--------------------------------------------------------
     / 14. Mobile Menu
     /--------------------------------------------------------*/
    $(window).on("load resize", function(e){
        if ($(window).width() < 991) {
            $('.mobileMenuBar a').on('click', function (e) {
                e.preventDefault();
                $('.mainmenu > ul, .mainMenu_4 > ul, .mainMenu_6 > ul').slideToggle();
            });
            $('.mainmenu ul li.menu-item-has-children, .mainMenu_4 ul li.menu-item-has-children, .mainMenu_6 ul li.menu-item-has-children').each(function () {
                var $this = $(this);
                $this.append('<span class="submenu_toggler"><i class="fa fa-caret-down"></i></span>');
            });
            $('.mainmenu ul li.menu-item-has-children > span.submenu_toggler, .mainMenu_4 ul li.menu-item-has-children > span.submenu_toggler, .mainMenu_6 ul li.menu-item-has-children > span.submenu_toggler').on('click', function () {
                var $this = $(this);

                if ($(this).hasClass('active-span')) {
                    $('i', $this).removeClass('fa-caret-up').addClass('fa-caret-down');
                } else {
                    $('i', $this).addClass('fa-caret-up').removeClass('fa-caret-down');
                }
                $(this).prev('ul.sub-menu').slideToggle();
                $(this).toggleClass('active-span');
            });
        };
    });

    /*--------------------------------------------------------
     / 15. Right Side Fixed Menu
     /----------------------------------------------------------*/
  

    /*--------------------------------------------------------
     / 16. Contact Form Submission
     /--------------------------------------------------------*/
    // $('#contactForm').on('submit', function (e) {
    //     e.preventDefault();
    //     var $this = $(this);

    //     $('button[type="submit"]', this).attr('disabled', 'disabled');
    //     $('.ast_loader', this).fadeIn();

    //     var form_data = $this.serialize();

    //     var required = 0;
    //     $(".required", this).each(function () {
    //         if ($(this).val() === '')
    //         {
    //             $(this).addClass('reqError');
    //             required += 1;
    //         } else
    //         {
    //             if ($(this).hasClass('reqError'))
    //             {
    //                 $(this).removeClass('reqError');
    //                 if (required > 0)
    //                 {
    //                     required -= 1;
    //                 }
    //             }
    //         }
    //     });

    //     if (required === 0) {
    //         $.ajax({
    //             type: 'POST',
    //             url: 'ajax/mail.php',
    //             data: {form_data: form_data},
    //             success: function (data) {
    //                 $('button[type="submit"]', $this).removeAttr('disabled');
    //                 $('.ast_loader', $this).fadeOut();

    //                 $this.remove('.ast_con_message');
    //                 $('.ast_con_message', $this).fadeIn().html('Congratulation! Message successfully sent.');
    //                 setTimeout(function () {
    //                     $('.ast_con_message', $this).fadeOut().html('');
    //                 }, 5000);
    //             }
    //         });
    //     } else {
    //         $('button[type="submit"]', $this).removeAttr('disabled');
    //         $('.ast_loader', $this).fadeOut();
    //         $('.ast_con_message', $this).fadeOut().html('');
    //     }

    // });
    $(".required").on('keyup', function () {
        $(this).removeClass('reqError');
    });
    
    
    $('.ast_tab_3_controll a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href");
        if($(window).width() < 991){
            $('html, body').animate({scrollTop: $(target).offset().top - 150}, 1000);
        }
    });


})(jQuery);