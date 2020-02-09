const express = require('express');
const router = express.Router();
const Staff = require('../model/Staffs');
const jwt = require('jsonwebtoken')
router.get('/', (req, res) => {
    const token = req.cookies.STAFF_TOKEN;
    const data = jwt.decode(token, process.env.TOKEN_SECRET)
    Staff.findOne({
        id: data.id,
        password: data.pass,
        branch: data.branch
    }, async (err, response) => {
        if (err) {
            res.redirect('/staffs_login')
        } else {
            const d1 = new Date();
            const year0 = d1.getFullYear();
            const d = new Date(year0, 4, 25);
            const year4 = d.getFullYear() - 3;
            const year3 = d.getFullYear() - 2;
            const year2 = d.getFullYear() - 1;
            res.render('staffs_home', {
                id: data.id,
                branch: data.branch,
                year2: year2,
                year3: year3,
                year4: year4,
                header: 'Staff Panel'
            });
        }
    })
})

module.exports = router;