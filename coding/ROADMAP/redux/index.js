import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
// logger give all the gloable state
import thunk from "redux-thunk";
// this is used to to fetch data when we used this it give two thing in parameter one is global state and the other dispatch
import axios from "axios";
const apiData = "apiData";
const incr = "increment";
const des = "nice/descrement"; //here nice mean that sechma change that have name is nice
const getAccouUserFulFilled = "fullFilled";
const getAccouUserReject = "reject";

// create store
// json-server db.json

const store = createStore(
  combineReducers({
    decrement,
    increment,
    account: accountReducer,
  }),
  applyMiddleware(logger.default, thunk.default)
);

//

function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case getAccouUserFulFilled:
      console.log("full fill");
      return { amount: action.payload };
    case getAccouUserReject:
      console.log("full reject");

      return { ...state, error: action.error };
    default:
      return state;
  }
}
function getUserAccount(params) {
  return async function (dispatch, getstate) {
    try {
      const { data } = await axios.get("http://localhost:3000/account/2");
      dispatch(getAccountUserFulFilled(data));
    } catch (error) {
      dispatch(getAccountUserRejected(error.message));
    }
  };
}

function getAccountUserFulFilled(data) {
  return { type: getAccouUserFulFilled, payload: data };
}

function getAccountUserRejected(error) {
  return { type: getAccouUserReject, error };
}

// reducer
function increment(state = { amount: 1 }, action) {
  switch (action.type) {
    case incr:
      return { amount: state.amount + 1 };

    default:
      return state;
  }
}

function decrement(state = { amount: 100 }, action) {
  switch (action.type) {
    case des:
      return { amount: state.amount - 1 };
    default:
      return state;
      break;
  }
}

// subscribe run when the state can be change

// store.dispatch({ type: "increment" });

store.subscribe(() => {
  // to get globalstate
});

function incrementObj() {
  return { type: incr };
}
function descrementObj() {
  return { type: des };
}

// console.log(store.getState());

// setInterval(() => {
store.dispatch(descrementObj());
store.dispatch(incrementObj());
store.dispatch(getUserAccount());
// }, 300);

// process.env.NODE_ENV === "production"

// redux thang this middleware is used to when we fetch data from api and then pass on playload
// the three principal of state is
// single global store
// can not change the state directly or immutable Updates
// reducer should be pure mean no side effect
