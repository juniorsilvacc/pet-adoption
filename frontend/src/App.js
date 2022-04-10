import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Container from "./components/layouts/Container";

// pages
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/register" element={<Register />}></Route>

          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
