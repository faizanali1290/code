import logo from "./logo.svg";
import "./App.css";
import {
  addToDo,
  removeAllTodo,
  removetodo,
  doneToDo,
} from "./toolkit/slice/addtodo";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

function App() {
  const dispatch = useDispatch();
  const getvalue = useRef();
  const todolist = useSelector((store) => store.toDoItems);
  // console.log(todolist);

  function addtoItem() {
    dispatch(addToDo(getvalue.current.value));
    getvalue.current.value = "";
  }

  return (
    <div className="todowraper">
      <div className="addtodo">
        <input ref={getvalue} type="text" />
        <button className="btn" onClick={addtoItem}>
          add todo
        </button>
        <button className="btn" onClick={() => dispatch(removeAllTodo())}>
          remove all todo
        </button>
      </div>

      <div style={{ display: "flex", gap: "9px", flexDirection: "column" }}>
        {todolist &&
          todolist.map((element, index) => {
            return (
              <div style={{ display: "flex", gap: "9px" }}>
                <h1
                  style={{
                    textDecoration: element.isCompleted ? "line-through" : "",
                    color: element.isCompleted ? "green" : null,
                  }}
                >
                  {element.items}
                </h1>
                <button
                  className="btn"
                  onClick={() => dispatch(removetodo(index))}
                >
                  remove
                </button>
                <button
                  className="btn"
                  onClick={() => dispatch(doneToDo(index))}
                >
                  done
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
