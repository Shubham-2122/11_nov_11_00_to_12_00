import React from "react";
import Counter from "./features/counter/Counter";
import Count from "./features/counter/Count";
import Todolist from "./features/Todo/Todolist";
import Addtodo from "./features/Todo/Addtodo";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Count /> */}

      <Addtodo />

      <Todolist />
    </div>
  );
}

export default App;
