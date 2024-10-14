const dbConecta = require('../models/bancolvmultimarca');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const query = `
        select
            u.username, 
            a.*
        from
          email a
        inner join usuarios u on
            a.usuario_id = u.id
    ` 
    dbConecta.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

router.delete('/', (req, res) => {
    const {id} = req.body;
    const query = 'delete from compra where id = ?';

    dbConecta.query(query, [id], (err) => {
        if (err) throw err;
        res.json ({
            mensagem : "Login efetuado com sucesso", 
            body: req.body 
        });
    });
});

router.put('/', (req, res) => {
    const {nota, usuario_id, filme_id} = req.body;
    const query = 'senha = ?, criado_em = CURRENT_TIMESTAMP() where usuario_id = ? and login_id = ?';
    
    bancolvmultimarca.query(query, [, email_id, senha_id], (err) => {
        if (err) throw err;
        res.json({
            mensagem: "Compra atualizada com sucesso",
            body: req.body
        });
    });
});

module.exports = router;