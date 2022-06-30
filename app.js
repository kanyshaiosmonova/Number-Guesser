// Game Function
// -Player must guess a number between a min and max
// -Player gets a certain amount of guesses
// -Notify player of guesses remaining
// -Notify the player of the correct answer if loose
// -Let player choose to play again

//Game Values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

//UI Elements
const game = document.getElementById('#game'),
        minNum = document.querySelector('.min-num'),
        maxNum = document.querySelector('.max-num'),
        guessBtn = document.getElementById('#guess-btn'),
        guessInput = document.getElementById('#guess-input'),
        message = document.querySelector('.message');

//Assign UI min and max     
minNum.textContent = min;
maxNum.textContent = max;

//Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

 //Validate
if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }
})

//Create setMessage function
if( guess=== winningNum){
    //Disable input
    getInput.disabled = true;
    //Change border color
    guessInput.style.borderColor = 'green';
    //Set message
    setMessage(`${winningNum} is correct!`, 'green');
} else {
    
}
//Set Message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}