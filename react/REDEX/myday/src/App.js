import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrementObj, incrementObje } from "./redux/action/action";
import apiData from "./redux/action/actionFetch";

function App() {
  const inc = useSelector((store) => store?.AccountReducer?.amount);
  const apidata = useSelector((store) => store.fetchData);
  const apidat = useSelector((store) => store);
  console.log(apidata?.fetchData?.pending);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{inc}</h1>

      <button onClick={() => dispatch(decrementObj())}>increment</button>
      <button onClick={() => dispatch(incrementObje())}>increment</button>
      <button onClick={() => dispatch(apiData())}>api data</button>

      <div>
        {apidata?.pending ? (
          <>
            <p>loadding</p>
          </>
        ) : (
          <>
            <h1>{apidata?.data?.userId}</h1>
            <h2>{apidata?.data?.title}</h2>
            <h3>{apidata?.data?.completed}</h3>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
// if we we want to change the state then we called the dispatch and inside dispatch we can sent action  jo jata ha reducer ka pass if the middleware not exist 
// we can get state using getState