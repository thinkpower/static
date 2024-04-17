/**
 * JS初始化库
 * @作者 qinggan <admin@phpok.com>
 * @版权 深圳市锟铻科技有限公司
 * @网站 http://www.phpok.com
 * @版本 4.x
 * @授权 http://www.phpok.com/lgpl.html PHPOK开源授权协议：GNU Lesser General Public License
 * @日期 2017年12月01日
**/
var basefile = "index.php";
var ctrl_id = "c";
var func_id = "f";
var webroot = "http://www.jujingweb.com/";
var apifile = "api.php";
var lang = new Array();

function get_url(ctrl,func,ext)
{
	var url = webroot+""+basefile+"?"+ctrl_id+"="+ctrl;
	if(func){
		url += "&"+func_id+"="+func;
	}
	if(ext){
		url += "&"+ext;
	}
	return url;
}

function get_plugin_url(id,efunc,ext)
{
	var url = webroot+""+basefile+"?"+ctrl_id+"=plugin&"+func_id+"=exec";
	if(id){
		url += "&id="+id;
	}
	if(efunc){
		url += "&exec="+efunc;
	}
	if(ext){
		url += "&"+ext;
	}
	return url;
}

function api_url(ctrl,func,ext)
{
	var url = webroot+""+apifile+"?"+ctrl_id+"="+ctrl;
	if(func){
		url += "&"+func_id+"="+func;
	}
	if(ext){
		url += "&"+ext;
	}
	return url;
}


function api_plugin_url(id,efunc,ext)
{
	var url = webroot+""+apifile+"?"+ctrl_id+"=plugin&"+func_id+"=exec";
	if(id){
		url += "&id="+id;
	}
	if(efunc){
		url += "&exec="+efunc;
	}
	if(ext){
		url += "&"+ext;
	}
	return url;
}

/*! jQuery v2.2.0 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!k.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=R.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c}catch(e){}O.set(a,b,c);
}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return this;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.rnamespace||a.rnamespace.test(g.namespace))&&(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ca(b),i="border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Fa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Ba.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+Oa(b,c,e||(i?"border":"content"),f,h)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b];
},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(void 0===a||"boolean"===c)&&(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){return n.trim(a.value)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var hb=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!hb.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,hb.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var ib=a.location,jb=n.now(),kb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return(!c||c.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+b),c};var lb=/#.*$/,mb=/([?&])_=[^&]*/,nb=/^(.*?):[ \t]*([^\r\n]*)$/gm,ob=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,pb=/^(?:GET|HEAD)$/,qb=/^\/\//,rb={},sb={},tb="*/".concat("*"),ub=d.createElement("a");ub.href=ib.href;function vb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function wb(a,b,c,d){var e={},f=a===sb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function xb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function yb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function zb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ib.href,type:"GET",isLocal:ob.test(ib.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":tb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?xb(xb(a,n.ajaxSettings),b):xb(n.ajaxSettings,a)},ajaxPrefilter:vb(rb),ajaxTransport:vb(sb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=nb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||ib.href)+"").replace(lb,"").replace(qb,ib.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=ub.protocol+"//"+ub.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),wb(rb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!pb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(kb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=mb.test(f)?f.replace(mb,"$1_="+jb++):f+(kb.test(f)?"&":"?")+"_="+jb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+tb+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=wb(sb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=yb(m,x,d)),u=zb(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,(b||!y)&&(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Ab=/%20/g,Bb=/\[\]$/,Cb=/\r?\n/g,Db=/^(?:submit|button|image|reset|file)$/i,Eb=/^(?:input|select|textarea|keygen)/i;function Fb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Bb.test(a)?d(a,e):Fb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Fb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Fb(c,a[c],b,e);return d.join("&").replace(Ab,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Eb.test(this.nodeName)&&!Db.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Cb,"\r\n")}}):{name:b.name,value:c.replace(Cb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Gb={0:200,1223:204},Hb=n.ajaxSettings.xhr();l.cors=!!Hb&&"withCredentials"in Hb,l.ajax=Hb=!!Hb,n.ajaxTransport(function(b){var c,d;return l.cors||Hb&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Gb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Ib=[],Jb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Ib.pop()||n.expando+"_"+jb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Jb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Jb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Jb,"$1"+e):b.jsonp!==!1&&(b.url+=(kb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Ib.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),l.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||(l.createHTMLDocument?d.implementation.createHTMLDocument(""):d);var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Kb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Kb)return Kb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Lb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Lb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0)-a.scrollTop(),d.left+=n.css(a[0],"borderLeftWidth",!0)-a.scrollLeft()),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Lb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Mb=a.jQuery,Nb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Nb),b&&a.jQuery===n&&(a.jQuery=Mb),n},b||(a.jQuery=a.$=n),n});
/**
 * 自定义表单中涉及到的JS操作
 * @package phpok
 * @作者 qinggan <admin@phpok.com>
 * @版权 深圳市锟铻科技有限公司
 * @主页 http://www.phpok.com
 * @版本 4.x
 * @授权 http://www.phpok.com/lgpl.html PHPOK开源授权协议：GNU Lesser General Public License
 * @时间 2017年03月22日
**/

function phpok_form_password(id,len)
{
	var list = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
	if(!len || len == "undefined") len = 8;
	var rand = "";
	for(var i = 0;i<len;i++)
	{
		var num = Math.floor(Math.random()*36+0);
		rand = rand + list[num];
	}
	var htm = "随机密码："+rand;
	$("#"+id+"_html").html(htm);
	$("#"+id).val(rand);
}

//表单扩展按钮
//btn，类型
function phpok_btn_action(btn,id)
{
	if(btn == "image")
	{
		if(!id || id == "undefined")
		{
			$.dialog.alert("未指定ID");
			return false;
		}
		var url = get_url("open","input") + "&ext="+$.str.encode("png,jpg,gif,jpeg,bmp")+"&id="+id;
		$.dialog.open(url,{
			title: "图片管理器",
			lock : true,
			width: "80%",
			height: "70%",
			resize: false
		});
	}
}

function phpok_btn_view(btn,id)
{
	if(btn == "image")
	{
		var url = $("#"+id).val();
		if(!url || url == "undefined")
		{
			$.dialog.alert("图片不存在，请在表单中填写图片地址");
		}
		else
		{
			$.dialog({
				"title":"预览",
				"content": '<img src="'+url+'" border="0" />',
				"lock":true
			});
		}
	}
}

//清空
function phpok_btn_clear(btn,id)
{
	$("#"+id).val("");
}

function _phpok_form_opt(val,id,eid,etype)
{
	if(!val || val == "undefined"){
		$("#"+id).html("").hide();
		return false;
	}
	var url = get_url("form","config") + "&id="+$.str.encode(val);
	if(eid && eid != "undefined"){
		url += "&eid="+eid;
	}
	if(etype && etype != "undefined"){
		url += "&etype="+etype;
	}
	$.phpok.ajax(url,function(rs){
		if(rs && rs != 'exit'){
			$("#"+id).html(rs).show();
		}
	});
}

function phpok_btn_editor_picture(id)
{
	var url = get_url("edit","picture") + "&input="+id;
	$.dialog.open(url,{
		"title" : "图片库",
		"width" : "760px",
		"height" : "80%",
		"resize" : false,
		"lock" : true
	});
}

function phpok_btn_editor_file(id)
{
	var url = get_url("edit","file") + "&input="+id+"&nopic=1";
	$.dialog.open(url,{
		"title" : "附件资源",
		"width" : "760px",
		"height" : "80%",
		"resize" : false,
		"lock" : true
	});
}

function phpok_btn_editor_video(id)
{
	var url = get_url("edit","video") + "&input="+id+"&nopic=1";
	$.dialog.open(url,{
		"title" : "添加影音",
		"width" : "760px",
		"height" : "80%",
		"resize" : false,
		"lock" : true
	});
}

//删除单个主题关联
function phpok_title_delete_single(id)
{
	$("#"+id).val("");
	$("#title_"+id).hide();
	$("#phpok-btn-"+id+"-delete").hide();
}

//删除多个主题关联
function phpok_title_delete(id,val)
{
	if(val && val != "undefined")
	{
		//移除DIV值
		$("#"+id+"_div_"+val).remove();
		//移除值
		var c = $("#"+id).val();
		if(c == "" || c == "undefined")
		{
			$("#"+id+"_div").hide();
			$("#"+id+"_button_checkbox").hide();
			$("#"+id).val("");
			return true;
		}
		var clist = c.split(",");
		var n_list = new Array();
		var m = 0;
		for(var i=0;i<clist.length;i++)
		{
			if(clist[i] != val)
			{
				n_list[m] = clist[i];
				m++;
			}
		}
		if(n_list.length<1)
		{
			$("#"+id+"_div").hide();
			$("#"+id+"_button_checkbox").hide();
			$("#"+id).val("");
		}
		else
		{
			$("#"+id).val(n_list.join(","));
		}
		return true;
	}
	val = $.input.checkbox_join(id+"_div");
	if(!val || val == "undefined")
	{
		$.dialog.alert("请选择要删除的信息");
		return false;
	}
	var lst = val.split(",");
	for(var i=0;i<lst.length;i++)
	{
		phpok_title_delete(id,lst[i]);
	}
	return true;
}

//选择主题关联
function phpok_title_select(project_id,is_multi,title,input)
{
	var url = get_url("inp","title")+"&project_id="+$.str.encode(project_id);
	if(is_multi && is_multi != 'undefined'){
		url += "&multi=1";
		url += "&identifier="+$.str.encode(input);
		$.dialog.open(url,{
			"title" : title,
			"width" : "760px",
			"height" : "80%",
			"resize" : false,
			"lock" : true,
			"ok": function(){
				var data = $.dialog.data("title_data_"+input);
				if(data){
					$("#"+input).val(data);
					window.eval("action_"+input+"_show()");
				}
			}
		});
	}else{
		url += "&identifier="+$.str.encode(input);
		$.dialog.open(url,{
			"title" : title,
			"width" : "760px",
			"height" : "80%",
			"resize" : false,
			"lock" : true
		});
	}
}

function phpok_user_delete(id,val)
{
	//移除DIV值
	$("#"+id+"_div_"+val).remove();
	//移除值
	var c = $("#"+id).val();
	if(c == "" || c == "undefined")
	{
		$("#"+id+"_div").html("");
		$("#"+id).val("");
		return true;
	}
	var clist = c.split(",");
	var n_list = new Array();
	var m = 0;
	for(var i=0;i<clist.length;i++)
	{
		if(clist[i] != val)
		{
			n_list[m] = clist[i];
			m++;
		}
	}
	if(n_list.length<1)
	{
		$("#"+id+"_div").html("");
		$("#"+id).val("");
	}
	else
	{
		$("#"+id).val(n_list.join(","));
	}
	return true;
}

/* PHPOK编辑器扩展按钮属性 */
function phpok_edit_type(id)
{
	var t = "#sMode_"+id;
	if($(t).val() == "可视化")
	{
		$(eval("pageInit_"+id+"()"));
		$(t).val("源代码");
	}
	else
	{
		$("#"+id).xheditor(false);
		eval("CodeMirror_PHPOK_"+id+"()");
		$(t).val("可视化");
	}
}

function phpok_form_upload_attr_cate_id()
{
	var obj = $("select#cate_id").find("option:selected");
	var dataType = obj.attr('data-type');
	var name = $("#upload_name").val();
	var type = $("#upload_type").val();
	if(!dataType || dataType == 'undefined'){
		if(name == '' || name == 'undefined'){
			$("#upload_name").val('图片');
		}
		if(type == '' || type == 'undefined'){
			$("#upload_type").val('jpg,png,gif');
		}
	}else{
		if(name == '' || name == 'undefined'){
			$("#upload_name").val(obj.text());
		}
		if(type == '' || type == 'undefined'){
			$("#upload_type").val(dataType);
		}
	}
	return true;
}

function go_to_page_action()
{
	var page = $("#go_to_page").val();
	if(!page){
		$.dialog.alert('请输入要跳转的页码');
		return false;
	}
	page = parseInt(page);
	if(page<1){
		page = 1;
	}
	var url = window.location.href;
	url = url.replace(/&pageid=\d/g,"");
	url += "&pageid="+$.str.encode(page);
	$.phpok.go(url);
}

;(function($){
	
	var config = {
		'id':'phpok',
		'content':'',
		'url':'',
		'filetype':'jpg,png,gif'
	};
	var form = {
		init:function(opts)
		{
			config = $.extend({},config,opts);
			if(config.total<1){
				config.total = 10;
			}
			return form;
		}
	};
	$.phpokform = {
		upload_cate_create:function(id,name,filetypes){
			$.dialog.prompt(p_lang('请输入分类名称'),function(val){
				if(!val){
					$.dialog.alert(p_lang('分类名称不能为空'));
					return false;
				}
				var url = config.url;
				var url = get_url('rescate','qcreate','title='+$.str.encode(val)+"&name="+$.str.encode(name)+"&filetypes="+$.str.encode(filetypes));
				$.phpok.json(url,function(data){
					if(data.status){
						var obj = $("select[name="+id+"_cateid]");
						obj.append("<option value='"+data.info+"'>"+val+"</option>");
						obj.find("option[value="+data.info+"]").attr("selected",true);
					}else{
						$.dialog.alert(data.info);
						return false;
					}
				});
			},'');
		},
		param_type_setting:function(val,id){
			var old = $("#"+id).val();
			if(old){
				val = old+","+val;
			}
			$("#"+id).val(val);
		},
		param_type_set:function(v){
			if(v == 1){
				$("#p_name_type_html").show();
			}else{
				$("#p_name_type_html").hide();
			}
		},
		
		/**
		 * 文本框旁边的日期按钮控件
		**/
		laydate_button:function(id,type)
		{
			laydate.render({
				elem:'#'+id,
				type:type,
				show: true,
	    		closeStop: '#btn_'+id+'_'+type
			});
		},
		/**
		 * 清空文本框内容
		**/
		clear:function(id){
			if(id.substr(0,1) != '.' && id.substr(0,1) != '#'){
				id = '#'+id;
			}
			return $(id).val('');
		},

		/**
		 * 文件选择器
		**/
		text_button_file_select:function(id)
		{
			$.dialog.open(get_url("open","input","id="+id),{
				title: p_lang('附件管理器'),
				lock : true,
				width: "700px",
				height: "70%",
				resize: false
			});
		},

		/**
		 * 文件下载
		**/
		text_button_file_download:function(id)
		{
			if(id.substr(0,1) != '.' && id.substr(0,1) != '#'){
				id = '#'+id;
			}
			var file = $(id).val();
			if(!file){
				$.dialog.alert(p_lang('没有可下载的附件'));
				return false;
			}
			var url = get_url("res_action","download",'file='+$.str.encode(file));
			window.open(url);
		},

		/**
		 * 图片选择器
		**/
		text_button_image_select:function(id)
		{
			$.dialog.open(get_url("open","input","id="+id+"&type=image"),{
				title: p_lang('图片管理器'),
				lock : true,
				width: "700px",
				height: "70%",
				resize: false
			});
		},

		/**
		 * 图片预览
		**/
		text_button_image_preview:function(id)
		{
			if(id.substr(0,1) != '.' && id.substr(0,1) != '#'){
				id = '#'+id;
			}
			var file = $(id).val();
			if(!file){
				$.dialog.alert(p_lang('没有指定图片'));
				return false;
			}
			var url = get_url("res_action","view",'file='+$.str.encode(file));
			$.dialog.open(url,{
				title: p_lang('预览图片'),
				lock: true,
				width: '700px',
				height: '70%',
				resize: false,
				ok: true
			});
		},

		/**
		 * 视频选择器
		**/
		text_button_video_select:function(id)
		{
			var url = get_url("open","input","id="+id+"&type=video");
			$.dialog.open(url,{
				title: p_lang('视频管理器'),
				lock : true,
				width: "700px",
				height: "70%"
			});
		},

		/**
		 * 视频预览
		**/
		text_button_video_preview:function(id)
		{
			if(id.substr(0,1) != '.' && id.substr(0,1) != '#'){
				id = '#'+id;
			}
			var file = $(id).val();
			if(!file){
				$.dialog.alert(p_lang('没有指定视频'));
				return false;
			}
			var url = get_url("res_action","video","file="+$.str.encode(file));
			$.dialog.open(url,{
				title: p_lang('视频预览'),
				lock: true,
				width: '700px',
				height: '430px',
				ok:true
			});
		},

		/**
		 * 网址选择器
		**/
		text_button_url_select:function(id)
		{
			var url = get_url("open","url","id="+id);
			$.dialog.open(url,{
				title: p_lang('网址管理器'),
				lock : true,
				width: "700px",
				height: "70%"
			});
		},

		/**
		 * 网址预览
		**/
		text_button_url_open:function(id)
		{
			if(id.substr(0,1) != '.' && id.substr(0,1) != '#'){
				id = '#'+id;
			}
			var url = $(id).val();
			if(!url || url == "http://" || url == "https://"){
				$.dialog.alert(p_lang('未指定网址'));
				return false;
			}
			window.open(url);
		},

		/**
		 * 会员选择库
		**/
		text_button_user_select:function(id)
		{
			var url = get_url("open","user2","id="+id);
			$.dialog.open(url,{
				title: p_lang('会员列表'),
				lock : true,
				width: "700px",
				height: "70%",
				resize: false
			});
		},

		/**
		 * 快速插入文本
		**/
		text_button_quickwords:function(id,val,type)
		{
			if(id.substr(0,1) != '.' && id.substr(0,1) != '#'){
				id = '#'+id;
			}
			if(type && type == 'none'){
				$(id).val(val);
				return true;
			}
			var tmp = $(id).val();
			tmp = (tmp && tmp != 'undefined') ? (tmp+''+type+''+val) : val;
			$(id).val(tmp);
			return true;
		},

		/**
		 * 快速添加主题
		 * @参数 fid 字段ID
		**/
		extitle_quickadd:function(fid)
		{
			var url = get_url('form','quickadd','id='+fid);
			$.dialog.open(url,{
				'title':p_lang('添加'),
				'width':'80%',
				'height':'70%',
				'ok':function(){
					var iframe = this.iframe.contentWindow;
					if (!iframe.document.body) {
						alert('iframe还没加载完毕呢');
						return false;
					};
					iframe.save();
					return false;
				},
				'lock':true,
				'okVal':p_lang('保存'),
				'cancel':true
			});
		},

		/**
		 * 快速编辑
		**/
		extitle_quickedit:function(id,fid)
		{
			var url = get_url('form','quickadd','id='+fid+"&tid="+id);
			$.dialog.open(url,{
				'title':p_lang('编辑 #'+id),
				'width':'80%',
				'height':'70%',
				'ok':function(){
					var iframe = this.iframe.contentWindow;
					if (!iframe.document.body) {
						alert('iframe还没加载完毕呢');
						return false;
					};
					iframe.save();
					return false;
				},
				'lock':true,
				'okVal':p_lang('保存'),
				'cancel':true
			});
		},

		extitle_list:function(fid)
		{
			var url = get_url('form','quicklist','id='+fid);
			$.dialog.open(url,{
				'title':p_lang('选择'),
				'width':'90%',
				'height':'80%',
				'ok':true,
				'lock':true,
				'okVal':p_lang('关闭')
			});
		},

		/**
		 * 重载扩展字段
		 * @参数 id 模块字段ID
		 * @参数 identifier 标识
		**/
		extitle_reload:function(id,identifier)
		{
			var url = get_url('form','redata','id='+id);
			var content = $("#"+identifier).val();
			if(content){
				url += "&content="+$.str.encode(content);
			}
			$.phpok.json(url,function(data){
				if(data.status){
					if(data.info){
						$("#"+identifier+"_edit_preview").html(data.info);
					}else{
						//
					}
					
					return true;
				}
				return true;
			})
		},

		/**
		 * 删除已存在的主题，防止重复筛选
		**/
		extitle_remove_selected:function(identifier)
		{
			var opener = $.dialog.opener;
			var content = opener.$("#"+identifier).val();
			if(content){
				var list = content.split(",");
				for(var i in list){
					$("#title_"+list[i]).remove();
				}
			}
		},

		/**
		 * 选中已存在主题
		 * @参数 id 主题ID
		 * @参数 pid 项目ID
		 * @参数 identifier 要更新的标识内容
		**/
		extitle_select_action:function(id,pid,identifier)
		{
			var opener = $.dialog.opener;
			var content = opener.$("#"+identifier).val();
			if(content){
				content = content+","+id;
				var list = content.split(",");
				var rs = $.unique(list);
				content = rs.join(",");
				opener.$("#"+identifier).val(content);
			}else{
				opener.$("#"+identifier).val(id);
			}
			$("#title_"+id).remove();
			opener.$.phpokform.extitle_reload(pid,identifier);
			return true;
		},

		/**
		 * 向前移一位
		**/
		extitle_sortup:function(obj,id,identifier)
		{
			var t = [];
			var old = $(obj).parent().parent().attr("data-id");
			var total = $(obj).parent().parent().attr('data-total');
			var string = "td[data-name=taxis-"+identifier+"-"+id+"]";
			var chk = $(string).eq(0).attr('data-id');
			$(string).each(function(i){
				var id = $(this).attr("data-id");
				if($(string).eq(i+1).attr('data-id') == old){
					var val = $(string).eq(i+1).attr("data-value");
				}else{
					if(id == old){
						var val = $(string).eq(i-1).attr('data-value');
					}else{
						var val = $(this).attr("data-value");
					}
				}
				t.push({"id":id,"sort":val});
			});
			t = t.sort(function(a,b){return parseInt(a['sort'])>parseInt(b['sort']) ? 1 : -1});
			var list = new Array();
			for(var i in t){
				list[i] = t[i]['id'];
			}
			var data = list.join(",");
			$("#"+identifier).val(data);
			this.extitle_reload(id,identifier);
		},

		/**
		 * 向后移一位
		**/
		extitle_sortdown:function(obj,id,identifier)
		{
			var t = [];
			var old = $(obj).parent().parent().attr("data-id");
			var string = "td[data-name=taxis-"+identifier+"-"+id+"]";
			var chk = $(string).eq(0).attr('data-id');
			var num = 0;
			var old_value = 0;
			$(string).each(function(i){
				var id = $(this).attr("data-id");
				if(id == old){
					var val = $(string).eq(i+1).attr('data-value');
					num = i+1;
					old_value = $(this).attr('data-value');
				}else{
					if(id == $(string).eq(num).attr('data-id')){
						var val = old_value;
					}else{
						var val = $(this).attr('data-value');
					}
				}
				t.push({"id":id,"sort":val});
			});
			t = t.sort(function(a,b){return parseInt(a['sort'])>parseInt(b['sort']) ? 1 : -1});
			var list = new Array();
			for(var i in t){
				list[i] = t[i]['id'];
			}
			var data = list.join(",");
			$("#"+identifier).val(data);
			this.extitle_reload(id,identifier);
		},

		/**
		 * 删除操作
		**/
		extitle_delete:function(val,id,identifier)
		{
			var content = $("#"+identifier).val();
			if(!content || !val || val == '0' || content == '0' || val == 'undefined' || content == 'undefined'){
				return true;
			}
			if(content == val){
				$("#"+identifier).val('');
				this.extitle_reload(id,identifier);
				return true;
			}
			var list = content.split(',');
			var nlist = new Array();
			var m = 0;
			for(var i in list){
				if(list[i] != val){
					nlist[m] = list[i];
					m++;
				}
			}
			content = nlist.join(',');
			$("#"+identifier).val(content);
			var _self = this;
			$.phpok.json(get_url('form','quickdelete','fid='+id+"&id="+val),function(rs){
				if(rs.status){
					_self.extitle_reload(id,identifier);
					return true;
				}
				$.dialog.alert(rs.info);
				return false;
			});
		}
	};
})(jQuery);




