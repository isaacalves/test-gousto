const addCategories = value => {
  return {
    type: 'ADD_CATEGORIES',
    value
  };
};

const addProducts = value => {
  return {
    type: 'ADD_PRODUCTS',
    value
  };
};

const updateTextFilter = value => {
  return {
    type: 'UPDATE_TEXT_FILTER',
    value
  };
};
export { addCategories, addProducts, updateTextFilter };
