import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const changeCount = (sign) => {
    if (sign === "-") {
      setCount(count - 1);
    } else if (sign === "+") {
      setCount(count + 1);
    }
  };
  return (
    <div className="count">
      <div className="changeCount">
        <div>
          <button
            style={{ display: count < 1 ? "none" : "flex" }}
            onClick={() => {
              changeCount("-");
            }}
          >
            -
          </button>
        </div>
        <div>{count}</div>
        <div>
          <button
            style={{ display: count > 9 ? "none" : "flex" }}
            onClick={() => {
              changeCount("+");
            }}
          >
            +
          </button>
        </div>
      </div>
      <div>
        <button>Reset</button>
      </div>
    </div>
  );
};
export default Counter;
