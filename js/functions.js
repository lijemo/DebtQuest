$(document).ready(function () {

///DECLARE VARIABLES/////////////////////////////////////////////////////////  

//elements
const bgMusicElement = document.getElementById("music");

const doorStaticElement = document.getElementById("doorStatic");

const doorElement = document.getElementById("door");

const listElement = document.getElementById("list");

const worldElement = document.getElementById("world");

const worldImageElement = document.getElementById("worldLink");

const worldButtonElement = document.getElementById("world-button");

const diceElement = document.getElementById("dice");

const secondDiceElement = document.getElementById("secondDice");

const secondListElement = document.getElementById("secondList");

const promptImageWeaponElement = document.getElementById("promptWeapon");
const promptImageNPCElement = document.getElementById("promptNPC");
const promptImageMonsterElement = document.getElementById("promptMonster");

const secondButtonElement = document.getElementById("secondButton");

const exploreElement = document.getElementById("explore");

const thirdButtonElement = document.getElementById("thirdButton");

const linksContainerElement = document.getElementById("links");
const printScreenElement = document.getElementById("printScreen");

const muteButtonElement = document.getElementById("muteButton");
const unmuteButtonElement = document.getElementById("unmuteButton");

//arrays
const PROMPTWORLD = [
    ["THE MURDER FOREST", "MurderForest.png","https://drive.google.com/file/d/1seU59c4LVE63QGjPXucQVXKxokoLDYav/view?usp=sharing"],
    ["THE EERIE ISLES", "EerieIsles.png", "https://drive.google.com/file/d/17izmRIJGWu8An4a_yQUWr6T-mSH8JhQV/view?usp=sharing"],
    ["THE TOWER OF PAIN", "TowerOfPain.png", "https://drive.google.com/file/d/1oZhv5TTusRlC8-nVsExn_x0yFRf36RHZ/view?usp=sharing"]
];
 
const PROMPTMONSTER = [
    ["AD SPACE", "DQ_Monster_AdSpace.png" ],
    ["ART", "DQ_Monster_Art.png" ],
    ["BAD DOG OWNER", "DQ_Monster_BadDogOwner.png" ],
    ["BANKER", "DQ_Monster_Banker.png" ],
    ["BEEPY","DQ_Monster_BEEPY.png" ],
    ["BLOB ARMY","DQ_Monster_BlobArmy.png" ],
    ["BLURMN","DQ_Monster_Blurmn.png" ],
    ["BOTTLE","DQ_Monster_Bottle.png" ],
    ["BUST","DQ_Monster_Bust.png" ],
    ["CANNIBAL SLIME", "DQ_Monster_CannibalSlime.png" ],
    ["CLAM TONGUE","DQ_Monster_ClamTongue.png" ],
    ["CRAB CRAB", "DQ_Monster_CrabCrab.png"],
    ["CUTE SQUID", "DQ_Monster_CuteSquid.png" ],
    ["DARK WITCH", "DQ_Monster_DarkWitch.png" ],
    ["DUCK", "DQ_Monster_Duck.png" ],
    ["DUSTER", "DQ_Monster_Duster.png" ],
    ["EELEE", "DQ_Monster_Eelee.png" ],
    ["FUN CENTIPEDE", "DQ_Monster_FunCentipede.png" ],
    ["GARGOYLE", "DQ_Monster_Gargoyle.png" ],
    ["GLOB", "DQ_Monster_Glob.png" ],
    ["GNOME CHOMSKY", "DQ_Monster_GnomeChomsky.png" ],
    ["GREENOWL", "DQ_Monster_GreenOwl.png" ],
    ["HOODIE WIZARD", "DQ_Monster_HoodieWizard.png" ],
    ["HORSE FLY", "DQ_Monster_HorseFly.png" ],
    ["INVERTED SNAKE", "DQ_Monster_InvertedSnake.png" ],
    ["KILLER BIRD", "DQ_Monster_KillerBird.png" ],
    ["KNIFE FISH", "DQ_Monster_KnifeFish.png" ],
    ["KNIGHT", "DQ_Monster_Knight.png" ],
    ["LOVEBUG", "DQ_Monster_LOVEBUG.png" ],
    ["MEAN LEAF", "DQ_Monster_MeanLeaf.png" ],
    ["MERMAID", "DQ_Monster_Mermaid.png" ],
    ["MID-LEVEL BUREAUCRAT", "DQ_Monster_MidLevel.png" ],
    ["MONSTER JOHN", "DQ_Monster_MonsterJohn.png"], 
    ["MOUSE", "DQ_Monster_MOUSE.png" ],
    ["MURDER MOUTH", "DQ_Monster_MurderMouth.png" ],
    ["PEE SHOOTER", "DQ_Monster_PeeShooter.png" ],
    ["POISON WERE-RAT", "DQ_Monster_PoisonWereRat.png" ],
    ["POKEY BIRD", "DQ_Monster_PokeyBird.png" ],
    ["PURPLE ANT", "DQ_Monster_PurpleAnt.png" ],
    ["RICH SPIDER", "DQ_Monster_RichSpider.png" ],
    ["SAD CANDLE", "DQ_Monster_SadCandle.png" ],
    ["SCRAPPY", "DQ_Monster_Scrappy.png" ],
    ["SEED WIZARD", "DQ_Monster_SeedWizard.png"], 
    ["SEXY BOOK", "DQ_Monster_SexyBook.png" ],
    ["SHAPES", "DQ_Monster_Shapes.png" ],
    ["SKINNY JEAN STEVE", "DQ_Monster_SkinnyJeanSteve.png" ],
    ["SNAP SHOT", "DQ_Monster_SnapShot.png" ],
    ["BAD SPAGHETTI", "DQ_Monster_Spaghetti.png" ],
    ["SPLIFFY", "DQ_Monster_Spliffy.png" ],
    ["SUN AND MOON", "DQ_Monster_SunAndMoon.png"], 
    ["THING", "DQ_Monster_Thing.png" ],
    ["TRIPLE ZOMBIES", "DQ_Monster_TripleZombies.png" ],
    ["WEIRDO", "DQ_Monster_Weirdo.png" ],
    ["3 RACCOONS", "DQ_NPC_3Raccoons.png" ],
    ["BABY ON LEASH", "DQ_NPC_BabyOnLeash.png"],
    ["BORVIS", "DQ_NPC_Borvis.png" ]
];
const PROMPTNPC = [       
    ["BOY ON A ROCK", "DQ_NPC_BoyOnARock.png" ],
    ["CAR WITH EYELASHES", "DQ_NPC_CarWithEyelashes.png" ],
    ["CRULMN", "DQ_NPC_Crulmn.png" ],
    ["CRUSTY WHITE DOG", "DQ_NPC_CrustyWhiteDog.png" ],
    ["DOG WITH A VIDEO CAMERA", "DQ_NPC_DogWithAVideoCamera.png" ],
    ["ELEPHANT RIDER", "DQ_NPC_ElephantRider.png",],
    ["GABBA JACK", "DQ_NPC_GabbaJack.png" ],
    ["GOKU", "DQ_NPC_Goku.png" ],
    ["GUIDANCE COUNSELOR", "DQ_NPC_GuidanceCounselor.png" ],
    ["LAN", "DQ_NPC_LAN.png" ],
    ["LIL DEVIL", "DQ_NPC_LilDevil.png" ],
    ["LONG-LEGGED DOG", "DQ_NPC_Long-Legged-Dog.png" ],
    ["LONG BUBBLE GUY", "DQ_NPC_LongBubbleGuy.png" ],
    ["MAGIC FROG", "DQ_NPC_MagicFrog.png" ],
    ["MOLD MAN", "DQ_NPC_Mold_Man.png" ],
    ["NIGHT KNIGHT", "DQ_NPC_NightKnight.png" ],
    ["PICO", "DQ_NPC_Pico.png" ],
    ["PRINCESS PUMPKIN", "DQ_NPC_PrincessPumpkin.png" ],
    ["SIR RICHARDSON", "DQ_NPC_SirRichardson.png"],
    ["SLEEPY PHIL", "DQ_NPC_SleepyPhil.png" ],
    ["TALL WIZARD", "DQ_NPC_TallWizard.png" ],
    ["THE GUY", "DQ_NPC_TheGuy.png" ],
    ["TURNIP BULLY", "DQ_NPC_TurnipBully.png" ],
    ["URSULA", "DQ_NPC_Ursula.png" ],
];
const PROMPTWEAPON = [     
   
    ["BIG BIRD FOOT", "DQ_Weapon_BigBirdFoot.png" ],
    ["BONECRUSHER", "DQ_Weapon_Bonecrusher.png" ],
    ["BOW N ARROW", "DQ_Weapon_BownArrow.png" ],
    ["BRASS KNUCK", "DQ_Weapon_BrassKnuck.png" ],
    ["CRAB CLAW GLOVE", "DQ_Weapon_CrabClawGlove.png" ],
    ["CROSSBOW", "DQ_Weapon_Crossbow.png" ],
    ["DEADSTOCK", "DQ_Weapon_Deadstock.png" ],
    ["DRONE WITH SWORD", "DQ_Weapon_DronewithSword.png" ],
    ["FAMILY VACATION PORTRAIT", "DQ_Weapon_FamilyVacationPortrait.png" ],
    ["GABBA JACK'S INFLATABLE HAMMER", "DQ_Weapon_GabbaJacksInflatableHammer.png" ],
    ["GREAT AXE", "DQ_Weapon_GreatAxe.png" ],
    ["HEFTY HOE", "DQ_Weapon_HeftyHoe.png" ],
    ["KNIFE", "DQ_Weapon_Knife.png" ],
    ["MACE", "DQ_Weapon_Mace.png" ],
    ["MAGIC WAND", "DQ_Weapon_MagicWand.png" ],
    ["MOON SHOES", "DQ_Weapon_MoonShoes.png" ],
    ["NUNCHUKU", "DQ_Weapon_Nunchuku.png" ],
    ["PIGGY", "DQ_Weapon_Piggy.png" ],
    ["POISON", "DQ_Weapon_Poison.png" ],
    ["RIZZ STICKS", "DQ_Weapon_RizzSticks.png" ],
    ["ROBBIE THE ROBOT", "DQ_Weapon_RobbieTheRobot.png" ],
    ["SCYTHES", "DQ_Weapon_Scythes.png" ],
    ["SHURIKEN", "DQ_Weapon_Shuriken.png" ],
    ["SPEAR", "DQ_Weapon_Spear.png" ],
    ["SUN HARP", "DQ_Weapon_SunHarp.png" ],
    ["SWORD", "DQ_Weapon_Sword.png" ],
    ["TICKLE-ME MORNING STAR", "DQ_Weapon_TickleMeMorningStar.png" ],
    ["WHITE MONSTER","DQ_Weapon_WhiteMonster.png"]
    ];


const ACTIONS = [
    "BATTLE",
    "SIDE QUEST",
    "ACQUIRE LOOT",
    "DEATH",
    "REST",
    "EXPLORATION",
    "NPC ENCOUNTER",
    "LEVEL UP",
    "ROMANCE"
];



music.pause();

//DECLARE FUNCTIONS//////////////////////////////////////////////////////////////////
$(document).on("visibilitychange", function() {
    if (document["hidden"]) {
        music.pause();
    } else {
        music.play();}
});

$( "#muteButton, #unmuteButton" ).on( "click", function() {
    if (bgMusicElement.muted == true){
        bgMusicElement.muted = false;
        muteButtonElement.style.display = "block";
        unmuteButtonElement.style.display = "none";
    } else {
        bgMusicElement.muted = true;
        muteButtonElement.style.display = "none";
        unmuteButtonElement.style.display = "block";
    }
});

$( "#doorStatic" ).on( "click", function() {

    doorStaticElement.remove();

    door.style.display = "block";

    list.style.display = "block";

    worldButtonElement.style.display = "block";
    
    setTimeout(() => {
        doorElement.remove();
        list.style.display = "block";
    }, 5200);

    music.play();
});

$( "#world-button" ).on( "click", function() {
    // Select a token at random
    var randomWorld = PROMPTWORLD[Math.floor(Math.random() * PROMPTWORLD.length)];
    
    dice.style.display = "block";

    worldButtonElement.style.display = "none";

    // Play dice audio
    var DICE_ROLL = new Audio();
    DICE_ROLL.src = "img/DiceRoll.mp3";
    setTimeout(() => {
        DICE_ROLL.play();
    }, 100);

    listElement.innerHTML = "•  •  •";

    //Wait 2 seconds before updating list and display loading text
    setTimeout(() => {
        // Set its text to be the random value we selected
        listElement.innerHTML = "THE FORBODING DICE DANCES ON A HARD WOODEN TABLE, <br/><br/>YOU TRAVEL TO "+randomWorld[0];
        worldElement.src = "img/world/"+randomWorld[1];
        worldElement.style.display = "block";
        worldImageElement.href = randomWorld[2];
        diceElement.style.display = "none";
    }, 1500);

    setTimeout(() => {
        secondListElement.style.display = "block";
        secondButtonElement.style.display = "block";
        // linksContainerElement.style.display = "none";
    }, 2000);

});


$( "#secondButton, #thirdButton" ).on( "click", function() {
    // Select a token at random
    var randomNPC = PROMPTNPC[Math.floor(Math.random() * PROMPTNPC.length)];
    var randomMonster = PROMPTMONSTER[Math.floor(Math.random() * PROMPTMONSTER.length)]  ;
    var randomWeapon = PROMPTWEAPON[Math.floor(Math.random() * PROMPTWEAPON.length)];
    var randomAction = ACTIONS[Math.floor(Math.random() * ACTIONS.length)];

    promptImageWeaponElement.src = "img/weapon/"+randomWeapon[1];
    promptImageNPCElement.src ="img/npc/"+randomNPC[1];
    promptImageMonsterElement.src = "img/monster/"+randomMonster[1];

    // Play dice audio
    var DICE_ROLL = new Audio();
    DICE_ROLL.src = "img/DiceRoll.mp3";
    setTimeout(() => {
        DICE_ROLL.play();
    }, 100);


    promptImageWeaponElement.style.display = "none";
    promptImageNPCElement.style.display = "none";
    promptImageMonsterElement.style.display = "none";
    exploreElement.style.display = "none";

    secondListElement.innerHTML = "•  •  •";

    secondButtonElement.style.display = "none";

    secondDiceElement.style.display = "block";

    thirdButtonElement.style.display = "none";

    setTimeout(() => {
        secondDiceElement.style.display = "none";
        linksContainerElement.style.display = "block";
        printScreenElement.style.display = "block";

        promptImageWeaponElement.style.display = "block";
        promptImageNPCElement.style.display = "block";
        promptImageMonsterElement.style.display = "block";

        secondListElement.innerHTML = "YOU CAST THE DIE ONCE AGAIN, WITH DIVINE WILL YOUR FORTUNE IS REVEALED... <br/><br/>ACTION:&nbsp;"+randomAction+"<br/>WEAPON:&nbsp;"+randomWeapon[0]+"<br/>NPC:&nbsp;"+randomNPC[0]+"<br/> MOSNTER:&nbsp;"+randomMonster[0];
        
        thirdButtonElement.style.display = "block";
        exploreElement.style.display = "block";

    }, 1500);
});



});