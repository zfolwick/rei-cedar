!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("CdrMediaObject",[],e):"object"==typeof exports?exports.CdrMediaObject=e():t.CdrMediaObject=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=0)}([function(t,e,r){"use strict";function n(t){t.component("cdr-media-object",i.a)}Object.defineProperty(e,"__esModule",{value:!0});var i=r(1);r.d(e,"CdrMediaObject",function(){return i.a}),"undefined"!=typeof window&&window.Vue&&window.Vue.use(n),e.default=n},function(t,e,r){"use strict";var n=r(4),i=r(10),o=function(t){r(2)},s=r(3)(n.a,i.a,!1,o,null,null);e.a=s.exports},function(t,e){},function(t,e){t.exports=function(t,e,r,n,i,o){var s,a=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(s=t,a=t.default);var u="function"==typeof a?a.options:a;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId=i);var f;if(o?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=f):n&&(f=n),f){var d=u.functional,l=d?u.render:u.beforeCreate;d?(u._injectStyles=f,u.render=function(t,e){return f.call(e),l(t,e)}):u.beforeCreate=l?[].concat(l,f):[f]}return{esModule:s,exports:a,options:u}}},function(t,e,r){"use strict";var n=r(5),i=(r.n(n),r(6)),o=(r.n(i),r(7)),s=(r.n(o),r(8)),a=r(9);e.a={name:"cdr-media-object",mixins:[s.a,a.a],components:{CdrA:n.CdrA,CdrImg:i.CdrImg,CdrIcon:o.CdrIcon},props:{width:String,mediaAlign:{type:String,validator:function(t){return["right","left","center"].indexOf(t)>=0||!1}},iconUrl:String,imgClass:String,imgSrc:String,imgRadius:String,imgRatio:String,imgCover:Boolean,imgCrop:String,imgAlt:String,imgModifier:String,imgHref:String,imgHrefText:String,imgTarget:String},computed:{baseClass:function(){return"cdr-media-object"},alignClass:function(){return this.mediaAlign?"cdr-media-object__body--"+this.mediaAlign:""},mediaWidth:function(){return"width: "+this.width+";"}}}},function(t,e,r){!function(e,r){t.exports=r()}(0,function(){return function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=0)}([function(t,e,r){"use strict";function n(t){t.component("cdr-a",i.a)}Object.defineProperty(e,"__esModule",{value:!0});var i=r(1);r.d(e,"CdrA",function(){return i.a}),"undefined"!=typeof window&&window.Vue&&window.Vue.use(n),e.default=n},function(t,e,r){"use strict";var n=r(4),i=r(6),o=r(3)(n.a,i.a,!1,function(t){r(2)},null,null);e.a=o.exports},function(t,e){},function(t,e){t.exports=function(t,e,r,n,i,o){var s,a=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(s=t,a=t.default);var u="function"==typeof a?a.options:a;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId=i);var f;if(o?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=f):n&&(f=n),f){var d=u.functional,l=d?u.render:u.beforeCreate;d?(u._injectStyles=f,u.render=function(t,e){return f.call(e),l(t,e)}):u.beforeCreate=l?[].concat(l,f):[f]}return{esModule:s,exports:a,options:u}}},function(t,e,r){"use strict";var n=r(5);e.a={name:"cdr-a",mixins:[n.a],props:{target:String,rel:String},computed:{baseClass:function(){return(this.modifier?this.modifier.split(" "):[]).indexOf("button")>=0?"cdr-button":"cdr-link"},newRel:function(){return"_blank"===this.target?this.rel||"noopener noreferrer":this.rel}}}},function(t,e,r){"use strict";e.a={props:{modifier:String},computed:{modifierClass:function(){var t=this.baseClass,e=this.modifier?this.modifier.split(" "):[],r="";return this.theme||(r+=""+t,e.forEach(function(e){r+=" "+t+"--"+e+" "})),r}}}},function(t,e,r){"use strict";e.a={render:function(){var t=this.$createElement;return(this._self._c||t)("a",{class:this.modifierClass,attrs:{target:this.target,rel:this.newRel}},[this._t("default")],2)},staticRenderFns:[]}}])})},function(t,e,r){!function(e,r){t.exports=r()}(0,function(){return function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=8)}([function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e){var r=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=r)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){t.exports=!r(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,r){var n=r(20),i=r(5);t.exports=function(t){return n(i(t))}},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e,r){"use strict";function n(t){t.component("cdr-img",i.a)}Object.defineProperty(e,"__esModule",{value:!0});var i=r(9);r.d(e,"CdrImg",function(){return i.a}),"undefined"!=typeof window&&window.Vue&&window.Vue.use(n),e.default=n},function(t,e,r){"use strict";var n=r(12),i=r(41),o=r(11)(n.a,i.a,!1,function(t){r(10)},null,null);e.a=o.exports},function(t,e){},function(t,e){t.exports=function(t,e,r,n,i,o){var s,a=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(s=t,a=t.default);var u="function"==typeof a?a.options:a;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId=i);var f;if(o?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=f):n&&(f=n),f){var d=u.functional,l=d?u.render:u.beforeCreate;d?(u._injectStyles=f,u.render=function(t,e){return f.call(e),l(t,e)}):u.beforeCreate=l?[].concat(l,f):[f]}return{esModule:s,exports:a,options:u}}},function(t,e,r){"use strict";var n=r(13),i=r.n(n),o=r(40);e.a={name:"cdr-img",mixins:[o.a],props:{src:{type:String,required:!0},alt:{type:String,default:" "},lazy:{type:Boolean},lazyOpts:{type:Object,default:function(){}},ratio:{type:String,validator:function(t){return["auto","square","1-2","2-3","3-4","9-16","2-1","3-2","4-3","16-9"].indexOf(t)>=0||!1}},ratioSm:{type:String,validator:function(t){return["auto","square","1-2","2-3","3-4","9-16","2-1","3-2","4-3","16-9"].indexOf(t)>=0||!1}},ratioMd:{type:String,validator:function(t){return["auto","square","1-2","2-3","3-4","9-16","2-1","3-2","4-3","16-9"].indexOf(t)>=0||!1}},ratioLg:{type:String,validator:function(t){return["auto","square","1-2","2-3","3-4","9-16","2-1","3-2","4-3","16-9"].indexOf(t)>=0||!1}},crop:{type:String},cover:{type:Boolean},radius:{type:String,validator:function(t){return["square","top","right","bottom","left"].indexOf(t)>=0||!1}}},computed:{baseClass:function(){return"cdr-image"},lazyClass:function(){var t={};return t["lazy-image"]=this.lazy,t},radiusClass:function(){var t={};return t["cdr-add-radius--"+this.utiliyRadius]=this.utiliyRadius,t},ratioClass:function(){var t={};return t["cdr-media-frame--"+this.ratio]=this.ratio,t["cdr-media-frame--"+this.ratioSm+"@sm"]=this.ratioSm,t["cdr-media-frame--"+this.ratioMd+"@md"]=this.ratioMd,t["cdr-media-frame--"+this.ratioLg+"@lg"]=this.ratioLg,t},coverClass:function(){var t={};return t["cdr-media-frame__cover"]=!0,t["cdr-media-frame__cover--crop"]=this.crop,t["cdr-media-frame__cover--cover"]=this.cover,t},cropClass:function(){var t="";return(this.crop?this.crop.split(" "):[]).forEach(function(e){t+="cdr-media-frame--"+e+" "}),t},styleObject:function(){return{backgroundImage:"url("+this.src+")"}},lazyAttrs:function(){var t=this,e={};return this.lazy&&i()(this.lazyOpts).forEach(function(r){e["data-"+r]=t.lazyOpts[r]}),e}}}},function(t,e,r){t.exports={default:r(14),__esModule:!0}},function(t,e,r){r(15),t.exports=r(1).Object.keys},function(t,e,r){var n=r(16),i=r(17);r(29)("keys",function(){return function(t){return i(n(t))}})},function(t,e,r){var n=r(5);t.exports=function(t){return Object(n(t))}},function(t,e,r){var n=r(18),i=r(28);t.exports=Object.keys||function(t){return n(t,i)}},function(t,e,r){var n=r(19),i=r(6),o=r(22)(!1),s=r(25)("IE_PROTO");t.exports=function(t,e){var r,a=i(t),c=0,u=[];for(r in a)r!=s&&n(a,r)&&u.push(r);for(;e.length>c;)n(a,r=e[c++])&&(~o(u,r)||u.push(r));return u}},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e,r){var n=r(21);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e,r){var n=r(6),i=r(23),o=r(24);t.exports=function(t){return function(e,r,s){var a,c=n(e),u=i(c.length),f=o(s,u);if(t&&r!=r){for(;u>f;)if((a=c[f++])!=a)return!0}else for(;u>f;f++)if((t||f in c)&&c[f]===r)return t||f||0;return!t&&-1}}},function(t,e,r){var n=r(7),i=Math.min;t.exports=function(t){return t>0?i(n(t),9007199254740991):0}},function(t,e,r){var n=r(7),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=n(t))<0?i(t+e,0):o(t,e)}},function(t,e,r){var n=r(26)("keys"),i=r(27);t.exports=function(t){return n[t]||(n[t]=i(t))}},function(t,e,r){var n=r(0),i=n["__core-js_shared__"]||(n["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+n).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,r){var n=r(30),i=r(1),o=r(4);t.exports=function(t,e){var r=(i.Object||{})[t]||Object[t],s={};s[t]=e(r),n(n.S+n.F*o(function(){r(1)}),"Object",s)}},function(t,e,r){var n=r(0),i=r(1),o=r(31),s=r(33),a=function(t,e,r){var c,u,f,d=t&a.F,l=t&a.G,p=t&a.S,m=t&a.P,_=t&a.B,v=t&a.W,g=l?i:i[e]||(i[e]={}),h=g.prototype,y=l?n:p?n[e]:(n[e]||{}).prototype;l&&(r=e);for(c in r)(u=!d&&y&&void 0!==y[c])&&c in g||(f=u?y[c]:r[c],g[c]=l&&"function"!=typeof y[c]?r[c]:_&&u?o(f,n):v&&y[c]==f?function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):m&&"function"==typeof f?o(Function.call,f):f,m&&((g.virtual||(g.virtual={}))[c]=f,t&a.R&&h&&!h[c]&&s(h,c,f)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e,r){var n=r(32);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,i){return t.call(e,r,n,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,r){var n=r(34),i=r(39);t.exports=r(3)?function(t,e,r){return n.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){var n=r(35),i=r(36),o=r(38),s=Object.defineProperty;e.f=r(3)?Object.defineProperty:function(t,e,r){if(n(t),e=o(e,!0),n(r),i)try{return s(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){var n=r(2);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e,r){t.exports=!r(3)&&!r(4)(function(){return 7!=Object.defineProperty(r(37)("div"),"a",{get:function(){return 7}}).a})},function(t,e,r){var n=r(2),i=r(0).document,o=n(i)&&n(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,r){var n=r(2);t.exports=function(t,e){if(!n(t))return t;var r,i;if(e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!n(i=r.call(t)))return i;if(!e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){"use strict";e.a={props:{modifier:String},computed:{modifierClass:function(){var t=this.baseClass,e=this.modifier?this.modifier.split(" "):[],r="";return this.theme||(r+=""+t,e.forEach(function(e){r+=" "+t+"--"+e+" "})),r}}}},function(t,e,r){"use strict";e.a={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.ratio?r("div",{staticClass:"cdr-media-frame",class:[t.ratioClass,t.cropClass]},[r("div",t._b({class:[t.coverClass,t.lazyClass],style:t.styleObject,attrs:{"aria-hidden":"true"}},"div",t.lazyAttrs,!1)),t._v(" "),r("img",{staticClass:"cdr-media-frame__image cdr-media-frame__image--hidden",class:[t.modifierClass,t.radiusClass],attrs:{src:t.src,alt:t.alt}})]):r("img",t._b({class:[t.modifierClass,t.radiusClass,t.lazyClass],attrs:{src:t.src,alt:t.alt}},"img",t.lazyAttrs,!1))},staticRenderFns:[]}}])})},function(t,e,r){!function(e,r){t.exports=r()}(0,function(){return function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=0)}([function(t,e,r){"use strict";function n(t){t.component("cdr-icon",i.a)}Object.defineProperty(e,"__esModule",{value:!0});var i=r(1);r.d(e,"CdrIcon",function(){return i.a}),"undefined"!=typeof window&&window.Vue&&window.Vue.use(n),e.default=n},function(t,e,r){"use strict";var n=r(4),i=r(5),o=r(3)(n.a,i.a,!1,function(t){r(2)},null,null);e.a=o.exports},function(t,e){},function(t,e){t.exports=function(t,e,r,n,i,o){var s,a=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(s=t,a=t.default);var u="function"==typeof a?a.options:a;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId=i);var f;if(o?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=f):n&&(f=n),f){var d=u.functional,l=d?u.render:u.beforeCreate;d?(u._injectStyles=f,u.render=function(t,e){return f.call(e),l(t,e)}):u.beforeCreate=l?[].concat(l,f):[f]}return{esModule:s,exports:a,options:u}}},function(t,e,r){"use strict";e.a={name:"cdr-icon",props:{url:{type:String,required:!0}}}},function(t,e,r){"use strict";e.a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"cdr-icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":this.url}})])},staticRenderFns:[]}}])})},function(t,e,r){"use strict";e.a={props:{modifier:String},computed:{modifierClass:function(){var t=this.baseClass,e=this.modifier?this.modifier.split(" "):[],r="";return this.theme||(r+=""+t,e.forEach(function(e){r+=" "+t+"--"+e+" "})),r}}}},function(t,e,r){"use strict";e.a={props:{lazy:Boolean,lazyOpts:{type:Object,default:function(){}}}}},function(t,e,r){"use strict";var n={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:[t.modifierClass]},[t.imgHref?[r("cdr-a",{attrs:{href:t.imgHref,target:"imgTarget"}},[r("span",{staticClass:"u-sr-only"},[t._v(t._s(t.imgHrefText))]),t._v(" "),t.iconUrl?r("cdr-icon",{staticClass:"cdr-media-object__figure",class:t.imgClass,attrs:{url:t.iconUrl}}):r("cdr-img",{staticClass:"cdr-media-object__figure",class:t.imgClass,style:t.mediaWidth,attrs:{lazy:t.lazy,lazyOpts:t.lazyOpts,alt:t.imgAlt,src:t.imgSrc,ratio:t.imgRatio,crop:t.imgCrop,cover:t.imgCover,radius:t.imgRadius,modifier:t.imgModifier}})],1)]:[t.iconUrl?r("cdr-icon",{staticClass:"cdr-media-object__figure",class:t.imgClass,attrs:{url:t.iconUrl}}):r("cdr-img",{staticClass:"cdr-media-object__figure",class:t.imgClass,style:t.mediaWidth,attrs:{lazy:t.lazy,lazyOpts:t.lazyOpts,alt:t.imgAlt,src:t.imgSrc,ratio:t.imgRatio,crop:t.imgCrop,cover:t.imgCover,radius:t.imgRadius,modifier:t.imgModifier}})],t._v(" "),r("div",{staticClass:"cdr-media-object__body",class:t.alignClass},[t._t("default")],2)],2)},staticRenderFns:[]};e.a=n}])});