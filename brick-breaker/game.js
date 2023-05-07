// Game variables
var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");
var playerX = 0;
var playerY = 0;
var playerSpeed = 5;
var playerWidth = 50;
var playerHeight = 50;
var coinX = 100;
var coinY = 100;
var coinWidth = 25;
var coinHeight = 25;
var enemyX = 200;
var enemyY = 200;
var enemyWidth = 50;
var enemyHeight = 50;
var lives = 3;
var score = 0;

// Handle user input
document.addEventListener("keydown", function(event) {
    switch(event.key) {
        case "ArrowUp":
            playerY -= playerSpeed;
            break;
        case "ArrowDown":
            playerY += playerSpeed;
            break;
        case "ArrowLeft":
            playerX -= playerSpeed;
            break;
        case "ArrowRight":
            playerX += playerSpeed;
            break;
    }
});

// Update game state
function update() {
    if (playerX < coinX + coinWidth && playerX + playerWidth > coinX && playerY < coinY + coinHeight && playerY + playerHeight > coinY) {
        score += 1;
        coinX = Math.floor(Math.random() * canvas.width);
        coinY = Math.floor(Math.random() * canvas.height);
    }
    if (playerX < enemyX + enemyWidth && playerX + playerWidth > enemyX && playerY < enemyY + enemyHeight && playerY + playerHeight > enemyY) {
        enemyX = Math.floor(Math.random() * canvas.width);
        enemyY = Math.floor(Math.random() * canvas.height);
        lives -= 1;
        if (lives === 0) {
            alert("Game over! Your score was " + score);
            location.reload();
        }
    }
}

// Render game graphics
function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "yellow";
    ctx.fillRect(coinX, coinY, coinWidth, coinHeight);
    ctx.fillStyle = "red";
    ctx.fillRect(enemyX, enemyY, enemyWidth, enemyHeight);
    ctx.fillStyle = "blue";
    ctx.fillRect(playerX, playerY, playerWidth, playerHeight);
    ctx.font = "bold 24px sans-serif";
    ctx.fillStyle = "white";
    ctx.fillText("Score: " + score, 10, 30);
    ctx.fillText("Lives: " + lives, canvas.width - 100, 30);
}

// Game loop
function gameLoop() {
    update();
    render();
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
