import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ResponsiveAppBar from "./pages/Nav";
import Ui from "./pages/Ui";
import Slide from "./pages/Slide";
import Animate from "./pages/Animate";
import Chart from "./pages/Chart";

function App() {
  return (
    /*     <BrowserRouter>
      <main>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/Ui" element={<Ui />} />
          <Route path="/Slide" element={<Slide />} />
          <Route path="/Animate" element={<Animate />} />
          <Route path="/Chart" element={<Chart />} />
        </Routes>
      </main>
    </BrowserRouter> */
    <></>
  );
}

export default App;
