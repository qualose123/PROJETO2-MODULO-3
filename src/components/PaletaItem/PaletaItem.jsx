import "./PaletaItem.css";

function PaletaItem() {
  const adicionarItem = (i) => console.log("adicionar" + i);
  const removerItem = (i) => console.log(`remover ${i}`);
  const paletaSelecionadas = [0];
  const index = 0;
  const paleta = {
    titulo: "Açaí com Leite Condensado",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: require("assets/images/acai-com-leite-condensado.png"),
    preco: 10.0,
    sabor: "Açaí",
    recheio: "Leite Condensado",
    possuiRecheio: true,
  };

  const badgeCounter = (canRender, index) => {
    return (
      <>
    
        {Boolean(canRender) && (
          <span className="PaletaListaItem__badge">
            {paletaSelecionadas[index]}
          </span>
        )}
      </>
    );
  };

  const removeButton = (canRender, index) => {
    return (
      <>
       
        {Boolean(canRender) && (
          <button
            className="Acoes__remover "
            onClick={() => removerItem(index)}
          >
            remover
          </button>
        )}
      </>
    );
  };

  return (
    <div className="PaletaListaItem">
      <div>
        {badgeCounter(paletaSelecionadas[index], index)}
        <div className="PaletaListaItem__titulo">{paleta.titulo}</div>
        <div className="PaletaListaItem__preco">R$ {paleta.preco}</div>
        <div className="PaletaListaItem__descricao">{paleta.descricao}</div>
        <div className="PaletaListaItem__acoes Acoes">
          {/* RENDERIZAÇÃO CONDICIONAL DE ESTILO */}
          <button
            className={`Acoes__adicionar ${
              !paletaSelecionadas[index] && "Acoes__adicionar--preencher"
            }`}
            onClick={() => adicionarItem(index)}
          >
            adicionar
          </button>
          {removeButton(paletaSelecionadas[index], index)}
        </div>
      </div>
      <img
        className="PaletaListaItem__foto"
        src={paleta.foto}
        alt={`Paleta de ${paleta.sabor}`}
      />
    </div>
  );
}

export default PaletaItem;
