const Discord = require('discord.js');

exports.run = (bot, message, args) => { 
        
         let embed = new Discord.MessageEmbed()
    
        .setTitle(`Informações do Servidor:`)
        .setAuthor(`Utilizador: ${message.author.tag}`, message.author.displayAvatarURL())
        .setAuthor(`Utilizador: ${message.author.tag}\n${message.guild.name} < ID do Server : <${message.guild.id}>`, message.author.displayAvatarURL())
        .setThumbnail(message.guild.iconURL())
        .addField('Criado em:', formatDate('DD/MM/YYYY, às HH:mm:ss', message.guild.createdAt.toLocaleString(), true))
        .addField('Dono do servidor:', message.guild.owner.user.tag)
        .addField('Total de membros:', message.guild.memberCount, true)
        .addField('Total de membros reais:', message.guild.members.cache.filter(member => !member.user.bot).size, true)
        .addField('Total de bots:', message.guild.members.cache.filter(member => member.user.bot).size, true)
        .addField('Total de canais e categorias:', message.guild.channels.cache.size, true)
        .addField('Total de canais de texto:', message.guild.channels.cache.filter(ch => ch.type === 'text').size, true)
        .addField('Total de canais de voz:', message.guild.channels.cache.filter(ch => ch.type === 'voice').size, true)
        .setDescription(`Cargos totais do servidor: ${message.guild.roles.cache.map(role => role.toString()).join(' ')}`)
        .setColor('BLACK')
    
    message.channel.send(embed)
    message.delete()
     
}

exports.help = {
  name: 'serverinfo'
}

/**
 * Formata a data passada para o padrão do Brasil.
 * @param {string} template
 * @param {Date=} [date]
 * @return {string}
 */
function formatDate (template, date) {
  var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
    return template.split(specs[i]).join(item)
  }, template)
}