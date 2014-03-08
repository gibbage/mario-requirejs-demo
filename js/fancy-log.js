define(['jquery'], function ($) {

    var $eventLog = $('.event-log');

    return {

        log: function (message) {
            $eventLog.append('<p>' + message + '</p>');
        }

    };

});
