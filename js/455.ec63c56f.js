"use strict";(self["webpackChunkweek6_homework"]=self["webpackChunkweek6_homework"]||[]).push([[455],{455:function(a,e,t){t.r(e),t.d(e,{default:function(){return w}});var n=t(252),s=t(963);const o={class:"navbar navbar-expand-lg navbar-dark bg-dark"},r={class:"container-fluid"},c=(0,n.Uk)("後台"),i=(0,n._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n._)("span",{class:"navbar-toggler-icon"})],-1),l={class:"collapse navbar-collapse",id:"navbarSupportedContent"},u={class:"navbar-nav me-auto mb-2 mb-lg-0"},d={class:"nav-item"},h=(0,n.Uk)("回到前台"),k={class:"nav-item"},p=(0,n.Uk)(" 產品列表 "),v={class:"nav-item"},g=(0,n.Uk)(" 產品優惠券 ");function b(a,e,t,b,m,_){const f=(0,n.up)("router-link"),w=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("nav",o,[(0,n._)("div",r,[(0,n.Wm)(f,{class:"navbar-brand",to:"/"},{default:(0,n.w5)((()=>[c])),_:1}),i,(0,n._)("div",l,[(0,n._)("ul",u,[(0,n._)("li",d,[(0,n.Wm)(f,{class:"nav-link",to:"/"},{default:(0,n.w5)((()=>[h])),_:1})]),(0,n._)("li",k,[(0,n.Wm)(f,{class:"nav-link",to:"/admin/products"},{default:(0,n.w5)((()=>[p])),_:1})]),(0,n._)("li",v,[(0,n.Wm)(f,{class:"nav-link",to:"/admin/coupon"},{default:(0,n.w5)((()=>[g])),_:1})])]),(0,n._)("a",{href:"#",onClick:e[0]||(e[0]=(0,s.iM)(((...a)=>_.signout&&_.signout(...a)),["prevent"]))},"登出")])])]),m.checkSuccess?((0,n.wg)(),(0,n.j4)(w,{key:0})):(0,n.kq)("",!0)],64)}var m={data(){return{checkSuccess:!1}},methods:{checkLogin(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)davidToken\s*=\s*([^;]*).*$)|^.*$/,"$1");if(a){this.$http.defaults.headers.common.Authorization=`${a}`;const e="https://vue3-course-api.hexschool.io/v2/api/user/check";this.$http.post(e,{api_token:this.token}).then((()=>{this.checkSuccess=!0})).catch((a=>{alert(a.data.message),this.$router.push("/login")}))}else alert("您尚未登入。"),this.$router.push("/login")},signout(){document.cookie="hexToken=;expires;",alert("token 已清除"),this.$router.push("/login")}},mounted(){this.checkLogin()}},_=t(744);const f=(0,_.Z)(m,[["render",b]]);var w=f}}]);
//# sourceMappingURL=455.ec63c56f.js.map