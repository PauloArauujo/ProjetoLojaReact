import Header from "./Header";
import Footer from "./Footer";
import CamisasTime from "./CatalogoProduto1";
import CadastroColaborador from "./CadastroColaborador";
import CatalagoProduto2 from "./CatalogoProduto2";
import CatalagoProduto3 from "./CatalogoProduto3";


const Lancamento = ({ produtos }) => {
    return (
        <div>
            <Header />
            <CatalagoProduto2 nomes={produtos} />
            <CatalagoProduto3 nomes={produtos} />
            <CamisasTime nomes={produtos} />
            <Footer />
        </div>
    );
};

export default Lancamento;
