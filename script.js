document.addEventListener("DOMContentLoaded", (event) => {
  const loginForm = document.getElementById("loginForm");
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // 1. Check if the username is in email format
    if (!validateEmail(username.value)) {
      alert("Please enter a valid email address.");
      return;
    }

    // 3. Check password for special characters, uppercase letter, and number
    if (!validatePassword(password.value)) {
      alert(
        "Password must contain an uppercase letter, a number, and no special characters other than @."
      );
      return;
    }

    // 4. If validation passes
    alert("Logged In");
  });

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePassword(pwd) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{0,}$/;
    return passwordRegex.test(pwd);
  }
});
