const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('**Kime Tokat atacağımı yazmadın.**');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`** ${mesaj} ` + message.author.username + '  Tarafından Sert Bir tokat Yedi!**')
	.setImage(`https://thumbs.gfycat.com/FrighteningChubbyAlaskanmalamute-max-1mb.gif`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tokat',
  description: 'İstediğiniz kişiyi Öldürürsünüz..',
  usage: 'tokat'
};
