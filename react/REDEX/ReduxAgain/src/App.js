import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment, decrement } from "./reduxToolkit/slice/incrementSlice";
import { incrementByTwo } from "./reduxToolkit/reducer";
import fetchdat from "./reduxToolkit/asyncthunk";
import {
  useAddacountMutation,
  useUserAccountQuery,
} from "./reduxToolkit/api/rtkquerry";

function App() {
  // const rtk=
  const value = useSelector((store) => store.Incrementreducer);
  const valueTwo = useSelector((store) => store);
  const apidata = useSelector((store) => store.api);
  const [addData, { isLoading: loading, isError: error }] =
    useAddacountMutation();
  const dispatch = useDispatch();

  const { data, isError, isLoading } = useUserAccountQuery();
  return (
    <div className="App">
      <h1>{value.amount}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <h1>this is a coustome reducer and action</h1>
      <h1>{valueTwo.coustomeReducer.value}</h1>
      <button onClick={() => dispatch(incrementByTwo())}>addTwo</button>
      <button onClick={() => dispatch(fetchdat())}>createAsyncThunk</button>
      {apidata.pending ? (
        <p>loading</p>
      ) : (
        <div>
          <h2>{apidata?.value?.id}</h2>
          <h2>{apidata?.value?.title}</h2>
          <h2>{apidata?.value?.completed}</h2>
        </div>
      )}
      <h1>rtk query</h1>
      <h1>{isLoading && isLoading ? "loading" : ""}</h1>
      <div>
        <h1>{data?.id}</h1>
        <h2>{data?.title}</h2>
        <h2>{data?.completed}</h2>
      </div>
      <button>rtk query</button>
      <button onClick={() => addData()}>post rtk</button>
      post cheick
      <h2>{loading ? "post loadding" : ""}</h2>
    </div>
  );
}

export default App;
// if we we want to change the state then we called the dispatch and inside dispatch we can sent action  jo jata ha reducer ka pass if the middleware not exist
// we can get state using getState

// slice===reducer&&action
// name property decide action name //to give action name
//
