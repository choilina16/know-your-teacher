const userLogin = document.getElementById("login");
const loginFormHandler = async (event) => {
  event.preventDefault();

<<<<<<< HEAD
  userLogin.addEventListener("click", login);
  function login() {
    const clearIntro = (document.getElementById("logininsign").style.display =
      "none");
  }

  // targeting the label for= for pw & username
  const usernameEl = document.querySelector("#email-login");
  const passwordEl = document.querySelector("#password-login");

  const response = await fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value,
    }),

    headers: { "Content-Type": "application/json" },
  });

  // If successful, redirect the browser to the create page
  if (response.ok) {
    document.location.replace("/create");
  } else {
    alert("Failed to login!");
=======
  // targeting the label for= for pw & username
  const emailEl = document.querySelector('#email-login');
  const passwordEl = document.querySelector('#password-login');

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: emailEl.value,
        password: passwordEl.value,
      }),

      headers: { 'Content-Type': 'application/json' },
    });

    // If successful, redirect the browser to the create page
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert('Failed to login!');
    }
>>>>>>> 537e755e6064e4ddfcba117b0363e8ce235ea7cf
  }
};

document
<<<<<<< HEAD
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);

// const loginFormHandler = async (event) => {
//   event.preventDefault();

//   // Collect values from the login form
//   const email = document.querySelector('#email-login').value.trim();
//   const password = document.querySelector('#password-login').value.trim();

//   if (email && password) {
//     // Send a POST request to the API endpoint
//     const response = await fetch('/api/users/login', {
//       method: 'POST',
//       body: JSON.stringify({ email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       // If successful, redirect the browser to the profile page
//       document.location.replace('/profile');
//     } else {
//       alert(response.statusText);
//     }
//   }
// };

// const signupFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#name-signup').value.trim();
//   const email = document.querySelector('#email-signup').value.trim();
//   const password = document.querySelector('#password-signup').value.trim();

//   if (name && email && password) {
//     const response = await fetch('/api/users', {
//       method: 'POST',
//       body: JSON.stringify({ name, email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert(response.statusText);
//     }
//   }
// };

// document
//   .querySelector('.login-form')
//   .addEventListener('submit', loginFormHandler);

// document
//   .querySelector('.signup-form')
//   .addEventListener('submit', signupFormHandler);
=======
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);
>>>>>>> 537e755e6064e4ddfcba117b0363e8ce235ea7cf
