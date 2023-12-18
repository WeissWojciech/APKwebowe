import './App.css'
import {
    BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Homepage from "./pages/homepage";
import Aboutpage from "./pages/about";
import Navbar from "./components/Navbar";

function App() {

  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="about" element={<Aboutpage />} />
        </Routes>
    </Router>
  )
}

export default App
