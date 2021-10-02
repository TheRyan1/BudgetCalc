const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User = require('./Mongo/schema')
require('dotenv').config()
const bcrypt = require('bcrypt');

const connectDB = async ()=>{
try{
    await mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true });
    console.log("connected")
}
catch(err){
    console.log(err)
}
   
}
//connectDB();

const port = 5000;

app.listen(port,()=>{
    console.log("sever up")
});


app.get('/login/',(req,res)=>{
    const checkUserLogin = (password)=> {
     
        // input password to be hashed
        const checker = () =>{
            bcrypt.hash("123",5,(err,hash)=>{
                //log the encrypted password
                console.log('Your encrypted password is: ' + hash)
                //test that the inputted password is correct
                bcrypt.compare(password,hash,(err,result)=>{
              return result
            
                })
            })  
        }

    }
console.log(checkUserLogin(123))

})

app.post('/:username/:password',(req,res)=>{

const addUser =  ()=>{
    const newUser = new User({
        username: "",
        password: "",
        salary: 0,
        rent: 0,
        food: [],
        travel: [],
        extra: []
    })
    newUser.save();
    res.send("sent")
}
addUser()
})






