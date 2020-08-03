const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
  client.user.setActivity("noot noot");
});

client.login("");

let userCooldown = {};

client.on("message", async (message) => {
  if (message.content === "noot") {
    if (message.member.voice.channel) {
      try {
        const connection = await message.member.voice.channel.join();
        const rand = Math.random();
        let file = "";

        if (rand < 0.1) file = "src/noot.webm";
        else if (rand < 0.2) file = "src/nootfry.webm";
        else if (rand < 0.3) file = "src/noots_lol_1.webm";
        else if (rand < 0.4) file = "src/noots_lol_2.webm";
        else if (rand < 0.5) file = "src/noots_lol_3.webm";
        else if (rand < 0.6) file = "src/noots_lol_4.webm";
        else if (rand < 0.7) file = "src/noots_lol_5.webm";
        else if (rand < 0.8) file = "src/noots_lol_6.webm";
        else if (rand < 0.9) file = "src/noots_lol_7.webm";
        else if (rand < 1) file = "src/noots_lol.webm";

        connection.play(fs.createReadStream(file), {
          type: "webm/opus",
        });
      } catch (error) {
        console.log(error);
      }
    }
  } else if (message.content === "NOOT") {
    if (!userCooldown[message.author.id]) {
      userCooldown[message.author.id] = true;
      if (message.member.voice.channel) {
        try {
          const connection = await message.member.voice.channel.join();
          connection.play(fs.createReadStream("src/nootfry.webm"), {
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
  }
});
