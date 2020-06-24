(this["webpackJsonpok-beamer"]=this["webpackJsonpok-beamer"]||[]).push([[0],{101:function(e,t){},102:function(e,t){},103:function(e,t){},104:function(e,t){},105:function(e,t){},106:function(e,t,n){},107:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n.n(a),c=n(49),o=n.n(c),i=(n(71),n(72),function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"logo-name"},"Ok Beamer"))});i.defaultProps={};var l=i,s=n(12),u=(n(73),function(e){return r.a.createElement("div",{className:"button button-".concat(e.type),onClick:e.onClick},e.text)});u.defaultProps={type:"default"};var d=u,f=(n(26),function(e){var t=e.error,n=e.nextView;return r.a.createElement("div",{className:"centered-view"},r.a.createElement("p",{className:"view-text"},t," Do you want to try again?"),r.a.createElement(d,{text:"Try again",onClick:n}))});f.defaultProps={};var m=f,v=function(e){var t=e.nextView,n=e.errorHandler;return r.a.createElement("div",null,r.a.createElement("h2",null,"What is this?"),r.a.createElement("p",{className:"description-text"},r.a.createElement("b",null,"OkBeamer")," is a tool made to remove transitions from PDFs created with Beamer or any other software. Doing this will not only create a smaller file, but an actually printable one."),r.a.createElement("h2",null,"How does it work?"),r.a.createElement("p",{className:"description-text"},"First you upload the file with the button below \ud83d\udc47. After that, you'll be asked to draw a rectangle over the area that indicates change. This is usually either the title or the page number. And... ",r.a.createElement("i",null,"Voil\xe0")),r.a.createElement("div",{className:"centered-view"},r.a.createElement("p",{className:"view-text"},"Ready?!"),r.a.createElement(d,{text:"Choose File",type:"success",onClick:function(){var e=document.createElement("input");e.type="file",e.accept="application/pdf",e.onchange=function(a){var r=a.target.files[0];e.remove();var c=new FileReader;c.readAsDataURL(r),c.onload=function(){return t(c.result)},c.onerror=function(){return n("Unable to convert the given file \ud83d\ude15.")}},e.click()}})))};v.defaultProps={};var p=v,h=n(23),b=n.n(h),w=n(33),g=n(28),E=n.n(g),x=(n(106),function(){return r.a.createElement("div",{className:"loader"})}),k=function(e){var t=e.file,n=e.nextView,a=e.errorHandler;return function(){var e=Object(w.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=E.a.getDocument(t),e.prev=1,e.t0=n,e.next=5,r.promise;case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(1),a("Oh no, seems like that PDF file isn't valid \ud83d\ude36");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()(t),r.a.createElement("div",{className:"centered-view"},r.a.createElement(x,null),r.a.createElement("p",{className:"view-text"},"Loading your PDF"))};k.defaultProps={};var O=k,y=(n(107),function(e){var t=e.pdf,n=e.sendCoords,c=Object(a.useState)(!1),o=Object(s.a)(c,2),i=o[0],l=o[1],u=Object(a.useRef)(null),d=Object(a.useRef)(null),f=Object(a.useRef)(null),m=Object(a.useState)({startX:-1,startY:-1}),v=Object(s.a)(m,2),p=v[0],h=v[1],b=Object(a.useRef)(!1);Object(a.useEffect)((function(){i||t.getPage(1).then((function(e){var t=700/e.view[2],n=e.getViewport({scale:t}),a=u.current.getContext("2d");u.current.height=n.height,u.current.width=n.width,a.fillStyle="rgba(0, 102, 204)";var r={canvasContext:a,viewport:n};e.render(r),d.current=e,f.current=r,l(!0)}))}));return r.a.createElement("canvas",{ref:u,id:"drawable-canvas",onMouseDown:function(e){var t=e.clientX,n=e.clientY;d.current.render(f.current);var a=u.current.getBoundingClientRect();b.current=!0,h((function(e){return{startX:t-a.left,startY:n-a.top}}))},onMouseUp:function(e){var t=e.clientX,a=e.clientY;b.current=!1;var r=u.current.getBoundingClientRect();n(p.startX,p.startY,t-r.left,a-r.top)},onMouseMove:function(e){var t=e.nativeEvent;if(null!=u.current&&b.current){var n=u.current.getBoundingClientRect(),a=u.current.getContext("2d");a.beginPath(),a.fillRect(p.startX,p.startY,t.x-n.left-p.startX,t.y-n.top-p.startY)}}})});y.defaultProps={};var j=y,X=function(e){var t=e.pdf,n=e.nextView,c=Object(a.useState)({startX:-1,startY:-1,endX:-1,endY:-1}),o=Object(s.a)(c,2),i=o[0],l=o[1];return r.a.createElement("div",{className:"centered-view"},r.a.createElement("p",{className:"view-text"},"Draw a rectangle over the part of the document indicates a change. This could be something like the title or the page number."),r.a.createElement(j,{pdf:t,sendCoords:function(e,t,n,a){l({startX:e,startY:t,endX:n,endY:a})}}),r.a.createElement(d,{type:-1===i.startX?"unavailable":"default",text:"Convert",onClick:function(){-1!==i.startX&&n(i.startX,i.startY,i.endX,i.endY)}}))};X.defaultProps={};var Y=X,N=n(37),P=(n(116),function(e){var t=e.pdfBase64,n=e.pdf,c=e.nextView,o=e.errorHandler,i=e.startX,l=e.startY,u=e.endX,d=e.endY,f=Object(a.useState)(!1),m=Object(s.a)(f,2),v=m[0],p=m[1],h=Object(a.useRef)(null),g=Object(a.useRef)(null),E=function(e,t,n){var a=g.current.getContext("2d");return g.current.width=Math.abs(t),g.current.height=Math.abs(n),a.putImageData(e,0,0),g.current.toDataURL()},x=function(){var e=Object(w.a)(b.a.mark((function e(){var a,r,s,f,m,v,p,w,g,x,k,O,y;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],r=null,e.next=4,N.PDFDocument.load(t);case 4:s=e.sent,f=1;case 6:if(!(f<=n.numPages)){e.next=24;break}return e.next=9,n.getPage(f);case 9:return m=e.sent,v=700/m.view[2],p=m.getViewport({scale:v}),w=h.current.getContext("2d"),h.current.height=p.height,h.current.width=p.width,g={canvasContext:w,viewport:p},e.next=18,m.render(g).promise;case 18:x=w.getImageData(i,l,u-i,d-l),k=E(x,u-i,d-l),null===r?r=k:r!==k&&(r=k,a.push(f-2));case 21:f++,e.next=6;break;case 24:return a.push(n.numPages-1),e.prev=25,e.next=28,N.PDFDocument.create();case 28:return O=e.sent,e.next=31,O.copyPages(s,a);case 31:return e.sent.forEach((function(e){return O.addPage(e)})),e.next=35,O.save();case 35:y=e.sent,c(URL.createObjectURL(new Blob([y.buffer],{type:"application/pdf"}))),e.next=42;break;case 39:e.prev=39,e.t0=e.catch(25),o("Something happened while trying to create the new file \ud83d\ude25");case 42:case"end":return e.stop()}}),e,null,[[25,39]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){v||(p(!0),x())})),r.a.createElement("div",null,r.a.createElement("canvas",{ref:h,className:"hidden-canvas"}),r.a.createElement("canvas",{ref:g,className:"hidden-canvas"}))});P.defaultProps={};var C=P,D=function(e){return r.a.createElement("div",{className:"centered-view"},r.a.createElement(x,null),r.a.createElement(C,{pdfBase64:e.pdfBase64,pdf:e.pdf,nextView:e.nextView,errorHandler:e.errorHandler,startX:e.startX,startY:e.startY,endX:e.endX,endY:e.endY}),r.a.createElement("p",{className:"view-text"},"Removing those pesky transitions. Hold tight!"))};D.defaultProps={};var R=D,V=function(e){var t=e.blob,n=e.homeView;return r.a.createElement("div",{className:"centered-view"},r.a.createElement("img",{className:"hooray-gif",src:"https://media1.tenor.com/images/3284a8be1baf3f415f175e0ebc4fb399/tenor.gif",width:"369",height:"281"}),r.a.createElement("p",{className:"view-text"},"Finished \ud83c\udf89 Here's your file:"),r.a.createElement("div",{className:"buttons"},r.a.createElement(d,{text:"Convert another file",onClick:n}),r.a.createElement("a",{href:t,className:"download-link",download:!0},r.a.createElement(d,{text:"Download",type:"success"}))))};V.defaultProps={};var S=V,B=function(){var e=Object(a.useState)(1),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),i=Object(s.a)(o,2),l=i[0],u=i[1],d=Object(a.useState)(""),f=Object(s.a)(d,2),v=f[0],h=f[1],b=Object(a.useState)({}),w=Object(s.a)(b,2),g=w[0],E=w[1],x=Object(a.useState)({startX:-1,startY:-1,endX:-1,endY:-1}),k=Object(s.a)(x,2),y=k[0],j=k[1],X=Object(a.useState)(""),N=Object(s.a)(X,2),P=N[0],C=N[1],D=function(e){u(e),c(0)},V=[r.a.createElement(m,{key:"0",error:l,nextView:function(){return c(1)}}),r.a.createElement(p,{key:"1",nextView:function(e){h(e),c(n+1)},errorHandler:D}),r.a.createElement(O,{key:"2",file:v,errorHandler:D,nextView:function(e){E(e),c(n+1)}}),r.a.createElement(Y,{key:"3",pdf:g,nextView:function(e,t,a,r){j({startX:e,startY:t,endX:a,endY:r}),c(n+1)}}),r.a.createElement(R,{key:"4",pdfBase64:v,pdf:g,nextView:function(e){C(e),c(n+1)},errorHandler:D,startX:y.startX,startY:y.startY,endX:y.endX,endY:y.endY}),r.a.createElement(S,{key:"5",blob:P,homeView:function(){return c(1)}})];return r.a.createElement("div",null,V[n])};B.defaultProps={};var H=B,F=(n(117),function(){return r.a.createElement("div",{className:"footer"},"Made by ",r.a.createElement("a",{href:"https://github.com/LiTO773"},"LiTO773")," \u2022 Check it out on Github")});n(118);E.a.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(E.a.version,"/pdf.worker.js");var M=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(l,null),r.a.createElement(H,null),r.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},26:function(e,t,n){},66:function(e,t,n){e.exports=n(119)},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){}},[[66,1,2]]]);
//# sourceMappingURL=main.2f8dbe91.chunk.js.map