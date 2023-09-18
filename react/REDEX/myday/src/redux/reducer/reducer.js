import { increment, decrement, fullfill, pending, error } from "../constant";
const AccountReducer = (state = { amount: 1 }, action) => {
  switch (action.type) {
    case increment:
      return { amount: state.amount + 1 };
    case decrement:
      if (state.amount == 0) {
        return state
      }
      return { amount: state.amount - 1 };

    default:
      return state;
  }
};

const fetchData = (state = { data: null }, action) => {
  switch (action.type) {
    case fullfill:
      return { data: action.payload, pending: action.pending };
    case pending:
      return { ...state, pending: action.pending };
    case error:
      return { error: action.error, pending: action.pending };
    default:
      return state;
  }
};

export { AccountReducer, fetchData };
