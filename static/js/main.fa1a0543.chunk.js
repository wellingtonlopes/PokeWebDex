(this.webpackJsonppokewebdex=this.webpackJsonppokewebdex||[]).push([[0],{20:function(e,a,t){e.exports=t(58)},25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},58:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(19),l=t.n(c),s=(t(25),t(2)),m=t(3),o=t(5),b=t(4);t(26),t(27),t(28);var i=function(e){var a=e.name,t=e.type,r=e.sprite;return n.a.createElement("div",{className:"tc w5 bg-red dib br3 pa3 ma2 grow bw2 shadow-5"},n.a.createElement("div",{className:"flex flex-column items-center"},n.a.createElement("img",{src:r,className:"bg-light-yellow br-100 ba b--black-10",alt:"".concat(a)}),n.a.createElement("h2",{className:"bg-yellow br1 ma2 pa2"},a),n.a.createElement("div",{className:"h3 flex flex-column justify-center"},t.map((function(e){switch(e){case"water":return n.a.createElement("p",{className:"ma1 br2 ba b--black-30 pa1 bg-water"},e);case"grass":return n.a.createElement("p",{className:"ma1 br2 ba b--black-30 pa1 bg-grass"},e);case"poison":return n.a.createElement("p",{className:"ma1 br2 ba b--black-30 pa1 bg-poison"},e);case"fire":return n.a.createElement("p",{className:"ma1 br2 ba b--black-30 pa1 bg-fire"},e);case"flying":return n.a.createElement("p",{className:"ma1 br2 ba b--black-30 pa1 bg-flying"},e);case"bug":return n.a.createElement("p",{className:"ma1 br2 ba b--black-30 pa1 bg-bug"},e);case"fighting":return n.a.createElement("p",{className:"ma1 br2 ba b--black-30 pa1 bg-fighting"},e);case"normal":return n.a.createElement("p",{className:"ma1 br2 ba b--black-30 pa1 bg-normal"},e);case"dragon":return n.a.createElement("p",{className:"ma1 br2 ba b--black-30 pa1 bg-dragon"},e);case"rock":return n.a.createElement("p",{className:"ma1 br2 ba b--black-30 pa1 bg-rock"},e);case"ground":return n.a.createElement("p",{className:"ma1 br2 ba b--black-30 pa1 bg-ground"},e);case"electric":return n.a.createElement("p",{className:"ma1 br2 ba b--black-30 pa1 bg-electric"},e);case"psychic":return n.a.createElement("p",{className:"ma1 br2 ba b--black-30 pa1 bg-psychic"},e);case"ghost":return n.a.createElement("p",{className:"ma1 br2 ba b--black-30 pa1 bg-ghost"},e);case"fairy":return n.a.createElement("p",{className:"ma1 br2 ba b--black-30 pa1 bg-fairy"},e);case"dark":return n.a.createElement("p",{className:"ma1 br2 ba b--black-30 pa1 bg-dark"},e);case"steel":return n.a.createElement("p",{className:"ma1 br2 ba b--black-30 pa1 bg-steel"},e);case"ice":return n.a.createElement("p",{className:"ma1 br2 ba b--black-30 pa1 bg-ice"},e);default:return n.a.createElement("p",{className:"ma1 br2 ba b--black-30 pa1 bg-default"},e)}})))))};var u=function(e){var a=e.pokemons;return n.a.createElement(r.Fragment,null,a.map((function(e,a){return n.a.createElement(i,{key:a,name:e.forms[0].name,type:e.types.map((function(e){return e.type.name})),sprite:e.sprites.front_default})})))},p=function(e){Object(o.a)(t,e);var a=Object(b.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).state={hasError:!1},r}return Object(m.a)(t,[{key:"componentDidCatch",value:function(e,a){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?n.a.createElement("h1",null,"Oops, something wrong is not right."):this.props.children}}]),t}(r.Component),g=function(e){var a=e.searchChange;return n.a.createElement(r.Fragment,null,n.a.createElement("div",{className:"pa2"},n.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search Pok\xe9mons",onChange:a})))},h=function(e){return n.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)},f=function(e){Object(o.a)(c,e);var a=Object(b.a)(c);function c(){var e;return Object(s.a)(this,c),(e=a.call(this)).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={pokemons:[],searchfield:""},e}return Object(m.a)(c,[{key:"componentDidMount",value:function(){var e=this;(new(t(29))).getPokemonsList({limit:150,offset:1}).then((function(a){var t=a.results.map((function(e){return e.url}));Promise.all(t.map((function(e){return fetch(e)}))).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(a){e.setState({pokemons:a})}))}))}},{key:"render",value:function(){var e=this.state,a=e.pokemons,t=e.searchfield,c=a.filter((function(e){return e.forms[0].name.toLowerCase().includes(t.toLowerCase())}));return a.length?n.a.createElement(r.Fragment,null,n.a.createElement("div",{className:"tc"},n.a.createElement("div",{className:"flex items-center justify-center"},n.a.createElement("h1",{className:"f1 pa3 w6 br2 ba b--dark-red bg-yellow"},"PokeWebDex")),n.a.createElement(g,{searchChange:this.onSearchChange}),n.a.createElement(h,null,n.a.createElement(p,null,n.a.createElement(u,{pokemons:c}))))):n.a.createElement("h1",{className:"tc pv7"},"Loading...")}}]),c}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(57);l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.fa1a0543.chunk.js.map