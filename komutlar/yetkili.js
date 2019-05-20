const Discord = require('discord.js');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Eğlence Komutları`)
    .addField('Sunucu Kur', 'Kullanımı : e!sunucukur')
    .addField('Kick', 'Kullanımı : e!kick kişi')
.addField('Temizle', 'Kullanımı : e!temizle rakam')
    .addField('İstatistik', 'Kullanımı : e!istatistik')
.addField('Ban', 'Kullanımı : e!ban kişi sebep')
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'yetkili',
  description: '',
  usage: ''
};