/*!
 * artDialog 4.1.7
 * Date: 2013-03-03 08:04
 * http://code.google.com/p/artdialog/
 * (c) 2009-2012 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://creativecommons.org/licenses/LGPL/2.1/
 */
;(function($,window,undefined){$.noop=$.noop||function(){};var _box,_thisScript,_skin,_path,_count=0,_$window=$(window),_$document=$(document),_$html=$("html"),_elem=document.documentElement,_isIE6=window.VBArray&&!window.XMLHttpRequest,_isMobile="createTouch" in document&&!("onmousemove" in _elem)||/(iPhone|iPad|iPod)/i.test(navigator.userAgent),_expando="artDialog"+ +new Date;var artDialog=function(config,ok,cancel){config=config||{};if(typeof config==="string"||config.nodeType===1){config={content:config,fixed:!_isMobile};}var api,defaults=artDialog.defaults,elem=config.follow=this.nodeType===1&&this||config.follow;for(var i in defaults){if(config[i]===undefined){config[i]=defaults[i];}}$.each({ok:"yesFn",cancel:"noFn",close:"closeFn",init:"initFn",okVal:"yesText",cancelVal:"noText"},function(i,o){config[i]=config[i]!==undefined?config[i]:config[o];});if(typeof elem==="string"){elem=$(elem)[0];}config.id=elem&&elem[_expando+"follow"]||config.id||_expando+_count;api=artDialog.list[config.id];if(elem&&api){return api.follow(elem).zIndex().focus();}if(api){return api.zIndex().focus();}if(_isMobile){config.fixed=false;}if(!$.isArray(config.button)){config.button=config.button?[config.button]:[];}if(ok!==undefined){config.ok=ok;}if(cancel!==undefined){config.cancel=cancel;}config.ok&&config.button.push({name:config.okVal,callback:config.ok,focus:true});config.cancel&&config.button.push({name:config.cancelVal,callback:config.cancel});artDialog.defaults.zIndex=config.zIndex;_count++;return artDialog.list[config.id]=_box?_box._init(config):new artDialog.fn._init(config);};artDialog.fn=artDialog.prototype={version:"4.1.7",closed:true,_init:function(config){var that=this,DOM,icon=config.icon,iconBg=icon&&(_isIE6?{png:"icons/"+icon+".png"}:{backgroundImage:"url('"+config.path+"/images/skins/icons/"+icon+".png')"});that.closed=false;that.config=config;that.DOM=DOM=that.DOM||that._getDOM();DOM.wrap.addClass(config.skin);DOM.close[config.cancel===false?"hide":"show"]();DOM.icon[0].style.display=icon?"":"none";DOM.iconBg.css(iconBg||{background:"none"});DOM.se.css("cursor",config.resize?"se-resize":"auto");DOM.title.css("cursor",config.drag?"move":"auto");DOM.content.css("padding",config.padding);that[config.show?"show":"hide"](true);that.button(config.button).title(config.title).content(config.content,true).size(config.width,config.height).time(config.time);config.follow?that.follow(config.follow):that.position(config.left,config.top);that.zIndex().focus();config.lock&&that.lock();that._addEvent();that._ie6PngFix();_box=null;config.init&&config.init.call(that,window);return that;},content:function(msg){var prev,next,parent,display,that=this,DOM=that.DOM,wrap=DOM.wrap[0],width=wrap.offsetWidth,height=wrap.offsetHeight,left=parseInt(wrap.style.left),top=parseInt(wrap.style.top),cssWidth=wrap.style.width,$content=DOM.content,content=$content[0];that._elemBack&&that._elemBack();wrap.style.width="auto";if(msg===undefined){return content;}if(typeof msg==="string"){$content.html(msg);}else{if(msg&&msg.nodeType===1){display=msg.style.display;prev=msg.previousSibling;next=msg.nextSibling;parent=msg.parentNode;that._elemBack=function(){if(prev&&prev.parentNode){prev.parentNode.insertBefore(msg,prev.nextSibling);}else{if(next&&next.parentNode){next.parentNode.insertBefore(msg,next);}else{if(parent){parent.appendChild(msg);}}}msg.style.display=display;that._elemBack=null;};$content.html("");content.appendChild(msg);msg.style.display="block";}}if(!arguments[1]){if(that.config.follow){that.follow(that.config.follow);}else{width=wrap.offsetWidth-width;height=wrap.offsetHeight-height;left=left-width/2;top=top-height/2;wrap.style.left=Math.max(left,0)+"px";wrap.style.top=Math.max(top,0)+"px";}if(cssWidth&&cssWidth!=="auto"){wrap.style.width=wrap.offsetWidth+"px";}that._autoPositionType();}that._ie6SelectFix();that._runScript(content);return that;},title:function(text){var DOM=this.DOM,wrap=DOM.wrap,title=DOM.title,className="aui_state_noTitle";if(text===undefined){return title[0];}if(text===false){title.hide().html("");wrap.addClass(className);}else{title.show().html(text||"");wrap.removeClass(className);}return this;},position:function(left,top){var that=this,config=that.config,wrap=that.DOM.wrap[0],isFixed=_isIE6?false:config.fixed,ie6Fixed=_isIE6&&that.config.fixed,docLeft=_$document.scrollLeft(),docTop=_$document.scrollTop(),dl=isFixed?0:docLeft,dt=isFixed?0:docTop,ww=_$window.width(),wh=_$window.height(),ow=wrap.offsetWidth,oh=wrap.offsetHeight,style=wrap.style;if(left||left===0){that._left=left.toString().indexOf("%")!==-1?left:null;left=that._toNumber(left,ww-ow);if(typeof left==="number"){left=ie6Fixed?(left+=docLeft):left+dl;style.left=Math.max(left,dl)+"px";}else{if(typeof left==="string"){style.left=left;}}}if(top||top===0){that._top=top.toString().indexOf("%")!==-1?top:null;top=that._toNumber(top,wh-oh);if(typeof top==="number"){top=ie6Fixed?(top+=docTop):top+dt;style.top=Math.max(top,dt)+"px";}else{if(typeof top==="string"){style.top=top;}}}if(left!==undefined&&top!==undefined){that._follow=null;that._autoPositionType();}return that;},size:function(width,height){var maxWidth,maxHeight,scaleWidth,scaleHeight,that=this,config=that.config,DOM=that.DOM,wrap=DOM.wrap,main=DOM.main,wrapStyle=wrap[0].style,style=main[0].style;if(width){that._width=width.toString().indexOf("%")!==-1?width:null;maxWidth=_$window.width()-wrap[0].offsetWidth+main[0].offsetWidth;scaleWidth=that._toNumber(width,maxWidth);width=scaleWidth;if(typeof width==="number"){wrapStyle.width="auto";style.width=Math.max(that.config.minWidth,width)+"px";wrapStyle.width=wrap[0].offsetWidth+"px";}else{if(typeof width==="string"){style.width=width;width==="auto"&&wrap.css("width","auto");}}}if(height){that._height=height.toString().indexOf("%")!==-1?height:null;maxHeight=_$window.height()-wrap[0].offsetHeight+main[0].offsetHeight;scaleHeight=that._toNumber(height,maxHeight);height=scaleHeight;if(typeof height==="number"){style.height=Math.max(that.config.minHeight,height)+"px";}else{if(typeof height==="string"){style.height=height;}}}that._ie6SelectFix();return that;},follow:function(elem){var $elem,that=this,config=that.config;if(typeof elem==="string"||elem&&elem.nodeType===1){$elem=$(elem);elem=$elem[0];}if(!elem||!elem.offsetWidth&&!elem.offsetHeight){return that.position(that._left,that._top);}var expando=_expando+"follow",winWidth=_$window.width(),winHeight=_$window.height(),docLeft=_$document.scrollLeft(),docTop=_$document.scrollTop(),offset=$elem.offset(),width=elem.offsetWidth,height=elem.offsetHeight,isFixed=_isIE6?false:config.fixed,left=isFixed?offset.left-docLeft:offset.left,top=isFixed?offset.top-docTop:offset.top,wrap=that.DOM.wrap[0],style=wrap.style,wrapWidth=wrap.offsetWidth,wrapHeight=wrap.offsetHeight,setLeft=left-(wrapWidth-width)/2,setTop=top+height,dl=isFixed?0:docLeft,dt=isFixed?0:docTop;setLeft=setLeft<dl?left:(setLeft+wrapWidth>winWidth)&&(left-wrapWidth>dl)?left-wrapWidth+width:setLeft;setTop=(setTop+wrapHeight>winHeight+dt)&&(top-wrapHeight>dt)?top-wrapHeight:setTop;style.left=setLeft+"px";style.top=setTop+"px";that._follow&&that._follow.removeAttribute(expando);that._follow=elem;elem[expando]=config.id;that._autoPositionType();return that;},button:function(){var that=this,ags=arguments,DOM=that.DOM,buttons=DOM.buttons,elem=buttons[0],strongButton="aui_state_highlight",listeners=that._listeners=that._listeners||{},list=$.isArray(ags[0])?ags[0]:[].slice.call(ags);if(ags[0]===undefined){return elem;}$.each(list,function(i,val){var name=val.name,isNewButton=!listeners[name],button=!isNewButton?listeners[name].elem:document.createElement("button");if(!listeners[name]){listeners[name]={};}if(val.callback){listeners[name].callback=val.callback;}if(val.className){button.className=val.className;}if(val.focus){that._focus&&that._focus.removeClass(strongButton);that._focus=$(button).addClass(strongButton);that.focus();}button.setAttribute("type","button");button[_expando+"callback"]=name;button.disabled=!!val.disabled;if(isNewButton){button.innerHTML=name;listeners[name].elem=button;elem.appendChild(button);}});buttons[0].style.display=list.length?"":"none";that._ie6SelectFix();return that;},show:function(){this.DOM.wrap.show();!arguments[0]&&this._lockMaskWrap&&this._lockMaskWrap.show();return this;},hide:function(){this.DOM.wrap.hide();!arguments[0]&&this._lockMaskWrap&&this._lockMaskWrap.hide();return this;},close:function(){if(this.closed){return this;}var that=this,DOM=that.DOM,wrap=DOM.wrap,list=artDialog.list,fn=that.config.close,follow=that.config.follow;that.time();if(typeof fn==="function"&&fn.call(that,window)===false){return that;}that.unlock();that._elemBack&&that._elemBack();wrap[0].className=wrap[0].style.cssText="";DOM.title.html("");DOM.content.html("");DOM.buttons.html("");if(artDialog.focus===that){artDialog.focus=null;}if(follow){follow.removeAttribute(_expando+"follow");}delete list[that.config.id];that._removeEvent();that.hide(true)._setAbsolute();for(var i in that){if(that.hasOwnProperty(i)&&i!=="DOM"){delete that[i];}}_box?wrap.remove():_box=that;return that;},time:function(second){var that=this,cancel=that.config.cancelVal,timer=that._timer;timer&&clearTimeout(timer);if(second){that._timer=setTimeout(function(){that._click(cancel);},1000*second);}return that;},focus:function(){try{if(this.config.focus){var elem=this._focus&&this._focus[0]||this.DOM.close[0];elem&&elem.focus();}}catch(e){}return this;},zIndex:function(){var that=this,DOM=that.DOM,wrap=DOM.wrap,top=artDialog.focus,index=artDialog.defaults.zIndex++;wrap.css("zIndex",index);that._lockMask&&that._lockMask.css("zIndex",index-1);top&&top.DOM.wrap.removeClass("aui_state_focus");artDialog.focus=that;wrap.addClass("aui_state_focus");return that;},lock:function(){if(this._lock){return this;}var that=this,index=artDialog.defaults.zIndex-1,wrap=that.DOM.wrap,config=that.config,docWidth=_$document.width(),docHeight=_$document.height(),lockMaskWrap=that._lockMaskWrap||$(document.body.appendChild(document.createElement("div"))),lockMask=that._lockMask||$(lockMaskWrap[0].appendChild(document.createElement("div"))),domTxt="(document).documentElement",sizeCss=_isMobile?"width:"+docWidth+"px;height:"+docHeight+"px":"width:100%;height:100%",ie6Css=_isIE6?"position:absolute;left:expression("+domTxt+".scrollLeft);top:expression("+domTxt+".scrollTop);width:expression("+domTxt+".clientWidth);height:expression("+domTxt+".clientHeight)":"";that.zIndex();wrap.addClass("aui_state_lock");lockMaskWrap[0].style.cssText=sizeCss+";position:fixed;z-index:"+index+";top:0;left:0;overflow:hidden;"+ie6Css;lockMask[0].style.cssText="height:100%;background:"+config.background+";filter:alpha(opacity=0);opacity:0";if(_isIE6){lockMask.html('<iframe src="about:blank" style="width:100%;height:100%;position:absolute;'+'top:0;left:0;z-index:-1;filter:alpha(opacity=0)"></iframe>');}lockMask.stop();lockMask.bind("click",function(){that._reset();}).bind("dblclick",function(){that._reset();});if(config.duration===0){lockMask.css({opacity:config.opacity});}else{lockMask.animate({opacity:config.opacity},config.duration);}that._lockMaskWrap=lockMaskWrap;that._lockMask=lockMask;that._lock=true;return that;},unlock:function(){var that=this,lockMaskWrap=that._lockMaskWrap,lockMask=that._lockMask;if(!that._lock){return that;}var style=lockMaskWrap[0].style;var un=function(){if(_isIE6){style.removeExpression("width");style.removeExpression("height");style.removeExpression("left");style.removeExpression("top");}style.cssText="display:none";_box&&lockMaskWrap.remove();};lockMask.stop().unbind();that.DOM.wrap.removeClass("aui_state_lock");if(!that.config.duration){un();}else{lockMask.animate({opacity:0},that.config.duration,un);}that._lock=false;return that;},_getDOM:function(){var wrap=document.createElement("div"),body=document.body;wrap.style.cssText="position:absolute;left:0;top:0";wrap.innerHTML=artDialog._templates;body.insertBefore(wrap,body.firstChild);var name,i=0,DOM={wrap:$(wrap)},els=wrap.getElementsByTagName("*"),elsLen=els.length;for(;i<elsLen;i++){name=els[i].className.split("aui_")[1];if(name){DOM[name]=$(els[i]);}}return DOM;},_toNumber:function(thisValue,maxValue){if(!thisValue&&thisValue!==0||typeof thisValue==="number"){return thisValue;}var last=thisValue.length-1;if(thisValue.lastIndexOf("px")===last){thisValue=parseInt(thisValue);}else{if(thisValue.lastIndexOf("%")===last){thisValue=parseInt(maxValue*thisValue.split("%")[0]/100);}}return thisValue;},_ie6PngFix:_isIE6?function(){var i=0,elem,png,pngPath,runtimeStyle,path=artDialog.defaults.path+"/skins/",list=this.DOM.wrap[0].getElementsByTagName("*");for(;i<list.length;i++){elem=list[i];png=elem.currentStyle["png"];if(png){pngPath=path+png;runtimeStyle=elem.runtimeStyle;runtimeStyle.backgroundImage="none";runtimeStyle.filter="progid:DXImageTransform.Microsoft."+"AlphaImageLoader(src='"+pngPath+"',sizingMethod='crop')";}}}:$.noop,_ie6SelectFix:_isIE6?function(){var $wrap=this.DOM.wrap,wrap=$wrap[0],expando=_expando+"iframeMask",iframe=$wrap[expando],width=wrap.offsetWidth,height=wrap.offsetHeight;width=width+"px";height=height+"px";if(iframe){iframe.style.width=width;iframe.style.height=height;}else{iframe=wrap.appendChild(document.createElement("iframe"));$wrap[expando]=iframe;iframe.src="about:blank";iframe.style.cssText="position:absolute;z-index:-1;left:0;top:0;"+"filter:alpha(opacity=0);width:"+width+";height:"+height;}}:$.noop,_runScript:function(elem){var fun,i=0,n=0,tags=elem.getElementsByTagName("script"),length=tags.length,script=[];for(;i<length;i++){if(tags[i].type==="text/dialog"){script[n]=tags[i].innerHTML;n++;}}if(script.length){script=script.join("");fun=new Function(script);fun.call(this);}},_autoPositionType:function(){this[this.config.fixed?"_setFixed":"_setAbsolute"]();},_setFixed:(function(){_isIE6&&$(function(){var bg="backgroundAttachment";if(_$html.css(bg)!=="fixed"&&$("body").css(bg)!=="fixed"){_$html.css({zoom:1,backgroundImage:"url(about:blank)",backgroundAttachment:"fixed"});}});return function(){var $elem=this.DOM.wrap,style=$elem[0].style;if(_isIE6){var left=parseInt($elem.css("left")),top=parseInt($elem.css("top")),sLeft=_$document.scrollLeft(),sTop=_$document.scrollTop(),txt="(document.documentElement)";this._setAbsolute();style.setExpression("left","eval("+txt+".scrollLeft + "+(left-sLeft)+') + "px"');style.setExpression("top","eval("+txt+".scrollTop + "+(top-sTop)+') + "px"');}else{style.position="fixed";}};}()),_setAbsolute:function(){var style=this.DOM.wrap[0].style;if(_isIE6){style.removeExpression("left");style.removeExpression("top");}style.position="absolute";},_click:function(name){var that=this,fn=that._listeners[name]&&that._listeners[name].callback;return typeof fn!=="function"||fn.call(that,window)!==false?that.close():that;},_reset:function(test){var newSize,that=this,oldSize=that._winSize||_$window.width()*_$window.height(),elem=that._follow,width=that._width,height=that._height,left=that._left,top=that._top;if(test){newSize=that._winSize=_$window.width()*_$window.height();if(oldSize===newSize){return;}}if(width||height){that.size(width,height);}if(elem){that.follow(elem);}else{if(left||top){that.position(left,top);}}},_addEvent:function(){var resizeTimer,that=this,config=that.config,isIE="CollectGarbage" in window,DOM=that.DOM;that._winResize=function(){resizeTimer&&clearTimeout(resizeTimer);resizeTimer=setTimeout(function(){that._reset(isIE);},40);};_$window.bind("resize",that._winResize);DOM.wrap.bind("click",function(event){var target=event.target,callbackID;if(target.disabled){return false;}if(target===DOM.close[0]){that._click(config.cancelVal);return false;}else{callbackID=target[_expando+"callback"];callbackID&&that._click(callbackID);}that._ie6SelectFix();}).bind("mousedown",function(){that.zIndex();});},_removeEvent:function(){var that=this,DOM=that.DOM;DOM.wrap.unbind();_$window.unbind("resize",that._winResize);}};artDialog.fn._init.prototype=artDialog.fn;$.fn.dialog=$.fn.artDialog=function(){var config=arguments;this[this.live?"live":"bind"]("click",function(){artDialog.apply(this,config);return false;});return this;};artDialog.focus=null;artDialog.get=function(id){return id===undefined?artDialog.list:artDialog.list[id];};artDialog.list={};_$document.bind("keydown",function(event){var target=event.target,nodeName=target.nodeName,rinput=/^INPUT|TEXTAREA$/,api=artDialog.focus,keyCode=event.keyCode;if(!api||!api.config.esc||rinput.test(nodeName)){return;}keyCode===27&&api._click(api.config.cancelVal);});_path=window["_artDialog_path"]||(function(script,i,me){for(i in script){if(script[i].src&&script[i].src.indexOf("artDialog")!==-1){me=script[i];}}_thisScript=me||script[script.length-1];me=_thisScript.src.replace(/\\/g,"/");return me.lastIndexOf("/")<0?".":me.substring(0,me.lastIndexOf("/"));}(document.getElementsByTagName("script")));_skin=_thisScript.src.split("skin=")[1];if(_skin){var link=document.createElement("link");link.rel="stylesheet";link.href=_path+"/skins/"+_skin+".css?"+artDialog.fn.version;_thisScript.parentNode.insertBefore(link,_thisScript);}_$window.bind("load",function(){setTimeout(function(){if(_count){return;}artDialog({left:"-9999em",time:9,fixed:false,lock:false,focus:false});},150);});try{document.execCommand("BackgroundImageCache",false,true);}catch(e){}artDialog._templates='<div class="aui_outer">'+'<table class="aui_border">'+"<tbody>"+"<tr>"+'<td class="aui_nw"></td>'+'<td class="aui_n"></td>'+'<td class="aui_ne"></td>'+"</tr>"+"<tr>"+'<td class="aui_w"></td>'+'<td class="aui_c">'+'<div class="aui_inner">'+'<table class="aui_dialog">'+"<tbody>"+"<tr>"+'<td colspan="2" class="aui_header">'+'<div class="aui_titleBar">'+'<div class="aui_title"></div>'+'<a class="aui_close" href="javascript:/*artDialog*/;">'+"\xd7"+"</a>"+"</div>"+"</td>"+"</tr>"+"<tr>"+'<td class="aui_icon">'+'<div class="aui_iconBg"></div>'+"</td>"+'<td class="aui_main">'+'<div class="aui_content"></div>'+"</td>"+"</tr>"+"<tr>"+'<td colspan="2" class="aui_footer">'+'<div class="aui_buttons"></div>'+"</td>"+"</tr>"+"</tbody>"+"</table>"+"</div>"+"</td>"+'<td class="aui_e"></td>'+"</tr>"+"<tr>"+'<td class="aui_sw"></td>'+'<td class="aui_s"></td>'+'<td class="aui_se"></td>'+"</tr>"+"</tbody>"+"</table>"+"</div>";artDialog.defaults={content:'<div class="aui_loading"><span>loading..</span></div>',title:"\u6d88\u606f",button:null,ok:null,cancel:null,init:null,close:null,okVal:"\u786E\u5B9A",cancelVal:"\u53D6\u6D88",width:"auto",height:"auto",minWidth:96,minHeight:32,padding:"20px 25px",skin:"",icon:null,time:null,esc:true,focus:true,show:true,follow:null,path:_path,lock:false,background:"#000",opacity:0.7,duration:300,fixed:false,left:"50%",top:"38.2%",zIndex:1987,resize:true,drag:true};window.artDialog=$.dialog=$.artDialog=artDialog;}(this.art||this.jQuery&&(this.art=jQuery),this));(function($){var _dragEvent,_use,_$window=$(window),_$document=$(document),_elem=document.documentElement,_isIE6=!("minWidth" in _elem.style),_isLosecapture="onlosecapture" in _elem,_isSetCapture="setCapture" in _elem;artDialog.dragEvent=function(){var that=this,proxy=function(name){var fn=that[name];that[name]=function(){return fn.apply(that,arguments);};};proxy("start");proxy("move");proxy("end");};artDialog.dragEvent.prototype={onstart:$.noop,start:function(event){_$document.bind("mousemove",this.move).bind("mouseup",this.end);this._sClientX=event.clientX;this._sClientY=event.clientY;this.onstart(event.clientX,event.clientY);return false;},onmove:$.noop,move:function(event){this._mClientX=event.clientX;this._mClientY=event.clientY;this.onmove(event.clientX-this._sClientX,event.clientY-this._sClientY);return false;},onend:$.noop,end:function(event){_$document.unbind("mousemove",this.move).unbind("mouseup",this.end);this.onend(event.clientX,event.clientY);return false;}};_use=function(event){var limit,startWidth,startHeight,startLeft,startTop,isResize,api=artDialog.focus,DOM=api.DOM,wrap=DOM.wrap,title=DOM.title,main=DOM.main;var clsSelect="getSelection" in window?function(){window.getSelection().removeAllRanges();}:function(){try{document.selection.empty();}catch(e){}};_dragEvent.onstart=function(x,y){if(isResize){startWidth=main[0].offsetWidth;startHeight=main[0].offsetHeight;}else{startLeft=wrap[0].offsetLeft;startTop=wrap[0].offsetTop;}_$document.bind("dblclick",_dragEvent.end);!_isIE6&&_isLosecapture?title.bind("losecapture",_dragEvent.end):_$window.bind("blur",_dragEvent.end);_isSetCapture&&title[0].setCapture();wrap.addClass("aui_state_drag");api.focus();};_dragEvent.onmove=function(x,y){if(isResize){var wrapStyle=wrap[0].style,style=main[0].style,width=x+startWidth,height=y+startHeight;wrapStyle.width="auto";style.width=Math.max(0,width)+"px";wrapStyle.width=wrap[0].offsetWidth+"px";style.height=Math.max(0,height)+"px";}else{var style=wrap[0].style,left=Math.max(limit.minX,Math.min(limit.maxX,x+startLeft)),top=Math.max(limit.minY,Math.min(limit.maxY,y+startTop));style.left=left+"px";style.top=top+"px";}clsSelect();api._ie6SelectFix();};_dragEvent.onend=function(x,y){_$document.unbind("dblclick",_dragEvent.end);!_isIE6&&_isLosecapture?title.unbind("losecapture",_dragEvent.end):_$window.unbind("blur",_dragEvent.end);_isSetCapture&&title[0].releaseCapture();_isIE6&&!api.closed&&api._autoPositionType();wrap.removeClass("aui_state_drag");};isResize=event.target===DOM.se[0]?true:false;limit=(function(){var maxX,maxY,wrap=api.DOM.wrap[0],fixed=wrap.style.position==="fixed",ow=wrap.offsetWidth,oh=wrap.offsetHeight,ww=_$window.width(),wh=_$window.height(),dl=fixed?0:_$document.scrollLeft(),dt=fixed?0:_$document.scrollTop(),maxX=ww-ow+dl;maxY=wh-oh+dt;return{minX:dl,minY:dt,maxX:maxX,maxY:maxY};})();_dragEvent.start(event);};_$document.bind("mousedown",function(event){var api=artDialog.focus;if(!api){return;}var target=event.target,config=api.config,DOM=api.DOM;if(config.drag!==false&&target===DOM.title[0]||config.resize!==false&&target===DOM.se[0]){_dragEvent=_dragEvent||new artDialog.dragEvent();_use(event);return false;}});})(this.art||this.jQuery&&(this.art=jQuery));


