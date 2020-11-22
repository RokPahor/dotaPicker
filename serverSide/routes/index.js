var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', async (req,res)=> { 
  //LOGIN
    try {
      const user = req.body;
      if(req.body.user.userName == process.env.EDITUSERNAME && req.body.user.password == process.env.EDITPASSWORD){
        const token = jwt.sign({ user }, process.env.SECRET);
        res.json({
          token: token
        })
      }
      else{
        res.sendStatus(400);
      }
    }
    catch(err){
        res.status(500).json({ message : err.message});
    }

});

module.exports = router;
