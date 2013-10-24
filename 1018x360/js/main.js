(function (global, $, undefined) {
    'use strict';

    var html_banner = new HtmlBanner({
        disable_click: true
    });

    $(document).ready(function() {
        top.window.jQuery('body').on('sjova-catvertising-play', function() {
            setTimeout(function() {
                $('video')[0].play();
            }, 1200);
        });
    });

})(window, jQuery);
