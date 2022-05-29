import "./Home.css";
import PaletaLista from "components/PaletaLista/PaletaLista";
import Navbar from "components/Navbar/Navbar.jsx";
import sacola from "assets/icons/sacola.svg";
import logo from "assets/logo.svg";

function Home() {
  return (
    <div className="Home" style={{ margin: "15px", padding: "15px" }}>
      {/* extraindo lógica do Header para um componente separado: Navbar
            Exemplo de passar informações (props) entre componentes pai => filho. */}
      <Navbar logo={logo} sacola={sacola} />
      <div className="Home__container">
        <PaletaLista />
      </div>
    </div>
  );
}


export default Home;
