import "./App.css";

import Nav from "./components/Nav/Nav";
import Home from "./Pages/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* <header> */}
      <Nav />
      {/* </header> */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
