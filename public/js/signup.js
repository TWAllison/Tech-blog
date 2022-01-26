const signupHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

const signinBtnHandler = async () => {
  document.location.replace("/signin");
};

document.querySelector(".signupForm").addEventListener("submit", signupHandler);
document
  .querySelector("#btn-signin")
  .addEventListener("submit", signinBtnHandler);
