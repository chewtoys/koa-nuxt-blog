(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{326:function(t,e,n){var content=n(365);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("87b32c10",content,!0,{sourceMap:!1})},364:function(t,e,n){"use strict";var r=n(326);n.n(r).a},365:function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"h1[data-v-501d6114]{padding:1rem 0}.row[data-v-501d6114]{margin:1rem 0}",""])},388:function(t,e,n){"use strict";n.r(e);n(29);var r=n(6),o={asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,o,data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,r=e.params,t.next=3,n.get("http://blog.vadxq.com/api/view/one/".concat(r.id));case 3:if(o=t.sent,!(data=o.data).status){t.next=7;break}return t.abrupt("return",{item:data.msg});case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),head:function(){return{title:this.item.title+"-vadxq-清竹茶馆",meta:[{hid:"description",name:"description",content:"".concat(this.item.description,"-vadxq-清竹茶馆")}]}},data:function(){return{item:{}}},created:function(){}},c=(n(364),n(26)),d=n(59),v=n.n(d),m=n(104),f=n(316),l=n(161),h=n(107),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-container",[n("h1",[t._v(t._s(t.item.title))]),t._v(" "),n("v-divider"),t._v(" "),n("v-img",{attrs:{"aspect-ratio":"1.5",src:t.item.coverimg}}),t._v(" "),n("v-layout",{attrs:{row:""}},[n("div",{domProps:{innerHTML:t._s(t.item.content)}})])],1)],1)},[],!1,null,"501d6114",null);e.default=component.exports;v()(component,{VContainer:m.a,VDivider:f.a,VImg:l.a,VLayout:h.a})}}]);