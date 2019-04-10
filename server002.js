const express = require('express')
const multer  = require('multer') // 获取上传文件的插件

// yyy是 上传文件存储的位置
const upload = multer({ dest: 'yyy/' }) 
const app = express()

app.get('/',(req,res)=>{
    res.send('hello')
})

// xxx 就是上传 input file 对应的 name字段
app.post('/upload',upload.single('xxx'),(req,res)=>{
    console.log(req.file);
    res.send('here')
})

app.listen(3000)