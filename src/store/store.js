import { createStore } from "redux";

import { rootReducer } from "./root-reducer";

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// // import { createStore } from "redux";
// import { compose, createStore, applyMiddleware } from "redux";
// // import logger from "redux-logger";
// import { rootReducer } from "./root-reducer";

// const log1 = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }
//   console.log("type", action.type);
//   console.log("payload", action.payload);
//   console.log("currentState", store.getState());

//   next(action);
//   console.log("next state:", store.getState());
// };
// const middlewares = [log1];
// const composedEnhancers = compose(applyMiddleware(...middlewares));
// export const store = createStore(rootReducer, undefined, composedEnhancers);
// // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
