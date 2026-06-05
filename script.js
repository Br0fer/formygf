const CREDENTIALS = {
  username: "baby",
  password: "27.01.2026",
};

const quizQuestions = [
  {
    question: "What's my favourite color?🐥",
    options: ["Green", "Red", "Purple", "Color of your eyes"],
    correct: 3,
  },
  {
    question: "What i do in my free time(other than talking to you)🕊️",
    options: [
      "Playing games",
      "Studying🤢🤢",
      "Adoring your pics🙂‍↕️🙂‍↕️",
      "I didnt come up with this one 💔",
    ],
    correct: 2,
  },
  {
    question: "What nickname i call you the most?",
    options: ["Princess", "Baby", "Good girl", "Cutie"],
    correct: null,
  },
];

let currentQuestionIndex = 0;
let correctAnswersCount = 0;

function checkLogin() {
  const userIn = document.getElementById("username").value.trim();
  const passIn = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("login-error");

  if (userIn === CREDENTIALS.username && passIn === CREDENTIALS.password) {
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    loadQuestion();
  } else {
    errorMsg.classList.remove("hidden");
  }
}

function loadQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];

  document.getElementById("question-text").innerText = currentQuestion.question;

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.className =
      "w-full text-left bg-white hover:bg-pink-50 border border-pink-200 p-3 rounded-xl font-medium text-gray-700 transition-all duration-200 shadow-sm cursor-pointer hover:border-pink-400";
    button.onclick = () => handleAnswer(index);
    optionsContainer.appendChild(button);
  });
}

function handleAnswer(selectedIndex) {
  if (selectedIndex === quizQuestions[currentQuestionIndex].correct) {
    correctAnswersCount++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    loadQuestion();
  } else {
    showResultsProcessing();
  }
}

function showResultsProcessing() {
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("prize-screen").classList.remove("hidden");

  const allCorrect = correctAnswersCount === quizQuestions.length;

  if (allCorrect) {
    showRealPrize();
  } else {
    setTimeout(() => {
      morphJokeToPrize();
    }, 3500);
  }
}

function morphJokeToPrize() {
  const noprizeforbro = document.getElementById("noprizeforbro");

  noprizeforbro.classList.add("opacity-0");

  setTimeout(() => {
    noprizeforbro.classList.add("hidden");
    showRealPrize();
  }, 500);
}

function showRealPrize() {
  const noPrizeForBro = document.getElementById("noprizeforbro");
  const ofcThereIsPrizeForYou = document.getElementById(
    "ofc-there-is-prize-for-you",
  );

  noPrizeForBro.classList.add("hidden");
  ofcThereIsPrizeForYou.classList.remove("hidden");

  setTimeout(() => {
    ofcThereIsPrizeForYou.classList.remove("opacity-0");
    ofcThereIsPrizeForYou.classList.add("opacity-100");
  }, 50);
}
