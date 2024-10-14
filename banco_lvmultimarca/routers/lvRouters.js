const express = require('express'); 
const router = express.Router();
const { default: Home } = require('../../src/home');
const { default: PersonalDataPage } = require('../../src/Cadastro');
const { default: Login } = require('../../src/Login');
const { default: CadastroColaborador } = require('../../src/CadastroColaborador');
const { default: LoginColaborador } = require('../../src/Colaborador');
const { default: Cart } = require('../../src/Cart');

router.use('/', Home);
router.use('/Cadastro', PersonalDataPage);
router.use('/login', Login);
router.use('/colaborador', LoginColaborador);
router.use('/cadastroColaborador', CadastroColaborador);
router.use('/carrinho', Cart)


module.exports = router;