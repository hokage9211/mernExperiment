(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(16),i=n.n(a),o=(n(22),n(17)),r=n(6),s=n(4),d=n.n(s),u=n(0),l=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),s=Object(r.a)(i,2),l=s[0],p=s[1],h=Object(c.useState)([]),j=Object(r.a)(h,2),m=j[0],b=j[1];return Object(c.useEffect)((function(){console.log("hello"),d.a.get("https://mernexperiment.herokuapp.com/read").then((function(e){console.log(e.data.data),b(e.data.data)})).catch((function(e){console.log("error cath"),console.log(e)}))}),[]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("div",{className:"inputs",children:[Object(u.jsx)("input",{type:"text",placeholder:"Friend name",onChange:function(e){a(e.target.value)}}),Object(u.jsx)("input",{type:"number",placeholder:"Friend age",onChange:function(e){p(e.target.value)}}),Object(u.jsx)("button",{onClick:function(){d.a.post("https://mernexperiment.herokuapp.com/addfriend",{name:n,age:l}).then((function(e){b([].concat(Object(o.a)(m),[{name:n,age:l}]))})).catch((function(e){console.log(e)}))},children:" Add Friend"})]}),Object(u.jsx)("div",{className:"listOfFriends",children:m.map((function(e){return Object(u.jsxs)("div",{className:"friendContainer",children:[Object(u.jsxs)("div",{className:"friend",children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("h3",{children:e.age})]}),Object(u.jsx)("button",{onClick:function(){!function(e){var t=prompt("enter new age");d.a.put("https://mernexperiment.herokuapp.com/update",{age:t,id:e}).then((function(){b(m.map((function(n){return n._id==e?{_id:e,name:n.name,age:t}:n})))}))}(e._id)},children:"Update"}),Object(u.jsx)("button",{onClick:function(){var t;t=e._id,d.a.delete("https://mernexperiment.herokuapp.com/delete/".concat(t)).then((function(){b(m.filter((function(e){return e._id!=t})))}))},children:"delete"})]})}))})]})};i.a.render(Object(u.jsx)(l,{}),document.querySelector("#root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.bf6a7ff5.chunk.js.map