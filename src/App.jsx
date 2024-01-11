import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
library.add(faStopwatch);
import { useState } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";

function App() {
  const [counter, setCounter] = useState([0]);
  const [index, setIndex] = useState(1);
  const addCounter = (sign) => {
    const newCounter = [...counter];
    if (sign === "+") {
      newCounter.push({ index });
      setCounter(newCounter);
      setIndex(index + 1);
    } else if (sign === "-") {
      newCounter.pop();
      setCounter(newCounter);
      setIndex(index - 1);
    }

    console.log({ counter });
  };
  return (
    <>
      <Header />
      <main>
        <div>
          <button
            style={{ display: counter > 2 ? "none" : "flex" }}
            onClick={() => {
              addCounter("+");
            }}
          >
            Add counter
          </button>
        </div>
        <div className="counters">
          {counter.map((index) => {
            return <Counter key={index} />;
          })}
        </div>
        <div>
          <button
            style={{ display: counter < 1 ? "none" : "flex" }}
            onClick={() => {
              addCounter("-");
            }}
          >
            Remove counter
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
