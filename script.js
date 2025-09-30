const story = {
  start: {
    text: "You are Kratos, the God of War. Your journey begins in Midgard. Where do you go?",
    choices: [
      { text: "🌲 Enter the Forest", next: "forest1" },
      { text: "🌉 Cross the Bridge of the Dead", next: "bridge1" },
      { text: "⚔️ Face the Final Battle", next: "final1" }
    ]
  },

  forest1: {
    text: "In the forest, Draugr attack! Do you fight or sneak?",
    choices: [
      { text: "Fight head-on", next: "forestFight" },
      { text: "Sneak past", next: "forestSneak" }
    ]
  },
  forestFight: {
    text: "You slay the Draugr but lose health. Atreus is proud. You find a chest with Spartan Rage.",
    choices: [{ text: "Continue your journey", next: "end" }]
  },
  forestSneak: {
    text: "You sneak past, but Atreus doubts your courage. Later, you are ambushed by more enemies.",
    choices: [{ text: "Continue your journey", next: "end" }]
  },

  bridge1: {
    text: "At the Bridge of the Dead, the ferryman demands payment.",
    choices: [
      { text: "Pay with a rune", next: "bridgePay" },
      { text: "Refuse and fight", next: "bridgeFight" }
    ]
  },
  bridgePay: {
    text: "The ferryman takes you safely across, leading to Helheim’s entrance.",
    choices: [{ text: "Continue your journey", next: "end" }]
  },
  bridgeFight: {
    text: "You battle a horde of Draugr. Atreus is captured, and you must rescue him.",
    choices: [{ text: "Continue your journey", next: "end" }]
  },

  final1: {
    text: "Baldur appears! Do you confront him or set a trap?",
    choices: [
      { text: "Confront immediately", next: "finalFight" },
      { text: "Wait and set a trap", next: "finalTrap" }
    ]
  },
  finalFight: {
    text: "You face Baldur in a fierce battle. The outcome is uncertain...",
    choices: [
      { text: "Win the battle", next: "endingWin" },
      { text: "Lose the battle", next: "endingLose" }
    ]
  },
  finalTrap: {
    text: "You set a clever trap. Baldur is weakened, making the fight easier.",
    choices: [{ text: "Finish Baldur", next: "endingWin" }]
  },

  endingWin: {
    text: "Victory! You and Atreus survive, preparing for Ragnarok. ⚡",
    choices: [{ text: "Play again", next: "start" }]
  },
  endingLose: {
    text: "Defeat... Baldur kills you. Game Over. 💀",
    choices: [{ text: "Play again", next: "start" }]
  },

  end: {
    text: "Your journey continues... but another adventure awaits. 🔥",
    choices: [{ text: "Play again", next: "start" }]
  }
};

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");

function renderState(stateKey) {
  const state = story[stateKey];
  questionElement.textContent = state.text;
  answersElement.innerHTML = ""; // clear old buttons

  state.choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice.text;
    button.addEventListener("click", () => renderState(choice.next));
    answersElement.appendChild(button);
  });
}

renderState("start");
