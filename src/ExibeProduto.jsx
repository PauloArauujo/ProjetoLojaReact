import Header from "./Header";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import logo from "./img/lglv.png";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Accordion from "react-bootstrap/Accordion";
import { useForm } from 'react-hook-form';

const ExibeProduto = ({ catalago, name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const nomePath = useParams();
  const buscaProduto = catalago.find(
    (produto) => produto.nome == nomePath.nome
  );

  const [corSelecionada, setCorSelecionada] = useState("");
  const [tamanhoSelecionado, setTamanhoSelecionado] = useState("");

  const [marcado, setMarcado] = useState(false);

  const handleClick = () => {
    setMarcado(!marcado);
  };

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
    <div className="login-pagina">

      <Header links={false} />
      <div className="exibe">
        <div className="ExibeQuadrado">
          <img src={buscaProduto.img} alt={catalago.nome} />
        </div>
        <div className="exibe-produto-desc">
          <a className="buycompras">{buscaProduto.nome}</a>
          <div className="estrelas">
            <FontAwesomeIcon icon={faStarSolid} />
            <FontAwesomeIcon icon={faStarSolid} />
            <FontAwesomeIcon icon={faStarSolid} />
            <FontAwesomeIcon icon={faStarSolid} />
            <FontAwesomeIcon icon={faStarHalfStroke} />
            <div className="espaco"></div>
            <a className="buyPreco">{buscaProduto.valor}</a>
          </div>
          <div className="espaco"></div>
          <div className="linhaazul"></div>
          <h3 className="cor">ESCOLHA A COR:</h3>
          <div className="cores">

          </div>
          <div className="tamanhos">
            <button
              className="btnCor1"
              onClick={() => setCorSelecionada("cor1")}
              style={{ backgroundColor: corSelecionada === "cor1" ? "#190c76" : "aqua" }}
            ></button>
            <button
              className="btnCor2"
              onClick={() => setCorSelecionada("cor2")}
              style={{ backgroundColor: corSelecionada === "cor2" ? "#190c76" : "Black" }}
            ></button>
            <button
              className="btnCor3"
              onClick={() => setCorSelecionada("cor3")}
              style={{ backgroundColor: corSelecionada === "cor3" ? "#190c76" : "Red" }}
            ></button>
          </div>
          <div className="linhaazul"></div>

          <h3 className="tamanho">TAMANHOS:</h3>
          <div className="tamanhos">
            {["P", "M", "G", "GG"].map(tamanho => (
              <button
                key={tamanho}
                className={tamanho}
                onClick={() => setTamanhoSelecionado(tamanho)}
                style={{
                  backgroundColor: tamanhoSelecionado === tamanho ? "#190c76" : "rgba(217, 217, 217, 0.6)",
                  color: tamanhoSelecionado === tamanho ? "white" : "",
                }}

              >
                <h5>{tamanho}</h5>
              </button>
            ))}

          </div>
          <div className="finalizar">
            <div className="Pagamento">
              <Button onClick={handleShow} className="btn-primary">
                <h2>COMPRAR</h2>

              </Button>
              <Offcanvas
                className="pgnPagamentos"
                show={show}
                onHide={handleClose}
                {...props}
                placement={"end"}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <div className="img">
                      <img className="imgPg" src={logo} />
                    </div>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div className="ExibeComprar">
                    <div className="quadradoExibe">
                      <img src={buscaProduto.img} alt={catalago.nome} />
                    </div>
                    <div className="excibe-pagamento">
                      <a className="nomePagamento">{buscaProduto.nome}</a>
                      <div className="estrelasExibe">
                        <FontAwesomeIcon icon={faStarSolid} />
                        <FontAwesomeIcon icon={faStarSolid} />
                        <FontAwesomeIcon icon={faStarSolid} />
                        <FontAwesomeIcon icon={faStarSolid} />
                        <FontAwesomeIcon icon={faStarHalfStroke} />
                      </div>
                      <a className="pagamentoPreco">{buscaProduto.valor}</a>
                    </div>
                  </div>
                  <div className="linhaPagamento1"></div>
                  <div className="formasPagamento">
                    <div className="check">
                      <div className="boletoExibe">
                        <h5>Boleto</h5>{" "}
                      </div>
                      <input type="checkbox" className="inputsExibe" />
                    </div>
                    <div className="linhaPagamento"></div>
                    <div className="check">
                      <div className="pixExibe">
                        <h5>Pix</h5>
                      </div>
                      <input type="checkbox" className="inputsExibe1" />
                    </div>
                    <div className="linhaPagamento"></div>
                    <Accordion>
                      <div className="cartaoDebito">
                        <Accordion.Item className="cartaoD" eventKey="0">
                          <Accordion.Header>Cartão de Débito</Accordion.Header>
                          <Accordion.Body>
                            <input
                              type="textbox"
                              placeholder="Número no cartão"
                            ></input>
                            <input
                              type="textbox"
                              placeholder="data de validade"
                            ></input>
                            <input type="textbox" placeholder="cvv"></input>
                            <input
                              type="textbox"
                              placeholder="Nome no cartão"
                              
                            ></input>
                          </Accordion.Body>
                        </Accordion.Item>
                      </div>
                      <div className="linhaPagamento"></div>
                      <div className="cartaoCredito">
                        <Accordion.Item className="cartaoC" eventKey="1">
                          <Accordion.Header>Cartão de Crédito</Accordion.Header>
                          <Accordion.Body>

                            <input
                              type="textbox"
                              placeholder="Número no cartão"
                            ></input>
                            <input
                              type="textbox"
                              placeholder="data de validade"
                              className="inputdata"
                            ></input>
                            <input
                              type="textbox"
                              placeholder="cvv"
                              className="inputcvv"
                            ></input>
                            <input
                              type="textbox"
                              placeholder="Nome do cartão"
                            ></input>
                          </Accordion.Body>
                        </Accordion.Item>
                      </div>
                    </Accordion>
                    <div className="linhaPagamento"></div>
                    <div className="formasPagamento"></div>
                    <div class="input-button-container"></div>
                    <h5>Prazo de entrega</h5>
                    <input type="text" className="cepExibe" placeholder="00000-000"
                      maxLength={8}
                      {...register("cep")} onBlur={checkCEP} />
                    <button className="btnCalcularExibe" type="submit">Calcular</button>
                  </div>
                  <div className="BuscaCep">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input type="text" className="cepExibe" placeholder="Rua"{...register("address")} disabled/>
                      <input type="text" className="cepExibe" placeholder="Número"{...register("addressNumber")} />
                      <input type="text" className="cepExibe" placeholder="Bairro"{...register("neighborhood")} disabled/>
                      <input type="text" className="cepExibe" placeholder="Cidade"{...register("city")} disabled/>
                      <input type="text" className="cepExibe" placeholder="Estado"{...register("uf")} disabled/>
                    </form>
                  </div>
                  <div className="btnPagar">
                    <button onClick={handleShow} className="pagar">
                      <h3>PAGAR</h3>
                    </button>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
            <div className="iconsCompra">
              <Link to='/carrinho'>
                <FontAwesomeIcon icon={faCirclePlus} className="iconCompra" />
              </Link>
              <FontAwesomeIcon icon={faShareNodes} className="iconCompra1" />
            </div>
          </div>
        </div>
      </div>

      <div className="espacoFooterExibe"></div>
      <Footer />
    </div>
  );
};

export default ExibeProduto;
