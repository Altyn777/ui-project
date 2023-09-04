import { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";

// get component with lazy
const SecondComponent = lazy(() =>
  import("./my-ui-module.js").then((it) => ({ default: it.ReactComponent }))
);

function App() {
  const [count, setCount] = useState(0);
  const [FirstComponent, setFirstComponent] = useState(null);

  // get component with async await and state
  useEffect(() => {
    const fetchMyComponent = async () => {
      const { ViteComponent } = await import("./my-ui-module.js");
      setFirstComponent(() => ViteComponent);
    };

    fetchMyComponent();
  }, []);

  return (
    <>
      <div>
        {FirstComponent && <FirstComponent />}
        <Suspense fallback={<div>Loading...</div>}>
          <SecondComponent />
        </Suspense>
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
