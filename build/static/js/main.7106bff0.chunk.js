(this["webpackJsonpcreate-react-app"]=this["webpackJsonpcreate-react-app"]||[]).push([[0],{23:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var r=n(3),a=n.n(r),u=n(18),c=n.n(u),s=(n(23),n(4)),o=n(5),i=n(2),l=n.n(i),b=n(9),p=n(0),h=function(t){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("button",{class:"govuk-button lbh-button","data-module":"govuk-button",onClick:j,children:"Get Jigsaw Data"}),Object(p.jsx)("button",{class:"govuk-button lbh-button",style:{marginLeft:"15px"},"data-module":"govuk-button",onClick:function(){t.setAuth()},children:"Authenticate Again"})]})},j=function(){var t=Object(s.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=localStorage.getItem("jigsawToken"),t.abrupt("return",g("https://customers.housingjigsaw.co.uk/api/Customer/580739/Notes/",{Authorization:"Bearer ".concat(e)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(){var t=Object(s.a)(l.a.mark((function t(e,n){var r,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={uri:e},n&&(r.headers=n),r.resolveWithFullResponse=!0,t.next=5,b.axios.get(r);case 5:return a=t.sent,t.abrupt("return",JSON.parse(a.body));case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),f=n(9),d=function(){var t=Object(s.a)(l.a.mark((function t(e,n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null,null,!(null>new Date-3600)){t.next=6;break}localStorage.getItem("bearerToken"),t.next=11;break;case 6:return localStorage.clear(),t.next=9,v();case 9:return t.sent,t.abrupt("return",null);case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),v=function(){var t=Object(s.a)(l.a.mark((function t(){var e,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get("https://live.housingjigsaw.co.uk/auth/login/",{headers:{mode:"no-cors"}});case 2:return e=t.sent,n=e.headers["set-cookie"].map((function(t){return t.split(";")[0]})),"",t.abrupt("return",{cookies:n,token:""});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=Object(r.useState)(""),e=Object(o.a)(t,2),n=e[0],a=e[1],u=Object(r.useState)(""),c=Object(o.a)(u,2),i=c[0],b=c[1],j=Object(r.useState)(!0),g=Object(o.a)(j,2),f=g[0],v=g[1],x=Object(r.useState)(!1),m=Object(o.a)(x,2),k=m[0],O=m[1],w=function(){var t=Object(s.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(n,i);case 2:(e=t.sent)?(localStorage.setItem("jigsawToken",e),v(!1)):(console.log("Error logging in"),O(!0));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return f?Object(p.jsxs)("div",{class:"govuk-form-group lbh-form-group",children:[Object(p.jsx)("label",{class:"govuk-label lbh-label",for:"input-example",children:"Jigsaw Username"}),Object(p.jsx)("input",{class:"govuk-input lbh-input",id:"input-example",name:"test-name",type:"text",value:n,onChange:function(t){return a(t.target.value)}}),Object(p.jsx)("label",{class:"govuk-label lbh-label",for:"input-example",children:"Jigsaw Password"}),Object(p.jsx)("input",{class:"govuk-input lbh-input",id:"input-example",name:"test-name",type:"text",value:i,onChange:function(t){return b(t.target.value)}}),k&&Object(p.jsx)("span",{class:"govuk-error-message lbh-error-message",children:"Error validating credentials"}),Object(p.jsx)("button",{class:"govuk-button lbh-button","data-module":"govuk-button",onClick:w,children:" Authenticate with Jigsaw"})]}):Object(p.jsx)("div",{children:Object(p.jsx)(h,{setAuth:function(){v(!f)}})})},m=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Jigsaw Auth Demo"}),Object(p.jsx)(x,{})]})};c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(m,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.7106bff0.chunk.js.map