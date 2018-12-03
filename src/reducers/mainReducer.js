const initialState = {
  searchFilter: '',
  categories: [],
  products: []
};

export default function(state = initialState, action = {}) {
  // console.log(' appReducer, action.type: ', action.type)
  switch (action.type) {
    case 'UPDATE_TEXT_FILTER':
      return {
        ...state,
        searchFilter: action.value
      };
    case 'ADD_CATEGORIES':
      return {
        ...state,
        categories: state.categories.concat(action.value)
      };
    case 'ADD_PRODUCTS':
      return {
        ...state,
        products: state.products.concat(action.value)
      };
    default:
      return state;
  }
}
