$( document ).ready(function() {





    $('.authorization_open, .get_present').fancybox({
        // Options will go here
    });
    $('section').horizon();

    //tabs
    var navigation = $(".tabs_item li a");
    $(navigation).click(function(e){
        e.preventDefault();
        var id = $(this).data('id');
        var parent = $(this).parents('body');
        $(navigation).removeClass('active');
        $(this).addClass('active');
        parent.find('.tabs_content_wrapper').removeClass('active');
        parent.find('#item_'+ id).addClass('active');


    });
    //end tabs


    $(window).on("load",function(){
        $(".tabs_content_wrapper").mCustomScrollbar();
    });



    heightMain()
    function  heightMain() {
        var windowHeight = $(window).height();
        var main = $("main");
        var mainHeight = windowHeight;
        $(main).css('height',(mainHeight) + 'px');
    }



});

$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('#elips_grid');

    $preloader.delay(1000).fadeOut('slow');


});


