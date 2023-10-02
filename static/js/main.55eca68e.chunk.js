(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(22),a=n(6),r=(n(31),n(32),n(33),n(2)),s=n(3),i=function(){return Object(s.jsx)("h1",{className:"title",children:"Home Page"})},j=function(){return Object(s.jsx)("h1",{className:"title",children:"Page not found"})},o=n(4),l=n(0),b=(n(35),function(){return Object(s.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(s.jsx)("div",{className:"Loader__content"})})});function h(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var d=n(10),u=n.n(d),O=["Name","Sex","Born","Died","Mother","Father"],m=function(e){var t=e.person;return Object(s.jsx)(a.b,{to:"".concat(t.slug),className:u()({"has-text-danger":"f"===t.sex}),children:t.name})},x=function(e){var t=e.person,n=t.sex,c=t.born,a=t.died,i=t.mother,j=t.motherName,o=t.father,l=t.fatherName,b=Object(r.q)().slug,h=void 0===b?"":b;return Object(s.jsxs)("tr",{"data-cy":"person",className:u()({"has-background-warning":t.slug===h}),children:[Object(s.jsx)("td",{children:Object(s.jsx)(m,{person:t})}),Object(s.jsx)("td",{children:n}),Object(s.jsx)("td",{children:c}),Object(s.jsx)("td",{children:a}),Object(s.jsx)("td",{children:i?Object(s.jsx)(m,{person:i}):j}),Object(s.jsx)("td",{children:o?Object(s.jsx)(m,{person:o}):l})]})},p=function(e){var t=e.people;return Object(s.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(s.jsx)("thead",{children:Object(s.jsx)("tr",{children:O.map((function(e){return Object(s.jsx)("th",{children:e},e)}))})}),Object(s.jsx)("tbody",{children:t.map((function(e){return Object(s.jsx)(x,{person:e},e.slug)}))})]})},f=function(){var e=Object(l.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(l.useState)(!1),r=Object(o.a)(a,2),i=r[0],j=r[1],d=Object(l.useState)(!1),u=Object(o.a)(d,2),O=u[0],m=u[1];Object(l.useEffect)((function(){j(!0),h().then((function(e){c(function(e){return e.map((function(t){var n=t;return n.motherName=t.motherName||"-",n.fatherName=t.fatherName||"-",n.mother=e.find((function(e){return e.name===t.motherName})),n.father=e.find((function(e){return e.name===t.fatherName})),n}))}(e))})).catch((function(){return m(!0)})).finally((function(){return j(!1)}))}),[]);var x=O&&!i,f=!n.length&&!i&&!O,v=!!n.length&&!O;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{className:"title",children:"People Page"}),Object(s.jsx)("div",{className:"block",children:Object(s.jsxs)("div",{className:"box table-container",children:[i&&Object(s.jsx)(b,{}),x&&Object(s.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),f&&Object(s.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),v&&Object(s.jsx)(p,{people:n})]})})]})},v=function(e){var t=e.isActive;return u()("navbar-item",{"has-background-grey-lighter":t})},N=function(){return Object(s.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"navbar-brand",children:[Object(s.jsx)(a.c,{to:"/",className:v,children:"Home"}),Object(s.jsx)(a.c,{to:"/people",className:v,children:"People"})]})})})},g=function(){return Object(s.jsxs)("div",{"data-cy":"app",children:[Object(s.jsx)(N,{}),Object(s.jsx)("main",{className:"section",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)(r.d,{children:[Object(s.jsx)(r.b,{path:"/",element:Object(s.jsx)(i,{})}),Object(s.jsx)(r.b,{path:"/home",element:Object(s.jsx)(r.a,{to:"/",replace:!0})}),Object(s.jsx)(r.b,{path:"people",element:Object(s.jsx)(f,{}),children:Object(s.jsx)(r.b,{path:":slug?",element:Object(s.jsx)(f,{})})}),Object(s.jsx)(r.b,{path:"*",element:Object(s.jsx)(j,{})})]})})})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(s.jsx)(a.a,{children:Object(s.jsx)(g,{})}))}},[[36,1,2]]]);
//# sourceMappingURL=main.55eca68e.chunk.js.map