// Event listeners for the homepage
const classicButton = document.getElementById("button-classic");
const customButton = document.getElementById("button-custom");
const historyButton = document.getElementById("button-history");

let URL = "https://opentdb.com/api.php?amount=10";

classicButton.addEventListener("click", () => {
  localStorage.setItem("quizURL", URL); // Store URL in localStorage
  window.location.href = "../pages/quiz.html";
});

customButton.addEventListener("click", () => {
  const custom = document.getElementById("custom-quiz-options");
  if (custom.style.display === "none") {
    custom.style.display = "flex";
  } else {
    custom.style.display = "none";
  }
});

const customStartButton = document.getElementById("button-custom-start");

customStartButton.addEventListener("click", () => {
  // Generating the URL for the API call
  // The URL is generated based on the user's input
  // The user can select the category, difficulty, and number of questions
  // The URL is then passed to the API call function
  const category = document.getElementById("custom-quiz-category")
    .selectedOptions[0].value;
  const difficulty = document.getElementById("custom-quiz-difficulty").value;
  const amount = document.getElementById("custom-quiz-amount").value;
  const type = document.getElementById("custom-quiz-type").value;

  URL = `https://opentdb.com/api.php?amount=${amount}`;
  if (category !== "any") {
    URL += `&category=${category}`;
  }
  if (difficulty !== "any") {
    URL += `&difficulty=${difficulty}`;
  }
  if (type !== "any") {
    URL += `&type=${type}`;
  }
  console.log(URL);
  localStorage.setItem("quizURL", URL); // Store URL in localStorage
  window.location.href = "../pages/quiz.html";
});

historyButton.addEventListener("click", () => {
  window.location.href = "../pages/history.html";
});
