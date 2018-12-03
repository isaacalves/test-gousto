import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import mainReducer from './mainReducer';

export default function(history) {
  return combineReducers({
    main: mainReducer,
    router: connectRouter(history)
  });
}
