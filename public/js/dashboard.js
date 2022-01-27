const addButtonHandler = async (event) => {
  document.location.replace('dashboard/newArticle');
};

const updateButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    document.location.replace(`/dashboard/updateArticle/${id}`);
  } else {
    alert("data-id not found");
  }
};

const deleteButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/articles/${id}`, { method: 'DELETE' });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert("failed to delete article!");
    }
  } else {
    alert("article data-id not found");
  }
};

document.querySelector('#btn-add').addEventListener('click', addButtonHandler);
document
  .querySelector('btn-update')
  .foreach((btn) => btn.addEventListener('click', updateButtonHandler));
document
  .querySelector('btn-delete')
  .foreach((btn) => btn.addEventListener("click", deleteButtonHandler));
