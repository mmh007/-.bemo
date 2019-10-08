const http = require("http");

http.createServer((req,res)=>{
    //var 被包裹
    var weather="晴 -10~-2 from dong";
    //写上这段话，实现跨域
    res.writeHead(200,{
        //"http://127.0.0.1:5500"
        "Access-Control-Allow-Origin":"*"
    })
    res.write(weather);
    res.end();

}).listen(3000,function(){
    console.log("服务端已启动，监听3000端口....");
});