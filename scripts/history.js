// Function to fetch scores from localStorage
function getScores() {
  const scores = JSON.parse(localStorage.getItem("quizScores")) || [];
  return scores;
}

// Function to render the scores on the page
function renderScores() {
  const scoreList = document.getElementById("score-list");
  scoreList.innerHTML = ""; // Clear existing scores

  const scores = getScores();

  if (scores.length === 0) {
    scoreList.innerHTML = "<li>No scores available.</li>";
    return;
  }

  scores.forEach((score, index) => {
    const listItem = document.createElement("li");
    listItem.className = "score-item";
    listItem.innerHTML = `<span>Quiz ${
      index + 1
    }</span><span>Score: ${score}</span>`;
    scoreList.appendChild(listItem);
  });
}

// Function to clear score history
function clearHistory() {
  localStorage.removeItem("quizScores");
  renderScores();
}

// Event listeners
document
  .getElementById("clear-history")
  .addEventListener("click", clearHistory);
document.getElementById("back-home").addEventListener("click", () => {
  window.location.href = "../index.html"; // Adjust this to your home page URL
});

// Render scores on page load
renderScores();
