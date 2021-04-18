const anagram = document.querySelector('#anagram');
const form = document.querySelector('form');
const report = document.querySelector('#report');
const score = document.querySelector('#score');
const streak = document.querySelector('#streak');
var currentScore = 0;
var scoreStreak = 0;


const answers = ["Naruto", "Sasuke", "Kakashi", "Itachi", "Deidara", "Shikamaru", "Tobi", "Tobirama", "Jiraiya", "Madara"];
const anagrams = ["uaNtro", "uSakes", "askiak", "taIich", "Didaera", "kihSamuar", "bTio", "roTabaim", "yiaJrai", "daMraa"];

// this happens when the js file is loaded by the html
let round = 0;



anagram.innerText = anagrams[round];

function enter(e) {
    e.preventDefault();
    // very important technique of getting value of form input
    const guess = form.answerBox.value;
    if (guess == answers[round]) {
        report.innerText = "Well done!";
        currentScore +=1;
        score.innerText = "Score: " + currentScore;
        scoreStreak += 1;
        streak.innerText = "Win Streak: " + scoreStreak;
        round += 1;
        anagram.innerText = anagrams[round];
        timeLeft += 5;
        // increase player's score variable and update score text
        // make sure you don't overrun your array
        // winning streak?
    }
    else {
        report.innerText = "Wrong, try again...";
        timeLeft -=5;
        streak.innerText = "Win Streak: 0";
        scoreStreak = 0;
        
        // penalty for getting one wrong?
    }

    if(currentScore == 10)
    {
        
        anagram.innerText = "You Win!";
    }
}

form.enterButton.addEventListener('click', enter);






const timerText = document.querySelector('#timerText');
let timeLeft = 30;


// How to make a timer in js
// setInterval takes a function and a duration, and call the function that often.
// we also store the operation in a variable called countdown so we can stop
// it later
let countdown = setInterval(Tick, 1000);

function Tick() {
    timeLeft -= 1;
    timerText.innerText = timeLeft;
    // check to see if time has run out.
    if (timeLeft <= 0) {
        // stop the repeating function with clearInterval and the variable
        // we storeed above.
        clearInterval(countdown);
        // Here is where you'd put your game over code.
        document.querySelector('#gameover').innerText = "GAME OVER";
        
    }
    else if (currentScore == 10)
    {
         timerText.innerText = "You win"
         clearInterval(countdown);
    }

}







