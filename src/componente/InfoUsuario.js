import React from "react";
import user from "../img/user.jpg"

const InfoUsuario=()=>{
    const nome="Fernando Rocha";


    return(
        <div className="user">
            <p>Autor: {nome}</p>
            <img className="foto" src={user} alt="Foto user" />


        </div>


    );

};

export default InfoUsuario;