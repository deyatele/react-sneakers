(this.webpackJsonpreactsneakers=this.webpackJsonpreactsneakers||[]).push([[0],{16:function(e,t,c){e.exports={card:"Card_card__3eTXU",favorite:"Card_favorite__3qs2S",plus:"Card_plus__2xlPS"}},32:function(e,t,c){e.exports={spinner:"Loader_spinner__2TW73"}},40:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var r=c(1),s=c.n(r),i=c(31),a=c.n(i),n=c(9),l=(c(40),c(41),c(11)),o=c(4),j=c(2),d=s.a.createContext(),b=c(10),u=c.n(b),m=c(16),x=c.n(m),O=c(0);function h(e){var t=e.item,c=e.cartItem,s=e.isFavorite,i=e.isBay,a=void 0!==i&&i,n=Object(r.useContext)(d),l=n.addToCard,o=n.onFavorite,j=n.disableBattonAdd,b=n.removeItem,u=!!c,m=t.id,h=t.price,g=t.title,f=t.imageUrl;return Object(O.jsxs)("div",{id:m,className:x.a.card,children:[!a&&Object(O.jsx)("div",{className:x.a.favorite,onClick:function(){return o({id:m,title:g,imageUrl:f,isFavorite:s})},children:Object(O.jsx)("img",{src:s?"img/likeyes.png":"img/like-no.svg",alt:"Unliked"})}),Object(O.jsx)("img",{width:133,height:112,src:f,alt:"\u041a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0430"}),Object(O.jsx)("h5",{children:g}),Object(O.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(O.jsxs)("div",{className:"d-flex flex-column",children:[Object(O.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),Object(O.jsx)("b",{children:h.toLocaleString("ru-RU",{style:"currency",currency:"RUB",minimumFractionDigits:0})})]}),!a&&Object(O.jsx)("button",{className:x.a.plus,onClick:u?function(){return b(c)}:function(){return l(t)},disabled:j,children:Object(O.jsx)("img",{src:u?"img/up.svg":"img/plus.svg",alt:"Plus"})})]})]})}c(32);var g=c(33);var f=function(){return Object(O.jsxs)(g.a,{speed:2,width:220,height:250,viewBox:"0 0 150 200",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(O.jsx)("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"150",height:"100"}),Object(O.jsx)("rect",{x:"0",y:"145",rx:"5",ry:"5",width:"93",height:"15"}),Object(O.jsx)("rect",{x:"0",y:"170",rx:"8",ry:"8",width:"80",height:"24"}),Object(O.jsx)("rect",{x:"1",y:"115",rx:"5",ry:"5",width:"150",height:"15"}),Object(O.jsx)("rect",{x:"118",y:"162",rx:"8",ry:"8",width:"32",height:"32"})]})};function v(){var e=Object(r.useContext)(d),t=e.items,c=e.searchValue,s=e.setSearchValue,i=e.onSeachInput,a=e.isFavorites,n=e.cartItems;return Object(O.jsxs)("div",{className:"content p-40",children:[Object(O.jsxs)("div",{className:"d-flex align-center justify-between mb-40",children:[Object(O.jsx)("h1",{children:c?"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: ".concat(c):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438!!"}),Object(O.jsxs)("div",{className:"search-block d-flex",children:[Object(O.jsx)("img",{src:"img/search.svg",alt:"Search"}),c&&Object(O.jsx)("img",{className:"clear cu-p",onClick:function(){return s("")},src:"img/btn-remove-hover.svg",alt:"Clear"}),Object(O.jsx)("input",{onChange:i,value:c,placeholder:"\u041f\u043e\u0438\u0441\u043a"})]})]}),0===t.length?Object(O.jsx)("div",{className:"d-flex justify-between flex-wrap ",children:Object(l.a)(Array(8)).map((function(e,t){return Object(O.jsx)("div",{className:"mt-10 mb-20 mr-30",children:Object(O.jsx)(f,{})},t)}))}):Object(O.jsx)("div",{className:"d-flex flex-wrap ",children:t.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())})).map((function(e){return Object(O.jsx)(h,{item:e,isFavorite:!!a.includes(e.id),cartItem:n.find((function(t){return t.id===e.id}))},e.id)}))})]})}var p=function(e){var t=e.title,c=e.description,r=e.image,s=e.imageDescription;e.onClose;return Object(O.jsxs)("div",{className:"d-flex justify-center flex-column align-center",children:[Object(O.jsx)("img",{src:r,alt:s,width:70,height:70}),Object(O.jsx)("h2",{children:t}),Object(O.jsx)("div",{className:"no-item opacity-6 ",children:c}),Object(O.jsx)(n.b,{to:"/",children:Object(O.jsxs)("button",{className:"greenButton",children:[Object(O.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})})]})};function N(){var e=Object(r.useContext)(d),t=e.items,c=e.isFavorites,s=e.cartItems;return Object(O.jsxs)("div",{className:"content p-40",children:[Object(O.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(O.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),0===c.length?Object(O.jsx)("div",{className:"d-flex justify-center flex-wrap ",children:Object(O.jsx)(p,{title:"\u0417\u0430\u043a\u043b\u0430\u0434\u043e\u043a \u043d\u0435\u0442 :(",description:"\u0412\u044b \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u043b\u0438 \u0432 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438",image:"img/smile-amaze.svg",imageDescription:"\u0423\u0434\u0438\u0432\u043b\u0435\u043d"})}):Object(O.jsx)("div",{className:"d-flex flex-wrap",children:t.map((function(e){return c.includes(e.id)&&Object(O.jsx)(h,{item:e,isFavorite:!0,cartItem:s.find((function(t){return t.id===e.id}))},e.id)}))})]})}var y=function(){return{totalPrice:Object(r.useContext)(d).cartItems.reduce((function(e,t){return t.price+e}),0)}};function w(e){var t=y().totalPrice;return Object(O.jsxs)("header",{className:"d-flex justify-between align-center p-40",children:[Object(O.jsx)(n.b,{to:"/",children:Object(O.jsxs)("div",{className:"d-flex align-center",children:[Object(O.jsx)("img",{width:40,height:40,src:"img/logo.png",alt:"Logo"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{className:"text-uppercase",children:"React Sneakers"}),Object(O.jsx)("p",{className:"opacity-5",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]})}),Object(O.jsx)("div",{children:Object(O.jsxs)("ul",{className:"d-flex",children:[Object(O.jsxs)("li",{className:"mr-15 cu-p",onClick:e.onClickCard,children:[Object(O.jsx)("img",{width:18,height:18,src:"img/basket.svg",alt:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(O.jsx)("span",{children:t.toLocaleString("ru-RU",{style:"currency",currency:"RUB",minimumFractionDigits:0})})]}),Object(O.jsx)("li",{className:"mr-30 cu-p",children:Object(O.jsx)(n.b,{to:"/favorites",children:Object(O.jsx)("img",{width:18,height:18,src:"img/favorite.svg",alt:"\u0417\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})})}),Object(O.jsx)("li",{children:Object(O.jsx)(n.b,{to:"/bascet",children:Object(O.jsx)("img",{width:18,height:18,src:"img/union.svg",alt:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"})})})]})})]})}var S=c(21),C=c.n(S),k=c(35),I=function(e){var t=e.onOrder,c=e.disabled,s=Object(r.useContext)(d),i=s.removeItem,a=s.cartItems,n=y().totalPrice;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"items",children:a.map((function(e){return Object(O.jsxs)("div",{className:"cartItem d-flex aling-center mb-20",children:[Object(O.jsx)("div",{style:{backgroundImage:"url(".concat(e.imageUrl,")")},className:"cartItemImg"}),Object(O.jsxs)("div",{className:"mr-20 flex",children:[Object(O.jsx)("p",{className:"mb-5",children:e.title}),Object(O.jsx)("b",{children:e.price.toLocaleString("ru-RU",{style:"currency",currency:"RUB",minimumFractionDigits:0})})]}),Object(O.jsx)("img",{onClick:function(){return i(e)},className:"removeBtn",src:"img/btn-remove-hover.svg",alt:"Close"})]},e.id)}))}),Object(O.jsxs)("div",{className:"cartTotalBlock",children:[Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(O.jsx)("div",{}),Object(O.jsx)("b",{children:n.toLocaleString("ru-RU",{style:"currency",currency:"RUB"})})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%:"}),Object(O.jsx)("div",{}),Object(O.jsx)("b",{children:(.05*n).toLocaleString("ru-RU",{style:"currency",currency:"RUB"})})]})]}),Object(O.jsxs)("button",{className:"greenButton",onClick:t,disabled:c,children:[Object(O.jsx)("img",{src:"img/arrow.svg",alt:"arrow"}),"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"]})]})]})},B=function(e){var t=e.title,c=e.description,s=e.image,i=e.buttonLink,a=(e.isOrder,Object(r.useContext)(d).onClose);return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"cartEmpty aling-center",children:[Object(O.jsx)("img",{className:"mb-20",width:"120px",height:"120px",src:s,alt:"Basket"}),Object(O.jsx)("h2",{children:t}),Object(O.jsx)("p",{className:"opacity-6",children:c}),Object(O.jsxs)("button",{onClick:a,className:"greenButton",children:[Object(O.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"}),i]})]})})};function F(e){var t=e.cartOpened,c=Object(r.useContext)(d),s=c.onClose,i=c.setCartItems,a=c.cartItems,l=void 0===a?[]:a,j=Object(r.useState)(!1),b=Object(o.a)(j,2),m=b[0],x=b[1],h=Object(r.useState)(null),g=Object(o.a)(h,2),f=g[0],v=g[1],p=Object(r.useState)(!1),N=Object(o.a)(p,2),y=N[0],w=N[1],S=function(){var e=Object(k.a)(C.a.mark((function e(){var t,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),e.next=4,u.a.post("https://61082c6bd73c6400170d3875.mockapi.io/orders",{order:l});case 4:t=e.sent,c=t.data,v(c.id),x(!0),i([]),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),alert("\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u043d\u0435 \u0441\u043e\u0437\u0434\u0430\u043d :(. \u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0438 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437");case 14:w(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:t?"overlay visible":"overlay",onClick:function(e){return"overlay visible"===e.target.className&&s()},children:Object(O.jsxs)("div",{className:"drawer",children:[Object(O.jsxs)("h2",{className:"d-flex justify-between mb-30 ",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430"," ",Object(O.jsx)("img",{className:"removeBtn cu-p",onClick:s,src:"img/btn-remove-hover.svg",alt:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})]}),l.length>0?Object(O.jsx)(I,{onOrder:S,disabled:y}):Object(O.jsx)(B,{isOrder:m,title:m?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430",description:m?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(f," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437.",buttonLink:m?Object(O.jsx)(n.b,{to:"bascet",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043c\u043e\u0438 \u043f\u043e\u043a\u0443\u043f\u043a\u0438"}):"\u0412\u0435\u0440\u043d\u0443\u0442\u0441\u044f \u043d\u0430\u0437\u0430\u0434",image:m?"img/order.svg":"img/empty-cart.jpg"})]})})}var U=function(e){var t=e.cartOpened,c=Object(r.useState)([]),s=Object(o.a)(c,2),i=s[0],a=s[1],n=Object(r.useState)(!1),j=Object(o.a)(n,2),d=j[0],b=j[1];Object(r.useEffect)((function(){t||(b(!0),m())}),[t]);var m=function(){u.a.get("https://61082c6bd73c6400170d3875.mockapi.io/orders").then((function(e){a(e.data),b(!1)})).catch((function(e){b(!1),console.log(e)}))};return Object(O.jsxs)("div",{className:"content p-40",children:[Object(O.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(O.jsx)("h1",{children:"\u041c\u043e\u0438 \u043f\u043e\u043a\u0443\u043f\u043a\u0438"})}),d?Object(O.jsx)("div",{className:"d-flex flex-wrap ",children:Object(l.a)(Array(4)).map((function(e,t){return Object(O.jsx)("div",{className:"mt-20 mb-20 mr-30",children:Object(O.jsx)(f,{})},t)}))}):0===i.length?Object(O.jsx)("div",{className:"d-flex justify-center flex-wrap ",children:Object(O.jsx)(p,{title:"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0437\u0430\u043a\u0430\u0437\u043e\u0432",description:Object(O.jsxs)("p",{children:["\u0412\u044b \u043d\u0438\u0449\u0435\u0431\u0440\u043e\u0434? ",Object(O.jsx)("br",{}),"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d \u0437\u0430\u043a\u0430\u0437."]}),image:"img/smile-sad.svg",imageDescription:"\u0413\u0440\u0443\u0441\u0442\u0438\u0442"})}):Object(O.jsx)("div",{className:"d-flex flex-wrap flex-column",children:i.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h2",{className:"mt-10 d-flex justify-between pl-10 pr-10",children:["\u0417\u0430\u043a\u0430\u0437 #",e.id,Object(O.jsx)("span",{className:"cp",onClick:function(){return t=e,u.a.delete("https://61082c6bd73c6400170d3875.mockapi.io/orders/".concat(t.id)),void a((function(e){return e.filter((function(e){return e.id!==t.id}))}));var t},children:"x"})]}),Object(O.jsx)("div",{className:"d-flex flex-wrap",children:e.order.map((function(e){return Object(O.jsx)(h,{item:e,cartItem:e,isBay:!0},e.id)}))})]},e.id)}))})]})};var R=function(){var e=s.a.useState([]),t=Object(o.a)(e,2),c=t[0],i=t[1],a=s.a.useState(!1),n=Object(o.a)(a,2),b=n[0],m=n[1],x=s.a.useState([]),h=Object(o.a)(x,2),g=h[0],f=h[1],p=s.a.useState(""),y=Object(o.a)(p,2),S=y[0],C=y[1],k=s.a.useState(!1),I=Object(o.a)(k,2),B=I[0],R=I[1],_=localStorage.getItem("favorites")?JSON.parse(localStorage.getItem("favorites")):[],L=s.a.useState(_),J=Object(o.a)(L,2),A=J[0],D=J[1];Object(r.useEffect)((function(){u.a.get("https://61082c6bd73c6400170d3875.mockapi.io/items").then((function(e){f(e.data)})).catch((function(e){return console.log(e)}));try{var e=localStorage.getItem("bascet")?JSON.parse(localStorage.getItem("bascet")):[];i(e)}catch(t){console.log(t)}}),[]);var P=function(e){if(e.isFavorite){var t=localStorage.getItem("favorites")?JSON.parse(localStorage.getItem("favorites")):[];t=t.filter((function(t){return t!==e.id})),D(t),localStorage.setItem("favorites",JSON.stringify(t))}else{var c=localStorage.getItem("favorites")?JSON.parse(localStorage.getItem("favorites")):[],r=[e.id];c=[].concat(Object(l.a)(c),r),D(c),localStorage.setItem("favorites",JSON.stringify(c))}},T=function(e){i((function(t){return[].concat(Object(l.a)(t),[e])}))};Object(r.useEffect)((function(){try{R(!0),localStorage.setItem("bascet",JSON.stringify(c))}catch(e){console.log(e)}R(!1)}),[c]);var E=function(e){i((function(t){return t.filter((function(t){return t.id!==e.id}))}))};return Object(O.jsx)(d.Provider,{value:{items:g,searchValue:S,setSearchValue:C,onSeachInput:function(e){C(e.target.value)},isFavorites:A,addToCard:T,onFavorite:P,cartItems:c,disableBattonAdd:B,removeItem:E,onClose:function(){m(!1)},setCartItems:i},children:Object(O.jsxs)("div",{className:"wrapper clear",children:[Object(O.jsx)(F,{cartOpened:b}),Object(O.jsx)(w,{onClickCard:function(){m(!0)}}),Object(O.jsx)(j.a,{path:"/",exact:!0,children:Object(O.jsx)(v,{onRemove:function(e){return E(e)}})}),Object(O.jsx)(j.a,{path:"/favorites",children:Object(O.jsx)(N,{items:g,isFavorites:A,addToCard:T,cartItems:c,onFavorite:P,onRemove:function(e){return E(e)},disableBattonAdd:B})}),Object(O.jsx)(j.a,{path:"/bascet",children:Object(O.jsx)(U,{cartOpened:b})})]})})};a.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(n.a,{children:Object(O.jsx)(R,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.aeacfc20.chunk.js.map