import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Home from "./Pages/Home";
import Footer from "./components/Footer/Footer";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Error from "./Pages/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
