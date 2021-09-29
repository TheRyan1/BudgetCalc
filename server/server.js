const express = require('express')
const app = express();

const port = 5000;

app.listen(port,()=>{
    console.log("sever up")
});

app.get('/',(req,res)=>{
    res.send("server up")
    console.log("a request was called")
})