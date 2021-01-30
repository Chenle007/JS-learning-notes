//1 引入express
const express = require("express");

//创建应用对象
const app = express();

//创建路由规则
app.get("/server",(request,response)=>{
    response.setHeader("Access-Control-Allow-Origin","*");
    response.send("hello ajax");
});

app.post("/server",(request,response)=>{
    response.setHeader("Access-Control-Allow-Origin","*");
    response.send("hello ajax post");
});

//延时响应
app.get("/delay",(request,response)=>{
    response.setHeader("Access-Control-Allow-Origin","*");
    setTimeout(()=>{
        //设置响应体
        response.send("延时响应");
    },3000)
});

//监听端口启动服务
app.listen(8000,()=>{
    console.log("服务已经启动，8000 端口监听中...");
});