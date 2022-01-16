module.exports = {
  name: 'annoy',
  aliases: ['spam', 'spamping', 'harrass', 'geton'],
  description: 'Spam the user with pings',
  execute(client, message, args, Discord) {
    let member = message.mentions.users.first();
    if (!member) {
      return message.reply('Could not find the mentioned user.');
    }
    for (let i = 0; i < 15; i++) {
      message.channel.send(`<@${member.id}>`);
    }
  },
};
