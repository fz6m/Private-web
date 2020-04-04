// click.js
function click() {
    var click_cnt = 0;
    var $html = document.getElementsByTagName("html")[0];
    var $body = document.getElementsByTagName("body")[0];
    $html.onclick = function(e) {
        var $elem = document.createElement("b");
        $elem.style.color = "#FFC0CB";
        $elem.style.zIndex = 9999;
        $elem.style.position = "absolute";
        $elem.style.select = "none";
        var x = e.pageX;
        var y = e.pageY;
        $elem.style.left = (x - 10) + "px";
        $elem.style.top = (y - 20) + "px";
        clearInterval(anim);
        switch (++click_cnt) {
            case 10:
                $elem.innerText = "OωO";
                break;
            case 20:
                $elem.innerText = "(๑•́ ∀ •̀๑)";
                break;
            case 30:
                $elem.innerText = "(๑•́ ₃ •̀๑)";
                break;
            case 40:
                $elem.innerText = "(๑•̀_•́๑)";
                break;
            case 50:
                $elem.innerText = "（￣へ￣）";
                break;
            case 60:
                $elem.innerText = "(╯°口°)╯(┴—┴";
                break;
            case 70:
                $elem.innerText = "૮( ᵒ̌皿ᵒ̌ )ა";
                break;
            case 80:
                $elem.innerText = "╮(｡>口<｡)╭";
                break;
            case 90:
                $elem.innerText = "( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";
                break;
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
                $elem.innerText = "(ꐦ°᷄д°᷅)";
                break;
            default:
                $elem.innerText = "🌸";
                break;
        }
        $elem.style.fontSize = Math.random() * 10 + 8 + "px";
        var increase = 0;
        var anim;
        setTimeout(function() {
            anim = setInterval(function() {
                if (++increase == 150) {
                    clearInterval(anim);
                    $body.removeChild($elem);
                }
                $elem.style.top = y - 20 - increase + "px";
                $elem.style.opacity = (150 - increase) / 120;
            }, 8);
        }, 70);
        $body.appendChild($elem);
    };
};

// hidden.js
function hidden() {
    let hour = new Date().getHours()
    let str = ''
    if (hour < 6) {
      str = '修仙中……'
    } else if (hour < 9) {
      str = '早上好！'
    } else if (hour < 12) {
      str = '上午好！'
    } else if (hour < 14) {
      str = '中午好！'
    } else if (hour < 17) {
      str = '下午好！'
    } else if (hour < 19) {
      str = '傍晚好！'
    } else if (hour < 22) {
      str = '晚上好！'
    } else {
      str = '夜深了，要早点休息哦！'
    }
   
    function c () {
      document.title = document[a] ? str + '[' + d + ']' : d
    }
   
    let a = document.title
    let b = document.title
    let d = document.title
    typeof document.hidden !== 'undefined' ? (a = 'hidden', b = 'visibilitychange')
      : typeof document.mozHidden !== 'undefined' ? (a = 'mozHidden', b = 'mozvisibilitychange')
      : typeof document.webkitHidden !== 'undefined' && (a = 'webkitHidden', b = 'webkitvisibilitychange')
    typeof document.addEventListener === 'undefined' && typeof document[a] === 'undefined' || document.addEventListener(b, c, !1)
  };

// console.js
const c = 
  `
        ::::::::::       :::::::::       ::::::::         :::   ::: 
       :+:                   :+:       :+:    :+:       :+:+: :+:+: 
      +:+                  +:+        +:+             +:+ +:+:+ +:+ 
     :#::+::#            +#+         +#++:++#+       +#+  +:+  +#+  
    +#+                +#+          +#+    +#+      +#+       +#+   
   #+#               #+#           #+#    #+#      #+#       #+#    
  ###              #########       ########       ###       ###     
  `;
  
console.log("%c%s",
              "color: #FF69B4; font-size: 15px;",
              c);

// onload
window.onload = function() {
    this.click();
    this.hidden();
};

