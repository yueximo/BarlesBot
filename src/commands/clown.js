module.exports = {
  name: 'clown',
  description: 'Clowns the user',
  execute(client, message, args, Discord) {
    let member = message.mentions.users.first();
    if (!member) {
      return message.reply('Could not find the mentioned user.');
    }
    message.channel.send(
      `<@${member.id}> is as big a clown as <@446450980435918855> <:OMEGALUL:430457170165891072>`
    );
  },
};
