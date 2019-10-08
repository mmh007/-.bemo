const express=require('express');
const bodyParser=require('body-parser');
const mysql=require('mysql');
//创建web服务器
var server=express();
server.listen(3000);
//托管静态资源到public目录下
server.use(express.static('public'));
//使用body-parser中间件
server.use(bodyParser.urlencoded({
  extended:false
}));
//连接mysql
var pool=mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'',
  database:'tedu',
  connectionLimit:20
});
//路由
server.post('/add',(req,res)=>{
  //获取post请求的数据
  //console.log(req.body);
  //获取的数据是对象，将数据插入到数据库中
  //执行SQL语句，把数据插入到数据库中
  pool.query('INSERT INTO dept SET ?',[req.body],(err,result)=>{
    if(err) throw err;
	//console.log(result);
	//判断数据是否插入成功
	if(result.affectedRows>0){
	  res.send({code:200,msg:'add success'});
	}
  });
});





