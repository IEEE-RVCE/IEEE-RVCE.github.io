(this["webpackJsonpieee-rvce.github.io"]=this["webpackJsonpieee-rvce.github.io"]||[]).push([[0],{126:function(e,a,t){e.exports=t(162)},162:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(6),i=t.n(l),o=t(23),c=t(112),s=t(213),m=t(224),u=t(14),d=t(202),p=t(116),E=t(204),g=t(54),h=t(200),b=t(100);function f(e){return r.a.createElement(b.Carousel,{autoPlay:!0,infiniteLoop:!0,showThumbs:!1,useKeyboardArrows:!0,stopOnHover:!0,showStatus:!1,showIndicators:!1},e.images.map((function(e){return r.a.createElement("div",null,r.a.createElement("img",{alt:"",src:e.src}))})))}var v=t(58),y=t(30),w=t(114),k=t(113),N=t(78),j=t(61),O=t.n(j),x=t(74),C=t.n(x);t(156);C.a.locale("en-GB");var S=Object(N.b)(C.a),I=function(e){Object(w.a)(t,e);var a=Object(k.a)(t);function t(e){var n;return Object(v.a)(this,t),(n=a.call(this,e)).getEvents=function(){O.a.get("/api/calendar").then((function(e){n.setState({eventsList:e.data.calendar})})).catch((function(e){console.error("Error when getting calendar events: ".concat(e))}))},n.setDims=function(){n.setState({height:window.innerHeight,width:window.innerWidth})},n.state={height:window.innerHeight,width:window.innerWidth,proportions:{width:e.height,height:e.width},toolbar:e.toolbar,defaultView:e.defaultView,eventsList:[{title:"Event 1",start:new Date(0),end:new Date(0),allDay:!1,resource:!1}]},n}return Object(y.a)(t,[{key:"componentDidMount",value:function(){this.getEvents(),window.onresize=this.setDims}},{key:"render",value:function(){return r.a.createElement("div",{style:{height:this.state.height*(this.state.proportions.height/100),width:this.state.width*(this.state.proportions.width/100),margin:"auto",maxWidth:this.props.maxHeight,paddingBottom:20,paddingTop:40}},r.a.createElement(N.a,{popup:!0,localizer:S,events:this.state.eventsList,defaultView:this.props.defaultView,startAccessor:"start",endAccessor:"end",toolbar:this.props.toolbar}))}}]),t}(r.a.Component);I.defaultProps={defaultView:"month",toolbar:!0,maxHeight:"100%"};t(157);var V=Object(h.a)((function(e){return{root:{padding:e.spacing(8)},paper:{padding:e.spacing(4)},link:{textDecoration:"none",color:"#00629B","&:hover":{textDecoration:"underline"}},carousel:{margin:"auto",paddingTop:e.spacing(4)}}}));function D(e){var a=V();return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{maxWidth:"lg",className:a.carousel},r.a.createElement(f,{images:F})),r.a.createElement(d.a,{maxWidth:"md",className:a.root},r.a.createElement(p.a,{className:a.paper},r.a.createElement(E.a,null,r.a.createElement(g.a,{variant:"h3"},"Vision"),r.a.createElement("br",null),r.a.createElement(g.a,{variant:"body1"},"IEEE RVCE will be instrumental in facilitating the global outreach of IEEE by providing a platform for students to connect with professionals worldwide and develop their technical expertise, thus making a positive impact on the society"))),r.a.createElement("br",null),r.a.createElement(p.a,{className:a.paper},r.a.createElement(E.a,null,r.a.createElement(g.a,{variant:"h3"},"What we do"),r.a.createElement("br",null),r.a.createElement(g.a,{variant:"body1"},r.a.createElement("li",null,"Eat"),r.a.createElement("li",null,"Sleep"),r.a.createElement("li",null,"Code")))),r.a.createElement("br",null),r.a.createElement(p.a,{className:a.paper},r.a.createElement(g.a,{variant:"h3"},"Upcoming Events"),r.a.createElement("br",null),r.a.createElement(I,{toolbar:!1,defaultView:"agenda"}),r.a.createElement(o.b,{to:"/calendar",className:a.link},"Click here to view full calendar"))))}var F=[{src:"/assets/images/session1.png",label:"session1"},{src:"/assets/images/session2.png",label:"session2"},{src:"/assets/images/session3.jpg",label:"session3"}];function P(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{marginLeft:"45%"}},"About page works"))}var A=t(77),B=t.n(A),R=t(107),L=t(7),W=t(26),H=t(19),M=t(225),_=t(207),T=t(208),z=t(231),G=t(210),K=t(228),U=t(108),q=t.n(U),J=t(109),$=t.n(J),Q=Object(h.a)((function(e){return{root:{padding:e.spacing(4)},paper:{padding:e.spacing(8)},button:{color:"#00629B"}}}));function X(){var e=Q(),a=r.a.useState({ieeeid:"",password:"",ieeeidValid:!0,passwordValid:!0,showPassword:!1,authFail:!1,networkError:!1,incorrectInfo:!1}),t=Object(H.a)(a,2),n=t[0],l=t[1];var i=function(e){return function(a){var t;l(Object(W.a)(Object(W.a)({},n),{},(t={},Object(L.a)(t,e,a.target.value),Object(L.a)(t,e+"Valid",function(e,a){if(console.log(e),"ieeeid"===e){return/^\d{10}$/.test(String(a).toLowerCase())}return/^.{8,}$/.test(String(a).toLowerCase())}(e,a.target.value)),t)))}},o=function(){var e=Object(R.a)(B.a.mark((function e(a){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.ieeeidValid||!n.passwordValid){e.next=5;break}return e.next=3,O.a.post("https://forseti-full.herokuapp.com/api/auth",{uid:n.ieeeid,pwd:n.password}).then((function(e){!0===e.data.ok&&!0===e.data.auth?localStorage.setItem("atoken",e.data.atoken):l(Object(W.a)(Object(W.a)({},n),{},{ieeeidValid:!1,passwordValid:!1,authFail:!0}))})).catch((function(e){console.error("Axios request failed: ".concat(e)),l(Object(W.a)(Object(W.a)({},n),{},{ieeeidValid:!1,passwordValid:!1,networkError:!0}))}));case 3:e.next=6;break;case 5:l(Object(W.a)(Object(W.a)({},n),{},{incorrectInfo:!n.ieeeidValid&&!n.passwordValid}));case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),c=function(e){return function(a,t){"clickaway"!==t&&l(Object(W.a)(Object(W.a)({},n),{},Object(L.a)({},e,!1)))}};return r.a.createElement(d.a,{maxWidth:"sm",className:e.root},r.a.createElement(p.a,{className:e.paper},r.a.createElement(g.a,{variant:"h4"},"Sign in"),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(M.a,{id:"ieeeid",label:"IEEE ID",type:"number",placeholder:"Enter your IEEE ID",variant:"outlined",fullWidth:!0,error:!n.ieeeidValid,onChange:i("ieeeid"),InputLabelProps:{shrink:!0}})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(M.a,{id:"standard-adornment-password",label:"Password",placeholder:"Enter your password",error:!n.passwordValid,InputLabelProps:{shrink:!0},InputProps:{endAdornment:r.a.createElement(_.a,{position:"end"},r.a.createElement(T.a,{"aria-label":"toggle password visibility",onClick:function(){l(Object(W.a)(Object(W.a)({},n),{},{showPassword:!n.showPassword}))},onMouseDown:function(e){e.preventDefault()}},n.showPassword?r.a.createElement(q.a,null):r.a.createElement($.a,null)))},fullWidth:!0,type:n.showPassword?"text":"password",value:n.password,variant:"outlined",onChange:i("password")})),r.a.createElement("br",null),r.a.createElement(z.a,{open:n.incorrectInfo,autoHideDuration:6e3,onClose:c("incorrectInfo")},r.a.createElement(K.a,{elevation:6,variant:"filled",onClose:c("incorrectInfo"),severity:"error"},"Incorrect Information entered")),r.a.createElement(z.a,{open:n.authFail,autoHideDuration:6e3,onClose:c("authFail")},r.a.createElement(K.a,{elevation:6,variant:"filled",onClose:c("authFail"),severity:"error"},"Invalid username or password")),r.a.createElement(z.a,{open:n.networkError,autoHideDuration:6e3,onClose:c("networkError")},r.a.createElement(K.a,{elevation:6,variant:"filled",onClose:c("networkError"),severity:"error"},"Failed connecting to server")),r.a.createElement("div",null,r.a.createElement(G.a,{variant:"outlined",color:"inherit",className:e.button,onClick:o},"Submit"))))}function Y(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(X,null))}function Z(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{marginLeft:"45%"}},"Membership Page works"))}var ee=t(211),ae=t(230),te=t(212),ne=t(232),re=t(70),le=Object(c.a)();le=Object(ae.a)(le);var ie=Object(h.a)((function(e){return{root:{maxWidth:345,padding:e.spacing(2)},content:{margin:"auto",textAlign:"center"},media:{height:0,paddingTop:"56.25%"},name:{color:"#006341",fontWeight:"bold",fontFamily:"Formata"},post:{color:"#658D1B",fontFamily:"Cambria"},avatar:{backgroundColor:re.a[500]},large:{width:e.spacing(15),height:e.spacing(15),margin:"auto"},small:{width:e.spacing(10),height:e.spacing(10),margin:"auto"}}}));function oe(){var e=ie();return r.a.createElement(ee.a,{variant:"outlined",className:e.root},r.a.createElement(te.a,{className:e.content},r.a.createElement(ne.a,{alt:"First_Name Last_Name",src:"../../assets/images/avatar_demo.jpg",className:e.large}),r.a.createElement("br",null),r.a.createElement(s.a,{theme:le},r.a.createElement(g.a,{className:e.name,variant:"h5"},"Name")),r.a.createElement(g.a,{className:e.post,variant:"h6"},"Position, Society Name/ IEEE RVCE SB")))}var ce=Object(h.a)((function(e){return{root:{padding:e.spacing(8)},paper:{padding:e.spacing(4)}}}));function se(){var e=ce();return r.a.createElement(d.a,{maxWidth:"lg",className:e.root},r.a.createElement(p.a,{className:e.paper},r.a.createElement(E.a,{container:!0,spacing:2,justify:"center"},r.a.createElement(E.a,{item:!0,xs:12,md:3},r.a.createElement(oe,null)),r.a.createElement(E.a,{item:!0,xs:12,md:3},r.a.createElement(oe,null)),r.a.createElement(E.a,{item:!0,xs:12,md:3},r.a.createElement(oe,null)),r.a.createElement(E.a,{item:!0,xs:12,md:3},r.a.createElement(oe,null))),r.a.createElement(E.a,{container:!0,spacing:2,justify:"center"},r.a.createElement(E.a,{item:!0,xs:12,md:3},r.a.createElement(oe,null)),r.a.createElement(E.a,{item:!0,xs:12,md:3},r.a.createElement(oe,null)),r.a.createElement(E.a,{item:!0,xs:12,md:3},r.a.createElement(oe,null)))))}function me(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{style:{marginLeft:"45%"}},"Society page skeleton"))}var ue=t(218),de=t(165),pe=t(166),Ee=t(215),ge=t(219),he=t(220),be=t(227),fe=t(111),ve=t.n(fe),ye=t(214),we=t(216),ke=t(205),Ne=t(209),je=t(206),Oe=t(217),xe=Object(h.a)((function(e){var a,t;return{button:{border:"1px solid #00629B",color:"#00629B",marginLeft:e.spacing(0),marginRight:e.spacing(2)},hiddenMed:(a={},Object(L.a)(a,e.breakpoints.up("md"),{display:"inline"}),Object(L.a)(a,"display","none"),a),menuitem:{textDecoration:"none",color:"#00629B"},list:(t={},Object(L.a)(t,e.breakpoints.up("md"),{display:"none"}),Object(L.a)(t,"display","block"),t),nested:{paddingLeft:e.spacing(4)}}}));function Ce(e){var a=xe(),t=r.a.useState(!1),n=Object(H.a)(t,2),l=n[0],i=n[1],c=r.a.useRef(null),s=function(e){c.current&&c.current.contains(e.target)||i(!1)};function m(e){"Tab"===e.key&&(e.preventDefault(),i(!1))}var u=r.a.useRef(l);r.a.useEffect((function(){!0===u.current&&!1===l&&c.current.focus(),u.current=l}),[l]);var d=function(e){return e.items.map((function(e){return r.a.createElement(o.b,{to:e.link,className:a.menuitem,key:e.name+e.link},r.a.createElement(ye.a,{key:e.name+e.link},e.name))}))},E=function(e){return e.items.map((function(e){return r.a.createElement(o.b,{to:e.link,className:a.menuitem},r.a.createElement(pe.a,{button:!0,key:e.name,className:a.nested},r.a.createElement(Ee.a,{primary:e.name})))}))},g=r.a.useState(!1),h=Object(H.a)(g,2),b=h[0],f=h[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{ref:c,color:"inherit","aria-controls":l?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:function(){i((function(e){return!e}))},className:"".concat(a.button," ").concat(a.hiddenMed)},e.name),r.a.createElement(we.a,{open:l,anchorEl:c.current,role:void 0,className:a.hiddenMed,transition:!0,disablePortal:!0},(function(a){var t=a.TransitionProps;a.placement;return r.a.createElement(ke.a,Object.assign({},t,{style:{transformOrigin:"center top"}}),r.a.createElement(p.a,null,r.a.createElement(Ne.a,{onClickAway:s},r.a.createElement(je.a,{autoFocusItem:l,id:"menu-list-grow",onKeyDown:m},r.a.createElement(d,{items:e.items})))))})),r.a.createElement(pe.a,{button:!0,key:e.name,onClick:function(){f(!b)},className:a.list},r.a.createElement(Ee.a,{primary:e.name,className:a.menuitem})),r.a.createElement(Oe.a,{in:b,timeout:"auto",unmountOnExit:!0},r.a.createElement(de.a,{component:"div"},r.a.createElement(E,{items:e.items}))))}var Se=[{name:"Home",link:"/"},{name:"About Us",link:"/about"},{name:"Societies",isMenu:!0},{name:"Affinities",isMenu:!0},{name:"Membership",link:"/membership"},{name:"About the developers",link:"/devs"},{name:"Login",link:"/login"}],Ie=[{name:"Computer Society",link:"/society"},{name:"Com Soc",link:"/society"},{name:"PES",link:"/society"},{name:"SPS",link:"/society"},{name:"APS",link:"/society"},{name:"RAS",link:"/society"}],Ve=[{name:"SIGHT",link:"/affinity"},{name:"WIE",link:"/affinity"}],De=Object(h.a)((function(e){var a,t;return{root:{flexGrow:1,backgroundColor:"transparent",paddingBottom:e.spacing(6)},appbar:{backgroundColor:e.root.backgroundColor},brand:{flexGrow:1},button:{border:"1px solid #00629B",color:"#00629B",marginLeft:e.spacing(0),marginRight:e.spacing(2)},navs:(a={},Object(L.a)(a,e.breakpoints.up("md"),{display:"block"}),Object(L.a)(a,"display","none"),a),nav:{textDecoration:"none",color:"#00629B"},menuButton:(t={marginRight:e.spacing(2)},Object(L.a)(t,e.breakpoints.up("md"),{display:"none"}),Object(L.a)(t,"display","block"),t)}}));function Fe(e){var a=De(),t=r.a.useState(!1),n=Object(H.a)(t,2),l=n[0],i=n[1];function c(e){var a=e.children,t=e.window,n=Object(ue.a)({disableHysteresis:!0,threshold:0,target:t?t():void 0});return r.a.cloneElement(a,{elevation:n?4:0})}var s=function(){return Se.map((function(e){return"Societies"===e.name?r.a.createElement(Ce,{name:e.name,items:Ie}):"Affinities"===e.name?r.a.createElement(Ce,{name:e.name,items:Ve}):r.a.createElement(o.b,{to:e.link,className:a.nav},r.a.createElement(G.a,{color:"inherit",className:a.button},e.name))}))},m=function(e){return function(a){(!a||"keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&i(e)}};return r.a.createElement("div",{className:a.root},r.a.createElement(c,e,r.a.createElement(ge.a,{position:"fixed",className:a.appbar},r.a.createElement(he.a,{style:{padding:0}},r.a.createElement("div",{className:a.brand},r.a.createElement("img",{src:"/assets/images/rvce_logo.png",height:"70px",style:{float:"left"},alt:"RV logo"})),r.a.createElement("div",{className:a.navs},r.a.createElement(s,null)),r.a.createElement("div",{className:a.brand},r.a.createElement("img",{src:"/assets/images/ieee_blue.jpg",height:"40px",style:{float:"right",marginRight:"3%"},alt:"IEEE logo"})),r.a.createElement(T.a,{color:"primary",onClick:m(!0),className:a.menuButton},r.a.createElement(ve.a,null))))),r.a.createElement(be.a,{anchor:"right",open:l,onClose:m(!1),onOpen:m(!0)},r.a.createElement("div",null,r.a.createElement(de.a,null,Se.map((function(e){return"Societies"===e.name?r.a.createElement(Ce,{name:e.name,items:Ie}):"Affinities"===e.name?r.a.createElement(Ce,{name:e.name,items:Ve}):r.a.createElement(o.b,{to:e.link,className:a.nav},r.a.createElement(pe.a,{button:!0,key:e.name},r.a.createElement(Ee.a,{primary:e.name})))}))))))}var Pe=t(226),Ae=t(221),Be=t(222),Re=t(223),Le=Object(h.a)((function(e){return{root:{backgroundColor:"#111111",padding:e.spacing(6)},typography:{color:"#eeeeee"},link:{textDecoration:"none",color:"#bbbbbb","&:hover":{textDecoration:"underline"}},body:{color:"#bbbbbb"},icon:{color:"#eeeeee"},iconbutton:{padding:0}}}));function We(e){var a=Le();return r.a.createElement(Pe.a,{sm:12,className:a.root},r.a.createElement(d.a,{maxWidth:"xl"},r.a.createElement(E.a,{container:!0,spacing:1,justify:"space-evenly"},r.a.createElement(E.a,{item:!0,xs:12,md:6,lg:2,key:1},r.a.createElement(g.a,{className:a.typography,variant:"h6"},"Useful links"),Se.map((function(e){var t=e.name,n=e.link;return e.isMenu?r.a.createElement(r.a.Fragment,null):r.a.createElement(o.b,{to:n,className:a.link},r.a.createElement(g.a,{variant:"body1"},t))}))),r.a.createElement(E.a,{item:!0,xs:12,md:6,lg:2,key:2},r.a.createElement(g.a,{className:a.typography,variant:"h6"},"Societies"),Ie.map((function(e){var t=e.name,n=e.link;return r.a.createElement(o.b,{to:n,className:a.link},r.a.createElement(g.a,{variant:"body1"},t))}))),r.a.createElement(E.a,{item:!0,xs:12,md:6,lg:2,key:3},r.a.createElement(g.a,{className:a.typography,variant:"h6"},"Affinities"),Ve.map((function(e){var t=e.name,n=e.link;return r.a.createElement(o.b,{to:n,className:a.link},r.a.createElement(g.a,{variant:"body1"},t))}))),r.a.createElement(E.a,{item:!0,xs:12,md:6,lg:3,key:4,style:{paddingRight:60}},r.a.createElement(g.a,{className:a.typography,variant:"h6"},"Address:",r.a.createElement("br",null)),r.a.createElement(g.a,{className:a.body,variant:"body1"},"Mysore Road, RV Vidyanikethan Post, Bengaluru-560059, Karnataka, India",r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement(E.a,{container:!0,justify:"space-between",style:{paddingRight:60}},r.a.createElement(T.a,{href:"https://instagram.com/ieee_rvce?igshid=1hbfgquvdu0yt",target:"_blank",className:a.iconbutton},r.a.createElement(Ae.a,{className:a.icon,fontSize:"large"})),r.a.createElement(T.a,{href:"https://www.linkedin.com/company/ieee-rvce",target:"_blank",className:a.iconbutton},r.a.createElement(Be.a,{className:a.icon,fontSize:"large"})),r.a.createElement(T.a,{href:"mailto:ieeervce@rvce.edu.in",target:"_blank",className:a.iconbutton},r.a.createElement(Re.a,{className:a.icon,fontSize:"large"}))),r.a.createElement("br",null),r.a.createElement(g.a,{className:a.body,variant:"body1"},"\xa9 IEEE RVCE student chapter. All Rights Reserved.")))))}function He(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{toolbar:!0,defaultView:"month",width:70,height:80}))}function Me(){var e=Object(c.a)({typography:{fontFamily:"Open Sans, sans-serif"},root:{backgroundColor:"#fff"}});return r.a.createElement(s.a,{theme:e},r.a.createElement("div",{className:e.root},r.a.createElement(m.a,null),r.a.createElement(Fe,null),r.a.createElement(u.a,{exact:!0,path:"/"},r.a.createElement(D,null)),r.a.createElement(u.a,{path:"/about"},r.a.createElement(P,null)),r.a.createElement(u.a,{path:"/login"},r.a.createElement(Y,null)),r.a.createElement(u.a,{path:"/membership"},r.a.createElement(Z,null)),r.a.createElement(u.a,{path:"/devs"},r.a.createElement(se,null)),r.a.createElement(u.a,{path:"/society"},r.a.createElement(me,null)),r.a.createElement(u.a,{path:"/calendar"},r.a.createElement(He,null)),r.a.createElement(We,null)))}i.a.render(r.a.createElement(o.a,{basename:"/"},r.a.createElement(Me,null)),document.getElementById("root"))}},[[126,1,2]]]);