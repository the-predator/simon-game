const colors = ['green', 'red', 'yellow', 'green'];
var gameSequence = [];
var userSequence = [];
function gamePattern() {
    userSequence = [];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomColor = colors[randomNumber];
    soundPlay(randomColor);
    $('#' + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
    gameSequence.push(randomColor);
    console.log(gameSequence);
}
function soundPlay(str) {
    var aud = new Audio('sounds/' + str + '.mp3');
    aud.play();
}
$('.btn').click(function () {
    var userChosenColor = ($(this).attr('id')).toString();
    var i = userSequence.length;
    userSequence.push(userChosenColor);
    if (gameSequence[i] == userSequence[i]) {
        soundPlay(userChosenColor);
        $('#' + userChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
        
        if(userSequence.length == gameSequence.length)
        {
           setTimeout(gamePattern, 1000);
           $('#level-title').text('Level '+ ++level);
        }
    }
    else {
        soundPlay('wrong');
        $('btn').fadeIn(100).fadeOut(100).fadeIn(100);
        userSequence = [];
        gameSequence = [];
        $('#level-title').text("Game Over!!!!");
        setTimeout(() => {
            $('#level-title').text("Press a Key To restart");
        }, 3000);
    }
});
$(document).keypress(() => {
 level = 0;
 $('#level-title').text('Level '+ level);
 gamePattern();
});