import React from 'react'; //a partir da versão 16, não é obrigatório ter esse import, somente o react-dom abaixo, mas foi tantao faz ter esse import; foi colocado aki somente para demonstração mas n inlfuencia no código
import ReactDOM from 'react-dom/client';
import Home from "./views/Home/Home.jsx" // aki foi importado o componente Home
import '../src/assets/styles/main.css'; //aki está importando o CSS 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( //aki está renderizando uma div com o ID 'root', e tudo o que for passado aki dentro será renderizado dentro da div 'root' que se encontra no index.html, ou seja, por ser de marcação será exibida no navegador ao renderizar.
  <React.StrictMode>
    <Home /> {/*o <Home/> é a rota Home.jsx, que para ser renderizada precisa vir como se fosse uma TAG <html className=""></html>*/}
  </React.StrictMode> // react.StrictMode é uma ferramenta para sinalizar potenciais problemas, ele não renderiza elemento algum, contudo fica ativo de modo estrito.
);


    /* Aki está importando a function exportada Home da pasta Home*/
