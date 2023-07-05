//jshint esversion:6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

// Set up session
app.use(session({
secret:"Our little secret.",
resave: false,
saveUninitialized: false
}));

// Set up passport
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://127.0.0.1:27017/UserDb', {useNewUrlParser: true, useUnifiedTopology: true});


//Create a new user schema
const userSchema = new mongoose.Schema( {
    email: String,
    password: String
    });

// Set up passport local mongoose
userSchema.plugin(passportLocalMongoose);

//Create a new user model
const User = new mongoose.model("User", userSchema);

// Set up passport local mongoose
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// GET request
app.get("/", function(req, res){
res.render("home");  
  }
);


app.get("/register", function(req, res){
    res.render("register"); 
   }
    );
    
    app.get("/login", function(req, res){
        res.render("login");   
     }
        );

// GET request for secrets page
app.get("/secrets", function(req, res){
    if(req.isAuthenticated()){
        res.render("secrets");
    } else {
        res.redirect("/login");
    }
    });


// POST request
app.post("/register", function(req, res){
   User.register({username: req.body.username}, req.body.password, function(err, user){
    if(err){
        console.log(err);
        res.redirect("/register");
    } else {
        passport.authenticate("local")(req, res, function(){
            res.redirect("/secrets");
        });
    }

        });
    });

// Post request for login

// POST request
app.post("/login", function(req, res){
   const user = new User({
    username: req.body.username,
    password: req.body.password
   });
   req.login(user, function(err){
         if(err){
              console.log(err);
         } else {
              passport.authenticate("local")(req, res, function(){
                res.redirect("/secrets");
              });
         }
        }); 

    });

// Post request for logout
app.get("/logout", function(req, res){

    req.logout(function(err){
        if(err){
            console.log(err);
        }
    });

    res.redirect("/");
    });

        app.listen(3000, function(){
            console.log("Server started on port 3000.");
          }
            );
