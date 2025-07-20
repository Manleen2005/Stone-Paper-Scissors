const player1selection = document.querySelector(".player1selection");
const player2selection = document.querySelector(".player2selection");
let result = document.querySelector(".clashresult");

const rock1 = document.querySelector(".rock1");
const paper1 = document.querySelector(".paper1");
const scissors1 = document.querySelector(".scissors1"); // fixed selector
const rock2 = document.querySelector(".rock2");
const paper2 = document.querySelector(".paper2");
const scissors2 = document.querySelector(".scissors2"); // fixed selector

let score1 = document.querySelector(".scoreplayer1");
let score2 = document.querySelector(".scoreplayer2");
let S1 = 0;
let S2 = 0;
checkSelections();

//player1
document.addEventListener("keydown", (e) => {
  if (e.key === "w") {
    player1selection.innerHTML = "👊";
    checkSelections(); // at startup
  }
});

rock1.addEventListener("click", () => {
  player1selection.innerHTML = "👊";
  checkSelections(); // at startup
});

document.addEventListener("keydown", (e) => {
  if (e.key === "a") {
    player1selection.innerHTML = "✋";
    checkSelections(); // at startup
  }
});

paper1.addEventListener("click", () => {
  player1selection.innerHTML = "✋";
  checkSelections(); // at startup
});

document.addEventListener("keydown", (e) => {
  if (e.key === "d") {
    player1selection.innerHTML = "✌️";
    checkSelections(); // at startup
  }
});

scissors1.addEventListener("click", () => {
  player1selection.innerHTML = "✌️";
  checkSelections(); // at startup
});

//player2
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    player2selection.innerHTML = "👊";
    checkSelections(); // at startup
  }
});

rock2.addEventListener("click", () => {
  player2selection.innerHTML = "👊";
  checkSelections(); // at startup
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    player2selection.innerHTML = "✋";
    checkSelections(); // at startup
  }
});

paper2.addEventListener("click", () => {
  player2selection.innerHTML = "✋";
  checkSelections(); // at startup
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    player2selection.innerHTML = "✌️";
    checkSelections(); // at startup
  }
});

scissors2.addEventListener("click", () => {
  player2selection.innerHTML = "✌️";
  checkSelections(); // at startup
});

function checkSelections() {
  if (player1selection.innerHTML === "" || player2selection.innerHTML === "") {
    player1selection.style.display = "none";
    player2selection.style.display = "none";
  } else {
    player1selection.style.display = "block";
    player2selection.style.display = "block";
    winning();
    scoring();
  }
}

function winning() {
  const p1 = player1selection.innerHTML.trim();
  const p2 = player2selection.innerHTML.trim();

  if (p1 === p2) {
    result.innerHTML = "Tie 😳";
    return;
  }

  if (
    (p1 === "👊" && p2 === "✌️") ||
    (p1 === "✌️" && p2 === "✋") ||
    (p1 === "✋" && p2 === "👊")
  ) {
    result.innerHTML = "Player 1 Wins 🎉";
    S1++;
  } else {
    result.innerHTML = "Player 2 Wins 🎉";
    S2++;
  }
}

function scoring() {
  if (result.innerHTML === "Player 1 Wins 🎉") {
    score1.innerHTML = `Score:${S1}`;
  } else if (result.innerHTML === "Player 2 Wins 🎉") {
    score2.innerHTML = `Score:${S2}`;
  }
}

document.querySelector(".clearclash").addEventListener("click", () => {
  result.innerHTML = "Let see who Wins!";
  player1selection.innerHTML = "";
  player2selection.innerHTML = "";
});

document.querySelector(".resetScores").addEventListener("click", () => {
  result.innerHTML = "Let see who Wins!";
  player1selection.innerHTML = "";
  player2selection.innerHTML = "";
  S1 = 0;
  S2 = 0;
  score1.innerHTML = `Score:${S1}`;
  score2.innerHTML = `Score:${S2}`;
});
