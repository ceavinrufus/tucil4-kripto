import { Routes, Route } from "react-router-dom";
import Database from "./pages/Database";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/database" Component={Database} />
      </Routes>
    </div>
  );
}

export default App;
