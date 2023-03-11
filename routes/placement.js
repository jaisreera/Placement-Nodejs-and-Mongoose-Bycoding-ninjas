const express=require('express')
const router=express.Router()
const placement=require('../controller/placementController')

// ---------------------------🚨 FOR DOWNLOADING THE CSV  🚨--------------------------
router.get('/download_csv',placement.download)





module.exports=router 