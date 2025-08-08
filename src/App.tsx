import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToggleDemo } from "./components/ToggleDemo";

const queryClient = new QueryClient();

function App() {
  return (
    // To use this query client anywhere in the app through this context
    <QueryClientProvider client={queryClient}>
      <ToggleDemo />
    </QueryClientProvider>
  );
}

export default App;
