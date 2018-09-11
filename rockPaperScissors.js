//an array of choices for the game
let compPicksOne = ["rock", "scissors", "paper"];
//sets player and computer scores to 0
let playerScore = 0;
let computerScore = 0;


//if its a tie, neither player gets a point and game will continue 
let game = function(playerChoice){
    //computer makes random choice from the compPicksOne array. computerChoice has to be made inside the function so it makes a new choice everytime.
    let computerChoice = compPicksOne[Math.floor(Math.random() * 3)];
    //just in case player enters invalid input, prompts with correct choices
    if(playerChoice.toLowerCase() !== "rock" && playerChoice.toLowerCase() !== "scissors" && playerChoice.toLowerCase() !== "paper"){
        console.log("Please choose either ROCK, SCISSORS or PAPER");
    } else if (playerChoice.toLowerCase() === computerChoice){
        //log player and computer made the same choice
        console.log("Player and Computer both chose " + playerChoice.toUpperCase())
        console.log('It\'s a tie!');
        scoreCalc();
    } else if ((playerChoice.toLowerCase() === "rock" && computerChoice === "scissors") || (playerChoice.toLowerCase() === "scissors" &&  computerChoice === "paper") || (playerChoice.toLowerCase() === "paper" && computerChoice === "rock")){
        //the above scenarios are all in which the player wins (rock vs scissors, scissors vs paper or paper vs rock)
        //log the players choice beats the computers choice        
        console.log(playerChoice.toUpperCase() + " beats " + computerChoice.toUpperCase());
        console.log("You win!!!");
        //increase players score
        playerScore++;
        //calculate overall scores and end game if there is a winner
        scoreCalc();
    } else {
        //log that computers choice beats players choice
        console.log(computerChoice.toUpperCase() + " beats " + playerChoice.toUpperCase());    
        console.log('Computer wins');
        //increase computers score
        computerScore++;
        //calculate overall scores and end game if there is a winner
        scoreCalc();
    };
};

//calculates overall winner and reset game
let scoreCalc = function(){
    //displays scores
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);
    if (playerScore === 2){
        //ends game when 2 games are won
        console.log("Player won best 2 out of 3!");
        //resets scores
        playerScore = 0;
        computerScore = 0;
        console.log("Let's play again!");
    } else if (computerScore === 2){
        //ends game when 2 games are won
        console.log("Computer won best 2 out of 3!");
        //resets scores
        playerScore = 0;
        computerScore = 0;
        console.log("Sorry...try again!");
    } else {
        //if no winner (2 out of 3), keep going
        return;
    };
};

game("scissors");