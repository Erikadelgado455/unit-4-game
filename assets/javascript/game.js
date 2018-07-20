var rooms = {
    "start": {
        "description": "War. War never changes. The Romans waged war to gather slaves and wealth. Spain built an empire from its lust for gold and territory. Hitler shaped a battered Germany into an economic superpower. But war never changes. In the 21st century, war was still waged over the resources that could be acquired. Only this time, the spoils of war were also its weapons: Petroleum and Uranium. For these resources, China would invade Alaska, the US would annex Canada, and the European Commonwealth would dissolve into quarreling, bickering nation-states, bent on controlling the last remaining resources on Earth. In 2077, the storm of world war had come again. In two brief hours, most of the planet was reduced to cinders. And from the ashes of nuclear devastation, a new civilization would struggle to arise. A few were able to reach the relative safety of the large underground vaults. Your family was part of that group that entered Vault Thirteen. Imprisoned safely behind the large Vault door, under a mountain of stone, a generation has lived without knowledge of the outside world. Life in the Vault is about to change.... --[type go and space to continue..]--",
        "directions": {
          "": "Overseerintro",
        }
      },
    
    "Overseerintro": {
        "description": "--[The overseer calls to speak with you over the intercom he says to meet him at the entrance of the vault as you approach him you begin to see his demeanor change as he speaks to you in a calm but worrying voice.]-- Ahh, you're here. Good. We've got a problem. A big one. The Controller chip for our water purification system has given up the ghost. Can't make a new one and the process is too complicated for a work around system. Simply put, we're running out of drinking water. No water, no Vault. This is crucial to our survival. And frankly, I...I think you're the only hope we have. You need to go find us another controller chip. We estimate we have four to five months before the Vault runs out of water. We need that chip. I've marked your map with the location of another Vault Not a bad place to start I think. Look, just be safe, OK? --[As the overseer leaves the fate of the vault in your hands, you start to question whether you are the right person for the job. You step out of the vault and hear the loud metal doors close behind you. Its too late to turn back now.... you see the skelton of a human. what will you do?]--[loot, exit, look around,?] {type go and then your choice.}--",
        "directions": {
            "loot": "skeleton",
            "exit":"caveexit",
            "look around":"ratscave",
           
        }
    },
    "skeleton": {
        "description":"[you see a skeleton by the name of Ed, looks like he was left out of the vault luckily for you he has somethings that are usefulf for you but he no longer needs.] He had 24 10mm AP and 1 knife.what will you do?---{exit, look around,?",
        
        "directions": {
            "exit": "thewasteland1"
        }
    },
    
  }

        
        
    
    
