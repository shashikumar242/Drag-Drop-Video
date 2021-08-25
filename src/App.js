import "./App.css";
import Drag from "./components/drag";
import React, { useContext } from "react";
import { dragContext } from "./context/dragContext/dragContext";
const App = () => {
  const { dragState } = useContext(dragContext);
  return (
    <div className="App">
      <div className="main-div">
        <Drag areas={dragState.areas} videoToPlay={dragState.videoToPlay} />
      </div>
    </div>
  );
};

export default App;
