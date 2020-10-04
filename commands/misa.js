const { Message, DiscordAPIError } = require("discord.js");
const Discord = require('discord.js')

module.exports.run = async (bot, Message, args) => {

const embed = new Discord.MessageEmbed()
.setTitle('Cat Kingdom Bot ')
.addField('ANO KVASNA PROFILOVKA', "uwu")
.setDescription("--------------------------------------")
.setColor(0xF35A3A)
Message.channel.send(embed);

}

module.exports.help = {
    name: "misa",
    alieses: []
}