const updateArticleFormHandler = async (event) => {
  event.preventDefault();

  const id = document.getElementById('btn-save').getAttribute('data-id');
  const articleTitle = document.getElementById('ArticleTitle').value.trim();
  const articleContent = document.getElementById('ArticleContent').value.trim();

  if (id && articleTitle && articleContent) {
    const response = await fetch('/api/articles/', {
      method: 'POST',
      body: JSON.stringify({ articleTitle, articleContent }),
      headers: { 'content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('update failed');
    }
  } else {
    alert('fields must not be blank');
  }
};

const cancelButtonHandler = async (event) => {
    document.location.replace('/dashboard');
};

document
  .querySelector('.updateArticleForm')
  .addEventListener('submit', updateArticleFormHandler);

document
  .querySelector('.updateArticleForm')
  .addEventListener('reset', cancelButtonHandler);
