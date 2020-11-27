(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{12:function(e,a,r){"use strict";r.r(a),r.d(a,"heroes",(function(){return t}));var t=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}]},47:function(e,a,r){"use strict";r.r(a);var t=r(0),c=r(1),s=r(22),n=r.n(s),i=r(10),o=(0,r(1).createContext)(),l=r(4),h="[auth] login",u="[auth] logout",d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case h:return Object(l.a)(Object(l.a)({},a.payload),{},{logged:!0});case u:return{logged:!1};default:return e}},j=r(5),b=r(2),p=function(e){var a=e.history,r=Object(c.useContext)(o).dispatch;return Object(t.jsxs)("div",{className:"container mt-5",children:[Object(t.jsx)("h1",{children:"Login"}),Object(t.jsx)("hr",{}),Object(t.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=localStorage.getItem("lastPath")||"/";r({type:h,payload:{name:"Alejandro"}}),a.replace(e)},children:"Login"})]})},m=r(12).heroes,v=function(e){var a=e.id,r=e.superhero,c=(e.publisher,e.alter_ego),s=e.first_appearance,n=e.characters;return Object(t.jsx)("div",{className:"card ms-3",style:{maxWidth:540},children:Object(t.jsxs)("div",{className:"row no-gutters",children:[Object(t.jsx)("div",{className:"col-md-4",children:Object(t.jsx)("img",{src:"/assets/heroes/".concat(a,".jpg"),className:"card-img",alt:r})}),Object(t.jsx)("div",{className:"col-md-8",children:Object(t.jsxs)("div",{className:"card-body",children:[Object(t.jsx)("h5",{className:"card-title",children:r}),Object(t.jsx)("p",{className:"card-text",children:c}),c!==n&&Object(t.jsxs)("p",{className:"card-text",children:[" ",n," "]}),Object(t.jsx)("p",{className:"card-text",children:Object(t.jsx)("small",{className:"text-muted",children:s})}),Object(t.jsx)(j.b,{to:"./hero/".concat(a),children:"More..."})]})})]})})},O=function(e){var a=e.publisher,r=Object(c.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publisher "'.concat(e,'" not found.'));return m.filter((function(a){return a.publisher===e}))}(a)}),[a]);return Object(t.jsx)("div",{className:"card-columns animate__animated animate__fadeInRight",children:r.map((function(e){return Object(t.jsx)(v,Object(l.a)({},e),e.id)}))})},x=function(){return Object(t.jsxs)("div",{children:[Object(t.jsx)("h1",{children:"DC Superheroes"}),Object(t.jsx)("hr",{}),Object(t.jsx)(O,{publisher:"DC Comics"})]})},g=r(12).heroes,f=function(e){var a=e.history,r=Object(b.i)().heroId,s=Object(c.useMemo)((function(){return e=r,g.find((function(a){return a.id===e}));var e}),[r]);if(!s)return Object(t.jsx)(b.a,{to:"/"});var n=s.superhero,i=s.publisher,o=s.alter_ego,l=s.first_appearance,h=s.characters;return Object(t.jsxs)("div",{className:"row mt-5",children:[Object(t.jsx)("div",{className:"col-4",children:Object(t.jsx)("img",{src:"/assets/heroes/".concat(r,".jpg"),alt:n,className:"img-thumbnail animate__animated animate__fadeInLeft"})}),Object(t.jsxs)("div",{className:"col-8 animate__animated animate__fadeInRight",children:[Object(t.jsx)("h3",{children:n}),Object(t.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(t.jsxs)("li",{className:"list-group-item",children:[" ",Object(t.jsx)("b",{children:" Alter ego: "})," ",o," "]}),Object(t.jsxs)("li",{className:"list-group-item",children:[" ",Object(t.jsx)("b",{children:" Publisher: "})," ",i," "]}),Object(t.jsxs)("li",{className:"list-group-item",children:[" ",Object(t.jsx)("b",{children:" First appearance: "})," ",l," "]})]}),Object(t.jsx)("h5",{children:" Characters "}),Object(t.jsxs)("p",{children:[" ",h," "]}),Object(t.jsx)("button",{className:"btn btn-outline-info",onClick:function(){a.length<=2?a.push("/"):a.goBack()},children:"Return"})]})]})},C=function(){return Object(t.jsxs)("div",{children:[Object(t.jsx)("h1",{children:"Marvel Superheroes"}),Object(t.jsx)("hr",{}),Object(t.jsx)(O,{publisher:"Marvel Comics"})]})},_=r(24),N=r.n(_),y=r(13),M=r(12),S=function(e){var a=e.history,r=Object(b.h)(),s=N.a.parse(r.search).q,n=void 0===s?"":s,o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(c.useState)(e),r=Object(i.a)(a,2),t=r[0],s=r[1];return[t,function(e){var a=e.target;s(Object(l.a)(Object(l.a)({},t),{},Object(y.a)({},a.name,a.value)))},function(){s(e)}]}({searchText:n}),h=Object(i.a)(o,2),u=h[0],d=h[1],j=u.searchText,p=Object(c.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLocaleLowerCase(),M.heroes.filter((function(a){return a.superhero.toLocaleLowerCase().includes(e)})))}(n)}),[n]);return Object(t.jsxs)("div",{children:[Object(t.jsx)("h1",{children:"Search Heroes"}),Object(t.jsx)("hr",{}),Object(t.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(j))},children:[Object(t.jsx)("input",{type:"text",placeholder:"Find your hero",className:"form-control",name:"searchText",autoComplete:"off",value:j,onChange:d}),Object(t.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mt-2",children:"Search"})]}),Object(t.jsx)("br",{}),""!==n&&0===p.length&&Object(t.jsxs)("div",{className:"alert alert-danger",children:["There is no a hero with ",n]}),Object(t.jsx)("div",{className:"card-columns animate__animated animate__fadeInRight",children:p.map((function(e){return Object(t.jsx)(v,Object(l.a)({},e),e.id)}))})]})},k=function(){var e=Object(c.useContext)(o),a=e.user,r=e.dispatch,s=Object(b.g)();return Object(t.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(t.jsx)(j.b,{className:"navbar-brand",to:"/",children:"SuperHeroes"}),Object(t.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(t.jsx)("span",{className:"navbar-toggler-icon"})}),Object(t.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(t.jsxs)("ul",{className:"navbar-nav",children:[Object(t.jsx)(j.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(t.jsx)(j.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(t.jsx)(j.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})]})}),Object(t.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",id:"navbarNav",children:Object(t.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(t.jsxs)("span",{className:"nav-item nav-link text-info",children:["\xa1Welcome ",a.name,"!"]}),Object(t.jsx)("button",{className:"btn btn-outline-primary",onClick:function(){r({type:u,payload:{name:""}}),s.replace("/login")},children:"Logout"})]})})]})},D=function(){return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(k,{}),Object(t.jsx)("div",{className:"container mt-2",children:Object(t.jsxs)(b.d,{children:[Object(t.jsx)(b.b,{exact:!0,basename:"/react-hero-app",path:"/marvel",component:C}),Object(t.jsx)(b.b,{exact:!0,basename:"/react-hero-app",path:"/hero/:heroId",component:f}),Object(t.jsx)(b.b,{exact:!0,basename:"/react-hero-app",path:"/dc",component:x}),Object(t.jsx)(b.b,{exact:!0,basename:"/react-hero-app",path:"/search",component:S}),Object(t.jsx)(b.a,{to:"/dc"})]})})]})},w=r(14),A=function(e){var a=e.isAuthenticated,r=e.component,c=Object(w.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",c.location.pathname),Object(t.jsx)(b.b,Object(l.a)(Object(l.a)({},c),{},{component:function(e){return a?Object(t.jsx)(r,Object(l.a)({},e)):Object(t.jsx)(b.a,{to:"/login"})}}))},B=function(e){var a=e.isAuthenticated,r=e.component,c=Object(w.a)(e,["isAuthenticated","component"]);return Object(t.jsx)(b.b,Object(l.a)(Object(l.a)({},c),{},{component:function(e){return a?Object(t.jsx)(b.a,{to:"/"}):Object(t.jsx)(r,Object(l.a)({},e))}}))},T=function(){var e=Object(c.useContext)(o).user;return Object(t.jsx)(j.a,{children:Object(t.jsx)("div",{children:Object(t.jsxs)(b.d,{children:[Object(t.jsx)(B,{exact:!0,path:"/login",component:p,isAuthenticated:e.logged}),Object(t.jsx)(A,{path:"/",component:D,isAuthenticated:e.logged})]})})})},J=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},I=function(){var e=Object(c.useReducer)(d,{},J),a=Object(i.a)(e,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){localStorage.setItem("user",JSON.stringify(r))}),[r]),Object(t.jsx)(o.Provider,{value:{user:r,dispatch:s},children:Object(t.jsx)(T,{})})};n.a.render(Object(t.jsx)(I,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.ca4e0cae.chunk.js.map