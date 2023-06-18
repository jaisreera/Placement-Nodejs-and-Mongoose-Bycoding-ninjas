
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
// mongoose.connect('mongodb://localhost:27017/Placement_Cell');
mongoose.connect('mongodb+srv://rahulkumar:Ul21nmsx0jh6if7g@rahul.xp4pjhu.mongodb.net/rahulkumar?retryWrites=true&w=majority');
// mongoose.set('strictQuery', true);
const db = mongoose.connection;
//rahulkumar
// dhuUUFrVUyfos65K

//Ul21nmsx0jh6if7g


db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', ()=>{
    console.log("successfully connected to database : mongoDB");
});

module.exports = db;