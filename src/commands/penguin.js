module.exports = {
  name: 'penguin',
  aliases: ['pen', 'peng', 'penguingif'],
  description: 'Post an awesome penuin gif',
  execute(client, message, args, Discord) {
    let penguin = new Discord.MessageEmbed()
      .setColor(0x000000)
      .setImage(
        'https://media.discordapp.net/attachments/274726387112476672/929160492495290438/IMG_0424.gif'
      );
    message.channel.send({ embeds: [penguin] });
  },
};
