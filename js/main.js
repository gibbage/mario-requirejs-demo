require(
    ['mario', 'block', 'scoreboard'],
    function (mario, block, scoreboard) {

        mario.punch(block);

        console.log('Mario has ' + scoreboard.getCoinCount() + ' coins.');

        mario.punch(block);
        mario.punch(block);

        console.log('Mario has ' + scoreboard.getCoinCount() + ' coins.');

    }
);

