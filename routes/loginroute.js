const express = require('express');
const router = express.Router();

router.post('/login', () =>{
    console.log("Rota de login")
});

router.post('/register', () =>{
    console.log("Rota de registro")
});

router.put('/update', () =>{
    console.log("Rota de atualização")
});

module.exports = router;