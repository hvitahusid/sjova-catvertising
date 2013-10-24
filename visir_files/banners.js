    /*******************facebook subscription script***********************/
function ajaxEvent(event, u, baseUrl){
    url = baseUrl + 'subscriptionevent/event/index';    
    $.ajax({
        type: 'POST',
        url: url,
        data: {event: event, url: u},
        success: function(response) {}
    });
}