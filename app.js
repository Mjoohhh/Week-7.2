const displayResult = document.querySelector("#result");
const btnGetAPrediction = document.querySelector("#prediction");

const options = [
    'You will fall in love this afternoon.', 
    'You will win a lottery.',
    'You will lose your phone. Check your pockets.',
    'You will fall asleep on a couch.',
    'Your crush will ask you out next week.',
    'You will...',
    'Elon Musk will buy TikTok.',
    "You will get a new puppy.",
    "You will get all your work done.", 
    "You will have a wonderful day tomorrow."
];

btnGetAPrediction.addEventListener('click', () => {
    randomOptionIndex = Math.floor(Math.random() * options.length)
    randomOption = options[randomOptionIndex]

    const prediction = randomOption;
    displayResult.innerHTML = `${randomOption}`;
});