import "./Navbar.css";
// function Navbar({logo, sacola})
function Navbar(props) {
  //FUNÇÃO PARA SUBIR O SCROLL
  const SubirTela = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //FUNÇÃO PARA APARECER O SCROLL SOMENTE QUANDO BAIXAR O SCROLL
  function descerscroll() {
    if (window.scrollY === 0) {
      document.querySelector(".scrollbutton").style.display = "none";
    } else {
      document.querySelector(".scrollbutton").style.display = "block";
    }
  }
  window.addEventListener("scroll", descerscroll);
  //INORMAÇÇÕES DA NAVBAR:
  const { logo, sacola } = props;
  return (
    <div className="Home__header Header">
      <div className="row">
        <div className="Header__logo Logo">
          <img
            src={logo}
            width="70px"
            alt="Logo El Geladon"
            className="Logo__icone"
          />
          <span className="Logo__titulo"> El Geladon </span>
        </div>
        <div className="Header__opcoes Opcoes">
          <div className="Opcoes__sacola Sacola">
            <img
              src={sacola}
              width="40px"
              className="Sacola__icone"
              alt="Sacola de compras"
            />
          </div>
        </div>
      </div>
      {/*DIV PARA EXIBIR MENSAGEM INICIAL NA TELA*/}
      <div className="Animacao"> ESCOLHA--SEU--SABOR--FAVORITO!</div>
      {/*BOTÃO DO SCROLL QUE APARECE AO MOVIMENTAR SCROLL*/}
      <button onClick={SubirTela} className="scrollbutton">
        UP
      </button>
      ;
    </div>
  );
}

export default Navbar;
