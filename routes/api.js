const express = require('express');
const router  = express.Router();

router.post('/:math', (req,res,next)=>{
  if(!req.body.num1 && !req.body.num2) {
  return  res.status(432).json({message:'no data fool'})
}
next ();
})

  router.post('/add', (req,res,next) => {
    res.json({result:req.body.num1+ req.body.num2})
})
router.post('/sub', (req,res,next) => {
  res.json({result:req.body.num1 - req.body.num2})
})

module.exports = router;
