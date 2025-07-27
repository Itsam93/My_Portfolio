document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent actual form submission

  const emailInput = document.getElementById("email").value;
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput)) {
    alert("The Email is invalid: Enter a Correct Email Address!");
  }

  if (message.length <= 2) {
    alert("The message is too short");
    return;
  }

  // If both are valid
  alert("Form submitted successfully!");
});
