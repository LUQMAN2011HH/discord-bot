const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('البوت يعمل بنجاح!'));
app.listen(3000, () => console.log('Server is ready.'));

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
  console.log(`تم تسجيل الدخول بنجاح كـ: ${client.user.tag}`);
  client.user.setPresence({
    activities: [{ name: 'متصل 24/7' }],
    status: 'online'
  });
});

client.login(process.env.TOKEN);
