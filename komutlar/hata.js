const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setDescription('Kullanım: !hata <Hata>'));
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('Hata Bildirildi!')
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** Adlı kullanıcı aşşağıdaki hatayı bildirdi:`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("Hata", type)
.setThumbnail(message.author.avatarURL)
client.channels.get('579617925028249600').send(embed2); // Kanal ID 

};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'hata',
  description: 'Bot ile ilgili hata bildirirsiniz.',
  usage: 'hata <hata>'
};