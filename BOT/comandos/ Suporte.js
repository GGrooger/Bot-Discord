const Discord = require('discord.js')

exports.run = (bot, message, args, guild) => {

 message.guild.channels.create(`Suporte-${message.author.username}`, { type: 'text', parent: '712743179824136272'}).then(channel => { //id da categoria em que os tickets serao criados

    channel.overwritePermissions([
        {
        id: message.author.id,
        allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
        },
        {
        id: message.guild.id,
        deny: ["VIEW_CHANNEL"]
        },
        {
        id: message.guild.roles.cache.find(c => c.name === "𝘛𝘪𝘤𝘬𝘦𝘵").id, //nome do cargo que tera permição para ver os tickets
        allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "MANAGE_CHANNELS"]
        }
        ])
    
const embed = new Discord.MessageEmbed()

.setTitle(`Olá ${message.author.username}`)
.setColor("RED")
.addField("🤔 | Estou com duvidas, alguem pode me responder?", "Diga suas duvidas e assim que possivel estaremos respondendo!")
.addField("🙄 | Caso não saiba, a demora do seu ticket para ser lido é normal", "podemos estar ocupado ou resolvendo outros ticket's, então aguarde.")
.addField("Clique neste emoji para encerrar o suporte", ":x:")

        channel.send("<@&712541499958624266>", embed).then(y => {
            y.react("❌")
            let filtro = (reaction, usuario) => reaction.emoji.name === "❌" && usuario.id === message.author.id;
            const coletor = y.createReactionCollector(filtro);
            coletor.on("collect", ap => {
            channel.send("O canal será deletado em 5 segundos!")
            setTimeout(() => {
                channel.delete();
                }, 5000) 
            }
            )
        })
        return message.delete() // deletando o pedido do membro
        })
} 

exports.help = {
    name: 'suporte'
}