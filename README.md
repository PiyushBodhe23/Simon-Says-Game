# Simon Says Game

A simple memory-based game built using HTML, CSS, and JavaScript. The computer generates a random sequence of colors, and the player must repeat the same sequence to progress to the next level.

## About the Project
This is a front-end only project created using pure HTML, CSS, and JavaScript. No frameworks or external libraries are used. The game is lightweight, responsive, and designed to improve memory skills through increasing difficulty.

## Tech Stack
- HTML5
- CSS3
- JavaScript (Vanilla JS)

## Features
- Clean and simple user interface
- Random color sequence generation
- Interactive button animations
- Level-based progression
- Game Over detection
- One-key restart system
- Optional sound effects support

## Project Structure
Simon-Says-Game/
│── index.html
│── style.css
│── script.js
│── sounds/ (optional)
│     ├── red.mp3
│     ├── green.mp3
│     ├── yellow.mp3
│     └── blue.mp3
└── README.md

## How to Play
1. Press any key to start the game.
2. Watch the color sequence displayed by the game.
3. Repeat the pattern by clicking the buttons in the same order.
4. Each correct attempt increases your level.
5. One wrong click results in Game Over.
6. Press any key to restart.

## Game Logic
- A random color is selected and added to the pattern list.
- The game shows the pattern using CSS animations (and sounds if added).
- The player's clicks are recorded and compared step-by-step.
- If the input matches the entire sequence, the next level starts.
- If not, the game shows a Game Over message and resets all variables.

## How to Run
Simply open the file:
index.html
in any modern web browser. No server setup is required.

## Future Improvements
- Score counter
- Difficulty modes
- Mobile-optimized UI
- Sound toggle option
- High score saving