// slide.js
var allowedBrowsers=["Mobile","IEWin7","Edge","Chrome","Safari","Firefox","other"];
!function(){var s,i,c,a,o={frameRate:150,animationTime:500,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,fixedBackground:!0,excluded:""},p=o,d=!1,u=!1,r={x:0,y:0},f=!1,m=document.documentElement,l=[],w=/^Mac/.test(navigator.platform),h={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},v={37:1,38:1,39:1,40:1};function y(){if(!f&&document.body){f=!0;var e=document.body,t=document.documentElement,o=window.innerHeight,r=e.scrollHeight;if(m=0<=document.compatMode.indexOf("CSS")?t:e,s=e,p.keyboardSupport&&Y("keydown",S),top!=self)u=!0;else if(Z&&o<r&&(e.offsetHeight<=o||t.offsetHeight<=o)){var n,a=document.createElement("div");a.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+m.scrollHeight+"px",document.body.appendChild(a),c=function(){n=n||setTimeout(function(){d||(a.style.height="0",a.style.height=m.scrollHeight+"px",n=null)},500)},setTimeout(c,10),Y("resize",c);if((i=new R(c)).observe(e,{attributes:!0,childList:!0,characterData:!1}),m.offsetHeight<=o){var l=document.createElement("div");l.style.clear="both",e.appendChild(l)}}p.fixedBackground||d||(e.style.backgroundAttachment="scroll",t.style.backgroundAttachment="scroll")}}var b=[],g=!1,n=Date.now();function x(u,f,m){if(function(e,t){e=0<e?1:-1,t=0<t?1:-1,r.x===e&&r.y===t||(r.x=e,r.y=t,b=[],n=0)}(f,m),1!=p.accelerationMax){var e=Date.now()-n;if(e<p.accelerationDelta){var t=(1+50/e)/2;1<t&&(t=Math.min(t,p.accelerationMax),f*=t,m*=t)}n=Date.now()}if(b.push({x:f,y:m,lastX:f<0?.99:-.99,lastY:m<0?.99:-.99,start:Date.now()}),!g){var o=q(),w=u===o||u===document.body;null==u.$scrollBehavior&&function(e){var t=D(e);if(null==T[t]){var o=getComputedStyle(e,"")["scroll-behavior"];T[t]="smooth"==o}return T[t]}(u)&&(u.$scrollBehavior=u.style.scrollBehavior,u.style.scrollBehavior="auto");var h=function(e){for(var t=Date.now(),o=0,r=0,n=0;n<b.length;n++){var a=b[n],l=t-a.start,i=l>=p.animationTime,c=i?1:l/p.animationTime;p.pulseAlgorithm&&(c=I(c));var s=a.x*c-a.lastX>>0,d=a.y*c-a.lastY>>0;o+=s,r+=d,a.lastX+=s,a.lastY+=d,i&&(b.splice(n,1),n--)}w?window.scrollBy(o,r):(o&&(u.scrollLeft+=o),r&&(u.scrollTop+=r)),f||m||(b=[]),b.length?j(h,u,1e3/p.frameRate+1):(g=!1,null!=u.$scrollBehavior&&(u.style.scrollBehavior=u.$scrollBehavior,u.$scrollBehavior=null))};j(h,u,0),g=!0}}function e(e){f||y();var t=e.target;if(e.defaultPrevented||e.ctrlKey)return!0;if(N(s,"embed")||N(t,"embed")&&/\.pdf/i.test(t.src)||N(s,"object")||t.shadowRoot)return!0;var o=-e.wheelDeltaX||e.deltaX||0,r=-e.wheelDeltaY||e.deltaY||0;w&&(e.wheelDeltaX&&K(e.wheelDeltaX,120)&&(o=e.wheelDeltaX/Math.abs(e.wheelDeltaX)*-120),e.wheelDeltaY&&K(e.wheelDeltaY,120)&&(r=e.wheelDeltaY/Math.abs(e.wheelDeltaY)*-120)),o||r||(r=-e.wheelDelta||0),1===e.deltaMode&&(o*=40,r*=40);var n=H(t);return n?!!function(e){if(!e)return;l.length||(l=[e,e,e]);e=Math.abs(e),l.push(e),l.shift(),clearTimeout(a),a=setTimeout(function(){try{localStorage.SS_deltaBuffer=l.join(",")}catch(e){}},1e3);var t=120<e&&P(e),o=!P(120)&&!P(100)&&!t;return e<50||o}(r)||(1.2<Math.abs(o)&&(o*=p.stepSize/120),1.2<Math.abs(r)&&(r*=p.stepSize/120),x(n,o,r),e.preventDefault(),void O()):!u||!_||(Object.defineProperty(e,"target",{value:window.frameElement}),parent.wheel(e))}function S(e){var t=e.target,o=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==h.spacebar;document.body.contains(s)||(s=document.activeElement);var r=/^(button|submit|radio|checkbox|file|color|image)$/i;if(e.defaultPrevented||/^(textarea|select|embed|object)$/i.test(t.nodeName)||N(t,"input")&&!r.test(t.type)||N(s,"video")||function(e){var t=e.target,o=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do{if(o=t.classList&&t.classList.contains("html5-video-controls"))break}while(t=t.parentNode);return o}(e)||t.isContentEditable||o)return!0;if((N(t,"button")||N(t,"input")&&r.test(t.type))&&e.keyCode===h.spacebar)return!0;if(N(t,"input")&&"radio"==t.type&&v[e.keyCode])return!0;var n=0,a=0,l=H(s);if(!l)return!u||!_||parent.keydown(e);var i=l.clientHeight;switch(l==document.body&&(i=window.innerHeight),e.keyCode){case h.up:a=-p.arrowScroll;break;case h.down:a=p.arrowScroll;break;case h.spacebar:a=-(e.shiftKey?1:-1)*i*.9;break;case h.pageup:a=.9*-i;break;case h.pagedown:a=.9*i;break;case h.home:l==document.body&&document.scrollingElement&&(l=document.scrollingElement),a=-l.scrollTop;break;case h.end:var c=l.scrollHeight-l.scrollTop-i;a=0<c?10+c:0;break;case h.left:n=-p.arrowScroll;break;case h.right:n=p.arrowScroll;break;default:return!0}x(l,n,a),e.preventDefault(),O()}function t(e){s=e.target}var k,B,D=(k=0,function(e){return e.uniqueID||(e.uniqueID=k++)}),E={},M={},T={};function O(){clearTimeout(B),B=setInterval(function(){E=M=T={}},1e3)}function C(e,t,o){for(var r=o?E:M,n=e.length;n--;)r[D(e[n])]=t;return t}function H(e){var t=[],o=document.body,r=m.scrollHeight;do{var n=(!1?E:M)[D(e)];if(n)return C(t,n);if(t.push(e),r===e.scrollHeight){var a=L(m)&&L(o)||X(m);if(u&&z(m)||!u&&a)return C(t,q())}else if(z(e)&&X(e))return C(t,e)}while(e=e.parentElement)}function z(e){return e.clientHeight+10<e.scrollHeight}function L(e){return"hidden"!==getComputedStyle(e,"").getPropertyValue("overflow-y")}function X(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"scroll"===t||"auto"===t}function Y(e,t,o){window.addEventListener(e,t,o||!1)}function A(e,t,o){window.removeEventListener(e,t,o||!1)}function N(e,t){return e&&(e.nodeName||"").toLowerCase()===t.toLowerCase()}if(window.localStorage&&localStorage.SS_deltaBuffer)try{l=localStorage.SS_deltaBuffer.split(",")}catch(e){}function K(e,t){return Math.floor(e/t)==e/t}function P(e){return K(l[0],e)&&K(l[1],e)&&K(l[2],e)}var $,j=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)},R=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,q=($=document.scrollingElement,function(){if(!$){var e=document.createElement("div");e.style.cssText="height:10000px;width:1px;",document.body.appendChild(e);var t=document.body.scrollTop;document.documentElement.scrollTop,window.scrollBy(0,3),$=document.body.scrollTop!=t?document.body:document.documentElement,window.scrollBy(0,-3),document.body.removeChild(e)}return $});function F(e){var t;return((e*=p.pulseScale)<1?e-(1-Math.exp(-e)):(e-=1,(t=Math.exp(-1))+(1-Math.exp(-e))*(1-t)))*p.pulseNormalize}function I(e){return 1<=e?1:e<=0?0:(1==p.pulseNormalize&&(p.pulseNormalize/=F(1)),F(e))}var V=window.navigator.userAgent,W=/Edge/.test(V),_=/chrome/i.test(V)&&!W,U=/safari/i.test(V)&&!W,G=/firefox/i.test(V),J=/mobile/i.test(V),Q=/Windows NT 6.1/i.test(V)&&/rv:11/i.test(V),Z=U&&(/Version\/8/i.test(V)||/Version\/9/i.test(V)),ee=function(){if(J)return~allowedBrowsers.indexOf("Mobile");return W?~allowedBrowsers.indexOf("Edge"):_?~allowedBrowsers.indexOf("Chrome"):U?~allowedBrowsers.indexOf("Safari"):G?~allowedBrowsers.indexOf("Firefox"):Q?~allowedBrowsers.indexOf("IEWin7"):~allowedBrowsers.indexOf("other")}();var te=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){te=!0}}))}catch(e){}var oe=!!te&&{passive:!1},re="onwheel"in document.createElement("div")?"wheel":"mousewheel";function ne(e){for(var t in e)o.hasOwnProperty(t)&&(p[t]=e[t])}re&&ee&&(Y(re,e,oe),Y("mousedown",t),Y("load",y)),ne.destroy=function(){i&&i.disconnect(),A(re,e),A("mousedown",t),A("keydown",S),A("resize",c),A("load",y)},window.SmoothScrollOptions&&ne(window.SmoothScrollOptions),"function"==typeof define&&define.amd?define(function(){return ne}):"object"==typeof exports?module.exports=ne:window.SmoothScroll=ne;}();

