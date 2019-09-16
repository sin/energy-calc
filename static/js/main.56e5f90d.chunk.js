(window["webpackJsonpenergy-calc"]=window["webpackJsonpenergy-calc"]||[]).push([[0],{18:function(e,t,n){e.exports=n(45)},23:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),u=(n(23),n(10)),l=n(11),i=n(15),s=n(12),m=n(5),d=n(16),p=n(1),f=window.localStorage,v="energy-calc-data",O={nuclear:0,hydro:893,wind:1374,solar:4947,gas:1956,oil:0,chp:2751,coal:30276,demand:26360};function b(){var e=f.getItem(v);return e?JSON.parse(e):(y(),O)}function y(){return f.setItem(v,JSON.stringify(O)),b()}var j=n(13),h=n.n(j);n(41),n(42);function w(e){var t=e.name,n=e.value,a=e.update;return r.a.createElement("div",{className:"Slider"},r.a.createElement("div",{className:"Slider__label"},r.a.createElement("div",{className:"Slider__name"},t),r.a.createElement("div",{className:"Slider__value"},n,r.a.createElement("span",{className:"Slider__unit"}," MW"))),r.a.createElement(h.a,{maxValue:35e3,minValue:0,step:500,value:n,onChange:a}))}n(43);function g(e){var t=e.name,n=e.value,a=e.unit,c=e.type,o=void 0===c?"":c;return r.a.createElement("div",{className:"InfoBox"},r.a.createElement("span",{className:"InfoBox__name"},t),r.a.createElement("span",{className:"InfoBox__value ".concat(o)},n),r.a.createElement("span",{className:"InfoBox__unit"},a))}var E=n(14),P=n(17),N=n(2),k=["hydro","gas","oil"],S={nuclear:100,wind:70,solar:65,chp:75,coal:60,demand:100,hydro:42,oil:100,gas:100},M={nuclear:90,hydro:82,wind:9,solar:0,gas:90,oil:90,chp:77,coal:70},D={nuclear:.005,hydro:0,wind:0,solar:0,gas:187,oil:331,chp:1e3,coal:379},_={nuclear:5,hydro:9,wind:15,solar:46,gas:515,oil:993,chp:15,coal:881},z={nuclear:.005,hydro:0,wind:0,solar:0,gas:0,oil:0,chp:15,coal:37},x={demand:[522305012772976e-26,-1.99919545823719e-9,2.84634493734413e-7,-196831546062457e-19,.000718706830438671,-.0176184293258551],nuclear:[260027483362602e-26,-4.21522717629026e-10,8.43915935489853e-9,8.25183318068457e-7,-104055498388049e-19,-.00395592006246061],chp:[0,0,-8.66564795646319e-9,128246828222672e-20,186719686851292e-19,-.0139171520689115],coal:[260027483362602e-26,-4.21522717629026e-10,8.43915935489853e-9,8.25183318068457e-7,-104055498388049e-19,-.00395592006246061],wind:[232518114747708e-25,-8.24592229234651e-9,113347571282831e-20,-765761024246728e-19,.00267572948815116,-.0521660174799689],solar:[3.49355320699972e-10,-8.72092274335658e-8,813600796546478e-20,-.000372701904416939,.0091188719947563,-.123030025850834]},I=function(e){return 8760*e/1e6},W=function(e,t){return e+t},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(t){var n=Math.pow(10,e);return Math.round(t*n)/n}}(1);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var R=Object.keys(x),C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return Array.from({length:e},(function(e,a){return n+a*t}))}(21,5),A=function(e){var t=C.map((function(t){var n=Object.assign.apply(Object,[{}].concat(Object(E.a)(R.map((function(n){var a=e[n]*S[n]/100,r=Math.round(a*function(e,t){return 1+x[t].map((function(t,n){return t*Math.pow(e,6-n)})).reduce(W)}(t,n));return Object(p.a)({},n,Math.max(0,r))}))))),a=n.demand,r=Object(P.a)(n,["demand"]);return{interval:t,demand:a,powers:r}})),n=function(e){var t=e.map((function(e){return e.demand}));return Math.round(t.reduce(W)/(t.length+1))}(t);return t.map((function(t){var a=t.demand,r=t.powers,c=r.nuclear,o=r.chp,u=r.coal,l=r.wind,i=r.solar,s=Math.min(a,c+o+u),m=a-s,d=function(e,t){var n=e.demand,a=e.powers,r={nuclear:!1,chp:!1,coal:!1,wind:!0,solar:!0},c=Object.entries(a).map((function(e){var n=Object(N.a)(e,2),a=n[0],c=n[1];return r[a]?Math.min(c,t):c})).reduce(W);return Math.max(0,n-c)}(t,n),f=Math.min(m,d),v=Math.min(l+i,a-s-f,n),O=k.map((function(t){return e[t]*S[t]/100})),b=Object(N.a)(O,3),y=b[0],j=b[1],h=b[2],w=Math.min(f,y),g=Math.min(f-w,j),E=Math.min(f-w-g,h),P=w+E+g,M=c+o+u+l+i+P,D=Math.max(0,a-M);return t.powers=Object.assign(t.powers,{hydro:w,gas:g,oil:E}),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{deficit:D,groups:{baseload:s,renewables:v,regulating:P}})}))};function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var V=function(e){return Object.entries(e).reduce((function(e,t){var n=Object(N.a)(t,2),a=n[0],r=n[1],c=[D,z,_].map((function(e){return Math.round(r*e[a]*1e3)})),o=Object(N.a)(c,3),u=o[0],l=o[1],i=o[2];return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(p.a)({},a,{fuel:u,waste:l,co2:i}))}),{})},F=function(e){var t,n=(t=Object.entries(e).filter((function(e){return"demand"!==Object(N.a)(e,1)[0]})).map((function(e){var t=Object(N.a)(e,2),n=t[0],a=t[1];return[a,B(M[n]/100*a)]})),Object.keys(t[0]).map((function(e){return t.map((function(t){return t[e]}))}))),a=Object(N.a)(n,2),r=a[0],c=a[1],o=r.reduce(W),u=c.reduce(W);return{total:o,available:u,ratio:B(o/u)}};function H(e){var t=A(e),n=function(e){var t=e.map((function(e){var t=e.powers;return Object.entries(t).reduce((function(e,t){var n=Object(N.a)(t,2),a=n[0],r=n[1];return K({},e,Object(p.a)({},a,B(I(r))))}),{})}));return Object.keys(t[0]).reduce((function(e,n){var a=t.reduce((function(e,t){return t[n]+e}),0);return K({},e,Object(p.a)({},n,B(a/20)))}),{})}(t),a=V(n),r=F(e);return{powers:t,energy:n,fuels:a,total:r.total,available:r.available,ratio:r.ratio}}n(44);function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=function(e){return e.toFixed(1).replace(".",",")},Q=function(e){return L(e/1e3)},U=function(e){return L(e/1e3)},X=b(),Y=q({installed:X},H(X)),Z=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).state=Y,n.reset=n.reset.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"update",value:function(e,t){var n,a=q({},this.state.installed,Object(p.a)({},e,t));n=a,f.setItem(v,JSON.stringify(n)),this.setState(q({installed:a},H(a)))}},{key:"reset",value:function(){var e=y();this.setState(q({installed:e},H(e)))}},{key:"render",value:function(){var e,t=this,n=this.state,a=n.installed,c=n.total,o=n.available,u=n.ratio,l=n.fuels,i=(n.energy,a.nuclear),s=a.hydro,m=a.solar,d=a.wind,p=a.chp,f=a.gas,v=a.coal,O=a.oil,b=a.demand,y=(e=Object.values(l).reduce((function(e,t){return e+t.co2}),0),L(e/1e6)),j=l.nuclear.waste,h=U(j),E=U(Object.values(l).reduce((function(e,t){return e+t.waste}),0)),P=b-o>0;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column title"},r.a.createElement("h1",null,"Kalkulator",r.a.createElement("br",null),"Miksu",r.a.createElement("br",null),r.a.createElement("span",{className:"colored"},"Energetycznego"))),r.a.createElement("div",{className:"column lead"},r.a.createElement("p",null,"Tutaj masz mo\u017cliwo\u015b\u0107 decydowania o produkcji energii elektrycznej w Polsce. Wyzwanie polega na posiadaniu wystarczaj\u0105cej mocy, gdy popyt jest najwyszy, przy jak najmniejszych konsekwencjach \u015brodowiskowych. Ty budujesz - ty decydujesz!"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"Results column"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement(g,{name:"Moc zainstalowana",value:Q(c),unit:"GW"}),r.a.createElement(g,{name:"Moc dost\u0119pna",value:Q(o),unit:"GW",type:P?"warning":""}),r.a.createElement(g,{name:"Ratio",value:L(u)})),r.a.createElement("div",{className:"column"},r.a.createElement(g,{name:"Emisje CO2",value:y,unit:"mln ton"}),r.a.createElement(g,{name:"Odpady j\u0105drowe",value:h,unit:"tys. ton"}),r.a.createElement(g,{name:"Odpady sta\u0142e",value:E,unit:"tys. ton"})))),r.a.createElement("div",{className:"Sliders column"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement(w,{name:"Atom",value:i,update:function(e){return t.update("nuclear",e)}}),r.a.createElement(w,{name:"Hydro",value:s,update:function(e){return t.update("hydro",e)}}),r.a.createElement(w,{name:"S\u0142o\u0144ce",value:m,update:function(e){return t.update("solar",e)}}),r.a.createElement(w,{name:"Wiatr",value:d,update:function(e){return t.update("wind",e)}})),r.a.createElement("div",{className:"column"},r.a.createElement(w,{name:"Kogeneracja",value:p,update:function(e){return t.update("chp",e)}}),r.a.createElement(w,{name:"Gaz",value:f,update:function(e){return t.update("gas",e)}}),r.a.createElement(w,{name:"W\u0119giel",value:v,update:function(e){return t.update("coal",e)}}),r.a.createElement(w,{name:"Ropa",value:O,update:function(e){return t.update("oil",e)}}))),r.a.createElement("div",{className:"Reset"},r.a.createElement("button",{onClick:this.reset},"Reset")))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.56e5f90d.chunk.js.map