const { Client, GatewayIntentBits } = require('discord.js');
const fetch = require('node-fetch');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const tokenEndpoint = 'Your_Endpoint_Url';
const password = 'Token-Manager-Password';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
            if (message.content === '!ping') {
                message.channel.send('Pong!');
            }
        });

client.loginWithToken = async () => {
    try {
        const response = await fetch(tokenEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password })
        });

        if (response.ok) {
            const data = await response.json();
            const token = data.token;
            client.login(token);
        } else {
            const errorMessage = await response.text();
            console.error(`Failed to fetch token: ${errorMessage}`);
        }
    } catch (error) {
        console.error('Error fetching token:', error);
    }
};

client.loginWithToken();
