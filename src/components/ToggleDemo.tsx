import { useState } from "react";
import { TodoReactQuery } from "./TodoReactQuery";

export const ToggleDemo = () => {
  //Added for component mount & unmount
  const [showDemo, setShowDemo] = useState(true);
  return (
    <div className="app-container">
      <div className="button-wrapper">
        <button onClick={() => setShowDemo(!showDemo)}>Toggle Todos</button>
      </div>
      {showDemo && <TodoReactQuery />}
    </div>
  );
};
