import { useState } from "react";

export default function Counter({ initial = 0 }) {
  const [count, setCount] = useState(initial);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div>
      <button onClick={increment}>+</button>
      <span data-testid="count">{count}</span>
      <button onClick={decrement} disabled={count === 0}>-</button>
    </div>
  );
}
