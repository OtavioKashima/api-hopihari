const mysql = require('../mysql');

exports.verificarBrinquedo = async (req, res, next) => {
    try{
        const resultados = await mysql.execute
        (`SELECT * FROM rides WHERE id = ?`,
            [req.params.idRide]);

        if(resultados.length == 0){
            return res.status(404).send({ "mensagem": "Brinquedo não encontrado" });
        }
        next();
    }catch(error){
        return res.status(500).send(error);
    }   
}

exports.entrarFila = async (req, res, next) => {
    try {
        const resultados = await mysql.execute(
            `INSERT INTO users_has_rides (users_id, Rides_id) VALUES (?,?)`,
            [res.locals.idUsuario, Number(req.params.idRide)]);
    } catch (error) {
        return res.status(500).send(error);
    }
}