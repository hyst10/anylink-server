(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51489408"],{"09c3":function(t,e,i){"use strict";i("e264")},"278e":function(t,e,i){"use strict";i("3635")},3635:function(t,e,i){},"6b64":function(t,e,i){},ac48:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("el-container",{staticStyle:{height:"100%"}},[e("el-aside",{attrs:{width:t.is_active?"200":"64"}},[e("LayoutAside",{attrs:{is_active:t.is_active,route_path:t.route_path}})],1),e("el-container",[e("el-header",[e("LayoutHeader",{attrs:{is_active:t.is_active,route_name:t.route_name},on:{"update:is_active":function(e){t.is_active=e}}})],1),e("el-main",{staticStyle:{"background-color":"#fbfbfb"}},[e("router-view",{attrs:{route_path:t.route_path,route_name:t.route_name},on:{"update:route_path":function(e){t.route_path=e},"update:route_name":function(e){t.route_name=e}}})],1),e("el-footer",[e("div",[e("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.goUrl("https://gitee.com/bjdgyc/anylink")}}},[t._v(" Powered by AnyLink ")]),t._v(" 企业级远程办公系统 AGPL-3.0 ⓒ 2020-present ")],1)])],1)],1)},s=[],n=function(){var t=this,e=t._self._c;return e("el-menu",{staticClass:"layout-menu",style:t.is_active?"width:200px":"",attrs:{collapse:!t.is_active,"default-active":t.route_path,router:"","collapse-transition":!1,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},[e("el-menu-item",{attrs:{index:"/admin/home"}},[e("i",{staticClass:"el-icon-s-home"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("首页")])]),e("el-submenu",{attrs:{index:"1"}},[e("template",{slot:"title"},[e("i",{staticClass:"el-icon-menu"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("基础信息")])]),e("el-menu-item",{attrs:{index:"/admin/set/system"}},[t._v("系统信息")]),e("el-menu-item",{attrs:{index:"/admin/set/soft"}},[t._v("软件配置")]),e("el-menu-item",{attrs:{index:"/admin/set/other"}},[t._v("其他设置")]),e("el-menu-item",{attrs:{index:"/admin/set/audit"}},[t._v("审计日志")])],2),e("el-submenu",{attrs:{index:"2"}},[e("template",{slot:"title"},[e("i",{staticClass:"el-icon-s-custom"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("用户信息")])]),e("el-menu-item",{attrs:{index:"/admin/user/list"}},[t._v("用户列表")]),e("el-menu-item",{attrs:{index:"/admin/user/policy"}},[t._v("用户策略")]),e("el-menu-item",{attrs:{index:"/admin/user/online"}},[t._v("在线用户")]),e("el-menu-item",{attrs:{index:"/admin/user/ip_map"}},[t._v("IP映射")])],2),e("el-submenu",{attrs:{index:"3"}},[e("template",{slot:"title"},[e("i",{staticClass:"el-icon-s-order"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("用户组信息")])]),e("el-menu-item",{attrs:{index:"/admin/group/list"}},[t._v("用户组列表")])],2),e("el-submenu",{attrs:{index:"4"}},[e("template",{slot:"title"},[e("i",{staticClass:"el-icon-s-order"}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("调试信息")])]),e("el-menu-item",[e("a",{attrs:{href:"/debug/pprof/",target:"_blank"}},[t._v("pprof")])]),e("el-menu-item",[e("a",{attrs:{href:"/debug/statsviz/",target:"_blank"}},[t._v("statsviz")])])],2)],1)},o=[],l={name:"LayoutAside",data(){return{}},props:["is_active","route_path"],mounted(){}},r=l,u=(i("e9e3"),i("2877")),c=Object(u["a"])(r,n,o,!1,null,"29eea0fe",null),d=c.exports,m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"layout-header"},[e("div",[e("i",{staticClass:"toggle-icon",class:t.is_active?"el-icon-s-fold":"el-icon-s-unfold",staticStyle:{"font-size":"26px"},on:{click:t.toggleClick}}),e("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{separator:"/"}},t._l(t.route_name,(function(i,a){return e("el-breadcrumb-item",{key:a},[t._v(t._s(i))])})),1)],1),e("el-dropdown",{attrs:{trigger:"click"},on:{command:t.handleCommand}},[e("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px"}}),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",{attrs:{command:"logout"}},[t._v("退出")])],1),e("span",{staticStyle:{"font-size":"12px"}},[t._v(t._s(t.admin_user))])],1)],1)},_=[],p=(i("14d9"),i("50ea")),v={name:"Layoutheader",props:["route_name"],data(){return{is_active:!0}},computed:{admin_user(){return Object(p["b"])()}},methods:{toggleClick(){this.is_active=!this.is_active,this.$emit("update:is_active",this.is_active)},handleCommand(){console.log("handleCommand"),Object(p["c"])(),this.$router.push("/login")}}},h=v,f=(i("278e"),Object(u["a"])(h,m,_,!1,null,"33f84c32",null)),b=f.exports,g={name:"Layout",components:{LayoutHeader:b,LayoutAside:d},data(){return{is_active:!0,route_path:"/index",route_name:["首页"]}},methods:{goUrl(t){window.open(t,"_blank")}},watch:{route_path:function(t){window.console.log("is_active",t)}},created(){window.console.log("layout-route",this.$route)}},x=g,y=(i("09c3"),Object(u["a"])(x,a,s,!1,null,null,null));e["default"]=y.exports},e264:function(t,e,i){},e9e3:function(t,e,i){"use strict";i("6b64")}}]);