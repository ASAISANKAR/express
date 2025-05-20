let express = require('express')

let app = express()

app.get('/',(req,res)=>{
    console.log(req.get('host'))
    console.log(req.ip)
    res.send({status:"ok",response:"Hello World",host:req.get('host')})
})
app.listen("3000")