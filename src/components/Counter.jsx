const Counter = (props) => {
  const newCounter = [...props.counter];
  const changeCount = (sign) => {
    if (sign === "-") {
      newCounter[props.index]--;
      props.setCounter(newCounter);
    } else if (sign === "+") {
      newCounter[props.index]++;
      props.setCounter(newCounter);
    } else if (sign === 0) {
      newCounter[props.index] = 0;
      props.setCounter(newCounter);
    }
  };
  return (
    <div className="count">
      <div className="changeCount">
        <div>
          <button
            style={{
              display: props.count < 1 ? "none" : "flex",
            }}
            onClick={() => {
              changeCount("-");
            }}
          >
            -
          </button>
        </div>
        <div>{props.count}</div>
        <div>
          <button
            style={{
              display: props.count > 9 ? "none" : "flex",
            }}
            onClick={() => {
              changeCount("+");
            }}
          >
            +
          </button>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            changeCount(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
export default Counter;
