const URL = localStorage.getItem("quizURL");

async function init() {
  console.log("intializing...");
  console.log("fetching questions...");
  const data = await fetchQuestions();

  console.log(data);
  if (data.length === 0) {
    alert("No questions found. Please try again later.");
  }
  const quiz = handleFetchedQuestions(data);
  console.log("handling fetched questions...");
  let currentQuestion = 0;
  let score = 0;
  const questionsNumber = quiz.length;

  render(quiz, currentQuestion, score, questionsNumber);
}

init();

async function fetchQuestions() {
  try {
    const response = await fetch(URL);
    const data = await response.json();

    if (data.response_code === 0) {
      console.log(data.results);
      return data.results;
    } else {
      console.error("No questions found.");
    }
  } catch (error) {
    console.error("Error fetching questions:", error);
  }
  return [];
}

function handleFetchedQuestions(data) {
  let quiz = [];
  console.log(data);
  for (let question of data) {
    // Create a quiz card for each question
    const quizCard = {
      question: question.question,
      answers: [...question.incorrect_answers, question.correct_answer],
      correctAnswer: question.correct_answer,
    };
    // Shuffle the answers
    quizCard.answers = shuffle(quizCard.answers);
    quiz.push(quizCard);
  }
  return quiz;
}

function render(quiz, currentQuestion, score, questionsNumber) {
  console.log("rendering");
  const card = quiz[currentQuestion];
  const question = card.question;
  const answers = card.answers;

  document.getElementById("question-number").innerHTML =
    "Q " + (currentQuestion + 1) + "/" + questionsNumber;

  document.getElementById("question").innerHTML = question;

  let html = `<p id="p-correct">Correct Answers = ${score}</p>`;

  for (let i = 0; i < answers.length; i++) {
    html += `<button class="button-answer" id="button-answer-${i}">${answers[i]}</button>`;
  }

  document.getElementById("div-answers").innerHTML = html;

  for (let i = 0; i < answers.length; i++) {
    const button = document.getElementsByClassName("button-answer")[i];
    button.addEventListener("click", function () {
      if (card.correctAnswer === button.innerHTML) {
        score++;
        document.getElementById("p-correct").innerHTML =
          "Correct Answers: " + score;
      }
      currentQuestion++;
      if (currentQuestion < questionsNumber) {
        render(quiz, currentQuestion, score, questionsNumber);
      } else {
        const finalScore = (score * 100) / questionsNumber;
        saveScore(finalScore);
        setTimeout(() => {
          alert("You have completed the quiz! Your score is: " + finalScore);
          window.location.href = "../index.html";
        }, 100);
      }
    });
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function saveScore(score) {
  // Retrieve existing scores or initialize an empty array
  const scores = JSON.parse(localStorage.getItem("quizScores")) || [];

  // Add the new score to the array
  scores.push(score);

  // Save the updated array back to localStorage
  localStorage.setItem("quizScores", JSON.stringify(scores));
}
