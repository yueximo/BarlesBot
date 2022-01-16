module.exports = (client, Discord, message) => {
  const prefix = '$';
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/\s+/g);
  const cmd = args.shift().toLowerCase();

  const command =
    client.commands.get(cmd) ||
    client.commands.find((a) => a.aliases && a.aliases.includes(cmd));

  if (command) {
    command.execute(client, message, args, Discord);
  } else {
    message.reply('Please enter a valid command!');
  }
};
