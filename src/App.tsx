import { useState, useEffect } from "react";

import reactLogo from "./assets/react.svg";
import "./App.css";

// import { MyComponent } from "./my-ui-module.js";

function App() {
  const [count, setCount] = useState(0);
  const [SecondComponent, setSecondComponent] = useState(null);
  useEffect(() => {
    const fetchMyComponent = async () => {
      const { ViteComponent } = await import("./my-ui-module.js");
      setSecondComponent(() => ViteComponent);
    };

    fetchMyComponent();
  }, []);

  return (
    <>
      <div>
        {SecondComponent && <SecondComponent />}
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
