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
        docs.update({name:"lokesh"},{$set:{age:"20"}},function(err,docs){
            if(err) console.log(err);
            else res.json(docs);
        })

});
    route.get('/ini',function(req,res,next)
{
    docs.update({name: "lokesh"},{$set:{batch:"2018"}},function(err, docs){
        if (err) console.log(err);
        else res.json(docs);
    })
});

module.exports = router;
