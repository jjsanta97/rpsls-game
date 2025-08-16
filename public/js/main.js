"use strict";
/*type Choice = {
    name: string;
    img: string;
};

const choices: Choice[] = [
    {
        name: "Piedra",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Rock-paper-scissors_rock.png",
    },
    {
        name: "Papel",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/23/Rock-paper-scissors_paper.png",
    },
    {
        name: "Tijera",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/67/Rock-paper-scissors_scissors.png",
    },
    {
        name: "Lagarto",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Lizard_font_awesome.svg",
    },
    {
        name: "Spock",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Vulcan_Salute_Emoji.png",
    },
];

const userChoiceDiv = document.getElementById("userChoice") as HTMLElement;
const computerChoiceDiv = document.getElementById(
    "computerChoice"
) as HTMLElement;

function renderChoice(container: HTMLElement, choice: Choice) {
    container.innerHTML = `
        <div class="card shadow-sm">
          <img src="${choice.img}" class="card-img-top" style="max-height:200px; object-fit:contain;">
          <div class="card-body">
            <h5 class="card-title">${choice.name}</h5>
          </div>
        </div>
      `;
}

function getRandomChoice(): Choice {
    const index = Math.floor(Math.random() * choices.length);
    const choice = choices[index];
    if (!choice) {
        throw new Error("No choice found at random index.");
    }
    return choice;
}

document
    .querySelectorAll<HTMLButtonElement>(".elegir-btn")
    .forEach((button) => {
        button.addEventListener("click", () => {
            const choiceName = button.dataset.choice!;
            const user = choices.find((c) => c.name === choiceName)!;
            const computer = getRandomChoice();

            renderChoice(userChoiceDiv, user);
            renderChoice(computerChoiceDiv, computer);
        });
    });*/
/*const choices: Choice[] = [
  { name: "Piedra", img: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Rock-paper-scissors_rock.png" },
  { name: "Papel", img: "https://upload.wikimedia.org/wikipedia/commons/2/23/Rock-paper-scissors_paper.png" },
  { name: "Tijera", img: "https://upload.wikimedia.org/wikipedia/commons/6/67/Rock-paper-scissors_scissors.png" },
  { name: "Lagarto", img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Lizard_font_awesome.svg" },
  { name: "Spock", img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Vulcan_Salute_Emoji.png" }
];*/
const choices = [
    { name: "Piedra", img: "✊" },
    { name: "Papel", img: "✋" },
    { name: "Tijera", img: "✌️" },
    { name: "Lagarto", img: "🦎" },
    { name: "Spock", img: "🖖" }
];
const userChoiceDiv = document.getElementById("userChoice");
const computerChoiceDiv = document.getElementById("computerChoice");
// Marcadores por lado (NO por gesto):
let userWins = 0;
let computerWins = 0;
// Reglas del juego
const rules = {
    "Piedra": ["Tijera", "Lagarto"],
    "Papel": ["Piedra", "Spock"],
    "Tijera": ["Papel", "Lagarto"],
    "Lagarto": ["Papel", "Spock"],
    "Spock": ["Piedra", "Tijera"]
};
//type Highlight = "win" | "lose" | "draw" | undefined;
function renderChoice(container, choice, score) {
    container.innerHTML = `
    <div class="card shadow-sm">
      <div style="font-size: 3rem;">${choice.img}</div>
      <div class="card-body">
        <h5 class="card-title">${choice.name}</h5>
        <p class="card-text mb-0">Victorias: <span class="score">${score}</span></p>
      </div>
    </div>
  `;
}
function getRandomChoice() {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}
function playRound(user, computer) {
    if (user.name === computer.name) {
        // Empate: no cambia el marcador
        renderChoice(userChoiceDiv, user, userWins);
        renderChoice(computerChoiceDiv, computer, computerWins);
        return;
    }
    if (rules[user.name].includes(computer.name)) {
        // Gana jugador
        userWins++;
        renderChoice(userChoiceDiv, user, userWins);
        renderChoice(computerChoiceDiv, computer, computerWins);
    }
    else {
        // Gana computadora
        computerWins++;
        renderChoice(userChoiceDiv, user, userWins);
        renderChoice(computerChoiceDiv, computer, computerWins);
    }
}
document.querySelectorAll(".elegir-btn").forEach(button => {
    button.addEventListener("click", () => {
        const choiceName = button.dataset.choice;
        const user = choices.find(c => c.name === choiceName);
        const computer = getRandomChoice();
        playRound(user, computer);
    });
});
//# sourceMappingURL=main.js.map