import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DemoReactQuery } from "./DemoReactQuery";
import { useState } from "react";

const queryClient = new QueryClient();

function App() {
  //Added for component mount & unmount
  const [showDemo, setShowDemo] = useState(true);
  return (
    // To use this query client anywhere in the app through this context
    <QueryClientProvider client={queryClient}>
      <div className="button-wrapper">
        <button onClick={() => setShowDemo(!showDemo)}>Toggle Demo</button>
      </div>
      {showDemo && <DemoReactQuery />}
    </QueryClientProvider>
  );
}

export default App;
