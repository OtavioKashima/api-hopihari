
const mysql = require('../mysql');

exports.cadastrarBrinquedo = async (req, res) => {
    try {
        console.log('Headers:', req.headers);
        console.log('Raw body:', req.body);
        
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).send({ 
                mensagem: "Body da requisição está vazio",
                received: req.body 
            });
        }

        const { name, waiting_time, status, area } = req.body;
        
        console.log('Dados recebidos:', { name, waiting_time, status, area });

        if (!name || !waiting_time || !status || !area) {
            return res.status(400).send({ 
                mensagem: "Todos os campos são obrigatórios: name, waiting_time, status, area",
                received: { name, waiting_time, status, area }
            });
        }

        const resultados = await mysql.execute(
            'INSERT INTO rides (name, waiting_time, status, area) VALUES (?, ?, ?, ?)',
            [name, waiting_time, status, area]
        );

        return res.status(201).send({ mensagem: "Brinquedo criado com sucesso" });
    } catch (error) {
        console.error("Erro completo:", error);
        return res.status(500).send({ 
            mensagem: "Erro ao cadastrar brinquedo",
            detalhes: error.message,
            stack: error.stack
        });
    }
};