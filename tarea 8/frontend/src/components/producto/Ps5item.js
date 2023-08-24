import React from "react";

const Ps5item=(props)=>{
    const{id_p,nombre_p,precio,imagen}=props;
    return(
        <div className="productos">
            <h1>{id_p}</h1>
            <h2>{nombre_p}</h2>
            <h2>{precio}</h2>
            <img src={imagen}></img>
            <div dangerouslySetInnerHTML={{__html: body}}/>
            <hr/>
        </div>
    );
    }


export default Ps5item;