var count = 2;

$(document).ready(function () {

    $('#Next').click(function (event) {
        event.preventDefault();
        //        count++;
        if (count > 5) {
            $('#Next').hide();
            $('#Submit').show();
        }
    });

    $('#Submit').click(function () {
        $('#Submit').hide();
        $('h1').hide();
        $('#referenceQuest').hide();
        $('#Question').hide();
        $('.radioAnswers').hide();
        $('.choices').hide();
    });

});


var questions = ["Which tag makes the largest headline?",
"ISP is",
 "Gif is a ",
 "HTML is", "HTTP is a"];

var q1 = ["H1", "H2", "H3", "H4"];

var q2 = ["a company that provides access to the Internet.",
"the language of the Web.",
"common graphic format on the Web.",
"common questions and answers."];

var q3 = ["the language of the Web", "common graphic format on the Web.", "a company that provides access to the Internet.", "common questions and answers."];

var q4 = ["a company that provides access to the Internet.", "common questions and answers", "the language of the Web.", "common graphic format on the Web."];

var q5 = ["the transfer method used on the Web.", "file format used to transfer files from one word processor to another.",
        "a Web Address", "file format that retains format on the Web."];

var refQuestion = document.getElementById("referenceQuest").innerHTML;

var question = document.getElementById("Question").innerHTML;

function NextQuestion() {

    if (count <= 5) {

        document.getElementById("referenceQuest").innerHTML = count;

        if (count == 1) {
            radioDesign(q1);
//            if (q1[0].checked) {
//                alert("true");
//            }
//            else {
//                alert("false");
//            }
        }
        else if (count == 2) {
            radioDesign(q2);
//            if (document.getElementById('Label1').checked) {
//                alert("correct");
//            }
//            else {
//                alert("wrong");
//            }
        }
        else if (count == 3) {
            radioDesign(q3);
        }
        else if (count == 4) {
            radioDesign(q4);
        }
        else if (count == 5) {
            radioDesign(q5);
        }

        document.getElementById("Question").innerHTML = questions[count-1];

        count++;

        ClearRadio();
    }
}

function radioDesign(qChoice) {
    document.getElementById("Label1").innerHTML = qChoice[0];
    document.getElementById("Label2").innerHTML = qChoice[1];
    document.getElementById("Label3").innerHTML = qChoice[2];
    document.getElementById("Label4").innerHTML = qChoice[3];
}

function ClearRadio() {
    document.getElementById("radioAnswer1").checked = false;
    document.getElementById("radioAnswer2").checked = false;
    document.getElementById("radioAnswer3").checked = false;
    document.getElementById("radioAnswer4").checked = false;
}

var score = 0;
function CheckAnswer() {
    var quest = document.getElementById("Question").innerHTML;
    
    if (quest == questions[0].toString()) {
        if (document.getElementById("radioAnswer1").checked) {
            answer(true);
            
        }
        else {
            answer(false);
        }
    }

    if (quest == questions[1].toString()) {
        if (document.getElementById("radioAnswer1").checked) {
            answer(true);
        }
        else {
            answer(false);
        }
    }

    if (quest == questions[2].toString()) {
        if (document.getElementById("radioAnswer2").checked) {
            answer(true);
        }
        else {
            answer(false);
        }
    }

    if (quest == questions[3].toString()) {
        if (document.getElementById("radioAnswer3").checked) {
            answer(true);
        }
        else {
            answer(false);
        }
    }

    if (quest == questions[4].toString()) {
        if (document.getElementById("radioAnswer1").checked) {
            answer(true);
        }
        else {
            answer(false);
        }
    }
}

function answer(a) {
var answer = document.getElementById("ans").innerHTML;
    if(a==true)
    {
        document.getElementById("ans").innerHTML = "You are correct";
        document.getElementById("ans").style.color = "#CCFF99";
        score++;
        }
    else{
        document.getElementById("ans").innerHTML = "You are wrong";
        document.getElementById("ans").style.color = "#FF9980";
    }
}

function Final() {
    document.getElementById("ans").innerHTML = "YOUR SCORE IS " + score + "/5";
    document.getElementById("ans").style.color = "#FFCC00";
    }