const Discord = require('discord.js');
// boh
const client = new Discord.Client();
const prefix = '!';
const admin = [509779445557493821, 544579907133636619, 296353825550237697,211131331155984385];
var insulti = ['Quel frocione di lovy', ' :poop:', 'Ecco adesso mi devo fare la doccia...', 'Perchè parli della merda?'];

client.on('ready', () => {

    console.log('I am ready!');

});

client.on('message', message => {

  if(message.author.id === client.user.id) {return;}

  if (message.isMemberMentioned(client.user)) {

    message.reply('cazzo vuoi?');

  }

  command = message.content.toLowerCase()

  if (command.startsWith(prefix)) { // Se il messaggio è un comando


    var line = command;
    line = line.substring(1);
    var args = message.content.trim().split(/ +/g);
    command = args[0];
    command = command.substring(1);
    var user = message.mentions.members.first(); 
    let role = message.guild.roles.find(r => r.name === args[2]);

    switch(command) {
      case 'aiuto':
        message.channel.send('I comandi disponibili sono: aiuto, ping, dado, timer, lunghezza.');
        break;
      case 'ping':
        apiPing = Math.round(message.client.ping);
        responseTime = Math.round(Date.now() - message.createdTimestamp);
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
          setTimeout(function() {
          message.reply('il timer è finito. Motivo: "' + reason + '".');
          }, time * 1000);
        }  
        break;
      case 'lunghezza':
        line = line.replace('lunghezza ', '');
        var lunghezzamess = line.length;
        message.channel.send('Il messaggio ha ' + lunghezzamess + ' caratteri.');
        break;
      case 'ban':
        if(admin.includes(message.author.id)){
            const user = message.mentions.users.first();
            message.guild.ban(user);
        }else message.channel.send("Mi dispiace testa di cazzo non lo puoi fare");
        break;
      case 'addrole':
            try { 
                user.addRole(role);
                message.channel.send('Ho aggiunto ' + user + " al ruolo " + role + ".");
                } catch(error) {
                    console.log(error);
                    message.channel.send("Errore nell'aggiunta del ruolo.");
                }
             break;
      case 'removerole':
            try { 
                user.removeRole(role);
                message.channel.send('Ho tolto ' + user + " dal ruolo " + role + ".");
                } catch(error) {
                    console.log(error);
                    message.channel.send("Errore nella rimozione del ruolo.");
                }
            break;
        case 'clear':
            try {
                async function clear() {
                 message.delete();
                 const fetched = await message.channel.fetchMessages({limit: 99});
                 message.channel.bulkDelete(fetched);
                }
            clear();
            } catch(error) {
                console.log(error);
                message.channel.send("Errore nell'eliminazione dei messaggi.");
            }
            break;
      default:
        message.channel.send("Command: " + command + " Line: " + line);
        break;
    }
  }





  if (command.includes('lovecchio') || command.includes('lovi')) {

    var x = Math.random();
    x = x * 4;
    x = parseInt(x);
    message.channel.send(insulti[x]);

    } else if (command.includes('trih')) {

      message.channel.send('Il magnifico trih :heart_eyes:');

    } else if (command.includes('esci il cazzo?')) {

      message.channel.send('8===========>');

    } else if (command.includes('dio')) {

      message.channel.send('Non nominare il nome di TRIA invano!');

    } else if (command.includes('bravo bot')) {

      message.reply('Grazie :blush:');

    } else if (command.includes('si lavora e si produce')){

      message.channel.send('per tria il nostro duce');

    } else if(command.includes('heil hitler')){

      message.channel.send('heil :hitler: :nazi:');

    }

});


// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
