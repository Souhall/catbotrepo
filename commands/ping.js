const { Message, DiscordAPIError } = require("discord.js");
const Discord = require('discord.js')

module.exports.run = async (bot, Message, args) => {

const embed = new Discord.MessageEmbed()
.setTitle('Cat Kingdom Bot ')
.addField('Version', "0.1")
.addField('Help command', "!help")
.addField('Creator', "Maximus")
.setDescription("--------------------------------------")
.setColor(0xF35A3A)
Message.channel.send(embed);

}

module.exports.help = {
    name: "test",
    alieses: []
}