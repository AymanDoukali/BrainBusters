document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission
  alert("Thank you for reaching out! We'll get back to you soon.");
  document.getElementById("contact-form").reset(); // Clear form fields
});
