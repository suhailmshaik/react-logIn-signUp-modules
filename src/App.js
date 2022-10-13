import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Login />
      <Signup /> */}

      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/LogIn" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
