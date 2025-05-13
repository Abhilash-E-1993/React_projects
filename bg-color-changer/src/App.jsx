import { useState } from 'react';

function App() {
  const [color, setColor] = useState("cyan");

  return (
    <>
      <div
        className="h-screen w-screen flex flex-col items-center justify-center transition-colors duration-500"
        style={{ backgroundColor: color }}
      >
        <h1 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">
          🎨 Background Color Changer
        </h1>

        <p className="text-white text-lg mb-8 px-4 py-2 bg-black/40 rounded shadow-lg">
          Current color: <span className="font-semibold">{color}</span>
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          {["red", "blue", "green", "yellow", "purple"].map((clr) => (
            <button
              key={clr}
              onClick={() => setColor(clr)}
              className={`px-6 py-2 rounded font-semibold text-white shadow-md hover:shadow-lg transition-transform transform hover:scale-105`}
              style={{ background: clr }}
            >
              {clr.charAt(0).toUpperCase() + clr.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
