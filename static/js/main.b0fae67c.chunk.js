(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a(296)},105:function(e,t,a){},106:function(e,t,a){},296:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(33),o=a.n(c),r=(a(105),a(50)),s=a(99),i=a(13),d=a(14),u=a(16),m=a(15),h=a(17),g=(a(106),a(93)),v=a.n(g),E=a(11),b=a.n(E),y=a(94),f=a.n(y),C=a(95),p=a.n(C),S=a(96),w=a.n(S),k=a(49),O=a.n(k),j=a(12),N=a.n(j),Y=a(10),D=a.n(Y),M=a(34),T=a.n(M),x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleTransationChange=function(e){a.setState({transation:e})},a.handleCategoryChange=function(e){a.setState({category:e})},a.handleClick=function(){var e=a.state,t=e.transation,n=e.category;a.props.onSubmit(-1*Math.abs(parseFloat(t)),n),console.log("###: handleClick "),console.log("###: this.state ",a.state),a.setState({transation:"",category:""})},a.state={transation:"",category:""},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"row-flex"},l.a.createElement("div",{className:"col"},l.a.createElement(D.a,{label:"\u0420\u0430\u0441\u0445\u043e\u0434\u044b",placeholder:"\u0412\u043d\u0435\u0441\u0438\u0442\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b",view:"line",type:"number",value:this.state.transation,onChange:this.handleTransationChange,icon:l.a.createElement(T.a,{size:"s"})})),l.a.createElement("div",{className:"col"},l.a.createElement(D.a,{label:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",placeholder:"\u0412\u043d\u0435\u0441\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e",value:this.state.category,onChange:this.handleCategoryChange,view:"line"})),l.a.createElement("div",{className:"col"},l.a.createElement(b.a,{view:"extra",onClick:this.handleClick},"\u0412\u043d\u0435\u0441\u0442\u0438")))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleTransationChange=function(e){a.setState({transation:e})},a.handleCategoryChange=function(e){a.setState({category:e})},a.handleClick=function(){var e=a.state,t=e.transation,n=e.category;a.props.onSubmit(Math.abs(parseFloat(t)),n),console.log("###: handleClick "),console.log("###: this.state ",a.state),a.setState({transation:"",category:""})},a.state={transation:"",category:""},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"row-flex"},l.a.createElement("div",{className:"col"},l.a.createElement(D.a,{label:"\u0414\u043e\u0445\u043e\u0434\u044b",placeholder:"\u0412\u043d\u0435\u0441\u0438\u0442\u0435 \u0434\u043e\u0445\u043e\u0434\u044b",view:"line",type:"number",value:this.state.transation,onChange:this.handleTransationChange,icon:l.a.createElement(T.a,{size:"s"})})),l.a.createElement("div",{className:"col"},l.a.createElement(D.a,{label:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",placeholder:"\u0412\u043d\u0435\u0441\u0438\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e",value:this.state.category,onChange:this.handleCategoryChange,view:"line"})),l.a.createElement("div",{className:"col"},l.a.createElement(b.a,{view:"extra",onClick:this.handleClick},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))}}]),t}(n.Component),z=a(97),I=a.n(z),J=a(98),B=a.n(J),F=function(e){function t(e){var a;Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).onToday=function(){var e=a.state,t=e.transactions,n=e.date,l=t.filter(function(e){var t=e.date;return N()(t,"DD.MM.YYYY").isSame(n,"month")});console.log("### currentMonthTransaction: ",l);var c=l.reduce(function(e,t){return t.sum>0?t.sum+e:e},0),o=l.reduce(function(e,t){return t.sum<0?t.sum+e:e},0),r=c-Math.abs(o);return console.log("###dailyExpanse: ",o),console.log("##dailyMoney: ",c),console.log("##newDailyExpanse: ",r),c/N()(n).daysInMonth()},a.handleCalendarChange=function(e){var t=e.split(".");a.setState({date:N()("".concat(t[2],"-").concat(t[1],"-").concat(t[0]))})},a.handleSubstractDay=function(){a.setState({date:a.state.date.subtract(1,"day")})},a.handleAddDay=function(){a.setState({date:a.state.date.add(1,"day")})},a.handleTabSelectedClick=function(e){console.log("####: handleTabSelectedClick "),a.setState({tabSelected:e.target.getAttribute("id")})},a.handleSubmitTransaction=function(e,t){console.log("### sum ",e),console.log("### category ",t);var n=a.state,l=n.date,c=n.transactions,o=void 0===c?[]:c,r={date:l.format("DD-MM-YYYY"),category:t,sum:e},i=Object(s.a)(o);i.push(r),a.setState({transactions:I()(i,["date"])}),console.log(a.state.transactions)};var n,l=localStorage.getItem("state");return null!==l?(l=JSON.parse(l),n=Object(r.a)({},l,{date:N()(l.date)})):n={date:N()(),tabSelected:"expanse",transactions:[]},a.state=n,a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){var n=this.state.date;localStorage.setItem("state",JSON.stringify(Object(r.a)({},this.state,{date:n.format()}))),console.log("###: localStorage: ",localStorage)}},{key:"render",value:function(){var e=this,t=this.state,a=t.date,n=t.tabSelected,c=t.transactions;return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"\u0420\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u0431\u044e\u0434\u0436\u0435\u0442"),l.a.createElement("div",{className:"row"},l.a.createElement("p",null,l.a.createElement(v.a,{value:a.format("DD.MM.YYYY"),onChange:this.handleCalendarChange}))),l.a.createElement("div",{className:"row"},l.a.createElement(b.a,{size:"s",view:"action",onClick:this.handleSubstractDay},l.a.createElement(p.a,null)),l.a.createElement(b.a,{size:"s",view:"action",onClick:this.handleAddDay},l.a.createElement(f.a,null))),l.a.createElement("div",{className:"row"},l.a.createElement(w.a,null,l.a.createElement(O.a,{onClick:this.handleTabSelectedClick,checked:"expanse"===n,id:"expanse"},"\u0420\u0430\u0441\u0445\u043e\u0434\u044b"),l.a.createElement(O.a,{onClick:this.handleTabSelectedClick,checked:"incomes"===n,id:"incomes"},"\u0414\u043e\u0445\u043e\u0434\u044b"))),l.a.createElement("div",{className:"row"},"expanse"===n?l.a.createElement(x,{onSubmit:this.handleSubmitTransaction}):l.a.createElement(A,{onSubmit:this.handleSubmitTransaction})),l.a.createElement("div",{className:"row"},"\u041d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f: ",this.renderAmount(this.onToday())),l.a.createElement("div",{className:"row"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("td",null,"\u0414\u0430\u0442\u0430:"),l.a.createElement("td",null,"\u0421\u0443\u043c\u043c\u0430:"),l.a.createElement("td",null,"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f:")),l.a.createElement("tbody",null,c.filter(function(e){var t=e.date;return N()(t,"DD.MM.YYYY").isSame(a,"month")}).map(function(t,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",null,t.date),l.a.createElement("td",null,"\u0421\u0443\u043c\u043c\u0430: ",e.renderAmount(t.sum)),l.a.createElement("td",null,"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f: ",t.category))})))))}},{key:"renderAmount",value:function(e){var t={value:e,currency:{code:"RUR",minority:1}};return l.a.createElement(B.a,{amount:t})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[100,1,2]]]);
//# sourceMappingURL=main.b0fae67c.chunk.js.map