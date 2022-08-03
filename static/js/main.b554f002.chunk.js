(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var i=c(6),s=c.n(i),a=(c(13),c(5)),n=c(2),r=c(1),l=(c(14),c(15),c(16),c(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbId)}))})},j=c(7),m=c(4),b=c.n(m),u=c(8),v=c.n(u);c(19);var h=function(e){var t=e.addMovieToFavorites,c=Object(r.useState)(""),i=Object(n.a)(c,2),s=i[0],a=i[1],d=Object(r.useState)(),m=Object(n.a)(d,2),u=m[0],h=m[1],O=Object(r.useState)(!1),p=Object(n.a)(O,2),x=p[0],f=p[1],N=Object(r.useState)(!1),g=Object(n.a)(N,2),y=g[0],w=g[1],F=function(){var e=Object(j.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.prev=1,e.next=4,i=s,fetch("".concat("https://www.omdbapi.com/?apikey=80633d4e","&t=").concat(i)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}));case 4:"Title"in(t=e.sent)?(c={title:t.Title,description:t.Plot,imgUrl:"N/A"!==t.Poster?t.Poster:"https://via.placeholder.com/360x270.png?text=no%20preview",imdbId:t.imdbID,imdbUrl:"https://www.imdb.com/title/".concat(t.imdbID)},h(c)):w(!0);case 6:return e.prev=6,f(!1),e.finish(6);case 9:case"end":return e.stop()}var i}),e,null,[[1,,6,9]])})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander",value:s,onChange:function(e){a(e.target.value),w(!1),h(null)}})}),y&&Object(l.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{disabled:!s,"data-cy":"searchButton",type:"submit",className:v()("button","is-light",{"is-loading":x}),onClick:function(e){e.preventDefault(),F()},children:"Find a movie"})}),u&&Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){u&&t(u),a(""),h(null)},children:"Add to the list"})})]})]}),u&&Object(l.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(o,{movie:u})]})]})},O=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],i=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(h,{addMovieToFavorites:function(e){i((function(t){if(t.some((function(t){return t.imdbId===e.imdbId})))return t;var c=t.map((function(e){return Object(a.a)({},e)}));return c.push(Object(a.a)({},e)),c}))}})})]})};s.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.b554f002.chunk.js.map