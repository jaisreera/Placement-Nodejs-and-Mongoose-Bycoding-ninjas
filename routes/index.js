const express=require('express')
const router=express.Router()


router.use('/employee',require('./employee'))
router.use('/placement',require('./placement'))
router.get('/',function(req,res){
    // return res.send('<h1>🍾 server running 🍾</h1>')
    res.render('home')
})

module.exports=router
