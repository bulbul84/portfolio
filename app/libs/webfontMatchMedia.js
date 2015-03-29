/**
 * Created by awalpole on 11/09/2014.
 */

/* Web Font Loader v1.5.14 - (c) Adobe Systems, Google. License: Apache 2.0 */
;(function(window,document,undefined){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function k(a,b,c){k=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return k.apply(null,arguments)}var n=Date.now||function(){return+new Date};function q(a,b){this.J=a;this.t=b||a;this.C=this.t.document}q.prototype.createElement=function(a,b,c){a=this.C.createElement(a);if(b)for(var d in b)b.hasOwnProperty(d)&&("style"==d?a.style.cssText=b[d]:a.setAttribute(d,b[d]));c&&a.appendChild(this.C.createTextNode(c));return a};function r(a,b,c){a=a.C.getElementsByTagName(b)[0];a||(a=document.documentElement);a&&a.lastChild&&a.insertBefore(c,a.lastChild)}function ca(a,b){function c(){a.C.body?b():setTimeout(c,0)}c()}
  function s(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function t(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
  function u(a){if("string"===typeof a.ma)return a.ma;var b=a.t.location.protocol;"about:"==b&&(b=a.J.location.protocol);return"https:"==b?"https:":"http:"}function v(a,b){var c=a.createElement("link",{rel:"stylesheet",href:b}),d=!1;c.onload=function(){d||(d=!0)};c.onerror=function(){d||(d=!0)};r(a,"head",c)}
  function w(a,b,c,d){var e=a.C.getElementsByTagName("head")[0];if(e){var f=a.createElement("script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);window.setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function x(a,b){this.X=a;this.fa=b};function y(a,b,c,d){this.c=null!=a?a:null;this.g=null!=b?b:null;this.A=null!=c?c:null;this.e=null!=d?d:null}var da=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;y.prototype.compare=function(a){return this.c>a.c||this.c===a.c&&this.g>a.g||this.c===a.c&&this.g===a.g&&this.A>a.A?1:this.c<a.c||this.c===a.c&&this.g<a.g||this.c===a.c&&this.g===a.g&&this.A<a.A?-1:0};y.prototype.toString=function(){return[this.c,this.g||"",this.A||"",this.e||""].join("")};
  function z(a){a=da.exec(a);var b=null,c=null,d=null,e=null;a&&(null!==a[1]&&a[1]&&(b=parseInt(a[1],10)),null!==a[2]&&a[2]&&(c=parseInt(a[2],10)),null!==a[3]&&a[3]&&(d=parseInt(a[3],10)),null!==a[4]&&a[4]&&(e=/^[0-9]+$/.test(a[4])?parseInt(a[4],10):a[4]));return new y(b,c,d,e)};function A(a,b,c,d,e,f,g,h){this.M=a;this.k=h}A.prototype.getName=function(){return this.M};function B(a){this.a=a}var ea=new A("Unknown",0,0,0,0,0,0,new x(!1,!1));
  B.prototype.parse=function(){var a;if(-1!=this.a.indexOf("MSIE")||-1!=this.a.indexOf("Trident/")){a=C(this);var b=z(D(this)),c=null,d=E(this.a,/Trident\/([\d\w\.]+)/,1),c=-1!=this.a.indexOf("MSIE")?z(E(this.a,/MSIE ([\d\w\.]+)/,1)):z(E(this.a,/rv:([\d\w\.]+)/,1));""!=d&&z(d);a=new A("MSIE",0,0,0,0,0,0,new x("Windows"==a&&6<=c.c||"Windows Phone"==a&&8<=b.c,!1))}else if(-1!=this.a.indexOf("Opera"))a:if(a=z(E(this.a,/Presto\/([\d\w\.]+)/,1)),z(D(this)),null!==a.c||z(E(this.a,/rv:([^\)]+)/,1)),-1!=this.a.indexOf("Opera Mini/"))a=
    z(E(this.a,/Opera Mini\/([\d\.]+)/,1)),a=new A("OperaMini",0,0,0,C(this),0,0,new x(!1,!1));else{if(-1!=this.a.indexOf("Version/")&&(a=z(E(this.a,/Version\/([\d\.]+)/,1)),null!==a.c)){a=new A("Opera",0,0,0,C(this),0,0,new x(10<=a.c,!1));break a}a=z(E(this.a,/Opera[\/ ]([\d\.]+)/,1));a=null!==a.c?new A("Opera",0,0,0,C(this),0,0,new x(10<=a.c,!1)):new A("Opera",0,0,0,C(this),0,0,new x(!1,!1))}else/OPR\/[\d.]+/.test(this.a)?a=F(this):/AppleWeb(K|k)it/.test(this.a)?a=F(this):-1!=this.a.indexOf("Gecko")?
    (a="Unknown",b=new y,z(D(this)),b=!1,-1!=this.a.indexOf("Firefox")?(a="Firefox",b=z(E(this.a,/Firefox\/([\d\w\.]+)/,1)),b=3<=b.c&&5<=b.g):-1!=this.a.indexOf("Mozilla")&&(a="Mozilla"),c=z(E(this.a,/rv:([^\)]+)/,1)),b||(b=1<c.c||1==c.c&&9<c.g||1==c.c&&9==c.g&&2<=c.A),a=new A(a,0,0,0,C(this),0,0,new x(b,!1))):a=ea;return a};
  function C(a){var b=E(a.a,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!=b)return/BB\d{2}/.test(b)&&(b="BlackBerry"),b;a=E(a.a,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/,1);return""!=a?("Mac_PowerPC"==a?a="Macintosh":"PlayStation"==a&&(a="Linux"),a):"Unknown"}
  function D(a){var b=E(a.a,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(b||(b=E(a.a,/Windows Phone( OS)? ([^;)]+)/,2))||(b=E(a.a,/(iPhone )?OS ([\d_]+)/,2)))return b;if(b=E(a.a,/(?:Linux|CrOS|CrKey) ([^;)]+)/,1))for(var b=b.split(/\s/),c=0;c<b.length;c+=1)if(/^[\d\._]+$/.test(b[c]))return b[c];return(a=E(a.a,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}
  function F(a){var b=C(a),c=z(D(a)),d=z(E(a.a,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1)),e="Unknown",f=new y,f="Unknown",g=!1;/OPR\/[\d.]+/.test(a.a)?e="Opera":-1!=a.a.indexOf("Chrome")||-1!=a.a.indexOf("CrMo")||-1!=a.a.indexOf("CriOS")?e="Chrome":/Silk\/\d/.test(a.a)?e="Silk":"BlackBerry"==b||"Android"==b?e="BuiltinBrowser":-1!=a.a.indexOf("PhantomJS")?e="PhantomJS":-1!=a.a.indexOf("Safari")?e="Safari":-1!=a.a.indexOf("AdobeAIR")?e="AdobeAIR":-1!=a.a.indexOf("PlayStation")&&(e="BuiltinBrowser");"BuiltinBrowser"==
  e?f="Unknown":"Silk"==e?f=E(a.a,/Silk\/([\d\._]+)/,1):"Chrome"==e?f=E(a.a,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=a.a.indexOf("Version/")?f=E(a.a,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==e?f=E(a.a,/AdobeAIR\/([\d\.]+)/,1):"Opera"==e?f=E(a.a,/OPR\/([\d.]+)/,1):"PhantomJS"==e&&(f=E(a.a,/PhantomJS\/([\d.]+)/,1));f=z(f);g="AdobeAIR"==e?2<f.c||2==f.c&&5<=f.g:"BlackBerry"==b?10<=c.c:"Android"==b?2<c.c||2==c.c&&1<c.g:526<=d.c||525<=d.c&&13<=d.g;return new A(e,0,0,0,0,0,0,new x(g,536>d.c||536==d.c&&11>d.g))}
  function E(a,b,c){return(a=a.match(b))&&a[c]?a[c]:""};function G(a){this.la=a||"-"}G.prototype.e=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.la)};function H(a,b){this.M=a;this.Y=4;this.N="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.N=c[1],this.Y=parseInt(c[2],10))}H.prototype.getName=function(){return this.M};function I(a){return a.N+a.Y}function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.d=a;this.p=a.t.document.documentElement;this.P=b;this.j="wf";this.h=new G("-");this.ga=!1!==b.events;this.B=!1!==b.classes}function J(a){if(a.B){var b=t(a.p,a.h.e(a.j,"active")),c=[],d=[a.h.e(a.j,"loading")];b||c.push(a.h.e(a.j,"inactive"));s(a.p,c,d)}K(a,"inactive")}function K(a,b,c){if(a.ga&&a.P[b])if(c)a.P[b](c.getName(),I(c));else a.P[b]()};function ia(){this.w={}};function L(a,b){this.d=a;this.G=b;this.m=this.d.createElement("span",{"aria-hidden":"true"},this.G)}function M(a){r(a.d,"body",a.m)}
  function N(a){var b;b=[];for(var c=a.M.split(/,\s*/),d=0;d<c.length;d++){var e=c[d].replace(/['"]/g,"");-1==e.indexOf(" ")?b.push(e):b.push("'"+e+"'")}b=b.join(",");c="normal";"o"===a.N?c="oblique":"i"===a.N&&(c="italic");return"display:block;position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+b+";"+("font-style:"+c+";font-weight:"+(a.Y+"00")+";")}
  L.prototype.remove=function(){var a=this.m;a.parentNode&&a.parentNode.removeChild(a)};function O(a,b,c,d,e,f,g,h){this.Z=a;this.ja=b;this.d=c;this.s=d;this.G=h||"BESbswy";this.k=e;this.I={};this.W=f||3E3;this.ba=g||null;this.F=this.D=null;a=new L(this.d,this.G);M(a);for(var m in P)P.hasOwnProperty(m)&&(b=new H(P[m],I(this.s)),b=N(b),a.m.style.cssText=b,this.I[P[m]]=a.m.offsetWidth);a.remove()}var P={ra:"serif",qa:"sans-serif",pa:"monospace"};
  O.prototype.start=function(){this.D=new L(this.d,this.G);M(this.D);this.F=new L(this.d,this.G);M(this.F);this.na=n();var a=new H(this.s.getName()+",serif",I(this.s)),a=N(a);this.D.m.style.cssText=a;a=new H(this.s.getName()+",sans-serif",I(this.s));a=N(a);this.F.m.style.cssText=a;Q(this)};function R(a,b,c){for(var d in P)if(P.hasOwnProperty(d)&&b===a.I[P[d]]&&c===a.I[P[d]])return!0;return!1}
  function Q(a){var b=a.D.m.offsetWidth,c=a.F.m.offsetWidth;b===a.I.serif&&c===a.I["sans-serif"]||a.k.fa&&R(a,b,c)?n()-a.na>=a.W?a.k.fa&&R(a,b,c)&&(null===a.ba||a.ba.hasOwnProperty(a.s.getName()))?S(a,a.Z):S(a,a.ja):ja(a):S(a,a.Z)}function ja(a){setTimeout(k(function(){Q(this)},a),25)}function S(a,b){a.D.remove();a.F.remove();b(a.s)};function T(a,b,c,d){this.d=b;this.u=c;this.R=0;this.da=this.aa=!1;this.W=d;this.k=a.k}function ka(a,b,c,d,e){c=c||{};if(0===b.length&&e)J(a.u);else for(a.R+=b.length,e&&(a.aa=e),e=0;e<b.length;e++){var f=b[e],g=c[f.getName()],h=a.u,m=f;h.B&&s(h.p,[h.h.e(h.j,m.getName(),I(m).toString(),"loading")]);K(h,"fontloading",m);h=null;h=new O(k(a.ha,a),k(a.ia,a),a.d,f,a.k,a.W,d,g);h.start()}}
  T.prototype.ha=function(a){var b=this.u;b.B&&s(b.p,[b.h.e(b.j,a.getName(),I(a).toString(),"active")],[b.h.e(b.j,a.getName(),I(a).toString(),"loading"),b.h.e(b.j,a.getName(),I(a).toString(),"inactive")]);K(b,"fontactive",a);this.da=!0;la(this)};
  T.prototype.ia=function(a){var b=this.u;if(b.B){var c=t(b.p,b.h.e(b.j,a.getName(),I(a).toString(),"active")),d=[],e=[b.h.e(b.j,a.getName(),I(a).toString(),"loading")];c||d.push(b.h.e(b.j,a.getName(),I(a).toString(),"inactive"));s(b.p,d,e)}K(b,"fontinactive",a);la(this)};function la(a){0==--a.R&&a.aa&&(a.da?(a=a.u,a.B&&s(a.p,[a.h.e(a.j,"active")],[a.h.e(a.j,"loading"),a.h.e(a.j,"inactive")]),K(a,"active")):J(a.u))};function U(a){this.J=a;this.v=new ia;this.oa=new B(a.navigator.userAgent);this.a=this.oa.parse();this.T=this.U=0;this.Q=this.S=!0}
  U.prototype.load=function(a){this.d=new q(this.J,a.context||this.J);this.S=!1!==a.events;this.Q=!1!==a.classes;var b=new ha(this.d,a),c=[],d=a.timeout;b.B&&s(b.p,[b.h.e(b.j,"loading")]);K(b,"loading");var c=this.v,e=this.d,f=[],g;for(g in a)if(a.hasOwnProperty(g)){var h=c.w[g];h&&f.push(h(a[g],e))}c=f;this.T=this.U=c.length;a=new T(this.a,this.d,b,d);d=0;for(g=c.length;d<g;d++)e=c[d],e.K(this.a,k(this.ka,this,e,b,a))};
  U.prototype.ka=function(a,b,c,d){var e=this;d?a.load(function(a,b,d){ma(e,c,a,b,d)}):(a=0==--this.U,this.T--,a&&0==this.T?J(b):(this.Q||this.S)&&ka(c,[],{},null,a))};function ma(a,b,c,d,e){var f=0==--a.U;(a.Q||a.S)&&setTimeout(function(){ka(b,c,d||null,e||null,f)},0)};function na(a,b,c){this.O=a?a:b+oa;this.q=[];this.V=[];this.ea=c||""}var oa="//fonts.googleapis.com/css";na.prototype.e=function(){if(0==this.q.length)throw Error("No fonts to load!");if(-1!=this.O.indexOf("kit="))return this.O;for(var a=this.q.length,b=[],c=0;c<a;c++)b.push(this.q[c].replace(/ /g,"+"));a=this.O+"?family="+b.join("%7C");0<this.V.length&&(a+="&subset="+this.V.join(","));0<this.ea.length&&(a+="&text="+encodeURIComponent(this.ea));return a};function pa(a){this.q=a;this.ca=[];this.L={}}
  var qa={latin:"BESbswy",cyrillic:"&#1081;&#1103;&#1046;",greek:"&#945;&#946;&#931;",khmer:"&#x1780;&#x1781;&#x1782;",Hanuman:"&#x1780;&#x1781;&#x1782;"},ra={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},sa={i:"i",italic:"i",n:"n",normal:"n"},ta=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
  pa.prototype.parse=function(){for(var a=this.q.length,b=0;b<a;b++){var c=this.q[b].split(":"),d=c[0].replace(/\+/g," "),e=["n4"];if(2<=c.length){var f;var g=c[1];f=[];if(g)for(var g=g.split(","),h=g.length,m=0;m<h;m++){var l;l=g[m];if(l.match(/^[\w-]+$/)){l=ta.exec(l.toLowerCase());var p=void 0;if(null==l)p="";else{p=void 0;p=l[1];if(null==p||""==p)p="4";else var fa=ra[p],p=fa?fa:isNaN(p)?"4":p.substr(0,1);l=l[2];p=[null==l||""==l?"n":sa[l],p].join("")}l=p}else l="";l&&f.push(l)}0<f.length&&(e=f);
    3==c.length&&(c=c[2],f=[],c=c?c.split(","):f,0<c.length&&(c=qa[c[0]])&&(this.L[d]=c))}this.L[d]||(c=qa[d])&&(this.L[d]=c);for(c=0;c<e.length;c+=1)this.ca.push(new H(d,e[c]))}};function V(a,b){this.a=(new B(navigator.userAgent)).parse();this.d=a;this.f=b}var ua={Arimo:!0,Cousine:!0,Tinos:!0};V.prototype.K=function(a,b){b(a.k.X)};V.prototype.load=function(a){var b=this.d;"MSIE"==this.a.getName()&&1!=this.f.blocking?ca(b,k(this.$,this,a)):this.$(a)};
  V.prototype.$=function(a){for(var b=this.d,c=new na(this.f.api,u(b),this.f.text),d=this.f.families,e=d.length,f=0;f<e;f++){var g=d[f].split(":");3==g.length&&c.V.push(g.pop());var h="";2==g.length&&""!=g[1]&&(h=":");c.q.push(g.join(h))}d=new pa(d);d.parse();v(b,c.e());a(d.ca,d.L,ua)};function W(a,b){this.d=a;this.f=b;this.o=[]}W.prototype.H=function(a){var b=this.d;return u(this.d)+(this.f.api||"//f.fontdeck.com/s/css/js/")+(b.t.location.hostname||b.J.location.hostname)+"/"+a+".js"};
  W.prototype.K=function(a,b){var c=this.f.id,d=this.d.t,e=this;c?(d.__webfontfontdeckmodule__||(d.__webfontfontdeckmodule__={}),d.__webfontfontdeckmodule__[c]=function(a,c){for(var d=0,m=c.fonts.length;d<m;++d){var l=c.fonts[d];e.o.push(new H(l.name,ga("font-weight:"+l.weight+";font-style:"+l.style)))}b(a)},w(this.d,this.H(c),function(a){a&&b(!1)})):b(!1)};W.prototype.load=function(a){a(this.o)};function X(a,b){this.d=a;this.f=b;this.o=[]}X.prototype.H=function(a){var b=u(this.d);return(this.f.api||b+"//use.typekit.net")+"/"+a+".js"};X.prototype.K=function(a,b){var c=this.f.id,d=this.d.t,e=this;c?w(this.d,this.H(c),function(a){if(a)b(!1);else{if(d.Typekit&&d.Typekit.config&&d.Typekit.config.fn){a=d.Typekit.config.fn;for(var c=0;c<a.length;c+=2)for(var h=a[c],m=a[c+1],l=0;l<m.length;l++)e.o.push(new H(h,m[l]));try{d.Typekit.load({events:!1,classes:!1})}catch(p){}}b(!0)}},2E3):b(!1)};
  X.prototype.load=function(a){a(this.o)};function Y(a,b){this.d=a;this.f=b;this.o=[]}Y.prototype.K=function(a,b){var c=this,d=c.f.projectId,e=c.f.version;if(d){var f=c.d.t;w(this.d,c.H(d,e),function(e){if(e)b(!1);else{if(f["__mti_fntLst"+d]&&(e=f["__mti_fntLst"+d]()))for(var h=0;h<e.length;h++)c.o.push(new H(e[h].fontfamily));b(a.k.X)}}).id="__MonotypeAPIScript__"+d}else b(!1)};Y.prototype.H=function(a,b){var c=u(this.d),d=(this.f.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return c+"//"+d+"/"+a+".js"+(b?"?v="+b:"")};
  Y.prototype.load=function(a){a(this.o)};function Z(a,b){this.d=a;this.f=b}Z.prototype.load=function(a){var b,c,d=this.f.urls||[],e=this.f.families||[],f=this.f.testStrings||{};b=0;for(c=d.length;b<c;b++)v(this.d,d[b]);d=[];b=0;for(c=e.length;b<c;b++){var g=e[b].split(":");if(g[1])for(var h=g[1].split(","),m=0;m<h.length;m+=1)d.push(new H(g[0],h[m]));else d.push(new H(g[0]))}a(d,f)};Z.prototype.K=function(a,b){return b(a.k.X)};var $=new U(this);$.v.w.custom=function(a,b){return new Z(b,a)};$.v.w.fontdeck=function(a,b){return new W(b,a)};$.v.w.monotype=function(a,b){return new Y(b,a)};$.v.w.typekit=function(a,b){return new X(b,a)};$.v.w.google=function(a,b){return new V(b,a)};this.WebFont||(this.WebFont={},this.WebFont.load=k($.load,$),this.WebFontConfig&&$.load(this.WebFontConfig));})(this,document);

var WebFont;

window.webfontMatchMedia = window.webfontMatchMedia || {};

window.webfontMatchMedia = (function (document, window, undefined) {

  return {

    stopTimer: null,

    loadFullFonts: function () {

      return WebFont.load({
        google: {
          families: ['Open Sans:400,300,300italic,400italic,600,600italic,700,700italic', 'Yellowtail']
        }
      });

    },

    loadPartialFonts: function () {

      return WebFont.load({
        google: {
          families: ['Open Sans:400,300,600,700', 'Yellowtail']
        }
      });

    },

    handleMediaMatch: function (mql) {

      if (!mql.matches) {

        webfontMatchMedia.loadFullFonts();
        mql.removeListener(webfontMatchMedia.handleMediaMatch);

      } else {

        webfontMatchMedia.loadPartialFonts();

      }

    },

    loadMatchMedia: function () {

      if (window.matchMedia) {

        var mql = window.matchMedia('screen and (max-width: 767px)');
        mql.addListener(this.handleMediaMatch);
        this.handleMediaMatch(mql);

      } else {

        webfontMatchMedia.loadFullFonts();

      }

      if (this.stopTimer) {
        clearInterval(this.stopTimer);
      }

    },

    init: function () {

      if (!WebFont) {

        this.stopTimer = setInterval(function () {

          if (WebFont) {

            webfontMatchMedia.loadMatchMedia();

          }

        }, 20);

      } else {

        webfontMatchMedia.loadMatchMedia();

      }

    }

  };

}(document, window));

if (WebFont) {
  window.webfontMatchMedia.loadMatchMedia();
} else {
  window.webfontMatchMedia.init();
}


/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-img_webp
 */
window.Modernizr = (function(window, document, undefined) {

  var version = '2.8.3',

    Modernizr = {},
    enableClasses = true,
    docElement = document.documentElement,
    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,
    inputElem,
    toString = {}.toString,
    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),
    omPrefixes = 'Webkit Moz O ms',
    cssomPrefixes = omPrefixes.split(' '),
    domPrefixes = omPrefixes.toLowerCase().split(' '),
    tests = {},
    inputs = {},
    attrs = {},
    classes = [],
    slice = classes.slice,
    featureName,

    injectElementWithStyles = function(rule, callback, nodes, testnames) {

      var style, ret, node, docOverflow,
        div = document.createElement('div'),
        body = document.body,
        fakeBody = body || document.createElement('body');

      if (parseInt(nodes, 10)) {
        while (nodes--) {
          node = document.createElement('div');
          node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
          div.appendChild(node);
        }
      }

      style = ['&#173;', '<style id="s', mod, '">', rule, '</style>'].join('');
      div.id = mod;
      (body ? div : fakeBody).innerHTML += style;
      fakeBody.appendChild(div);
      if (!body) {
        fakeBody.style.background = '';
        fakeBody.style.overflow = 'hidden';
        docOverflow = docElement.style.overflow;
        docElement.style.overflow = 'hidden';
        docElement.appendChild(fakeBody);
      }

      ret = callback(div, rule);
      if (!body) {
        fakeBody.parentNode.removeChild(fakeBody);
        docElement.style.overflow = docOverflow;
      } else {
        div.parentNode.removeChild(div);
      }

      return !!ret;

    },

    isEventSupported = (function() {

      var TAGNAMES = {
        'select': 'input',
        'change': 'input',
        'submit': 'form',
        'reset': 'form',
        'error': 'img',
        'load': 'img',
        'abort': 'img'
      };

      function isEventSupported(eventName, element) {

        element = element || document.createElement(TAGNAMES[eventName] || 'div');
        eventName = 'on' + eventName;

        var isSupported = eventName in element;

        if (!isSupported) {
          if (!element.setAttribute) {
            element = document.createElement('div');
          }
          if (element.setAttribute && element.removeAttribute) {
            element.setAttribute(eventName, '');
            isSupported = is(element[eventName], 'function');

            if (!is(element[eventName], 'undefined')) {
              element[eventName] = undefined;
            }
            element.removeAttribute(eventName);
          }
        }

        element = null;
        return isSupported;
      }
      return isEventSupported;
    })(),


    _hasOwnProperty = ({}).hasOwnProperty,
    hasOwnProp;

  if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
    hasOwnProp = function(object, property) {
      return _hasOwnProperty.call(object, property);
    };
  } else {
    hasOwnProp = function(object, property) {
      return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
    };
  }


  if (!Function.prototype.bind) {
    Function.prototype.bind = function bind(that) {

      var target = this;

      if (typeof target != "function") {
        throw new TypeError();
      }

      var args = slice.call(arguments, 1),
        bound = function() {

          if (this instanceof bound) {

            var F = function() {};
            F.prototype = target.prototype;
            var self = new F();

            var result = target.apply(
              self,
              args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
              return result;
            }
            return self;

          } else {

            return target.apply(
              that,
              args.concat(slice.call(arguments))
            );

          }

        };

      return bound;
    };
  }

  function setCss(str) {
    mStyle.cssText = str;
  }

  function setCssAll(str1, str2) {
    return setCss(prefixes.join(str1 + ';') + (str2 || ''));
  }

  function is(obj, type) {
    return typeof obj === type;
  }

  function contains(str, substr) {
    return !!~('' + str).indexOf(substr);
  }

  function testProps(props, prefixed) {
    for (var i in props) {
      var prop = props[i];
      if (!contains(prop, "-") && mStyle[prop] !== undefined) {
        return prefixed == 'pfx' ? prop : true;
      }
    }
    return false;
  }

  function testDOMProps(props, obj, elem) {
    for (var i in props) {
      var item = obj[props[i]];
      if (item !== undefined) {

        if (elem === false) return props[i];

        if (is(item, 'function')) {
          return item.bind(elem || obj);
        }

        return item;
      }
    }
    return false;
  }

  function testPropsAll(prop, prefixed, elem) {

    var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
      props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

    if (is(prefixed, "string") || is(prefixed, "undefined")) {
      return testProps(props, prefixed);

    } else {
      props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
      return testDOMProps(props, prefixed, elem);
    }
  }
  for (var feature in tests) {
    if (hasOwnProp(tests, feature)) {
      featureName = feature.toLowerCase();
      Modernizr[featureName] = tests[feature]();

      classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
    }
  }

  Modernizr.addTest = function(feature, test) {
    if (typeof feature == 'object') {
      for (var key in feature) {
        if (hasOwnProp(feature, key)) {
          Modernizr.addTest(key, feature[key]);
        }
      }
    } else {

      feature = feature.toLowerCase();

      if (Modernizr[feature] !== undefined) {
        return Modernizr;
      }

      test = typeof test == 'function' ? test() : test;

      if (typeof enableClasses !== "undefined" && enableClasses) {
        docElement.className += ' ' + (test ? '' : 'no-') + feature;
      }
      Modernizr[feature] = test;

    }

    return Modernizr;
  };

  setCss('');
  modElem = inputElem = null;

  Modernizr._version = version;

  Modernizr._prefixes = prefixes;
  Modernizr._domPrefixes = domPrefixes;
  Modernizr._cssomPrefixes = cssomPrefixes;

  Modernizr.hasEvent = isEventSupported;

  Modernizr.testProp = function(prop) {
    return testProps([prop]);
  };

  Modernizr.testAllProps = testPropsAll;

  Modernizr.testStyles = injectElementWithStyles;
  Modernizr.prefixed = function(prop, obj, elem) {
    if (!obj) {
      return testPropsAll(prop, 'pfx');
    } else {
      return testPropsAll(prop, obj, elem);
    }
  };

  docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

  (enableClasses ? ' js ' + classes.join(' ') : '');

  return Modernizr;

})(this, this.document);
// code.google.com/speed/webp/
// by rich bradshaw, ryan seddon, and paul irish
// This test is asynchronous. Watch out.

(function() {

  var image = new Image();

  image.onerror = function() {
    Modernizr.addTest('webp', false);
  };
  image.onload = function() {
    Modernizr.addTest('webp', function() {
      return image.width == 1;
    });
  };

  image.src = 'data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAUAgCdASoBAAEAL/3+/3+CAB/AAAFzrNsAAP5QAAAAAA==';

}());
