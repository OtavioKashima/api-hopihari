const mysql = require('../mysql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.atualizarUsuario = async (req, res) => {
    try {
        const idUsuarios = Number(req.params.id);
        const senhaCriptografada = await bcrypt.hash(req.body.password, 10);
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
        return res.status(201).send({ "mensagem": "Usuario atualizado com sucesso!" });

    } catch (error) {
        return res.status(500).send({ "mensagem": error });

    }
}

exports.cadastrarUsuario = async (req, res) => {
    try {
        const hash = await bcrypt.hash(req.body.password, 10);
        const resultado = await mysql.execute(
            `insert into users (first_name, last_name, email, password, birth_date, phone) values(?, ?, ?, ?, ?, ?)`,
            [
                req.body.first_name,
                req.body.last_name,
                req.body.email,
                hash,
                req.body.birth_date,
                req.body.phone
            ]
        );
        return res.status(201).send({ "mensagem": "Usuario criado com sucesso!" });

    } catch (error) {
        return res.status(500).send({ "mensagem": error });
    }
}

exports.deletarUsuario = async (req, res) => {
    try {
        const idUsuarios = Number(req.params.id);

        const resultado = await mysql.execute(
            `delete from users where id = ?`,
            [
                req.params.id
            ]
        );
        return res.status(201).send({ "mensagem": "Usuario deletado com sucesso!" });
    } catch (error) {
        return res.status(500).send({ "mensagem": error });
    }
}

exports.loginUsuario = async (req, res) => {
    try {
        const usuario = await mysql.execute(
            `select * from users where email = ?`,
            [req.body.email]
        );

        if (usuario.length == 0) {
            return res.status(401).send({ "mensagem": "Falha na autenticação" });
        }
        const match = await bcrypt.compare(req.body.password, usuario[0].password);

        if (!match) {
            return res.status(401).send({ "mensagem": "senha incorreta" });
        }
        const token = jwt.sign({
            id: usuario[0].id,
            first_name: usuario[0].first_name,
            last_name: usuario[0].last_name,
            email: usuario[0].email,
            birth_date: usuario[0].birth_date,
            phone: usuario[0].phone
        }, 'senhajwt');
        return res.status(200).send({
            "mensagem": "Usuario logado com sucesso!",
            "token": token
        })

    } catch (error) {
        res.status(500).send({ "Error": error });
    }
}