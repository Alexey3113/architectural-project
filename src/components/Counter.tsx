import { useState } from "react";

import classes from "./Counter.module.scss";

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleAddCount = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div className={classes.green}>
      <button className={"classes"} onClick={handleAddCount}>
        {counter}
      </button>
    </div>
  );
};
