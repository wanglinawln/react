(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(8),r=n.n(c),l=n(6),s=n(1),i=n(2),u=n(4),d=n(3),m=n(5),p=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"changeItem",value:function(e){this.props.change(e)}},{key:"delItem",value:function(e){this.props.del(e)}},{key:"render",value:function(){var e=this,t=this.props.todo;return o.a.createElement("div",{className:"box"},o.a.createElement("span",{className:"word"},"\u6b63\u5728\u8fdb\u884c"),o.a.createElement("span",{className:"num"},this.props.doing),o.a.createElement("ul",{className:"doing"},t.map((function(t,n){return!1===t.done?o.a.createElement("li",{key:n},o.a.createElement("input",{type:"checkbox",onChange:function(){return e.changeItem(n)}}),t.title,o.a.createElement("button",{onClick:function(){return e.delItem(n)}},"-")):""}))),o.a.createElement("span",{className:"word"},"\u5df2\u7ecf\u5b8c\u6210"),o.a.createElement("span",{className:"num"},this.props.done),o.a.createElement("ul",{className:"done"},t.map((function(t,n){return!0===t.done?o.a.createElement("li",{key:n},o.a.createElement("input",{type:"checkbox",checked:"checked",onChange:function(){return e.changeItem(n)}}),t.title,o.a.createElement("button",{onClick:function(){return e.delItem(n)}},"-")):""}))))}}]),t}(a.Component),h=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).handleInput=function(e){13===e.keyCode&&""!==e.value&&(n.props.add(e.target.value),e.target.value="")},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"tab"},o.a.createElement("span",null,"ToDoList"),o.a.createElement("input",{type:"text",placeholder:"\u6dfb\u52a0ToDo",onKeyDown:this.handleInput}))}}]),t}(a.Component),f=(n(14),function(e){function t(){var e;Object(s.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).addItem=function(t){var n={title:t,done:!1};e.setState({todo:[].concat(Object(l.a)(e.state.todo),[n])})},e.change=function(t){var n=Object(l.a)(e.state.todo);!1===n[t].done?n[t].done=!0:n[t].done=!1,e.setState({todo:n})},e.del=function(t){var n=Object(l.a)(e.state.todo);n.splice(t,1),e.setState({todo:n})};var n=JSON.parse(localStorage.getItem("todo"));return e.state=null===n?{todo:[]}:{todo:n},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){localStorage.setItem("todo",JSON.stringify(this.state.todo));var e=0,t=0;return this.state.todo.map((function(n){return!1===n.done?e++:t++,""})),o.a.createElement("div",null,o.a.createElement(h,{add:this.addItem}),o.a.createElement(p,{todo:this.state.todo,change:this.change,del:this.del,doing:e,done:t}))}}]),t}(a.Component));n(15);r.a.render(o.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.fd40857d.chunk.js.map