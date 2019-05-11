var random_result;
var lost;
var win;

// Setters
// Getters



var resetAndStart = function() {

    $(".crystals").empty(); 
    
    var images = [
        '','','',''
    ];

random_result = Math.floor(Math.random() * 69) + 30;

$("#result").html('Random Result: ' + random_result);

for (var i = 0; i < 4; i++){

var random = Math.floor(Math.random() * 11) + 1;
// console.log(random);


    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal', 
            "data-random": random
        });
        crystal.css({
            "background-image":src="https://cdn.pixabay.com/photo/2014/09/08/16/08/star-439295__340.jpg('" + images[i] + "')",
            "background-size": "cover"
        });

    $(".crystals").append(crystal);
    }

    $("#previous").html("Total Score: " + previous);
}

resetAndStart();


$(".document").on('click', ".crystal", function () {
    var num = parseInt($(this).attr('data-random'));
    previous += num;

    $("#previous").html("Total Score ", previous);

    console.log(previous);

    if(previous > random_result){
        lost--;
        $("#lost").html("You Lost: " + lost);
        previous = 0;
        resetAndStart();
    }

    else if(previous === random_result){
        win++;
        $("#win").html("You win: " + win);
        previous = 0;
        resetAndStart();
    }
});

