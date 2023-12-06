import "./App.css";
import { useState } from "react";
import BadassMood from "./components/BadassMod";
function App() {
  const [Mood, setMood] = useState("MAIN MOOD IS NORMAL!");
  const MoodSwitcherFunc = () => {
    setMood("normal mode");
  };
  const MoodSwitcherFunc2 = () => {
    setMood(BadassMood);
  };
  return (
    <div className="App">
      <p>there is somewhere will be a mooooood {"<3"}</p>
      <p>{Mood}</p>
      <button onClick={MoodSwitcherFunc}>Click me to set normal mood!</button>

      <BadassMood />
    </div>
  );
}

export default App;
