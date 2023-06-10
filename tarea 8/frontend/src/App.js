import logo from './logo.svg';
import{BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Inicio from './pages/Inicio';
import Ps5 from './pages/Ps5';
import Xboxx from './pages/Xboxx';
import Nosotros from './pages/Nosotros';
import Contactenos from './pages/Contactenos';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/Ps5" element={<Ps5/>}/>
      <Route path="/Xbox X" element={<Xboxx/>}/>
      <Route path="/Nosotros" element={<Nosotros/>}/>
      <Route path="/Contactenos" element={<Contactenos/>}/>
      </Routes> 
      <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
