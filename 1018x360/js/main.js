(function (global, $, undefined) {
    'use strict';

    var html_banner = new HtmlBanner({
        disable_click: true
    });

    $(document).ready(function() {
        // Insert extras:
        $('#ad_t_frontpage', top.document).append($('#extras').html());

        var $vasi = $('#catvertising-extras-behind .catvertising-vasi', top.document);

        if(top.window.jQuery !== undefined) {
            top.window.jQuery('body').on('sjova-catvertising-play', function() {
                setTimeout(function() {
                    $('video')[0].play();
                }, 1200);

                setTimeout(function() {
                    $('.string, form button i').fadeOut(200);
                    $('#catvertising-extras .catvertising-g1', top.document).fadeOut(200);
                }, 1300);

                setTimeout(function() {
                    var windowHeight = top.jQuery(top).height();
                    var tl = new TimelineMax();
                    
                    tl.fromTo($vasi, 1, {top: 41, rotation: '-50deg'}, {left: 100, top: windowHeight * 2, rotation: '-120deg', ease:"Power1.easeIn"});
                    tl.to($vasi, 0.2, {display:'none'});
                }, 1900);
            });
        }

        $('form').ajaxForm({
            success: function(res) {
                res = JSON.parse(res);
                if(res.svar === 'ok') {
                    console.log('hell yeah');
                }
            }
        });
    });

})(window, jQuery);
