
var scores, activePlayer, roundScore, gamePlaying;

init();
var lastDice1;
var lastDice2;
document.querySelector('.btn-roll').addEventListener('click', function(){
	if(gamePlaying)
	{
		var dice1 = Math.floor(Math.random() * 6)+1;
		var dice2 = Math.floor(Math.random() * 6)+1;

		document.querySelector('.dice1').style.display = 'block';
		document.querySelector('.dice2').style.display = 'block';
		var diceDOM1 = document.querySelector('.dice1');
		var diceDOM2 = document.querySelector('.dice2');
		diceDOM1.style.display = 'block';
		diceDOM2.style.display = 'block';
		diceDOM1.src = 'dice-'+ dice1 + '.png';
		diceDOM2.src = 'dice-'+ dice2 + '.png';
		if(dice1==6 || dice2==6 && lastDice1==6 || lastDice2==6)
		{
			scores[activePlayer]=0;
			document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
			nextPlayer();
		}
		else if(dice1!==1 && dice2!==1)
		{
			roundScore+=(dice1+dice2);
			document.querySelector('#current-'+activePlayer).textContent = roundScore;
		}
		else
		{
			nextPlayer();
		}
		
		
	}
});

document.querySelector('.btn-hold').addEventListener('click', function() {
	if(gamePlaying)
	{
		scores[activePlayer]+=roundScore;

		var input = document.querySelector('#text').value;

		document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
if(input){
	var winningScore = input;
}
else{
	winningScore =100;
}

		if(scores[activePlayer]>=winningScore)
		{
			document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
			document.querySelector('.dice1').style.display = 'none';
			document.querySelector('.dice2').style.display = 'none';
			document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
			document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
			gamePlaying = false;
		}
		else
		{
			nextPlayer();
		}
	}
	
});

function nextPlayer()
{
	activePlayer===0?activePlayer=1:activePlayer=0;
	roundScore = 0;		
	document.getElementById('current-0').textContent='0';
	document.getElementById('current-1').textContent='0';		
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	//document.querySelector('.dice1').style.display = 'none';
	//document.querySelector('.dice2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click',init);

function init() {
	scores=[0,0];
	roundScore = 0;
	activePlayer = 0; 
	gamePlaying = true;
	
	

	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	document.querySelector('.dice1').style.display = 'none';
	document.querySelector('.dice2').style.display = 'none';

	document.querySelector('form').style.display = 'block';

	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}
