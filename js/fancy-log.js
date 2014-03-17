define(['jquery', 'mustache', 'text!html/event-item.html'], function ($, Mustache, eventItemTemplate) {

    var $eventLog = $('.event-log');

    return {

        log: function (message) {
            var event = {
                timestamp: getFormattedTimestamp(),
                message: message
            };
            $eventLog.append(Mustache.render(eventItemTemplate, event));
        }

    };

    function getFormattedTimestamp () {
        var date = new Date();
        return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() +
            ' ' + date.getMilliseconds() + 'ms';
    }

});
