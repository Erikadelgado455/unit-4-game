$(document).ready(function () {
  var jewelsList = [{id:"green", jewelValue: ""}, {id: "gray", jewelValue: ""}, {id: "red", jewelValue: ""}, {id: "yellow", jewelValue: ""}
  ]
  var targetScore;
  var totalScore = 0;
  var wins = 0;
  var losses = 0;
  newGame ();
  $("#wins-text").text(wins);
  $("#losses-text").text(losses);
  function getJewelValue() {
      return Math.floor(Math.random() * 12) + 1;
  };
  function newGame() {
  targetScore = Math.floor(Math.random() * 120) + 19;
  targetScore = parseInt(targetScore);
  $("#randomBox").text(targetScore);
   for (var i = 0; i < jewelsList.length; i++) {
      jewelsList[i].jewelValue = getJewelValue();
  console.log (jewelsList);
  totalScore = 0;
  $("#total-score").text(totalScore);
}};
  $(".crystal-choice").on("click", function() {
      var userPick = this.id;
      console.log("User pick: " + userPick);
      for (var i = 0; i < jewelsList.length; i++) {
      if (jewelsList[i].id === userPick) {
          var userPickValue = jewelsList[i].jewelValue;
      }};

  totalScore = totalScore + userPickValue;
  totalScore = parseInt(totalScore);
  console.log("Total score: " + totalScore);
  $("#total-score").text(totalScore);
     if (totalScore > targetScore) {
      losses += 1;
      alert("Your score went above the random number. Please try again.");
      $("#losses-text").text(losses);
      newGame();
  };
  if (totalScore == targetScore) {
      wins += 1;
      alert("You win! Click ok to play again.");
      $("#wins-text").text(wins);
      newGame();
  };
  });
});