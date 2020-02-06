const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', {
        header: 'Infomatte - UCEK College Internal Server'
    });
});


module.exports = router;