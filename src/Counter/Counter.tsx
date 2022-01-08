import React, { useState } from "react";
import Button from "./Button";
import Heading from "./Heading";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <Heading text="Counter" />
      <Heading text={count} />
      <div className="button">
        <Button text="ADD" onClick={() => setCount(count + 1)} />
        <Button text="REDUCE" onClick={() => setCount(count - 1)} />
      </div>
    </div>
  );
};

export default Counter;
