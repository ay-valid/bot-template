const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "example",
    category: "category",
    description: "This in an example command.",
    run: async (client, message, args) => {
        message.reply('The **example command** is working!');
    }
}