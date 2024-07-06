"use client";

import { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(0);

  const handleDecrease = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };
  return (
    <div>
      <h1 className="text-7xl font-bold mb-4">{count}</h1>
      <button
        className="btn btn-primary uppercase"
        onClick={() => setCount(count + 1)}
      >
        increase
      </button>
      <button className="btn btn-error uppercase" onClick={handleDecrease}>
        decrease
      </button>
    </div>
  );
};
export default ClientPage;
