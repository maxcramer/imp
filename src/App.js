import "./App.css";

import Nav from "./components/Nav/Nav";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      {/* <header> */}
      <Nav />
      {/* </header> */}
      <Home />
    </div>
  );
}

export default App;
