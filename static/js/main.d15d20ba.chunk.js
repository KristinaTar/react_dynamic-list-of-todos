(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(6),n=c.n(s),o=c(7),a=c(2),l=c(1),i=(c(12),c(13),c(14),"https://mate.academy/students-api"),r=c(0),d=function(e){var t=e.todos,c=e.randomize,s=e.setSelectedUserId,n=Object(l.useState)(""),o=Object(a.a)(n,2),i=o[0],d=o[1],u=Object(l.useState)("all"),j=Object(a.a)(u,2),b=j[0],h=j[1],O=t.filter((function(e){return e.title.toLowerCase().includes(i.toLowerCase())&&("all"===b||"active"===b&&!1===e.completed||"completed"===b&&!0===e.completed)}));return Object(r.jsxs)("div",{className:"TodoList",children:[Object(r.jsx)("h2",{children:"Todos:"}),Object(r.jsxs)("div",{className:"TodoList__list-container",children:[Object(r.jsx)("input",{className:"TodoList__list-searchBar",type:"text",value:i,onChange:function(e){d(e.target.value)}}),Object(r.jsxs)("div",{className:"TodoList__list-select__container",children:[Object(r.jsx)("label",{htmlFor:"select_todo",children:"Choose a todo:"}),Object(r.jsxs)("select",{className:"TodoList__list-select",onChange:function(e){h(e.target.value)},children:[Object(r.jsx)("option",{value:"all",children:"--Please choose an option--"}),Object(r.jsx)("option",{value:"all",children:"all"}),Object(r.jsx)("option",{value:"active",children:"active"}),Object(r.jsx)("option",{value:"completed",children:"completed"})]})]}),Object(r.jsx)("button",{className:"TodoList__list__randomize",type:"button",onClick:function(){c()},children:"Randomize"}),Object(r.jsx)("ul",{className:"TodoList__list",children:0===O.length?"No todos":O.map((function(e){return Object(r.jsxs)("li",{className:"TodoList__item TodoList__item--unchecked",children:[Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",readOnly:!0}),Object(r.jsx)("p",{children:e.title})]}),Object(r.jsxs)("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",onClick:function(){s(e.userId)},children:["User\xa0#",e.userId]})]})}))})]})]})},u=(c(16),function(e){var t=e.userId,c=e.clearUser,s=Object(l.useState)(null),n=Object(a.a)(s,2),o=n[0],d=n[1];return Object(l.useEffect)((function(){(function(e){return fetch("".concat(i,"/users/").concat(e)).then((function(e){return e.json()}))})(t).then((function(e){d(e)}))}),[t]),null!==o?Object(r.jsxs)("div",{className:"CurrentUser",children:[Object(r.jsx)("h2",{className:"CurrentUser__title",children:Object(r.jsxs)("span",{children:["Selected user:",t]})}),Object(r.jsx)("h3",{className:"CurrentUser__name",children:o.name}),Object(r.jsx)("p",{className:"CurrentUser__email",children:o.email}),Object(r.jsx)("p",{className:"CurrentUser__phone",children:o.phone}),Object(r.jsx)("button",{type:"button",className:"CurrentUser__clear",onClick:c,children:"Clear"})]}):Object(r.jsx)("b",{children:"User not found"})}),j=function(){var e=Object(l.useState)(0),t=Object(a.a)(e,2),c=t[0],s=t[1],n=Object(l.useState)([]),j=Object(a.a)(n,2),b=j[0],h=j[1];Object(l.useEffect)((function(){fetch("".concat(i,"/todos")).then((function(e){return e.json()})).then((function(e){return h(e)}))}),[]);var O=Object(l.useCallback)((function(){s(0)}),[]),m=Object(l.useCallback)((function(){var e=b.sort((function(){return Math.random()>.5?1:-1}));h(Object(o.a)(e))}),[b]);return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("div",{className:"App__sidebar",children:Object(r.jsx)(d,{todos:b,randomize:m,setSelectedUserId:s})}),Object(r.jsx)("div",{className:"App__content",children:Object(r.jsx)("div",{className:"App__content-container",children:c?Object(r.jsx)(u,{userId:c,clearUser:O}):"No user selected"})})]})};n.a.render(Object(r.jsx)(j,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.d15d20ba.chunk.js.map