/*!
 * artDialog iframeTools
 * Date: 2011-11-25 13:54
 * http://code.google.com/p/artdialog/
 * (c) 2009-2011 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://creativecommons.org/licenses/LGPL/2.1/
 */
;(function($,window,artDialog,undefined){var _topDialog,_proxyDialog,_zIndex,_data="@ARTDIALOG.DATA",_open="@ARTDIALOG.OPEN",_opener="@ARTDIALOG.OPENER",_winName=window.name=window.name||"@ARTDIALOG.WINNAME"+ +new Date,_isIE6=window.VBArray&&!window.XMLHttpRequest;$(function(){!window.jQuery&&document.compatMode==="BackCompat"&&alert('artDialog Error: document.compatMode === "BackCompat"');});var _top=artDialog.top=function(){var top=window,test=function(name){try{var doc=window[name].document;doc.getElementsByTagName;}catch(e){return false;}return window[name].artDialog&&doc.getElementsByTagName("frameset").length===0;};if(test("top")){top=window.top;}else{if(test("parent")){top=window.parent;}}return top;}();artDialog.parent=_top;_topDialog=_top.artDialog;_zIndex=function(){return _topDialog.defaults.zIndex;};artDialog.data=function(name,value){var top=artDialog.top,cache=top[_data]||{};top[_data]=cache;if(value!==undefined){cache[name]=value;}else{return cache[name];}return cache;};artDialog.removeData=function(name){var cache=artDialog.top[_data];if(cache&&cache[name]){delete cache[name];}};artDialog.through=_proxyDialog=function(){var api=_topDialog.apply(this,arguments);if(_top!==window){artDialog.list[api.config.id]=api;}return api;};_top!==window&&$(window).bind("unload",function(){var list=artDialog.list,config;for(var i in list){if(list[i]){config=list[i].config;if(config){config.duration=0;}list[i].close();}}});artDialog.open=function(url,options,cache){options=options||{};var api,DOM,$content,$main,iframe,$iframe,$idoc,iwin,ibody,top=artDialog.top,initCss="position:absolute;left:-9999em;top:-9999em;border:none 0;background:transparent",loadCss="width:100%;height:100%;border:none 0";if(cache===false){var ts=+new Date,ret=url.replace(/([?&])_=[^&]*/,"$1_="+ts);url=ret+((ret===url)?(/\?/.test(url)?"&":"?")+"_="+ts:"");}var load=function(){var iWidth,iHeight,loading=DOM.content.find(".aui_loading"),aConfig=api.config;$content.addClass("aui_state_full");loading&&loading.hide();try{iwin=iframe.contentWindow;$idoc=$(iwin.document);ibody=iwin.document.body;}catch(e){iframe.style.cssText=loadCss;aConfig.follow?api.follow(aConfig.follow):api.position(aConfig.left,aConfig.top);options.init&&options.init.call(api,iwin,top);options.init=null;return;}iWidth=aConfig.width==="auto"?$idoc.width()+(_isIE6?0:parseInt($(ibody).css("marginLeft"))):aConfig.width;iHeight=aConfig.height==="auto"?$idoc.height():aConfig.height;setTimeout(function(){iframe.style.cssText=loadCss;},0);api.size(iWidth,iHeight);aConfig.follow?api.follow(aConfig.follow):api.position(aConfig.left,aConfig.top);options.init&&options.init.call(api,iwin,top);options.init=null;};var config={zIndex:_zIndex(),init:function(){api=this;DOM=api.DOM;$main=DOM.main;$content=DOM.content;iframe=api.iframe=top.document.createElement("iframe");iframe.src=url;iframe.name="Open"+api.config.id;iframe.style.cssText=initCss;iframe.setAttribute("frameborder",0,0);iframe.setAttribute("allowTransparency",true);$iframe=$(iframe);api.content().appendChild(iframe);iwin=iframe.contentWindow;try{iwin.name=iframe.name;artDialog.data(iframe.name+_open,api);artDialog.data(iframe.name+_opener,window);}catch(e){}$iframe.bind("load",load);},close:function(){$iframe.css("display","none").unbind("load",load);if(options.close&&options.close.call(this,iframe.contentWindow,top)===false){return false;}$content.removeClass("aui_state_full");$iframe[0].src="about:blank";$iframe.remove();try{artDialog.removeData(iframe.name+_open);artDialog.removeData(iframe.name+_opener);}catch(e){}}};if(typeof options.ok==="function"){config.ok=function(){return options.ok.call(api,iframe.contentWindow,top);};}if(typeof options.cancel==="function"){config.cancel=function(){return options.cancel.call(api,iframe.contentWindow,top);};}delete options.content;for(var i in options){if(config[i]===undefined){config[i]=options[i];}}return _proxyDialog(config);};artDialog.open.api=artDialog.data(_winName+_open);artDialog.opener=artDialog.data(_winName+_opener)||window;artDialog.open.origin=artDialog.opener;artDialog.close=function(){var api=artDialog.data(_winName+_open);api&&api.close();return false;};_top!=window&&$(document).bind("mousedown",function(){var api=artDialog.open.api;api&&api.zIndex();});artDialog.load=function(url,options,cache){cache=cache||false;var opt=options||{};var config={zIndex:_zIndex(),init:function(here){var api=this,aConfig=api.config;$.ajax({url:url,success:function(content){api.content(content);opt.init&&opt.init.call(api,here);},cache:cache});}};delete options.content;for(var i in opt){if(config[i]===undefined){config[i]=opt[i];}}return _proxyDialog(config);};artDialog.alert=function(content,callback,iconid){if(!iconid||iconid=="undefined"){iconid="warning";}return _proxyDialog({id:"Alert",zIndex:_zIndex(),icon:iconid,fixed:true,lock:true,content:content,ok:true,close:callback});};artDialog.confirm=function(content,yes,no){return _proxyDialog({id:"Confirm",zIndex:_zIndex(),icon:"question",fixed:true,lock:true,opacity:0.1,content:content,ok:function(here){return yes.call(this,here);},cancel:function(here){return no&&no.call(this,here);}});};artDialog.prompt=function(content,yes,value){value=value||"";var input;return _proxyDialog({id:"Prompt",zIndex:_zIndex(),icon:"question",fixed:true,lock:true,opacity:0.1,content:['<div style="margin-bottom:5px;font-size:12px">',content,"</div>","<div>",'<input value="',value,'" style="width:18em;padding:6px 4px" />',"</div>"].join(""),init:function(){input=this.DOM.content.find("input")[0];input.select();input.focus();},ok:function(here){return yes&&yes.call(this,input.value,here);},cancel:true});};artDialog.tips=function(content,time){return _proxyDialog({id:"Tips",zIndex:_zIndex(),title:false,cancel:false,fixed:true,lock:false}).content('<div style="padding: 0 1em;">'+content+"</div>").time(time||1.5);};$(function(){var event=artDialog.dragEvent;if(!event){return;}var $window=$(window),$document=$(document),positionType=_isIE6?"absolute":"fixed",dragEvent=event.prototype,mask=document.createElement("div"),style=mask.style;style.cssText="display:none;position:"+positionType+";left:0;top:0;width:100%;height:100%;"+"cursor:move;filter:alpha(opacity=0);opacity:0;background:#FFF";document.body.appendChild(mask);dragEvent._start=dragEvent.start;dragEvent._end=dragEvent.end;dragEvent.start=function(){var DOM=artDialog.focus.DOM,main=DOM.main[0],iframe=DOM.content[0].getElementsByTagName("iframe")[0];dragEvent._start.apply(this,arguments);style.display="block";style.zIndex=artDialog.defaults.zIndex+3;if(positionType==="absolute"){style.width=$window.width()+"px";style.height=$window.height()+"px";style.left=$document.scrollLeft()+"px";style.top=$document.scrollTop()+"px";}if(iframe&&main.offsetWidth*main.offsetHeight>307200){main.style.visibility="hidden";}};dragEvent.end=function(){var dialog=artDialog.focus;dragEvent._end.apply(this,arguments);style.display="none";if(dialog){dialog.DOM.main[0].style.visibility="visible";}};});})(this.art||this.jQuery,this,this.artDialog);artDialog.notice=function(options){var opt=options||{},api,aConfig,hide,wrap,top,duration=800;var config={id:"Notice",left:"100%",top:"100%",fixed:true,drag:false,resize:false,follow:null,lock:false,init:function(here){api=this;aConfig=api.config;wrap=api.DOM.wrap;top=parseInt(wrap[0].style.top);hide=top+wrap[0].offsetHeight;wrap.css("top",hide+"px").animate({top:top+"px"},duration,function(){opt.init&&opt.init.call(api,here);});},close:function(here){wrap.animate({top:hide+"px"},duration,function(){opt.close&&opt.close.call(this,here);aConfig.close=$.noop;api.close();});return false;}};for(var i in opt){if(config[i]===undefined){config[i]=opt[i];}}return artDialog(config);};


