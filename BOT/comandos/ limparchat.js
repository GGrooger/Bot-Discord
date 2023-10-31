const Discord = require("discord.js");

exports.run = (bot, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`sem permissao`)

    if (message.content.startsWith){
        msgDel = 100;
        let numberMessagens = parseInt(msgDel);
        message.channel.messages.fetch({limit: numberMessagens}).then(messages => message.channel.bulkDelete(messages));
    }
}

exports.help = {
    name: 'limparchat'
}