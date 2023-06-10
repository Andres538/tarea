import{Link} from "react-router-dom";
const Footer = (props)=>{
    return(
        <footer><h3>Mas informacion</h3>
      <ul>
         <li><Link to="/Contactenos">Contactenos</Link></li>
         <li><Link to="/Nosotros">Nosotros</Link></li>
         <li><Link to="/Sucursales">Sucursales</Link></li>
      </ul>
      <p>Diseñado por Andres Ribet - &copy; 2023 año</p></footer>
    );
}

export default Footer;