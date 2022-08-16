import "./App.css";

import Nav from "./components/Nav/Nav";
import Home from "./Pages/Home";
import Footer from "./components/Footer/Footer";
import RegisterForm from "./components/RegisterForm/RegisterForm";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <RegisterForm />
      <Footer />
    </div>
  );
}

export default App;
