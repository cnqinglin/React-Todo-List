(this["webpackJsonpreact-demo"]=this["webpackJsonpreact-demo"]||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports=n(20)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(8),s=n.n(i),c=n(1),l=n(2),r=n(4),u=n(3),d=n(5),h=(n(14),n(15),function(t){function e(){return Object(c.a)(this,e),Object(r.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return a.a.createElement("input",{type:"text",value:this.props.content,className:"TodoInput",onChange:this.changeTitle.bind(this),onKeyPress:this.submit.bind(this)})}},{key:"submit",value:function(t){"Enter"===t.key&&this.props.onSubmit(t)}},{key:"changeTitle",value:function(t){this.props.onChange(t)}}]),e}(o.Component)),p=(n(16),function(t){function e(){return Object(c.a)(this,e),Object(r.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"TodoItem"},a.a.createElement("input",{type:"checkbox",checked:"completed"===this.props.todo.status,onChange:this.toggle.bind(this)}),a.a.createElement("span",{className:"title"},this.props.todo.title),a.a.createElement("button",{onClick:this.delete.bind(this)},"\u5220\u9664"))}},{key:"toggle",value:function(t){this.props.onToggle(t,this.props.todo)}},{key:"delete",value:function(t){this.props.onDelete(t,this.props.todo)}}]),e}(o.Component));n(17),n(18);var m=n(6),b=n.n(m);b.a.init({appId:"pk0vzR4lHpYNoVUJhuV1L71I-9Nh9j0Va",appKey:"1fDDSPbetyosgjESkfoEaO64"}),(new(b.a.Object.extend("TestObject"))).save({words:"Hello World!"}).then((function(t){alert("LeanCloud Rocks!")}));var f=function(t){function e(t){var n,o;return Object(c.a)(this,e),(n=Object(r.a)(this,Object(u.a)(e).call(this,t))).state={newTodo:"",todoList:(o="todoList",JSON.parse(window.localStorage.getItem(o))||[])},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=this.state.todoList.filter((function(t){return!t.deleted})).map((function(e,n){return a.a.createElement("li",{key:n},a.a.createElement(p,{todo:e,onToggle:t.toggle.bind(t),onDelete:t.delete.bind(t)}))}));return a.a.createElement("div",{className:"App"},a.a.createElement("h1",{className:"title"},"\u6211\u7684\u5f85\u529e"),a.a.createElement("div",{className:"inputWrapper"},a.a.createElement(h,{content:this.state.newTodo,onChange:this.changeTitle.bind(this),onSubmit:this.addTodo.bind(this)})),a.a.createElement("ol",{className:"todoList"},e))}},{key:"componentDidUpdate",value:function(){var t,e;t="todoList",e=this.state.todoList,window.localStorage.setItem(t,JSON.stringify(e))}},{key:"toggle",value:function(t,e){e.status="completed"===e.status?"":"completed",this.setState(this.state)}},{key:"changeTitle",value:function(t){this.setState({newTodo:t.target.value,todoList:this.state.todoList})}},{key:"addTodo",value:function(t){this.state.todoList.push({id:v(),title:t.target.value,status:null,deleted:!1}),this.setState({newTodo:"",todoList:this.state.todoList})}},{key:"delete",value:function(t,e){e.deleted=!0,this.setState(this.state)}}]),e}(a.a.Component),g=0;function v(){return g+=1}var y=document.getElementById("root");s.a.render(a.a.createElement(f,null),y)}],[[9,1,2]]]);
//# sourceMappingURL=main.6fe669bd.chunk.js.map