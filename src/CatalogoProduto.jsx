import ItemCamisa from "./ItemCamisa";
import produtos from "./Services";

const CatalagoProduto = ({ nomes }) => {
  if (!Array.isArray(nomes) || nomes.length < 4) {
    return null;
  }
  return (
    <>
      <div className="section-itens">
        {produtos.map((i) => (
          <ItemCamisa nome={i.nome} imagem={i.img} valor={i.valor} />
        ))}
      </div>
    </>
  );
};

export default CatalagoProduto;
