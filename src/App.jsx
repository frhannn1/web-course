import { Route, Routes } from "react-router-dom";
import Navbar from './components/navbar.jsx';

import HomePage from './pages/HomePage';
import KelasPage from "./pages/KelasPage";
import FaqPage from "./pages/FaqPage";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
    <Route path="/" Component={HomePage}/>
    <Route path="/kelas" Component={KelasPage}/>
    <Route path="/faq" Component={FaqPage}/>
      </Routes>

    </div>
  );
}

export default App;
