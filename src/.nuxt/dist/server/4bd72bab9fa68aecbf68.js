exports.ids=[1],exports.modules={181:function(t,e,n){var content=n(199);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("3b7b054c",content,!0,t)}},198:function(t,e,n){"use strict";n.r(e);var r=n(181),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},199:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"h1[data-v-33c9850d]{padding:1rem 0}.row[data-v-33c9850d]{margin:1rem 0}",""])},223:function(t,e,n){"use strict";n.r(e);var r={async asyncData({$axios:t,params:e}){let{data:data}=await t.get(`https://blog.vadxq.com/api/admin/one/${e.id}`);if(data.status)return{item:data.msg}},mmiddleware:["authenticated"],data:()=>({item:{}}),methods:{async getItem(){(await $axios.get(`https://blog.vadxq.com/api/admin/one/${params.id}`)).data.status&&(this.item=this.data.msg)}},created(){}},o=n(9),c=n(17),d=n.n(c),m=n(43),v=n(159),_=n(46);var component=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("v-container",[e("h1",[this._v(this._s(this.item.title))]),this._v(" "),e("v-divider"),this._v(" "),e("v-layout",{attrs:{row:""}},[e("div",{domProps:{innerHTML:this._s(this.item.content)}})])],1)],1)},[],!1,function(t){var e=n(198);e.__inject__&&e.__inject__(t)},"33c9850d","6286c524");e.default=component.exports;d()(component,{VContainer:m.a,VDivider:v.a,VLayout:_.a})}};
//# sourceMappingURL=4bd72bab9fa68aecbf68.js.map