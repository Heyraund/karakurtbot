const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kimi Öpeceğini yazmadın.**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`** ${mesaj} ` + message.author.username + ' :kiss_ww: Öpmeye başladı..**')
	.setImage(`https://galeri13.uludagsozluk.com/678/opusme_1350766.gif`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kiss',
  description: 'İstediğiniz kişiyi öpersiniz.',
  usage: 'kiss'
};
