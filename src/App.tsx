import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DemoReactQuery } from "./DemoReactQuery";

const queryClient = new QueryClient();

function App() {
  return (
    // To use this query client anywhere in the app through this context
    <QueryClientProvider client={queryClient}>
      <DemoReactQuery />
    </QueryClientProvider>
  );
}

export default App;
