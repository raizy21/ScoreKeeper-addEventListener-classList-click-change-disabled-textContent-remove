const p1 = {
  //set player for game with attributes
  score: 0, //hold score for player 1
  button: document.querySelector("#p1Button"), //select button for player 1 to add +1
  display: document.querySelector("#p1Display"), //select span for player 1 for changing display
};
const p2 = {
  ////set opponent for game with attributes
  score: 0, //hold score for player 2
  button: document.querySelector("#p2Button"), //select button for player 2 to add +1
  display: document.querySelector("#p2Display"), //select span for player 2 for changing display
};

const resetButton = document.querySelector("#reset"); //select button with text reset
const winningScoreSelect = document.querySelector("#playto"); //select the select into html
let winningScore = 3; //setting default winning Score
let isGameOver = false; //set game over to false

//method to update score with 2 para
function updateScores(player, opponent) {
  if (!isGameOver) {
    //if is not true
    player.score += 1; //update score
    if (player.score === winningScore) {
      //check with wining Score for gameOver
      isGameOver = true; //game over
      player.display.classList.add("has-text-success"); //add class green color
      opponent.display.classList.add("has-text-danger"); //add class red color
      player.button.disabled = true; //set disabled to true
      opponent.button.disabled = true; //set disabled to true
    }
    player.display.textContent = player.score; //update score
  }
}

//if click update score method player opponent 2 para
p1.button.addEventListener("click", function () {
  updateScores(p1, p2);
});
//if click update score method player opponent 2 para
p2.button.addEventListener("click", function () {
  updateScores(p2, p1);
});

//method to change the selected score
winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value); //parse Input for integer
  reset(); //reset everything
});

//click event for reset button
resetButton.addEventListener("click", reset);

//reset method for game
function reset() {
  isGameOver = false; //set false
  for (let p of [p1, p2]) {
    //go through player and opponent and update
    p.score = 0; //set 0 for begin
    p.display.textContent = 0; //set score to 0 for begin
    p.display.classList.remove("has-text-success", "has-text-danger"); //remove color style for player and opponent
    p.button.disabled = false; //set buttons enabled
  }
}
