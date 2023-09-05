import { lazy, Suspense } from "react";
import "./App.css";

// get component with lazy
const SecondComponent = lazy(() =>
  import("/public/my-ui-module.js").then((it) => ({
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
