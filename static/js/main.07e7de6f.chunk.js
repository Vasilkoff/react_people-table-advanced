(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{14:function(e,t,a){},19:function(e,t,a){e.exports=a(29)},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),m=a(6),o=(a(14),a(1));function s(){return r.a.createElement("h1",null,"Home Page")}var u=a(18),i=a(12);function h(e){var t=e.person,a=Object(o.g)(),n=Object(o.h)(),c=new URLSearchParams(n.search);return r.a.createElement("button",{type:"button",onClick:function(){c.set("slug",t.slug),a.push("?".concat(c.toString()))},className:"".concat("m"===t.sex?"manColor":"womenColor")},t.name)}function d(e){var t=e.person,a=Object(o.h)(),n=new URLSearchParams(a.search);return r.a.createElement("tr",{className:"Person ".concat(t.slug===n.get("slug")?"highlightPerson":"")},r.a.createElement(h,{person:t}),r.a.createElement("td",null,t.sex),r.a.createElement("td",null,t.born),r.a.createElement("td",null,t.died),r.a.createElement("td",null," ",t.motherObj?r.a.createElement(h,{person:t.motherObj}):t.motherName," "),r.a.createElement("td",null," ",t.fatherObj?r.a.createElement(h,{person:t.fatherObj}):t.fatherName," "))}function p(e){var t=e.people,a=e.onSortBy,n=Object(o.h)(),c=new URLSearchParams(n.search),l=c.get("sortBy"),m=c.get("sortOrder");return r.a.createElement("table",{className:"PeopleTable"},r.a.createElement("thead",{"aria-hidden":!0},r.a.createElement("th",{onClick:function(){return a("name")},className:"list-item ".concat("desc"===m&&"name"===l?"descImg":"ascImg"),"data-name":"name"},"name"===l?r.a.createElement("span",null,"name*"):"name"),r.a.createElement("th",{onClick:function(){return a("sex")},className:"list-item ".concat("desc"===m&&"sex"===l?"descImg":"ascImg"),"data-name":"sex"},"sex"===l?r.a.createElement("span",null,"sex*"):"sex"),r.a.createElement("th",{onClick:function(){return a("born")},className:"list-item ".concat("desc"===m&&"born"===l?"descImg":"ascImg"),"data-name":"born"},"born"===l?r.a.createElement("span",null,"born*"):"born"),r.a.createElement("th",{onClick:function(){return a("died")},className:"list-item ".concat("desc"===m&&"died"===l?"descImg":"ascImg"),"data-name":"died"},"died"===l?r.a.createElement("span",null,"died*"):"died"),r.a.createElement("th",{onClick:function(){return a("motherName")},className:"list-item ".concat("desc"===m&&"motherName"===l?"descImg":"ascImg"),"data-name":"motherName"},"motherName"),r.a.createElement("th",{onClick:function(){return a("motherName")},className:"list-item ".concat("desc"===m&&"fatherName"===l?"descImg":"ascImg"),"data-name":"fatherName"},"fatherName")),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement(d,{person:e})}))))}function E(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(o.g)(),m=Object(o.h)(),s=new URLSearchParams(m.search);Object(n.useEffect)((function(){fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then((function(e){return e.map((function(t){return Object(i.a)(Object(i.a)({},t),{},{motherObj:e.find((function(e){return e.name===t.motherName})),fatherObj:e.find((function(e){return e.name===t.fatherName}))})}))})).then(c)}),[]);var h=s.get("query")||"",d=s.get("sortBy")||"",E=[];E=h?a.filter((function(e){return e.name.includes(h)||(null!==e.motherName?e.motherName.includes(h):"")||(null!==e.fatherName?e.fatherName.includes(h):"")})):a;var f=s.get("sortOrder");return["name","sex","born","died","motherName","fatherName"].includes(d)&&(E=E.sort((function(e,t){return e[d]>t[d]?1:e[d]<t[d]?-1:0}))),"desc"===f&&E.reverse(),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null," People Page"),r.a.createElement("input",{type:"text",value:h,onChange:function(e){return function(e){e.target.value?s.set("query",e.target.value):s.delete("query"),l.push("?".concat(s.toString()))}(e)}}),r.a.createElement(p,{people:E,onSortBy:function(e){e!==d&&(s.set("sortBy",e),s.set("sortOrder","asc")),d===e&&("desc"===f?s.set("sortOrder","asc"):s.set("sortOrder","desc")),l.push("?".concat(s.toString()))}}))}function f(){return r.a.createElement("h1",null,"Not Found Page")}var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"header"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/"},"Home page")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/people"},"PeoplePage")))),r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/",exact:!0},r.a.createElement(s,null)),r.a.createElement(o.b,{path:"/people",exact:!0},r.a.createElement(E,null)),r.a.createElement(o.a,{path:"home",to:"/"}),r.a.createElement(f,null)))};l.a.render(r.a.createElement(m.a,null,r.a.createElement(b,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.07e7de6f.chunk.js.map