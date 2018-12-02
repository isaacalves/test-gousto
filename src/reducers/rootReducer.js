import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const initState = {
  filterString: '',
  categories: [],
  products: []
};

const appReducer = (state = initState, action = {}) => {
  // console.log(' appReducer, action.type: ', action.type)
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

const rootReducer = history =>
  combineReducers({
    app: appReducer,
    router: connectRouter(history)
  });

export default rootReducer;
