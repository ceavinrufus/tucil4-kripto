import { Routes, Route } from "react-router-dom";
import Database from "./pages/Database";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Decrypt from "./pages/Decrypt";
import CourseForm from "./pages/CourseForm";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/transcripts" Component={Database} />
        <Route path="/decrypt" Component={Decrypt} />
        <Route path="/input-data" Component={CourseForm} />
      </Routes>
    </div>
  );
}

export default App;
