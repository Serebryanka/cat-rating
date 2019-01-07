export const list = async (catID) => {
    const response = await fetch(`http://localhost:8000/comments?catID=${catID}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const comments = await response.json();
    return comments;
};

export const create = async (item) => {
  const response = await fetch('http://localhost:8000/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const comment = await response.json();
  return comment;
};

export const remove = async (id) => {
  const address = `http://localhost:8000/comments/${id}`;
  const response = await fetch(address, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const result = await response.json();
  return !!result;
};
