var rooms = {
   
    "start": {
        "description": "--[The overseer calls to speak with you over the intercom he says to meet him at the entrance of the vault as you approach him you begin to see his demeanor change as he speaks to you in a calm but worrying voice.]-- [Overseer] Ahh, you're here. Good. We've got a problem. A big one. The Controller chip for our water purification system has given up the ghost. Can't make a new one and the process is too complicated for a work around system. Simply put, we're running out of drinking water. No water, no Vault. This is crucial to our survival. And frankly, I...I think you're the only hope we have. You need to go find us another controller chip. We estimate we have four to five months before the Vault runs out of water. We need that chip. I've marked your map with the location of another Vault Not a bad place to start I think. Look, just be safe, OK? --[As the overseer leaves the fate of the vault in your hands, you start to question whether you are the right person for the job. You step out of the vault and hear the loud metal doors close behind you. Its too late to turn back now.... you see the skelton of a human. what will you do?]--[loot, exit, lookaround,?] {type go and then your choice to continue...}--",
        "directions": {
            "loot": "skeleton",
            "exit":"thewasteland1",
            "lookaround":"caverats",
           
        }
    },
    "skeleton": {
        "description":"[you see a skeleton by the name of Ed, looks like he was left out of the vault for dead ,luckily for you he has somethings that are useful... well for you that is, but he no longer needs them.] you got 24 10mm AP and 1 knife. what will you do?---[exit, lookaround?] {type go and then your choice to continue...}",
        
        "directions": {
            "exit": "thewasteland1",
            "lookaround":"caverats",
        }
    },
    "thewasteland1": {
        "description": "[for the first time in your life you see natural sunlight, but you also see the nuclear devestation of the land first hand, you are worried, unsure and scared but,know this is going to be a long journey but you have to do it for the sake of everyone in the vault. will you explore the wastes or head to vault 15]---[vault15, explore]--{type go and then your choice to continue...} ",
        "directions": {
            "vault15": "vault15shack",
            "explore": "shadysandsentrance",
        }
    },
    "caverats": {
        "description": "[there are 20 large rats in this cave! now you understand your vaults rat problem. what will you do? fight, sneak around them?] ---[fight,sneak]---{type go and then your choice to continue...}",
        "directions": {
            "sneak": "thewasteland1",
            "fight": "cavefightweaponselect",
        }
    },
    "cavefightweaponselect": {
        "description": "[Will you use your knife? or 10mm pistol?]----[knife, pistol]----{type go and then your choice to continue...}",
        "directions": {
            "knife": "caveknife",
            "pistol":"cavepistol",
        }
    },
    "caveknife":{
        "description":"[You conserved ammo by using your knife, but you took some damage, rats are fast! what will you do?]---[exit]---{type go and then your choice to continue...} ",
        "directions":{
            "exit":"thewasteland1",
        }
    },

    "cavepistol":{
        "description":"[You've wasted valuable ammo from using your pistol, but you killed those rats in an instant, rats are fast but with a pistol you are faster! Now what will you do?]---[exit]---{type go and then your choice to continue...} ",
        "directions":{
            "exit":"thewasteland1"
        }
    },
    "shadysandsentrance":{
        "description":"[You arrive in the south and see an adobe wall surrouding a peaceful-looking village, you notice a man and  a woman standing at the front gate. The man approaches you.]--{type go and space to continue...} ",
        "directions":{
            "":"sethintro"
        }
    },
    "sethintro":{
        "description":"[Seth] Good Day. I am called Seth How can i help you?--(I'd like some information)--[info]---{type go then your choice to continue...} ",
        "directions":{
            "info":"sethinfo"
        }
    },
    "sethinfo":{
        "description":"Information? What do you want to know about?",
        "directions":{
            "":""
        }
    }
}

        
        
    
    
