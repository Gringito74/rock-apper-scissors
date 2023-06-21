const choices = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('#choice button');
const result = document.querySelector('#result');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const playerChoice = this.id;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (playerChoice === computerChoice) {
      result.textContent = `It's a tie! You both chose ${playerChoice}.`;
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
      result.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }
  });
});