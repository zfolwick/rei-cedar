!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("CdrColumn",[],e):"object"==typeof exports?exports.CdrColumn=e():t.CdrColumn=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=0)}([function(t,e,r){"use strict";function n(t){t.component("cdr-col",i.a)}Object.defineProperty(e,"__esModule",{value:!0});var i=r(1);r.d(e,"CdrCol",function(){return i.a}),"undefined"!=typeof window&&window.Vue&&window.Vue.use(n),e.default=n},function(t,e,r){"use strict";var n=r(3),i=r(5),o=r(2)(n.a,i.a,!1,null,null,null);e.a=o.exports},function(t,e){t.exports=function(t,e,r,n,i,o){var s,a=t=t||{},d=typeof t.default;"object"!==d&&"function"!==d||(s=t,a=t.default);var c="function"==typeof a?a.options:a;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId=i);var l;if(o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):n&&(l=n),l){var u=c.functional,f=u?c.render:c.beforeCreate;u?(c._injectStyles=l,c.render=function(t,e){return l.call(e),f(t,e)}):c.beforeCreate=f?[].concat(f,l):[l]}return{esModule:s,exports:a,options:c}}},function(t,e,r){"use strict";var n=r(4);r.n(n);e.a={name:"cdr-col",components:{Row:n.CdrRow},inject:["rowType"],inheritAttrs:!1,props:{span:{type:[String,Number],validator:function(t){var e=parseInt(t,10);return e>0&&e<=12||!1}},spanSm:{type:[String,Number],validator:function(t){var e=parseInt(t,10);return e>0&&e<=12||!1}},spanMd:{type:[String,Number],validator:function(t){var e=parseInt(t,10);return e>0&&e<=12||!1}},spanLg:{type:[String,Number],validator:function(t){var e=parseInt(t,10);return e>0&&e<=12||!1}},offsetLeft:{type:[String,Number],validator:function(t){var e=parseInt(t,10);return e>=0&&e<=12||!1}},offsetLeftSm:{type:[String,Number],validator:function(t){var e=parseInt(t,10);return e>=0&&e<=12||!1}},offsetLeftMd:{type:[String,Number],validator:function(t){var e=parseInt(t,10);return e>=0&&e<=12||!1}},offsetLeftLg:{type:[String,Number],validator:function(t){var e=parseInt(t,10);return e>=0&&e<=12||!1}},offsetRight:{type:[String,Number],validator:function(t){var e=parseInt(t,10);return e>=0&&e<=12||!1}},offsetRightSm:{type:[String,Number],validator:function(t){var e=parseInt(t,10);return e>=0&&e<=12||!1}},offsetRightMd:{type:[String,Number],validator:function(t){var e=parseInt(t,10);return e>=0&&e<=12||!1}},offsetRightLg:{type:[String,Number],validator:function(t){var e=parseInt(t,10);return e>=0&&e<=12||!1}},alignSelf:{type:String,validator:function(t){return["top","middle","bottom","stretch"].indexOf(t)>=0||!1}},alignSelfSm:{type:String,validator:function(t){return["top","middle","bottom","stretch"].indexOf(t)>=0||!1}},alignSelfMd:{type:String,validator:function(t){return["top","middle","bottom","stretch"].indexOf(t)>=0||!1}},alignSelfLg:{type:String,validator:function(t){return["top","middle","bottom","stretch"].indexOf(t)>=0||!1}},hide:{type:String,validator:function(t){return["up","down","only"].indexOf(t)>=0||!1}},hideSm:{type:String,validator:function(t){return["up","down","only"].indexOf(t)>=0||!1}},hideMd:{type:String,validator:function(t){return["up","down","only"].indexOf(t)>=0||!1}},hideLg:{type:String,validator:function(t){return["up","down","only"].indexOf(t)>=0||!1}},isRow:{type:Boolean,default:!1}},computed:{isList:function(){return"list"===this.rowType},columnClasses:function(){var t={};return t["cdr-col_span"+this.span]=this.span,t["cdr-col_span"+this.spanSm+"@sm"]=this.spanSm,t["cdr-col_span"+this.spanMd+"@md"]=this.spanMd,t["cdr-col_span"+this.spanLg+"@lg"]=this.spanLg,t["cdr-col--hide-"+this.hide]=this.hide,t["cdr-col--hide@sm-"+this.hideSm]=this.hideSm,t["cdr-col--hide@md-"+this.hideMd]=this.hideMd,t["cdr-col--hide@lg-"+this.hideLg]=this.hideLg,t["cdr-col--offsetLeft"+this.offsetLeft]=this.offsetLeft,t["cdr-col--offsetLeft"+this.offsetLeftSm+"@sm"]=this.offsetLeftSm,t["cdr-col--offsetLeft"+this.offsetLeftMd+"@md"]=this.offsetLeftMd,t["cdr-col--offsetLeft"+this.offsetLeftLg+"@lg"]=this.offsetLeftLg,t["cdr-col--offsetRight"+this.offsetRight]=this.offsetRight,t["cdr-col--offsetRight"+this.offsetRightSm+"@sm"]=this.offsetRightSm,t["cdr-col--offsetRight"+this.offsetRightMd+"@md"]=this.offsetRightMd,t["cdr-col--offsetRight"+this.offsetRightLg+"@lg"]=this.offsetRightLg,t["cdr-col--"+this.alignSelf]=this.alignSelf,t["cdr-col--"+this.alignSelfSm+"@sm"]=this.alignSelfSm,t["cdr-col--"+this.alignSelfMd+"@md"]=this.alignSelfMd,t["cdr-col--"+this.alignSelfLg+"@lg"]=this.alignSelfLg,t}}}},function(t,e,r){!function(e,r){t.exports=r()}(0,function(){return function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=0)}([function(t,e,r){"use strict";function n(t){t.component("cdr-row",i.a)}Object.defineProperty(e,"__esModule",{value:!0});var i=r(1);r.d(e,"CdrRow",function(){return i.a}),"undefined"!=typeof window&&window.Vue&&window.Vue.use(n),e.default=n},function(t,e,r){"use strict";var n=r(3),i=r(4),o=r(2)(n.a,i.a,!1,null,null,null);e.a=o.exports},function(t,e){t.exports=function(t,e,r,n,i,o){var s,a=t=t||{},d=typeof t.default;"object"!==d&&"function"!==d||(s=t,a=t.default);var c="function"==typeof a?a.options:a;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId=i);var l;if(o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):n&&(l=n),l){var u=c.functional,f=u?c.render:c.beforeCreate;u?(c._injectStyles=l,c.render=function(t,e){return l.call(e),f(t,e)}):c.beforeCreate=f?[].concat(f,l):[l]}return{esModule:s,exports:a,options:c}}},function(t,e,r){"use strict";e.a={name:"cdr-row",props:{cols:{type:[String,Number],validator:function(t){var e=t.toString();return["1","2","3","4","5","6","7","8","9","10","11","12","auto"].indexOf(e)>=0||!1}},colsSm:{type:[String,Number],validator:function(t){var e=t.toString();return["1","2","3","4","5","6","7","8","9","10","11","12","auto"].indexOf(e)>=0||!1}},colsMd:{type:[String,Number],validator:function(t){var e=t.toString();return["1","2","3","4","5","6","7","8","9","10","11","12","auto"].indexOf(e)>=0||!1}},colsLg:{type:[String,Number],validator:function(t){var e=t.toString();return["1","2","3","4","5","6","7","8","9","10","11","12","auto"].indexOf(e)>=0||!1}},justify:{type:String,validator:function(t){return["left","center","right","around","between"].indexOf(t)>=0||!1}},justifySm:{type:String,validator:function(t){return["left","center","right","around","between"].indexOf(t)>=0||!1}},justifyMd:{type:String,validator:function(t){return["left","center","right","around","between"].indexOf(t)>=0||!1}},justifyLg:{type:String,validator:function(t){return["left","center","right","around","between"].indexOf(t)>=0||!1}},align:{type:String,validator:function(t){return["top","middle","bottom","stretch"].indexOf(t)>=0||!1}},alignSm:{type:String,validator:function(t){return["top","middle","bottom","stretch"].indexOf(t)>=0||!1}},alignMd:{type:String,validator:function(t){return["top","middle","bottom","stretch"].indexOf(t)>=0||!1}},alignLg:{type:String,validator:function(t){return["top","middle","bottom","stretch"].indexOf(t)>=0||!1}},gutter:{type:String,validator:function(t){return["none","xxs"].indexOf(t)>=0||!1}},gutterSm:{type:String,validator:function(t){return["none","xxs"].indexOf(t)>=0||!1}},gutterMd:{type:String,validator:function(t){return["none","xxs"].indexOf(t)>=0||!1}},gutterLg:{type:String,validator:function(t){return["none","xxs"].indexOf(t)>=0||!1}},vertical:{type:Boolean,default:!1},verticalSm:{type:Boolean,default:!1},verticalMd:{type:Boolean,default:!1},verticalLg:{type:Boolean,default:!1},wrap:{type:Boolean,default:!1},wrapSm:{type:Boolean,default:!1},wrapMd:{type:Boolean,default:!1},wrapLg:{type:Boolean,default:!1},nowrap:{type:Boolean,default:!1},nowrapSm:{type:Boolean,default:!1},nowrapMd:{type:Boolean,default:!1},nowrapLg:{type:Boolean,default:!1},type:{type:String,default:"normal",validator:function(t){return["normal","list"].indexOf(t)>=0||!1}}},provide:function(){return{rowType:this.type}},computed:{rowClasses:function(){var t={};return t["cdr-row_row"+this.cols]=this.cols,t["cdr-row_row"+this.colsSm+"@sm"]=this.colsSm,t["cdr-row_row"+this.colsMd+"@md"]=this.colsMd,t["cdr-row_row"+this.colsLg+"@lg"]=this.colsLg,t["cdr-row--"+this.justify]=this.justify,t["cdr-row--"+this.justifySm+"@sm"]=this.justifySm,t["cdr-row--"+this.justifyMd+"@md"]=this.justifyMd,t["cdr-row--"+this.justifyLg+"@lg"]=this.justifyLg,t["cdr-row--"+this.align]=this.align,t["cdr-row--"+this.alignSm+"@sm"]=this.alignSm,t["cdr-row--"+this.alignMd+"@md"]=this.alignMd,t["cdr-row--"+this.alignLg+"@lg"]=this.alignLg,t["cdr-row--column"]=this.vertical,t["cdr-row--column@sm"]=this.verticalSm,t["cdr-row--column@md"]=this.verticalMd,t["cdr-row--column@lg"]=this.verticalLg,t["cdr-row--gutter-"+this.gutter]=this.gutter,t["cdr-row--gutter-"+this.gutterSm+"@sm"]=this.gutterSm,t["cdr-row--gutter-"+this.gutterMd+"@md"]=this.gutterMd,t["cdr-row--gutter-"+this.gutterLg+"@lg"]=this.gutterLg,t["cdr-row--wrap@sm"]=this.wrapSm,t["cdr-row--wrap@md"]=this.wrapMd,t["cdr-row--wrap@lg"]=this.wrapLg,t["cdr-row--noWrap"]=this.nowrap,t["cdr-row--noWrap@sm"]=this.nowrapSm,t["cdr-row--noWrap@md"]=this.nowrapMd,t["cdr-row--noWrap@lg"]=this.nowrapLg,t}}}},function(t,e,r){"use strict";e.a={render:function(){var t=this.$createElement,e=this._self._c||t;return"normal"===this.type?e("div",{staticClass:"cdr-row",class:this.rowClasses},[this._t("default")],2):"list"===this.type?e("ul",{staticClass:"cdr-row",class:this.rowClasses},[this._t("default")],2):this._e()},staticRenderFns:[]}}])})},function(t,e,r){"use strict";var n={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isRow||t.isList?!t.isRow&&t.isList?r("li",{staticClass:"cdr-col",class:t.columnClasses},[r("div",{staticClass:"cdr-col__content"},[t._t("default")],2)]):t.isRow&&t.isList?r("li",{staticClass:"cdr-row cdr-col",class:t.columnClasses},[r("row",t._b({staticClass:"cdr-col"},"row",t.$attrs,!1),[t._t("default")],2)],1):r("row",t._b({staticClass:"cdr-col",class:t.columnClasses},"row",t.$attrs,!1),[t._t("default")],2):r("div",{staticClass:"cdr-col",class:t.columnClasses},[r("div",{staticClass:"cdr-col__content"},[t._t("default")],2)])},staticRenderFns:[]};e.a=n}])});