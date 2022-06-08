//导入http模块
const http = require('http');
//导入fs模块
const fs = require('fs');
//导入path模块
const path = require('path');

//创建web服务器
const server = http.createServer();
//监听web服务器的request事件
server.on('request', (req, res) => {
  //获取客户端请求的url
  const url = req.url;
  //把请求的url映射为具体文件的存放路径
  const fpath = path.join(__dirname, url);
  /* const fpath = '';
  if (url === '/') {
    fpath = path.join(__dirname, './shoping/index.html')
  } else {
    fpath path.join(__dirname, '/soping', url)
  } */
  //根据映射过来的文件路径读取文件内容；
  fs.readFile(fpath, 'utf8', (err, dataStr) => {
    if (err) return res.end('404 Not found')
    res.end(dataStr);
  });
});
//启动服务器
server.listen(80, () => {
  console.log('server running at http://127.0.0.1')
});