import { createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [process.env.NODE_ENV !== "production" && thunk].filter(
  Boolean
);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));
// export const store = createStore(rootReducer, undefined, composedEnhancers);

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
// import { createStore } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import { rootReducer } from "./root-reducer";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["user"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(
//   persistedReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export const persistor = persistStore(store);
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
// // import { createStore } from "redux";
// import { compose, createStore, applyMiddleware } from "redux";
// // import logger from "redux-logger";
// import { rootReducer } from "./root-reducer";

// const logger = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }
//   console.log("type", action.type);
//   console.log("payload", action.payload);
//   console.log("currentState", store.getState());

//   next(action);
//   console.log("next state:", store.getState());
// };
// const middlewares = [process.env.NODE_ENV==="development/production" && logger].filter(Boolean);
//
// const composeEnhancer =
//   (process.env.NODE_ENV !== "/production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));
// export const store = createStore(rootReducer, undefined, composedEnhancers);
// // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
