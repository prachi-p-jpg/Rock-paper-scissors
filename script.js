let ruleBtn = document.getElementById("rule_button");
let crossBtn = document.getElementById("cross");

/* RULE POPUP */
ruleBtn.addEventListener("click", function () {
    document.getElementById("rule").style.display = "block";
});

crossBtn.addEventListener("click", function () {
    document.getElementById("rule").style.display = "none";
});  


/* CHOICES */
let choices = ["rock", "paper", "scissors"];


/* USER CLICK EVENTS */
document.getElementById("rock").addEventListener("click", function () {
    playGame("rock");
});

document.getElementById("paper").addEventListener("click", function () {
    playGame("paper");
});

document.getElementById("scissors").addEventListener("click", function () {
    playGame("scissors");
});

document.getElementById("nextBtn").addEventListener("click", function(){
   showScreen("screen5");
});

let pcScore=0;
let userScore=0;
let totalGames=0;
let winCount=0;
let lossCount=0;
let tieCount=0;

/* MAIN GAME FUNCTION */
function playGame(userChoice) {

    let pcChoice = choices[Math.floor(Math.random() * 3)];

    /* UPDATE ICONS */
    showHand("userPick", userChoice);
    showHand("pcPick", pcChoice);
    showHand("lostPick",userChoice);
    showHand("pclostPick",pcChoice);
    showHand("tiePick",userChoice);
    showHand("pctiePick",pcChoice);

    /* WIN CONDITION */
    if (
        (userChoice == "rock" && pcChoice == "scissors") ||
        (userChoice == "paper" && pcChoice == "rock") ||
        (userChoice == "scissors" && pcChoice == "paper")
    ) {
        userScore++;
        winCount++;
        totalGames++;
        document.getElementById("userScore").innerText=userScore;
        document.getElementById("userPick").classList.add("win-ring");
        updateStats();
        showScreen("screen2");
    }

    /* TIE CONDITION */
    else if (userChoice == pcChoice) {
        tieCount++;
        totalGames++;
         updateStats();
        showScreen("screen4");
    }

    /* LOSE CONDITION */
    else {
        pcScore++;
        lossCount++;
        totalGames++;
        document.getElementById("pcScore").innerText=pcScore;
        document.getElementById("pclostPick").classList.add("win-ring");
         updateStats();
        showScreen("screen3");
    }
}

function updateStats(){
    document.getElementById("totalGames").innerText=totalGames;
      document.getElementById("winCount").innerText=winCount;
        document.getElementById("lossCount").innerText=lossCount;
          document.getElementById("tieCount").innerText=tieCount;
}

/* SCREEN CHANGE */
function showScreen(id) {

    document.querySelectorAll(".screen").forEach(function (screen) {
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}


/* REPLAY BUTTONS */
document.querySelectorAll(".replay").forEach(function (btn) {

    btn.addEventListener("click", function () {
        showScreen("screen1");
    });

});


/* SHOW HAND ICON */
function showHand(id, choice) {

    let icon = "";

    if (choice == "rock") {
        icon = '<i class="fa-solid fa-hand-back-fist"></i>';
    }

    else if (choice == "paper") {
        icon = '<i class="fa-solid fa-hand"></i>';
    }

    else {
        icon = '<i class="fa-solid fa-hand-peace"></i>';
    }

    document.getElementById(id).innerHTML = icon;
}

function removeRing(){
    document.querySelectorAll(".win-ring").forEach(item=>{
        item.classList.remove("win-ring");
    });  
}

