import "./PaletaListaItem.css";
function PaletaListaItem({
  paleta,
  quantidadeSelecionada,
  index,
  onRemove,
  onAdd,
}) {
  const badgeCounter2 = (canRender, index) => {
    return (
      <>
        {/* SHORT-CIRCUIT */}
        {Boolean(canRender) && (
          <span className="PaletaListaItem__badge">
            {quantidadeSelecionada}
          </span>
        )}
      </>
    );
  };

  const removeButton = (canRender, index) => {
    return (
      <>
        {/* SHORT-CIRCUIT */}
        {Boolean(canRender) && (
          <button className="Acoes__remover " onClick={() => onRemove(index)}>
            remover
          </button>
        )}
      </>
    );
  };

  return (
    <div className="PaletaListaItem">
      {badgeCounter2(quantidadeSelecionada, index)}
      <div>
        <img
          className="PaletaListaItem__foto"
          src={paleta.foto}
          alt={`Paleta de ${paleta.sabor}`}
        />
      </div>

      <div className="PaletaListaItem__titulo">{paleta.titulo}</div>
      <div className="PaletaListaItem__preco">VALOR R$ {paleta.preco}</div>
      <div className="PaletaListaItem__descricao">{paleta.descricao}</div>
      <div className="PaletaListaItem__acoes Acoes">
        <button
          className={`Acoes__adicionar ${
            !quantidadeSelecionada && "Acoes__adicionar--preencher"
          }`}
          onClick={() => onAdd(index)}
        >
          adicionar
        </button>
        {removeButton(quantidadeSelecionada, index)}
      </div>
    </div>
  );
}

export default PaletaListaItem;
