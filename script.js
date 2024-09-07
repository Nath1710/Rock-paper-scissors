function pickItem(item) {
    switch (item) {
        case "rock":
            document.getElementById("userColorItem").style.backgroundColor = "rgba(214, 56, 69, 0.973)";
            document.getElementById("userItemImg").src = "images/icon-rock.svg";
            break;
        case "paper":
            document.getElementById("userColorItem").style.backgroundColor = "rgb(76, 125, 231)";
            document.getElementById("userItemImg").src = "images/icon-paper.svg";
            break;
        case "scissors":
            document.getElementById("userColorItem").style.backgroundColor = "rgb(228, 179, 19)";
            document.getElementById("userItemImg").src = "images/icon-scissors.svg";
            break;
    }

    // Wait 2 seconds before house pick
    setTimeout(housePick, 1000, item);
}

function housePick(userPick) {
    let picked = ["rock", "paper", "scissors"];

    let randomPosition = Math.floor(Math.random() * picked.length); // 0 | 1 | 2

    let housePick = picked[randomPosition]; // picked[0] = "rock" | picked[1] = "paper" | picked[2] = "scissors"

    switch (housePick) {
        case "rock":
            document.getElementById("housePickedColor").style.backgroundColor = "rgba(214, 56, 69, 0.973)";
            document.getElementById("housePickedimg").src = "images/icon-rock.svg";
            break;
        case "paper":
            document.getElementById("housePickedColor").style.backgroundColor = "rgb(76, 125, 231)";
            document.getElementById("housePickedimg").src = "images/icon-paper.svg";
            break;
        case "scissors":
            document.getElementById("housePickedColor").style.backgroundColor = "rgb(228, 179, 19)";
            document.getElementById("housePickedimg").src = "images/icon-scissors.svg";
            break;
    }

    document.getElementById("emptyPick").style.display = "none";
    document.getElementById("housePickedColor").style.display = "block";

    // Wait 1 seconds before determine Winner
    setTimeout(determineWinner(userPick, housePick), 1000);
}

function determineWinner(userPick, housePick) {
    var winner = ""

    if (userPick === housePick) {
        winner = "empate"
    }
    else if (userPick === "rock" && housePick === "scissors") {
        winner = "user"
    }
    else if (userPick === "rock" && housePick === "paper") {
        winner = "house"
    }
    else if (userPick === "paper" && housePick === "rock") {
        winner = "user"
    }
    else if (userPick === "paper" && housePick === "scissors") {
        winner = "house"
    }
    else if (userPick === "scissors" && housePick === "rock") {
        winner = "house"
    }
    else if (userPick === "scissors" && housePick === "paper") {
        winner = "user"
    }

    var winSound = new Audio('audios/WinSound.mp3');
    var loseSound = new Audio('audios/LoseSound.mp3');
    var tieSound = new Audio('audios/TieSound.mp3');

    if (winner === "user") {
        document.getElementById("textResult").textContent = "YOU WIN";
        winSound.play();
    }
    else if (winner === "house") {
        document.getElementById("textResult").textContent = "YOU LOSE";
        loseSound.play();
    }
    else {
        document.getElementById("textResult").textContent = "IT❜S A TIE";
        tieSound.play();
    }

    // Show the result div
    document.getElementById("result").style.visibility = "visible";
}

function hideButtons() {
    document.getElementById("play-buttons").style.visibility = "hidden";
    document.getElementById("picked-items").className = "d-flex mt-5";
}

function playAgainButton() {
    document.getElementById("picked-items").className = "d-none mt-5";
    document.getElementById("result").style.visibility = "hidden";
    document.getElementById("play-buttons").style.visibility = "visible";
    document.getElementById("emptyPick").style.display = "block";
    document.getElementById("housePickedColor").style.display = "none";
}