const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
const path = require('path');

const app = express();
const PORT = 3000; // Set a open port

const mongo_uri = 'YOUR_MONGODB_URI'; // Add mongo uri

mongoose.connect(mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

const tokenSchema = new mongoose.Schema({
    endpoint: String,
    token: String,
    passwordHash: String,
});

const Token = mongoose.model('Token', tokenSchema);

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/store-token', async (req, res) => {
    const { token, password } = req.body;

    const endpoint = generateEndpoint();

    try {
        const passwordHash = hashPassword(password);

        const savedToken = await Token.create({ endpoint, token, passwordHash });
        res.json({ endpoint: savedToken.endpoint });
    } catch (error) {
        console.error('Error storing token in MongoDB:', error);
        res.status(500).json({ error: 'Failed to store token' });
    }
});

app.post('/get-token/:endpoint', async (req, res) => {
    const { endpoint } = req.params;
    const { password } = req.body;

    try {
        const storedToken = await Token.findOne({ endpoint }).exec();

        if (!storedToken) {
            return res.status(404).json({ error: 'Endpoint not found' });
        }

        if (comparePasswords(password, storedToken.passwordHash)) {
            res.json({ token: storedToken.token });
        } else {
            res.status(401).json({ error: 'Unauthorized' });
        }
    } catch (error) {
        console.error('Error retrieving token from MongoDB:', error);
        res.status(500).json({ error: 'Failed to retrieve token' });
    }
});

function generateEndpoint() {
    return crypto.randomBytes(16).toString('hex');
}

function hashPassword(password) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return `${salt}:${hash}`;
}

function comparePasswords(password, hash) {
    const [salt, originalHash] = hash.split(':');
    const newHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return newHash === originalHash;
}

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
