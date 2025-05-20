
const mysql = require('../mysql');

exports.cadastrarBrinquedo = async (req, res) => {
    try {
        const resultados = await mysql.execute(
            'INSERT INTO rides (name, waiting_time, status, area) VALUES (?, ?, ?, ?)',
            [req.body.name, req.body.waiting_time, req.body.status, req.body.area]
        );

        return res.status(201).send({ mensagem: "Brinquedo criado com sucesso" });
    } catch (error) {
        return res.status(500).send(error);
    }
};