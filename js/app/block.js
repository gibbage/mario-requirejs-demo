define(function (require) {

    return {

        hit: function () {
            console.log('<BA-DING!>');
            var scoreboard = require('app/scoreboard');
            scoreboard.incrementCoinCount();
        }

    };

});
