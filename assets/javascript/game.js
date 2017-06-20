//globle variables
var wins = 0;
var losses = 0;

//Current score
var score = 0;

//selects a random number from 19 t0 120
var total = Math.floor((Math.random()* 100) + 19);

//Assign random value to crystals from 1-12
var red = Math.floor((Math.random()* 12) + 1);
var blue = Math.floor((Math.random()* 12) + 1);
var yellow = Math.floor((Math.random()* 12) + 1);
var green = Math.floor((Math.random()* 12) + 1);

//updates addition in html
var updateScore = function (){
	$('.addition').empty();
	$('.addition').append(addition);
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
}

//Reset
var reset = function(){
	score = 0;
    total = Math.floor((Math.random()* 100) + 19);

	$('.total').empty();
	$('.total').append(total);

	red = Math.floor((Math.random()* 12) + 1);
    blue = Math.floor((Math.random()* 12) + 1);
    yellow = Math.floor((Math.random()* 12) + 1);
    green = Math.floor((Math.random()* 12) + 1);


    console.log("---Computer selection---")
    console.log("Red: " + red);
    console.log("Yellow: " + yellow);
    console.log("Green: " + green);
    console.log("Blue: " + blue);
    updateScore();
}
var add = function (){
	if (score == total) {
		wins = wins + 1;
		alert("You won! Well done! :D ")
		reset();
	}
	else if(score > total){
		losses = losses + 1;
		alert("You lost...Better luck next time! :( ")
		reset();
	}
	else{
		updateScore();
	}
}
$('.total').append(total);

$('.addition').append(score);

$(document).ready(function(){
	$('#red').click(function(){
		ascore = score + red;
		add();
	})
	$('#blue').click(function(){
		addition = addition + blue;
		add();
	})
	$('#yellow').click(function(){
		addition = addition + yellow;
		add();
	})
	$('#green').click(function(){
		addition = addition + green;
		add();
	})
});