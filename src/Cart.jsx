import Header from "./Header";
import Footer from "./Footer";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';

const Cart = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const produtosArmazenados = localStorage.getItem('lv_nome');
    if (produtosArmazenados) {
      setProdutos([JSON.parse(produtosArmazenados)]);
    }
  }, []);

  const removerItem = (nomeProduto) => {
    const produtosArmazenados = [JSON.parse(localStorage.getItem('lv_nome'))] || [];
    const produtosAtualizados = produtosArmazenados.filter(produto => produto.nome !== nomeProduto);
    localStorage.setItem('lv_nome', JSON.stringify(produtosAtualizados));
    setProdutos(produtosAtualizados);
    alert("Removido do carrinho com sucesso!");
  };

  const aumentarQuantidade = (index) => {
    const novosProdutos = [...produtos];
    novosProdutos[index].quantidade = (novosProdutos[index].quantidade || 1) + 1;
    setProdutos(novosProdutos);
    localStorage.setItem('lv_nome', JSON.stringify(novosProdutos));
  };

  const diminuirQuantidade = (index) => {
    const novosProdutos = [...produtos];
    if (novosProdutos[index].quantidade > 1) {
      novosProdutos[index].quantidade -= 1;
    } else {
      novosProdutos.splice(index, 1);
    }
    setProdutos(novosProdutos);
    localStorage.setItem('lv_nome', JSON.stringify(novosProdutos));
  };

  const quantidadeTotal = produtos.reduce((total, produto) => total + (produto.quantidade || 1), 0);
  const valorTotal = produtos.reduce((total, produto) => total + (produto.quantidade || 1) * parseFloat(produto.valor.replace('R$', '').trim()), 0);

  const { register, handleSubmit, setValue, setFocus } = useForm();

  const onSubmit = (e) => {
    console.log(e);
  }

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
      console.log(data);
      setValue('address', data.logradouro);
      setValue('neighborhood', data.bairro);
      setValue('city', data.localidade);
      setValue('uf', data.uf);
      setFocus('addressNumber');
    });
  }

  return (
    <div>
      <Header links={false} />
      <div className="exibe-produtos">
        <h1 className="ProdutoListados">CARRINHO</h1>
        {produtos.length === 0 ? (
          <div className="vazio">
            <p className="ProdutoListadosVazio">SEU CARRINHO ESTÁ VAZIO...</p>
            <Link to="/"><button className="btnVoltarCart">VOLTAR PARA O SITE</button></Link>
          </div>
        ) : (
          <div className="CarrinhoDesc">
            <div className="lista-produtos">
              <div className="DescCarrinho">
                <p className="ProdutoListadosCarrinho">PRODUTOS</p>
                <p className="FreteCarrinho">FRETE</p>
              </div>
              <div className="FinalizaçãoProdutos">
                {produtos.map((produto, index) => (
                  <div key={index} className="QuadradoProduto">
                    <img src={produto.imagem} alt={produto.nome} />
                    <h2>{produto.nome}</h2>
                    <div className="DescricaoProduto">
                      <p className="ValorProduto">VALOR: {produto.valor}</p>
                      <p className="QuantidadeProduto">QUANTIDADE: {produto.quantidade || 1}</p>
                    </div>
                    <div className="btnsProduto">
                      <button className="btnAumentar" onClick={() => aumentarQuantidade(index)}>QUANTIDADE +</button>
                      <button className="btnDiminuir" onClick={() => diminuirQuantidade(index)}>QUANTIDADE -</button>
                      <button className="btnRemover" onClick={() => removerItem(produto.nome)}>REMOVER</button>
                    </div>
                  </div>
                ))}
                <div className="ContainerColumn">
                  <div className="QuadradoFrete">
                    <input type="text" className="cepExibeCarrinho" placeholder="00000-000"
                      maxLength={8}
                      {...register("cep")} onBlur={checkCEP} />
                    <button className="btnCalcularCarrinho" type="submit">Calcular</button>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input type="text" className="cepExibeCarrinho" placeholder="Rua"{...register("address")} disabled/>
                      <input type="text" className="cepExibeCarrinho" placeholder="Número"{...register("addressNumber")} />
                      <input type="text" className="cepExibeCarrinho" placeholder="Bairro"{...register("neighborhood")} disabled/>
                      <input type="text" className="cepExibeCarrinho" placeholder="Cidade"{...register("city")} disabled/>
                      <input type="text" className="cepExibeCarrinho" placeholder="Estado"{...register("uf")} disabled/>
                    </form>
                  </div>
                  <div className="EspacoFrete">
                    <p className="ResumoCarrinho">RESUMO DO CARRINHO</p>
                    <div className="QuadradoResumo">
                      <p>QUANTIDADE DE PRODUTOS: {quantidadeTotal}</p>
                      <p>VALOR TOTAL: R$ {valorTotal.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;