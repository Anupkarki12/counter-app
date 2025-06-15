import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState('');

  const increment = () => {
    setCount(prev => prev + 1);
    setError('');
  };

  const decrement = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
      setError('');
    } else {
      setError('Count cannot be less than zero!');
    }
  };

  const reset = () => {
    setCount(0);
    setError('');
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4">Counter App</h1>
        <div className="text-4xl font-semibold text-blue-600 mb-4">{count}</div>
        
        <div className="flex justify-center gap-4 mb-4 flex-wrap">
          <button
            onClick={decrement}
            className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition duration-200"
          >
            Decrement
          </button>
          <button
            onClick={reset}
            className="bg-yellow-500 text-white px-4 py-2 rounded-xl hover:bg-yellow-600 transition duration-200"
          >
            Reset
          </button>
          <button
            onClick={increment}
            className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition duration-200"
          >
            Increment
          </button>
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default CounterApp;
