//1.含义：协议相同，域名相同，端口相同
//2.目的：保护用户信息安全
//3.限制范围：Cookie、LocalStrage、IndexDB无法读取
//DOM无法获得，AJAX不能发送

//4.Cookie服务器写入浏览器的一小段信息，同源网络共享
//一级域名相同，二级域名不同，设置document.domin共享
document.domain = 'example.com'
document.cookie = 'test1=hello'
var allCookie = document.cookie
//只适合Cookie和iframe
//服务端设置，
//Set-cookie:key=value;domain=.example.com;path=/

//二级三级域名可以读到Cookie

//5.iframe
//两个网页不同源,iframe窗口和window.open打开的窗口，与父窗口无法通信
//一级域名相同，二级域名不同，使用document.domain可以规避同源政策
// 完全不同源的有3种方法，解决跨域通信问题
// 1. 片段标识符
//父窗口
var src = originURL + '#' + data
document.getElementById('myIFrame').src = src
//子窗口
window.onhashchange = checkMessage
function checkMessage() {
  var message = window.location.hash
}
//子窗口改变父窗口的片段标识符
parent.location.href = tarage + '#' + hash

// 2. window.name
window.name = data
location = 'http://parent.url.com/xxx.html'
var data = document.getElementById('myFrame').contentWindow.name

// 3. 跨文档通信api
// H5新增window.postMessage方法
var popup = window.open('http://bbb.com', 'title')
popup.postMessage('hello world', 'http://bbb.com')
window.opener.postMessage('nice to see you', 'http://aaa.com')
window.addEventListener(
  'message',
  function(e) {
    console.log(e.data)
  },
  false
)

//6. AJAX
//请求只能发给同源的网址，否则报错
//规避的三种方法
// 1. JSONP
// 跨域通信的常用方法
//a.插入<script>元素向跨源网址发送请求
function addScriptTag(src) {
  var script = document.createElement('script')
  script.setAttribute('type', 'text/javascript')
  script.src = src
  document.body.appendChild(script)
}
window.onload = function() {
  addScriptTag('http://example.com/ip?callback=foo')
}
function foo(data) {
  console.log('You public IP adress is:' + data.ip)
}

foo({
  ip: '8.8.8.8'
})
// 2. WebSocket
// 通信协议使用ws://和wss://协议前缀。只要服务器支持就可以
//请求头
// GET /chat HTTP/1.1
// Host: server.example.com
// Upgrade: websocket
// Connection: Upgrade
// Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
// Sec-WebSocket-Protocol: chat, superchat
// Sec-WebSocket-Version: 13
// Origin: http://example.com
//响应
// HTTP/1.1 101 Switching Protocols
// Upgrade: websocket
// Connection: Upgrade
// Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
// Sec-WebSocket-Protocol: chat
// 3. CORS
// Cross-Origin Resource Sharing跨源资源共享
// 跨源AJAX根本解决方法
// 允许浏览器向跨源服务器，发出XMLHttpRequest请求,克服AJAX只能同源使用的限制
// 支持IE>10
// 浏览器自动完成，实习CORS关键是服务器
// a. 2种请求:简单请求和非简单请求
// 简单请求
// 1. HEAD,GET,POST
// 2. Accept,Accept-language,Content-Langage,Last-Event-ID,Content-Type
// 凡是超出上面范围的为非简单请求
//
