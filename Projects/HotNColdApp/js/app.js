
isGuessInvalid = false;
isGuesCorrect = false;

$(document).ready(function () {
    var count = 0;
    /*--- Display information modal box ---*/
    $(".what").click(function () {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function () {
        $(".overlay").fadeOut(1000);
    });



    $('#guessButton').click(function (event) {
        event.preventDefault();
        if (!isGuessInvalid && !isGuesCorrect) {
            count++;
            $('#guessList li').show();
            $('#guessList li  ').append(" " + $('#userGuess').val());
        }
        $('#count').text(count);

        if (isGuesCorrect) {
            $('#guessButton').css("disabled", "true");
            $('#game').toggleClass('blink');
        }
    });

});



var secretNo = Math.floor((Math.random() * 100) + 1); ;

function newGame() {
    window.location.reload();
}

function clear() {
    document.getElementById("userGuess").value = "";
}

function feedback() {

    var userNum = document.getElementById("userGuess").value;
    var feedback = document.getElementById("feedback");
    
    if (isNaN(userNum) || (userNum - Math.floor(userNum)) != 0) {
        feedback.innerHTML = "*Must input numbers*";
        isGuessInvalid = true;        
    }

    var diff = null;
    if (userNum > secretNo) {
        diff = userNum - secretNo;
    }
    else {
        diff = secretNo - userNum;
    }
    
    if (diff >= 50) {
        feedback.innerHTML = "ICE COLD";
        isGuessInvalid = false;
    }

    else if ((diff >= 30) && (diff < 50)) {
        feedback.innerHTML = "COLD";
        isGuessInvalid = false;
    }

    else if ((diff >= 20) && (diff < 30)) {
        feedback.innerHTML = "WARM";
        isGuessInvalid = false;
    }

    else if ((diff >= 10) && (diff < 20)) {
        feedback.innerHTML = "HOT";
        isGuessInvalid = false;
    }

    else if ((diff >= 1) && (diff < 10)) {
        feedback.innerHTML = "VERY HOT";
        isGuessInvalid = false;
    }

    else if (diff == 0) {
    isGuesCorrect = true;
    feedback.innerHTML = "***You WON***";
    }
}


