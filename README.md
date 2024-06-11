# Discord Token Manager

This project is a simple web application that allows users to securely store and retrieve their Discord bot tokens using unique endpoints and passwords. It provides a secure way to manage Discord bot tokens without exposing them directly in code.

## Repository Stats

![GitHub Repo Stars](https://img.shields.io/github/stars/OG-Devcords/Discord-Token-Manager?style=for-the-badge)
![GitHub Repo Forks](https://img.shields.io/github/forks/OG-Devcords/Discord-Token-Manager?style=for-the-badge)
![GitHub Issues](https://img.shields.io/github/issues/OG-Devcords/Discord-Token-Manager?style=for-the-badge)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/OG-Devcords/Discord-Token-Manager?style=for-the-badge)
![GitHub License](https://img.shields.io/github/license/OG-Devcords/Discord-Token-Manager?style=for-the-badge)

## Discord Community

Join our Discord community for support and discussions: [Click Here](https://discord.gg/Pv8WgVQrwY) 🙂
## Features

- Securely store Discord bot tokens using unique endpoints and passwords
- Retrieve tokens by providing the correct endpoint and password
- MongoDB integration for data storage
- Express.js for server-side logic

## Installation

1. Clone the repository:

```
git clone https://github.com/OG-Devcords/discord-token-manager.git
```

2. Install dependencies:

```
cd discord-token-manager
npm install
```

3. Set up environment variables:

   - `MONGO_URI`: MongoDB connection URI
   - `PORT`: Port on which the server will run (optional, defaults to 3000)

4. Start the server:

```
npm start
```

5. Access the application in your web browser at `http://127.0.0.1:3000` (or the port specified in your environment variables).

## Usage

1. Navigate to the application in your web browser.
2. Use the provided interface to securely store your Discord bot tokens.
3. Retrieve tokens by providing the correct endpoint and password.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Create a new Pull Request

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE).
