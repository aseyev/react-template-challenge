(this["webpackJsonpchallenge-app"]=this["webpackJsonpchallenge-app"]||[]).push([[0],[,function(e,a,t){e.exports={page_wrapper:"page_page_wrapper__6PxW5",header:"page_header__2mXA8",cards_list:"page_cards_list__1ZsNW",card_test:"page_card_test__19bie",img_test:"page_img_test__3FqlG",card:"page_card__21gAS",img_block:"page_img_block__3wID-",paginator:"page_paginator__2ZI1N",title:"page_title__20Hm6",date_from:"page_date_from__26vIV",rating:"page_rating__35ZKN",price:"page_price__363Ij",red:"page_red__1WOW6",gray:"page_gray__1-oGi",button:"page_button__1LqjM",button_current:"page_button_current__sAhHE",button_next:"page_button_next__3a4kL",preloader_position:"page_preloader_position__ukNoa"}},,,,,,function(e,a,t){e.exports=t.p+"static/media/circles\u0421ircle.78eb393d.svg"},function(e,a,t){e.exports=t.p+"static/media/mockup-card.9c3e8757.jpg"},,,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),o=t.n(c),s=(t(17),t(18),t(4)),i=t(5),l=t(10),u=t(6),m=t(11),p=t(1),_=t.n(p),d=function(e){e.pages,e.currentPage;return r.a.createElement("div",{className:_.a.paginator},r.a.createElement("div",{className:_.a.button_current},"1"),r.a.createElement("div",{className:_.a.button},"2"),r.a.createElement("div",{className:_.a.button_next},">"))},g=function(e){return r.a.createElement("div",{className:_.a.header},r.a.createElement("p",null,"".concat(e.iMinOnPage+1," - ").concat(e.iMaxOnPage+1," from ").concat(e.cardsAllQuantity)))},h=t(9),f=t(7),v=t.n(f),E=function(){return r.a.createElement("div",{className:_.a.preloader_position},r.a.createElement("img",{src:v.a,alt:"loading..."}))},b=function(e){var a=Object(n.useState)(!0),t=Object(h.a)(a,2),c=t[0],o=t[1];return Object(n.useEffect)((function(){fetch(e.url,{headers:{"Content-Type":"image/png"},mode:"no-cors"}).then((function(e){e.ok&&o(!1)})).catch((function(e){console.log(e)}))}),[e.url]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:_.a.img_block},c&&r.a.createElement(E,null),!c&&r.a.createElement("img",{className:_.a.img,src:e.url,alt:"lorempixel"})))},N=function(e){var a=e.props,t=a;return a.length>88&&(t=a.slice(0,85)+"..."),r.a.createElement("div",{className:_.a.title},t)},y=function(e){var a,t=e.props,n=new Date,c=new Date(t),o=Math.floor((n-c)/864e5);return r.a.createElement("div",{className:_.a.date_from},(a=o)/365>1?"More than 1 year ago":a/30>1?"More than 1 month ago":a/7>1?"More than 1 week ago":0===a?"Posted today":"Out of Date")},O=function(e){for(var a=[],t=e.props,n=function(e){a.push(r.a.createElement("div",{key:e,className:e<t?_.a.red:_.a.gray},"\u2605"))},c=0;c<5;c++)n(c);return r.a.createElement("div",{className:_.a.rating},a)},k=function(e){var a=e.props;return r.a.createElement("div",{className:_.a.card},r.a.createElement(b,{url:a.image_url}),r.a.createElement(N,{props:a.title}),r.a.createElement(y,{props:a.created_at}),r.a.createElement(O,{props:a.vote}),r.a.createElement("div",{className:_.a.price},"\u0e3f".concat(a.price.toFixed(2))))},P=(t(8),function(e){var a=e.cardsForPage.map((function(e,a){return r.a.createElement(k,{key:a,props:e})}));return r.a.createElement("div",{className:_.a.cards_list},a)}),w=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(l.a)(this,Object(u.a)(a).call(this,e))).state={error:null,isLoaded:!1,cards:[],currentPageNumber:1,cardsOnPage:4,cardsAllQuantity:0},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("./list_ext.json").then((function(e){return e.json()})).then((function(a){e.setState({isLoaded:!0,cards:a,cardsAllQuantity:a.length})}),(function(a){e.setState({isLoaded:!0,error:a})}))}},{key:"render",value:function(){if(!this.state.isLoaded)return r.a.createElement(E,null);var e=(this.state.currentPageNumber-1)*this.state.cardsOnPage,a=this.state.currentPageNumber*this.state.cardsOnPage-1;a>this.state.cardsAllQuantity&&(a=this.state.cardsAllQuantity-1);var t=Math.ceil(this.state.cardsAllQuantity/this.state.cardsOnPage),n=this.state.cards.slice(e,a+1);return console.log(this.state),console.log(n),console.log(e," ",a," ",t),r.a.createElement("div",{className:_.a.page_wrapper},r.a.createElement(g,{iMinOnPage:e,iMaxOnPage:a,cardsAllQuantity:this.state.cardsAllQuantity}),r.a.createElement(P,{cardsForPage:n}),r.a.createElement(d,null))}}]),a}(r.a.Component);var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.1036e2f5.chunk.js.map