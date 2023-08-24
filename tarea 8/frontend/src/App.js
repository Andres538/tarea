import logo from './logo.svg';
import{BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Ps5 from './pages/Ps5';
import Xboxx from './pages/Xboxx';
import Nosotros from './pages/Nosotros';
import Contactenos from './pages/Contactenos';
import Cliente from './pages/Cliente';
import Switch from './pages/Switch';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Switch" element={<Switch/>}/>
      <Route path="/Cliente" element={<Cliente/>}/>
      <Route path="/Ps5" element={<Ps5/>}/>
      <Route path="/Xbox X" element={<Xboxx/>}/>
      <Route path="/Nosotros" element={<Nosotros/>}/>
      <Route path="/Contactenos" element={<Contactenos/>}/>
      </Routes> 

      </BrowserRouter>
    </div>
  );
}

export default App;
