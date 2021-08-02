const Discord = require("discord.js");
const client = new Discord.Client();

function presence(){
  client.user.setPresence({
     status: "online",
     game: {
        name: "Viendo a Crm002 en twitch",
        type: "Playing"
     }
  });
} 


client.on("ready", () => {
    console.log("Bot listo!");
    presence();

 });
 
 client.on("message", (message) => {
   if(message.content.startsWith("/twitch")) {
     message.channel.send("https://www.twitch.tv/crm002");
   }
});

client.on("guildMemberAdd", miembro =>{
    var Canal = client.channels.find(channel => channel.id === ("871555020439556167"));
    Canal.send("Bienvenido <@" + miembro.id + "> al servidor, recuerda hablar con respeto.\n\nEsperamos que no seas tan perro como ELFARY :). :stuck_out_tongue_winking_eye: ");
 });
  
 client.on('message', async (message) => {
  if (
    message.content.toLowerCase().startsWith("/clean") ||
    message.content.toLowerCase().startsWith("/c")
  ) {
    if (!message.member.hasPermission('MANAGE_MESSAGES'))
      return message.channel.send("You cant use this command since you're missing `manage_messages` perm");
    if (!isNaN(message.content.split(' ')[1])) {
      let amount = 0;
      if (message.content.split(' ')[1] === '1' || message.content.split(' ')[1] === '0') {
        amount = 1;
      } else {
        amount = message.content.split(' ')[1];
        if (amount > 100) {
          amount = 100;
        }
      }
      await message.channel.bulkDelete(amount, true).then((_message) => {
        message.channel.send(`Bot cleared \`${_message.size}\` messages :broom:`).then((sent) => {
          setTimeout(function () {
            sent.delete();
          }, 2500);
        });
      });
    } else {
      message.channel.send('enter the amount of messages that you would like to clear').then((sent) => {
        setTimeout(function () {
          sent.delete();
        }, 2500);
      });
    }
  } else {
    if (message.content.toLowerCase() ===  "/crmhelp") {
      const newEmbed = new Discord.MessageEmbed().setColor('#00B2B2').setTitle('**Clear Help**');
      newEmbed
        .setDescription('This command clears messages for example `.clear 5` or `.c 5`.')
        .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
        .setTimestamp();
      message.channel.send(newEmbed);
    }
  }
});

client.login("ODcxNTM5NDMyNjQ4NDgyODQ3.YQcyWQ.SvkwykrMXg1PMs-LCsJEsZGoUo4")
