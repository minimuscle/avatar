(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{18:function(e,a,t){},19:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t.n(n),r=t(11),s=t.n(r),i=(t(18),t(3)),c=(t(19),t(12)),h=t(23),u=t(24),l=t(25),j=t(8),g=t(0);function b(e){var a=Object(n.useState)(1),t=Object(i.a)(a,2),o=t[0],r=t[1],s=Object(n.useState)(""),b=Object(i.a)(s,2),d=b[0],O=b[1],f=Object(n.useState)([]),m=Object(i.a)(f,2),y=m[0],k=m[1];function p(e){return Object.keys(e).reduce((function(a,t){if("string"===typeof e[t]||e[t]instanceof String)"question"!==t&&(localStorage.setItem(a.length,e[t]),a.push(t));else{var n=p(e[t]);a.push.apply(a,Object(c.a)(n))}return a}),[])}return Object(n.useEffect)((function(){localStorage.clear(),sessionStorage.clear()}),[]),Object(n.useEffect)((function(){if(o===j.length+1)for(var e=Object.keys(sessionStorage),a=0,t=0;t<e.length;t++)sessionStorage.getItem(e[t])>a&&(a=sessionStorage.getItem(e[t]),O(sessionStorage.key(t)));try{k(p(j[o-1]))}catch(n){console.log(n)}}),[o]),Object(g.jsxs)(u.a,{className:"box",children:[Object(g.jsxs)(h.a,{children:[Object(g.jsx)(l.a,{md:"auto",children:Object(g.jsx)("button",{className:"back",onClick:function(){return e.setQuiz("home")},children:"Back"})}),Object(g.jsx)(l.a,{children:Object(g.jsx)("h1",{children:"Which Character Are You?"})})]}),Object(g.jsx)(h.a,{children:Object(g.jsx)(l.a,{children:Object(g.jsx)("hr",{})})}),d?d.toString():Object(g.jsxs)(u.a,{children:[Object(g.jsxs)(h.a,{children:[Object(g.jsx)(l.a,{md:"auto",children:Object(g.jsxs)("h4",{children:["Question ",o.toString(),Object(g.jsxs)("span",{children:["/",j.length]})," "]})}),Object(g.jsx)(l.a,{children:function(){try{return Object(g.jsx)("h5",{children:j[o-1].question})}catch(e){console.log(e)}}()})]}),Object(g.jsx)(h.a,{children:Object(g.jsx)(l.a,{children:Object(g.jsx)("hr",{})})}),y.map((function(e,a){return Object(g.jsx)(h.a,{children:Object(g.jsx)("button",{className:"option",onClick:function(){return function(e){var a=localStorage.getItem(e),t=0;null===(t=sessionStorage.getItem(a))&&(t=0),t=parseInt(t)+1,sessionStorage.setItem(a,t),r(o+1)}(a)},children:e.toString()})},a)}))]})]})}var d=function(){var e=Object(n.useState)("home"),a=Object(i.a)(e,2),t=a[0],o=a[1];return Object(g.jsx)("div",{className:"App",children:function(){switch(t){case"home":return Object(g.jsxs)(u.a,{className:"box",children:[Object(g.jsx)(h.a,{children:Object(g.jsxs)(l.a,{children:[Object(g.jsx)("h1",{children:"Avatar Quiz"}),Object(g.jsx)("hr",{})]})}),Object(g.jsx)(h.a,{children:Object(g.jsx)(l.a,{children:Object(g.jsx)("button",{className:"option",onClick:function(){return o("character")},children:"Which Character Are You?"})})})]});case"character":return Object(g.jsx)(b,{setQuiz:o})}}()})};t(21);s.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(d,{})}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"question":"What is your favourite element?","answers":[{"Earth":"Kyoshi","Fire":"Azula","Water":"Katara","Air":"Aang"}]},{"question":"You must take only 1 item with you on a desert island. What do you take?","answers":[{"A Firestarter":"Katara","A Spear":"Sokka","A Little Bit of Food":"Cabbage Merchant","A Sun Hat":"Iroh"}]},{"question":"Of these, who is your favourite character from Avatar: The Last Airbender?","answers":[{"Aang":"Foaming Mouth Guy","Katara":"Aang","Sokka":"Ty Lee","Toph":"Toph","Zuko":"Mai","Azula":"Azula"}]},{"question":"Have you ever unironically said \\"That\'s Rough Buddy\\" to someone?","answers":[{"Yes":"Zuko","No":"Sokka"}]},{"question":"Do you know the entire opening sequence off by heart?","answers":[{"Yes":"Foaming Mouth Guy","No":"Aang"}]},{"question":"What is your favourite non-standard form of bending?","answers":[{"Blood Bending":"Azula","Lava Bending":"Kyoshi","Lightning Bending":"Zuko","Energy Bending":"Aang","Healing":"Katara","Metal Bending":"Toph","Combustion Bending":"Ty Lee","Lightning Redirection":"Iroh"}]},{"question":"Who is your favourite character from Legend of Korra?","answers":[{"Mako":"Zuko","Bolin":"Sokka","Korra":"Kyoshi","Asami":"Ty Lee","Pabu":"Foaming Mouth Guy"}]},{"question":"Which character from the Gaang do you thing represents you the most?","answers":[{"Zuko":"Zuko","Aang":"Aang","Katara":"Katara","Sokka":"Sokka","Toph":"Toph","Appa":"Foaming Mouth Guy","Momo":"Cabbage Merchant"}]},{"question":"Where do we first see the Cabbage Merchant?","answers":[{"Kyoshi Island":"Foaming Mouth Guy","Omashu":"Cabbage Merchant","Ba Sing Se":"Toph","Waterbending Scroll (Merchant Pier)":"Iroh"}]},{"question":"How many times does Iroh play the Tsungi Horn?","answers":[{"1":"Katara","2":"Iroh","3":"Zuko","4":"Mai"}]},{"question":"What kind of diet do you eat?","answers":[{"Vegetarian":"Aang","Vegan":"Cabbage Merchant","Omni":"Iroh","Meat":"Sokka"}]},{"question":"What kind of animal is Korra\'s companian?","answers":[{"Polar Dog":"Katara","Polar Bear Dog":"Foaming Mouth Guy","Polar Leopard Dog":"Cabbage Merchant","Snow Leopard Dog":"Azula"}]},{"question":"What happened to Zuko\'s Mother?","answers":[{"Banished for killing Azulon":"Azula","Banished after trading places with Zuko":"Mai","Banished for trying to safe Zuko":"Ty Lee"}]},{"question":"Pick a random character!","answers":[{"Kyoshi":"Kyoshi","Cabbage Merchant":"Cabbage Merchant","Azula":"Azula","Mai":"Mai","Ty Lee":"Ty Lee"}]}]')}},[[22,1,2]]]);
//# sourceMappingURL=main.2fe8e52c.chunk.js.map