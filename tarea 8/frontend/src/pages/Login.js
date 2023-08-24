import { useNavigate } from 'react-router-dom';
import React,{ useState } from 'react';
const Login=(props)=>{ 
  const navigate=useNavigate();
  const[confirm,setCofirm]=useState(false);
  const handleOnChange=(e)=>{
    e.preventDefault();
    const value= e.target.value;
    getSystemErrorName(value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    setCofirm(true);
    navigate('/Cliente')
  }



  return(
     
    <main class="holder">
         <form onSubmit={handleSubmit}>
          <input type="text" id="inputUser" placeholder="Usuario" name="usuario"/>
          <input type="password" id="inputPassword" placeholder="password" name="password"></input>
          <button type="submit">Ingresar</button>
         </form>
    </main>
    )
}
 
export default Login;