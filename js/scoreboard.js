define(['jquery'], function ($) {

    var coinCount = 0,
        $coinDisplay = $('.coin-count');

    return {

        incrementCoinCount: function () {
            coinCount++;
            updateDisplay();
        },

        getCoinCount: function () {
            return coinCount;
        }

    };

    function updateDisplay () {
        $coinDisplay.text(coinCount);
    }

});
