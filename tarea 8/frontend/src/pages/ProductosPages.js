/*import { useState,useEffect } from "react";
import axios from 'axios';
import ProductoItems from "../components/producto/ProductoItems";
const ProductoPages=(props)=>{
    const [loading,setLoading]=useState(false);
    const [productos,setProductos]=useEffect([]);
    useEffect(()=>{
        const cargarProducto= async()=>{
            setLoading(true);
            const response= await axios.get('http://localhost:3000/api/productos');
            setProductos(response.data);
            setLoading(false);

        };
        cargarProducto();
    },[]);
    
    return(
        <section className="holder">
            <h2>Productos</h2>
            {
                loading ?(
                    <p>Cargando...
                    </p>
                ):(
                    productos.map(item=><ProductoItems key={item.id_p}
                        nombre={item.nombre_p} precio={item.precio}
                        imagen={item.imagen}/>

                    )
                )
            }

        </section>
    );
}

export default  ProductoPages;*/