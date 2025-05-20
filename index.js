let express = require('express')

let app = express()

app.get('/',(req,res)=>{
    console.log(req.get('host'))
    res.send({status:"ok",response:"Hello World"})
})
app.listen("3000")