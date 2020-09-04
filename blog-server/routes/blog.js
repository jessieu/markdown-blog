var express = require('express');
var router = express.Router();
var common = require('../public/javascripts/common');
var commonmark = require('commonmark');
var dbUtils = require('../models/connect');
var db = dbUtils.get();

var reader = new commonmark.Parser();
var writer = new commonmark.HtmlRenderer();
const pageSize = 5;

router.get('/:username', function (req, res) {
    var username = req.params.username;
    var start = req.query.start;
    // start is set but invalid - Non-numeric
    if (start && !common.isValidId(start)) {
        res.status(400).send("Invalid start value");
        return;
    }
    // if start is not given, set to 1 
    start = parseInt(start, 10) || 1;

    // outer query is used to get the number of posts
    db.collection('Posts').find({"username": username, "postid": {$gte: start}})
        .sort({postid: 1}).toArray().then(docs =>{
       if (docs.length > 0){
			start = docs[0].postid;
			// inner query is used to get first 5 posts
            db.collection('Posts').find({"username": username, "postid": {$gte:start}})
                .limit(pageSize).toArray().then((posts)=> {
                res.render('blog', {pageSize: pageSize, count: docs.length, 
                                    start: start, username: username, reader: reader, 
                                    writer: writer, posts: posts});
            });
        } else {
            res.status(404).send("Post Not Found");
            return;
        }
    });
});

router.get('/:username/:id', function(req, res) {
    var {username, id} = req.params;
	// check whether postid is valid or not
    if (!common.isValidId(id)) {
		res.status(400).send("Invalid postid");
		return;
    }
	id = parseInt(id, 10);
    db.collection('Posts').find({"username": username, "postid": id})
        .toArray().then(docs => {
        if(docs.length > 0) {
			// it will not use the next button since count is set to 1
			// so no need to pass a start
            res.status(200).render('blog', {count: 1, username: username, reader: reader, 
                writer: writer, posts: docs});
        } else {
			res.status(404).send("Post Not Found");
			return;    
		}
    });
});

module.exports = router;
