import{Link} from "react-router-dom";
const Nav = (props)=>{
    return(
        <nav>
           <div>
           <ul>
         <li><Link to="/">Inicio</Link></li>
         <li><Link to="/Ps5">Ps5</Link></li>
         <li><Link to="/Xbox X">Xbox X</Link></li>
         <li><Link to="/Switch">Switch</Link></li>
         
            </ul>
            </div> 
        </nav>
    );
}

export default Nav;