var botScore=0,
	playerScore=0;
document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("paper").onclick=playerThrowsPaper;
document.getElementById("scissors").onclick=playerThrowsScissors;
document.getElementById("lizard").onclick=playerThrowsLizard;
document.getElementById("spock").onclick=playerThrowsSpock;
function playerThrowsRock(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
}
function playerThrowsScissors(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");

}
function playerThrowsPaper(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");

}
function playerThrowsRock(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");

}
function playerThrowsSpock(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"spock");

}
function playerThrowsLizard(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"lizard");

}
function getRandomWeapon(){
	var randomNumber=Math.ceil(Math.random()*5);
	var botsWeapon="rock";
	if(randomNumber==1){
		botsWeapon="scissors";
	}else if(randomNumber==2){
		botsWeapon="paper";
	}else if(randomNumber==3){
		botsWeapon="spock";
	}else if(randomNumber==4){
		botsWeapon="lizard";		
	}
	return botsWeapon;
}
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("There was tie");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="lizard") ||
		(botsWeapon=="lizard" && playersWeapon=="spock") ||
		(botsWeapon=="spock" && playersWeapon=="scissors") ||
		(botsWeapon=="scissors" && playersWeapon=="lizard") ||
		(botsWeapon=="lizard" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="spock") ||
		(botsWeapon=="spock" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors") 
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Sorry, you're a loser");
}
function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("Congrats,you win!");

}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}