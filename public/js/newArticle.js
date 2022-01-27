
const newArticleFormHandler = async (event) => {
  event.preventDefault();

  const articleTitle = document.getElementById('new-Article-Title').value.trim();
  const articleBody = document.getElementById('new-Article-Content').value.trim();

  if (articleTitle && articleBody) {
    const response = await fetch('/api/articles/', {
      method: 'POST',
      body: JSON.stringify({ articleTitle, articleBody }),
      headers: { 'content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.status.text);
    }
  }
};

const cancelButtonHandler = async (event) => {
  event.preventDefault();
  document.location.replace('/dashboard');
};

document
  .querySelector('.newArticleForm')
  .addEventListener('submit', newArticleFormHandler);

document
  .querySelector('.newArticleForm')
  .addEventListener('reset', cancelButtonHandler);
