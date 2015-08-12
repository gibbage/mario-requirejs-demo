requirejs.config({
    paths: {
        jquery: [
            '//code.jquery.com/jquery-2.1.0.min',
            '../bower_components/jquery/dist/jquery'
        ],
        underscore: '../bower_components/underscore/underscore',
        text: '../bower_components/requirejs-text/text',
        mustache: '../bower_components/mustache/mustache',
        html: '../templates'
    },

    map: {
        '*': {
          'mo': 'mustache'
        }
    },

    shim: {
        // Require will look through your baseDir and paths config looking for
        // the file 'underscore.js'. Now when one of your modules depends on
        // 'underscore' it will be aliased to window._
        'underscore': {
            exports: '_' // Refers to underscore's global: window._
        }
    },

    bundles: {
        'multi-modules': ['bowser', 'yoshi', 'toad']
    }
});

require(
    ['mario', 'block', 'scoreboard', 'underscore', 'fancy-log', 'bowser', 'toad'],
    function (mario, block, scoreboard, _, fancyLog, bowserMsg, toadMsg) {

        fancyLog.log('Mario gets the axe and Bowser fall into the lava');
        fancyLog.log('Bowser: ' + bowserMsg);
        fancyLog.log('Toad: ' + toadMsg);

        mario.punch(block);

        fancyLog.log('Mario has ' + scoreboard.getCoinCount() + ' coins.');

        _(5).times(function () {
            mario.punch(block);
        });

        fancyLog.log('Mario has ' + scoreboard.getCoinCount() + ' coins.');

    }
);

