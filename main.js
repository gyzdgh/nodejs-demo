
window.jQuery.ajax = function({url,method,body,headers}){
    return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest()
        request.open(method, url) // 配置request
        for (let key in headers) {
            let value = headers[key]
            request.setRequestHeader(key, value)
        }
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 300) {
                    resolve.call(undefined, request.responseText)
                } else if (request.status >= 400) {
                    reject.call(undefined, request)
                }
            }
        }
        request.send(body)
    })
}

myButton.addEventListener('click', (e) => {
    let promise = window.jQuery.ajax({
        url: '/gyz',
        method: 'get',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'age': '18'
        }
    })
    
    promise.then(
        (text) => { console.log(text) }, //resolve的回调函数
        (request) => { console.log(request) } //reject的回调函数
    )

})









//   AJAX请求
// let request = new XMLHttpRequest()
// request.open('get', 'url') // 配置request
// request.send()
// request.onreadystatechange = ()=>{
//   if(request.readyState === 4){
//       console.log('ajax的请求和响应已经结束了') 
//     if(request.status >= 200 && request.status < 300){
//       console.log('说明请求成功')
//     }else if(request.status >= 400){
//       console.log('说明请求失败') 
//     }
//   }
// }


