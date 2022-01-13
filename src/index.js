require('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client({
  intents: ['GUILDS', 'GUILD_MESSAGES'],
});

//message when the bot logs in
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//setting the prefix to $
const prefix = '$';

client.on('messageCreate', (message) => {
  //if the message is from the bot or does not start with the prefix, then we stop
  if (message.author.bot || !message.content.startsWith(prefix)) {
    return;
  }

  //list of commands so we only allow certain things
  let ListofCommands = ['test', 'clown', 'help', 'annoy'];

  const args = message.content.slice(prefix.length).trim().split(/\s+/g);
  const command = args.shift().toLowerCase();
  let userInputCommand = command;

  let isValid = ListofCommands.includes(userInputCommand);

  if (!isValid) {
    return message.channel.send('Please enter a valid command!');
  }

  let member = message.mentions.users.first();
  switch (command) {
    //help command
    case 'help':
      message.channel.send(`
These are the supported commands:

**$help** - Displays the help menu
**$clown <user>**- Clowns the user
      `);
      break;

    //testing command
    case 'test':
      message.channel.send('Test worked');
      break;

    //clown command
    case 'clown':
      if (!member) {
        return message.reply('Could not find the mentioned user.');
      }
      message.channel.send(
        `<@${member.id}> is as big a clown as <@446450980435918855> <:OMEGALUL:430457170165891072>`
      );
      break;

    case 'annoy':
      for (let i = 0; i < 10; i++) {
        message.channel.send(`<@${member.id}>`);
      }
      break;
  }
});

client.login(process.env.BARLESBOT_TOKEN);
