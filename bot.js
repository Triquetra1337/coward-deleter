
const Discord = require("discord.js");
const client = new Discord.Client()
const db = require("quick.db")


client.on('ready', async => {
  console.log(client.user.id)
})



client.on('message', async message => {
  let fetch = db.fetch(`message_${message.guild.id}_sad_${message.author.id}`)
  if(!fetch) {
  db.set(`message_${message.guild.id}_sad_${message.author.id}`)
    
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
    message.bulkDelete(settings.deletemessage)
}, settings.second+settings.numbers);
  
}
})

client.login('TOKEN')
