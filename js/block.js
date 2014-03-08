define(function (require) {

    return {

        hit: function () {
            require('fancy-log').log('BA-DING!');
            var scoreboard = require('scoreboard');
            scoreboard.incrementCoinCount();
        }

    };

});
