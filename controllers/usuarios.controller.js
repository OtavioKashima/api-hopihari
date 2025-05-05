const mysql = require('../mysql');
const bcrypt = require('bcryptjs');
const { verify} = require("crypto")

exports.atualizarUsuario = async (req, res) => {
    try {
        const idUsuarios = Number(req.params.id);

        const resultado = await mysql.execute(

            `update users 
            set first_name = ?,
            last_name = ?, 
            email = ?, 
            password = ?, 
            birth_date = ?, 
            phone	= ?,
             where id = ?;`,
            [
                req.body.first_name,
                req.body.last_name,
                req.body.email,
                senhaCriptografada,
                req.body.birth_date,
                req.body.phone,
                idUsuarios
            ]

        );
        return res.status(201).send({ "mensagem": "Usuario atualizado com sucesso!"});

    } catch (error) {
        return res.status(500).send({ "mensagem": error });

    }
}

exports.cadastrarUsuario = async (req, res) => {
    try {
        const senhaCriptografada = await bcrypt.hash(req.body.password, 10);
        const resultado = await mysql.execute(
            `insert into users (first_name, last_name, email, password, birth_date, phone) values(?, ?, ?, ?, ?, ?)`,
            [
                req.body.first_name,
                req.body.last_name,
                req.body.email,
                senhaCriptografada,
                req.body.birth_date,
                req.body.phone
            ]
        );
        return res.status(201).send({ "mensagem": "Usuario criado com sucesso!"});

    } catch (error) {
        return res.status(500).send({ "mensagem": error });
    }
}

exports.deletarUsuario = async (req, res) => {
    try{
        const idUsuarios = Number(req.params.id);

        const resultado = await mysql.execute(
            `delete from users where id = ?`,
            [
                req.params.id
            ]
        );
        return res.status(201).send({ "mensagem": "Usuario deletado com sucesso!"});
    }catch (error) {
        return res.status(500).send({ "mensagem": error });
    }
}