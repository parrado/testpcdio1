(window.webpackJsonpmyfirstreact=window.webpackJsonpmyfirstreact||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),i=n.n(r),c=(n(9),n(10),n(11),n(3)),s="333785";function l(){var e=new XMLHttpRequest;e.open("GET","https://api.thingspeak.com/channels/"+s+"/feeds/last.json",!0),e.send(),e.onload=function(){var t=JSON.parse(e.responseText);alert(t.field1)},e.onerror=function(){alert("No puedo conectarme a ThingSpeak :(")}}var p=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-headers"},o.a.createElement("p",null,"Edit ",o.a.createElement("code",null,"src/App.js")," and save to reload.")),o.a.createElement("button",{onClick:l},"Click me!"),o.a.createElement("p",null,o.a.createElement(c.a,{url:"https://thingspeak.com/channels/333785/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15",width:"450px",height:"450px",id:"myId",className:"myClassname",display:"initial",position:"relative"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.e6460430.chunk.js.map