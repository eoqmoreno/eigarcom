(this.webpackJsonpmeuplano=this.webpackJsonpmeuplano||[]).push([[0],{21:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return r}));var s=a(13),c=Object(s.createAction)("MUDAR_ESTADO_MESA"),r=function(e){return function(t,a){t(c(e))}}},38:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t),a.d(t,"reducerMesa",(function(){return n}));var s=a(22),c=a(13),r=(a(42),a(21)),n=Object(c.createReducer)({mesas:[{mesa:"1",estado:!0},{mesa:"2",estado:!1},{mesa:"3",estado:!1},{mesa:"4",estado:!1},{mesa:"5",estado:!0},{mesa:"6",estado:!1},{mesa:"7",estado:!1},{mesa:"8",estado:!1},{mesa:"9",estado:!1},{mesa:"10",estado:!1}]},Object(s.a)({},r.b,(function(e,t){e.mesas[t.payload-1].estado=!e.mesas[t.payload-1].estado})))},45:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(0),r=a.n(c),n=a(17),o=a.n(n),i=a(14),p=(a(38),a(39),a(15)),d=a(3),l=a(4),u=a(5),m=a(7),j=a(6),b=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).css=s.props.css,s}return Object(u.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"col-4 text-center",children:Object(s.jsx)(p.b,{to:"/mesa"+this.props.numero,children:Object(s.jsxs)("span",{className:this.props.css,children:["Mesa ",this.props.numero]})})})}}]),a}(r.a.Component),h=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).a=s.props,s}return Object(u.a)(a,[{key:"render",value:function(){var e=[];return this.props.mesas&&this.props.mesas.map((function(t,a){return t.estado?e.push(Object(s.jsx)(b,{numero:t.mesa,css:"aberta p-3"},a)):e.push(Object(s.jsx)(b,{numero:t.mesa,css:"mesa p-3"},a))})),Object(s.jsx)("div",{className:"row",children:e})}}]),a}(r.a.Component),O=Object(i.b)((function(e,t){return{mesas:e.mesa.mesas}}))(h),f=a.p+"static/media/logo.2b2ba6f4.svg",x=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"navbar row p-2",children:[Object(s.jsx)("div",{className:"col-2",children:Object(s.jsx)(p.b,{to:"/",children:Object(s.jsx)("img",{alt:"Logo do Ei Gar\xe7om",src:f,className:"p-2"})})}),Object(s.jsxs)("div",{className:"col-8 text-right",children:[Object(s.jsxs)(p.c,{to:"/",exact:!0,className:"btn p-2",children:[Object(s.jsx)("span",{className:"fa fa-home","aria-hidden":"true"})," In\xedcio"]}),Object(s.jsxs)(p.c,{to:"/pagar",exact:!0,className:"btn p-2",children:[Object(s.jsx)("span",{className:"fa fa-money","aria-hidden":"true"})," Pagar"]})]})]})}}]),a}(r.a.Component),v=a(21),N=a(13),g=Object(N.createAction)("LIMPAR_PEDIDO"),C=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"row mb-5 col-8",children:[Object(s.jsxs)("span",{className:"col-8",children:["Pagamento ",this.props.local]}),Object(s.jsxs)("span",{className:"col-2 text-right",children:["R$ ",this.props.valor]})]})}}]),a}(r.a.Component),w=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).addParte=function(){var e={valor:s.state.valor};s.props.add(e),s.setState({valor:0})},s.onChangeValue=function(e){s.setState({valor:e.target.value})},s.state={valor:0},s}return Object(u.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"row col-10 mb-5",children:[Object(s.jsx)("input",{type:"number",onChange:this.onChangeValue,placeholder:"Valor",className:"col-7 p-2 btn"}),Object(s.jsx)("button",{className:"col-2 btn p-3 active",onClick:this.addParte,children:Object(s.jsx)("span",{className:"fa fa-plus-circle","aria-hidden":"true"})})]})}}]),a}(r.a.Component),P=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"row col-8 mb-5",children:[Object(s.jsxs)("span",{className:"col-1",children:[this.props.qtd,"x"]}),Object(s.jsxs)("span",{className:"col-7",children:[Object(s.jsx)("b",{children:this.props.produto}),Object(s.jsx)("br",{}),Object(s.jsx)("small",{children:this.props.obs})]}),Object(s.jsxs)("span",{className:"col-2 text-right",children:["R$ ",this.props.preco]})]})}}]),a}(r.a.Component),k=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).addParte=function(e){var t=s.state.restante,a=s.state.partes;t+=parseFloat(e.valor),s.state.total-t<0?alert("Valor maior que o necess\xe1rio!"):s.state.total-t==0?window.confirm("Pronto, sua conta foi paga!")&&(s.props.mudarEstado(s.props.match.params.id),s.props.limparPedidos(s.props.match.params.id)):(a.push(e),s.setState({partes:a,restante:t}))},s.pagarClick=function(){window.confirm("Sua conta foi paga! Deseja limpar os pedidos?")&&(s.props.mudarEstado(s.props.match.params.id),s.props.limparPedidos(s.props.match.params.id))},s.addClick=function(){s.setState({css:"mb-5 row col-10"})},s.soma=0,null!=s.props.mesas&&null!=s.props.pedidos&&s.props.mesas.map((function(e){e.mesa==s.props.match.params.id&&s.props.pedidos.map((function(t){t.mesa==e.mesa&&t.pedidos.map((function(e,t){s.soma+=parseFloat(e.preco)}))}))})),s.state={total:s.soma,partes:[],restante:0,css:"mb-5 row col-10 hide"},s}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=[];null!=this.props.mesas&&null!=this.props.pedidos&&this.props.mesas.map((function(a){a.mesa==e.props.match.params.id&&e.props.pedidos.map((function(e){e.mesa==a.mesa&&e.pedidos.map((function(e,a){parseFloat(e.preco),t.push(Object(s.jsx)(P,{produto:e.produto,qtd:e.qtd,preco:parseFloat(e.preco),obs:e.obs},a))}))}))}));var a=[];return null!=this.state.partes&&this.state.partes.map((function(e,t){a.push(Object(s.jsx)(C,{valor:e.valor,local:t+1},t))})),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("span",{className:"col-6 text-center mb-5 bold",children:"CONSUMO DA MESA"}),t,Object(s.jsx)("div",{className:"row col-10",children:Object(s.jsxs)("a",{className:"col-3 btn active p-3 text-center mb-5",children:[Object(s.jsx)("span",{className:"fa fa-plus","aria-hidden":"true"})," Pedido"]})}),Object(s.jsxs)("div",{className:"row col-10 footer",children:[Object(s.jsxs)("div",{className:"row col-10 mb-5",children:[Object(s.jsxs)("h3",{className:"col-10 text-center vermelho",children:["Total: R$ ",this.state.total]}),Object(s.jsx)("a",{className:"col-4 btn active text-center p-3",onClick:this.addClick,children:"Pagar parte"}),Object(s.jsx)("a",{className:"col-4 btn active text-center p-3",onClick:this.pagarClick,children:"Pagar total"})]}),Object(s.jsxs)("div",{className:this.state.css,children:[this.state.restante>0&&Object(s.jsx)("span",{className:"col-10 text-center mb-5 bold",children:"PAGAMENTOS"}),a,this.state.restante>0&&Object(s.jsxs)("span",{className:"col-10 text-center vermelho",children:["Restante: R$ ",this.state.total-this.state.restante]}),Object(s.jsx)(w,{add:this.addParte})]})]})]})}}]),a}(r.a.Component),y=Object(i.b)((function(e,t){return{mesas:e.mesa.mesas,pedidos:e.pedido.pedidos}}),(function(e){return{mudarEstado:function(t){e(Object(v.a)(t))},limparPedidos:function(t){e(function(e){return function(t,a){t(g(e))}}(t))}}}))(k),S=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).a=s.props,s}return Object(u.a)(a,[{key:"render",value:function(){var e=[];return null!=this.props.mesas&&this.props.mesas.map(function(t,a){if(t.estado)return e.push(Object(s.jsx)(b,{numero:t.mesa,css:"aberta p-3"},a))}.bind()),Object(s.jsx)("div",{className:"row",children:e})}}]),a}(r.a.Component),q=Object(i.b)((function(e,t){return{mesas:e.mesa.mesas}}))(S);var A=function(){return Object(s.jsxs)(p.a,{basename:"/eigarcom",children:[Object(s.jsx)(x,{}),Object(s.jsx)(d.a,{path:"/",exact:!0,children:Object(s.jsx)(O,{})}),Object(s.jsx)(d.a,{path:"/pagar",children:Object(s.jsx)(q,{})}),Object(s.jsx)(d.a,{path:"/mesa:id",component:y})]})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),s(e),c(e),r(e),n(e)}))},M=a(22),R=Object(N.createReducer)({pedidos:[{mesa:1,pedidos:[{qtd:1,produto:"Bai\xe3o",preco:"10.00",obs:"Sem verdura"},{qtd:1,produto:"Batata frita",preco:"10.00"},{qtd:1,produto:"Lingui\xe7a",preco:"5.00"}]},{mesa:5,pedidos:[{qtd:1,produto:"Bai\xe3o de dois",preco:"10.00",obs:"Sem verdura"},{qtd:1,produto:"Batata canoa",preco:"10.00"},{qtd:1,produto:"Lingui\xe7a",preco:"5.00"}]}]},Object(M.a)({},g,(function(e,t){e.pedidos.map((function(a,s){if(a.mesa==t.payload)return e.pedidos.splice(s,1)}))}))),F=(0,a(13).configureStore)({reducer:{mesa:a(41).reducerMesa,pedido:R}});o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(i.a,{store:F,children:Object(s.jsx)(A,{})})}),document.getElementById("root")),E()}},[[45,1,2]]]);
//# sourceMappingURL=main.fdbd5f03.chunk.js.map