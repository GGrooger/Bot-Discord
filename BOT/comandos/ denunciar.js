const Discord = require("discord.js");
const t = require('../config.json');

exports.run = (bot, message, args) => {

    let comandoo = new Discord.MessageEmbed()

    .setTitle("Comando Denuncia 🚨")
    .setDescription(`\`Denuncia!\` Deixe sua denuncia`)
    .addField("Como usar:", `\`${t.prefix}denuncia\``)
    .addField("Exemplo:", `\`${t.prefix}denuncia (Discord do denunciando), (Motivo da denuncia!)\``)
    .setColor("RED")

    var denunciad = args.slice(0).join(' ');
    if (!denunciad) { message.reply(`Sua denuncia esta incompleta!`, comandoo) }

    var motivo = args.slice(1).join(' ');
    if (!motivo) { message.reply(`Sua denuncia esta incompleta!`) } else {

    let enviado = new Discord.MessageEmbed()

    .setTitle(`${message.author.tag}`)
    .addField("Discord do denunciado:", denunciad.split(/ +/g)[0])
    .addField("Motivo da denuncia:", motivo)
    .setTimestamp()
    .setColor("RED")
    .setFooter("Use ✅ para aceitar a denuncia, ou ❌ para recusar!")

    message.reply("Sua denuncia foi enviada com sucesso!")

    var canal = bot.channels.cache.get("712747381719826513")
    canal.send(enviado)
    .then(function (msg) {
        msg.react("✅");
        msg.react("❌");
    })

    message.delete()
    }
}

exports.help = {
    name: "denunciar"
}