const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence Komutlar**", "!weather = İstediğiniz bir şehirin yada ülkenin o anki hava durumunu gösterir. \n!kiss = İstediğiniz Bir kişiyi öpersiniz. \n!çekiç = İstediğiniz Bir kişiye tokat atarsınız. \n!tokat = İstediğiniz bir kişiye tokat atarsınız. \n!kullanıcıbilgim = Hakkınızdaki Bilgileri Gösterir \n!sunucubilgi = Sunucu Hakkındaki Bilgileri Gösteririr \n!sunucuresmi = Sunucudaki Aktif olan resmi gösterir. \n!avatarım.")
  .addField("**Botun Ana Komutları**", "!yardım = BOT Komutlarını Atar. \n!bilgi = BOT Kendisi Hakkında Bilgi Verir. \n!ping = BOT Gecikme Süresini Söyler. \n!davet = BOT Davet Linkini Atar. \n!istatistik = BOT İstatistiklerini Atar. \n!temizle = cheat kısmını temizlersiniz.")
  .setFooter('**Coding Karakurt Technology.**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
