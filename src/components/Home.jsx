import "./Home.css" //Aki tem que importar o css referente ao componente Home.
import PaletaLista from "./PaletaLista"

function Home(){
    return (
        <div className="Home"  //No jsx utiliza-se className invés de class
            style={{margin: "15px", padding: '15px'}}> 
            <div className="Home__container "> <PaletaLista /></div> 
        </div>
        )
}

//Como o elemento PaletaLista está dentro da div Home_container, ele será afetado pelos estilos aplicados a essa div.
export default Home
// no return se utiliza parenteses quando for mais de uma linha, o style tambem está externamente, foi colocada ai somente para demonstração para falar q tem essa alternativa, contudo e mais recomendada fzr pelo arquivo externo.
