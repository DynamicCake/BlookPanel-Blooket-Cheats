(()=>{"use strict";var e={773:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(81),i=o.n(n),s=o(645),a=o.n(s)()(i());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]),a.push([e.id,'#blook-panel{position:absolute;background-color:#e6e6fa;border:1px solid #ccc;font-family:"Roboto",sans-serif;white-space:nowrap;resize:both;min-width:150px;overflow:hidden;transition:opacity .5s ease;opacity:1}#blook-panel .blook-panel-top-bar{cursor:move;background-color:#ccc;display:flex;flex-direction:row;padding:.5rem;align-items:center;justify-content:space-between;user-select:none}#blook-panel .blook-panel-top-bar .blook-panel-text{font-size:100%;order:1}#blook-panel .blook-panel-top-bar .blook-panel-images{order:2}#blook-panel .blook-panel-top-bar img{margin-left:50%;user-select:none}#blook-panel .blook-panel-modules{padding:1rem;background-color:#fff;margin:1rem}#blook-panel .blook-panel-modules .blook-panel-file-input{height:100px;width:100px;background-color:red}#blook-panel .blook-panel-modules .blook-panel-hover-over{background-color:green !important}',""]);const r=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",n=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),n&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),n&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,n,i,s){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var r=0;r<this.length;r++){var l=this[r][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);n&&a[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),o&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=o):d[2]=o),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},262:(e,t,o)=>{o.r(t),o.d(t,{default:()=>b});var n=o(379),i=o.n(n),s=o(795),a=o.n(s),r=o(569),l=o.n(r),c=o(565),d=o.n(c),u=o(216),h=o.n(u),p=o(589),m=o.n(p),f=o(773),v={};v.styleTagTransform=m(),v.setAttributes=d(),v.insert=l().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=h(),i()(f.Z,v);const b=f.Z&&f.Z.locals?f.Z.locals:void 0},379:e=>{var t=[];function o(e){for(var o=-1,n=0;n<t.length;n++)if(t[n].identifier===e){o=n;break}return o}function n(e,n){for(var s={},a=[],r=0;r<e.length;r++){var l=e[r],c=n.base?l[0]+n.base:l[0],d=s[c]||0,u="".concat(c," ").concat(d);s[c]=d+1;var h=o(u),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var m=i(p,n);n.byIndex=r,t.splice(r,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function i(e,t){var o=t.domAPI(t);return o.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;o.update(e=t)}else o.remove()}}e.exports=function(e,i){var s=n(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<s.length;a++){var r=o(s[a]);t[r].references--}for(var l=n(e,i),c=0;c<s.length;c++){var d=o(s[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}s=l}}},569:e=>{var t={};e.exports=function(e,o){var n=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(o)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,o)=>{e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var n="";o.supports&&(n+="@supports (".concat(o.supports,") {")),o.media&&(n+="@media ".concat(o.media," {"));var i=void 0!==o.layer;i&&(n+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),n+=o.css,i&&(n+="}"),o.media&&(n+="}"),o.supports&&(n+="}");var s=o.sourceMap;s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},875:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BlookPanel=void 0,o(262);const n=o(155),i=o(785),s=o(833),a=o(590),r=o(168);t.BlookPanel=class{constructor(e){this.isHidden=!1,this.panelName=e,this.blooketWindow=window,this.applicationHook=new s.BlooketHook,this.checkDomain(),this.panelElements=this.createElements(),this.registerEvents(),this.hook(),this.pageChangeListenerId=this.addPageChangeListener(),this.runScripts(),console.log("%c💉 Blook Panel Injected!","font-size:xx-large; color: red; text-shadow: 0.1rem 0.1rem 0 #000;"),console.log("%c⭐ Please star this project at https://github.com/DynamicCake/BlookPanel","font-size: x-large; color: yellow; text-shadow: 0.1rem 0.1rem 0 #000;")}cleanUp(e,t,o){e.remove(),this.applicationHook.unhookSetState(t),clearInterval(this.pageChangeListenerId),o.isPanelInjected=!1,console.log("Successfully cleaned up!")}getReactHandler(){return Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner}addPageChangeListener(){let e=window.location.href;return setInterval((()=>{const t=window.location.href;t!==e&&(e=t,this.applicationHook.isHooked(this.getReactHandler)||(this.applicationHook.hookSetState(this.getReactHandler,this.stateChangeEvent),this.applicationHook.hookOriginalSetState(this.getReactHandler)),this.runScripts())}),1e3)}runScripts(){if(r.Config.version!==a.Panel.version)throw new Error(`Config version is ${r.Config.version} but BlookPanel version is ${a.Panel.version}`);let e=r.Config.modules[window.location.pathname];void 0===e?(console.warn(`No modules found for the path ${window.location.pathname}`),e=[]):console.log("Found scripts!"),this.panelElements.modules.unload(),this.panelElements.modules.load(e)}checkDomain(){if(!/blooket\.com$/.test(window.location.hostname))throw alert("Please use this panel on blooket.com"),new Error("Cannot initialize if hostname isn't blooket.com");if(this.blooketWindow.isPanelInjected)throw alert("Panel already injected! Aborting..."),new Error("Panel already injected")}createElements(){const e=this.panelName,t=document.createElement("div");t.id=this.panelName,t.innerHTML=`\n            <div class="${e}-top-bar">\n              <div class="${e}-text">\n                <p>Blook Panel</p>\n              </div>\n              <div class="${e}-images">\n                <button class="${e}-minimize"></button>\n                <button class="${e}-close"></button>\n              </div>\n            </div>\n            <div class="${e}-modules"></div>\n        `,document.body.append(t);const o=document.querySelector(`#${e} .${e}-top-bar`),i=new n.BlookPanelModuleList(this,document.querySelector(`#${e} .${e}-modules`)),s=document.querySelector(`#${e} .${e}-top-bar .${e}-close`);s.innerHTML="x";const a=document.querySelector(`#${e} .${e}-top-bar .${e}-minimize`);return a.innerHTML="-",{rootElement:t,topBar:o,modules:i,closeButton:s,minimizeButton:a}}registerEvents(){this.makeDraggable(this.panelElements.rootElement,this.panelElements.topBar),this.panelElements.closeButton.addEventListener("click",(()=>{this.cleanUp(this.panelElements.rootElement,this.getReactHandler,this.blooketWindow)})),this.panelElements.minimizeButton.addEventListener("click",(()=>{this.toggleShow()})),document.addEventListener("keydown",(e=>{e.key===r.Config.hideKey&&this.toggleShow()})),this.panelElements.rootElement.addEventListener("transitionend",(()=>{this.isHidden?this.panelElements.rootElement.style.display="none":this.panelElements.rootElement.style.display="block"}))}toggleShow(){this.isHidden?(this.panelElements.rootElement.style.opacity="1",this.isHidden=!1):(this.panelElements.rootElement.style.opacity="0",this.isHidden=!0)}hook(){this.stateChangeEvent=new i.StateChangeEvent,this.applicationHook.hookSetState(this.getReactHandler,this.stateChangeEvent),this.applicationHook.hookOriginalSetState(this.getReactHandler),this.blooketWindow.isPanelInjected=!0}makeDraggable(e,t){let o,n,i,s;function a(t){var a=t.clientX-o,r=t.clientY-n;a=Math.max(0,Math.min(a,i-e.offsetWidth)),r=Math.max(0,Math.min(r,s-e.offsetHeight)),e.style.left=a+"px",e.style.top=r+"px"}function r(){document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",r)}t.addEventListener("mousedown",(function(t){o=t.clientX-e.offsetLeft,n=t.clientY-e.offsetTop,i=window.innerWidth||document.documentElement.clientWidth,s=window.innerHeight||document.documentElement.clientHeight,document.addEventListener("mousemove",a),document.addEventListener("mouseup",r)}))}}},155:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BlookPanelModuleList=void 0,t.BlookPanelModuleList=class{constructor(e,t){this.element=t,this.blookPanel=e}unload(){void 0!==this.modules&&(this.modules.forEach((e=>{void 0!==e&&e.onShutdown()})),this.element.innerHTML="",this.modules=[])}load(e){this.modules=[],e.map(((e,t)=>{const o=document.createElement("div");e.onInit(this.blookPanel,o),this.modules[t]=e,this.element.append(o)}))}}},833:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BlooketHook=void 0;const n=o(916);t.BlooketHook=class{hookOriginalSetState(e){e().stateNode.originalSetState=this.setStateFunction}hookSetState(e,t){if(this.isHooked(e))throw new Error("setState function is already hooked");let o=e().stateNode.setState;this.setStateFunction=o,e().stateNode.setState=function(){const i=t.emit(new n.StateChangeEventData(e().stateNode.state,arguments,Date.now()));i.isCanceled||o.call(this,...i.arguments)}}unhookSetState(e){if(void 0===this.setStateFunction)throw new Error("setState function is not hooked");e().stateNode.setState=this.setStateFunction}isHooked(e){return e().stateNode.setState!==this.setStateFunction&&void 0!==this.setStateFunction}}},228:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.EventPriority=void 0,(o=t.EventPriority||(t.EventPriority={}))[o.LOWEST=-2]="LOWEST",o[o.LOW=-1]="LOW",o[o.NORMAL=0]="NORMAL",o[o.HIGH=1]="HIGH",o[o.HIGHEST=2]="HIGHEST",o[o.MONITOR=3]="MONITOR"},785:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.StateChangeEvent=void 0;const n=o(835),i=o(228);t.StateChangeEvent=class{constructor(){this.subscribers=new Map}subscribe(e,t){const o=(0,n.jenkinsHash)(e);return this.subscribers.set(o,t),o}quickSubscribe(e,t){const o=(0,n.jenkinsHash)(e);return this.subscribers.set(o,{callback:t,priority:i.EventPriority.NORMAL}),o}subscribeWithId(e,t){this.subscribers.set(e,t)}unsubscribe(e){this.subscribers.delete((0,n.jenkinsHash)(e))}unsubscribeWithId(e){this.subscribers.delete(e)}emit(e){let t=[];for(const e of Object.values(i.EventPriority))t[e]=[];for(let[,e]of this.subscribers)t[e.priority].push(e.callback);let o=e;for(const n of t)for(const t of n)o=t.call(null,e);return o}}},916:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.StateChangeEventData=void 0,t.StateChangeEventData=class{constructor(e,t,o){this.before=e,this.arguments=t,this.originalArguments=t,this.time=o,this.isCanceled=!1}}},835:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.jenkinsHash=t.EventPriority=t.EventData=t.AbstractStateChangeEvent=void 0,t.AbstractStateChangeEvent=class{},t.EventData=class{},function(e){e[e.LOWEST=-2]="LOWEST",e[e.LOW=-1]="LOW",e[e.NORMAL=0]="NORMAL",e[e.HIGH=1]="HIGH",e[e.HIGHEST=2]="HIGHEST",e[e.MONITOR=3]="MONITOR"}(o||(o={})),t.EventPriority=o,t.jenkinsHash=function(e){let t=0;for(let o=0;o<e.length;o++){let n=e.charCodeAt(o);n>=55296&&n<=56319&&(n=1024*(n-55296)+(e.charCodeAt(++o)-56320)+65536),t+=n,t+=t<<10,t^=t>>>6}return t+=t<<3,t^=t>>>11,t+=t<<15,t>>>0}},590:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Panel=void 0;class o{}t.Panel=o,o.version="1.0"},168:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Config=void 0,t.Config={version:"1.0",hideKey:"Escape",modules:{}}}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var s=t[n]={id:n,exports:{}};return e[n](s,s.exports,o),s.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nc=void 0,(()=>{const e=o(875);try{new e.BlookPanel("blook-panel")}catch(e){console.log("%c⚠️ An error has occurred, please report this as an issue at https://github.com/DynamicCake/BlookPanel","font-size:large; color: red; text-shadow: 0.1rem 0.1rem 0 #000;"),console.error(e)}})()})();