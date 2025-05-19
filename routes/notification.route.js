const express = require("express");
const router = express.Router();
const login = require("../middleware/usuarios.middleware");
const notificationController = require("../controllers/notification.controller");


router.get("/",
    login.required, 
    notificationController.getNotification
);

module.exports = router;