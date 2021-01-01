const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();

const isUpperCase = (str) => str === str.toUpperCase();

client.once("ready", () => {
  console.log("Ready!");
  client.user.setActivity("noot noot");
});

client.login("");

let userCooldown = {};

client.on("message", async (message) => {
  if (
    message.content.length > 3 &&
    message.content.match(/[n,N][o,O][o,O]+[T,t]/)
  ) {
    if (isUpperCase(message.content)) {
      if (!userCooldown[message.author.id]) {
        userCooldown[message.author.id] = true;
        if (message.member.voice.channel) {
          try {
            const connection = await message.member.voice.channel.join();
            connection.play(fs.createReadStream("nootfry.webm"), {
              type: "webm/opus",
            });
          } catch (error) {
            console.log(error);
          }
        }
      }
      
      setTimeout(() => {
        userCooldown[message.author.id] = false;
      }, 120000);

    } else {
      if (message.member.voice.channel) {
        try {
          const connection = await message.member.voice.channel.join();
          const rand = Math.random();
          let file = "";

          if (rand < 0.1) file = "noot.webm";
          else if (rand < 0.2) return;
          else if (rand < 0.3) file = "noots_lol_1.webm";
          else if (rand < 0.4) file = "noots_lol_2.webm";
          else if (rand < 0.5) file = "noots_lol_3.webm";
          else if (rand < 0.6) file = "noots_lol_4.webm";
          else if (rand < 0.7) file = "noots_lol_5.webm";
          else if (rand < 0.8) file = "noots_lol_6.webm";
          else if (rand < 0.9) file = "noots_lol_7.webm";
          else if (rand < 1) file = "noots_lol.webm";

          connection.play(fs.createReadStream(file), {
            type: "webm/opus",
          });
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
});
