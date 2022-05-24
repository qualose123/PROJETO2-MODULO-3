import "./PaletaLista.css"
import { paletas } from "../mocks/paletas"

console.log("paletas", paletas)

function PaletaLista(){
    return(
        <div className="PaletaLista"> 
        {paletas.map((paleta, index)=> {
            return (
                <div key={index} className="PaletaListaItem">
                    <div>
                        <div className="PaletaListaItem__titulo">
                            {paleta.titulo}
                        </div>
                        <div className="PaletaListaItem__preco">R$ {paleta.preco}</div>
                            <div className="PaletaListaItem__descricao">
                                {paleta.descricao}
                            </div>
                            <div className="PaletaListaItem__acoes Acoes">
                                <button className="Acoes__adicionar Acoes__adicionar--preencher">
                                adicionar
                                </button>
                            </div>
                    </div>
                    <img
                        className="PaletaListaItem__foto"
                        src={paleta.foto}
                        alt={`Paleta de ${paleta.sabor}`}
                    />
                </div>
        )})}
        </div>
    )
}

export default PaletaLista