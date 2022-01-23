const updateArticleHandler = async (event) => {
  event.preventDefault();

  const id = document.getElementById("btn-save").getAttribute("data-id");
  const articleTitle = document.getElementById("ArticleTitle").value.trim();
  const articleBody = document.getElementById("ArticleContent").value.trim();

  if (id && articleTitle && articleBody) {
    const response = await fetch("/api/articles/", {
      method: "POST",
      body: JSON.stringify({ articleTitle, articleBody }),
      headers: { "content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("update failed");
    }
  } else {
    alert("fields must not be blank");
  }
};

const cancelBtnHandler = async (event) => {
    document.location.replace("/dashboard");
};

document
  .querySelector(".updateArticleForm")
  .addEventListener("submit", updateArticleHandler);

document
  .querySelector(".updateArticleForm")
  .addEventListener("reset", cancelBtnHandler);
