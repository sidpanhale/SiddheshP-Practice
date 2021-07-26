import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

// React-redux METHOD :

// import { createStore } from "redux";

// const initialState = { counter: 0, showCounter: true };

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }

//   if (action.type === "decrememt") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }

//   if (action.type === "increaseBy5") {
//     return {
//       counter: state.counter + action.payload,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

// export default store;
