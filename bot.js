
const Discord = require("discord.js");
const client = new Discord.Client()
const db = require("quick.db")


client.on('ready', async => {
  console.log(client.user.id)
})



client.on('message', async message => {
  let fetch = db.fetch(`message_${message.guild.id}_sad_${message.author.id}`)
  let fetch2 = db.fetch(`channel_${message.channel.id}`_mm_${message.author.id}`)
  if(!fetch) {
  db.set(`message_${message.guild.id}_sad_${message.author.id}`)
   db.set(`channel_${message.channel.id}`_mm_${message.author.id}`, message.channel.id)
  } else {
    return;  
  }
  
  let settings = {
    "deletemessage" : "20",
    "second": "6",
    "numbers": "000"
  }
  
  if(client.user.id === message.author.id) {
setInterval(() => {
db.delete(`message_${message.guild.id}_sad_${message.author.id}`)
  
    let messages = message.channel.fetchMessages();
  let channels = client.guilds.channels.get(fetch2)
  channels.bulkDelete(messages.filter(msj => msj.author.id === client.user.id).array().slice(0, Number(settings.deletemessage))).then(db.delete(`message_${message.guild.id}_sad_${message.author.id}`))

}, settings.second+settings.numbers);
  
}
})

client.login('TOKEN')
