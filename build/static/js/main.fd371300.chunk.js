(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,n,t){e.exports=t(48)},37:function(e,n,t){},45:function(e,n,t){},48:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(17),c=t.n(r),i=(t(37),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function l(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var s=t(7),u=t(8),p=t(10),m=t(9),d=t(11),f=t(26),h=t.n(f),b=t(6);function g(e){var n=e.children,t=e.color,a=e.location.state,r=h()({page:!0,"page--prev":a&&a.prev});return o.a.createElement("section",{className:r,style:{color:t}},n)}g.defaultProps={color:"#fff",background:"#223"};var v=Object(b.withRouter)(g),w=function(e){function n(){return Object(s.a)(this,n),Object(p.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("header",{className:"bg-image"},o.a.createElement("div",{className:"heading-wrap"},o.a.createElement("div",{className:"heading-primary"},o.a.createElement("h1",null,"Discover ",o.a.createElement("br",null),"Ghana"))))}}]),n}(a.Component),k=function(e){function n(){return Object(s.a)(this,n),Object(p.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(v,null,o.a.createElement(w,null))}}]),n}(a.Component),j=function(e){function n(){return Object(s.a)(this,n),Object(p.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(v,{color:"#cc99ff",background:"#280051"},o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"Toffee muffin bear claw ice cream gummies jujubes gingerbread. Apple pie bonbon pastry chocolate bar bear claw wafer bonbon. Marzipan topping wafer topping cake liquorice."),o.a.createElement("p",null,"Wafer bonbon cupcake chocolate bar. Bear claw topping halvah chocolate bar gummi bears. Powder bonbon oat cake chocolate cupcake pudding pudding pastry cheesecake."),o.a.createElement("p",null,"Toffee sweet souffl\xe9 danish. Lemon drops gummies fruitcake pudding tootsie roll pastry apple pie biscuit. Muffin gingerbread dessert marshmallow lemon drops chocolate bar jelly-o marzipan."),o.a.createElement("p",null,"Gingerbread candy gingerbread dessert icing oat cake bonbon. Carrot cake jujubes halvah candy jelly beans sugar plum chocolate bar. Cotton candy carrot cake pudding carrot cake powder. Brownie toffee topping jujubes."),o.a.createElement("p",null,"Cotton candy apple pie souffl\xe9 jelly-o pudding chocolate cake carrot cake. Dessert croissant carrot cake gummi bears donut icing cookie. Dessert chocolate cake pastry toffee tiramisu cookie."))}}]),n}(a.Component),E=t(22),y=t.n(E),O=function(e){function n(){return Object(s.a)(this,n),Object(p.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("nav",{className:"nav"},o.a.createElement(y.a,{to:{pathname:"/",state:{prev:!1}},className:"nav__link"},"Home"),o.a.createElement(y.a,{to:{pathname:"/make request",state:{prev:!0}},className:"nav__link"},"make request"))}}]),n}(a.Component),C=(t(45),t(19)),N=t(50),R=t(51),W="pushState"in window.history,A=function(){return o.a.createElement(C.a,{forceRefresh:!W},o.a.createElement(O,null),o.a.createElement("main",null,o.a.createElement(b.Route,{render:function(e){var n=e.location,t=n.pathname;return o.a.createElement(N.a,null,o.a.createElement(R.a,{key:t,classNames:"page",timeout:{enter:1e3,exit:1e3}},o.a.createElement(b.Route,{location:n,render:function(){return o.a.createElement(b.Switch,null,o.a.createElement(b.Route,{exact:!0,path:"/",component:k}),o.a.createElement(b.Route,{path:"/make request",component:j}))}})))}})))};c.a.render(o.a.createElement(A,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("","/service-worker.js");i?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.register().then(function(){window.location.reload()})}):l(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):l(n,e)})}}()}},[[32,1,2]]]);
//# sourceMappingURL=main.fd371300.chunk.js.map