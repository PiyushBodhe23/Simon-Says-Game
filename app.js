let gameSeq = [];
let userSeq = [];

let btns = ["red", "green", "blue", "yellow"];

let started = false;
let level = 0;

// Selecting the heading
let h2 = document.querySelector("h2");

// Start the game on any key press
document.addEventListener("keypress", function () {
    if (!started) {
        started = true;
        levelUp();
    }
});

// Flash the button
function flash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}

// Level up function
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // Choose random button
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    // Add to game sequence
    gameSeq.push(randColor);

    // Flash the chosen button
    flash(randBtn);
}

// Check user sequence
function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        // If last input correct → next level
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 600);
        }
    } else {
        // Game Over
        h2.innerHTML = `Game Over! <br> Press Any Key to Start Again`;
        document.body.classList.add("game-over");

        setTimeout(() => {
            document.body.classList.remove("game-over");
        }, 200);

        resetGame();
    }
}

// When user clicks a button
function btnPress() {
    let btn = this;
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    flash(btn);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

// Reset game
function resetGame() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
