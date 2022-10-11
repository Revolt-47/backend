const express = require('express')
const app = express()
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(express.json());

app.get("/api",(req,res)=>{
    res.json({"users":["userone","usertwo","userthree"]})
})


app.post("/api" , (req , res)=>{
    console.log(req.body)
   let name = req.body.name ;
//    let pass = req.body.pass;
console.log(name);
res.json({name:name})

})

app.listen(5000,()=>{
    console.log("server started on port 5000")
})