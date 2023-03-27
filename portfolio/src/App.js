import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
//import DataContextProvider from "./components/body/projets/DataContext";

//import LoopingAudio from "./components/audio/LoopingAudio";

function App() {

  return (
    <div className="App">    
      {/* <DataContextProvider> */}
        {/* <LoopingAudio src="sound/something-about-you-marilyn-ford.ogg" /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Accueil />} />
          </Routes>
        </BrowserRouter>
      {/* </DataContextProvider> */}
    </div>
  );
}

export default App;
