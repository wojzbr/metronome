(this.webpackJsonpmetronome=this.webpackJsonpmetronome||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(5),o=n.n(a),i=(n(10),n(3)),r=(n(11),n(12),n(13),n(0)),l=function(e){var t=e.className,n=e.label,c=e.id,s=e.onClick;return Object(r.jsxs)("div",{className:"buttonWrapper",children:[Object(r.jsx)("div",{className:"buttonLabel",children:n}),Object(r.jsx)("div",{className:"button ".concat(t),id:c,onMouseDown:s})]})},d=(n(15),function(){return Object(r.jsx)("div",{id:"buttonsSwitchoffOverlay"})}),u=n(2),j=function(e){var t=e.turnOnOff,n=e.changeBPM,c=e.tapTempo,s=e.beat;return Object(r.jsxs)("div",{id:"buttonsWrapper",children:[Object(r.jsx)(d,{}),Object(r.jsx)(l,{id:"power",label:Object(r.jsx)(u.e,{}),onClick:function(){return t()}}),Object(r.jsx)(l,{className:"oval",id:"mode",label:"MODE"}),Object(r.jsx)(l,{className:"oval",id:"select",label:"SELECT"}),Object(r.jsx)(l,{className:"oval",id:"decreaseTempo",label:Object(r.jsx)(u.a,{}),onClick:function(){return n(-1)}}),Object(r.jsx)(l,{className:"oval",id:"increaseTempo",label:Object(r.jsx)(u.c,{}),onClick:function(){return n(1)}}),Object(r.jsx)(l,{className:"circle",id:"tapReset",label:"TAP/RESET",onClick:function(){return c()}}),Object(r.jsx)(l,{className:"circle",id:"playPause",label:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(u.b,{}),Object(r.jsx)(u.d,{}),Object(r.jsx)(u.f,{})]}),onClick:function(){return s()}})]})},b=(n(16),function(e){var t=e.BPM,n=e.turnedOn;return Object(r.jsx)("div",{id:"screenWrapper",children:n?Math.round(t):""})}),m=function(){var e=Object(c.useState)(),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(60),o=Object(i.a)(a,2),l=o[0],d=o[1],u=Object(c.useState)(),m=Object(i.a)(u,2),O=m[0],f=m[1],x=Object(c.useState)(!1),v=Object(i.a)(x,2),p=v[0],y=v[1],E=Object(c.useState)(!1),h=Object(i.a)(E,2),w=h[0],I=h[1];return Object(r.jsx)("div",{id:"metronomeWrapper",children:Object(r.jsxs)("div",{id:"metronome",children:[Object(r.jsx)(b,{BPM:l,turnedOn:w}),Object(r.jsx)(j,{turnOnOff:function(){"-1"===document.getElementById("buttonsSwitchoffOverlay").style.zIndex?(document.getElementById("buttonsSwitchoffOverlay").style.zIndex="50",document.getElementById("power").classList.remove("redLED"),I(!1),y(!1),window.clearInterval(O),d(60)):(document.getElementById("buttonsSwitchoffOverlay").style.zIndex="-1",document.getElementById("power").classList.add("redLED"),I(!0))},changeBPM:function(e){d(l+e)},tapTempo:function(){!function(){if(n){var e=(new Date).getTime();d(6e4/(e-n)),s(e)}else s((new Date).getTime())}()},beat:function(){p?p&&(y(!1),window.clearInterval(O)):(document.getElementById("playPause").classList.add("redLED"),setTimeout((function(){return document.getElementById("playPause").classList.remove("redLED")}),100),f(window.setInterval((function(){document.getElementById("playPause").classList.add("redLED"),setTimeout((function(){return document.getElementById("playPause").classList.remove("redLED")}),100)}),60/l*1e3)),y(!0))}}),Object(r.jsx)("div",{id:"blackBottomPanel"})]})})};var O=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(m,{})})};n(17);o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.3bdf88a7.chunk.js.map