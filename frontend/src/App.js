import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Container from "./components/layouts/Container";
import Message from "./components/layouts/Message";

// pages
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import MyPets from "./components/pages/MyPets";

// Context
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Message />
        <Container>
          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/login" element={<Login />}></Route>

            <Route path="/register" element={<Register />}></Route>

            <Route path="/users/mypets" element={<MyPets />}></Route>

            <Route path="/users/profile" element={<Profile />}></Route>
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
