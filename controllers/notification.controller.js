const mysql = require('../mysql');

exports.getNotification = async (req, res) => {
    try {
        const resultados = await mysql.execute(`
            SELECT * FROM notification WHERE Status = true
        `, [res.locals.idusuario]);
        
        return res.status(200).send({
            message: 'Notificações recuperadas com sucesso!',
            resultado: resultados
        });
    } catch (error) {
        return res.status(500).send({
            error: 'Erro ao recuperar notificações',
            details: error.message
        });
    }
};