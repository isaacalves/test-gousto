const initState = {
  filterString: ''
};

const rootReducer = (state = initState, action) => {
  if (action.type === 'ON_FILTER_TEXT_UPDATE') {
    return {
      ...state,
      filterString: action.value
    };
  }
  return state;
};

export default rootReducer;
