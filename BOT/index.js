const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

fs.readdir("./comandos/", (err, files) => {
    if (err) console.error(err);

    let arquivojs = files.filter(f => f.split(".").pop() == "js");
    arquivojs.forEach((f, i) => {
        let props = require(`./comandos/${f}`);
        console.log(`Comando ${f} inicou com sucesso`)
        bot.commands.set(props.help.name, props);
    });
});

bot.on('ready', () => { //status mudando
    console.log(`Bot foi iniciado com sucesso`);
       
        var tabela = [
            {name: `🤖${bot.users.cache.size} membros!`, type: 'WATCHING'},
        ]; //WATCHING, LISTENING, PLAYING, STREAMING
     
        function setStatus() {
            var altstatus = tabela[Math.floor(Math.random() * tabela.length)]
            bot.user.setActivity(altstatus)
        }
        setStatus();
        setInterval(() => setStatus(), 3000)
  });

//___________________________________contador de convites, sistema de Bem vindo________________________________________

const invites = {};

const wait = require('util').promisify(setTimeout);

bot.on('ready', () => {
  wait(1000);

  bot.guilds.cache.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
})

bot.on('guildMemberAdd', member => {
  // Para comparar, precisamos carregar a lista de convites atual.
  member.guild.fetchInvites().then(guildInvites => {
    // Este é o * existente * convida para a guilda.
    const ei = invites[member.guild.id];
    // Atualize os convites em cache da guilda.
    invites[member.guild.id] = guildInvites;
    // Examine os convites, encontre aquele para o qual os usos aumentaram.
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    // Isso é apenas para simplificar a mensagem enviada abaixo (o convidador não possui uma propriedade de tag)
    const inviter = bot.users.cache.get(invite.inviter.id);
    // Obtenha o canal de registro (mude a seu gosto)
    const logChannel = member.guild.channels.cache.find(channel => channel.id === "712762849574912072");

      var cargo = member.guild.roles.cache.get("712763430209060936"); //id do cargo que sera setado no player
   
      let embed = new Discord.MessageEmbed()
  
      .setTitle(`👋 Bem-Vindo(a)!`)
      .setThumbnail(member.user.avatarURL())
      .setDescription(`Olá ${member.user.tag}, seja bem vindo ao meu servidor.\n \nAgora estamos com ${bot.users.cache.size} membros no servidor\n \nConvidado por: ${inviter}, O convite foi usado ${invite.uses} vezes desde sua criação!`)
      .setColor('BLUE')
      .setFooter(`ID do Membro: ${member.user.id}`)
      .setImage("https://cdn.discordapp.com/attachments/715306189470040094/715314384397664287/838440.png")
   
      logChannel.send(embed);
      //member.send(`cola ae corno vam bate um papo! >.<`)
      member.roles.add(cargo.id)
  });
  });

//___________________________________Sistema de Adeus________________________________________

bot.on('guildMemberRemove', member => {
  
    var canal1 = bot.channels.cache.get("712762849574912072");

    let embed1 = new Discord.MessageEmbed()

    .setTitle(`😭 Adeus`)
    .setThumbnail(member.user.avatarURL({dynamic: true}))
    .setDescription(`O membro ${member.user.tag} saiu do servidor.\n\nAgora estamos com ${bot.users.cache.size} membros no servidor`)
    .setColor('RED')
    .setFooter(`ID do Membro: ${member.id}`)

    canal1.send(`\`${member.user.tag}\``, embed1)
  
    //membro.send(`Esperamos que volte algum dia :(`)
});

//___________________________________Sistema de cargo por reação________________________________________
bot.on('raw', async dados => {
    if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
    if(dados.d.message_id != "712775933643456512") return //id mensagem

    let servidor = bot.guilds.cache.get("700530387360940043") //id server
    let member = servidor.members.cache.get(dados.d.user_id) //id membro

    let cargo1 = servidor.roles.cache.get('712771747690315808'), //id cargo1
        cargo2 = servidor.roles.cache.get('712763430209060936'), //id cargo2
        cargo3 = servidor.roles.cache.get('690939243463180330') //id cargo

    if(dados.t === "MESSAGE_REACTION_ADD"){ 
        if(dados.d.emoji.name === "✅"){ //caso seja emoji feito usar (dados.d.emoji.id === "<id do seu bot>")
            if(member.roles.add(cargo1)) return
            member.addRole(cargo1)
        }else if(dados.d.emoji.name === "❌"){
            if(member.roles.add(cargo2)) return
            member.addRole(cargo2)
        }else if(dados.d.emoji.name === "🏳️‍🌈"){
            if(member.roles.add(cargo3)) return
            member.addRole(cargo3)
        }
    }
    if(dados.t === "MESSAGE_REACTION_REMOVE"){
        if(dados.d.emoji.name === "✅"){
            if(member.roles.remove(cargo1)) return
            member.removeRole(cargo1)
        }else if(dados.d.emoji.name === "❌"){
            if(member.roles.remove(cargo2)) return
            member.removeRole(cargo2)
        }else if(dados.d.emoji.name === "🏳️‍🌈"){
            if(member.roles.remove(cargo3)) return
            member.removeRole(cargo3)
        }
    }

})

bot.on('message', message => { // nome desse evento, foi setado como: message
    if (message.author.bot) return; // puxando o nome definido, bloquearemos o uso de comandos por outros bots
    if (message.channel.type === "dm") {
        return message.reply("Não aceito comandos por aqui, DM!")
    } // caso seja uma mensagem privada ao nosso bot, não retornaremos

    let prefix = config.prefix; // puxando o prefixo do nosso bot
    var args = message.content.substring(config.prefix.length).split(" ");
    if (!message.content.startsWith(config.prefix)) return;
     let cmd = args.shift().toLowerCase();
     if (!message.content.startsWith(prefix) || message.author.bot) return;

  let command =
    bot.commands.get(cmd)
  if (command) {
    command.run(bot, message, args);
  } else {
    message.reply(
      `não reconheci esse comando`
    );
  }
});

bot.login(process.env.TOKEN);