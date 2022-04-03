module.exports = {
  name: 'play',
  aliases: ['p'],
  description: 'plays a song from youtube',
  execute(client, message, args, Discord) {
    //play command from youtube link
    if (args[0].includes('youtube.com')) {
      const voiceChannel = message.member.voice.channel;
      if (!voiceChannel) {
        return message.channel.send('You need to be in a voice channel to play music!');
      }
      const permissions = voiceChannel.permissionsFor(message.client.user);
      if (!permissions.has('CONNECT')) {
        return message.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
      }
      if (!permissions.has('SPEAK')) {
        return message.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
      }
      const songInfo =  ytdl.getInfo(args[0]);
      const song = {
        title: songInfo.title,
        url: songInfo.video_url,
      };
      if (!client.queue) {
        client.queue = [];
      }
      client.queue.push(song);
      if (!client.dispatcher) {
        play(client, message, Discord);
      }
    }
    //play command from local file
    else if (args[0].includes('.mp3')) {
      const voiceChannel = message.member.voice.channel;
      if (!voiceChannel) {
        return message.channel.send('You need to be in a voice channel to play music!');
      }
      const permissions = voiceChannel.permissionsFor(message.client.user);
      if (!permissions.has('CONNECT')) {
        return message.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
      }
      if (!permissions.has('SPEAK')) {
        return message.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
      }
      const song = {
        title: args[0],
        url: args[0],
      };
      if (!client.queue) {
        client.queue = [];
      }
      client.queue.push
  },
};
