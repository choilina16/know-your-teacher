const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/login");
  } else {
    // alert(response.statusText); **SS 5/4 replaced with other alert to test
    alert("Failed to log in");
  }
};

document.querySelector("#logout").addEventListener("click", logout);
