(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cd92bc2","chunk-88e01b2a"],{1208:function(t,e,i){t.exports=i.p+"img/myPhoto.e08fd6a5.png"},"691b":function(t,e,i){"use strict";i("fd14")},"78d7":function(t,e,i){"use strict";var n=i("6b53");e["a"]=n["a"]},"8a79":function(t,e,i){"use strict";var n=i("23e7"),r=i("06cf").f,a=i("50c4"),s=i("5a34"),o=i("1d80"),c=i("ab13"),l=i("c430"),h="".endsWith,u=Math.min,d=c("endsWith"),v=!l&&!d&&!!function(){var t=r(String.prototype,"endsWith");return t&&!t.writable}();n({target:"String",proto:!0,forced:!v&&!d},{endsWith:function(t){var e=String(o(this));s(t);var i=arguments.length>1?arguments[1]:void 0,n=a(e.length),r=void 0===i?n:u(a(i),n),c=String(t);return h?h.call(e,c,r):e.slice(r-c.length,r)===c}})},"8efc":function(t,e,i){},"90a2":function(t,e,i){"use strict";var n=i("53ca");i("7db0");function r(t,e){var i=e.modifiers||{},r=e.value,s="object"===Object(n["a"])(r)?r:{handler:r,options:{}},o=s.handler,c=s.options,l=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(t._observe){if(o&&(!i.quiet||t._observe.init)){var r=Boolean(e.find((function(t){return t.isIntersecting})));o(e,n,r)}t._observe.init&&i.once?a(t):t._observe.init=!0}}),c);t._observe={init:!1,observer:l},l.observe(t)}function a(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var s={inserted:r,unbind:a};e["a"]=s},a380:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"scroll",rawName:"v-scroll:#scroll-target",value:t.onScroll,expression:"onScroll",arg:"#scroll-target"}],attrs:{justify:"center",align:"center"}},[n("v-img",{staticClass:"mb-8",staticStyle:{"border-radius":"50px"},attrs:{gradient:"to top right, rgba(100,115,201,.1), rgba(25,32,72,.3)",src:i("1208"),"max-width":"300px"}}),n("v-lazy",{attrs:{options:{threshold:.2},height:"auto",transition:"fade-transition"},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[n("div",{staticClass:"typewriter",attrs:{justify:"left",align:"left"}},[n("h1",[t._v("Hi there, I'm Shrikant.")]),n("div",{attrs:{id:"lines"}},[n("p",{attrs:{id:"line"}},[t._v(" I am a FrontEnd Software Developer from Denver, Colorado with ~3 years of experience. Even though I have worked with all three major players of web development - Angular, React, and Vue, I majorly work with React and Vue. I love working with Javascript. Recently I started an Instagram page to share my knowledge about Javascript with other upcoming web developers. When I am not programming, I like to cook, bike and/or hike, gym, or play with Data Structure & Algorithms. ")])])])])],1)},r=[],a=i("d4ec"),s=i("bee2"),o=i("262e"),c=i("2caf"),l=(i("99af"),i("9ab4")),h=i("2b0e"),u=i("1b40");i("b8bf"),i("d81d"),i("4795"),i("4de4"),i("a623"),i("a15b"),i("1276"),i("ac1f"),i("fb6a"),i("45fc");function d(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function v(t,e){return t.split("").map(e).join("")}function f(t){return t[Math.floor(Math.random()*t.length)]}function g(t,e){for(var i=0,n=t.length;i<n;i++)e(t[i],i)}function m(t){return t.map((function(t,e){return!!t&&e})).filter((function(t){return!1!==t}))}function p(t){return"string"===typeof t?[].slice.call(document.querySelectorAll(t)):[NodeList,HTMLCollection].some((function(e){return t instanceof e}))?[].slice.call(t):t.nodeType?[t]:t}i("c975");var b=function(){function t(e){Object(a["a"])(this,t),this.value=e,this.init()}return Object(s["a"])(t,[{key:"init",value:function(){return this.bitmap=this.value.split("").map((function(){return 1})),this}},{key:"render",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.length?v(this.value,(function(n,r){return i.indexOf(n)>-1?n:t.bitmap[r]?f(e):n})):this.value}},{key:"decay",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;while(t--){var e=m(this.bitmap);this.bitmap[f(e)]=0}return this}},{key:"text",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.value;return this.value=t,this.init(),this}}]),t}(),y=function(t){Object(o["a"])(i,t);var e=Object(c["a"])(i);function i(t){var n;return Object(a["a"])(this,i),n=e.call(this,t.textContent),n.element=t,n}return Object(s["a"])(i,[{key:"write",value:function(t,e){return this.element.textContent=this.render(t,e),this}}]),i}(b),S=function(t){return new y(t)},w={characters:"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz~!@#$%^&*()-+=[]{}|;:,./<>?",exclude:[" "],speed:50},k=function(){function t(e,i){Object(a["a"])(this,t),this.options=d(Object.create(w),i),this.elements=p(e).map(S),this.running=!1}return Object(s["a"])(t,[{key:"once",value:function(){var t=this;return g(this.elements,(function(e){return e.write(t.options.characters,t.options.exclude)})),this.running=!0,this}},{key:"start",value:function(){var t=this;return clearInterval(this.interval),g(this.elements,(function(t){return t.init()})),this.interval=setInterval((function(){return t.once()}),this.options.speed),this.running=!0,this}},{key:"stop",value:function(){return clearInterval(this.interval),this.running=!1,this}},{key:"set",value:function(t){return d(this.options,t),this.running&&this.start(),this}},{key:"text",value:function(t){var e=this;return g(this.elements,(function(i){i.text(t(i.value)),e.running||i.write()})),this}},{key:"reveal",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e/this.options.speed||1,r=function(){clearInterval(t.interval),t.running=!0,t.interval=setInterval((function(){var e=t.elements.filter((function(t){return!t.bitmap.every((function(t){return!t}))}));g(e,(function(e){var i=Math.ceil(e.value.length/n);e.decay(i).write(t.options.characters,t.options.exclude)})),e.length||(t.stop(),g(t.elements,(function(t){return t.init()})))}),t.options.speed)};return setTimeout(r,i),this}}]),t}(),j=function(t,e){return new k(t,e)},O=function(t){Object(o["a"])(i,t);var e=Object(c["a"])(i);function i(){var t;return Object(a["a"])(this,i),t=e.apply(this,arguments),t.isActive=!1,t.implement=0,t.scrollVariable=0,t.line1="I am a FrontEnd Software Developer form Denver, Colorado with ~3 years of experience.",t.line2="Even though I have worked with all three major-player of web development - Angular, React, and\n                        Vue,",t.line3="I majorly work with React and Vue. I like working with Javascript.",t.line4="Recently I started Instagram page to share my knowledge about Javascript with other upcoming web\n                        developer.",t.line5="When I am not programming, I like to cook, bike and/or hike, gym or play with Data Struture &\n                        Algorithms.",t}return Object(s["a"])(i,[{key:"created",value:function(){console.log("line1: ".concat(this.line1.length,", line2: ").concat(this.line2.length,", line3: ").concat(this.line3.length,", line4: ").concat(this.line4.length,", line5: ").concat(this.line5.length))}},{key:"onScroll",value:function(t){this.scrollVariable=t.target.scrollTop,this.scrollVariable>570&&(this.implement++,this.animGlitch())}},{key:"animGlitch",value:function(){if(2===this.implement){var t=document.querySelector("#lines"),e=j(t,{characters:"░▒ ▓/░ﻨ█▓█ﻪ▒░ო▓▒▓էհรﻨĸռﻪս▒▓░",speed:100});e.start(),e.reveal(4e3),console.log(e)}}}]),i}(h["default"]);O=Object(l["a"])([u["a"]],O);var I=O,_=I,x=(i("691b"),i("2877")),A=i("6544"),z=i.n(A),C=i("adda"),E=i("5530"),L=i("24b2"),W=i("ade3");function R(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return h["default"].extend({name:"toggleable",model:{prop:e,event:i},props:Object(W["a"])({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},Object(W["a"])(t,e,(function(t){this.isActive=!!t})),Object(W["a"])(t,"isActive",(function(t){!!t!==this[e]&&this.$emit(i,t)})),t)})}var $=R(),V=$,P=i("90a2"),M=i("58df"),D=i("80d2"),F=Object(M["a"])(L["a"],V).extend({name:"VLazy",directives:{intersect:P["a"]},props:{options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles:function(){return Object(E["a"])({},this.measurableStyles)}},methods:{genContent:function(){var t=Object(D["i"])(this);if(!this.transition)return t;var e=[];return this.isActive&&e.push(t),this.$createElement("transition",{props:{name:this.transition}},e)},onObserve:function(t,e,i){this.isActive||(this.isActive=i)}},render:function(t){return t(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}}),J=i("269a"),T=i.n(J),H=i("f977"),N=Object(x["a"])(_,n,r,!1,null,"49da0474",null);e["default"]=N.exports;z()(N,{VImg:C["a"],VLazy:F}),T()(N,{Scroll:H["a"]})},adda:function(t,e,i){"use strict";var n=i("53ca"),r=(i("a9e3"),i("a15b"),i("8a79"),i("2ca0"),i("4795"),i("8efc"),i("90a2")),a=i("78d7"),s=i("7560"),o=i("58df"),c=i("d9f7"),l=i("d9bd"),h="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(o["a"])(a["a"],s["a"]).extend({name:"v-img",directives:{intersect:r["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(n["a"])(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!h||i||this.eager){if(this.normalisedSrc.lazySrc){var n=new Image;n.src=this.normalisedSrc.lazySrc,this.pollForSize(n,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode()["catch"]((function(e){Object(l["b"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var r=t.naturalHeight,a=t.naturalWidth;r||a?(e.naturalWidth=a,e.calculatedAspectRatio=a/r):t.complete||!e.isLoading||e.hasError||null==i||setTimeout(n,i)};n()},genContent:function(){var t=a["a"].options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=a["a"].options.render.call(this,t),i=Object(c["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:h?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},b85c:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("277d");var n=i("a3f3");function r(t,e){var i;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=n(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,c=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return o=t.done,t},e:function(t){c=!0,s=t},f:function(){try{o||null==i["return"]||i["return"]()}finally{if(c)throw s}}}}},d9f7:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var n=i("5530"),r=i("3835"),a=i("b85c"),s=(i("1276"),i("ac1f"),i("498a"),i("b64b"),i("99af"),i("80d2")),o={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function c(t){var e,i={},n=Object(a["a"])(t.split(o.styleList));try{for(n.s();!(e=n.n()).done;){var c=e.value,l=c.split(o.styleProp),h=Object(r["a"])(l,2),u=h[0],d=h[1];u=u.trim(),u&&("string"===typeof d&&(d=d.trim()),i[Object(s["a"])(u)]=d)}}catch(v){n.e(v)}finally{n.f()}return i}function l(){var t,e={},i=arguments.length;while(i--)for(var r=0,a=Object.keys(arguments[i]);r<a.length;r++)switch(t=a[r],t){case"class":case"directives":arguments[i][t]&&(e[t]=u(e[t],arguments[i][t]));break;case"style":arguments[i][t]&&(e[t]=h(e[t],arguments[i][t]));break;case"staticClass":if(!arguments[i][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[i][t].trim();break;case"on":case"nativeOn":arguments[i][t]&&(e[t]=d(e[t],arguments[i][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[i][t])break;e[t]||(e[t]={}),e[t]=Object(n["a"])(Object(n["a"])({},arguments[i][t]),e[t]);break;default:e[t]||(e[t]=arguments[i][t])}return e}function h(t,e){return t?e?(t=Object(s["p"])("string"===typeof t?c(t):t),t.concat("string"===typeof e?c(e):e)):t:e}function u(t,e){return e?t&&t?Object(s["p"])(t).concat(e):e:t}function d(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var t={},e=2;e--;){var i=e<0||arguments.length<=e?void 0:arguments[e];for(var n in i)i[n]&&(t[n]?t[n]=[].concat(i[n],t[n]):t[n]=i[n])}return t}},fd14:function(t,e,i){}}]);
//# sourceMappingURL=chunk-5cd92bc2.0bba91a4.js.map