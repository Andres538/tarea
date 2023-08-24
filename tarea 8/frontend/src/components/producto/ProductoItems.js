import React from "react";

const ProductoItems=(props)=>{
    const{id_p,nombre_p,precio,imagen}=props;
    return(
        <div className="productos">
            <h1>{id_p}</h1>
            <h2>{nombre_p}</h2>
            <h2>{precio}</h2>
            <h2>{ingreso}</h2>
            <img src={imagen}></img>
            <div dangerouslySetInnerHTML={{__html:
            body}}/>
            <hr/>
        </div>
    );
    }


export default ProductoItems;