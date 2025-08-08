import { useState } from "react";
import { DemoReactQuery } from "./DemoReactQuery";

export const ToggleDemo = () => {
  //Added for component mount & unmount
  const [showDemo, setShowDemo] = useState(true);
  return (
    <div className="app-container">
      <div className="button-wrapper">
        <button onClick={() => setShowDemo(!showDemo)}>Toggle Demo</button>
      </div>
      {showDemo && <DemoReactQuery />}
    </div>
  );
};
