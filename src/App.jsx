import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
library.add(faStopwatch);
import { useState } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";

function App() {
  const [counter, setCounter] = useState([0]);
  const addCounter = (sign) => {
    const newCounter = [...counter];
    if (sign === "+") {
      newCounter.push("0");
      setCounter(newCounter);
    } else if (sign === "-") {
      newCounter.pop();
      setCounter(newCounter);
    }

    console.log({ counter });
  };
  return (
    <>
      <Header />
      <main>
        <div>
          <button
            style={{ display: counter.length > 2 ? "none" : "flex" }}
            onClick={() => {
              addCounter("+");
            }}
          >
            Add counter
          </button>
        </div>
        <div className="counters">
          {counter.map((count, index) => {
            return (
              <Counter
                key={index}
                index={index}
                count={count}
                counter={counter}
                setCounter={setCounter}
              />
            );
          })}
        </div>
        <div>
          <button
            style={{ display: counter.length < 1 ? "none" : "flex" }}
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
