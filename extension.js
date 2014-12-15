(function () {
/*Hello everyone at RAoA reading this! I tried to make the code as easy to read as possible but if there is anything 
you are confused about feel free to contact me on skype (MineplexMitch) or on reddit (MitchMinx) Have a great day!

*/
    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

        /*
         Extend the bot here, either by calling another function or here directly. Make any command you desire, ex. !RAoA gives a link
         to the reddit or whatever you want
         Model code for a bot command:

         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }

         */
         //A test bacon command to show how it works
        bot.commands.baconCommand = {
            command: 'bacon',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Bacon!!!");
                }
            }
        };

        //Load the package of languags to see if any have changed
        bot.loadChat();

    }

    //Settings

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "RAoA Bot", //name of bot, when it says [name] has been enabled or ther things, does not change name to left of messages
        language: "english", //leave as is
        chatLink: "https://rawgit.com/NuclearWolfMC/basicBot/master/lang/en.json", //Link to the words and language
        maximumAfk: 120, //Maximum time user can be AFK in minutes
        afkRemoval: true, //if it will remve them from community
        maximumDc: 60, //Max time in mins that a user can dc and come back for their place in wait list
        bouncerPlus: true, //If you make the bot's account bouncer plus then this is true
        lockdownEnabled: false, //Guards list
        lockGuard: false, //Guards against lock list exceptions
        maximumLocktime: 10, // when lock list is executed max time the list will be locked
        cycleGuard: true,//guarfds against cycles
        maximumCycletime: 10,//look at maxlocktime
        timeGuard: true,//how long a song can be
        maximumSongLength: 7,//as per rules 7 minutes
        autodisable: true,//disable cycle/lock list
        commandCooldown: 1,//cooldown between commands
        usercommandsEnabled: true,//user commands enabled
        lockskipPosition: 3, //skip when locked if:
        lockskipReasons: [
            ["theme", "This song does not fit the room theme. "],
            ["op", "This song is on the OP list. "],
            ["history", "This song is in the history. "],
            ["mix", "You played a mix, which is against the rules. "],
            ["sound", "The song you played had bad sound quality or no sound. "],
            ["nsfw", "The song you contained was NSFW (image or sound). "],
            ["unavailable", "The song you played was not available for some users. "]
        ],//reasons for skipping
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: true,//message of the day, sent to lobby
        motdInterval: 5, // time in minutes that 
        motd: "Welcome to the RAoA Plug.dj! Checkout the subreddit at https://www.reddit.com/r/Random_Acts_Of_Amazon", // message text that is displaued
        filterChat: true,//filter for curse or other predefined things
        etaRestriction: false,//when someone does !eta in the waitlist
        welcome: true,//welcomes [name] to community
        opLink: null,//links for various things put in quotes op=overplayed
        rulesLink: "https://docs.google.com/document/d/1l9bZKR0-w4iTHwKpXktT7T8Y7YnTfUGXlaUa6GMFQsk/edit",//when !rules
        themeLink: null,
        fbLink: null,
        youtubeLink: null,
        website: "bit.ly/RAoAReddit",
        intervalMessages: ["Remeber to check out the rules at bit.ly/RAoAPlugRules",
        "You can find cool emojis to use in this chat at http://www.emoji-cheat-sheet.com/ !"
            ],//cool tips displayed every minute(s) defined in messageInterval below
        messageInterval: 3,
        songstats: true, //stats ov woots/mehs/grabs.
        commandLiteral: "!",//thing that goes infront of the command
        blacklists: {
            NSFW: "https://rawgit.com/NuclearWolfMC/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/NuclearWolfMC/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }//lists for the various lists
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript('https://rawgit.com/NuclearWolfMC/basicBot/master/basicBot.js', extend);

}).call(this);
