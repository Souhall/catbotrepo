const Mongoose = require("mongoose");

const dataSchema = Mongoose.Schema({
    name: String,
    userID: String,
    cash: Number,
    bank: Number,
    xp: Number,
    level: Number,
    daily: Number
})

module.exports = Mongoose.model("Data", dataSchema)
