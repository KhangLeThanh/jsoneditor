(this["webpackJsonpjson-editor"]=this["webpackJsonpjson-editor"]||[]).push([[0],{47:function(e,t,a){e.exports=a(56)},52:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),l=a.n(r),i=(a(52),a(30)),c=a(95),s=a(102),m=a(105),d=a(103),u=a(104),f=a(101),p=a(100),g=a(57),b=a(98);function h(e){return o.a.createElement("div",null,e.children)}var E=a(32);function v(e){var t=e.data;return o.a.createElement("div",null,o.a.createElement(E.JSONViewer,{data:t,styles:{label:{color:"#000",marginTop:4},value:{marginLeft:10},root:{fontSize:14,fontFamily:"monospace",textAlign:"left",paddingTop:"2%"},builtin:{color:"#00f"},text:{color:"#077"},number:{color:"#a0a"},property:{color:"#c00"},collapseIcon:{cursor:"pointer"}}}))}function y(e){var t=e.json;return o.a.createElement("div",null,o.a.createElement(E.JSONEditor,{data:t,onChange:function(e,t,a,n){localStorage.setItem("myJsonInLocalStorage",JSON.stringify(n))},styles:{root:{fontSize:14,margin:5,fontFamily:"monospace",lineHeight:1.25,paddingTop:"2%"},label:{color:"rgb(204, 0, 0)",fontWeight:"600",marginBottom:"10px"},value:{marginLeft:10,marginBottom:"15px"},row:{display:"flex"},withChildrenLabel:{color:"#000"},select:{borderRadius:3,borderColor:"grey",backgroundColor:"#fff",color:"#000",fontWeight:"600"},input:{borderRadius:3,border:"1px solid #272822",padding:2,fontFamily:"monospace",fontSize:12,backgroundColor:"#fff",color:"#000",width:"200%"},builtin:{color:"#00f"}}})," ")}var x=Object(c.a)((function(e){return{paper:{boxShadow:"none"},grid:{maxWidth:1280,margin:"0 auto",backgroundColor:"#fff",padding:"20px"},button:{backgroundColor:"#e09d22",color:"#fff",marginTop:"15px","&:hover":{backgroundColor:"#dea439"}}}})),S=function(){var e=x(),t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],l=a[1],c=Object(n.useState)(),E=Object(i.a)(c,2),S=E[0],j=E[1],w=Object(n.useState)(0),O=Object(i.a)(w,2),C=O[0],k=O[1],T=Object(n.useState)(""),J=Object(i.a)(T,2),N=J[0],W=J[1];return o.a.createElement("div",{className:e.grid},o.a.createElement(b.a,{container:!0,spacing:3},o.a.createElement(b.a,{item:!0,xs:12},o.a.createElement(g.a,{className:e.paper,style:{paddingTop:"2%"}},o.a.createElement(p.a,{variant:"h1",component:"h1",style:{fontWeight:"700",fontSize:"25px",paddingBottom:"15px",textAlign:"center"}},"Please insert your json data to the field below"),o.a.createElement("form",{onSubmit:function(e){e.preventDefault();try{var t=JSON.parse(r);j(t),W("")}catch(a){console.error(a),W("Your json data is invalid"),setTimeout((function(){W("")}),3e3)}l("")}},o.a.createElement(u.a,{value:r,onChange:function(e){l(e.target.value)},fullWidth:!0,label:"Your json data",variant:"outlined",type:"text"}),o.a.createElement("div",{style:{width:"100%",textAlign:"center"}},o.a.createElement(f.a,{className:e.button,type:"submit"},"Format")),o.a.createElement(p.a,{variant:"body2",style:{textAlign:"center",color:"#d80d0d",fontSize:"1.5em",marginTop:"20px",textTransform:"uppercase"}},N)))),o.a.createElement(b.a,{item:!0,xs:12},o.a.createElement(s.a,{position:"static",style:{backgroundColor:"#e09d21"}},o.a.createElement(m.a,{value:C,onChange:function(e,t){k(t)}},o.a.createElement(d.a,{label:"code"}),o.a.createElement(d.a,{label:"tree"}))),0===C&&o.a.createElement(h,null,o.a.createElement(v,{data:S})),1===C&&o.a.createElement(h,null,o.a.createElement(y,{json:S})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.70a270b3.chunk.js.map