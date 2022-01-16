require('dotenv').config;

const Discord = require('discord.js');

const client = new Discord.Client({
  intents: ['GUILDS', 'GUILD_MESSAGES'],
});

//setting the prefix to $
const prefix = '$';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync('./src/commands')
  .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

let help = new Discord.MessageEmbed()
  .setTitle('Commands')
  .setDescription('These are the supported commands:')
  .addFields(
    { name: '$help', value: 'Displays the help menu' },
    { name: '$clown <user>', value: 'Clowns the user' },
    { name: '$annoy <user>', value: 'Spam the user with pings' },
    { name: '$penguin', value: 'post an awesome penguin gif' }
  );

//message when the bot logs in
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/\s+/g);
  const command = args.shift().toLowerCase();

  if (command === 'help') {
    client.commands.get('help').execute(message, args);
  }
  if (command == 'clown') {
    client.commands.get('clown').execute(message, args);
  }
  if (command == 'annoy') {
    client.commands.get('annoy').execute(message, args);
  }
  if (command == 'penguin') {
    client.commands.get('penguin').execute(message, args);
  }
});

client.login('OTMyMTUyOTUyNDAyMTAwMjU0.YeO1Fg.RMYDznngTV_j6zMW6FKNMo1tOzc');
