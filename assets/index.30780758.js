import{o as c,c as d,a as s,p as u,b as m,X as f,w as g,z as p,T as _,M as h,A as y,P as v,W as S,N as b,D as w,R as E,O as k,d as L,e as N}from"./vendor.23646de6.js";const A=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}};A();const B={class:"main-toolbar"},I=s("span",null,"\xA0\xA0\xA0\xA0\u7F16\u8F91\u56FE\u7247\u65F6\uFF0C\u9009\u4E2D\u5DE5\u5177\u540E\uFF0C\u989C\u8272\u53CA\u7C97\u7EC6\u9009\u5728\u5728\u6700\u4E0B\u9762\uFF01",-1),x=s("textarea",{placeholder:"\u95EE\u9898\u63CF\u8FF0\u5199\u5728\u8FD9\u91CC"},null,-1),O={setup(l){function t(){let r={};if(!window.location.href.startsWith("http://localhost:3000")){let i=chrome.extension.getBackgroundPage().currentScreenSnap;r.width=i.width,r.height=i.height,r.url=i.url}r.system=u.description,alert(`\u5982\u4E0B\u4FE1\u606F\u5C06\u540C\u6B65\u63D0\u4EA4\uFF1A

`+JSON.stringify(r)+`

(\u968F\u7740UA\u7684\u5E9F\u5F03\uFF0C\u64CD\u4F5C\u7CFB\u7EDF\u7248\u672C\u53EF\u80FD\u4E0D\u5BF9)
`)}return(r,i)=>(c(),d("div",B,[I,x,s("button",{onClick:i[0]||(i[0]=e=>r.$emit("editImage",e))},"\u7F16\u8F91\u56FE\u7247"),s("button",{onClick:t},"\u73AF\u5883\u4FE1\u606F")]))}};const M={class:"edit-image-container"},P=s("img",{id:"image2edit"},null,-1),C={setup(l){let t;m(()=>{const o=document.getElementById("image2edit");if(o.onload=function(){setTimeout(()=>{r()},0)},window.location.href.startsWith("http://localhost:3000"))o.src="demo.png";else{let a=chrome.extension.getBackgroundPage().currentScreenSnap;o.src=a.image}});function r(){const o=document.getElementById("image2edit");t=new f(o),t.renderAtNaturalSize=!0,t.availableMarkerTypes=[g,p,_,h,y,v,S,b,w,E,k],t.uiStyleSettings.toolbarHeight="40",t.addEventListener("render",a=>{o.onload=null,o.src=a.dataUrl,i()}),t.addEventListener("beforeclose",e),t.show()}function i(){console.log("imageEditDone")}function e(){console.log("imageEditClose")}function n(){t.show()}return(o,a)=>(c(),d("div",M,[L(O,{onEditImage:n}),P]))}};N(C).mount("#app");
