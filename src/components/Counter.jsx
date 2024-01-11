const Counter = (props) => {
  const newCounter = [...props.counter.slice(0, props.index)];
  const changeCount = (sign) => {
    if (sign === "-") {
      newCounter.push(props.count - 1);
      newCounter.push([...props.counter.slice(props.index + 1)]);
      props.setCounter(newCounter);
      console.log(props.counter[props.index]);
    } else if (sign === "+") {
      newCounter.push(props.count + 1);
      newCounter.push([...props.counter.slice(props.index + 1)]);
      props.setCounter(newCounter);
      console.log(props.counter[props.index]);
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
        <button>Reset</button>
      </div>
    </div>
  );
};
export default Counter;
