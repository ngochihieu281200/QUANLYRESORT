(function(){for(var l,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ba="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ca=["Object",
"assign"],ea=0;ea<ca.length-1;ea++){var fa=ca[ea];fa in ba||(ba[fa]={});ba=ba[fa]}var ga=ca[ca.length-1],ia=ba[ga],ja=ia?ia:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};
ja!=ia&&null!=ja&&aa(ba,ga,{configurable:!0,writable:!0,value:ja});var n=this;function p(a){return void 0!==a}
function q(a,b,c){a=a.split(".");c=c||n;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]?c=c[d]:c=c[d]={}}
function r(a,b){for(var c=a.split("."),d=b||n,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function t(){}
function ka(a){a.getInstance=function(){return a.Ja?a.Ja:a.Ja=new a}}
function la(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ma(a){return"array"==la(a)}
function na(a){var b=la(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function v(a){return"string"==typeof a}
function oa(a){return"function"==la(a)}
function pa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function qa(a){return a[ra]||(a[ra]=++sa)}
var ra="closure_uid_"+(1E9*Math.random()>>>0),sa=0;function ta(a,b,c){return a.call.apply(a.bind,arguments)}
function ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function w(a,b,c){w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ta:ua;return w.apply(null,arguments)}
function va(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
function wa(a,b){for(var c in b)a[c]=b[c]}
var x=Date.now||function(){return+new Date};
function y(a,b){function c(){}
c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.fc=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;function xa(a,b,c){this.i=c;this.g=a;this.j=b;this.f=0;this.b=null}
xa.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a};
function ya(a,b){a.j(b);a.f<a.i&&(a.f++,b.next=a.b,a.b=b)}
;function za(a){if(Error.captureStackTrace)Error.captureStackTrace(this,za);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
y(za,Error);za.prototype.name="CustomError";var Aa;function Da(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function Ea(a){a=String(a);if(Da(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function Fa(a){return eval("("+a+")")}
function Ga(a){var b=[];Ha(new Ia,a,b);return b.join("")}
function Ia(){}
function Ha(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ma(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],Ha(a,e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),Ja(d,c),c.push(":"),Ha(a,e,c),f=","));c.push("}");return}}switch(typeof b){case "string":Ja(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ka={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},La=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function Ja(a,b){b.push('"',a.replace(La,function(a){var b=Ka[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Ka[a]=b);return b}),'"')}
;function Ma(a,b){this.width=a;this.height=b}
l=Ma.prototype;l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Na(a){this.b=a||{cookie:""}}
var Oa=/\s*;\s*/;l=Na.prototype;l.isEnabled=function(){return navigator.cookieEnabled};
l.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(x()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
l.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(Oa),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
l.isEmpty=function(){return!this.b.cookie};
l.ba=function(){return this.b.cookie?(this.b.cookie||"").split(Oa).length:0};
l.clear=function(){for(var a=(this.b.cookie||"").split(Oa),b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Pa=new Na("undefined"==typeof document?null:document);Pa.f=3950;function Qa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ra(a){var b=Sa,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Ta(){var a=Ua,b;for(b in a)return!1;return!0}
function Va(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Wa(a){var b={},c;for(c in a)b[c]=a[c];return b}
var Xa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ya(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Xa.length;f++)c=Xa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Za(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
;function $a(a,b){var c=ab;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;function bb(a){return/^[\s\xa0]*$/.test(a)}
var cb=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function db(a,b){return a<b?-1:a>b?1:0}
function eb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var fb=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",fb,void 0);q("yt.tokens_",window.yt&&window.yt.tokens_||{},void 0);var gb=window.yt&&window.yt.msgs_||r("window.ytcfg.msgs")||{};q("yt.msgs_",gb,void 0);function z(a){hb(fb,arguments)}
function A(a,b){return a in fb?fb[a]:b}
function B(a,b){oa(a)&&(a=ib(a));return window.setTimeout(a,b)}
function jb(a){window.clearTimeout(a)}
function ib(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){kb(b)}}:a}
function kb(a,b){var c=r("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=A("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),z("ERRORS",c))}
function hb(a,b){if(1<b.length){var c=b[0];a[c]=b[1]}else{var d=b[0];for(c in d)a[c]=d[c]}}
var lb=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},mb="Microsoft Internet Explorer"==navigator.appName;function nb(a,b,c){a&&(a.dataset?a.dataset[ob(b)]=c:a.setAttribute("data-"+b,c))}
function C(a,b){return a?a.dataset?a.dataset[ob(b)]:a.getAttribute("data-"+b):null}
function qb(a,b){a&&(a.dataset?delete a.dataset[ob(b)]:a.removeAttribute("data-"+b))}
var rb={};function ob(a){return rb[a]||(rb[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;var sb=null;"undefined"!=typeof XMLHttpRequest?sb=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(sb=function(){return new ActiveXObject("Microsoft.XMLHTTP")});
function tb(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function D(){this.S=this.S;this.K=this.K}
D.prototype.S=!1;D.prototype.isDisposed=function(){return this.S};
D.prototype.dispose=function(){this.S||(this.S=!0,this.w())};
function ub(a,b){a.S?p(void 0)?b.call(void 0):b():(a.K||(a.K=[]),a.K.push(p(void 0)?w(b,void 0):b))}
D.prototype.w=function(){if(this.K)for(;this.K.length;)this.K.shift()()};
function vb(a){a&&"function"==typeof a.dispose&&a.dispose()}
function wb(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];na(d)?wb.apply(null,d):vb(d)}}
;var E;a:{var xb=n.navigator;if(xb){var yb=xb.userAgent;if(yb){E=yb;break a}}E=""}function F(a){return-1!=E.indexOf(a)}
;var zb=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(v(a))return v(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ab=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=v(a)?a.split(""):a,k=0;k<d;k++)if(k in g){var h=g[k];
b.call(c,h,k,a)&&(e[f++]=h)}return e},Bb=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=v(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},Cb=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=v(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
function Db(a,b){var c;a:{c=a.length;for(var d=v(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:v(a)?a.charAt(c):a[c]}
function Eb(a,b){return 0<=zb(a,b)}
function Fb(a,b){var c=zb(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Gb(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function Hb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ib(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(na(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Jb(a,b,c,d){return Array.prototype.splice.apply(a,Kb(arguments,1))}
function Kb(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
;function Lb(){this.f=this.b=null}
var Nb=new xa(function(){return new Mb},function(a){a.reset()},100);
Lb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Mb(){this.next=this.scope=this.b=null}
Mb.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Mb.prototype.reset=function(){this.next=this.scope=this.b=null};function Ob(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;var Pb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function H(a){return a.match(Pb)}
function Qb(a){return a?decodeURI(a):a}
function Rb(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function Sb(a,b,c){if(ma(b))for(var d=0;d<b.length;d++)Sb(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function Tb(a,b,c){for(c=c||0;c<b.length;c+=2)Sb(b[c],b[c+1],a);return a}
function Ub(a,b){for(var c in b)Sb(c,b[c],a);return a}
function Vb(a){a=Ub([],a);a[0]="";return a.join("")}
function Wb(a,b){return Rb(2==arguments.length?Tb([a],arguments[1],0):Tb([a],arguments,1))}
;function Xb(){this.b="";this.f=Yb}
Xb.prototype.va=!0;Xb.prototype.ua=function(){return this.b};
function Zb(a){return a instanceof Xb&&a.constructor===Xb&&a.f===Yb?a.b:"type_error:SafeUrl"}
var $b=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function ac(a){if(a instanceof Xb)return a;a=a.va?a.ua():String(a);$b.test(a)||(a="about:invalid#zClosurez");return bc(a)}
var Yb={};function bc(a){var b=new Xb;b.b=a;return b}
bc("about:blank");function cc(){this.b="";this.f=dc}
cc.prototype.va=!0;cc.prototype.ua=function(){return this.b};
var dc={};function ec(){return(F("Chrome")||F("CriOS"))&&!F("Edge")}
;function fc(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?ma(b[f])?Ib(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function gc(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=fc(d[1]||""),e;for(e in b)d[e]=b[e];return Rb(Ub([a],d))+c}
;function hc(a){n.setTimeout(function(){throw a;},0)}
var ic;
function jc(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=w(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!F("Trident")&&!F("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.Ha;c.Ha=null;a()}};
return function(a){d.next={Ha:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}}
;function kc(){this.b=""}
kc.prototype.va=!0;kc.prototype.ua=function(){return this.b};
function lc(a){var b=new kc;b.b=a;return b}
lc("<!DOCTYPE html>");lc("");lc("<br>");var mc="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function nc(){}
nc.prototype.next=function(){throw mc;};
nc.prototype.aa=function(){return this};
function oc(a){if(a instanceof nc)return a;if("function"==typeof a.aa)return a.aa(!1);if(na(a)){var b=0,c=new nc;c.next=function(){for(;;){if(b>=a.length)throw mc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function pc(a,b){if(na(a))try{G(a,b,void 0)}catch(c){if(c!==mc)throw c;}else{a=oc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==mc)throw c;}}}
function qc(a){if(na(a))return Hb(a);a=oc(a);var b=[];pc(a,function(a){b.push(a)});
return b}
;function I(a,b){this.l=p(a)?a:0;this.o=p(b)?b:0}
I.prototype.equals=function(a){return a instanceof I&&(this==a?!0:this&&a?this.l==a.l&&this.o==a.o:!1)};
I.prototype.ceil=function(){this.l=Math.ceil(this.l);this.o=Math.ceil(this.o);return this};
I.prototype.floor=function(){this.l=Math.floor(this.l);this.o=Math.floor(this.o);return this};
I.prototype.round=function(){this.l=Math.round(this.l);this.o=Math.round(this.o);return this};var rc=F("Opera"),J=F("Trident")||F("MSIE"),sc=F("Edge"),tc=F("Gecko")&&!(-1!=E.toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),uc=-1!=E.toLowerCase().indexOf("webkit")&&!F("Edge"),wc=F("Macintosh"),xc=F("Windows"),yc=F("Android"),zc=Ob(),Ac=F("iPad"),Bc=F("iPod");function Cc(){var a=n.document;return a?a.documentMode:void 0}
var Dc;a:{var Ec="",Fc=function(){var a=E;if(tc)return/rv\:([^\);]+)(\)|;)/.exec(a);if(sc)return/Edge\/([\d\.]+)/.exec(a);if(J)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(uc)return/WebKit\/(\S+)/.exec(a);if(rc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Fc&&(Ec=Fc?Fc[1]:"");if(J){var Gc=Cc();if(null!=Gc&&Gc>parseFloat(Ec)){Dc=String(Gc);break a}}Dc=Ec}var Hc=Dc,ab={};
function K(a){return $a(a,function(){for(var b=0,c=cb(String(Hc)).split("."),d=cb(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==g[0].length&&0==k[0].length)break;b=db(0==g[1].length?0:parseInt(g[1],10),0==k[1].length?0:parseInt(k[1],10))||db(0==g[2].length,0==k[2].length)||db(g[2],k[2]);g=g[3];k=k[3]}while(0==b)}return 0<=b})}
var Ic;var Jc=n.document;Ic=Jc&&J?Cc()||("CSS1Compat"==Jc.compatMode?parseInt(Hc,10):5):void 0;function Kc(a,b){Lc||Mc();Nc||(Lc(),Nc=!0);var c=Oc,d=Nb.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var Lc;function Mc(){var a=n.Promise;if(-1!=String(a).indexOf("[native code]")){var b=a.resolve(void 0);Lc=function(){b.then(Pc)}}else Lc=function(){var a=Pc;
!oa(n.setImmediate)||n.Window&&n.Window.prototype&&!F("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(ic||(ic=jc()),ic(a)):n.setImmediate(a)}}
var Nc=!1,Oc=new Lb;function Pc(){for(var a;a=Oc.remove();){try{a.b.call(a.scope)}catch(b){hc(b)}ya(Nb,a)}Nc=!1}
;!tc&&!J||J&&9<=Number(Ic)||tc&&K("1.9.1");var Qc=J&&!K("9");function Rc(a,b){var c;c=b instanceof Xb?b:ac(b);a.href=Zb(c)}
function Sc(a,b){a.rel="stylesheet";a.href=b instanceof cc&&b.constructor===cc&&b.f===dc?b.b:"type_error:TrustedResourceUrl"}
;function Tc(a){Uc();var b=new cc;b.b=a;return b}
var Uc=t;var Vc=F("Firefox"),Wc=Ob()||F("iPod"),Xc=F("iPad"),Yc=F("Android")&&!(ec()||F("Firefox")||F("Opera")||F("Silk")),Zc=ec(),$c=F("Safari")&&!(ec()||F("Coast")||F("Opera")||F("Edge")||F("Silk")||F("Android"))&&!(Ob()||F("iPad")||F("iPod"));function ad(a){return a?new bd(cd(a)):Aa||(Aa=new bd)}
function dd(a){var b=document;return v(a)?b.getElementById(a):a}
function ed(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):fd(a)}
function fd(a){var b,c,d,e;b=document;if(b.querySelectorAll&&b.querySelector&&a)return b.querySelectorAll(""+(a?"."+a:""));if(a&&b.getElementsByClassName){var f=b.getElementsByClassName(a);return f}f=b.getElementsByTagName("*");if(a){e={};for(c=d=0;b=f[c];c++){var g=b.className;"function"==typeof g.split&&Eb(g.split(/\s+/),a)&&(e[d++]=b)}e.length=d;return e}return f}
function gd(a){a=a.document;a=hd(a)?a.documentElement:a.body;return new Ma(a.clientWidth,a.clientHeight)}
function id(a){var b=a.scrollingElement?a.scrollingElement:!uc&&hd(a)?a.documentElement:a.body||a.documentElement;a=a.parentWindow||a.defaultView;return J&&K("10")&&a.pageYOffset!=b.scrollTop?new I(b.scrollLeft,b.scrollTop):new I(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function hd(a){return"CSS1Compat"==a.compatMode}
function jd(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function kd(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function ld(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function cd(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function md(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else jd(a),a.appendChild(cd(a).createTextNode(String(b)))}
var nd={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},od={IMG:" ",BR:"\n"};function pd(a){if(Qc&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];qd(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Qc||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function qd(a,b,c){if(!(a.nodeName in nd))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in od)b.push(od[a.nodeName]);else for(a=a.firstChild;a;)qd(a,b,c),a=a.nextSibling}
function rd(a){var b=sd.ab;return b?td(a,function(a){return!b||v(a.className)&&Eb(a.className.split(/\s+/),b)},!0,void 0):null}
function td(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function bd(a){this.b=a||n.document||document}
bd.prototype.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
bd.prototype.createElement=function(a){return this.b.createElement(String(a))};
bd.prototype.isElement=function(a){return pa(a)&&1==a.nodeType};
bd.prototype.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};function L(a,b){this.b=0;this.D=void 0;this.i=this.f=this.g=null;this.j=this.A=!1;if(a!=t)try{var c=this;a.call(b,function(a){ud(c,2,a)},function(a){ud(c,3,a)})}catch(d){ud(this,3,d)}}
function vd(){this.next=this.context=this.f=this.g=this.b=null;this.i=!1}
vd.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.i=!1};
var wd=new xa(function(){return new vd},function(a){a.reset()},100);
function xd(a,b,c){var d=wd.get();d.g=a;d.f=b;d.context=c;return d}
function yd(a){if(a instanceof L)return a;var b=new L(t);ud(b,2,a);return b}
function zd(a){return new L(function(b,c){c(a)})}
L.prototype.then=function(a,b,c){return Ad(this,oa(a)?a:null,oa(b)?b:null,c)};
Za(L);L.prototype.cancel=function(a){0==this.b&&Kc(function(){var b=new Bd(a);Cd(this,b)},this)};
function Cd(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.i||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Cd(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Dd(c),Ed(c,e,3,b)))}a.g=null}else ud(a,3,b)}
function Fd(a,b){a.f||2!=a.b&&3!=a.b||Gd(a);a.i?a.i.next=b:a.f=b;a.i=b}
function Ad(a,b,c,d){var e=xd(null,null,null);e.b=new L(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof Bd?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;Fd(a,e);return e.b}
L.prototype.K=function(a){this.b=0;ud(this,2,a)};
L.prototype.J=function(a){this.b=0;ud(this,3,a)};
function ud(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;var d;a:{var e=c,f=a.K,g=a.J;if(e instanceof L)Fd(e,xd(f||t,g||null,a)),d=!0;else{var k;if(e)try{k=!!e.$goog_Thenable}catch(m){k=!1}else k=!1;if(k)e.then(f,g,a),d=!0;else{if(pa(e))try{var h=e.then;if(oa(h)){Hd(e,h,f,g,a);d=!0;break a}}catch(m){g.call(a,m);d=!0;break a}d=!1}}}d||(a.D=c,a.b=b,a.g=null,Gd(a),3!=b||c instanceof Bd||Id(a,c))}}
function Hd(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}
function g(a){k||(k=!0,c.call(e,a))}
var k=!1;try{b.call(a,g,f)}catch(h){f(h)}}
function Gd(a){a.A||(a.A=!0,Kc(a.H,a))}
function Dd(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.i=null);return b}
L.prototype.H=function(){for(var a;a=Dd(this);)Ed(this,a,this.b,this.D);this.A=!1};
function Ed(a,b,c,d){if(3==c&&b.f&&!b.i)for(;a&&a.j;a=a.g)a.j=!1;if(b.b)b.b.g=null,Jd(b,c,d);else try{b.i?b.g.call(b.context):Jd(b,c,d)}catch(e){Kd.call(null,e)}ya(wd,b)}
function Jd(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function Id(a,b){a.j=!0;Kc(function(){a.j&&Kd.call(null,b)})}
var Kd=hc;function Bd(a){za.call(this,a)}
y(Bd,za);Bd.prototype.name="cancel";function M(a){D.call(this);this.i=1;this.f=[];this.g=0;this.b=[];this.G={};this.j=!!a}
y(M,D);l=M.prototype;l.subscribe=function(a,b,c){var d=this.G[a];d||(d=this.G[a]=[]);var e=this.i;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.i=e+3;d.push(e);return e};
l.unsubscribe=function(a,b,c){if(a=this.G[a]){var d=this.b;if(a=Db(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.R(a)}return!1};
l.R=function(a){var b=this.b[a];if(b){var c=this.G[b];0!=this.g?(this.f.push(a),this.b[a+1]=t):(c&&Fb(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
l.M=function(a,b){var c=this.G[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.j)for(e=0;e<c.length;e++){var g=c[e];Ld(this.b[g+1],this.b[g+2],d)}else{this.g++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.g--,0<this.f.length&&0==this.g)for(;c=this.f.pop();)this.R(c)}}return 0!=e}return!1};
function Ld(a,b,c){Kc(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.G[a];b&&(G(b,this.R,this),delete this.G[a])}else this.b.length=0,this.G={}};
l.ba=function(a){if(a){var b=this.G[a];return b?b.length:0}a=0;for(b in this.G)a+=this.ba(b);return a};
l.w=function(){M.B.w.call(this);this.clear();this.f.length=0};var Md=r("yt.pubsub.instance_")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.R;M.prototype.publish=M.prototype.M;M.prototype.clear=M.prototype.clear;q("yt.pubsub.instance_",Md,void 0);var Od=r("yt.pubsub.subscribedKeys_")||{};q("yt.pubsub.subscribedKeys_",Od,void 0);var Pd=r("yt.pubsub.topicToKeys_")||{};q("yt.pubsub.topicToKeys_",Pd,void 0);var Qd=r("yt.pubsub.isSynchronous_")||{};q("yt.pubsub.isSynchronous_",Qd,void 0);
var Rd=r("yt.pubsub.skipSubId_")||null;q("yt.pubsub.skipSubId_",Rd,void 0);function Sd(a,b,c){var d=Td();if(d){var e=d.subscribe(a,function(){if(!Rd||Rd!=e){var d=arguments,g;g=function(){Od[e]&&b.apply(c||window,d)};
try{Qd[a]?g():B(g,0)}catch(k){kb(k)}}},c);
Od[e]=!0;Pd[a]||(Pd[a]=[]);Pd[a].push(e);return e}return 0}
function Ud(a){var b=Td();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),G(a,function(a){b.unsubscribeByKey(a);delete Od[a]}))}
function Vd(a,b){var c=Td();return c?c.publish.apply(c,arguments):!1}
function Wd(a){Pd[a]&&(a=Pd[a],G(a,function(a){Od[a]&&delete Od[a]}),a.length=0)}
function Xd(a){var b=Td();if(b)if(b.clear(a),a)Wd(a);else for(var c in Pd)Wd(c)}
function Td(){return r("yt.pubsub.instance_")}
;function Yd(a,b,c,d,e,f,g){function k(){4==(h&&"readyState"in h?h.readyState:0)&&b&&ib(b)(h)}
var h=sb&&sb();if(!("open"in h))return null;"onloadend"in h?h.addEventListener("loadend",k,!1):h.onreadystatechange=k;c=(c||"GET").toUpperCase();d=d||"";h.open(c,a,!0);f&&(h.responseType=f);g&&(h.withCredentials=!0);f="POST"==c;if(e=Zd(a,e))for(var m in e)h.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(f=!1);f&&h.setRequestHeader("Content-Type","application/x-www-form-urlencoded");h.send(d);return h}
function Zd(a,b){b=b||{};var c;c||(c=window.location.href);var d=H(a)[1]||null,e=Qb(H(a)[3]||null);d&&e?(d=c,c=H(a),d=H(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Qb(H(c)[3]||null)==e&&(Number(H(c)[4]||null)||null)==(Number(H(a)[4]||null)||null):!0;for(var f in $d){if((e=d=A($d[f]))&&!(e=c)){var e=f,g=A("CORS_HEADER_WHITELIST")||{},k=Qb(H(a)[3]||null);e=k?(g=g[k])?Eb(g,e):!1:!0}e&&(b[f]=d)}return b}
function ae(a,b){b.method="POST";b.C||(b.C={});be(a,b)}
function ce(a,b){var c=A("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.hc&&(!Qb(H(a)[3]||null)||b.withCredentials||Qb(H(a)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.C&&b.C[c])}
function be(a,b){var c=b.format||"JSON";b.tb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=A("XSRF_FIELD_NAME",void 0),e=A("XSRF_TOKEN",void 0),f=b.xa;f&&(f[d]&&delete f[d],a=gc(a,f||{}));var g=b.postBody||"",f=b.C;ce(a,b)&&(f||(f={}),f[d]=e);f&&v(g)&&(d=fc(g),Ya(d,f),g=b.Pa&&"JSON"==b.Pa?JSON.stringify(d):Vb(d));var k=!1,h,m=Yd(a,function(a){if(!k){k=!0;h&&jb(h);var d=tb(a),e=null;if(d||400<=a.status&&500>a.status)e=
de(c,a,b.gc);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||n;d?b.F&&b.F.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.wa&&b.wa.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.O&&0<b.timeout&&(h=B(function(){k||(k=!0,m.abort(),jb(h),b.O.call(b.context||n,m))},b.timeout))}
function de(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=Fa(a));break;case "XML":if(b=(b=b.responseXML)?ee(b):null)d={},G(b.getElementsByTagName("*"),function(a){d[a.tagName]=fe(a)})}c&&ge(d);
return d}
function ge(a){if(pa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d;d=lc(a[b]);a[c]=d}else ge(a[b])}}
function ee(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function fe(a){var b="";G(a.childNodes,function(a){b+=a.nodeValue});
return b}
var $d={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};function he(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(ie,""),c=c.replace(je,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else ke(a,b)}
function ke(a,b){var c=le(a),d=document.getElementById(c),e=d&&C(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){var e=Sd(c,b),g=""+qa(b);me[g]=e}f||(d=ne(a,c,function(){C(d,"loaded")||(nb(d,"loaded","true"),Vd(c),B(va(Xd,c),0))}))}}
function ne(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function oe(a,b){if(a&&b){var c=""+qa(b);(c=me[c])&&Ud(c)}}
function le(a){var b=document.createElement("a");Rc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+eb(a)}
var ie=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,je=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/,me={};function pe(a){if(window.spf){var b=a.match(qe);spf.style.load(a,b?b[1]:"",void 0)}else re(a)}
function re(a){var b=se(a),c=document.getElementById(b),d=c&&C(c,"loaded");d||c&&!d||(c=te(a,b,function(){C(c,"loaded")||(nb(c,"loaded","true"),Vd(b),B(va(Xd,b),0))}))}
function te(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Tc(a);Sc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function se(a){var b=document.createElement("a");Rc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+eb(a)}
var qe=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;var ue={},ve=0;function we(a,b){a&&(A("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?Yd(a,b):xe(a,b))}
function xe(a,b){var c=new Image,d=""+ve++;ue[d]=c;c.onload=c.onerror=function(){b&&ue[d]&&b();delete ue[d]};
c.src=a}
;function ye(){var a=Wa(ze);return new L(function(b,c){a.F=function(a){tb(a)?b(a):c(new Ae("Request failed, status="+a.status,"net.badstatus"))};
a.onError=function(){c(new Ae("Unknown request error","net.unknown"))};
a.O=function(){c(new Ae("Request timed out","net.timeout"))};
be("//googleads.g.doubleclick.net/pagead/id",a)})}
function Ae(a,b){za.call(this,a+", errorCode="+b);this.errorCode=b}
y(Ae,za);Ae.prototype.name="PromiseAjaxError";var Be=null;function Ce(){var a=A("BG_I",null),b=A("BG_IU",null),c=A("BG_P",void 0);b?he(b,function(){Be=new botguard.bg(c)}):a&&(eval(a),Be=new botguard.bg(c))}
function De(){return null!=Be}
function Ee(){return Be?Be.invoke():null}
;function Fe(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1),b=b.substring(0,d);
if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Ge(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;u=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],f=e[2],h=e[3],k=e[4],m,u,c=0;80>c;c++)40>c?20>c?(m=h^d&(f^h),u=1518500249):(m=d^f^h,u=1859775393):60>c?(m=d&f|h&(d|f),u=2400959708):(m=d^f^h,u=3395469782),m=((a<<5|a>>>27)&4294967295)+m+k+u+b[c]&4294967295,k=h,h=f,f=(d<<30|d>>>2)&4294967295,d=a,a=m;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;
e[3]=e[3]+h&4294967295;e[4]=e[4]+k&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64;for(;d<c;)if(f[m++]=a[d++],u++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64}
function d(){var a=[],d=8*u;56>m?c(k,56-m):c(k,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var h=24;0<=h;h-=8)a[d++]=e[g]>>h&255;return a}
for(var e=[],f=[],g=[],k=[128],h=1;64>h;++h)k[h]=0;var m,u;a();return{reset:a,update:c,digest:d,lb:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var He=window,Ie=document,Je=He.location;function Ke(){}
var Le=/\[native code\]/;function N(a,b,c){return a[b]=a[b]||c}
function Me(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function Ne(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function O(){var a;if((a=Object.create)&&Le.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Oe=N(He,"gapi",{});function Pe(){}
;function Qe(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Re||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==
this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Qe.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Qe.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Qe.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};
var Re={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};function Se(a,b,c){this.b=a;this.g=b;this.f=c}
var Te=1;function Ue(a){var b={};void 0!==a.b?b.trackingParams=a.b:(b.veType=a.g,null!=a.f&&(b.veCounter=a.f));return b}
;function Ve(a){this.b=a}
Ve.prototype.set=function(a,b){p(b)?this.b.set(a,Ga(b)):this.b.remove(a)};
Ve.prototype.get=function(a){var b;try{b=this.b.get(a)}catch(c){return}if(null!==b)try{return Ea(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ve.prototype.remove=function(a){this.b.remove(a)};function We(a){return A("EXPERIMENT_FLAGS",{})[a]}
;function Xe(){return{apiaryHost:A("APIARY_HOST",void 0),Fa:A("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:A("GAPI_HINT_OVERRIDE"),gapiHintParams:A("GAPI_HINT_PARAMS",void 0),innertubeApiKey:A("INNERTUBE_API_KEY",void 0),innertubeApiVersion:A("INNERTUBE_API_VERSION",void 0),ub:A("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:A("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),wb:A("INNERTUBE_CONTEXT_HL",void 0),vb:A("INNERTUBE_CONTEXT_GL",void 0),Wb:A("XHR_APIARY_HOST",void 0)}}
function Ye(a){a={client:{hl:a.wb,gl:a.vb,clientName:a.ub,clientVersion:a.innertubeContextClientVersion}};A("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:A("DELEGATED_SESSION_ID")});return a}
;var P;P=N(He,"___jsl",O());N(P,"I",0);N(P,"hel",10);function Ze(){var a=Je.href,b;if(P.dpo)b=P.h;else{b=P.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function $e(a){var b=N(P,"PQ",[]);P.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function af(a){return N(N(P,"H",O()),a,O())}
;function bf(a){this.b=a}
y(bf,Ve);function cf(a){this.data=a}
function df(a){return!p(a)||a instanceof cf?a:new cf(a)}
bf.prototype.set=function(a,b){bf.B.set.call(this,a,df(b))};
bf.prototype.f=function(a){a=bf.B.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
bf.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ef(a,b,c){var d=[],e=[];if(1==(ma(c)?2:1))return e=[b,a],G(d,function(a){e.push(a)}),ff(e.join(" "));
var f=[],g=[];G(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];G(d,function(a){e.push(a)});
a=ff(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function ff(a){var b=Ge();b.update(a);return b.lb().toLowerCase()}
;var gf=N(P,"perf",O());N(gf,"g",O());var hf=N(gf,"i",O());N(gf,"r",[]);O();O();function jf(a,b,c){b&&0<b.length&&(b=kf(b),c&&0<c.length&&(b+="___"+kf(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=N(hf,"_p",O()),N(b,c,O())[a]=(new Date).getTime(),b=gf.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function kf(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;function lf(a){if(a.classList)return a.classList;a=a.className;return v(a)&&a.match(/\S+/g)||[]}
function mf(a,b){return a.classList?a.classList.contains(b):Eb(lf(a),b)}
function nf(a,b){a.classList?a.classList.add(b):mf(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function of(a,b){a.classList?a.classList.remove(b):mf(a,b)&&(a.className=Ab(lf(a),function(a){return a!=b}).join(" "))}
function pf(a,b,c){c?nf(a,b):of(a,b)}
;function qf(a){this.b=a}
y(qf,bf);qf.prototype.set=function(a,b,c){if(b=df(b)){if(c){if(c<x()){qf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=x()}qf.B.set.call(this,a,b)};
qf.prototype.f=function(a,b){var c=qf.B.f.call(this,a);if(c){var d;if(d=!b){d=c.creation;var e=c.expiration;d=!!e&&e<x()||!!d&&d>x()}if(d)qf.prototype.remove.call(this,a);else return c}};var rf=O(),sf=[];function tf(a){throw Error("Bad hint"+(a?": "+a:""));}
sf.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?P[b]=N(P,b,[]).concat(c):N(P,b,c)}if(b=a.u)a=N(P,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var uf=/^(\/[a-zA-Z0-9_\-]+)+$/,vf=/^[a-zA-Z0-9\-_\.,!]+$/,wf=/^gapi\.loaded_[0-9]+$/,xf=/^[a-zA-Z0-9,._-]+$/;function yf(a,b,c,d){var e=a.split(";"),f=e.shift(),g=rf[f],k=null;g?k=g(e,b,c,d):tf("no hint processor for: "+f);k||tf("failed to generate load url");b=k;c=b.match(zf);(d=b.match(Af))&&1===d.length&&Bf.test(b)&&c&&1===c.length||tf("failed sanity: "+a);return k}
function Cf(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=Df(a);wf.test(c)||tf("invalid_callback");b=Ef(b);d=d&&d.length?Ef(d):null;return[encodeURIComponent(a.Kb).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.Ea?"/am="+e(a.Ea):"",a.Ra?"/rs="+e(a.Ra):"",a.Ya?"/t="+e(a.Ya):"","/cb=",e(c)].join("")}
function Df(a){"/"!==a.charAt(0)&&tf("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))tf("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),k=decodeURIComponent(f[1]);2==f.length&&g&&k&&(a[g]=a[g]||k)}b="/"+c.join("/");uf.test(b)||tf("invalid_prefix");c=Ff(a,"k",!0);d=Ff(a,"am");e=Ff(a,"rs");a=Ff(a,"t");return{Kb:b,version:c,
Ea:d,Ra:e,Ya:a}}
function Ef(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");xf.test(e)&&b.push(e)}return b.join(",")}
function Ff(a,b,c){a=a[b];!a&&c&&tf("missing: "+b);if(a){if(vf.test(a))return a;tf("invalid: "+b)}return null}
var Bf=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Af=/\/cb=/g,zf=/\/\//g;function Gf(){var a=Ze();if(!a)throw Error("Bad hint");return a}
rf.m=function(a,b,c,d){(a=a[0])||tf("missing_hint");return"https://apis.google.com"+Cf(a,b,c,d)};
var Hf=decodeURI("%73cript"),If=/^[-+_0-9\/A-Za-z]+={0,2}$/;function Jf(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>Me.call(b,e)&&c.push(e)}return c}
function Kf(){var a=P.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(If)?a:P.nonce=null;var b=N(P,"us",[]);if(!b||!b.length)return P.nonce=null;for(var c=Ie.getElementsByTagName(Hf),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.getAttribute("nonce")||"")||null)){for(var g=0,k=b.length;g<k&&b[g]!==f.src;++g);if(g!==k&&a&&a===String(a)&&a.match(If))return P.nonce=a}}return null}
function Lf(a){if("loading"!=Ie.readyState)Mf(a);else{var b=Kf(),c="";null!==b&&(c=' nonce="'+b+'"');Ie.write("<"+Hf+' src="'+encodeURI(a)+'"'+c+"></"+Hf+">")}}
function Mf(a){var b=Ie.createElement(Hf);b.setAttribute("src",a);a=Kf();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Ie.getElementsByTagName(Hf)[0])?a.parentNode.insertBefore(b,a):(Ie.head||Ie.body||Ie.documentElement).appendChild(b)}
function Nf(a,b){var c=b&&b._c;if(c)for(var d=0;d<sf.length;d++){var e=sf[d][0],f=sf[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Of(a,b,c){Pf(function(){var c;c=b===Ze()?N(Oe,"_",O()):O();c=N(af(b),"_",c);a(c)},c)}
function Qf(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Nf(a,c);var d=a?a.split(":"):[],e=c.h||Gf(),f=N(P,"ah",O());if(f["::"]&&d.length){for(var g=[],k=null;k=d.shift();){var h=k.split("."),h=f[k]||f[h[1]&&"ns:"+h[0]||""]||e,m=g.length&&g[g.length-1]||null,u=m;m&&m.hint==h||(u={hint:h,features:[]},g.push(u));u.features.push(k)}var da=g.length;if(1<da){var pb=c.callback;pb&&(c.callback=function(){0==--da&&pb()})}for(;d=g.shift();)Rf(d.features,c,d.hint)}else Rf(d||[],c,e)}
function Rf(a,b,c){function d(a,b){if(da)return 0;He.clearTimeout(u);pb.push.apply(pb,ha);var d=((Oe||{}).config||{}).update;d?d(f):f&&N(P,"cu",[]).push(f);if(b){jf("me0",a,vc);try{Of(b,c,m)}finally{jf("me1",a,vc)}}return 1}
a=Ne(a)||[];var e=b.callback,f=b.config,g=b.timeout,k=b.ontimeout,h=b.onerror,m=void 0;"function"==typeof h&&(m=h);var u=null,da=!1;if(g&&!k||!g&&k)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var h=N(af(c),"r",[]).sort(),pb=N(af(c),"L",[]).sort(),vc=[].concat(h);0<g&&(u=He.setTimeout(function(){da=!0;k()},g));
var ha=Jf(a,pb);if(ha.length){var ha=Jf(a,h),Ba=N(P,"CP",[]),Ca=Ba.length;Ba[Ca]=function(a){function b(){var a=Ba[Ca+1];a&&a()}
function c(b){Ba[Ca]=null;d(ha,a)&&$e(function(){e&&e();b()})}
if(!a)return 0;jf("ml1",ha,vc);0<Ca&&Ba[Ca-1]?Ba[Ca]=function(){c(b)}:c(b)};
if(ha.length){var Nd="loaded_"+P.I++;Oe[Nd]=function(a){Ba[Ca](a);Oe[Nd]=null};
a=yf(c,ha,"gapi."+Nd,h);h.push.apply(h,ha);jf("ml0",ha,vc);b.sync||He.___gapisync?Lf(a):Mf(a)}else Ba[Ca](Ke)}else d(ha)&&e&&e()}
function Pf(a,b){if(P.hee&&0<P.hel)try{return a()}catch(c){b&&b(c),P.hel--,Qf("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Oe.load=function(a,b){return Pf(function(){return Qf(a,b)})};function Sf(a){this.b=a}
y(Sf,qf);function Tf(){}
y(Tf,Pe);Tf.prototype.ba=function(){var a=0;pc(this.aa(!0),function(){a++});
return a};
Tf.prototype.clear=function(){var a=qc(this.aa(!0)),b=this;G(a,function(a){b.remove(a)})};function Uf(a){this.b=a}
y(Uf,Tf);l=Uf.prototype;l.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.b.getItem(a);if(!v(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.b.removeItem(a)};
l.ba=function(){return this.b.length};
l.aa=function(a){var b=0,c=this.b,d=new nc;d.next=function(){if(b>=c.length)throw mc;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!v(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
l.clear=function(){this.b.clear()};
l.key=function(a){return this.b.key(a)};function Vf(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
y(Vf,Uf);function Wf(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
y(Wf,Uf);var Xf=r("yt.dom.getNextId_");if(!Xf){Xf=function(){return++Yf};
q("yt.dom.getNextId_",Xf,void 0);var Yf=0}function Zf(){var a=document,b;Cb(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
;function $f(a){this.b=a||Xe();ag||(ag=bg(this.b))}
var ag=null;function bg(a){return(new L(function(b){try{var c={gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b},d=oa(c)?{callback:c}:c||{};d._c&&d._c.jsl&&d._c.jsl.h||Ya(d,{_c:{jsl:{h:A("GAPI_HINT_PARAMS",void 0)}}});if(d.gapiHintOverride||A("GAPI_HINT_OVERRIDE")){var e;var f=document.location.href;if(-1!=f.indexOf("?")){var f=(f||"").split("#")[0],g=f.split("?",2);e=fc(1<g.length?g[1]:g[0])}else e={};var k=e.gapi_jsh;k&&Ya(d,{_c:{jsl:{h:k}}})}Qf("client",d)}catch(h){kb(h)}})).then(function(){})}
$f.prototype.i=function(){var a=r("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.b.apiaryHost;bb(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.Fa;bb(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);a("googleapis.config/sessionIndex",A("SESSION_INDEX"));r("gapi.client.setApiKey")(this.b.innertubeApiKey)};
$f.prototype.f=function(){return{context:Ye(this.b)}};
$f.prototype.g=function(a,b,c){var d,e=!1;0<c.timeout&&(d=B(function(){e||(e=!0,c.O&&c.O())},c.timeout));
cg(this,a,b,function(a){if(!e)if(e=!0,d&&jb(d),a)c.F&&c.F(a);else if(c.onError)c.onError()})};
function cg(a,b,c,d){var e={path:"/youtubei/"+a.b.innertubeApiVersion+"/"+b,headers:{"X-Goog-Visitor-Id":A("VISITOR_DATA")},method:"POST",body:Ga(c)},f=w(a.i,a);ag.then(function(){f();r("gapi.client.request")(e).execute(d||t)})}
;var Sa=r("yt.events.listeners_")||{};q("yt.events.listeners_",Sa,void 0);var dg=r("yt.events.counter_")||{count:0};q("yt.events.counter_",dg,void 0);function eg(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ra(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function Q(a,b,c,d){if(!a||!a.addEventListener&&!a.attachEvent)return"";d=!!d;var e=eg(a,b,c,d);if(e)return e;var e=++dg.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document),g;g=f?function(d){d=new Qe(d);if(!td(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Qe(b);
b.currentTarget=a;return c.call(a,b)};
g=ib(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Sa[e]=[a,b,c,g,d];return e}
function fg(a){a&&("string"==typeof a&&(a=[a]),G(a,function(a){if(a in Sa){var b=Sa[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Sa[a]}}))}
;var gg={log_event:"events",log_interaction:"interactions"},hg={},ig={},jg=0,Ua=r("yt.logging.transport.logsQueue_")||{};q("yt.logging.transport.logsQueue_",Ua,void 0);function kg(a,b){Ua[a.endpoint]=Ua[a.endpoint]||[];var c=Ua[a.endpoint];c.push(a.Oa);ig[a.endpoint]=b;c.length>=(Number(We("web_logging_max_batch")||0)||20)?lg():mg()}
function lg(){jb(jg);if(!Ta()){for(var a in Ua){var b=hg[a];if(!b){b=ig[a];if(!b)continue;b=new b;hg[a]=b}var c=b.f();c.requestTimeMs=Math.round(lb());c[gg[a]]=Ua[a];b.g(a,c,{});delete Ua[a]}Ta()||mg()}}
function mg(){jb(jg);jg=B(lg,A("LOGGING_BATCH_TIMEOUT",1E4))}
;function ng(){if(!og&&!pg||!window.JSON)return null;var a;try{a=og.get("yt-player-two-stage-token")}catch(b){}if(!v(a))try{a=pg.get("yt-player-two-stage-token")}catch(b){}if(!v(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var pg,qg=new Vf;pg=qg.isAvailable()?new Sf(qg):null;var og,rg=new Wf;og=rg.isAvailable()?new Sf(rg):null;function sg(a,b,c){var d=tg,e={};e.eventTimeMs=Math.round(c||lb());e[a]=b;kg({endpoint:"log_event",Oa:e},d)}
;function tg(){this.b=Xe();ug||(ug=vg(this.b))}
var ug=null;function vg(a){return(new L(function(b){he(A("GAPI_LOADER_URL",void 0),function(){try{r("yt.gapi.load")("client",{gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b})}catch(c){kb(c)}})})).then(function(){})}
tg.prototype.i=function(){var a=r("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);var b=this.b.apiaryHost;bb(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.Fa;bb(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);a("googleapis.config/sessionIndex",A("SESSION_INDEX"));r("gapi.client.setApiKey")(this.b.innertubeApiKey)};
tg.prototype.f=function(){return{context:Ye(this.b)}};
tg.prototype.g=function(a,b,c){var d,e=!1;0<c.timeout&&(d=B(function(){e||(e=!0,c.O&&c.O())},c.timeout));
wg(this,a,b,function(a){if(!e)if(e=!0,d&&jb(d),a)c.F&&c.F(a);else if(c.onError)c.onError()})};
function wg(a,b,c,d){var e={path:"/youtubei/"+a.b.innertubeApiVersion+"/"+b,headers:{"X-Goog-Visitor-Id":A("VISITOR_DATA")},method:"POST",body:Ga(c)},f=w(a.i,a);ug.then(function(){f();r("gapi.client.request")(e).execute(d||t)})}
;function xg(){this.b=Xe()}
xg.prototype.f=function(){return{context:Ye(this.b)}};
xg.prototype.g=function(a,b,c){b={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":A("VISITOR_DATA")},C:b,Pa:"JSON",O:c.O,F:c.F,onError:c.onError,timeout:c.timeout,withCredentials:!0};a:{c=[];var d=Fe(String(n.location.href)),e=n.__OVERRIDE_SID;null==e&&(e=(new Na(document)).get("SID"));if(e&&(d=(e=0==d.indexOf("https:")||0==d.indexOf("chrome-extension:"))?n.__SAPISID:n.__APISID,null==d&&(d=(new Na(document)).get(e?"SAPISID":"APISID")),d)){var e=e?"SAPISIDHASH":"APISIDHASH",f=String(n.location.href);
c=f&&d&&e?[e,ef(Fe(f),d,c||null)].join(" "):null;break a}c=null}c&&(b.headers.Authorization=c,b.headers["X-Goog-AuthUser"]=A("SESSION_INDEX",0));ae("//"+this.b.Wb+("/youtubei/"+this.b.innertubeApiVersion+"/"+a)+"?alt=json&key="+this.b.innertubeApiKey,b)};function yg(){if(null==r("_lact",window)){var a=parseInt(A("LACT"),10),a=isFinite(a)?x()-Math.max(a,0):-1;q("_lact",a,window);-1==a&&zg();Q(document,"keydown",zg);Q(document,"keyup",zg);Q(document,"mousedown",zg);Q(document,"mouseup",zg);Sd("page-mouse",zg);Sd("page-scroll",zg);Sd("page-resize",zg)}}
function zg(){null==r("_lact",window)&&(yg(),r("_lact",window));var a=x();q("_lact",a,window);Vd("USER_ACTIVE")}
function Ag(){var a=r("_lact",window);return null==a?-1:Math.max(x()-a,0)}
;var Bg={},Cg=0;function Dg(a,b,c){Eg(Fg(),{attachChild:{csn:a,parentVisualElement:Ue(b),visualElements:[Ue(c)]}},void 0)}
function Gg(a,b){var c=Fg(),d=Bb(b,function(a){return Ue(a)});
Eg(c,{visibilityUpdate:{csn:a,visualElements:d}})}
function Eg(a,b,c){b.eventTimeMs=Math.round(lb());b.lactMs=Ag();c&&(b.clientData=Hg(c));kg({endpoint:"log_interaction",Oa:b},a)}
function Hg(a){var b={};a.analyticsChannelData&&(b.analyticsDatas=Bb(a.analyticsChannelData,function(a){return{tabName:a.tabName,cardName:a.cardName,isChannelScreen:a.isChannelScreen,insightId:a.insightId,externalChannelId:a.externalChannelId,externalContentOwnerId:a.externalContentOwnerId}}));
return{playbackData:{clientPlaybackNonce:a.clientPlaybackNonce},analyticsChannelData:b,externalLinkData:a.externalLinkData}}
;function Fg(){return We("enable_youtubei_innertube")?xg:$f}
;function Ig(){var a=A("ROOT_VE_TYPE",void 0);return a?new Se(void 0,a,void 0):null}
function Jg(){var a=A("client-screen-nonce",void 0);a||(a=A("EVENT_ID",void 0));return a}
;function Kg(a,b){isNaN(b)&&(b=void 0);var c=r("yt.scheduler.instance.addJob");return c?c(a,1,b):void 0===b?(a(),NaN):B(a,b||0)}
;r("yt.scheduler.instance.timerIdMap_");var Lg=[],Mg=!1;function Ng(){function a(){Mg=!0;"google_ad_status"in window?z("DCLKSTAT",1):z("DCLKSTAT",2)}
he("//static.doubleclick.net/instream/ad_status.js",a);Lg.push(Kg(function(){Mg||"google_ad_status"in window||(oe("//static.doubleclick.net/instream/ad_status.js",a),z("DCLKSTAT",3))},5E3))}
function Og(){return parseInt(A("DCLKSTAT",0),10)}
;var Pg=x().toString();function Qg(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=A("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){var d=a,e=A("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=Qb(H(window.location.href)[3]||null);f&&e.push(f);f=Qb(H(d)[3]||null);if(Eb(e,f)||!f&&0==d.lastIndexOf("/",0)){We("autoescape_tempdata_url")&&(e=document.createElement("a"),Rc(e,d),d=e.href);var f=H(d),d=f[5],e=f[6],f=f[7],g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||Jg();d=
"ST-"+eb(d).toString(36);e=b?Vb(b):"";Pa.set(""+d,e,5,"/","youtube.com");b&&(b=b.itct||b.ved,d=r("yt.logging.screen.storeParentElement"),b&&d&&d(new Se(b)))}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k,h;k=void 0===k?{}:k;h=void 0===h?"":h;c=window.location;a=Rb(Ub([a],k))+h;a=a instanceof Xb?a:ac(a);c.href=Zb(a)}return!0}
;function Rg(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||Wa(Sg);this.assets=a.assets||{};this.attrs=a.attrs||Wa(Tg);this.params=a.params||Wa(Ug);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Sg={enablejsapi:1},Tg={},Ug={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function Vg(a){a instanceof Rg||(a=new Rg(a));return a}
function Wg(a){var b=new Rg,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];b[c]="object"==la(d)?Wa(d):d}return b}
;function Xg(){this.g=this.f=this.b=0;this.i="";var a=r("window.navigator.plugins"),b=r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.i=b;b=a;this.b=b[0];this.f=b[1];this.g=b[2];if(0>=this.b){var g,k,h,m;if(mb)try{g=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(u){g=null}else h=document.body,m=document.createElement("object"),m.setAttribute("type","application/x-shockwave-flash"),g=h.appendChild(m);if(g&&"GetVariable"in g)try{k=g.GetVariable("$version")}catch(u){k=""}h&&m&&h.removeChild(m);(g=k||"")?(g=g.split(" ")[1].split(","),g=[parseInt(g[0],10)||0,parseInt(g[1],10)||0,parseInt(g[2],
10)||0]):g=[0,0,0];this.b=g[0];this.f=g[1];this.g=g[2]}}
ka(Xg);function Yg(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.b>b[0]||a.b==b[0]&&a.f>b[1]||a.b==b[0]&&a.f==b[1]&&a.g>=b[2]}
;function Zg(){D.call(this);this.b=new M;ub(this,va(vb,this.b))}
y(Zg,D);Zg.prototype.subscribe=function(a,b,c){return this.isDisposed()?0:this.b.subscribe(a,b,c)};
Zg.prototype.unsubscribe=function(a,b,c){return this.isDisposed()?!1:this.b.unsubscribe(a,b,c)};
Zg.prototype.R=function(a){return this.isDisposed()?!1:this.b.R(a)};
Zg.prototype.M=function(a,b){return this.isDisposed()?!1:this.b.M.apply(this.b,arguments)};function $g(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
l=$g.prototype;l.getHeight=function(){return this.bottom-this.top};
l.contains=function(a){return this&&a?a instanceof $g?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.l>=this.left&&a.l<=this.right&&a.o>=this.top&&a.o<=this.bottom:!1};
l.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
l.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
l.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function ah(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
ah.prototype.contains=function(a){return a instanceof I?a.l>=this.left&&a.l<=this.left+this.width&&a.o>=this.top&&a.o<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
ah.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
ah.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
ah.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function bh(a,b){var c=cd(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function ch(a,b){return bh(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function dh(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}J&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function eh(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function fh(a){var b=gh;if("none"!=ch(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function gh(a){var b=a.offsetWidth,c=a.offsetHeight,d=uc&&!b&&!c;return p(b)&&!d||!a.getBoundingClientRect?new Ma(b,c):(a=dh(a),new Ma(a.right-a.left,a.bottom-a.top))}
function hh(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function ih(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?hh(a,c):0}
var jh={thin:2,medium:4,thick:6};function kh(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in jh?jh[c]:hh(a,c)}
;function lh(a,b,c,d){D.call(this);this.g=b||null;this.D="*";this.i=c||null;this.b=null;this.channel=d||null;this.J=!!a;this.H=w(this.N,this);window.addEventListener("message",this.H)}
y(lh,D);lh.prototype.N=function(a){if(!("*"!=this.i&&a.origin!=this.i||this.g&&a.source!=this.g)&&v(a.data)){var b;try{b=Ea(a.data)}catch(c){return}if(!(null==b||this.J&&(this.b&&this.b!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin?this.i=this.D=a.origin:kb(Error("MessageEvent origin is null"),"WARNING");this.g=a.source;this.b=b.id;this.f&&(this.f(),this.f=null);break;case "command":this.j&&(this.A&&!Eb(this.A,b.func)||this.j(b.func,b.args))}}};
lh.prototype.sendMessage=function(a,b){var c=b||this.g;if(c){this.b&&(a.id=this.b);this.channel&&(a.channel=this.channel);try{var d=Ga(a);c.postMessage(d,this.D)}catch(e){kb(e,"WARNING")}}};
lh.prototype.w=function(){window.removeEventListener("message",this.H);lh.B.w.call(this)};function mh(a,b,c){lh.call(this,a,b,c||A("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.A=this.f=this.j=null}
y(mh,lh);function nh(){var a=Zf();return a?a:null}
;var oh;var ph=E,ph=ph.toLowerCase();if(-1!=ph.indexOf("android")){var qh=ph.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(qh)oh=Number(qh[1]);else{var rh={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1},sh=[],th=0,uh;for(uh in rh)sh[th++]=uh;var vh=ph.match("("+sh.join("|")+")");oh=vh?rh[vh[0]]:0}}else oh=void 0;var wh=E,xh=wh.match(/\((BB10|PlayBook|BlackBerry);/);!xh||2>xh.length||wh.match(/Version\/(\d+\.\d+)/);E.match(/Mozilla\/[\d\.]+ \(Mobile;.* rv:([\d\.]+)\) Gecko\/[\d\.]+ Firefox\/[\d\.]+/);var yh;var zh=E,Ah=zh.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!Ah||2>Ah.length)yh=void 0;else{var Bh=zh.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);yh=Bh&&6==Bh.length?Number(Bh[5].replace("_",".")):0}0<=yh&&0<=E.search("Safari")&&E.search("Version");var Ch=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],Dh=['audio/mp4; codecs="mp4a.40.2"'];J&&K("9");!uc||K("528");tc&&K("1.9b")||J&&K("8")||rc&&K("9.5")||uc&&K("528");tc&&!K("8")||J&&K("9");function Eh(a){D.call(this);this.b=[];this.f=a||this}
y(Eh,D);function Fh(a,b,c,d){d=ib(w(d,a.f));d={target:b,name:c,qa:d};b.addEventListener(c,d.qa,void 0);a.b.push(d)}
function Gh(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.qa)}}
Eh.prototype.w=function(){Gh(this);Eh.B.w.call(this)};function R(a,b){this.version=a;this.args=b}
function Hh(a){if(!a.Wa){var b={};a.call(b);a.Wa=b.version}return a.Wa}
function Ih(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=Hh(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function S(a,b){this.topic=a;this.b=b}
S.prototype.toString=function(){return this.topic};var Jh=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function Kh(a){R.call(this,1,arguments)}
y(Kh,R);var Lh=new S("timing-sent",Kh);var Mh=r("yt.pubsub2.instance_")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.R;M.prototype.publish=M.prototype.M;M.prototype.clear=M.prototype.clear;q("yt.pubsub2.instance_",Mh,void 0);var Nh=r("yt.pubsub2.subscribedKeys_")||{};q("yt.pubsub2.subscribedKeys_",Nh,void 0);var Oh=r("yt.pubsub2.topicToKeys_")||{};q("yt.pubsub2.topicToKeys_",Oh,void 0);var Ph=r("yt.pubsub2.isAsync_")||{};q("yt.pubsub2.isAsync_",Ph,void 0);q("yt.pubsub2.skipSubKey_",null,void 0);
function T(a,b){var c=Qh();c&&c.publish.call(c,a.toString(),a,b)}
function U(a,b,c){var d=Qh();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var f=function(){if(Nh[e])try{if(g&&a instanceof S&&a!=d)try{g=Ih(a.b,g)}catch(h){throw h.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+h.message,h;}b.call(c||window,g)}catch(h){kb(h)}};
Ph[a.toString()]?r("yt.scheduler.instance")?Kg(f,void 0):B(f,0):f()}});
Nh[e]=!0;Oh[a.toString()]||(Oh[a.toString()]=[]);Oh[a.toString()].push(e);return e}
function Rh(a){var b=Qh();b&&("number"==typeof a&&(a=[a]),G(a,function(a){b.unsubscribeByKey(a);delete Nh[a]}))}
function Qh(){return r("yt.pubsub2.instance_")}
;function Sh(a,b,c){D.call(this);this.b=a;this.i=b||0;this.f=c;this.g=w(this.nb,this)}
y(Sh,D);l=Sh.prototype;l.ca=0;l.w=function(){Sh.B.w.call(this);this.stop();delete this.b;delete this.f};
l.start=function(a){this.stop();var b=this.g;a=p(a)?a:this.i;if(!oa(b))if(b&&"function"==typeof b.handleEvent)b=w(b.handleEvent,b);else throw Error("Invalid listener argument");this.ca=2147483647<Number(a)?-1:n.setTimeout(b,a||0)};
l.stop=function(){this.isActive()&&n.clearTimeout(this.ca);this.ca=0};
l.isActive=function(){return 0!=this.ca};
l.nb=function(){this.ca=0;this.b&&this.b.call(this.f)};var Th={vc:!0},Uh={ad_at:"adType",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",yt_lt:"loadType",yt_ad:"isMonetized",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",yt_vis:"isVisible"},Vh=["isMonetized","prerollAllowed","isRedSubscriber","isVisible"],Wh=w(Jh.clearResourceTimings||Jh.webkitClearResourceTimings||Jh.mozClearResourceTimings||Jh.msClearResourceTimings||Jh.oClearResourceTimings||t,Jh);
function Xh(a,b){if(!b&&"_"!=a[0]){var c=a;Jh.mark&&(0==c.lastIndexOf("mark_",0)||(c="mark_"+c),Jh.mark(c))}var c=Yh(),d=b||lb();c[a]&&(c["_"+a]=c["_"+a]||[c[a]],c["_"+a].push(d));c[a]=d;(Zh()["tick_"+a]=b)||lb();We("csi_on_gel")?(c=$h(),"_start"==a?sg("latencyActionBaselined",{clientActionNonce:c},b):sg("latencyActionTicked",{tickName:a,clientActionNonce:c},b),c=!0):c=!1;if(c=!c)c=!r("yt.timing.pingSent_");if(c&&(d=A("TIMING_ACTION",void 0),c=Yh(),r("yt.timing.ready_")&&d&&c._start&&ai())){var d=
!0,e=A("TIMING_WAIT",[]);if(e.length)for(var f=0,g=e.length;f<g;++f)if(!(e[f]in c)){d=!1;break}d&&bi()}}
function ci(){var a=di().info.yt_lt="hot_bg";Zh().info_yt_lt=a;if(We("csi_on_gel"))if("yt_lt"in Uh){var b={},c=Uh.yt_lt;Eb(Vh,c)&&(a=!!a);b[c]=a;a=$h();b.clientActionNonce=a;sg("latencyActionInfo",b)}else kb(Error("Unknown label yt_lt logged with GEL CSI."))}
function ai(){var a=Yh();if(a.aft)return a.aft;for(var b=A("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function bi(){if(!We("csi_on_gel")){var a=Yh(),b=di().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&ma(a[d])){var e=d.slice(1);if(e in Th){var f=Bb(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=r("yt.timing.reportbuilder_")){if(f=f(a,b,void 0))ei(f,e),fi(),Wh(),gi(!1,void 0),z("PREVIOUS_ACTION",A("TIMING_ACTION")),z("TIMING_ACTION","")}else{var g=A("CSI_SERVICE_NAME","youtube"),f={v:2,s:g,action:A("TIMING_ACTION",void 0)},k=b.srt;delete b.srt;void 0===a.srt&&(k||0===k||(k=Jh.timing||{},k=Math.max(0,k.responseStart-k.navigationStart),isNaN(k)&&b.pt&&(k=b.pt)),k||0===k)&&(b.srt=Math.round(k));if(b.h5jse){var h=window.location.protocol+r("ytplayer.config.assets.js");
(h=Jh.getEntriesByName?Jh.getEntriesByName(h)[0]:null)?b.h5jse=Math.round(b.h5jse-h.responseEnd):delete b.h5jse}a.aft=ai();hi()&&"youtube"==g&&(ci(),g=a.vc,h=a.pbs,delete a.aft,b.aft=Math.round(h-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=lb();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=r("ytdebug.logTiming"))&&a(f,b);ei(f,e,void 0);T(Lh,new Kh(b.aft+(k||0)))}}}
function ei(a,b,c){if(We("debug_csi_data")){var d=r("yt.timing.csiData");d||(d=[],q("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||we(a,void 0)}catch(f){we(a,void 0)}else we(a);gi(!0,c)}
function $h(){var a=di().nonce;if(!a){var b;a:{if(window.crypto&&window.crypto.getRandomValues)try{var c=Array(16),d=new Uint8Array(16);window.crypto.getRandomValues(d);for(a=0;a<c.length;a++)c[a]=d[a];b=c;break a}catch(e){}b=Array(16);for(c=0;16>c;c++){d=x();for(a=0;a<d%23;a++)b[c]=Math.random();b[c]=Math.floor(256*Math.random())}if(Pg)for(c=1,d=0;d<Pg.length;d++)b[c%16]=b[c%16]^b[(c-1)%16]/4^Pg.charCodeAt(d),c++}c=[];for(d=0;d<b.length;d++)c.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(b[d]&
63));a=c.join("");di().nonce=a}return a}
function Yh(){return di().tick}
function Zh(){var a=di();"gel"in a||(a.gel={});return a.gel}
function di(){return r("ytcsi.data_")||fi()}
function fi(){var a={tick:{},info:{}};q("ytcsi.data_",a,void 0);return a}
function gi(a,b){q("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function hi(){var a=Yh(),b=a.pbr,c=a.vc,a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==di().info.yt_pvis}
;new Sh(ii,1E3);function ii(){Xh("vptl",0);Xh("vpl",0)}
;var ji={"api.invalidparam":2,auth:150,"drm.auth":150,"heartbeat.net":150,"heartbeat.servererror":150,"heartbeat.stop":150,"html5.unsupportedads":5,"fmt.noneavailable":5,"fmt.decode":5,"fmt.unplayable":5,"html5.missingapi":5,"html5.unsupportedlive":5,"drm.unavailable":5};function ki(a,b){D.call(this);this.A=this.j=a;this.Z=b;this.H=!1;this.f={};this.ga=this.Y=null;this.$=new M;ub(this,va(vb,this.$));this.i={};this.J=this.ha=this.g=this.pa=this.b=null;this.da=!1;this.N=this.D=this.W=this.X=null;this.ia={};this.hb=["onReady"];this.ea=new Eh(this);ub(this,va(vb,this.ea));this.na=null;this.Ca=NaN;this.fa={};li(this);this.L("onDetailedError",w(this.Cb,this));this.L("onTabOrderChange",w(this.kb,this));this.L("onTabAnnounce",w(this.Da,this));this.L("WATCH_LATER_VIDEO_ADDED",
w(this.Db,this));this.L("WATCH_LATER_VIDEO_REMOVED",w(this.Eb,this));Vc||(this.L("onMouseWheelCapture",w(this.Ab,this)),this.L("onMouseWheelRelease",w(this.Bb,this)));this.L("onAdAnnounce",w(this.Da,this));this.T=new Eh(this);ub(this,va(vb,this.T));this.oa=!1;this.ma=null}
y(ki,D);var mi=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];l=ki.prototype;l.ya=function(a,b){this.isDisposed()||(ni(this,a),oi(this,b),this.H&&pi(this))};
function ni(a,b){a.pa=b;a.b=Wg(b);a.g=a.b.attrs.id||a.g;"video-player"==a.g&&(a.g=a.Z,a.b.attrs.id=a.Z);a.A.id==a.g&&(a.g+="-player",a.b.attrs.id=a.g);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.Z;a.ha||(a.ha=qi(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;var c=a.b.attrs.width;c&&(a.A.style.width=eh(Number(c)||c,!0));if(c=a.b.attrs.height)a.A.style.height=eh(Number(c)||c,!0)}
l.qb=function(){return this.pa};
function pi(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.f.loadVideoByPlayerVars(a.b.args):a.f.cueVideoByPlayerVars(a.b.args))}
function ri(a){if(!p(a.b.disable.flash)){var b=a.b.disable,c;c=Yg(Xg.getInstance(),a.b.minVersion);b.flash=!c}return!a.b.disable.flash}
function si(a,b){if((!b||(5!=(ji[b.errorCode]||5)?0:-1!=mi.indexOf(b.errorCode)))&&ri(a)){var c=ti(a);c&&c.stopVideo&&c.stopVideo();var d=a.b;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=Vg(c));d.args.autoplay=1;d.args.html5_unavailable="1";ni(a,d);oi(a,"flash")}}
function oi(a,b){if(!a.isDisposed()){if(!b){var c;if(!(c=!a.b.html5&&ri(a))){if(!p(a.b.disable.html5)){var d;c=!0;void 0!=a.b.args.deviceHasDisplay&&(c=a.b.args.deviceHasDisplay);if(2.2==oh)d=!0;else{a:{var e=c;c=r("yt.player.utils.videoElement_");c||(c=document.createElement("VIDEO"),q("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType)for(var e=e?Ch:Dh,f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}d="fmt.noneavailable"}catch(g){d="html5.missingapi"}}d=!d}d&&(d=ui(a)||a.b.assets.js);
a.b.disable.html5=!d;d||(a.b.args.html5_unavailable="1")}c=!!a.b.disable.html5}b=c?ri(a)?"flash":"unsupported":"html5"}("flash"==b?a.Ub:a.Vb).call(a)}}
function ui(a){var b=!0,c=ti(a);c&&a.b&&(a=a.b,b=C(c,"version")==a.assets.js);return b&&!!r("yt.player.Application.create")}
l.Vb=function(){if(!this.da){var a=ui(this);a&&"html5"==vi(this)?(this.J="html5",this.H||this.V()):(wi(this),this.J="html5",a&&this.W?(this.j.appendChild(this.W),this.V()):(this.b.loaded=!0,this.X=w(function(){var a=this.j,c=Wg(this.b);r("yt.player.Application.create")(a,c);this.V()},this),this.da=!0,a?this.X():(he(this.b.assets.js,this.X),pe(this.b.assets.css))))}};
l.Ub=function(){var a=Wg(this.b);if(!this.D){var b=ti(this);b&&(this.D=document.createElement("SPAN"),this.D.tabIndex=0,Fh(this.ea,this.D,"focus",this.Ka),this.N=document.createElement("SPAN"),this.N.tabIndex=0,Fh(this.ea,this.N,"focus",this.Ka),b.parentNode&&b.parentNode.insertBefore(this.D,b),b.parentNode&&b.parentNode.insertBefore(this.N,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==vi(this))this.J="flash",this.H||this.V();else{wi(this);this.J=
"flash";this.b.loaded=!0;var b=Xg.getInstance(),c=(-1<b.i.indexOf("Gnash")&&-1==b.i.indexOf("AVM2")||9==b.b&&1==b.f||9==b.b&&0==b.f&&1==b.g?0:9<=b.b)||-1<navigator.userAgent.indexOf("Sony/COM2")&&!Yg(b,9,1,58)?a.url:a.urlV9As2;window!=window.top&&document.referrer&&(a.args.framer=document.referrer.substring(0,128));b=this.j;if(c){var b=v(b)?dd(b):b,d=Wa(a.attrs);d.tabindex=0;var e=Wa(a.params);e.flashvars=Vb(a.args);if(mb){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=c;var a=document.createElement("object"),
f;for(f in d)a.setAttribute(f,d[f]);for(f in e)d=document.createElement("param"),d.setAttribute("name",f),d.setAttribute("value",e[f]),a.appendChild(d)}else{d.type="application/x-shockwave-flash";d.src=c;a=document.createElement("embed");a.setAttribute("name",d.id);for(f in d)a.setAttribute(f,d[f]);for(f in e)a.setAttribute(f,e[f])}f=document.createElement("div");f.appendChild(a);b.innerHTML=f.innerHTML}this.V()}};
l.Ka=function(){ti(this).focus()};
function ti(a){var b=dd(a.g);!b&&a.A&&a.A.querySelector&&(b=a.A.querySelector("#"+a.g));return b}
l.V=function(){if(!this.isDisposed()){var a=ti(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.da=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))si(this);else{li(this);this.H=!0;a=ti(this);a.addEventListener&&(this.Y=xi(this,a,"addEventListener"));a.removeEventListener&&(this.ga=xi(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.f[d]||(this.f[d]=xi(this,a,d))}for(var e in this.i)this.Y(e,
this.i[e]);pi(this);this.ha&&this.ha(this.f);this.$.M("onReady",this.f)}else this.Ca=B(w(this.V,this),50)}};
function xi(a,b,c){var d=b[c];return function(){try{return a.na=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.na=e,kb(e,"WARNING"))}}}
function li(a){a.H=!1;if(a.ga)for(var b in a.i)a.ga(b,a.i[b]);for(var c in a.fa)jb(parseInt(c,10));a.fa={};a.Y=null;a.ga=null;for(var d in a.f)a.f[d]=null;a.f.addEventListener=w(a.L,a);a.f.removeEventListener=w(a.Mb,a);a.f.destroy=w(a.dispose,a);a.f.getLastError=w(a.rb,a);a.f.getPlayerType=w(a.sb,a);a.f.getCurrentVideoConfig=w(a.qb,a);a.f.loadNewVideoConfig=w(a.ya,a);a.f.isReady=w(a.Xb,a)}
l.Xb=function(){return this.H};
l.L=function(a,b){if(!this.isDisposed()){var c=qi(this,b);if(c){if(!Eb(this.hb,a)&&!this.i[a]){var d=yi(this,a);this.Y&&this.Y(a,d)}this.$.subscribe(a,c);"onReady"==a&&this.H&&B(va(c,this.f),0)}}};
l.Mb=function(a,b){if(!this.isDisposed()){var c=qi(this,b);c&&this.$.unsubscribe(a,c)}};
function qi(a,b){var c=b;if("string"==typeof b){if(a.ia[b])return a.ia[b];c=function(){var a=r(b);a&&a.apply(n,arguments)};
a.ia[b]=c}return c?c:null}
function yi(a,b){var c="ytPlayer"+b+a.Z;a.i[b]=c;n[c]=function(c){var d=B(function(){if(!a.isDisposed()){a.$.M(b,c);var e=a.fa,g=String(d);g in e&&delete e[g]}},0);
Va(a.fa,String(d))};
return c}
l.kb=function(a){a=a?ld:kd;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.D||b==this.N||(b.focus(),b!=document.activeElement));)b=a(b)};
l.Da=function(a){Vd("a11y-announce",a)};
l.Cb=function(a){si(this,a)};
l.Db=function(a){Vd("WATCH_LATER_VIDEO_ADDED",a)};
l.Eb=function(a){Vd("WATCH_LATER_VIDEO_REMOVED",a)};
l.Ab=function(){this.oa||(Zc?(this.ma=id(document),Fh(this.T,window,"scroll",this.Jb),Fh(this.T,this.j,"touchmove",this.Hb)):(Fh(this.T,this.j,"mousewheel",this.Na),Fh(this.T,this.j,"wheel",this.Na)),this.oa=!0)};
l.Bb=function(){Gh(this.T);this.oa=!1};
l.Na=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
l.Jb=function(){window.scrollTo(this.ma.l,this.ma.o)};
l.Hb=function(a){a.preventDefault()};
l.sb=function(){return this.J||vi(this)};
l.rb=function(){return this.na};
function vi(a){return(a=ti(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function wi(a){Xh("dcp");a.cancel();li(a);a.J=null;a.b&&(a.b.loaded=!1);var b=ti(a);"html5"==vi(a)?a.W=b:b&&b.destroy&&b.destroy();jd(a.j);Gh(a.ea);a.D=null;a.N=null}
l.cancel=function(){this.X&&oe(this.b.assets.js,this.X);jb(this.Ca);this.da=!1};
l.w=function(){wi(this);if(this.W&&this.b)try{this.W.destroy()}catch(b){kb(b)}this.ia=null;for(var a in this.i)n[this.i[a]]=null;this.pa=this.b=this.f=null;delete this.j;delete this.A;ki.B.w.call(this)};var zi={},Ai="player_uid_"+(1E9*Math.random()>>>0);function Bi(a,b){a=v(a)?dd(a):a;b=Vg(b);var c=Ai+"_"+qa(a),d=zi[c];if(d)return d.ya(b),d.f;d=new ki(a,c);zi[c]=d;Vd("player-added",d.f);ub(d,va(Ci,d));B(function(){d.ya(b)},0);
return d.f}
function Ci(a){zi[a.Z]=null}
function Di(a){a=dd(a);if(!a)return null;var b=Ai+"_"+qa(a),c=zi[b];c||(c=new ki(a,b),zi[b]=c);return c.f}
;var Ei=r("yt.abuse.botguardInitialized")||De;q("yt.abuse.botguardInitialized",Ei,void 0);var Fi=r("yt.abuse.invokeBotguard")||Ee;q("yt.abuse.invokeBotguard",Fi,void 0);var Gi=r("yt.abuse.dclkstatus.checkDclkStatus")||Og;q("yt.abuse.dclkstatus.checkDclkStatus",Gi,void 0);var Hi=r("yt.player.exports.navigate")||Qg;q("yt.player.exports.navigate",Hi,void 0);var Ii=r("yt.player.embed")||Bi;q("yt.player.embed",Ii,void 0);var Ji=r("yt.player.getPlayerByElement")||Di;q("yt.player.getPlayerByElement",Ji,void 0);
var Ki=r("yt.util.activity.init")||yg;q("yt.util.activity.init",Ki,void 0);var Li=r("yt.util.activity.getTimeSinceActive")||Ag;q("yt.util.activity.getTimeSinceActive",Li,void 0);var Mi=r("yt.util.activity.setTimestamp")||zg;q("yt.util.activity.setTimestamp",Mi,void 0);function Ni(a){R.call(this,1,arguments);this.b=a}
y(Ni,R);function V(a){R.call(this,1,arguments);this.b=a}
y(V,R);function Oi(a,b,c){R.call(this,3,arguments);this.g=a;this.f=b;this.b=null!=c?!!c:null}
y(Oi,R);function Pi(a,b,c,d,e){R.call(this,2,arguments);this.f=a;this.b=b;this.i=c||null;this.g=d||null;this.source=e||null}
y(Pi,R);function Qi(a,b,c){R.call(this,1,arguments);this.b=a;this.subscriptionId=b}
y(Qi,R);function Ri(a,b,c,d,e,f,g){R.call(this,1,arguments);this.f=a;this.subscriptionId=b;this.b=c;this.j=d||null;this.i=e||null;this.g=f||null;this.source=g||null}
y(Ri,R);
var Si=new S("subscription-batch-subscribe",Ni),Ti=new S("subscription-batch-unsubscribe",Ni),Ui=new S("subscription-subscribe",Pi),Vi=new S("subscription-subscribe-loading",V),Wi=new S("subscription-subscribe-loaded",V),Xi=new S("subscription-subscribe-success",Qi),Yi=new S("subscription-subscribe-external",Pi),Zi=new S("subscription-unsubscribe",Ri),$i=new S("subscription-unsubscirbe-loading",V),aj=new S("subscription-unsubscribe-loaded",V),bj=new S("subscription-unsubscribe-success",V),cj=new S("subscription-external-unsubscribe",
Ri),dj=new S("subscription-enable-ypc",V),ej=new S("subscription-disable-ypc",V),fj=new S("subscription-prefs",Oi),gj=new S("subscription-prefs-success",Oi),hj=new S("subscription-prefs-failure",Oi);function ij(a,b){var c=document.location.protocol+"//"+document.domain+"/post_login";b&&(c=Wb(c,"mode",b));c=Wb("/signin?context=popup","next",c);c=Wb(c,"feature","sub_button");if(c=window.open(c,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var d=Sd("LOGGED_IN",function(b){Ud(A("LOGGED_IN_PUBSUB_KEY",void 0));z("LOGGED_IN",!0);a(b)});
z("LOGGED_IN_PUBSUB_KEY",d);c.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
q("yt.pubsub.publish",Vd,void 0);function jj(){var a=A("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!A("SESSION_INDEX")&&!A("LOGGED_IN"))}
;function kj(a,b){(a=dd(a))&&a.style&&(a.style.display=b?"":"none",pf(a,"hid",!b))}
function lj(a){G(arguments,function(a){!na(a)||a instanceof Element?kj(a,!0):G(a,function(a){lj(a)})})}
function mj(a){G(arguments,function(a){!na(a)||a instanceof Element?kj(a,!1):G(a,function(a){mj(a)})})}
;var nj={},oj="ontouchstart"in document;function pj(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return td(c,function(a){return mf(a,b)},!0,d)}
function W(a){var b="mouseover"==a.type&&"mouseenter"in nj||"mouseout"==a.type&&"mouseleave"in nj,c=a.type in nj||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=nj[b],d;for(d in c.G){var e=pj(b,d,a.target);e&&!td(a.relatedTarget,function(a){return a==e},!0)&&c.M(d,e,b,a)}}if(b=nj[a.type])for(d in b.G)(e=pj(a.type,d,a.target))&&b.M(d,e,a.type,a)}}
Q(document,"blur",W,!0);Q(document,"change",W,!0);Q(document,"click",W);Q(document,"focus",W,!0);Q(document,"mouseover",W);Q(document,"mouseout",W);Q(document,"mousedown",W);Q(document,"keydown",W);Q(document,"keyup",W);Q(document,"keypress",W);Q(document,"cut",W);Q(document,"paste",W);oj&&(Q(document,"touchstart",W),Q(document,"touchend",W),Q(document,"touchcancel",W));function qj(a){this.j=a;this.g={};this.ka=[];this.i=[]}
function X(a,b){return"yt-uix"+(a.j?"-"+a.j:"")+(b?"-"+b:"")}
qj.prototype.unregister=function(){Ud(this.ka);this.ka.length=0;Rh(this.i);this.i.length=0};
qj.prototype.init=t;qj.prototype.dispose=t;function rj(a,b,c){a.i.push(U(b,c,a))}
function sj(a,b,c){var d=X(a,void 0),e=w(c,a);b in nj||(nj[b]=new M);nj[b].subscribe(d,e);a.g[c]=e}
function tj(a,b,c){if(b in nj){var d=nj[b];d.unsubscribe(X(a,void 0),a.g[c]);0>=d.ba()&&(d.dispose(),delete nj[b])}delete a.g[c]}
function uj(a,b){nb(a,"tooltip-text",b)}
;function vj(){qj.call(this,"tooltip");this.b=0;this.f={}}
y(vj,qj);ka(vj);l=vj.prototype;l.register=function(){sj(this,"mouseover",this.ja);sj(this,"mouseout",this.P);sj(this,"focus",this.Ia);sj(this,"blur",this.Ga);sj(this,"click",this.P);sj(this,"touchstart",this.Va);sj(this,"touchend",this.la);sj(this,"touchcancel",this.la)};
l.unregister=function(){tj(this,"mouseover",this.ja);tj(this,"mouseout",this.P);tj(this,"focus",this.Ia);tj(this,"blur",this.Ga);tj(this,"click",this.P);tj(this,"touchstart",this.Va);tj(this,"touchend",this.la);tj(this,"touchcancel",this.la);this.dispose();vj.B.unregister.call(this)};
l.dispose=function(){for(var a in this.f)this.P(this.f[a]);this.f={}};
l.ja=function(a){if(!(this.b&&1E3>x()-this.b)){var b=parseInt(C(a,"tooltip-hide-timer"),10);b&&(qb(a,"tooltip-hide-timer"),jb(b));var b=w(function(){wj(this,a);qb(a,"tooltip-show-timer")},this),c=parseInt(C(a,"tooltip-show-delay"),10)||0,b=B(b,c);
nb(a,"tooltip-show-timer",b.toString());a.title&&(uj(a,xj(a)),a.title="");b=qa(a).toString();this.f[b]=a}};
l.P=function(a){var b=parseInt(C(a,"tooltip-show-timer"),10);b&&(jb(b),qb(a,"tooltip-show-timer"));b=w(function(){if(a){var b=dd(yj(this,a));b&&(zj(b),b&&b.parentNode&&b.parentNode.removeChild(b),qb(a,"content-id"));(b=dd(yj(this,a,"arialabel")))&&b.parentNode&&b.parentNode.removeChild(b)}qb(a,"tooltip-hide-timer")},this);
b=B(b,50);nb(a,"tooltip-hide-timer",b.toString());if(b=C(a,"tooltip-text"))a.title=b;b=qa(a).toString();delete this.f[b]};
l.Ia=function(a){this.b=0;this.ja(a)};
l.Ga=function(a){this.b=0;this.P(a)};
l.Va=function(a,b,c){c.changedTouches&&(this.b=0,a=pj(b,X(this),c.changedTouches[0].target),this.ja(a))};
l.la=function(a,b,c){c.changedTouches&&(this.b=x(),a=pj(b,X(this),c.changedTouches[0].target),this.P(a))};
function Aj(a,b){uj(a,b);var c=C(a,"content-id");(c=dd(c))&&md(c,b)}
function xj(a){return C(a,"tooltip-text")||a.title}
function wj(a,b){if(b){var c=xj(b);if(c){var d=dd(yj(a,b));if(!d){d=document.createElement("div");d.id=yj(a,b);d.className=X(a,"tip");var e=document.createElement("div");e.className=X(a,"tip-body");var f=document.createElement("div");f.className=X(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=X(a,"tip-content");var k=Bj(a,b),h=yj(a,b,"content");g.id=h;nb(b,"content-id",h);e.appendChild(g);k&&d.appendChild(k);d.appendChild(e);d.appendChild(f);var m=
pd(b),h=yj(a,b,"arialabel"),f=document.createElement("div");nf(f,X(a,"arialabel"));f.id=h;m=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+m:m+" "+c;md(f,m);b.setAttribute("aria-labelledby",h);h=nh()||document.body;h.appendChild(f);h.appendChild(d);Aj(b,c);(c=parseInt(C(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",nf(g,X(a,"normal-wrap")));g=mf(b,X(a,"reverse"));Cj(a,b,d,e,k,g)||Cj(a,b,d,e,k,!g);var u=X(a,"tip-visible");
B(function(){nf(d,u)},0)}}}}
function Cj(a,b,c,d,e,f){var g;pf(c,X(a,"tip-reverse"),f);var k=0;f&&(k=1);a=fh(b);f=new I((a.width-10)/2,f?a.height:0);var h=cd(b);g=new I(0,0);var m;m=h?cd(h):document;m=!J||9<=Number(Ic)||hd(ad(m).b)?m.documentElement:m.body;b!=m&&(m=dh(b),h=id(ad(h).b),g.l=m.left+h.l,g.o=m.top+h.o);f=new I(g.l+f.l,g.o+f.o);f=new I(f.l,f.o);g=(k&8&&"rtl"==ch(c,"direction")?k^4:k)&-9;k=fh(c);h=new Ma(k.width,k.height);f=new I(f.l,f.o);h=new Ma(h.width,h.height);0!=g&&(g&4?f.l-=h.width+0:g&2&&(f.l-=h.width/2),g&
1&&(f.o-=h.height+0));g=new ah(0,0,0,0);g.left=f.l;g.top=f.o;g.width=h.width;g.height=h.height;f=g;g=0;if(!(g&496||(g=f,h=new I(g.left,g.top),h instanceof I?(g=h.l,h=h.o):(g=h,h=void 0),c.style.left=eh(g,!1),c.style.top=eh(h,!1),h=new Ma(f.width,f.height),k==h||k&&h&&k.width==h.width&&k.height==h.height)))if(k=h,g=hd(ad(cd(c)).b),!J||K("10")||g&&K("8"))f=c.style,tc?f.MozBoxSizing="border-box":uc?f.WebkitBoxSizing="border-box":f.boxSizing="border-box",f.width=Math.max(k.width,0)+"px",f.height=Math.max(k.height,
0)+"px";else if(f=c.style,g){if(J){g=ih(c,"paddingLeft");h=ih(c,"paddingRight");m=ih(c,"paddingTop");var u=ih(c,"paddingBottom");g=new $g(m,h,u,g)}else g=bh(c,"paddingLeft"),h=bh(c,"paddingRight"),m=bh(c,"paddingTop"),u=bh(c,"paddingBottom"),g=new $g(parseFloat(m),parseFloat(h),parseFloat(u),parseFloat(g));if(!J||9<=Number(Ic))h=bh(c,"borderLeftWidth"),m=bh(c,"borderRightWidth"),u=bh(c,"borderTopWidth"),da=bh(c,"borderBottomWidth"),h=new $g(parseFloat(u),parseFloat(m),parseFloat(da),parseFloat(h));
else{h=kh(c,"borderLeft");m=kh(c,"borderRight");var u=kh(c,"borderTop"),da=kh(c,"borderBottom"),h=new $g(u,m,da,h)}f.pixelWidth=k.width-h.left-g.left-g.right-h.right;f.pixelHeight=k.height-h.top-g.top-g.bottom-h.bottom}else f.pixelWidth=k.width,f.pixelHeight=k.height;f=gd(window);1==c.nodeType?(c=dh(c),h=new I(c.left,c.top)):(c=c.changedTouches?c.changedTouches[0]:c,h=new I(c.clientX,c.clientY));c=fh(d);m=Math.floor(c.width/2);k=!!(f.height<h.o+a.height);a=!!(h.o<a.height);g=!!(h.l<m);f=!!(f.width<
h.l+m);h=(c.width+3)/-2- -5;b=C(b,"force-tooltip-direction");if("left"==b||g)h=-5;else if("right"==b||f)h=20-c.width-3;b=Math.floor(h)+"px";d.style.left=b;e&&(e.style.left=b,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(k||a)}
function yj(a,b,c){a=X(a);var d=b.__yt_uid_key;d||(d=Xf(),b.__yt_uid_key=d);b=a+d;c&&(b+="-"+c);return b}
function Bj(a,b){var c=null;xc&&mf(b,X(a,"masked"))&&((c=dd("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),lj(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=X(a,"tip-mask")));return c}
function zj(a){var b=dd("yt-uix-tooltip-shared-mask"),c=b&&td(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),mj(b),document.body.appendChild(b))}
;function Dj(){qj.call(this,"subscription-button")}
y(Dj,qj);ka(Dj);Dj.prototype.register=function(){sj(this,"click",this.ra);rj(this,Vi,this.Ma);rj(this,Wi,this.La);rj(this,Xi,this.Gb);rj(this,$i,this.Ma);rj(this,aj,this.La);rj(this,bj,this.Ib);rj(this,dj,this.zb);rj(this,ej,this.yb)};
Dj.prototype.unregister=function(){tj(this,"click",this.ra);Dj.B.unregister.call(this)};
var sd={za:"hover-enabled",Za:"yt-uix-button-subscribe",$a:"yt-uix-button-subscribed",Yb:"ypc-enabled",ab:"yt-uix-button-subscription-container",bb:"yt-subscription-button-disabled-mask-container"},Ej={Zb:"channel-external-id",cb:"subscriber-count-show-when-subscribed",eb:"subscriber-count-tooltip",fb:"subscriber-count-title",$b:"href",ac:"insecure",Aa:"is-subscribed",cc:"parent-url",dc:"clicktracking",gb:"style-type",Ba:"subscription-id",ec:"target",ib:"ypc-enabled"};l=Dj.prototype;
l.ra=function(a){var b=C(a,"href"),c=C(a,"insecure"),d=jj(),c=c&&!0;if(b)a=C(a,"target")||"_self",window.open(b,a);else if(!c)if(d){b=C(a,"channel-external-id");d=C(a,"clicktracking");if(C(a,"ypc-enabled"))var c=C(a,"ypc-item-type"),e=C(a,"ypc-item-id"),c={itemType:c,itemId:e,subscriptionElement:a};else c=null;e=C(a,"parent-url");if(C(a,"is-subscribed")){var f=C(a,"subscription-id");T(Zi,new Ri(b,f,c,a,d,e))}else T(Ui,new Pi(b,c,d,e))}else Fj(this,a)};
l.Ma=function(a){this.U(a.b,this.Ta,!0)};
l.La=function(a){this.U(a.b,this.Ta,!1)};
l.Gb=function(a){this.U(a.b,this.Ua,!0,a.subscriptionId)};
l.Ib=function(a){this.U(a.b,this.Ua,!1)};
l.zb=function(a){this.U(a.b,this.ob)};
l.yb=function(a){this.U(a.b,this.mb)};
l.Ua=function(a,b,c){b?(nb(a,Ej.Aa,"true"),c&&nb(a,Ej.Ba,c)):(qb(a,Ej.Aa),qb(a,Ej.Ba));Gj(a)};
l.Ta=function(a,b){var c;c=rd(a);pf(c,sd.bb,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Gj(a){var b=C(a,Ej.gb),c=!!C(a,"is-subscribed"),b="-"+b,d=sd.$a+b;pf(a,sd.Za+b,!c);pf(a,d,c);C(a,Ej.eb)&&!C(a,Ej.cb)&&(b=X(vj.getInstance()),pf(a,b,!c),a.title=c?"":C(a,Ej.fb));c?B(function(){nf(a,sd.za)},1E3):of(a,sd.za)}
l.ob=function(a){var b=!!C(a,"ypc-item-type"),c=!!C(a,"ypc-item-id");!C(a,"ypc-enabled")&&b&&c&&(nf(a,"ypc-enabled"),nb(a,Ej.ib,"true"))};
l.mb=function(a){C(a,"ypc-enabled")&&(of(a,"ypc-enabled"),qb(a,"ypc-enabled"))};
function Hj(a,b){return Ab(ed(X(a)),function(a){return b==C(a,"channel-external-id")},a)}
l.jb=function(a,b,c){var d=Kb(arguments,2);G(a,function(a){b.apply(this,Gb(a,d))},this)};
l.U=function(a,b,c){var d=Hj(this,a);this.jb.apply(this,Gb([d],Kb(arguments,1)))};
function Fj(a,b){var c=w(function(a){a.discoverable_subscriptions&&z("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.ra(b)},a);
ij(c,"subscribe")}
;var Ij=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};q("yt.uix.widgets_",Ij,void 0);function Jj(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function Kj(a,b,c){v(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return Lj(a)}
function Lj(a,b,c){if(pa(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function Mj(a,b,c,d){if(pa(a)&&!ma(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}c={index:b,startSeconds:c,suggestedQuality:d};v(a)&&16==a.length?c.list="PL"+a:c.playlist=a;return c}
function Nj(a){var b=a.video_id||a.videoId;if(v(b)){var c=ng()||{},d=ng()||{};p(void 0)?d[b]=void 0:delete d[b];var e=x()+3E5,f=pg;if(f&&window.JSON){v(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;var Oj=null,Pj=[];function Qj(a){return{externalChannelId:a.externalChannelId,xb:!!a.isChannelPaid,source:a.source,subscriptionId:a.subscriptionId}}
function Rj(a){Sj(Qj(a))}
function Sj(a){jj()?(T(Ui,new Pi(a.externalChannelId,a.xb?{itemType:"U",itemId:a.externalChannelId}:null)),a=Vb({event:"subscribe",source:a.source}),we("/gen_204?"+a,void 0)):Tj(a)}
function Tj(a){ij(function(b){b.subscription_ajax&&Sj(a)},null)}
function Uj(a){a=Qj(a);T(Zi,new Ri(a.externalChannelId,a.subscriptionId,null));a=Vb({event:"unsubscribe",source:a.source});we("/gen_204?"+a,void 0)}
function Vj(a){Oj&&Oj.channelSubscribed(a.b,a.subscriptionId)}
function Wj(a){Oj&&Oj.channelUnsubscribed(a.b)}
;function Xj(a){D.call(this);this.f=a;this.f.subscribe("command",this.Qa,this);this.g={};this.i=!1}
y(Xj,D);l=Xj.prototype;l.start=function(){this.i||this.isDisposed()||(this.i=!0,Yj(this.f,"RECEIVING"))};
l.Qa=function(a,b){if(this.i&&!this.isDisposed()){var c=b||{};switch(a){case "addEventListener":if(v(c.event)&&(c=c.event,!(c in this.g))){var d=w(this.Ob,this,c);this.g[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":v(c.event)&&Zj(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(c=ak(a,b||{}),c=this.b[a].apply(this.b,c),(c=bk(a,c))&&this.i&&!this.isDisposed()&&Yj(this.f,a,c))}}};
l.Ob=function(a,b){this.i&&!this.isDisposed()&&Yj(this.f,a,this.sa(a,b))};
l.sa=function(a,b){if(null!=b)return{value:b}};
function Zj(a,b){b in a.g&&(a.removeEventListener(b,a.g[b]),delete a.g[b])}
l.w=function(){this.f.unsubscribe("command",this.Qa,this);this.f=null;for(var a in this.g)Zj(this,a);Xj.B.w.call(this)};new M;function ck(a,b,c){Zg.call(this);this.f=a;this.g=b;this.i=c}
y(ck,Zg);function Yj(a,b,c){if(!a.isDisposed()){var d=a.f,e=a.g;a=a.i;d.isDisposed()||e!=d.b||(b={id:a,command:b},c&&(b.data=c),d.b.postMessage(Ga(b),d.g))}}
ck.prototype.w=function(){this.g=this.f=null;ck.B.w.call(this)};function dk(){var a=this.f=new mh(!!A("WIDGET_ID_ENFORCE")),b=w(this.Lb,this);a.j=b;a.A=null;this.f.channel="widget";if(a=A("WIDGET_ID"))this.f.b=a;this.i=[];this.A=!1;this.j={}}
l=dk.prototype;l.Lb=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.j[c]||"onReady"==c||(this.addEventListener(c,ek(this,c)),this.j[c]=!0)}else this.Xa(a,b)};
l.Xa=function(){};
function ek(a,b){return w(function(a){this.sendMessage(b,a)},a)}
l.addEventListener=function(){};
l.pb=function(){this.A=!0;this.sendMessage("initialDelivery",this.ta());this.sendMessage("onReady");G(this.i,this.Sa,this);this.i=[]};
l.ta=function(){return null};
function fk(a,b){a.sendMessage("infoDelivery",b)}
l.Sa=function(a){this.A?this.f.sendMessage(a):this.i.push(a)};
l.sendMessage=function(a,b){this.Sa({event:a,info:void 0==b?null:b})};
l.dispose=function(){this.f=null};function gk(a,b,c){D.call(this);this.b=a;this.g=c;this.i=Q(window,"message",w(this.j,this));this.f=new ck(this,a,b);ub(this,va(vb,this.f))}
y(gk,D);gk.prototype.j=function(a){var b;if(b=!this.isDisposed())if(b=a.origin==this.g)a:{b=this.b;do{var c;b:{c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(c=a.data,v(c))){try{c=Ea(c)}catch(d){return}c.command&&(a=this.f,b=c.command,c=c.data,a.isDisposed()||a.M("command",b,c))}};
gk.prototype.w=function(){fg(this.i);this.b=null;gk.B.w.call(this)};function hk(a,b){Xj.call(this,b);this.b=a;this.start()}
y(hk,Xj);hk.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
hk.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function ak(a,b){switch(a){case "loadVideoById":return b=Lj(b),Nj(b),[b];case "cueVideoById":return b=Lj(b),Nj(b),[b];case "loadVideoByPlayerVars":return Nj(b),[b];case "cueVideoByPlayerVars":return Nj(b),[b];case "loadPlaylist":return b=Mj(b),Nj(b),[b];case "cuePlaylist":return b=Mj(b),Nj(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function bk(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
hk.prototype.sa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return hk.B.sa.call(this,a,b)};
hk.prototype.w=function(){hk.B.w.call(this);delete this.b};function ik(a){dk.call(this);this.b=a;this.g=[];this.addEventListener("onReady",w(this.Fb,this));this.addEventListener("onVideoProgress",w(this.Sb,this));this.addEventListener("onVolumeChange",w(this.Tb,this));this.addEventListener("onApiChange",w(this.Nb,this));this.addEventListener("onPlaybackQualityChange",w(this.Pb,this));this.addEventListener("onPlaybackRateChange",w(this.Qb,this));this.addEventListener("onStateChange",w(this.Rb,this))}
y(ik,dk);l=ik.prototype;l.Xa=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&Jj(a)){var c;c=b;if(pa(c[0])&&!ma(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=Lj.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=Kj.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=Mj.apply(window,c)}c=d}Nj(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);Jj(a)&&fk(this,this.ta())}};
l.Fb=function(){var a=w(this.pb,this);this.f.f=a};
l.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
l.ta=function(){if(!this.b)return null;var a=this.b.getApiInterface();Fb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var k=this.b[e]();b[f]=k}catch(h){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=x()/1E3;return b};
l.Rb=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:x()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());fk(this,a)};
l.Pb=function(a){fk(this,{playbackQuality:a})};
l.Qb=function(a){fk(this,{playbackRate:a})};
l.Nb=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,k=f.length;g<k;g++){var h=f[g],m=this.b.getOption(e,h);b[e][h]=m}}this.sendMessage("apiInfoDelivery",b)};
l.Tb=function(){fk(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
l.Sb=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:x()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());fk(this,a)};
l.dispose=function(){ik.B.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};var jk=document,Y=window;var kk=!1,lk="";function mk(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(kk=!0,a.description)){lk=mk(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){kk=!0;lk="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],kk=!(!a||!a.enabledPlugin))){lk=mk(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");kk=!0;lk=mk(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");kk=!0;lk="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),kk=!0,lk=mk(b.GetVariable("$version"))}catch(c){}})();
var nk=kk,ok=lk;(function(){var a;return xc?(a=/Windows NT ([0-9.]+)/,(a=a.exec(E))?a[1]:"0"):wc?(a=/10[_.][0-9_.]+/,(a=a.exec(E))?a[0].replace(/_/g,"."):"10"):yc?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(E))?a[1]:""):zc||Ac||Bc?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(E))?a[1].replace(/_/g,"."):""):""})();function pk(a){return(a=a.exec(E))?a[1]:""}
(function(){if(Vc)return pk(/Firefox\/([0-9.]+)/);if(J||sc||rc)return Hc;if(Zc)return pk(/Chrome\/([0-9.]+)/);if($c&&!(Ob()||F("iPad")||F("iPod")))return pk(/Version\/([0-9.]+)/);if(Wc||Xc){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(E);if(a)return a[1]+"."+a[2]}else if(Yc)return(a=pk(/Android\s+([0-9.]+)/))?a:pk(/Version\/([0-9.]+)/);return""})();(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a})();function qk(a){rk();this.enabled=Math.random()<a;this.events=[]}
var rk=n.performance&&n.performance.now?w(n.performance.now,n.performance):x;qk.prototype.install=function(a){a=a||window;a.google_js_reporting_queue=a.google_js_reporting_queue||[];this.events=a.google_js_reporting_queue};(new qk(1)).install();var sk=(new Date).getTime();function tk(a){za.call(this,a.message||a.description||a.name);this.b=a instanceof Bd}
y(tk,za);tk.prototype.name="BiscottiError";function uk(a,b){this.f=a;this.b=b}
uk.prototype.then=function(a,b,c){try{if(p(this.f))return a?yd(a.call(c,this.f)):yd(this.f);if(p(this.b)){if(!b)return zd(this.b);var d=b.call(c,this.b);return!p(d)&&this.b.b?zd(this.b):yd(d)}throw Error("Invalid Result_ state");}catch(e){return zd(e)}};
Za(uk);var ze={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},vk=null;function wk(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))return xk(""),vk=new uk(""),"";a=JSON.parse(a.substr(4)).id;xk(a);vk=new uk(a);yk(18E5,2);return a}
function zk(a,b){var c=new tk(b);xk("");vk=new uk(void 0,c);0<a&&yk(12E4,a-1);throw c;}
function yk(a,b){B(function(){var a=w(zk,n,b),a=ye().then(wk,a);Ad(a,null,t,void 0)},a)}
function xk(a){q("yt.www.ads.biscotti.lastId_",a,void 0)}
;function Ak(){}
function Bk(){try{var a;try{var b=r("yt.www.ads.biscotti.getId_"),c;if(b)c=b();else{if(!vk){var d=w(zk,n,2);vk=ye().then(wk,d)}c=vk}a=c}catch(e){a=zd(e)}a.then(Ck,Ak);B(Bk,18E5)}catch(e){kb(e)}}
function Ck(a){var b;a:{try{b=window.top.location.href}catch(u){b=2;break a}b=null!=b?b==window.document.location.href?0:1:2}b={dt:sk,flash:ok||"0",frm:b};b.u_tz=-(new Date).getTimezoneOffset();var c;try{c=Y.history.length}catch(u){c=0}b.u_his=c;b.u_java=!!Y.navigator&&"unknown"!==typeof Y.navigator.javaEnabled&&!!Y.navigator.javaEnabled&&Y.navigator.javaEnabled();Y.screen&&(b.u_h=Y.screen.height,b.u_w=Y.screen.width,b.u_ah=Y.screen.availHeight,b.u_aw=Y.screen.availWidth,b.u_cd=Y.screen.colorDepth);
Y.navigator&&Y.navigator.plugins&&(b.u_nplug=Y.navigator.plugins.length);Y.navigator&&Y.navigator.mimeTypes&&(b.u_nmime=Y.navigator.mimeTypes.length);b.bid=a;b.ca_type=nk?"flash":"image";if(We("enable_server_side_search_pyv")||We("enable_server_side_mweb_search_pyv")){var d;a=window;try{d=a.screenX;var e=a.screenY}catch(u){}try{var f=a.outerWidth,g=a.outerHeight}catch(u){}try{var k=a.innerWidth,h=a.innerHeight}catch(u){}d=[a.screenLeft,a.screenTop,d,e,a.screen?a.screen.availWidth:void 0,a.screen?
a.screen.availTop:void 0,f,g,k,h];var m;e=window.top||Y;try{m=e.document&&!e.document.body?new Ma(-1,-1):gd(e||window).round()}catch(u){m=new Ma(-12245933,-12245933)}e=0;window.SVGElement&&document.createElementNS&&(e|=1);wa(b,{bc:e,bih:m.height,biw:m.width,brdim:d.join(),vis:{visible:1,hidden:2,prerender:3,preview:4}[jk.webkitVisibilityState||jk.mozVisibilityState||jk.visibilityState||""]||0,wgl:!!Y.WebGLRenderingContext})}ae("/ad_data_204",{tb:!0,C:b})}
;function Dk(){this.b=A("ALT_PREF_COOKIE_NAME","PREF");var a;if(a=Pa.get(""+this.b,void 0)){a=unescape(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
ka(Dk);var Z=r("yt.prefs.UserPrefs.prefs_")||{};q("yt.prefs.UserPrefs.prefs_",Z,void 0);function Ek(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Fk(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Gk(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Dk.prototype.get=function(a,b){Fk(a);Ek(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
Dk.prototype.set=function(a,b){Fk(a);Ek(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
Dk.prototype.remove=function(a){Fk(a);Ek(a);delete Z[a]};
Dk.prototype.clear=function(){Z={}};function Hk(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&we(c.data.follow_on_url)}}
;function Ik(a){R.call(this,1,arguments);this.qa=a}
y(Ik,R);function Jk(a,b){R.call(this,2,arguments);this.f=a;this.b=b}
y(Jk,R);function Kk(a,b,c,d){R.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
y(Kk,R);function Lk(a,b){R.call(this,1,arguments);this.f=a;this.b=b||null}
y(Lk,R);function Mk(a){R.call(this,1,arguments)}
y(Mk,R);var Nk=new S("ypc-core-load",Ik),Ok=new S("ypc-guide-sync-success",Jk),Pk=new S("ypc-purchase-success",Kk),Qk=new S("ypc-subscription-cancel",Mk),Rk=new S("ypc-subscription-cancel-success",Lk),Sk=new S("ypc-init-subscription",Mk);var Tk=!1,Uk=[],Vk=[];function Wk(a){a.b?Tk?T(Yi,a):T(Nk,new Ik(function(){T(Sk,new Mk(a.b))})):Xk(a.f,a.i,a.g,a.source)}
function Yk(a){a.b?Tk?T(cj,a):T(Nk,new Ik(function(){T(Qk,new Mk(a.b))})):Zk(a.f,a.subscriptionId,a.i,a.g,a.source)}
function $k(a){al(Hb(a.b))}
function bl(a){cl(Hb(a.b))}
function dl(a){el(a.g,a.f,a.b)}
function fl(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&T(Xi,new Qi(b,c,a.b.channelInfo))}
function gl(a){var b=a.b;Qa(a.f,function(a,d){T(Xi,new Qi(d,a,b[d]))})}
function hl(a){T(bj,new V(a.f.itemId));a.b&&a.b.length&&(il(a.b,bj),il(a.b,dj))}
function Xk(a,b,c,d){var e=new V(a);T(Vi,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=A("PLAYBACK_ID"))&&(c.plid=d);(d=A("EVENT_ID"))&&(c.ei=d);b&&jl(b,c);be("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",xa:f,C:c,F:function(b,c){var d=c.response;T(Xi,new Qi(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&Vd("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&Hk(d.actions)},
wa:function(){T(Wi,e)}})}
function Zk(a,b,c,d,e){var f=new V(a);T($i,f);var g={};d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=A("PLAYBACK_ID"))&&(d.plid=a);(a=A("EVENT_ID"))&&(d.ei=a);c&&jl(c,d);be("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",xa:g,C:d,F:function(a,b){var c=b.response;T(bj,f);c.actions&&Hk(c.actions)},
wa:function(){T(aj,f)}})}
function el(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new Oi(a,b,c);be("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",C:d,onError:function(){T(hj,e)},
F:function(){T(gj,e)}})}}
function al(a){if(a.length){var b=Jb(a,0,40);T("subscription-batch-subscribe-loading");il(b,Vi);var c={};c.a=b.join(",");var d=function(){T("subscription-batch-subscribe-loaded");il(b,Wi)};
be("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",C:c,F:function(c,f){d();var e=f.response,k=e.id;if(ma(k)&&k.length==b.length){var h=e.channel_info_map;G(k,function(a,c){var d=b[c];T(Xi,new Qi(d,a,h[d]))});
a.length?al(a):T("subscription-batch-subscribe-finished")}},
onError:function(){d();T("subscription-batch-subscribe-failure")}})}}
function cl(a){if(a.length){var b=Jb(a,0,40);T("subscription-batch-unsubscribe-loading");il(b,$i);var c={};c.c=b.join(",");var d=function(){T("subscription-batch-unsubscribe-loaded");il(b,aj)};
be("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",C:c,F:function(){d();il(b,bj);a.length&&cl(a)},
onError:function(){d()}})}}
function il(a,b){G(a,function(a){T(b,new V(a))})}
function jl(a,b){var c=fc(a);wa(b,c)}
;var kl=null,ll=null,ml=null,nl={};function ol(a){var b=a.id;a=a.ve_type;var c=Te++;a=new Se(void 0,a,c);nl[b]=a;b=Jg();c=Ig();b&&c&&Dg(b,c,a)}
function pl(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(z("client-screen-nonce",b),z("ROOT_VE_TYPE",a),a=Ig()))for(var c in nl)Dg(b,a,nl[c])}
function ql(a){nl[a.id]=new Se(a.tracking_params)}
function rl(a){var b=Jg();a=nl[a.id];b&&a&&Eg(Fg(),{click:{csn:b,visualElement:Ue(a)}},void 0)}
function sl(a){a=a.ids;var b=Jg();if(b){for(var c=[],d=0;d<a.length;d++){var e=nl[a[d]];e&&c.push(e)}c.length&&Gg(b,c)}}
function tl(){var a=kl.startInteractionLogging;a&&a()}
;q("yt.setConfig",z,void 0);q("yt.setMsg",function(a){hb(gb,arguments)},void 0);
q("yt.logging.errors.log",function(a,b,c,d,e){c={name:c||A("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:d||A("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};e=window&&window.yterr||e||!1;if(a&&e&&!(5<=Cg)){e=a.stacktrace;d=a.columnNumber;var f=r("window.location.href");if(v(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var g,k,h=!1;try{g=a.lineNumber||a.ic||"Not available"}catch(da){g="Not available",h=!0}try{k=a.fileName||a.filename||a.sourceURL||
n.$googDebugFname||f}catch(da){k="Not available",h=!0}a=!h&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:g,fileName:k,stack:a.stack||"Not available"}}e=e||a.stack;g=a.lineNumber.toString();isNaN(g)||isNaN(d)||(g=g+":"+d);if(!(Bg[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){b={xa:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:g,level:b||"ERROR"},C:{url:A("PAGE_NAME",
window.location.href),file:a.fileName},method:"POST"};e&&(b.C.stack=e);for(var m in c)b.C["client."+m]=c[m];if(m=A("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var u in m)b.C[u]=m[u];be("/error_204",b);Bg[a.message]=!0;Cg++}}},void 0);
q("writeEmbed",function(){var a=A("PLAYER_CONFIG",void 0);"1"!=a.privembed&&Bk();"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=A("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);A("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&Nj(a.args);kl=b=Bi("player",a);b.addEventListener("onScreenChanged",pl);b.addEventListener("onLogClientVeCreated",ol);b.addEventListener("onLogServerVeCreated",ql);b.addEventListener("onLogVeClicked",
rl);b.addEventListener("onLogVesShown",sl);b.addEventListener("onReady",tl);var d=A("POST_MESSAGE_ID","player");A("ENABLE_JS_API")?ml=new ik(b):A("ENABLE_POST_API")&&v(d)&&v(c)&&(ll=new gk(window.parent,d,c),ml=new hk(b,ll.f));A("ENABLE_CAST_API")||(a.args.enablecastapi="0");A("BG_P")&&(A("BG_I")||A("BG_IU"))&&Ce();Ng();Oj=b;Oj.addEventListener("SUBSCRIBE",Rj);Oj.addEventListener("UNSUBSCRIBE",Uj);Pj.push(U(Xi,Vj),U(bj,Wj))},void 0);
q("yt.www.watch.ads.restrictioncookie.spr",function(a){we(a+"mac_204?action_fcts=1");return!0},void 0);
var ul=ib(function(){Xh("ol");Tk=!0;Vk.push(U(Ui,Wk),U(Zi,Yk));Tk||Vk.push(U(Yi,Wk),U(cj,Yk),U(Si,$k),U(Ti,bl),U(fj,dl),U(Pk,fl),U(Rk,hl),U(Ok,gl));var a=Dk.getInstance(),b=1<window.devicePixelRatio;if(!!((Gk("f"+(Math.floor(119/31)+1))||0)&67108864)!=b){var c="f"+(Math.floor(119/31)+1),d=Gk(c)||0,d=b?d|67108864:d&-67108865;0==d?delete Z[c]:Z[c]=d.toString(16).toString();var a=a.b,b=[],e;for(e in Z)b.push(e+"="+escape(Z[e]));Pa.set(""+a,b.join("&"),63072E3,"/","youtube.com")}}),vl=ib(function(){var a=
kl;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();A("PL_ATT")&&(Be=null);for(var a=0,b=Lg.length;a<b;a++){var c=Lg[a];if(!isNaN(c)){var d=r("yt.scheduler.instance.cancelJob");d?d(c):jb(c)}}Lg.length=0;a=le("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))Xd(a),b.parentNode.removeChild(b);Mg=!1;z("DCLKSTAT",0);Ud(Uk);Uk.length=0;Rh(Vk);Vk.length=0;Tk=!1;Oj&&(Oj.removeEventListener("SUBSCRIBE",Sj),Oj.removeEventListener("UNSUBSCRIBE",Uj));Oj=null;Rh(Pj);Pj.length=0;
wb(ml,ll);if(a=kl)a.removeEventListener("onScreenChanged",pl),a.removeEventListener("onLogClientVeCreated",ol),a.removeEventListener("onLogServerVeCreated",ql),a.removeEventListener("onLogVeClicked",rl),a.removeEventListener("onLogVesShown",sl),a.removeEventListener("onReady",tl),a.destroy();nl={}});
window.addEventListener?(window.addEventListener("load",ul),window.addEventListener("unload",vl)):window.attachEvent&&(window.attachEvent("onload",ul),window.attachEvent("onunload",vl));var wl=Dj.getInstance(),xl=X(wl);xl in Ij||(wl.register(),wl.ka.push(Sd("yt-uix-init-"+xl,wl.init,wl)),wl.ka.push(Sd("yt-uix-dispose-"+xl,wl.dispose,wl)),Ij[xl]=wl);}).call(this);
