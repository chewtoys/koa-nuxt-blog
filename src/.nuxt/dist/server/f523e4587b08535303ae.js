exports.ids=[4],exports.modules={162:function(t,e,n){"use strict";var r=n(1);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?"width":"height";return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=o({transition:t.style.transition,visibility:t.style.visibility,overflow:t.style.overflow},e,t.style[e])},enter:function(n){var o=n._initialStyle;n.style.setProperty("transition","none","important"),n.style.visibility="hidden";var l=n["offset"+Object(r.n)(e)]+"px";n.style.visibility=o.visibility,n.style.overflow="hidden",n.style[e]=0,n.offsetHeight,n.style.transition=o.transition,t&&n._parent&&n._parent.classList.add(t),requestAnimationFrame(function(){n.style[e]=l})},afterEnter:l,enterCancelled:l,leave:function(t){t._initialStyle=o({overflow:t.style.overflow},e,t.style[e]),t.style.overflow="hidden",t.style[e]=t["offset"+Object(r.n)(e)]+"px",t.offsetHeight,requestAnimationFrame(function(){return t.style[e]=0})},afterLeave:n,leaveCancelled:n};function n(e){t&&e._parent&&e._parent.classList.remove(t),l(e)}function l(t){t.style.overflow=t._initialStyle.overflow,t.style[e]=t._initialStyle[e],delete t._initialStyle}};n.d(e,"b",function(){return c}),n.d(e,"c",function(){return v}),n.d(e,"a",function(){return d});Object(r.d)("bottom-sheet-transition"),Object(r.d)("carousel-transition"),Object(r.d)("carousel-reverse-transition"),Object(r.d)("tab-transition"),Object(r.d)("tab-reverse-transition"),Object(r.d)("menu-transition"),Object(r.d)("fab-transition","center center","out-in"),Object(r.d)("dialog-transition"),Object(r.d)("dialog-bottom-transition");var c=Object(r.d)("fade-transition"),v=(Object(r.d)("scale-transition"),Object(r.d)("scroll-x-transition"),Object(r.d)("scroll-x-reverse-transition"),Object(r.d)("scroll-y-transition"),Object(r.d)("scroll-y-reverse-transition"),Object(r.d)("slide-x-transition")),d=(Object(r.d)("slide-x-reverse-transition"),Object(r.d)("slide-y-transition"),Object(r.d)("slide-y-reverse-transition"),Object(r.b)("expand-transition",l()));Object(r.b)("expand-x-transition",l("",!0)),Object(r.b)("row-expand-transition",l("datatable__expand-col--expanded"))},163:function(t,e,n){"use strict";var r=n(0),o=n.n(r);e.a=o.a.extend().extend({name:"bootable",props:{lazy:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||!this.lazy||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},methods:{showLazyContent:function(content){return this.hasContent?content:void 0}}})},183:function(t,e,n){var content=n(205);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("b645899e",content,!0,t)}},184:function(t,e,n){var content=n(207);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("aead7116",content,!0,t)}},185:function(t,e,n){var content=n(213);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("a7f637d2",content,!0,t)}},187:function(t,e,n){"use strict";var r=n(0),o=n.n(r).a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var n=this;this.clearDelay();var r=parseInt(this[t+"Delay"],10);this[t+"Timeout"]=setTimeout(e||function(){n.isActive={open:!0,close:!1}[t]},r)}}}),l=n(51),c=n(7),v=n(4);e.a=Object(c.a)(o,l.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(v.c)("v-hover is missing a default scopedSlot or bound value",this),null;var element=void 0;return this.$scopedSlots.default?element=this.$scopedSlots.default({hover:this.isActive}):this.$slots.default&&1===this.$slots.default.length&&(element=this.$slots.default[0]),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(v.c)("v-hover should only contain a single element",this),element)}})},202:function(t,e,n){var content=n(203);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),n(3).default("72a56bea",content,!0)},203:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".application--is-rtl .v-carousel__prev{left:auto;right:5px}.application--is-rtl .v-carousel__next{left:5px;right:auto}.v-carousel{width:100%;position:relative;overflow:hidden;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-carousel__next,.v-carousel__prev{position:absolute;top:50%;z-index:1;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.v-carousel__next .v-btn,.v-carousel__prev .v-btn{margin:0;height:auto;width:auto}.v-carousel__next .v-btn i,.v-carousel__prev .v-btn i{font-size:48px}.v-carousel__next .v-btn:hover,.v-carousel__prev .v-btn:hover{background:none}.v-carousel__prev{left:5px}.v-carousel__next{right:5px}.v-carousel__controls{background:rgba(0,0,0,.5);align-items:center;bottom:0;display:flex;justify-content:center;left:0;position:absolute;height:50px;list-style-type:none;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px!important}.v-carousel__controls__item .v-icon{opacity:.5;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}",""])},204:function(t,e,n){"use strict";n.r(e);var r=n(183),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,function(){return r[t]})}(l);e.default=o.a},205:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".blog-title[data-v-0f8fb102]{line-height:28px!important;letter-spacing:normal!important;font-family:Roboto,sans-serif!important}.post-card[data-v-0f8fb102]{justify-content:center;margin:20px 0}",""])},206:function(t,e,n){"use strict";n.r(e);var r=n(184),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,function(){return r[t]})}(l);e.default=o.a},207:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".avatar-con[data-v-792b18ee]{border:1px solid grey;border-radius:1.5rem;margin:7vw 0 0}.avatar-img[data-v-792b18ee]{margin-top:-25%}.avatar-img img[data-v-792b18ee]{border-radius:50%;width:50%;display:inline-flex;max-width:120px}.avatar-detail h1[data-v-792b18ee]{margin:15px auto}",""])},208:function(t,e,n){var content=n(209);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),n(3).default("3f5c6e1a",content,!0)},209:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,'.theme--light.v-list{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-list .v-list--disabled{color:rgba(0,0,0,.38)}.theme--light.v-list .v-list__tile__sub-title{color:rgba(0,0,0,.54)}.theme--light.v-list .v-list__tile__mask{color:rgba(0,0,0,.38);background:#eee}.theme--light.v-list .v-list__group__header:hover,.theme--light.v-list .v-list__tile--highlighted,.theme--light.v-list .v-list__tile--link:hover{background:rgba(0,0,0,.04)}.theme--light.v-list .v-list__group--active:after,.theme--light.v-list .v-list__group--active:before{background:rgba(0,0,0,.12)}.theme--light.v-list .v-list__group--disabled .v-list__group__header__prepend-icon .v-icon,.theme--light.v-list .v-list__group--disabled .v-list__tile{color:rgba(0,0,0,.38)!important}.theme--dark.v-list{background:#424242;color:#fff}.theme--dark.v-list .v-list--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-list .v-list__tile__sub-title{color:hsla(0,0%,100%,.7)}.theme--dark.v-list .v-list__tile__mask{color:hsla(0,0%,100%,.5);background:#494949}.theme--dark.v-list .v-list__group__header:hover,.theme--dark.v-list .v-list__tile--highlighted,.theme--dark.v-list .v-list__tile--link:hover{background:hsla(0,0%,100%,.08)}.theme--dark.v-list .v-list__group--active:after,.theme--dark.v-list .v-list__group--active:before{background:hsla(0,0%,100%,.12)}.theme--dark.v-list .v-list__group--disabled .v-list__group__header__prepend-icon .v-icon,.theme--dark.v-list .v-list__group--disabled .v-list__tile{color:hsla(0,0%,100%,.5)!important}.application--is-rtl .v-list__tile__content,.application--is-rtl .v-list__tile__title{text-align:right}.v-list{list-style-type:none;padding:8px 0;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-list>div{transition:inherit}.v-list__tile{align-items:center;color:inherit;display:flex;font-size:16px;font-weight:400;height:48px;margin:0;padding:0 16px;position:relative;text-decoration:none;transition:background .3s cubic-bezier(.25,.8,.5,1)}.v-list__tile--link{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-list__tile__action,.v-list__tile__content{height:100%}.v-list__tile__sub-title,.v-list__tile__title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-list__tile__title{height:24px;line-height:24px;position:relative;text-align:left}.v-list__tile__sub-title{font-size:14px}.v-list__tile__action,.v-list__tile__avatar{display:flex;justify-content:flex-start;min-width:56px}.v-list__tile__action{align-items:center}.v-list__tile__action .v-btn{padding:0;margin:0}.v-list__tile__action .v-btn--icon{margin:-6px}.v-list__tile__action .v-radio.v-radio{margin:0}.v-list__tile__action .v-input--selection-controls{padding:0;margin:0}.v-list__tile__action .v-input--selection-controls .v-messages{display:none}.v-list__tile__action .v-input--selection-controls .v-input__slot{margin:0}.v-list__tile__action-text{color:#9e9e9e;font-size:12px}.v-list__tile__action--stack{align-items:flex-end;justify-content:space-between;padding-top:8px;padding-bottom:8px;white-space:nowrap;flex-direction:column}.v-list__tile__content{text-align:left;flex:1 1 auto;overflow:hidden;display:flex;align-items:flex-start;justify-content:center;flex-direction:column}.v-list__tile__content~.v-list__tile__action:not(.v-list__tile__action--stack),.v-list__tile__content~.v-list__tile__avatar{justify-content:flex-end}.v-list__tile--active .v-list__tile__action:first-of-type .v-icon{color:inherit}.v-list__tile--avatar{height:56px}.v-list--dense{padding-top:4px;padding-bottom:4px}.v-list--dense .v-subheader{font-size:13px;height:40px}.v-list--dense .v-list__group .v-subheader{height:40px}.v-list--dense .v-list__tile{font-size:13px}.v-list--dense .v-list__tile--avatar{height:48px}.v-list--dense .v-list__tile:not(.v-list__tile--avatar){height:40px}.v-list--dense .v-list__tile .v-icon{font-size:22px}.v-list--dense .v-list__tile__sub-title{font-size:13px}.v-list--disabled{pointer-events:none}.v-list--two-line .v-list__tile{height:72px}.v-list--two-line.v-list--dense .v-list__tile{height:60px}.v-list--three-line .v-list__tile{height:88px}.v-list--three-line .v-list__tile__avatar{margin-top:-18px}.v-list--three-line .v-list__tile__sub-title{white-space:normal;-webkit-line-clamp:2;display:-webkit-box}.v-list--three-line.v-list--dense .v-list__tile{height:76px}.v-list>.v-list__group:before{top:0}.v-list>.v-list__group:before .v-list__tile__avatar{margin-top:-14px}.v-list__group{padding:0;position:relative;transition:inherit}.v-list__group:after,.v-list__group:before{content:"";height:1px;left:0;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-list__group--active~.v-list__group:before{display:none}.v-list__group__header{align-items:center;cursor:pointer;display:flex;list-style-type:none}.v-list__group__header>div:not(.v-list__group__header__prepend-icon):not(.v-list__group__header__append-icon){flex:1 1 auto;overflow:hidden}.v-list__group__header .v-list__group__header__append-icon,.v-list__group__header .v-list__group__header__prepend-icon{padding:0 16px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-list__group__header--sub-group{align-items:center;display:flex}.v-list__group__header--sub-group div .v-list__tile{padding-left:0}.v-list__group__header--sub-group .v-list__group__header__prepend-icon{padding:0 0 0 40px;margin-right:8px}.v-list__group__header .v-list__group__header__prepend-icon{display:flex;justify-content:flex-start;min-width:56px}.v-list__group__header--active .v-list__group__header__append-icon .v-icon{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.v-list__group__header--active .v-list__group__header__prepend-icon .v-icon{color:inherit}.v-list__group__header--active.v-list__group__header--sub-group .v-list__group__header__prepend-icon .v-icon{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.v-list__group__items{position:relative;padding:0;transition:inherit}.v-list__group__items>div{display:block}.v-list__group__items--no-action .v-list__tile{padding-left:72px}.v-list__group--disabled{pointer-events:none}.v-list--subheader{padding-top:0}',""])},210:function(t,e,n){var content=n(211);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),n(3).default("7cc5397a",content,!0)},211:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".v-avatar{align-items:center;border-radius:50%;display:inline-flex;justify-content:center;position:relative;text-align:center;vertical-align:middle}.v-avatar .v-icon,.v-avatar .v-image,.v-avatar img{border-radius:50%;display:inline-flex;height:inherit;width:inherit}.v-avatar--tile,.v-avatar--tile .v-icon,.v-avatar--tile .v-image,.v-avatar--tile img{border-radius:0}",""])},212:function(t,e,n){"use strict";n.r(e);var r=n(185),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,function(){return r[t]})}(l);e.default=o.a},213:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".post-card[data-v-38973d14]{justify-content:center;margin:20px 0}",""])},216:function(t,e,n){"use strict";n.r(e);var r={data:()=>({items:[{src:"https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/sky.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/bird.jpg"},{src:"https://cdn.vuetifyjs.com/images/carousel/planet.jpg"}]})},o=n(9),l=n(17),c=n.n(l),v=(n(202),n(16)),d=n(157),_=d.a,h=n(53),f=n(26),m=f.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},props:{activeClass:{type:String,default:"v-btn--active"}},computed:{classes:function(){return f.a.options.computed.classes.call(this)}}}),x=n(1),y=n(4),w=v.a.extend({name:"v-carousel",props:{cycle:{type:Boolean,default:!0},delimiterIcon:{type:String,default:"$vuetify.icons.delimiter"},height:{type:[Number,String],default:500},hideControls:Boolean,hideDelimiters:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$vuetify.icons.next"},prevIcon:{type:[Boolean,String],default:"$vuetify.icons.prev"}},data:function(){return{changedByDelimiters:!1,internalHeight:this.height,slideTimeout:void 0}},computed:{isDark:function(){return this.dark||!this.light}},watch:{internalValue:function(t){this.restartTimeout(),this.$listeners.input&&this.$emit("input",t)},interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},mounted:function(){this.$listeners.input&&Object(y.d)("@input","@change",this),this.startTimeout()},methods:{genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls"},[this.genItems()])},genIcon:function(t,e,n){var r=this;return this.$createElement("div",{staticClass:"v-carousel__"+t},[this.$createElement(_,{props:{icon:!0},attrs:{"aria-label":this.$vuetify.t("$vuetify.carousel."+t)},on:{click:function(){r.changedByDelimiters=!0,n()}}},[this.$createElement(h.a,{props:{size:"46px"}},e)])])},genIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;e&&"string"==typeof e&&t.push(this.genIcon("prev",e,this.prev));var n=this.$vuetify.rtl?this.prevIcon:this.nextIcon;return n&&"string"==typeof n&&t.push(this.genIcon("next",n,this.next)),t},genItems:function(){for(var t=this,e=this.items.length,n=[],i=0;i<e;i++){var r=this.$createElement(_,{class:{"v-carousel__controls__item":!0},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(h.a,{props:{size:18}},this.delimiterIcon)]);n.push(r)}return this.$createElement(m,{props:{value:this.internalValue},on:{change:function(e){t.internalValue=e}}},n)},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,(requestAnimationFrame||setTimeout)(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))},updateReverse:function(t,e){this.changedByDelimiters?this.changedByDelimiters=!1:v.a.options.methods.updateReverse.call(this,t,e)}},render:function(t){var e=[],data={staticClass:"v-window v-carousel",style:{height:Object(x.a)(this.height)},directives:[]};return this.touchless||data.directives.push({name:"touch",value:{left:this.next,right:this.prev}}),this.hideControls||e.push(this.genIcons()),this.hideDelimiters||e.push(this.genDelimiters()),t("div",data,[this.genContainer(),e])}}),j=n(163),C=n(23),k=n(25),O=n(7),$=Object(O.a)(j.a,Object(C.a)("windowGroup","v-window-item","v-window")).extend({name:"v-window-item",directives:{Touch:k.a},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{done:null,isActive:!1,wasCancelled:!1}},computed:{computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},mounted:function(){this.$el.addEventListener("transitionend",this.onTransitionEnd,!1)},beforeDestroy:function(){this.$el.removeEventListener("transitionend",this.onTransitionEnd,!1)},methods:{genDefaultSlot:function(){return this.$slots.default},onAfterEnter:function(){var t=this;this.wasCancelled?this.wasCancelled=!1:requestAnimationFrame(function(){t.windowGroup.internalHeight=void 0,t.windowGroup.isActive=!1})},onBeforeEnter:function(){this.windowGroup.isActive=!0},onLeave:function(t){this.windowGroup.internalHeight=Object(x.a)(t.clientHeight)},onEnterCancelled:function(){this.wasCancelled=!0},onEnter:function(t,e){var n=this,r=this.windowGroup.isBooted;r&&(this.done=e),requestAnimationFrame(function(){if(!n.computedTransition)return e();n.windowGroup.internalHeight=Object(x.a)(t.clientHeight),!r&&setTimeout(e,100)})},onTransitionEnd:function(t){"transform"===t.propertyName&&t.target===this.$el&&this.done&&(this.done(),this.done=null)}},render:function(t){var div=t("div",{staticClass:"v-window-item",directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.showLazyContent(this.genDefaultSlot()));return t("transition",{props:{name:this.computedTransition},on:{afterEnter:this.onAfterEnter,beforeEnter:this.onBeforeEnter,leave:this.onLeave,enter:this.onEnter,enterCancelled:this.onEnterCancelled}},[div])}}),T=n(71),A=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t},E=$.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(T.a,{staticClass:"v-carousel__item",props:A({},this.$attrs,{height:this.windowGroup.internalHeight}),on:this.$listeners},this.$slots.default)]},onBeforeEnter:function(){},onEnter:function(){},onAfterEnter:function(){},onBeforeLeave:function(){},onEnterCancelled:function(){}}}),B=n(43),component=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",[e("v-carousel",{attrs:{height:"400"}},this._l(this.items,function(t,i){return e("v-carousel-item",{key:i,attrs:{src:t.src}})}),1)],1)},[],!1,null,null,"05355715"),I=component.exports;c()(component,{VCarousel:w,VCarouselItem:E,VContainer:B.a});var S={data:()=>({}),props:["list"]},L=n(47),V=n(160),z=n(42),D=n(45),G=n(187),P=n(48),H=n(46),N=n(158);var R=Object(o.a)(S,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","grid-list-sm":""}},[n("h2",{staticClass:"headline"},[t._v("Latest Posts")]),t._v(" "),n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.list,function(e){return n("v-flex",{key:e._id,staticClass:"post-card",attrs:{"d-flex":"",xs12:"",sm6:""}},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(r){var o=r.hover;return n("v-card",{attrs:{"max-width":"350"}},[n("v-img",{staticClass:"white--text",attrs:{height:"200px",src:e.coverimg}},[o?n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{attrs:{"fill-height":""}},[n("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[n("span",[t._v(t._s(e.description))])])],1)],1):t._e()],1),t._v(" "),n("v-card-title",[n("div",[n("span",[t._v(t._s(e.title))])])]),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{flat:"",color:"grey"}},[t._v(t._s(e.createtime.slice(0,10)))]),t._v(" "),n("v-btn",{attrs:{flat:"",color:"grey"}},[t._v("阅读："+t._s(e.views))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:"",href:"/article/"+e.url,target:"_blank"}},[n("v-icon",[t._v("keyboard_arrow_right")])],1)],1)],1)}}],null,!0)})],1)}),1),t._v(" "),n("div",{staticClass:"text-xs-center"},[n("v-btn",{staticClass:"white--text",attrs:{block:"",color:"blue-grey",to:"/post"}},[t._v("更 多")])],1)],1)},[],!1,function(t){var e=n(204);e.__inject__&&e.__inject__(t)},"0f8fb102","68bb97da"),F=R.exports;c()(R,{VBtn:d.a,VCard:L.a,VCardActions:V.a,VCardTitle:z.a,VContainer:B.a,VFlex:D.a,VHover:G.a,VIcon:P.a,VImg:T.a,VLayout:H.a,VSpacer:N.a});var M=Object(o.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{staticClass:"avatar-con",attrs:{fluid:"","grid-list-sm":""}},[e("v-flex",{attrs:{"justify-center":"","text-xs-center":""}},[e("div",{staticClass:"avatar-img"},[e("img",{attrs:{src:"https://qnimg.vadxq.com/blog/2016/blogheadimg20160517.jpg",alt:"avatar"}})]),this._v(" "),e("v-layout",{staticClass:"avatar-detail",attrs:{"justify-center":"","align-center":"",row:"",wrap:""}},[e("h1",[this._v("vadxq")]),this._v(" "),e("p",[this._v("vadxq,一个还是很菜很菜的前端小学童，努力学习知识中，欢迎大家一起探讨前端知识，当然主题不仅限于这些，生活啊，后台啊等等都可以一起探讨哦~~")]),this._v(" "),e("div",[e("v-btn",{attrs:{color:"grey",nuxt:"",to:"/me",round:""}},[this._v("about me more")])],1)])],1)],1)},[],!1,function(t){var e=n(206);e.__inject__&&e.__inject__(t)},"792b18ee","49d535ce"),Y=M.exports;c()(M,{VBtn:d.a,VContainer:B.a,VFlex:D.a,VLayout:H.a});var J={data:()=>({items:[{title:"sccgithub",url:"https://github.com/sccgithub",desc:"scc,one good man",icon:"https://avatars2.githubusercontent.com/u/11674258?s=460&v=4"},{title:"lxxyx",url:"https://blog.lxxyx.cn/",desc:"lxxyx,one good man",icon:"https://avatars2.githubusercontent.com/u/13161470?s=460&v=4"},{title:"siliconx",url:"http://blog.imcoder.xyz",desc:"siliconx,one good man",icon:"https://avatars2.githubusercontent.com/u/26862350?s=460&v=4"},{title:"showzeng",url:"https://showzeng.itscoder.com",desc:"showzeng,one good man",icon:"https://avatars3.githubusercontent.com/u/15917469?s=460&v=4"},{title:"vvmint",url:"https://www.vvmint.cn/",desc:"vvmint,one good man",icon:"https://www.vvmint.cn/avatar/DestCropImage.png"},{title:"tyan-boot",url:"http://www.boot.pw",desc:"tyan-boot,one good man",icon:"https://avatars3.githubusercontent.com/u/4982027?s=460&v=4"},{title:"vibiu",url:"http://blog.vibiu.cn/",desc:"vibiu,one good man",icon:"https://qnimg.vadxq.com/blog/2017/vibiu.jpg"}]})},K=n(159),Q=(n(54),n(208),n(5)),U=n(52),W=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t},X=Object(O.a)(Object(U.b)("list"),Q.a).extend({name:"v-list",provide:function(){return{listClick:this.listClick}},props:{dense:Boolean,expand:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:function(){return{groups:[]}},computed:{classes:function(){return W({"v-list--dense":this.dense,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine},this.themeClasses)}},methods:{register:function(content){this.groups.push(content)},unregister:function(content){var t=this.groups.findIndex(function(g){return g._uid===content._uid});t>-1&&this.groups.splice(t,1)},listClick:function(t){if(!this.expand){var e=!0,n=!1,r=void 0;try{for(var o,l=this.groups[Symbol.iterator]();!(e=(o=l.next()).done);e=!0){o.value.toggle(t)}}catch(t){n=!0,r=t}finally{try{!e&&l.return&&l.return()}finally{if(n)throw r}}}}},render:function(t){return t("div",{staticClass:"v-list",class:this.classes,attrs:{role:"list"}},[this.$slots.default])}}),Z=n(8),tt=n(13),et=n(51),it=n(55),st=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};var nt=Object(O.a)(Z.a,tt.a,et.a,Q.a).extend({name:"v-list-tile",directives:{Ripple:it.a},inheritAttrs:!1,props:{activeClass:{type:String,default:"primary--text"},avatar:Boolean,inactive:Boolean,tag:String},data:function(){return{proxyClass:"v-list__tile--active"}},computed:{listClasses:function(){return this.disabled?{"v-list--disabled":!0}:void 0},classes:function(){return st({"v-list__tile":!0,"v-list__tile--link":this.isLink&&!this.inactive,"v-list__tile--avatar":this.avatar,"v-list__tile--disabled":this.disabled,"v-list__tile--active":!this.to&&this.isActive},this.themeClasses,(t={},e=this.activeClass,n=this.isActive,e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t));var t,e,n},isLink:function(){var t=this.$listeners&&(this.$listeners.click||this.$listeners["!click"]);return Boolean(this.href||this.to||t)}},render:function(t){var e=!this.inactive&&this.isLink?this.generateRouteLink(this.classes):{tag:this.tag||"div",data:{class:this.classes}},n=e.tag,data=e.data;return data.attrs=Object.assign({},data.attrs,this.$attrs),t("div",this.setTextColor(!this.disabled&&this.color,{class:this.listClasses,attrs:{disabled:this.disabled,role:"listitem"}}),[t(n,data,this.$slots.default)])}}),at=(n(210),Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t}),ot=Object(O.a)(Z.a).extend({name:"v-avatar",functional:!0,props:{color:String,size:{type:[Number,String],default:48},tile:Boolean},render:function(t,e){var data=e.data,n=e.props,r=e.children;data.staticClass=("v-avatar "+(data.staticClass||"")).trim(),n.tile&&(data.staticClass+=" v-avatar--tile");var o=Object(x.a)(n.size);return data.style=at({height:o,width:o},data.style),t("div",Z.a.options.methods.setBackgroundColor(n.color,data),r)}}),lt=n(0),ct=n.n(lt),ut=ct.a.extend({name:"v-list-tile-avatar",functional:!0,props:{color:String,size:{type:[Number,String],default:40},tile:Boolean},render:function(t,e){var data=e.data,n=e.children,r=e.props;data.staticClass=("v-list__tile__avatar "+(data.staticClass||"")).trim();var o=t(ot,{props:{color:r.color,size:r.size,tile:r.tile}},[n]);return t("div",data,[o])}}),vt=n(162),_t=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};Object(O.a)(j.a,Object(U.a)("list","v-list-group","v-list"),et.a).extend({name:"v-list-group",inject:["listClick"],props:{activeClass:{type:String,default:"primary--text"},appendIcon:{type:String,default:"$vuetify.icons.expand"},disabled:Boolean,group:String,noAction:Boolean,prependIcon:String,subGroup:Boolean},data:function(){return{groups:[]}},computed:{groupClasses:function(){return{"v-list__group--active":this.isActive,"v-list__group--disabled":this.disabled}},headerClasses:function(){return{"v-list__group__header--active":this.isActive,"v-list__group__header--sub-group":this.subGroup}},itemsClasses:function(){return{"v-list__group__items--no-action":this.noAction}}},watch:{isActive:function(t){!this.subGroup&&t&&this.listClick(this._uid)},$route:function(t){var e=this.matchRoute(t.path);this.group&&(e&&this.isActive!==e&&this.listClick(this._uid),this.isActive=e)}},mounted:function(){this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy:function(){this.list.unregister(this._uid)},methods:{click:function(t){this.disabled||(this.$emit("click",t),this.isActive=!this.isActive)},genIcon:function(t){return this.$createElement(h.a,t)},genAppendIcon:function(){var t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement("div",{staticClass:"v-list__group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genGroup:function(){return this.$createElement("div",{staticClass:"v-list__group__header",class:this.headerClasses,on:_t({},this.$listeners,{click:this.click}),ref:"item"},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems:function(){return this.$createElement("div",{staticClass:"v-list__group__items",class:this.itemsClasses,directives:[{name:"show",value:this.isActive}],ref:"group"},this.showLazyContent(this.$slots.default))},genPrependIcon:function(){var t,e,n,r=this.prependIcon?this.prependIcon:!!this.subGroup&&"$vuetify.icons.subgroup";return r||this.$slots.prependIcon?this.$createElement("div",{staticClass:"v-list__group__header__prepend-icon",class:(t={},e=this.activeClass,n=this.isActive,e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t)},[this.$slots.prependIcon||this.genIcon(r)]):null},toggle:function(t){this.isActive=this._uid===t},matchRoute:function(t){return!!this.group&&null!==t.match(this.group)}},render:function(t){return t("div",{staticClass:"v-list__group",class:this.groupClasses},[this.genGroup(),t(vt.a,[this.genItems()])])}}),ct.a.extend({name:"v-list-tile-action",functional:!0,render:function(t,e){var data=e.data,n=e.children,r=void 0===n?[]:n;return data.staticClass=data.staticClass?"v-list__tile__action "+data.staticClass:"v-list__tile__action",r.filter(function(t){return!1===t.isComment&&" "!==t.text}).length>1&&(data.staticClass+=" v-list__tile__action--stack"),t("div",data,r)}}),Object(x.c)("v-list__tile__action-text","span");var ht=Object(x.c)("v-list__tile__content","div"),pt=Object(x.c)("v-list__tile__title","div"),ft=Object(x.c)("v-list__tile__sub-title","div"),gt=Object(o.a)(J,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("h1",[t._v("Links")]),t._v(" "),n("v-divider"),t._v(" "),n("v-layout",{attrs:{row:""}},[n("v-list",{attrs:{"two-line":""}},t._l(t.items,function(e){return n("v-list-tile",{key:e._id,attrs:{avatar:"",href:e.url,fluid:""}},[n("v-list-tile-avatar",[n("img",{attrs:{src:e.icon}})]),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))]),t._v(" "),n("v-list-tile-sub-title",[t._v(t._s(e.url))])],1)],1)}),1)],1)],1)},[],!1,null,null,"45beb058"),mt=gt.exports;c()(gt,{VContainer:B.a,VDivider:K.a,VLayout:H.a,VList:X,VListTile:nt,VListTileAvatar:ut,VListTileContent:ht,VListTileSubTitle:ft,VListTileTitle:pt});var bt={components:{Carousel:I,Postlist:F,Avatar:Y,Links:mt},async asyncData({$axios:t}){let{data:data}=await t.get("https://blog.vadxq.com/api/view/list");if(data.status)return data.info.length>6?{list:data.info.slice(0,6)}:{list:data.info}},data:()=>({list:[]})};var xt=Object(o.a)(bt,function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("Carousel"),this._ssrNode(" "),e("v-container",{attrs:{fluid:""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{"d-flex":"",xs12:"",sm8:""}},[e("Postlist",{attrs:{list:this.list}})],1),this._v(" "),e("v-flex",{attrs:{xs12:"",sm4:"","child-flex":""}},[e("Avatar"),this._v(" "),e("br"),this._v(" "),e("Links")],1)],1)],1)],2)},[],!1,function(t){var e=n(212);e.__inject__&&e.__inject__(t)},"38973d14","77935349");e.default=xt.exports;c()(xt,{VContainer:B.a,VFlex:D.a,VLayout:H.a})}};
//# sourceMappingURL=f523e4587b08535303ae.js.map