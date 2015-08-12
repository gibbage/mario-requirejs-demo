define(['jquery', 'mustache', 'mo', 'text!html/event-item.html'], function ($, Mustache, mo, eventItemTemplate) {

    var $eventLog = $('.event-log');

    console.log('Can I get the same module by two names? - YES!');
    console.log('MUSTACHE', Mustache);
    console.log('MO', mo);

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
