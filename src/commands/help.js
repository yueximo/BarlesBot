module.exports = {
  name: 'help',
  description: 'Shows the different commands that can be run',
  execute(client, message, args, Discord) {
    let help = new Discord.MessageEmbed()
      .setTitle('Commands')
      .setDescription('These are the supported commands:')
      .addFields(
        { name: '$help', value: 'Displays the help menu' },
        { name: '$clown <user>', value: 'Clowns the user' },
        { name: '$annoy <user>', value: 'Spam the user with pings' },
        { name: '$penguin', value: 'Post an awesome penguin gif' }
      );
    message.channel.send({ embeds: [help] });
  },
};
