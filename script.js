function pickItem(item) {
    switch (item) {
        case "rock":
            document.getElementById("colorItem").style.backgroundColor = "rgba(214, 56, 69, 0.973)";
            document.getElementById("itemImg").src = "images/icon-rock.svg";
            break;
        case "paper":
            document.getElementById("colorItem").style.backgroundColor = "rgb(76, 125, 231)";
            document.getElementById("itemImg").src = "images/icon-paper.svg";
            break;
        case "scissors":
            document.getElementById("colorItem").style.backgroundColor = "rgb(228, 179, 19)";
            document.getElementById("itemImg").src = "images/icon-scissors.svg";
            break;
    }
}

function hideButtons() {
    document.getElementById("play-buttons").style.visibility = "hidden";
    document.getElementById("picked-items").style.display = "flex";
}