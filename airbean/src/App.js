import "./App.css";
import { Routes, Route } from "react-router-dom";
import Menu from "./views/Menu";
import About from "./views/About";
import Landing from "./views/Landing";
import Status from "./views/Status";

import Error from "./views/Error";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar navlist={true} shopingcart={false} />
      <Routes>
        <Route path="/" element={<Menu />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="/status" element={<Status />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
