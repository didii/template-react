import { useCallback, useState } from 'react';

export function App() {
  const [count, setCount] = useState(0);
  const incrementCount = useCallback(() => {
    setCount((x) => x + 1);
  }, []);

  return (
    <div>
      <h1>This is the app</h1>
      <div>
        <button onClick={incrementCount}>Count = {count}</button>
      </div>
    </div>
  );
}
