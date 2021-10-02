const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User = require('./Mongo/schema')

const connectDB = async ()=>{
try{
    await mongoose.connect('mongodb+srv://ryan123:ryan123@cluster0.lcwid.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true });
    console.log("connected")
}
catch(err){
    console.log(err)
}
   
}
connectDB();

const port = 5000;

app.listen(port,()=>{
    console.log("sever up")
});



app.post('/',(req,res)=>{

const addUser =  ()=>{
    const newUser = new User({
        username: "Ryan",
        password: "123",
        salary: 17000,
        rent: 4000,
        food: [{name:"groceries",cost:22}],
        travel: [],
        extra: []
    })
    newUser.save();
    res.send("sent")
}
addUser()
})






