import Footer from "./Footer";
import Header from "./Header";
import Cadastro from "./Cadastro";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./App.css";

const LoginColaborador = () => {
  const [username, setUsername] = useState("Teste");
  const [password, setPassword] = useState("Teste");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Envio");
    ("Envio");
  };

  return (
    <div className="pagina-colaborador">
      <Header links={false} />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>COLABORADOR</h1>
          <div className="email">
            <div className="iconemail">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <input
              type="email"
              placeholder="Email"
              class="inputs"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="password">
            <div className="iconsenha">
              <FontAwesomeIcon icon={faLock} />
            </div>
            <input
              type="password"
              placeholder="Senha"
              class="inputs"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="descLoginColaborador">
            <a className="checkCadastroColaborador"><Link to={"/cadastroColaborador"}>CADASTRA-SE</Link></a>
            <a className="checkCliente"><Link to={"/login"}>SOU CLIENTE</Link></a>
          </div>
          <div className="botaoentrar">
            <button className="btnentrar">
              <Link to={"/"}>Entrar</Link>
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default LoginColaborador;
