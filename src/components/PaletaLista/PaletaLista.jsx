import React, {useState} from 'react' // importando o useState pra gerenciar o estado da nossa aplicação 
import "./PaletaLista.css"
import PaletaListaItem from 'components/PaletaListaItem/PaletaListaItem'
import { paletas } from "mocks/paletas.js"


console.log("paletas", paletas)

// paletaSelecionadas = 
// {
//     "0": 4, 
//     "5": 1,  
//     "6": 2, 
//     }

function PaletaLista(){

    const [paletaSelecionadas, setPaletaSelecionadas ] = useState({})

    // variável que guarda o valor do meu state
    // método que atualiza o meu state 
    // valor inicial dessa variável 

    function adicionarItem(index){
        // const initialValue = paletaSelecionadas[index] ? paletaSelecionadas[index] : 0 
        const initialValue = Number(paletaSelecionadas[index] || 0) 
        // o operador "||" retorna o valor indicado (0), caso a primeira condição seja falsa, ou seja, se não encontrar 
        // o index da paleta clicada no obj paletas selecionadas
        const paleta = {
            [index]: initialValue + 1
        }
        // Spread operator = espalhar => ...
        setPaletaSelecionadas({...paletaSelecionadas, ...paleta})
    }

    function removerItem(index){
        const initialValue = Number(paletaSelecionadas[index] || 0) 
       
        const paleta = {
            [index]: initialValue - 1
        }
        // Spread operator = espalhar => ...
        setPaletaSelecionadas({...paletaSelecionadas, ...paleta})
    }

    return(
        <div className="PaletaLista"> 
        {/* MAP => iterando pela nossa lista (array) e renderizando cada componente dessa lista na tela  */}
        {paletas.map((paleta, index)=> {
            return (
               
                <PaletaListaItem 
                key={`PaletaListaItem-${index}`}
                paleta={paleta}
                quantidadeSelecionada={paletaSelecionadas[index]}
                index={index}
                onRemove={index =>removerItem(index)}
                onAdd={index => adicionarItem(index)}
                />
                  
              
        )})}
        </div>
    )
}


export default PaletaLista