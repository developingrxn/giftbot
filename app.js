const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '#';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}! - Prefix '${prefix}'`);
  client.user.setActivity('TinoRewards', {type: "WATCHING"})
});

client.on('message', msg => {
  if (msg.content === prefix + 'ping') {
    msg.reply('pongxd');
  }
  else if (msg.content === 'bot, please send paypal info') {
    msg.channel.send('Alright');
    setTimeout(function(){ 
      msg.channel.send('Actualmente, no podemos dar el pago, debido a problemas con el sistema de **PayPal**, pero deja aquí tu mail o link de paypal.me/ para que en aproximadamente 3-5 días te podamos enviar el dinero.')
    }, 1500);
  }
  else if (msg.content.startsWith(prefix + 'decir') && msg.author.id !== client.user.id) {
    receivedMessage.delete();
    receivedMessage.channel.send(receivedMessage.content.slice(6));
  }
});

client.login('NTIxMDI5MDExNjk0OTQ0MjY2.XZejwA.2mRVT4qZaeCm8MxykjaFPyCSsdA');
