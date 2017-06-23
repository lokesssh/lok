var express = require('express');
var router = express.Router();
var URL="mongodb://Lokesssh:lokesh%401998@ds131492.mlab.com:31492/lokesh";

const db=require('monk')(URL)

const docs=db.get('lok')
/* GET home page. */
router.get('/WEL', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/find',function(req,res,next) {
    docs.find({}, function (err, docs) {
        if (err) console.log(err);
        else res.json(docs);
    })
});
    router.get('/in',function(req,res,next){
        docs.update({name:"lokesh"},{$set:{age:"19"}},function(err,docs){
            if(err) console.log(err);
            else res.json(docs);
        })
});
    router.get('/d2',function(req,res,next){
        docs.update({"id":"abc123"},{$push:{"group":{"name":"u1","name":"u2"}}},function(err,docs){
            if(err)
                console.log(err);
            else
                res.json(docs);
        })
    });
    router.get('/b',function(req,res,next){
        docs.find({},function(err,docs){
            if(err)
                console.log(err);
            else
                res.json(docs);
        })
    })
module.exports = router;
