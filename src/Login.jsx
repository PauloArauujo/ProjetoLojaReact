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

const Login = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nome || !formData.email) {
      alert('Por favor, preencha todos os campos.');
    } else {
      alert('Formulário enviado com sucesso!');
    }
  };

  return (
    <div className="login-pagina">
      <Header links={false} />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>LOGIN</h1>
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
          <div className="descLogin">
            <input type="checkbox" className="checkmimbox"></input>
            <a className="checkmim">LEMBRE DE MIM</a>
            <a href="#" className="checksenha">ESQUECI MINHA SENHA</a>
            <a href="#" className="checkcolaborador"><Link to={"/Colaborador"}>SOU UM COLABORADOR</Link>
            </a>
          </div>
          <div className="botaoentrar">
            <button className="btnentrar">
              <Link to={"/"}>Entrar</Link>
            </button>
          </div>
          <div className="signup-link">
            <a className="checkcadastro">NÃO TEM UMA CONTA?</a>
            <Link className="checkcadastroo" to={"/cadastro"}>CADASTRA-SE</Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default Login;
