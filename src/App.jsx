import React, { Suspense } from "react";
import Loader from "./components/Loader";

const HomePage = React.lazy(() => import("./HomePage"));

function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <HomePage />
      </Suspense>
    </div>
  );
}
export default App;
