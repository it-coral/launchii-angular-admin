/*
 AngularJS v1.6.2
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(z){'use strict';function M(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.6.2/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var f=encodeURIComponent,e;e=arguments[d];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=f(e)}return new b(c)}}function sa(a){if(null==a||Va(a))return!1;if(C(a)||E(a)||D&&a instanceof
D)return!0;var b="length"in Object(a)&&a.length;return Y(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"===typeof a.item)}function q(a,b,d){var c,f;if(a)if(y(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else if(C(a)||sa(a)){var e="object"!==typeof a;c=0;for(f=a.length;c<f;c++)(e||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==q)a.forEach(b,d,a);else if(Dc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)ua.call(a,c)&&b.call(d,a[c],c,a);return a}function Ec(a,b,d){for(var c=Object.keys(a).sort(),f=0;f<c.length;f++)b.call(d,a[c[f]],c[f]);return c}function Fc(a){return function(b,d){a(d,b)}}function je(){return++qb}function Sb(a,b,d){for(var c=a.$$hashKey,f=0,e=b.length;f<e;++f){var g=b[f];if(F(g)||y(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],n=g[m];d&&F(n)?ga(n)?a[m]=new Date(n.valueOf()):Wa(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):
Tb(n)?a[m]=n.clone():(F(a[m])||(a[m]=C(n)?[]:{}),Sb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function R(a){return Sb(a,va.call(arguments,1),!1)}function ke(a){return Sb(a,va.call(arguments,1),!0)}function Z(a){return parseInt(a,10)}function Ub(a,b){return R(Object.create(a),b)}function w(){}function Xa(a){return a}function ma(a){return function(){return a}}function Vb(a){return y(a.toString)&&a.toString!==na}function x(a){return"undefined"===typeof a}function v(a){return"undefined"!==
typeof a}function F(a){return null!==a&&"object"===typeof a}function Dc(a){return null!==a&&"object"===typeof a&&!Gc(a)}function E(a){return"string"===typeof a}function Y(a){return"number"===typeof a}function ga(a){return"[object Date]"===na.call(a)}function y(a){return"function"===typeof a}function Wa(a){return"[object RegExp]"===na.call(a)}function Va(a){return a&&a.window===a}function Ya(a){return a&&a.$evalAsync&&a.$watch}function Ia(a){return"boolean"===typeof a}function le(a){return a&&Y(a.length)&&
me.test(na.call(a))}function Tb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function ne(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function wa(a){return P(a.nodeName||a[0]&&a[0].nodeName)}function Za(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function xa(a,b){function d(a,b){var d=b.$$hashKey,e;if(C(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(Dc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)ua.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!F(a))return a;var b=e.indexOf(a);if(-1!==b)return g[b];if(Va(a)||Ya(a))throw Fa("cpws");var b=!1,c=f(a);void 0===c&&(c=C(a)?[]:Object.create(Gc(a)),b=!0);e.push(a);g.push(c);return b?d(a,c):c}function f(a){switch(na.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(c(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(y(a.cloneNode))return a.cloneNode(!0)}
var e=[],g=[];if(b){if(le(b)||"[object ArrayBuffer]"===na.call(b))throw Fa("cpta");if(a===b)throw Fa("cpi");C(b)?b.length=0:q(b,function(a,d){"$$hashKey"!==d&&delete b[d]});e.push(a);g.push(b);return d(a,b)}return c(a)}function qa(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(C(a)){if(!C(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!qa(a[c],b[c]))return!1;return!0}}else{if(ga(a))return ga(b)?qa(a.getTime(),
b.getTime()):!1;if(Wa(a))return Wa(b)?a.toString()===b.toString():!1;if(Ya(a)||Ya(b)||Va(a)||Va(b)||C(b)||ga(b)||Wa(b))return!1;d=W();for(c in a)if("$"!==c.charAt(0)&&!y(a[c])){if(!qa(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&v(b[c])&&!y(b[c]))return!1;return!0}return!1}function $a(a,b,d){return a.concat(va.call(b,d))}function ab(a,b){var d=2<arguments.length?va.call(arguments,2):[];return!y(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,
$a(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Hc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Va(b)?d="$WINDOW":b&&z.document===b?d="$DOCUMENT":Ya(b)&&(d="$SCOPE");return d}function bb(a,b){if(!x(a))return Y(b)||(b=b?2:null),JSON.stringify(a,Hc,b)}function Ic(a){return E(a)?JSON.parse(a):a}function Jc(a,b){a=a.replace(oe,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return da(d)?b:d}function Wb(a,
b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=Jc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function ya(a){a=D(a).clone();try{a.empty()}catch(b){}var d=D("<div>").append(a).html();try{return a[0].nodeType===Ja?P(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+P(b)})}catch(c){return P(d)}}function Kc(a){try{return decodeURIComponent(a)}catch(b){}}function Lc(a){var b={};q((a||"").split("&"),function(a){var c,f,e;a&&(f=a=a.replace(/\+/g,"%20"),
c=a.indexOf("="),-1!==c&&(f=a.substring(0,c),e=a.substring(c+1)),f=Kc(f),v(f)&&(e=v(e)?Kc(e):!0,ua.call(b,f)?C(b[f])?b[f].push(e):b[f]=[b[f],e]:b[f]=e))});return b}function Xb(a){var b=[];q(a,function(a,c){C(a)?q(a,function(a){b.push(ka(c,!0)+(!0===a?"":"="+ka(a,!0)))}):b.push(ka(c,!0)+(!0===a?"":"="+ka(a,!0)))});return b.length?b.join("&"):""}function cb(a){return ka(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ka(a,b){return encodeURIComponent(a).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function pe(a,b){var d,c,f=Ka.length;for(c=0;c<f;++c)if(d=Ka[c]+b,E(d=a.getAttribute(d)))return d;return null}function qe(a,b){var d,c,f={};q(Ka,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});q(Ka,function(b){b+="app";var f;!d&&(f=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=f,c=f.getAttribute(b))});d&&(re?(f.strictDi=null!==pe(d,"strict-di"),
b(d,c?[c]:[],f)):z.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}function Mc(a,b,d){F(d)||(d={});d=R({strictDi:!1},d);var c=function(){a=D(a);if(a.injector()){var c=a[0]===z.document?"document":ya(a);throw Fa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);
b.unshift("ng");c=db(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},f=/^NG_ENABLE_DEBUG_INFO!/,e=/^NG_DEFER_BOOTSTRAP!/;z&&f.test(z.name)&&(d.debugInfoEnabled=!0,z.name=z.name.replace(f,""));if(z&&!e.test(z.name))return c();z.name=z.name.replace(e,"");$.resumeBootstrap=function(a){q(a,function(a){b.push(a)});return c()};y($.resumeDeferredBootstrap)&&$.resumeDeferredBootstrap()}function se(){z.name=
"NG_ENABLE_DEBUG_INFO!"+z.name;z.location.reload()}function te(a){a=$.element(a).injector();if(!a)throw Fa("test");return a.get("$$testability")}function Nc(a,b){b=b||"_";return a.replace(ue,function(a,c){return(c?b:"")+a.toLowerCase()})}function ve(){var a;if(!Oc){var b=rb();(ta=x(b)?z.jQuery:b?z[b]:void 0)&&ta.fn.on?(D=ta,R(ta.fn,{scope:Oa.scope,isolateScope:Oa.isolateScope,controller:Oa.controller,injector:Oa.injector,inheritedData:Oa.inheritedData}),a=ta.cleanData,ta.cleanData=function(b){for(var c,
f=0,e;null!=(e=b[f]);f++)(c=ta._data(e,"events"))&&c.$destroy&&ta(e).triggerHandler("$destroy");a(b)}):D=X;$.element=D;Oc=!0}}function eb(a,b,d){if(!a)throw Fa("areq",b||"?",d||"required");return a}function sb(a,b,d){d&&C(a)&&(a=a[a.length-1]);eb(y(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function La(a,b){if("hasOwnProperty"===a)throw Fa("badname",b);}function Pc(a,b,d){if(!b)return a;b=b.split(".");for(var c,f=a,e=b.length,g=0;g<e;g++)c=
b[g],a&&(a=(f=a)[c]);return!d&&y(a)?ab(f,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,f=1;b!==d&&(b=b.nextSibling);f++)if(c||a[f]!==b)c||(c=D(va.call(a,0,f))),c.push(b);return c||a}function W(){return Object.create(null)}function Yb(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=!Vb(a)||C(a)||ga(a)?bb(a):a.toString()}return a}function we(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=M("$injector"),c=M("ng");a=b(a,"angular",Object);a.$$minErr=
a.$$minErr||M;return b(a,"module",function(){var a={};return function(e,g,h){if("hasOwnProperty"===e)throw c("badname","module");g&&a.hasOwnProperty(e)&&(a[e]=null);return b(a,e,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return J}}function b(a,d,f){f||(f=c);return function(b,c){c&&y(c)&&(c.$$moduleName=e);f.push([a,d,arguments]);return J}}if(!g)throw d("nomod",e);var c=[],f=[],p=[],r=a("$injector","invoke","push",f),J={_invokeQueue:c,_configBlocks:f,_runBlocks:p,
requires:g,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",f),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:r,run:function(a){p.push(a);return this}};h&&r(h);return J})}})}
function ra(a,b){if(C(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(F(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function xe(a){var b=[];return JSON.stringify(a,function(a,c){c=Hc(a,c);if(F(c)){if(0<=b.indexOf(c))return"...";b.push(c)}return c})}function ye(a){R(a,{bootstrap:Mc,copy:xa,extend:R,merge:ke,equals:qa,element:D,forEach:q,injector:db,noop:w,bind:ab,toJson:bb,fromJson:Ic,identity:Xa,isUndefined:x,isDefined:v,isString:E,isFunction:y,
isObject:F,isNumber:Y,isElement:Tb,isArray:C,version:ze,isDate:ga,lowercase:P,uppercase:ub,callbacks:{$$counter:0},getTestability:te,reloadWithDebugInfo:se,$$minErr:M,$$csp:Ga,$$encodeUriSegment:cb,$$encodeUriQuery:ka,$$stringify:Yb});Zb=we(z);Zb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Ae});a.provider("$compile",Qc).directive({a:Be,input:Rc,textarea:Rc,form:Ce,script:De,select:Ee,option:Fe,ngBind:Ge,ngBindHtml:He,ngBindTemplate:Ie,ngClass:Je,ngClassEven:Ke,ngClassOdd:Le,
ngCloak:Me,ngController:Ne,ngForm:Oe,ngHide:Pe,ngIf:Qe,ngInclude:Re,ngInit:Se,ngNonBindable:Te,ngPluralize:Ue,ngRepeat:Ve,ngShow:We,ngStyle:Xe,ngSwitch:Ye,ngSwitchWhen:Ze,ngSwitchDefault:$e,ngOptions:af,ngTransclude:bf,ngModel:cf,ngList:df,ngChange:ef,pattern:Sc,ngPattern:Sc,required:Tc,ngRequired:Tc,minlength:Uc,ngMinlength:Uc,maxlength:Vc,ngMaxlength:Vc,ngValue:ff,ngModelOptions:gf}).directive({ngInclude:hf}).directive(vb).directive(Wc);a.provider({$anchorScroll:jf,$animate:kf,$animateCss:lf,$$animateJs:mf,
$$animateQueue:nf,$$AnimateRunner:of,$$animateAsyncRun:pf,$browser:qf,$cacheFactory:rf,$controller:sf,$document:tf,$$isDocumentHidden:uf,$exceptionHandler:vf,$filter:Xc,$$forceReflow:wf,$interpolate:xf,$interval:yf,$http:zf,$httpParamSerializer:Af,$httpParamSerializerJQLike:Bf,$httpBackend:Cf,$xhrFactory:Df,$jsonpCallbacks:Ef,$location:Ff,$log:Gf,$parse:Hf,$rootScope:If,$q:Jf,$$q:Kf,$sce:Lf,$sceDelegate:Mf,$sniffer:Nf,$templateCache:Of,$templateRequest:Pf,$$testability:Qf,$timeout:Rf,$window:Sf,$$rAF:Tf,
$$jqLite:Uf,$$Map:Vf,$$cookieReader:Wf})}])}function fb(a,b){return b.toUpperCase()}function wb(a){return a.replace(Xf,fb)}function Yc(a){a=a.nodeType;return 1===a||!a||9===a}function Zc(a,b){var d,c,f=b.createDocumentFragment(),e=[];if($b.test(a)){d=f.appendChild(b.createElement("div"));c=(Yf.exec(a)||["",""])[1].toLowerCase();c=ha[c]||ha._default;d.innerHTML=c[1]+a.replace(Zf,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;e=$a(e,d.childNodes);d=f.firstChild;d.textContent=""}else e.push(b.createTextNode(a));
f.textContent="";f.innerHTML="";q(e,function(a){f.appendChild(a)});return f}function X(a){if(a instanceof X)return a;var b;E(a)&&(a=S(a),b=!0);if(!(this instanceof X)){if(b&&"<"!==a.charAt(0))throw ac("nosel");return new X(a)}if(b){b=z.document;var d;a=(d=$f.exec(a))?[b.createElement(d[1])]:(d=Zc(a,b))?d.childNodes:[];bc(this,a)}else y(a)?$c(a):bc(this,a)}function cc(a){return a.cloneNode(!0)}function xb(a,b){b||gb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,f=d.length;c<f;c++)gb(d[c])}
function ad(a,b,d,c){if(v(c))throw ac("offargs");var f=(c=yb(a))&&c.events,e=c&&c.handle;if(e)if(b){var g=function(b){var c=f[b];v(d)&&Za(c||[],d);v(d)&&c&&0<c.length||(a.removeEventListener(b,e),delete f[b])};q(b.split(" "),function(a){g(a);zb[a]&&g(zb[a])})}else for(b in f)"$destroy"!==b&&a.removeEventListener(b,e),delete f[b]}function gb(a,b){var d=a.ng339,c=d&&hb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),ad(a)),delete hb[d],a.ng339=void 0))}function yb(a,
b){var d=a.ng339,d=d&&hb[d];b&&!d&&(a.ng339=d=++ag,d=hb[d]={events:{},data:{},handle:void 0});return d}function dc(a,b,d){if(Yc(a)){var c,f=v(d),e=!f&&b&&!F(b),g=!b;a=(a=yb(a,!e))&&a.data;if(f)a[wb(b)]=d;else{if(g)return a;if(e)return a&&a[wb(b)];for(c in b)a[wb(c)]=b[c]}}}function Ab(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Bb(a,b){b&&a.setAttribute&&q(b.split(" "),function(b){a.setAttribute("class",S((" "+(a.getAttribute("class")||
"")+" ").replace(/[\n\t]/g," ").replace(" "+S(b)+" "," ")))})}function Cb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(b.split(" "),function(a){a=S(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",S(d))}}function bc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function bd(a,b){return Db(a,"$"+(b||"ngController")+
"Controller")}function Db(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=C(b)?b:[b];a;){for(var c=0,f=b.length;c<f;c++)if(v(d=D.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function cd(a){for(xb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Eb(a,b){b||xb(a);var d=a.parentNode;d&&d.removeChild(a)}function bg(a,b){b=b||z;if("complete"===b.document.readyState)b.setTimeout(a);else D(b).on("load",a)}function $c(a){function b(){z.document.removeEventListener("DOMContentLoaded",
b);z.removeEventListener("load",b);a()}"complete"===z.document.readyState?z.setTimeout(a):(z.document.addEventListener("DOMContentLoaded",b),z.addEventListener("load",b))}function dd(a,b){var d=Fb[b.toLowerCase()];return d&&ed[wa(a)]&&d}function cg(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var e=b[d||c.type],g=e?e.length:0;if(g){if(x(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=
!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=e.specialHandlerWrapper||dg;1<g&&(e=ra(e));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,e[l])}};d.elem=a;return d}function dg(a,b,d){d.call(a,b)}function eg(a,b,d){var c=b.relatedTarget;c&&(c===a||fg.call(a,c))||d.call(a,b)}function Uf(){this.$get=function(){return R(X,{hasClass:function(a,b){a.attr&&(a=a[0]);return Ab(a,b)},addClass:function(a,
b){a.attr&&(a=a[0]);return Cb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)}})}}function Pa(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||je)():d+":"+a}function fd(){this._keys=[];this._values=[];this._lastKey=NaN;this._lastIndex=-1}function gd(a){a=Function.prototype.toString.call(a).replace(gg,"");return a.match(hg)||a.match(ig)}function jg(a){return(a=gd(a))?"function("+
(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function db(a,b){function d(a){return function(b,c){if(F(b))q(b,Fc(a));else return a(b,c)}}function c(a,b){La(a,"service");if(y(b)||C(b))b=p.instantiate(b);if(!b.$get)throw za("pget",a);return n[a+"Provider"]=b}function f(a,b){return function(){var c=O.invoke(b,this);if(x(c))throw za("undef",a);return c}}function e(a,b,d){return c(a,{$get:!1!==d?f(a,b):b})}function g(a){eb(x(a)||C(a),"modulesToLoad","not an array");var b=[],c;q(a,function(a){function d(a){var b,
c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.set(a,!0);try{E(a)?(c=Zb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):y(a)?b.push(p.invoke(a)):C(a)?b.push(p.invoke(a)):sb(a,"module")}catch(e){throw C(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),za("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===
k)throw za("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e),a[b]}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=db.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw za("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);C(a)&&(a=a[a.length-1]);d=a;if(Ha||"function"!==typeof d)d=!1;else{var f=d.$$ngIsClass;
Ia(f)||(f=d.$$ngIsClass=/^(?:class\b|constructor\()/.test(Function.prototype.toString.call(d)));d=f}return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=C(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:db.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Gb,n={$provide:{provider:d(c),factory:d(e),service:d(function(a,
b){return e(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return e(a,ma(b),!1)}),constant:d(function(a,b){La(a,"constant");n[a]=b;r[a]=b}),decorator:function(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=O.invoke(d,c);return O.invoke(b,null,{$delegate:a})}}}},p=n.$injector=h(n,function(a,b){$.isString(b)&&l.push(b);throw za("unpr",l.join(" <- "));}),r={},J=h(r,function(a,b){var c=p.get(a+"Provider",b);return O.invoke(c.$get,c,void 0,a)}),O=J;n.$injectorProvider=
{$get:ma(J)};var u=g(a),O=J.get("$injector");O.strictDi=b;q(u,function(a){a&&O.invoke(a)});return O}function jf(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function f(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===wa(a))return b=a,!0});return b}function e(a){if(a){a.scrollIntoView();var c;c=g.yOffset;y(c)?c=c():Tb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Y(c)||(c=
0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=E(a)?a:Y(a)?a.toString():d.hash();var b;a?(b=h.getElementById(a))?e(b):(b=f(h.getElementsByName(a)))?e(b):"top"===a&&e(null):e(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||bg(function(){c.$evalAsync(g)})});return g}]}function ib(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;C(a)&&(a=a.join(" "));C(b)&&(b=b.join(" "));return a+" "+b}function kg(a){E(a)&&
(a=a.split(" "));var b=W();q(a,function(a){a.length&&(b[a]=!0)});return b}function ea(a){return F(a)?a:{}}function lg(a,b,d,c){function f(a){try{a.apply(null,va.call(arguments,1))}finally{if(J--,0===J)for(;O.length;)try{O.pop()()}catch(b){d.error(b)}}}function e(){ia=null;h()}function g(){u=A();u=x(u)?null:u;qa(u,B)&&(u=B);H=B=u}function h(){var a=H;g();if(V!==k.url()||a!==u)V=k.url(),H=u,q(K,function(a){a(k.url(),u)})}var k=this,l=a.location,m=a.history,n=a.setTimeout,p=a.clearTimeout,r={};k.isMock=
!1;var J=0,O=[];k.$$completeOutstandingRequest=f;k.$$incOutstandingRequestCount=function(){J++};k.notifyWhenNoOutstandingRequests=function(a){0===J?a():O.push(a)};var u,H,V=l.href,t=b.find("base"),ia=null,A=c.history?function(){try{return m.state}catch(a){}}:w;g();k.url=function(b,d,e){x(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=H===e;if(V===b&&(!c.history||f))return k;var h=V&&Aa(V)===Aa(b);V=b;H=e;!c.history||h&&f?(h||(ia=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),
e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(ia=b)):(m[d?"replaceState":"pushState"](e,"",b),g());ia&&(ia=b);return k}return ia||l.href.replace(/%27/g,"'")};k.state=function(){return u};var K=[],I=!1,B=null;k.onUrlChange=function(b){if(!I){if(c.history)D(a).on("popstate",e);D(a).on("hashchange",e);I=!0}K.push(b);return b};k.$$applicationDestroyed=function(){D(a).off("hashchange popstate",e)};k.$$checkUrlChange=h;k.baseHref=function(){var a=t.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,
""):""};k.defer=function(a,b){var c;J++;c=n(function(){delete r[c];f(a)},b||0);r[c]=!0;return c};k.defer.cancel=function(a){return r[a]?(delete r[a],p(a),f(w),!0):!1}}function qf(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new lg(a,c,b,d)}]}function rf(){this.$get=function(){function a(a,c){function f(a){a!==n&&(p?p===a&&(p=a.n):p=a,e(a.n,a.p),e(a,n),n=a,n.n=null)}function e(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw M("$cacheFactory")("iid",a);var g=0,h=
R({},c,{id:a}),k=W(),l=c&&c.capacity||Number.MAX_VALUE,m=W(),n=null,p=null;return b[a]={put:function(a,b){if(!x(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});f(c)}a in k||g++;k[a]=b;g>l&&this.remove(p.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;f(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===n&&(n=b.p);b===p&&(p=b.n);e(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=W();g=0;m=W();n=p=null},destroy:function(){m=
h=k=null;delete b[a]},info:function(){return R({},h,{size:g})}}}var b={};a.info=function(){var a={};q(b,function(b,f){a[f]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Of(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Qc(a,b){function d(a,b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*([\w$]*)\s*$/,e=W();q(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw fa("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");
e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==P(b))throw fa("baddir",a);if(a!==a.trim())throw fa("baddir",a);}function f(a){var b=a.require||a.controller&&a.name;!C(b)&&F(b)&&q(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var e={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,h=/(([\w-]+)(?::([^;]+))?;?)/,k=ne("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
m=/^(on[a-z]+|formaction)$/,n=W();this.directive=function V(b,d){eb(b,"name");La(b,"directive");E(b)?(c(b),eb(d,"directiveFactory"),e.hasOwnProperty(b)||(e[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];q(e[b],function(e,g){try{var h=a.invoke(e);y(h)?h={compile:ma(h)}:!h.compile&&h.link&&(h.compile=ma(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=f(h);var k=h,l=h.restrict;if(l&&(!E(l)||!/[EACM]/.test(l)))throw fa("badrestrict",l,b);k.restrict=
l||"EA";h.$$moduleName=e.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),e[b].push(d)):q(b,Fc(V));return this};this.component=function(a,b){function c(a){function e(b){return y(b)||C(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:mg(b.controller)||b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};
q(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};q(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,y(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return v(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return v(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var p=!0;this.debugInfoEnabled=function(a){return v(a)?
(p=a,this):p};var r=!1;this.preAssignBindingsEnabled=function(a){return v(a)?(r=a,this):r};var J=10;this.onChangesTtl=function(a){return arguments.length?(J=a,this):J};var O=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(O=a,this):O};var u=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(u=a,this):u};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,
b,c,f,n,I,B,L,N,G){function T(){try{if(!--za)throw ea=void 0,fa("infchng",J);B.$apply(function(){for(var a=[],b=0,c=ea.length;b<c;++b)try{ea[b]()}catch(d){a.push(d)}ea=void 0;if(a.length)throw a;})}finally{za++}}function s(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function Q(a,b,c){xa.innerHTML="<span "+b+">";b=xa.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function Ma(a,
b){try{a.addClass(b)}catch(c){}}function ba(a,b,c,d,e){a instanceof D||(a=D(a));var f=Na(a,b,a,c,d,e);ba.$$addScopeClass(a);var g=null;return function(b,c,d){if(!a)throw fa("multilink");eb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==wa(d)&&na.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==g?D(ha(g,D("<div>").append(a).html())):
c?Oa.clone.call(a):a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);ba.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);c||(a=f=null);return d}}function Na(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,n,p,r;if(K)for(r=Array(c.length),m=0;m<h.length;m+=3)f=h[m],r[f]=c[f];else r=c;m=0;for(n=h.length;m<n;)k=r[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),ba.$$addScopeInfo(D(k),l)):l=a,p=c.transcludeOnThisElement?ja(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ja(a,b):null,c(f,l,
k,d,p)):f&&f(a,k.childNodes,void 0,e)}for(var h=[],k=C(a)||a instanceof D,l,m,n,p,K,r=0;r<a.length;r++){l=new s;11===Ha&&M(a,r,k);m=fc(a[r],[],l,0===r?d:void 0,e);(f=m.length?X(m,a[r],l,b,c,null,[],[],f):null)&&f.scope&&ba.$$addScopeClass(l.$$element);l=f&&f.terminal||!(n=a[r].childNodes)||!n.length?null:Na(n,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(r,f,l),p=!0,K=K||f;f=null}return p?g:null}function M(a,b,c){var d=a[b],e=d.parentNode,f;if(d.nodeType===
Ja)for(;;){f=e?d.nextSibling:a[b+1];if(!f||f.nodeType!==Ja)break;d.nodeValue+=f.nodeValue;f.parentNode&&f.parentNode.removeChild(f);c&&f===a[b+1]&&a.splice(b+1,1)}}function ja(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=W(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?ja(a,b.$$slots[f],c):null;return d}function fc(a,b,c,d,e){var f=c.$attr,g;switch(a.nodeType){case 1:g=wa(a);Y(b,
Ba(g),"E",d,e);for(var k,l,m,n,p=a.attributes,K=0,r=p&&p.length;K<r;K++){var A=!1,B=!1;k=p[K];l=k.name;m=k.value;k=Ba(l);(n=Ka.test(k))&&(l=l.replace(hd,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()}));(k=k.match(La))&&Z(k[1])&&(A=l,B=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=Ba(l.toLowerCase());f[k]=l;if(n||!c.hasOwnProperty(k))c[k]=m,dd(a,k)&&(c[k]=!0);ra(a,b,m,k,n);Y(b,k,"A",d,e,A,B)}"input"===g&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete",
"off");if(!Ga)break;f=a.className;F(f)&&(f=f.animVal);if(E(f)&&""!==f)for(;a=h.exec(f);)k=Ba(a[2]),Y(b,k,"C",d,e)&&(c[k]=S(a[3])),f=f.substr(a.index+a[0].length);break;case Ja:ma(b,a.nodeValue);break;case 8:if(!Fa)break;jb(a,b,c,d,e)}b.sort(ka);return b}function jb(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=Ba(f[1]);Y(b,h,"M",d,e)&&(c[h]=S(f[2]))}}catch(k){}}function id(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw fa("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&
e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return D(d)}function jd(a,b,c){return function(d,e,f,g,h){e=id(e[0],b,c);return a(d,e,f,g,h)}}function gc(a,b,c,d,e,f){var g;return a?ba(b,c,d,e,f):function(){g||(g=ba(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function X(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=jd(a,c,d));a.require=t.require;a.directiveName=L;if(B===t||t.$$isolateScope)a=sa(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=jd(b,c,d));b.require=
t.require;b.directiveName=L;if(B===t||t.$$isolateScope)b=sa(b,{isolateScope:!0});k.push(b)}}function n(a,e,f,g,l){function m(a,b,c,d){var e;Ya(a)||(d=c,c=b,b=a,a=void 0);V&&(e=N);c||(c=V?L.parent():L);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,Q);if(x(f))throw fa("noslot",d,ya(L));}else return l(a,b,e,c,Q)}var p,t,u,G,J,N,T,L;b===f?(g=d,L=d.$$element):(L=D(f),g=new s(L,d));J=e;B?G=e.$new(!0):K&&(J=e.$parent);l&&(T=m,T.$$boundTransclude=l,T.isSlotFilled=function(a){return!!l.$$slots[a]});A&&(N=
ca(L,g,T,A,G,e,B));B&&(ba.$$addScopeInfo(L,G,!0,!(I&&(I===B||I===B.$$originalDirective))),ba.$$addScopeClass(L,!0),G.$$isolateBindings=B.$$isolateBindings,t=oa(e,g,G,G.$$isolateBindings,B),t.removeWatches&&G.$on("$destroy",t.removeWatches));for(p in N){t=A[p];u=N[p];var Hb=t.$$bindings.bindToController;if(r){u.bindingInfo=Hb?oa(J,g,u.instance,Hb,t):{};var O=u();O!==u.instance&&(u.instance=O,L.data("$"+t.name+"Controller",O),u.bindingInfo.removeWatches&&u.bindingInfo.removeWatches(),u.bindingInfo=
oa(J,g,u.instance,Hb,t))}else u.instance=u(),L.data("$"+t.name+"Controller",u.instance),u.bindingInfo=oa(J,g,u.instance,Hb,t)}q(A,function(a,b){var c=a.require;a.bindToController&&!C(c)&&F(c)&&R(N[b].instance,U(b,c,L,N))});q(N,function(a){var b=a.instance;if(y(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(y(b.$onInit))try{b.$onInit()}catch(e){c(e)}y(b.$doCheck)&&(J.$watch(function(){b.$doCheck()}),b.$doCheck());y(b.$onDestroy)&&J.$on("$destroy",function(){b.$onDestroy()})});
p=0;for(t=h.length;p<t;p++)u=h[p],ta(u,u.isolateScope?G:e,L,g,u.require&&U(u.directiveName,u.require,L,N),T);var Q=e;B&&(B.template||null===B.templateUrl)&&(Q=G);a&&a(Q,f.childNodes,void 0,l);for(p=k.length-1;0<=p;p--)u=k[p],ta(u,u.isolateScope?G:e,L,g,u.require&&U(u.directiveName,u.require,L,N),T);q(N,function(a){a=a.instance;y(a.$postLink)&&a.$postLink()})}l=l||{};for(var p=-Number.MAX_VALUE,K=l.newScopeDirective,A=l.controllerDirectives,B=l.newIsolateScopeDirective,I=l.templateDirective,u=l.nonTlbTranscludeDirective,
J=!1,N=!1,V=l.hasElementTranscludeDirective,G=d.$$element=D(b),t,L,T,O=e,Q,v=!1,Ma=!1,w,z=0,E=a.length;z<E;z++){t=a[z];var Na=t.$$start,M=t.$$end;Na&&(G=id(b,Na,M));T=void 0;if(p>t.priority)break;if(w=t.scope)t.templateUrl||(F(w)?($("new/isolated scope",B||K,t,G),B=t):$("new/isolated scope",B,t,G)),K=K||t;L=t.name;if(!v&&(t.replace&&(t.templateUrl||t.template)||t.transclude&&!t.$$tlb)){for(w=z+1;v=a[w++];)if(v.transclude&&!v.$$tlb||v.replace&&(v.templateUrl||v.template)){Ma=!0;break}v=!0}!t.templateUrl&&
t.controller&&(A=A||W(),$("'"+L+"' controller",A[L],t,G),A[L]=t);if(w=t.transclude)if(J=!0,t.$$tlb||($("transclusion",u,t,G),u=t),"element"===w)V=!0,p=t.priority,T=G,G=d.$$element=D(ba.$$createComment(L,d[L])),b=G[0],la(f,va.call(T,0),b),T[0].$$parentNode=T[0].parentNode,O=gc(Ma,T,e,p,g&&g.name,{nonTlbTranscludeDirective:u});else{var ja=W();if(F(w)){T=[];var P=W(),jb=W();q(w,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;P[a]=b;ja[b]=null;jb[b]=c});q(G.contents(),function(a){var b=P[Ba(wa(a))];
b?(jb[b]=!0,ja[b]=ja[b]||[],ja[b].push(a)):T.push(a)});q(jb,function(a,b){if(!a)throw fa("reqslot",b);});for(var ec in ja)ja[ec]&&(ja[ec]=gc(Ma,ja[ec],e))}else T=D(cc(b)).contents();G.empty();O=gc(Ma,T,e,void 0,void 0,{needsNewScope:t.$$isolateScope||t.$$newScope});O.$$slots=ja}if(t.template)if(N=!0,$("template",I,t,G),I=t,w=y(t.template)?t.template(G,d):t.template,w=Ea(w),t.replace){g=t;T=$b.test(w)?kd(ha(t.templateNamespace,S(w))):[];b=T[0];if(1!==T.length||1!==b.nodeType)throw fa("tplrt",L,"");
la(f,G,b);E={$attr:{}};w=fc(b,[],E);var Y=a.splice(z+1,a.length-(z+1));(B||K)&&aa(w,B,K);a=a.concat(w).concat(Y);da(d,E);E=a.length}else G.html(w);if(t.templateUrl)N=!0,$("template",I,t,G),I=t,t.replace&&(g=t),n=ga(a.splice(z,a.length-z),G,d,f,J&&O,h,k,{controllerDirectives:A,newScopeDirective:K!==t&&K,newIsolateScopeDirective:B,templateDirective:I,nonTlbTranscludeDirective:u}),E=a.length;else if(t.compile)try{Q=t.compile(G,d,O);var Z=t.$$originalDirective||t;y(Q)?m(null,ab(Z,Q),Na,M):Q&&m(ab(Z,Q.pre),
ab(Z,Q.post),Na,M)}catch(ea){c(ea,ya(G))}t.terminal&&(n.terminal=!0,p=Math.max(p,t.priority))}n.scope=K&&!0===K.scope;n.transcludeOnThisElement=J;n.templateOnThisElement=N;n.transclude=O;l.hasElementTranscludeDirective=V;return n}function U(a,b,c,d){var e;if(E(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):c.data(h)}if(!e&&!f)throw fa("ctreq",b,a);}else if(C(b))for(e=
[],g=0,f=b.length;g<f;g++)e[g]=U(a,b[g],c,d);else F(b)&&(e={},q(b,function(b,f){e[f]=U(a,b,c,d)}));return e||null}function ca(a,b,c,d,e,f,g){var h=W(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},n=l.controller;"@"===n&&(n=b[l.name]);m=I(n,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function aa(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Ub(a[d],{$$isolateScope:b,$$newScope:c})}function Y(b,c,f,g,h,k,l){if(c===
h)return null;var m=null;if(e.hasOwnProperty(c)){h=a.get(c+"Directive");for(var n=0,p=h.length;n<p;n++)if(c=h[n],(x(g)||g>c.priority)&&-1!==c.restrict.indexOf(f)){k&&(c=Ub(c,{$$start:k,$$end:l}));if(!c.$$bindings){var K=m=c,r=c.name,A={isolateScope:null,bindToController:null};F(K.scope)&&(!0===K.bindToController?(A.bindToController=d(K.scope,r,!0),A.isolateScope={}):A.isolateScope=d(K.scope,r,!1));F(K.bindToController)&&(A.bindToController=d(K.bindToController,r,!0));if(A.bindToController&&!K.controller)throw fa("noctrl",
r);m=m.$$bindings=A;F(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);m=c}}return m}function Z(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function da(a,b){var c=b.$attr,d=a.$attr;q(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}
function ga(a,b,d,e,g,h,k,l){var m=[],n,p,K=b[0],r=a.shift(),u=Ub(r,{templateUrl:null,transclude:null,replace:null,$$originalDirective:r}),t=y(r.templateUrl)?r.templateUrl(b,d):r.templateUrl,B=r.templateNamespace;b.empty();f(t).then(function(c){var f,A;c=Ea(c);if(r.replace){c=$b.test(c)?kd(ha(B,S(c))):[];f=c[0];if(1!==c.length||1!==f.nodeType)throw fa("tplrt",r.name,t);c={$attr:{}};la(e,b,f);var I=fc(f,[],c);F(r.scope)&&aa(I,!0);a=I.concat(a);da(d,c)}else f=K,b.html(c);a.unshift(u);n=X(a,f,d,g,b,
r,h,k,l);q(e,function(a,c){a===f&&(e[c]=b[0])});for(p=Na(b[0].childNodes,g);m.length;){c=m.shift();A=m.shift();var G=m.shift(),J=m.shift(),I=b[0];if(!c.$$destroyed){if(A!==K){var N=A.className;l.hasElementTranscludeDirective&&r.replace||(I=cc(f));la(G,D(A),I);Ma(D(I),N)}A=n.transcludeOnThisElement?ja(c,n.transclude,J):J;n(p,c,I,e,A)}}m=null}).catch(function(a){a instanceof Error&&c(a)});return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,c,d,a):(n.transcludeOnThisElement&&(a=ja(b,n.transclude,
e)),n(p,b,c,d,a)))}}function ka(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function $(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw fa("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ya(d));}function ma(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&ba.$$addBindingClass(a);return function(a,c){var e=c.parent();b||ba.$$addBindingClass(e);ba.$$addBindingInfo(e,d.expressions);
a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ha(a,b){a=P(a||"html");switch(a){case "svg":case "math":var c=z.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function pa(a,b){if("srcdoc"===b)return L.HTML;var c=wa(a);if("src"===b||"ngSrc"===b){if(-1===["img","video","audio","source","track"].indexOf(c))return L.RESOURCE_URL}else if("xlinkHref"===b||"form"===c&&"action"===b||"link"===c&&"href"===b)return L.RESOURCE_URL}function ra(a,
c,d,e,f){var g=pa(a,e),h=k[e]||f,l=b(d,!f,g,h);if(l){if("multiple"===e&&"select"===wa(a))throw fa("selmulti",ya(a));if(m.test(e))throw fa("nodomevents");c.push({priority:100,compile:function(){return{pre:function(a,c,f){c=f.$$observers||(f.$$observers=W());var k=f[e];k!==d&&(l=k&&b(k,!0,g,h),d=k);l&&(f[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(f.$$observers&&f.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!==b?f.$updateClass(a,b):f.$set(e,a)}))}}}})}}function la(a,b,c){var d=b[0],e=
b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]===d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=z.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);D.hasData(d)&&(D.data(c,D.data(d)),D(d).off("$destroy"));D.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function sa(a,b){return R(function(){return a.apply(null,arguments)},
a,b)}function ta(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ya(d))}}function oa(a,c,d,e,f){function g(b,c,e){!y(d.$onChanges)||c===e||c!==c&&e!==e||(ea||(a.$$postDigest(T),ea=[]),m||(m={},ea.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Ib(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;q(e,function(e,h){var m=e.attrName,p=e.optional,r,A,u,B;switch(e.mode){case "@":p||ua.call(c,m)||(d[h]=c[m]=void 0);p=c.$observe(m,function(a){if(E(a)||Ia(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=
a;r=c[m];E(r)?d[h]=b(r)(a):Ia(r)&&(d[h]=r);l[h]=new Ib(hc,d[h]);k.push(p);break;case "=":if(!ua.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;A=n(c[m]);B=A.literal?qa:function(a,b){return a===b||a!==a&&b!==b};u=A.assign||function(){r=d[h]=A(a);throw fa("nonassign",c[m],m,f.name);};r=d[h]=A(a);p=function(b){B(b,d[h])||(B(b,r)?u(a,b=d[h]):d[h]=b);return r=b};p.$stateful=!0;p=e.collection?a.$watchCollection(c[m],p):a.$watch(n(c[m],p),null,A.literal);k.push(p);break;case "<":if(!ua.call(c,m)){if(p)break;
c[m]=void 0}if(p&&!c[m])break;A=n(c[m]);var I=A.literal,G=d[h]=A(a);l[h]=new Ib(hc,d[h]);p=a.$watch(A,function(a,b){if(b===a){if(b===G||I&&qa(b,G))return;b=G}g(h,a,b);d[h]=a},I);k.push(p);break;case "&":A=c.hasOwnProperty(m)?n(c[m]):w;if(A===w&&p)break;d[h]=function(b){return A(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Da=/^\w/,xa=z.document.createElement("div"),Fa=O,Ga=u,za=J,ea;s.prototype={$normalize:Ba,$addClass:function(a){a&&
0<a.length&&N.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&N.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=ld(a,b);c&&c.length&&N.addClass(this.$$element,c);(c=ld(b,a))&&c.length&&N.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=dd(this.$$element[0],a),g=md[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Nc(a,"-"));f=wa(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===
a)||"img"===f&&"src"===a)this[a]=b=G(b,"src"===a);else if("img"===f&&"srcset"===a&&v(b)){for(var f="",g=S(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var m=2*l,f=f+G(S(g[m]),!0),f=f+(" "+S(g[m+1]));g=S(g[2*l]).split(/\s/);f+=G(S(g[0]),!0);2===g.length&&(f+=" "+S(g[1]));this[a]=b=f}!1!==d&&(null===b||x(b)?this.$$element.removeAttr(e):Da.test(e)?this.$$element.attr(e,b):Q(this.$$element[0],e,b));(a=this.$$observers)&&q(a[h],function(a){try{a(b)}catch(d){c(d)}})},
$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=W()),e=d[a]||(d[a]=[]);e.push(b);B.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||x(c[a])||b(c[a])});return function(){Za(e,b)}}};var Aa=b.startSymbol(),Ca=b.endSymbol(),Ea="{{"===Aa&&"}}"===Ca?Xa:function(a){return a.replace(/\{\{/g,Aa).replace(/}}/g,Ca)},Ka=/^ngAttr[A-Z]/,La=/^(.+)Start$/;ba.$$addBindingInfo=p?function(a,b){var c=a.data("$binding")||[];C(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:w;ba.$$addBindingClass=
p?function(a){Ma(a,"ng-binding")}:w;ba.$$addScopeInfo=p?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:w;ba.$$addScopeClass=p?function(a,b){Ma(a,b?"ng-isolate-scope":"ng-scope")}:w;ba.$$createComment=function(a,b){var c="";p&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return z.document.createComment(c)};return ba}]}function Ib(a,b){this.previousValue=a;this.currentValue=b}function Ba(a){return a.replace(hd,"").replace(ng,fb)}function ld(a,b){var d="",c=a.split(/\s+/),
f=b.split(/\s+/),e=0;a:for(;e<c.length;e++){for(var g=c[e],h=0;h<f.length;h++)if(g===f[h])continue a;d+=(0<d.length?" ":"")+g}return d}function kd(a){a=D(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===Ja&&""===d.nodeValue.trim())&&og.call(a,b,1)}return a}function mg(a,b){if(b&&E(b))return b;if(E(a)){var d=nd.exec(a);if(d)return d[3]}}function sf(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){La(b,"controller");F(b)?
R(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function f(a,b,c,d){if(!a||!F(a.$scope))throw M("$controller")("noscp",d,b);a.$scope[b]=c}return function(e,g,h,k){var l,m,n;h=!0===h;k&&E(k)&&(n=k);if(E(e)){k=e.match(nd);if(!k)throw od("ctrlfmt",e);m=k[1];n=n||k[3];e=a.hasOwnProperty(m)?a[m]:Pc(g.$scope,m,!0)||(b?Pc(c,m,!0):void 0);if(!e)throw od("ctrlreg",m);sb(e,m,!0)}if(h)return h=(C(e)?e[e.length-1]:e).prototype,l=Object.create(h||null),n&&f(g,n,
l,m||e.name),R(function(){var a=d.invoke(e,l,g,m);a!==l&&(F(a)||y(a))&&(l=a,n&&f(g,n,l,m||e.name));return l},{instance:l,identifier:n});l=d.instantiate(e,g,m);n&&f(g,n,l,m||e.name);return l}}]}function tf(){this.$get=["$window",function(a){return D(a.document)}]}function uf(){this.$get=["$document","$rootScope",function(a,b){function d(){f=c.hidden}var c=a[0],f=c&&c.hidden;a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d)});return function(){return f}}]}function vf(){this.$get=
["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function ic(a){return F(a)?ga(a)?a.toISOString():bb(a):a}function Af(){this.$get=function(){return function(a){if(!a)return"";var b=[];Ec(a,function(a,c){null===a||x(a)||(C(a)?q(a,function(a){b.push(ka(c)+"="+ka(ic(a)))}):b.push(ka(c)+"="+ka(ic(a))))});return b.join("&")}}}function Bf(){this.$get=function(){return function(a){function b(a,f,e){null===a||x(a)||(C(a)?q(a,function(a,c){b(a,f+"["+(F(a)?c:"")+"]")}):F(a)&&!ga(a)?Ec(a,
function(a,c){b(a,f+(e?"":"[")+c+(e?"":"]"))}):d.push(ka(f)+"="+ka(ic(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function jc(a,b){if(E(a)){var d=a.replace(pg,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(pd))||(c=(c=d.match(qg))&&rg[c[0]].test(d));c&&(a=Ic(d))}}return a}function qd(a){var b=W(),d;E(a)?q(a.split("\n"),function(a){d=a.indexOf(":");var f=P(S(a.substr(0,d)));a=S(a.substr(d+1));f&&(b[f]=b[f]?b[f]+", "+a:a)}):F(a)&&q(a,function(a,d){var e=P(d),g=S(a);e&&
(b[e]=b[e]?b[e]+", "+g:g)});return b}function rd(a){var b;return function(d){b||(b=qd(a));return d?(d=b[P(d)],void 0===d&&(d=null),d):b}}function sd(a,b,d,c){if(y(c))return c(a,b,d);q(c,function(c){a=c(a,b,d)});return a}function zf(){var a=this.defaults={transformResponse:[jc],transformRequest:[function(a){return F(a)&&"[object File]"!==na.call(a)&&"[object Blob]"!==na.call(a)&&"[object FormData]"!==na.call(a)?bb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ra(kc),put:ra(kc),
patch:ra(kc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){return v(a)?(b=!!a,this):b};var d=this.interceptors=[];this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(c,f,e,g,h,k,l,m){function n(b){function d(a,b){for(var c=0,e=b.length;c<e;){var f=b[c++],g=b[c++];a=a.then(f,g)}b.length=0;return a}function e(a,b){var c,
d={};q(a,function(a,e){y(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}function f(a){var b=R({},a);b.data=sd(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}if(!F(b))throw M("$http")("badreq",b);if(!E(m.valueOf(b.url)))throw M("$http")("badreq",b.url);var g=R({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,jsonpCallbackParam:a.jsonpCallbackParam},b);g.headers=function(b){var c=
a.headers,d=R({},b.headers),f,g,h,c=R({},c.common,c[P(b.method)]);a:for(f in c){g=P(f);for(h in d)if(P(h)===g)continue a;d[f]=c[f]}return e(d,ra(b))}(b);g.method=ub(g.method);g.paramSerializer=E(g.paramSerializer)?l.get(g.paramSerializer):g.paramSerializer;c.$$incOutstandingRequestCount();var h=[],n=[];b=k.resolve(g);q(u,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&n.push(a.response,a.responseError)});b=d(b,h);b=b.then(function(b){var c=
b.headers,d=sd(b.data,rd(c),void 0,b.transformRequest);x(d)&&q(c,function(a,b){"content-type"===P(b)&&delete c[b]});x(b.withCredentials)&&!x(a.withCredentials)&&(b.withCredentials=a.withCredentials);return p(b,d).then(f,f)});b=d(b,n);return b=b.finally(function(){c.$$completeOutstandingRequest(w)})}function p(c,d){function g(a){if(a){var c={};q(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){p(c,a,d,e)}N&&
(200<=a&&300>a?N.put(Q,[a,c,qd(d),e]):N.remove(Q));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function p(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?B.resolve:B.reject)({data:a,status:b,headers:rd(d),config:c,statusText:e})}function K(a){p(a.data,a.status,ra(a.headers()),a.statusText)}function u(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var B=k.defer(),L=B.promise,N,G,T=c.headers,s="jsonp"===P(c.method),Q=c.url;s?Q=m.getTrustedResourceUrl(Q):E(Q)||(Q=m.valueOf(Q));Q=r(Q,
c.paramSerializer(c.params));s&&(Q=J(Q,c.jsonpCallbackParam));n.pendingRequests.push(c);L.then(u,u);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(N=F(c.cache)?c.cache:F(a.cache)?a.cache:O);N&&(G=N.get(Q),v(G)?G&&y(G.then)?G.then(K,K):C(G)?p(G[1],G[0],ra(G[2]),G[3]):p(G,200,{},"OK"):N.put(Q,L));x(G)&&((G=td(c.url)?e()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(T[c.xsrfHeaderName||a.xsrfHeaderName]=G),f(c.method,Q,d,l,T,c.timeout,c.withCredentials,c.responseType,g(c.eventHandlers),
g(c.uploadEventHandlers)));return L}function r(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}function J(a,b){if(/[&?][^=]+=JSON_CALLBACK/.test(a))throw ud("badjsonp",a);if((new RegExp("[&?]"+b+"=")).test(a))throw ud("badjsonp",b,a);return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK"}var O=g("$http");a.paramSerializer=E(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var u=[];q(d,function(a){u.unshift(E(a)?l.get(a):l.invoke(a))});n.pendingRequests=[];(function(a){q(arguments,
function(a){n[a]=function(b,c){return n(R({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){n[a]=function(b,c,d){return n(R({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function Df(){this.$get=function(){return function(){return new z.XMLHttpRequest}}}function Cf(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return sg(a,c,a.defer,b,d[0])}]}function sg(a,b,d,c,f){function e(a,
b,d){a=a.replace("JSON_CALLBACK",b);var e=f.createElement("script"),m=null;e.type="text/javascript";e.src=a;e.async=!0;m=function(a){e.removeEventListener("load",m);e.removeEventListener("error",m);f.body.removeChild(e);e=null;var g=-1,r="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),r=a.type,g="error"===a.type?404:200);d&&d(g,r)};e.addEventListener("load",m);e.addEventListener("error",m);f.body.appendChild(e);return m}return function(f,h,k,l,m,n,p,r,J,O){function u(){V&&V();t&&
t.abort()}h=h||a.url();if("jsonp"===P(f))var H=c.createCallback(h),V=e(h,H,function(a,b){var e=200===a&&c.getResponse(H);v(A)&&d.cancel(A);V=t=null;l(a,e,"",b);c.removeCallback(H)});else{var t=b(f,h);t.open(f,h,!0);q(m,function(a,b){v(a)&&t.setRequestHeader(b,a)});t.onload=function(){var a=t.statusText||"",b="response"in t?t.response:t.responseText,c=1223===t.status?204:t.status;0===c&&(c=b?200:"file"===oa(h).protocol?404:0);var e=t.getAllResponseHeaders();v(A)&&d.cancel(A);V=t=null;l(c,b,e,a)};f=
function(){v(A)&&d.cancel(A);V=t=null;l(-1,null,null,"")};t.onerror=f;t.onabort=f;t.ontimeout=f;q(J,function(a,b){t.addEventListener(b,a)});q(O,function(a,b){t.upload.addEventListener(b,a)});p&&(t.withCredentials=!0);if(r)try{t.responseType=r}catch(s){if("json"!==r)throw s;}t.send(x(k)?null:k)}if(0<n)var A=d(u,n);else n&&y(n.then)&&n.then(u)}}function xf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler",
"$sce",function(d,c,f){function e(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(p,b)}function h(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function k(e,k,n,p){function H(a){try{var b=a;a=n?f.getTrusted(n,b):f.valueOf(b);return p&&!v(a)?a:Yb(a)}catch(d){c(Ca.interr(e,d))}}if(!e.length||-1===e.indexOf(a)){var q;k||(k=g(e),q=ma(k),q.exp=e,q.expressions=[],q.$$watchDelegate=h);return q}p=!!p;var t,s,A=0,K=[],I=[];q=e.length;for(var B=[],L=[];A<q;)if(-1!==(t=e.indexOf(a,
A))&&-1!==(s=e.indexOf(b,t+l)))A!==t&&B.push(g(e.substring(A,t))),A=e.substring(t+l,s),K.push(A),I.push(d(A,H)),A=s+m,L.push(B.length),B.push("");else{A!==q&&B.push(g(e.substring(A)));break}n&&1<B.length&&Ca.throwNoconcat(e);if(!k||K.length){var N=function(a){for(var b=0,c=K.length;b<c;b++){if(p&&x(a[b]))return;B[L[b]]=a[b]}return B.join("")};return R(function(a){var b=0,d=K.length,f=Array(d);try{for(;b<d;b++)f[b]=I[b](a);return N(f)}catch(g){c(Ca.interr(e,g))}},{exp:e,expressions:K,$$watchDelegate:function(a,
b){var c;return a.$watchGroup(I,function(d,e){var f=N(d);y(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,e),"g"),p=new RegExp(b.replace(/./g,e),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function yf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,f){function e(e,k,l,m){function n(){p?e.apply(null,r):e(u)}var p=4<arguments.length,r=p?va.call(arguments,4):[],J=b.setInterval,q=b.clearInterval,
u=0,H=v(m)&&!m,V=(H?c:d).defer(),t=V.promise;l=v(l)?l:0;t.$$intervalId=J(function(){H?f.defer(n):a.$evalAsync(n);V.notify(u++);0<l&&u>=l&&(V.resolve(u),q(t.$$intervalId),delete g[t.$$intervalId]);H||a.$apply()},k);g[t.$$intervalId]=V;return t}var g={};e.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].promise.catch(w),g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return e}]}function lc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=
cb(a[b]);return a.join("/")}function vd(a,b){var d=oa(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=Z(d.port)||tg[d.protocol]||null}function wd(a,b){if(ug.test(a))throw kb("badpath",a);var d="/"!==a.charAt(0);d&&(a="/"+a);var c=oa(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=Lc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function mc(a,b){return a.slice(0,b.length)===
b}function la(a,b){if(mc(b,a))return b.substr(a.length)}function Aa(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function lb(a){return a.replace(/(#.+)|#$/,"$1")}function nc(a,b,d){this.$$html5=!0;d=d||"";vd(a,this);this.$$parse=function(a){var d=la(b,a);if(!E(d))throw kb("ipthprfx",a,b);wd(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Xb(this.$$search),d=this.$$hash?"#"+cb(this.$$hash):"";this.$$url=lc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+
this.$$url.substr(1);this.$$urlUpdatedByLocation=!0};this.$$parseLinkUrl=function(c,f){if(f&&"#"===f[0])return this.hash(f.slice(1)),!0;var e,g;v(e=la(a,c))?(g=e,g=d&&v(e=la(d,e))?b+(la("/",e)||e):a+g):v(e=la(b,c))?g=b+e:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function oc(a,b,d){vd(a,this);this.$$parse=function(c){var f=la(a,c)||la(b,c),e;x(f)||"#"!==f.charAt(0)?this.$$html5?e=f:(e="",x(f)&&(a=c,this.replace())):(e=la(d,f),x(e)&&(e=f));wd(e,this);c=this.$$path;var f=a,g=/^\/[A-Z]:(\/.*)/;mc(e,
f)&&(e=e.replace(f,""));g.exec(e)||(c=(e=g.exec(c))?e[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=Xb(this.$$search),f=this.$$hash?"#"+cb(this.$$hash):"";this.$$url=lc(this.$$path)+(b?"?"+b:"")+f;this.$$absUrl=a+(this.$$url?d+this.$$url:"");this.$$urlUpdatedByLocation=!0};this.$$parseLinkUrl=function(b,d){return Aa(a)===Aa(b)?(this.$$parse(b),!0):!1}}function xd(a,b,d){this.$$html5=!0;oc.apply(this,arguments);this.$$parseLinkUrl=function(c,f){if(f&&"#"===f[0])return this.hash(f.slice(1)),
!0;var e,g;a===Aa(c)?e=c:(g=la(b,c))?e=a+d+g:b===c+"/"&&(e=b);e&&this.$$parse(e);return!!e};this.$$compose=function(){var b=Xb(this.$$search),f=this.$$hash?"#"+cb(this.$$hash):"";this.$$url=lc(this.$$path)+(b?"?"+b:"")+f;this.$$absUrl=a+d+this.$$url;this.$$urlUpdatedByLocation=!0}}function Jb(a){return function(){return this[a]}}function yd(a,b){return function(d){if(x(d))return this[a];this[a]=b(d);this.$$compose();return this}}function Ff(){var a="!",b={enabled:!1,requireBase:!0,rewriteLinks:!0};
this.hashPrefix=function(b){return v(b)?(a=b,this):a};this.html5Mode=function(a){if(Ia(a))return b.enabled=a,this;if(F(a)){Ia(a.enabled)&&(b.enabled=a.enabled);Ia(a.requireBase)&&(b.requireBase=a.requireBase);if(Ia(a.rewriteLinks)||E(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,f,e,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=
f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var n=c.url(),p;if(b.enabled){if(!m&&b.requireBase)throw kb("nobase");p=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=f.history?nc:xd}else p=Aa(n),m=oc;var r=p.substr(0,Aa(p).lastIndexOf("/")+1);l=new m(p,r,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var J=/^\s*(javascript|mailto):/i;e.on("click",function(a){var f=b.rewriteLinks;if(f&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&
2!==a.which&&2!==a.button){for(var h=D(a.target);"a"!==wa(h[0]);)if(h[0]===e[0]||!(h=h.parent())[0])return;if(!E(f)||!x(h.attr(f))){var f=h.prop("href"),k=h.attr("href")||h.attr("xlink:href");F(f)&&"[object SVGAnimatedString]"===f.toString()&&(f=oa(f.animVal).href);J.test(f)||!f||h.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(f,k)||(a.preventDefault(),l.absUrl()!==c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}}});lb(l.absUrl())!==lb(n)&&c.url(l.absUrl(),!0);var q=!0;
c.onUrlChange(function(a,b){mc(a,r)?(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=lb(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(q=!1,k(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){if(q||l.$$urlUpdatedByLocation){l.$$urlUpdatedByLocation=!1;var a=lb(c.url()),b=lb(l.absUrl()),e=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&f.history&&e!==l.$$state;if(q||m)q=
!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,e).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=e):(m&&h(b,g,e===l.$$state?null:l.$$state),k(a,e)))})}l.$$replace=!1});return l}]}function Gf(){var a=!0,b=this;this.debugEnabled=function(b){return v(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&
(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function f(a){var b=d.console||{},f=b[a]||b.log||w;a=!1;try{a=!!f.apply}catch(k){}return a?function(){var a=[];q(arguments,function(b){a.push(c(b))});return f.apply(b,a)}:function(a,b){f(a,null==b?"":b)}}return{log:f("log"),info:f("info"),warn:f("warn"),error:f("error"),debug:function(){var c=f("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function vg(a){return a+""}function wg(a,b){return"undefined"!==typeof a?a:b}function zd(a,b){return"undefined"===
typeof a?b:"undefined"===typeof b?a:a+b}function U(a,b){var d,c,f;switch(a.type){case s.Program:d=!0;q(a.body,function(a){U(a.expression,b);d=d&&a.expression.constant});a.constant=d;break;case s.Literal:a.constant=!0;a.toWatch=[];break;case s.UnaryExpression:U(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case s.BinaryExpression:U(a.left,b);U(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:U(a.left,
b);U(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case s.ConditionalExpression:U(a.test,b);U(a.alternate,b);U(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case s.Identifier:a.constant=!1;a.toWatch=[a];break;case s.MemberExpression:U(a.object,b);a.computed&&U(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case s.CallExpression:d=
f=a.filter?!b(a.callee.name).$stateful:!1;c=[];q(a.arguments,function(a){U(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=f?c:[a];break;case s.AssignmentExpression:U(a.left,b);U(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case s.ArrayExpression:d=!0;c=[];q(a.elements,function(a){U(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case s.ObjectExpression:d=!0;c=[];q(a.properties,function(a){U(a.value,
b);d=d&&a.value.constant&&!a.computed;a.value.constant||c.push.apply(c,a.value.toWatch);a.computed&&(U(a.key,b),a.key.constant||c.push.apply(c,a.key.toWatch))});a.constant=d;a.toWatch=c;break;case s.ThisExpression:a.constant=!1;a.toWatch=[];break;case s.LocalsExpression:a.constant=!1,a.toWatch=[]}}function Ad(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Bd(a){return a.type===s.Identifier||a.type===s.MemberExpression}function Cd(a){if(1===
a.body.length&&Bd(a.body[0].expression))return{type:s.AssignmentExpression,left:a.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function Dd(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===s.Literal||a.body[0].expression.type===s.ArrayExpression||a.body[0].expression.type===s.ObjectExpression)}function Ed(a,b){this.astBuilder=a;this.$filter=b}function Fd(a,b){this.astBuilder=a;this.$filter=b}function pc(a){return y(a.valueOf)?a.valueOf():xg.call(a)}function Hf(){var a=
W(),b={"true":!0,"false":!1,"null":null,undefined:void 0},d,c;this.addLiteral=function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this};this.$get=["$filter",function(f){function e(a,b,c){return null==a||null==b?a===b:"object"!==typeof a||c||(a=pc(a),"object"!==typeof a)?a===b||a!==a&&b!==b:!1}function g(a,b,c,d,f){var g=d.inputs,h;if(1===g.length){var k=e,g=g[0];return a.$watch(function(a){var b=g(a);e(b,k,d.literal)||(h=d(a,void 0,void 0,[b]),k=b&&pc(b));return h},b,c,f)}for(var l=
[],m=[],n=0,I=g.length;n<I;n++)l[n]=e,m[n]=null;return a.$watch(function(a){for(var b=!1,c=0,f=g.length;c<f;c++){var k=g[c](a);if(b||(b=!e(k,l[c],d.literal)))m[c]=k,l[c]=k&&pc(k)}b&&(h=d(a,void 0,void 0,m));return h},b,c,f)}function h(a,b,c,d,e){function f(a){return d(a)}function h(a,c,d){l=a;y(b)&&b(a,c,d);v(a)&&d.$$postDigest(function(){v(l)&&k()})}var k,l;return k=d.inputs?g(a,h,c,d,e):a.$watch(f,h,c)}function k(a,b,c,d){function e(a){var b=!0;q(a,function(a){v(a)||(b=!1)});return b}var f,g;return f=
a.$watch(function(a){return d(a)},function(a,c,d){g=a;y(b)&&b(a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function l(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function m(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==k&&c!==h?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return v(e)?c:e},d=!a.inputs;a.$$watchDelegate&&a.$$watchDelegate!==g?(c.$$watchDelegate=a.$$watchDelegate,c.inputs=a.inputs):b.$stateful||
(c.$$watchDelegate=g,c.inputs=a.inputs?a.inputs:[a]);return c}var n={csp:Ga().noUnsafeEval,literals:xa(b),isIdentifierStart:y(d)&&d,isIdentifierContinue:y(c)&&c};return function(b,c){var d,e,u;switch(typeof b){case "string":return u=b=b.trim(),d=a[u],d||(":"===b.charAt(0)&&":"===b.charAt(1)&&(e=!0,b=b.substring(2)),d=new qc(n),d=(new rc(d,f,n)).parse(b),d.constant?d.$$watchDelegate=l:e?d.$$watchDelegate=d.literal?k:h:d.inputs&&(d.$$watchDelegate=g),a[u]=d),m(d,c);case "function":return m(b,c);default:return m(w,
c)}}}]}function Jf(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Gd(function(a){b.$evalAsync(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return v(b)?(a=b,this):a}}function Kf(){var a=!0;this.$get=["$browser","$exceptionHandler",function(b,d){return Gd(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return v(b)?(a=b,this):a}}function Gd(a,b,d){function c(){return new f}function f(){var a=this.promise=new e;this.resolve=function(b){k(a,
b)};this.reject=function(b){m(a,b)};this.notify=function(b){p(a,b)}}function e(){this.$$state={status:0}}function g(){for(;!v&&t.length;){var a=t.shift();if(!a.pur){a.pur=!0;var c=a.value,c="Possibly unhandled rejection: "+("function"===typeof c?c.toString().replace(/ \{[\s\S]*$/,""):x(c)?"undefined":"string"!==typeof c?xe(c):c);a.value instanceof Error?b(a.value,c):b(c)}}}function h(b){!d||b.pending||2!==b.status||b.pur||(0===v&&0===t.length&&a(g),t.push(b));!b.processScheduled&&b.pending&&(b.processScheduled=
!0,++v,a(function(){var c,e,f;f=b.pending;b.processScheduled=!1;b.pending=void 0;try{for(var h=0,l=f.length;h<l;++h){b.pur=!0;e=f[h][0];c=f[h][b.status];try{y(c)?k(e,c(b.value)):1===b.status?k(e,b.value):m(e,b.value)}catch(n){m(e,n)}}}finally{--v,d&&0===v&&a(g)}}))}function k(a,b){a.$$state.status||(b===a?n(a,H("qcycle",b)):l(a,b))}function l(a,b){function c(b){g||(g=!0,l(a,b))}function d(b){g||(g=!0,n(a,b))}function e(b){p(a,b)}var f,g=!1;try{if(F(b)||y(b))f=b.then;y(f)?(a.$$state.status=-1,f.call(b,
c,d,e)):(a.$$state.value=b,a.$$state.status=1,h(a.$$state))}catch(k){d(k)}}function m(a,b){a.$$state.status||n(a,b)}function n(a,b){a.$$state.value=b;a.$$state.status=2;h(a.$$state)}function p(c,d){var e=c.$$state.pending;0>=c.$$state.status&&e&&e.length&&a(function(){for(var a,c,f=0,g=e.length;f<g;f++){c=e[f][0];a=e[f][3];try{p(c,y(a)?a(d):d)}catch(h){b(h)}}})}function r(a){var b=new e;m(b,a);return b}function J(a,b,c){var d=null;try{y(c)&&(d=c())}catch(e){return r(e)}return d&&y(d.then)?d.then(function(){return b(a)},
r):b(a)}function s(a,b,c,d){var f=new e;k(f,a);return f.then(b,c,d)}function u(a){if(!y(a))throw H("norslvr",a);var b=new e;a(function(a){k(b,a)},function(a){m(b,a)});return b}var H=M("$q",TypeError),v=0,t=[];R(e.prototype,{then:function(a,b,c){if(x(a)&&x(b)&&x(c))return this;var d=new e;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&h(this.$$state);return d},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return J(b,
w,a)},function(b){return J(b,r,a)},b)}});var w=s;u.prototype=e.prototype;u.defer=c;u.reject=r;u.when=s;u.resolve=w;u.all=function(a){var b=new e,c=0,d=C(a)?[]:{};q(a,function(a,e){c++;s(a).then(function(a){d[e]=a;--c||k(b,d)},function(a){m(b,a)})});0===c&&k(b,d);return b};u.race=function(a){var b=c();q(a,function(a){s(a).then(b.resolve,b.reject)});return b.promise};return u}function Tf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||
a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,f=!!d,e=f?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};e.supported=f;return e}]}function If(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++qb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=M("$rootScope"),c=null,f=null;this.digestTtl=
function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(e,g,h){function k(a){a.currentScope.$$destroyed=!0}function l(a){9===Ha&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++qb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=
this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(H.$$phase)throw d("inprog",H.$$phase);H.$$phase=a}function p(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function r(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function J(){}function s(){for(;ia.length;)try{ia.shift()()}catch(a){e(a)}f=null}function u(){null===f&&(f=h.defer(function(){H.$apply(s)}))}
m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:J,get:f,exp:e||a,eq:!!d};
c=null;y(b)||(l.fn=w);k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);k.$$digestWatchIndex++;p(this,1);return function(){var a=Za(k,l);0<=a&&(p(h,-1),a<k.$$digestWatchIndex&&k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=
c;b(e,a===c?e:d,f)});q(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!x(e)){if(F(e))if(sa(e))for(f!==n&&(f=n,t=f.length=0,l++),a=e.length,t!==a&&(l++,f.length=t=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==p&&(f=p={},t=0,l++);a=0;for(b in e)ua.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===
g||(l++,f[b]=g)):(t++,f[b]=g,l++));if(t>a)for(b in l++,f)ua.call(e,b)||(t--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),n=[],p={},r=!0,t=0;return this.$watch(m,function(){r?(r=!1,b(e,e,d)):b(e,h,d);if(k)if(F(e))if(sa(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ua.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,k,l,m,p,r,u=b,q,w=[],x,ia;n("$digest");h.$$checkUrlChange();this===H&&null!==f&&
(h.defer.cancel(f),s());c=null;do{r=!1;q=this;for(p=0;p<v.length;p++){try{ia=v[p],ia.scope.$eval(ia.expression,ia.locals)}catch(z){e(z)}c=null}v.length=0;a:do{if(p=q.$$watchers)for(p.$$digestWatchIndex=p.length;p.$$digestWatchIndex--;)try{if(a=p[p.$$digestWatchIndex])if(m=a.get,(g=m(q))!==(k=a.last)&&!(a.eq?qa(g,k):da(g)&&da(k)))r=!0,c=a,a.last=a.eq?xa(g,null):g,l=a.fn,l(g,k===J?g:k,q),5>u&&(x=4-u,w[x]||(w[x]=[]),w[x].push({msg:y(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:k}));
else if(a===c){r=!1;break a}}catch(D){e(D)}if(!(p=q.$$watchersCount&&q.$$childHead||q!==this&&q.$$nextSibling))for(;q!==this&&!(p=q.$$nextSibling);)q=q.$parent}while(q=p);if((r||v.length)&&!u--)throw H.$$phase=null,d("infdig",b,w);}while(r||v.length);for(H.$$phase=null;A<t.length;)try{t[A++]()}catch(E){e(E)}t.length=A=0;h.$$checkUrlChange()},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===H&&h.$$applicationDestroyed();p(this,-this.$$watchersCount);
for(var b in this.$$listenerCount)r(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=w;this.$on=this.$watch=this.$watchGroup=function(){return w};this.$$listeners={};this.$$nextSibling=
null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){H.$$phase||v.length||h.defer(function(){v.length&&H.$digest()});v.push({scope:this,expression:g(a),locals:b})},$$postDigest:function(a){t.push(a)},$apply:function(a){try{n("$apply");try{return this.$eval(a)}finally{H.$$phase=null}}catch(b){e(b)}finally{try{H.$digest()}catch(c){throw e(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&ia.push(b);a=g(a);u()},$on:function(a,b){var c=this.$$listeners[a];
c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,r(e,1,a))}},$emit:function(a,b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=$a([h],arguments,1),l,m;do{d=f.$$listeners[a]||c;h.currentScope=f;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,
k)}catch(n){e(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;f=f.$parent}while(f);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return f;for(var g=$a([f],arguments,1),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){e(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&
c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}f.currentScope=null;return f}};var H=new m,v=H.$$asyncQueue=[],t=H.$$postDigestQueue=[],ia=H.$$applyAsyncQueue=[],A=0;return H}]}function Ae(){var a=/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return v(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return v(a)?(b=a,this):b};this.$get=function(){return function(d,
c){var f=c?b:a,e;e=oa(d).href;return""===e||e.match(f)?d:"unsafe:"+e}}}function yg(a){if("self"===a)return a;if(E(a)){if(-1<a.indexOf("***"))throw Da("iwcard",a);a=Hd(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+a+"$")}if(Wa(a))return new RegExp("^"+a.source+"$");throw Da("imatcher");}function Id(a){var b=[];v(a)&&q(a,function(a){b.push(yg(a))});return b}function Mf(){this.SCE_CONTEXTS=pa;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&
(a=Id(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=Id(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?td(b):!!a.exec(b.href)}function f(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw Da("unsafe");};d.has("$sanitize")&&
(e=d.get("$sanitize"));var g=f(),h={};h[pa.HTML]=f(g);h[pa.CSS]=f(g);h[pa.URL]=f(g);h[pa.JS]=f(g);h[pa.RESOURCE_URL]=f(h[pa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Da("icontext",a,b);if(null===b||x(b)||""===b)return b;if("string"!==typeof b)throw Da("itype",a);return new c(b)},getTrusted:function(d,f){if(null===f||x(f)||""===f)return f;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&f instanceof g)return f.$$unwrapTrustedValue();if(d===pa.RESOURCE_URL){var g=oa(f.toString()),
n,p,r=!1;n=0;for(p=a.length;n<p;n++)if(c(a[n],g)){r=!0;break}if(r)for(n=0,p=b.length;n<p;n++)if(c(b[n],g)){r=!1;break}if(r)return f;throw Da("insecurl",f.toString());}if(d===pa.HTML)return e(f);throw Da("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Lf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ha)throw Da("iequirks");var c=ra(pa);c.isEnabled=function(){return a};c.trustAs=
d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Xa);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var f=c.parseAs,e=c.getTrusted,g=c.trustAs;q(pa,function(a,b){var d=P(b);c[("parse_as_"+d).replace(sc,fb)]=function(b){return f(a,b)};c[("get_trusted_"+d).replace(sc,fb)]=function(b){return e(a,b)};c[("trust_as_"+d).replace(sc,fb)]=function(b){return g(a,b)}});return c}]}
function Nf(){this.$get=["$window","$document",function(a,b){var d={},c=!((!a.nw||!a.nw.process)&&a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,f=Z((/android (\d+)/.exec(P((a.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h=g.body&&g.body.style,k=!1,l=!1;h&&(k=!!("transition"in h||"webkitTransition"in h),l=!!("animation"in h||"webkitAnimation"in h));return{history:!(!c||
4>f||e),hasEvent:function(a){if("input"===a&&Ha)return!1;if(x(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Ga(),transitions:k,animations:l,android:f}}]}function Pf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler","$templateCache","$http","$q","$sce",function(b,d,c,f,e){function g(h,k){g.totalPendingRequests++;if(!E(h)||x(d.get(h)))h=e.getTrustedResourceUrl(h);var l=c.defaults&&c.defaults.transformResponse;C(l)?l=l.filter(function(a){return a!==
jc}):l===jc&&(l=null);return c.get(h,R({cache:d,transformResponse:l},a)).finally(function(){g.totalPendingRequests--}).then(function(a){d.put(h,a.data);return a.data},function(a){k||(a=zg("tpload",h,a.status,a.statusText),b(a));return f.reject(a)})}g.totalPendingRequests=0;return g}]}function Qf(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];q(a,function(a){var c=$.element(a).data("$binding");c&&
q(c,function(c){d?(new RegExp("(^|\\s)"+Hd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Rf(){this.$get=["$rootScope","$browser",
"$q","$$q","$exceptionHandler",function(a,b,d,c,f){function e(e,k,l){y(e)||(l=k,k=e,e=w);var m=va.call(arguments,3),n=v(l)&&!l,p=(n?c:d).defer(),r=p.promise,q;q=b.defer(function(){try{p.resolve(e.apply(null,m))}catch(b){p.reject(b),f(b)}finally{delete g[r.$$timeoutId]}n||a.$apply()},k);r.$$timeoutId=q;g[q]=p;return r}var g={};e.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].promise.catch(w),g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):
!1};return e}]}function oa(a){Ha&&(ca.setAttribute("href",a),a=ca.href);ca.setAttribute("href",a);return{href:ca.href,protocol:ca.protocol?ca.protocol.replace(/:$/,""):"",host:ca.host,search:ca.search?ca.search.replace(/^\?/,""):"",hash:ca.hash?ca.hash.replace(/^#/,""):"",hostname:ca.hostname,port:ca.port,pathname:"/"===ca.pathname.charAt(0)?ca.pathname:"/"+ca.pathname}}function td(a){a=E(a)?oa(a):a;return a.protocol===Jd.protocol&&a.host===Jd.host}function Sf(){this.$get=ma(z)}function Kd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}
var d=a[0]||{},c={},f="";return function(){var a,g,h,k,l;try{a=d.cookie||""}catch(m){a=""}if(a!==f)for(f=a,a=f.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),x(c[l])&&(c[l]=b(g.substring(k+1))));return c}}function Wf(){this.$get=Kd}function Xc(a){function b(d,c){if(F(d)){var f={};q(d,function(a,c){f[c]=b(c,a)});return f}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",
Ld);b("date",Md);b("filter",Ag);b("json",Bg);b("limitTo",Cg);b("lowercase",Dg);b("number",Nd);b("orderBy",Od);b("uppercase",Eg)}function Ag(){return function(a,b,d,c){if(!sa(a)){if(null==a)return a;throw M("filter")("notarray",a);}c=c||"$";var f;switch(tc(b)){case "function":break;case "boolean":case "null":case "number":case "string":f=!0;case "object":b=Fg(b,d,c,f);break;default:return a}return Array.prototype.filter.call(a,b)}}function Fg(a,b,d,c){var f=F(a)&&d in a;!0===b?b=qa:y(b)||(b=function(a,
b){if(x(a))return!1;if(null===a||null===b)return a===b;if(F(b)||F(a)&&!Vb(a))return!1;a=P(""+a);b=P(""+b);return-1!==a.indexOf(b)});return function(e){return f&&!F(e)?Ea(e,a[d],b,d,!1):Ea(e,a,b,d,c)}}function Ea(a,b,d,c,f,e){var g=tc(a),h=tc(b);if("string"===h&&"!"===b.charAt(0))return!Ea(a,b.substring(1),d,c,f);if(C(a))return a.some(function(a){return Ea(a,b,d,c,f)});switch(g){case "object":var k;if(f){for(k in a)if("$"!==k.charAt(0)&&Ea(a[k],b,d,c,!0))return!0;return e?!1:Ea(a,b,d,c,!1)}if("object"===
h){for(k in b)if(e=b[k],!y(e)&&!x(e)&&(g=k===c,!Ea(g?a:a[k],e,d,c,g,g)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function tc(a){return null===a?"null":typeof a}function Ld(a){var b=a.NUMBER_FORMATS;return function(a,c,f){x(c)&&(c=b.CURRENCY_SYM);x(f)&&(f=b.PATTERNS[1].maxFrac);return null==a?a:Pd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,f).replace(/\u00A4/g,c)}}function Nd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Pd(a,b.PATTERNS[0],b.GROUP_SEP,
b.DECIMAL_SEP,c)}}function Gg(a){var b=0,d,c,f,e,g;-1<(c=a.indexOf(Qd))&&(a=a.replace(Qd,""));0<(f=a.search(/e/i))?(0>c&&(c=f),c+=+a.slice(f+1),a=a.substring(0,f)):0>c&&(c=a.length);for(f=0;a.charAt(f)===uc;f++);if(f===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===uc;)g--;c-=f;d=[];for(e=0;f<=g;f++,e++)d[e]=+a.charAt(f)}c>Rd&&(d=d.splice(0,Rd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function Hg(a,b,d,c){var f=a.d,e=f.length-a.i;b=x(b)?Math.min(Math.max(d,e),c):+b;d=b+a.i;c=f[d];if(0<d){f.splice(Math.max(a.i,
d));for(var g=d;g<f.length;g++)f[g]=0}else for(e=Math.max(0,e),a.i=1,f.length=Math.max(1,d=b+1),f[0]=0,g=1;g<d;g++)f[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)f.unshift(0),a.i++;f.unshift(1);a.i++}else f[d-1]++;for(;e<Math.max(0,b);e++)f.push(0);if(b=f.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))f.unshift(b),a.i++}function Pd(a,b,d,c,f){if(!E(a)&&!Y(a)||isNaN(a))return"";var e=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(e)k="\u221e";else{g=Gg(h);Hg(g,f,b.minFrac,b.maxFrac);
k=g.d;h=g.i;f=g.e;e=[];for(g=k.reduce(function(a,b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?e=k.splice(h,k.length):(e=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);e.length&&(k+=c+e.join(""));f&&(k+="e+"+f)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Kb(a,b,d,c){var f="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,f="-");for(a=""+a;a.length<
b;)a=uc+a;d&&(a=a.substr(a.length-b));return f+a}function aa(a,b,d,c,f){d=d||0;return function(e){e=e["get"+a]();if(0<d||e>-d)e+=d;0===e&&-12===d&&(e=12);return Kb(e,b,c,f)}}function mb(a,b,d){return function(c,f){var e=c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return f[g][e]}}function Sd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Td(a){return function(b){var d=Sd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-
+d;b=1+Math.round(b/6048E5);return Kb(b,a)}}function vc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Md(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var e=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(e=Z(b[9]+b[10]),g=Z(b[9]+b[11]));h.call(a,Z(b[1]),Z(b[2])-1,Z(b[3]));e=Z(b[4]||0)-e;g=Z(b[5]||0)-g;h=Z(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,e,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,d,e){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;E(c)&&(c=Ig.test(c)?Z(c):b(c));Y(c)&&(c=new Date(c));if(!ga(c)||!isFinite(c.getTime()))return c;for(;d;)(l=Jg.exec(d))?(h=$a(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();e&&(m=Jc(e,m),c=Wb(c,e,!0));q(h,function(b){k=Kg[b];g+=k?k(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Bg(){return function(a,b){x(b)&&(b=2);return bb(a,b)}}function Cg(){return function(a,
b,d){b=Infinity===Math.abs(Number(b))?Number(b):Z(b);if(da(b))return a;Y(a)&&(a=a.toString());if(!sa(a))return a;d=!d||isNaN(d)?0:Z(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?wc(a,d,d+b):0===d?wc(a,b,a.length):wc(a,Math.max(0,d+b),d)}}function wc(a,b,d){return E(a)?a.slice(b,d):va.call(a,b,d)}function Od(a){function b(b){return b.map(function(b){var c=1,d=Xa;if(y(b))d=b;else if(E(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var f=
d(),d=function(a){return a[f]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function c(a,b){var c=0,d=a.type,k=b.type;if(d===k){var k=a.value,l=b.value;"string"===d?(k=k.toLowerCase(),l=l.toLowerCase()):"object"===d&&(F(k)&&(k=a.index),F(l)&&(l=b.index));k!==l&&(c=k<l?-1:1)}else c=d<k?-1:1;return c}return function(a,e,g,h){if(null==a)return a;if(!sa(a))throw M("orderBy")("notarray",a);C(e)||(e=[e]);0===e.length&&
(e=["+"]);var k=b(e),l=g?-1:1,m=y(h)?h:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:k.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(y(e.valueOf)&&(e=e.valueOf(),d(e)))break a;Vb(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var c=0,d=k.length;c<d;c++){var e=m(a.predicateValues[c],b.predicateValues[c]);if(e)return e*k[c].descending*
l}return m(a.tieBreaker,b.tieBreaker)*l});return a=a.map(function(a){return a.value})}}function Qa(a){y(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ma(a)}function Lb(a,b,d,c,f){this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=f(b.name||b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;this.$submitted=this.$invalid=!1;this.$$parentForm=Mb;this.$$element=a;this.$$animate=c;Ud(this)}function Ud(a){a.$$classCache={};a.$$classCache[Vd]=!(a.$$classCache[nb]=
a.$$element.hasClass(nb))}function Wd(a){function b(a,b,c){c&&!a.$$classCache[b]?(a.$$animate.addClass(a.$$element,b),a.$$classCache[b]=!0):!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Nc(c,"-"):"";b(a,nb+c,!0===d);b(a,Vd+c,!1===d)}var c=a.set,f=a.unset;a.clazz.prototype.$setValidity=function(a,g,h){x(g)?(this.$pending||(this.$pending={}),c(this.$pending,a,h)):(this.$pending&&f(this.$pending,a,h),Xd(this.$pending)&&(this.$pending=void 0));
Ia(g)?g?(f(this.$error,a,h),c(this.$$success,a,h)):(c(this.$error,a,h),f(this.$$success,a,h)):(f(this.$error,a,h),f(this.$$success,a,h));this.$pending?(b(this,"ng-pending",!0),this.$valid=this.$invalid=void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=Xd(this.$error),this.$invalid=!this.$valid,d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,g,this)}}function Xd(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;
return!0}function xc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Ra(a,b,d,c,f,e){var g=P(b[0].type);if(!f.android){var h=!1;b.on("compositionstart",function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(e.defer.cancel(k),k=null);if(!h){var f=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(f=S(f));(c.$viewValue!==f||""===f&&c.$$hasNativeValidators)&&c.$setViewValue(f,a)}};if(f.hasEvent("input"))b.on("input",l);else{var m=
function(a,b,c){k||(k=e.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(f.hasEvent("paste"))b.on("paste cut",m)}b.on("change",l);if(Yd[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=e.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?
"":c.$viewValue;b.val()!==a&&b.val(a)}}function Nb(a,b){return function(d,c){var f,e;if(ga(d))return d;if(E(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Lg.test(d))return new Date(d);a.lastIndex=0;if(f=a.exec(d))return f.shift(),e=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(f,function(a,c){c<b.length&&(e[b[c]]=+a)}),new Date(e.yyyy,
e.MM-1,e.dd,e.HH,e.mm,e.ss||0,1E3*e.sss||0)}return NaN}}function ob(a,b,d,c){return function(f,e,g,h,k,l,m){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function p(a){return v(a)&&!ga(a)?d(a)||void 0:a}yc(f,e,g,h);Ra(f,e,g,h,k,l);var r=h&&h.$options.getOption("timezone"),q;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,q),r&&(a=Wb(a,r)),a});h.$formatters.push(function(a){if(a&&!ga(a))throw pb("datefmt",a);if(n(a))return(q=a)&&
r&&(q=Wb(q,r,!0)),m("date")(a,c,r);q=null;return""});if(v(g.min)||g.ngMin){var s;h.$validators.min=function(a){return!n(a)||x(s)||d(a)>=s};g.$observe("min",function(a){s=p(a);h.$validate()})}if(v(g.max)||g.ngMax){var u;h.$validators.max=function(a){return!n(a)||x(u)||d(a)<=u};g.$observe("max",function(a){u=p(a);h.$validate()})}}}function yc(a,b,d,c){(c.$$hasNativeValidators=F(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function Zd(a){a.$$parserName=
"number";a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(Mg.test(b))return parseFloat(b)});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!Y(b))throw pb("numfmt",b);b=b.toString()}return b})}function Sa(a){v(a)&&!Y(a)&&(a=parseFloat(a));return da(a)?void 0:a}function zc(a){var b=a.toString(),d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function $d(a,b,d){a=Number(a);var c=(a|0)!==a,f=(b|0)!==b,e=(d|0)!==d;if(c||f||e){var g=c?zc(a):0,
h=f?zc(b):0,k=e?zc(d):0,g=Math.max(g,h,k),g=Math.pow(10,g);a*=g;b*=g;d*=g;c&&(a=Math.round(a));f&&(b=Math.round(b));e&&(d=Math.round(d))}return 0===(a-b)%d}function ae(a,b,d,c,f){if(v(c)){a=a(c);if(!a.constant)throw pb("constexpr",d,c);return a(b)}return f}function Ac(a,b){function d(a,b){if(!a||!a.length)return[];if(!b||!b.length)return a;var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],f=0;f<b.length;f++)if(e===b[f])continue a;c.push(e)}return c}function c(a){var b=a;C(a)?b=a.map(c).join(" "):
F(a)&&(b=Object.keys(a).filter(function(b){return a[b]}).join(" "));return b}function f(a){var b=a;if(C(a))b=a.map(f);else if(F(a)){var c=!1,b=Object.keys(a).filter(function(b){b=a[b];!c&&x(b)&&(c=!0);return b});c&&b.push(void 0)}return b}a="ngClass"+a;var e;return["$parse",function(g){return{restrict:"AC",link:function(h,k,l){function m(a,b){var c=[];q(a,function(a){if(0<b||H[a])H[a]=(H[a]||0)+b,H[a]===+(0<b)&&c.push(a)});return c.join(" ")}function n(a){if(a===b){var c=t,c=m(c&&c.split(" "),1);
l.$addClass(c)}else c=t,c=m(c&&c.split(" "),-1),l.$removeClass(c);w=a}function p(a){a=c(a);a!==t&&r(a)}function r(a){if(w===b){var c=t&&t.split(" "),e=a&&a.split(" "),f=d(c,e),c=d(e,c),f=m(f,-1),c=m(c,1);l.$addClass(c);l.$removeClass(f)}t=a}var s=l[a].trim(),v=":"===s.charAt(0)&&":"===s.charAt(1),s=g(s,v?f:c),u=v?p:r,H=k.data("$classCounts"),w=!0,t;H||(H=W(),k.data("$classCounts",H));"ngClass"!==a&&(e||(e=g("$index",function(a){return a&1})),h.$watch(e,n));h.$watch(s,u,v)}}}]}function Ob(a,b,d,c,
f,e,g,h,k){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=k(d.name||"",!1)(a);this.$$parentForm=Mb;this.$options=Pb;this.$$parsedNgModel=f(d.ngModel);this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;
this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;this.$$pendingDebounce=null;this.$$parserValid=void 0;this.$$currentValidationRunId=0;this.$$scope=a;this.$$attr=d;this.$$element=c;this.$$animate=e;this.$$timeout=g;this.$$parse=f;this.$$q=h;this.$$exceptionHandler=b;Ud(this);Ng(this)}function Ng(a){a.$$scope.$watch(function(){var b=a.$$ngModelGet(a.$$scope);if(b!==a.$modelValue&&(a.$modelValue===a.$modelValue||b===b)){a.$modelValue=a.$$rawModelValue=b;a.$$parserValid=
void 0;for(var d=a.$formatters,c=d.length,f=b;c--;)f=d[c](f);a.$viewValue!==f&&(a.$$updateEmptyClasses(f),a.$viewValue=a.$$lastCommittedViewValue=f,a.$render(),a.$$runValidators(a.$modelValue,a.$viewValue,w))}return b})}function Bc(a){this.$$options=a}function be(a,b){q(b,function(b,c){v(a[c])||(a[c]=b)})}var Og=/^\/(.+)\/([a-z]*)$/,ua=Object.prototype.hasOwnProperty,P=function(a){return E(a)?a.toLowerCase():a},ub=function(a){return E(a)?a.toUpperCase():a},Ha,D,ta,va=[].slice,og=[].splice,Pg=[].push,
na=Object.prototype.toString,Gc=Object.getPrototypeOf,Fa=M("ng"),$=z.angular||(z.angular={}),Zb,qb=0;Ha=z.document.documentMode;var da=Number.isNaN||function(a){return a!==a};w.$inject=[];Xa.$inject=[];var C=Array.isArray,me=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,S=function(a){return E(a)?a.trim():a},Hd=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Ga=function(){if(!v(Ga.rules)){var a=z.document.querySelector("[ng-csp]")||
z.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ga.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Ga;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Ga.rules},rb=function(){if(v(rb.name_))return rb.name_;var a,b,d=Ka.length,c,f;for(b=0;b<d;++b)if(c=Ka[b],a=z.document.querySelector("["+c.replace(":","\\:")+"jq]")){f=a.getAttribute(c+
"jq");break}return rb.name_=f},oe=/:/g,Ka=["ng-","data-ng-","ng:","x-ng-"],re=function(a){var b=a.currentScript,b=b&&b.getAttribute("src");if(!b)return!0;var d=a.createElement("a");d.href=b;if(a.location.origin===d.origin)return!0;switch(d.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;default:return!1}}(z.document),ue=/[A-Z]/g,Oc=!1,Ja=3,ze={full:"1.6.2",major:1,minor:6,dot:2,codeName:"llamacorn-lovehug"};X.expando="ng339";var hb=X.cache={},ag=1;
X._data=function(a){return this.cache[a[this.expando]]||{}};var Xf=/-([a-z])/g,Qg=/^-ms-/,zb={mouseleave:"mouseout",mouseenter:"mouseover"},ac=M("jqLite"),$f=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,$b=/<|&#?\w+;/,Yf=/<([\w:-]+)/,Zf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,ha={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>",
"</tr></tbody></table>"],_default:[0,"",""]};ha.optgroup=ha.option;ha.tbody=ha.tfoot=ha.colgroup=ha.caption=ha.thead;ha.th=ha.td;var fg=z.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Oa=X.prototype={ready:$c,toString:function(){var a=[];q(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?D(this[a]):D(this[this.length+a])},length:0,push:Pg,sort:[].sort,splice:[].splice},Fb={};q("multiple selected checked disabled readOnly required open".split(" "),
function(a){Fb[P(a)]=a});var ed={};q("input select option textarea button form details".split(" "),function(a){ed[a]=!0});var md={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern",ngStep:"step"};q({data:dc,removeData:gb,hasData:function(a){for(var b in hb[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)gb(a[b])}},function(a,b){X[b]=a});q({data:dc,inheritedData:Db,scope:function(a){return D.data(a,"$scope")||Db(a.parentNode||
a,["$isolateScope","$scope"])},isolateScope:function(a){return D.data(a,"$isolateScope")||D.data(a,"$isolateScopeNoTemplate")},controller:bd,injector:function(a){return Db(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:Ab,css:function(a,b,d){b=wb(b.replace(Qg,"ms-"));if(v(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Ja&&2!==c&&8!==c&&a.getAttribute){var c=P(b),f=Fb[c];if(v(d))null===d||!1===d&&f?a.removeAttribute(b):a.setAttribute(b,
f?c:d);else return a=a.getAttribute(b),f&&null!==a&&(a=c),null===a?void 0:a}},prop:function(a,b,d){if(v(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(x(d)){var c=a.nodeType;return 1===c||c===Ja?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(x(b)){if(a.multiple&&"select"===wa(a)){var d=[];q(a.options,function(a){a.selected&&d.push(a.value||a.text)});return d}return a.value}a.value=b},html:function(a,b){if(x(b))return a.innerHTML;xb(a,!0);a.innerHTML=b},
empty:cd},function(a,b){X.prototype[b]=function(b,c){var f,e,g=this.length;if(a!==cd&&x(2===a.length&&a!==Ab&&a!==bd?b:c)){if(F(b)){for(f=0;f<g;f++)if(a===dc)a(this[f],b);else for(e in b)a(this[f],e,b[e]);return this}f=a.$dv;g=x(f)?Math.min(g,1):g;for(e=0;e<g;e++){var h=a(this[e],b,c);f=f?f+h:h}return f}for(f=0;f<g;f++)a(this[f],b,c);return this}});q({removeData:gb,on:function(a,b,d,c){if(v(c))throw ac("onargs");if(Yc(a)){c=yb(a,!0);var f=c.events,e=c.handle;e||(e=c.handle=cg(a,f));c=0<=b.indexOf(" ")?
b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=f[b];h||(h=f[b]=[],h.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,e));h.push(d)};g--;)b=c[g],zb[b]?(h(zb[b],eg),h(b,void 0,!0)):h(b)}},off:ad,one:function(a,b,d){a=D(a);a.on(b,function f(){a.off(b,d);a.off(b,f)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;xb(a);q(new X(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];q(a.childNodes,function(a){1===
a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new X(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;q(new X(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){var d=D(b).eq(0).clone()[0],c=a.parentNode;c&&c.replaceChild(d,a);d.appendChild(a)},remove:Eb,detach:function(a){Eb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;
if(c){b=new X(b);for(var f=0,e=b.length;f<e;f++){var g=b[f];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Cb,removeClass:Bb,toggleClass:function(a,b,d){b&&q(b.split(" "),function(b){var f=d;x(f)&&(f=!Ab(a,b));(f?Cb:Bb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:cc,triggerHandler:function(a,b,d){var c,f,e=b.type||b,g=yb(a);if(g=(g=g&&g.events)&&
g[e])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:w,type:e,target:a},b.type&&(c=R(c,b)),b=ra(g),f=d?[c].concat(d):[c],q(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,f)})}},function(a,b){X.prototype[b]=function(b,c,f){for(var e,g=0,h=this.length;g<
h;g++)x(e)?(e=a(this[g],b,c,f),v(e)&&(e=D(e))):bc(e,a(this[g],b,c,f));return v(e)?e:this}});X.prototype.bind=X.prototype.on;X.prototype.unbind=X.prototype.off;var Rg=Object.create(null);fd.prototype={_idx:function(a){if(a===this._lastKey)return this._lastIndex;this._lastKey=a;return this._lastIndex=this._keys.indexOf(a)},_transformKey:function(a){return da(a)?Rg:a},get:function(a){a=this._transformKey(a);a=this._idx(a);if(-1!==a)return this._values[a]},set:function(a,b){a=this._transformKey(a);var d=
this._idx(a);-1===d&&(d=this._lastIndex=this._keys.length);this._keys[d]=a;this._values[d]=b},delete:function(a){a=this._transformKey(a);a=this._idx(a);if(-1===a)return!1;this._keys.splice(a,1);this._values.splice(a,1);this._lastKey=NaN;this._lastIndex=-1;return!0}};var Gb=fd,Vf=[function(){this.$get=[function(){return Gb}]}],hg=/^([^(]+?)=>/,ig=/^[^(]*\(\s*([^)]*)\)/m,Sg=/,/,Tg=/^\s*(_?)(\S+?)\1\s*$/,gg=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,za=M("$injector");db.$$annotate=function(a,b,d){var c;if("function"===
typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw E(d)&&d||(d=a.name||jg(a)),za("strictdi",d);b=gd(a);q(b[1].split(Sg),function(a){a.replace(Tg,function(a,b,d){c.push(d)})})}a.$inject=c}}else C(a)?(b=a.length-1,sb(a[b],"fn"),c=a.slice(0,b)):sb(a,"fn",!0);return c};var ce=M("$animate"),mf=function(){this.$get=w},nf=function(){var a=new Gb,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function f(a,b,c){var d=!1;b&&(b=E(b)?b.split(" "):C(b)?b:[],q(b,function(b){b&&(d=!0,a[b]=c)}));
return d}function e(){q(b,function(b){var c=a.get(b);if(c){var d=kg(b.attr("class")),e="",f="";q(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});q(b,function(a){e&&Cb(a,e);f&&Bb(a,f)});a.delete(b)}});b.length=0}return{enabled:w,on:w,off:w,pin:w,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=f(k,h,!0),l=f(k,l,!1),h||l)a.set(g,k),b.push(g),1===b.length&&c.$$postDigest(e);
g=new d;g.complete();return g}}}]},kf=["$provide",function(a){var b=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw ce("notcsel",d);var f=d+"-animation";b.$$registeredAnimations[d.substr(1)]=f;a.factory(f,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw ce("nongcls","ng-animate");return this.$$classNameFilter};
this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(f,e,g,h){e=e&&D(e);g=g&&D(g);e=e||g.parent();b(f,e,g);return a.push(f,"enter",ea(h))},move:function(f,e,g,h){e=e&&D(e);g=g&&D(g);e=e||g.parent();b(f,e,g);return a.push(f,
"move",ea(h))},leave:function(b,c){return a.push(b,"leave",ea(c),function(){b.remove()})},addClass:function(b,c,g){g=ea(g);g.addClass=ib(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=ea(g);g.removeClass=ib(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=ea(h);h.addClass=ib(h.addClass,c);h.removeClass=ib(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=ea(k);k.from=k.from?R(k.from,c):c;k.to=k.to?R(k.to,g):g;k.tempClasses=
ib(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],pf=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},of=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,b,d,c,f){function e(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?
f(a,0,!1):b(a)};this._state=0}e.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};e.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;q(a,function(a){a.done(c)})};e.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:w,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},
then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},
_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return e}]},lf=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,f){function e(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=f||{};g.$$prepared||(g=xa(g));g.cleanupStyles&&(g.from=g.to=
null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:e,end:e}}}]},fa=M("$compile"),hc=new function(){};Qc.$inject=["$provide","$$sanitizeUriProvider"];Ib.prototype.isFirstChange=function(){return this.previousValue===hc};var hd=/^((?:x|data)[:\-_])/i,ng=/[:\-_]+(.)/g,od=M("$controller"),nd=/^(\S+)(\s+as\s+([\w$]+))?$/,wf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof D&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},pd="application/json",
kc={"Content-Type":pd+";charset=utf-8"},qg=/^\[|^\{(?!\{)/,rg={"[":/]$/,"{":/}$/},pg=/^\)]\}',?\n/,ud=M("$http"),Ca=$.$interpolateMinErr=M("$interpolate");Ca.throwNoconcat=function(a){throw Ca("noconcat",a);};Ca.interr=function(a,b){return Ca("interr",a,b.toString())};var Ef=function(){this.$get=["$window",function(a){function b(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var d=a.angular.callbacks,c={};return{createCallback:function(a){a="_"+(d.$$counter++).toString(36);var e="angular.callbacks."+
a,g=b(a);c[e]=d[a]=g;return e},wasCalled:function(a){return c[a].called},getResponse:function(a){return c[a].data},removeCallback:function(a){delete d[c[a].id];delete c[a]}}}]},Ug=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,tg={http:80,https:443,ftp:21},kb=M("$location"),ug=/^\s*[\\/]{2,}/,Vg={$$absUrl:"",$$html5:!1,$$replace:!1,absUrl:Jb("$$absUrl"),url:function(a){if(x(a))return this.$$url;var b=Ug.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||
"");return this},protocol:Jb("$$protocol"),host:Jb("$$host"),port:Jb("$$port"),path:yd("$$path",function(a){a=null!==a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(E(a)||Y(a))a=a.toString(),this.$$search=Lc(a);else if(F(a))a=xa(a,{}),q(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw kb("isrcharg");break;default:x(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},
hash:yd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};q([xd,oc,nc],function(a){a.prototype=Object.create(Vg);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==nc||!this.$$html5)throw kb("nostate");this.$$state=x(b)?null:b;this.$$urlUpdatedByLocation=!0;return this}});var Ta=M("$parse"),xg={}.constructor.prototype.valueOf,Qb=W();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Qb[a]=!0});
var Wg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},qc=function(a){this.options=a};qc.prototype={constructor:qc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),
this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Qb[b],f=Qb[d];Qb[a]||c||f?(a=f?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},
isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},
isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=
v(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Ta("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=P(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,
text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,f=!1;this.index<this.text.length;){var e=this.text.charAt(this.index),c=c+e;if(f)"u"===e?(f=this.text.substring(this.index+
1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Wg[e]||e,f=!1;else if("\\"===e)f=!0;else{if(e===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=e}this.index++}this.throwError("Unterminated quote",b)}};var s=function(a,b){this.lexer=a;this.options=b};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression=
"ConditionalExpression";s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";s.ThisExpression="ThisExpression";s.LocalsExpression="LocalsExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=
a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},
expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Bd(a))throw Ta("lval");a={type:s.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,
operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:s.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:b.text,
left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},
primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=xa(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:s.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",
this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:s.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());
return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");
return{type:s.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:s.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),
b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:s.ObjectExpression,properties:a}},throwError:function(a,b){throw Ta("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw Ta("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw Ta("ueoe",
this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,f){if(this.tokens.length>a){a=this.tokens[a];var e=a.text;if(e===b||e===d||e===c||e===f||!(b||d||c||f))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:s.ThisExpression},$locals:{type:s.LocalsExpression}}};Ed.prototype={compile:function(a){var b=this;a=this.astBuilder.ast(a);this.state={nextId:0,filters:{},
fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};U(a,b.$filter);var d="",c;this.stage="assign";if(c=Cd(a))this.state.computing="assign",d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign","s,v,l");c=Ad(a.body);b.stage="inputs";q(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=d;var h=b.nextId();b.recurse(a,h);b.return_(h);b.state.inputs.push(d);a.watchId=c});this.state.computing="fn";this.stage="main";
this.recurse(a);d='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+d+this.watchFns()+"return fn;";d=(new Function("$filter","getStringValue","ifDefined","plus",d))(this.$filter,vg,wg,zd);this.state=this.stage=void 0;d.literal=Dd(a);d.constant=a.constant;return d},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;q(b,function(b){a.push("var "+b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+
"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;q(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,f,e){var g,h,k=this,l,m,n;c=c||w;if(!e&&v(a.watchId))b=
b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,f,!0));else switch(a.type){case s.Program:q(a.body,function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case s.Literal:m=this.escape(a.value);this.assign(b,m);c(b||m);break;case s.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,
m);c(m);break;case s.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case s.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case s.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,
b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case s.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){f&&1!==f&&k.if_(k.isNull(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",
a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));c(b);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){a.computed?(h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),f&&1!==f&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),m=k.computedMember(g,h),k.assign(b,m),d&&(d.computed=!0,d.name=h)):(f&&1!==f&&k.if_(k.isNull(k.nonComputedMember(g,
a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}")),m=k.nonComputedMember(g,a.property.name),k.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){k.assign(b,"undefined")});c(b)},!!f);break;case s.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],q(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),
function(){q(a.arguments,function(b){k.recurse(b,a.constant?void 0:k.nextId(),void 0,function(a){l.push(a)})});m=g.name?k.member(g.context,g.name,g.computed)+"("+l.join(",")+")":h+"("+l.join(",")+")";k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case s.AssignmentExpression:h=this.nextId();g={};this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);m=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;
case s.ArrayExpression:l=[];q(a.elements,function(b){k.recurse(b,a.constant?void 0:k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(b||m);break;case s.ObjectExpression:l=[];n=!1;q(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),q(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===s.Identifier?a.key.name:""+a.key.value;h=k.nextId();k.recurse(a.value,h);k.assign(k.member(b,g,a.computed),h)})):
(q(a.properties,function(b){k.recurse(b.value,a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===s.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case s.ThisExpression:this.assign(b,"s");c(b||"s");break;case s.LocalsExpression:this.assign(b,"l");c(b||"l");break;case s.NGValueParameter:this.assign(b,"v"),c(b||"v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,
a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",
a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},isNull:function(a){return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},getStringValue:function(a){this.assign(a,
"getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,f,e){var g=this;return function(){g.recurse(a,b,d,c,f,e)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(E(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(Y(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";
if("undefined"===typeof a)return"undefined";throw Ta("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};Fd.prototype={compile:function(a){var b=this;a=this.astBuilder.ast(a);U(a,b.$filter);var d,c;if(d=Cd(a))c=this.recurse(d);d=Ad(a.body);var f;d&&(f=[],q(d,function(a,c){var d=b.recurse(a);a.input=d;f.push(d);a.watchId=c}));var e=[];q(a.body,function(a){e.push(b.recurse(a.expression))});
d=0===a.body.length?w:1===a.body.length?e[0]:function(a,b){var c;q(e,function(d){c=d(a,b)});return c};c&&(d.assign=function(a,b,d){return c(a,d,b)});f&&(d.inputs=f);d.literal=Dd(a);d.constant=a.constant;return d},recurse:function(a,b,d){var c,f,e=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,b);case s.UnaryExpression:return f=this.recurse(a.argument),this["unary"+a.operator](f,b);case s.BinaryExpression:return c=this.recurse(a.left),
f=this.recurse(a.right),this["binary"+a.operator](c,f,b);case s.LogicalExpression:return c=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](c,f,b);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case s.Identifier:return e.identifier(a.name,b,d);case s.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(f=a.property.name),a.computed&&(f=this.recurse(a.property)),a.computed?this.computedMember(c,
f,b,d):this.nonComputedMember(c,f,b,d);case s.CallExpression:return g=[],q(a.arguments,function(a){g.push(e.recurse(a))}),a.filter&&(f=this.$filter(a.callee.name)),a.filter||(f=this.recurse(a.callee,!0)),a.filter?function(a,c,d,e){for(var n=[],p=0;p<g.length;++p)n.push(g[p](a,c,d,e));a=f.apply(void 0,n,e);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,e){var n=f(a,c,d,e),p;if(null!=n.value){p=[];for(var r=0;r<g.length;++r)p.push(g[r](a,c,d,e));p=n.value.apply(n.context,p)}return b?
{value:p}:p};case s.AssignmentExpression:return c=this.recurse(a.left,!0,1),f=this.recurse(a.right),function(a,d,e,g){var n=c(a,d,e,g);a=f(a,d,e,g);n.context[n.name]=a;return b?{value:a}:a};case s.ArrayExpression:return g=[],q(a.elements,function(a){g.push(e.recurse(a))}),function(a,c,d,e){for(var f=[],p=0;p<g.length;++p)f.push(g[p](a,c,d,e));return b?{value:f}:f};case s.ObjectExpression:return g=[],q(a.properties,function(a){a.computed?g.push({key:e.recurse(a.key),computed:!0,value:e.recurse(a.value)}):
g.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,computed:!1,value:e.recurse(a.value)})}),function(a,c,d,e){for(var f={},p=0;p<g.length;++p)g[p].computed?f[g[p].key(a,c,d,e)]=g[p].value(a,c,d,e):f[g[p].key]=g[p].value(a,c,d,e);return b?{value:f}:f};case s.ThisExpression:return function(a){return b?{value:a}:a};case s.LocalsExpression:return function(a,c){return b?{value:c}:c};case s.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,
c,f,e){d=a(d,c,f,e);d=v(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,f,e){d=a(d,c,f,e);d=v(d)?-d:-0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,f,e){d=!a(d,c,f,e);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,f,e,g){var h=a(c,f,e,g);c=b(c,f,e,g);h=zd(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,f,e,g){var h=a(c,f,e,g);c=b(c,f,e,g);h=(v(h)?h:0)-(v(c)?c:0);return d?{value:h}:h}},"binary*":function(a,b,
d){return function(c,f,e,g){c=a(c,f,e,g)*b(c,f,e,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)/b(c,f,e,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)%b(c,f,e,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)===b(c,f,e,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)!==b(c,f,e,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,
f,e,g){c=a(c,f,e,g)==b(c,f,e,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)!=b(c,f,e,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)<b(c,f,e,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)>b(c,f,e,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)<=b(c,f,e,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,f,e,g){c=
a(c,f,e,g)>=b(c,f,e,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)&&b(c,f,e,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,f,e,g){c=a(c,f,e,g)||b(c,f,e,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(f,e,g,h){f=a(f,e,g,h)?b(f,e,g,h):d(f,e,g,h);return c?{value:f}:f}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,f,e,g){c=
f&&a in f?f:c;d&&1!==d&&c&&null==c[a]&&(c[a]={});f=c?c[a]:void 0;return b?{context:c,name:a,value:f}:f}},computedMember:function(a,b,d,c){return function(f,e,g,h){var k=a(f,e,g,h),l,m;null!=k&&(l=b(f,e,g,h),l+="",c&&1!==c&&k&&!k[l]&&(k[l]={}),m=k[l]);return d?{context:k,name:l,value:m}:m}},nonComputedMember:function(a,b,d,c){return function(f,e,g,h){f=a(f,e,g,h);c&&1!==c&&f&&null==f[b]&&(f[b]={});e=null!=f?f[b]:void 0;return d?{context:f,name:b,value:e}:e}},inputs:function(a,b){return function(d,
c,f,e){return e?e[b]:a(d,c,f)}}};var rc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new s(a,d);this.astCompiler=d.csp?new Fd(this.ast,b):new Ed(this.ast,b)};rc.prototype={constructor:rc,parse:function(a){return this.astCompiler.compile(a)}};var Da=M("$sce"),pa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},sc=/_([a-z])/g,zg=M("$compile"),ca=z.document.createElement("a"),Jd=oa(z.location.href);Kd.$inject=["$document"];Xc.$inject=["$provide"];var Rd=22,
Qd=".",uc="0";Ld.$inject=["$locale"];Nd.$inject=["$locale"];var Kg={yyyy:aa("FullYear",4,0,!1,!0),yy:aa("FullYear",2,0,!0,!0),y:aa("FullYear",1,0,!1,!0),MMMM:mb("Month"),MMM:mb("Month",!0),MM:aa("Month",2,1),M:aa("Month",1,1),LLLL:mb("Month",!1,!0),dd:aa("Date",2),d:aa("Date",1),HH:aa("Hours",2),H:aa("Hours",1),hh:aa("Hours",2,-12),h:aa("Hours",1,-12),mm:aa("Minutes",2),m:aa("Minutes",1),ss:aa("Seconds",2),s:aa("Seconds",1),sss:aa("Milliseconds",3),EEEE:mb("Day"),EEE:mb("Day",!0),a:function(a,b){return 12>
a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Kb(Math[0<a?"floor":"ceil"](a/60),2)+Kb(Math.abs(a%60),2))},ww:Td(2),w:Td(1),G:vc,GG:vc,GGG:vc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},Jg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,Ig=/^-?\d+$/;Md.$inject=["$locale"];var Dg=ma(P),Eg=ma(ub);Od.$inject=["$parse"];var Be=ma({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,
b){if("a"===b[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===na.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(f)||a.preventDefault()})}}}}),vb={};q(Fb,function(a,b){function d(a,d,f){a.$watch(f[c],function(a){f.$set(b,!!a)})}if("multiple"!==a){var c=Ba("ng-"+b),f=d;"checked"===a&&(f=function(a,b,f){f.ngModel!==f[c]&&d(a,b,f)});vb[c]=function(){return{restrict:"A",priority:100,link:f}}}});q(md,function(a,b){vb[b]=function(){return{priority:100,link:function(a,
c,f){if("ngPattern"===b&&"/"===f.ngPattern.charAt(0)&&(c=f.ngPattern.match(Og))){f.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(f[b],function(a){f.$set(b,a)})}}}});q(["src","srcset","href"],function(a){var b=Ba("ng-"+a);vb[b]=function(){return{priority:99,link:function(d,c,f){var e=a,g=a;"href"===a&&"[object SVGAnimatedString]"===na.call(c.prop("href"))&&(g="xlinkHref",f.$attr[g]="xlink:href",e=null);f.$observe(b,function(b){b?(f.$set(g,b),Ha&&e&&c.prop(e,f[g])):"href"===a&&f.$set(g,null)})}}}});
var Mb={$addControl:w,$$renameControl:function(a,b){a.$name=b},$removeControl:w,$setValidity:w,$setDirty:w,$setPristine:w,$setSubmitted:w};Lb.$inject=["$element","$attrs","$scope","$animate","$interpolate"];Lb.prototype={$rollbackViewValue:function(){q(this.$$controls,function(a){a.$rollbackViewValue()})},$commitViewValue:function(){q(this.$$controls,function(a){a.$commitViewValue()})},$addControl:function(a){La(a.$name,"input");this.$$controls.push(a);a.$name&&(this[a.$name]=a);a.$$parentForm=this},
$$renameControl:function(a,b){var d=a.$name;this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&this[a.$name]===a&&delete this[a.$name];q(this.$pending,function(b,d){this.$setValidity(d,null,a)},this);q(this.$error,function(b,d){this.$setValidity(d,null,a)},this);q(this.$$success,function(b,d){this.$setValidity(d,null,a)},this);Za(this.$$controls,a);a.$$parentForm=Mb},$setDirty:function(){this.$$animate.removeClass(this.$$element,Ua);this.$$animate.addClass(this.$$element,
Rb);this.$dirty=!0;this.$pristine=!1;this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,Ua,Rb+" ng-submitted");this.$dirty=!1;this.$pristine=!0;this.$submitted=!1;q(this.$$controls,function(a){a.$setPristine()})},$setUntouched:function(){q(this.$$controls,function(a){a.$setUntouched()})},$setSubmitted:function(){this.$$animate.addClass(this.$$element,"ng-submitted");this.$submitted=!0;this.$$parentForm.$setSubmitted()}};Wd({clazz:Lb,set:function(a,b,d){var c=
a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d]},unset:function(a,b,d){var c=a[b];c&&(Za(c,d),0===c.length&&delete a[b])}});var de=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||w}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Lb,compile:function(d,e){d.addClass(Ua).addClass(nb);var g=e.name?"name":a&&e.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var p=function(b){a.$apply(function(){n.$commitViewValue();
n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",p);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var r=g?c(n.$name):w;g&&(r(a,n),e.$observe(g,function(b){n.$name!==b&&(r(a,void 0),n.$$parentForm.$$renameControl(n,b),r=c(n.$name),r(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);r(a,void 0);R(n,Mb)})}}}}}]},Ce=de(),Oe=de(!0),Lg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
Xg=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,Yg=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,Mg=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,ee=/^(\d{4,})-(\d{2})-(\d{2})$/,fe=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Cc=/^(\d{4,})-W(\d\d)$/,ge=/^(\d{4,})-(\d\d)$/,
he=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Yd=W();q(["date","datetime-local","month","time","week"],function(a){Yd[a]=!0});var ie={text:function(a,b,d,c,f,e){Ra(a,b,d,c,f,e);xc(c)},date:ob("date",ee,Nb(ee,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":ob("datetimelocal",fe,Nb(fe,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:ob("time",he,Nb(he,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:ob("week",Cc,function(a,b){if(ga(a))return a;if(E(a)){Cc.lastIndex=0;var d=Cc.exec(a);
if(d){var c=+d[1],f=+d[2],e=d=0,g=0,h=0,k=Sd(c),f=7*(f-1);b&&(d=b.getHours(),e=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+f,d,e,g,h)}}return NaN},"yyyy-Www"),month:ob("month",ge,Nb(ge,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,f,e){yc(a,b,d,c);Zd(c);Ra(a,b,d,c,f,e);var g,h;if(v(d.min)||d.ngMin)c.$validators.min=function(a){return c.$isEmpty(a)||x(g)||a>=g},d.$observe("min",function(a){g=Sa(a);c.$validate()});if(v(d.max)||d.ngMax)c.$validators.max=
function(a){return c.$isEmpty(a)||x(h)||a<=h},d.$observe("max",function(a){h=Sa(a);c.$validate()});if(v(d.step)||d.ngStep){var k;c.$validators.step=function(a,b){return c.$isEmpty(b)||x(k)||$d(b,g||0,k)};d.$observe("step",function(a){k=Sa(a);c.$validate()})}},url:function(a,b,d,c,f,e){Ra(a,b,d,c,f,e);xc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||Xg.test(d)}},email:function(a,b,d,c,f,e){Ra(a,b,d,c,f,e);xc(c);c.$$parserName="email";c.$validators.email=function(a,
b){var d=a||b;return c.$isEmpty(d)||Yg.test(d)}},radio:function(a,b,d,c){var f=!d.ngTrim||"false"!==S(d.ngTrim);x(d.name)&&b.attr("name",++qb);b.on("click",function(a){var g;b[0].checked&&(g=d.value,f&&(g=S(g)),c.$setViewValue(g,a&&a.type))});c.$render=function(){var a=d.value;f&&(a=S(a));b[0].checked=a===c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,f,e){function g(a,c){b.attr(a,d[a]);d.$observe(a,c)}function h(a){n=Sa(a);da(c.$modelValue)||(m?(a=b.val(),n>a&&(a=n,b.val(a)),
c.$setViewValue(a)):c.$validate())}function k(a){p=Sa(a);da(c.$modelValue)||(m?(a=b.val(),p<a&&(b.val(p),a=p<n?n:p),c.$setViewValue(a)):c.$validate())}function l(a){r=Sa(a);da(c.$modelValue)||(m&&c.$viewValue!==b.val()?c.$setViewValue(b.val()):c.$validate())}yc(a,b,d,c);Zd(c);Ra(a,b,d,c,f,e);var m=c.$$hasNativeValidators&&"range"===b[0].type,n=m?0:void 0,p=m?100:void 0,r=m?1:void 0,q=b[0].validity;a=v(d.min);f=v(d.max);e=v(d.step);var s=c.$render;c.$render=m&&v(q.rangeUnderflow)&&v(q.rangeOverflow)?
function(){s();c.$setViewValue(b.val())}:s;a&&(c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||x(n)||b>=n},g("min",h));f&&(c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||x(p)||b<=p},g("max",k));e&&(c.$validators.step=m?function(){return!q.stepMismatch}:function(a,b){return c.$isEmpty(b)||x(r)||$d(b,n||0,r)},g("step",l))},checkbox:function(a,b,d,c,f,e,g,h){var k=ae(h,a,"ngTrueValue",d.ngTrueValue,!0),l=ae(h,a,"ngFalseValue",d.ngFalseValue,
!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return qa(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:w,button:w,submit:w,reset:w,file:w},Rc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,e,g,h){h[0]&&(ie[P(g.type)]||ie.text)(f,e,g,h[0],b,a,d,c)}}}}],Zg=/^(true|false|\d+)$/,
ff=function(){function a(a,d,c){var f=v(c)?c:9===Ha?"":null;a.prop("value",f);d.$set("value",c)}return{restrict:"A",priority:100,compile:function(b,d){return Zg.test(d.ngValue)?function(b,d,e){b=b.$eval(e.ngValue);a(d,e,b)}:function(b,d,e){b.$watch(e.ngValue,function(b){a(d,e,b)})}}}},Ge=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,f){a.$$addBindingInfo(c,f.ngBind);c=c[0];b.$watch(f.ngBind,function(a){c.textContent=Yb(a)})}}}}],Ie=["$interpolate",
"$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];e.$observe("ngBindTemplate",function(a){d.textContent=x(a)?"":a})}}}}],He=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,f){var e=b(f.ngBindHtml),g=b(f.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,f){d.$$addBindingInfo(c,f.ngBindHtml);b.$watch(g,
function(){var d=e(b);c.html(a.getTrustedHtml(d)||"")})}}}}],ef=ma({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Je=Ac("",!0),Le=Ac("Odd",0),Ke=Ac("Even",1),Me=Qa({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Ne=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Wc={},$g={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=Ba("ng-"+a);Wc[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(f,e){var g=d(e[b]);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};$g[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Qe=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,f,e,g){var h,k,l;d.$watch(f.ngIf,function(d){d?k||g(function(d,e){k=e;d[d.length++]=b.$$createComment("end ngIf",
f.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=tb(h.clone),a.leave(l).done(function(a){!1!==a&&(l=null)}),h=null))})}}}],Re=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:$.noop,compile:function(c,f){var e=f.ngInclude||f.src,g=f.onload||"",h=f.autoscroll;return function(c,f,m,n,p){var q=0,s,w,u,H=function(){w&&(w.remove(),w=null);s&&(s.$destroy(),s=null);
u&&(d.leave(u).done(function(a){!1!==a&&(w=null)}),w=u,u=null)};c.$watch(e,function(e){var m=function(a){!1===a||!v(h)||h&&!c.$eval(h)||b()},w=++q;e?(a(e,!0).then(function(a){if(!c.$$destroyed&&w===q){var b=c.$new();n.template=a;a=p(b,function(a){H();d.enter(a,null,f).done(m)});s=b;u=a;s.$emit("$includeContentLoaded",e);c.$eval(g)}},function(){c.$$destroyed||w!==q||(H(),c.$emit("$includeContentError",e))}),c.$emit("$includeContentRequested",e)):(H(),n.template=null)})}}}}],hf=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(b,d,c,f){na.call(d[0]).match(/SVG/)?(d.empty(),a(Zc(f.template,z.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(b))}}}],Se=Qa({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),df=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var f=d.ngList||", ",e="false"!==d.ngTrim,g=e?S(f):f;c.$parsers.push(function(a){if(!x(a)){var b=
[];a&&q(a.split(g),function(a){a&&b.push(e?S(a):a)});return b}});c.$formatters.push(function(a){if(C(a))return a.join(f)});c.$isEmpty=function(a){return!a||!a.length}}}},nb="ng-valid",Vd="ng-invalid",Ua="ng-pristine",Rb="ng-dirty",pb=M("ngModel");Ob.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");Ob.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+
"($$$p)");this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);y(c)&&(c=a(b));return c};this.$$ngModelSet=function(a,c){y(this.$$parsedNgModel(a))?b(a,{$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw pb("nonassign",this.$$attr.ngModel,ya(this.$$element));},$render:w,$isEmpty:function(a){return x(a)||""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,"ng-not-empty"),this.$$animate.addClass(this.$$element,
"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,"ng-not-empty"))},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Rb);this.$$animate.addClass(this.$$element,Ua)},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,Ua);this.$$animate.addClass(this.$$element,Rb);this.$$parentForm.$setDirty()},$setUntouched:function(){this.$touched=!1;this.$untouched=
!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=!0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render()},$validate:function(){if(!da(this.$modelValue)){var a=this.$$lastCommittedViewValue,b=this.$$rawModelValue,d=this.$valid,c=this.$modelValue,f=this.$options.getOption("allowInvalid"),
e=this;this.$$runValidators(b,a,function(a){f||d===a||(e.$modelValue=a?b:void 0,e.$modelValue!==c&&e.$$writeModelToScope())})}},$$runValidators:function(a,b,d){function c(){var c=!0;q(k.$validators,function(d,f){var g=Boolean(d(a,b));c=c&&g;e(f,g)});return c?!0:(q(k.$asyncValidators,function(a,b){e(b,null)}),!1)}function f(){var c=[],d=!0;q(k.$asyncValidators,function(f,g){var h=f(a,b);if(!h||!y(h.then))throw pb("nopromise",h);e(g,void 0);c.push(h.then(function(){e(g,!0)},function(){d=!1;e(g,!1)}))});
c.length?k.$$q.all(c).then(function(){g(d)},w):g(!0)}function e(a,b){h===k.$$currentValidationRunId&&k.$setValidity(a,b)}function g(a){h===k.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;var h=this.$$currentValidationRunId,k=this;(function(){var a=k.$$parserName||"parse";if(x(k.$$parserValid))e(a,null);else return k.$$parserValid||(q(k.$validators,function(a,b){e(b,null)}),q(k.$asyncValidators,function(a,b){e(b,null)})),e(a,k.$$parserValid),k.$$parserValid;return!0})()?c()?f():g(!1):
g(!1)},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if(this.$$lastCommittedViewValue!==a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;if(this.$$parserValid=x(a)?void 0:!0)for(var d=0;d<this.$parsers.length;d++)if(a=this.$parsers[d](a),x(a)){this.$$parserValid=!1;break}da(this.$modelValue)&&
(this.$modelValue=this.$$ngModelGet(this.$$scope));var c=this.$modelValue,f=this.$options.getOption("allowInvalid");this.$$rawModelValue=a;f&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){f||(b.$modelValue=d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,this.$modelValue);q(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},
this)},$setViewValue:function(a,b){this.$viewValue=a;this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");Y(b[a])?b=b[a]:Y(b["default"])&&(b=b["default"]);this.$$timeout.cancel(this.$$pendingDebounce);var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){d.$commitViewValue()},b):this.$$scope.$root.$$phase?this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()})},
$overrideModelOptions:function(a){this.$options=this.$options.createChild(a)}};Wd({clazz:Ob,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]}});var cf=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Ob,priority:1,compile:function(b){b.addClass(Ua).addClass("ng-untouched").addClass(nb);return{pre:function(a,b,f,e){var g=e[0];b=e[1]||g.$$parentForm;if(e=e[2])g.$options=e.$options;g.$$initGetterSetters();b.$addControl(g);f.$observe("name",
function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,f,e){function g(){h.$setTouched()}var h=e[0];if(h.$options.getOption("updateOn"))c.on(h.$options.getOption("updateOn"),function(a){h.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){h.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Pb,ah=/(\s+|^)default(\s+|$)/;Bc.prototype={getOption:function(a){return this.$$options[a]},createChild:function(a){var b=
!1;a=R({},a);q(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=this.$$options[c],"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===c&&(a.updateOnDefault=!1,a[c]=S(d.replace(ah,function(){a.updateOnDefault=!0;return" "})))},this);b&&(delete a["*"],be(a,this.$$options));be(a,Pb.$$options);return new Bc(a)}};Pb=new Bc({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,timezone:null});var gf=function(){function a(a,d){this.$$attrs=a;this.$$scope=
d}a.$inject=["$attrs","$scope"];a.prototype={$onInit:function(){var a=this.parentCtrl?this.parentCtrl.$options:Pb,d=this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options=a.createChild(d)}};return{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},bindToController:!0,controller:a}},Te=Qa({terminal:!0,priority:1E3}),bh=M("ngOptions"),ch=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
af=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!q&&sa(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(ch);if(!n)throw bh("iexp",a,ya(b));var p=n[5]||n[7],q=n[6];a=/ as /.test(n[0])&&n[1];var s=n[9];b=d(n[2]?n[1]:p);var v=a&&d(a)||b,u=s&&d(s),w=s?function(a,b){return u(c,b)}:function(a){return Pa(a)},
x=function(a,b){return w(a,B(a,b))},t=d(n[2]||n[1]),z=d(n[3]||""),A=d(n[4]||""),K=d(n[8]),I={},B=q?function(a,b){I[q]=b;I[p]=a;return I}:function(a){I[p]=a;return I};return{trackBy:s,getTrackByValue:x,getWatchables:d(K,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=B(l,h),l=w(l,h);b.push(l);if(n[2]||n[1])l=t(c,h),b.push(l);n[4]&&(h=A(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=K(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===
g?n:g[n],q=B(d[p],p),r=v(c,q),p=w(r,q),u=t(c,q),I=z(c,q),q=A(c,q),r=new e(p,r,u,I,q);a.push(r);b[p]=r}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[x(a)]},getViewValueFromOption:function(a){return s?xa(a.viewValue):a.viewValue}}}}}var f=z.document.createElement("option"),e=z.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=w},post:function(d,h,k,l){function m(a){var b=(a=t.getOptionFromViewValue(a))&&
a.element;b&&!b.selected&&(b.selected=!0);return a}function n(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}function p(){var a=t&&r.readValue();if(t)for(var b=t.items.length-1;0<=b;b--){var c=t.items[b];v(c.group)?Eb(c.element.parentNode):Eb(c.element)}t=y.getOptions();var d={};z&&h.prepend(r.emptyOption);t.items.forEach(function(a){var b;if(v(a.group)){b=d[a.group];b||(b=e.cloneNode(!1),A.appendChild(b),b.label=null===a.group?
"null":a.group,d[a.group]=b);var c=f.cloneNode(!1)}else b=A,c=f.cloneNode(!1);b.appendChild(c);n(a,c)});h[0].appendChild(A);s.$render();s.$isEmpty(a)||(b=r.readValue(),(y.trackBy||w?qa(a,b):a===b)||(s.$setViewValue(b),s.$render()))}var r=l[0],s=l[1],w=k.multiple;l=0;for(var u=h.children(),x=u.length;l<x;l++)if(""===u[l].value){r.hasEmptyOption=!0;r.emptyOption=u.eq(l);break}var z=!!r.emptyOption;D(f.cloneNode(!1)).val("?");var t,y=c(k.ngOptions,h,d),A=b[0].createDocumentFragment();r.generateUnknownOptionValue=
function(a){return"?"};w?(r.writeValue=function(a){var b=a&&a.map(m)||[];t.items.forEach(function(a){a.element.selected&&-1===Array.prototype.indexOf.call(b,a)&&(a.element.selected=!1)})},r.readValue=function(){var a=h.val()||[],b=[];q(a,function(a){(a=t.selectValueMap[a])&&!a.disabled&&b.push(t.getViewValueFromOption(a))});return b},y.trackBy&&d.$watchCollection(function(){if(C(s.$viewValue))return s.$viewValue.map(function(a){return y.getTrackByValue(a)})},function(){s.$render()})):(r.writeValue=
function(a){var b=t.selectValueMap[h.val()],c=t.getOptionFromViewValue(a);b&&b.element.removeAttribute("selected");c?(h[0].value!==c.selectValue&&(r.removeUnknownOption(),r.unselectEmptyOption(),h[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):z?r.selectEmptyOption():r.unknownOption.parent().length?r.updateUnknownOption(a):r.renderUnknownOption(a)},r.readValue=function(){var a=t.selectValueMap[h.val()];return a&&!a.disabled?(r.unselectEmptyOption(),r.removeUnknownOption(),
t.getViewValueFromOption(a)):null},y.trackBy&&d.$watch(function(){return y.getTrackByValue(s.$viewValue)},function(){s.$render()}));z&&(r.emptyOption.remove(),a(r.emptyOption)(d),8===r.emptyOption[0].nodeType?(r.hasEmptyOption=!1,r.registerOption=function(a,b){""===b.val()&&(r.hasEmptyOption=!0,r.emptyOption=b,r.emptyOption.removeClass("ng-scope"),s.$render(),b.on("$destroy",function(){r.hasEmptyOption=!1;r.emptyOption=void 0}))}):r.emptyOption.removeClass("ng-scope"));h.empty();p();d.$watchCollection(y.getWatchables,
p)}}}}],Ue=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,f=/^when(Minus)?(.+)$/;return{link:function(e,g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,p=e.$eval(m)||{},r={},s=b.startSymbol(),v=b.endSymbol(),u=s+l+"-"+n+v,H=$.noop,y;q(h,function(a,b){var c=f.exec(b);c&&(c=(c[1]?"-":"")+P(c[2]),p[c]=g.attr(h.$attr[b]))});q(p,function(a,d){r[d]=b(a.replace(c,u))});e.$watch(l,function(b){var c=parseFloat(b),f=da(c);f||c in p||(c=a.pluralCat(c-
n));c===y||f&&da(y)||(H(),f=r[c],x(f)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),H=w,k()):H=e.$watch(f,k),y=c)})}}}],Ve=["$parse","$animate","$compile",function(a,b,d){var c=M("ngRepeat"),f=function(a,b,c,d,f,m,n){a[c]=d;f&&(a[f]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(e,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",
h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw c("iexp",h);var m=l[1],n=l[2],p=l[3],r=l[4],l=m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var s=l[3]||l[1],v=l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))throw c("badident",p);var u,w,x,t,y={$id:Pa};r?u=a(r):(x=function(a,b){return Pa(b)},
t=function(a){return a});return function(a,d,e,g,l){u&&(w=function(b,c,d){v&&(y[v]=b);y[s]=c;y.$index=d;return u(a,y)});var m=W();a.$watchCollection(n,function(e){var g,n,r=d[0],u,y=W(),z,D,E,B,F,C,I;p&&(a[p]=e);if(sa(e))F=e,n=w||x;else for(I in n=w||t,F=[],e)ua.call(e,I)&&"$"!==I.charAt(0)&&F.push(I);z=F.length;I=Array(z);for(g=0;g<z;g++)if(D=e===F?g:F[g],E=e[D],B=n(D,E,g),m[B])C=m[B],delete m[B],y[B]=C,I[g]=C;else{if(y[B])throw q(I,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,B,E);I[g]={id:B,
scope:void 0,clone:void 0};y[B]=!0}for(u in m){C=m[u];B=tb(C.clone);b.leave(B);if(B[0].parentNode)for(g=0,n=B.length;g<n;g++)B[g].$$NG_REMOVED=!0;C.scope.$destroy()}for(g=0;g<z;g++)if(D=e===F?g:F[g],E=e[D],C=I[g],C.scope){u=r;do u=u.nextSibling;while(u&&u.$$NG_REMOVED);C.clone[0]!==u&&b.move(tb(C.clone),null,r);r=C.clone[C.clone.length-1];f(C.scope,g,s,E,v,D,z)}else l(function(a,c){C.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,null,r);r=d;C.clone=a;y[C.id]=C;f(C.scope,g,s,E,v,D,z)});m=
y})}}}}],We=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Pe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Xe=Qa(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,c){b.css(c,"")});a&&b.css(a)},
!0)}),Ye=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,f,e){var g=[],h=[],k=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(f.ngSwitch||f.on,function(c){for(var d,f;k.length;)a.cancel(k.pop());d=0;for(f=l.length;d<f;++d){var s=tb(h[d].clone);l[d].$destroy();(k[d]=a.leave(s)).done(m(k,d))}h.length=0;l.length=0;(g=e.cases["!"+c]||e.cases["?"])&&q(g,function(c){c.transclude(function(d,e){l.push(e);
var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],Ze=Qa({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,f){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,b,c){return c[b-1]!==a});q(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:f,element:b})})}}),$e=Qa({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,
b,d,c,f){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:f,element:b})}}),dh=M("ngTransclude"),bf=["$compile",function(a){return{restrict:"EAC",terminal:!0,compile:function(b){var d=a(b.contents());b.empty();return function(a,b,e,g,h){function k(){d(a,function(a){b.append(a)})}if(!h)throw dh("orphan",ya(b));e.ngTransclude===e.$attr.ngTransclude&&(e.ngTransclude="");e=e.ngTransclude||e.ngTranscludeSlot;h(function(a,c){var d;if(d=a.length)a:{d=0;for(var e=a.length;d<e;d++){var g=a[d];if(g.nodeType!==
Ja||g.nodeValue.trim()){d=!0;break a}}d=void 0}d?b.append(a):(k(),c.$destroy())},null,e);e&&!h.isSlotFilled(e)&&k()}}}}],De=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],eh={$setViewValue:w,$render:w},fh=["$element","$scope",function(a,b){function d(){h||(h=!0,b.$$postDigest(function(){h=!1;e.ngModelCtrl.$render()}))}function c(a){k||(k=!0,b.$$postDigest(function(){b.$$destroyed||(k=!1,e.ngModelCtrl.$setViewValue(e.readValue()),
a&&e.ngModelCtrl.$render())}))}function f(a){a.prop("selected",!0);a.attr("selected",!0)}var e=this,g=new Gb;e.selectValueMap={};e.ngModelCtrl=eh;e.multiple=!1;e.unknownOption=D(z.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);a.prepend(e.unknownOption);f(e.unknownOption);a.val(b)};e.updateUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);f(e.unknownOption);
a.val(b)};e.generateUnknownOptionValue=function(a){return"? "+Pa(a)+" ?"};e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.selectEmptyOption=function(){e.emptyOption&&(a.val(""),f(e.emptyOption))};e.unselectEmptyOption=function(){e.hasEmptyOption&&e.emptyOption.removeAttr("selected")};b.$on("$destroy",function(){e.renderUnknownOption=w});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null};e.writeValue=
function(b){var c=a[0].options[a[0].selectedIndex];c&&c.removeAttribute("selected");e.hasOption(b)?(e.removeUnknownOption(),c=Pa(b),a.val(c in e.selectValueMap?c:b),f(D(a[0].options[a[0].selectedIndex]))):null==b&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(b):e.renderUnknownOption(b)};e.addOption=function(a,b){if(8!==b[0].nodeType){La(a,'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=b);var c=g.get(a)||0;g.set(a,
c+1);d()}};e.removeOption=function(a){var b=g.get(a);b&&(1===b?(g.delete(a),""===a&&(e.hasEmptyOption=!1,e.emptyOption=void 0)):g.set(a,b-1))};e.hasOption=function(a){return!!g.get(a)};var h=!1,k=!1;e.registerOption=function(a,b,f,g,h){if(f.$attr.ngValue){var k,q=NaN;f.$observe("value",function(a){var d,f=b.prop("selected");v(q)&&(e.removeOption(k),delete e.selectValueMap[q],d=!0);q=Pa(a);k=a;e.selectValueMap[q]=a;e.addOption(a,b);b.attr("value",q);d&&f&&c()})}else g?f.$observe("value",function(a){e.readValue();
var d,f=b.prop("selected");v(k)&&(e.removeOption(k),d=!0);k=a;e.addOption(a,b);d&&f&&c()}):h?a.$watch(h,function(a,d){f.$set("value",a);var g=b.prop("selected");d!==a&&e.removeOption(d);e.addOption(a,b);d&&g&&c()}):e.addOption(f.value,b);f.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),e.ngModelCtrl.$render())});b.on("$destroy",function(){var a=e.readValue(),b=f.value;e.removeOption(b);d();(e.multiple&&a&&-1!==a.indexOf(b)||
a===b)&&c(!0)})}}],Ee=function(){return{restrict:"E",require:["select","?ngModel"],controller:fh,priority:1,link:{pre:function(a,b,d,c){var f=c[0],e=c[1];if(e){if(f.ngModelCtrl=e,b.on("change",function(){f.removeUnknownOption();a.$apply(function(){e.$setViewValue(f.readValue())})}),d.multiple){f.multiple=!0;f.readValue=function(){var a=[];q(b.find("option"),function(b){b.selected&&!b.disabled&&(b=b.value,a.push(b in f.selectValueMap?f.selectValueMap[b]:b))});return a};f.writeValue=function(a){q(b.find("option"),
function(b){b.selected=!!a&&(-1!==Array.prototype.indexOf.call(a,b.value)||-1!==Array.prototype.indexOf.call(a,f.selectValueMap[b.value]))})};var g,h=NaN;a.$watch(function(){h!==e.$viewValue||qa(g,e.$viewValue)||(g=ra(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}else f.registerOption=w},post:function(a,b,d,c){var f=c[1];if(f){var e=c[0];f.$render=function(){e.writeValue(f.$viewValue)}}}}}},Fe=["$interpolate",function(a){return{restrict:"E",priority:100,
compile:function(b,d){var c,f;v(d.ngValue)||(v(d.value)?c=a(d.value,!0):(f=a(b.text(),!0))||d.$set("value",b.text()));return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,f)}}}}],Tc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Sc=function(){return{restrict:"A",
require:"?ngModel",link:function(a,b,d,c){if(c){var f,e=d.ngPattern||d.pattern;d.$observe("pattern",function(a){E(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw M("ngPattern")("noregexp",e,a,ya(b));f=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||x(f)||f.test(b)}}}}},Vc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var f=-1;d.$observe("maxlength",function(a){a=Z(a);f=da(a)?-1:a;c.$validate()});c.$validators.maxlength=
function(a,b){return 0>f||c.$isEmpty(b)||b.length<=f}}}}},Uc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var f=0;d.$observe("minlength",function(a){f=Z(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=f}}}}};z.angular.bootstrap?z.console&&console.log("WARNING: Tried to load angular more than once."):(ve(),ye($),$.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-
b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),
WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,
c){var f=a|0,e=c;void 0===e&&(e=Math.min(b(a),3));Math.pow(10,e);return 1==f&&0==e?"one":"other"}})}]),D(function(){qe(z.document,Mc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.6.2
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(R,y){'use strict';function Ea(a,b,c){if(!a)throw Oa("areq",b||"?",c||"required");return a}function Fa(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;W(a)&&(a=a.join(" "));W(b)&&(b=b.join(" "));return a+" "+b}function Pa(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function X(a,b,c){var d="";a=W(a)?a:a&&F(a)&&a.length?a.split(/\s+/):[];s(a,function(a,e){a&&0<a.length&&(d+=0<e?" ":"",d+=c?b+a:a+b)});return d}function Ga(a){if(a instanceof E)switch(a.length){case 0:return a;
case 1:if(1===a[0].nodeType)return a;break;default:return E(ua(a))}if(1===a.nodeType)return E(a)}function ua(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1===c.nodeType)return c}}function Qa(a,b,c){s(b,function(b){a.addClass(b,c)})}function Ra(a,b,c){s(b,function(b){a.removeClass(b,c)})}function Y(a){return function(b,c){c.addClass&&(Qa(a,b,c.addClass),c.addClass=null);c.removeClass&&(Ra(a,b,c.removeClass),c.removeClass=null)}}function na(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
P;a.domOperation=function(){a.$$domOperationFired=!0;b();b=P};a.$$prepared=!0}return a}function ha(a,b){Ha(a,b);Ia(a,b)}function Ha(a,b){b.from&&(a.css(b.from),b.from=null)}function Ia(a,b){b.to&&(a.css(b.to),b.to=null)}function U(a,b,c){var d=b.options||{};c=c.options||{};var f=(d.addClass||"")+" "+(c.addClass||""),e=(d.removeClass||"")+" "+(c.removeClass||"");a=Sa(a.attr("class"),f,e);c.preparationClasses&&(d.preparationClasses=Z(c.preparationClasses,d.preparationClasses),delete c.preparationClasses);
f=d.domOperation!==P?d.domOperation:null;va(d,c);f&&(d.domOperation=f);d.addClass=a.addClass?a.addClass:null;d.removeClass=a.removeClass?a.removeClass:null;b.addClass=d.addClass;b.removeClass=d.removeClass;return d}function Sa(a,b,c){function d(a){F(a)&&(a=a.split(" "));var b={};s(a,function(a){a.length&&(b[a]=!0)});return b}var f={};a=d(a);b=d(b);s(b,function(a,b){f[b]=1});c=d(c);s(c,function(a,b){f[b]=1===f[b]?null:-1});var e={addClass:"",removeClass:""};s(f,function(b,c){var d,f;1===b?(d="addClass",
f=!a[c]||a[c+"-remove"]):-1===b&&(d="removeClass",f=a[c]||a[c+"-add"]);f&&(e[d].length&&(e[d]+=" "),e[d]+=c)});return e}function Q(a){return a instanceof E?a[0]:a}function Ta(a,b,c){var d="";b&&(d=X(b,"ng-",!0));c.addClass&&(d=Z(d,X(c.addClass,"-add")));c.removeClass&&(d=Z(d,X(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function oa(a,b){var c=b?"-"+b+"s":"";ka(a,[la,c]);return[la,c]}function wa(a,b){var c=b?"paused":"",d=$+"PlayState";ka(a,[d,c]);return[d,c]}function ka(a,
b){a.style[b[0]]=b[1]}function Z(a,b){return a?b?a+" "+b:a:b}function Ja(a,b,c){var d=Object.create(null),f=a.getComputedStyle(b)||{};s(c,function(a,b){var c=f[a];if(c){var G=c.charAt(0);if("-"===G||"+"===G||0<=G)c=Ua(c);0===c&&(c=null);d[b]=c}});return d}function Ua(a){var b=0;a=a.split(/\s*,\s*/);s(a,function(a){"s"===a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function xa(a){return 0===a||null!=a}function Ka(a,b){var c=S,d=a+"s";b?c+="Duration":
d+=" linear all";return[c,d]}function La(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function Ma(a,b,c){s(c,function(c){a[c]=ya(a[c])?a[c]:b.style.getPropertyValue(c)})}var S,za,$,Aa;void 0===R.ontransitionend&&void 0!==R.onwebkittransitionend?(S="WebkitTransition",za="webkitTransitionEnd transitionend"):(S="transition",za=
"transitionend");void 0===R.onanimationend&&void 0!==R.onwebkitanimationend?($="WebkitAnimation",Aa="webkitAnimationEnd animationend"):($="animation",Aa="animationend");var pa=$+"Delay",Ba=$+"Duration",la=S+"Delay",Na=S+"Duration",Oa=y.$$minErr("ng"),Va={transitionDuration:Na,transitionDelay:la,transitionProperty:S+"Property",animationDuration:Ba,animationDelay:pa,animationIterationCount:$+"IterationCount"},Wa={transitionDuration:Na,transitionDelay:la,animationDuration:Ba,animationDelay:pa},Ca,va,
s,W,ya,da,Da,aa,F,N,E,P;y.module("ngAnimate",[],function(){P=y.noop;Ca=y.copy;va=y.extend;E=y.element;s=y.forEach;W=y.isArray;F=y.isString;aa=y.isObject;N=y.isUndefined;ya=y.isDefined;Da=y.isFunction;da=y.isElement}).directive("ngAnimateSwap",["$animate","$rootScope",function(a,b){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(b,d,f,e,p){var K,G;b.$watchCollection(f.ngAnimateSwap||f["for"],function(f){K&&a.leave(K);G&&(G.$destroy(),G=null);if(f||0===f)G=b.$new(),p(G,
function(b){K=b;a.enter(b,null,d)})})}}}]).directive("ngAnimateChildren",["$interpolate",function(a){return{link:function(b,c,d){function f(a){c.data("$$ngAnimateChildren","on"===a||"true"===a)}var e=d.ngAnimateChildren;F(e)&&0===e.length?c.data("$$ngAnimateChildren",!0):(f(a(e)(b)),d.$observe("ngAnimateChildren",f))}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),p=0;p<b.length;p++)b[p]();f||a(function(){f||c()})}}var d,
f;d=b.queue=[];b.waitUntilQuiet=function(b){f&&f();f=a(function(){f=null;b();c()})};return b}]).provider("$$animateQueue",["$animateProvider",function(a){function b(a){if(!a)return null;a=a.split(" ");var b=Object.create(null);s(a,function(a){b[a]=!0});return b}function c(a,c){if(a&&c){var d=b(c);return a.split(" ").some(function(a){return d[a]})}}function d(a,b,c){return e[a].some(function(a){return a(b,c)})}function f(a,b){var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?
c&&d:c||d}var e=this.rules={skip:[],cancel:[],join:[]};e.join.push(function(a,b){return!a.structural&&f(a)});e.skip.push(function(a,b){return!a.structural&&!f(a)});e.skip.push(function(a,b){return"leave"===b.event&&a.structural});e.skip.push(function(a,b){return b.structural&&2===b.state&&!a.structural});e.cancel.push(function(a,b){return b.structural&&a.structural});e.cancel.push(function(a,b){return 2===b.state&&a.structural});e.cancel.push(function(a,b){if(b.structural)return!1;var d=a.addClass,
f=a.removeClass,e=b.addClass,qa=b.removeClass;return N(d)&&N(f)||N(e)&&N(qa)?!1:c(d,qa)||c(f,e)});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$Map","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow","$$isDocumentHidden",function(b,c,e,n,z,qa,J,u,H,k,O){function L(){var a=!1;return function(b){a?b():c.$$postDigest(function(){a=!0;b()})}}function A(a,b,c){var g=[],d=h[c];d&&s(d,function(d){w.call(d.node,b)?g.push(d.callback):"leave"===c&&w.call(d.node,a)&&
g.push(d.callback)});return g}function B(a,b,c){var g=ua(b);return a.filter(function(a){return!(a.node===g&&(!c||a.callback===c))})}function q(a,h,v){function q(a,c,g,d){G(function(){var a=A(ta,k,c);a.length?b(function(){s(a,function(a){a(e,g,d)});"close"!==g||k.parentNode||ra.off(k)}):"close"!==g||k.parentNode||ra.off(k)});a.progress(c,g,d)}function B(a){var b=e,c=m;c.preparationClasses&&(b.removeClass(c.preparationClasses),c.preparationClasses=null);c.activeClasses&&(b.removeClass(c.activeClasses),
c.activeClasses=null);D(e,m);ha(e,m);m.domOperation();t.complete(!a)}var m=Ca(v),e=Ga(a),k=Q(e),ta=k&&k.parentNode,m=na(m),t=new J,G=L();W(m.addClass)&&(m.addClass=m.addClass.join(" "));m.addClass&&!F(m.addClass)&&(m.addClass=null);W(m.removeClass)&&(m.removeClass=m.removeClass.join(" "));m.removeClass&&!F(m.removeClass)&&(m.removeClass=null);m.from&&!aa(m.from)&&(m.from=null);m.to&&!aa(m.to)&&(m.to=null);if(!k)return B(),t;v=[k.getAttribute("class"),m.addClass,m.removeClass].join(" ");if(!Xa(v))return B(),
t;var n=0<=["enter","move","leave"].indexOf(h),w=O(),u=!g||w||ga.get(k);v=!u&&x.get(k)||{};var H=!!v.state;u||H&&1===v.state||(u=!M(k,ta,h));if(u)return w&&q(t,h,"start"),B(),w&&q(t,h,"close"),t;n&&sa(k);w={structural:n,element:e,event:h,addClass:m.addClass,removeClass:m.removeClass,close:B,options:m,runner:t};if(H){if(d("skip",w,v)){if(2===v.state)return B(),t;U(e,v,w);return v.runner}if(d("cancel",w,v))if(2===v.state)v.runner.end();else if(v.structural)v.close();else return U(e,v,w),v.runner;else if(d("join",
w,v))if(2===v.state)U(e,w,{});else return Ta(e,n?h:null,m),h=w.event=v.event,m=U(e,v,w),v.runner}else U(e,w,{});(H=w.structural)||(H="animate"===w.event&&0<Object.keys(w.options.to||{}).length||f(w));if(!H)return B(),l(k),t;var z=(v.counter||0)+1;w.counter=z;I(k,1,w);c.$$postDigest(function(){e=Ga(a);var b=x.get(k),c=!b,b=b||{},g=0<(e.parent()||[]).length&&("animate"===b.event||b.structural||f(b));if(c||b.counter!==z||!g){c&&(D(e,m),ha(e,m));if(c||n&&b.event!==h)m.domOperation(),t.end();g||l(k)}else h=
!b.structural&&f(b,!0)?"setClass":b.event,I(k,2),b=qa(e,h,b.options),t.setHost(b),q(t,h,"start",{}),b.done(function(a){B(!a);(a=x.get(k))&&a.counter===z&&l(k);q(t,h,"close",{})})});return t}function sa(a){a=a.querySelectorAll("[data-ng-animate]");s(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate"),10),c=x.get(a);if(c)switch(b){case 2:c.runner.end();case 1:x.delete(a)}})}function l(a){a.removeAttribute("data-ng-animate");x.delete(a)}function M(a,b,c){c=n[0].body;var g=Q(e),d=a===c||"HTML"===
a.nodeName,h=a===g,f=!1,k=ga.get(a),A;for((a=E.data(a,"$ngAnimatePin"))&&(b=Q(a));b;){h||(h=b===g);if(1!==b.nodeType)break;a=x.get(b)||{};if(!f){var q=ga.get(b);if(!0===q&&!1!==k){k=!0;break}else!1===q&&(k=!1);f=a.structural}if(N(A)||!0===A)a=E.data(b,"$$ngAnimateChildren"),ya(a)&&(A=a);if(f&&!1===A)break;d||(d=b===c);if(d&&h)break;if(!h&&(a=E.data(b,"$ngAnimatePin"))){b=Q(a);continue}b=b.parentNode}return(!f||A)&&!0!==k&&h&&d}function I(a,b,c){c=c||{};c.state=b;a.setAttribute("data-ng-animate",b);
c=(b=x.get(a))?va(b,c):c;x.set(a,c)}var x=new z,ga=new z,g=null,ta=c.$watch(function(){return 0===u.totalPendingRequests},function(a){a&&(ta(),c.$$postDigest(function(){c.$$postDigest(function(){null===g&&(g=!0)})}))}),h=Object.create(null),t=a.classNameFilter(),Xa=t?function(a){return t.test(a)}:function(){return!0},D=Y(H),w=R.Node.prototype.contains||function(a){return this===a||!!(this.compareDocumentPosition(a)&16)},ra={on:function(a,b,c){var g=ua(b);h[a]=h[a]||[];h[a].push({node:g,callback:c});
E(b).on("$destroy",function(){x.get(g)||ra.off(a,b,c)})},off:function(a,b,c){if(1!==arguments.length||F(arguments[0])){var g=h[a];g&&(h[a]=1===arguments.length?null:B(g,b,c))}else for(g in b=arguments[0],h)h[g]=B(h[g],b)},pin:function(a,b){Ea(da(a),"element","not an element");Ea(da(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,g){c=c||{};c.domOperation=g;return q(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!g;else if(da(a)){var d=Q(a);1===
c?b=!ga.get(d):ga.set(d,!b)}else b=g=!!a;return b}};return ra}]}]).provider("$$animation",["$animateProvider",function(a){var b=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$Map","$$rAFScheduler",function(a,d,f,e,p,K){function G(a){function b(a){if(a.processed)return a;a.processed=!0;var d=a.domNode,e=d.parentNode;f.set(d,a);for(var q;e;){if(q=f.get(e)){q.processed||(q=b(q));break}e=e.parentNode}(q||c).children.push(a);return a}var c={children:[]},d,f=new p;for(d=
0;d<a.length;d++){var e=a[d];f.set(e.domNode,a[d]={domNode:e.domNode,fn:e.fn,children:[]})}for(d=0;d<a.length;d++)b(a[d]);return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var f=0,e=[];for(d=0;d<c.length;d++){var k=c[d];0>=a&&(a=f,f=0,b.push(e),e=[]);e.push(k.fn);k.children.forEach(function(a){f++;c.push(a)});a--}e.length&&b.push(e);return b}(c)}var n=[],z=Y(a);return function(p,J,u){function H(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");
var b=[];s(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function k(a){var b=[],c={};s(a,function(a,d){var h=Q(a.element),f=0<=["enter","move"].indexOf(a.event),h=a.structural?H(h):[];if(h.length){var e=f?"to":"from";s(h,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][e]={animationID:d,element:E(a)}})}else b.push(a)});var d={},f={};s(c,function(c,e){var k=c.from,A=c.to;if(k&&A){var q=a[k.animationID],x=a[A.animationID],l=k.animationID.toString();
if(!f[l]){var B=f[l]={structural:!0,beforeStart:function(){q.beforeStart();x.beforeStart()},close:function(){q.close();x.close()},classes:O(q.classes,x.classes),from:q,to:x,anchors:[]};B.classes.length?b.push(B):(b.push(q),b.push(x))}f[l].anchors.push({out:k.element,"in":A.element})}else k=k?k.animationID:A.animationID,A=k.toString(),d[A]||(d[A]=!0,b.push(a[k]))});return b}function O(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],d=0;d<a.length;d++){var f=a[d];if("ng-"!==f.substring(0,3))for(var e=
0;e<b.length;e++)if(f===b[e]){c.push(f);break}}return c.join(" ")}function L(a){for(var c=b.length-1;0<=c;c--){var d=f.get(b[c])(a);if(d)return d}}function A(a,b){function c(a){(a=a.data("$$animationRunner"))&&a.setHost(b)}a.from&&a.to?(c(a.from.element),c(a.to.element)):c(a.element)}function B(){var a=p.data("$$animationRunner");!a||"leave"===J&&u.$$domOperationFired||a.end()}function q(b){p.off("$destroy",B);p.removeData("$$animationRunner");z(p,u);ha(p,u);u.domOperation();I&&a.removeClass(p,I);
p.removeClass("ng-animate");l.complete(!b)}u=na(u);var sa=0<=["enter","move","leave"].indexOf(J),l=new e({end:function(){q()},cancel:function(){q(!0)}});if(!b.length)return q(),l;p.data("$$animationRunner",l);var M=Fa(p.attr("class"),Fa(u.addClass,u.removeClass)),I=u.tempClasses;I&&(M+=" "+I,u.tempClasses=null);var x;sa&&(x="ng-"+J+"-prepare",a.addClass(p,x));n.push({element:p,classes:M,event:J,structural:sa,options:u,beforeStart:function(){p.addClass("ng-animate");I&&a.addClass(p,I);x&&(a.removeClass(p,
x),x=null)},close:q});p.on("$destroy",B);if(1<n.length)return l;d.$$postDigest(function(){var a=[];s(n,function(b){b.element.data("$$animationRunner")?a.push(b):b.close()});n.length=0;var b=k(a),c=[];s(b,function(a){c.push({domNode:Q(a.from?a.from.element:a.element),fn:function(){a.beforeStart();var b,c=a.close;if((a.anchors?a.from.element||a.to.element:a.element).data("$$animationRunner")){var d=L(a);d&&(b=d.start)}b?(b=b(),b.done(function(a){c(!a)}),A(a,b)):c()}})});K(G(c))});return l}}]}]).provider("$animateCss",
["$animateProvider",function(a){var b=La(),c=La();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(a,f,e,p,K,G,n,z){function y(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++O))+"-"+a.getAttribute("class")+"-"+b}function J(e,k,q,p){var l;0<b.count(q)&&(l=c.get(q),l||(k=X(k,"-stagger"),f.addClass(e,k),l=Ja(a,e,p),l.animationDuration=Math.max(l.animationDuration,0),l.transitionDuration=
Math.max(l.transitionDuration,0),f.removeClass(e,k),c.put(q,l)));return l||{}}function u(a){L.push(a);n.waitUntilQuiet(function(){b.flush();c.flush();for(var a=K(),d=0;d<L.length;d++)L[d](a);L.length=0})}function H(c,f,e){f=b.get(e);f||(f=Ja(a,c,Va),"infinite"===f.animationIterationCount&&(f.animationIterationCount=1));b.put(e,f);c=f;e=c.animationDelay;f=c.transitionDelay;c.maxDelay=e&&f?Math.max(e,f):e||f;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);
return c}var k=Y(f),O=0,L=[];return function(a,c){function d(){l()}function n(){l(!0)}function l(b){if(!(w||E&&O)){w=!0;O=!1;g.$$skipPreparationClasses||f.removeClass(a,fa);f.removeClass(a,da);wa(h,!1);oa(h,!1);s(t,function(a){h.style[a[0]]=""});k(a,g);ha(a,g);Object.keys(L).length&&s(L,function(a,b){a?h.style.setProperty(b,a):h.style.removeProperty(b)});if(g.onDone)g.onDone();ea&&ea.length&&a.off(ea.join(" "),x);var c=a.data("$$animateCss");c&&(p.cancel(c[0].timer),a.removeData("$$animateCss"));
F&&F.complete(!b)}}function M(a){r.blockTransition&&oa(h,a);r.blockKeyframeAnimation&&wa(h,!!a)}function I(){F=new e({end:d,cancel:n});u(P);l();return{$$willAnimate:!1,start:function(){return F},end:d}}function x(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-Y,0)>=R&&b>=m&&(E=!0,l())}function ga(){function b(){if(!w){M(!1);s(t,function(a){h.style[a[0]]=a[1]});k(a,g);f.addClass(a,da);if(r.recalculateTimingStyles){ma=
h.getAttribute("class")+" "+fa;ja=y(h,ma);C=H(h,ma,ja);ba=C.maxDelay;N=Math.max(ba,0);m=C.maxDuration;if(0===m){l();return}r.hasTransitions=0<C.transitionDuration;r.hasAnimations=0<C.animationDuration}r.applyAnimationDelay&&(ba="boolean"!==typeof g.delay&&xa(g.delay)?parseFloat(g.delay):ba,N=Math.max(ba,0),C.animationDelay=ba,ca=[pa,ba+"s"],t.push(ca),h.style[ca[0]]=ca[1]);R=1E3*N;U=1E3*m;if(g.easing){var d,e=g.easing;r.hasTransitions&&(d=S+"TimingFunction",t.push([d,e]),h.style[d]=e);r.hasAnimations&&
(d=$+"TimingFunction",t.push([d,e]),h.style[d]=e)}C.transitionDuration&&ea.push(za);C.animationDuration&&ea.push(Aa);Y=Date.now();var n=R+1.5*U;d=Y+n;var e=a.data("$$animateCss")||[],q=!0;if(e.length){var I=e[0];(q=d>I.expectedEndTime)?p.cancel(I.timer):e.push(l)}q&&(n=p(c,n,!1),e[0]={timer:n,expectedEndTime:d},e.push(l),a.data("$$animateCss",e));if(ea.length)a.on(ea.join(" "),x);g.to&&(g.cleanupStyles&&Ma(L,h,Object.keys(g.to)),Ia(a,g))}}function c(){var b=a.data("$$animateCss");if(b){for(var d=
1;d<b.length;d++)b[d]();a.removeData("$$animateCss")}}if(!w)if(h.parentNode){var d=function(a){if(E)O&&a&&(O=!1,l());else if(O=!a,C.animationDuration)if(a=wa(h,O),O)t.push(a);else{var b=t,c=b.indexOf(a);0<=a&&b.splice(c,1)}},e=0<aa&&(C.transitionDuration&&0===V.transitionDuration||C.animationDuration&&0===V.animationDuration)&&Math.max(V.animationDelay,V.transitionDelay);e?p(b,Math.floor(e*aa*1E3),!1):b();v.resume=function(){d(!0)};v.pause=function(){d(!1)}}else l()}var g=c||{};g.$$prepared||(g=na(Ca(g)));
var L={},h=Q(a);if(!h||!h.parentNode||!z.enabled())return I();var t=[],K=a.attr("class"),D=Pa(g),w,O,E,F,v,N,R,m,U,Y,ea=[];if(0===g.duration||!G.animations&&!G.transitions)return I();var ia=g.event&&W(g.event)?g.event.join(" "):g.event,Z="",T="";ia&&g.structural?Z=X(ia,"ng-",!0):ia&&(Z=ia);g.addClass&&(T+=X(g.addClass,"-add"));g.removeClass&&(T.length&&(T+=" "),T+=X(g.removeClass,"-remove"));g.applyClassesEarly&&T.length&&k(a,g);var fa=[Z,T].join(" ").trim(),ma=K+" "+fa,da=X(fa,"-active"),K=D.to&&
0<Object.keys(D.to).length;if(!(0<(g.keyframeStyle||"").length||K||fa))return I();var ja,V;0<g.stagger?(D=parseFloat(g.stagger),V={transitionDelay:D,animationDelay:D,transitionDuration:0,animationDuration:0}):(ja=y(h,ma),V=J(h,fa,ja,Wa));g.$$skipPreparationClasses||f.addClass(a,fa);g.transitionStyle&&(D=[S,g.transitionStyle],ka(h,D),t.push(D));0<=g.duration&&(D=0<h.style[S].length,D=Ka(g.duration,D),ka(h,D),t.push(D));g.keyframeStyle&&(D=[$,g.keyframeStyle],ka(h,D),t.push(D));var aa=V?0<=g.staggerIndex?
g.staggerIndex:b.count(ja):0;(ia=0===aa)&&!g.skipBlocking&&oa(h,9999);var C=H(h,ma,ja),ba=C.maxDelay;N=Math.max(ba,0);m=C.maxDuration;var r={};r.hasTransitions=0<C.transitionDuration;r.hasAnimations=0<C.animationDuration;r.hasTransitionAll=r.hasTransitions&&"all"===C.transitionProperty;r.applyTransitionDuration=K&&(r.hasTransitions&&!r.hasTransitionAll||r.hasAnimations&&!r.hasTransitions);r.applyAnimationDuration=g.duration&&r.hasAnimations;r.applyTransitionDelay=xa(g.delay)&&(r.applyTransitionDuration||
r.hasTransitions);r.applyAnimationDelay=xa(g.delay)&&r.hasAnimations;r.recalculateTimingStyles=0<T.length;if(r.applyTransitionDuration||r.applyAnimationDuration)m=g.duration?parseFloat(g.duration):m,r.applyTransitionDuration&&(r.hasTransitions=!0,C.transitionDuration=m,D=0<h.style[S+"Property"].length,t.push(Ka(m,D))),r.applyAnimationDuration&&(r.hasAnimations=!0,C.animationDuration=m,t.push([Ba,m+"s"]));if(0===m&&!r.recalculateTimingStyles)return I();if(null!=g.delay){var ca;"boolean"!==typeof g.delay&&
(ca=parseFloat(g.delay),N=Math.max(ca,0));r.applyTransitionDelay&&t.push([la,ca+"s"]);r.applyAnimationDelay&&t.push([pa,ca+"s"])}null==g.duration&&0<C.transitionDuration&&(r.recalculateTimingStyles=r.recalculateTimingStyles||ia);R=1E3*N;U=1E3*m;g.skipBlocking||(r.blockTransition=0<C.transitionDuration,r.blockKeyframeAnimation=0<C.animationDuration&&0<V.animationDelay&&0===V.animationDuration);g.from&&(g.cleanupStyles&&Ma(L,h,Object.keys(g.from)),Ha(a,g));r.blockTransition||r.blockKeyframeAnimation?
M(m):g.skipBlocking||oa(h,!1);return{$$willAnimate:!0,end:d,start:function(){if(!w)return v={end:d,cancel:n,resume:null,pause:null},F=new e(v),u(ga),F}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,f,e,p,K){function G(a){return a.replace(/\bng-\S+\b/g,"")}function n(a,b){F(a)&&(a=a.split(" "));F(b)&&(b=b.split(" "));
return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function z(c,e,f){function p(a){var b={},c=Q(a).getBoundingClientRect();s(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=u.scrollTop;break;case "left":d+=u.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function K(){var c=G(f.attr("class")||""),d=n(c,l),c=n(l,c),d=a(z,{to:p(f),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function q(){z.remove();e.removeClass("ng-animate-shim");
f.removeClass("ng-animate-shim")}var z=E(Q(e).cloneNode(!0)),l=G(z.attr("class")||"");e.addClass("ng-animate-shim");f.addClass("ng-animate-shim");z.addClass("ng-anchor");H.append(z);var M;c=function(){var c=a(z,{addClass:"ng-anchor-out",delay:!0,from:p(e)});return c.$$willAnimate?c:null}();if(!c&&(M=K(),!M))return q();var I=c||M;return{start:function(){function a(){c&&c.end()}var b,c=I.start();c.done(function(){c=null;if(!M&&(M=K()))return c=M.start(),c.done(function(){c=null;q();b.complete()}),c;
q();b.complete()});return b=new d({end:a,cancel:a})}}}function y(a,b,c,e){var f=J(a,P),p=J(b,P),n=[];s(e,function(a){(a=z(c,a.out,a["in"]))&&n.push(a)});if(f||p||0!==n.length)return{start:function(){function a(){s(b,function(a){a.end()})}var b=[];f&&b.push(f.start());p&&b.push(p.start());s(n,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function J(c){var d=c.element,e=c.options||{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=
!0,"leave"===c.event&&(e.onDone=e.domOperation));e.preparationClasses&&(e.event=Z(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!e.animations&&!e.transitions)return P;var u=K[0].body;c=Q(f);var H=E(c.parentNode&&11===c.parentNode.nodeType||u.contains(c)?c:u);return function(a){return a.from&&a.to?y(a.from,a.to,a.classes,a.anchors):J(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function f(c){c=
W(c)?c:c.split(" ");for(var d=[],e={},f=0;f<c.length;f++){var s=c[f],y=a.$$registeredAnimations[s];y&&!e[s]&&(d.push(b.get(y)),e[s]=!0)}return d}var e=Y(d);return function(a,b,d,n){function z(){n.domOperation();e(a,n)}function y(a,b,d,e,f){switch(d){case "animate":b=[b,e.from,e.to,f];break;case "setClass":b=[b,k,F,f];break;case "addClass":b=[b,k,f];break;case "removeClass":b=[b,F,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,b))if(Da(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Da(a))return a;
return P}function J(a,b,d,e,f){var k=[];s(e,function(e){var l=e[f];l&&k.push(function(){var e,f,g=!1,h=function(a){g||(g=!0,(f||P)(a),e.complete(!a))};e=new c({end:function(){h()},cancel:function(){h(!0)}});f=y(l,a,b,d,function(a){h(!1===a)});return e})});return k}function u(a,b,d,e,f){var k=J(a,b,d,e,f);if(0===k.length){var h,l;"beforeSetClass"===f?(h=J(a,"removeClass",d,e,"beforeRemoveClass"),l=J(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(h=J(a,"removeClass",d,e,"removeClass"),l=J(a,"addClass",
d,e,"addClass"));h&&(k=k.concat(h));l&&(k=k.concat(l))}if(0!==k.length)return function(a){var b=[];k.length&&s(k,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){s(b,function(b){a?b.cancel():b.end()})}}}var H=!1;3===arguments.length&&aa(d)&&(n=d,d=null);n=na(n);d||(d=a.attr("class")||"",n.addClass&&(d+=" "+n.addClass),n.removeClass&&(d+=" "+n.removeClass));var k=n.addClass,F=n.removeClass,L=f(d),A,B;if(L.length){var q,E;"leave"===b?(E="leave",q="afterLeave"):(E="before"+b.charAt(0).toUpperCase()+
b.substr(1),q=b);"enter"!==b&&"move"!==b&&(A=u(a,b,n,L,E));B=u(a,b,n,L,q)}if(A||B){var l;return{$$willAnimate:!0,end:function(){l?l.end():(H=!0,z(),ha(a,n),l=new c,l.complete(!0));return l},start:function(){function b(c){H=!0;z();ha(a,n);l.complete(c)}if(l)return l;l=new c;var d,e=[];A&&e.push(function(a){d=A(a)});e.length?e.push(function(a){z();a(!0)}):z();B&&e.push(function(a){d=B(a)});l.setHost({end:function(){H||((d||P)(void 0),b(void 0))},cancel:function(){H||((d||P)(!0),b(!0))}});c.chain(e,
b);return l}}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),p=d(a.to);if(b||p)return{start:function(){function a(){return function(){s(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());p&&d.push(p.start());c.all(d,function(a){f.complete(a)});var f=new c({end:a(),cancel:a()});
return f}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/*
 AngularJS v1.6.2
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(W,b){'use strict';function K(q,g){g=g||{};b.forEach(g,function(b,h){delete g[h]});for(var h in q)!q.hasOwnProperty(h)||"$"===h.charAt(0)&&"$"===h.charAt(1)||(g[h]=q[h]);return g}var B=b.$$minErr("$resource"),Q=/^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;b.module("ngResource",["ng"]).provider("$resource",function(){var q=/^https?:\/\/\[[^\]]*][^/]*/,g=this;this.defaults={stripTrailingSlashes:!0,cancellable:!1,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},
"delete":{method:"DELETE"}}};this.$get=["$http","$log","$q","$timeout",function(h,P,L,M){function C(b,e){this.template=b;this.defaults=p({},g.defaults,e);this.urlParams={}}function x(D,e,u,m){function c(a,d){var c={};d=p({},e,d);t(d,function(d,l){y(d)&&(d=d(a));var f;if(d&&d.charAt&&"@"===d.charAt(0)){f=a;var k=d.substr(1);if(null==k||""===k||"hasOwnProperty"===k||!Q.test("."+k))throw B("badmember",k);for(var k=k.split("."),e=0,g=k.length;e<g&&b.isDefined(f);e++){var h=k[e];f=null!==f?f[h]:void 0}}else f=
d;c[l]=f});return c}function R(a){return a.resource}function l(a){K(a||{},this)}var q=new C(D,m);u=p({},g.defaults.actions,u);l.prototype.toJSON=function(){var a=p({},this);delete a.$promise;delete a.$resolved;delete a.$cancelRequest;return a};t(u,function(a,d){var b=/^(POST|PUT|PATCH)$/i.test(a.method),e=a.timeout,g=N(a.cancellable)?a.cancellable:q.defaults.cancellable;e&&!S(e)&&(P.debug("ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests. If you are looking for a way to cancel requests, you should use the `cancellable` option."),
delete a.timeout,e=null);l[d]=function(f,k,m,D){function u(a){r.catch(E);z.resolve(a)}var G={},v,w,A;switch(arguments.length){case 4:A=D,w=m;case 3:case 2:if(y(k)){if(y(f)){w=f;A=k;break}w=k;A=m}else{G=f;v=k;w=m;break}case 1:y(f)?w=f:b?v=f:G=f;break;case 0:break;default:throw B("badargs",arguments.length);}var F=this instanceof l,n=F?v:a.isArray?[]:new l(v),s={},C=a.interceptor&&a.interceptor.response||R,x=a.interceptor&&a.interceptor.responseError||void 0,H=!!A,I=!!x,z,J;t(a,function(a,d){switch(d){default:s[d]=
T(a);case "params":case "isArray":case "interceptor":case "cancellable":}});!F&&g&&(z=L.defer(),s.timeout=z.promise,e&&(J=M(z.resolve,e)));b&&(s.data=v);q.setUrlParams(s,p({},c(v,a.params||{}),G),a.url);var r=h(s).then(function(f){var c=f.data;if(c){if(O(c)!==!!a.isArray)throw B("badcfg",d,a.isArray?"array":"object",O(c)?"array":"object",s.method,s.url);if(a.isArray)n.length=0,t(c,function(a){"object"===typeof a?n.push(new l(a)):n.push(a)});else{var b=n.$promise;K(c,n);n.$promise=b}}f.resource=n;
return f}),r=r["finally"](function(){n.$resolved=!0;!F&&g&&(n.$cancelRequest=E,M.cancel(J),z=J=s.timeout=null)}),r=r.then(function(a){var d=C(a);(w||E)(d,a.headers,a.status,a.statusText);return d},H||I?function(a){H&&!I&&r.catch(E);H&&A(a);return I?x(a):L.reject(a)}:void 0);return F?r:(n.$promise=r,n.$resolved=!1,g&&(n.$cancelRequest=u),n)};l.prototype["$"+d]=function(a,c,b){y(a)&&(b=c,c=a,a={});a=l[d].call(this,a,this,c,b);return a.$promise||a}});l.bind=function(a){a=p({},e,a);return x(D,a,u,m)};
return l}var E=b.noop,t=b.forEach,p=b.extend,T=b.copy,O=b.isArray,N=b.isDefined,y=b.isFunction,S=b.isNumber,U=b.$$encodeUriQuery,V=b.$$encodeUriSegment;C.prototype={setUrlParams:function(b,e,g){var m=this,c=g||m.template,h,l,p="",a=m.urlParams=Object.create(null);t(c.split(/\W/),function(d){if("hasOwnProperty"===d)throw B("badname");!/^\d+$/.test(d)&&d&&(new RegExp("(^|[^\\\\]):"+d+"(\\W|$)")).test(c)&&(a[d]={isQueryParamValue:(new RegExp("\\?.*=:"+d+"(?:\\W|$)")).test(c)})});c=c.replace(/\\:/g,":");
c=c.replace(q,function(a){p=a;return""});e=e||{};t(m.urlParams,function(a,b){h=e.hasOwnProperty(b)?e[b]:m.defaults[b];N(h)&&null!==h?(l=a.isQueryParamValue?U(h,!0):V(h),c=c.replace(new RegExp(":"+b+"(\\W|$)","g"),function(a,b){return l+b})):c=c.replace(new RegExp("(/?):"+b+"(\\W|$)","g"),function(a,b,d){return"/"===d.charAt(0)?d:b+d})});m.defaults.stripTrailingSlashes&&(c=c.replace(/\/+$/,"")||"/");c=c.replace(/\/\.(?=\w+($|\?))/,".");b.url=p+c.replace(/\/(\\|%5C)\./,"/.");t(e,function(a,c){m.urlParams[c]||
(b.params=b.params||{},b.params[c]=a)})}};return x}]})})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map

/**
 * State-based routing for AngularJS
 * @version v0.4.2
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return T(new(T(function(){},{prototype:a})),b)}function e(a){return S(arguments,function(b){b!==a&&S(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var b=[];return S(a,function(a,c){b.push(c)}),b}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=d<0?Math.ceil(d):Math.floor(d),d<0&&(d+=c);d<c;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l]&&i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return T({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return S(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return S(c,function(c){c in a&&(b[c]=a[c])}),b}function m(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)h(c,d)==-1&&(b[d]=a[d]);return b}function n(a,b){var c=R(a),d=c?[]:{};return S(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function o(a,b){var c=R(a)?[]:{};return S(a,function(a,d){c[d]=b(a,d)}),c}function p(a){return a.then(c,function(){})&&a}function q(a,b){var d=1,f=2,i={},j=[],k=i,l=T(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(t[c]!==f){if(s.push(c),t[c]===d)throw s.splice(0,h(s,c)),new Error("Cyclic dependency: "+s.join(" -> "));if(t[c]=d,P(a))r.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);S(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),r.push(c,a,e)}s.pop(),t[c]=f}}function o(a){return Q(a)&&a.then&&a.$$promises}if(!Q(i))throw new Error("'invocables' must be an object");var q=g(i||{}),r=[],s=[],t={};return S(i,n),i=s=t=null,function(d,f,g){function h(){--v||(w||e(u,f.$$values),s.$$values=u,s.$$promises=s.$$promises||!0,delete s.$$inheritedValues,n.resolve(u))}function i(a){s.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!N(s.$$failure))try{l.resolve(b.invoke(e,g,u)),l.promise.then(function(a){u[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;S(f,function(a){t.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,t[a].then(function(b){u[a]=b,--m||k()},j))}),m||k(),t[c]=p(l.promise)}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!Q(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=l;var n=a.defer(),s=p(n.promise),t=s.$$promises={},u=T({},d),v=1+r.length/3,w=!1;if(p(s),N(f.$$failure))return i(f.$$failure),s;f.$$inheritedValues&&e(u,m(f.$$inheritedValues,q)),T(t,f.$$promises),f.$$values?(w=e(u,m(f.$$values,q)),s.$$inheritedValues=m(f.$$values,q),h()):(f.$$inheritedValues&&(s.$$inheritedValues=m(f.$$inheritedValues,q)),f.then(h,i));for(var x=0,y=r.length;x<y;x+=3)d.hasOwnProperty(r[x])?h():j(r[x],r[x+1],r[x+2]);return s}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function r(){var a=b.version.minor<3;this.shouldUnsafelyUseHttp=function(b){a=!!b},this.$get=["$http","$templateCache","$injector",function(b,c,d){return new s(b,c,d,a)}]}function s(a,b,c,d){this.fromConfig=function(a,b,c){return N(a.template)?this.fromString(a.template,b):N(a.templateUrl)?this.fromUrl(a.templateUrl,b):N(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return O(a)?a(b):a},this.fromUrl=function(e,f){return O(e)&&(e=e(f)),null==e?null:d?a.get(e,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data}):c.get("$templateRequest")(e)},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function t(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+([-.]+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new W.Param(b,c,d,e),p[b]}function g(a,b,c,d){var e=["",""],f=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return f;switch(c){case!1:e=["(",")"+(d?"?":"")];break;case!0:f=f.replace(/\/$/,""),e=["(?:/(",")|/)?"];break;default:e=["("+c+"|",")?"]}return f+e[0]+b+e[1]}function h(e,f){var g,h,i,j,k;return g=e[2]||e[3],k=b.params[g],i=a.substring(m,e.index),h=f?e[4]:e[4]||("*"==e[1]?".*":null),h&&(j=W.type(h)||d(W.type("string"),{pattern:new RegExp(h,b.caseInsensitive?"i":c)})),{id:g,regexp:h,segment:i,type:j,cfg:k}}b=T({params:{}},Q(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new W.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash,s.isOptional),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function u(a){T(this,a)}function v(){function a(a){return null!=a?a.toString().replace(/(~|\/)/g,function(a){return{"~":"~~","/":"~2F"}[a]}):a}function e(a){return null!=a?a.toString().replace(/(~~|~2F)/g,function(a){return{"~~":"~","~2F":"/"}[a]}):a}function f(){return{strict:p,caseInsensitive:m}}function i(a){return O(a)||R(a)&&O(a[a.length-1])}function j(){for(;w.length;){var a=w.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(r[a.name],l.invoke(a.def))}}function k(a){T(this,a||{})}W=this;var l,m=!1,p=!0,q=!1,r={},s=!0,w=[],x={string:{encode:a,decode:e,is:function(a){return null==a||!N(a)||"string"==typeof a},pattern:/[^\/]*/},int:{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return a!==c&&null!==a&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^\/]*/},any:{encode:b.identity,decode:b.identity,equals:b.equals,pattern:/.*/}};v.$$getDefaultValue=function(a){if(!i(a.value))return a.value;if(!l)throw new Error("Injectable functions cannot be called at configuration time");return l.invoke(a.value)},this.caseInsensitive=function(a){return N(a)&&(m=a),m},this.strictMode=function(a){return N(a)&&(p=a),p},this.defaultSquashPolicy=function(a){if(!N(a))return q;if(a!==!0&&a!==!1&&!P(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return q=a,a},this.compile=function(a,b){return new t(a,T(f(),b))},this.isMatcher=function(a){if(!Q(a))return!1;var b=!0;return S(t.prototype,function(c,d){O(c)&&(b=b&&N(a[d])&&O(a[d]))}),b},this.type=function(a,b,c){if(!N(b))return r[a];if(r.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return r[a]=new u(T({name:a},b)),c&&(w.push({name:a,def:c}),s||j()),this},S(x,function(a,b){r[b]=new u(T({name:b},a))}),r=d(r,{}),this.$get=["$injector",function(a){return l=a,s=!1,j(),S(x,function(a,b){r[b]||(r[b]=new u(a))}),this}],this.Param=function(a,d,e,f){function j(a){var b=Q(a)?g(a):[],c=h(b,"value")===-1&&h(b,"type")===-1&&h(b,"squash")===-1&&h(b,"array")===-1;return c&&(a={value:a}),a.$$fn=i(a.value)?a.value:function(){return a.value},a}function k(c,d,e){if(c.type&&d)throw new Error("Param '"+a+"' has two type configurations.");return d?d:c.type?b.isString(c.type)?r[c.type]:c.type instanceof u?c.type:new u(c.type):"config"===e?r.any:r.string}function m(){var b={array:"search"===f&&"auto"},c=a.match(/\[\]$/)?{array:!0}:{};return T(b,c,e).array}function p(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!N(c)||null==c)return q;if(c===!0||P(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function s(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=R(a.replace)?a.replace:[],P(e)&&f.push({from:e,to:c}),g=o(f,function(a){return a.from}),n(i,function(a){return h(g,a.from)===-1}).concat(f)}function t(){if(!l)throw new Error("Injectable functions cannot be called at configuration time");var a=l.invoke(e.$$fn);if(null!==a&&a!==c&&!x.type.is(a))throw new Error("Default value ("+a+") for parameter '"+x.id+"' is not an instance of Type ("+x.type.name+")");return a}function v(a){function b(a){return function(b){return b.from===a}}function c(a){var c=o(n(x.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),N(a)?x.type.$normalize(a):t()}function w(){return"{Param:"+a+" "+d+" squash: '"+A+"' optional: "+z+"}"}var x=this;e=j(e),d=k(e,d,f);var y=m();d=y?d.$asArray(y,"search"===f):d,"string"!==d.name||y||"path"!==f||e.value!==c||(e.value="");var z=e.value!==c,A=p(e,z),B=s(e,y,z,A);T(this,{id:a,type:d,location:f,array:y,squash:A,replace:B,isOptional:z,value:v,dynamic:c,config:e,toString:w})},k.prototype={$$new:function(){return d(this,T(new k,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(k.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),S(b,function(b){S(g(b),function(b){h(a,b)===-1&&h(d,b)===-1&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return S(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return S(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var d,e,f,g,h,i=this.$$keys();for(d=0;d<i.length&&(e=this[i[d]],f=a[i[d]],f!==c&&null!==f||!e.isOptional);d++){if(g=e.type.$normalize(f),!e.type.is(g))return!1;if(h=e.type.encode(g),b.isString(h)&&!e.type.pattern.exec(h))return!1}return!0},$$parent:c},this.ParamSet=k}function w(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return!N(d)||d}function h(d,e,f,g,h){function m(a,b,c){return"/"===q?a:b?q.slice(0,-1)+a:c?q.slice(1)+a:a}function n(a){function b(a){var b=a(f,d);return!!b&&(P(b)&&d.replace().url(b),!0)}if(!a||!a.defaultPrevented){p&&d.url()===p;p=c;var e,g=j.length;for(e=0;e<g;e++)if(b(j[e]))return;k&&b(k)}}function o(){return i=i||e.$on("$locationChangeSuccess",n)}var p,q=g.baseHref(),r=d.url();return l||o(),{sync:function(){n()},listen:function(){return o()},update:function(a){return a?void(r=d.url()):void(d.url()!==r&&(d.url(r),d.replace()))},push:function(a,b,e){var f=a.format(b||{});null!==f&&b&&b["#"]&&(f+="#"+b["#"]),d.url(f),p=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled),g=g&&h.history;var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),null!==i&&e&&e["#"]&&(i+="#"+e["#"]),i=m(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!O(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(P(a)){var b=a;a=function(){return b}}else if(!O(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=P(b);if(P(a)&&(a=d.compile(a)),!h&&!O(b)&&!R(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),T(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:P(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),T(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser","$sniffer"]}function x(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function m(a,b){if(!a)return c;var d=P(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=m(b);for(var h=e.split("."),i=0,j=h.length,k=b;i<j;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=A[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function n(a,b){B[a]||(B[a]=[]),B[a].push(b)}function q(a){for(var b=B[a]||[];b.length;)r(b.shift())}function r(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!P(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(A.hasOwnProperty(c))throw new Error("State '"+c+"' is already defined");var e=c.indexOf(".")!==-1?c.substring(0,c.lastIndexOf(".")):P(b.parent)?b.parent:Q(b.parent)&&P(b.parent.name)?b.parent.name:"";if(e&&!A[e])return n(e,b.self);for(var f in D)O(D[f])&&(b[f]=D[f](b,D.$delegates[f]));return A[c]=b,!b[C]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){z.$current.navigable==b&&j(a,c)||z.transitionTo(b,a,{inherit:!0,location:!1})}]),q(c),b}function s(a){return a.indexOf("*")>-1}function t(a){for(var b=a.split("."),c=z.$current.name.split("."),d=0,e=b.length;d<e;d++)"*"===b[d]&&(c[d]="*");return"**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length==c.length&&c.join("")===b.join("")}function u(a,b){return P(a)&&!N(b)?D[a]:O(b)&&P(a)?(D[a]&&!D.$delegates[a]&&(D.$delegates[a]=D[a]),D[a]=b,this):this}function v(a,b){return Q(a)?b=a:b.name=a,r(b),this}function w(a,e,f,h,j,l,n,q,r){function u(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return n.update(),E;if(!g.retry)return null;if(f.$retry)return n.update(),F;var h=z.transition=e.when(g.retry);return h.then(function(){return h!==z.transition?(a.$broadcast("$stateChangeCancel",b.to,b.toParams,c,d),B):(b.options.$retry=!0,z.transitionTo(b.to,b.toParams,b.options))},function(){return E}),n.update(),h}function v(a,c,d,g,i,l){function m(){var c=[];return S(a.views,function(d,e){var g=d.resolve&&d.resolve!==a.resolve?d.resolve:{};g.$template=[function(){return f.load(e,{view:d,locals:i.globals,params:n,notify:l.notify})||""}],c.push(j.resolve(g,i.globals,i.resolve,a).then(function(c){if(O(d.controllerProvider)||R(d.controllerProvider)){var f=b.extend({},g,i.globals);c.$$controller=h.invoke(d.controllerProvider,null,f)}else c.$$controller=d.controller;c.$$state=a,c.$$controllerAs=d.controllerAs,c.$$resolveAs=d.resolveAs,i[e]=c}))}),e.all(c).then(function(){return i.globals})}var n=d?c:k(a.params.$$keys(),c),o={$stateParams:n};i.resolve=j.resolve(a.resolve,o,i.resolve,a);var p=[i.resolve.then(function(a){i.globals=a})];return g&&p.push(g),e.all(p).then(m).then(function(a){return i})}var w=new Error("transition superseded"),B=p(e.reject(w)),D=p(e.reject(new Error("transition prevented"))),E=p(e.reject(new Error("transition aborted"))),F=p(e.reject(new Error("transition failed")));return y.locals={resolve:null,globals:{$stateParams:{}}},z={params:{},current:y.self,$current:y,transition:null},z.reload=function(a){return z.transitionTo(z.current,l,{reload:a||!0,inherit:!1,notify:!0})},z.go=function(a,b,c){return z.transitionTo(a,b,T({inherit:!0,relative:z.$current},c))},z.transitionTo=function(b,c,f){c=c||{},f=T({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=z.$current,o=z.params,q=j.path,r=m(b,f.relative),s=c["#"];if(!N(r)){var t={to:b,toParams:c,options:f},A=u(t,j.self,o,f);if(A)return A;if(b=t.to,c=t.toParams,f=t.options,r=m(b,f.relative),!N(r)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(r[C])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(l,c||{},z.$current,r)),!r.params.$$validates(c))return F;c=r.params.$$values(c),b=r;var E=b.path,G=0,H=E[G],I=y.locals,J=[];if(f.reload){if(P(f.reload)||Q(f.reload)){if(Q(f.reload)&&!f.reload.name)throw new Error("Invalid reload state object");var K=f.reload===!0?q[0]:m(f.reload);if(f.reload&&!K)throw new Error("No such reload state '"+(P(f.reload)?f.reload:f.reload.name)+"'");for(;H&&H===q[G]&&H!==K;)I=J[G]=H.locals,G++,H=E[G]}}else for(;H&&H===q[G]&&H.ownParams.$$equals(c,o);)I=J[G]=H.locals,G++,H=E[G];if(x(b,c,j,o,I,f))return s&&(c["#"]=s),z.params=c,U(z.params,l),U(k(b.params.$$keys(),l),b.locals.globals.$stateParams),f.location&&b.navigable&&b.navigable.url&&(n.push(b.navigable.url,c,{$$avoidResync:!0,replace:"replace"===f.location}),n.update(!0)),z.transition=null,e.when(z.current);if(c=k(b.params.$$keys(),c||{}),s&&(c["#"]=s),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,o,f).defaultPrevented)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,o),null==z.transition&&n.update(),D;for(var L=e.when(I),M=G;M<E.length;M++,H=E[M])I=J[M]=d(I),L=v(H,c,H===b,L,I,f);var O=z.transition=L.then(function(){var d,e,g;if(z.transition!==O)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,o),B;for(d=q.length-1;d>=G;d--)g=q[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=G;d<E.length;d++)e=E[d],e.locals=J[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return z.transition!==O?(a.$broadcast("$stateChangeCancel",b.self,c,j.self,o),B):(z.$current=b,z.current=b.self,z.params=c,U(z.params,l),z.transition=null,f.location&&b.navigable&&n.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,o),n.update(!0),z.current)}).then(null,function(d){return d===w?B:z.transition!==O?(a.$broadcast("$stateChangeCancel",b.self,c,j.self,o),B):(z.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,o,d),g.defaultPrevented||n.update(),e.reject(d))});return p(O),O},z.is=function(a,b,d){d=T({relative:z.$current},d||{});var e=m(a,d.relative);return N(e)?z.$current===e&&(!b||g(b).reduce(function(a,c){var d=e.params[c];return a&&!d||d.type.equals(l[c],b[c])},!0)):c},z.includes=function(a,b,d){if(d=T({relative:z.$current},d||{}),P(a)&&s(a)){if(!t(a))return!1;a=z.$current.name}var e=m(a,d.relative);if(!N(e))return c;if(!N(z.$current.includes[e.name]))return!1;if(!b)return!0;for(var f=g(b),h=0;h<f.length;h++){var i=f[h],j=e.params[i];if(j&&!j.type.equals(l[i],b[i]))return!1}return g(b).reduce(function(a,c){var d=e.params[c];return a&&!d||d.type.equals(l[c],b[c])},!0)},z.href=function(a,b,d){d=T({lossy:!0,inherit:!0,absolute:!1,relative:z.$current},d||{});var e=m(a,d.relative);if(!N(e))return null;d.inherit&&(b=i(l,b||{},z.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?n.href(f.url,k(e.params.$$keys().concat("#"),b||{}),{absolute:d.absolute}):null},z.get=function(a,b){if(0===arguments.length)return o(g(A),function(a){return A[a].self});var c=m(a,b||z.$current);return c&&c.self?c.self:null},z}function x(a,b,c,d,e,f){function g(a,b,c){function d(b){return"search"!=a.params[b].location}var e=a.params.$$keys().filter(d),f=l.apply({},[a.params].concat(e)),g=new W.ParamSet(f);return g.$$equals(b,c)}if(!f.reload&&a===c&&(e===c.locals||a.self.reloadOnSearch===!1&&g(c,d,b)))return!0}var y,z,A={},B={},C="abstract",D={parent:function(a){if(N(a.parent)&&a.parent)return m(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?m(b[1]):y},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=d(a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(P(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||y).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new W.ParamSet;return S(a.params||{},function(a,c){b[c]||(b[c]=new W.Param(c,null,a,"config"))}),b},params:function(a){var b=l(a.ownParams,a.ownParams.$$keys());return a.parent&&a.parent.params?T(a.parent.params.$$new(),b):new W.ParamSet},views:function(a){var b={};return S(N(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),c.resolveAs=c.resolveAs||a.resolveAs||"$resolve",b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?T({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};y=r({name:"",url:"^",views:null,abstract:!0}),y.navigable=null,this.decorator=u,this.state=v,this.$get=w,w.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function y(){function a(a,b){return{load:function(a,c){var d,e={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return c=T(e,c),c.view&&(d=b.fromConfig(c.view,c.params,c.locals)),d}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function z(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){return c(function(){a[0].scrollIntoView()},0,!1)}}]}function A(a,c,d,e,f){function g(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(a){return null}}}function h(a,c){var d=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(k)return{enter:function(a,c,d){b.version.minor>2?k.enter(a,null,c).then(d):k.enter(a,null,c,d)},leave:function(a,c){b.version.minor>2?k.leave(a).then(c):k.leave(a,c)}};if(j){var e=j&&j(c,a);return{enter:function(a,b,c){e.enter(a,null,b),c()},leave:function(a,b){e.leave(a),b()}}}return d()}var i=g(),j=i("$animator"),k=i("$animate"),l={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,g,i){return function(c,g,j){function k(){if(m&&(m.remove(),m=null),o&&(o.$destroy(),o=null),n){var a=n.data("$uiViewAnim");s.leave(n,function(){a.$$animLeave.resolve(),m=null}),m=n,n=null}}function l(h){var l,m=C(c,j,g,e),t=m&&a.$current&&a.$current.locals[m];if(h||t!==p){l=c.$new(),p=a.$current.locals[m],l.$emit("$viewContentLoading",m);var u=i(l,function(a){var e=f.defer(),h=f.defer(),i={$animEnter:e.promise,$animLeave:h.promise,$$animLeave:h};a.data("$uiViewAnim",i),s.enter(a,g,function(){e.resolve(),o&&o.$emit("$viewContentAnimationEnded"),(b.isDefined(r)&&!r||c.$eval(r))&&d(a)}),k()});n=u,o=l,o.$emit("$viewContentLoaded",m),o.$eval(q)}}var m,n,o,p,q=j.onload||"",r=j.autoscroll,s=h(j,c);g.inheritedData("$uiView");c.$on("$stateChangeSuccess",function(){l(!1)}),l(!0)}}};return l}function B(a,c,d,e){return{restrict:"ECA",priority:-400,compile:function(f){var g=f.html();return f.empty?f.empty():f[0].innerHTML=null,function(f,h,i){var j=d.$current,k=C(f,i,h,e),l=j&&j.locals[k];if(!l)return h.html(g),void a(h.contents())(f);h.data("$uiView",{name:k,state:l.$$state}),h.html(l.$template?l.$template:g);var m=b.extend({},l);f[l.$$resolveAs]=m;var n=a(h.contents());if(l.$$controller){l.$scope=f,l.$element=h;var o=c(l.$$controller,l);l.$$controllerAs&&(f[l.$$controllerAs]=o,f[l.$$controllerAs][l.$$resolveAs]=m),O(o.$onInit)&&o.$onInit(),h.data("$ngControllerController",o),h.children().data("$ngControllerController",o)}n(f)}}}}function C(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function D(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function E(a){var b=a.parent().inheritedData("$uiView");if(b&&b.state&&b.state.name)return b.state}function F(a){var b="[object SVGAnimatedString]"===Object.prototype.toString.call(a.prop("href")),c="FORM"===a[0].nodeName;return{attr:c?"action":b?"xlink:href":"href",isAnchor:"A"===a.prop("tagName").toUpperCase(),clickable:!c}}function G(a,b,c,d,e){return function(f){var g=f.which||f.button,h=e();if(!(g>1||f.ctrlKey||f.metaKey||f.shiftKey||a.attr("target"))){var i=c(function(){b.go(h.state,h.params,h.options)});f.preventDefault();var j=d.isAnchor&&!h.href?1:0;f.preventDefault=function(){j--<=0&&c.cancel(i)}}}}function H(a,b){return{relative:E(a)||b.$current,inherit:!0}}function I(a,c){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(d,e,f,g){var h,i=D(f.uiSref,a.current.name),j={state:i.state,href:null,params:null},k=F(e),l=g[1]||g[0],m=null;j.options=T(H(e,a),f.uiSrefOpts?d.$eval(f.uiSrefOpts):{});var n=function(c){c&&(j.params=b.copy(c)),j.href=a.href(i.state,j.params,j.options),m&&m(),l&&(m=l.$$addStateInfo(i.state,j.params)),null!==j.href&&f.$set(k.attr,j.href)};i.paramExpr&&(d.$watch(i.paramExpr,function(a){a!==j.params&&n(a)},!0),j.params=b.copy(d.$eval(i.paramExpr))),n(),k.clickable&&(h=G(e,a,c,k,function(){return j}),e[e.on?"on":"bind"]("click",h),d.$on("$destroy",function(){e[e.off?"off":"unbind"]("click",h)}))}}}function J(a,b){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(c,d,e,f){function g(b){m.state=b[0],m.params=b[1],m.options=b[2],m.href=a.href(m.state,m.params,m.options),n&&n(),j&&(n=j.$$addStateInfo(m.state,m.params)),m.href&&e.$set(i.attr,m.href)}var h,i=F(d),j=f[1]||f[0],k=[e.uiState,e.uiStateParams||null,e.uiStateOpts||null],l="["+k.map(function(a){return a||"null"}).join(", ")+"]",m={state:null,params:null,options:null,href:null},n=null;c.$watch(l,g,!0),g(c.$eval(l)),i.clickable&&(h=G(d,a,b,i,function(){return m}),d[d.on?"on":"bind"]("click",h),c.$on("$destroy",function(){d[d.off?"off":"unbind"]("click",h)}))}}}function K(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout",function(b,d,e,f){function g(b,c,e){var f=a.get(b,E(d)),g=h(b,c),i={state:f||{name:b},params:c,hash:g};return p.push(i),q[g]=e,function(){var a=p.indexOf(i);a!==-1&&p.splice(a,1)}}function h(a,c){if(!P(a))throw new Error("state should be a string");return Q(c)?a+V(c):(c=b.$eval(c),Q(c)?a+V(c):a)}function i(){for(var a=0;a<p.length;a++)l(p[a].state,p[a].params)?j(d,q[p[a].hash]):k(d,q[p[a].hash]),m(p[a].state,p[a].params)?j(d,n):k(d,n)}function j(a,b){f(function(){a.addClass(b)})}function k(a,b){a.removeClass(b)}function l(b,c){return a.includes(b.name,c)}function m(b,c){return a.is(b.name,c)}var n,o,p=[],q={};n=c(e.uiSrefActiveEq||"",!1)(b);try{o=b.$eval(e.uiSrefActive)}catch(a){}o=o||c(e.uiSrefActive||"",!1)(b),Q(o)&&S(o,function(c,d){if(P(c)){var e=D(c,a.current.name);g(e.state,b.$eval(e.paramExpr),d)}}),this.$$addStateInfo=function(a,b){if(!(Q(o)&&p.length>0)){var c=g(a,b,o);return i(),c}},b.$on("$stateChangeSuccess",i),i()}]}}function L(a){var b=function(b,c){return a.is(b,c)};return b.$stateful=!0,b}function M(a){var b=function(b,c,d){return a.includes(b,c,d)};return b.$stateful=!0,b}var N=b.isDefined,O=b.isFunction,P=b.isString,Q=b.isObject,R=b.isArray,S=b.forEach,T=b.extend,U=b.copy,V=b.toJson;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),q.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",q),b.module("ui.router.util").provider("$templateFactory",r);var W;t.prototype.concat=function(a,b){var c={caseInsensitive:W.caseInsensitive(),strict:W.strictMode(),squash:W.defaultSquashPolicy()};return new t(this.sourcePath+a+this.sourceSearch,T(c,b),this)},t.prototype.toString=function(){return this.source},t.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/g,"-")}var d=b(a).split(/-(?!\\)/),e=o(d,b);return o(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");var l,m;for(e=0;e<j;e++){for(g=h[e],l=this.params[g],m=d[e+1],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),N(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}for(;e<i;e++){for(g=h[e],k[g]=this.params[g].value(b[g]),l=this.params[g],m=b[g],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);N(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}return k},t.prototype.parameters=function(a){return N(a)?this.params[a]||null:this.$$paramNames},t.prototype.validates=function(a){return this.params.$$validates(a)},t.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;f<i;f++){var k=f<h,l=d[f],m=e[l],n=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),n),q=!!p&&m.squash,r=m.type.encode(n);if(k){var s=c[f+1],t=f+1===h;if(q===!1)null!=r&&(j+=R(r)?o(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var u=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(u)[1]}else P(q)&&(j+=q+s);t&&m.squash===!0&&"/"===j.slice(-1)&&(j=j.slice(0,-1))}else{if(null==r||p&&q!==!1)continue;if(R(r)||(r=[r]),0===r.length)continue;r=o(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},u.prototype.is=function(a,b){return!0},u.prototype.encode=function(a,b){return a},u.prototype.decode=function(a,b){return a},u.prototype.equals=function(a,b){return a==b},u.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},u.prototype.pattern=/.*/,u.prototype.toString=function(){return"{Type:"+this.name+"}"},u.prototype.$normalize=function(a){return this.is(a)?a:this.decode(a)},u.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return R(a)?a:N(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){if(R(c)&&0===c.length)return c;c=e(c);var d=o(c,a);return b===!0?0===n(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;
for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$normalize=h(d(a,"$normalize")),this.name=a.name,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",v),b.module("ui.router.util").run(["$urlMatcherFactory",function(a){}]),w.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",w),x.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").factory("$stateParams",function(){return{}}).constant("$state.runtime",{autoinject:!0}).provider("$state",x).run(["$injector",function(a){a.get("$state.runtime").autoinject&&a.get("$state")}]),y.$inject=[],b.module("ui.router.state").provider("$view",y),b.module("ui.router.state").provider("$uiViewScroll",z),A.$inject=["$state","$injector","$uiViewScroll","$interpolate","$q"],B.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",A),b.module("ui.router.state").directive("uiView",B),I.$inject=["$state","$timeout"],J.$inject=["$state","$timeout"],K.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",I).directive("uiSrefActive",K).directive("uiSrefActiveEq",K).directive("uiState",J),L.$inject=["$state"],M.$inject=["$state"],b.module("ui.router.state").filter("isState",L).filter("includedByState",M)}(window,window.angular);
/**
 * Satellizer 0.15.5
 * (c) 2016 Sahat Yalkabov
 * License: MIT
 */
(function(global,factory){typeof exports==="object"&&typeof module!=="undefined"?module.exports=factory():typeof define==="function"&&define.amd?define(factory):global.satellizer=factory()})(this,function(){"use strict";var Config=function(){function Config(){this.baseUrl="/";this.loginUrl="/auth/login";this.signupUrl="/auth/signup";this.unlinkUrl="/auth/unlink/";this.tokenName="token";this.tokenPrefix="satellizer";this.tokenHeader="Authorization";this.tokenType="Bearer";this.storageType="localStorage";this.tokenRoot=null;this.withCredentials=false;this.providers={facebook:{name:"facebook",url:"/auth/facebook",authorizationEndpoint:"https://www.facebook.com/v2.5/dialog/oauth",redirectUri:window.location.origin+"/",requiredUrlParams:["display","scope"],scope:["email"],scopeDelimiter:",",display:"popup",oauthType:"2.0",popupOptions:{width:580,height:400}},google:{name:"google",url:"/auth/google",authorizationEndpoint:"https://accounts.google.com/o/oauth2/auth",redirectUri:window.location.origin,requiredUrlParams:["scope"],optionalUrlParams:["display","state"],scope:["profile","email"],scopePrefix:"openid",scopeDelimiter:" ",display:"popup",oauthType:"2.0",popupOptions:{width:452,height:633},state:function(){return encodeURIComponent(Math.random().toString(36).substr(2))}},github:{name:"github",url:"/auth/github",authorizationEndpoint:"https://github.com/login/oauth/authorize",redirectUri:window.location.origin,optionalUrlParams:["scope"],scope:["user:email"],scopeDelimiter:" ",oauthType:"2.0",popupOptions:{width:1020,height:618}},instagram:{name:"instagram",url:"/auth/instagram",authorizationEndpoint:"https://api.instagram.com/oauth/authorize",redirectUri:window.location.origin,requiredUrlParams:["scope"],scope:["basic"],scopeDelimiter:"+",oauthType:"2.0"},linkedin:{name:"linkedin",url:"/auth/linkedin",authorizationEndpoint:"https://www.linkedin.com/uas/oauth2/authorization",redirectUri:window.location.origin,requiredUrlParams:["state"],scope:["r_emailaddress"],scopeDelimiter:" ",state:"STATE",oauthType:"2.0",popupOptions:{width:527,height:582}},twitter:{name:"twitter",url:"/auth/twitter",authorizationEndpoint:"https://api.twitter.com/oauth/authenticate",redirectUri:window.location.origin,oauthType:"1.0",popupOptions:{width:495,height:645}},twitch:{name:"twitch",url:"/auth/twitch",authorizationEndpoint:"https://api.twitch.tv/kraken/oauth2/authorize",redirectUri:window.location.origin,requiredUrlParams:["scope"],scope:["user_read"],scopeDelimiter:" ",display:"popup",oauthType:"2.0",popupOptions:{width:500,height:560}},live:{name:"live",url:"/auth/live",authorizationEndpoint:"https://login.live.com/oauth20_authorize.srf",redirectUri:window.location.origin,requiredUrlParams:["display","scope"],scope:["wl.emails"],scopeDelimiter:" ",display:"popup",oauthType:"2.0",popupOptions:{width:500,height:560}},yahoo:{name:"yahoo",url:"/auth/yahoo",authorizationEndpoint:"https://api.login.yahoo.com/oauth2/request_auth",redirectUri:window.location.origin,scope:[],scopeDelimiter:",",oauthType:"2.0",popupOptions:{width:559,height:519}},bitbucket:{name:"bitbucket",url:"/auth/bitbucket",authorizationEndpoint:"https://bitbucket.org/site/oauth2/authorize",redirectUri:window.location.origin+"/",requiredUrlParams:["scope"],scope:["email"],scopeDelimiter:" ",oauthType:"2.0",popupOptions:{width:1028,height:529}},spotify:{name:"spotify",url:"/auth/spotify",authorizationEndpoint:"https://accounts.spotify.com/authorize",redirectUri:window.location.origin,optionalUrlParams:["state"],requiredUrlParams:["scope"],scope:["user-read-email"],scopePrefix:"",scopeDelimiter:",",oauthType:"2.0",popupOptions:{width:500,height:530},state:function(){return encodeURIComponent(Math.random().toString(36).substr(2))}}};this.httpInterceptor=function(){return true}}Object.defineProperty(Config,"getConstant",{get:function(){return new Config},enumerable:true,configurable:true});return Config}();var AuthProvider=function(){function AuthProvider(SatellizerConfig){this.SatellizerConfig=SatellizerConfig}Object.defineProperty(AuthProvider.prototype,"baseUrl",{get:function(){return this.SatellizerConfig.baseUrl},set:function(value){this.SatellizerConfig.baseUrl=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"loginUrl",{get:function(){return this.SatellizerConfig.loginUrl},set:function(value){this.SatellizerConfig.loginUrl=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"signupUrl",{get:function(){return this.SatellizerConfig.signupUrl},set:function(value){this.SatellizerConfig.signupUrl=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"unlinkUrl",{get:function(){return this.SatellizerConfig.unlinkUrl},set:function(value){this.SatellizerConfig.unlinkUrl=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"tokenRoot",{get:function(){return this.SatellizerConfig.tokenRoot},set:function(value){this.SatellizerConfig.tokenRoot=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"tokenName",{get:function(){return this.SatellizerConfig.tokenName},set:function(value){this.SatellizerConfig.tokenName=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"tokenPrefix",{get:function(){return this.SatellizerConfig.tokenPrefix},set:function(value){this.SatellizerConfig.tokenPrefix=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"tokenHeader",{get:function(){return this.SatellizerConfig.tokenHeader},set:function(value){this.SatellizerConfig.tokenHeader=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"tokenType",{get:function(){return this.SatellizerConfig.tokenType},set:function(value){this.SatellizerConfig.tokenType=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"withCredentials",{get:function(){return this.SatellizerConfig.withCredentials},set:function(value){this.SatellizerConfig.withCredentials=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"storageType",{get:function(){return this.SatellizerConfig.storageType},set:function(value){this.SatellizerConfig.storageType=value},enumerable:true,configurable:true});Object.defineProperty(AuthProvider.prototype,"httpInterceptor",{get:function(){return this.SatellizerConfig.httpInterceptor},set:function(value){if(typeof value==="function"){this.SatellizerConfig.httpInterceptor=value}else{this.SatellizerConfig.httpInterceptor=function(){return value}}},enumerable:true,configurable:true});AuthProvider.prototype.facebook=function(options){angular.extend(this.SatellizerConfig.providers.facebook,options)};AuthProvider.prototype.google=function(options){angular.extend(this.SatellizerConfig.providers.google,options)};AuthProvider.prototype.github=function(options){angular.extend(this.SatellizerConfig.providers.github,options)};AuthProvider.prototype.instagram=function(options){angular.extend(this.SatellizerConfig.providers.instagram,options)};AuthProvider.prototype.linkedin=function(options){angular.extend(this.SatellizerConfig.providers.linkedin,options)};AuthProvider.prototype.twitter=function(options){angular.extend(this.SatellizerConfig.providers.twitter,options)};AuthProvider.prototype.twitch=function(options){angular.extend(this.SatellizerConfig.providers.twitch,options)};AuthProvider.prototype.live=function(options){angular.extend(this.SatellizerConfig.providers.live,options)};AuthProvider.prototype.yahoo=function(options){angular.extend(this.SatellizerConfig.providers.yahoo,options)};AuthProvider.prototype.bitbucket=function(options){angular.extend(this.SatellizerConfig.providers.bitbucket,options)};AuthProvider.prototype.spotify=function(options){angular.extend(this.SatellizerConfig.providers.spotify,options)};AuthProvider.prototype.oauth1=function(options){this.SatellizerConfig.providers[options.name]=angular.extend(options,{oauthType:"1.0"})};AuthProvider.prototype.oauth2=function(options){this.SatellizerConfig.providers[options.name]=angular.extend(options,{oauthType:"2.0"})};AuthProvider.prototype.$get=function(SatellizerShared,SatellizerLocal,SatellizerOAuth){return{login:function(user,options){return SatellizerLocal.login(user,options)},signup:function(user,options){return SatellizerLocal.signup(user,options)},logout:function(){return SatellizerShared.logout()},authenticate:function(name,data){return SatellizerOAuth.authenticate(name,data)},link:function(name,data){return SatellizerOAuth.authenticate(name,data)},unlink:function(name,options){return SatellizerOAuth.unlink(name,options)},isAuthenticated:function(){return SatellizerShared.isAuthenticated()},getPayload:function(){return SatellizerShared.getPayload()},getToken:function(){return SatellizerShared.getToken()},setToken:function(token){return SatellizerShared.setToken({access_token:token})},removeToken:function(){return SatellizerShared.removeToken()},setStorageType:function(type){return SatellizerShared.setStorageType(type)}}};AuthProvider.$inject=["SatellizerConfig"];return AuthProvider}();AuthProvider.prototype.$get.$inject=["SatellizerShared","SatellizerLocal","SatellizerOAuth"];function joinUrl(baseUrl,url){if(/^(?:[a-z]+:)?\/\//i.test(url)){return url}var joined=[baseUrl,url].join("/");var normalize=function(str){return str.replace(/[\/]+/g,"/").replace(/\/\?/g,"?").replace(/\/\#/g,"#").replace(/\:\//g,"://")};return normalize(joined)}function getFullUrlPath(location){var isHttps=location.protocol==="https:";return location.protocol+"//"+location.hostname+":"+(location.port||(isHttps?"443":"80"))+(/^\//.test(location.pathname)?location.pathname:"/"+location.pathname)}function parseQueryString(str){var obj={};var key;var value;angular.forEach((str||"").split("&"),function(keyValue){if(keyValue){value=keyValue.split("=");key=decodeURIComponent(value[0]);obj[key]=angular.isDefined(value[1])?decodeURIComponent(value[1]):true}});return obj}function decodeBase64(str){var buffer;if(typeof module!=="undefined"&&module.exports){try{buffer=require("buffer").Buffer}catch(err){}}var fromCharCode=String.fromCharCode;var re_btou=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g");var cb_btou=function(cccc){switch(cccc.length){case 4:var cp=(7&cccc.charCodeAt(0))<<18|(63&cccc.charCodeAt(1))<<12|(63&cccc.charCodeAt(2))<<6|63&cccc.charCodeAt(3);var offset=cp-65536;return fromCharCode((offset>>>10)+55296)+fromCharCode((offset&1023)+56320);case 3:return fromCharCode((15&cccc.charCodeAt(0))<<12|(63&cccc.charCodeAt(1))<<6|63&cccc.charCodeAt(2));default:return fromCharCode((31&cccc.charCodeAt(0))<<6|63&cccc.charCodeAt(1))}};var btou=function(b){return b.replace(re_btou,cb_btou)};var _decode=buffer?function(a){return(a.constructor===buffer.constructor?a:new buffer(a,"base64")).toString()}:function(a){return btou(atob(a))};return _decode(String(str).replace(/[-_]/g,function(m0){return m0==="-"?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))}var Shared=function(){function Shared($q,$window,SatellizerConfig,SatellizerStorage){this.$q=$q;this.$window=$window;this.SatellizerConfig=SatellizerConfig;this.SatellizerStorage=SatellizerStorage;var _a=this.SatellizerConfig,tokenName=_a.tokenName,tokenPrefix=_a.tokenPrefix;this.prefixedTokenName=tokenPrefix?[tokenPrefix,tokenName].join("_"):tokenName}Shared.prototype.getToken=function(){return this.SatellizerStorage.get(this.prefixedTokenName)};Shared.prototype.getPayload=function(){var token=this.SatellizerStorage.get(this.prefixedTokenName);if(token&&token.split(".").length===3){try{var base64Url=token.split(".")[1];var base64=base64Url.replace("-","+").replace("_","/");return JSON.parse(decodeBase64(base64))}catch(e){}}};Shared.prototype.setToken=function(response){var tokenRoot=this.SatellizerConfig.tokenRoot;var tokenName=this.SatellizerConfig.tokenName;var accessToken=response&&response.access_token;var token;if(accessToken){if(angular.isObject(accessToken)&&angular.isObject(accessToken.data)){response=accessToken}else if(angular.isString(accessToken)){token=accessToken}}if(!token&&response){var tokenRootData=tokenRoot&&tokenRoot.split(".").reduce(function(o,x){return o[x]},response.data);token=tokenRootData?tokenRootData[tokenName]:response.data&&response.data[tokenName]}if(token){this.SatellizerStorage.set(this.prefixedTokenName,token)}};Shared.prototype.removeToken=function(){this.SatellizerStorage.remove(this.prefixedTokenName)};Shared.prototype.isAuthenticated=function(){var token=this.SatellizerStorage.get(this.prefixedTokenName);if(token){if(token.split(".").length===3){try{var base64Url=token.split(".")[1];var base64=base64Url.replace("-","+").replace("_","/");var exp=JSON.parse(this.$window.atob(base64)).exp;if(typeof exp==="number"){return Math.round((new Date).getTime()/1e3)<exp}}catch(e){return true}}return true}return false};Shared.prototype.logout=function(){this.SatellizerStorage.remove(this.prefixedTokenName);return this.$q.when()};Shared.prototype.setStorageType=function(type){this.SatellizerConfig.storageType=type};Shared.$inject=["$q","$window","SatellizerConfig","SatellizerStorage"];return Shared}();var Local=function(){function Local($http,SatellizerConfig,SatellizerShared){this.$http=$http;this.SatellizerConfig=SatellizerConfig;this.SatellizerShared=SatellizerShared}Local.prototype.login=function(user,options){var _this=this;if(options===void 0){options={}}options.url=options.url?options.url:joinUrl(this.SatellizerConfig.baseUrl,this.SatellizerConfig.loginUrl);options.data=user||options.data;options.method=options.method||"POST";options.withCredentials=options.withCredentials||this.SatellizerConfig.withCredentials;return this.$http(options).then(function(response){_this.SatellizerShared.setToken(response);return response})};Local.prototype.signup=function(user,options){if(options===void 0){options={}}options.url=options.url?options.url:joinUrl(this.SatellizerConfig.baseUrl,this.SatellizerConfig.signupUrl);options.data=user||options.data;options.method=options.method||"POST";options.withCredentials=options.withCredentials||this.SatellizerConfig.withCredentials;return this.$http(options)};Local.$inject=["$http","SatellizerConfig","SatellizerShared"];return Local}();var Popup=function(){function Popup($interval,$window,$q){this.$interval=$interval;this.$window=$window;this.$q=$q;this.popup=null;this.defaults={redirectUri:null}}Popup.prototype.stringifyOptions=function(options){var parts=[];angular.forEach(options,function(value,key){parts.push(key+"="+value)});return parts.join(",")};Popup.prototype.open=function(url,name,popupOptions,redirectUri,dontPoll){var width=popupOptions.width||500;var height=popupOptions.height||500;var options=this.stringifyOptions({width:width,height:height,top:this.$window.screenY+(this.$window.outerHeight-height)/2.5,left:this.$window.screenX+(this.$window.outerWidth-width)/2});var popupName=this.$window["cordova"]||this.$window.navigator.userAgent.indexOf("CriOS")>-1?"_blank":name;this.popup=this.$window.open(url,popupName,options);if(this.popup&&this.popup.focus){this.popup.focus()}if(dontPoll){return}if(this.$window["cordova"]){return this.eventListener(redirectUri)}else{if(url==="about:blank"){this.popup.location=url}return this.polling(redirectUri)}};Popup.prototype.polling=function(redirectUri){var _this=this;return this.$q(function(resolve,reject){var redirectUriParser=document.createElement("a");redirectUriParser.href=redirectUri;var redirectUriPath=getFullUrlPath(redirectUriParser);var polling=_this.$interval(function(){if(!_this.popup||_this.popup.closed||_this.popup.closed===undefined){_this.$interval.cancel(polling);reject(new Error("The popup window was closed"))}try{var popupWindowPath=getFullUrlPath(_this.popup.location);if(popupWindowPath===redirectUriPath){if(_this.popup.location.search||_this.popup.location.hash){var query=parseQueryString(_this.popup.location.search.substring(1).replace(/\/$/,""));var hash=parseQueryString(_this.popup.location.hash.substring(1).replace(/[\/$]/,""));var params=angular.extend({},query,hash);if(params.error){reject(new Error(params.error))}else{resolve(params)}}else{reject(new Error("OAuth redirect has occurred but no query or hash parameters were found. "+"They were either not set during the redirect, or were removed—typically by a "+"routing library—before Satellizer could read it."))}_this.$interval.cancel(polling);_this.popup.close()}}catch(error){}},500)})};Popup.prototype.eventListener=function(redirectUri){var _this=this;return this.$q(function(resolve,reject){_this.popup.addEventListener("loadstart",function(event){if(event.url.indexOf(redirectUri)!==0){return}var parser=document.createElement("a");parser.href=event.url;if(parser.search||parser.hash){var query=parseQueryString(parser.search.substring(1).replace(/\/$/,""));var hash=parseQueryString(parser.hash.substring(1).replace(/[\/$]/,""));var params=angular.extend({},query,hash);if(params.error){reject(new Error(params.error))}else{resolve(params)}_this.popup.close()}});_this.popup.addEventListener("loaderror",function(){reject(new Error("Authorization failed"))});_this.popup.addEventListener("exit",function(){reject(new Error("The popup window was closed"))})})};Popup.$inject=["$interval","$window","$q"];return Popup}();var OAuth1=function(){function OAuth1($http,$window,SatellizerConfig,SatellizerPopup){this.$http=$http;this.$window=$window;this.SatellizerConfig=SatellizerConfig;this.SatellizerPopup=SatellizerPopup;this.defaults={name:null,url:null,authorizationEndpoint:null,scope:null,scopePrefix:null,scopeDelimiter:null,redirectUri:null,requiredUrlParams:null,defaultUrlParams:null,oauthType:"1.0",popupOptions:{width:null,height:null}}}OAuth1.prototype.init=function(options,userData){var _this=this;angular.extend(this.defaults,options);var name=options.name,popupOptions=options.popupOptions;var redirectUri=this.defaults.redirectUri;if(!this.$window["cordova"]){this.SatellizerPopup.open("about:blank",name,popupOptions,redirectUri,true)}return this.getRequestToken().then(function(response){return _this.openPopup(options,response).then(function(popupResponse){return _this.exchangeForToken(popupResponse,userData)})})};OAuth1.prototype.openPopup=function(options,response){var url=[options.authorizationEndpoint,this.buildQueryString(response.data)].join("?");var redirectUri=this.defaults.redirectUri;if(this.$window["cordova"]){return this.SatellizerPopup.open(url,options.name,options.popupOptions,redirectUri)}else{this.SatellizerPopup.popup.location=url;return this.SatellizerPopup.polling(redirectUri)}};OAuth1.prototype.getRequestToken=function(){var url=this.SatellizerConfig.baseUrl?joinUrl(this.SatellizerConfig.baseUrl,this.defaults.url):this.defaults.url;return this.$http.post(url,this.defaults)};OAuth1.prototype.exchangeForToken=function(oauthData,userData){var payload=angular.extend({},userData,oauthData);var exchangeForTokenUrl=this.SatellizerConfig.baseUrl?joinUrl(this.SatellizerConfig.baseUrl,this.defaults.url):this.defaults.url;return this.$http.post(exchangeForTokenUrl,payload,{withCredentials:this.SatellizerConfig.withCredentials})};OAuth1.prototype.buildQueryString=function(obj){var str=[];angular.forEach(obj,function(value,key){str.push(encodeURIComponent(key)+"="+encodeURIComponent(value))});return str.join("&")};OAuth1.$inject=["$http","$window","SatellizerConfig","SatellizerPopup"];return OAuth1}();var OAuth2=function(){function OAuth2($http,$window,$timeout,$q,SatellizerConfig,SatellizerPopup,SatellizerStorage){this.$http=$http;this.$window=$window;this.$timeout=$timeout;this.$q=$q;this.SatellizerConfig=SatellizerConfig;this.SatellizerPopup=SatellizerPopup;this.SatellizerStorage=SatellizerStorage;this.defaults={name:null,url:null,clientId:null,authorizationEndpoint:null,redirectUri:null,scope:null,scopePrefix:null,scopeDelimiter:null,state:null,requiredUrlParams:null,defaultUrlParams:["response_type","client_id","redirect_uri"],responseType:"code",responseParams:{code:"code",clientId:"clientId",redirectUri:"redirectUri"},oauthType:"2.0",popupOptions:{width:null,height:null}}}OAuth2.camelCase=function(name){return name.replace(/([\:\-\_]+(.))/g,function(_,separator,letter,offset){return offset?letter.toUpperCase():letter})};OAuth2.prototype.init=function(options,userData){var _this=this;return this.$q(function(resolve,reject){angular.extend(_this.defaults,options);var stateName=_this.defaults.name+"_state";var _a=_this.defaults,name=_a.name,state=_a.state,popupOptions=_a.popupOptions,redirectUri=_a.redirectUri,responseType=_a.responseType;if(typeof state==="function"){_this.SatellizerStorage.set(stateName,state())}else if(typeof state==="string"){_this.SatellizerStorage.set(stateName,state)}var url=[_this.defaults.authorizationEndpoint,_this.buildQueryString()].join("?");_this.SatellizerPopup.open(url,name,popupOptions,redirectUri).then(function(oauth){if(responseType==="token"||!url){return resolve(oauth)}if(oauth.state&&oauth.state!==_this.SatellizerStorage.get(stateName)){return reject(new Error("The value returned in the state parameter does not match the state value from your original "+"authorization code request."))}resolve(_this.exchangeForToken(oauth,userData))}).catch(function(error){return reject(error)})})};OAuth2.prototype.exchangeForToken=function(oauthData,userData){var _this=this;var payload=angular.extend({},userData);angular.forEach(this.defaults.responseParams,function(value,key){switch(key){case"code":payload[value]=oauthData.code;break;case"clientId":payload[value]=_this.defaults.clientId;break;case"redirectUri":payload[value]=_this.defaults.redirectUri;break;default:payload[value]=oauthData[key]}});if(oauthData.state){payload.state=oauthData.state}var exchangeForTokenUrl=this.SatellizerConfig.baseUrl?joinUrl(this.SatellizerConfig.baseUrl,this.defaults.url):this.defaults.url;return this.$http.post(exchangeForTokenUrl,payload,{withCredentials:this.SatellizerConfig.withCredentials})};OAuth2.prototype.buildQueryString=function(){var _this=this;var keyValuePairs=[];var urlParamsCategories=["defaultUrlParams","requiredUrlParams","optionalUrlParams"];angular.forEach(urlParamsCategories,function(paramsCategory){angular.forEach(_this.defaults[paramsCategory],function(paramName){var camelizedName=OAuth2.camelCase(paramName);var paramValue=angular.isFunction(_this.defaults[paramName])?_this.defaults[paramName]():_this.defaults[camelizedName];if(paramName==="redirect_uri"&&!paramValue){return}if(paramName==="state"){var stateName=_this.defaults.name+"_state";paramValue=encodeURIComponent(_this.SatellizerStorage.get(stateName))}if(paramName==="scope"&&Array.isArray(paramValue)){paramValue=paramValue.join(_this.defaults.scopeDelimiter);if(_this.defaults.scopePrefix){paramValue=[_this.defaults.scopePrefix,paramValue].join(_this.defaults.scopeDelimiter)}}keyValuePairs.push([paramName,paramValue])})});return keyValuePairs.map(function(pair){return pair.join("=")}).join("&")};OAuth2.$inject=["$http","$window","$timeout","$q","SatellizerConfig","SatellizerPopup","SatellizerStorage"];return OAuth2}();var OAuth=function(){function OAuth($http,$window,$timeout,$q,SatellizerConfig,SatellizerPopup,SatellizerStorage,SatellizerShared,SatellizerOAuth1,SatellizerOAuth2){this.$http=$http;this.$window=$window;this.$timeout=$timeout;this.$q=$q;this.SatellizerConfig=SatellizerConfig;this.SatellizerPopup=SatellizerPopup;this.SatellizerStorage=SatellizerStorage;this.SatellizerShared=SatellizerShared;this.SatellizerOAuth1=SatellizerOAuth1;this.SatellizerOAuth2=SatellizerOAuth2}OAuth.prototype.authenticate=function(name,userData){var _this=this;return this.$q(function(resolve,reject){var provider=_this.SatellizerConfig.providers[name];var oauth=null;switch(provider.oauthType){case"1.0":oauth=new OAuth1(_this.$http,_this.$window,_this.SatellizerConfig,_this.SatellizerPopup);break;case"2.0":oauth=new OAuth2(_this.$http,_this.$window,_this.$timeout,_this.$q,_this.SatellizerConfig,_this.SatellizerPopup,_this.SatellizerStorage);break;default:return reject(new Error("Invalid OAuth Type"))}return oauth.init(provider,userData).then(function(response){if(provider.url){_this.SatellizerShared.setToken(response)}resolve(response)}).catch(function(error){reject(error)})})};OAuth.prototype.unlink=function(provider,httpOptions){if(httpOptions===void 0){httpOptions={}}httpOptions.url=httpOptions.url?httpOptions.url:joinUrl(this.SatellizerConfig.baseUrl,this.SatellizerConfig.unlinkUrl);httpOptions.data={provider:provider}||httpOptions.data;httpOptions.method=httpOptions.method||"POST";httpOptions.withCredentials=httpOptions.withCredentials||this.SatellizerConfig.withCredentials;return this.$http(httpOptions)};OAuth.$inject=["$http","$window","$timeout","$q","SatellizerConfig","SatellizerPopup","SatellizerStorage","SatellizerShared","SatellizerOAuth1","SatellizerOAuth2"];return OAuth}();var Storage=function(){function Storage($window,SatellizerConfig){this.$window=$window;this.SatellizerConfig=SatellizerConfig;this.memoryStore={}}Storage.prototype.get=function(key){try{return this.$window[this.SatellizerConfig.storageType].getItem(key)}catch(e){return this.memoryStore[key]}};Storage.prototype.set=function(key,value){try{this.$window[this.SatellizerConfig.storageType].setItem(key,value)}catch(e){this.memoryStore[key]=value}};Storage.prototype.remove=function(key){try{this.$window[this.SatellizerConfig.storageType].removeItem(key)}catch(e){delete this.memoryStore[key]}};Storage.$inject=["$window","SatellizerConfig"];return Storage}();var Interceptor=function(){function Interceptor(SatellizerConfig,SatellizerShared,SatellizerStorage){var _this=this;this.SatellizerConfig=SatellizerConfig;this.SatellizerShared=SatellizerShared;this.SatellizerStorage=SatellizerStorage;this.request=function(config){if(config["skipAuthorization"]){return config}if(_this.SatellizerShared.isAuthenticated()&&_this.SatellizerConfig.httpInterceptor()){var tokenName=_this.SatellizerConfig.tokenPrefix?[_this.SatellizerConfig.tokenPrefix,_this.SatellizerConfig.tokenName].join("_"):_this.SatellizerConfig.tokenName;var token=_this.SatellizerStorage.get(tokenName);if(_this.SatellizerConfig.tokenHeader&&_this.SatellizerConfig.tokenType){token=_this.SatellizerConfig.tokenType+" "+token}config.headers[_this.SatellizerConfig.tokenHeader]=token}return config}}Interceptor.Factory=function(SatellizerConfig,SatellizerShared,SatellizerStorage){return new Interceptor(SatellizerConfig,SatellizerShared,SatellizerStorage)};Interceptor.$inject=["SatellizerConfig","SatellizerShared","SatellizerStorage"];return Interceptor}();Interceptor.Factory.$inject=["SatellizerConfig","SatellizerShared","SatellizerStorage"];var HttpProviderConfig=function(){function HttpProviderConfig($httpProvider){this.$httpProvider=$httpProvider;$httpProvider.interceptors.push(Interceptor.Factory)}HttpProviderConfig.$inject=["$httpProvider"];return HttpProviderConfig}();angular.module("satellizer",[]).provider("$auth",["SatellizerConfig",function(SatellizerConfig){return new AuthProvider(SatellizerConfig)}]).constant("SatellizerConfig",Config.getConstant).service("SatellizerShared",Shared).service("SatellizerLocal",Local).service("SatellizerPopup",Popup).service("SatellizerOAuth",OAuth).service("SatellizerOAuth2",OAuth2).service("SatellizerOAuth1",OAuth1).service("SatellizerStorage",Storage).service("SatellizerInterceptor",Interceptor).config(["$httpProvider",function($httpProvider){return new HttpProviderConfig($httpProvider)}]);var ng1="satellizer";return ng1});
angular.module("ivpusic.cookie",["ipCookie"]),angular.module("ipCookie",["ng"]).factory("ipCookie",["$document",function(e){"use strict";function i(e){try{return decodeURIComponent(e)}catch(i){}}return function(){function t(t,n,r){var o,s,p,u,a,c,d,x,f;r=r||{};var g=r.decode||i,l=r.encode||encodeURIComponent;if(void 0!==n)return n="object"==typeof n?JSON.stringify(n):n+"","number"==typeof r.expires&&(f=r.expires,r.expires=new Date,-1===f?r.expires=new Date("Thu, 01 Jan 1970 00:00:00 GMT"):void 0!==r.expirationUnit?"hours"===r.expirationUnit?r.expires.setHours(r.expires.getHours()+f):"minutes"===r.expirationUnit?r.expires.setMinutes(r.expires.getMinutes()+f):"seconds"===r.expirationUnit?r.expires.setSeconds(r.expires.getSeconds()+f):"milliseconds"===r.expirationUnit?r.expires.setMilliseconds(r.expires.getMilliseconds()+f):r.expires.setDate(r.expires.getDate()+f):r.expires.setDate(r.expires.getDate()+f)),e[0].cookie=[l(t),"=",l(n),r.expires?"; expires="+r.expires.toUTCString():"",r.path?"; path="+r.path:"",r.domain?"; domain="+r.domain:"",r.secure?"; secure":""].join("");for(s=[],x=e[0].cookie,x&&(s=x.split("; ")),o={},d=!1,p=0;s.length>p;++p)if(s[p]){if(u=s[p],a=u.indexOf("="),c=u.substring(0,a),n=g(u.substring(a+1)),angular.isUndefined(n))continue;if(void 0===t||t===c){try{o[c]=JSON.parse(n)}catch(m){o[c]=n}if(t===c)return o[c];d=!0}}return d&&void 0===t?o:void 0}return t.remove=function(e,i){var n=void 0!==t(e);return n&&(i||(i={}),i.expires=-1,t(e,"",i)),n},t}()}]);
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
    module.exports = 'ng-token-auth';
}

angular.module('ng-token-auth', ['ipCookie']).provider('$auth', function() {
    var configs, defaultConfigName;
    configs = {
        "default": {
            apiUrl: '/api',
            signOutUrl: '/auth/sign_out',
            emailSignInPath: '/auth/sign_in',
            emailRegistrationPath: '/auth',
            accountUpdatePath: '/auth',
            accountDeletePath: '/auth',
            confirmationSuccessUrl: function() {
                return window.location.href;
            },
            passwordResetPath: '/auth/password',
            passwordUpdatePath: '/auth/password',
            passwordResetSuccessUrl: function() {
                return window.location.href;
            },
            tokenValidationPath: '/auth/validate_token',
            proxyIf: function() {
                return false;
            },
            proxyUrl: '/proxy',
            validateOnPageLoad: true,
            omniauthWindowType: 'sameWindow',
            storage: 'cookies',
            forceValidateToken: false,
            tokenFormat: {
                "access-token": "{{ token }}",
                "token-type": "Bearer",
                client: "{{ clientId }}",
                expiry: "{{ expiry }}",
                uid: "{{ uid }}"
            },
            cookieOps: {
                path: "/",
                expires: 9999,
                expirationUnit: 'days',
                secure: false
            },
            createPopup: function(url) {
                return window.open(url, '_blank', 'closebuttoncaption=Cancel');
            },
            parseExpiry: function(headers) {
                return (parseInt(headers['expiry'], 10) * 1000) || null;
            },
            handleLoginResponse: function(resp) {
                return resp.data;
            },
            handleAccountUpdateResponse: function(resp) {
                return resp.data;
            },
            handleTokenValidationResponse: function(resp) {
                return resp.data;
            },
            authProviderPaths: {
                github: '/auth/github',
                facebook: '/auth/facebook',
                google: '/auth/google_oauth2'
            }
        }
    };
    defaultConfigName = "default";
    return {
        configure: function(params) {
            var conf, defaults, fullConfig, i, k, label, v, _i, _len;
            if (params instanceof Array && params.length) {
                for (i = _i = 0, _len = params.length; _i < _len; i = ++_i) {
                    conf = params[i];
                    label = null;
                    for (k in conf) {
                        v = conf[k];
                        label = k;
                        if (i === 0) {
                            defaultConfigName = label;
                        }
                    }
                    defaults = angular.copy(configs["default"]);
                    fullConfig = {};
                    fullConfig[label] = angular.extend(defaults, conf[label]);
                    angular.extend(configs, fullConfig);
                }
                if (defaultConfigName !== "default") {
                    delete configs["default"];
                }
            } else if (params instanceof Object) {
                angular.extend(configs["default"], params);
            } else {
                throw "Invalid argument: ng-token-auth config should be an Array or Object.";
            }
            return configs;
        },
        $get: [
            '$http', '$q', '$location', 'ipCookie', '$window', '$timeout', '$rootScope', '$interpolate', '$interval', (function(_this) {
                return function($http, $q, $location, ipCookie, $window, $timeout, $rootScope, $interpolate, $interval) {
                    return {
                        header: null,
                        dfd: null,
                        user: {},
                        mustResetPassword: false,
                        listener: null,
                        initialize: function() {
                            this.initializeListeners();
                            this.cancelOmniauthInAppBrowserListeners = (function() {});
                            return this.addScopeMethods();
                        },
                        initializeListeners: function() {
                            this.listener = angular.bind(this, this.handlePostMessage);
                            if ($window.addEventListener) {
                                return $window.addEventListener("message", this.listener, false);
                            }
                        },
                        cancel: function(reason) {
                            if (this.requestCredentialsPollingTimer != null) {
                                $timeout.cancel(this.requestCredentialsPollingTimer);
                            }
                            this.cancelOmniauthInAppBrowserListeners();
                            if (this.dfd != null) {
                                this.rejectDfd(reason);
                            }
                            return $timeout(((function(_this) {
                                return function() {
                                    return _this.requestCredentialsPollingTimer = null;
                                };
                            })(this)), 0);
                        },
                        destroy: function() {
                            this.cancel();
                            if ($window.removeEventListener) {
                                return $window.removeEventListener("message", this.listener, false);
                            }
                        },
                        handlePostMessage: function(ev) {
                            var error, oauthRegistration;
                            if (ev.data.message === 'deliverCredentials') {
                                delete ev.data.message;
                                oauthRegistration = ev.data.oauth_registration;
                                delete ev.data.oauth_registration;
                                this.handleValidAuth(ev.data, true);
                                $rootScope.$broadcast('auth:login-success', ev.data);
                                if (oauthRegistration) {
                                    $rootScope.$broadcast('auth:oauth-registration', ev.data);
                                }
                            }
                            if (ev.data.message === 'authFailure') {
                                error = {
                                    reason: 'unauthorized',
                                    errors: [ev.data.catch]
                                };
                                this.cancel(error);
                                return $rootScope.$broadcast('auth:login-error', error);
                            }
                        },
                        addScopeMethods: function() {
                            $rootScope.user = this.user;
                            $rootScope.authenticate = angular.bind(this, this.authenticate);
                            $rootScope.signOut = angular.bind(this, this.signOut);
                            $rootScope.destroyAccount = angular.bind(this, this.destroyAccount);
                            $rootScope.submitRegistration = angular.bind(this, this.submitRegistration);
                            $rootScope.submitLogin = angular.bind(this, this.submitLogin);
                            $rootScope.requestPasswordReset = angular.bind(this, this.requestPasswordReset);
                            $rootScope.updatePassword = angular.bind(this, this.updatePassword);
                            $rootScope.updateAccount = angular.bind(this, this.updateAccount);
                            if (this.getConfig().validateOnPageLoad) {
                                return this.validateUser({
                                    config: this.getSavedConfig()
                                });
                            }
                        },
                        submitRegistration: function(params, opts) {
                            var successUrl;
                            if (opts == null) {
                                opts = {};
                            }
                            successUrl = this.getResultOrValue(this.getConfig(opts.config).confirmationSuccessUrl);
                            angular.extend(params, {
                                confirm_success_url: successUrl,
                                config_name: this.getCurrentConfigName(opts.config)
                            });
                            return $http.post(this.apiUrl(opts.config) + this.getConfig(opts.config).emailRegistrationPath, params).then(function(resp) {
                                return $rootScope.$broadcast('auth:registration-email-success', params);
                            }).catch(function(resp) {
                                return $rootScope.$broadcast('auth:registration-email-error', resp);
                            });
                        },
                        submitLogin: function(params, opts, httpopts) {
                            if (opts == null) {
                                opts = {};
                            }
                            if (httpopts == null) {
                                httpopts = {};
                            }
                            this.initDfd();
                            $http.post(this.apiUrl(opts.config) + this.getConfig(opts.config).emailSignInPath, params, httpopts).then((function(_this) {
                                return function(resp) {
                                    var authData;
                                    _this.setConfigName(opts.config);
                                    authData = _this.getConfig(opts.config).handleLoginResponse(resp, _this);
                                    _this.handleValidAuth(authData);
                                    return $rootScope.$broadcast('auth:login-success', _this.user);
                                };
                            })(this)).catch((function(_this) {
                                return function(resp) {
                                    _this.rejectDfd({
                                        reason: 'unauthorized',
                                        errors: ['Invalid credentials']
                                    });
                                    return $rootScope.$broadcast('auth:login-error', resp);
                                };
                            })(this));
                            return this.dfd.promise;
                        },
                        userIsAuthenticated: function() {
                            return this.retrieveData('auth_headers') && this.user.signedIn && !this.tokenHasExpired();
                        },
                        requestPasswordReset: function(params, opts) {
                            var successUrl;
                            if (opts == null) {
                                opts = {};
                            }
                            successUrl = this.getResultOrValue(this.getConfig(opts.config).passwordResetSuccessUrl);
                            params.redirect_url = successUrl;
                            if (opts.config != null) {
                                params.config_name = opts.config;
                            }
                            return $http.post(this.apiUrl(opts.config) + this.getConfig(opts.config).passwordResetPath, params).then(function(resp) {
                                return $rootScope.$broadcast('auth:password-reset-request-success', params);
                            }).catch(function(resp) {
                                return $rootScope.$broadcast('auth:password-reset-request-error', resp);
                            });
                        },
                        updatePassword: function(params) {
                            return $http.put(this.apiUrl() + this.getConfig().passwordUpdatePath, params).then((function(_this) {
                                return function(resp) {
                                    $rootScope.$broadcast('auth:password-change-success', resp);
                                    return _this.mustResetPassword = false;
                                };
                            })(this)).catch(function(resp) {
                                return $rootScope.$broadcast('auth:password-change-error', resp);
                            });
                        },
                        updateAccount: function(params) {
                            return $http.put(this.apiUrl() + this.getConfig().accountUpdatePath, params).then((function(_this) {
                                return function(resp) {
                                    var curHeaders, key, newHeaders, updateResponse, val, _ref;
                                    updateResponse = _this.getConfig().handleAccountUpdateResponse(resp);
                                    curHeaders = _this.retrieveData('auth_headers');
                                    angular.extend(_this.user, updateResponse);
                                    if (curHeaders) {
                                        newHeaders = {};
                                        _ref = _this.getConfig().tokenFormat;
                                        for (key in _ref) {
                                            val = _ref[key];
                                            if (curHeaders[key] && updateResponse[key]) {
                                                newHeaders[key] = updateResponse[key];
                                            }
                                        }
                                        _this.setAuthHeaders(newHeaders);
                                    }
                                    return $rootScope.$broadcast('auth:account-update-success', resp);
                                };
                            })(this)).catch(function(resp) {
                                return $rootScope.$broadcast('auth:account-update-error', resp);
                            });
                        },
                        destroyAccount: function(params) {
                            return $http["delete"](this.apiUrl() + this.getConfig().accountUpdatePath, params).then((function(_this) {
                                return function(resp) {
                                    _this.invalidateTokens();
                                    return $rootScope.$broadcast('auth:account-destroy-success', resp);
                                };
                            })(this)).catch(function(resp) {
                                return $rootScope.$broadcast('auth:account-destroy-error', resp);
                            });
                        },
                        authenticate: function(provider, opts) {
                            if (opts == null) {
                                opts = {};
                            }
                            if (this.dfd == null) {
                                this.setConfigName(opts.config);
                                this.initDfd();
                                this.openAuthWindow(provider, opts);
                            }
                            return this.dfd.promise;
                        },
                        setConfigName: function(configName) {
                            if (configName == null) {
                                configName = defaultConfigName;
                            }
                            return this.persistData('currentConfigName', configName, configName);
                        },
                        openAuthWindow: function(provider, opts) {
                            var authUrl, omniauthWindowType;
                            omniauthWindowType = this.getConfig(opts.config).omniauthWindowType;
                            authUrl = this.buildAuthUrl(omniauthWindowType, provider, opts);
                            if (omniauthWindowType === 'newWindow') {
                                return this.requestCredentialsViaPostMessage(this.getConfig().createPopup(authUrl));
                            } else if (omniauthWindowType === 'inAppBrowser') {
                                return this.requestCredentialsViaExecuteScript(this.getConfig().createPopup(authUrl));
                            } else if (omniauthWindowType === 'sameWindow') {
                                return this.visitUrl(authUrl);
                            } else {
                                throw 'Unsupported omniauthWindowType "#{omniauthWindowType}"';
                            }
                        },
                        visitUrl: function(url) {
                            return $window.location.replace(url);
                        },
                        buildAuthUrl: function(omniauthWindowType, provider, opts) {
                            var authUrl, key, params, val;
                            if (opts == null) {
                                opts = {};
                            }
                            authUrl = this.getConfig(opts.config).apiUrl;
                            authUrl += this.getConfig(opts.config).authProviderPaths[provider];
                            authUrl += '?auth_origin_url=' + encodeURIComponent($window.location.href);
                            params = angular.extend({}, opts.params || {}, {
                                omniauth_window_type: omniauthWindowType
                            });
                            for (key in params) {
                                val = params[key];
                                authUrl += '&';
                                authUrl += encodeURIComponent(key);
                                authUrl += '=';
                                authUrl += encodeURIComponent(val);
                            }
                            return authUrl;
                        },
                        requestCredentialsViaPostMessage: function(authWindow) {
                            if (authWindow.closed) {
                                return this.handleAuthWindowClose(authWindow);
                            } else {
                                authWindow.postMessage("requestCredentials", "*");
                                return this.requestCredentialsPollingTimer = $timeout(((function(_this) {
                                    return function() {
                                        return _this.requestCredentialsViaPostMessage(authWindow);
                                    };
                                })(this)), 500);
                            }
                        },
                        requestCredentialsViaExecuteScript: function(authWindow) {
                            var handleAuthWindowClose, handleLoadStop;
                            this.cancelOmniauthInAppBrowserListeners();
                            handleAuthWindowClose = this.handleAuthWindowClose.bind(this, authWindow);
                            handleLoadStop = this.handleLoadStop.bind(this, authWindow);
                            authWindow.addEventListener('loadstop', handleLoadStop);
                            authWindow.addEventListener('exit', handleAuthWindowClose);
                            return this.cancelOmniauthInAppBrowserListeners = function() {
                                authWindow.removeEventListener('loadstop', handleLoadStop);
                                return authWindow.removeEventListener('exit', handleAuthWindowClose);
                            };
                        },
                        handleLoadStop: function(authWindow) {
                            _this = this;
                            return authWindow.executeScript({
                                code: 'requestCredentials()'
                            }, function(response) {
                                var data, ev;
                                data = response[0];
                                if (data) {
                                    ev = new Event('message');
                                    ev.data = data;
                                    _this.cancelOmniauthInAppBrowserListeners();
                                    $window.dispatchEvent(ev);
                                    _this.initDfd();
                                    return authWindow.close();
                                }
                            });
                        },
                        handleAuthWindowClose: function(authWindow) {
                            this.cancel({
                                reason: 'unauthorized',
                                errors: ['User canceled login']
                            });
                            this.cancelOmniauthInAppBrowserListeners;
                            return $rootScope.$broadcast('auth:window-closed');
                        },
                        resolveDfd: function() {
                            this.dfd.resolve(this.user);
                            return $timeout(((function(_this) {
                                return function() {
                                    _this.dfd = null;
                                    if (!$rootScope.$$phase) {
                                        return $rootScope.$digest();
                                    }
                                };
                            })(this)), 0);
                        },
                        buildQueryString: function(param, prefix) {
                            var encoded, k, str, v;
                            str = [];
                            for (k in param) {
                                v = param[k];
                                k = prefix ? prefix + "[" + k + "]" : k;
                                encoded = angular.isObject(v) ? this.buildQueryString(v, k) : k + "=" + encodeURIComponent(v);
                                str.push(encoded);
                            }
                            return str.join("&");
                        },
                        parseLocation: function(location) {
                            var i, locationSubstring, obj, pair, pairs;
                            locationSubstring = location.substring(1);
                            obj = {};
                            if (locationSubstring) {
                                pairs = locationSubstring.split('&');
                                pair = void 0;
                                i = void 0;
                                for (i in pairs) {
                                    i = i;
                                    if ((pairs[i] === '') || (typeof pairs[i] === 'function')) {
                                        continue;
                                    }
                                    pair = pairs[i].split('=');
                                    obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
                                }
                            }
                            return obj;
                        },
                        validateUser: function(opts) {
                            var clientId, configName, expiry, location_parse, params, search, token, uid, url;
                            if (opts == null) {
                                opts = {};
                            }
                            configName = opts.config;
                            if (this.dfd == null) {
                                this.initDfd();
                                if (this.userIsAuthenticated()) {
                                    this.resolveDfd();
                                } else {
                                    search = $location.search();
                                    location_parse = this.parseLocation(window.location.search);
                                    params = Object.keys(search).length === 0 ? location_parse : search;
                                    token = params.auth_token || params.token;
                                    if (token !== void 0) {
                                        clientId = params.client_id;
                                        uid = params.uid;
                                        expiry = params.expiry;
                                        configName = params.config;
                                        this.setConfigName(configName);
                                        this.mustResetPassword = params.reset_password;
                                        this.firstTimeLogin = params.account_confirmation_success;
                                        this.oauthRegistration = params.oauth_registration;
                                        this.setAuthHeaders(this.buildAuthHeaders({
                                            token: token,
                                            clientId: clientId,
                                            uid: uid,
                                            expiry: expiry
                                        }));
                                        url = $location.path() || '/';
                                        ['auth_token', 'token', 'client_id', 'uid', 'expiry', 'config', 'reset_password', 'account_confirmation_success', 'oauth_registration'].forEach(function(prop) {
                                            return delete params[prop];
                                        });
                                        if (Object.keys(params).length > 0) {
                                            url += '?' + this.buildQueryString(params);
                                        }
                                        $location.url(url);
                                    } else if (this.retrieveData('currentConfigName')) {
                                        configName = this.retrieveData('currentConfigName');
                                    }
                                    if (this.getConfig().forceValidateToken) {
                                        this.validateToken({
                                            config: configName
                                        });
                                    } else if (!isEmpty(this.retrieveData('auth_headers'))) {
                                        if (this.tokenHasExpired()) {
                                            $rootScope.$broadcast('auth:session-expired');
                                            this.rejectDfd({
                                                reason: 'unauthorized',
                                                errors: ['Session expired.']
                                            });
                                        } else {
                                            this.validateToken({
                                                config: configName
                                            });
                                        }
                                    } else {
                                        this.rejectDfd({
                                            reason: 'unauthorized',
                                            errors: ['No credentials']
                                        });
                                        $rootScope.$broadcast('auth:invalid');
                                    }
                                }
                            }
                            return this.dfd.promise;
                        },
                        validateToken: function(opts) {
                            if (opts == null) {
                                opts = {};
                            }
                            if (!this.tokenHasExpired()) {
                                return $http.get(this.apiUrl(opts.config) + this.getConfig(opts.config).tokenValidationPath).then((function(_this) {
                                    return function(resp) {
                                        var authData;
                                        authData = _this.getConfig(opts.config).handleTokenValidationResponse(resp);
                                        _this.handleValidAuth(authData);
                                        if (_this.firstTimeLogin) {
                                            $rootScope.$broadcast('auth:email-confirmation-success', _this.user);
                                        }
                                        if (_this.oauthRegistration) {
                                            $rootScope.$broadcast('auth:oauth-registration', _this.user);
                                        }
                                        if (_this.mustResetPassword) {
                                            $rootScope.$broadcast('auth:password-reset-confirm-success', _this.user);
                                        }
                                        return $rootScope.$broadcast('auth:validation-success', _this.user);
                                    };
                                })(this)).catch((function(_this) {
                                    return function(data) {
                                        if (_this.firstTimeLogin) {
                                            $rootScope.$broadcast('auth:email-confirmation-error', data);
                                        }
                                        if (_this.mustResetPassword) {
                                            $rootScope.$broadcast('auth:password-reset-confirm-error', data);
                                        }
                                        $rootScope.$broadcast('auth:validation-error', data);
                                        return _this.rejectDfd({
                                            reason: 'unauthorized',
                                            errors: data != null ? data.catchs : ['Unspecified error']
                                        });
                                    };
                                })(this));
                            } else {
                                return this.rejectDfd({
                                    reason: 'unauthorized',
                                    errors: ['Expired credentials']
                                });
                            }
                        },
                        tokenHasExpired: function() {
                            var expiry, now;
                            expiry = this.getExpiry();
                            now = new Date().getTime();
                            return expiry && expiry < now;
                        },
                        getExpiry: function() {
                            return this.getConfig().parseExpiry(this.retrieveData('auth_headers') || {});
                        },
                        invalidateTokens: function() {
                            var key, val, _ref;
                            _ref = this.user;
                            for (key in _ref) {
                                val = _ref[key];
                                delete this.user[key];
                            }
                            this.deleteData('currentConfigName');
                            if (this.timer != null) {
                                $interval.cancel(this.timer);
                            }
                            return this.deleteData('auth_headers');
                        },
                        signOut: function() {
                            return $http["delete"](this.apiUrl() + this.getConfig().signOutUrl).then((function(_this) {
                                return function(resp) {
                                    _this.invalidateTokens();
                                    return $rootScope.$broadcast('auth:logout-success');
                                };
                            })(this)).catch((function(_this) {
                                return function(resp) {
                                    _this.invalidateTokens();
                                    return $rootScope.$broadcast('auth:logout-error', resp);
                                };
                            })(this));
                        },
                        handleValidAuth: function(user, setHeader) {
                            if (setHeader == null) {
                                setHeader = false;
                            }
                            if (this.requestCredentialsPollingTimer != null) {
                                $timeout.cancel(this.requestCredentialsPollingTimer);
                            }
                            this.cancelOmniauthInAppBrowserListeners();
                            angular.extend(this.user, user);
                            this.user.signedIn = true;
                            this.user.configName = this.getCurrentConfigName();
                            if (setHeader) {
                                this.setAuthHeaders(this.buildAuthHeaders({
                                    token: this.user.auth_token,
                                    clientId: this.user.client_id,
                                    uid: this.user.uid,
                                    expiry: this.user.expiry
                                }));
                            }
                            return this.resolveDfd();
                        },
                        buildAuthHeaders: function(ctx) {
                            var headers, key, val, _ref;
                            headers = {};
                            _ref = this.getConfig().tokenFormat;
                            for (key in _ref) {
                                val = _ref[key];
                                headers[key] = $interpolate(val)(ctx);
                            }
                            return headers;
                        },
                        persistData: function(key, val, configName) {
                            if (this.getConfig(configName).storage instanceof Object) {
                                return this.getConfig(configName).storage.persistData(key, val, this.getConfig(configName));
                            } else {
                                switch (this.getConfig(configName).storage) {
                                    case 'localStorage':
                                        return $window.localStorage.setItem(key, JSON.stringify(val));
                                    case 'sessionStorage':
                                        return $window.sessionStorage.setItem(key, JSON.stringify(val));
                                    default:
                                        return ipCookie(key, val, this.getConfig().cookieOps);
                                }
                            }
                        },
                        retrieveData: function(key) {
                            var e;
                            try {
                                if (this.getConfig().storage instanceof Object) {
                                    return this.getConfig().storage.retrieveData(key);
                                } else {
                                    switch (this.getConfig().storage) {
                                        case 'localStorage':
                                            return JSON.parse($window.localStorage.getItem(key));
                                        case 'sessionStorage':
                                            return JSON.parse($window.sessionStorage.getItem(key));
                                        default:
                                            return ipCookie(key);
                                    }
                                }
                            } catch (_error) {
                                e = _error;
                                if (e instanceof SyntaxError) {
                                    return void 0;
                                } else {
                                    throw e;
                                }
                            }
                        },
                        deleteData: function(key) {
                            if (this.getConfig().storage instanceof Object) {
                                this.getConfig().storage.deleteData(key);
                            }
                            switch (this.getConfig().storage) {
                                case 'localStorage':
                                    return $window.localStorage.removeItem(key);
                                case 'sessionStorage':
                                    return $window.sessionStorage.removeItem(key);
                                default:
                                    return ipCookie.remove(key, {
                                        path: this.getConfig().cookieOps.path
                                    });
                            }
                        },
                        setAuthHeaders: function(h) {
                            var expiry, newHeaders, now, result;
                            newHeaders = angular.extend(this.retrieveData('auth_headers') || {}, h);
                            result = this.persistData('auth_headers', newHeaders);
                            expiry = this.getExpiry();
                            now = new Date().getTime();
                            if (expiry > now) {
                                if (this.timer != null) {
                                    $interval.cancel(this.timer);
                                }
                                this.timer = $interval(((function(_this) {
                                    return function() {
                                        return _this.validateUser({
                                            config: _this.getSavedConfig()
                                        });
                                    };
                                })(this)), parseInt(expiry - now), 1);
                            }
                            return result;
                        },
                        initDfd: function() {
                            return this.dfd = $q.defer();
                        },
                        rejectDfd: function(reason) {
                            this.invalidateTokens();
                            if (this.dfd != null) {
                                this.dfd.reject(reason);
                                return $timeout(((function(_this) {
                                    return function() {
                                        return _this.dfd = null;
                                    };
                                })(this)), 0);
                            }
                        },
                        apiUrl: function(configName) {
                            if (this.getConfig(configName).proxyIf()) {
                                return this.getConfig(configName).proxyUrl;
                            } else {
                                return this.getConfig(configName).apiUrl;
                            }
                        },
                        getConfig: function(name) {
                            return configs[this.getCurrentConfigName(name)];
                        },
                        getResultOrValue: function(arg) {
                            if (typeof arg === 'function') {
                                return arg();
                            } else {
                                return arg;
                            }
                        },
                        getCurrentConfigName: function(name) {
                            return name || this.getSavedConfig();
                        },
                        getSavedConfig: function() {
                            var c, key;
                            c = void 0;
                            key = 'currentConfigName';
                            if (this.hasLocalStorage()) {
                                if (c == null) {
                                    c = JSON.parse($window.localStorage.getItem(key));
                                }
                            } else if (this.hasSessionStorage()) {
                                if (c == null) {
                                    c = JSON.parse($window.sessionStorage.getItem(key));
                                }
                            }
                            if (c == null) {
                                c = ipCookie(key);
                            }
                            return c || defaultConfigName;
                        },
                        hasSessionStorage: function() {
                            var error;
                            if (this._hasSessionStorage == null) {
                                this._hasSessionStorage = false;
                                try {
                                    $window.sessionStorage.setItem('ng-token-auth-test', 'ng-token-auth-test');
                                    $window.sessionStorage.removeItem('ng-token-auth-test');
                                    this._hasSessionStorage = true;
                                } catch (_error) {
                                    error = _error;
                                }
                            }
                            return this._hasSessionStorage;
                        },
                        hasLocalStorage: function() {
                            var error;
                            if (this._hasLocalStorage == null) {
                                this._hasLocalStorage = false;
                                try {
                                    $window.localStorage.setItem('ng-token-auth-test', 'ng-token-auth-test');
                                    $window.localStorage.removeItem('ng-token-auth-test');
                                    this._hasLocalStorage = true;
                                } catch (_error) {
                                    error = _error;
                                }
                            }
                            return this._hasLocalStorage;
                        }
                    };
                };
            })(this)
        ]
    };
}).config([
    '$httpProvider',
    function($httpProvider) {
        var httpMethods, tokenIsCurrent, updateHeadersFromResponse;
        tokenIsCurrent = function($auth, headers) {
            var newTokenExpiry, oldTokenExpiry;
            oldTokenExpiry = Number($auth.getExpiry());
            newTokenExpiry = Number($auth.getConfig().parseExpiry(headers || {}));
            return newTokenExpiry >= oldTokenExpiry;
        };
        updateHeadersFromResponse = function($auth, resp) {
            var key, newHeaders, val, _ref;
            newHeaders = {};
            _ref = $auth.getConfig().tokenFormat;
            for (key in _ref) {
                val = _ref[key];
                if (resp.headers(key)) {
                    newHeaders[key] = resp.headers(key);
                }
            }
            if (tokenIsCurrent($auth, newHeaders)) {
                return $auth.setAuthHeaders(newHeaders);
            }
        };
        $httpProvider.interceptors.push([
            '$injector',
            function($injector) {
                return {
                    request: function(req) {
                        $injector.invoke([
                            '$http', '$auth',
                            function($http, $auth) {
                                var key, val, _ref, _results;
                                if (req.url.match($auth.apiUrl())) {
                                    _ref = $auth.retrieveData('auth_headers');
                                    _results = [];
                                    for (key in _ref) {
                                        val = _ref[key];
                                        _results.push(req.headers[key] = val);
                                    }
                                    return _results;
                                }
                            }
                        ]);
                        return req;
                    },
                    response: function(resp) {
                        $injector.invoke([
                            '$http', '$auth',
                            function($http, $auth) {
                                if (resp.config.url.match($auth.apiUrl())) {
                                    return updateHeadersFromResponse($auth, resp);
                                }
                            }
                        ]);
                        return resp;
                    },
                    responseError: function(resp) {
                        $injector.invoke([
                            '$http', '$auth',
                            function($http, $auth) {
                                if (resp.config.url.match($auth.apiUrl())) {
                                    return updateHeadersFromResponse($auth, resp);
                                }
                            }
                        ]);
                        return $injector.get('$q').reject(resp);
                    }
                };
            }
        ]);
        httpMethods = ['get', 'post', 'put', 'patch', 'delete'];
        return angular.forEach(httpMethods, function(method) {
            var _base;
            if ((_base = $httpProvider.defaults.headers)[method] == null) {
                _base[method] = {};
            }
            return $httpProvider.defaults.headers[method]['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
        });
    }
]).run([
    '$auth', '$window', '$rootScope',
    function($auth, $window, $rootScope) {
        return $auth.initialize();
    }
]);

window.isOldIE = function() {
    var nav, out, version;
    out = false;
    nav = navigator.userAgent.toLowerCase();
    if (nav && nav.indexOf('msie') !== -1) {
        version = parseInt(nav.split('msie')[1]);
        if (version < 10) {
            out = true;
        }
    }
    return out;
};

window.isIE = function() {
    var nav;
    nav = navigator.userAgent.toLowerCase();
    return (nav && nav.indexOf('msie') !== -1) || !!navigator.userAgent.match(/Trident.*rv\:11\./);
};

window.isEmpty = function(obj) {
    var key, val;
    if (!obj) {
        return true;
    }
    if (obj.length > 0) {
        return false;
    }
    if (obj.length === 0) {
        return true;
    }
    for (key in obj) {
        val = obj[key];
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
};
/**
 * bootbox.js v4.4.0
 *
 * http://bootboxjs.com/license.txt
 */
!function(a,b){"use strict";"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?module.exports=b(require("jquery")):a.bootbox=b(a.jQuery)}(this,function a(b,c){"use strict";function d(a){var b=q[o.locale];return b?b[a]:q.en[a]}function e(a,c,d){a.stopPropagation(),a.preventDefault();var e=b.isFunction(d)&&d.call(c,a)===!1;e||c.modal("hide")}function f(a){var b,c=0;for(b in a)c++;return c}function g(a,c){var d=0;b.each(a,function(a,b){c(a,b,d++)})}function h(a){var c,d;if("object"!=typeof a)throw new Error("Please supply an object of options");if(!a.message)throw new Error("Please specify a message");return a=b.extend({},o,a),a.buttons||(a.buttons={}),c=a.buttons,d=f(c),g(c,function(a,e,f){if(b.isFunction(e)&&(e=c[a]={callback:e}),"object"!==b.type(e))throw new Error("button with key "+a+" must be an object");e.label||(e.label=a),e.className||(e.className=2>=d&&f===d-1?"btn-primary":"btn-default")}),a}function i(a,b){var c=a.length,d={};if(1>c||c>2)throw new Error("Invalid argument length");return 2===c||"string"==typeof a[0]?(d[b[0]]=a[0],d[b[1]]=a[1]):d=a[0],d}function j(a,c,d){return b.extend(!0,{},a,i(c,d))}function k(a,b,c,d){var e={className:"bootbox-"+a,buttons:l.apply(null,b)};return m(j(e,d,c),b)}function l(){for(var a={},b=0,c=arguments.length;c>b;b++){var e=arguments[b],f=e.toLowerCase(),g=e.toUpperCase();a[f]={label:d(g)}}return a}function m(a,b){var d={};return g(b,function(a,b){d[b]=!0}),g(a.buttons,function(a){if(d[a]===c)throw new Error("button key "+a+" is not allowed (options are "+b.join("\n")+")")}),a}var n={dialog:"<div class='bootbox modal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'></div></div></div></div></div>",header:"<div class='modal-header'><h4 class='modal-title'></h4></div>",footer:"<div class='modal-footer'></div>",closeButton:"<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",form:"<form class='bootbox-form'></form>",inputs:{text:"<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",textarea:"<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",email:"<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",select:"<select class='bootbox-input bootbox-input-select form-control'></select>",checkbox:"<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",date:"<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",time:"<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",number:"<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",password:"<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"}},o={locale:"en",backdrop:"static",animate:!0,className:null,closeButton:!0,show:!0,container:"body"},p={};p.alert=function(){var a;if(a=k("alert",["ok"],["message","callback"],arguments),a.callback&&!b.isFunction(a.callback))throw new Error("alert requires callback property to be a function when provided");return a.buttons.ok.callback=a.onEscape=function(){return b.isFunction(a.callback)?a.callback.call(this):!0},p.dialog(a)},p.confirm=function(){var a;if(a=k("confirm",["cancel","confirm"],["message","callback"],arguments),a.buttons.cancel.callback=a.onEscape=function(){return a.callback.call(this,!1)},a.buttons.confirm.callback=function(){return a.callback.call(this,!0)},!b.isFunction(a.callback))throw new Error("confirm requires a callback");return p.dialog(a)},p.prompt=function(){var a,d,e,f,h,i,k;if(f=b(n.form),d={className:"bootbox-prompt",buttons:l("cancel","confirm"),value:"",inputType:"text"},a=m(j(d,arguments,["title","callback"]),["cancel","confirm"]),i=a.show===c?!0:a.show,a.message=f,a.buttons.cancel.callback=a.onEscape=function(){return a.callback.call(this,null)},a.buttons.confirm.callback=function(){var c;switch(a.inputType){case"text":case"textarea":case"email":case"select":case"date":case"time":case"number":case"password":c=h.val();break;case"checkbox":var d=h.find("input:checked");c=[],g(d,function(a,d){c.push(b(d).val())})}return a.callback.call(this,c)},a.show=!1,!a.title)throw new Error("prompt requires a title");if(!b.isFunction(a.callback))throw new Error("prompt requires a callback");if(!n.inputs[a.inputType])throw new Error("invalid prompt type");switch(h=b(n.inputs[a.inputType]),a.inputType){case"text":case"textarea":case"email":case"date":case"time":case"number":case"password":h.val(a.value);break;case"select":var o={};if(k=a.inputOptions||[],!b.isArray(k))throw new Error("Please pass an array of input options");if(!k.length)throw new Error("prompt with select requires options");g(k,function(a,d){var e=h;if(d.value===c||d.text===c)throw new Error("given options in wrong format");d.group&&(o[d.group]||(o[d.group]=b("<optgroup/>").attr("label",d.group)),e=o[d.group]),e.append("<option value='"+d.value+"'>"+d.text+"</option>")}),g(o,function(a,b){h.append(b)}),h.val(a.value);break;case"checkbox":var q=b.isArray(a.value)?a.value:[a.value];if(k=a.inputOptions||[],!k.length)throw new Error("prompt with checkbox requires options");if(!k[0].value||!k[0].text)throw new Error("given options in wrong format");h=b("<div/>"),g(k,function(c,d){var e=b(n.inputs[a.inputType]);e.find("input").attr("value",d.value),e.find("label").append(d.text),g(q,function(a,b){b===d.value&&e.find("input").prop("checked",!0)}),h.append(e)})}return a.placeholder&&h.attr("placeholder",a.placeholder),a.pattern&&h.attr("pattern",a.pattern),a.maxlength&&h.attr("maxlength",a.maxlength),f.append(h),f.on("submit",function(a){a.preventDefault(),a.stopPropagation(),e.find(".btn-primary").click()}),e=p.dialog(a),e.off("shown.bs.modal"),e.on("shown.bs.modal",function(){h.focus()}),i===!0&&e.modal("show"),e},p.dialog=function(a){a=h(a);var d=b(n.dialog),f=d.find(".modal-dialog"),i=d.find(".modal-body"),j=a.buttons,k="",l={onEscape:a.onEscape};if(b.fn.modal===c)throw new Error("$.fn.modal is not defined; please double check you have included the Bootstrap JavaScript library. See http://getbootstrap.com/javascript/ for more details.");if(g(j,function(a,b){k+="<button data-bb-handler='"+a+"' type='button' class='btn "+b.className+"'>"+b.label+"</button>",l[a]=b.callback}),i.find(".bootbox-body").html(a.message),a.animate===!0&&d.addClass("fade"),a.className&&d.addClass(a.className),"large"===a.size?f.addClass("modal-lg"):"small"===a.size&&f.addClass("modal-sm"),a.title&&i.before(n.header),a.closeButton){var m=b(n.closeButton);a.title?d.find(".modal-header").prepend(m):m.css("margin-top","-10px").prependTo(i)}return a.title&&d.find(".modal-title").html(a.title),k.length&&(i.after(n.footer),d.find(".modal-footer").html(k)),d.on("hidden.bs.modal",function(a){a.target===this&&d.remove()}),d.on("shown.bs.modal",function(){d.find(".btn-primary:first").focus()}),"static"!==a.backdrop&&d.on("click.dismiss.bs.modal",function(a){d.children(".modal-backdrop").length&&(a.currentTarget=d.children(".modal-backdrop").get(0)),a.target===a.currentTarget&&d.trigger("escape.close.bb")}),d.on("escape.close.bb",function(a){l.onEscape&&e(a,d,l.onEscape)}),d.on("click",".modal-footer button",function(a){var c=b(this).data("bb-handler");e(a,d,l[c])}),d.on("click",".bootbox-close-button",function(a){e(a,d,l.onEscape)}),d.on("keyup",function(a){27===a.which&&d.trigger("escape.close.bb")}),b(a.container).append(d),d.modal({backdrop:a.backdrop?"static":!1,keyboard:!1,show:!1}),a.show&&d.modal("show"),d},p.setDefaults=function(){var a={};2===arguments.length?a[arguments[0]]=arguments[1]:a=arguments[0],b.extend(o,a)},p.hideAll=function(){return b(".bootbox").modal("hide"),p};var q={bg_BG:{OK:"Ок",CANCEL:"Отказ",CONFIRM:"Потвърждавам"},br:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Sim"},cs:{OK:"OK",CANCEL:"Zrušit",CONFIRM:"Potvrdit"},da:{OK:"OK",CANCEL:"Annuller",CONFIRM:"Accepter"},de:{OK:"OK",CANCEL:"Abbrechen",CONFIRM:"Akzeptieren"},el:{OK:"Εντάξει",CANCEL:"Ακύρωση",CONFIRM:"Επιβεβαίωση"},en:{OK:"OK",CANCEL:"Cancel",CONFIRM:"OK"},es:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Aceptar"},et:{OK:"OK",CANCEL:"Katkesta",CONFIRM:"OK"},fa:{OK:"قبول",CANCEL:"لغو",CONFIRM:"تایید"},fi:{OK:"OK",CANCEL:"Peruuta",CONFIRM:"OK"},fr:{OK:"OK",CANCEL:"Annuler",CONFIRM:"D'accord"},he:{OK:"אישור",CANCEL:"ביטול",CONFIRM:"אישור"},hu:{OK:"OK",CANCEL:"Mégsem",CONFIRM:"Megerősít"},hr:{OK:"OK",CANCEL:"Odustani",CONFIRM:"Potvrdi"},id:{OK:"OK",CANCEL:"Batal",CONFIRM:"OK"},it:{OK:"OK",CANCEL:"Annulla",CONFIRM:"Conferma"},ja:{OK:"OK",CANCEL:"キャンセル",CONFIRM:"確認"},lt:{OK:"Gerai",CANCEL:"Atšaukti",CONFIRM:"Patvirtinti"},lv:{OK:"Labi",CANCEL:"Atcelt",CONFIRM:"Apstiprināt"},nl:{OK:"OK",CANCEL:"Annuleren",CONFIRM:"Accepteren"},no:{OK:"OK",CANCEL:"Avbryt",CONFIRM:"OK"},pl:{OK:"OK",CANCEL:"Anuluj",CONFIRM:"Potwierdź"},pt:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Confirmar"},ru:{OK:"OK",CANCEL:"Отмена",CONFIRM:"Применить"},sq:{OK:"OK",CANCEL:"Anulo",CONFIRM:"Prano"},sv:{OK:"OK",CANCEL:"Avbryt",CONFIRM:"OK"},th:{OK:"ตกลง",CANCEL:"ยกเลิก",CONFIRM:"ยืนยัน"},tr:{OK:"Tamam",CANCEL:"İptal",CONFIRM:"Onayla"},zh_CN:{OK:"OK",CANCEL:"取消",CONFIRM:"确认"},zh_TW:{OK:"OK",CANCEL:"取消",CONFIRM:"確認"}};return p.addLocale=function(a,c){return b.each(["OK","CANCEL","CONFIRM"],function(a,b){if(!c[b])throw new Error("Please supply a translation for '"+b+"'")}),q[a]={OK:c.OK,CANCEL:c.CANCEL,CONFIRM:c.CONFIRM},p},p.removeLocale=function(a){return delete q[a],p},p.setLocale=function(a){return p.setDefaults("locale",a)},p.init=function(c){return a(c||b)},p});
/*
 * angular-auto-validate - v1.19.6 - 2016-06-17
 * https://github.com/jonsamwell/angular-auto-validate
 * Copyright (c) 2016 Jon Samwell (http://www.jonsamwell.com)
 */
!function(a,b){"use strict";function c(){var a={},c=!0,d=!0,e=!1,f=!0,g=!0,h=function(a){var b;return a&&0!==a.length?(b=a.toLowerCase(),a=!("f"===b||"0"===b||"false"===b)):a=!1,a},i=function(a,b){var c;return void 0!==a&&(c=a.attr(b)||a.attr("data-"+b)),c},j=function(a,b){var c;return void 0!==a&&(c=void 0!==a.attr(b)||void 0!==a.attr("data-"+b)),c},k=function(a,b){return h(i(a,b))},l=function(a){return c&&!k(a,"disable-valid-styling")},m=function(a){return!k(a,"disable-auto-validate")},n=function(a){return d&&!k(a,"disable-invalid-styling")};this.enable=function(a){f=a},this.isEnabled=function(){return f},this.setDefaultElementModifier=function(b){if(void 0===a[b])throw new Error("Element modifier not registered: "+b);this.defaultElementModifier=b},this.registerDomModifier=function(b,c){a[b]=c},this.setErrorMessageResolver=function(a){this.errorMessageResolver=a},this.getErrorMessage=function(a,c){var d;if(void 0===this.errorMessageResolver)throw new Error("Please set an error message resolver via the setErrorMessageResolver function before attempting to resolve an error message.");return j(c,"disable-validation-message")?(d=b.injector(["ng"]).get("$q").defer(),d.resolve(""),d.promise):this.errorMessageResolver(a,c)},this.setValidElementStyling=function(a){c=a},this.setInvalidElementStyling=function(a){d=a},this.setFirstInvalidElementScrollingOnSubmit=function(a){e=a},this.firstInvalidElementScrollingOnSubmitEnabled=function(){return e},this.setFocusInputError=function(a){g=a},this.enableFocusInputError=function(){return g},this.getDomModifier=function(b){var c=(void 0!==b?b.attr("element-modifier"):this.defaultElementModifier)||(void 0!==b?b.attr("data-element-modifier"):this.defaultElementModifier)||this.defaultElementModifier;if(void 0===c)throw new Error("Please set a default dom modifier via the setDefaultElementModifier method on the validator class.");return a[c]},this.makeValid=function(a){m(a)&&(l(a)?this.getDomModifier(a).makeValid(a):this.makeDefault(a))},this.makeInvalid=function(a,b){m(a)&&(n(a)?this.getDomModifier(a).makeInvalid(a,b):this.makeDefault(a))},this.makeDefault=function(a){if(m(a)){var b=this.getDomModifier(a);b.makeDefault&&b.makeDefault(a)}},this.waitForAsyncValidators=function(a){if(m(a)){var b=this.getDomModifier(a);b.waitForAsyncValidators&&b.waitForAsyncValidators(a)}},this.defaultFormValidationOptions={forceValidation:!1,disabled:!1,validateNonVisibleControls:!1,removeExternalValidationErrorsOnSubmit:!0,validateOnFormSubmit:!1,waitForAsyncValidators:!0},this.$get=[function(){return this}]}function d(a){var c=!1,d=["<style>.glyphicon-spin-jcs {-webkit-animation: spin 1000ms infinite linear;animation: spin 1000ms infinite linear;}@-webkit-keyframes spin {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(359deg);transform: rotate(359deg);}}@keyframes spin {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(359deg);transform: rotate(359deg);}}</style>"].join(""),e=function(a){c===!1&&(b.element(document.body).append(b.element(d)),c=!0),b.forEach(a.find("span"),function(a){a=b.element(a),(a.hasClass("error-msg")||a.hasClass("form-control-feedback")||a.hasClass("control-feedback"))&&a.remove()}),a.removeClass("has-success has-error has-feedback")},f=function(a,b){for(var c,d=a,e=0;10>=e;e+=1){if(void 0!==d&&d.hasClass(b)){c=d;break}void 0!==d&&(d=d.parent())}return c},g=function(a,c){for(var d,e=0;e<a.children.length&&(d=a.children[e],void 0===d||!b.element(d).hasClass(c))&&!(void 0!==d.children&&(d=g(d,c),d.length>0));e+=1);return b.element(d)},h=function(a){return f(a,"form-group")},i=function(a){return g(a,"input-group")},j=function(a,b){a[0].parentNode.insertBefore(b[0],a[0].nextSibling)},k=!1,l=function(a){k=a},m=function(c){var d,f=h(c);if(f){if(e(f),d=i(f[0]),f.addClass("has-success "+(d.length>0||k===!1?"":"has-feedback")),k){var g='<span class="glyphicon glyphicon-ok form-control-feedback"></span>';d.length>0&&(g=g.replace("form-",""),g='<span class="input-group-addon control-feedback">'+g+"</span>"),j(c,b.element(g))}}else a.error("Angular-auto-validate: invalid bs3 form structure elements must be wrapped by a form-group class")},n=function(c,d){var f,g=h(c),l=b.element('<span class="help-block has-error error-msg">'+d+"</span>");if(g){if(e(g),f=i(g[0]),g.addClass("has-error "+(f.length>0||k===!1?"":"has-feedback")),j(f.length>0?f:o(c),l),k){var m='<span class="glyphicon glyphicon-remove form-control-feedback"></span>';f.length>0&&(m=m.replace("form-",""),m='<span class="input-group-addon control-feedback">'+m+"</span>"),j(o(c),b.element(m))}}else a.error("Angular-auto-validate: invalid bs3 form structure elements must be wrapped by a form-group class")},o=function(a){var b=a,c=a[0].type?a[0].type.toLowerCase():"";return"checkbox"!==c&&"radio"!==c||"label"!==a.parent()[0].nodeName.toLowerCase()||(b=a.parent()),b},p=function(b){var c=h(b);c?e(c):a.error("Angular-auto-validate: invalid bs3 form structure elements must be wrapped by a form-group class")},q=function(c){var d,f=h(c);if(f){if(e(f),d=i(f[0]),f.addClass("has-feedback "+(d.length>0||k===!1?"":"has-feedback")),k){var g='<span class="glyphicon glyphicon-repeat glyphicon-spin-jcs form-control-feedback"></span>';d.length>0&&(g=g.replace("form-",""),g='<span class="input-group-addon control-feedback">'+g+"</span>"),j(c,b.element(g))}}else a.error("Angular-auto-validate: invalid bs3 form structure elements must be wrapped by a form-group class")};return{makeValid:m,makeInvalid:n,makeDefault:p,waitForAsyncValidators:q,enableValidationStateIcons:l,key:"bs3"}}function e(a){var b=function(b,c,d){var e;return function(){var f=this,g=arguments,h=function(){e=null,d||b.apply(f,g)},i=d&&!e;a.cancel(e),e=a(h,c,!1),i&&b.apply(f,g)}};return{debounce:b}}function f(a,b){return a.replace(/{(\d+)}/g,function(a,c){return void 0!==typeof b[c]?b[c]:a})}function g(a,c){var d,e="default",g="js/angular-auto-validate/dist/lang",h=function(a){return d=c.get(f("{0}/jcs-auto-validate_{1}.json",[g,a.toLowerCase()]))},i=function(a){g=a},j=function(c,f){var g=a.defer();return f=f||h,e=c.toLowerCase(),void 0===b.autoValidate.errorMessages[e]?(d=f(c),d.then(function(a){d=void 0,b.autoValidate.errorMessages[e]=a.data,g.resolve(b.autoValidate.errorMessages[e])},function(a){b.autoValidate.errorMessages[e]={defaultMsg:"Loading culture failed!"},d=null,g.reject(a)})):g.resolve(b.autoValidate.errorMessages[e]),g.promise},k=function(c){var f=a.defer();return c=void 0===c?e:c.toLowerCase(),void 0!==d?d.then(function(){f.resolve(b.autoValidate.errorMessages[c])},function(a){f.reject(a)}):f.resolve(b.autoValidate.errorMessages[c]),f.promise},l=function(a,b){var c;return b&&(a+="-err-type",c=b.attr("ng-"+a),void 0===c&&(c=b.attr("data-ng-"+a)||b.attr(a)),c&&(c=c.replace(/[\W]/g,""))),c},m=function(c,g){var h,i,j,k=a.defer(),n=[];if(void 0!==d)d.then(function(){m(c,g).then(function(a){k.resolve(a)})});else{if(h=b.autoValidate.errorMessages[e][c],j=l(c,g),j&&(h=b.autoValidate.errorMessages[e][j]),void 0===h&&void 0!==j?h=f(b.autoValidate.errorMessages[e].defaultMsg,[j]):void 0===h&&(h=f(b.autoValidate.errorMessages[e].defaultMsg,[c])),g&&g.attr)try{i=g.attr("ng-"+c),void 0===i&&(i=g.attr("data-ng-"+c)||g.attr(c)),n.push(i||""),h=f(h,n)}catch(o){}k.resolve(h)}return k.promise};return{setI18nFileRootPath:i,setCulture:j,getErrorMessages:k,resolve:m}}function h(){var a=function(a,c){b.forEach(a.find("small"),function(a){b.element(a).hasClass("error")&&b.element(a).remove()}),c.removeClass("error")},c=function(a){for(var b=a,c=0;3>=c&&(void 0===b||!b.hasClass("columns")&&!b.hasClass("column"));c+=1)void 0!==b&&(b=b.parent());return b},d=function(b){var d=c(b);a(d&&d.length>0?d:b,b)},e=function(d,e){var f,g=c(d);a(g||d,d),d.addClass("error"),g&&(f=b.element('<small class="error">'+e+"</small>"),g.append(f))},f=function(a){d(a)};return{makeValid:d,makeInvalid:e,makeDefault:f,key:"foundation5"}}function i(){var a=function(a,c){b.forEach(a.find("small"),function(a){b.element(a).hasClass("form-error is-visible")&&b.element(a).remove()}),c.removeClass("alert callout")},c=function(a){for(var b=a,c=0;3>=c&&(void 0===b||!b.hasClass("columns")&&!b.hasClass("column"));c+=1)void 0!==b&&(b=b.parent());return b},d=function(b){var d=c(b);a(d&&d.length>0?d:b,b)},e=function(d,e){var f,g=c(d);a(g||d,d),d.addClass("alert callout"),g&&(f=b.element('<small class="form-error is-visible">'+e+"</small>"),g.append(f))},f=function(a){d(a)};return{makeValid:d,makeInvalid:e,makeDefault:f,key:"foundation6"}}function j(){var a=function(a){return a[0].offsetWidth>0&&a[0].offsetHeight>0};return{isElementVisible:a}}function k(a,c,d){var e=["input","textarea","select","form"],f=function(a){return c.isElementVisible(a)},g=function(c){var d,e=b.element(c).controller("form");return d=void 0!==e&&null!==e?e.autoValidateFormOptions:a.defaultFormValidationOptions},h=function(a,b,c){var d,g,h,i=a&&a.length>0,j=i&&"#comment"===a[0].nodeName.toLowerCase();return i&&j===!1&&(d=f(a)||b.validateNonVisibleControls,g=e.indexOf(a[0].nodeName.toLowerCase())>-1||a[0].hasAttribute("register-custom-form-control"),h=b.validateOnFormSubmit===!1||b.validateOnFormSubmit===!0&&c===!0),i&&!j&&d&&g&&h},i=function(c,d,e){var f,i=!0,j=e||g(d),k=c.$pristine===!1||j.forceValidation,l=function(a){var c,d=!0;return b.forEach(a,function(a,b){d&&a&&(d=!1,c=b)}),c};return j.disabled===!1&&(j.forceValidation||h(d,j,j.getFormController().$submitted)&&c&&k)&&(i=!c.$invalid,j.removeExternalValidationErrorsOnSubmit&&c.removeAllExternalValidation&&c.removeAllExternalValidation(),void 0!==c.$pending&&e.waitForAsyncValidators===!0?a.waitForAsyncValidators(d):i?a.makeValid(d):(f=l(c.$errors||c.$error),void 0===f?i=!0:a.getErrorMessage(f,d).then(function(b){a.makeInvalid(d,b)}))),i},j=function(b){a.makeDefault(b)},k=function(a){b.forEach(a[0].all||a[0].elements||a[0],function(a){var c,d=b.element(a);c=d.controller("ngModel"),void 0!==c&&("form"===d[0].nodeName.toLowerCase()?k(d):c.$setPristine())})},l=function(c){var e,f=!0,j=null,k=c?b.element(c).controller("form"):void 0,m=function(c,e,m){var n,o,p,q;if(c=b.element(c),n=c.controller("ngModel"),void 0!==n&&(e||h(c,m,k.$submitted)))if("form"===c[0].nodeName.toLowerCase())l(c);else{p=g(c),q=p.forceValidation,p.forceValidation=e;try{if(o=i(n,c,p),a.enableFocusInputError()&&!o&&f&&(j||(j=c[0],j.focus())),a.firstInvalidElementScrollingOnSubmitEnabled()&&!o&&f){var r=c.attr("id");r&&d(r)}f=f&&o}finally{p.forceValidation=q}}};return void 0===c||void 0!==k&&k.autoValidateFormOptions.disabled?void 0!==c:(e=b.copy(k.autoValidateFormOptions),e.forceValidation=!0,b.forEach(c[0].elements||c[0].all||c[0],function(a){m(a,!0,e)}),c[0].customHTMLFormControlsCollection&&b.forEach(c[0].customHTMLFormControlsCollection,function(a){m(a,!0,e)}),f)},m=function(b,c,d){d?a.makeInvalid(b,d):a.getErrorMessage(c,b).then(function(c){a.makeInvalid(b,c)})};return{setElementValidationError:m,validateElement:i,validateForm:l,resetElement:j,resetForm:k}}function l(a,b){return void 0!==a&&null!==a||void 0===b?"false"!==a:b}function m(a,c,d){var e=a.autoValidateFormOptions=a.autoValidateFormOptions||b.copy(c.defaultFormValidationOptions);e.getFormController=function(){return a},e.waitForAsyncValidators=l(d.waitForAsyncValidators,e.waitForAsyncValidators),e.forceValidation=!1,e.disabled=!c.isEnabled()||l(d.disableDynamicValidation,e.disabled),e.validateNonVisibleControls=l(d.validateNonVisibleControls,e.validateNonVisibleControls),e.validateOnFormSubmit=l(d.validateOnFormSubmit,e.validateOnFormSubmit),e.removeExternalValidationErrorsOnSubmit=void 0===d.removeExternalValidationErrorsOnSubmit?e.removeExternalValidationErrorsOnSubmit:l(d.removeExternalValidationErrorsOnSubmit,e.removeExternalValidationErrorsOnSubmit),c.isEnabled()===!1&&"false"===d.disableDynamicValidation&&(e.disabled=!1)}function n(a){return{restrict:"E",link:function(b,c){function d(){a.resetForm(c),e.$setPristine&&e.$setPristine(),e.$setUntouched&&e.$setUntouched()}var e=c.controller("form");void 0!==e&&e.autoValidateFormOptions&&e.autoValidateFormOptions.disabled===!1&&(c.on("reset",d),b.$on("$destroy",function(){c.off("reset",d)}))}}}function o(){var a=function(a){for(var c=a,d=0;50>=d&&(void 0===c||"form"!==c.nodeName.toLowerCase());d+=1)void 0!==c&&(c=b.element(c).parent()[0]);return c};return{restrict:"A",link:function(b,c){var d=a(c.parent()[0]);d&&(d.customHTMLFormControlsCollection=d.customHTMLFormControlsCollection||[],d.customHTMLFormControlsCollection.push(c[0]))}}}function p(a,b,c){return a[0].compile=function(a,d){var e=b(d.ngSubmit),f="true"===d.ngSubmitForce;return function(a,b){function d(d){a.$apply(function(){void 0!==i&&null!==i&&i.autoValidateFormOptions&&i.autoValidateFormOptions.disabled===!0?e(a,{$event:d}):(void 0===i.$setSubmitted&&(i.$submitted=!0),(c.validateForm(b)||f===!0)&&e(a,{$event:d}))})}function g(){b[0].reset?b[0].reset():c.resetForm(b)}var h,i=b.controller("form");i&&i.autoValidateFormOptions&&(i.autoValidateFormOptions.resetForm=g,void 0!==i.$name&&""!==i.$name&&(h=a.$on("form:"+i.$name+":reset",g))),b.on("submit",d),a.$on("$destroy",function(){b.off("submit",d),h&&h()})}},a}function q(a){a.decorator("ngSubmitDirective",p)}function r(a,b,c,d,e){a.setErrorMessageResolver(b.resolve),a.registerDomModifier(c.key,c),a.registerDomModifier(d.key,d),a.registerDomModifier(e.key,e),a.setDefaultElementModifier(c.key)}b.module("jcs-autoValidate",[]),b.module("jcs-autoValidate").provider("validator",c),d.$inject=["$log"],b.module("jcs-autoValidate").factory("bootstrap3ElementModifier",d),e.$inject=["$timeout"],b.module("jcs-autoValidate").factory("jcs-debounce",e),b.autoValidate=b.autoValidate||{errorMessages:{}},b.autoValidate.errorMessages["default"]={defaultMsg:"Please add error message for {0}",email:"Please enter a valid email address",minlength:"Please enter at least {0} characters",maxlength:"You have entered more than the maximum {0} characters",min:"Please enter the minimum number of {0}",max:"Please enter the maximum number of {0}",required:"This field is required",date:"Please enter a valid date",pattern:"Please ensure the entered information adheres to this pattern {0}",number:"Please enter a valid number",url:"Please enter a valid URL in the format of http(s)://www.google.com"},g.$inject=["$q","$http"],b.module("jcs-autoValidate").factory("defaultErrorMessageResolver",g),b.module("jcs-autoValidate").factory("foundation5ElementModifier",h),b.module("jcs-autoValidate").factory("foundation6ElementModifier",i),k.$inject=["validator","jcs-elementUtils","$anchorScroll"],b.module("jcs-autoValidate").factory("jcs-elementUtils",j),b.module("jcs-autoValidate").factory("validationManager",k),b.module("jcs-autoValidate").directive("form",["validator",function(a){return{restrict:"E",require:"form",compile:function(){return{pre:function(b,c,d,e){m(e,a,d)}}}}}]),b.module("jcs-autoValidate").directive("ngForm",["validator",function(a){return{restrict:"EA",require:"form",priority:9999,compile:function(){return{pre:function(b,c,d,e){m(e,a,d)}}}}}]),n.$inject=["validationManager"],b.module("jcs-autoValidate").directive("form",n),b.module("jcs-autoValidate").directive("registerCustomFormControl",o),p.$inject=["$delegate","$parse","validationManager"],q.$inject=["$provide"],b.module("jcs-autoValidate").config(q),b.module("jcs-autoValidate").config(["$provide",function(a){a.decorator("ngModelDirective",["$timeout","$delegate","validationManager","jcs-debounce",function(a,c,d,e){var f=c[0],g=f.link||f.compile;return f.compile=function(a){var c=b.version.major>=1&&b.version.minor>=3,f=g;return c&&b.isFunction(g)&&(f=g(a)),{pre:function(a,g,h,i){var j=i[0],k=i[1],l=void 0===h.ngModelOptions?void 0:a.$eval(h.ngModelOptions),m=j.$setValidity,n=j.$setPristine,o=e.debounce(function(){var a=void 0!==k&&null!==k?k.autoValidateFormOptions:void 0;d.validateElement(j,g,a)},100);return void 0===h.formnovalidate&&void 0!==k&&null!==k&&k.autoValidateFormOptions&&k.autoValidateFormOptions.disabled===!1&&(c||!c||void 0===l||void 0===l.updateOn||""===l.updateOn?j.$setValidity=function(a,b){m.call(j,a,b),o()}:(g.on(l.updateOn,function(){o()}),a.$on("$destroy",function(){g.off(l.updateOn)})),j.$setPristine=function(){n.call(j),d.resetElement(g)},j.autoValidated=!0),j.setExternalValidation=function(a,b,c){c&&j.$setValidity(a,!1),j.externalErrors=j.externalErrors||{},j.externalErrors[a]=!1,d.setElementValidationError(g,a,b)},j.removeExternalValidation=function(a,b){if(b){j.$setValidity(a,!0);var c=j.$error||j.$errors;delete c[a]}j.externalErrors&&delete j.externalErrors[a],d.resetElement(g)},j.removeAllExternalValidation=function(){if(j.externalErrors){var a=j.$error||j.$errors;b.forEach(j.externalErrors,function(b,c){j.$setValidity(c,!0),delete a[c]}),j.externalErrors={},d.resetElement(g)}},k&&(k.setExternalValidation=function(a,b,c,d){var e=!1;return k[a]&&(k[a].setExternalValidation(b,c,d),e=!0),e},k.removeExternalValidation=function(a,b,c,d){var e=!1;return k[a]&&(k[a].removeExternalValidation(b,d),e=!0),e}),f.pre?f.pre.apply(this,arguments):this},post:function(a,b,c,d){return f.post?f.post.apply(this,arguments):f.apply(this,arguments)}}},c}])}]),r.$inject=["validator","defaultErrorMessageResolver","bootstrap3ElementModifier","foundation5ElementModifier","foundation6ElementModifier"],b.module("jcs-autoValidate").run(r)}(String,angular);
/*! ngprogress-lite - v1.0.8 (http://labs.voronianski.com/ngprogress-lite.js) */
!function(a,b){"undefined"!=typeof module&&module.exports?module.exports=b(require("angular")):"function"==typeof define&&define.amd?define(["angular"],b):b(a.angular)}(this,function(a){"use strict";return a.module("ngProgressLite",[]).provider("ngProgressLite",function(){var b=this.settings={minimum:.08,speed:300,ease:"ease",trickleRate:.02,trickleSpeed:500,template:'<div class="ngProgressLite"><div class="ngProgressLiteBar"><div class="ngProgressLiteBarShadow"></div></div></div>'};this.$get=["$document",function(c){var d,e,f,g=c.find("body"),h={render:function(){return this.isRendered()?d:(g.addClass("ngProgressLite-on"),d=a.element(b.template),g.append(d),f=!1,d)},remove:function(){g.removeClass("ngProgressLite-on"),d.remove(),f=!0},isRendered:function(){return d&&d.children().length>0&&!f},trickle:function(){return i.inc(Math.random()*b.trickleRate)},clamp:function(a,b,c){return b>a?b:a>c?c:a},toBarPercents:function(a){return 100*a},positioning:function(a,b,c){return{width:this.toBarPercents(a)+"%",transition:"all "+b+"ms "+c}}},i={set:function(a){var c=h.render();return a=h.clamp(a,b.minimum,1),e=1===a?null:a,setTimeout(function(){c.children().eq(0).css(h.positioning(a,b.speed,b.ease))},100),1===a&&setTimeout(function(){c.css({transition:"all "+b.speed+"ms linear",opacity:0}),setTimeout(function(){h.remove()},b.speed)},b.speed),i},get:function(){return e},start:function(){e||i.set(0);var a=function(){setTimeout(function(){e&&(h.trickle(),a())},b.trickleSpeed)};return a(),i},inc:function(a){var b=e;return b?("number"!=typeof a&&(a=(1-b)*h.clamp(Math.random()*b,.1,.95)),b=h.clamp(b+a,0,.994),i.set(b)):i.start()},done:function(){e&&i.inc(.3+.5*Math.random()).set(1)}};return i}]}).name});
(function() {
    'use strict';

    angular.module('app', [
        /* Shared modules */
        'app.core',

        /* Features */
    ]);
})();
(function() {
    'use strict';

    angular.module('app')
        .constant('CONST', {
            //api_domain: "http://api.launchii.com/" //api domain
            api_domain: "http://stageapi.launchii.com/v1"
        });

})();
(function() {
    'use strict';

    angular.module('app.core', [
        'ngResource',
        'ui.router',
        //'ngCookies',
        'satellizer',
        //'ng-token-auth',
        'jcs-autoValidate',
        'ngProgressLite'
    ]);

})();
(function() {
    'use strict';

    angular.module('app')
        .config(config)
        .run(run);

    config.$inject = ['$authProvider', '$resourceProvider', '$httpProvider', 'CONST'];

    /* @ngInject */
    function config($authProvider, $resourceProvider, $httpProvider, CONST) {

        $authProvider.loginUrl = CONST.api_domain + '/auth/sign_in';
        //$authProvider.tokenHeader = 'Access-Token';
        //$authProvider.withCredentials = true;
        // $authProvider.configure({
        //     apiUrl: CONST.api_domain
        //         //validateOnPageLoad: false
        // });

        //$httpProvider.defaults.withCredentials = true;
        $resourceProvider.defaults.stripTrailingSlashes = false;
        $httpProvider.interceptors.push('myInterceptor');
    }

    // csrf.$inject = ['$http', '$cookies'];
    // /* @ngInject */
    // function csrf($http, $cookies) {
    //     $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
    // }

    run.$inject = ['$rootScope', '$state', '$auth', 'bootstrap3ElementModifier', 'ngProgressLite'];
    /* @ngInject */
    function run($rootScope, $state, $auth, bootstrap3ElementModifier, ngProgressLite) {
        bootstrap3ElementModifier.enableValidationStateIcons(true);

        $rootScope.$on('$stateChangeStart', function(event, toState) {
            ngProgressLite.start();
            if (localStorage.getItem('user') != 'undefined') {
                var user = JSON.parse(localStorage.getItem('user'));
                if (user && $auth.isAuthenticated()) {
                    //if (user && $auth.validateUser()) {
                    $rootScope.authenticated = true;
                    $rootScope.currentUser = user;

                    if (toState.name === "auth") {
                        event.preventDefault();
                        $state.go('dashboard');
                    }
                } else {
                    localStorage.removeItem('user');
                    $rootScope.authenticated = false;
                    $rootScope.currentUser = null;

                    if (toState.name !== "auth") {
                        event.preventDefault();
                        $state.go('auth');
                    }
                }
            }
        });

        $rootScope.$on('$stateChangeSuccess', function(event, toState) {
            ngProgressLite.done();
        });

        $rootScope.$on('$stateChangeError', function(event, toState) {
            ngProgressLite.done();
        });
    }
})();
(function() {
    'use strict';

    angular.module('app')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    /* @ngInject */
    function config($stateProvider, $urlRouterProvider) {

        // For any unmatched url, redirect to /login 
        $urlRouterProvider.otherwise("/auth");

        //////STATES//////

        var auth = {
            name: "auth",
            url: "/auth",
            views: {
                "login": {
                    templateUrl: "/app/login/login.html",
                    controller: "LoginController",
                    controllerAs: "vm",
                    resolve: {
                        styleSheets: loginStyleSheets
                    }
                }
            }
        };

        var logout = {
            name: "logout",
            url: "/logout",
            views: {
                "main": {
                    templateUrl: "/app/login/login.html",
                    controller: "LoginController",
                    controllerAs: "vm",
                    resolve: {
                        doLogout: doLogout
                    }
                }
            }
        };

        var dashboard = {
            name: "dashboard",
            url: "/",
            views: {
                "main": {
                    templateUrl: "/app/dashboard/dashboard.html",
                    controller: "DashboardController",
                    controllerAs: "vm",
                    resolve: {
                        styleSheets: dashboardStyleSheets
                    }
                },
                //"nav": nav
            }
        };

        var deal = {
            name: "deal",
            url: "/deal",
            views: {
                "main": {
                    templateUrl: "/app/deals/deal.html",
                    controller: "DealController",
                    controllerAs: "vm",
                    resolve: {
                        dealPrepService: dealPrepService
                    }
                },
                //"nav": nav
            }
        };

        var dealAdd = {
            name: "deal.add",
            url: "/add",
            parent: deal,
            views: {
                "page_body": {
                    templateUrl: "/app/deals/deal.add.html",
                    controller: "DealAddController",
                    controllerAs: "vm"
                }
            }
        };

        var dealEdit = {
            name: "deal.edit",
            url: "/edit/:id",
            parent: deal,
            views: {
                "page_body": {
                    templateUrl: "/app/deals/deal.add.html",
                    controller: "DealEditController",
                    controllerAs: "vm",
                    resolve: {
                        prepSelDeal: prepSelDeal
                    }
                }
            }
        };

        var brand = {
            name: "brand",
            url: "/brand",
            views: {
                "main": {
                    templateUrl: "/app/brand/brand.html",
                    controller: "BrandController",
                    controllerAs: "vm",
                    resolve: {
                        brandPrepService: brandPrepService
                    }
                },
                //"nav": nav
            }
        };

        var brandAdd = {
            name: "brand.add",
            url: "/add",
            parent: brand,
            views: {
                "page_body": {
                    templateUrl: "/app/brand/brand.add.html",
                    controller: "BrandAddController",
                    controllerAs: "vm"
                }
            }
        };

        var brandEdit = {
            name: "brand.edit",
            url: "/edit/:id",
            parent: brand,
            views: {
                "page_body": {
                    templateUrl: "/app/brand/brand.add.html",
                    controller: "BrandEditController",
                    controllerAs: "vm",
                    resolve: {
                        prepSelBrand: prepSelBrand
                    }
                }
            }
        };

        ////////////

        $stateProvider
            .state(auth)
            .state(logout)
            .state(dashboard)
            .state(deal)
            .state(dealAdd)
            .state(dealEdit)
            .state(brand)
            .state(brandAdd)
            .state(brandEdit);

        ////////////

        loginStyleSheets.$inject = ['HelperService'];
        /* @ngInject */
        function loginStyleSheets(HelperService) {
            var css = ['/templates/assets/pages/css/login.min.css'];
            HelperService.setCss(css);
        }

        dashboardStyleSheets.$inject = ['HelperService'];
        /* @ngInject */
        function dashboardStyleSheets(HelperService) {
            var css = ['/templates/assets/layouts/layout/css/layout.min.css',
                '/templates/assets/layouts/layout/css/themes/darkblue.min.css',
                '/templates/assets/layouts/layout/css/custom.min.css'
            ];
            HelperService.setCss(css);
        }

        doLogout.$inject = ['AuthService'];
        /* @ngInject */
        function doLogout(AuthService) {
            AuthService.logout();
        }

        dealPrepService.$inject = ['DealService'];
        /* @ngInject */
        function dealPrepService(DealService) {
            return DealService.getAll();
        }

        brandPrepService.$inject = ['BrandService'];
        /* @ngInject */
        function brandPrepService(BrandService) {
            return BrandService.getAll();
        }

        prepSelBrand.$inject = ['$stateParams', 'BrandService'];
        /* @ngInject */
        function prepSelBrand($stateParams, BrandService) {
            return BrandService.find($stateParams.id);
        }

        prepSelDeal.$inject = ['$stateParams', 'DealService'];
        /* @ngInject */
        function prepSelDeal($stateParams, DealService) {
            return DealService.find($stateParams.id);
        }
    }

})();
(function() {
    'use strict';

    angular.module('app')
        .factory('myInterceptor', myInterceptor);

    myInterceptor.$inject = ['$q', '$rootScope', '$injector', 'CONST'];

    /* @ngInject */
    function myInterceptor($q, $rootScope, $injector, CONST) {
        var interceptor = {
            request: request
        }

        return interceptor;

        ////////////////

        function request(config) {
            var d = $q.defer();
            var $state = $injector.get('$state');

            if (config.method != "GET") {
                if ($rootScope.authenticated) {
                    d.resolve(config);
                } else if (config.url == CONST.api_domain + '/auth/sign_in') {
                    d.resolve(config);
                } else {
                    d.reject(config);
                    $state.go('auth');
                }
            } else {
                d.resolve(config);
            }

            return d.promise;

        }
    }

})();
(function() {
    'use strict';

    angular.module('app')
        .factory('HelperService', HelperService);

    HelperService.$inject = ['$state', '$rootScope'];

    /* @ngInject */
    function HelperService($state, $rootScope) {
        var service = {
            getCurrentState: getCurrentState,
            getPrevState: getPrevState,
            removeFromList: removeFromList,
            addToList: addToList,
            refreshList: refreshList,
            emptyList: emptyList,
            setCss: setCss
        }

        return service;

        ////////////////
        //css is an array e.g. ['/templates/assets/layouts/layout/css/layout.min.css']
        function setCss(css) {
            $rootScope.stylesheets = [];
            $rootScope.stylesheets = css;
        }

        function getCurrentState() {
            return $state;
        }

        function getPrevState() {
            var prevState = $state.current.parent;

            if (typeof prevState != 'undefined') {
                return prevState;
            }

            return false;
        }

        function removeFromList(list, id) {
            for (var x = 0; x < list.length; x++) {
                if (list[x].id == id) {
                    list.splice(x, 1);
                }
            }

            return list;
        }

        function addToList(list, newData) {
            list.push(newData);

            return list;
        }

        function refreshList(list, data) {
            list.splice(0, list.length);

            for (var x = 0; x < data.length; x++) {
                list.push(data[x]);
            }

            return list;
        }

        function emptyList(list) {
            list.splice(0, list.length);

            return list;
        }
    }

})();
(function() {
    'use strict';

    angular.module('app')
        .controller('NavController', NavController);

    NavController.$inject = ['$auth', '$rootScope', '$state', 'NavService']

    /* @ngInject */
    function NavController($auth, $rootScope, $state, NavService) {
        var vm = this;

        vm.navs = [];
        //vm.isState = isState;

        /////////////

        // function isState(stateName) {
        //     $state.includes(stateName);
        // }
    }
})();
(function() {
    'use strict';

    angular.module('app')
        .factory('NavService', NavService);

    NavService.$inject = ['$http', 'CONST', '$q'];

    /* @ngInject */
    function NavService($http, CONST, $q) {
        var api = CONST.api_domain + 'nav/';
        var d = $q.defer();

        var service = {
            navs: [],
            errors: [],
            //getNavs: getNavs
        }

        return service;

        ////////////////

        function getNavs() {
            /*
            var d = $q.defer();

            $http.get(api)
                .then(function(data) {
                    d.resolve(data.data);
                })
                .catch(function(error) {
                    service.errors = error;
                    d.reject();
                });

            return d.promise;
            */
        }
    }

})();
(function() {
    'use strict';

    angular.module('app')
        .factory('AuthService', AuthService);

    AuthService.$inject = ['$auth', '$rootScope', '$http', '$q', '$injector', '$state'];

    /* @ngInject */
    function AuthService($auth, $rootScope, $http, $q, $injector, $state) {
        var service = {
            login: login,
            errors: [],
            isAuthenticated: isAuthenticated,
            createAuthUser: createAuthUser,
            destroyAuthUser: destroyAuthUser,
            getAuthUser: getAuthUser,
            logout: logout
        }

        return service;

        ////////////////

        function logout() {
            $auth.logout().then(function() {
                destroyAuthUser();
            });
        }

        function login(credentials) {
            var d = $q.defer();

            // var credentials = {
            //     email: email,
            //     password: password
            // }

            // $auth.submitLogin(credentials).then(function(response) {
            //     console.log(response);
            //     if (typeof response === 'undefined' || response === false) {
            //         d.reject();
            //     } else {
            //         var user = JSON.stringify(response.data.user);

            //         localStorage.setItem('user', user);
            //         $rootScope.authenticated = true;
            //         $rootScope.currentUser = response.data.user;

            //         d.resolve(response);
            //     }
            // }).catch(function(err) {
            //     console.log(err);
            //     service.errors = err.errors;
            //     d.reject(service.errors);
            //     //throw (service.errors);
            //     d.reject();
            // });


            $auth.login(credentials).then(function(data) {
                var headers = data.headers();

                //console.log(headers["access-token"]);
                $auth.setToken(headers["access-token"]);
                return data;
                //return $http.get('api/authenticate/user');
            }, function(err) {
                console.log(err);
                service.errors = err;
                d.reject(err);
                throw (err);
            }).then(function(response) {
                if (typeof response === 'undefined' || response === false) {
                    d.reject();
                } else {
                    var user = JSON.stringify(response.data.user);

                    localStorage.setItem('user', user);
                    $rootScope.authenticated = true;
                    $rootScope.currentUser = response.data.user;

                    d.resolve();
                }

            });

            // $auth.login(credentials).then(function(r) {
            //     console.log(r);
            // }).catch(function(e) {
            //     console.log(e)
            // });

            return d.promise;
        }

        function isAuthenticated() {
            var d = $q.defer();
            var $state = $injector.get('$state');
            if ($auth.isAuthenticated()) {
                //if ($auth.validateUser()) {
                d.resolve();
            } else {
                d.reject();
                $state.go('auth');
            }

            return d.promise;
        }

        function createAuthUser() {
            var user = JSON.parse(localStorage.getItem('user'));
            if (user && $auth.isAuthenticated()) {
                $rootScope.authenticated = true;
                $rootScope.currentUser = user;
            }
        }

        function destroyAuthUser() {
            $auth.logout();
            localStorage.removeItem('user');
            $rootScope.authenticated = false;
            $rootScope.currentUser = null;
            $state.go('auth');
        }

        function getAuthUser() {
            if (service.isAuthenticated) {
                return JSON.parse(localStorage.getItem('user'));
            }

            return null;
        }
    }

})();
(function() {
    'use strict';

    angular.module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['AuthService', '$state'];

    /* @ngInject */
    function LoginController(AuthService, $state) {
        var vm = this;

        //vm.email = "";
        //vm.password = "";
        vm.form;
        vm.login = login;

        ///////////

        function login() {

            AuthService.login(vm.form).then(function(response) {
                $state.go('dashboard');
            }, function(error) {
                vm.loginError = true;
                vm.loginErrorText = error;
            });
        }
    }
})();
(function() {
    'use strict';

    angular.module('app')
        .controller('DashboardController', DashboardController);

    //DashboardController.$inject = ['HelperService'];

    /* @ngInject */
    function DashboardController() {
        var vm = this;

        //vm.users = usersPrepService;
        vm.getUsers = getUsers;

        activate();

        //////////////

        function activate() {
            //return getUsers();
        }

        function getUsers() {
            // return UserService.getUsers().then(function(data) {
            //     vm.users = data;
            //     return vm.users;
            // });
        }
    }
})();
(function(){
    'use strict';
    
    angular.module('app')
            .controller('UserController', UserController);
    
    UserController.$inject = ['CONST']
    
    function UserController(CONST){
        
    }
    
})();
(function() {
    'use strict';

    angular.module('app')
        .factory('UserService', UserService);

    UserService.$inject = ['$http', 'CONST', '$q'];

    /* @ngInject */
    function UserService($http, CONST, $q) {
        var api = CONST.api_domain + 'user/';
        var d = $q.defer();

        var service = {
            users: [],
            errors: [],
            getUsers: getUsers
        }

        return service;

        ////////////////

        function getUsers() {
            var d = $q.defer();

            $http.get(api)
                .then(function(data) {
                    d.resolve(data.data);
                })
                .catch(function(error) {
                    service.errors = error;
                    d.reject();
                });

            return d.promise;
        }
    }

})();