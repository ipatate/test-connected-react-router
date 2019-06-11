import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const initialState = {
  counter: {
    count: 0
  }
};

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      const newCount = state.count < 1 ? 0 : state.count - 1;
      return { ...state, count: newCount };
    default:
      return state;
  }
}

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    counter
  });

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(applyMiddleware(routerMiddleware(history)))
  );

  return store;
}
