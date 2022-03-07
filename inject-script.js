console.log('<----- Injected script started running ----->');

function eventFunc(event) {
    window.removeEventListener("message", eventFunc)
    if(event.data.source==='content'){
        console.log('第6步，inject被调用，再调用原生网页的方法获取数据，再向content返回');
        if(event.data.cmd==='uid'){
            window.postMessage({"uid": onCCC(),"source":'inject' }, '*');
        }
    }
}
window.addEventListener("message", eventFunc , false);
