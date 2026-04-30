<<<<<<< HEAD
let playerX = 20;
let playerY = 20;
let heartX= 220;
let heartY = 220;
let score = 0;

const player = document.getElementById("player");
const heart = document.getElementById("heart");
const scoreText = document.getElementById("score");
const questionBox = document.getElementById("questionBox");

function movePlayer(direction)
{
    createTrail();
    if (score >= 5) return;

    if (direction === "up") playerY -= 20;
    if (direction === "down") playerY += 20;
    if (direction === "left") playerX -= 20;
    if (direction === "right") playerX += 20;

    if (playerX < 0) playerX = 0;
    if (playerY < 0) playerY = 0;
    if (playerX > 280) playerX = 280;
    if (playerY > 280) playerY = 280;

    player.style.left = playerX + "px";
    player.style.top = playerY + "px";

    checkCollision();
}

const notes = [
    "You make every day better just by being you 💕",
    "You're my favorite person in the world 🌍",
    "I love you more than words can express 💖",
    "You make my heart melt every time I see you 🥰",
    "I made this because I love you 💘" 
];

function checkCollision() {
  let distanceX = Math.abs(playerX - heartX);
  let distanceY = Math.abs(playerY - heartY);

  if (distanceX < 30 && distanceY < 30) {
    score++;
    scoreText.textContent = score;

    document.getElementById("loveNote").textContent = notes[score - 1];

    if (score === 5) 
    {
      heart.style.display = "none";
      questionBox.classList.remove("hidden");
      document.getElementById("loveNote").textContent = "You unlocked the final question! 💖";
    }
    else 
    {
      moveHeart();
    }
  }
}

function moveHeart() {
  heartX = Math.floor(Math.random() * 270);
  heartY = Math.floor(Math.random() * 270);

  heart.style.left = heartX + "px";
  heart.style.top = heartY + "px";
}

function sayYes() {
  document.body.style.background =
    "linear-gradient(135deg, #ff4f9a, #ffb6d9, #7b2cff)";

  document.getElementById("message").innerHTML =
    "Yesss 💕<br>Oooowwweeee Baby Love!!!!<br>Officially mine again 😭💍";

  document.getElementById("player").textContent = "😍";

  questionBox.style.display = "none";

  startRoses();
}

function moveNo() {
  const noBtn = document.getElementById("noBtn");

  noBtn.style.position = "absolute";
  noBtn.style.left = Math.floor(Math.random() * 220) + "px";
  noBtn.style.top = Math.floor(Math.random() * 120) + "px";

  document.getElementById("message").textContent =
    "Aht aht... where you going? 🏃🏿‍♀️💕";
}

function createTrail() {
  const trail = document.createElement("div");
  trail.classList.add("trail");
  trail.textContent = "💕";

  trail.style.left = playerX + "px";
  trail.style.top = playerY + "px";

  document.getElementById("gameArea").appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 700);
}

function startRoses() {
  for (let i = 0; i < 25; i++) {
    const rose = document.createElement("div");
    rose.classList.add("rose");
    rose.textContent = "🌹";

    rose.style.left = Math.random() * 100 + "vw";
    rose.style.animationDelay = Math.random() * 2 + "s";

    document.body.appendChild(rose);

    setTimeout(() => {
      rose.remove();
    }, 5000);
  }
=======
let playerX = 20;
let playerY = 20;
let heartX= 220;
let heartY = 220;
let score = 0;

const player = document.getElementById("player");
const heart = document.getElementById("heart");
const scoreText = document.getElementById("score");
const questionBox = document.getElementById("questionBox");

function movePlayer(direction)
{
    createTrail();
    if (score >= 5) return;

    if (direction === "up") playerY -= 20;
    if (direction === "down") playerY += 20;
    if (direction === "left") playerX -= 20;
    if (direction === "right") playerX += 20;

    if (playerX < 0) playerX = 0;
    if (playerY < 0) playerY = 0;
    if (playerX > 280) playerX = 280;
    if (playerY > 280) playerY = 280;

    player.style.left = playerX + "px";
    player.style.top = playerY + "px";

    checkCollision();
}

const notes = [
    "You make every day better just by being you 💕",
    "You're my favorite person in the world 🌍",
    "I love you more than words can express 💖",
    "You make my heart melt every time I see you 🥰",
    "I made this because I love you 💘" 
];

function checkCollision() {
  let distanceX = Math.abs(playerX - heartX);
  let distanceY = Math.abs(playerY - heartY);

  if (distanceX < 30 && distanceY < 30) {
    score++;
    scoreText.textContent = score;

    document.getElementById("loveNote").textContent = notes[score - 1];

    if (score === 5) 
    {
      heart.style.display = "none";
      questionBox.classList.remove("hidden");
      document.getElementById("loveNote").textContent = "You unlocked the final question! 💖";
    }
    else 
    {
      moveHeart();
    }
  }
}

function moveHeart() {
  heartX = Math.floor(Math.random() * 270);
  heartY = Math.floor(Math.random() * 270);

  heart.style.left = heartX + "px";
  heart.style.top = heartY + "px";
}

function sayYes() {
  document.body.style.background =
    "linear-gradient(135deg, #ff4f9a, #ffb6d9, #7b2cff)";

  document.getElementById("message").innerHTML =
    "Yesss 💕<br>Oooowwweeee Baby Love!!!!<br>Officially mine again 😭💍";

  document.getElementById("player").textContent = "😍";

  questionBox.style.display = "none";

  startRoses();
}

function moveNo() {
  const noBtn = document.getElementById("noBtn");

  noBtn.style.position = "absolute";
  noBtn.style.left = Math.floor(Math.random() * 220) + "px";
  noBtn.style.top = Math.floor(Math.random() * 120) + "px";

  document.getElementById("message").textContent =
    "Aht aht... where you going? 🏃🏿‍♀️💕";
}

function createTrail() {
  const trail = document.createElement("div");
  trail.classList.add("trail");
  trail.textContent = "💕";

  trail.style.left = playerX + "px";
  trail.style.top = playerY + "px";

  document.getElementById("gameArea").appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 700);
}

function startRoses() {
  for (let i = 0; i < 25; i++) {
    const rose = document.createElement("div");
    rose.classList.add("rose");
    rose.textContent = "🌹";

    rose.style.left = Math.random() * 100 + "vw";
    rose.style.animationDelay = Math.random() * 2 + "s";

    document.body.appendChild(rose);

    setTimeout(() => {
      rose.remove();
    }, 5000);
  }
>>>>>>> 60ea032eaa22072695ed8002668c102edcc19018
}