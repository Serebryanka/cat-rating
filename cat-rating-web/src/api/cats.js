export const get = async (id) => {
    const response = await fetch(`http://localhost:8000/cats/${id}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const cat = await response.json();
    return cat;
};

export const list = async () => {
    const response = await fetch('http://localhost:8000/cats');
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const cats = await response.json();
    return cats;
};

export const create = async (item) => {
  const response = await fetch('http://localhost:8000/cats', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const cat = await response.json();
  return cat;
};

export const remove = async (id) => {
  const address = `http://localhost:8000/cats/${id}`;
  const response = await fetch(address, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const result = await response.json();
  return !!result;
};

export const like = async (id, value) => {
  const address = `http://localhost:8000/cats/${id}/like?value=${value}`;
  const response = await fetch(address);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const result = await response.json();
  return !!result;
};
