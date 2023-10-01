import React from "react";
import Button from "shared/ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../modal/slice/CounterSlice";
import { getCounterValue } from "../modal/selector/getCounterValue/getCounterValue";

const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button onClick={increment} data-testid="increment">
        increment
      </Button>
      <Button onClick={decrement} data-testid="decrement">
        decriment
      </Button>
    </div>
  );
};

export default Counter;
