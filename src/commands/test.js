module.exports = {
  name: 'test',
  description: 'Just a test command',
  execute(client, message, args, Discord) {
    message.channel.send('Test worked');
  },
};
