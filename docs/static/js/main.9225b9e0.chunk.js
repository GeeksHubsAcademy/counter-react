(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),s=(n(14),n(1)),u=n(2),m=n(4),i=n(3),p=n(5),l=(n(16),function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(m.a)(this,Object(i.a)(e).call(this,t))).increment=function(){var t=Number(n.props.amount)||1;t>0?!n.props.max||n.props.max>=n.state.count+t?n.setState({count:n.state.count+t}):n.setState({count:Number(n.props.from)||0}):t<0&&(!n.props.min||n.props.min<=n.state.count+t?n.setState({count:n.state.count+t}):n.setState({count:Number(n.props.from)||0}))},n.state={count:Number(t.from)||0},n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{onClick:this.increment,className:"counter"},o.a.createElement("h3",{className:this.state.count%2===0?"even":"odd"},this.state.count),o.a.createElement("small",null,o.a.createElement("pre",{style:{fontSize:this.state.count+"px"}},JSON.stringify(this.props))))}}]),e}(o.a.Component)),f=(n(18),function(t){function e(){return Object(s.a)(this,e),Object(m.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"App-header"},o.a.createElement(l,{amount:3}),o.a.createElement(l,{from:12}),o.a.createElement(l,{from:"hola",max:"6",amount:"3"}),o.a.createElement(l,{from:"33",amount:"-4"}))}}]),e}(a.Component));c.a.render(o.a.createElement(f,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(20)}},[[8,2,1]]]);
//# sourceMappingURL=main.9225b9e0.chunk.js.map