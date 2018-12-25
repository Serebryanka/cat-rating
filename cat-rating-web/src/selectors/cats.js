export const getCatsBySearchFilter = (store, searchText) => {
  const cats = store.cats.items;
  return cats.filter(cat => cat.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
};

export const getFilteredAndSortedCats = (store, sortField, searchText) => {
  const cats = store.cats.items;
  const filteredCats = cats.filter(cat => cat.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  filteredCats.sort((catA, catB) => {
    if (sortField === 'Name') {
      if (catA.name.toLowerCase() < catB.name.toLowerCase())
        return -1;
      if (catA.name.toLowerCase() > catB.name.toLowerCase())
        return 1;
      return 0;
    } else if (sortField === 'Like') {
      if (catA.like < catB.like)
        return -1;
      if (catA.like > catB.like)
        return 1;
      return 0;
    }
    return 0;
  });
  return filteredCats;
};
