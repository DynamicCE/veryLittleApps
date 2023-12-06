import { useState } from "react";

export default function BadassMood() {
  const [BadassMood, setBadassMod] = useState("BadASS");
  const MoodSwitcherBadass = () => {
    setBadassMod("BadassMood!");
  };
  return (
    <div>
      <p>{BadassMood}asdasd</p>
      <button onClick={MoodSwitcherBadass}>Click me to set BADASS MOOD!</button>
    </div>
  );
}
