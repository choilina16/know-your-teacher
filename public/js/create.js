const newFormHandler = async (event) => {
  event.preventDefault();

  const firstNameEl = document.querySelector('#teacher-first-name').value;
  const lastNameEl = document.querySelector('#teacher-last-name').value;
  const colorEl = document.querySelector('#teacher-color').value;
  const flowerEl = document.querySelector('#teacher-flower').value;
  const candyEl = document.querySelector('#teacher-candy').value;
  const eatEl = document.querySelector('#teacher-eat').value;
  const hobbiesEl = document.querySelector('#teacher-hobbies').value;
  const otherEl = document.querySelector('#teacher-other').value;

  console.log(firstNameEl);
  console.log(lastNameEl);
  console.log(colorEl);
  console.log(flowerEl);
  console.log(candyEl);
  console.log(eatEl);
  console.log(hobbiesEl);
  console.log(otherEl);

  await fetch("/api/teacher/", {
    method: "POST",
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

    headers: { "Content-Type": "application/json" },
  });

  document.location.replace("/");
};

document
  .querySelector("#new-post-form")
  .addEventListener("submit", newFormHandler);
