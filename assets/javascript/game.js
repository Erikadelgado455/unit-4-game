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
    });