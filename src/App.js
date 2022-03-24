import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Favroite from "./pages/Favroite";

function App() {
  return (
    <div className="App">
      <Routes>
        ]<Route path="/" element={<HomePage />}></Route>]
        <Route path="/fav" element={<Favroite />}></Route>
      </Routes>
    </div>
  );
}

export default App;
