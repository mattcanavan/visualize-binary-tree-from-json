(this["webpackJsonp2021-01-25_micro-binary-tree"]=this["webpackJsonp2021-01-25_micro-binary-tree"]||[]).push([[0],[,,,,,,,,,,,function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){"use strict";t.r(e);var r=t(0),l=t(1),u=t.n(l),a=t(4),i=t.n(a),c=(t(11),t(2));t(12),t(13);function s(n){var e=n.setUserInput;return Object(r.jsx)("div",{className:"input__container",children:Object(r.jsxs)("form",{children:[Object(r.jsx)("label",{children:Object(r.jsx)("h1",{children:"USER INPUT"})}),Object(r.jsx)("textarea",{className:"field",name:"textarea",type:"textarea",placeholder:'\n\nPASTE JSON BLOB HERE...\n\nEXAMPLE:\n\n{\n    "value": 5,\n    "left": {\n        "value": 7,\n        "left": null,\n        "right": null\n    },\n    "right": {\n        "value": 22,\n        "left": {\n            "value": 17,\n            "left": null,\n            "right": null\n        },\n        "right": {\n            "value": 9,\n            "left": null,\n            "right": null\n        }\n    }\n}\n',onChange:function(n){e({userInput:n.target.value})}})]})})}t(14);function f(n){if(null===n)return 0;var e=f(n.left),t=f(n.right);return Math.max(e,t)+1}function h(n){var e=u.a.useState([[5],[7,22],["None","None",17,9]]),t=Object(c.a)(e,2),l=t[0],a=t[1],i=n.BFTarray,s=n.JSONtree;return u.a.useEffect((function(){a(function(n,e){var t={0:1,1:2,2:4,3:8,4:16,5:32,6:64};if(void 0===e)return null;for(var r=f(e.left),l=f(e.right),u=Math.max(r,l),a=[],i=0;i<=u;i++){var c=t[i]-1,s=t[i+1]-1;a.push(n.slice(c,s))}return a}(i,s)),console.log("levels",l)}),[i,s]),i?Object(r.jsxs)("div",{className:"output__container",children:[Object(r.jsx)("h1",{children:"OUTPUT"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),l&&l.map((function(n,e){return Object(r.jsx)("h2",{children:n.join("".concat("\xa0".repeat(e)))},e)}))]}):null}var o=t(5),j=function n(e){Object(o.a)(this,n),this.value=e,this.left=null,this.right=null};var v=function(){var n=u.a.useState({userInput:'{\n    "value": 5,\n    "left": {\n        "value": 7,\n        "left": null,\n        "right": null\n    },\n    "right": {\n        "value": 22,\n        "left": {\n            "value": 17,\n            "left": null,\n            "right": null\n        },\n        "right": {\n            "value": 9,\n            "left": null,\n            "right": null\n        }\n    }\n}'}),e=Object(c.a)(n,2),t=e[0],l=e[1],a=u.a.useState(),i=Object(c.a)(a,2),f=i[0],o=i[1],v=u.a.useState(),b=Object(c.a)(v,2),p=b[0],O=b[1];return u.a.useEffect((function(){o(function(n){try{return function n(e){if(void 0===e)return null;if(null===e)return null;var t=new j(e.value);return t.left=n(e.left),t.right=n(e.right),t}(JSON.parse(n))}catch(e){}}(t.userInput))}),[t]),u.a.useEffect((function(){O(function(n){if(null===n)return null;var e=[],t=[];for(t.push(n);t.length>0;){var r=t.shift();if(void 0===r)break;"None"!==r?(e.push(r.value),null===r.left?t.push("None"):t.push(r.left),null===r.right?t.push("None"):t.push(r.right)):e.push("None")}return e}(f))}),[f]),Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("div",{className:"App__flexcontainer",children:[Object(r.jsx)(s,{setUserInput:l,userInput:t}),Object(r.jsx)(h,{BFTarray:p,JSONtree:f})]})})},b=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(e){var t=e.getCLS,r=e.getFID,l=e.getFCP,u=e.getLCP,a=e.getTTFB;t(n),r(n),l(n),u(n),a(n)}))};i.a.render(Object(r.jsx)(u.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root")),b()}],[[15,1,2]]]);
//# sourceMappingURL=main.4534851d.chunk.js.map