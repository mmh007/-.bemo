#设置连接服务器的编码
SET NAMES UTF8;
#丢弃数据库tedu，如果存在
DROP DATABASE IF EXISTS tedu;
#创建数据库tedu，设置存储的编码
CREATE DATABASE tedu CHARSET=UTF8;
#进入该数据库
USE tedu;
#创建部门表
CREATE TABLE dept(
  did TINYINT PRIMARY KEY,
  dname VARCHAR(8)
);
#插入数据
INSERT INTO dept VALUES
(10,'研发部'),
(20,'市场部'),
(30,'运营部'),
(40,'测试部');
#创建员工表
CREATE TABLE emp(
  eid INT PRIMARY KEY AUTO_INCREMENT,
  ename VARCHAR(8),
  sex BOOL,
  birthday DATE,
  salary DECIMAL(7,2), #99999.99
  deptId TINYINT,
  FOREIGN KEY(deptId) REFERENCES dept(did)
);