(function (config) {
	config["title"] = "消息";
	config["okVal"] = "确定";
	config["cancelVal"] = "取消";
})(art.dialog.defaults);

	
	/**
	 * jQuery MD5 hash algorithm function
	 * 
	 * 	<code>
	 * 		Calculate the md5 hash of a String 
	 * 		String $.md5 ( String str )
	 * 	</code>
	 * 
	 * Calculates the MD5 hash of str using the » RSA Data Security, Inc. MD5 Message-Digest Algorithm, and returns that hash. 
	 * MD5 (Message-Digest algorithm 5) is a widely-used cryptographic hash function with a 128-bit hash value. MD5 has been employed in a wide variety of security applications, and is also commonly used to check the integrity of data. The generated hash is also non-reversable. Data cannot be retrieved from the message digest, the digest uniquely identifies the data.
	 * MD5 was developed by Professor Ronald L. Rivest in 1994. Its 128 bit (16 byte) message digest makes it a faster implementation than SHA-1.
	 * This script is used to process a variable length message into a fixed-length output of 128 bits using the MD5 algorithm. It is fully compatible with UTF-8 encoding. It is very useful when u want to transfer encrypted passwords over the internet. If you plan using UTF-8 encoding in your project don't forget to set the page encoding to UTF-8 (Content-Type meta tag). 
	 * This function orginally get from the WebToolkit and rewrite for using as the jQuery plugin.
	 * 
	 * Example
	 * 	Code
	 * 		<code>
	 * 			$.md5("I'm Persian."); 
	 * 		</code>
	 * 	Result
	 * 		<code>
	 * 			"b8c901d0f02223f9761016cfff9d68df"
	 * 		</code>
	 * 
	 * @alias Muhammad Hussein Fattahizadeh < muhammad [AT] semnanweb [DOT] com >
	 * @link http://www.semnanweb.com/jquery-plugin/md5.html
	 * @see http://www.webtoolkit.info/
	 * @license http://www.gnu.org/licenses/gpl.html [GNU General Public License]
	 * @param {jQuery} {md5:function(string))
	 * @return string
	 */
	
	(function($){
		
		var rotateLeft = function(lValue, iShiftBits) {
			return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
		}
		
		var addUnsigned = function(lX, lY) {
			var lX4, lY4, lX8, lY8, lResult;
			lX8 = (lX & 0x80000000);
			lY8 = (lY & 0x80000000);
			lX4 = (lX & 0x40000000);
			lY4 = (lY & 0x40000000);
			lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
			if (lX4 & lY4) return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
			if (lX4 | lY4) {
				if (lResult & 0x40000000) return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
				else return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
			} else {
				return (lResult ^ lX8 ^ lY8);
			}
		}
		
		var F = function(x, y, z) {
			return (x & y) | ((~ x) & z);
		}
		
		var G = function(x, y, z) {
			return (x & z) | (y & (~ z));
		}
		
		var H = function(x, y, z) {
			return (x ^ y ^ z);
		}
		
		var I = function(x, y, z) {
			return (y ^ (x | (~ z)));
		}
		
		var FF = function(a, b, c, d, x, s, ac) {
			a = addUnsigned(a, addUnsigned(addUnsigned(F(b, c, d), x), ac));
			return addUnsigned(rotateLeft(a, s), b);
		};
		
		var GG = function(a, b, c, d, x, s, ac) {
			a = addUnsigned(a, addUnsigned(addUnsigned(G(b, c, d), x), ac));
			return addUnsigned(rotateLeft(a, s), b);
		};
		
		var HH = function(a, b, c, d, x, s, ac) {
			a = addUnsigned(a, addUnsigned(addUnsigned(H(b, c, d), x), ac));
			return addUnsigned(rotateLeft(a, s), b);
		};
		
		var II = function(a, b, c, d, x, s, ac) {
			a = addUnsigned(a, addUnsigned(addUnsigned(I(b, c, d), x), ac));
			return addUnsigned(rotateLeft(a, s), b);
		};
		
		var convertToWordArray = function(string) {
			var lWordCount;
			var lMessageLength = string.length;
			var lNumberOfWordsTempOne = lMessageLength + 8;
			var lNumberOfWordsTempTwo = (lNumberOfWordsTempOne - (lNumberOfWordsTempOne % 64)) / 64;
			var lNumberOfWords = (lNumberOfWordsTempTwo + 1) * 16;
			var lWordArray = Array(lNumberOfWords - 1);
			var lBytePosition = 0;
			var lByteCount = 0;
			while (lByteCount < lMessageLength) {
				lWordCount = (lByteCount - (lByteCount % 4)) / 4;
				lBytePosition = (lByteCount % 4) * 8;
				lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
				lByteCount++;
			}
			lWordCount = (lByteCount - (lByteCount % 4)) / 4;
			lBytePosition = (lByteCount % 4) * 8;
			lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
			lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
			lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
			return lWordArray;
		};
		
		var wordToHex = function(lValue) {
			var WordToHexValue = "", WordToHexValueTemp = "", lByte, lCount;
			for (lCount = 0; lCount <= 3; lCount++) {
				lByte = (lValue >>> (lCount * 8)) & 255;
				WordToHexValueTemp = "0" + lByte.toString(16);
				WordToHexValue = WordToHexValue + WordToHexValueTemp.substr(WordToHexValueTemp.length - 2, 2);
			}
			return WordToHexValue;
		};
		
		var uTF8Encode = function(string) {
			string = string.replace(/\x0d\x0a/g, "\x0a");
			var output = "";
			for (var n = 0; n < string.length; n++) {
				var c = string.charCodeAt(n);
				if (c < 128) {
					output += String.fromCharCode(c);
				} else if ((c > 127) && (c < 2048)) {
					output += String.fromCharCode((c >> 6) | 192);
					output += String.fromCharCode((c & 63) | 128);
				} else {
					output += String.fromCharCode((c >> 12) | 224);
					output += String.fromCharCode(((c >> 6) & 63) | 128);
					output += String.fromCharCode((c & 63) | 128);
				}
			}
			return output;
		};
		
		$.extend({
			md5: function(string) {
				var x = Array();
				var k, AA, BB, CC, DD, a, b, c, d;
				var S11=7, S12=12, S13=17, S14=22;
				var S21=5, S22=9 , S23=14, S24=20;
				var S31=4, S32=11, S33=16, S34=23;
				var S41=6, S42=10, S43=15, S44=21;
				string = uTF8Encode(string);
				x = convertToWordArray(string);
				a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
				for (k = 0; k < x.length; k += 16) {
					AA = a; BB = b; CC = c; DD = d;
					a = FF(a, b, c, d, x[k+0],  S11, 0xD76AA478);
					d = FF(d, a, b, c, x[k+1],  S12, 0xE8C7B756);
					c = FF(c, d, a, b, x[k+2],  S13, 0x242070DB);
					b = FF(b, c, d, a, x[k+3],  S14, 0xC1BDCEEE);
					a = FF(a, b, c, d, x[k+4],  S11, 0xF57C0FAF);
					d = FF(d, a, b, c, x[k+5],  S12, 0x4787C62A);
					c = FF(c, d, a, b, x[k+6],  S13, 0xA8304613);
					b = FF(b, c, d, a, x[k+7],  S14, 0xFD469501);
					a = FF(a, b, c, d, x[k+8],  S11, 0x698098D8);
					d = FF(d, a, b, c, x[k+9],  S12, 0x8B44F7AF);
					c = FF(c, d, a, b, x[k+10], S13, 0xFFFF5BB1);
					b = FF(b, c, d, a, x[k+11], S14, 0x895CD7BE);
					a = FF(a, b, c, d, x[k+12], S11, 0x6B901122);
					d = FF(d, a, b, c, x[k+13], S12, 0xFD987193);
					c = FF(c, d, a, b, x[k+14], S13, 0xA679438E);
					b = FF(b, c, d, a, x[k+15], S14, 0x49B40821);
					a = GG(a, b, c, d, x[k+1],  S21, 0xF61E2562);
					d = GG(d, a, b, c, x[k+6],  S22, 0xC040B340);
					c = GG(c, d, a, b, x[k+11], S23, 0x265E5A51);
					b = GG(b, c, d, a, x[k+0],  S24, 0xE9B6C7AA);
					a = GG(a, b, c, d, x[k+5],  S21, 0xD62F105D);
					d = GG(d, a, b, c, x[k+10], S22, 0x2441453);
					c = GG(c, d, a, b, x[k+15], S23, 0xD8A1E681);
					b = GG(b, c, d, a, x[k+4],  S24, 0xE7D3FBC8);
					a = GG(a, b, c, d, x[k+9],  S21, 0x21E1CDE6);
					d = GG(d, a, b, c, x[k+14], S22, 0xC33707D6);
					c = GG(c, d, a, b, x[k+3],  S23, 0xF4D50D87);
					b = GG(b, c, d, a, x[k+8],  S24, 0x455A14ED);
					a = GG(a, b, c, d, x[k+13], S21, 0xA9E3E905);
					d = GG(d, a, b, c, x[k+2],  S22, 0xFCEFA3F8);
					c = GG(c, d, a, b, x[k+7],  S23, 0x676F02D9);
					b = GG(b, c, d, a, x[k+12], S24, 0x8D2A4C8A);
					a = HH(a, b, c, d, x[k+5],  S31, 0xFFFA3942);
					d = HH(d, a, b, c, x[k+8],  S32, 0x8771F681);
					c = HH(c, d, a, b, x[k+11], S33, 0x6D9D6122);
					b = HH(b, c, d, a, x[k+14], S34, 0xFDE5380C);
					a = HH(a, b, c, d, x[k+1],  S31, 0xA4BEEA44);
					d = HH(d, a, b, c, x[k+4],  S32, 0x4BDECFA9);
					c = HH(c, d, a, b, x[k+7],  S33, 0xF6BB4B60);
					b = HH(b, c, d, a, x[k+10], S34, 0xBEBFBC70);
					a = HH(a, b, c, d, x[k+13], S31, 0x289B7EC6);
					d = HH(d, a, b, c, x[k+0],  S32, 0xEAA127FA);
					c = HH(c, d, a, b, x[k+3],  S33, 0xD4EF3085);
					b = HH(b, c, d, a, x[k+6],  S34, 0x4881D05);
					a = HH(a, b, c, d, x[k+9],  S31, 0xD9D4D039);
					d = HH(d, a, b, c, x[k+12], S32, 0xE6DB99E5);
					c = HH(c, d, a, b, x[k+15], S33, 0x1FA27CF8);
					b = HH(b, c, d, a, x[k+2],  S34, 0xC4AC5665);
					a = II(a, b, c, d, x[k+0],  S41, 0xF4292244);
					d = II(d, a, b, c, x[k+7],  S42, 0x432AFF97);
					c = II(c, d, a, b, x[k+14], S43, 0xAB9423A7);
					b = II(b, c, d, a, x[k+5],  S44, 0xFC93A039);
					a = II(a, b, c, d, x[k+12], S41, 0x655B59C3);
					d = II(d, a, b, c, x[k+3],  S42, 0x8F0CCC92);
					c = II(c, d, a, b, x[k+10], S43, 0xFFEFF47D);
					b = II(b, c, d, a, x[k+1],  S44, 0x85845DD1);
					a = II(a, b, c, d, x[k+8],  S41, 0x6FA87E4F);
					d = II(d, a, b, c, x[k+15], S42, 0xFE2CE6E0);
					c = II(c, d, a, b, x[k+6],  S43, 0xA3014314);
					b = II(b, c, d, a, x[k+13], S44, 0x4E0811A1);
					a = II(a, b, c, d, x[k+4],  S41, 0xF7537E82);
					d = II(d, a, b, c, x[k+11], S42, 0xBD3AF235);
					c = II(c, d, a, b, x[k+2],  S43, 0x2AD7D2BB);
					b = II(b, c, d, a, x[k+9],  S44, 0xEB86D391);
					a = addUnsigned(a, AA);
					b = addUnsigned(b, BB);
					c = addUnsigned(c, CC);
					d = addUnsigned(d, DD);
				}
				var tempValue = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
				return tempValue.toLowerCase();
			}
		});
	})(jQuery);

/**
 * PHPOK程序中常用到的JS，封装在此
 * @作者 qinggan <admin@phpok.com>
 * @版权 深圳市锟铻科技有限公司
 * @网站 http://www.phpok.com
 * @版本 4.x
 * @授权 GNU Lesser General Public License (LGPL)
 * @日期 2017年04月18日
**/

;(function($){
	$.phpok = {

		/**
		 * 刷新当前页面，使用方法：$.phpok.refresh();
		**/
		refresh: function()
		{
			window.location.reload(true);
		},

		/**
		 * 刷新页面别名，使用方法：$.phpok.reload();
		**/
		reload:function()
		{
			this.refresh();
		},

		/**
		 * 跳转到目标网址
		 * @参数 url 要跳转到的网址
		 * @参数 nocache 是否禁止缓存，设置且为true时，程序会在网址后面补增_noCache参数
		**/
		go: function(url,nocache)
		{
			if(!url){
				return false;
			}
			if(nocache || nocache == 'undefined'){
				url = this.nocache(url);
			}
			window.location.href = url;
		},

		/**
		 * 弹出窗口
		 * @参数 url 要弹出窗口的网址
		 * @参数 nocache 是否禁止缓存，设置且为true时，程序会在网址后面补增_noCache参数
		**/
		open:function(url,nocache)
		{
			if(!url){
				return false;
			}
			if(nocache || nocache == 'undefined'){
				url = this.nocache(url);
			}
			window.open(url);
		},

		/**
		 * 读取Ajax的内容，读出来的内容为html
		 * @参数 url 目标网址
		 * @参数 obj 执行方法，为空或未设置，则返回HTML代码，此时为同步请求
		**/
		ajax:function(url,obj)
		{
			if(!url){
				return false;
			}
			var cls = {'url':url,'cache':false,'dataType':'html'};
			cls.beforeSend = function(XMLHttpRequest){XMLHttpRequest.setRequestHeader("request_type","ajax");};
			if(!obj || obj == 'undefined'){
				cls.async = false;
				return $.ajax(cls).responseText;
			}
			cls.success = function(rs){(obj)(rs)};
			$.ajax(cls);
		},

		/**
		 * 读取 Ajax 内容，返回JSON数据
		 * @参数 url 目标网址
		 * @参数 obj 执行方法，为空或未设置，则返回JSON对象，此时为同步请求
		**/
		json:function(url,obj)
		{
			if(!url){
				return false;
			}
			var self = this;
			var cls = {'url':url,'cache':false,'dataType':'json'};
			cls.beforeSend = function(XMLHttpRequest){XMLHttpRequest.setRequestHeader("request_type","ajax");};
			if(!obj || obj == 'undefined'){
				cls.async = false;
				var info = $.ajax(cls).responseText;
				return self.json_decode(info);
			}
			cls.success = function(rs){(obj)(rs)};
			$.ajax(cls);
		},

		/**
		 * 格式化网址，增加_noCache尾巴，以保证不从缓存中读取数据
		 * @参数 url 要格式化的网址
		**/
		nocache: function(url)
		{
			url = url.replace(/&amp;/g,'&');
			if(url.indexOf('_noCache') != -1){
				url = url.replace(/\_noCache=[0-9\.]+/,'_noCache='+Math.random());
			}else{
				url += url.indexOf('?') != -1 ? '&' : '?';
				url += '_noCache='+Math.random();
			}
			return url;
		},

		
		json_encode:function(obj)
		{
			if(!obj || obj == 'undefined'){
				return false;
			}
			return JSON.stringify(obj);
		},

		
		json_decode:function(str)
		{
			if(!str || str == 'undefined'){
				return false;
			}
			return $.parseJSON(str);
		},

		/**
		 * 生成随机数
		 * @参数 len 长度，留空使用长度10
		 * @参数 type 类型，支持 letter,num,fixed,all，其中 fixed 表示字母数字混合，all 表示字母，数字，及特殊符号，letter 表示字母，num 表示数字
		**/
		rand:function(len,type)
		{
			len = len || 10;
			if(!type || type == 'undefined'){
				type = 'letter';
			}
			var types = {'letter':'abcdefhijkmnprstwxyz','num':'0123456789','fixed':'abcdefhijkmnprstwxyz0123456789','all':'abcdefhijkmnprstwxyz0123456789-,.*!@#$%=~'}
			if(type != 'letter' && type != 'num' && type != 'all' && type != 'fixed'){
				type = 'letter';
			}
			var string = types[type];
			var length = string.length;
			var val = '';
			for (i = 0; i < len; i++) {
				val += string.charAt(Math.floor(Math.random() * length));
			}
			return val;
		}
	};

	/**
	 * JSON字串与对象转换操作
	**/
	$.json = {
		
		/**
		 * 字符串转对象
		 * @参数 str 要转化的字符串
		**/
		decode:function(str)
		{
			if(!str || str == 'undefined'){
				return false;
			}
			return JSON.parse(str);
		},

		/**
		 * 对象转成字符串
		 * @参数 obj 要转化的对象
		**/
		encode:function(obj)
		{
			if(!obj || obj == 'undefined'){
				return false;
			}
			return JSON.stringify(obj);
		}
	};

	$.checkbox = {
		_obj:function(id)
		{
			if(id && id != 'undefined' && typeof id == 'string'){
				if(id.match(/^[a-zA-Z0-9\-\_]{1,}$/)){
					if($("#"+id).is('input')){
						return $("#"+id);
					}
					return $("#"+id+" input[type=checkbox]");
				}
				if($(id).is('input')){
					return $(id);
				}
				return $(id+" input[type=checkbox]");
			}
			return $("input[type=checkbox]");
		},

		/**
		 * 全选
		 * @参数 id 要操作的ID
		**/
		all:function(id)
		{
			var obj = this._obj(id);
			obj.prop('checked',true);
			return true;
		},

		/**
		 * 返先
		 * @参数 id 要操作的ID
		**/
		none:function(id)
		{
			var obj = this._obj(id);
			obj.removeAttr('checked');
			return true;
		},

		/**
		 * 更多选择，默认只选5个（count默认值为5） $.checkbox.more(id,5);
		 * @参数 id 要操作的ID
		 * @参数 count 每次次最多选几个
		**/
		more: function(id,count){
			var obj = this._obj(id);
			var num = 0;
			if(!count || count == 'undefined' || parseInt(count)<5){
				count = 5;
			}
			obj.each(function(){
				if(!$(this).is(":checked") && num<count){
					$(this).prop("checked",true);
					num++;
				}
			});
			return true;
		},

		/**
		 * 反选，调用方法：$.checkbox.anti(id);
		 * @参数 id 要操作的ID
		**/
		anti:function(id)
		{
			var t = this._obj(id);
			t.each(function(i){
				if($(this).is(":checked")){
					$(this).removeAttr('checked');
				}else{
					$(this).prop('checked',true);
				}
			});
		},

		/**
		 * 合并复选框值信息
		 * @参数 id 要操作的ID
		 * @参数 type 要支持合关的字符
		 * @参数 str 要连接的字符，为空或未设置使用英文逗号隔开
		**/
		join:function(id,type,str)
		{
			var cv = this._obj(id);
			var idarray = new Array();
			var m = 0;
			cv.each(function(){
				if(type == "all"){
					idarray[m] = $(this).val();
					m++;
				}else if(type == "unchecked" && !$(this).is(':checked')){
					idarray[m] = $(this).val();
					m++;
				}else{
					if($(this).is(':checked')){
						idarray[m] = $(this).val();
						m++;
					}
				}
			});
			var linkid = (str && str != 'undefined') ? str : ',';
			var tid = idarray.join(linkid);
			return tid;
		}
	}

	/**
	 * 字符串相关操作
	**/
	$.str = {

		/**
		 * 字符串合并，用英文逗号隔开
		 * @参数 str1 要合并的字符串1
		 * @参数 str2 要合并的字符串2
		**/
		join: function(str1,str2){
			var string = '';
			if(!str1 || str1 == 'undefined'){
				if(!str2 || str2 == 'undefined'){
					return false;
				}
				string = str2;
			}
			if(str1 && str1 != 'undefined'){
				if(!str2 || str2 == 'undefined'){
					string = str1;
				}else{
					string = str1 + "," + str2;
				}
			}
			if(string == ''){
				return false;
			}
			var array = string.split(",");
			array = $.unique(array);
			string = array.join(",");
			return string ? string : false;
		},

		/**
		 * 字符串标识符检测
		 * @参数 str 要检测的字符串
		 * @返回 true 或 false
		**/
		identifier: function(str){
			//验证标识串，PHPOK系统中，大量使用标识串，将此检测合并进来
			var chk = /^[A-Za-z]+[a-zA-Z0-9_\-]*$/;
			return chk.test(str);
		},

		/**
		 * 网址常规编码
		 * @参数 str 要编码的字符串
		**/
		encode: function(str){
			return encodeURIComponent(str);
		}
	};

	/**
	 * 由PHPOK编写的基于jQuery的Cookie操作
	 * 读取cookie信息 $.cookie.get("变量名");
	 * 设置cookie信息 
	 * 删除Cookie信息 $.cookie.del("变量名");
	**/
	$.cookie = {

		/**
		 * 取得 Cookie 信息 $.cookie.get('变量名')
		 * @参数 name 要获取的 cookie 变量中的标识
		**/
		get: function(name)
		{
			var cookieValue = "";
			var search = name + "=";
			if(document.cookie.length > 0){
				var offset = document.cookie.indexOf(search);
				if (offset != -1){
					offset += search.length;
					var end = document.cookie.indexOf(";", offset);
					if (end == -1){
						end = document.cookie.length;
					}
					cookieValue = unescape(document.cookie.substring(offset, end));
					end = null;
				}
				search = offset = null;
			}
			return cookieValue;
		},

		/**
		 * 设置 Cookie 信息 $.cookie.set("变量名","值","过期时间");
		 * @参数 cookieName 变量名
		 * @参数 cookieValue 变量内容
		 * @参数 DayValue 过期时间，默认是1天，单位是天
		 * @返回 
		 * @更新时间 
		**/
		set: function(cookieName,cookieValue,DayValue)
		{
			var expire = "";
			var day_value=1;
			if(DayValue!=null){
				day_value=DayValue;
			}
			expire = new Date((new Date()).getTime() + day_value * 86400000);
			expire = "; expires=" + expire.toGMTString();
			document.cookie = cookieName + "=" + escape(cookieValue) +";path=/"+ expire;
			cookieName = cookieValue = DayValue = day_value = expire = null;
		},

		/**
		 * 删除 Cookie 操作
		 * @参数 cookieName 变量名
		**/
		del: function(cookieName){
			var expire = "";
			expire = new Date((new Date()).getTime() - 1 );
			expire = "; expires=" + expire.toGMTString();
			document.cookie = cookieName + "=" + escape("") +";path=/"+ expire;		
			cookieName = expire = null;
		}
	};

	$.extend({
		identifier:function(id)
		{
			return $.str.identifier(id);
		}
		//func1:function(id){
		//},
		//func2:function(id){
		//}
	});

})(jQuery);

