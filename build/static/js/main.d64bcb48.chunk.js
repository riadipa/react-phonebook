(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),l=t(13),r=t.n(l),c=t(2),u=function(e){return o.a.createElement("div",null,e.name," \xa0 ",e.number,o.a.createElement("button",{onClick:function(){return e.handleDelete(e.personId)}},"delete"))},i=function(e){return o.a.createElement("div",null,"filter shown with"," ",o.a.createElement("input",{value:e.filterText,onChange:e.handleFilter}))},m=function(e){return o.a.createElement("form",{onSubmit:e.onSubmit},o.a.createElement("div",null,"name: ",o.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),o.a.createElement("div",null,"number:"," ",o.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add")))},s=function(e){return o.a.createElement("div",null,e.showPersons())},f=t(3),d=t.n(f),h="/api/persons",b=function(){return d.a.get(h)},g=function(e){return d.a.post(h,e)},v=function(e,n){return d.a.put("".concat(h,"/").concat(e),n)},p=function(e){return d.a.delete("".concat(h,"/").concat(e))},E=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],l=n[1],r=Object(a.useState)(""),f=Object(c.a)(r,2),d=f[0],h=f[1],E=Object(a.useState)(""),w=Object(c.a)(E,2),j=w[0],O=w[1],N=Object(a.useState)(""),C=Object(c.a)(N,2),S=C[0],k=C[1],y=Object(a.useState)(null),T=Object(c.a)(y,2),D=T[0],I=T[1],x=Object(a.useState)(null),P=Object(c.a)(x,2),U=P[0],F=P[1],J=function(){console.log("effect"),b().then((function(e){console.log("promise fulfilled"),console.log("data :",e.data),l(e.data)}))};Object(a.useEffect)(J,[]);var A=function(e){console.log(e);var n=t.filter((function(n){return n.id===e}));if(console.log(n),1===n.length){console.log("hello",n[0]);var a=window.confirm("Delete ".concat(n[0].name," ?"));console.log("confirm message",a),!0===a&&p(e).then((function(e){console.log("delete person",e.data),J()}))}},B=t.filter((function(e){return e.name.toUpperCase().includes(S.toUpperCase())}));return o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement((function(e){var n=e.message;return null===n?null:o.a.createElement("div",{className:"addMessage"},n)}),{message:D}),o.a.createElement((function(e){var n=e.message;return null===n?null:o.a.createElement("div",{className:"error"},n)}),{message:U}),o.a.createElement(i,{filterText:S,handleFilter:function(e){console.log(e.target.value),k(e.target.value)}}),o.a.createElement("h2",null,"add a new"),o.a.createElement(m,{onSubmit:function(e){e.preventDefault();var n=t.filter((function(e){return e.name===d}));if(n.length>0){var a=window.confirm("".concat(d," is already added to phonebook, replace the old number with a new one?"));if(console.log("confirm message",a),!0===a){var o={name:d,number:j};v(n[0].id,o).then((function(e){console.log("response data: ",e.data),h(""),O(""),I("Updated the number for ".concat(d)),setTimeout((function(){I(null)}),5e3),J()})).catch((function(e){F("Information of '".concat(d,"' has already been removed from server")),setTimeout((function(){F(null)}),5e3),J()}))}}else{g({name:d,number:j}).then((function(e){l(t.concat(e.data)),h(""),O(""),I("Added ".concat(d)),setTimeout((function(){I(null)}),5e3)}))}},newName:d,newNumber:j,handleNameChange:function(e){console.log(e.target.value),h(e.target.value)},handleNumberChange:function(e){console.log(e.target.value),O(e.target.value)}}),o.a.createElement("h2",null,"Numbers"),o.a.createElement(s,{showPersons:function(){return B.map((function(e){return o.a.createElement(u,{key:e.id,personId:e.id,name:e.name,number:e.number,handleDelete:A})}))}}))};t(36);r.a.render(o.a.createElement(E,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d64bcb48.chunk.js.map