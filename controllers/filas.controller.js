const mysql = require('../mysql');

exports.entrarFila = async (req, res, next) => {
    try {
        const resultados = await mysql.execute(
            `INSERT INTO users_has_rides(users_id, Rides_id) VALUES (?,?)`,
             [res.locals.idUsuario, req.body.rides_id]);
    } catch (error) {
        return res.status(500).send({ "mensagem": error });
    }
}