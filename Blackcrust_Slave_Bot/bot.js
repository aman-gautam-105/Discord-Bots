console.log("beep beep fellas! 👨‍🔧");
require('dotenv').config();

const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

client.on('ready', readyFunction);
client.on('message', replyToMessage);

function readyFunction(){
    console.log('Holy Moly');
}

abusiveReplies = [
    'You Facebook Link!',
    'Behave You Plebian!',
    'I WILL KILL YOU...',
    'INITIATING BITCH DISTRUCTION SEQUENCE',
];

async function replyToMessage(msg){
    let msgContent  = msg.content ;
    
    if(msgContent.includes('bonk')){
        let msgMentionsKey = Object.keys(msg.mentions) ;
        msgMentionsKey.forEach((key, index) => {
            if(key === 'users'){
                let mentionsUsers = msg.mentions[key];
                mentionsUsers.forEach((key, index) => {
                    if(key.id === process.env.SUPER_OWNER_ID){
                        const randomIndex = Math.floor(Math.random() * abusiveReplies.length);
                        msg.reply(abusiveReplies[randomIndex]);
                        break;
                    }
                });
            }
        }
        );
    }
    if(msgContent.includes('!gif')){
        let url = `https://g.tenor.com/v1/search?q=cutedog&key=${process.env.TENOR_KEY}&limit=8`;
        let response = await fetch(url);
        let json = await response.json();
        msg.channel.send(json.results[0].url);
        msg.channel.send(json.results[1].url);
        msg.channel.send(json.results[2].url);
        msg.channel.send(json.results[3].url);
    }
}


