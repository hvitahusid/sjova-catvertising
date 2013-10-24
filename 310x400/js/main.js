(function (global, $, undefined) {
    'use strict';

    var html_banner = new HtmlBanner({
        disable_click: true
    });

    $(document).ready(function(){
        // Video Loop:
        var loop = $('video.loop')[0];

        loop.addEventListener('ended', function() {
            setTimeout(function() {
                loop.currentTime = 0;
                loop.play();
            }, 2000);
        });

        // Video Fall:
        var $fall = $('video.fall');

        $('.leika').on('click', function() {
            $fall.fadeIn(200)[0].play();
            $('.leika, .ganga-fra').fadeOut(200);
            top.window.jQuery('body').trigger('sjova-catvertising-play');
        });

        // Ganga frá
        $('.ganga-fra').on('click', function() {
            $('.off').fadeIn(200, function(){
                $('video').remove();
            });
        });
    });

})(window, jQuery);
