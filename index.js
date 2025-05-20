let express = require('express')

let app = express()

app.get('/',(req,res)=>{
    console.log(req.get('host'))
    console.log(req.ip)
    app.set('trust proxy', true)
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    res.send({status:"ok",response:"Hello World",host:req.get('host'),ip:ip})
    console.log(ip)
})
app.listen("3000")