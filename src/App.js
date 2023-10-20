import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Switch, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar p1="Home" p2="About" />
      <Routes>
        <Route path="/" element={<TextForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
