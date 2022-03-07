console.log('<----- Background script started running ----->');

var currentScreenSnap={};
var userInfo;
chrome.browserAction.onClicked.addListener(onClick);
function onClick() {
  console.log('第1步，点击插件按钮');
  chrome.tabs.captureVisibleTab(null, {
    format: 'png'
  }, captureVisibleTabCB);
}


function captureVisibleTabCB(data) {
  console.log('第2步，获取图像');
  currentScreenSnap.image = data;
  console.log(document.body.clientWidth);
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let tab = tabs[0]
    currentScreenSnap.width = tab.width
    currentScreenSnap.height = tab.height
    currentScreenSnap.url = tab.url
  })
  chrome.tabs.create({ url: chrome.extension.getURL('index.html') });
  //异步获取其他信息，不影响展示编辑
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log('第3步，向网页请求uid,实际上是向content请求');
    chrome.tabs.sendMessage(tabs[0].id, { cmd: "uid", source: 'background' });
  });
}

chrome.runtime.onMessage.addListener(
  function (request) {
    if (request.source === 'content') {
      console.log('第9步，background收到content返回:', request.uid);
      userInfo = { uid: request.uid }
    }
  });


chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.cmd === "close_editor_tab") {
    chrome.tabs.remove(sender.tab.id);
  }
});
