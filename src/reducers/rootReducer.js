import { combineReducer } from 'redux';

const initState = {
  filterString: '',
  categories: [],
  products: []
};

const otherReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case 'UPDATE_TEXT_FILTER':
      return {
        ...state,
        filterString: action.value
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
};

const rootReducer = combineReducers({
  otherReducer,
  routeReducer
});

const routeReducer = (state, action) => state;

export default rootReducer;
