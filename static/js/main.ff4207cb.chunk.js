(window["webpackJsonpenergy-calc"]=window["webpackJsonpenergy-calc"]||[]).push([[0],{21:function(e,a,t){e.exports=t(51)},26:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),o=t.n(l),c=(t(26),t(9)),u=t(13),i=t(14),s=t(19),m=t(15),d=t(2),p=t(20),f=["Atom","Hydro","Wiatr","S\u0142o\u0144ce","CHP","Gaz","W\u0119giel","Ropa"],v=["nuclear","hydro","wind","solar","chp","gas","coal","oil"],E={nuclear:0,hydro:893,wind:1374,solar:4947,chp:2751,gas:1956,coal:30276,oil:0,demand:27600},h={nuclear:1,hydro:.42,wind:.7,solar:.65,chp:.75,gas:1,coal:.6,oil:1,demand:1},y={nuclear:.9,hydro:.82,wind:.9,solar:0,chp:.77,gas:.9,coal:.7,oil:.9},w={nuclear:5,hydro:9,wind:15,solar:46,chp:15,gas:515,coal:881,oil:993},g={nuclear:.005,hydro:0,wind:0,solar:0,chp:15,gas:0,coal:37,oil:0},b={nuclear:.005,hydro:0,wind:0,solar:0,chp:1e3,gas:187,coal:379,oil:331},O={nuclear:[260027483362602e-26,-4.21522717629026e-10,8.43915935489853e-9,8.25183318068457e-7,-104055498388049e-19,-.00395592006246061],wind:[232518114747708e-25,-8.24592229234651e-9,113347571282831e-20,-765761024246728e-19,.00267572948815116,-.0521660174799689],solar:[3.49355320699972e-10,-8.72092274335658e-8,813600796546478e-20,-.000372701904416939,.0091188719947563,-.123030025850834],chp:[0,0,-8.66564795646319e-9,128246828222672e-20,186719686851292e-19,-.0139171520689115],coal:[260027483362602e-26,-4.21522717629026e-10,8.43915935489853e-9,8.25183318068457e-7,-104055498388049e-19,-.00395592006246061],demand:[522305012772976e-26,-1.99919545823719e-9,2.84634493734413e-7,-196831546062457e-19,.000718706830438671,-.0176184293258551]},j=window.localStorage,k="energy-calc-data";function N(){var e=j.getItem(k);return e?JSON.parse(e):(z(),E)}function z(){return j.setItem(k,JSON.stringify(E)),N()}var D=t(16),M=t.n(D);t(44),t(45);function P(e){var a=e.name,t=e.value,n=e.update;return r.a.createElement("div",{className:"Slider"},r.a.createElement("div",{className:"Slider__label"},r.a.createElement("div",{className:"Slider__name"},a),r.a.createElement("div",{className:"Slider__value"},t,r.a.createElement("span",{className:"Slider__unit"}," MW"))),r.a.createElement(M.a,{maxValue:35e3,minValue:0,step:500,value:t,onChange:n}))}t(46);function S(e){var a=e.name,t=e.value,n=e.unit,l=e.type,o=void 0===l?"":l;return r.a.createElement("div",{className:"InfoBox"},r.a.createElement("span",{className:"InfoBox__name"},a),r.a.createElement("span",{className:"InfoBox__value ".concat(o)},t),r.a.createElement("span",{className:"InfoBox__unit"},n))}var W=t(1);t(47);function C(e){var a=e.className,t=e.children;return r.a.createElement("table",{className:a?"Table ".concat(a):"Table"},t)}var _=function(e){return 8760*e/1e6},x=function(e,a){return e+a},I=function(e){return e.reduce(x)/e.length},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(a){var t=Math.pow(10,e);return Math.round(a*t)/t}}(1),T=function(e){return Object.keys(e[0]).map((function(a){return e.map((function(e){return e[a]}))}))},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.commaPos,t=void 0===a?0:a,n=e.fractionDigits,r=void 0===n?1:n;return function(e){return Number((e/Math.pow(10,t)).toFixed(1)).toLocaleString([],{minimumFractionDigits:r})}},B=function(e){return e};t(48);function L(e){var a=e.values,t=e.formatFn,n=void 0===t?B:t,l=e.totalLabel;return r.a.createElement("tr",null,r.a.createElement("th",null,""),a.map(n).map((function(e,a){return r.a.createElement("th",{key:a},e)})),l?r.a.createElement("th",null,l):null)}function R(e){var a=e.title,t=void 0===a?"":a,n=e.values,l=e.format,o=void 0===l?B:l,c=e.total,u=void 0===c?null:c;return r.a.createElement("tr",null,r.a.createElement("td",null,t),n.map(o).map((function(e,a){return r.a.createElement("td",{key:a},e)})),null!==u?r.a.createElement("td",null,o(u)):null)}function G(e){var a=e.current,t=e.proposed,n=e.totalLabel,l=void 0===n?"":n,o=e.totalFn,c=e.format,u=void 0===c?F:c,i=a.map((function(e,a){return t[a]-e})),s=o?[o(a),o(t),o(i)]:[],m=Object(W.a)(s,3),d=m[0],p=m[1],v=m[2];return r.a.createElement(C,{className:"ComparisonTable"},r.a.createElement("thead",null,r.a.createElement(L,{values:f,isHeader:!0,totalLabel:l})),r.a.createElement("tbody",null,r.a.createElement(R,{values:a,title:"Aktualnie",format:u,total:d}),r.a.createElement(R,{values:t,title:"Proponowane",format:u,total:p}),r.a.createElement(R,{values:i,title:"R\xf3\u017cnica",format:u,total:v})))}var J=function(e){return Object.entries(e).filter((function(e){return"demand"!==Object(W.a)(e,1)[0]})).map((function(e){var a=Object(W.a)(e,2),t=a[0];return a[1]*y[t]})).map(F)},H=t(17),K=t(18),V=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return Array.from({length:e},(function(e,n){return t+n*a}))}(21,5),$=["hydro","gas","oil"],q=["demand","nuclear","chp","coal","wind","solar"],Q=[!1,!1,!1,!0,!0],U=function(e){var a=V.map((function(a){var t=q.map((function(t){var n=e[t]*h[t],r=Math.round(n*function(e,a){return 1+O[a].map((function(a,t){return a*Math.pow(e,6-t)})).reduce(x)}(a,t));return Math.max(0,r)}));return[a].concat(Object(K.a)(t))})),t=function(e){var a=e.map((function(e){return Object(W.a)(e,2)[1]}));return Math.round(a.reduce(x)/(a.length+1))}(a);return a.map((function(a){var n=Object(H.a)(a),r=n[0],l=n[1],o=n.slice(2),c=Object(W.a)(o,5),u=c[0],i=c[1],s=c[2],m=c[3],d=c[4],p=Math.min(l,u+i+s),f=l-p,v=function(e,a,t){var n=e.map((function(e,a){return Q[a]?Math.min(e,t):e})).reduce(x);return Math.max(0,a-n)}(o,l,t),E=Math.min(f,v),y=$.map((function(a){return e[a]*h[a]})),w=Object(W.a)(y,3),g=w[0],b=w[1],O=w[2],j=Math.min(E,g),k=Math.min(E-j,b),N=Math.min(E-j-k,O),z=j+N+k,D=u+i+s+m+d,M=Math.min(m+d,l-p-E,t),P=D+z;return{interval:r,demand:l,deficit:Math.max(0,l-P),powers:[u,j,m,d,i,k,s,N],types:{baseload:p,renewables:M,regulating:z}}}))};var X=function(e){var a=[w,b,g].map((function(a){return e.map((function(e,t){return a[v[t]]*e})).map(F)})),t=Object(W.a)(a,3);return{co2:t[0],fuel:t[1],waste:t[2],nuclear:F(g.nuclear*e[0])}};function Y(e){var a=v.map((function(a){return e[a]})),t=J(e),n=U(e),r=T(n.map((function(e){return e.powers}))).map(I).map(_).map(F),l=X(r),o=l.co2,c=l.fuel,u=l.waste,i=l.nuclear,s=r.reduce(x),m=a.reduce(x),d=t.reduce(x),p=F(m/d),f=o.reduce(x),E=u.reduce(x),h=c.reduce(x);return{installed:a,available:t,powers:n,energy:r,co2:o,fuel:c,waste:u,nuclear:i,totalEnergy:s,totalAvailable:d,totalInstalled:m,totalCO2:f,totalFuel:h,totalWaste:E,ratio:p}}t(49),t(50);function Z(e){var a=e.current,t=e.proposed,n=a.totalCO2/a.totalEnergy,l=t.totalCO2/t.totalEnergy,o=[{label:"Powierzchnia upraw (tysi\u0105ce kilometr\xf3w kwadratowych)",values:["-","-","-"]},{label:"Turbiny wiatrowe (tysi\u0105ce \u015bredniej wielko\u015bci wiatrak\xf3w)",values:["-","-","-"]},{label:"Panele s\u0142oneczne (kilometry kwadratowe paneli s\u0142onecznych)",values:["-","-","-"]},{label:"Dwutlenek w\u0119gla (miliony ton dwutlenku w\u0119gla rocznie)",values:[a.totalCO2,t.totalCO2,t.totalCO2-a.totalCO2].map(A({commaPos:3,fractionDigits:0}))},{label:"Dwutlenek w\u0119gla (g / kWh)",values:[n,l,l-n].map(A({fractionDigits:0}))},{label:"Odpady j\u0105drowe (tony zu\u017cytego paliwa j\u0105drowego rocznie)",values:[a.nuclear,t.nuclear,t.nuclear-a.nuclear].map(A({fractionDigits:0}))}];return r.a.createElement(C,{className:"ExternalitiesTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,""),r.a.createElement("th",null,"Aktualnie"),r.a.createElement("th",null,"Proponowane"),r.a.createElement("th",null,"R\xf3\u017cnica"))),r.a.createElement("tbody",null,o.map((function(e,a){var t=e.label,n=e.values;return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t),n.map((function(e,a){return r.a.createElement("td",{key:a},e)})))}))))}function ee(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function ae(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?ee(t,!0).forEach((function(a){Object(c.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ee(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var te=N(),ne={installed:te,isDetails:!1,today:Y(E),results:Y(te)},re=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state=ne,t.reset=t.reset.bind(Object(d.a)(t)),t.toggleDetails=t.toggleDetails.bind(Object(d.a)(t)),t}return Object(p.a)(a,e),Object(i.a)(a,[{key:"update",value:function(e,a){var t,n=ae({},this.state.installed,Object(c.a)({},e,a));t=n,j.setItem(k,JSON.stringify(t)),this.setState((function(e){return ae({},e,{installed:n,results:Y(n)})}))}},{key:"reset",value:function(){var e=z();this.setState((function(a){return ae({},a,{installed:e,results:Y(e)})}))}},{key:"toggleDetails",value:function(){this.setState((function(e){return ae({},e,{isDetails:!e.isDetails})}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.installed,n=a.results,l=a.today,o=t.nuclear,c=t.hydro,u=t.solar,i=t.wind,s=t.chp,m=t.gas,d=t.coal,p=t.oil,f=t.demand-n.available>0;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column title"},r.a.createElement("h1",null,"Kalkulator",r.a.createElement("br",null),"Miksu",r.a.createElement("br",null),r.a.createElement("span",{className:"colored"},"Energetycznego"))),r.a.createElement("div",{className:"column lead"},r.a.createElement("p",null,"Tutaj masz mo\u017cliwo\u015b\u0107 decydowania o produkcji energii elektrycznej w Polsce. Wyzwanie polega na posiadaniu wystarczaj\u0105cej mocy, gdy popyt jest najwyszy, przy jak najmniejszych konsekwencjach \u015brodowiskowych. Ty budujesz - ty decydujesz!"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"Results column"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement(S,{name:"Moc zainstalowana",value:A({commaPos:3})(n.totalInstalled),unit:"GW"}),r.a.createElement(S,{name:"Moc dost\u0119pna",value:A({commaPos:3})(n.totalAvailable),unit:"GW",type:f?"warning":""}),r.a.createElement(S,{name:"Ratio",value:A(0)(n.ratio)})),r.a.createElement("div",{className:"column"},r.a.createElement(S,{name:"Emisje CO2",value:A({commaPos:3})(n.totalCO2),unit:"mln ton"}),r.a.createElement(S,{name:"Odpady j\u0105drowe",value:A()(n.nuclear),unit:"tys. ton"}),r.a.createElement(S,{name:"Odpady sta\u0142e",value:A()(n.totalWaste),unit:"tys. ton"})))),r.a.createElement("div",{className:"Sliders column"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement(P,{name:"Atom",value:o,update:function(a){return e.update("nuclear",a)}}),r.a.createElement(P,{name:"Hydro",value:c,update:function(a){return e.update("hydro",a)}}),r.a.createElement(P,{name:"S\u0142o\u0144ce",value:u,update:function(a){return e.update("solar",a)}}),r.a.createElement(P,{name:"Wiatr",value:i,update:function(a){return e.update("wind",a)}})),r.a.createElement("div",{className:"column"},r.a.createElement(P,{name:"Kogeneracja",value:s,update:function(a){return e.update("chp",a)}}),r.a.createElement(P,{name:"Gaz",value:m,update:function(a){return e.update("gas",a)}}),r.a.createElement(P,{name:"W\u0119giel",value:d,update:function(a){return e.update("coal",a)}}),r.a.createElement(P,{name:"Ropa",value:p,update:function(a){return e.update("oil",a)}}))),r.a.createElement("div",{className:"Buttons"},r.a.createElement("button",{onClick:this.toggleDetails,className:"DetailsToggle"},this.state.isDetails?"ukryj":"poka\u017c"," dane szczeg\xf3\u0142owe"),r.a.createElement("button",{onClick:this.reset,className:"ResetButton"},"Reset")))),this.state.isDetails?r.a.createElement("div",{className:"Details"},r.a.createElement("h3",null,"Moc zainstalowana (GW)"),r.a.createElement(G,{current:l.installed,proposed:n.installed,totalLabel:"\u0141\u0105cznie",totalFn:function(e){return e.reduce(x)},format:A({commaPos:3,fractionDigits:0})}),r.a.createElement("h3",null,"Moc dost\u0119pna (GW)"),r.a.createElement(G,{current:l.available,proposed:n.available,totalLabel:"\u0141\u0105cznie",totalFn:function(e){return e.reduce(x)},format:A({commaPos:3,fractionDigits:0})}),r.a.createElement("h3",null,"Wyprodukowana energia (TWh / rok)"),r.a.createElement(G,{current:l.energy,proposed:n.energy,totalLabel:"\u0141\u0105cznie",totalFn:function(e){return e.reduce(x)},format:A({fractionDigits:0})}),r.a.createElement("h3",null,"Emisje CO",r.a.createElement("sub",null,"2")," (mln ton / rok)"),r.a.createElement(G,{current:l.co2,proposed:n.co2,totalLabel:"\u0141\u0105cznie",totalFn:function(e){return e.reduce(x)},format:A({commaPos:3,fractionDigits:0})}),r.a.createElement("h3",null,"Wp\u0142yw na \u015brodowisko"),r.a.createElement(Z,{current:l,proposed:n})):null)}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.ff4207cb.chunk.js.map