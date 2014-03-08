requirejs.config({
    paths: {
        underscore: '../bower_components/underscore/underscore'
    },

    shim: {
        // Require will look through your baseDir and paths config looking for
        // the file 'underscore.js'. Now when one of your modules depends on
        // 'underscore' it will be aliased to window._
        'underscore': {
            exports: '_' // Refers to underscore's global: window._
        }
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

