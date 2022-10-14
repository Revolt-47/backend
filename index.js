const express = require('express')
const app = express()
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.get("/api",(req,res , next)=>{
    res.json({"users":["userone","usertwo","userthree"]})
})


app.post("/api" , (req , res , next)=>{
    console.log(req.body)
   let name = req.body.name ;
//    let pass = req.body.pass;
console.log(name);
res.send({name:name})

})

app.listen(5000,()=>{
    console.log("server started on port 5000")
})