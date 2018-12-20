const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  //!coins
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let uCoins = coins[message.author.id].coins;


  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#00FF00")
  .addField("!addrole <user> <role>");
  .addField("!ban <user>");
  .addField("!botinfo ");
  .addField("!clear <number of messages>");
  .addField("!coins ");
  .addField("!level ");
  .addField("!pay <user> <cash number>");
  .addField("!prefix <custom prefix>");
  .addField("!removerole <user> <role>");
  .addField("!report <message>");
  .addField("!say <message>");
  .addField("!serverinfo");


  

}

module.exports.help = {
  name: "help"
}
