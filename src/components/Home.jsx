import "./Home.css"
import PaletaLista from "./PaletaLista"

function Home(){
    return (
        <div className="Home" 
            style={{margin: "15px", padding: '15px'}}> 
            <PaletaLista />
        </div>
        )
}

export default Home
// no return se utiliza parenteses quando for mais de uma linha, o style tambem está externamente, foi colocada ai somente para demonstração para falar q tem essa alternativa, contuno e mais recomendada fzr pelo arquivo externo