const dbConecta = require('../models/bancolvmultimarca');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const query = `
        select
            u.username, 
            a.*
        from
           compra a
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
            mensagem : "Compra efetuada com sucesso", 
            body: req.body 
        });
    });
});

router.put('/', (req, res) => {
    const {nota, usuario_id, filme_id} = req.body;
    const query = 'update compra = ?, criado_em = CURRENT_TIMESTAMP() where usuario_id = ? and compra_id = ?';
    
    bancolvmultimarca.query(query, [, usuario_id, produto_id], (err) => {
        if (err) throw err;
        res.json({
            mensagem: "Compra atualizada com sucesso",
            body: req.body
        });
    });
});

module.exports = router;