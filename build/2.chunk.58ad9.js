(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+Dgn":function(t,e,a){"use strict";var s=a("M2k7"),n=a.n(s);e.default=n.a},"5cwM":function(t,e,a){"use strict";a.r(e);var s=a("f+oB"),n={components:{Nav:a("Lz2P").a},mounted:function(){}},i=a("+Dgn"),l=a("psIG");var r=Object(l.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{ref:"header",class:t.$style.hero},[s("div",{attrs:{id:"hero"}},[s("div",{class:t.$style.logoContainer},[s("img",{class:t.$style.logo,attrs:{src:a("VI5G")}})]),t._v(" "),s("br"),t._v(" "),s("div",{class:t.$style.title},[s("h1",[t._v("Onsite Hackathon")]),t._v(" "),s("br"),t._v(" "),t._m(0)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[this._v("\n          Join the Codefest '19 team to bring out the absolute best ideas and implementations from some of the best developers in the country,\n          while they join us for a 24 hours long hackathon under a single roof.\n        ")])])}],!1,function(t){this.$style=i.default.locals||i.default},null,null);r.options.__file="SpecialEvent.vue";var o=r.exports,c=a("aGAf"),u={props:["event","id"],methods:{animateGlitchOpacity:function(t,e,a){var s=this.image,n=Math.round(s.height/20),i=(new Date).getTime(),l=t.getContext("2d");return function r(){var o=(new Date).getTime(),u=Math.min((o-i)/e,1);t.style.opacity=a?u:1-u,l.clearRect(0,0,t.width,t.height);for(var h=0;h<n;h++){var f=Object(c.b)(-Math.abs(30),Math.abs(30));l.drawImage(s,0,h*n,s.width,h*n+n,f,h*n,s.width,h*n+n)}u<1?requestAnimationFrame(r):(l.clearRect(0,0,t.width,t.height),l.drawImage(s,0,0))}()},glitch:function(t,e){this.animateGlitchOpacity(this.$refs.initialCanvas,1500,!t),this.animateGlitchOpacity(this.$refs.finalCanvas,1500,t),t?this.animTyping.type():this.animTyping.erase()}},mounted:function(){var t=this;function e(t,e){var a=t.getContext("2d");t.setAttribute("width",e.width),t.setAttribute("height",e.height),a.drawImage(e,0,0)}var a=new Image;a.src=this.event.image,a.onload=function(){t.image=a,e(t.$refs.initialCanvas,a),e(t.$refs.finalCanvas,a)},this.animTyping=new c.a(this.$refs.eventSummary,this.event.summary)},computed:{eventCellClass:function(){return this.id%2==0?this.$style.even:this.$style.odd}}},h=a("xdN4");var f=Object(l.a)(u,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.$style.event},[a("div",{class:[t.$style.cell,t.eventCellClass],on:{mouseenter:function(e){t.glitch(!0,e)},mouseleave:function(e){t.glitch(!1,e)}}},[a("canvas",{ref:"initialCanvas",class:t.$style.normalCanvas}),t._v(" "),a("canvas",{ref:"finalCanvas",class:t.$style.glitchedCanvas}),t._v(" "),a("div",{class:t.$style.txt},[a("h3",[t._v(t._s(t.event.title))]),t._v(" "),a("br"),t._v(" "),a("p",{class:t.$style.summary},[a("span",{ref:"eventSummary"}),t._v(" "),a("span",{class:t.$style.blink},[t._v("|")])])])])])},[],!1,function(t){this.$style=h.default.locals||h.default},null,null);f.options.__file="StandardEvent.vue";var v=f.exports,p=a("R5D8"),m={components:{AppBar:s.a,SpecialEvent:o,StandardEvent:v,Footer:p.a},data:function(){return{events:[{title:"Appathon",summary:"A challenge to blend your creativity and programming skills to develop a robust mobile app.",image:"../assets/events/appathon.png"},{title:"Capture The Flag",summary:"A platform for the aspiring hackers to get acquainted with the real computer security practices.",image:"../assets/events/ctf.png"},{title:"Decipher",summary:"Cryptographic challenges for those having a knack for solving puzzles and cracking codes.",image:"../assets/events/decipher.png"},{title:"Enigma",summary:"Solve real-life problems by letting your machine learn patterns in the data for you.",image:"../assets/events/enigma.png"},{title:"Vista",summary:"Make machines understand how we perceive and hone your skills in Computer Vision.",image:"../assets/events/vista.png"},{title:"Manthan",summary:"Compete with the best competitive programmers of the world in the world of data structures and algorithms.",image:"../assets/events/manthan.png"},{title:"Mathmania",summary:"Push your limits and gear up your brain by solving some challenging mathematical problems.",image:"../assets/events/mathamania.png"},{title:"Linguipedia",summary:"Solve challenging problems in the field of Natural Language Processing.",image:"../assets/events/linguipedia.png"},{title:"Perplexed",summary:"Adapt to challenging situations by trying your hands at constrained programming.",image:"../assets/events/perplexed.png"}]}}},d=a("Dpl6");var _=Object(l.a)(m,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.$style.root},[a("AppBar"),t._v(" "),a("main",{class:t.$style.wrapper},[a("SpecialEvent"),t._v(" "),t._l(t.events,function(t,e){return a("StandardEvent",{key:e,attrs:{event:t,id:e}})}),t._v(" "),a("div",{class:t.$style.space})],2),t._v(" "),a("Footer")],1)},[],!1,function(t){this.$style=d.default.locals||d.default},null,null);_.options.__file="EventList.vue";e.default=_.exports},"95+L":function(t,e,a){t.exports={wrapper:"_3wlwo",root:"_7hstj",space:"_1jRg8"}},Dpl6:function(t,e,a){"use strict";var s=a("95+L"),n=a.n(s);e.default=n.a},"Gt1/":function(t,e,a){"use strict";var s=a("h09S"),n=a.n(s);e.default=n.a},L7lV:function(t,e,a){t.exports={footer:"_29dDU",socialIcons:"H3wjx",heart:"_2sNDJ",moveHeart:"_2jD_b"}},Lz2P:function(t,e,a){"use strict";var s={data:function(){return{stuck:!1}},mounted:function(){var t=this;addEventListener("scroll",function(e){t.stuck=window.pageYOffset>0},{passive:!0})}},n=a("Gt1/"),i=a("psIG");var l=Object(i.a)(s,function(){var t,e=this,a=e.$createElement,s=e._self._c||a;return s("nav",{class:[e.$style.nav,(t={},t[e.$style.stuck]=e.stuck,t)]},[s("ul",{class:e.$style.links},[s("li",[s("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),e._v(" "),s("li",[s("router-link",{attrs:{to:"/blog"}},[e._v("Blog")])],1),e._v(" "),s("li",[s("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)]),e._v(" "),s("ul",[s("li",[s("a",{class:e.$style.link_external,attrs:{href:"https://github.com/lukeed/pwa"}},[e._v("GitHub")])]),e._v(" "),s("li",[s("a",{class:e.$style.link_external,attrs:{href:"https://github.com/lukeed/pwa"}},[e._v("Documentation")])])])])},[],!1,function(t){this.$style=n.default.locals||n.default},null,null);l.options.__file="Nav.vue";e.a=l.exports},M2k7:function(t,e,a){t.exports={hero:"_3P93P",logoContainer:"_1K52D","neon-box":"_2sGty",logo:"_3MTgS",title:"_1pMnC",blink:"_27TPe",typing:"_28w9F","blink-caret":"_2v0Q0","neon-text":"_2u-Fj"}},P82U:function(t,e,a){t.exports={event:"_378_3",cell:"_1lYU8",txt:"_2GbeV",odd:"_1CAdp",normalCanvas:"_2ilBY",glitchedCanvas:"_1tiIH",even:"wMplx",summary:"_3UD-X",blink:"_3q4bx",typing:"_3kW4L","blink-caret":"Aa3QT","neon-text":"eIjYO","neon-box":"_2VJWA"}},R5D8:function(t,e,a){"use strict";var s={},n=a("h/gZ"),i=a("psIG");var l=Object(i.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{class:t.$style.footer},[a("i",{class:t.$style.heart}),t._v(" "),a("span",[t._v("Codefest' 19")]),t._v(" "),a("span",{class:t.$style.socialIcons},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://www.facebook.com/codefest/"}},[e("span",{staticClass:"fa-stack fa-lg"},[e("i",{staticClass:"fab fa-facebook-f fa-stack-1x"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://twitter.com/c0defest"}},[e("span",{staticClass:"fa-stack fa-lg"},[e("i",{staticClass:"fab fa-twitter fa-stack-1x"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://www.instagram.com/c0defest/?hl=en"}},[e("span",{staticClass:"fa-stack fa-lg"},[e("i",{staticClass:"fab fa-instagram fa-stack-1x"})])])}],!1,function(t){this.$style=n.default.locals||n.default},null,null);l.options.__file="Footer.vue";e.a=l.exports},VI5G:function(t,e,a){t.exports=a.p+"63713e495b0ced1c236635efcde29845.png"},"f+oB":function(t,e,a){"use strict";var s={props:{doAnimate:{type:Boolean,default:!1}},methods:{handleScroll:function(t){window.scrollY/window.innerHeight>.5?this.showAppbar():this.hideAppbar()},showAppbar:function(){this.$el.classList.add(this.$style.shown)},hideAppbar:function(){this.$el.classList.remove(this.$style.shown)},animateScrollShow:function(){window.addEventListener("scroll",this.handleScroll)}},mounted:function(){this.$props.doAnimate&&this.animateScrollShow()}},n=a("pcWg"),i=a("psIG");var l=Object(i.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:[t.$style.appbar,t.doAnimate?t.$style.animate:""]},[a("div",{class:t.$style.nav},[a("ul",{class:t.$style.rNav},[a("li",{class:t.$style.link},[t._m(0)]),t._v(" "),a("li",{class:t.$style.link},[t._m(1)])])]),t._v(" "),a("div",{class:t.$style.notch},[a("div",{class:t.$style.logo},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:"assets/logo.png"}})])],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://goo.gl/DrCFHB",target:"_blank"}},[e("span",{staticClass:"fa fa-circle fa-xs",attrs:{"aria-hidden":"true"}}),this._v("Brochure\n        ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://goo.gl/forms/RyjmY7i002oUHivu2",target:"_blank"}},[e("span",{staticClass:"fa fa-circle fa-xs",attrs:{"aria-hidden":"true"}}),this._v("\n          Sponsor Us\n        ")])}],!1,function(t){this.$style=n.default.locals||n.default},null,null);l.options.__file="AppBar.vue";e.a=l.exports},"h/gZ":function(t,e,a){"use strict";var s=a("L7lV"),n=a.n(s);e.default=n.a},h09S:function(t,e,a){t.exports={nav:"_1QPL_",stuck:"_38EXa",logo:"_2czqJ",link_external:"p0qkT",links:"_2dBSt"}},oZ8F:function(t,e,a){t.exports={appbar:"Cqa-N",animate:"_3Hgh2",shown:"Z-rSu",nav:"_3HQTr",rNav:"_2C8g9",link:"_1YH83","neon-text":"qIYYt",notch:"obY2g",logo:"_2zxuY",blink:"_1rzuW",typing:"_3UhUt","blink-caret":"_2NBq_","neon-box":"_1R8UN"}},pcWg:function(t,e,a){"use strict";var s=a("oZ8F"),n=a.n(s);e.default=n.a},xdN4:function(t,e,a){"use strict";var s=a("P82U"),n=a.n(s);e.default=n.a}}]);
//# sourceMappingURL=2.chunk.58ad9.js.map