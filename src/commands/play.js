module.exports = {
  name: 'play',
  aliases: ['p'],
  description: 'plays a song from youtube',
  execute(client, message, args, Discord) {
    const ytdl = require('ytdl-core');
    const streamOptions = { seek: 0, volume: 1 };
    const stream = ytdl(args[0], { filter: 'audioonly' });
    const dispatcher = message.guild.voiceConnection.playStream(
      stream,
      streamOptions
    );
    dispatcher.on('end', () => {
      message.channel.send('Song ended!');
    });
  },
};
