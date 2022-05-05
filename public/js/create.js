const newFormHandler = async (event) => {
  event.preventDefault();

  const firstNameEl = document.querySelector(
    'input[name="teacher-first-name"]'
  ).value;
  const lastNameEl = document.querySelector(
    'input[name="teacher-last-name"]'
  ).value;
  const colorEl = document.querySelector('input[name="teacher-color"]').value;
  const flowerEl = document.querySelector('input[name="teacher-flower"]').value;
  const candyEl = document.querySelector('input[name="teacher-candy"]').value;
  const eatEl = document.querySelector('input[name="teacher-eat"]').value;
  const hobbiesEl = document.querySelector(
    'input[name="teacher-hobbies"]'
  ).value;
  const otherEl = document.querySelector('input[name="teacher-other"]').value;

  await fetch('/api/teacher/', {
    method: 'POST',
    body: JSON.stringify({
      firstNameEl,
      lastNameEl,
      colorEl,
      flowerEl,
      candyEl,
      eatEl,
      hobbiesEl,
      otherEl,
    }),

    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/home');
};

document
  .querySelector('#new-post-form')
  .addEventListener('submit', newFormHandler);

// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#project-name').value.trim();
//   const needed_funding = document.querySelector('#project-funding').value.trim();
//   const description = document.querySelector('#project-desc').value.trim();

//   if (name && needed_funding && description) {
//     const response = await fetch(`/api/projects`, {
//       method: 'POST',
//       body: JSON.stringify({ name, needed_funding, description }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to create project');
//     }
//   }
// };

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/projects/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };

// document
//   .querySelector('.new-project-form')
//   .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);
