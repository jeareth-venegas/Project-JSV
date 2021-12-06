(this["webpackJsonp4-react-components"]=this["webpackJsonp4-react-components"]||[]).push([[0],{16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(6),r=n.n(s),a=(n(16),n(3)),i=n(5),d=n(0);var u=function(e){var t=Object(c.useState)([]),n=Object(a.a)(t,2),s=n[0],r=n[1],u=Object(c.useState)(!1),j=Object(a.a)(u,2),o=j[0],l=j[1];Object(c.useEffect)((function(){b()}),[o]);var b=function(){fetch("".concat("https://students.hasura.app/api/rest/","students"),{method:"GET",headers:{"x-hasura-admin-secret":"733M3Tgq5IK2ALRXFSivpX86TGJX82goni63azRwZGCtVY1qN4t8521f1LE4iKxq"}}).then((function(e){return e.json()})).then((function(e){l(!0),r(e.students)}))};return o?Object(d.jsxs)("div",{style:{flex:"1 0 auto"},children:[Object(d.jsx)("h1",{children:"Students List"}),Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"ID"}),Object(d.jsx)("th",{children:"Name"})]})}),Object(d.jsxs)("tbody",{children:[s.map((function(t){return Object(d.jsxs)("tr",{className:e.hoverable?"hoverable":"",children:[Object(d.jsx)("td",{children:Object(d.jsx)(i.b,{to:"/student/".concat(t.id),children:t.id})}),Object(d.jsx)("td",{children:t.name})]},t.id)})),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{}),Object(d.jsx)("td",{})]})]})]})]}):Object(d.jsx)("p",{children:"loading..."})};var j=function(){return Object(d.jsxs)("div",{style:{borderBottom:"1px var(--border) solid",width:"100%",position:"fixed",top:0,left:0,background:"var(--background-alt)",display:"flex",alignItems:"center",justifyContent:"flex-start",padding:"16px",maxHeight:"40px"},children:[Object(d.jsx)(i.b,{style:{display:"block",margin:"1rem"},to:"/students",children:"Students List"}),Object(d.jsx)(i.b,{style:{display:"block",margin:"1rem 0"},to:"/addStudent",children:"Add Student"})]})};var o=function(e){return Object(d.jsx)("div",{style:{paddingTop:"4rem",display:"flex",flexDirection:"column",flexGrow:1,height:"calc(100vh - 5rem)",alignItems:"stretch"},children:e.children})};var l=function(e){var t={flex:"0 0 auto",display:"flex",justifyContent:"center",background:e.color};return Object(d.jsx)("div",{style:t,children:Object(d.jsx)("p",{children:"Made with \u2764\ufe0f and \u2615\ufe0f"})})},b=n(9),h=n.n(b),O=n(10),p=n(2),x=document.querySelector("#alert-root"),f=function(e){var t=e.message,n=e.type;return e.isOpened?r.a.createPortal(Object(d.jsxs)("div",{className:"alert ".concat(n),children:[Object(d.jsx)("div",{className:"closeContent",onClick:function(e){e.target.parentElement.style.display="none"},children:"X"}),Object(d.jsx)("span",{children:t})]}),x):null},m=Object(c.createContext)(),v=function(e){var t=e.children,n=Object(c.useState)(""),s=Object(a.a)(n,2),r=s[0],i=s[1],u=Object(c.useState)(""),j=Object(a.a)(u,2),o=j[0],l=j[1],b=Object(c.useState)(!1),h=Object(a.a)(b,2),O=h[0],p=h[1],x=Object(c.useState)(5e3),f=Object(a.a)(x,2),v=f[0],g=f[1],S=Object(c.useState)("right"),y=Object(a.a)(S,2),w=y[0],C=y[1];return Object(c.useEffect)((function(){var e=setTimeout((function(){p(!1)}),v);return function(){return clearTimeout(e)}})),Object(d.jsx)(m.Provider,{value:{sendAlert:function(e){var t=e.type,n=e.message,c=e.autoClose,s=e.position;i(n),l(t),p(!0),C(s||"rigth"),g(c||5e3)},type:o,message:r,isOpened:O,position:w},children:t})},g=function(){var e=Object(c.useContext)(m);if(void 0===e)throw new Error("You must wrap your application with <AlertProvider /> in order to useAlert().");return e},S=function(){var e=Object(c.useState)(),t=Object(a.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),i=Object(a.a)(r,2),u=i[0],j=i[1],o=Object(c.useState)(!1),l=Object(a.a)(o,2),b=l[0],x=l[1],f=Object(p.f)(),m=g().sendAlert,v=function(){var e=Object(O.a)(h.a.mark((function e(t,n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.abrupt("return",fetch("".concat("https://students.hasura.app/api/rest/","student"),{method:"POST",headers:{"x-hasura-admin-secret":"733M3Tgq5IK2ALRXFSivpX86TGJX82goni63azRwZGCtVY1qN4t8521f1LE4iKxq"},body:JSON.stringify({id:t,name:n})}).then((function(e){return e.json()})).then((function(e){x(!1),null===e.insert_students_one?m({type:"warning",message:"student is repeated"}):(m({type:"success",message:"new student added"}),s(0),j(""),f("/"))})).catch((function(e){return console.log(e)})));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Add Student"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v(n,u)},children:[Object(d.jsx)("input",{required:!0,value:n,type:"number",name:"id",placeholder:"id",onChange:function(e){return s(e.target.value)}}),Object(d.jsx)("input",{required:!0,value:u,type:"text",name:"name",placeholder:"name",onChange:function(e){return j(e.target.value)}}),Object(d.jsx)("button",{disabled:b,type:"submit",value:"submit",children:b?"Loading":"Add student"})]})]})},y=n(11),w=function(){var e=Object(c.useState)({}),t=Object(a.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(!1),u=Object(a.a)(r,2),j=u[0],o=u[1],l=Object(p.g)();return Object(y.useEffect)((function(){var e;e=l.StudentId,fetch("".concat("https://students.hasura.app/api/rest/","student/").concat(e),{method:"GET",headers:{"x-hasura-admin-secret":"733M3Tgq5IK2ALRXFSivpX86TGJX82goni63azRwZGCtVY1qN4t8521f1LE4iKxq"}}).then((function(e){return e.json()})).then((function(e){o(!0),s(e.students_by_pk)}))}),[j]),j?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Student Profile"}),Object(d.jsx)(i.b,{to:"updateStudent/".concat(l.StudentId),children:"Update Student"}),Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{children:"Name:"}),Object(d.jsx)("span",{children:null===n||void 0===n?void 0:n.name}),Object(d.jsx)("h3",{children:"ID"}),Object(d.jsx)("span",{children:l.StudentId})]}):Object(d.jsx)("p",{children:"Loading..."})};var C=function(){var e=g(),t=e.type,n=e.message,c=e.isOpened;return Object(d.jsxs)(o,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(f,{isOpened:c,type:t,message:n}),Object(d.jsxs)(p.c,{children:[Object(d.jsx)(p.a,{path:"/",element:Object(d.jsx)(u,{hoverable:!0})}),Object(d.jsx)(p.a,{path:"/students",element:Object(d.jsx)(u,{hoverable:!0})}),Object(d.jsx)(p.a,{path:"/student/:StudentId",element:Object(d.jsx)(w,{})}),Object(d.jsx)(p.a,{path:"/addStudent",element:Object(d.jsx)(S,{})}),Object(d.jsx)(p.a,{path:"/updateStudent/:StudentId",element:Object(d.jsx)(S,{})})]}),Object(d.jsx)(l,{})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};r.a.render(Object(d.jsx)(i.a,{children:Object(d.jsx)(v,{children:Object(d.jsx)(C,{})})}),document.getElementById("root")),I()}},[[19,1,2]]]);
//# sourceMappingURL=main.d7efc685.chunk.js.map