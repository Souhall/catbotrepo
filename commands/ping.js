const { Message } = require("discord.js");

module.exports.run = async (bot, Message, args) => {

const m = await Message.channel.send("Ping?");
m.edit(`Pong! ${m.createdTimestamp - Message.createdTimestamp}ms`);

}

module.exports.help = {
    name: "ping",
    alieses: []
}