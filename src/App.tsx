import { lazy, Suspense } from "react";
import "./App.css";

const SecondComponent = lazy(() =>
  import("my-ui-module.js").then((it) => ({
    default: it.MyComponent,
  }))
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SecondComponent />
    </Suspense>
  );
}

export default App;
