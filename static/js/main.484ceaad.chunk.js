(window["webpackJsonpenergy-calc"]=window["webpackJsonpenergy-calc"]||[]).push([[0],{17:function(e,t,n){e.exports=n(44)},22:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),u=(n(22),n(9)),l=n(10),i=n(14),s=n(11),m=n(15),d=n(1),p=n(12),f=n.n(p);n(40),n(41);function O(e){var t=e.name,n=e.value,a=e.update;return r.a.createElement("div",{className:"Slider"},r.a.createElement("div",{className:"Slider__label"},r.a.createElement("div",{className:"Slider__name"},t),r.a.createElement("div",{className:"Slider__value"},n,r.a.createElement("span",{className:"Slider__unit"}," MW"))),r.a.createElement(f.a,{maxValue:25e3,minValue:0,step:500,value:n,onChange:a}))}n(42);function v(e){var t=e.name,n=e.value,a=e.unit,c=e.type,o=void 0===c?"":c;return r.a.createElement("div",{className:"InfoBox"},r.a.createElement("span",{className:"InfoBox__name"},t),r.a.createElement("span",{className:"InfoBox__value ".concat(o)},n),r.a.createElement("span",{className:"InfoBox__unit"},a))}var b=n(13),y=n(16),j=n(2),h=["hydro","gas","oil"],w={nuclear:100,wind:70,solar:65,chp:75,coal:100,demand:100,hydro:42,oil:100,gas:100},g={nuclear:90,hydro:82,wind:9,solar:0,gas:90,oil:90,chp:77,coal:90},E={nuclear:.005,hydro:0,wind:0,solar:0,gas:187,oil:331,chp:1e3,coal:379},P={nuclear:5,hydro:9,wind:15,solar:46,gas:515,oil:993,chp:15,coal:881},N={nuclear:.005,hydro:0,wind:0,solar:0,gas:0,oil:0,chp:15,coal:37},k={demand:[522305012772976e-26,-1.99919545823719e-9,2.84634493734413e-7,-196831546062457e-19,.000718706830438671,-.0176184293258551],nuclear:[260027483362602e-26,-4.21522717629026e-10,8.43915935489853e-9,8.25183318068457e-7,-104055498388049e-19,-.00395592006246061],chp:[0,0,-8.66564795646319e-9,128246828222672e-20,186719686851292e-19,-.0139171520689115],coal:[0,0,0,0,0,0],wind:[232518114747708e-25,-8.24592229234651e-9,113347571282831e-20,-765761024246728e-19,.00267572948815116,-.0521660174799689],solar:[3.49355320699972e-10,-8.72092274335658e-8,813600796546478e-20,-.000372701904416939,.0091188719947563,-.123030025850834]},M=function(e){return 8760*e/1e6},D=function(e,t){return e+t},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(t){var n=Math.pow(10,e);return Math.round(t*n)/n}}(1);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var z=Object.keys(k),x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return Array.from({length:e},(function(e,a){return n+a*t}))}(21,5),W=function(e){var t=x.map((function(t){var n=Object.assign.apply(Object,[{}].concat(Object(b.a)(z.map((function(n){var a=e[n]*w[n]/100,r=Math.round(a*function(e,t){return 1+k[t].map((function(t,n){return t*Math.pow(e,6-n)})).reduce(D)}(t,n));return Object(d.a)({},n,Math.max(0,r))}))))),a=n.demand,r=Object(y.a)(n,["demand"]);return{interval:t,demand:a,powers:r}})),n=function(e){var t=e.map((function(e){return e.demand}));return Math.round(t.reduce(D)/(t.length+1))}(t);return t.map((function(t){var a=t.demand,r=t.powers,c=r.nuclear,o=r.chp,u=r.coal,l=r.wind,i=r.solar,s=Math.min(a,c+o+u),m=a-s,p=function(e,t){var n=e.demand,a=e.powers,r={nuclear:!1,chp:!1,coal:!1,wind:!0,solar:!0},c=Object.entries(a).map((function(e){var n=Object(j.a)(e,2),a=n[0],c=n[1];return r[a]?Math.min(c,t):c})).reduce(D);return Math.max(0,n-c)}(t,n),f=Math.min(m,p),O=Math.min(l+i,a-s-f,n),v=h.map((function(t){return e[t]*w[t]/100})),b=Object(j.a)(v,3),y=b[0],g=b[1],E=b[2],P=Math.min(f,y),N=Math.min(f-P,g),k=Math.min(f-P-N,E),M=P+k+N,S=c+o+u+l+i+M,z=Math.max(0,a-S);return t.powers=Object.assign(t.powers,{hydro:P,gas:N,oil:k}),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{deficit:z,groups:{baseload:s,renewables:O,regulating:M}})}))};function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var C=function(e){return Object.entries(e).reduce((function(e,t){var n=Object(j.a)(t,2),a=n[0],r=n[1],c=[E,N,P].map((function(e){return Math.round(r*e[a]*1e3)})),o=Object(j.a)(c,3),u=o[0],l=o[1],i=o[2];return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(d.a)({},a,{fuel:u,waste:l,co2:i}))}),{})},G=function(e){var t,n=(t=Object.entries(e).filter((function(e){return"demand"!==Object(j.a)(e,1)[0]})).map((function(e){var t=Object(j.a)(e,2),n=t[0],a=t[1];return[a,S(g[n]/100*a)]})),Object.keys(t[0]).map((function(e){return t.map((function(t){return t[e]}))}))),a=Object(j.a)(n,2),r=a[0],c=a[1],o=r.reduce(D),u=c.reduce(D);return{total:o,available:u,ratio:S(o/u)}};function R(e){var t=W(e),n=function(e){var t=e.map((function(e){var t=e.powers;return Object.entries(t).reduce((function(e,t){var n=Object(j.a)(t,2),a=n[0],r=n[1];return I({},e,Object(d.a)({},a,S(M(r))))}),{})}));return Object.keys(t[0]).reduce((function(e,n){var a=t.reduce((function(e,t){return t[n]+e}),0);return I({},e,Object(d.a)({},n,S(a/20)))}),{})}(t),a=C(n),r=G(e);return{powers:t,energy:n,fuels:a,total:r.total,available:r.available,ratio:r.ratio}}n(43);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=function(e){return e.toFixed(1).replace(".",",")},V=function(e){return T(e/1e3)},F=function(e){return T(e/1e3)},H={nuclear:9e3,hydro:16e3,wind:7500,solar:500,gas:500,oil:1e3,chp:4500,coal:0,demand:26700},$=K({installed:K({},H)},R(H)),q=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).state=$,n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"update",value:function(e,t){var n=K({},this.state.installed,Object(d.a)({},e,t));this.setState(K({installed:n},R(n)))}},{key:"render",value:function(){var e,t=this,n=this.state,a=n.installed,c=n.total,o=n.available,u=n.ratio,l=n.fuels,i=a.nuclear,s=a.hydro,m=a.solar,d=a.wind,p=a.chp,f=a.gas,b=a.coal,y=a.oil,j=a.demand,h=(e=Object.values(l).reduce((function(e,t){return e+t.co2}),0),T(e/1e6)),w=l.nuclear.waste,g=F(w),E=F(Object.values(l).reduce((function(e,t){return e+t.waste}),0)),P=j-o>0;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column title"},r.a.createElement("h1",null,"Kalkulator",r.a.createElement("br",null),"Miksu",r.a.createElement("br",null),r.a.createElement("span",{className:"colored"},"Energetycznego"))),r.a.createElement("div",{className:"column lead"},r.a.createElement("p",null,"Tutaj masz mo\u017cliwo\u015b\u0107 decydowania o produkcji energii elektrycznej w Polsce. Wyzwanie polega na posiadaniu wystarczaj\u0105cej mocy, gdy popyt jest najwyszy, przy jak najmniejszych konsekwencjach \u015brodowiskowych. Ty budujesz - ty decydujesz!"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"Results column"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement(v,{name:"Moc zainstalowana",value:V(c),unit:"GW"}),r.a.createElement(v,{name:"Moc dost\u0119pna",value:V(o),unit:"GW",type:P?"warning":""}),r.a.createElement(v,{name:"Ratio",value:T(u)})),r.a.createElement("div",{className:"column"},r.a.createElement(v,{name:"Emisje CO2",value:h,unit:"mln ton"}),r.a.createElement(v,{name:"Odpady j\u0105drowe",value:g,unit:"tys. ton"}),r.a.createElement(v,{name:"Odpady sta\u0142e",value:E,unit:"tys. ton"})))),r.a.createElement("div",{className:"Sliders column"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement(O,{name:"Atom",value:i,update:function(e){return t.update("nuclear",e)}}),r.a.createElement(O,{name:"Hydro",value:s,update:function(e){return t.update("hydro",e)}}),r.a.createElement(O,{name:"S\u0142o\u0144ce",value:m,update:function(e){return t.update("solar",e)}}),r.a.createElement(O,{name:"Wiatr",value:d,update:function(e){return t.update("wind",e)}})),r.a.createElement("div",{className:"column"},r.a.createElement(O,{name:"Kogeneracja",value:p,update:function(e){return t.update("chp",e)}}),r.a.createElement(O,{name:"Gaz",value:f,update:function(e){return t.update("gas",e)}}),r.a.createElement(O,{name:"W\u0119giel",value:b,update:function(e){return t.update("coal",e)}}),r.a.createElement(O,{name:"Ropa",value:y,update:function(e){return t.update("oil",e)}}))))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.484ceaad.chunk.js.map