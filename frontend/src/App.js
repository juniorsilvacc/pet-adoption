import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// imports
import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/Register";
import Home from "./components/pages/Auth/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/register" element={<Register />}></Route>

        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
