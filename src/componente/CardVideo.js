import React from "react";
import InfoUsuario from "./InfoUsuario"


const CardVideo =(props)=>{
  const titulo = "Título do vídeo";
  

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
    
  return(
    <div>
        
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <img src={props.card.imagem} alt="" />
              <h4>{props.card.titulo}</h4>
              <InfoUsuario nome={props.card.nome} user={props.user}/>
            </div>
            
          
    </div>

  )
};

export default CardVideo;