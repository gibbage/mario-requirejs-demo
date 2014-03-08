define(function () {

    return {

        punch: function (block) {
            require('fancy-log').log('Mario be like punching blocks and shit');
            block.hit();
        }

    };

});
