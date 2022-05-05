const signupFormHandler = async (event) => {
  event.preventDefault();

  // targeting the label for= for pw & username
  const usernameEl = document.querySelector('#email-signup');
  const passwordEl = document.querySelector('#password-signup');

  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value,
    }),

    headers: { 'Content-Type': 'application/json' },
  });

  // If successful, redirect the browser to the create page
  if (response.ok) {
    document.location.replace('/create');
  } else {
    alert('Failed to sign up!');
  }
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
