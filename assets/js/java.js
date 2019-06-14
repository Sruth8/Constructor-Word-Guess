//creat an array of ships

var ships = ['tardis', 'enterprise', 'battlestar', 'deathstar', 'elysium',
    'millennium', 'serenity', 'eventhorizon', 'sulaco'];



var chooseShip = "";
//  individual letters stored in array
var letters = [];
// shows number of blanks to each word 
var underscores = 0;
// shows under scores and correct letters
var underSnCletters = [];
// Wrong guesses
var wrong = [];
var searchLetter = [];
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
    forWins();
    forLosses();
    forTries();



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
    //document.getElementById("remaining-guess").innerHTML = numTries;
    // document.getElementById("num-wins").innerHTML = wins;
    // document.getElementById("num-losses").innerHTML = losses;


}
//======= function to find the right letter====
Start();


function testKey(letters) {

    //alert(letters);
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
    //====== this will push the letters to the wrong guesses
    else {
        wrong.push(letters);
        numTries--
    }

    console.log(underSnCletters);

}

function gameOver() {
    console.log(`Wins: ${wins}, Losses: ${losses}, Tries: ${numTries}`);
   

    // document.getElementById("remaining-guess").innerHTML = numTries;

    var usedkeys = underSnCletters.join(" ");
    var wrongKeys = wrong.join(" ");
    document.getElementById("under-scores").innerHTML = usedkeys;
    document.getElementById("wrong-guess").innerHTML = wrongKeys;
    forTries();
   
    // underscorces and correct letters should populate here. These should match and restart the game
    if (letters.toString() === underSnCletters.toString()) {
        wins++;
        alert("Winning");
        forWins();
        Start();

    }

    // needs to tell the user that they have lost the game
    else if (numTries === 0) {
        losses++;
        alert("Oh snap! Try again!");
      
        forLosses();
        Start();
    }
}




//Start();


//============================SET UP FUNCTION FOR THE KEYS TO REGISTER===============


document.onkeyup = function (event) {
    var keypress = String.fromCharCode(event.keyCode).toLowerCase();
    testKey(keypress);
    gameOver();
    console.log(keypress);

}


function forWins() { document.getElementById("num-wins").innerHTML = wins; }
function forLosses() { document.getElementById("num-losses").innerHTML = losses; }
function forTries() { document.getElementById("remaining-guess").innerHTML = numTries; }












