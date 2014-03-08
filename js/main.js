requirejs.config({
    paths: {
        underscore: '../bower_components/underscore/underscore'
    }
});

require(
    ['mario', 'block', 'scoreboard', 'underscore'],
    function (mario, block, scoreboard, _) {

        mario.punch(block);

        console.log('Mario has ' + scoreboard.getCoinCount() + ' coins.');

        _(5).times(function () {
            mario.punch(block);
        });

        console.log('Mario has ' + scoreboard.getCoinCount() + ' coins.');

    }
);

