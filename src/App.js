import React, { useState } from "react";
import "./index.css";
import TodoInput from "./components/TodoInput";
import Todolist from "./components/TodoList";
function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== "") setListTodo([...listTodo, inputText]);
  };
  return (
    <div className="main">
      <div className="main-container">
        <div className="center-container">
          <TodoInput addList={addList} />
          <h1 className="app-heading">TODO</h1>
          <hr />
          {listTodo.map((listItem, i) => {
            return <Todolist key={i} index={i} item={listItem} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
