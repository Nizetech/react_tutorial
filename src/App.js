import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    if (count < 10) setCount(count + 1);
    console.log(count);
  }

  function handleSub() {
    if (count > 0) setCount(count - 1);
    console.log(count);
  }

  function handleReset() {
    setCount(0);
    console.log(count);
  }
  return (
    <div className="App">
      <div className="box">
        <p> {count} </p>{" "}
        <button className="add" onClick={handleAdd}>
          ADD{" "}
        </button>{" "}
        <button className="sub" onClick={handleSub}>
          SUB{" "}
        </button>{" "}
        <button className="reset" onClick={handleReset}>
          SUB{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
