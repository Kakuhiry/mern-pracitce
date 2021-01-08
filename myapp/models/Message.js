const { text } = require("body-parser");
const { stringify } = require("querystring");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    sender: {
        type: String,
        required: true
    },
    reciever: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

module.exports = Message = mongoose.model("messages", MessageSchema)