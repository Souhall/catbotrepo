const { Message, DiscordAPIError } = require("discord.js");
const Discord = require("discord.js");
const Mongoose = require("mongoose");
const Data = require("../models/data.js")

Mongoose.connect(process.MONGOPASS, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports.run = async (bot, Message, args) => {

    Data.findOne({
        userID: Message.author.id
    }, (err, data) => {
        if(!data)
        {
            const newData = new Data ({
                name: Message.author.username,
                userID: Message.author.id,
                cash: 0,
                bank: 10000,
                xp: 0,
                level: 0,
                daily: 0,
            })
            newData.save().catch(err => console.log(err))
            const embed = new Discord.MessageEmbed()
        .setTitle('National Cat Bank')
        .addField('Bank', `10000$`)
        .addField('Cash', `0$`)
        .setColor(0xF3AA3A)
        return Message.channel.send(embed);
        }
        else
        {
            const embed = new Discord.MessageEmbed()
        .setTitle('National Cat Bank')
        .addField('Bank', `${data.bank}$`)
        .addField('Cash', `${data.cash}$`)
        .setColor(0xF3AA3A)
        return Message.channel.send(embed);
        }
    })
}

module.exports.help = {
    name: "balance",
    alieses: ["bal", "money",  "cash", "Bank"]
}
