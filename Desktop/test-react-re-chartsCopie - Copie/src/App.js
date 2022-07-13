import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Stats from "./page/Stats";

/**
 * @description Creation of a router
 * @returns Returns the paths of each page
 */
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="p12-sportsee/" element={<Home />} />
          <Route path="/statistiques/:userId" element={<Stats />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
