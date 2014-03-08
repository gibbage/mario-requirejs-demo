require(
    ['app/mario', 'app/block', 'app/scoreboard'],
    function (mario, block, scoreboard) {

        mario.punch(block);

        console.log('Mario has ' + scoreboard.getCoinCount() + ' coins.');

        mario.punch(block);
        mario.punch(block);

        console.log('Mario has ' + scoreboard.getCoinCount() + ' coins.');

    }
);

