const updateCommentHandler = async (event) => {
  event.preventDefault();

  if (id && commentBody) {
    const response = await fetch(`/api/comments/${id}`, {
      method: "PUT",
      body: JSON.stringify({ commentBody }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to update article.");
    }
  } else {
    alert("Content field must not be blank!");
  }
};

const cancelBtnHandler = async () => { window.history.back();}

document
.querySelector('.updateCommentForm')
.addEventListener('submit', updateCommentHandler);
document
.querySelector('updateCommentForm')
.addEventListener('reset', cancelBtnHandler)