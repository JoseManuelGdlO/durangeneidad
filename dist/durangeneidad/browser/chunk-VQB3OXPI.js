import{a as $,c as tt,d as et,f as nt,h as it,i as ot,l as rt,m as at,o as g,p as dt,q as h,r as ct,s as mt,t as st,u as b,v as pt}from"./chunk-LZE6MAOM.js";import{$ as o,$a as Z,Aa as U,F as A,H as d,I as l,La as q,Ma as E,Oa as G,Q as y,Qa as V,Ra as Y,S as m,Ta as K,Ua as Q,Xa as X,Za as T,_ as r,aa as s,bb as D,f as I,fa as H,ga as w,m as N,ma as c,n as M,na as R,oa as W,p as z,pa as B,qa as P,ra as O,s as _,sa as S,t as x,va as v,ya as L,za as J}from"./chunk-JFM22QLC.js";function Mt(i,t){if(i&1&&(r(0,"div"),s(1,"app-card",8),o()),i&2){let f=t.$implicit,e=w();d(),m("loading",e.isLoading)("item",f)}}var k=(()=>{let t=class t{constructor(e,n){this.apiService=e,this.route=n,this.articles=[{},{},{},{}],this.isLoading=!1}ngOnInit(){return I(this,null,function*(){this.isLoading=!0,this.route.params.subscribe(e=>{this.isLoading=!0,e.tag?this.getArts(e.tag):this.getArts()}),this.getArts()})}getArts(e){return I(this,null,function*(){try{let n=yield this.apiService.getArticles(e);this.articles=n.data.reverse()}catch(n){console.error(n)}finally{this.isLoading=!1}})}};t.\u0275fac=function(n){return new(n||t)(l(g),l(T))},t.\u0275cmp=_({type:t,selectors:[["app-home"]],decls:14,vars:2,consts:[[1,"body___search"],[1,"body___search___div"],[1,"body___search___div___title"],[1,"body___search___div___subtitle"],[1,"body___search___div___search"],[1,"body___title"],[4,"ngFor","ngForOf"],[3,"loading"],[3,"loading","item"]],template:function(n,a){n&1&&(s(0,"app-header"),r(1,"body")(2,"div",0)(3,"div",1)(4,"h1",2),c(5,"Bienvenido"),o(),r(6,"h5",3),c(7,` Revista mensual de historia, cultura, turismo y algo m\xE1s
uni\xF3n de cronistas municipales del estado de durango a.c. `),o(),r(8,"div",4),s(9,"app-search"),o()()(),r(10,"h1",5),c(11,"Contenido"),o(),y(12,Mt,2,2,"div",6),o(),s(13,"dgo-loading",7)),n&2&&(d(12),m("ngForOf",a.articles),d(),m("loading",a.isLoading))},dependencies:[q,dt,h,st,b],styles:['body[_ngcontent-%COMP%]{background-color:#f9f9f9}.body___search[_ngcontent-%COMP%]{margin-top:40%;height:45vh;background-image:url("./media/durango-G363M2YJ.png");background-position:center;background-size:cover;color:#fff}@media only screen and (min-width: 1000px){.body___search[_ngcontent-%COMP%]{margin-top:20%;height:60vh}}.body___search___div[_ngcontent-%COMP%]{padding-top:20%;text-align:center}@media only screen and (min-width: 1000px){.body___search___div[_ngcontent-%COMP%]{padding-top:10%}}.body___search___div___title[_ngcontent-%COMP%]{margin:0;width:100%;font-size:55px;font-family:avenir;font-weight:700}.body___search___div___subtitle[_ngcontent-%COMP%]{margin:0;font-size:12px;font-family:avenir;font-weight:400}@media only screen and (min-width: 1000px){.body___search___div___subtitle[_ngcontent-%COMP%]{padding:0 35%}}.body___search___div___search[_ngcontent-%COMP%]{margin-top:30px}@media only screen and (min-width: 1000px){.body___search___div___search[_ngcontent-%COMP%]{padding:0 35%}}.body___search___overlay[_ngcontent-%COMP%]{margin-top:-66%;background-color:#be0f0f73;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;position:static}.body___title[_ngcontent-%COMP%]{font-size:30px;font-family:avenir;font-weight:700;color:#706f6f;margin-top:5%;text-align:center}']});let i=t;return i})();var ht=(()=>{let t=class t{constructor(){}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=_({type:t,selectors:[["app-biografia"]],decls:14,vars:0,consts:[["selected","biografia"],[1,"body___overlay"],[1,"body___row"],[1,"body___row___col1"],["src","assets/images/profile-pic.jpg","alt","",1,"body___row___col1___img"],[1,"body___row___col1___box"],[1,"body___row___col1___box___name"],[1,"body___row___col1___box___lastname"],[1,"body___row___col1___box___text"]],template:function(n,a){n&1&&(s(0,"app-header",0),r(1,"body"),s(2,"div",1),r(3,"div",2)(4,"div",3),s(5,"img",4),o(),r(6,"div",3)(7,"div",5)(8,"h1",6),c(9,"JOSE"),o(),r(10,"h1",7),c(11,"DE LA O HOLGUIN"),o(),r(12,"h2",8),c(13,'"Profesor egresado de la Normal Rural J. Guadalupe Aguilera, en el estado de Durango; Licenciado en Ciencias Sociales por la Escuela Normal Superior Ernesto E. Medrano R. de Chihuahua, Chih. Abogado por la Facultad de Derecho de la Universidad Ju\xE1rez del Estado de Durango; con maestr\xEDa en Ciencias y Humanidades con terminaci\xF3n en historia por la Universidad Ju\xE1rez del Estado de Durango. "'),o()()()()())},dependencies:[h],styles:['h1[_ngcontent-%COMP%]{margin:0}body[_ngcontent-%COMP%]{background:transparent!important}.body___overlay[_ngcontent-%COMP%]{width:100%;margin-top:5vh;position:absolute;background-color:#ff354e;height:35vh;z-index:-1}@media only screen and (min-width: 1000px){.body___overlay[_ngcontent-%COMP%]{width:33%;margin-top:0;height:90vh}}.body___row[_ngcontent-%COMP%]{margin-top:20vh;padding:0 10vw;margin-bottom:5vh}@media only screen and (min-width: 1000px){.body___row[_ngcontent-%COMP%]{padding-top:15vh}}.body___row___col1[_ngcontent-%COMP%]{float:left;width:100%}@media only screen and (min-width: 1000px){.body___row___col1[_ngcontent-%COMP%]{width:50%}}.body___row___col1___img[_ngcontent-%COMP%]{width:100%;height:45vh;object-fit:cover}@media only screen and (min-width: 1000px){.body___row___col1___img[_ngcontent-%COMP%]{height:65vh}}@media only screen and (min-width: 1000px){.body___row___col1___box[_ngcontent-%COMP%]{padding-left:5vw}}.body___row___col1___box___name[_ngcontent-%COMP%]{margin-top:4vh;font-size:60px;font-family:avenir;font-weight:900;color:#ff354e}.body___row___col1___box___lastname[_ngcontent-%COMP%]{font-size:35px;font-family:avenir;font-weight:700;color:#000;margin-Top:-30px;letter-spacing:-2px}.body___row___col1___box___text[_ngcontent-%COMP%]{margin-top:4vh;font-size:20px;font-family:avenir;font-weight:400;color:#000;line-height:1.5}.body___row[_ngcontent-%COMP%]:after{content:"";display:table;clear:both}']});let i=t;return i})();var j=(()=>{let t=class t{constructor(e){this.meta=e}updateMetaTags(e){let{title:n,type:a,imageSrc:u,url:p,description:vt,cardType:bt}=e;this.setTitle(n),this.setType(a),this.setImage(u),this.setURL(p),this.setDescription(vt),this.setCardType(bt)}setTitle(e){this.meta.updateTag({property:"og:title",content:e}),this.meta.updateTag({property:"twitter:title",content:e})}setType(e){this.meta.updateTag({property:"og:type",content:e})}setImage(e){this.meta.updateTag({property:"og:image",content:e}),this.meta.updateTag({property:"twitter:image",content:e})}setDescription(e){this.meta.updateTag({property:"og:description",content:e}),this.meta.updateTag({property:"twitter:description",content:e})}setCardType(e){this.meta.updateTag({name:"twitter:card",content:e})}setURL(e){this.meta.updateTag({name:"twitter:url",content:`http://durangeneidad.com${e}`}),this.meta.updateTag({name:"og:url",content:`http://durangeneidad.com${e}`})}};t.\u0275fac=function(n){return new(n||t)(z(X))},t.\u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var wt=()=>({height:"10px",width:"50%",margin:0}),Pt=()=>({height:"30px",width:"80%",margin:0}),Ot=()=>({height:"10px",width:"30%"}),St=()=>({height:"250px",width:"100%","margin-bottom":"2px"}),Et=()=>({height:"20px",width:"100%","margin-bottom":"2px"});function Tt(i,t){if(i&1&&(r(0,"body",3)(1,"h5",4),c(2),L(3,"date"),L(4,"titlecase"),o(),r(5,"h1",5),c(6),o(),r(7,"h5",6),c(8),o(),s(9,"div",7),o()),i&2){let f=w();d(2),B(" ",f.article.lugar," / ",J(4,8,U(3,5,f.article.creacion,"MMM d, y"))," "),d(4),R(f.article.titulo),d(2),W(" Por ",f.article.creador," "),d(),m("innerHTML",f.article.body,A)}}function jt(i,t){i&1&&(r(0,"div",8),s(1,"ngx-skeleton-loader",9)(2,"ngx-skeleton-loader",9)(3,"ngx-skeleton-loader",9)(4,"ngx-skeleton-loader",9)(5,"ngx-skeleton-loader",10),o()),i&2&&(d(),m("theme",v(5,wt)),d(),m("theme",v(6,Pt)),d(),m("theme",v(7,Ot)),d(),m("theme",v(8,St)),d(),m("theme",v(9,Et)))}var ft=(()=>{let t=class t{constructor(e,n,a,u){this.route=e,this.apiService=n,this.metaService=a,this.router=u,this.isLoading=!1}ngOnInit(){this.isLoading=!0,this.route.params.subscribe(e=>{this.getData(e.id)})}getData(e){this.apiService.getDetail(e).then(n=>{this.article=n.data[0],this.metaService.updateMetaTags({title:this.article.titulo,type:"website",imageSrc:this.article.thumb,url:this.router.url,description:this.article.descripcion,cardType:"summary_large_image"})}).catch(n=>{console.log(n)}).finally(()=>{this.isLoading=!1})}};t.\u0275fac=function(n){return new(n||t)(l(T),l(g),l(j),l(Z))},t.\u0275cmp=_({type:t,selectors:[["app-detail"]],decls:4,vars:3,consts:[["class","content",4,"ngIf"],["class","divSkel",4,"ngIf"],[3,"loading"],[1,"content"],[1,"content___date"],[1,"content___title"],[1,"content___date",2,"color","red"],[3,"innerHTML"],[1,"divSkel"],["count","1","loadingText","true","appearance","line",3,"theme"],["count","20","loadingText","true","appearance","line",3,"theme"]],template:function(n,a){n&1&&(s(0,"app-header"),y(1,Tt,10,10,"body",0)(2,jt,6,10,"div",1),s(3,"dgo-loading",2)),n&2&&(d(),m("ngIf",!a.isLoading),d(),m("ngIf",a.isLoading),d(),m("loading",a.isLoading))},dependencies:[E,h,b,ct,G,V],styles:["h1[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{margin:0}.content[_ngcontent-%COMP%]{padding:0 10px;overflow-x:auto;margin-bottom:5%!important;margin-top:40%!important}@media only screen and (min-width: 1000px){.content[_ngcontent-%COMP%]{padding:0 25vw;margin-top:20%!important;margin-bottom:2%!important}}.content___title[_ngcontent-%COMP%]{font-size:30px;font-family:avenir;font-weight:700;color:#000}.content___date[_ngcontent-%COMP%]{font-size:12px;font-family:avenir;font-weight:400;color:#706f6f}.divSkel[_ngcontent-%COMP%]{padding:0 10px;margin-bottom:5%!important;margin-top:40%!important}@media only screen and (min-width: 1000px){.divSkel[_ngcontent-%COMP%]{padding:0 25vw;margin-top:20%!important;margin-bottom:2%!important}}"]});let i=t;return i})();function It(i,t){i&1&&(r(0,"label",12),c(1,"faltan datos por llenar"),o())}var ut=(()=>{let t=class t{constructor(e,n){this.apiService=e,this.http=n,this.nombre="",this.correo="",this.mensaje="",this.error=!1,this.loading=!1}enviarFormulario(){if(this.error=!1,!this.nombre||!this.correo||!this.mensaje){this.error=!0;return}this.loading=!0;let e={nombre:this.nombre,correo:this.correo,mensaje:this.mensaje};this.http.post("http://3.218.160.237:8000/durangeneidad/email",e).subscribe(n=>{console.log("Correo enviado con \xE9xito",n),this.loading=!1},n=>{console.error("Error al enviar el correo",n),this.loading=!1})}};t.\u0275fac=function(n){return new(n||t)(l(g),l(K))},t.\u0275cmp=_({type:t,selectors:[["app-contacto"]],decls:19,vars:5,consts:[[1,"content"],[1,"contacto"],[3,"ngSubmit"],["for","nombre"],["type","text","id","nombre","name","nombre","required","",3,"ngModelChange","ngModel"],["for","correo"],["type","email","id","correo","name","correo","required","",3,"ngModelChange","ngModel"],["for","mensaje"],["id","mensaje","name","mensaje","required","",3,"ngModelChange","ngModel"],["type","submit"],["style","color: red",4,"ngIf"],[3,"loading"],[2,"color","red"]],template:function(n,a){n&1&&(s(0,"app-header"),r(1,"body",0)(2,"div",1)(3,"h2"),c(4,"Cont\xE1ctanos"),o(),r(5,"form",2),H("ngSubmit",function(){return a.enviarFormulario()}),r(6,"label",3),c(7,"Nombre:"),o(),r(8,"input",4),S("ngModelChange",function(p){return O(a.nombre,p)||(a.nombre=p),p}),o(),r(9,"label",5),c(10,"Correo electr\xF3nico:"),o(),r(11,"input",6),S("ngModelChange",function(p){return O(a.correo,p)||(a.correo=p),p}),o(),r(12,"label",7),c(13,"Mensaje:"),o(),r(14,"textarea",8),S("ngModelChange",function(p){return O(a.mensaje,p)||(a.mensaje=p),p}),o(),r(15,"button",9),c(16,"Enviar"),o(),y(17,It,2,0,"label",10),o()()(),s(18,"dgo-loading",11)),n&2&&(d(8),P("ngModel",a.nombre),d(3),P("ngModel",a.correo),d(3),P("ngModel",a.mensaje),d(3),m("ngIf",a.error),d(),m("loading",a.loading))},dependencies:[E,ot,$,tt,et,rt,it,nt,h,b],styles:["h1[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{margin:0}.content[_ngcontent-%COMP%]{padding:0 10px;overflow-x:auto;margin-bottom:5%!important;margin-top:40%!important}@media only screen and (min-width: 1000px){.content[_ngcontent-%COMP%]{padding:0 25vw;margin-top:20%!important;margin-bottom:2%!important}}.content___title[_ngcontent-%COMP%]{font-size:30px;font-family:avenir;font-weight:700;color:#000}.content___date[_ngcontent-%COMP%]{font-size:12px;font-family:avenir;font-weight:400;color:#706f6f}.divSkel[_ngcontent-%COMP%]{padding:0 10px;margin-bottom:5%!important;margin-top:40%!important}@media only screen and (min-width: 1000px){.divSkel[_ngcontent-%COMP%]{padding:0 25vw;margin-top:20%!important;margin-bottom:2%!important}}.contacto[_ngcontent-%COMP%]{max-width:400px;margin:0 auto}.contacto[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}.contacto[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.contacto[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:5px}.contacto[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contacto[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{margin-bottom:10px;padding:8px;border:1px solid #ccc;border-radius:5px}.contacto[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px 20px;background-color:#ff354e;color:#fff;border:none;border-radius:5px;cursor:pointer}.contacto[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#b92637}"]});let i=t;return i})();var Lt=[{path:"",component:k},{path:"biografia",component:ht},{path:"noticia/:id/:title",component:ft},{path:"contact",component:ut},{path:":tag",component:k}],yt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=x({type:t}),t.\u0275inj=M({imports:[D.forChild(Lt),D]});let i=t;return i})();var le=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=x({type:t}),t.\u0275inj=M({providers:[g,j],imports:[Y,at,yt,pt,Q,mt]});let i=t;return i})();export{le as HomePageModule};