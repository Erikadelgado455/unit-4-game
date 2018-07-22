//Global variables
$(document).ready(function() {

    
    //Characters
    let characters = {
        'Vault Dweller': {
            name: 'Vault Dweller',
            health: 120,
            attack: 8,
            imageUrl: "..images/vaultdweller.jpg",
            enemyAttackBack: 15
        }, 
        'Super Mutant': {
            name: 'Super Mutsnt',
            health: 100,
            attack: 14,
            imageUrl: "..images/Super_mutant.png",
            enemyAttackBack: 5
        }, 
        'Ghoul': {
            name: 'Ghoul',
            health: 150,
            attack: 8,
            imageUrl: "../images/Ghoul.png",
            enemyAttackBack: 20
        }, 
        'Deathclaw': {
            name: 'Deathclaw',
            health: 180,
            attack: 7,
            imageUrl: "../images/Deathclaw.png",
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
});