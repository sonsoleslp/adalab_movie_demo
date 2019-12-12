(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{47:function(e,t,a){e.exports=a(57)},53:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(14),o=a.n(c),l=a(6),s=a.n(l),i=a(19),u=a(20),m=a(22),p=a(21),h=a(23),d=(a(53),a(65)),v=a(63),f=a(64),E=a(44),y=a(61),b=a(59),g=a(60),w=a(40),x=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.posterUrl,r=e.onClick;return n.a.createElement(w.a,{className:"movie animated zoomIn",xs:12,md:6,lg:3,xl:2},n.a.createElement("div",{onClick:r},n.a.createElement("img",{src:a,alt:t,onError:function(e){e.target.src="https://via.placeholder.com/300x442"},className:"poster"}),n.a.createElement("p",{className:"title"},t)))}}]),t}(n.a.Component),C=a(62),S=function(e){function t(e){var a;Object(i.a)(this,t);var r=(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).props,n=r.show,c=r.title,o=r.year,l=r.director,s=r.posterUrl;return a.state={show:n,title:c,year:o,director:l,posterUrl:s},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.id,r=t.onCancel,c=t.onSuccess,o=t.onDelete,l=t.edit,s=this.state,i=s.show,u=s.title,m=s.year,p=s.director,h=s.posterUrl;return n.a.createElement(C.a,{show:i,"aria-labelledby":"contained-modal-title-vcenter"},n.a.createElement(C.a.Header,null,n.a.createElement(C.a.Title,{id:"contained-modal-title-vcenter"},l?this.props.title:"New movie")),n.a.createElement(C.a.Body,null,n.a.createElement(b.a,null,n.a.createElement(g.a,{className:"show-grid"},n.a.createElement(w.a,{xs:12,md:6},n.a.createElement("img",{src:h||"https://via.placeholder.com/300x442",alt:u,onError:function(e){e.target.src="https://via.placeholder.com/300x442"},className:"poster"})),n.a.createElement(w.a,{xs:12,md:6},n.a.createElement(f.a,null,n.a.createElement(f.a.Group,{controlId:""},n.a.createElement(f.a.Label,null,"Movie Title"),n.a.createElement(f.a.Control,{type:"text",name:"title",value:u||"",placeholder:"Title of the movie",onChange:function(t){return e.setState({title:t.target.value})}})),n.a.createElement(f.a.Group,{controlId:""},n.a.createElement(f.a.Label,null,"Director"),n.a.createElement(f.a.Control,{type:"text",name:"director",value:p||"",placeholder:"Director of the movie",onChange:function(t){return e.setState({director:t.target.value})}})),n.a.createElement(f.a.Group,{controlId:""},n.a.createElement(f.a.Label,null,"Year"),n.a.createElement(f.a.Control,{type:"number",min:"1700",max:"2020",name:"year",value:m||2019,placeholder:"Year of the movie",onChange:function(t){return e.setState({year:t.target.value})}})),n.a.createElement(f.a.Group,{controlId:""},n.a.createElement(f.a.Label,null,"Poster URL"),n.a.createElement(f.a.Control,{type:"url",name:"posterUrl",value:h||"",placeholder:"Poster URL",onChange:function(t){return e.setState({posterUrl:t.target.value})}}))))))),n.a.createElement(C.a.Footer,null,l?n.a.createElement(y.a,{variant:"danger",onClick:function(){return o(a)}},"Delete"):null,n.a.createElement(y.a,{variant:"warning",onClick:r},"Cancel"),n.a.createElement(y.a,{variant:"success",onClick:function(){return c(a,{title:u,year:m,director:p,posterUrl:h})}},l?"Update":"Create")))}}]),t}(n.a.Component),j="http://localhost:3000/movies",k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).search=function(){var e,t;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e="?",a.state.director&&(e+="director="+a.state.director+"&"),a.state.yearBefore&&(e+="yearBefore="+a.state.yearBefore+"&"),a.state.yearAfter&&(e+="yearAfter="+a.state.yearAfter+"&"),r.prev=4,r.t0=s.a,r.next=8,s.a.awrap(fetch(j+e));case 8:return r.t1=r.sent.json(),r.next=11,r.t0.awrap.call(r.t0,r.t1);case 11:t=r.sent,a.setState({movies:t,err:t&&t.length>0?void 0:"No results"}),r.next=18;break;case 15:r.prev=15,r.t2=r.catch(4),a.setState({err:"Error when retrieving movies from server"});case 18:case"end":return r.stop()}}),null,null,[[4,15]])},a.edit=function(e,t){return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e){r.next=17;break}return r.prev=1,r.t0=s.a,r.next=5,s.a.awrap(fetch(j+"/"+e+"?_method=PUT",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}));case 5:return r.t1=r.sent.json(),r.next=8,r.t0.awrap.call(r.t0,r.t1);case 8:return r.next=10,s.a.awrap(a.search());case 10:r.next=15;break;case 12:r.prev=12,r.t2=r.catch(1),a.setState({err:"Error when updating movie"});case 15:r.next=19;break;case 17:return r.next=19,s.a.awrap(a.create(t));case 19:case"end":return r.stop()}}),null,null,[[1,12]])},a.create=function(e){return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=s.a,t.next=4,s.a.awrap(fetch(j,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}));case 4:return t.t1=t.sent.json(),t.next=7,t.t0.awrap.call(t.t0,t.t1);case 7:return t.next=9,s.a.awrap(a.search());case 9:t.next=14;break;case 11:t.prev=11,t.t2=t.catch(0),a.setState({err:"Error when creating movie"});case 14:case"end":return t.stop()}}),null,null,[[0,11]])},a.delete=function(e){return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.awrap(fetch(j+"/"+e+"?_method=DELETE",{method:"POST",headers:{"Content-Type":"application/json"}}));case 3:return t.next=5,s.a.awrap(a.search());case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a.setState({err:"Error when deleting movie"});case 10:case"end":return t.stop()}}),null,null,[[0,7]])},a.state={movies:[],err:void 0,director:"",selectedMovie:-1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.movies,r=t.err,c=t.selectedMovie;return n.a.createElement("div",null,n.a.createElement(d.a,{bg:"light",expand:"lg"},n.a.createElement(d.a.Brand,{href:"#home"},"Movie Database"),n.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(d.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(v.a,{className:"mr-auto"}),n.a.createElement(f.a,{inline:!0},n.a.createElement(E.a,{type:"number",placeholder:"From",className:"mr-sm-2",onChange:function(t){return e.setState({yearAfter:t.target.value})}}),n.a.createElement(E.a,{type:"number",placeholder:"To",className:"mr-sm-2",onChange:function(t){return e.setState({yearBefore:t.target.value})}}),n.a.createElement(E.a,{type:"text",placeholder:"Director",className:"mr-sm-2",onChange:function(t){return e.setState({director:t.target.value})}}),n.a.createElement(y.a,{variant:"outline-success",type:"button",onClick:this.search},"Search"),"\xa0",n.a.createElement(y.a,{type:"button",variant:"success",onClick:function(){e.setState({selectedMovie:-2})}},"New")))),n.a.createElement(b.a,{fluid:!0},n.a.createElement(g.a,null,!r&&a&&a.length>0?a.map((function(t,a){return n.a.createElement(x,Object.assign({key:t.id},t,{onClick:function(){e.setState({selectedMovie:a})}}))})):null,!r&&a&&0===a.length?n.a.createElement("img",{src:"/spinner.svg",alt:"spinner",className:"spinner"}):null,r?n.a.createElement("div",{class:"error"},r):null)),-1!==c?n.a.createElement(S,Object.assign({show:!0,edit:-2!==c},a[c],{onDelete:function(t){e.setState({selectedMovie:-1}),e.delete(t)},onCancel:function(){e.setState({selectedMovie:-1})},onSuccess:function(t,a){e.setState({selectedMovie:-1}),e.edit(t,a)}})):null)}},{key:"componentDidMount",value:function(){return s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.awrap(this.search());case 2:case"end":return e.stop()}}),null,this)}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.3406bb68.chunk.js.map