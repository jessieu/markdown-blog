const express = require('express');
const router = express.Router();
const dbUtils = require('../models/connect');
const db = dbUtils.get();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secretKey = "C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c";

router.post('/', (req, res) => {
        const {username, password, redirect} = req.body;
        if (username.trim().length == 0 || password.trim().length == 0) {
            res.status(401).send("<h4>Incorrect username or password</h4>");
            return;
        } 
        data = {username, password, redirect};
        db.collection("Users").findOne({username: username}).then(result => {
        // verify username existence
        if (result) {
            //verify user password
            bcrypt.compare(password, result.password).then(isValid => {
            if (isValid) {
                // 1. set JWT {payload, privateKey, optional callback}
                //    - expire in 2 hours from successful authentication 
                var exp = Math.floor(Date.now() / 1000) + (60 * 60 * 2);
                var header = { "algorithm": "HS256" };
                var payload = { "exp": exp, "usr": username };
                var token = jwt.sign(payload, secretKey, header); // default algorithm is HS256
                res.cookie("jwt", token);
                
                // 2. redirect or send 200
                if (redirect) {
                    res.status(200).redirect(redirect);
                } else {
                    res.status(200).send("Login Successfully");
                    return;
                }
            }else {
                res.status(401).render('login', data);
            }});  
        } else { // no user exists
            res.status(401).render('login', data);
        }
    })
});

// user login page
router.get('/', (req, res) => {
    var redirect = req.query.redirect?req.query.redirect:"";
    res.render('login', {"username": "", "password": "", "redirect": redirect});
});


module.exports = router;