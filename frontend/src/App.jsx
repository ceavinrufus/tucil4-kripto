import { Routes, Route } from "react-router-dom";
import Database from "./pages/Database";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/database" Component={Database} />
        <Route path="/" Component={Home} />
      </Routes>
    </div>
  );
}

export default App;
