(this.webpackJsonppokewebdex=this.webpackJsonppokewebdex||[]).push([[0],{20:function(e,t,n){e.exports=n(56)},25:function(e,t,n){},26:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),c=n.n(o),l=(n(25),n(2)),s=n(3),i=n(5),m=n(4);n(26);var u=function(e){var t=e.name,n=e.type,a=e.sprite;return r.a.createElement("div",{className:"tc w5 bg-red dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("div",{className:"flex flex-column items-center"},r.a.createElement("img",{src:a,className:"bg-light-yellow br-100 ba b--black-10",alt:"".concat(t)}),r.a.createElement("h2",{style:{textTransform:"capitalize"}},t),r.a.createElement("div",{className:"h3 flex flex-column justify-center"},n.map((function(e){return r.a.createElement("p",{className:"ma1 br2 ba b--black-20 pa1 bg-light-green",style:{textTransform:"capitalize"}},e)})))))};var h=function(e){var t=e.pokemons;return r.a.createElement(a.Fragment,null,t.map((function(e,t){return r.a.createElement(u,{key:t,name:e.forms[0].name,type:e.types.map((function(e){return e.type.name})),sprite:e.sprites.front_default})})))},f=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(s.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oops, something wrong is not right."):this.props.children}}]),n}(a.Component),p=function(e){var t=e.searchChange;return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search Pok\xe9mons",onChange:t})))},d=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)},b=function(e){Object(i.a)(o,e);var t=Object(m.a)(o);function o(){var e;return Object(l.a)(this,o),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={pokemons:[],searchfield:""},e}return Object(s.a)(o,[{key:"componentDidMount",value:function(){var e=this;(new(n(27))).getPokemonsList({limit:150,offset:1}).then((function(t){var n=t.results.map((function(e){return e.url}));Promise.all(n.map((function(e){return fetch(e)}))).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(t){e.setState({pokemons:t})}))}))}},{key:"render",value:function(){var e=this.state,t=e.pokemons,n=e.searchfield,o=t.filter((function(e){return e.forms[0].name.toLowerCase().includes(n.toLowerCase())}));return t.length?r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"PokeWebDex"),r.a.createElement(p,{searchChange:this.onSearchChange}),r.a.createElement(d,null,r.a.createElement(f,null,r.a.createElement(h,{pokemons:o}))))):r.a.createElement("h1",{className:"tc pv7"},"Loading...")}}]),o}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(55);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.cb05a0c8.chunk.js.map