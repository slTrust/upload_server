const express = require('express')
const cors = require('cors') // 设置跨域的插件
const multer  = require('multer') // 获取上传文件的插件
// uploads 是 上传文件存储的位置
const upload = multer({ dest: 'uploads/' }) 
const p = require('path')

const app = express()

app.options('/upload',cors());
app.get('/',(req,res)=>{
    res.send('hello')
})

// file 就是上传 input file 对应的 name字段
app.post('/upload',cors(),upload.single('file'),(req,res)=>{
    let filename = req.file.filename;
    let object = {id:filename}
    res.send(JSON.stringify(object)); // 序列化
})

app.get('/preview/:key',cors(),(req,res)=>{
    res.sendFile(`uploads/${req.params.key}`, {
        root: __dirname,
        headers:{
          'Content-Type': 'image/jpeg',
        },
      }, (error)=>{
        if(error){
          res.status(404).send('Not found')
        }
    })
})

var port = process.env.PORT || 3000
console.log(port);
app.listen(port)