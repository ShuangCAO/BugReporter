console.log('<----- Content script started running ----->');
chrome.runtime.onMessage.addListener(
    function (request, sender) {
        console.log('第4步，content收到background的请求，动态添加inject.js');
        if (!sender.tab) {
            if (request.source == "background" && request.cmd == "uid") {
                addInject()
            }
        }
    });

window.addEventListener("message", function (event) {
    if (event.data.source === 'inject') {
        console.log('第7步，content接受inject返回');
        let uid = event.data.uid
        console.log('第8步，content向background返回');
        chrome.runtime.sendMessage({ uid, source: 'content' });
    }
}, false);



function addInject() {
    var s = document.createElement('script');
    s.src = chrome.extension.getURL('inject-script.js');
    s.onload = function () {
        console.log('第5步，添加inject.js脚本完成，调用inject内方法');
        window.postMessage({ "cmd": 'uid', "source": 'content' }, '*');
        this.parentNode.removeChild(this);
    };
    (document.head || document.documentElement).appendChild(s);
}