import axios from "axios";

import { pending, error, fullfill } from "../constant";
const apiData = () => {
  return async (dispatch, state) => {
    try {
      dispatch(apiPending());

      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      dispatch(apiFullfill(data));
    } catch (error) {
      dispatch(apiRejected(error.message));
    }
  };
};

function apiPending() {
  return {
    type: pending,
    pending: true,
  };
}
function apiFullfill(data) {
  return {
    type: fullfill,
    payload: data,
    pending: false,
  };
}
function apiRejected(erro) {
  return {
    type: error,
    error: erro,
    pending: false,
  };
}

export default apiData;