function identifier(str)
{
	return $.str.identifier(str);
}


/**
 * 旧版 Input 操作类
**/
;(function($){

	$.input = {

		checkbox_all: function(id)
		{
			return $.checkbox.all(id);
		},
		
		//全不选，调用方法：$.input.checkbox_none(id);
		checkbox_none: function(id)
		{
			return $.checkbox.none(id);
		},
		
		//每次选5个（total默认值为5） $.input.checkbox_not_all(id,5);
		checkbox_not_all: function(id,total)
		{
			return $.checkbox.more(id,total);
		},
		
		//反选，调用方法：$.input.checkbox_anti(id);
		checkbox_anti: function(id)
		{
			return $.checkbox.anti(id);
		},

		//合并复选框值信息，以英文逗号隔开
		checkbox_join: function(id,type)
		{
			return $.checkbox.join(id,type);
		}

	};

})(jQuery);

/**
 * 表单通用JS，涉及到自定义表单中所有的JS文件，请注意，此文件需要加载在 jQuery 之后，且不建议直接读取
 * @作者 qinggan <admin@phpok.com>
 * @版权 深圳市锟铻科技有限公司
 * @网站 http://www.phpok.com
 * @版本 4.x
 * @授权 http://www.phpok.com/lgpl.html PHPOK开源授权协议：GNU Lesser General Public License
 * @日期 2017年03月22日
**/

//异步加载js
function load_js(url)
{
	if(!url || url == "undefined") return false;
	var lst = url.split(",");
	var lst_count = lst.length;
	var elist = new Array();
	var tm = 0;
	$("script").each(function(t){
		var src = $(this).attr("src");
		if(src && src != 'undefined'){
			elist[tm] = src;
			tm++; 
		}
	});
	var html = '';
	for(var i=0;i<lst_count;i++)
	{
		if($.inArray(lst[i],elist) < 0)
		{
			html += '<script type="text/javascript" src="'+lst[i]+'"></script>';
		}
	}
	$("head").append(html);
}

// 同步加载Ajax，返回字符串
function get_ajax(turl)
{
	return $.phpok.ajax(turl);
}

// 同步加载Ajax，返回JSON数组
function json_ajax(turl)
{
	return $.phpok.json(turl);
}

/**
 * JS语法中涉及到的语言包替换
 * @参数 str 要替换的语言包，支持使用{}包起来的变量
 * @参数 info 支持字符串，对数数据，要替换的变量，为空表示没有变量信息
 * @返回 替换后的数据
 * @更新时间 
**/
function p_lang(str,info)
{
	if(!str || str == 'undefined'){
		return false;
	}
	if(lang && lang[str]){
		if(!info || info == 'undefined' || typeof info == 'boolean'){
			return lang[str];
		}
		str = lang[str];
		if(typeof info == 'string' || typeof info == 'number'){
			return str.replace(/\{\w+\}/,info);
		}
		for(var i in info){
			str = str.replace('{'+i+'}',info[i]);
		}
		return str;
	}
	if(!info || info == 'undefined' || typeof info == 'boolean'){
		return str;
	}
	if(typeof info == 'string' || typeof info == 'number'){
		return str.replace(/\{\w+\}/,info);
	}
	for(var i in info){
		str = str.replace('{'+i+'}',info[i]);
	}
	return str;
}

// 异步加载Ajax，执行函数
function ajax_async(turl,func,type)
{
	if(!turl || turl == "undefined")
	{
		return false;
	}
	if(!func || func == "undefined")
	{
		return false;
	}
	if(!type || type == "undefined")
	{
		type = "json";
	}
	if(type != "html" && type != "json" && type != "text" && type != "xml")
	{
		type = "json";
	}
	turl = $.phpok.nocache(turl);
	$.ajax({
		'url': turl,
		'cache': false,
		'async': true,
		'dataType': type,
		'success': function(rs){
			(func)(rs);
		}
	});
}

// 跳转页面
function direct(url)
{
	if(!url || url == "undefined") url = window.location.href;
	$.phpok.go(url);
}

//自动刷新
function auto_refresh(rs)
{
	$.phpok.reload();
}

function autosave_callback(rs)
{
	return true;
}

/* 计算字符数长度，中文等同于三个字符，英文为一个字符 */
function strlen(str)
{
	var len = str.length;
	var reLen = 0;
	for (var i = 0; i < len; i++)
	{
		if (str.charCodeAt(i) < 27 || str.charCodeAt(i) > 126)
		{
			reLen += 3;
		} else {
			reLen++;
		}
	}
	if(reLen > 1024 && reLen < (1024 * 1024))
	{
		var reLen = (parseFloat(reLen / 1024).toFixed(3)).toString() + "KB";
	}
	else if(reLen > (1024 * 1024) && reLen < (1024 * 1024 * 1024))
	{
		var reLen = (parseFloat(reLen / (1024 * 1024)).toFixed(3)).toString() + "MB";
	}
	if(!reLen) reLen = "0";
	return reLen;
}


//友情提示
function tips(content,time,id)
{
	if(!time || time == "undefined") time = 1.5;
	if(!id || id == "undefind")
	{
		$.dialog.tips(content,time);
	}
	else
	{
		return $.dialog({
			id: 'Tips',
			title: false,
			cancel: false,
			fixed: true,
			lock: false,
			focus: id,
			resize: false
		}).content(content).time(time || 1.5);
	}
}

/* 计算数组或对像中的个数 */
function count(id)
{
	var t = typeof id;
	if(t == 'string') return id.length;
	if(t == 'object')
	{
		var n = 0;
		for(var i in id)
		{
			n++;
		}
		return n;
	}
	return false;
}





