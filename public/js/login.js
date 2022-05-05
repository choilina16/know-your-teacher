const userLogin = document.getElementById("login");
const loginFormHandler = async (event) => {
  event.preventDefault();

  // targeting the label for= for pw & username
  const emailEl = document.querySelector("#email-login");
  const passwordEl = document.querySelector("#password-login");

  if (emailEl && passwordEl) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        email: emailEl.value,
        password: passwordEl.value,
      }),

      headers: { "Content-Type": "application/json" },
    });

    // If successful, redirect the browser to the create page
    if (response.ok) {
<<<<<<< HEAD
      document.location.replace("/create");
=======
      document.location.replace("/teacher");
>>>>>>> 62bf280ad9aa10c4d555baece9684d38d3b644fc
    } else {
      alert("Failed to login!");
    }
  }
};

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
