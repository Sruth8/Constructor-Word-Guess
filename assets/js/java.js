//creat an array of ships

var ships = ['Tardis', 'Enterprise', 'Battlestar', 'Death Star', 'Elysium ship',
    'Millennium', 'Serenity', 'Event Horizon', 'Sulaco'];



var chooseShip = "";
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
//var numTries = 10;


// ==============================START GAME================================
//  Start();

function Start() {
    chooseShip = ships[Math.floor(Math.random() * ships.length)];
    numTries = 10;
    underSnCletters = [];
    letters = chooseShip.split("");
    underscores = letters.length;
    wrong = [];
    for (var i = 0; i < underscores; i++) {
        underSnCletters.push("_");
    }
    //console.log is my bestie :-)
    console.log(underSnCletters);
    console.log(chooseShip);
    console.log(letters);
    console.log(underscores);
    // set up code to link to html
    document.getElementById("under-scores").innerHTML = underSnCletters.join(" ");
    document.getElementById("remaining-guess").innerHTML = numTries;
    document.getElementById("num-wins").innerHTML = wins;
    document.getElementById("num-losses").innerHTML = losses;

    // forTries(); 
    // completeOneGame();
    // forIncomplete();
    // forWrong();

}

function testKey(letters) {

    var searchLetter = false;

    for (var i = 0; i < underscores; i++) {
        if (chooseShip[i] == letters) {
            searchLetter = true;
            // alert("correct letter");
        }
    }

    if (searchLetter) {
        for (var i = 0; i < underscores; i++) {
            if (chooseShip[i] == letters) {
                underSnCletters[i] = letters;
            }
        }
        // for (var i = 0; i < underscores; i++) {
        //     if (chooseShip[i] == letters) {
        //         underSnCletters[i] = letters;
        //     }
        // }

    }
    else {
        wrong.push(letters);
        numTries--
    }

    console.log(underSnCletters);

}

function gameOver() {
    console.log("numWins: " + wins + " numLoss: " + losses + "  NumGuesses: " + numTries);
  
    document.getElementById(" ").innerHTML = ;

    document.getElementById(" ").innerHTML = losses;
    document.getElementById(" ").innerHTML = losses;
    
    
    if (searchLetter.toString() == underSnCletters.toString()) {
        wins++;
        alert("Winning");

        document.getElementById("num-wins").innerHTML = wins;

        Start();

    }


    else if (numTries === 0) {
        losses++;
        alert("Looser");

        document.getElementById("num-losses").innerHTML = losses;
        start();
    }
}




Start();


//============================SET UP FUNCTION FOR THE KEYS TO REGISTER===============


document.onkeyup = function (event) {
    var keypress = String.fromCharCode(event.keyCode).toLowerCase();
    testKey(keypress);
    console.log(keypress);

}


















// Initiate click listners
// document.onkeyup = function (event) {

//     var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

//     matchLetters(letterGuessed);

//     // completeOneGame();
// }

// function matchLetters(matchLet) {
//     // a boolean to see if the right letter is used
//     var foundLetters = false;

//     // checkin gor the corret letter 
//     for (var i = 0; i < underscores; i++) {
//         if (chooseShip[i] === matchLet) {

//             foundLetters = true;
//         }
//     }

//     // This will put the letter where is belongs 
//     if (foundLetters) {
//         // Loop through the word
//         for (var l = 0; l < underscores; l++) {
//             //  under scores and correct letters collected
//             if (chooseShip[l] === matchLet) {
//                 // Set the specific space in blanks and letter equal to the letter when there is a match
//                 underSnCletters[l] = matchLet;
//             }
//         }
//         // Test
//         console.log(underSnCletters);
//     }
//     // wrong letters not in the word
//     else {
//         // pushes the wrong letters to a list on wrong letters.
//         wrong.push(matchLet);
//         numTries--;
//     }

// }


// function completeOneGame() {
//     // status updates
//     console.log("numWins: " + wins + " numLoss: " + losses + "  NumGuesses: " + numTries);


//     // If all the letters match the solution
//     if (letters.toString() === underSnCletters.toString()) {
//         //  alert the user
//         wins++;
//         alert("You win!");

//         //   restart the game and update the win counter
//         document.getElementById("num-wins").innerHTML = wins;
//         startGame();
//     }

//     // If user runs out of guesses
//     else if (numTries === 0) {
//         // Add to the loss counter 
//         losses++;


//         //  restart the game and update losses
//         document.getElementById("num-loss").innerHTML = losses;
//         startGame();
//     }
// };




// function forTries() { document.getElementById("num-tries").innerHTML = numTries; }
// // Print  guesses and blanks in the webpage
// function forIncomplete() { document.getElementById("incomplete-ans").innerHTML = underSnCletters.join(" "); }
// // Print wrong guesses in the webpage
// function forWrong() { document.getElementById("wrong-letter").innerHTML = wrong.join(" "); }

