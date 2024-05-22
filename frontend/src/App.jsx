import { Routes, Route } from "react-router-dom";
import Database from "./pages/Database";
import Transcript from "./pages/Transcript";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/database" Component={Database} />
        <Route path="/transcript" Component={Transcript} />
      </Routes>
    </div>
  );
}

export default App;
