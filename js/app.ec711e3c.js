(function(t){function e(e){for(var r,c,i=e[0],u=e[1],s=e[2],l=0,f=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);h&&h(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},c={app:0},a={app:0},o=[];function i(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-0ba5a014":"37e301d1","chunk-2d21eb63":"6956cbdf","chunk-2d22dd74":"80be161f","chunk-4bb10a20":"5d2dda9b","chunk-116a1188":"c8d5e3b7","chunk-5f7ae91b":"5e7befec","chunk-7b1b571f":"b1cc939b","chunk-f6d6f95c":"3ffdafbf","chunk-7c36483a":"5ce045d3","chunk-a17161f6":"ef8a9174","chunk-bfd83aba":"0907ad86","chunk-d769269a":"b449fbe6"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-0ba5a014":1,"chunk-4bb10a20":1,"chunk-116a1188":1,"chunk-5f7ae91b":1,"chunk-7b1b571f":1,"chunk-f6d6f95c":1,"chunk-7c36483a":1,"chunk-a17161f6":1,"chunk-bfd83aba":1,"chunk-d769269a":1};c[t]?e.push(c[t]):0!==c[t]&&n[t]&&e.push(c[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-0ba5a014":"d2a4ae64","chunk-2d21eb63":"31d6cfe0","chunk-2d22dd74":"31d6cfe0","chunk-4bb10a20":"6cad8c90","chunk-116a1188":"e721def6","chunk-5f7ae91b":"a3138db2","chunk-7b1b571f":"1ff7a4bd","chunk-f6d6f95c":"736b293c","chunk-7c36483a":"26dc6d96","chunk-a17161f6":"1ab6f4bd","chunk-bfd83aba":"2acb2beb","chunk-d769269a":"194d4600"}[t]+".css",a=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===a)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var r=e&&e.target&&e.target.src||a,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[t],h.parentNode.removeChild(h),n(o)},h.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(h)})).then((function(){c[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(h);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+c+")",f.name="ChunkLoadError",f.type=r,f.request=c,n[1](f)}a[t]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/tickat-vue/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var h=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0c52":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.$style.logo},[r("img",{style:{height:t.height,width:t.width},attrs:{alt:"logo",src:n("e0dd")}})])},c=[],a=(n("6b54"),n("2397"),n("d225")),o=n("4e2b"),i=n("308d"),u=n("6bb5"),s=n("9ab4"),l=n("60a3");function f(t){var e=h();return function(){var n,r=Object(u["a"])(t);if(e){var c=Object(u["a"])(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(i["a"])(this,n)}}function h(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var b=function(t){Object(o["a"])(n,t);var e=f(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return n}(l["d"]);Object(s["b"])([Object(l["c"])({type:String,default:"100px"})],b.prototype,"height",void 0),Object(s["b"])([Object(l["c"])({type:String,default:"300px"})],b.prototype,"width",void 0),b=Object(s["b"])([l["a"]],b);var d=b,p=d,m=n("1f0e"),v=n("2877");function y(t){this["$style"]=m["default"].locals||m["default"]}var g=Object(v["a"])(p,r,c,!1,y,null,null);e["a"]=g.exports},"1f0e":function(t,e,n){"use strict";var r=n("d462"),c=n.n(r);e["default"]=c.a},3579:function(t,e,n){"use strict";var r=n("a28f"),c=n.n(r);e["default"]=c.a},"39da":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("7618"),c=n("d225"),a=n("b0b4"),o=function(){function t(){Object(c["a"])(this,t)}return Object(a["a"])(t,null,[{key:"set",value:function(t,e){"object"===Object(r["a"])(e)&&(e=JSON.stringify(e)),this.localStorage.setItem(t,e)}},{key:"get",value:function(t){var e=this.localStorage.getItem(t)||"";try{return JSON.parse(e)}catch(n){return e}}},{key:"key",value:function(t){return this.localStorage.key(t)}},{key:"remove",value:function(t){this.localStorage.removeItem(t)}},{key:"clear",value:function(){this.localStorage.clear()}},{key:"len",get:function(){return this.localStorage.length}}]),t}();o.localStorage=window.localStorage},"4dfc":function(t,e,n){t.exports={container:"default_container_3GPAm",header:"default_header_3BuBE"}},"5c0b":function(t,e,n){"use strict";var r=n("e332"),c=n.n(r);c.a},"7dd7":function(t,e,n){"use strict";var r=n("9eeb"),c=n.n(r);e["default"]=c.a},"9c0d":function(t,e,n){"use strict";var r=n("4dfc"),c=n.n(r);e["default"]=c.a},"9eeb":function(t,e,n){t.exports={wrapper:"TheNav_wrapper_2AFGw",right:"TheNav_right_8CivZ"}},a0f4:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("d225"),c=function t(e,n,c){Object(r["a"])(this,t),this.id=e,this.nickname=n,this.avatar=c}},a28f:function(t,e,n){t.exports={footer:"TheFooter_footer_cxa34"}},b437:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{class:t.$style.footer},[t._v(t._s(t.text))])},c=[],a=(n("6b54"),n("2397"),n("d225")),o=n("b0b4"),i=n("4e2b"),u=n("308d"),s=n("6bb5"),l=n("9ab4"),f=n("2b0e"),h=n("65d9"),b=n.n(h);function d(t){var e=p();return function(){var n,r=Object(s["a"])(t);if(e){var c=Object(s["a"])(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(u["a"])(this,n)}}function p(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var m=function(t){Object(i["a"])(n,t);var e=d(n);function n(){return Object(a["a"])(this,n),e.apply(this,arguments)}return Object(o["a"])(n,[{key:"year",get:function(){var t=new Date;return t.getFullYear()}},{key:"text",get:function(){return"Tickat © ".concat(this.year)}}]),n}(f["default"]);m=Object(l["b"])([b.a],m);var v=m,y=v,g=n("3579"),O=n("2877");function j(t){this["$style"]=g["default"].locals||g["default"]}var k=Object(O["a"])(y,r,c,!1,j,null,null);e["a"]=k.exports},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view",{staticClass:"app"})},a=[],o=(n("6b54"),n("2397"),n("d225")),i=n("b0b4"),u=n("4e2b"),s=n("308d"),l=n("6bb5"),f=n("9ab4"),h=n("60a3"),b=n("4bb5");function d(t){var e=p();return function(){var n,r=Object(l["a"])(t);if(e){var c=Object(l["a"])(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(s["a"])(this,n)}}function p(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var m=Object(b["c"])("Pomodoro"),v=function(t){Object(u["a"])(n,t);var e=d(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return Object(i["a"])(n,[{key:"mounted",value:function(){var t=this;this.setClientWidth({width:document.documentElement.clientWidth}),this.setClientHeight({height:document.documentElement.clientHeight}),window.onresize=function(){t.setClientWidth({width:document.documentElement.clientWidth}),t.setClientHeight({height:document.documentElement.clientHeight})},window.onblur=function(){t.isPomodoroTime&&t.pause({flag:!0})},window.onfocus=function(){if(t.isPomodoroTime){t.pause({flag:!1});var e="欢迎回来！在您离开的这一段时间，我们已经帮您暂停计时。";if(t.remainingTime){var n=t.formatTime(t.remainingTime);e+="还有".concat(n,"就可以休息了哦！")}t.$notify({title:"当前番茄钟尚未完成",message:e,type:"warning"})}}}},{key:"formatTime",value:function(t){t=Math.floor(t/1e3);var e=Math.floor(t/3600);t-=3600*e;var n=Math.floor(t/60),r="";return e&&(r+="".concat(e,"小时")),n&&(!e&&n<=1?r="不足一分钟":r+="".concat(n,"分钟")),r}}]),n}(h["d"]);Object(f["b"])([Object(b["a"])("SET_CLIENT_WIDTH")],v.prototype,"setClientWidth",void 0),Object(f["b"])([Object(b["a"])("SET_CLIENT_HEIGHT")],v.prototype,"setClientHeight",void 0),Object(f["b"])([m.State("isPomodoroTime")],v.prototype,"isPomodoroTime",void 0),Object(f["b"])([m.Mutation("PAUSE")],v.prototype,"pause",void 0),Object(f["b"])([m.Getter("remainingTime")],v.prototype,"remainingTime",void 0),v=Object(f["b"])([h["a"]],v);var y=v,g=y,O=(n("5c0b"),n("2877")),j=Object(O["a"])(g,c,a,!1,null,null,null),k=j.exports,T=n("2f62"),_=n("cc57"),S=function t(){Object(o["a"])(this,t),this.clientWidth=0,this.clientHeight=0};function R(t){var e=x();return function(){var n,r=Object(l["a"])(t);if(e){var c=Object(l["a"])(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(s["a"])(this,n)}}function x(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var w=function(t){Object(u["a"])(n,t);var e=R(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return n}(_["b"]);function E(t){var e=A();return function(){var n,r=Object(l["a"])(t);if(e){var c=Object(l["a"])(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(s["a"])(this,n)}}function A(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var D=function(t){Object(u["a"])(n,t);var e=E(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return Object(i["a"])(n,[{key:"SET_CLIENT_WIDTH",value:function(t){this.state.clientWidth=t.width}},{key:"SET_CLIENT_HEIGHT",value:function(t){this.state.clientHeight=t.height}}]),n}(_["d"]);function P(t){var e=L();return function(){var n,r=Object(l["a"])(t);if(e){var c=Object(l["a"])(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(s["a"])(this,n)}}function L(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var I=function(t){Object(u["a"])(n,t);var e=P(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return n}(_["a"]),C=(n("96cf"),n("3b8d")),$=n("a0f4"),N=n("bc3a"),H=n.n(N),M=n("39da");function U(t){var e=G();return function(){var n,r=Object(l["a"])(t);if(e){var c=Object(l["a"])(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(s["a"])(this,n)}}function G(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var W=function t(){Object(o["a"])(this,t),this.account=new $["a"]("0","null","images/avatars/default.jpg")},B=function(t){Object(u["a"])(n,t);var e=U(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return Object(i["a"])(n,[{key:"isAuth",get:function(){return"0"!==this.state.account.id}}]),n}(_["b"]),F=function(t){Object(u["a"])(n,t);var e=U(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return Object(i["a"])(n,[{key:"SET_AUTH",value:function(t){this.state.account=t}}]),n}(_["d"]),q=function(t){Object(u["a"])(n,t);var e=U(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return Object(i["a"])(n,[{key:"Login",value:function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,H.a.post("/api/login",e);case 2:n=t.sent,this.commit("SET_AUTH",n.data);case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"Logout",value:function(){this.commit("SET_AUTH",new $["a"]("0","null","images/avatars/default.jpg")),M["a"].remove("Auth")}}]),n}(_["a"]),V=new _["c"]({state:W,getters:B,mutations:F,actions:q});function J(t){var e=K();return function(){var n,r=Object(l["a"])(t);if(e){var c=Object(l["a"])(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(s["a"])(this,n)}}function K(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var z=function t(){Object(o["a"])(this,t),this.isPomodoroTime=!1,this.totalTime=0,this.passTime=0,this.pause=!1,this.timer=void 0,this.callback=[],this.dialogVisible=!1,this.interval=1e3},Y=function(t){Object(u["a"])(n,t);var e=J(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return Object(i["a"])(n,[{key:"percentage",get:function(){return this.state.isPomodoroTime?this.state.passTime/this.state.totalTime*100:100}},{key:"remainingTime",get:function(){return this.state.totalTime-this.state.passTime}}]),n}(_["b"]),Z=function(t){Object(u["a"])(n,t);var e=J(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return Object(i["a"])(n,[{key:"SET_TIME",value:function(t){this.state.isPomodoroTime=!0,this.state.totalTime=t.totalTime,this.state.passTime=0,this.state.timer=t.timer}},{key:"ADD_TIME",value:function(t){var e=this.state.interval;t&&(e=t.increment);var n=this.state.totalTime;this.state.passTime+e<=n?this.state.passTime+=e:this.state.passTime+e>n&&(this.state.passTime=n,this.END_TIME())}},{key:"END_TIME",value:function(){if(this.state.isPomodoroTime=!1,void 0!==this.state.timer&&clearInterval(this.state.timer),this.state.timer=void 0,this.state.callback){var t=this.state.passTime===this.state.totalTime;this.state.callback.map((function(e){return e(t)})),this.state.callback=[]}}},{key:"PAUSE",value:function(t){this.state.pause=void 0!==t?t.flag:!this.state.pause}},{key:"SHOW_DIALOG",value:function(t){void 0!==t.flag?this.state.dialogVisible=t.flag:this.state.dialogVisible=!this.state.dialogVisible}},{key:"ADD_CALLBACK",value:function(t){this.state.callback.push(t.func)}},{key:"SET_INTERVAL",value:function(t){this.state.interval=t.interval}}]),n}(_["d"]),Q=function(t){Object(u["a"])(n,t);var e=J(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return Object(i["a"])(n,[{key:"SetPomodoro",value:function(t){var e=this;t.interval&&this.commit("SET_INTERVAL",{interval:t.interval});var n=setInterval((function(){e.state.pause||e.commit("ADD_TIME",{increment:e.state.interval})}),this.state.interval);this.commit("SET_TIME",{totalTime:60*t.totalMinutes*1e3,timer:n}),t.callback&&t.callback.map((function(t){return e.commit("ADD_CALLBACK",{func:t})})),this.commit("SHOW_DIALOG",{flag:!1})}}]),n}(_["a"]),X=new _["c"]({state:z,getters:Y,mutations:Z,actions:Q});r["default"].use(T["b"]);var tt=Object(_["e"])(new _["c"]({state:S,getters:w,mutations:D,actions:I,modules:{Auth:V,Pomodoro:X}}),{strict:!1}),et=n("8c4f"),nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{class:t.$style.container},[n("el-header",{class:t.$style.header},[n("TheNav")],1),n("el-main",[n("PomodoroDialog",{attrs:{visible:t.dialogVisible,callback:[t.onDone]}}),n("router-view")],1),n("el-footer",[n("TheFooter")],1)],1)},rt=[],ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-menu",{class:t.$style.wrapper,attrs:{mode:"horizontal","default-active":t.defaultActive,router:""},on:{select:t.onSelect}},[n("el-menu-item",{staticStyle:{display:"inline"},attrs:{index:"Index",route:{name:"Index"}}},[n("BaseLogo",{attrs:{height:"36px",width:"108px"}})],1),n("el-menu-item",{attrs:{index:"Square",route:{name:"Square"}}},[t._v("广场")]),n("el-menu-item",{attrs:{index:"Group",route:{name:"Group"}}},[t._v("圈子")]),n("el-submenu",{class:t.$style.right,attrs:{index:"User-Submenu","popper-class":"123"}},[n("template",{slot:"title"},[n("img",{attrs:{src:t.avatar}})]),t.isAuth?t._e():n("el-menu-item",{attrs:{index:"Login",route:{name:"Login"}}},[t._v("登录")]),t.isAuth?n("el-menu-item",{attrs:{index:"User",route:{name:"User"}}},[t._v("我的")]):t._e(),t.isAuth?n("el-menu-item",{attrs:{index:"Logout",route:{}},on:{click:t.onLogout}},[t._v("注销")]):t._e()],2),n("el-menu-item",{class:t.$style.right,attrs:{index:"Message",route:{name:"Message"}}},[n("i",{staticClass:"el-icon-bell"})])],1)},at=[],ot=(n("7f7f"),n("0c52"));function it(t){var e=ut();return function(){var n,r=Object(l["a"])(t);if(e){var c=Object(l["a"])(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(s["a"])(this,n)}}function ut(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var st=Object(b["c"])("Auth"),lt=function(t){Object(u["a"])(n,t);var e=it(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return Object(i["a"])(n,[{key:"onLogout",value:function(){var t=this;this.$confirm("确定注销？","提示",{type:"warning"}).then((function(){t.logout(),t.$message({type:"success",message:"注销成功"}),t.$router.push({name:"Login"})}))}},{key:"onSelect",value:function(t){}},{key:"defaultActive",get:function(){return this.$route.name}},{key:"authRouter",get:function(){return{name:this.isAuth?"User":"Login"}}},{key:"avatar",get:function(){return"".concat("/tickat-vue/").concat(this.account.avatar)}}]),n}(h["d"]);Object(f["b"])([st.State("account")],lt.prototype,"account",void 0),Object(f["b"])([st.Getter("isAuth")],lt.prototype,"isAuth",void 0),Object(f["b"])([st.Action("Logout")],lt.prototype,"logout",void 0),lt=Object(f["b"])([Object(h["a"])({components:{BaseLogo:ot["a"]}})],lt);var ft=lt,ht=ft,bt=n("7dd7");function dt(t){this["$style"]=bt["default"].locals||bt["default"]}var pt=Object(O["a"])(ht,ct,at,!1,dt,null,null),mt=pt.exports,vt=n("b437"),yt=n("fc55");function gt(t){var e=Ot();return function(){var n,r=Object(l["a"])(t);if(e){var c=Object(l["a"])(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(s["a"])(this,n)}}function Ot(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var jt=Object(b["c"])("Pomodoro"),kt=function(t){Object(u["a"])(n,t);var e=gt(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return Object(i["a"])(n,[{key:"onDone",value:function(t){t?this.$alert("OK"):this.$alert("退出")}}]),n}(h["d"]);Object(f["b"])([jt.State("dialogVisible")],kt.prototype,"dialogVisible",void 0),kt=Object(f["b"])([Object(h["a"])({components:{TheNav:mt,TheFooter:vt["a"],PomodoroDialog:yt["a"]}})],kt);var Tt=kt,_t=Tt,St=n("9c0d");function Rt(t){this["$style"]=St["default"].locals||St["default"]}var xt=Object(O["a"])(_t,nt,rt,!1,Rt,null,null),wt=xt.exports,Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-main",[n("router-view")],1),n("el-footer",[n("TheFooter")],1)],1)},At=[];function Dt(t){var e=Pt();return function(){var n,r=Object(l["a"])(t);if(e){var c=Object(l["a"])(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(s["a"])(this,n)}}function Pt(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var Lt=function(t){Object(u["a"])(n,t);var e=Dt(n);function n(){return Object(o["a"])(this,n),e.apply(this,arguments)}return n}(h["d"]);Lt=Object(f["b"])([Object(h["a"])({components:{TheFooter:vt["a"]}})],Lt);var It=Lt,Ct=It,$t=Object(O["a"])(Ct,Et,At,!1,null,null,null),Nt=$t.exports;r["default"].use(et["a"]);var Ht=new et["a"]({routes:[{path:"",component:wt,children:[{path:"",alias:"/index",name:"Index",component:function(){return n.e("chunk-bfd83aba").then(n.bind(null,"9553"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-2d21eb63").then(n.bind(null,"d771"))}},{path:"/group",name:"Group",component:function(){return Promise.all([n.e("chunk-4bb10a20"),n.e("chunk-5f7ae91b"),n.e("chunk-f6d6f95c")]).then(n.bind(null,"c4ec"))}},{path:"/square",name:"Square",component:function(){return Promise.all([n.e("chunk-4bb10a20"),n.e("chunk-5f7ae91b"),n.e("chunk-7b1b571f")]).then(n.bind(null,"d2ac"))}},{path:"/user/profile",alias:"/user",name:"User",component:function(){return Promise.all([n.e("chunk-4bb10a20"),n.e("chunk-116a1188")]).then(n.bind(null,"dab6"))}},{path:"/401",name:"NotAuth",component:function(){return n.e("chunk-d769269a").then(n.bind(null,"ec55"))}},{path:"/404",name:"NotFound",component:function(){return n.e("chunk-0ba5a014").then(n.bind(null,"2754"))}}]},{path:"",component:Nt,children:[{path:"/login",name:"Login",component:function(){return n.e("chunk-7c36483a").then(n.bind(null,"ac2a"))}},{path:"/signup",name:"Signup",component:function(){return n.e("chunk-a17161f6").then(n.bind(null,"7106"))}},{path:"/UserLicense",name:"UserLicense",component:function(){return n.e("chunk-2d22dd74").then(n.bind(null,"f8e1"))}}]},{path:"*",redirect:{name:"NotFound"}}]}),Mt=["Login","Signup","square","NotFound"];function Ut(){var t=M["a"].get("Auth");return!!t&&(tt.commit("Auth/SET_AUTH",t),!0)}Ht.beforeEach((function(t,e,n){var r=t.name&&-1===Mt.indexOf(t.name),c=tt.getters["Auth/isAuth"];return c||(c=Ut()),!c&&r?n({name:"Login",query:{redirect:t.fullPath}}):c&&"Login"===t.name?n({name:"Index"}):n()}));var Gt=Ht,Wt=(n("1f54"),n("5c96")),Bt=n.n(Wt);n("0fae");r["default"].config.productionTip=!1,r["default"].use(Bt.a),r["default"].prototype.$http=H.a,new r["default"]({router:Gt,store:tt,render:function(t){return t(k)}}).$mount("#app")},d462:function(t,e,n){t.exports={logo:"BaseLogo_logo_1eY9_"}},e0dd:function(t,e,n){t.exports=n.p+"img/logo.3efdce41.png"},e332:function(t,e,n){},fc55:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{visible:t.visible,width:"30%"},on:{"update:visible":function(e){t.visible=e},close:t.onClose}},[n("el-form",{ref:"form",attrs:{model:t.form}},[n("el-form-item",{attrs:{label:"时长"}},[n("el-input-number",{attrs:{min:1,max:100,step:5},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("开始")]),n("el-button",{on:{click:t.onClose}},[t._v("取消")])],1)],1)],1)},c=[],a=(n("6b54"),n("2397"),n("c5f6"),n("d225")),o=n("b0b4"),i=n("4e2b"),u=n("308d"),s=n("6bb5"),l=n("9ab4"),f=n("60a3"),h=n("4bb5");function b(t){var e=d();return function(){var n,r=Object(s["a"])(t);if(e){var c=Object(s["a"])(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(u["a"])(this,n)}}function d(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var p=Object(h["c"])("Pomodoro"),m=function(t){Object(i["a"])(n,t);var e=b(n);function n(){var t;return Object(a["a"])(this,n),t=e.apply(this,arguments),t.form={},t.time=25,t}return Object(o["a"])(n,[{key:"onSubmit",value:function(){this.setPomodoro({totalMinutes:this.time,interval:this.interval,callback:this.callback})}},{key:"onClose",value:function(){this.showDialog({flag:!1})}}]),n}(f["d"]);Object(l["b"])([Object(f["c"])({type:Boolean,required:!0})],m.prototype,"visible",void 0),Object(l["b"])([Object(f["c"])({type:Number,default:50})],m.prototype,"interval",void 0),Object(l["b"])([Object(f["c"])({type:Array,default:[]})],m.prototype,"callback",void 0),Object(l["b"])([p.Mutation("SHOW_DIALOG")],m.prototype,"showDialog",void 0),Object(l["b"])([p.Action("SetPomodoro")],m.prototype,"setPomodoro",void 0),m=Object(l["b"])([Object(f["a"])({components:{}})],m);var v=m,y=v,g=n("2877"),O=Object(g["a"])(y,r,c,!1,null,null,null);e["a"]=O.exports}});
//# sourceMappingURL=app.ec711e3c.js.map