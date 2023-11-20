import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import {Nav} from './components/Nav.js';
import Createdesign_themes from "./components/DesignThemes/Createdesign_themes.js";
import Design_themes from "./components/DesignThemes/Design_themes.js";
import EditDesign from "./components/DesignThemes/EditDesign.js";
import Footer from './components/Footer';
import Contact from "./components/Contact.js";
import Team from "./components/Team.js";
import Clients from "./components/Clients.js";
import Vendor from "./components/Vendor.js";
import Home from "./components/Home.js";

function App() {
  return (
    <div class="container">
      <HashRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Createdesign_themes />} />
          <Route path="/create-design_themes" element={<Createdesign_themes />} />
          <Route path="/design_themes" element={<Design_themes/>} /> 
          <Route path="/edit-Design/:id" element={<EditDesign/>} />
        </Routes>
      </HashRouter>
      <Home/>
      <Vendor/>
      <Clients/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
    
  );
}

export default App;
