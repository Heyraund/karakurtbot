const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
                author: {
                    name: "Güncel Sürüm : 'V.1'",
                    icon_url: "https://i.hizliresim.com/r5qoMV.png"
                  },
                color: 0xD97634,
                description: "*Güncel aktif sürümü gösterir.*"
              }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'değişiklikler',
  description: 'Değişiklikleri gösterir.',
  usage: 'değişiklikler'
};