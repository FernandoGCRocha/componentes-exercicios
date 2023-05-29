import React from "react";
import user from "../img/user.jpg"

const InfoUsuario=(props)=>{
    


    return(
        <div className="user">
            <p>Autor: {props.nome}</p>
            <img className="foto" src={user} alt="Foto user" />


        </div>


    );

};

export default InfoUsuario;