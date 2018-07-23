//Global variables
$(document).ready(function() {

    let vatsclick=new Audio('assets/images/FO1_LEVEL_UP.mp3');
    //Characters
    let characters = {
        'Vault Dweller': {
            name: 'Vault Dweller',
            health: 120,
            attack: 8,
            imageUrl: "assets/images/vaultdweller.jpg",
            enemyAttackBack: 15
        }, 
        'Super Mutant': {
            name: 'Super Mutant',
            health: 100,
            attack: 14,
            imageUrl: "assets/images/Super_mutant.png",
            enemyAttackBack: 5
        }, 
        'Ghoul': {
            name: 'Ghoul',
            health: 150,
            attack: 8,
            imageUrl: "assets/images/Ghoul.png",
            enemyAttackBack: 20
        }, 
        'Deathclaw': {
            name: 'Deathclaw',
            health: 180,
            attack: 7,
            imageUrl: "assets/images/Deathclaw.png",
            enemyAttackBack: 20
        }
    };
    
    var currSelectedCharacter;
    var currDefender;
    var players = [];
    var indexofChar;
    var attackResult;
    var turnCounter = 1;
    var killCount = 0;

    var renderOne = function(character, renderArea, makeChar) {
        
        var charDiv = $("<div class='character' data-name='" + character.name + "'>");
        var charName = $("<div class='character-name'>").text(character.name);
        var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl);
        var charHealth = $("<div class='character-health'>").text(character.health);
        charDiv.append(charName).append(charImage).append(charHealth);
        $(renderArea).append(charDiv);
        //Capitalizes the first letter in characters name
       
        if (makeChar == 'enemy') {
          $(charDiv).addClass('enemy');
        } else if (makeChar == 'defender') {
          currDefender = character;
          $(charDiv).addClass('target-enemy');
        }
      };
      
      //function to render game message to DOM
      var renderMessage = function(message) {
        var gameMessageSet = $("#gameMessage");
        var newMessage = $("<div>").text(message);
        gameMessageSet.append(newMessage);
      
        if (message == 'clearMessage') {
          gameMessageSet.text('');
        }
      };
      
      var renderCharacters = function(charObj, areaRender) {
        //all characters
        if (areaRender == '#characters-section') {
          $(areaRender).empty();
          for (var key in charObj) {
            if (charObj.hasOwnProperty(key)) {
              renderOne(charObj[key], areaRender, '');
            }
          }
        }
        //player character
        if (areaRender == '#selected-character') {
          $('#selected-character').prepend("Your Character");       
          renderOne(charObj, areaRender, '');
          $('#attack-button').css('visibility', 'visible');
        }
        //enemy
        if (areaRender == '#available-to-attack-section') {
            $('#available-to-attack-section').prepend("Choose Your Next Opponent");      
          for (var i = 0; i < charObj.length; i++) {
      
            renderOne(charObj[i], areaRender, 'enemy');
          }
          //enemy to defender area
          $(document).on('click', '.enemy', function() {
            //select an enemy to fight
            name = ($(this).data('name'));
            //if defender area is empty
            if ($('#defender').children().length === 0) {
              renderCharacters(name, '#defender');
              $(this).hide();
              renderMessage("clearMessage");
            }
          });
        }
        //defender
        if (areaRender == '#defender') {
          $(areaRender).empty();
          for (var i = 0; i < players.length; i++) {
            //add enemy to defender area
            if (players[i].name == charObj) {
              $('#defender').append("Your selected opponent")
              renderOne(players[i], areaRender, 'defender');
            }
          }
        }
     //defender when attacked
 if (areaRender == 'playerDamage') {
    $('#defender').empty();
    $('#defender').append("Your selected opponent")
    renderOne(charObj, '#defender', 'defender');
    vatsclick.play();
  }
  //player character when attacked
  if (areaRender == 'enemyDamage') {
    $('#selected-character').empty();
    renderOne(charObj, '#selected-character', '');
  }
  //defeated enemy
  if (areaRender == 'enemyDefeated') {
    $('#defender').empty();
    var gameStateMessage = "You have defeated " + charObj.name + ", you can choose to fight another enemy.";
    renderMessage(gameStateMessage);
  }
  };
  //all characters for user to choose their enemy
  renderCharacters(characters, '#characters-section');
  $(document).on('click', '.character', function() {
  name = $(this).data('name');
  //if no player  has been selected
  if (!currSelectedCharacter) {
    currSelectedCharacter = characters[name];
    for (var key in characters) {
      if (key != name) {
        players.push(characters[key]);
      }
    }
    $("#characters-section").hide();
    renderCharacters(currSelectedCharacter, '#selected-character');
    //all characters for user to choose fight against
    renderCharacters(players, '#available-to-attack-section');
  }
  });
  
  // ----------------------------------------------------------------
  // Create functions to enable actions between objects.
  $("#attack-button").on("click", function() {
  //if defernder area has enemy
  if ($('#defender').children().length !== 0) {
    //defender state change
    var attackMessage = "You attacked " + currDefender.name + " for " + (currSelectedCharacter.attack * turnCounter) + " damage.";
    renderMessage("clearMessage");
    //combat
    currDefender.health = currDefender.health - (currSelectedCharacter.attack * turnCounter);
  
    //win condition
    if (currDefender.health > 0) {
      //enemy not dead keep playing
      renderCharacters(currDefender, 'playerDamage');
      //player state change
      var counterAttackMessage = currDefender.name + " attacked you back for " + currDefender.enemyAttackBack + " damage.";
      renderMessage(attackMessage);
      renderMessage(counterAttackMessage);
  
      currSelectedCharacter.health = currSelectedCharacter.health - currDefender.enemyAttackBack;
      renderCharacters(currSelectedCharacter, 'enemyDamage');
      if (currSelectedCharacter.health <= 0) {
        renderMessage("clearMessage");
        restartGame("You have been defeated...GAME OVER!!!");
        force.play();
        $("#attack-button").unbind("click");
      }
    } else {
      renderCharacters(currDefender, 'enemyDefeated');
      killCount++;
      if (killCount >= 3) {
        renderMessage("clearMessage");
        restartGame("You Won! GAME OVER!");
        jediKnow.play();
        // The following line will play the imperial march:
        setTimeout(function() {
        }, 2000);
  
      }
    }
    turnCounter++;
  } else {
    renderMessage("clearMessage");
    renderMessage("No enemy here.");
  }
  });
  
  //Restarts the game - renders a reset button
  var restartGame = function(inputEndGame) {
  //When 'Restart' button is clicked, reload the page.
  var restart = $('<button class="btn">Restart</button>').click(function() {
    location.reload();
  });
  var gameState = $("<div>").text(inputEndGame);
  $("#gameMessage").append(gameState);
  $("#gameMessage").append(restart);
  };
  
  });