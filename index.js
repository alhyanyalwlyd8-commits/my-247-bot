const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Aternos Bot is Alive!'));
app.listen(process.env.PORT || 3000);

const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'GT1fS.aternos.me', // الآيبي الخاص بك
        port: 36880,              // البورت الخاص بك
        username: 'Aternos_Bot_247',
        version: '1.21.10'        // إصدار سيرفرك
    });

    bot.on('spawn', () => {
        console.log('البوت دخل سيرفر ماين كرافت بنجاح!');
        setInterval(() => {
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 500);
        }, 10000);
    });

    bot.on('end', () => {
        console.log('فصل الاتصال، جاري إعادة المحاولة بعد 30 ثانية...');
        setTimeout(createBot, 30000);
    });
}

createBot();
