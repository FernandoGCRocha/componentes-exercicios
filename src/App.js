import React from "react";

import CardVideo from "./componente/CardVideo"
import Menu from "./componente/Menu";



import "./styles.css";

export default function App() {
  
  
  const card = {
    imagem: "https://picsum.photos/400/400?a=1 ",
    nome: "Fernando Rocha",
    titulo: "Titulo 1"
    
    
  }
  const card2 = {
    imagem: "https://picsum.photos/400/400?a=2 ",
    nome: "Bianca Rocha",
    titulo: "Titulo 2"
  }
  const card3 = {
    imagem: "https://picsum.photos/400/400?a=3 ",
    nome: "Ana Rocha",
    titulo: "Titulo 3"
  }
  const card4 = {
    imagem: "https://picsum.photos/400/400?a=4 ",
    nome: "Fred Rocha",
    titulo: "Titulo 4"
  }
  const card5 = {
    imagem: "https://picsum.photos/400/400?a=5 ",
    nome: "Felipe Rocha",
    titulo: "Titulo 5"
  }
  const card6 = {
    imagem: "https://picsum.photos/400/400?a=6 ",
    nome: "Rubens Rocha",
    titulo: "Titulo 6"
  }
  const card7 = {
    imagem: "https://picsum.photos/400/400?a=7 ",
    nome: "Fernando Rocha",
    titulo: "Titulo 7"
  }
  const card8 = {
    imagem: "https://picsum.photos/400/400?a=8 ",
    nome: "Fernando Rocha",
    titulo: "Titulo 8"
  }



  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <Menu />
          </nav>
          <section className="painel-de-videos">
            <CardVideo card={card} />
            <CardVideo card={card2} />
            <CardVideo card={card3} />
            <CardVideo card={card4} />
            <CardVideo card={card5} />
            <CardVideo card={card6} />
            <CardVideo card={card7} />
            <CardVideo card={card8} />


          </section>



        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
