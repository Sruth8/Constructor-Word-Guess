//creat an array of words

const words = ['Tardis', 'Enterprise', 'Battlestar', 'Death Star', 'Elysium ship',
    'Millennium', 'Serenity', 'Event Horizon', 'Sulaco',]

    

    var wordArray = "";
    //  individual letters stored in array
    var letters = [];
    // shows number of blanks to each word 
    var underscores = 0;
    // shows under scores and correct letters
    var underSnCletters = [];
    // Wrong guesses
    var wrong = [];
    
    // Game counters
    var wins = 0;
    var losses = 0;
    var numTries = 10;
    
    // FUNCTIONS 
    // ==========================================================================
    Start();

function Start() {
    wordArray = words[Math.floor(Math.random() * words.length)];
    numTries = 9;
    underSnCletters = [];
    letters = wordArray.split("");
    underscores = letters.length;
    wrong = [];
    completeOneGame();
    forTries();
    forIncomplete();
    forWrong();

}


// Initiate click listners
document.onkeyup = function (event) {

    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

    matchLetters(letterGuessed);

    // completeOneGame();
}

function matchLetters(matchLet) {
    // a boolean to see if the right letter is used
    var foundLetters = false;

    // checkin gor the corret letter 
    for (var i = 0; i < underscores; i++) {
        if (wordArray[i] === matchLet) {
           
            foundLetters = true;
        }
    }

    // This will put the letter where is belongs 
    if (foundLetters) {
        // Loop through the word
        for (var l = 0; l < underscores; l++) {
            //  under scores and correct letters collected
            if (wordArray[l] === matchLet) {
                // Set the specific space in blanks and letter equal to the letter when there is a match
                underSnCletters[l] = matchLet;
            }
        }
        // Test
        console.log(underSnCletters);
    }
    // wrong letters not in the word
    else {
        // pushes the wrong letters to a list on wrong letters.
        wrong.push(matchLet);
        numTries--;
    }

}


function completeOneGame() {
    // status updates
    console.log("numWins: " + wins + " numLoss: " + losses + "  NumGuesses: " + numTries);

    
    // If all the letters match the solution
    if (letters.toString() === underSnCletters.toString()) {
        //  alert the user
        wins++;
        alert("You win!");

        //   restart the game and update the win counter
        document.getElementById("num-wins").innerHTML = wins;
        startGame();
    }

    // If user runs out of guesses
    else if (numTries === 0) {
        // Add to the loss counter 
        losses++;
        

        //  restart the game and update losses
        document.getElementById("num-loss").innerHTML = losses;
        startGame();
    }
};




function forTries() { document.getElementById("num-tries").innerHTML = numTries; }
// Print  guesses and blanks in the webpage
function forIncomplete() { document.getElementById("incomplete-ans").innerHTML = underSnCletters.join(" "); }
// Print wrong guesses in the webpage
function forWrong() { document.getElementById("wrong-letter").innerHTML = wrong.join(" "); }

  