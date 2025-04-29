const mysql = require('../mysql');

exports.atualizarUsuario = async (req, res) => {
    try {
        const idUsuarios = Number(req.params.id);

        const resultado = await mysql.execute(

            `update users 
            set name		= ?,
	        email		= ?,
	        password	= ?
             where id = ?;`,
            [
                req.body.name,
                req.body.email,
                req.body.password,
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

        const resultado = await mysql.execute(
            `insert into users (name, email, password) values(?, ?, ?)`,
            [
                req.body.name,
                req.body.email,
                req.body.password
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