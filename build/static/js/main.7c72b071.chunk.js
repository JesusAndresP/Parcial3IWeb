(this["webpackJsonpip-address-tracker"]=this["webpackJsonpip-address-tracker"]||[]).push([[0],{19:function(t,e,n){},22:function(t,e,n){},23:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n(0),a=n.n(i),s=n(9),r=n.n(s),o=(n(19),n(20),n(11)),l=n.n(o),j=n(12),p=n(4),d=(n(22),n.p+"static/media/icon-arrow.2eaaa5ee.svg"),u=function(t){var e=t.ip,n=t.setIP,i=t.handleSubmit;return Object(c.jsxs)("div",{id:"SearchBox",onSubmit:i,children:[Object(c.jsx)("h3",{children:"IP Address Tracker"}),Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{value:e,onChange:function(t){return n(t.target.value)},type:"text",placeholder:"Search for any IP address or domain"}),Object(c.jsx)("button",{type:"submit",children:Object(c.jsx)("img",{src:d,alt:""})})]})]})},h=(n(23),function(t){var e=t.ipData;return Object(c.jsxs)("div",{id:"Details",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{className:"type",children:"IP Address"}),e.ip&&Object(c.jsx)("h4",{children:e.ip})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{className:"type",children:"Location"}),e.location&&Object(c.jsxs)("h4",{children:[e.location.city,", ",e.location.country,","," ",e.location.postalCode]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{className:"type",children:"Timezone"}),e.location&&Object(c.jsx)("h4",{children:e.location.timezone})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{className:"type",children:"ISP"}),e.isp&&Object(c.jsx)("h4",{children:e.isp})]})]})}),b=(n(24),function(t){var e=t.ipData;return Object(c.jsx)("div",{className:"info",children:Object(c.jsx)(h,{ipData:e})})}),x=(n(25),n(3)),O=n.n(x),f=n(28),m=n(29),v=n(32),g=n(30),y=n(31),S=n.p+"static/media/icon-location.7e6459d2.svg",D=function(t){var e=t.ipData,n=O.a.icon({iconUrl:S,iconSize:[25,41],iconAnchor:[12.5,41],popupAnchor:[0,-41]});function i(){return Object(f.a)().flyTo(new O.a.LatLng(o[0],o[1]),13),null}var s=a.a.useState([51.505,-.09]),r=Object(p.a)(s,2),o=r[0],l=r[1];return a.a.useEffect((function(){e.location&&l([e.location.lat,e.location.lng])}),[e]),Object(c.jsxs)(m.a,{center:o,zoom:13,scrollWheelZoom:!0,id:"mapid",children:[Object(c.jsx)(v.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(c.jsx)(i,{}),e.location&&Object(c.jsx)(g.a,{position:o,icon:n,children:Object(c.jsx)(y.a,{children:"Your Connection."})})]})};var k=function(){var t="at_cJruGUZbTwNWS0kCZ5NS5lmmzplwl",e=a.a.useState(""),n=Object(p.a)(e,2),i=n[0],s=n[1],r=a.a.useState({}),o=Object(p.a)(r,2),d=o[0],h=o[1];function x(){return(x=Object(j.a)(l.a.mark((function e(){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://geo.ipify.org/api/v1?apiKey="+t+"&domain="+i);case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,h(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(u,{ip:i,setIP:s,handleSubmit:function(t){t.preventDefault(),function(){x.apply(this,arguments)}()}}),Object(c.jsx)(b,{ipData:d}),Object(c.jsx)(D,{ipData:d})]})},w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),a(t),s(t)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),w()}},[[26,1,2]]]);
//# sourceMappingURL=main.7c72b071.chunk.js.map