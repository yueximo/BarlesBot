module.exports = {
  name: 'play',
  aliases: ['p'],
  description: 'plays a song from youtube',
  execute(client, message, args, Discord) {
    const serverQueue = client.queue.find(
      (q) => q.guildID === message.guild.id
    );
    if (!serverQueue) {
      return message.channel.send('There is nothing playing.');
    }
    const dispatcher = (client.dispatcher = message.guild.voice.connection.play(
      ytdl(serverQueue.url, {
        filter: 'audioonly',
      })
    ));
    dispatcher.on('finish', () => {
      client.queue.shift();
      if (client.queue.length > 0) {
        play(client, message, Discord);
      }
    });
    dispatcher.on('error', (err) => {
      console.error(err);
    });
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 100);
    message.channel.send(`Now playing: **${serverQueue.title}**`);
  },
};
