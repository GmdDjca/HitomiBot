/*

azureuser@40.121.8.231

cd /home/azureuser/HitomiBot
pm2 restart app.js

pm2 start app.js

cd C:\Users\CLARMANSA\Desktop\HitomiBot
node app

*/


// Load up the discord.js library
const Discord = require("discord.js");

const client = new Discord.Client();
const config = require("./config.json");

const token  = require('./config.json');
const prefix  = require('./config.json');
const ownerID  = require('./config.json');


client.on("ready", () => {
    console.log(`
Ohayo!!`);

    client.user.setActivity(`Splatoon 2 | hi!help | In ${client.guilds.size} servers with ${client.users.size} amazing people.`);
});




client.on("guildCreate", guild => {
    const hibye = client.channels.get('443441620659077130') //the hitomi-hibye channel
    const sowner = client.users.get(guild.ownerID)

guild.owner.send("Hello, my nam HitomiBot, I'm a kinda simple (and hosted in a laptop) bot that just tries to do its best. You can use some commands like **hi!hitomi**, which will send a SFW picture of me (They're __supposed__ to not be nsfw), and I have a feedback command which lets you send any suggestion or bug you think it should get fixed. I hope y'all enjoy me. Bye!")

    hibye.send(`<:happ:468794941162651658> Hey, new server
\`\`\`- NAME: ${guild.name}
- ID: ${guild.id}
- OWNED BY: ${sowner.username}#${sowner.discriminator} (${guild.ownerID})
- MEMBERS: ${guild.memberCount}\`\`\`
__I'm now at a total of **${client.guilds.size}** servers with ${client.users.size} guys__`);

client.user.setActivity(`Animal Crossing: New Leaf | hi!help | In ${client.guilds.size} servers with **${client.users.size}** amazing people.`);
});




client.on("guildDelete", guild => {
    const hibye = client.channels.get('443441620659077130') //the hitomi-hibye channel
    const sowner = client.users.get(guild.ownerID)

    hibye.send(`<:angr:468795068698984458> I left a server, smh
\`\`\`- NAME: ${guild.name}
- ID: ${guild.id}
- OWNED BY: ${sowner.username}#${sowner.discriminator} (${guild.ownerID})
- MEMBERS: ${guild.memberCount}\`\`\`
__I'm now at a total of **${client.guilds.size}** servers with ${client.users.size} guys__`);

client.user.setActivity(`Mario Kart Wii | hi!help | In ${client.guilds.size} servers with ${client.users.size} amazing people.`);
});


