import "./Home.css";
import PaletaLista from "components/PaletaLista/PaletaLista";
import Navbar from "components/Navbar/Navbar.jsx";
import sacola from "assets/icons/sacola.svg";
import logo from "assets/logo.svg";

function Home() {
  return (
    <div className="Home" style={{ margin: "15px", padding: "15px" }}>
      <Navbar logo={logo} sacola={sacola} />
      <div className="Home__container">
        <PaletaLista />
      </div>
      <div className="Links">
        <ul>
          <li><a href="https://github.com/qualose123">GITHUB</a></li>
          <li><a href="https://www.linkedin.com/in/raphael-johny-93a331213/">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
