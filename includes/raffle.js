var milisec=0;
var seconds=0;
var minutes=0;
var winner = '';
var contestants=[];

function processForm(obj_f) {
	seconds = 7;
	contestants = obj_f.userinput.value.split("\n");
	findWinner();
}
function winnerIs() {
				document.getElementById('results').innerHTML='&nbsp;&nbsp;&nbsp;&nbsp;And the winner is.....&nbsp;&nbsp;&nbsp;&nbsp;<p />&nbsp;<p /><winner>' + contestants[Math.floor(Math.random()*contestants.length)] + '</winner>';
}

function findWinner(){
 var x=0;
 if (milisec<=0){
    milisec=9
    seconds-=1
 	}
 if (seconds<=-1){
    milisec=0
 	}

    if(seconds <= 0){
			clearTimeout();
			// keep trying if a black line is retrieved. Give up after 100 tries;
			winner = contestants[Math.floor(Math.random()*contestants.length)];
			while (winner.length < 2) {
				winner = contestants[Math.floor(Math.random()*contestants.length)];
				x++;
				if (x > 100) {break;}
			}
				document.getElementById('results').innerHTML='&nbsp;&nbsp;&nbsp;&nbsp;And the winner is.....&nbsp;&nbsp;&nbsp;&nbsp;<div id="final"><p />&nbsp;<br /><winner>' + winner + '!</winner></div>';
		} else {
			winnerIs();
      setTimeout("findWinner()",100) 
    	milisec-=1
      }
}
 
function hideNames() {
				document.getElementById('names').style.visibility='hidden';
				document.getElementById('show').innerHTML='<a class="blue" onClick="showNames(); return false;">Show names in box</a>';
}

function showNames() {
				document.getElementById('names').style.visibility='visible';
				document.getElementById('show').innerHTML='<a class="blue" onClick="hideNames(); return false;">Hide names in box</a>';
}

