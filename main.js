function winner(number) {
  return winningButton = Math.floor(Math.random() * number);
}

function playerChoice(buttonId, winingButton) {
  if(buttonId == winingButton) {
    document.getElementById("WINNER/LOSER").innerHTML = "<div class='won'><p>You won!!</p></div>";
  } else {
    document.getElementById("WINNER/LOSER").innerHTML = "<div class='lose'><p>You lose!!</p></div>";
  }
}

function numberOfButtons() {
    let gameDifficulty = document.getElementById("NumberOfButtons").value;
    let identifier = 0;
    let winingButton = winner(gameDifficulty);
    while (gameDifficulty > 0) {
        document.getElementById("WINNER/LOSER").innerHTML +=
        `<button type="button" onclick="return playerChoice(${identifier}, ${winingButton});">Press me</button>`
        ++identifier;
        --gameDifficulty;
    }
}
