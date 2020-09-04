var express = require('express');
var router = express.Router();
var common = require('../public/javascripts/common');
var commonmark = require('commonmark');
var dbUtils = require('../models/connect');
var db = dbUtils.get();
const jwt = require('jsonwebtoken');

const secretKey = "C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c";

router.get('/:username', (req, res)=> {
    var username = req.params.username;
    var token = req.cookies.jwt;
    // request does not include cookie value
    if (token == undefined) {
        res.sendStatus(401);
        return;
    }
    var decoded = jwt.verify(token, secretKey);
    if (decoded.usr != username || decoded.exp * 1000 <= Date.now()) {
        res.sendStatus(401);
        return;
    }
    db.collection('Posts').find({"username": username})
        .sort({postid: 1}).toArray().then(docs =>{
            var data = docs.map(({postid, username, created, modified, title, body}) => ({postid, username, created, modified, title, body}));
            res.status(200).json(data);
    }).catch(err => { throw err;});
});

router.get('/:username/:postid', (req, res) => {
    var username = req.params.username;
    var token = req.cookies.jwt;
    if (token == undefined) {
        res.sendStatus(401);
        return;
    }
    var decoded = jwt.verify(token, secretKey);
    if (decoded.usr != username || decoded.exp * 1000 <= Date.now()) {
        res.sendStatus(401);
        return;
    }
    var postid = req.params.postid;
    if (!common.isValidId(postid)) {
        res.status(400).send("Invalid Postid");
    }
    postid = parseInt(postid, 10);
    db.collection('Posts').find({"username": username, "postid": postid})
        .sort({postid: 1}).toArray().then(docs =>{
            if (docs.length > 0) {
                var data = docs.map(({postid, username, created, modified, title, body}) => 
                                    ({postid, username, created, modified, title, body}));
                res.status(200).json(data[0]);
            } else {
                res.status(404).send("Post Not Found");
            }
    }).catch(err => { throw err;});
});

router.post('/:username/:postid', async (req, res) => {
    var username = req.params.username;
    var token = req.cookies.jwt;
   
    if (token == undefined) {
        res.sendStatus(401);
        return;
    }
    var decoded = jwt.verify(token, secretKey);
    if (decoded.usr != username || decoded.exp * 1000 <= Date.now()) {
        res.sendStatus(401);
        return;
    }
    var postid = req.params.postid;
    var title = req.body.title;
    var body = req.body.body;
    if (!common.isValidId(postid) || title == undefined || body == undefined) {
        console.log("Invalid postid, title, or body")
        res.sendStatus(400);
        return;
    }
    postid = parseInt(postid, 10);
    var result = await db.collection('Posts').findOne({"username": username, "postid": postid});
    if (result != null) {
        console.log("Post exists");
        res.sendStatus(400);
        return;
    }
    var data = {
                "postid": postid,
                "username": username,
                "created": Date.now(),
                "modified": Date.now(),
                "title": title,
                "body": body,
            };
    db.collection("Posts").insertOne(data).then((result) => {
        if (result) {
            res.sendStatus(201);
            return;
        }
    }).catch((err) => {throw err});
});

router.put('/:username/:postid', async (req, res) => {
    var username = req.params.username;
    var token = req.cookies.jwt;
    if (token == undefined) {
        res.sendStatus(401);
        return;
    }
    var decoded = jwt.verify(token, secretKey);
    if (decoded.usr != username || decoded.exp * 1000 <= Date.now()) {
        res.sendStatus(401);
        return;
    }
    var postid = req.params.postid;
    var title = req.body.title;
    var body = req.body.body;
    // if (!common.isValidId(postid) || title == undefined || body == undefined) {
    //     res.sendStatus(400);
    //     return;
    // }
    postid = parseInt(postid, 10);
    if (isNaN(postid) || title === undefined || body === undefined) {
        res.sendStatus(400);
        return;
    }
    var query = {"username": username, "postid": postid};
    var data = { $set: { "title": title, "body": body, "modified": Date.now() }};
    db.collection("Posts").updateOne(query, data).then((err, result) => {
        if (err) throw err;
        if (result.modifiedCount === 0) {
          console.log("not found");
          res.sendStatus(400);
          return;
        }
        res.sendStatus(200);
      });
        // if (result.modifiedCount == 0) {
        //     res.sendStatus(400);
        //     return;
        // } else {
        //     res.sendStatus(200);
        //     return;
        // }
});

router.delete('/:username/:postid', async (req, res) => {
    var username = req.params.username;
    var token = req.cookies.jwt;
    if (token == undefined) {
        res.sendStatus(401);
        return;
    }
    var decoded = jwt.verify(token, secretKey);
    if (decoded.usr != username || decoded.exp * 1000 <= Date.now()) {
        res.sendStatus(401);
        return;
    }
    var postid = req.params.postid;
    if (!common.isValidId(postid)) {
        res.sendStatus(400);
        return;
    }
    postid = parseInt(postid, 10);
    db.collection("Posts").deleteOne({"username": username, "postid": postid}).then(result => {
        if (result.deletedCount > 0) {
            // it has to use sendStatus
            // otherwise delete will not synchronize the list (project 4)
            res.sendStatus(204); 
            return;
        } else {
            res.sendStatus(400);
        }
        
    }).catch((err) => {throw err});
});


module.exports = router;
