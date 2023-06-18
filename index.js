const express=require('express');
const fs = require('fs');
// const env = require('./.env');
const PORT = process.env.env;
const Port=PORT||8000

const app=express();
const cookieParser = require('cookie-parser');
const mongoDb=require('./config/mongoose');
const passport=require('passport');
const passportLocal=require('./config/passport');
const MongoStore=require('connect-mongo');
const session = require('express-session');
const expressLayouts=require('express-ejs-layouts');


app.use(express.urlencoded({extended:true}));

app.use(cookieParser());

app.use(express.static('./assets'));

app.use(expressLayouts);

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);




// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');



app.use(session({
    name: 'Placement_Cell',
    // TODO change the secret before deployment in production mode

    secret: 'anything',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },

    store: MongoStore.create({
        //options)
    // store : new MongoStore({
       mongoUrl : "mongodb+srv://rahulkumar:Ul21nmsx0jh6if7g@rahul.xp4pjhu.mongodb.net/rahulkumar?retryWrites=true&w=majority",
        autoremove : "disabled",
    },function(err){
        console.log("error at mongo store",err || "connection established to store cookie");
    })
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use('/',require('./routes/index'))
app.listen(Port,function(err){
    if(err){
        console.log(err)
    }
    console.log("Server is Running Over Port: ",Port)
})