type Choice = {
    name: string;
    img: string;
};

const choices: Choice[] = [
    { name: "Piedra", img: "✊" },
    { name: "Papel", img: "✋" },
    { name: "Tijera", img: "✌️" },
    { name: "Lagarto", img: "🦎" },
    { name: "Spock", img: "🖖" },
];

const userChoiceDiv = document.getElementById("userChoice") as HTMLElement;
const computerChoiceDiv = document.getElementById(
    "computerChoice"
) as HTMLElement;

// Marcadores por lado (NO por gesto):
let userWins = 0;
let computerWins = 0;

// Reglas del juego
const rules: Record<string, string[]> = {
    Piedra: ["Tijera", "Lagarto"],
    Papel: ["Piedra", "Spock"],
    Tijera: ["Papel", "Lagarto"],
    Lagarto: ["Papel", "Spock"],
    Spock: ["Piedra", "Tijera"],
};

//type Highlight = "win" | "lose" | "draw" | undefined;

function renderChoice(container: HTMLElement, choice: Choice, score: number) {
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

function getRandomChoice(): Choice {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function playRound(user: Choice, computer: Choice) {
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
    } else {
        // Gana computadora
        computerWins++;
        renderChoice(userChoiceDiv, user, userWins);
        renderChoice(computerChoiceDiv, computer, computerWins);
    }
}

document
    .querySelectorAll<HTMLButtonElement>(".elegir-btn")
    .forEach((button) => {
        button.addEventListener("click", () => {
            const choiceName = button.dataset.choice!;
            const user = choices.find((c) => c.name === choiceName)!;
            const computer = getRandomChoice();
            playRound(user, computer);
        });
    });
