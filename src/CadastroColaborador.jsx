import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const CadastroColaborador = () => {
  const [personalData, setPersonalData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    cpf: "",
    data: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalData({
      ...personalData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Dados pessoais enviados:", personalData);
  };
  return (

    <div className="containerCadastro">
      <div className="pagina-home ">
        <Header links={false} />
        <div>
          <h1 className="CadastroH1">DADOS PESSOAIS</h1>
          <form onSubmit={handleSubmit}>
            <div className="dadosNome">

              <input
                className="CadastroBoxNome"
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Nome"
                value={personalData.firstName}
                onChange={handleChange}
                style={{ padding: "8px" }}
              />
              <input
                className="CadastroBoxSobreNome"
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Sobrenome"
                value={personalData.lastName}
                onChange={handleChange}
                style={{ padding: "8px" }}
              />
            </div>
            <div className="dadosNum">
              <input
                className="CadastroBoxCPF"
                type="text"
                id="cpf"
                name="cpf"
                placeholder="CPF"
                maxLength={11}
                value={personalData.cpf}
                onChange={handleChange}
                style={{ padding: "8px" }}
              />
              <input
                className="CadastroBoxEndereco"
                type="text"
                id="address"
                name="address"
                placeholder="Endereço"
                value={personalData.address}
                onChange={handleChange}
                style={{ width: "100%", padding: "8px" }}
              />
            </div>
            <div className="dadosNum2">
              <input
                className="CadastroBoxTel"
                type="text"
                id="phone"
                name="phone"
                placeholder="Telefone"
                maxLength={11}
                value={personalData.phone}
                onChange={handleChange}
                style={{ width: "100%", padding: "8px" }}
              />
              <input
                className="CadastroBoxDataNascimento"
                type="date"
                id="data"
                name="data"
                placeholder="Data de nascimento"
                maxLength={11}
                value={personalData.data}
                onChange={handleChange}
                style={{ width: "100%", padding: "8px" }}
                onfocus="(this.type='date')"
                onblur="(this.type='text')"
              ></input>
            </div>
            <h1 className="CadastroH1Acesso">DADOS DE ACESSO AO SITE</h1>
            <input
              className="CadastroBoxEmail"
              type="email"
              id="email"
              name="email"
              placeholder="E-Mail"
              value={personalData.email}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px" }}
            />
            <input
              className="CadastroBoxSenha"
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
              value={personalData.password}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px" }}
            />
            <input
              className="CadastroBoxSenha"
              type="password"
              id="password"
              name="password"
              placeholder="Confirmar Senha"
              value={personalData.password}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px" }}
            />
            <div className="CadastroConfirmar">
              <button
                type="submit"
                style={{ padding: "10px 20px" }}
                className="btnCadastro"
              >
                <Link to={"/login"}>Concluido</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CadastroColaborador;
