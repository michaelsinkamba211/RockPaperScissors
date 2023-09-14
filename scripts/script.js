// lets record scores




const resultScores = localStorage.getItem('scores');

const scores = JSON.parse(resultScores);


// function reset scores
function resetScores(){
        scores.wins = 0;
        scores.looses = 0;
        scores.ties = 0;
    
    alert('scores have been reset' + '\n' + 
        'Wins: ' + scores.wins+ ' Looses: ' + scores.looses + '  Ties: ' + scores.ties
    );

    localStorage.removeItem(scores);

}


let finalComputerMove = '';
function computerMove(){
    const move = Math.random();

    if(move >= 0 && move <= 0.3) {
        finalComputerMove = 'rock';
    } else if(move > 0.3 && move <= 0.6) {
        finalComputerMove = 'paper';
    } else if(move > 0.6 && move <= 1) {
        finalComputerMove = 'scissors';
    }
}

// computer move done

// now we record persons move

let finalPersonMove = '';
function personsMove(opt){

    if(opt === 'rock'){
        finalPersonMove = 'rock';
    } else if(opt === 'paper'){
        finalPersonMove = 'paper';
    } else if(opt === 'scissors'){
        finalPersonMove = 'scissors';
    }
}


var result = '';



function compareMoves(){
    
    if(finalComputerMove ===  finalPersonMove ){
        scores.ties+=1;
        result = 'Its a Tie';
    } else if(finalComputerMove === 'paper' && finalPersonMove === 'rock'){
        scores.looses+=1;
        result = 'you loose';
    } else if(finalComputerMove === 'scissors' && finalPersonMove === 'rock'){
        scores.wins+=1;
        result = 'You Win!';
    }
    else if(finalComputerMove === 'paper' && finalPersonMove === 'scissors'){
        scores.wins+=1;
        result = 'You Win!';
    } else if(finalComputerMove === 'rock' && finalPersonMove === 'scissors'){
        scores.looses+=1;
        result = 'You Loose!';
    }  else if(finalComputerMove === 'rock' && finalPersonMove === 'paper'){
        scores.wins+=1;
        result = 'You Win!';
    } else if(finalComputerMove === 'scissors' && finalPersonMove === 'paper'){
        scores.looses+=1;
        result = 'You Loose!';
    }


    localStorage.setItem('scores', JSON.stringify(scores));


    alert('Result: '+  result + '\n' + 'Computer: ' + finalComputerMove + '\n' + 'You: ' + finalPersonMove + '\n \n' + 'Wins: ' + scores.wins+ ' Looses: ' + scores.looses + '  Ties: ' + scores.ties);

}

