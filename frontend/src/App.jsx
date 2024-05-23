import { Routes, Route } from "react-router-dom";
import Database from "./pages/Database";
import Home from "./pages/Home";
import InputData from "./pages/InputData";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/input-data" Component={InputData} />
        <Route path="/transcripts" Component={Database} />
      </Routes>
    </div>
  );
}

export default App;
