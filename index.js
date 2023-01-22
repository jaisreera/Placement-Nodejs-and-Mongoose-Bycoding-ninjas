const express=require('express')
const Port=process.env.PORT||8000

const app=express()

app.get('/',function(req,res){
    res.send('🎉 SERVER IS RUNNING ! 🎉')
})
app.listen(Port,function(err){
    if(err){
        console.log(err)
    }
    console.log("Server is Running Over Port: ",Port)
})