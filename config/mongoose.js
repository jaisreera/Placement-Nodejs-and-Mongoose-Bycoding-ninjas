const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Placement_Cell');
mongoose.connect('mongodb+srv://8479946428ll:Rahul@1234@cluster0.e0ownwc.mongodb.net/?retryWrites=true&w=majority')
// mongoose.set('strictQuery', true);
const db = mongoose.connection

// dhuUUFrVUyfos65K



db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', ()=>{
    console.log("successfully connected to database : mongoDB");
});

module.exports = db;