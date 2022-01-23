const newCommentHandler = async (event) => {
  event.preventDefault();

  const article_id = document
    .getElementById("btn-comment")
    .getAttribute("data-id");
  const content = document.getElementById("newCommentContent").value.trim();

  if (content) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ content, article_id }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

const updateBtnHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/comments/${id}`, {
      method: "GET",
    });
    if (response.ok) {
      document.location.replace(`/updateComment/${id}`);
    } else {
      alert("You may not update someone elses comments");
    }
  } else {
    alert("Update button did not have a data-id");
  }
};

const deleteBtnHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert("You may only delete your own comments.");
    }
  } else {
    alert("Delete button did not have a data-id");
  }
};

const cancelBtnHandler = async () => {
  document.location.replace("/viewArticle");
};

document
  .querySelector(".newCommentForm")
  .addEventListener("submit", newCommentHandler);

document
  .querySelector("#btn-cancel")
  .addEventListener("reset", cancelBtnHandler);

document
  .querySelectorAll(".btn-update")
  .forEach((btn) => btn.addEventListener("click", updateBtnHandler));

document
  .querySelectorAll(".btn-delete")
  .forEach((btn) => btn.addEventListener("click", deleteBtnHandler));
