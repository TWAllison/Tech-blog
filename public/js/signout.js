const signoutBtnHandler = async (event) => {
  const response = await fetch("/api/users/signout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/signin");
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector("#btn-signout")
  .addEventListener("click", signoutBtnHandler);
