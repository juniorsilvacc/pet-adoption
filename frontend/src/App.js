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
import CreatePet from "./components/pages/CreatePet";
import UpdatePet from "./components/pages/UpdatePet";
import PetDetails from "./components/pages/PetDetails";
import MyAdoptions from "./components/pages/MyAdoptions";

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
            <Route path="/users/profile" element={<Profile />}></Route>
            <Route path="/users/mypets" element={<MyPets />}></Route>
            <Route path="/pet/create" element={<CreatePet />}></Route>
            <Route path="/users/myadoptions" element={<MyAdoptions />}></Route>
            <Route path="/pet/update/:id" element={<UpdatePet />}></Route>
            <Route path="/pet/:id" element={<PetDetails />}></Route>
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
