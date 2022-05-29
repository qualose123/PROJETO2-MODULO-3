import React, { useState } from "react"; // importando o useState pra gerenciar o estado da nossa aplicação
import "./PaletaLista.css";
import PaletaListaItem from "components/PaletaListaItem/PaletaListaItem";
import { paletas } from "mocks/paletas.js";

console.log("paletas", paletas);


function PaletaLista() {
  const [paletaSelecionadas, setPaletaSelecionadas] = useState({});


  function adicionarItem(index) {
 
    const initialValue = Number(paletaSelecionadas[index] || 0);
  
    const paleta = {
      [index]: initialValue + 1,
    };

    setPaletaSelecionadas({ ...paletaSelecionadas, ...paleta });
  }

  function removerItem(index) {
    const initialValue = Number(paletaSelecionadas[index] || 0);

    const paleta = {
      [index]: initialValue - 1,
    };
  
    setPaletaSelecionadas({ ...paletaSelecionadas, ...paleta });
  }

  return (
    <div className="PaletaLista">

      {paletas.map((paleta, index) => {
        return (
          <PaletaListaItem
            key={`PaletaListaItem-${index}`}
            paleta={paleta}
            quantidadeSelecionada={paletaSelecionadas[index]}
            index={index}
            onRemove={(index) => removerItem(index)}
            onAdd={(index) => adicionarItem(index)}
          />
        );
      })}
    </div>
  );
}

export default PaletaLista;
