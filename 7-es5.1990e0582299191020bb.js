(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Iab2:function(t,e,l){var i,a;void 0===(a="function"==typeof(i=function(){"use strict";function e(t,e,l){var i=new XMLHttpRequest;i.open("GET",t),i.responseType="blob",i.onload=function(){n(i.response,e,l)},i.onerror=function(){console.error("could not download file")},i.send()}function l(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function i(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var l=document.createEvent("MouseEvents");l.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(l)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,n=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype?function(t,n,g){var s=a.URL||a.webkitURL,o=document.createElement("a");o.download=n=n||t.name||"download",o.rel="noopener","string"==typeof t?(o.href=t,o.origin===location.origin?i(o):l(o.href)?e(t,n,g):i(o,o.target="_blank")):(o.href=s.createObjectURL(t),setTimeout((function(){s.revokeObjectURL(o.href)}),4e4),setTimeout((function(){i(o)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,a,n){if(a=a||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,n),a);else if(l(t))e(t,a,n);else{var g=document.createElement("a");g.href=t,g.target="_blank",setTimeout((function(){i(g)}))}}:function(t,l,i,n){if((n=n||open("","_blank"))&&(n.document.title=n.document.body.innerText="downloading..."),"string"==typeof t)return e(t,l,i);var g="application/octet-stream"===t.type,s=/constructor/i.test(a.HTMLElement)||a.safari,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||g&&s)&&"object"==typeof FileReader){var r=new FileReader;r.onloadend=function(){var t=r.result;t=o?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=t:location=t,n=null},r.readAsDataURL(t)}else{var u=a.URL||a.webkitURL,m=u.createObjectURL(t);n?n.location=m:location.href=m,n=null,setTimeout((function(){u.revokeObjectURL(m)}),4e4)}});a.saveAs=n.saveAs=n,t.exports=n})?i.apply(e,[]):i)||(t.exports=a)},"Ofe+":function(t,e,l){"use strict";l.r(e);var i=l("8Y7J"),a=l("SkZf"),n=function(){function t(t,e,l,i){this.activatedRoute=t,this.matDialog=e,this.http=l,this.fileSaverService=i,this.imageData=[]}return t.prototype.ngOnInit=function(){var t=this;this.activatedRoute.params.subscribe((function(e){if(e.image){t.image=e.image;var l=btoa(t.image);localStorage.setItem("image",l)}else t.image=atob(localStorage.getItem("image"));t.imageData.unshift({small:t.image,text:"Original"})})),this.imageData=[{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-big.jpeg"}]},t.prototype.dispOriginalImage=function(){var t=this;this.matDialog.open(a.a,{height:"650px",width:"450px",data:{big:this.image}}).afterClosed().subscribe((function(e){"Y"===e.res&&(console.log("data, filename",e.url,e.fileName),t.saveFile(e.url,e.fileName))}))},t.prototype.dispImgDetail=function(t){var e=this;this.matDialog.open(a.a,{height:"650px",width:"450px",data:t}).afterClosed().subscribe((function(t){"Y"===t.res&&(console.log("data, filename",t.url,t.fileName),e.saveFile(t.url,t.fileName))}))},t.prototype.saveFile=function(t,e){var l=this;this.http.get(t,{observe:"response",responseType:"blob"}).subscribe((function(t){l.fileSaverService.save(t.body,e)}))},t}(),g=function(){},s=l("xYTU"),o=l("t68o"),r=l("pMnS"),u=l("FVPZ"),m=l("IP0z"),d=l("Xd0L"),b=l("cUpR"),p=i.wb({encapsulation:2,styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-footer,.mat-grid-tile .mat-grid-tile-header{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-footer>*,.mat-grid-tile .mat-grid-tile-header>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-tile-footer.mat-2-line,.mat-grid-tile .mat-grid-tile-header.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}"],data:{}});function h(t){return i.Pb(2,[(t()(),i.yb(0,0,null,null,1,"div",[],null,null,null,null,null)),i.Ib(null,0)],null,null)}var c=i.wb({encapsulation:2,styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-footer,.mat-grid-tile .mat-grid-tile-header{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-footer>*,.mat-grid-tile .mat-grid-tile-header>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-tile-footer.mat-2-line,.mat-grid-tile .mat-grid-tile-header.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}"],data:{}});function f(t){return i.Pb(2,[(t()(),i.yb(0,0,null,null,1,"figure",[["class","mat-figure"]],null,null,null,null,null)),i.Ib(null,0)],null,null)}var k=l("SVse"),y=l("bujt"),x=l("Fwaw"),v=l("5GAg"),j=l("omvX"),w=l("iInd"),z=l("s6ns"),H=l("IheW"),O=(l("mrSG"),l("Iab2"));l("HDdC");var I,R=((I=function(){function t(){}return Object.defineProperty(t.prototype,"isFileSaverSupported",{get:function(){try{return!!new Blob}catch(t){return!1}},enumerable:!0,configurable:!0}),t.prototype.genType=function(t){if(!t||-1===t.lastIndexOf("."))return"text/plain";var e=t.substr(t.lastIndexOf(".")+1);switch(e){case"txt":return"text/plain";case"xml":case"html":return"text/"+e;case"json":return"octet/stream";default:return"application/"+e}},t.prototype.save=function(t,e,l,i){if(!t)throw new Error("Data argument should be a blob instance");var a=new Blob([t],{type:l||t.type||this.genType(e)});Object(O.saveAs)(a,decodeURI(e||"download"),i)},t.prototype.saveText=function(t,e,l){var i=new Blob([t]);this.save(i,e,null,l)},t}()).ngInjectableDef=Object(i.Tb)({factory:function(){return new I},token:I,providedIn:"root"}),I),M=i.wb({encapsulation:0,styles:[[".mat-radio-button1[_ngcontent-%COMP%]{position:relative;margin-right:30px}.request-button[_ngcontent-%COMP%]{position:relative;margin-left:30px}.radio-button-group1[_ngcontent-%COMP%]{position:relative;margin-top:10px}.request-image[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;font-size:0;text-align:center;width:50%;height:250px}img[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;horiz-align:center;max-height:100%;max-width:100%}mat-grid-tile[_ngcontent-%COMP%]{background:#f5f5f5}.response-title[_ngcontent-%COMP%]{position:relative;margin-top:30px;text-align:center;color:#00f}.respone-image[_ngcontent-%COMP%]{width:100%;height:550px;overflow-y:scroll}"]],data:{}});function S(t){return i.Pb(0,[(t()(),i.yb(0,0,null,null,1,"div",[],null,null,null,null,null)),(t()(),i.Ob(1,null,[" "," "]))],null,(function(t,e){t(e,1,0,e.parent.context.$implicit.text)}))}function P(t){return i.Pb(0,[(t()(),i.yb(0,0,null,null,4,"mat-grid-tile",[["class","mat-grid-tile"]],null,[[null,"click"]],(function(t,e,l){var i=!0;return"click"===e&&(i=!1!==t.component.dispImgDetail(t.context.$implicit)&&i),i}),f,c)),i.xb(1,49152,[[1,4]],0,u.c,[i.l,[2,u.e]],null,null),(t()(),i.yb(2,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(t()(),i.nb(16777216,null,0,1,null,S)),i.xb(4,16384,null,0,k.i,[i.T,i.Q],{ngIf:[0,"ngIf"]},null)],(function(t,e){t(e,4,0,e.context.$implicit.text)}),(function(t,e){t(e,2,0,e.context.$implicit.small)}))}function T(t){return i.Pb(0,[(t()(),i.yb(0,0,null,null,2,"button",[["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(t,e,l){var i=!0;return"click"===e&&(i=!1!==t.component.dispOriginalImage()&&i),i}),y.b,y.a)),i.xb(1,180224,null,0,x.b,[i.l,v.d,[2,j.a]],null,null),(t()(),i.Ob(-1,0,["Original Image"])),(t()(),i.yb(3,0,null,null,2,"div",[["class","response-title"]],null,null,null,null,null)),(t()(),i.yb(4,0,null,null,1,"h5",[],null,null,null,null,null)),(t()(),i.Ob(-1,null,["Response Images"])),(t()(),i.yb(6,0,null,null,6,"div",[["class","respone-image"]],null,null,null,null,null)),(t()(),i.yb(7,0,null,null,5,"mat-grid-list",[["class","mat-grid-list"],["cols","4"],["rowHeight","1:1"]],null,null,null,h,p)),i.Lb(6144,null,u.e,null,[u.a]),i.xb(9,2211840,null,1,u.a,[i.l,[2,m.b]],{cols:[0,"cols"],rowHeight:[1,"rowHeight"]},null),i.Mb(603979776,1,{_tiles:1}),(t()(),i.nb(16777216,null,0,1,null,P)),i.xb(12,278528,null,0,k.h,[i.T,i.Q,i.u],{ngForOf:[0,"ngForOf"]},null)],(function(t,e){var l=e.component;t(e,9,0,"4","1:1"),t(e,12,0,l.imageData)}),(function(t,e){t(e,0,0,i.Jb(e,1).disabled||null,"NoopAnimations"===i.Jb(e,1)._animationMode)}))}var E=i.ub("app-res-data",n,(function(t){return i.Pb(0,[(t()(),i.yb(0,0,null,null,1,"app-res-data",[],null,null,null,T,M)),i.xb(1,114688,null,0,n,[w.a,z.e,H.c,R],null,null)],(function(t,e){t(e,1,0)}),null)}),{},{},[]),D=l("POq0"),L=l("QQfA"),F=l("/HVE"),U=l("zMNK"),_=l("rWV4"),C=l("elxJ"),A=l("r0V8"),B=l("Gi4r"),N=l("BzsH"),X=l("8P0U"),J=l("hOhj"),q=l("dFDH"),G=l("HsOI"),V=l("oapL"),Q=l("ZwOa"),Y=l("fnUE");l.d(e,"ResDataModuleNgFactory",(function(){return $}));var $=i.vb(g,[],(function(t){return i.Gb([i.Hb(512,i.j,i.gb,[[8,[s.a,s.b,o.a,r.a,E]],[3,i.j],i.A]),i.Hb(4608,k.k,k.j,[i.w,[2,k.w]]),i.Hb(4608,D.c,D.c,[]),i.Hb(4608,L.a,L.a,[L.g,L.c,i.j,L.f,L.d,i.s,i.C,k.c,m.b,[2,k.f]]),i.Hb(5120,L.h,L.i,[L.a]),i.Hb(5120,z.c,z.d,[L.a]),i.Hb(135680,z.e,z.e,[L.a,i.s,[2,k.f],[2,z.b],z.c,[3,z.e],L.c]),i.Hb(4608,d.a,d.a,[]),i.Hb(4608,H.i,H.o,[k.c,i.F,H.m]),i.Hb(4608,H.p,H.p,[H.i,H.n]),i.Hb(5120,H.a,(function(t){return[t]}),[H.p]),i.Hb(4608,H.l,H.l,[]),i.Hb(6144,H.j,null,[H.l]),i.Hb(4608,H.h,H.h,[H.j]),i.Hb(6144,H.b,null,[H.h]),i.Hb(4608,H.f,H.k,[H.b,i.s]),i.Hb(4608,H.c,H.c,[H.f]),i.Hb(1073742336,k.b,k.b,[]),i.Hb(1073742336,m.a,m.a,[]),i.Hb(1073742336,d.e,d.e,[[2,d.b],[2,b.f]]),i.Hb(1073742336,F.b,F.b,[]),i.Hb(1073742336,d.h,d.h,[]),i.Hb(1073742336,x.c,x.c,[]),i.Hb(1073742336,U.g,U.g,[]),i.Hb(1073742336,D.d,D.d,[]),i.Hb(1073742336,v.a,v.a,[]),i.Hb(1073742336,_.k,_.k,[]),i.Hb(1073742336,C.d,C.d,[]),i.Hb(1073742336,A.b,A.b,[]),i.Hb(1073742336,A.a,A.a,[]),i.Hb(1073742336,B.a,B.a,[]),i.Hb(1073742336,N.b,N.b,[]),i.Hb(1073742336,X.c,X.c,[]),i.Hb(1073742336,J.b,J.b,[]),i.Hb(1073742336,L.e,L.e,[]),i.Hb(1073742336,q.e,q.e,[]),i.Hb(1073742336,d.f,d.f,[]),i.Hb(1073742336,u.b,u.b,[]),i.Hb(1073742336,z.h,z.h,[]),i.Hb(1073742336,G.d,G.d,[]),i.Hb(1073742336,V.c,V.c,[]),i.Hb(1073742336,Q.b,Q.b,[]),i.Hb(1073742336,Y.a,Y.a,[]),i.Hb(1073742336,w.o,w.o,[[2,w.t],[2,w.k]]),i.Hb(1073742336,H.e,H.e,[]),i.Hb(1073742336,H.d,H.d,[]),i.Hb(1073742336,g,g,[]),i.Hb(256,H.m,"XSRF-TOKEN",[]),i.Hb(256,H.n,"X-XSRF-TOKEN",[]),i.Hb(1024,w.i,(function(){return[[{path:"",component:n},{path:"res-data",component:n}]]}),[])])}))}}]);