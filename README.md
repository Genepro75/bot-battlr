# 🤖 Bot Battlr

A React application for managing and battling robots! Build your army of bots, customize their stats, and prepare for epic battles.

![Bot Battlr](https://img.shields.io/badge/React-19.2.0-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## 🎮 Features

- **Bot Collection**: Browse through a diverse collection of robots with unique stats
- **Army Management**: Enlist bots to your army and manage your squad
- **Bot Stats**: View detailed information including health, damage, armor, and class
- **Dynamic UI**: Responsive design with modern React components
- **Mock Data**: Generates realistic bot data for testing and development

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd bot-battlr
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view the app

## 🏗️ Project Structure

```
src/
├── api/
│   └── botsApi.js          # API functions for bot operations
├── Components/
│   ├── BotCard.js          # Individual bot display component
│   ├── BotCollection.js    # Grid of available bots
│   ├── Navbar.js           # Navigation component
│   └── YourBotArmy.js      # User's selected bot army
├── App.js                  # Main application component
├── index.js                # Application entry point
└── index.css               # Global styles
```

## 🎯 How to Use

1. **Browse Bots**: View the collection of available robots with their stats
2. **Enlist Bots**: Click "Enlist" to add bots to your army
3. **Manage Army**: View your selected bots in the "Your Bot Army" section
4. **Release Bots**: Click "Deselect" to remove bots from your army
5. **Discharge Bots**: Click "x" to permanently remove bots from the collection

## 🤖 Bot Classes

Bots come in different classes with unique characteristics:
- **Support**: Utility and assistance bots
- **Medic**: Healing and support specialists
- **Assault**: High-damage offensive units
- **Defender**: High-armor defensive units
- **Captain**: Leadership and command bots

## 🛠️ Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎨 Customization

The app uses CSS classes for styling. Key classes include:
- `.bot-card` - Individual bot card styling
- `.bot-grid` - Grid layout for bot collection
- `.army-list` - Army display styling
- `.navbar` - Navigation bar styling

## 🔧 Technical Details

- **React 19.2.0** - Latest React features
- **Create React App** - Zero-configuration setup
- **Mock Data Generation** - Realistic bot data with random stats
- **Component Architecture** - Modular, reusable components
- **State Management** - React hooks for local state

## 🚀 Future Enhancements

- [ ] Bot battles and combat system
- [ ] Persistent data storage
- [ ] Bot customization and upgrades
- [ ] Multiplayer battles
- [ ] Leaderboards and achievements

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Create React App](https://github.com/facebook/create-react-app)
- Robot avatars provided by [Robohash](https://robohash.org/)
- Inspired by classic robot battle games

---

**Happy Bot Battling!** 🤖⚔️