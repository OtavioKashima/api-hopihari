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

exports.updateNot = async (req, res) => {
    try {
        const resultados = await mysql.execute(`
            UPDATE notification SET Status = 0 WHERE Notification_id = ?
        `, [req.params.idnotification]);

        if (resultados.affectedRows === 0) {
            return res.status(404).send({
                message: 'Notificação não encontrada',
            });
        }

        return res.status(200).send({
            message: 'Notificação atualizada com sucesso!',
        });
    } catch (error) {
        return res.status(500).send(error);
    }

}
