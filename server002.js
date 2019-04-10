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
    // 处理 跨域问题 允许所有
    res.set('Access-Control-Allow-Origin','*')

    // 允许某个
    // res.set('Access-Control-Allow-Origin','http://xxx.com')

    res.send(req.file.filename)
})

app.get('/preview/:key',(req,res)=>{
    console.log(req.params.key) // 获取 key
    res.sendFile(`yyy/${req.params.key}`,{
        root:__dirname,
        headers:{
            'Content-Type':'image/jpeg'
        }
    },(error)=>{
        res.status(404).send('file not found')
    })
})

app.listen(3000)