client.on("message", message => {

    //blacklisted users
    if (message.author.id !==
//      "295636878630191116",   //emptixo#7785 
        "301108371057016832",   //Afkinz#8998
        "381278153957441536",   //God Horseman#1818 (he usually changes his name, they usually have horseman or dark on it)
        "289151878560743427",   //Hal9000#3201
        "181328958992678912"    //Unski#1000 
    ) {

    //blacklisted guilds
    if (message.guild.id !==
        "178313653177548800"    //NotSoServer
    ){



    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;


    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();


    function clean(text) {
        if (typeof (text) === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
    }
    
    //owner commands

    if (command === "sendfiles") {
        if (message.author.id !== config.ownerID) {
            message.channel.send("No you ain't Mama");
        }
        else {
            try {

                message.author.send('Here you go, Mama! :heart:', { files: ["./app.js", "./config.json",  "./random/hitomi.json",  "./random/8ball.json", "./random/ping.json",  "./random/genders.json",  "./random/sexualities.json"] });

            } catch (err) {
                message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
            }
         message.channel.send('Sending ya files, Mama!')
        }
    }

    
    if (command === "eval") {

        if (message.author.id !== config.ownerID) {
            message.channel.send("No you ain't Mama");
        }
        else {
            try {
                const code = args.join(" ");
                let evaled = eval(code);

                if (typeof evaled !== "string")
                    evaled = require("util").inspect(evaled);

                message.channel.send(clean(evaled), { code: "xl" });
            } catch (err) {
                message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
            }
        }
    }


    if (command === 'setname') {
        if (message.author.id !== config.ownerID) {
            message.channel.send("No you ain't Mama");
        }
        else {
            try {
                 client.user.setUsername(args.join(' '));
            } catch (error) {
                return message.channel.send(`<:fixbug:473450840762613770> \`\`\`${error.stack}\`\`\``);
            }

            return message.channel.send('Yay');
        }
    }


    if (command === 'announce') {
        if (message.author.id !== config.ownerID) {
            message.channel.send("No you ain't Mama");
        }
        else {
            try {
                const announcements = client.channels.get('434491176393900052')

                announcements.send(`${args.join(' ')}`)
                message.channel.send('Sent my announcement, Mama!');
            } catch (error) {
                return message.channel.send(`<:fixbug:473450840762613770> \`\`\`${error.stack}\`\`\``);
            }
        }
    }

    if (command === 'pingannounce') {
        if (message.author.id !== config.ownerID) {
            message.channel.send("No you ain't Mama");
        }
        else {
            try {
                const announcements = client.channels.get('434491176393900052')

                announcements.send(`@everyone ${args.join(' ')}`)
                message.channel.send('Sent my announcement, Mama!');
            } catch (error) {
                return message.channel.send(`<:fixbug:473450840762613770> \`\`\`${error.stack}\`\`\``);
            }
        }
    }

    
    if (command === 'setavatar') {
        if (message.author.id !== config.ownerID) {
            message.channel.send("No you ain't Mama");
        }
        else {
            try {
                 client.user.setAvatar(args.join(' '));
            } catch (error) {
                return message.channel.send(`<:fixbug:473450840762613770> \`\`\`${error.stack}\`\`\``);
            }

            return message.channel.send('<:oneEye:470710365450141706> thanks for the avatar Mama');
        }
    }


    if (command === 'status')
        if (message.author.id !== config.ownerID) {
            message.channel.send("No you ain't Mama");
        }
        else {
            {
                try {
                     client.user.setActivity(`${args.join(' ')} | hi!help | In ${client.guilds.size} servers with ${client.users.size} amazing people.`);
                } catch (error) {
                    return message.channel.send(`<:fixbug:473450840762613770> \`\`\`${error.stack}\`\`\``);
                }
                return message.channel.send('Ok, Mama! Changing my status!');
            }
        }


    if (command === "despacito") {
        if (message.author.id !== config.ownerID) {
            message.channel.send("No you ain't Mama");
        }
        else {
            message.channel.send('`*gunshots mix with drums*`')
            console.log(`
He sido apagada -<`)
            client.destroy();
        }
    }


    if (command === "restart") {
        if (message.author.id !== config.ownerID) {
            message.channel.send("No you ain't Mama");
        }
        else {
            message.channel.send('R e s t a r t i n g  l m a o').then
            console.log(`
Reiniciando`)

            cleint.destroy()

            return client.login(token);
        }
    }

    if (command === 'yamify') {
        if (message.author.id !== config.ownerID) {
            message.channel.send("No you ain't Mama");
        }
        else {
            try {
                client.user.setUsername("YamBot");
                client.user.setAvatar("https://cdn.discordapp.com/attachments/431910426796621825/458656472885362705/glitch.jpeg");
                client.user.setActivity(`Yam | yam!yam | yam yam ${client.guilds.size} yam yam ${client.users.size} yam yam.`),
                message.channel.send("Yam");
            } catch (error) {
                return message.channel.send(`<:fixbug:473450840762613770> \`\`\`${error.stack}\`\`\``);
                
            }
        }
    }

    if (command === 'unyamify') {
        if (message.author.id !== config.ownerID) {
            message.channel.send("No you ain't Mama");
        }
        else {
            try {
                client.user.setUsername("HitomiBot");
                client.user.setAvatar("https://media.discordapp.net/attachments/417779941204033536/467343195601371138/PicsArt_07-13-02.09.03.jpg?width=301&height=301");
                client.user.setActivity(`Yes hello it is me | hi!help | In ${client.guilds.size} servers with ${client.users.size} awesome people.`);
                message.channel.send("Back to normal");
            } catch (error) {
                return message.channel.send(`<:fixbug:473450840762613770> \`\`\`${error.stack}\`\`\``);
            }
        }
    }

    if (command === 'lasaga') {
       const john = client.users.get(args[0])
        if (message.author.id !== config.ownerID) {
            return message.channel.send("No")
        }
        else {
             

            if (john === undefined) {
                message.channel.send("Whomst this user");
        }
            else {
                try {
                john.send('John make me lasaga');
                message.channel.send('`Succ`essfully sent the message');
                } catch (error) {
                    return message.channel.send(`<:fixbug:473450840762613770> \`\`\`${error.stack}\`\`\``);
                }
            }
        }
    }


    if (command === 'leave') {
        

        if (message.author.id !== config.ownerID) {
            return message.channel.send("No you ain't mama")
        }
        else {
                try {
                let badserver = client.guilds.get(args[0])
                badserver.leave()
                message.channel.send('Oh, okay')
                } catch (error) {
                    return message.channel.sendMessage(`<:fixbug:473450840762613770> \`\`\`${error.stack}\`\`\``);
                }
            }
        }
    
    if (command === 'sinfo') {

        if (message.author.id !== config.ownerID) {
            return message.channel.send("No you ain't Mama")
        } else {

        const server = client.guilds.array()[args[0]]
        const sowner = client.users.get(client.guilds.array()[args[0]].ownerID)
        
            if (server === undefined) {
                message.channel.send("What server?");
        }
            else {
                try {
                    
message.channel.send(`**SERVER INFO:**
\`NAME:\` ${server.name}
\`ID:\` ${server.id}

\`OWNER\:\` ${sowner.username}#${sowner.discriminator}
\`OWNER ID:\` ${server.ownerID}

\`MEMBERS\:\` ${server.memberCount}`);
                } catch (error) {
                    return message.channel.send(`<:fixbug:473450840762613770> \`\`\`${error.stack}\`\`\``);
                }
            }
        }
    }


     //indexOf()   
    if (command === 'slist') {

        if (message.author.id !== config.ownerID) {
            return message.channel.send("No you ain't mama")
        }
            else {
                try {
                
                    message.channel.send(`\`\`\`- ${client.guilds.array().join(`
- `)}\`\`\``)
            
                } catch (error) {
                    return message.channel.sendMessage(`<:fixbug:473450840762613770> \`\`\`${error.stack}\`\`\``);
                }
            }
        }
    




    ////////////////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////////////////////////
  
    /*

    if (command === 'ping') {
        
        const m = message.channel.send('hmMmmMmMmmM');
        
        var pings = require( "./random/ping.json")
        var pinged = pings[Math.floor(Math.random() * pings.length)]

        return m.edit(`${pinged} \`(${msg.createdTimestamp - message.createdTimestamp}ms/${Math.round(client.ping)}ms)\``);
    }
*/
    if (command === 'support') {
        message.channel.send('Lemme slide into yo dms owo').then
        message.author.send('For any questions you can contact with Mama (aka Tina) in my support server: https://discord.gg/4E69aYC')
    }

    if (command === 'invite') {
        message.channel.send('Omfg thank you! Look up in the DMs :heart:')
        message.author.send(`Here you gooooo~:heart: (renember: you need either \`manage server\` or \`administrator\` permissions to invite bots to a server)
https://discordapp.com/oauth2/authorize?client_id=431495393520386068&scope=bot&permissions=8
        `);
    }

    
    if (command === 'about') {
        message.channel.send(`Henlo, fellow human, el nama Hitomibot, and I'm a cute bot coded in \`Javascript\` using \`discord.js\` by **[TG/LW] Tina the Cyclops#5861** (whom I always will refer as Mama), which will mainly focus on fun and original commands: Mama has already seen many generic discord.js bots (no offense, please). How were I born? Well, nobody cares, but basically I got inspired from a couple of friends and like 4 months later, I started coding my bot (I was called CyclopsBot then). After a month or something, I got a rewrite, because Mama made me some change that made me unable to reply to commands.  I probably won't have very complicated commands, because literally Mama learnt Java at school, and she only learnt js by doing discord.js on me (that's extremely pathetic... as well as adorable <3) Feel free to shitpost with me, and thanks for adding me to your server <:HitomiHeart:434733273483051008>
    
\`Thanks to nox#2530 and shirt.js#6109 (they made Nano#9814!) for helping me in my first steps, and to Xamtheking#2099/MaxGrosshandler#6592, for helping me with the hosting, to Tehi#8822, for helping in some stuff, and to Tuvok#6969 and Tomaticornio#1928 for the support. Without all you, I'd be a shitty bot\``)
    }

    if (command === 'stats') { 
        let totalSeconds = (client.uptime / 1000);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds.toFixed(2) % 60

        let uptime = `${hours}h ${minutes}min ${seconds}sec`;

        const hitomicount = require("./random/hitomi.json");
        const gendercount = require("./random/genders.json");
        const sexualitycount = require("./random/sexualities.json");



      message.channel.send(`<:Pipimi1:455369643058790400> Users: \`${client.users.size}\`
<:Pipimi2:455369641523544065> Servers: \`${client.guilds.size}\`
<:Pipimi2:455369641523544065> Uptime: \`${uptime}\`
<:Pipimi2:455369641523544065> Pictures in hi!hitomi: \`${hitomicount.length}\`
<:Pipimi2:455369641523544065> Genders in hi!gender: \`${gendercount.length}\`
<:Pipimi3:455369644036063242> Sexualities in hi!sexuality: \`${sexualitycount.length}\``)}



    //
    //
    //


    if (command === "avatar") {
		const meme1 = client.users.get(args[0])
		const meme2 = message.mentions.users.first();
		if (!args[0]) {
			message.channel.send(`${message.author.avatarURL}`)
		} else {
			if (meme1 === undefined) {

				if (meme2 === undefined) {
					message.channel.send('What')
				} else {
					message.channel.send(`**${meme2.username}#${meme2.discriminator}'s** avatar is:
${meme2.avatarURL}`)
				}
			} else {
				message.channel.send(`**${meme1.username}#${meme1.discriminator}'s** avatar is:
${meme1.avatarURL}`)
			}
		}
	}


        if (command === 'genoauth') {

            const botlink = message.mentions.users.first()

            if (!args[0]) {
                message.channel.send(`Please mention a bot`)
            }
            else {
                if (botlink === undefined) {
                    message.channel.send('<:What:421414066989301781>')
                }
                else {
                    if (!botlink.bot) {
                        message.channel.send("That's not a bot <:LMFAO:443921300201799681>")
                    }
                    else {
                        message.channel.send("Look in your DM's :heart:")
                        message.author.send(`Have fun with this bot!!
https://discordapp.com/oauth2/authorize?client_id=${botlink.id}&scope=bot&permissions=2146958591`)
                    }
                }
            }
        }
                
            

    if (command === 'feedback') {
        if (message.author.id ===
            "420318869501116416"
        ) {
            message.channel.send("You've been blocked from sending feedback, maybe for shitposting. Sorry.")
        }
        
        if (args ===undefined) {
            message.channel.send('I need something to `suggest`')
        }
        else {
            const suggest = client.channels.get('432226530198814741')

            suggest.send(`Hey new feedback <:HitomiYay:436241639783268362>
\`\`\`From: ${message.author.tag} (${message.author.id})
Guild: ${message.guild.name} (${message.guild.id})

Content: ${args.join(" ")}\`\`\` `).then

            message.channel.send('Sent the feedback to Mama! ❤❤❤');
        }
    }

    //random response commands

        if (command === 'emoji') {
            
            const getemoji = client.emojis.find("name", args[0]);

            if (getemoji === null) {
                message.channel.send('That is not an emote smh (you need to write the __name__ of the emote)');
            } else {

                if (!args[0]) {
                    message.channel.send("I need an emote, I'm not arkinator lul");
                } else{ 
                    message.channel.send(`Here's your emote: ${getemoji.url}`);
                }
            }
        }

    if (command === '8ball') {

        var responses = require( "./random/8ball.json")
        var result = responses[Math.floor(Math.random() * responses.length)]

        try {
            message.channel.send(result).then();
        } catch (error) {
            return message.channel.send(`<:fixbug:473450840762613770> \`\`\`${error.stack}\`\`\``);
        }
    }

    if (command === 'hitomi') {
        var pics = require( "./random/hitomi.json")
        var sendpic = pics[Math.floor(Math.random() * pics.length)]
        try {
            message.channel.send(sendpic).then();
        } catch (error) {
            return message.channel.send(`<:fixbug:473450840762613770> \`\`\`${error.stack}\`\`\``);
        }
    }

    if (command === 'gender') {
        var genders = require( "./random/genders.json")
        var sendgender = genders[Math.floor(Math.random() * genders.length)]
        try {
            message.channel.send(sendgender).then();
        } catch (error) {
            return message.channel.send(`<:fixbug:473450840762613770> \`\`\`${error.stack}\`\`\``);
        }
    }

    if (command === 'sexuality') {
        var sexualities = require( "./random/sexualities.json")
        var sendsex = sexualities[Math.floor(Math.random() * sexualities.length)]
        try {
            message.channel.send(sendsex).then();
        } catch (error) {
            return message.channel.send(`<:fixbug:473450840762613770> \`\`\`${error.stack}\`\`\``);
        }
    }

    if (command === 'coin') {
        var coin = ["COIN", "TAILS"]
        var coinresult = coin[Math.floor(Math.random() * coin.length)]
        try {
            message.channel.send(`Congtatulation, you got... Oh, **${coinresult}**`).then();
        } catch (error) {
            return message.channel.send(`<:fixbug:473450840762613770> \`\`\`${error.stack}\`\`\``);
        }
    }

    if (command === 'invitegen') {

        var chars = ["a", "b", "c", "d", "f", "g", "h", "j", "k", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "X", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    
        var char1 = chars[Math.floor(Math.random() * chars.length)]
        var char2 = chars[Math.floor(Math.random() * chars.length)]
        var char3 = chars[Math.floor(Math.random() * chars.length)]
        var char4 = chars[Math.floor(Math.random() * chars.length)]
        var char5 = chars[Math.floor(Math.random() * chars.length)]
        var char6 = chars[Math.floor(Math.random() * chars.length)]
    
        message.channel.send(`https://discord.gg/${char1}${char2}${char3}${char4}${char5}${char6}`)
    
      }
    
    if (command === "say") {

        var nomention = args.join(" ");

        nomention = nomention.replace(/@everyone/g, "@​everyone");

        if (!args[0]) {
            message.channel.send("What do I say <:UltraWeary:468091136615907337>")
        } else {

        message.delete().catch(O_o => { });

        message.channel.send(nomention);
        }
    }

    if (command === 'randuser') {
        var randuser = message.guild.members.array()[Math.floor(Math.random() * message.guild.members.array().length)];
        
        var nomention = args.join(" ");

        nomention = nomention.replace(/@everyone/g, "@​everyone");

        if (!args[0]) {
            message.channel.send(`And the chosen one was... **${randuser.user.username}#${randuser.user.discriminator}**!`)
        }
        
        else {
            message.channel.send(`Now **${randuser.user.username}#${randuser.user.discriminator}** is ${nomention}`)
        }
    }

    //reaction related

    if (command === 'reactions') {
        message.channel.send(`\`\`\`CURRENT REACTIONS\`\`\`
**hi!bible** sends a PDF of the bible, for when someone says "frick" or they send a cursed image
**hi!jazz** \*jazz music stops\*
**hi!waluigi** wah...
**hi!meme** good meem
**hi!dab** yes
**hi!no** f
**hi!shoot** Marie stop
**hi!doubt** generic game reference
**hi!out** Get out1!
**hi!pain** stop it!
**hi!nice** very nice!
**hi!wtf** wut
**hi!edgy** wow, you are so rude
**hi!epic** yay
`)
    }
    
    if (command === 'bible') {
        message.channel.send('Hey, this is a christian server, so read the bible! >-[', { files: ["./reactions/bible.pdf"] });
    }
    if (command === 'jazz') {
        message.channel.send('https://goo.gl/Wg4HoQ')
    }
    if (command === 'waluigi') {
        message.channel.send('https://goo.gl/gaRUHU')
    }
    if (command === 'meme') {
        message.channel.send('https://goo.gl/8exvP2')
    }
    if (command === 'dab') {
        message.channel.send('https://goo.gl/8cAvtu')
    }
    if (command === 'no') {
        message.channel.send('https://goo.gl/PwWCho')
    }
    if (command === 'shoot') {
        message.channel.send('https://goo.gl/y2gaEq')
    }
    if (command === 'doubt') {
        message.channel.send('https://goo.gl/yfX6tp')
    }
    if (command === 'out') {
        message.channel.send('https://goo.gl/v1yG2F')
    }
    if (command === 'pain') {
        message.channel.send('https://goo.gl/Pk4aer')
    }
    if (command === 'nice') {
        message.channel.send8('https://goo.gl/g95cge')
    }
    if (command === 'wtf') {
        message.channel.send('https://goo.gl/kyBNTu')
    }
    if (command === 'edgy') {
        message.channel.send('https://goo.gl/xf88t6')
    }
    if (command === 'epic') {
        message.channel.send('https://goo.gl/YeLhN7')
    }

    //misc

//hi!eval message.channel.send(`${message.guild.createdAt}`);

    if (command === "server") 
    {
        
        const embed = {
            "color": 12961221,
            "footer": {
              "text": "haha yes"
            },
            "thumbnail": {
              "url": `${message.guild.iconURL}`
            },
            "author": {
              "name": `${message.guild.name}`
            },
            "fields": [
              {
                "name": "Members",
                "value": `${message.guild.memberCount}`,
                "inline": true
              },
              {
                "name": "ID",
                "value": `${message.guild.id}`,
                "inline": true
              },
              {
                "name": "Owner",
                "value": `${message.guild.owner}`,
                "inline": true
              },
              {
                "name": "Owner ID",
                "value": `${message.guild.ownerID}`,
                "inline": true
              },
              {
                "name": "Region",
                "value": `${message.guild.region}`,
                "inline": true
              },
              {
                "name": "Verification level",
                "value": `${message.guild.verificationLevel}`,
                "inline": true
              },
              {
                "name": "Icon Url",
                "value": `${message.guild.iconURL}`,
                "inline": true
              },
              {
                "name": "AFK channel",
                "value": `${message.guild.afkChannel}`,
                "inline": true
              },
              {
                "name": "Created at",
                "value": `${message.guild.createdAt}`,
                "inline": true
              }
            ]
          };
          message.channel.send({ embed });
    }



 
    //short commands
    
    if (command === 'yomama') {
        message.channel.send("I honestly don't know why are these \"yo mama\" jokes that funny for everyone and I don't see the point of creating a command of that kind. Sorry.")
    }

    if (command === 'commands') {
        message.channel.send('Beep boop wrong command use `hi!help` instead')
    }

    if (command === 'vote') {
        
        const embed = {
            "title": "Here thank you",
            "url": "https://cdn.discordapp.com/attachments/356862571124490240/477071899567063040/ifunny.png",
            "color": 6466522,
            "footer": {
              "text": "Lasaga"
            },
            "thumbnail": {
              "url": "https://cdn.discordapp.com/attachments/348937971858145293/477083242122575872/CyclopsCool.png"
            },
            "fields": [
              {
                "name": "Listcord",
                "value": "No"
              },
              {
                "name": "Discord Bot List",
                "value": "[Click for free money](https://discordbots.org/bot/431495393520386068/vote)"
              }
            ]
          };
          message.channel.send({ embed });
        }

    if (command === 'emojis'){
        message.channel.send(`${message.guild.emojis.array()}`)
    }

    if (command === 'emojijson') {
        message.channel.send(`\`"${message.guild.emojis.array().join(`\",
"`)}"\``)
    }


    //help related

    if (command === 'help') {
        const hlang = {

    
        "general": `\`\`\`╔════╣    GENERAL COMMANDS    ╠════╗\`\`\`
 **- hi!help** haha yes
 **- hi!support** sends an invite to my server in the DMs (to avoid other bots deleting it in the server).
 **- hi!invite** allows you to invite me to your sexy despacito roblox server.
 **- hi!vote** please vote for my bot
 **- hi!stats** shows my server/member/etc count as well as my uptime
 **- hi!about** shows a boring text about me and Mama.
 **- hi!feedback (text)** if you have any ideas for my bot, or you want to report something, use this command. Your feedback will be logged in my support server.
 \`(WARNING: you can get blacklisted from using this command if you abuse this command for shitposting or making innapropiate feedbacks)\``,

        "utility": `\`\`\`╔════╣    UTILITY COMMANDS    ╠════╗\`\`\`
 **- hi!genoauth** generates an invite link for the mentioned bot
 **- hi!emoji (emoji name)** sends the link for an emote
 **- hi!server** shows your server's info.
 **- hi!coin** self explanatory
 **- hi!bans** shows the number of banned people in the server \`I require ban members permission to use this\`
 **- hi!avatar (optional @mention/user ID)** sends the avatar of the selected user or yours if there's no input
 **- hi!invitegen** generates a discord invite link made out of random characters (probably 99% of them won't work!)`,


        "fun": `\`\`\`╔════╣    FUN COMMANDS    ╠════╗\`\`\`
 **- hi!sexuality** shows a random sexuality <:gay_sparkle_heart:449944488425553931>
 **- hi!gender** shows a random gender <:BlobTransgenderHeart:449279341654835221>
 **- hi!randuser (optional text)** chooses a random member from the server
 **- hi!reactions** shows a list of reaction commands that you can use in the chat
 **- hi!say (text)** replaces your command with whatever you want me to say \`I need manage messages permission to do this\`
 **- hi!yomama** just try it.
 **- hi!8ball** ask something to the magic ball (you can suggest more answers!!)
 **- hi!hitomi** sends a random hitomi pic (They are supposed to be SFW, however, if you think one of the pics aren't THAT SFW, and want me to remove it, you can report it by sending a feedback including the number of the pic)`,
 

    "triggers": `\`\`\`╔════╣    TRIGGER WORDS    ╠════╗\`\`\`
a, h, nothing, no u, t!daily, claps, owo, it's

(can be included in any sentence) fornite, fortnite, fix hitomibot, jeff

**SPECIAL TRIGGERS:**
<@!431495393520386068> - shows my prefix
alexa play (anything) - sends a random song
`,
 

        "owner": `\`\`\`╔════╣  OWNER COMMANDS  ╠════╗\`\`\`
** - hi!eval** I'll try to reproduce the code that Mama sends.
** - hi!setname** self explanatory.
** - hi!announce/pingannounce** announces the given text to my server. (pingannounce will add an @ everyone tag to the message)
** - hi!setavatar** again, self explanatory.
** - hi!status** sets my status (only the first message, the member count and all that stuff will be kept).
** - hi!despacito** turns off the bot.
** - hi!restart** restarts the bot.
** - hi!sendfiles** sends the current files to Mama, it's like a backup
** - hi!yamify/unyamify** toggles yam mode (extremely useless btw)
** - hi!lasaga (user ID)** sends "John make me lasaga" to the selected person (I promise I won't abuse this)
** - hi!leave (server ID)** leaves the chosen server
** - hi!sinfo (number of server not id)** shows info about a server where I'm in 
** - hi!slist** shows a huge list of my servers (may become public in a future)

\`NOTE: the commands above can be only run by Mama\``
 

        }

        if (args[0] === undefined) {
            message.channel.send("**PLEASE SELECT A CATEGORY:** hi!help general/utility/fun/triggers/owner \n`NOTE: it's case sensitive. That means, you have to write exactly as it's shown here: in lowercase`")
        } else {    
            if (hlang[args[0]] === undefined) {
              message.channel.send("**That is not a category!** hi!help general/utility/fun/triggers/owner \n`NOTE: it's case sensitive. That means, you have to write exactly as it's shown here: in lowercase`")
          } else {
            message.channel.send(hlang[args[0]])
              } 
          }
        }
           
    
            }
        
        
//end of the blacklist ifs

}

else {
    return;
}


});


//Word triggers

client.on("message", (message) => {

    const args = message.content.substring(prefix.length).split(' ');

    if (message.author.bot) return;

/*
    if (message.author.id ===
        "140153170344017921"  //Baatu#0001 
    ) return;
*/

    if (message.guild.id ===
    "369883232767836161" //Timotainment's server, got requested for that
    ) return;

    else {

        //word triggers

    if (message.content.toLowerCase() === "no u") {
        message.channel.send(`Wow, what an original comeback <@${message.author.id}>`);
    }
    if (message.content.toLowerCase() === "a") {
        message.channel.send(`a`);
    }
    if (message.content.toLowerCase() === "h") {
        message.channel.send(`<:bih:473435772985278464>`);
    }
    if (message.content.toLowerCase() === "t!daily") {
        message.channel.send(`Hello <@172002275412279296>`);
    }
    if (message.content.toLowerCase() === "owo") {
        message.channel.send(`<:oneEye:470710365450141706>`);
    }
    if (message.content.toLowerCase() === "it's") {
        message.channel.send(`the`)
       .then(message.channel.send(`NUTSHACK`))
    }
    if (message.content.toLowerCase() === 'nothing') {
        message.channel.send("\*seinfeld bass line*")
    }
    if (message.content.toLowerCase() === "claps") {
        message.channel.send(`clap clap clap`);
    }
    


    //react triggers
    
    if (message.content.toLowerCase().includes("fix hitomibot")) {
        const nobugs = client.emojis.get('473450929895636993');
        message.react(nobugs);
    }
    if (message.content.toLowerCase().includes("fortnite")) {
        message.react('🤦');
    }
    if (message.content.toLowerCase().includes("fornite")) {
        message.react('🤦');
    }
    if (message.content.toLowerCase().includes("jeff")) {
        message.react('😍');
    }
 
    
    if (message.content.toLowerCase().startsWith("alexa play")) {
        var music1 = require( "./random/music.json")
        var music2 = music1[Math.floor(Math.random() * music1.length)]

      if (!args[2]) {return;}
      else {
        message.channel.send(music2)
      }
  }



    if (message.isMentioned(client.user)) {
		if(!args[1]) {
			message.channel.send("Yes hello whomst ponged me my prefix is **hi!** good night thank you");
		} else {
			return;
		}
    }

    
    }



});


client.login(config.token);

/*

if(guild.afkchannelthing){
embed.addField(stuff)
}


message.guild.fetchBans()
  .then(bans => message.channel.send(`${bans.array()[0]}`))
  .catch(console.error);

    if (message.content.toLowerCase() === "p") {
        message.channel.send(`p`);
    }
    


*/