/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;o>a;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function o(a){for(var n=new FormData,i=0;i<a.length;i++)n.append(a[i].name,a[i].value);if(t.extraData){var o=r(t.extraData);for(i=0;i<o.length;i++)o[i]&&n.append(o[i][0],o[i][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),s.data=null;var c=s.beforeSend;return s.beforeSend=function(e,r){r.data=t.formData?t.formData:n,c&&c.call(this,e,r)},e.ajax(s)}function s(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(r){a("cannot get iframe.contentWindow document: "+r)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function o(){function t(){try{var e=n(g).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){a("Server abort: ",r," (",r.name,")"),s(k),j&&clearTimeout(j),j=void 0}}var r=f.attr2("target"),i=f.attr2("action"),o="multipart/form-data",c=f.attr("enctype")||f.attr("encoding")||o;w.setAttribute("target",p),(!u||/post/i.test(u))&&w.setAttribute("method","POST"),i!=m.url&&w.setAttribute("action",m.url),m.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(j=setTimeout(function(){T=!0,s(D)},m.timeout));var l=[];try{if(m.extraData)for(var d in m.extraData)m.extraData.hasOwnProperty(d)&&l.push(e.isPlainObject(m.extraData[d])&&m.extraData[d].hasOwnProperty("name")&&m.extraData[d].hasOwnProperty("value")?e('<input type="hidden" name="'+m.extraData[d].name+'">').val(m.extraData[d].value).appendTo(w)[0]:e('<input type="hidden" name="'+d+'">').val(m.extraData[d]).appendTo(w)[0]);m.iframeTarget||v.appendTo("body"),g.attachEvent?g.attachEvent("onload",s):g.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(h){var x=document.createElement("form").submit;x.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",c),r?w.setAttribute("target",r):f.removeAttr("target"),e(l).remove()}}function s(t){if(!x.aborted&&!F){if(M=n(g),M||(a("cannot access response document"),t=k),t===D&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t==k&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(M&&M.location.href!=m.iframeSrc||T){g.detachEvent?g.detachEvent("onload",s):g.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=M.body?M.body:M.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(m.dataType="xml"),x.getResponseHeader=function(e){var t={"content-type":m.dataType};return t[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(m.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||m.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)x.responseText=f.value,x.status=Number(f.getAttribute("status"))||x.status,x.statusText=f.getAttribute("statusText")||x.statusText;else if(l){var p=M.getElementsByTagName("pre")[0],h=M.getElementsByTagName("body")[0];p?x.responseText=p.textContent?p.textContent:p.innerText:h&&(x.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==c&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));try{E=_(x,c,m)}catch(y){i="parsererror",x.error=r=y||i}}catch(y){a("error caught: ",y),i="error",x.error=r=y||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(m.success&&m.success.call(m.context,E,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,m])):i&&(void 0===r&&(r=x.statusText),m.error&&m.error.call(m.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,m,r])),d&&e.event.trigger("ajaxComplete",[x,m]),d&&!--e.active&&e.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,x,i),F=!0,m.timeout&&clearTimeout(j),setTimeout(function(){m.iframeTarget?v.attr("src",m.iframeSrc):v.remove(),x.responseXML=null},100)}}}var c,l,m,d,p,v,g,x,y,b,T,j,w=f[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(l=0;l<h.length;l++)c=e(h[l]),i?c.prop("disabled",!1):c.removeAttr("disabled");if(m=e.extend(!0,{},e.ajaxSettings,t),m.context=m.context||m,p="jqFormIO"+(new Date).getTime(),m.iframeTarget?(v=e(m.iframeTarget),b=v.attr2("name"),b?p=b:v.attr2("name",p)):(v=e('<iframe name="'+p+'" src="'+m.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=v[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")}catch(n){}v.attr("src",m.iframeSrc),x.error=r,m.error&&m.error.call(m.context,x,r,t),d&&e.event.trigger("ajaxError",[x,m,r]),m.complete&&m.complete.call(m.context,x,r)}},d=m.global,d&&0===e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,m]),m.beforeSend&&m.beforeSend.call(m.context,x,m)===!1)return m.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;y=w.clk,y&&(b=y.name,b&&!y.disabled&&(m.extraData=m.extraData||{},m.extraData[b]=y.value,"image"==y.type&&(m.extraData[b+".x"]=w.clk_x,m.extraData[b+".y"]=w.clk_y)));var D=1,k=2,A=e("meta[name=csrf-token]").attr("content"),L=e("meta[name=csrf-param]").attr("content");L&&A&&(m.extraData=m.extraData||{},m.extraData[L]=A),m.forceSync?o():setTimeout(o,10);var E,M,F,O=50,X=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},_=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var u,c,l,f=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),u=t.type||this.attr2("method"),c=t.url||this.attr2("action"),l="string"==typeof c?e.trim(c):"",l=l||window.location.href||"",l&&(l=(l.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:l,success:e.ajaxSettings.success,type:u||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var d=t.traditional;void 0===d&&(d=e.ajaxSettings.traditional);var p,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,p=e.param(t.data,d)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,d);p&&(g=g?g+"&"+p:p),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var x=[];if(t.resetForm&&x.push(function(){f.resetForm()}),t.clearForm&&x.push(function(){f.clearForm(t.includeHidden)}),!t.dataType&&t.target){var y=t.success||function(){};x.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(y,arguments)})}else t.success&&x.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=x.length;o>i;i++)x[i].apply(n,[e,r,a||f,f])},t.error){var b=t.error;t.error=function(e,r,a){var n=t.context||this;b.apply(n,[e,r,a,f])}}if(t.complete){var T=t.complete;t.complete=function(e,r){var a=t.context||this;T.apply(a,[e,r,f])}}var j=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}),w=j.length>0,S="multipart/form-data",D=f.attr("enctype")==S||f.attr("encoding")==S,k=n.fileapi&&n.formdata;a("fileAPI :"+k);var A,L=(w||D)&&!k;t.iframe!==!1&&(t.iframe||L)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){A=s(v)}):A=s(v):A=(w||D)&&k?o(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",A);for(var E=0;E<h.length;E++)h[E]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i,o=this[0],s=this.attr("id"),u=t?o.getElementsByTagName("*"):o.elements;if(u&&!/MSIE [678]/.test(navigator.userAgent)&&(u=e(u).get()),s&&(i=e(':input[form="'+s+'"]').get(),i.length&&(u=(u||[]).concat(i))),!u||!u.length)return a;var c,l,f,m,d,p,h;for(c=0,p=u.length;p>c;c++)if(d=u[c],f=d.name,f&&!d.disabled)if(t&&o.clk&&"image"==d.type)o.clk==d&&(a.push({name:f,value:e(d).val(),type:d.type}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}));else if(m=e.fieldValue(d,!0),m&&m.constructor==Array)for(r&&r.push(d),l=0,h=m.length;h>l;l++)a.push({name:f,value:m[l]});else if(n.fileapi&&"file"==d.type){r&&r.push(d);var v=d.files;if(v.length)for(l=0;l<v.length;l++)a.push({name:f,value:v[l],type:d.type});else a.push({name:f,value:"",type:d.type})}else null!==m&&"undefined"!=typeof m&&(r&&r.push(d),a.push({name:f,value:m,type:d.type,required:d.required}));if(!t&&o.clk){var g=e(o.clk),x=g[0];f=x.name,f&&!x.disabled&&"image"==x.type&&(a.push({name:f,value:g.val()}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++)r.push({name:a,value:n[i]});else null!==n&&"undefined"!=typeof n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;n>a;a++){var i=this[a],o=e.fieldValue(i,t);null===o||"undefined"==typeof o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,c="select-one"==n,l=c?o+1:u.length,f=c?o:0;l>f;f++){var m=u[f];if(m.selected){var d=m.value;if(d||(d=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),c)return d;s.push(d)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});

/*! jQuery JSON plugin 2.4.0 | code.google.com/p/jquery-json */
(function($){'use strict';var escape=/["\\\x00-\x1f\x7f-\x9f]/g,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},hasOwn=Object.prototype.hasOwnProperty;$.toJSON=typeof JSON==='object'&&JSON.stringify?JSON.stringify:function(o){if(o===null){return'null';}
var pairs,k,name,val,type=$.type(o);if(type==='undefined'){return undefined;}
if(type==='number'||type==='boolean'){return String(o);}
if(type==='string'){return $.quoteString(o);}
if(typeof o.toJSON==='function'){return $.toJSON(o.toJSON());}
if(type==='date'){var month=o.getUTCMonth()+1,day=o.getUTCDate(),year=o.getUTCFullYear(),hours=o.getUTCHours(),minutes=o.getUTCMinutes(),seconds=o.getUTCSeconds(),milli=o.getUTCMilliseconds();if(month<10){month='0'+month;}
if(day<10){day='0'+day;}
if(hours<10){hours='0'+hours;}
if(minutes<10){minutes='0'+minutes;}
if(seconds<10){seconds='0'+seconds;}
if(milli<100){milli='0'+milli;}
if(milli<10){milli='0'+milli;}
return'"'+year+'-'+month+'-'+day+'T'+
hours+':'+minutes+':'+seconds+'.'+milli+'Z"';}
pairs=[];if($.isArray(o)){for(k=0;k<o.length;k++){pairs.push($.toJSON(o[k])||'null');}
return'['+pairs.join(',')+']';}
if(typeof o==='object'){for(k in o){if(hasOwn.call(o,k)){type=typeof k;if(type==='number'){name='"'+k+'"';}else if(type==='string'){name=$.quoteString(k);}else{continue;}
type=typeof o[k];if(type!=='function'&&type!=='undefined'){val=$.toJSON(o[k]);pairs.push(name+':'+val);}}}
return'{'+pairs.join(',')+'}';}};$.evalJSON=typeof JSON==='object'&&JSON.parse?JSON.parse:function(str){return eval('('+str+')');};$.secureEvalJSON=typeof JSON==='object'&&JSON.parse?JSON.parse:function(str){var filtered=str.replace(/\\["\\\/bfnrtu]/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,'');if(/^[\],:{}\s]*$/.test(filtered)){return eval('('+str+')');}
throw new SyntaxError('Error parsing JSON, source is not valid.');};$.quoteString=function(str){if(str.match(escape)){return'"'+str.replace(escape,function(a){var c=meta[a];if(typeof c==='string'){return c;}
c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);})+'"';}
return'"'+str+'"';};}(jQuery));

/***********************************************************
	Filename: {phpok}js/global.www.js
	Note	: 前台公共JS加载
	Version : 4.0
	Web		: www.phpok.com
	Author  : qinggan <qinggan@188.com>
	Update  : 2013年9月12日
***********************************************************/
//前台通用弹出窗口
function phpok_open(id,title)
{
	if(id == "login" || id == "register")
	{
		var url = get_url("ajax","exit","filename="+id);
	}
	else
	{
		var url = id;
	}
	if(!title || title == "undefined") title = '弹出窗';
	$.dialog.open(url,{
		 "title":title
		,"resize":true
		,"lock":true
		,"id":"phpok_open_frame"
		,"fixed":true
		,"drag":false
	});
}

//前台常用JS函数封装
;(function($){
//定义验证码
$.fn.phpok_vcode = function(ext){
	var url = api_url('vcode');
	if(ext && ext != 'undefined')
	{
		url += "&id="+ext;
	}
	$(this).attr('src',$.phpok.nocache(url));
}
$.phpok_www = {
	comment:function(id,tid,callback){
		if(!tid || tid == 'undefined')
		{
			$.dialog.alert(lang.commentNotId);
			return false;
		}
		//直接通过JS判断是否恶意灌水
		var spam = $("#"+id+"_spam").val();
		if(!spam)
		{
			$.dialog.alert(lang.commentSpamEmpty);
			return false;
		}
		var content = $("#"+id).val();
		if(!content)
		{
			$.dialog.alert(lang.commentEmpty);
			return false;
		}
		var url = api_url('comment','save','id='+tid);
		url += "&content="+$.str.encode(content);
		url += "&_spam="+spam;
		//提交评论
		var rs = json_ajax(url);
		if(rs.status == 'ok')
		{
			if(callback && callback != 'undefined')
			{
				eval("callback()");
			}
			else
			{
				$.dialog.alert(lang.commentSuccess,function(){
					$.phpok.reload();
				},'succeed');
			}
		}
		else
		{
			$.dialog.alert(rs.content,'','error');
			return false;
		}
	}
};
})(jQuery);

/*!
 * SuperSlide v2.1.1 
 * 轻松解决网站大部分特效展示问题
 * 详尽信息请看官网：http://www.SuperSlide2.com/
 *
 * Copyright 2011-2013, 大话主席
 *
 * 请尊重原创，保留头部版权
 * 在保留版权的前提下可应用于个人或商业用途

 * v2.1.1：修复当调用多个SuperSlide，并设置returnDefault:true 时返回defaultIndex索引错误

 */

!function(a){a.fn.slide=function(b){return a.fn.slide.defaults={type:"slide",effect:"fade",autoPlay:!1,delayTime:500,interTime:2500,triggerTime:150,defaultIndex:0,titCell:".hd li",mainCell:".bd",targetCell:null,trigger:"mouseover",scroll:1,vis:1,titOnClassName:"on",autoPage:!1,prevCell:".prev",nextCell:".next",pageStateCell:".pageState",opp:!1,pnLoop:!0,easing:"swing",startFun:null,endFun:null,switchLoad:null,playStateCell:".playState",mouseOverStop:!0,defaultPlay:!0,returnDefault:!1},this.each(function(){var c=a.extend({},a.fn.slide.defaults,b),d=a(this),e=c.effect,f=a(c.prevCell,d),g=a(c.nextCell,d),h=a(c.pageStateCell,d),i=a(c.playStateCell,d),j=a(c.titCell,d),k=j.size(),l=a(c.mainCell,d),m=l.children().size(),n=c.switchLoad,o=a(c.targetCell,d),p=parseInt(c.defaultIndex),q=parseInt(c.delayTime),r=parseInt(c.interTime);parseInt(c.triggerTime);var Q,t=parseInt(c.scroll),u=parseInt(c.vis),v="false"==c.autoPlay||0==c.autoPlay?!1:!0,w="false"==c.opp||0==c.opp?!1:!0,x="false"==c.autoPage||0==c.autoPage?!1:!0,y="false"==c.pnLoop||0==c.pnLoop?!1:!0,z="false"==c.mouseOverStop||0==c.mouseOverStop?!1:!0,A="false"==c.defaultPlay||0==c.defaultPlay?!1:!0,B="false"==c.returnDefault||0==c.returnDefault?!1:!0,C=0,D=0,E=0,F=0,G=c.easing,H=null,I=null,J=null,K=c.titOnClassName,L=j.index(d.find("."+K)),M=p=-1==L?p:L,N=p,O=p,P=m>=u?0!=m%t?m%t:t:0,R="leftMarquee"==e||"topMarquee"==e?!0:!1,S=function(){a.isFunction(c.startFun)&&c.startFun(p,k,d,a(c.titCell,d),l,o,f,g)},T=function(){a.isFunction(c.endFun)&&c.endFun(p,k,d,a(c.titCell,d),l,o,f,g)},U=function(){j.removeClass(K),A&&j.eq(N).addClass(K)};if("menu"==c.type)return A&&j.removeClass(K).eq(p).addClass(K),j.hover(function(){Q=a(this).find(c.targetCell);var b=j.index(a(this));I=setTimeout(function(){switch(p=b,j.removeClass(K).eq(p).addClass(K),S(),e){case"fade":Q.stop(!0,!0).animate({opacity:"show"},q,G,T);break;case"slideDown":Q.stop(!0,!0).animate({height:"show"},q,G,T)}},c.triggerTime)},function(){switch(clearTimeout(I),e){case"fade":Q.animate({opacity:"hide"},q,G);break;case"slideDown":Q.animate({height:"hide"},q,G)}}),B&&d.hover(function(){clearTimeout(J)},function(){J=setTimeout(U,q)}),void 0;if(0==k&&(k=m),R&&(k=2),x){if(m>=u)if("leftLoop"==e||"topLoop"==e)k=0!=m%t?(0^m/t)+1:m/t;else{var V=m-u;k=1+parseInt(0!=V%t?V/t+1:V/t),0>=k&&(k=1)}else k=1;j.html("");var W="";if(1==c.autoPage||"true"==c.autoPage)for(var X=0;k>X;X++)W+="<li>"+(X+1)+"</li>";else for(var X=0;k>X;X++)W+=c.autoPage.replace("$",X+1);j.html(W);var j=j.children()}if(m>=u){l.children().each(function(){a(this).width()>E&&(E=a(this).width(),D=a(this).outerWidth(!0)),a(this).height()>F&&(F=a(this).height(),C=a(this).outerHeight(!0))});var Y=l.children(),Z=function(){for(var a=0;u>a;a++)Y.eq(a).clone().addClass("clone").appendTo(l);for(var a=0;P>a;a++)Y.eq(m-a-1).clone().addClass("clone").prependTo(l)};switch(e){case"fold":l.css({position:"relative",width:D,height:C}).children().css({position:"absolute",width:E,left:0,top:0,display:"none"});break;case"top":l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+u*C+'px"></div>').css({top:-(p*t)*C,position:"relative",padding:"0",margin:"0"}).children().css({height:F});break;case"left":l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+u*D+'px"></div>').css({width:m*D,left:-(p*t)*D,position:"relative",overflow:"hidden",padding:"0",margin:"0"}).children().css({"float":"left",width:E});break;case"leftLoop":case"leftMarquee":Z(),l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+u*D+'px"></div>').css({width:(m+u+P)*D,position:"relative",overflow:"hidden",padding:"0",margin:"0",left:-(P+p*t)*D}).children().css({"float":"left",width:E});break;case"topLoop":case"topMarquee":Z(),l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+u*C+'px"></div>').css({height:(m+u+P)*C,position:"relative",padding:"0",margin:"0",top:-(P+p*t)*C}).children().css({height:F})}}var $=function(a){var b=a*t;return a==k?b=m:-1==a&&0!=m%t&&(b=-m%t),b},_=function(b){var c=function(c){for(var d=c;u+c>d;d++)b.eq(d).find("img["+n+"]").each(function(){var b=a(this);if(b.attr("src",b.attr(n)).removeAttr(n),l.find(".clone")[0])for(var c=l.children(),d=0;d<c.size();d++)c.eq(d).find("img["+n+"]").each(function(){a(this).attr(n)==b.attr("src")&&a(this).attr("src",a(this).attr(n)).removeAttr(n)})})};switch(e){case"fade":case"fold":case"top":case"left":case"slideDown":c(p*t);break;case"leftLoop":case"topLoop":c(P+$(O));break;case"leftMarquee":case"topMarquee":var d="leftMarquee"==e?l.css("left").replace("px",""):l.css("top").replace("px",""),f="leftMarquee"==e?D:C,g=P;if(0!=d%f){var h=Math.abs(0^d/f);g=1==p?P+h:P+h-1}c(g)}},ab=function(a){if(!A||M!=p||a||R){if(R?p>=1?p=1:0>=p&&(p=0):(O=p,p>=k?p=0:0>p&&(p=k-1)),S(),null!=n&&_(l.children()),o[0]&&(Q=o.eq(p),null!=n&&_(o),"slideDown"==e?(o.not(Q).stop(!0,!0).slideUp(q),Q.slideDown(q,G,function(){l[0]||T()})):(o.not(Q).stop(!0,!0).hide(),Q.animate({opacity:"show"},q,function(){l[0]||T()}))),m>=u)switch(e){case"fade":l.children().stop(!0,!0).eq(p).animate({opacity:"show"},q,G,function(){T()}).siblings().hide();break;case"fold":l.children().stop(!0,!0).eq(p).animate({opacity:"show"},q,G,function(){T()}).siblings().animate({opacity:"hide"},q,G);break;case"top":l.stop(!0,!1).animate({top:-p*t*C},q,G,function(){T()});break;case"left":l.stop(!0,!1).animate({left:-p*t*D},q,G,function(){T()});break;case"leftLoop":var b=O;l.stop(!0,!0).animate({left:-($(O)+P)*D},q,G,function(){-1>=b?l.css("left",-(P+(k-1)*t)*D):b>=k&&l.css("left",-P*D),T()});break;case"topLoop":var b=O;l.stop(!0,!0).animate({top:-($(O)+P)*C},q,G,function(){-1>=b?l.css("top",-(P+(k-1)*t)*C):b>=k&&l.css("top",-P*C),T()});break;case"leftMarquee":var c=l.css("left").replace("px","");0==p?l.animate({left:++c},0,function(){l.css("left").replace("px","")>=0&&l.css("left",-m*D)}):l.animate({left:--c},0,function(){l.css("left").replace("px","")<=-(m+P)*D&&l.css("left",-P*D)});break;case"topMarquee":var d=l.css("top").replace("px","");0==p?l.animate({top:++d},0,function(){l.css("top").replace("px","")>=0&&l.css("top",-m*C)}):l.animate({top:--d},0,function(){l.css("top").replace("px","")<=-(m+P)*C&&l.css("top",-P*C)})}j.removeClass(K).eq(p).addClass(K),M=p,y||(g.removeClass("nextStop"),f.removeClass("prevStop"),0==p&&f.addClass("prevStop"),p==k-1&&g.addClass("nextStop")),h.html("<span>"+(p+1)+"</span>/"+k)}};A&&ab(!0),B&&d.hover(function(){clearTimeout(J)},function(){J=setTimeout(function(){p=N,A?ab():"slideDown"==e?Q.slideUp(q,U):Q.animate({opacity:"hide"},q,U),M=p},300)});var bb=function(a){H=setInterval(function(){w?p--:p++,ab()},a?a:r)},cb=function(a){H=setInterval(ab,a?a:r)},db=function(){z||(clearInterval(H),bb())},eb=function(){(y||p!=k-1)&&(p++,ab(),R||db())},fb=function(){(y||0!=p)&&(p--,ab(),R||db())},gb=function(){clearInterval(H),R?cb():bb(),i.removeClass("pauseState")},hb=function(){clearInterval(H),i.addClass("pauseState")};if(v?R?(w?p--:p++,cb(),z&&l.hover(hb,gb)):(bb(),z&&d.hover(hb,gb)):(R&&(w?p--:p++),i.addClass("pauseState")),i.click(function(){i.hasClass("pauseState")?gb():hb()}),"mouseover"==c.trigger?j.hover(function(){var a=j.index(this);I=setTimeout(function(){p=a,ab(),db()},c.triggerTime)},function(){clearTimeout(I)}):j.click(function(){p=j.index(this),ab(),db()}),R){if(g.mousedown(eb),f.mousedown(fb),y){var ib,jb=function(){ib=setTimeout(function(){clearInterval(H),cb(0^r/10)},150)},kb=function(){clearTimeout(ib),clearInterval(H),cb()};g.mousedown(jb),g.mouseup(kb),f.mousedown(jb),f.mouseup(kb)}"mouseover"==c.trigger&&(g.hover(eb,function(){}),f.hover(fb,function(){}))}else g.click(eb),f.click(fb)})}}(jQuery),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;if(g||(g=e*.3*1.5),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return 1>b?-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:.5*h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*7.5625*b*b+c:2/2.75>b?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:2.5/2.75>b?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return e/2>b?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}});

/*!
 * artDialog 4.1.7
 * Date: 2013-03-03 08:04
 * http://code.google.com/p/artdialog/
 * (c) 2009-2012 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://creativecommons.org/licenses/LGPL/2.1/
 */
;(function($,window,undefined){$.noop=$.noop||function(){};var _box,_thisScript,_skin,_path,_count=0,_$window=$(window),_$document=$(document),_$html=$("html"),_elem=document.documentElement,_isIE6=window.VBArray&&!window.XMLHttpRequest,_isMobile="createTouch" in document&&!("onmousemove" in _elem)||/(iPhone|iPad|iPod)/i.test(navigator.userAgent),_expando="artDialog"+ +new Date;var artDialog=function(config,ok,cancel){config=config||{};if(typeof config==="string"||config.nodeType===1){config={content:config,fixed:!_isMobile};}var api,defaults=artDialog.defaults,elem=config.follow=this.nodeType===1&&this||config.follow;for(var i in defaults){if(config[i]===undefined){config[i]=defaults[i];}}$.each({ok:"yesFn",cancel:"noFn",close:"closeFn",init:"initFn",okVal:"yesText",cancelVal:"noText"},function(i,o){config[i]=config[i]!==undefined?config[i]:config[o];});if(typeof elem==="string"){elem=$(elem)[0];}config.id=elem&&elem[_expando+"follow"]||config.id||_expando+_count;api=artDialog.list[config.id];if(elem&&api){return api.follow(elem).zIndex().focus();}if(api){return api.zIndex().focus();}if(_isMobile){config.fixed=false;}if(!$.isArray(config.button)){config.button=config.button?[config.button]:[];}if(ok!==undefined){config.ok=ok;}if(cancel!==undefined){config.cancel=cancel;}config.ok&&config.button.push({name:config.okVal,callback:config.ok,focus:true});config.cancel&&config.button.push({name:config.cancelVal,callback:config.cancel});artDialog.defaults.zIndex=config.zIndex;_count++;return artDialog.list[config.id]=_box?_box._init(config):new artDialog.fn._init(config);};artDialog.fn=artDialog.prototype={version:"4.1.7",closed:true,_init:function(config){var that=this,DOM,icon=config.icon,iconBg=icon&&(_isIE6?{png:"icons/"+icon+".png"}:{backgroundImage:"url('"+config.path+"/images/skins/icons/"+icon+".png')"});that.closed=false;that.config=config;that.DOM=DOM=that.DOM||that._getDOM();DOM.wrap.addClass(config.skin);DOM.close[config.cancel===false?"hide":"show"]();DOM.icon[0].style.display=icon?"":"none";DOM.iconBg.css(iconBg||{background:"none"});DOM.se.css("cursor",config.resize?"se-resize":"auto");DOM.title.css("cursor",config.drag?"move":"auto");DOM.content.css("padding",config.padding);that[config.show?"show":"hide"](true);that.button(config.button).title(config.title).content(config.content,true).size(config.width,config.height).time(config.time);config.follow?that.follow(config.follow):that.position(config.left,config.top);that.zIndex().focus();config.lock&&that.lock();that._addEvent();that._ie6PngFix();_box=null;config.init&&config.init.call(that,window);return that;},content:function(msg){var prev,next,parent,display,that=this,DOM=that.DOM,wrap=DOM.wrap[0],width=wrap.offsetWidth,height=wrap.offsetHeight,left=parseInt(wrap.style.left),top=parseInt(wrap.style.top),cssWidth=wrap.style.width,$content=DOM.content,content=$content[0];that._elemBack&&that._elemBack();wrap.style.width="auto";if(msg===undefined){return content;}if(typeof msg==="string"){$content.html(msg);}else{if(msg&&msg.nodeType===1){display=msg.style.display;prev=msg.previousSibling;next=msg.nextSibling;parent=msg.parentNode;that._elemBack=function(){if(prev&&prev.parentNode){prev.parentNode.insertBefore(msg,prev.nextSibling);}else{if(next&&next.parentNode){next.parentNode.insertBefore(msg,next);}else{if(parent){parent.appendChild(msg);}}}msg.style.display=display;that._elemBack=null;};$content.html("");content.appendChild(msg);msg.style.display="block";}}if(!arguments[1]){if(that.config.follow){that.follow(that.config.follow);}else{width=wrap.offsetWidth-width;height=wrap.offsetHeight-height;left=left-width/2;top=top-height/2;wrap.style.left=Math.max(left,0)+"px";wrap.style.top=Math.max(top,0)+"px";}if(cssWidth&&cssWidth!=="auto"){wrap.style.width=wrap.offsetWidth+"px";}that._autoPositionType();}that._ie6SelectFix();that._runScript(content);return that;},title:function(text){var DOM=this.DOM,wrap=DOM.wrap,title=DOM.title,className="aui_state_noTitle";if(text===undefined){return title[0];}if(text===false){title.hide().html("");wrap.addClass(className);}else{title.show().html(text||"");wrap.removeClass(className);}return this;},position:function(left,top){var that=this,config=that.config,wrap=that.DOM.wrap[0],isFixed=_isIE6?false:config.fixed,ie6Fixed=_isIE6&&that.config.fixed,docLeft=_$document.scrollLeft(),docTop=_$document.scrollTop(),dl=isFixed?0:docLeft,dt=isFixed?0:docTop,ww=_$window.width(),wh=_$window.height(),ow=wrap.offsetWidth,oh=wrap.offsetHeight,style=wrap.style;if(left||left===0){that._left=left.toString().indexOf("%")!==-1?left:null;left=that._toNumber(left,ww-ow);if(typeof left==="number"){left=ie6Fixed?(left+=docLeft):left+dl;style.left=Math.max(left,dl)+"px";}else{if(typeof left==="string"){style.left=left;}}}if(top||top===0){that._top=top.toString().indexOf("%")!==-1?top:null;top=that._toNumber(top,wh-oh);if(typeof top==="number"){top=ie6Fixed?(top+=docTop):top+dt;style.top=Math.max(top,dt)+"px";}else{if(typeof top==="string"){style.top=top;}}}if(left!==undefined&&top!==undefined){that._follow=null;that._autoPositionType();}return that;},size:function(width,height){var maxWidth,maxHeight,scaleWidth,scaleHeight,that=this,config=that.config,DOM=that.DOM,wrap=DOM.wrap,main=DOM.main,wrapStyle=wrap[0].style,style=main[0].style;if(width){that._width=width.toString().indexOf("%")!==-1?width:null;maxWidth=_$window.width()-wrap[0].offsetWidth+main[0].offsetWidth;scaleWidth=that._toNumber(width,maxWidth);width=scaleWidth;if(typeof width==="number"){wrapStyle.width="auto";style.width=Math.max(that.config.minWidth,width)+"px";wrapStyle.width=wrap[0].offsetWidth+"px";}else{if(typeof width==="string"){style.width=width;width==="auto"&&wrap.css("width","auto");}}}if(height){that._height=height.toString().indexOf("%")!==-1?height:null;maxHeight=_$window.height()-wrap[0].offsetHeight+main[0].offsetHeight;scaleHeight=that._toNumber(height,maxHeight);height=scaleHeight;if(typeof height==="number"){style.height=Math.max(that.config.minHeight,height)+"px";}else{if(typeof height==="string"){style.height=height;}}}that._ie6SelectFix();return that;},follow:function(elem){var $elem,that=this,config=that.config;if(typeof elem==="string"||elem&&elem.nodeType===1){$elem=$(elem);elem=$elem[0];}if(!elem||!elem.offsetWidth&&!elem.offsetHeight){return that.position(that._left,that._top);}var expando=_expando+"follow",winWidth=_$window.width(),winHeight=_$window.height(),docLeft=_$document.scrollLeft(),docTop=_$document.scrollTop(),offset=$elem.offset(),width=elem.offsetWidth,height=elem.offsetHeight,isFixed=_isIE6?false:config.fixed,left=isFixed?offset.left-docLeft:offset.left,top=isFixed?offset.top-docTop:offset.top,wrap=that.DOM.wrap[0],style=wrap.style,wrapWidth=wrap.offsetWidth,wrapHeight=wrap.offsetHeight,setLeft=left-(wrapWidth-width)/2,setTop=top+height,dl=isFixed?0:docLeft,dt=isFixed?0:docTop;setLeft=setLeft<dl?left:(setLeft+wrapWidth>winWidth)&&(left-wrapWidth>dl)?left-wrapWidth+width:setLeft;setTop=(setTop+wrapHeight>winHeight+dt)&&(top-wrapHeight>dt)?top-wrapHeight:setTop;style.left=setLeft+"px";style.top=setTop+"px";that._follow&&that._follow.removeAttribute(expando);that._follow=elem;elem[expando]=config.id;that._autoPositionType();return that;},button:function(){var that=this,ags=arguments,DOM=that.DOM,buttons=DOM.buttons,elem=buttons[0],strongButton="aui_state_highlight",listeners=that._listeners=that._listeners||{},list=$.isArray(ags[0])?ags[0]:[].slice.call(ags);if(ags[0]===undefined){return elem;}$.each(list,function(i,val){var name=val.name,isNewButton=!listeners[name],button=!isNewButton?listeners[name].elem:document.createElement("button");if(!listeners[name]){listeners[name]={};}if(val.callback){listeners[name].callback=val.callback;}if(val.className){button.className=val.className;}if(val.focus){that._focus&&that._focus.removeClass(strongButton);that._focus=$(button).addClass(strongButton);that.focus();}button.setAttribute("type","button");button[_expando+"callback"]=name;button.disabled=!!val.disabled;if(isNewButton){button.innerHTML=name;listeners[name].elem=button;elem.appendChild(button);}});buttons[0].style.display=list.length?"":"none";that._ie6SelectFix();return that;},show:function(){this.DOM.wrap.show();!arguments[0]&&this._lockMaskWrap&&this._lockMaskWrap.show();return this;},hide:function(){this.DOM.wrap.hide();!arguments[0]&&this._lockMaskWrap&&this._lockMaskWrap.hide();return this;},close:function(){if(this.closed){return this;}var that=this,DOM=that.DOM,wrap=DOM.wrap,list=artDialog.list,fn=that.config.close,follow=that.config.follow;that.time();if(typeof fn==="function"&&fn.call(that,window)===false){return that;}that.unlock();that._elemBack&&that._elemBack();wrap[0].className=wrap[0].style.cssText="";DOM.title.html("");DOM.content.html("");DOM.buttons.html("");if(artDialog.focus===that){artDialog.focus=null;}if(follow){follow.removeAttribute(_expando+"follow");}delete list[that.config.id];that._removeEvent();that.hide(true)._setAbsolute();for(var i in that){if(that.hasOwnProperty(i)&&i!=="DOM"){delete that[i];}}_box?wrap.remove():_box=that;return that;},time:function(second){var that=this,cancel=that.config.cancelVal,timer=that._timer;timer&&clearTimeout(timer);if(second){that._timer=setTimeout(function(){that._click(cancel);},1000*second);}return that;},focus:function(){try{if(this.config.focus){var elem=this._focus&&this._focus[0]||this.DOM.close[0];elem&&elem.focus();}}catch(e){}return this;},zIndex:function(){var that=this,DOM=that.DOM,wrap=DOM.wrap,top=artDialog.focus,index=artDialog.defaults.zIndex++;wrap.css("zIndex",index);that._lockMask&&that._lockMask.css("zIndex",index-1);top&&top.DOM.wrap.removeClass("aui_state_focus");artDialog.focus=that;wrap.addClass("aui_state_focus");return that;},lock:function(){if(this._lock){return this;}var that=this,index=artDialog.defaults.zIndex-1,wrap=that.DOM.wrap,config=that.config,docWidth=_$document.width(),docHeight=_$document.height(),lockMaskWrap=that._lockMaskWrap||$(document.body.appendChild(document.createElement("div"))),lockMask=that._lockMask||$(lockMaskWrap[0].appendChild(document.createElement("div"))),domTxt="(document).documentElement",sizeCss=_isMobile?"width:"+docWidth+"px;height:"+docHeight+"px":"width:100%;height:100%",ie6Css=_isIE6?"position:absolute;left:expression("+domTxt+".scrollLeft);top:expression("+domTxt+".scrollTop);width:expression("+domTxt+".clientWidth);height:expression("+domTxt+".clientHeight)":"";that.zIndex();wrap.addClass("aui_state_lock");lockMaskWrap[0].style.cssText=sizeCss+";position:fixed;z-index:"+index+";top:0;left:0;overflow:hidden;"+ie6Css;lockMask[0].style.cssText="height:100%;background:"+config.background+";filter:alpha(opacity=0);opacity:0";if(_isIE6){lockMask.html('<iframe src="about:blank" style="width:100%;height:100%;position:absolute;'+'top:0;left:0;z-index:-1;filter:alpha(opacity=0)"></iframe>');}lockMask.stop();lockMask.bind("click",function(){that._reset();}).bind("dblclick",function(){that._reset();});if(config.duration===0){lockMask.css({opacity:config.opacity});}else{lockMask.animate({opacity:config.opacity},config.duration);}that._lockMaskWrap=lockMaskWrap;that._lockMask=lockMask;that._lock=true;return that;},unlock:function(){var that=this,lockMaskWrap=that._lockMaskWrap,lockMask=that._lockMask;if(!that._lock){return that;}var style=lockMaskWrap[0].style;var un=function(){if(_isIE6){style.removeExpression("width");style.removeExpression("height");style.removeExpression("left");style.removeExpression("top");}style.cssText="display:none";_box&&lockMaskWrap.remove();};lockMask.stop().unbind();that.DOM.wrap.removeClass("aui_state_lock");if(!that.config.duration){un();}else{lockMask.animate({opacity:0},that.config.duration,un);}that._lock=false;return that;},_getDOM:function(){var wrap=document.createElement("div"),body=document.body;wrap.style.cssText="position:absolute;left:0;top:0";wrap.innerHTML=artDialog._templates;body.insertBefore(wrap,body.firstChild);var name,i=0,DOM={wrap:$(wrap)},els=wrap.getElementsByTagName("*"),elsLen=els.length;for(;i<elsLen;i++){name=els[i].className.split("aui_")[1];if(name){DOM[name]=$(els[i]);}}return DOM;},_toNumber:function(thisValue,maxValue){if(!thisValue&&thisValue!==0||typeof thisValue==="number"){return thisValue;}var last=thisValue.length-1;if(thisValue.lastIndexOf("px")===last){thisValue=parseInt(thisValue);}else{if(thisValue.lastIndexOf("%")===last){thisValue=parseInt(maxValue*thisValue.split("%")[0]/100);}}return thisValue;},_ie6PngFix:_isIE6?function(){var i=0,elem,png,pngPath,runtimeStyle,path=artDialog.defaults.path+"/skins/",list=this.DOM.wrap[0].getElementsByTagName("*");for(;i<list.length;i++){elem=list[i];png=elem.currentStyle["png"];if(png){pngPath=path+png;runtimeStyle=elem.runtimeStyle;runtimeStyle.backgroundImage="none";runtimeStyle.filter="progid:DXImageTransform.Microsoft."+"AlphaImageLoader(src='"+pngPath+"',sizingMethod='crop')";}}}:$.noop,_ie6SelectFix:_isIE6?function(){var $wrap=this.DOM.wrap,wrap=$wrap[0],expando=_expando+"iframeMask",iframe=$wrap[expando],width=wrap.offsetWidth,height=wrap.offsetHeight;width=width+"px";height=height+"px";if(iframe){iframe.style.width=width;iframe.style.height=height;}else{iframe=wrap.appendChild(document.createElement("iframe"));$wrap[expando]=iframe;iframe.src="about:blank";iframe.style.cssText="position:absolute;z-index:-1;left:0;top:0;"+"filter:alpha(opacity=0);width:"+width+";height:"+height;}}:$.noop,_runScript:function(elem){var fun,i=0,n=0,tags=elem.getElementsByTagName("script"),length=tags.length,script=[];for(;i<length;i++){if(tags[i].type==="text/dialog"){script[n]=tags[i].innerHTML;n++;}}if(script.length){script=script.join("");fun=new Function(script);fun.call(this);}},_autoPositionType:function(){this[this.config.fixed?"_setFixed":"_setAbsolute"]();},_setFixed:(function(){_isIE6&&$(function(){var bg="backgroundAttachment";if(_$html.css(bg)!=="fixed"&&$("body").css(bg)!=="fixed"){_$html.css({zoom:1,backgroundImage:"url(about:blank)",backgroundAttachment:"fixed"});}});return function(){var $elem=this.DOM.wrap,style=$elem[0].style;if(_isIE6){var left=parseInt($elem.css("left")),top=parseInt($elem.css("top")),sLeft=_$document.scrollLeft(),sTop=_$document.scrollTop(),txt="(document.documentElement)";this._setAbsolute();style.setExpression("left","eval("+txt+".scrollLeft + "+(left-sLeft)+') + "px"');style.setExpression("top","eval("+txt+".scrollTop + "+(top-sTop)+') + "px"');}else{style.position="fixed";}};}()),_setAbsolute:function(){var style=this.DOM.wrap[0].style;if(_isIE6){style.removeExpression("left");style.removeExpression("top");}style.position="absolute";},_click:function(name){var that=this,fn=that._listeners[name]&&that._listeners[name].callback;return typeof fn!=="function"||fn.call(that,window)!==false?that.close():that;},_reset:function(test){var newSize,that=this,oldSize=that._winSize||_$window.width()*_$window.height(),elem=that._follow,width=that._width,height=that._height,left=that._left,top=that._top;if(test){newSize=that._winSize=_$window.width()*_$window.height();if(oldSize===newSize){return;}}if(width||height){that.size(width,height);}if(elem){that.follow(elem);}else{if(left||top){that.position(left,top);}}},_addEvent:function(){var resizeTimer,that=this,config=that.config,isIE="CollectGarbage" in window,DOM=that.DOM;that._winResize=function(){resizeTimer&&clearTimeout(resizeTimer);resizeTimer=setTimeout(function(){that._reset(isIE);},40);};_$window.bind("resize",that._winResize);DOM.wrap.bind("click",function(event){var target=event.target,callbackID;if(target.disabled){return false;}if(target===DOM.close[0]){that._click(config.cancelVal);return false;}else{callbackID=target[_expando+"callback"];callbackID&&that._click(callbackID);}that._ie6SelectFix();}).bind("mousedown",function(){that.zIndex();});},_removeEvent:function(){var that=this,DOM=that.DOM;DOM.wrap.unbind();_$window.unbind("resize",that._winResize);}};artDialog.fn._init.prototype=artDialog.fn;$.fn.dialog=$.fn.artDialog=function(){var config=arguments;this[this.live?"live":"bind"]("click",function(){artDialog.apply(this,config);return false;});return this;};artDialog.focus=null;artDialog.get=function(id){return id===undefined?artDialog.list:artDialog.list[id];};artDialog.list={};_$document.bind("keydown",function(event){var target=event.target,nodeName=target.nodeName,rinput=/^INPUT|TEXTAREA$/,api=artDialog.focus,keyCode=event.keyCode;if(!api||!api.config.esc||rinput.test(nodeName)){return;}keyCode===27&&api._click(api.config.cancelVal);});_path=window["_artDialog_path"]||(function(script,i,me){for(i in script){if(script[i].src&&script[i].src.indexOf("artDialog")!==-1){me=script[i];}}_thisScript=me||script[script.length-1];me=_thisScript.src.replace(/\\/g,"/");return me.lastIndexOf("/")<0?".":me.substring(0,me.lastIndexOf("/"));}(document.getElementsByTagName("script")));_skin=_thisScript.src.split("skin=")[1];if(_skin){var link=document.createElement("link");link.rel="stylesheet";link.href=_path+"/skins/"+_skin+".css?"+artDialog.fn.version;_thisScript.parentNode.insertBefore(link,_thisScript);}_$window.bind("load",function(){setTimeout(function(){if(_count){return;}artDialog({left:"-9999em",time:9,fixed:false,lock:false,focus:false});},150);});try{document.execCommand("BackgroundImageCache",false,true);}catch(e){}artDialog._templates='<div class="aui_outer">'+'<table class="aui_border">'+"<tbody>"+"<tr>"+'<td class="aui_nw"></td>'+'<td class="aui_n"></td>'+'<td class="aui_ne"></td>'+"</tr>"+"<tr>"+'<td class="aui_w"></td>'+'<td class="aui_c">'+'<div class="aui_inner">'+'<table class="aui_dialog">'+"<tbody>"+"<tr>"+'<td colspan="2" class="aui_header">'+'<div class="aui_titleBar">'+'<div class="aui_title"></div>'+'<a class="aui_close" href="javascript:/*artDialog*/;">'+"\xd7"+"</a>"+"</div>"+"</td>"+"</tr>"+"<tr>"+'<td class="aui_icon">'+'<div class="aui_iconBg"></div>'+"</td>"+'<td class="aui_main">'+'<div class="aui_content"></div>'+"</td>"+"</tr>"+"<tr>"+'<td colspan="2" class="aui_footer">'+'<div class="aui_buttons"></div>'+"</td>"+"</tr>"+"</tbody>"+"</table>"+"</div>"+"</td>"+'<td class="aui_e"></td>'+"</tr>"+"<tr>"+'<td class="aui_sw"></td>'+'<td class="aui_s"></td>'+'<td class="aui_se"></td>'+"</tr>"+"</tbody>"+"</table>"+"</div>";artDialog.defaults={content:'<div class="aui_loading"><span>loading..</span></div>',title:"\u6d88\u606f",button:null,ok:null,cancel:null,init:null,close:null,okVal:"\u786E\u5B9A",cancelVal:"\u53D6\u6D88",width:"auto",height:"auto",minWidth:96,minHeight:32,padding:"20px 25px",skin:"",icon:null,time:null,esc:true,focus:true,show:true,follow:null,path:_path,lock:false,background:"#000",opacity:0.7,duration:300,fixed:false,left:"50%",top:"38.2%",zIndex:1987,resize:true,drag:true};window.artDialog=$.dialog=$.artDialog=artDialog;}(this.art||this.jQuery&&(this.art=jQuery),this));(function($){var _dragEvent,_use,_$window=$(window),_$document=$(document),_elem=document.documentElement,_isIE6=!("minWidth" in _elem.style),_isLosecapture="onlosecapture" in _elem,_isSetCapture="setCapture" in _elem;artDialog.dragEvent=function(){var that=this,proxy=function(name){var fn=that[name];that[name]=function(){return fn.apply(that,arguments);};};proxy("start");proxy("move");proxy("end");};artDialog.dragEvent.prototype={onstart:$.noop,start:function(event){_$document.bind("mousemove",this.move).bind("mouseup",this.end);this._sClientX=event.clientX;this._sClientY=event.clientY;this.onstart(event.clientX,event.clientY);return false;},onmove:$.noop,move:function(event){this._mClientX=event.clientX;this._mClientY=event.clientY;this.onmove(event.clientX-this._sClientX,event.clientY-this._sClientY);return false;},onend:$.noop,end:function(event){_$document.unbind("mousemove",this.move).unbind("mouseup",this.end);this.onend(event.clientX,event.clientY);return false;}};_use=function(event){var limit,startWidth,startHeight,startLeft,startTop,isResize,api=artDialog.focus,DOM=api.DOM,wrap=DOM.wrap,title=DOM.title,main=DOM.main;var clsSelect="getSelection" in window?function(){window.getSelection().removeAllRanges();}:function(){try{document.selection.empty();}catch(e){}};_dragEvent.onstart=function(x,y){if(isResize){startWidth=main[0].offsetWidth;startHeight=main[0].offsetHeight;}else{startLeft=wrap[0].offsetLeft;startTop=wrap[0].offsetTop;}_$document.bind("dblclick",_dragEvent.end);!_isIE6&&_isLosecapture?title.bind("losecapture",_dragEvent.end):_$window.bind("blur",_dragEvent.end);_isSetCapture&&title[0].setCapture();wrap.addClass("aui_state_drag");api.focus();};_dragEvent.onmove=function(x,y){if(isResize){var wrapStyle=wrap[0].style,style=main[0].style,width=x+startWidth,height=y+startHeight;wrapStyle.width="auto";style.width=Math.max(0,width)+"px";wrapStyle.width=wrap[0].offsetWidth+"px";style.height=Math.max(0,height)+"px";}else{var style=wrap[0].style,left=Math.max(limit.minX,Math.min(limit.maxX,x+startLeft)),top=Math.max(limit.minY,Math.min(limit.maxY,y+startTop));style.left=left+"px";style.top=top+"px";}clsSelect();api._ie6SelectFix();};_dragEvent.onend=function(x,y){_$document.unbind("dblclick",_dragEvent.end);!_isIE6&&_isLosecapture?title.unbind("losecapture",_dragEvent.end):_$window.unbind("blur",_dragEvent.end);_isSetCapture&&title[0].releaseCapture();_isIE6&&!api.closed&&api._autoPositionType();wrap.removeClass("aui_state_drag");};isResize=event.target===DOM.se[0]?true:false;limit=(function(){var maxX,maxY,wrap=api.DOM.wrap[0],fixed=wrap.style.position==="fixed",ow=wrap.offsetWidth,oh=wrap.offsetHeight,ww=_$window.width(),wh=_$window.height(),dl=fixed?0:_$document.scrollLeft(),dt=fixed?0:_$document.scrollTop(),maxX=ww-ow+dl;maxY=wh-oh+dt;return{minX:dl,minY:dt,maxX:maxX,maxY:maxY};})();_dragEvent.start(event);};_$document.bind("mousedown",function(event){var api=artDialog.focus;if(!api){return;}var target=event.target,config=api.config,DOM=api.DOM;if(config.drag!==false&&target===DOM.title[0]||config.resize!==false&&target===DOM.se[0]){_dragEvent=_dragEvent||new artDialog.dragEvent();_use(event);return false;}});})(this.art||this.jQuery&&(this.art=jQuery));


/*!
 * artDialog iframeTools
 * Date: 2011-11-25 13:54
 * http://code.google.com/p/artdialog/
 * (c) 2009-2011 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://creativecommons.org/licenses/LGPL/2.1/
 */
;(function($,window,artDialog,undefined){var _topDialog,_proxyDialog,_zIndex,_data="@ARTDIALOG.DATA",_open="@ARTDIALOG.OPEN",_opener="@ARTDIALOG.OPENER",_winName=window.name=window.name||"@ARTDIALOG.WINNAME"+ +new Date,_isIE6=window.VBArray&&!window.XMLHttpRequest;$(function(){!window.jQuery&&document.compatMode==="BackCompat"&&alert('artDialog Error: document.compatMode === "BackCompat"');});var _top=artDialog.top=function(){var top=window,test=function(name){try{var doc=window[name].document;doc.getElementsByTagName;}catch(e){return false;}return window[name].artDialog&&doc.getElementsByTagName("frameset").length===0;};if(test("top")){top=window.top;}else{if(test("parent")){top=window.parent;}}return top;}();artDialog.parent=_top;_topDialog=_top.artDialog;_zIndex=function(){return _topDialog.defaults.zIndex;};artDialog.data=function(name,value){var top=artDialog.top,cache=top[_data]||{};top[_data]=cache;if(value!==undefined){cache[name]=value;}else{return cache[name];}return cache;};artDialog.removeData=function(name){var cache=artDialog.top[_data];if(cache&&cache[name]){delete cache[name];}};artDialog.through=_proxyDialog=function(){var api=_topDialog.apply(this,arguments);if(_top!==window){artDialog.list[api.config.id]=api;}return api;};_top!==window&&$(window).bind("unload",function(){var list=artDialog.list,config;for(var i in list){if(list[i]){config=list[i].config;if(config){config.duration=0;}list[i].close();}}});artDialog.open=function(url,options,cache){options=options||{};var api,DOM,$content,$main,iframe,$iframe,$idoc,iwin,ibody,top=artDialog.top,initCss="position:absolute;left:-9999em;top:-9999em;border:none 0;background:transparent",loadCss="width:100%;height:100%;border:none 0";if(cache===false){var ts=+new Date,ret=url.replace(/([?&])_=[^&]*/,"$1_="+ts);url=ret+((ret===url)?(/\?/.test(url)?"&":"?")+"_="+ts:"");}var load=function(){var iWidth,iHeight,loading=DOM.content.find(".aui_loading"),aConfig=api.config;$content.addClass("aui_state_full");loading&&loading.hide();try{iwin=iframe.contentWindow;$idoc=$(iwin.document);ibody=iwin.document.body;}catch(e){iframe.style.cssText=loadCss;aConfig.follow?api.follow(aConfig.follow):api.position(aConfig.left,aConfig.top);options.init&&options.init.call(api,iwin,top);options.init=null;return;}iWidth=aConfig.width==="auto"?$idoc.width()+(_isIE6?0:parseInt($(ibody).css("marginLeft"))):aConfig.width;iHeight=aConfig.height==="auto"?$idoc.height():aConfig.height;setTimeout(function(){iframe.style.cssText=loadCss;},0);api.size(iWidth,iHeight);aConfig.follow?api.follow(aConfig.follow):api.position(aConfig.left,aConfig.top);options.init&&options.init.call(api,iwin,top);options.init=null;};var config={zIndex:_zIndex(),init:function(){api=this;DOM=api.DOM;$main=DOM.main;$content=DOM.content;iframe=api.iframe=top.document.createElement("iframe");iframe.src=url;iframe.name="Open"+api.config.id;iframe.style.cssText=initCss;iframe.setAttribute("frameborder",0,0);iframe.setAttribute("allowTransparency",true);$iframe=$(iframe);api.content().appendChild(iframe);iwin=iframe.contentWindow;try{iwin.name=iframe.name;artDialog.data(iframe.name+_open,api);artDialog.data(iframe.name+_opener,window);}catch(e){}$iframe.bind("load",load);},close:function(){$iframe.css("display","none").unbind("load",load);if(options.close&&options.close.call(this,iframe.contentWindow,top)===false){return false;}$content.removeClass("aui_state_full");$iframe[0].src="about:blank";$iframe.remove();try{artDialog.removeData(iframe.name+_open);artDialog.removeData(iframe.name+_opener);}catch(e){}}};if(typeof options.ok==="function"){config.ok=function(){return options.ok.call(api,iframe.contentWindow,top);};}if(typeof options.cancel==="function"){config.cancel=function(){return options.cancel.call(api,iframe.contentWindow,top);};}delete options.content;for(var i in options){if(config[i]===undefined){config[i]=options[i];}}return _proxyDialog(config);};artDialog.open.api=artDialog.data(_winName+_open);artDialog.opener=artDialog.data(_winName+_opener)||window;artDialog.open.origin=artDialog.opener;artDialog.close=function(){var api=artDialog.data(_winName+_open);api&&api.close();return false;};_top!=window&&$(document).bind("mousedown",function(){var api=artDialog.open.api;api&&api.zIndex();});artDialog.load=function(url,options,cache){cache=cache||false;var opt=options||{};var config={zIndex:_zIndex(),init:function(here){var api=this,aConfig=api.config;$.ajax({url:url,success:function(content){api.content(content);opt.init&&opt.init.call(api,here);},cache:cache});}};delete options.content;for(var i in opt){if(config[i]===undefined){config[i]=opt[i];}}return _proxyDialog(config);};artDialog.alert=function(content,callback,iconid){if(!iconid||iconid=="undefined"){iconid="warning";}return _proxyDialog({id:"Alert",zIndex:_zIndex(),icon:iconid,fixed:true,lock:true,content:content,ok:true,close:callback});};artDialog.confirm=function(content,yes,no){return _proxyDialog({id:"Confirm",zIndex:_zIndex(),icon:"question",fixed:true,lock:true,opacity:0.1,content:content,ok:function(here){return yes.call(this,here);},cancel:function(here){return no&&no.call(this,here);}});};artDialog.prompt=function(content,yes,value){value=value||"";var input;return _proxyDialog({id:"Prompt",zIndex:_zIndex(),icon:"question",fixed:true,lock:true,opacity:0.1,content:['<div style="margin-bottom:5px;font-size:12px">',content,"</div>","<div>",'<input value="',value,'" style="width:18em;padding:6px 4px" />',"</div>"].join(""),init:function(){input=this.DOM.content.find("input")[0];input.select();input.focus();},ok:function(here){return yes&&yes.call(this,input.value,here);},cancel:true});};artDialog.tips=function(content,time){return _proxyDialog({id:"Tips",zIndex:_zIndex(),title:false,cancel:false,fixed:true,lock:false}).content('<div style="padding: 0 1em;">'+content+"</div>").time(time||1.5);};$(function(){var event=artDialog.dragEvent;if(!event){return;}var $window=$(window),$document=$(document),positionType=_isIE6?"absolute":"fixed",dragEvent=event.prototype,mask=document.createElement("div"),style=mask.style;style.cssText="display:none;position:"+positionType+";left:0;top:0;width:100%;height:100%;"+"cursor:move;filter:alpha(opacity=0);opacity:0;background:#FFF";document.body.appendChild(mask);dragEvent._start=dragEvent.start;dragEvent._end=dragEvent.end;dragEvent.start=function(){var DOM=artDialog.focus.DOM,main=DOM.main[0],iframe=DOM.content[0].getElementsByTagName("iframe")[0];dragEvent._start.apply(this,arguments);style.display="block";style.zIndex=artDialog.defaults.zIndex+3;if(positionType==="absolute"){style.width=$window.width()+"px";style.height=$window.height()+"px";style.left=$document.scrollLeft()+"px";style.top=$document.scrollTop()+"px";}if(iframe&&main.offsetWidth*main.offsetHeight>307200){main.style.visibility="hidden";}};dragEvent.end=function(){var dialog=artDialog.focus;dragEvent._end.apply(this,arguments);style.display="none";if(dialog){dialog.DOM.main[0].style.visibility="visible";}};});})(this.art||this.jQuery,this,this.artDialog);artDialog.notice=function(options){var opt=options||{},api,aConfig,hide,wrap,top,duration=800;var config={id:"Notice",left:"100%",top:"100%",fixed:true,drag:false,resize:false,follow:null,lock:false,init:function(here){api=this;aConfig=api.config;wrap=api.DOM.wrap;top=parseInt(wrap[0].style.top);hide=top+wrap[0].offsetHeight;wrap.css("top",hide+"px").animate({top:top+"px"},duration,function(){opt.init&&opt.init.call(api,here);});},close:function(here){wrap.animate({top:hide+"px"},duration,function(){opt.close&&opt.close.call(this,here);aConfig.close=$.noop;api.close();});return false;}};for(var i in opt){if(config[i]===undefined){config[i]=opt[i];}}return artDialog(config);};


(function (config) {
	config["title"] = "消息";
	config["okVal"] = "确定";
	config["cancelVal"] = "取消";
})(art.dialog.defaults);

/**
 * 购物车中涉及到的JS操作，此处使用jQuery封装
 * @作者 qinggan <admin@phpok.com>
 * @版权 2015-2016 深圳市锟铻科技有限公司
 * @网站 http://www.phpok.com
 * @版本 4.x
 * @授权 http://www.phpok.com/lgpl.html PHPOK开源授权协议：GNU Lesser General Public License
 * @日期 2016年09月01日
**/

;(function($){
	$.cart = {
		//添加到购物车中
		//id为产品ID
		add: function(id,qty){
			var url = this._addurl(id,qty);
			if(!url){
				return false;
			}
			$.phpok.json(url,function(rs){
				if(rs.status){
					$.dialog.tips(p_lang('成功加入购物车'));
					this.total();
					return true;
				}
				$.dialog.alert(rs.info);
				return false;
			});
			return false;
		},
		/**
		 * 自定义产品加入购物车
		 * @参数 title 产品名称
		 * @参数 price 价格 
		 * @参数 qty 数量
		 * @参数 thumb 缩略图
		**/
		add2: function(title,price,qty,thumb){
			var url = this._addurl2(title,price,qty,thumb);
			if(!url){
				return false;
			}
			$.phpok.json(url,function(rs){
				if(rs.status){
					$.dialog.tips(p_lang('成功加入购物车'));
					this.total();
					return true;
				}
				$.dialog.alert(rs.info);
				return false;
			});
			return false;
		},
		/**
		 * 自定义产品立即订购
		 * @参数 title 产品名称
		 * @参数 price 价格 
		 * @参数 qty 数量
		 * @参数 thumb 缩略图
		**/
		onebuy2: function(title,price,qty,thumb){
			var url = this._addurl2(title,price,qty,thumb);
			if(!url){
				return false;
			}
			$.phpok.json(url+"&_clear=1",function(data){
				if(data.status){
					$.phpok.go(get_url('cart','checkout','id[]='+data.info));
					return true;
				}
				$.dialog.alert(data.info);
				return false;
			});
			return false;
		},
		/**
		 * 系统产品立即订购
		 * @参数 id 产品ID
		 * @参数 qty 数量
		**/
		onebuy: function(id,qty){
			var url = this._addurl(id,qty);
			if(!url){
				return false;
			}
			$.phpok.json(url+"&_clear=1",function(data){
				if(data.status){
					$.phpok.go(get_url('cart','checkout','id[]='+data.info));
					return true;
				}
				$.dialog.alert(data.info);
				return false;
			});
			return false;
		},
		_addurl2: function(title,price,qty,thumb){
			if(!title || title == 'undefined'){
				$.dialog.alert(p_lang('名称不能为空'));
				return false;
			}
			if(!price || price == 'undefined'){
				$.dialog.alert(p_lang('价格不能为空'));
				return false;
			}
			if(!qty || qty == 'undefined'){
				qty = 1;
			}
			qty = parseInt(qty,10);
			if(qty < 1){
				qty = 1;
			}
			var url = api_url('cart','add','title='+$.str.encode(title)+"&price="+$.str.encode(price)+"&qty="+qty);
			if(thumb && thumb != 'undefined'){
				url += "&thumb="+$.str.encode(thumb);
			}
			return url;
		},
		_addurl:function(id,qty){
			var url = api_url('cart','add','id='+id);
			if(qty && qty != 'undefined'){
				url += "&qty="+qty;
			}
			//判断属性
			if($("input[name=attr]").length>0){
				var attr = '';
				var showalert = false;
				$("input[name=attr]").each(function(i){
					var val = $(this).val();
					if(!val){
						showalert = true;
					}
					if(attr){
						attr += ",";
					}
					attr += val;
				});
				if(!attr || showalert){
					$.dialog.alert(p_lang('请选择商品属性'));
					return false;
				}
				url += "&ext="+attr;
			}
			return url;
		},
		//取得选中的产品价格
		price:function()
		{
			var ids = $.checkbox.join();
			if(!ids){
				$.dialog.alert(p_lang('请选择要进入结算的产品'),function(){
					$("#total_price").text('--.--');
				});
				return true;
			}
			var url = api_url('cart','price','id='+$.str.encode(ids));
			$.phpok.json(url,function(data){
				if(data.status){
					$("#total_price").html(data.info.price);
					return true;
				}
				$("#total_price").text('--.--');
				$.dialog.alert(data.info);
				return false;
			});
		},
		//更新产品数量
		//id为购物车自动生成的ID号（不是产品ID号，请注意）
		update: function(id,showtip)
		{
			var qty = $("#qty_"+id).val();
			if(!qty || parseInt(qty) < 1){
				$.dialog.alert("购物车产品数量不能为空");
				return false;
			}
			var url = api_url('cart','qty')+"&id="+id+"&qty="+qty;
			if(showtip && showtip != 'undefined'){
				var tip = $.dialog.tips(showtip);
			}
			$.phpok.json(url,function(rs){
				if(showtip && showtip != 'undefined'){
					tip.close();
				}
				if(rs.status){
					$.phpok.reload();
				}else{
					if(!rs.info) rs.info = '更新失败';
					$.dialog.alert(rs.info);
					return false;
				}
			});
		},
		//计算购物车数量
		//这里使用异步Ajax处理
		total:function(func){
			$.phpok.json(api_url('cart','total'),function(rs){
				if(rs.status && rs.info){
					$("#head_cart_num").html(rs.info);
					if(func && func != 'undefined'){
						(func)(rs);
					}
				}
			});
			return false;
		},
		//产品增加操作
		//id为购物车里的ID，不是产品ID
		//qty，是要增加的数值，
		plus:function(id,num){
			var qty = $("#qty_"+id).val();
			if(!qty){
				qty = 1;
			}
			if(!num || num == 'undefined'){
				num = 1;
			}
			qty = parseInt(qty) + parseInt(num);
			$("#qty_"+id).val(qty);
			this.update(id);
		},
		minus:function(id,num){
			var qty = $("#qty_"+id).val();
			if(!qty){
				qty = 1;
			}
			if(qty<2){
				$.dialog.alert('产品数量不能少于1');
				return false;
			}
			if(!num || num == 'undefined'){
				num = 1;
			}
			qty = parseInt(qty) - parseInt(num);
			$("#qty_"+id).val(qty);
			this.update(id);
		},
		//删除产品信息
		//id为购物车自动生成的ID号（不是产品ID号，请注意）
		del: function(id){
			if(!id || id == 'undefined'){
				var id = $.checkbox.join();
				if(!id){
					$.dialog.alert(p_lang('请选择要删除的产品'));
					return false;
				}
				var tmplist = id.split(',');
				var title = [];
				for(var i in tmplist){
					var t = $("#title_"+tmplist[i]).text();
					if(t){
						title.push(t);
					}
				}
				var tip = p_lang('确定要删除产品<br><span style="color:red">{title}</span><br>删除后不能恢复',title.join("<br/>"));
			}else{
				title = $("#title_"+id).text();
				var tip = p_lang('确定要删除产品<br><span style="color:red">{title}</span><br>删除后不能恢复',title);
			}
			$.dialog.confirm(tip,function(){
				var url = api_url('cart','delete','id='+$.str.encode(id));
				$.phpok.json(url,function(data){
					if(data.status){
						$.phpok.reload();
						return true;
					}
					if(!data.info){
						data.info = p_lang('删除失败');
					}
					$.dialog.alert(data.info);
					return false;
				});
			});
		}
	};
})(jQuery);

