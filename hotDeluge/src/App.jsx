import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Borja from "./pages/Borja/Borja";
import Home from "./pages/Home.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Footer from "./components/Footer/Footer";

function App() {
  console.log(open);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="member/:name" element={<Borja />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
