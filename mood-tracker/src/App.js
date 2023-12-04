import "./App.css";
import { useState } from "react";

function App() {
  const [Mood, setMood] = useState("MAIN MOOD IS NORMAL!");
  const MoodSwitcherFunc = () => {
    setMood("normal mode");
  };
  return (
    <div className="App">
      <p>there is somewhere will be a mooooood {"<3"}</p>
      <p>{Mood}</p>
      <button onClick={MoodSwitcherFunc}>CLICK ME TO CHANGE THE MOOD</button>
    </div>
  );
}

export default App;
