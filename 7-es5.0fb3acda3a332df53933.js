(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Iab2:function(t,e,l){var a,i;void 0===(i="function"==typeof(a=function(){"use strict";function e(t,e,l){var a=new XMLHttpRequest;a.open("GET",t),a.responseType="blob",a.onload=function(){g(a.response,e,l)},a.onerror=function(){console.error("could not download file")},a.send()}function l(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function a(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var l=document.createEvent("MouseEvents");l.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(l)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,g=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype?function(t,g,n){var s=i.URL||i.webkitURL,o=document.createElement("a");o.download=g=g||t.name||"download",o.rel="noopener","string"==typeof t?(o.href=t,o.origin===location.origin?a(o):l(o.href)?e(t,g,n):a(o,o.target="_blank")):(o.href=s.createObjectURL(t),setTimeout((function(){s.revokeObjectURL(o.href)}),4e4),setTimeout((function(){a(o)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,i,g){if(i=i||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,g),i);else if(l(t))e(t,i,g);else{var n=document.createElement("a");n.href=t,n.target="_blank",setTimeout((function(){a(n)}))}}:function(t,l,a,g){if((g=g||open("","_blank"))&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof t)return e(t,l,a);var n="application/octet-stream"===t.type,s=/constructor/i.test(i.HTMLElement)||i.safari,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||n&&s)&&"object"==typeof FileReader){var r=new FileReader;r.onloadend=function(){var t=r.result;t=o?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=t:location=t,g=null},r.readAsDataURL(t)}else{var u=i.URL||i.webkitURL,m=u.createObjectURL(t);g?g.location=m:location.href=m,g=null,setTimeout((function(){u.revokeObjectURL(m)}),4e4)}});i.saveAs=g.saveAs=g,t.exports=g})?a.apply(e,[]):a)||(t.exports=i)},"Ofe+":function(t,e,l){"use strict";l.r(e);var a=l("8Y7J"),i=l("SkZf"),g=function(){function t(t,e,l,a){this.activatedRoute=t,this.matDialog=e,this.http=l,this.fileSaverService=a,this.imageData=[]}return t.prototype.ngOnInit=function(){var t=this;this.activatedRoute.params.subscribe((function(e){if(e.image){t.image=e.image;var l=btoa(t.image);localStorage.setItem("image",l)}else t.image=atob(localStorage.getItem("image"))})),this.imageData=[{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/1-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/2-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/3-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/4-big.jpeg"},{small:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-small.jpeg",medium:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-medium.jpeg",big:"https://lukasz-galka.github.io/ngx-gallery-demo/assets/img/5-big.jpeg"}]},t.prototype.dispImgDetail=function(t){var e=this;this.matDialog.open(i.a,{height:"650px",width:"450px",data:t}).afterClosed().subscribe((function(t){"Y"===t.res&&(console.log("data, filename",t.url,t.fileName),e.saveFile(t.url,t.fileName))}))},t.prototype.saveFile=function(t,e){var l=this;this.http.get(t,{observe:"response",responseType:"blob"}).subscribe((function(t){l.fileSaverService.save(t.body,e)}))},t}(),n=function(){},s=l("xYTU"),o=l("t68o"),r=l("pMnS"),u=l("FVPZ"),m=l("IP0z"),d=l("Xd0L"),p=l("cUpR"),b=a.wb({encapsulation:2,styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-footer,.mat-grid-tile .mat-grid-tile-header{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-footer>*,.mat-grid-tile .mat-grid-tile-header>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-tile-footer.mat-2-line,.mat-grid-tile .mat-grid-tile-header.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}"],data:{}});function h(t){return a.Pb(2,[(t()(),a.yb(0,0,null,null,1,"div",[],null,null,null,null,null)),a.Ib(null,0)],null,null)}var c=a.wb({encapsulation:2,styles:[".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-footer,.mat-grid-tile .mat-grid-tile-header{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-footer>*,.mat-grid-tile .mat-grid-tile-header>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-tile-footer.mat-2-line,.mat-grid-tile .mat-grid-tile-header.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}"],data:{}});function f(t){return a.Pb(2,[(t()(),a.yb(0,0,null,null,1,"figure",[["class","mat-figure"]],null,null,null,null,null)),a.Ib(null,0)],null,null)}var k=l("SVse"),y=l("iInd"),x=l("s6ns"),v=l("IheW"),j=(l("mrSG"),l("Iab2"));l("HDdC");var w,z=((w=function(){function t(){}return Object.defineProperty(t.prototype,"isFileSaverSupported",{get:function(){try{return!!new Blob}catch(t){return!1}},enumerable:!0,configurable:!0}),t.prototype.genType=function(t){if(!t||-1===t.lastIndexOf("."))return"text/plain";var e=t.substr(t.lastIndexOf(".")+1);switch(e){case"txt":return"text/plain";case"xml":case"html":return"text/"+e;case"json":return"octet/stream";default:return"application/"+e}},t.prototype.save=function(t,e,l,a){if(!t)throw new Error("Data argument should be a blob instance");var i=new Blob([t],{type:l||t.type||this.genType(e)});Object(j.saveAs)(i,decodeURI(e||"download"),a)},t.prototype.saveText=function(t,e,l){var a=new Blob([t]);this.save(a,e,null,l)},t}()).ngInjectableDef=Object(a.Tb)({factory:function(){return new w},token:w,providedIn:"root"}),w),H=a.wb({encapsulation:0,styles:[[".mat-radio-button1[_ngcontent-%COMP%]{position:relative;margin-right:30px}.request-button[_ngcontent-%COMP%]{position:relative;margin-left:30px}.radio-button-group1[_ngcontent-%COMP%]{position:relative;margin-top:10px}.request-image[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;font-size:0;text-align:center;width:50%;height:250px}img[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;horiz-align:center;max-height:100%;max-width:100%}mat-grid-tile[_ngcontent-%COMP%]{background:#f5f5f5}.response-title[_ngcontent-%COMP%]{position:relative;margin-top:30px;text-align:center;color:#00f}.respone-image[_ngcontent-%COMP%]{width:100%;height:250px;overflow-y:scroll}"]],data:{}});function O(t){return a.Pb(0,[(t()(),a.yb(0,0,null,null,2,"mat-grid-tile",[["class","mat-grid-tile"]],null,[[null,"click"]],(function(t,e,l){var a=!0;return"click"===e&&(a=!1!==t.component.dispImgDetail(t.context.$implicit)&&a),a}),f,c)),a.xb(1,49152,[[1,4]],0,u.c,[a.l,[2,u.e]],null,null),(t()(),a.yb(2,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(t,e){t(e,2,0,e.context.$implicit.small)}))}function R(t){return a.Pb(0,[(t()(),a.yb(0,0,null,null,4,"div",[["class","request-image"]],null,null,null,null,null)),(t()(),a.yb(1,0,null,null,2,"h5",[],null,null,null,null,null)),(t()(),a.yb(2,0,null,null,1,"span",[["style","color: blue"]],null,null,null,null,null)),(t()(),a.Ob(-1,null,["Original Image"])),(t()(),a.yb(4,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(t()(),a.yb(5,0,null,null,2,"div",[["class","response-title"]],null,null,null,null,null)),(t()(),a.yb(6,0,null,null,1,"h5",[],null,null,null,null,null)),(t()(),a.Ob(-1,null,["Response Images"])),(t()(),a.yb(8,0,null,null,6,"div",[["class","respone-image"]],null,null,null,null,null)),(t()(),a.yb(9,0,null,null,5,"mat-grid-list",[["class","mat-grid-list"],["cols","4"],["rowHeight","1:1"]],null,null,null,h,b)),a.Lb(6144,null,u.e,null,[u.a]),a.xb(11,2211840,null,1,u.a,[a.l,[2,m.b]],{cols:[0,"cols"],rowHeight:[1,"rowHeight"]},null),a.Mb(603979776,1,{_tiles:1}),(t()(),a.nb(16777216,null,0,1,null,O)),a.xb(14,278528,null,0,k.h,[a.T,a.Q,a.u],{ngForOf:[0,"ngForOf"]},null)],(function(t,e){var l=e.component;t(e,11,0,"4","1:1"),t(e,14,0,l.imageData)}),(function(t,e){t(e,4,0,e.component.image)}))}var I=a.ub("app-res-data",g,(function(t){return a.Pb(0,[(t()(),a.yb(0,0,null,null,1,"app-res-data",[],null,null,null,R,H)),a.xb(1,114688,null,0,g,[y.a,x.e,v.c,z],null,null)],(function(t,e){t(e,1,0)}),null)}),{},{},[]),S=l("POq0"),M=l("QQfA"),E=l("/HVE"),P=l("Fwaw"),T=l("zMNK"),L=l("5GAg"),D=l("rWV4"),F=l("elxJ"),U=l("r0V8"),C=l("Gi4r"),_=l("BzsH"),A=l("8P0U"),B=l("hOhj"),q=l("dFDH"),N=l("HsOI"),X=l("oapL"),G=l("ZwOa"),V=l("fnUE");l.d(e,"ResDataModuleNgFactory",(function(){return J}));var J=a.vb(n,[],(function(t){return a.Gb([a.Hb(512,a.j,a.gb,[[8,[s.a,s.b,o.a,r.a,I]],[3,a.j],a.A]),a.Hb(4608,k.k,k.j,[a.w,[2,k.w]]),a.Hb(4608,S.c,S.c,[]),a.Hb(4608,M.a,M.a,[M.g,M.c,a.j,M.f,M.d,a.s,a.C,k.c,m.b,[2,k.f]]),a.Hb(5120,M.h,M.i,[M.a]),a.Hb(5120,x.c,x.d,[M.a]),a.Hb(135680,x.e,x.e,[M.a,a.s,[2,k.f],[2,x.b],x.c,[3,x.e],M.c]),a.Hb(4608,d.a,d.a,[]),a.Hb(4608,v.i,v.o,[k.c,a.F,v.m]),a.Hb(4608,v.p,v.p,[v.i,v.n]),a.Hb(5120,v.a,(function(t){return[t]}),[v.p]),a.Hb(4608,v.l,v.l,[]),a.Hb(6144,v.j,null,[v.l]),a.Hb(4608,v.h,v.h,[v.j]),a.Hb(6144,v.b,null,[v.h]),a.Hb(4608,v.f,v.k,[v.b,a.s]),a.Hb(4608,v.c,v.c,[v.f]),a.Hb(1073742336,k.b,k.b,[]),a.Hb(1073742336,m.a,m.a,[]),a.Hb(1073742336,d.e,d.e,[[2,d.b],[2,p.f]]),a.Hb(1073742336,E.b,E.b,[]),a.Hb(1073742336,d.h,d.h,[]),a.Hb(1073742336,P.c,P.c,[]),a.Hb(1073742336,T.g,T.g,[]),a.Hb(1073742336,S.d,S.d,[]),a.Hb(1073742336,L.a,L.a,[]),a.Hb(1073742336,D.k,D.k,[]),a.Hb(1073742336,F.d,F.d,[]),a.Hb(1073742336,U.b,U.b,[]),a.Hb(1073742336,U.a,U.a,[]),a.Hb(1073742336,C.a,C.a,[]),a.Hb(1073742336,_.b,_.b,[]),a.Hb(1073742336,A.c,A.c,[]),a.Hb(1073742336,B.b,B.b,[]),a.Hb(1073742336,M.e,M.e,[]),a.Hb(1073742336,q.e,q.e,[]),a.Hb(1073742336,d.f,d.f,[]),a.Hb(1073742336,u.b,u.b,[]),a.Hb(1073742336,x.h,x.h,[]),a.Hb(1073742336,N.d,N.d,[]),a.Hb(1073742336,X.c,X.c,[]),a.Hb(1073742336,G.b,G.b,[]),a.Hb(1073742336,V.a,V.a,[]),a.Hb(1073742336,y.o,y.o,[[2,y.t],[2,y.k]]),a.Hb(1073742336,v.e,v.e,[]),a.Hb(1073742336,v.d,v.d,[]),a.Hb(1073742336,n,n,[]),a.Hb(256,v.m,"XSRF-TOKEN",[]),a.Hb(256,v.n,"X-XSRF-TOKEN",[]),a.Hb(1024,y.i,(function(){return[[{path:"",component:g},{path:"res-data",component:g}]]}),[])])}))}}]);