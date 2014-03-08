define(function () {

    var coinCount = 0;

    return {

        incrementCoinCount: function () {
            coinCount++;
        },

        getCoinCount: function () {
            return coinCount;
        }

    };

});
