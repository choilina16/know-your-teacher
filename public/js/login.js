const loginFormHandler = async (event) => {
  event.preventDefault();

  // targeting the label for= for pw & username
  const emailEl = document.querySelector('#email-login');
  const passwordEl = document.querySelector('#password-login');

  if (emailEl && passwordEl) {
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
      document.location.replace('/create');
    } else {
      alert('Failed to login!');
    }
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);
