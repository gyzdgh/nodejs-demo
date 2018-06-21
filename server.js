var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var path = request.url 
  var query = ''
  if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/









  console.log('HTTP 路径为：\n' + pathWithQuery)

  if(path === '/'){
    let string = fs.readFileSync('./index.html','utf8')
    response.statusCode = 200
    response.setHeader('content-type','text/html;charset=utf-8')
    response.write(string)
    response.end()
  }else if(path === '/main.js'){
    let string = fs.readFileSync('./main.js','utf8')
    response.statusCode = 200
    response.setHeader('content-type','text/html;charset=utf-8')
    response.write(string)
    response.end()
  }else if(path === '/gyz'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/json;charset=utf-8')
    //实现跨域请求(访问另一个网站的数据)的方法
    // response.setHeader('Access-Control-Allow-Origin', 'http://frank.com:8001')
    response.write(`
    {
      "note":{
        "to": "小明",
        "from": "小红",
        "heading": "打招呼",
        "content": "hi"
      }
    }
    `)
    response.end()
  }else{
    response.statusCode = 404
    response.setHeader('content-type','text/html;charset=utf-8')
    response.write(`
      {
        "error": "not found"
      }
    `)
    response.end()
  }




  // if(path == '/style'){
  //   response.setHeader('content-type','text/css;charset=utf-8')
  //   response.write('body{background:#ddd;}h1{color:red}')
  //   response.end()
  // }else if(path == '/script'){
  //   response.setHeader('content-type','text/javascript;charset=utf-8')
  //   response.write('alert("这是js执行的")')
  //   response.end()
  // }else if(path == '/index'){
  //   response.setHeader('content-type','text/html;charset=utf-8')
  //   response.write('<!DOCTYPE>\n<html>' +
  //     '<head><link rel="stylesheet" href="/style">' +
  //     '</head><body>' +
  //     '<h1>你好</h1>' +
  //     '<script src="/script"></script>' +
  //     '</body></html>')
  //   response.end()
  // }else{
  //   response.statusCode = 404 
  //   response.end()
  // }
  










  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)


