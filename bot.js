const Discord = require('discord.js');
// boh
const client = new Discord.Client();
const prefix = '!';

var mutedUsers = new Array();

client.on('ready', () => {
    console.log('Il bot è online.');
});

client.on('message', message => {

	if (!message.content.startsWith(prefix) || message.author.bot) return; // The bot won't respond to a non-command or a message sent by a bot
   
    mutedUsers.forEach(x => { 					// Trying a muting function; commands are muted, too 

        if (mutedUsers[x] == message.author.id) {
            message.delete();
            return;
        }
    });
    
    var text = message.content.toLowerCase() // The var "text" is the main string that the bot is going to check

   	 if ((text.startsWith("-") || command.startsWith(".")) && !message.channel.name.includes("music-commands")) { // Deleting music commands outside of #music-commands
      	 message.delete();
      	 return;
    }
    
   		const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  		const command = args.shift().toLowerCase();
  		var line = args.join(" ");

        switch (command) {
            case 'aiuto':
                message.channel.send('I comandi disponibili sono: aiuto, ping, dado, timer, lunghezza.');
                break;
            case 'ping':
                let apiPing = Math.round(message.client.ping);
                let responseTime = Math.round(Date.now() - message.createdTimestamp);
                message.channel.send(`**Ping:** \`${responseTime}ms\``);
                break;
            case 'dado':
                var x = Math.random();
                x = x * 6 + 1;
                x = parseInt(x);
                message.channel.send('É uscito ' + x);
                break;
            case 'timer':
                var time = parseInt(args[1]);
                line = line.replace('timer ', '');
                line = line.replace(args[1] + ' ', '');
                var reason = line;
                if (line == '') {

                    message.channel.send('Ti manderò un messaggio fra ' + time + ' secondi.');
                    setTimeout(function() {
                        message.reply("il timer è finito.");
                    }, time * 1000);

                } else {
                    message.channel.send('Ti manderò un messaggio fra ' + time + ' secondi, per il seguente motivo: "' + reason + '".');
                    setTimeout(function() { message.reply('il timer è finito. Motivo: "' + reason + '".'); }, time * 1000);
                }
                break;
            case 'lunghezza':
                line = line.replace('lunghezza ', '');
                var lunghezzamess = line.length;
                message.channel.send('Il messaggio ha ' + lunghezzamess + ' caratteri.');
                break;
            case 'clear':
                try {
                    async function clear() {
                        message.delete();
                        const fetched = await message.channel.fetchMessages({ limit: 99 });
                        message.channel.bulkDelete(fetched);
                    }
                    clear();
                } catch (error) {
                    console.log(error);
                    message.channel.send("Errore nell'eliminazione dei messaggi.");
                }
                break;
            case 'mute':
                try {
                    var user = message.mentions.users.first();

                    mutedUsers.push(user.id);
                    
                    mutedUsers.forEach(element => {
                        console.log(element);
                    });

                    message.channel.send(user);

                } catch (error) {
                    console.log(error);
                    message.channel.send("Errore nel mutare.");
                }
                break;
            default:
                message.channel.send("DEBUG --- Command: " + command + " Line: " + line);
                break;
        }

});


// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN); //BOT_TOKEN is the Client Secret


