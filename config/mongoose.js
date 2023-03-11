const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Placement_Cell');
// mongoose.set('strictQuery', true);
const db = mongoose.connection


db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', ()=>{
    console.log("successfully connected to database : mongoDB");
});

module.exports = db;