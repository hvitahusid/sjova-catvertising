(function($){
    jQuery.fn.hopkaupDirectBanner = function(options){

        var settings = $.extend( {
            'type'        : 'classic',
            'portal'      : 'na',
            'position'    : 'na'
        }, options);

        return this.each(function(){
            var url = 'http://www.hopkaup.is/banner/direct-json/';
            //var url = 'http://localhost:8088/hopkaup/banner/direct-json/';
            var params = {
                type: settings.type,
                portal: settings.portal,
                position: settings.position
            };
            var that = this;
            $.ajax({
                    url: url,
                    dataType: 'jsonp',
                    data: params,
                    jsonp: false,
                    jsonpCallback: "hopkaup",
                    success: function (data) {
                        var url = data.url;
                        var image = data.image;
                        $(that).empty();
                        var html = "<a href=\""+url+"\" target=\"_blank\"><img src=\""+image+"\"/></a>";
                        $(html).appendTo($(that));
                    }
                });
        }); //end return
    }//end fn
})(jQuery);
