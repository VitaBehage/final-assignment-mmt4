var player1 = videojs('player1');
var player2 = videojs('player2');
var player3 = videojs('player3');
var player4 = videojs('player4');
var player5 = videojs('player5');

var playBtn1 = $('#play1');
var playBtn2 = $('#play2');
var playBtn3 = $('#play3');
var playBtn4 = $('#play4');
var playBtn5 = $('#play5');

var terugBtn1 = $('.terug');
var terugBtn2 = $('.terug');
var terugBtn3 = $('.terug');
var terugBtn4 = $('.terug');
var terugBtn5 = $('.terug');


var doneBtn1 = $('#doneid1');
var doneBtn2 = $('#doneid2');
var doneBtn3 = $('#doneid3');
var doneBtn4 = $('#doneid4');
var doneBtn5 = $('#doneid5');

var klaar1 = $('#klaar1');
var klaar2 = $('#klaar2');
var klaar3 = $('#klaar3');
var klaar4 = $('#klaar4');
var klaar5 = $('#klaar5');

var popup1 = $('.popup');
var popup2 = $('.popup');
var popup3 = $('.popup');
var popup4 = $('.popup');
var popup5 = $('.popup');

var kruis1 = $('#kruis1');
var kruis2 = $('#kruis2');
var kruis3 = $('#kruis3');
var kruis4 = $('#kruis4');
var kruis5 = $('#kruis5');


$("#accordion").accordion({
    heightStyle: "content",
    header: "h3"

});


$('#switch').click(function () {

    $('#switch').toggleClass('active')

    $('body').toggleClass('night')

    $('#logowit').toggleClass('bovenop')

});


player1.on('ready', function () {

    playBtn1.click(function () {
        if (!player1.paused()) {
            player1.pause();
        } else {
            player1.play();
        }

    });

    terugBtn1.click(function () {

        var time = player1.currentTime();
        player1.currentTime(time - 2);

    });

    doneBtn1.click(function () {

        popup1.css({
            'display': "block"
        });


    });

    doneBtn1.click(function () {
        klaar1.css({
            'opacity': "1"
        });
    });

    kruis1.click(function () {
        popup1.css({
            'display': "none"
        });
    });


});

player2.on('ready', function () {

    playBtn2.click(function () {
        if (!player2.paused()) {
            player2.pause();
        } else {
            player2.play();
        }

    });

    terugBtn2.click(function () {

        var time = player2.currentTime();
        player2.currentTime(time - 2);

    });


    doneBtn2.click(function () {

        popup2.css({
            'display': "block"
        });
    });

    doneBtn2.click(function () {
        klaar2.css({
            'opacity': "1"
        });
    });

    kruis2.click(function () {
        popup2.css({
            'display': "none"
        });
    });

});

player3.on('ready', function () {

    playBtn3.click(function () {
        if (!player3.paused()) {
            player3.pause();
        } else {
            player3.play();
        }

    });

    terugBtn3.click(function () {

        var time = player3.currentTime();
        player3.currentTime(time - 2);

    });

    doneBtn3.click(function () {

        popup3.css({
            'display': "block"
        });
    });

    doneBtn3.click(function () {
        klaar3.css({
            'opacity': "1"
        });
    });

    kruis3.click(function () {
        popup3.css({
            'display': "none"
        });
    });

});


player4.on('ready', function () {

    playBtn4.click(function () {
        if (!player4.paused()) {
            player4.pause();
        } else {
            player4.play();
        }

    });

    terugBtn4.click(function () {

        var time = player4.currentTime();
        player4.currentTime(time - 2);

    });

    doneBtn4.click(function () {

        popup4.css({
            'display': "block"
        });
    });

    doneBtn4.click(function () {
        klaar4.css({
            'opacity': "1"
        });
    });

    kruis4.click(function () {
        popup4.css({
            'display': "none"
        });
    });
});


player5.on('ready', function () {

    playBtn5.click(function () {
        if (!player5.paused()) {
            player5.pause();
        } else {
            player5.play();
        }

    });

    terugBtn5.click(function () {

        var time = player5.currentTime();
        player5.currentTime(time - 2);

    });

    doneBtn5.click(function () {

        popup5.css({
            'display': "block"
        });
    });

    doneBtn5.click(function () {
        klaar5.css({
            'opacity': "1"
        });
    });

    kruis5.click(function () {
        popup5.css({
            'display': "none"
        });
    });

});
