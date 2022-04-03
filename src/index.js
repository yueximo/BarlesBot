require('dotenv').config;
//add a youtube function to my discord bot
const ytdl = require('ytdl-core');
const ytsearch = require('youtube-search');
const yt = require('ytdl-core');
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
const token = process.env.TOKEN;
const queue = new Map();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.on('message', (msg) => {
  if (msg.content === '!help') {
    msg.reply('!play [url]');
  }
});

client.on('message', (msg) => {
  if (msg.content === '!play') {
    msg.reply('!play [url]');
  }
});

client.on('message', (msg) => {
  if (msg.content === '!play [url]') {
    msg.reply('!play [url]');
  }
});

client.on('message', (msg) => {
  if (msg.content === '!play [url]') {
    msg.reply('!play [url]');
  }
});

client.on('message', (msg) => {
  if (msg.content === '!play [url]') {
    msg.reply('!play [url]');
  }
});

client.on('message', (msg) => {
  if (msg.content === '!play [url]') {
    msg.reply('!play [url]');
  }
});

client.on('message', (msg) => {
  if (msg.content === '!play [url]') {
    msg.reply('!play [url]');
  }
});

client.on('message', (msg) => {
  if (msg.content === '!play [url]') {
    msg.reply('!play [url]');
  }
});
const Discord = require('discord.js');

const client = new Discord.Client({
  intents: ['GUILDS', 'GUILD_MESSAGES'],
});

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach((handler) => {
  require(`./handlers/${handler}`)(client, Discord);
});

client.login(process.env.BARLESBOT_TOKEN);
