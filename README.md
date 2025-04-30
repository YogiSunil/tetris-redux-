# Tetris Redux

**Tetris Redux** is a modernized version of the classic Tetris game, built with **React** and **Redux** for state management. This game features smooth animations, game controls, a scoring system, and a high level of interactivity. It's a fun and interactive way to play the popular puzzle game, enhanced with a Redux-powered game state.

---

## Features

- **State Management**: Utilizes Redux to manage the game state, including the board, active block, and game status.
- **Responsive Design**: The game is fully responsive and adapts to various screen sizes and devices.
- **Game Controls**: Move, rotate, and drop blocks using keyboard or on-screen buttons.
- **Next Block Preview**: Displays the upcoming block to give the player a preview of the next move.
- **Scoreboard**: Keeps track of the player's score and level.
- **Message Popup**: Displays messages such as "Game Over" or "Pause".
- **Smooth Animations**: Uses `requestAnimationFrame` to ensure smooth and consistent game animations.

---

## Demo

You can see a live demo of the game here:

> [Tetris Redux - Live Demo](#) *(Add demo link if available)*

---

## Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your system. You can check if they're installed by running:

```bash
node -v
npm -v
If these aren't installed, download and install them from Node.js official website.

Installation
To get started with Tetris Redux, follow these steps:

Clone the repository:

```bash
git clone https://github.com/YogiSunil/tetris-redux.git
cd tetris-redux
Install dependencies:

```bash
npm install
Start the development server:

```bash
npm start
This will launch the game in your browser at http://localhost:3000.

Project Structure
Here’s a breakdown of the project structure:

plaintext
Copy
Edit
tetris-redux/
├── src/
│   ├── components/
│   │   ├── GridBoard.js      # Displays the game grid and blocks
│   │   ├── NextBlock.js      # Displays the next block
│   │   ├── ScoreBoard.js     # Displays the score and level
│   │   ├── Controls.js       # Game controls for moving/rotating blocks
│   │   └── MessagePopup.js   # Displays popups like "Game Over"
│   ├── features/
│   │   └── gameSlice.js      # Redux slice for game state management
│   ├── App.css               # CSS file for styling
│   ├── App.js                # Main component to bring everything together
│   ├── index.js              # Entry point for the app
│   └── store.js              # Redux store configuration
├── public/
│   ├── index.html            # HTML file that renders the app
│   └── ...
└── package.json              # Project dependencies and scripts

## Components
Here is a summary of the key components in the app:

1. GridBoard
Displays the game grid.

Renders the blocks falling on the grid.

Handles the logic for clearing completed rows.

2. NextBlock
Shows the upcoming block that the player will be using next.

3. ScoreBoard
Displays the player's score and level.

Updates the score dynamically based on the blocks cleared.

4. Controls
Provides buttons for controlling the blocks (Move Left, Move Right, Rotate, Move Down).

Allows the player to interact with the game.

5. MessagePopup
Displays game-related messages such as "Game Over", "Pause", and "Level Up".

Redux Slice (gameSlice.js)
The gameSlice.js file manages the game state using Redux. It includes actions and reducers for the following:

Move: Moving blocks left, right, and down.

Rotate: Rotating the blocks.

Game State: Managing the game’s state (isRunning, gameOver).

Score: Updating and resetting the score as the game progresses.

Block Preview: Handling the next block that will fall.

## Custom Styles
The game’s styling is done using CSS with a clean, modern look. The App.css file includes custom styles for the board, buttons, score, and popups. Feel free to tweak the styles to personalize the look of the game.

## Contributing
If you would like to contribute to the project, you can follow these steps:

Fork the repository.

Create a new branch (git checkout -b feature/your-feature-name).

Make your changes and commit them (git commit -am 'Add new feature').

Push your changes to your forked repository (git push origin feature/your-feature-name).

Open a pull request on the main repository.

We welcome improvements, bug fixes, and any other contributions!

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements
This project is inspired by the classic Tetris game, with modern features like Redux for state management and React for the user interface.

Special thanks to the open-source community for the tools and libraries that made this project possible.

