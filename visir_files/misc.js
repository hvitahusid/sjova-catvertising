/**	SWFObject v2.2 <http://code.google.com/p/swfobject/> is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> **/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
/*! jQuery jCarouselLite - v1.8.1 - 2012-12-16 * http://kswedberg.github.com/jquery-carousel-lite/* Copyright (c) 2012 Karl Swedberg; Licensed MIT, GPL */
(function(e){function t(e,t){return t.autoStop&&(t.circular?t.autoStop:Math.min(e,t.autoStop))}function n(e){this.id&&(this.id+=e)}e.jCarouselLite={version:"1.8.1",curr:0},e.fn.jCarouselLite=function(r){var i=e.extend(!0,{},e.fn.jCarouselLite.defaults,r),s=Math.ceil,o=Math.abs;return this.each(function(){function J(){return j.slice(I).slice(0,N)}function K(t,n){if(v)return!1;n=n||{};var r=I,s=t>I,o=n.speed||i.speed,u=n.offset||0;return i.beforeStart&&i.beforeStart.call(w,J(),s),j.removeClass(i.activeClass),i.circular?(t>I&&t>F-N?(I%=x,t-=x,E.css(m,-I*p.liSize-u)):t<I&&t<0&&(I+=x,t+=x,E.css(m,-I*p.liSize-u)),I=t+t%1):(t<0?t=0:t>F-C&&(t=F-C),I=t,I===0&&i.first&&i.first.call(this,J(),s),I===F-C&&i.last&&i.last.call(this,J(),s),i.btnPrev&&i.$btnPrev.toggleClass(i.btnDisabledClass,I===0),i.btnNext&&i.$btnNext.toggleClass(i.btnDisabledClass,I===F-C)),B(I,O),e.jCarouselLite.curr=I,r===I&&!n.force?(i.afterEnd&&i.afterEnd.call(w,J(),s),I):(v=!0,g[m]=-(I*p.liSize),E.animate(g,o,i.easing,function(){i.afterEnd&&i.afterEnd.call(w,J(),s),v=!1}),j.eq(I).addClass(i.activeClass),I)}var r,u,a,f,l,c,h,p={div:{},ul:{},li:{}},d=!0,v=!1,m=i.vertical?"top":"left",g={},y=i.vertical?"height":"width",b=this,w=e(this),E=w.find("ul").eq(0),S=E.children("li"),x=S.length,T=i.visible,N=s(T),C=Math.floor(T),k=Math.min(i.start,x-1),L=1,A=0,O={},M={},_={},D=i.vertical?"y":"x",P=i.vertical?"x":"y",H=i.init.call(this,i,S);if(H===!1)return;w.data("dirjc",L),w.data(m+"jc",w.css(m)),i.circular&&(r=S.slice(x-N).clone(!0).each(n),u=S.slice(0,N).clone(!0).each(n),E.prepend(r).append(u),k+=N,A=N);var B=function(t,n){t=s(t);var r,o=(t-A)%x,u=o+C;return n.go&&(r=e(i.btnGo),r.removeClass(i.activeClass).removeClass(i.visibleClass),r.eq(o).addClass(i.activeClass),r.slice(o,o+C).addClass(i.visibleClass),u>r.length&&r.slice(0,u-r.length).addClass(i.visibleClass)),n.pager&&(a.removeClass(i.activeClass),a.eq(s(o/T)).addClass(i.activeClass)),o},j=E.children("li"),F=j.length,I=k;e.jCarouselLite.curr=I;var q=function(e){var t,n,r;return e?(p.div[y]="",p.li={width:"",height:""},p):(t=i.vertical?j.outerHeight(!0):j.outerWidth(!0),n=t*F,r=t*T,p.div[y]=r+"px",p.ul[y]=n+"px",p.ul[m]=-(I*t)+"px",p.li={width:j.width(),height:j.height()},p.liSize=t,p)},R=function(t){var n,r={div:{visibility:"visible",position:"relative",zIndex:2,left:"0"},ul:{margin:"0",padding:"0",position:"relative",listStyleType:"none",zIndex:1},li:{overflow:i.vertical?"hidden":"visible","float":i.vertical?"none":"left"}};t&&(n=q(!0),w.css(n.div),E.css(n.ul),j.css(n.li)),n=q(),i.autoCSS&&(d&&(e.extend(!0,n,r),d=!1),j.css(n.li),E.css(n.ul),w.css(n.div))};R();var U=0,z=t(x,i),W=typeof i.auto=="number"?i.auto:i.scroll,X=function(){b.setAutoAdvance=setTimeout(function(){if(!z||z>U)L=w.data("dirjc"),K(I+L*W),U++,X()},i.timeout)};e.each(["btnPrev","btnNext"],function(t,n){i[n]&&(i["$"+n]=e.isFunction(i[n])?i[n].call(w[0]):e(i[n]),i["$"+n].bind("click.jc",function(e){e.preventDefault();var n=t===0?I-i.scroll:I+i.scroll;return i.directional&&w.data("dirjc",t?1:-1),K(n)}))}),i.circular||(i.btnPrev&&k===0&&i.$btnPrev.addClass(i.btnDisabledClass),i.btnNext&&k+C>=F&&i.$btnNext.addClass(i.btnDisabledClass)),i.btnGo&&(e.each(i.btnGo,function(t,n){e(n).bind("click.jc",function(e){return e.preventDefault(),K(i.circular?T+t:t)})}),O.go=1);if(i.autoPager){f=s(x/T),a=[];for(var V=0;V<f;V++)a.push('<li><a href="#">'+(V+1)+"</a></li>");a.length>1&&(a=e("<ul>"+a.join("")+"</ul>").appendTo(i.autoPager).find("li")),a.find("a").each(function(t){e(this).bind("click.jc",function(e){e.preventDefault();var n=t*T;return i.circular&&(n+=T),K(n)})}),O.pager=1}B(k,O),i.mouseWheel&&w.mousewheel&&w.bind("mousewheel.jc",function(e,t){return t>0?K(I-i.scroll):K(I+i.scroll)}),i.pause&&i.auto&&w.bind("mouseenter.jc",function(){w.trigger("pauseCarousel.jc")}).bind("mouseleave.jc",function(){w.trigger("resumeCarousel.jc")}),i.auto&&X(),e.jCarouselLite.vis=J,w.bind("go.jc",function(e,t,n){typeof t=="undefined"&&(t="+=1");var r=typeof t=="string"&&/(\+=|-=)(\d+)/.exec(t);r?t=r[1]=="-="?I-r[2]*1:I+r[2]*1:t+=k,K(t,n)}).bind("startCarousel.jc",function(e){clearTimeout(b.setAutoAdvance),b.setAutoAdvance=undefined,w.trigger("go","+="+i.scroll),X(),w.removeData("pausedjc").removeData("stoppedjc")}).bind("resumeCarousel.jc",function(e,t){if(b.setAutoAdvance)return;clearTimeout(b.setAutoAdvance),b.setAutoAdvance=undefined;var n=w.data("stoppedjc");if(t||!n)X(),w.removeData("pausedjc"),n&&w.removeData("stoppedjc")}).bind("pauseCarousel.jc",function(e){clearTimeout(b.setAutoAdvance),b.setAutoAdvance=undefined,w.data("pausedjc",!0)}).bind("stopCarousel.jc",function(e){clearTimeout(b.setAutoAdvance),b.setAutoAdvance=undefined,w.data("stoppedjc",!0)}).bind("refreshCarousel.jc",function(e){R(i.autoCSS)}).bind("endCarousel.jc",function(){b.setAutoAdvance&&(clearTimeout(b.setAutoAdvance),b.setAutoAdvance=undefined),i.btnPrev&&i.$btnPrev.addClass(i.btnDisabledClass).unbind(".jc"),i.btnNext&&i.$btnNext.addClass(i.btnDisabledClass).unbind(".jc"),i.btnGo&&e.each(i.btnGo,function(t,n){e(n).unbind(".jc")}),i.circular&&(j.slice(0,N).remove(),j.slice(-N).remove()),e.each([m+"jc","pausedjc","stoppedjc","dirjc"],function(e,t){w.removeData(t)}),w.unbind(".jc")}),h={touchstart:function(e){M.x=e.targetTouches[0].pageX,M.y=e.targetTouches[0].pageY,M[m]=parseFloat(E.css(m)),M.time=+(new Date)},touchmove:function(e){var t=e.targetTouches.length;t===1?(e.preventDefault(),_.x=e.targetTouches[0].pageX,_.y=e.targetTouches[0].pageY,g[m]=M[m]+(_[D]-M[D]),E.css(g)):_=M},touchend:function(e){if(!_.x)return;var t=M[D]-_[D],n=o(t),r=n>i.swipeThresholds[D],s=o(M[P]-_[P])<i.swipeThresholds[P],u=+(new Date)-M.time,a=u<i.swipeThresholds.time,f=t>0?"+=":"-=",l=f+i.scroll,c={force:!0};a&&r&&s?c.speed=i.speed/2:!a&&n<p.liSize/2||!r||a&&!s?l="+=0":!a&&n>p.liSize/2&&(l=Math.round(n/p.liSize),l=f+(l>i.visible?i.visible:l),c.offset=t),w.trigger("go.jc",[l,c]),_={}}},"ontouchend"in document&&i.swipe&&w.bind("touchstart touchmove touchend",function(e){e=e.originalEvent,h[e.type](e)}),i.responsive&&(c=i.autoCSS,e(window).bind("resize",function(e){c&&(E.width(E.width()*2),c=!1),clearTimeout(l),l=setTimeout(function(){w.trigger("refreshCarousel"),c=i.autoCSS},100)}))}),this},e.fn.jCarouselLite.defaults={autoCSS:!0,btnPrev:null,btnNext:null,btnGo:null,autoPager:null,btnDisabledClass:"disabled",activeClass:"active",visibleClass:"vis",mouseWheel:!1,speed:200,easing:null,timeout:4e3,auto:!1,directional:!1,autoStop:!1,pause:!0,vertical:!1,circular:!0,visible:3,start:0,scroll:1,responsive:!1,swipe:!0,swipeThresholds:{x:80,y:120,time:150},init:function(){},first:null,last:null,beforeStart:null,afterEnd:null}})(jQuery);
/** jqVideoBox 1.5.3 is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> */
jQuery(function($){var curstack=null;var curelement=0;$.fn.jqvideobox=function(opt){var stack=this;return this.each(function(){function init(){if($("#lbOverlay").length==0){var _overlay=$(document.createElement("div")).attr({"id":"lbOverlay"}).click(closeMe);var _center=$(document.createElement("div")).attr({"id":"lbCenter"}).css({'width':options.initialWidth+'px','height':options.initialHeight+'px','display':'none'});var _bottomContainer=$(document.createElement("div")).attr({"id":"lbBottomContainer"}).css('display','none');var _bottom=$(document.createElement("div")).attr('id','lbBottom');var _close=$(document.createElement("a")).attr({id:'lbCloseLink',href:'#'}).click(closeMe);var _caption=$(document.createElement("div")).attr('id','lbCaption');var _number=$(document.createElement("div")).attr('id','lbNumber');var _clear=$(document.createElement("div")).css('clear','both');var _prevlink=$('<a href="#" id="lbPrevLink"></a>').click(prevVideo);var _nextlink=$('<a href="#" id="lbNextLink"></a>').click(nextVideo);_bottom.append(_close).append(_caption).append(_number).append(_clear);_bottomContainer.append(_bottom);$("body").append(_overlay).append(_center).append(_bottomContainer);if(!options.navigation){_prevlink.hide();_nextlink.hide()}_overlay.append(_prevlink).append(_nextlink)}overlay=$("#lbOverlay");center=$("#lbCenter");caption=$("#lbCaption");bottomContainer=$("#lbBottomContainer");prevlink=$("#lbPrevLink");nextlink=$("#lbNextLink");element.click(activate);if(options.getimage){getImage()}}function getImage(){var href=element.attr('href');var path=title='';if(options.thumblin){var content='<img src="http://www.thumbl.in/api/url/?url='+href+'" style="width:100px; height:100px;">';element.html(content);return}switch(getType(href)){case'youtube':var videoId=href.split('=');path='http://i2.ytimg.com/vi/'+videoId[1]+'/default.jpg';break;case'youtu.be':var videoId=href.split('=');path='http://i2.ytimg.com/vi/'+videoId[3]+'/default.jpg';break;case'metacafe':var videoId=href.split('/');path='http://gen.metacafe.com/thumb/'+videoId[4]+'/0/0/0/0/'+videoId[5]+'.jpg';break;case'revver':var videoId=href.split('/');path='http://frame.revver.com/frame/120x90/'+videoId[4]+'.jpg';break;default:title=element.text();path='css/video_icon.png';break}if(path){var content='<img src="'+path+'" style="width:100px; height:100px;">';if(title){element.css('position','relative');content+='<span class="lbImageCaption">'+title+'</span>'}element.html(content)}}function prevVideo(){curelement=curelement-1;if(curelement<0){curelement=0}closeMe();setTimeout(function(){$(curstack[curelement]).click()},1);return false}function nextVideo(){curelement=curelement+1;if(curelement==curstack.length){curelement=curstack.length-1}closeMe();setTimeout(function(){$(curstack[curelement]).click()},1);return false}function getType(href){var type='';if(href.match(/youtube\.com\/watch/i)){type='youtube'}else if(href.match(/youtu\.be/i)){type='youtu.be'}else if(href.match(/metacafe\.com\/watch/i)){type='metacafe'}else if(href.match(/google\.com\/videoplay/i)){type='google'}else if(href.match(/dailymotion\.com\/video/i)){type='dailymotion'}else if(href.match(/blip\.tv\/play/i)){type='blip'}else if(href.match(/myspace\.com\/video/i)){type='myspace'}else if(href.match(/hulu\.com\/watch/i)){type='hulu'}else if(href.match(/revver\.com\/video/i)){type='revver'}else if(href.match(/veoh\.com\/watch/i)){type='veoh'}else if(href.match(/vimeo\.com\//i)){type='vimeo'}else if(href.match(/smotri\.com\/video\/view/i)){type='smotri'}else if(href.match(/vkontakte\.ru\/video/i)){type='vkontakte'}else if(href.match(/rutube\.ru\/tracks/i)){type='rutube'}else if(href.match(/video\.mail\.ru\/inbox/i)){type='mailru'}else if(href.match(/video\.qip\.ru\/video/i)){type='qipru'}else if(href.match(/gametrailers\.com\/user-movie/i)||href.match(/gametrailers\.com\/video/i)){type='gametrailers'}else if(href.match(/myvideo\.de\/watch/i)){type='myvideode'}else if(href.match(/collegehumor\.com\/video/i)){type='collegehumor'}else if(href.match(/sevenload\.com\/shows/i)){type='sevenload'}else if(href.match(/\.mov/i)){type='mov_file'}else if(href.match(/\.wmv/i)||href.match(/\.asx/i)){type='wmv_file'}else if(href.match(/\.flv/i)){type='flv_file'}else if(href.match(/\.mp4/i)){type='flv_file'}return type}function closeMe(){overlay.hide();center.hide();bottomContainer.hide();prevlink.hide();nextlink.hide();center.html('');return false}function activate(){curstack=stack;$.each(curstack,function(i,elem){if(element.index(elem)==0){curelement=i}});var object=setup(href);top=(($(window).height()/2)-(options.height/2));left=(($(window).width()/2)-(options.width/2));center.css({'top':top+'px','left':left+'px','display':'none','background':'#fff url(css/loading.gif) no-repeat center','height':options.contentsHeight,'width':options.contentsWidth});overlay.css('display','block').fadeTo("fast",options.defaultOverLayFade);caption.html(title);center.fadeIn("slow",function(){insert(object.attributes,object.params)});return false}function insert(attributes,params){center.css('background','#fff');if(flash){center.append('<div id="lbCenter_wraper"></div>');var attr={'id':attributes.id,'name':attributes.id};var flashvars=false;swfobject.embedSWF(attributes.src,'lbCenter_wraper',attributes.width,attributes.height,"9.0.0","expressInstall.swf",flashvars,params,attributes)}else{center.html(other)}bottomContainer.css({'top':(top+center.height()+10)+"px",'left':center.css('left'),'width':options.contentsWidth+'px'});if(options.animateCaption){bottomContainer.slideDown('slow')}else{bottomContainer.css('display','block')}if(options.navigation){if(curelement!=0){prevlink.css({'top':(top+(options.height/2))+"px",'display':'block','left':(parseInt(center.css('left'),10)-53)+'px'})}if((curelement+1)!=curstack.length){nextlink.css({'top':(top+(options.height/2))+"px",'display':'block','left':(parseInt(center.css('left'),10)+options.width)+'px'})}}}function setup(href){var aDim;if(typeof(rel)!='undefined'){aDim=rel.match(/[0-9]+/g)}overlay.css({'height':$(window).height()+'px'});options.contentsWidth=(aDim&&(aDim[0]>0))?aDim[0]:options.width;options.contentsHeight=(aDim&&(aDim[1]>0))?aDim[1]:options.height;var attributes={'width':options.contentsWidth,'height':options.contentsHeight,'id':'flvvideo'};var params={'wmode':'transparent'};var type=getType(href);switch(type){case'youtube':flash=false;var videoId=href.split('=');other='<iframe frameborder="0" width="'+options.contentsWidth+'" height="'+options.contentsHeight+'" src="http://www.youtube.com/embed/'+videoId[1]+'"></iframe>';break;case'youtu.be':flash=false;var videoId=href.split('/');other='<iframe frameborder="0" width="'+options.contentsWidth+'" height="'+options.contentsHeight+'" src="http://www.youtube.com/embed/'+videoId[3]+'"></iframe>';break;case'metacafe':flash=true;var videoId=href.split('/');attributes.src="http://www.metacafe.com/fplayer/"+videoId[4]+"/.swf";break;case'google':flash=true;var videoId=href.split('=');attributes.src="http://video.google.com/googleplayer.swf?docId="+videoId[1]+"&hl=en";break;case'dailymotion':flash=false;var videoId=href.replace(/(.*)video\/(.*?)_(.*)/,'$2');other='<iframe frameborder="0" width="'+options.contentsWidth+'" height="'+options.contentsHeight+'" src="http://www.dailymotion.com/embed/video/'+videoId+'?theme=none&wmode=transparent"></iframe>';break;case'smotri':flash=true;var videoId=href.split('=');attributes.src='http://pics.smotri.com/player.swf?file='+videoId[1]+'&bufferTime=3&autoStart=false&str_lang=rus&xmlsource=http%3A%2F%2Fpics.smotri.com%2Fcskins%2Fblue%2Fskin_color.xml&xmldatasource=http%3A%2F%2Fpics.smotri.com%2Fskin_ng.xml';break;case'vkontakte':flash=false;var videoId=/video(.*?)_(.*?)($|\?)/ig.exec(href);var hash=/hash=(.*?)($|&)/ig.exec(href);other='<iframe frameborder="0" width="'+options.contentsWidth+'" height="'+options.contentsHeight+'" src="http://vkontakte.ru/video_ext.php?oid='+videoId[1]+'&id='+videoId[2]+'&hash='+hash[1]+'&hd=1"></iframe>';break;case'revver':flash=true;var videoId=href.split('/');attributes.src="http://flash.revver.com/player/1.0/player.swf?mediaId="+videoId[4];break;case'veoh':flash=true;var videoId=href.split('/');attributes.src="http://www.veoh.com/static/swf/veoh/MediaPlayerWrapper.swf?permalinkId="+videoId[4];break;case'vimeo':flash=false;var videoId=href.split('/');other='<iframe frameborder="0" width="'+options.contentsWidth+'" height="'+options.contentsHeight+'" src="http://player.vimeo.com/video/'+videoId[3]+'?title=0&byline=0&portrait=0"></iframe>';break;case'rutube':flash=true;var videoId=href.split('=');attributes.src="http://video.rutube.ru/"+videoId[1];break;case'mailru':flash=true;var videoId=href.split('/');var number=videoId[6].split('.');params.flashvars='movieSrc=inbox/'+videoId[4]+'/'+videoId[5]+'/'+number[0];attributes.src=attributes.data=params.movie="http://img.mail.ru/r/video2/player_v2.swf";break;case'qipru':flash=true;var videoId=href.split('=');attributes.src='http://pics.video.qip.ru/player.swf?file='+videoId[1]+'&bufferTime=3&autoStart=false&str_lang=rus&xmlsource=http%3A%2F%2Fpics.video.qip.ru%2Fcskins%2Fqip%2Fskin_color.xml&xmldatasource=http%3A%2F%2Fpics.video.qip.ru%2Fskin_ng.xml';break;case'gametrailers':flash=true;var videoId=href.split('/');if(videoId[3]=='video'){attributes.src='http://media.mtvnservices.com/mgid:moses:video:gametrailers.com:'+videoId[5]}else{attributes.src='http://media.mtvnservices.com/mgid:moses:usermovie:gametrailers.com:'+parseInt(videoId[5],10)}break;case'myvideode':flash=true;var videoId=href.split('/');attributes.src='http://www.myvideo.de/movie/'+videoId[4];break;case'collegehumor':flash=true;var videoId=href.split('/');attributes.src='http://www.collegehumor.com/moogaloop/moogaloop.swf?clip_id='+videoId[4]+'&use_node_id=true&fullscreen=1';break;case'sevenload':flash=true;var videoId=href.split('/');var id=videoId[6].replace(/(.*?)-(.*)/,'$1');params.flashvars='configPath=http%3A%2F%2Fflash.sevenload.com%2Fplayer%3FportalId%3Den%26autoplay%3D0%26mute%3D0%26itemId%3D'+id+'&locale=en_US&autoplay=0&environment=';attributes.src=attributes.data=params.movie="http://static.sevenload.net/swf/player/player.swf?v=142";break;case'mov_file':flash=false;if(navigator.plugins&&navigator.plugins.length){other='<object id="qtboxMovie" type="video/quicktime" codebase="http://www.apple.com/qtactivex/qtplugin.cab" data="'+sLinkHref+'" width="'+options.contentsWidth+'" height="'+options.contentsHeight+'"><param name="src" value="'+sLinkHref+'" /><param name="scale" value="aspect" /><param name="controller" value="true" /><param name="autoplay" value="true" /><param name="bgcolor" value="#000000" /><param name="enablejavascript" value="true" /></object>'}else{other='<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="'+options.contentsWidth+'" height="'+options.contentsHeight+'" id="qtboxMovie"><param name="src" value="'+sLinkHref+'" /><param name="scale" value="aspect" /><param name="controller" value="true" /><param name="autoplay" value="true" /><param name="bgcolor" value="#000000" /><param name="enablejavascript" value="true" /></object>'}break;case'wmv_file':flash=false;other='<object NAME="Player" WIDTH="'+options.contentsWidth+'" HEIGHT="'+options.contentsHeight+'" align="left" hspace="0" type="application/x-oleobject" CLASSID="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6"><param NAME="URL" VALUE="'+sLinkHref+'"><param><param NAME="AUTOSTART" VALUE="false"></param><param name="showControls" value="true"></param><embed WIDTH="'+options.contentsWidth+'" HEIGHT="'+options.contentsHeight+'" align="left" hspace="0" SRC="'+sLinkHref+'" TYPE="application/x-oleobject" AUTOSTART="false"></embed></object>';break;case'flv_file':flash=true;attributes.src=options.flvplayer+"?file="+sLinkHref;break;default:flash=true;attributes.src=videoID;break}return{'attributes':attributes,'params':params}}var options=$.extend({width:425,height:350,animateCaption:true,defaultOverLayFade:0.8,getimage:false,navigation:false,thumblin:true,flvplayer:'swf/flvplayer.swf'},opt);var overlay,center,caption,bottomContainer,so,flash,videoID,other,top;var element=$(this);var href=element.attr("href");var title=element.attr("title");var rel=element.attr("rel");init()})}});
/** DatePicker * Copyright (c) 2008 Kelvin Luck (http://www.kelvinluck.com/) * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)  * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses. * $Id: jquery.datePicker.js 102 2010-09-13 14:00:54Z kelvin.luck $ **/
Date.dayNames = ['Sunnudagur', 'Mánudagur', 'Þriðjudagur', 'Miðvikudagur', 'Fimmtudagur', 'Föstudagur', 'Laugardagur']; Date.abbrDayNames = ['Sun', 'Mán', 'Þri', 'Mið', 'Fim', 'Fös', 'Lau']; Date.monthNames = ['Janúar', 'Febrúar', 'Mars', 'Apríl', 'Maí', 'Júní', 'Júlí', 'Ágúst', 'September', 'Október', 'Nóvember', 'Desember']; Date.abbrMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'Maí', 'Jún', 'Júl', 'Ágú', 'Sep', 'Okt', 'Nóv', 'Des']; Date.firstDayOfWeek = 1; Date.format = 'dd.mm.yyyy'; Date.fullYearStart = '20'; (function () { function add(name, method) { if (!Date.prototype[name]) { Date.prototype[name] = method } }; add("isLeapYear", function () { var y = this.getFullYear(); return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0 }); add("isWeekend", function () { return this.getDay() == 0 || this.getDay() == 6 }); add("isWeekDay", function () { return !this.isWeekend() }); add("getDaysInMonth", function () { return [31, (this.isLeapYear() ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][this.getMonth()] }); add("getDayName", function (abbreviated) { return abbreviated ? Date.abbrDayNames[this.getDay()] : Date.dayNames[this.getDay()] }); add("getMonthName", function (abbreviated) { return abbreviated ? Date.abbrMonthNames[this.getMonth()] : Date.monthNames[this.getMonth()] }); add("getDayOfYear", function () { var tmpdtm = new Date("1/1/" + this.getFullYear()); return Math.floor((this.getTime() - tmpdtm.getTime()) / 86400000) }); add("getWeekOfYear", function () { return Math.ceil(this.getDayOfYear() / 7) }); add("setDayOfYear", function (day) { this.setMonth(0); this.setDate(day); return this }); add("addYears", function (num) { this.setFullYear(this.getFullYear() + num); return this }); add("addMonths", function (num) { var tmpdtm = this.getDate(); this.setMonth(this.getMonth() + num); if (tmpdtm > this.getDate()) this.addDays(-this.getDate()); return this }); add("addDays", function (num) { this.setTime(this.getTime() + (num * 86400000)); return this }); add("addHours", function (num) { this.setHours(this.getHours() + num); return this }); add("addMinutes", function (num) { this.setMinutes(this.getMinutes() + num); return this }); add("addSeconds", function (num) { this.setSeconds(this.getSeconds() + num); return this }); add("zeroTime", function () { this.setMilliseconds(0); this.setSeconds(0); this.setMinutes(0); this.setHours(0); return this }); add("asString", function (format) { var r = format || Date.format; if (r.split('mm').length > 1) { r = r.split('mmmm').join(this.getMonthName(false)).split('mmm').join(this.getMonthName(true)).split('mm').join(_zeroPad(this.getMonth() + 1)) } else { r = r.split('m').join(this.getMonth() + 1) } r = r.split('yyyy').join(this.getFullYear()).split('yy').join((this.getFullYear() + '').substring(2)).split('dd').join(_zeroPad(this.getDate())).split('d').join(this.getDate()); return r }); Date.fromString = function (s) { var f = Date.format; var d = new Date('01/01/1970'); if (s == '') return d; s = s.toLowerCase(); var matcher = ''; var order = []; var r = /(dd?d?|mm?m?|yy?yy?)+([^(m|d|y)])?/g; var results; while ((results = r.exec(f)) != null) { switch (results[1]) { case 'd': case 'dd': case 'm': case 'mm': case 'yy': case 'yyyy': matcher += '(\\d+\\d?\\d?\\d?)+'; order.push(results[1].substr(0, 1)); break; case 'mmm': matcher += '([a-z]{3})'; order.push('M'); break } if (results[2]) { matcher += results[2] } } var dm = new RegExp(matcher); var result = s.match(dm); for (var i = 0; i < order.length; i++) { var res = result[i + 1]; switch (order[i]) { case 'd': d.setDate(res); break; case 'm': d.setMonth(Number(res) - 1); break; case 'M': for (var j = 0; j < Date.abbrMonthNames.length; j++) { if (Date.abbrMonthNames[j].toLowerCase() == res) break } d.setMonth(j); break; case 'y': d.setYear(res); break } } return d }; var _zeroPad = function (num) { var s = '0' + num; return s.substring(s.length - 2) } })();
(function (a) { function c(a) { this.ele = a; this.displayedMonth = null; this.displayedYear = null; this.startDate = null; this.endDate = null; this.showYearNavigation = null; this.closeOnSelect = null; this.displayClose = null; this.rememberViewedMonth = null; this.selectMultiple = null; this.numSelectable = null; this.numSelected = null; this.verticalPosition = null; this.horizontalPosition = null; this.verticalOffset = null; this.horizontalOffset = null; this.button = null; this.renderCallback = []; this.selectedDates = {}; this.inline = null; this.context = "#dp-popup"; this.settings = {} } function d(b) { if (b._dpId) return a.event._dpCache[b._dpId]; return false } a.fn.extend({ renderCalendar: function (b) { var c = function (a) { return document.createElement(a) }; b = a.extend({}, a.fn.datePicker.defaults, b); if (b.showHeader != a.dpConst.SHOW_HEADER_NONE) { var d = a(c("tr")); for (var e = Date.firstDayOfWeek; e < Date.firstDayOfWeek + 7; e++) { var f = e % 7; var g = Date.dayNames[f]; d.append(jQuery(c("th")).attr({ scope: "col", abbr: g, title: g, "class": f == 0 || f == 6 ? "weekend" : "weekday" }).html(b.showHeader == a.dpConst.SHOW_HEADER_SHORT ? g.substr(0, 1) : g)) } } var h = a(c("table")).attr({ cellspacing: 2 }).addClass("jCalendar").append(b.showHeader != a.dpConst.SHOW_HEADER_NONE ? a(c("thead")).append(d) : c("thead")); var i = a(c("tbody")); var j = (new Date).zeroTime(); j.setHours(12); var k = b.month == undefined ? j.getMonth() : b.month; var l = b.year || j.getFullYear(); var m = new Date(l, k, 1, 12, 0, 0); var n = Date.firstDayOfWeek - m.getDay() + 1; if (n > 1) n -= 7; var o = Math.ceil((-1 * n + 1 + m.getDaysInMonth()) / 7); m.addDays(n - 1); var p = function (c) { return function () { if (b.hoverClass) { var d = a(this); if (!b.selectWeek) { d.addClass(b.hoverClass) } else if (c && !d.is(".disabled")) { d.parent().addClass("activeWeekHover") } } } }; var q = function () { if (b.hoverClass) { var c = a(this); c.removeClass(b.hoverClass); c.parent().removeClass("activeWeekHover") } }; var r = 0; while (r++ < o) { var s = jQuery(c("tr")); var t = b.dpController ? m > b.dpController.startDate : false; for (var e = 0; e < 7; e++) { var u = m.getMonth() == k; var v = a(c("td")).text(m.getDate() + "").addClass((u ? "current-month " : "other-month ") + (m.isWeekend() ? "weekend " : "weekday ") + (u && m.getTime() == j.getTime() ? "today " : "")).data("datePickerDate", m.asString()).hover(p(t), q); s.append(v); if (b.renderCallback) { b.renderCallback(v, m, k, l) } m = new Date(m.getFullYear(), m.getMonth(), m.getDate() + 1, 12, 0, 0) } i.append(s) } h.append(i); return this.each(function () { a(this).empty().append(h) }) }, datePicker: function (b) { if (!a.event._dpCache) a.event._dpCache = []; b = a.extend({}, a.fn.datePicker.defaults, b); return this.each(function () { var d = a(this); var e = true; if (!this._dpId) { this._dpId = a.guid++; a.event._dpCache[this._dpId] = new c(this); e = false } if (b.inline) { b.createButton = false; b.displayClose = false; b.closeOnSelect = false; d.empty() } var f = a.event._dpCache[this._dpId]; f.init(b); if (!e && b.createButton) { f.button = a('<a href="#" class="dp-choose-date" title="' + a.dpText.TEXT_CHOOSE_DATE + '">' + a.dpText.TEXT_CHOOSE_DATE + "</a>").bind("click", function () { d.dpDisplay(this); this.blur(); return false }); d.after(f.button) } if (!e && d.is(":text")) { d.bind("dateSelected", function (a, b, c) { this.value = b.asString() }).bind("change", function () { if (this.value == "") { f.clearSelected() } else { var a = Date.fromString(this.value); if (a) { f.setSelected(a, true, true) } } }); if (b.clickInput) { d.bind("click", function () { d.trigger("change"); d.dpDisplay() }) } var g = Date.fromString(this.value); if (this.value != "" && g) { f.setSelected(g, true, true) } } d.addClass("dp-applied") }) }, dpSetDisabled: function (a) { return b.call(this, "setDisabled", a) }, dpSetStartDate: function (a) { return b.call(this, "setStartDate", a) }, dpSetEndDate: function (a) { return b.call(this, "setEndDate", a) }, dpGetSelected: function () { var a = d(this[0]); if (a) { return a.getSelected() } return null }, dpSetSelected: function (a, c, d, e) { if (c == undefined) c = true; if (d == undefined) d = true; if (e == undefined) e = true; return b.call(this, "setSelected", Date.fromString(a), c, d, e) }, dpSetDisplayedMonth: function (a, c) { return b.call(this, "setDisplayedMonth", Number(a), Number(c), true) }, dpDisplay: function (a) { return b.call(this, "display", a) }, dpSetRenderCallback: function (a) { return b.call(this, "setRenderCallback", a) }, dpSetPosition: function (a, c) { return b.call(this, "setPosition", a, c) }, dpSetOffset: function (a, c) { return b.call(this, "setOffset", a, c) }, dpClose: function () { return b.call(this, "_closeCalendar", false, this[0]) }, dpRerenderCalendar: function () { return b.call(this, "_rerenderCalendar") }, _dpDestroy: function () { } }); var b = function (a, b, c, e, f) { return this.each(function () { var g = d(this); if (g) { g[a](b, c, e, f) } }) }; a.extend(c.prototype, { init: function (a) { this.setStartDate(a.startDate); this.setEndDate(a.endDate); this.setDisplayedMonth(Number(a.month), Number(a.year)); this.setRenderCallback(a.renderCallback); this.showYearNavigation = a.showYearNavigation; this.closeOnSelect = a.closeOnSelect; this.displayClose = a.displayClose; this.rememberViewedMonth = a.rememberViewedMonth; this.selectMultiple = a.selectMultiple; this.numSelectable = a.selectMultiple ? a.numSelectable : 1; this.numSelected = 0; this.verticalPosition = a.verticalPosition; this.horizontalPosition = a.horizontalPosition; this.hoverClass = a.hoverClass; this.setOffset(a.verticalOffset, a.horizontalOffset); this.inline = a.inline; this.settings = a; if (this.inline) { this.context = this.ele; this.display() } }, setStartDate: function (a) { if (a) { if (a instanceof Date) { this.startDate = a } else { this.startDate = Date.fromString(a) } } if (!this.startDate) { this.startDate = (new Date).zeroTime() } this.setDisplayedMonth(this.displayedMonth, this.displayedYear) }, setEndDate: function (a) { if (a) { if (a instanceof Date) { this.endDate = a } else { this.endDate = Date.fromString(a) } } if (!this.endDate) { this.endDate = new Date("12/31/2999") } if (this.endDate.getTime() < this.startDate.getTime()) { this.endDate = this.startDate } this.setDisplayedMonth(this.displayedMonth, this.displayedYear) }, setPosition: function (a, b) { this.verticalPosition = a; this.horizontalPosition = b }, setOffset: function (a, b) { this.verticalOffset = parseInt(a) || 0; this.horizontalOffset = parseInt(b) || 0 }, setDisabled: function (b) { $e = a(this.ele); $e[b ? "addClass" : "removeClass"]("dp-disabled"); if (this.button) { $but = a(this.button); $but[b ? "addClass" : "removeClass"]("dp-disabled"); $but.attr("title", b ? "" : a.dpText.TEXT_CHOOSE_DATE) } if ($e.is(":text")) { $e.attr("disabled", b ? "disabled" : "") } }, setDisplayedMonth: function (b, c, d) { if (this.startDate == undefined || this.endDate == undefined) { return } var e = new Date(this.startDate.getTime()); e.setDate(1); var f = new Date(this.endDate.getTime()); f.setDate(1); var g; if (!b && !c || isNaN(b) && isNaN(c)) { g = (new Date).zeroTime(); g.setDate(1) } else if (isNaN(b)) { g = new Date(c, this.displayedMonth, 1) } else if (isNaN(c)) { g = new Date(this.displayedYear, b, 1) } else { g = new Date(c, b, 1) } if (g.getTime() < e.getTime()) { g = e } else if (g.getTime() > f.getTime()) { g = f } var h = this.displayedMonth; var i = this.displayedYear; this.displayedMonth = g.getMonth(); this.displayedYear = g.getFullYear(); if (d && (this.displayedMonth != h || this.displayedYear != i)) { this._rerenderCalendar(); a(this.ele).trigger("dpMonthChanged", [this.displayedMonth, this.displayedYear]) } }, setSelected: function (b, c, d, e) { if (b < this.startDate || b.zeroTime() > this.endDate.zeroTime()) { return } var f = this.settings; if (f.selectWeek) { b = b.addDays(-(b.getDay() - Date.firstDayOfWeek + 7) % 7); if (b < this.startDate) { return } } if (c == this.isSelected(b)) { return } if (this.selectMultiple == false) { this.clearSelected() } else if (c && this.numSelected == this.numSelectable) { return } if (d && (this.displayedMonth != b.getMonth() || this.displayedYear != b.getFullYear())) { this.setDisplayedMonth(b.getMonth(), b.getFullYear(), true) } this.selectedDates[b.asString()] = c; this.numSelected += c ? 1 : -1; var g = "td." + (b.getMonth() == this.displayedMonth ? "current-month" : "other-month"); var h; a(g, this.context).each(function () { if (a(this).data("datePickerDate") == b.asString()) { h = a(this); if (f.selectWeek) { h.parent()[c ? "addClass" : "removeClass"]("selectedWeek") } h[c ? "addClass" : "removeClass"]("selected") } }); a("td", this.context).not(".selected")[this.selectMultiple && this.numSelected == this.numSelectable ? "addClass" : "removeClass"]("unselectable"); if (e) { var f = this.isSelected(b); $e = a(this.ele); var i = Date.fromString(b.asString()); $e.trigger("dateSelected", [i, h, f]); $e.trigger("change") } }, isSelected: function (a) { return this.selectedDates[a.asString()] }, getSelected: function () { var a = []; for (var b in this.selectedDates) { if (this.selectedDates[b] == true) { a.push(Date.fromString(b)) } } return a }, clearSelected: function () { this.selectedDates = {}; this.numSelected = 0; a("td.selected", this.context).removeClass("selected").parent().removeClass("selectedWeek") }, display: function (b) { if (a(this.ele).is(".dp-disabled")) return; b = b || this.ele; var c = this; var d = a(b); var e = d.offset(); var f; var g; var h; var i; if (c.inline) { f = a(this.ele); g = { id: "calendar-" + this.ele._dpId, "class": "dp-popup dp-popup-inline" }; a(".dp-popup", f).remove(); i = {} } else { f = a("body"); g = { id: "dp-popup", "class": "dp-popup" }; i = { top: e.top + c.verticalOffset, left: e.left + c.horizontalOffset }; var j = function (b) { var d = b.target; var e = a("#dp-popup")[0]; while (true) { if (d == e) { return true } else if (d == document) { c._closeCalendar(); return false } else { d = a(d).parent()[0] } } }; this._checkMouse = j; c._closeCalendar(true); a(document).bind("keydown.datepicker", function (a) { if (a.keyCode == 27) { c._closeCalendar() } }) } if (!c.rememberViewedMonth) { var k = this.getSelected()[0]; if (k) { k = new Date(k); this.setDisplayedMonth(k.getMonth(), k.getFullYear(), false) } } f.append(a("<div></div>").attr(g).css(i).append(a("<h2></h2>"), a('<div class="dp-nav-prev"></div>').append(a('<a class="dp-nav-prev-year" href="#" title="' + a.dpText.TEXT_PREV_YEAR + '"><<</a>').bind("click", function () { return c._displayNewMonth.call(c, this, 0, -1) }), a('<a class="dp-nav-prev-month" href="#" title="' + a.dpText.TEXT_PREV_MONTH + '"><</a>').bind("click", function () { return c._displayNewMonth.call(c, this, -1, 0) })), a('<div class="dp-nav-next"></div>').append(a('<a class="dp-nav-next-year" href="#" title="' + a.dpText.TEXT_NEXT_YEAR + '">>></a>').bind("click", function () { return c._displayNewMonth.call(c, this, 0, 1) }), a('<a class="dp-nav-next-month" href="#" title="' + a.dpText.TEXT_NEXT_MONTH + '">></a>').bind("click", function () { return c._displayNewMonth.call(c, this, 1, 0) })), a('<div class="dp-calendar"></div>')).bgIframe()); var l = this.inline ? a(".dp-popup", this.context) : a("#dp-popup"); if (this.showYearNavigation == false) { a(".dp-nav-prev-year, .dp-nav-next-year", c.context).css("display", "none") } if (this.displayClose) { l.append(a('<a href="#" id="dp-close">' + a.dpText.TEXT_CLOSE + "</a>").bind("click", function () { c._closeCalendar(); return false })) } c._renderCalendar(); a(this.ele).trigger("dpDisplayed", l); if (!c.inline) { if (this.verticalPosition == a.dpConst.POS_BOTTOM) { l.css("top", e.top + d.height() - l.height() + c.verticalOffset) } if (this.horizontalPosition == a.dpConst.POS_RIGHT) { l.css("left", e.left + d.width() - l.width() + c.horizontalOffset) } a(document).bind("mousedown.datepicker", this._checkMouse) } }, setRenderCallback: function (a) { if (a == null) return; if (a && typeof a == "function") { a = [a] } this.renderCallback = this.renderCallback.concat(a) }, cellRender: function (b, c, d, e) { var f = this.dpController; var g = new Date(c.getTime()); b.bind("click", function () { var b = a(this); if (!b.is(".disabled")) { f.setSelected(g, !b.is(".selected") || !f.selectMultiple, false, true); if (f.closeOnSelect) { if (f.settings.autoFocusNextInput) { var c = f.ele; var d = false; a(":input", c.form).each(function () { if (d) { a(this).focus(); return false } if (this == c) { d = true } }) } else { f.ele.focus() } f._closeCalendar() } } }); if (f.isSelected(g)) { b.addClass("selected"); if (f.settings.selectWeek) { b.parent().addClass("selectedWeek") } } else if (f.selectMultiple && f.numSelected == f.numSelectable) { b.addClass("unselectable") } }, _applyRenderCallbacks: function () { var b = this; a("td", this.context).each(function () { for (var c = 0; c < b.renderCallback.length; c++) { $td = a(this); b.renderCallback[c].apply(this, [$td, Date.fromString($td.data("datePickerDate")), b.displayedMonth, b.displayedYear]) } }); return }, _displayNewMonth: function (b, c, d) { if (!a(b).is(".disabled")) { this.setDisplayedMonth(this.displayedMonth + c, this.displayedYear + d, true) } b.blur(); return false }, _rerenderCalendar: function () { this._clearCalendar(); this._renderCalendar() }, _renderCalendar: function () { a("h2", this.context).html((new Date(this.displayedYear, this.displayedMonth, 1)).asString(a.dpText.HEADER_FORMAT)); a(".dp-calendar", this.context).renderCalendar(a.extend({}, this.settings, { month: this.displayedMonth, year: this.displayedYear, renderCallback: this.cellRender, dpController: this, hoverClass: this.hoverClass })); if (this.displayedYear == this.startDate.getFullYear() && this.displayedMonth == this.startDate.getMonth()) { a(".dp-nav-prev-year", this.context).addClass("disabled"); a(".dp-nav-prev-month", this.context).addClass("disabled"); a(".dp-calendar td.other-month", this.context).each(function () { var b = a(this); if (Number(b.text()) > 20) { b.addClass("disabled") } }); var b = this.startDate.getDate(); a(".dp-calendar td.current-month", this.context).each(function () { var c = a(this); if (Number(c.text()) < b) { c.addClass("disabled") } }) } else { a(".dp-nav-prev-year", this.context).removeClass("disabled"); a(".dp-nav-prev-month", this.context).removeClass("disabled"); var b = this.startDate.getDate(); if (b > 20) { var c = this.startDate.getTime(); var d = new Date(c); d.addMonths(1); if (this.displayedYear == d.getFullYear() && this.displayedMonth == d.getMonth()) { a(".dp-calendar td.other-month", this.context).each(function () { var b = a(this); if (Date.fromString(b.data("datePickerDate")).getTime() < c) { b.addClass("disabled") } }) } } } if (this.displayedYear == this.endDate.getFullYear() && this.displayedMonth == this.endDate.getMonth()) { a(".dp-nav-next-year", this.context).addClass("disabled"); a(".dp-nav-next-month", this.context).addClass("disabled"); a(".dp-calendar td.other-month", this.context).each(function () { var b = a(this); if (Number(b.text()) < 14) { b.addClass("disabled") } }); var b = this.endDate.getDate(); a(".dp-calendar td.current-month", this.context).each(function () { var c = a(this); if (Number(c.text()) > b) { c.addClass("disabled") } }) } else { a(".dp-nav-next-year", this.context).removeClass("disabled"); a(".dp-nav-next-month", this.context).removeClass("disabled"); var b = this.endDate.getDate(); if (b < 13) { var e = new Date(this.endDate.getTime()); e.addMonths(-1); if (this.displayedYear == e.getFullYear() && this.displayedMonth == e.getMonth()) { a(".dp-calendar td.other-month", this.context).each(function () { var c = a(this); var d = Number(c.text()); if (d < 13 && d > b) { c.addClass("disabled") } }) } } } this._applyRenderCallbacks() }, _closeCalendar: function (b, c) { if (!c || c == this.ele) { a(document).unbind("mousedown.datepicker"); a(document).unbind("keydown.datepicker"); this._clearCalendar(); a("#dp-popup a").unbind(); a("#dp-popup").empty().remove(); if (!b) { a(this.ele).trigger("dpClosed", [this.getSelected()]) } } }, _clearCalendar: function () { a(".dp-calendar td", this.context).unbind(); a(".dp-calendar", this.context).empty() } }); a.dpConst = { SHOW_HEADER_NONE: 0, SHOW_HEADER_SHORT: 1, SHOW_HEADER_LONG: 2, POS_TOP: 0, POS_BOTTOM: 1, POS_LEFT: 0, POS_RIGHT: 1, DP_INTERNAL_FOCUS: "dpInternalFocusTrigger" }; a.dpText = { TEXT_PREV_YEAR: "Previous year", TEXT_PREV_MONTH: "Previous month", TEXT_NEXT_YEAR: "Next year", TEXT_NEXT_MONTH: "Next month", TEXT_CLOSE: "Close", TEXT_CHOOSE_DATE: "Choose date", HEADER_FORMAT: "mmmm yyyy" }; a.dpVersion = "$Id: jquery.datePicker.js 108 2011-11-17 21:19:57Z kelvin.luck@gmail.com $"; a.fn.datePicker.defaults = { month: undefined, year: undefined, showHeader: a.dpConst.SHOW_HEADER_SHORT, startDate: undefined, endDate: undefined, inline: false, renderCallback: null, createButton: true, showYearNavigation: true, closeOnSelect: true, displayClose: false, selectMultiple: false, numSelectable: Number.MAX_VALUE, clickInput: false, rememberViewedMonth: true, selectWeek: false, verticalPosition: a.dpConst.POS_TOP, horizontalPosition: a.dpConst.POS_LEFT, verticalOffset: 0, horizontalOffset: 0, hoverClass: "dp-hover", autoFocusNextInput: false }; if (a.fn.bgIframe == undefined) { a.fn.bgIframe = function () { return this } } a(window).bind("unload", function () { var b = a.event._dpCache || []; for (var c in b) { a(b[c].ele)._dpDestroy() } }) })(jQuery);
/** JwPlayer 5.10 **/
if(typeof jwplayer=="undefined"){var jwplayer=function(a){if(jwplayer.api){return jwplayer.api.selectPlayer(a)}};var $jw=jwplayer;jwplayer.version="5.10.2295 (Licensed version)";jwplayer.vid=document.createElement("video");jwplayer.audio=document.createElement("audio");jwplayer.source=document.createElement("source");(function(b){b.utils=function(){};b.utils.typeOf=function(d){var c=typeof d;if(c==="object"){if(d){if(d instanceof Array){c="array"}}else{c="null"}}return c};b.utils.extend=function(){var c=b.utils.extend["arguments"];if(c.length>1){for(var e=1;e<c.length;e++){for(var d in c[e]){c[0][d]=c[e][d]}}return c[0]}return null};b.utils.clone=function(f){var c;var d=b.utils.clone["arguments"];if(d.length==1){switch(b.utils.typeOf(d[0])){case"object":c={};for(var e in d[0]){c[e]=b.utils.clone(d[0][e])}break;case"array":c=[];for(var e in d[0]){c[e]=b.utils.clone(d[0][e])}break;default:return d[0];break}}return c};b.utils.extension=function(c){if(!c){return""}c=c.substring(c.lastIndexOf("/")+1,c.length);c=c.split("?")[0];if(c.lastIndexOf(".")>-1){return c.substr(c.lastIndexOf(".")+1,c.length).toLowerCase()}return};b.utils.html=function(c,d){c.innerHTML=d};b.utils.wrap=function(c,d){if(c.parentNode){c.parentNode.replaceChild(d,c)}d.appendChild(c)};b.utils.ajax=function(g,f,c){var e;if(window.XMLHttpRequest){e=new XMLHttpRequest()}else{e=new ActiveXObject("Microsoft.XMLHTTP")}e.onreadystatechange=function(){if(e.readyState===4){if(e.status===200){if(f){if(!b.utils.exists(e.responseXML)){try{if(window.DOMParser){var h=(new DOMParser()).parseFromString(e.responseText,"text/xml");if(h){e=b.utils.extend({},e,{responseXML:h})}}else{h=new ActiveXObject("Microsoft.XMLDOM");h.async="false";h.loadXML(e.responseText);e=b.utils.extend({},e,{responseXML:h})}}catch(j){if(c){c(g)}}}f(e)}}else{if(c){c(g)}}}};try{e.open("GET",g,true);e.send(null)}catch(d){if(c){c(g)}}return e};b.utils.load=function(d,e,c){d.onreadystatechange=function(){if(d.readyState===4){if(d.status===200){if(e){e()}}else{if(c){c()}}}}};b.utils.find=function(d,c){return d.getElementsByTagName(c)};b.utils.append=function(c,d){c.appendChild(d)};b.utils.isIE=function(){return((!+"\v1")||(typeof window.ActiveXObject!="undefined"))};b.utils.userAgentMatch=function(d){var c=navigator.userAgent.toLowerCase();return(c.match(d)!==null)};b.utils.isIOS=function(){return b.utils.userAgentMatch(/iP(hone|ad|od)/i)};b.utils.isIPad=function(){return b.utils.userAgentMatch(/iPad/i)};b.utils.isIPod=function(){return b.utils.userAgentMatch(/iP(hone|od)/i)};b.utils.isAndroid=function(){return b.utils.userAgentMatch(/android/i)};b.utils.isLegacyAndroid=function(){return b.utils.userAgentMatch(/android 2.[012]/i)};b.utils.isBlackberry=function(){return b.utils.userAgentMatch(/blackberry/i)};b.utils.isMobile=function(){return b.utils.userAgentMatch(/(iP(hone|ad|od))|android/i)};b.utils.getFirstPlaylistItemFromConfig=function(c){var d={};var e;if(c.playlist&&c.playlist.length){e=c.playlist[0]}else{e=c}d.file=e.file;d.levels=e.levels;d.streamer=e.streamer;d.playlistfile=e.playlistfile;d.provider=e.provider;if(!d.provider){if(d.file&&(d.file.toLowerCase().indexOf("youtube.com")>-1||d.file.toLowerCase().indexOf("youtu.be")>-1)){d.provider="youtube"}if(d.streamer&&d.streamer.toLowerCase().indexOf("rtmp://")==0){d.provider="rtmp"}if(e.type){d.provider=e.type.toLowerCase()}}if(d.provider=="audio"){d.provider="sound"}return d};b.utils.getOuterHTML=function(c){if(c.outerHTML){return c.outerHTML}else{try{return new XMLSerializer().serializeToString(c)}catch(d){return""}}};b.utils.setOuterHTML=function(f,e){if(f.outerHTML){f.outerHTML=e}else{var g=document.createElement("div");g.innerHTML=e;var c=document.createRange();c.selectNodeContents(g);var d=c.extractContents();f.parentNode.insertBefore(d,f);f.parentNode.removeChild(f)}};b.utils.hasFlash=function(){if(typeof navigator.plugins!="undefined"&&typeof navigator.plugins["Shockwave Flash"]!="undefined"){return true}if(typeof window.ActiveXObject!="undefined"){try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash");return true}catch(c){}}return false};b.utils.getPluginName=function(c){if(c.lastIndexOf("/")>=0){c=c.substring(c.lastIndexOf("/")+1,c.length)}if(c.lastIndexOf("-")>=0){c=c.substring(0,c.lastIndexOf("-"))}if(c.lastIndexOf(".swf")>=0){c=c.substring(0,c.lastIndexOf(".swf"))}if(c.lastIndexOf(".js")>=0){c=c.substring(0,c.lastIndexOf(".js"))}return c};b.utils.getPluginVersion=function(c){if(c.lastIndexOf("-")>=0){if(c.lastIndexOf(".js")>=0){return c.substring(c.lastIndexOf("-")+1,c.lastIndexOf(".js"))}else{if(c.lastIndexOf(".swf")>=0){return c.substring(c.lastIndexOf("-")+1,c.lastIndexOf(".swf"))}else{return c.substring(c.lastIndexOf("-")+1)}}}return""};b.utils.getAbsolutePath=function(j,h){if(!b.utils.exists(h)){h=document.location.href}if(!b.utils.exists(j)){return undefined}if(a(j)){return j}var k=h.substring(0,h.indexOf("://")+3);var g=h.substring(k.length,h.indexOf("/",k.length+1));var d;if(j.indexOf("/")===0){d=j.split("/")}else{var e=h.split("?")[0];e=e.substring(k.length+g.length+1,e.lastIndexOf("/"));d=e.split("/").concat(j.split("/"))}var c=[];for(var f=0;f<d.length;f++){if(!d[f]||!b.utils.exists(d[f])||d[f]=="."){continue}else{if(d[f]==".."){c.pop()}else{c.push(d[f])}}}return k+g+"/"+c.join("/")};function a(d){if(!b.utils.exists(d)){return}var e=d.indexOf("://");var c=d.indexOf("?");return(e>0&&(c<0||(c>e)))}b.utils.pluginPathType={ABSOLUTE:"ABSOLUTE",RELATIVE:"RELATIVE",CDN:"CDN"};b.utils.getPluginPathType=function(d){if(typeof d!="string"){return}d=d.split("?")[0];var e=d.indexOf("://");if(e>0){return b.utils.pluginPathType.ABSOLUTE}var c=d.indexOf("/");var f=b.utils.extension(d);if(e<0&&c<0&&(!f||!isNaN(f))){return b.utils.pluginPathType.CDN}return b.utils.pluginPathType.RELATIVE};b.utils.mapEmpty=function(c){for(var d in c){return false}return true};b.utils.mapLength=function(d){var c=0;for(var e in d){c++}return c};b.utils.log=function(d,c){if(typeof console!="undefined"&&typeof console.log!="undefined"){if(c){console.log(d,c)}else{console.log(d)}}};b.utils.css=function(d,g,c){if(b.utils.exists(d)){for(var e in g){try{if(typeof g[e]==="undefined"){continue}else{if(typeof g[e]=="number"&&!(e=="zIndex"||e=="opacity")){if(isNaN(g[e])){continue}if(e.match(/color/i)){g[e]="#"+b.utils.strings.pad(g[e].toString(16),6)}else{g[e]=Math.ceil(g[e])+"px"}}}d.style[e]=g[e]}catch(f){}}}};b.utils.isYouTube=function(c){return(c.indexOf("youtube.com")>-1||c.indexOf("youtu.be")>-1)};b.utils.transform=function(e,d,c,g,h){if(!b.utils.exists(d)){d=1}if(!b.utils.exists(c)){c=1}if(!b.utils.exists(g)){g=0}if(!b.utils.exists(h)){h=0}if(d==1&&c==1&&g==0&&h==0){e.style.webkitTransform="";e.style.MozTransform="";e.style.OTransform=""}else{var f="scale("+d+","+c+") translate("+g+"px,"+h+"px)";e.style.webkitTransform=f;e.style.MozTransform=f;e.style.OTransform=f}};b.utils.stretch=function(k,q,p,g,n,h){if(typeof p=="undefined"||typeof g=="undefined"||typeof n=="undefined"||typeof h=="undefined"){return}var d=p/n;var f=g/h;var m=0;var l=0;var e=false;var c={};if(q.parentElement){q.parentElement.style.overflow="hidden"}b.utils.transform(q);switch(k.toUpperCase()){case b.utils.stretching.NONE:c.width=n;c.height=h;c.top=(g-c.height)/2;c.left=(p-c.width)/2;break;case b.utils.stretching.UNIFORM:if(d>f){c.width=n*f;c.height=h*f;if(c.width/p>0.95){e=true;d=Math.ceil(100*p/c.width)/100;f=1;c.width=p}}else{c.width=n*d;c.height=h*d;if(c.height/g>0.95){e=true;d=1;f=Math.ceil(100*g/c.height)/100;c.height=g}}c.top=(g-c.height)/2;c.left=(p-c.width)/2;break;case b.utils.stretching.FILL:if(d>f){c.width=n*d;c.height=h*d}else{c.width=n*f;c.height=h*f}c.top=(g-c.height)/2;c.left=(p-c.width)/2;break;case b.utils.stretching.EXACTFIT:c.width=n;c.height=h;var o=Math.round((n/2)*(1-1/d));var j=Math.round((h/2)*(1-1/f));e=true;c.top=c.left=0;break;default:break}if(e){b.utils.transform(q,d,f,o,j)}b.utils.css(q,c)};b.utils.stretching={NONE:"NONE",FILL:"FILL",UNIFORM:"UNIFORM",EXACTFIT:"EXACTFIT"};b.utils.deepReplaceKeyName=function(k,e,c){switch(b.utils.typeOf(k)){case"array":for(var g=0;g<k.length;g++){k[g]=b.utils.deepReplaceKeyName(k[g],e,c)}break;case"object":for(var f in k){var j,h;if(e instanceof Array&&c instanceof Array){if(e.length!=c.length){continue}else{j=e;h=c}}else{j=[e];h=[c]}var d=f;for(var g=0;g<j.length;g++){d=d.replace(new RegExp(e[g],"g"),c[g])}k[d]=b.utils.deepReplaceKeyName(k[f],e,c);if(f!=d){delete k[f]}}break}return k};b.utils.isInArray=function(e,d){if(!(e)||!(e instanceof Array)){return false}for(var c=0;c<e.length;c++){if(d===e[c]){return true}}return false};b.utils.exists=function(c){switch(typeof(c)){case"string":return(c.length>0);break;case"object":return(c!==null);case"undefined":return false}return true};b.utils.empty=function(c){if(typeof c.hasChildNodes=="function"){while(c.hasChildNodes()){c.removeChild(c.firstChild)}}};b.utils.parseDimension=function(c){if(typeof c=="string"){if(c===""){return 0}else{if(c.lastIndexOf("%")>-1){return c}else{return parseInt(c.replace("px",""),10)}}}return c};b.utils.getDimensions=function(c){if(c&&c.style){return{x:b.utils.parseDimension(c.style.left),y:b.utils.parseDimension(c.style.top),width:b.utils.parseDimension(c.style.width),height:b.utils.parseDimension(c.style.height)}}else{return{}}};b.utils.getElementWidth=function(c){if(!c){return null}else{if(c==document.body){return b.utils.parentNode(c).clientWidth}else{if(c.clientWidth>0){return c.clientWidth}else{if(c.style){return b.utils.parseDimension(c.style.width)}else{return null}}}}};b.utils.getElementHeight=function(c){if(!c){return null}else{if(c==document.body){return b.utils.parentNode(c).clientHeight}else{if(c.clientHeight>0){return c.clientHeight}else{if(c.style){return b.utils.parseDimension(c.style.height)}else{return null}}}}};b.utils.timeFormat=function(c){str="00:00";if(c>0){str=Math.floor(c/60)<10?"0"+Math.floor(c/60)+":":Math.floor(c/60)+":";str+=Math.floor(c%60)<10?"0"+Math.floor(c%60):Math.floor(c%60)}return str};b.utils.useNativeFullscreen=function(){return(navigator&&navigator.vendor&&navigator.vendor.indexOf("Apple")==0)};b.utils.parentNode=function(c){if(!c){return document.body}else{if(c.parentNode){return c.parentNode}else{if(c.parentElement){return c.parentElement}else{return c}}}};b.utils.getBoundingClientRect=function(c){if(typeof c.getBoundingClientRect=="function"){return c.getBoundingClientRect()}else{return{left:c.offsetLeft+document.body.scrollLeft,top:c.offsetTop+document.body.scrollTop,width:c.offsetWidth,height:c.offsetHeight}}};b.utils.translateEventResponse=function(e,c){var g=b.utils.extend({},c);if(e==b.api.events.JWPLAYER_FULLSCREEN&&!g.fullscreen){g.fullscreen=g.message=="true"?true:false;delete g.message}else{if(typeof g.data=="object"){g=b.utils.extend(g,g.data);delete g.data}else{if(typeof g.metadata=="object"){b.utils.deepReplaceKeyName(g.metadata,["__dot__","__spc__","__dsh__"],["."," ","-"])}}}var d=["position","duration","offset"];for(var f in d){if(g[d[f]]){g[d[f]]=Math.round(g[d[f]]*1000)/1000}}return g};b.utils.saveCookie=function(c,d){document.cookie="jwplayer."+c+"="+d+"; path=/"};b.utils.getCookies=function(){var f={};var e=document.cookie.split("; ");for(var d=0;d<e.length;d++){var c=e[d].split("=");if(c[0].indexOf("jwplayer.")==0){f[c[0].substring(9,c[0].length)]=c[1]}}return f};b.utils.readCookie=function(c){return b.utils.getCookies()[c]}})(jwplayer);(function(a){a.events=function(){};a.events.COMPLETE="COMPLETE";a.events.ERROR="ERROR"})(jwplayer);(function(jwplayer){jwplayer.events.eventdispatcher=function(debug){var _debug=debug;var _listeners;var _globallisteners;this.resetEventListeners=function(){_listeners={};_globallisteners=[]};this.resetEventListeners();this.addEventListener=function(type,listener,count){try{if(!jwplayer.utils.exists(_listeners[type])){_listeners[type]=[]}if(typeof(listener)=="string"){eval("listener = "+listener)}_listeners[type].push({listener:listener,count:count})}catch(err){jwplayer.utils.log("error",err)}return false};this.removeEventListener=function(type,listener){if(!_listeners[type]){return}try{for(var listenerIndex=0;listenerIndex<_listeners[type].length;listenerIndex++){if(_listeners[type][listenerIndex].listener.toString()==listener.toString()){_listeners[type].splice(listenerIndex,1);break}}}catch(err){jwplayer.utils.log("error",err)}return false};this.addGlobalListener=function(listener,count){try{if(typeof(listener)=="string"){eval("listener = "+listener)}_globallisteners.push({listener:listener,count:count})}catch(err){jwplayer.utils.log("error",err)}return false};this.removeGlobalListener=function(listener){if(!listener){return}try{for(var globalListenerIndex=0;globalListenerIndex<_globallisteners.length;globalListenerIndex++){if(_globallisteners[globalListenerIndex].listener.toString()==listener.toString()){_globallisteners.splice(globalListenerIndex,1);break}}}catch(err){jwplayer.utils.log("error",err)}return false};this.sendEvent=function(type,data){if(!jwplayer.utils.exists(data)){data={}}if(_debug){jwplayer.utils.log(type,data)}if(typeof _listeners[type]!="undefined"){for(var listenerIndex=0;listenerIndex<_listeners[type].length;listenerIndex++){try{_listeners[type][listenerIndex].listener(data)}catch(err){jwplayer.utils.log("There was an error while handling a listener: "+err.toString(),_listeners[type][listenerIndex].listener)}if(_listeners[type][listenerIndex]){if(_listeners[type][listenerIndex].count===1){delete _listeners[type][listenerIndex]}else{if(_listeners[type][listenerIndex].count>0){_listeners[type][listenerIndex].count=_listeners[type][listenerIndex].count-1}}}}}for(var globalListenerIndex=0;globalListenerIndex<_globallisteners.length;globalListenerIndex++){try{_globallisteners[globalListenerIndex].listener(data)}catch(err){jwplayer.utils.log("There was an error while handling a listener: "+err.toString(),_globallisteners[globalListenerIndex].listener)}if(_globallisteners[globalListenerIndex]){if(_globallisteners[globalListenerIndex].count===1){delete _globallisteners[globalListenerIndex]}else{if(_globallisteners[globalListenerIndex].count>0){_globallisteners[globalListenerIndex].count=_globallisteners[globalListenerIndex].count-1}}}}}}})(jwplayer);(function(a){var b={};a.utils.animations=function(){};a.utils.animations.transform=function(c,d){c.style.webkitTransform=d;c.style.MozTransform=d;c.style.OTransform=d;c.style.msTransform=d};a.utils.animations.transformOrigin=function(c,d){c.style.webkitTransformOrigin=d;c.style.MozTransformOrigin=d;c.style.OTransformOrigin=d;c.style.msTransformOrigin=d};a.utils.animations.rotate=function(c,d){a.utils.animations.transform(c,["rotate(",d,"deg)"].join(""))};a.utils.cancelAnimation=function(c){delete b[c.id]};a.utils.fadeTo=function(m,f,e,j,h,d){if(b[m.id]!=d&&a.utils.exists(d)){return}if(m.style.opacity==f){return}var c=new Date().getTime();if(d>c){setTimeout(function(){a.utils.fadeTo(m,f,e,j,0,d)},d-c)}if(m.style.display=="none"){m.style.display="block"}if(!a.utils.exists(j)){j=m.style.opacity===""?1:m.style.opacity}if(m.style.opacity==f&&m.style.opacity!==""&&a.utils.exists(d)){if(f===0){m.style.display="none"}return}if(!a.utils.exists(d)){d=c;b[m.id]=d}if(!a.utils.exists(h)){h=0}var k=(e>0)?((c-d)/(e*1000)):0;k=k>1?1:k;var l=f-j;var g=j+(k*l);if(g>1){g=1}else{if(g<0){g=0}}m.style.opacity=g;if(h>0){b[m.id]=d+h*1000;a.utils.fadeTo(m,f,e,j,0,b[m.id]);return}setTimeout(function(){a.utils.fadeTo(m,f,e,j,0,d)},10)}})(jwplayer);(function(a){a.utils.arrays=function(){};a.utils.arrays.indexOf=function(c,d){for(var b=0;b<c.length;b++){if(c[b]==d){return b}}return -1};a.utils.arrays.remove=function(c,d){var b=a.utils.arrays.indexOf(c,d);if(b>-1){c.splice(b,1)}}})(jwplayer);(function(a){a.utils.extensionmap={"3gp":{html5:"video/3gpp",flash:"video"},"3gpp":{html5:"video/3gpp"},"3g2":{html5:"video/3gpp2",flash:"video"},"3gpp2":{html5:"video/3gpp2"},flv:{flash:"video"},f4a:{html5:"audio/mp4"},f4b:{html5:"audio/mp4",flash:"video"},f4v:{html5:"video/mp4",flash:"video"},mov:{html5:"video/quicktime",flash:"video"},m4a:{html5:"audio/mp4",flash:"video"},m4b:{html5:"audio/mp4"},m4p:{html5:"audio/mp4"},m4v:{html5:"video/mp4",flash:"video"},mp4:{html5:"video/mp4",flash:"video"},rbs:{flash:"sound"},aac:{html5:"audio/aac",flash:"video"},mp3:{html5:"audio/mp3",flash:"sound"},ogg:{html5:"audio/ogg"},oga:{html5:"audio/ogg"},ogv:{html5:"video/ogg"},webm:{html5:"video/webm"},m3u8:{html5:"audio/x-mpegurl"},gif:{flash:"image"},jpeg:{flash:"image"},jpg:{flash:"image"},swf:{flash:"image"},png:{flash:"image"},wav:{html5:"audio/x-wav"}}})(jwplayer);(function(e){e.utils.mediaparser=function(){};var g={element:{width:"width",height:"height",id:"id","class":"className",name:"name"},media:{src:"file",preload:"preload",autoplay:"autostart",loop:"repeat",controls:"controls"},source:{src:"file",type:"type",media:"media","data-jw-width":"width","data-jw-bitrate":"bitrate"},video:{poster:"image"}};var f={};e.utils.mediaparser.parseMedia=function(j){return d(j)};function c(k,j){if(!e.utils.exists(j)){j=g[k]}else{e.utils.extend(j,g[k])}return j}function d(n,j){if(f[n.tagName.toLowerCase()]&&!e.utils.exists(j)){return f[n.tagName.toLowerCase()](n)}else{j=c("element",j);var o={};for(var k in j){if(k!="length"){var m=n.getAttribute(k);if(e.utils.exists(m)){o[j[k]]=m}}}var l=n.style["#background-color"];if(l&&!(l=="transparent"||l=="rgba(0, 0, 0, 0)")){o.screencolor=l}return o}}function h(n,k){k=c("media",k);var l=[];var j=e.utils.selectors("source",n);for(var m in j){if(!isNaN(m)){l.push(a(j[m]))}}var o=d(n,k);if(e.utils.exists(o.file)){l[0]={file:o.file}}o.levels=l;return o}function a(l,k){k=c("source",k);var j=d(l,k);j.width=j.width?j.width:0;j.bitrate=j.bitrate?j.bitrate:0;return j}function b(l,k){k=c("video",k);var j=h(l,k);return j}f.media=h;f.audio=h;f.source=a;f.video=b})(jwplayer);(function(a){a.utils.loaderstatus={NEW:"NEW",LOADING:"LOADING",ERROR:"ERROR",COMPLETE:"COMPLETE"};a.utils.scriptloader=function(c){var d=a.utils.loaderstatus.NEW;var b=new a.events.eventdispatcher();a.utils.extend(this,b);this.load=function(){if(d==a.utils.loaderstatus.NEW){d=a.utils.loaderstatus.LOADING;var e=document.createElement("script");e.onload=function(f){d=a.utils.loaderstatus.COMPLETE;b.sendEvent(a.events.COMPLETE)};e.onerror=function(f){d=a.utils.loaderstatus.ERROR;b.sendEvent(a.events.ERROR)};e.onreadystatechange=function(){if(e.readyState=="loaded"||e.readyState=="complete"){d=a.utils.loaderstatus.COMPLETE;b.sendEvent(a.events.COMPLETE)}};document.getElementsByTagName("head")[0].appendChild(e);e.src=c}};this.getStatus=function(){return d}}})(jwplayer);(function(a){a.utils.selectors=function(b,e){if(!a.utils.exists(e)){e=document}b=a.utils.strings.trim(b);var c=b.charAt(0);if(c=="#"){return e.getElementById(b.substr(1))}else{if(c=="."){if(e.getElementsByClassName){return e.getElementsByClassName(b.substr(1))}else{return a.utils.selectors.getElementsByTagAndClass("*",b.substr(1))}}else{if(b.indexOf(".")>0){var d=b.split(".");return a.utils.selectors.getElementsByTagAndClass(d[0],d[1])}else{return e.getElementsByTagName(b)}}}return null};a.utils.selectors.getElementsByTagAndClass=function(e,h,g){var j=[];if(!a.utils.exists(g)){g=document}var f=g.getElementsByTagName(e);for(var d=0;d<f.length;d++){if(a.utils.exists(f[d].className)){var c=f[d].className.split(" ");for(var b=0;b<c.length;b++){if(c[b]==h){j.push(f[d])}}}}return j}})(jwplayer);(function(a){a.utils.strings=function(){};a.utils.strings.trim=function(b){return b.replace(/^\s*/,"").replace(/\s*$/,"")};a.utils.strings.pad=function(c,d,b){if(!b){b="0"}while(c.length<d){c=b+c}return c};a.utils.strings.serialize=function(b){if(b==null){return null}else{if(b=="true"){return true}else{if(b=="false"){return false}else{if(isNaN(Number(b))||b.length>5||b.length==0){return b}else{return Number(b)}}}}};a.utils.strings.seconds=function(d){d=d.replace(",",".");var b=d.split(":");var c=0;if(d.substr(-1)=="s"){c=Number(d.substr(0,d.length-1))}else{if(d.substr(-1)=="m"){c=Number(d.substr(0,d.length-1))*60}else{if(d.substr(-1)=="h"){c=Number(d.substr(0,d.length-1))*3600}else{if(b.length>1){c=Number(b[b.length-1]);c+=Number(b[b.length-2])*60;if(b.length==3){c+=Number(b[b.length-3])*3600}}else{c=Number(d)}}}}return c};a.utils.strings.xmlAttribute=function(b,c){for(var d=0;d<b.attributes.length;d++){if(b.attributes[d].name&&b.attributes[d].name.toLowerCase()==c.toLowerCase()){return b.attributes[d].value.toString()}}return""};a.utils.strings.jsonToString=function(f){var h=h||{};if(h&&h.stringify){return h.stringify(f)}var c=typeof(f);if(c!="object"||f===null){if(c=="string"){f='"'+f.replace(/"/g,'\\"')+'"'}else{return String(f)}}else{var g=[],b=(f&&f.constructor==Array);for(var d in f){var e=f[d];switch(typeof(e)){case"string":e='"'+e.replace(/"/g,'\\"')+'"';break;case"object":if(a.utils.exists(e)){e=a.utils.strings.jsonToString(e)}break}if(b){if(typeof(e)!="function"){g.push(String(e))}}else{if(typeof(e)!="function"){g.push('"'+d+'":'+String(e))}}}if(b){return"["+String(g)+"]"}else{return"{"+String(g)+"}"}}}})(jwplayer);(function(c){var d=new RegExp(/^(#|0x)[0-9a-fA-F]{3,6}/);c.utils.typechecker=function(g,f){f=!c.utils.exists(f)?b(g):f;return e(g,f)};function b(f){var g=["true","false","t","f"];if(g.toString().indexOf(f.toLowerCase().replace(" ",""))>=0){return"boolean"}else{if(d.test(f)){return"color"}else{if(!isNaN(parseInt(f,10))&&parseInt(f,10).toString().length==f.length){return"integer"}else{if(!isNaN(parseFloat(f))&&parseFloat(f).toString().length==f.length){return"float"}}}}return"string"}function e(g,f){if(!c.utils.exists(f)){return g}switch(f){case"color":if(g.length>0){return a(g)}return null;case"integer":return parseInt(g,10);case"float":return parseFloat(g);case"boolean":if(g.toLowerCase()=="true"){return true}else{if(g=="1"){return true}}return false}return g}function a(f){switch(f.toLowerCase()){case"blue":return parseInt("0000FF",16);case"green":return parseInt("00FF00",16);case"red":return parseInt("FF0000",16);case"cyan":return parseInt("00FFFF",16);case"magenta":return parseInt("FF00FF",16);case"yellow":return parseInt("FFFF00",16);case"black":return parseInt("000000",16);case"white":return parseInt("FFFFFF",16);default:f=f.replace(/(#|0x)?([0-9A-F]{3,6})$/gi,"$2");if(f.length==3){f=f.charAt(0)+f.charAt(0)+f.charAt(1)+f.charAt(1)+f.charAt(2)+f.charAt(2)}return parseInt(f,16)}return parseInt("000000",16)}})(jwplayer);(function(a){a.utils.parsers=function(){};a.utils.parsers.localName=function(b){if(!b){return""}else{if(b.localName){return b.localName}else{if(b.baseName){return b.baseName}else{return""}}}};a.utils.parsers.textContent=function(b){if(!b){return""}else{if(b.textContent){return b.textContent}else{if(b.text){return b.text}else{return""}}}}})(jwplayer);(function(a){a.utils.parsers.jwparser=function(){};a.utils.parsers.jwparser.PREFIX="jwplayer";a.utils.parsers.jwparser.parseEntry=function(c,d){for(var b=0;b<c.childNodes.length;b++){if(c.childNodes[b].prefix==a.utils.parsers.jwparser.PREFIX){d[a.utils.parsers.localName(c.childNodes[b])]=a.utils.strings.serialize(a.utils.parsers.textContent(c.childNodes[b]));if(a.utils.parsers.localName(c.childNodes[b])=="file"&&d.levels){delete d.levels}}if(!d.file&&String(d.link).toLowerCase().indexOf("youtube")>-1){d.file=d.link}}return d};a.utils.parsers.jwparser.getProvider=function(c){if(c.type){return c.type}else{if(c.file.indexOf("youtube.com/w")>-1||c.file.indexOf("youtube.com/v")>-1||c.file.indexOf("youtu.be/")>-1){return"youtube"}else{if(c.streamer&&c.streamer.indexOf("rtmp")==0){return"rtmp"}else{if(c.streamer&&c.streamer.indexOf("http")==0){return"http"}else{var b=a.utils.strings.extension(c.file);if(extensions.hasOwnProperty(b)){return extensions[b]}}}}}return""}})(jwplayer);(function(a){a.utils.parsers.mediaparser=function(){};a.utils.parsers.mediaparser.PREFIX="media";a.utils.parsers.mediaparser.parseGroup=function(d,f){var e=false;for(var c=0;c<d.childNodes.length;c++){if(d.childNodes[c].prefix==a.utils.parsers.mediaparser.PREFIX){if(!a.utils.parsers.localName(d.childNodes[c])){continue}switch(a.utils.parsers.localName(d.childNodes[c]).toLowerCase()){case"content":if(!e){f.file=a.utils.strings.xmlAttribute(d.childNodes[c],"url")}if(a.utils.strings.xmlAttribute(d.childNodes[c],"duration")){f.duration=a.utils.strings.seconds(a.utils.strings.xmlAttribute(d.childNodes[c],"duration"))}if(a.utils.strings.xmlAttribute(d.childNodes[c],"start")){f.start=a.utils.strings.seconds(a.utils.strings.xmlAttribute(d.childNodes[c],"start"))}if(d.childNodes[c].childNodes&&d.childNodes[c].childNodes.length>0){f=a.utils.parsers.mediaparser.parseGroup(d.childNodes[c],f)}if(a.utils.strings.xmlAttribute(d.childNodes[c],"width")||a.utils.strings.xmlAttribute(d.childNodes[c],"bitrate")||a.utils.strings.xmlAttribute(d.childNodes[c],"url")){if(!f.levels){f.levels=[]}f.levels.push({width:a.utils.strings.xmlAttribute(d.childNodes[c],"width"),bitrate:a.utils.strings.xmlAttribute(d.childNodes[c],"bitrate"),file:a.utils.strings.xmlAttribute(d.childNodes[c],"url")})}break;case"title":f.title=a.utils.parsers.textContent(d.childNodes[c]);break;case"description":f.description=a.utils.parsers.textContent(d.childNodes[c]);break;case"keywords":f.tags=a.utils.parsers.textContent(d.childNodes[c]);break;case"thumbnail":f.image=a.utils.strings.xmlAttribute(d.childNodes[c],"url");break;case"credit":f.author=a.utils.parsers.textContent(d.childNodes[c]);break;case"player":var b=d.childNodes[c].url;if(b.indexOf("youtube.com")>=0||b.indexOf("youtu.be")>=0){e=true;f.file=a.utils.strings.xmlAttribute(d.childNodes[c],"url")}break;case"group":a.utils.parsers.mediaparser.parseGroup(d.childNodes[c],f);break}}}return f}})(jwplayer);(function(b){b.utils.parsers.rssparser=function(){};b.utils.parsers.rssparser.parse=function(f){var c=[];for(var e=0;e<f.childNodes.length;e++){if(b.utils.parsers.localName(f.childNodes[e]).toLowerCase()=="channel"){for(var d=0;d<f.childNodes[e].childNodes.length;d++){if(b.utils.parsers.localName(f.childNodes[e].childNodes[d]).toLowerCase()=="item"){c.push(a(f.childNodes[e].childNodes[d]))}}}}return c};function a(d){var e={};for(var c=0;c<d.childNodes.length;c++){if(!b.utils.parsers.localName(d.childNodes[c])){continue}switch(b.utils.parsers.localName(d.childNodes[c]).toLowerCase()){case"enclosure":e.file=b.utils.strings.xmlAttribute(d.childNodes[c],"url");break;case"title":e.title=b.utils.parsers.textContent(d.childNodes[c]);break;case"pubdate":e.date=b.utils.parsers.textContent(d.childNodes[c]);break;case"description":e.description=b.utils.parsers.textContent(d.childNodes[c]);break;case"link":e.link=b.utils.parsers.textContent(d.childNodes[c]);break;case"category":if(e.tags){e.tags+=b.utils.parsers.textContent(d.childNodes[c])}else{e.tags=b.utils.parsers.textContent(d.childNodes[c])}break}}e=b.utils.parsers.mediaparser.parseGroup(d,e);e=b.utils.parsers.jwparser.parseEntry(d,e);return new b.html5.playlistitem(e)}})(jwplayer);(function(a){var c={};var b={};a.plugins=function(){};a.plugins.loadPlugins=function(e,d){b[e]=new a.plugins.pluginloader(new a.plugins.model(c),d);return b[e]};a.plugins.registerPlugin=function(h,f,e){var d=a.utils.getPluginName(h);if(c[d]){c[d].registerPlugin(h,f,e)}else{a.utils.log("A plugin ("+h+") was registered with the player that was not loaded. Please check your configuration.");for(var g in b){b[g].pluginFailed()}}}})(jwplayer);(function(a){a.plugins.model=function(b){this.addPlugin=function(c){var d=a.utils.getPluginName(c);if(!b[d]){b[d]=new a.plugins.plugin(c)}return b[d]}}})(jwplayer);(function(a){a.plugins.pluginmodes={FLASH:"FLASH",JAVASCRIPT:"JAVASCRIPT",HYBRID:"HYBRID"};a.plugins.plugin=function(b){var d="http://lp.longtailvideo.com";var j=a.utils.loaderstatus.NEW;var k;var h;var l;var c=new a.events.eventdispatcher();a.utils.extend(this,c);function e(){switch(a.utils.getPluginPathType(b)){case a.utils.pluginPathType.ABSOLUTE:return b;case a.utils.pluginPathType.RELATIVE:return a.utils.getAbsolutePath(b,window.location.href);case a.utils.pluginPathType.CDN:var o=a.utils.getPluginName(b);var n=a.utils.getPluginVersion(b);var m=(window.location.href.indexOf("https://")==0)?d.replace("http://","https://secure"):d;return m+"/"+a.version.split(".")[0]+"/"+o+"/"+o+(n!==""?("-"+n):"")+".js"}}function g(m){l=setTimeout(function(){j=a.utils.loaderstatus.COMPLETE;c.sendEvent(a.events.COMPLETE)},1000)}function f(m){j=a.utils.loaderstatus.ERROR;c.sendEvent(a.events.ERROR)}this.load=function(){if(j==a.utils.loaderstatus.NEW){if(b.lastIndexOf(".swf")>0){k=b;j=a.utils.loaderstatus.COMPLETE;c.sendEvent(a.events.COMPLETE);return}j=a.utils.loaderstatus.LOADING;var m=new a.utils.scriptloader(e());m.addEventListener(a.events.COMPLETE,g);m.addEventListener(a.events.ERROR,f);m.load()}};this.registerPlugin=function(o,n,m){if(l){clearTimeout(l);l=undefined}if(n&&m){k=m;h=n}else{if(typeof n=="string"){k=n}else{if(typeof n=="function"){h=n}else{if(!n&&!m){k=o}}}}j=a.utils.loaderstatus.COMPLETE;c.sendEvent(a.events.COMPLETE)};this.getStatus=function(){return j};this.getPluginName=function(){return a.utils.getPluginName(b)};this.getFlashPath=function(){if(k){switch(a.utils.getPluginPathType(k)){case a.utils.pluginPathType.ABSOLUTE:return k;case a.utils.pluginPathType.RELATIVE:if(b.lastIndexOf(".swf")>0){return a.utils.getAbsolutePath(k,window.location.href)}return a.utils.getAbsolutePath(k,e());case a.utils.pluginPathType.CDN:if(k.indexOf("-")>-1){return k+"h"}return k+"-h"}}return null};this.getJS=function(){return h};this.getPluginmode=function(){if(typeof k!="undefined"&&typeof h!="undefined"){return a.plugins.pluginmodes.HYBRID}else{if(typeof k!="undefined"){return a.plugins.pluginmodes.FLASH}else{if(typeof h!="undefined"){return a.plugins.pluginmodes.JAVASCRIPT}}}};this.getNewInstance=function(n,m,o){return new h(n,m,o)};this.getURL=function(){return b}}})(jwplayer);(function(a){a.plugins.pluginloader=function(h,e){var g={};var k=a.utils.loaderstatus.NEW;var d=false;var b=false;var c=new a.events.eventdispatcher();a.utils.extend(this,c);function f(){if(!b){b=true;k=a.utils.loaderstatus.COMPLETE;c.sendEvent(a.events.COMPLETE)}}function j(){if(!b){var m=0;for(plugin in g){var l=g[plugin].getStatus();if(l==a.utils.loaderstatus.LOADING||l==a.utils.loaderstatus.NEW){m++}}if(m==0){f()}}}this.setupPlugins=function(n,l,s){var m={length:0,plugins:{}};var p={length:0,plugins:{}};for(var o in g){var q=g[o].getPluginName();if(g[o].getFlashPath()){m.plugins[g[o].getFlashPath()]=l.plugins[o];m.plugins[g[o].getFlashPath()].pluginmode=g[o].getPluginmode();m.length++}if(g[o].getJS()){var r=document.createElement("div");r.id=n.id+"_"+q;r.style.position="absolute";r.style.zIndex=p.length+10;p.plugins[q]=g[o].getNewInstance(n,l.plugins[o],r);p.length++;if(typeof p.plugins[q].resize!="undefined"){n.onReady(s(p.plugins[q],r,true));n.onResize(s(p.plugins[q],r))}}}n.plugins=p.plugins;return m};this.load=function(){k=a.utils.loaderstatus.LOADING;d=true;for(var l in e){if(a.utils.exists(l)){g[l]=h.addPlugin(l);g[l].addEventListener(a.events.COMPLETE,j);g[l].addEventListener(a.events.ERROR,j)}}for(l in g){g[l].load()}d=false;j()};this.pluginFailed=function(){f()};this.getStatus=function(){return k}}})(jwplayer);(function(b){var a=[];b.api=function(d){this.container=d;this.id=d.id;var m={};var t={};var p={};var c=[];var g=undefined;var k=false;var h=[];var r=undefined;var o=b.utils.getOuterHTML(d);var s={};var j={};this.getBuffer=function(){return this.callInternal("jwGetBuffer")};this.getContainer=function(){return this.container};function e(v,u){return function(A,w,x,y){if(v.renderingMode=="flash"||v.renderingMode=="html5"){var z;if(w){j[A]=w;z="jwplayer('"+v.id+"').callback('"+A+"')"}else{if(!w&&j[A]){delete j[A]}}g.jwDockSetButton(A,z,x,y)}return u}}this.getPlugin=function(u){var w=this;var v={};if(u=="dock"){return b.utils.extend(v,{setButton:e(w,v),show:function(){w.callInternal("jwDockShow");return v},hide:function(){w.callInternal("jwDockHide");return v},onShow:function(x){w.componentListener("dock",b.api.events.JWPLAYER_COMPONENT_SHOW,x);return v},onHide:function(x){w.componentListener("dock",b.api.events.JWPLAYER_COMPONENT_HIDE,x);return v}})}else{if(u=="controlbar"){return b.utils.extend(v,{show:function(){w.callInternal("jwControlbarShow");return v},hide:function(){w.callInternal("jwControlbarHide");return v},onShow:function(x){w.componentListener("controlbar",b.api.events.JWPLAYER_COMPONENT_SHOW,x);return v},onHide:function(x){w.componentListener("controlbar",b.api.events.JWPLAYER_COMPONENT_HIDE,x);return v}})}else{if(u=="display"){return b.utils.extend(v,{show:function(){w.callInternal("jwDisplayShow");return v},hide:function(){w.callInternal("jwDisplayHide");return v},onShow:function(x){w.componentListener("display",b.api.events.JWPLAYER_COMPONENT_SHOW,x);return v},onHide:function(x){w.componentListener("display",b.api.events.JWPLAYER_COMPONENT_HIDE,x);return v}})}else{return this.plugins[u]}}}};this.callback=function(u){if(j[u]){return j[u]()}};this.getDuration=function(){return this.callInternal("jwGetDuration")};this.getFullscreen=function(){return this.callInternal("jwGetFullscreen")};this.getHeight=function(){return this.callInternal("jwGetHeight")};this.getLockState=function(){return this.callInternal("jwGetLockState")};this.getMeta=function(){return this.getItemMeta()};this.getMute=function(){return this.callInternal("jwGetMute")};this.getPlaylist=function(){var v=this.callInternal("jwGetPlaylist");if(this.renderingMode=="flash"){b.utils.deepReplaceKeyName(v,["__dot__","__spc__","__dsh__"],["."," ","-"])}for(var u=0;u<v.length;u++){if(!b.utils.exists(v[u].index)){v[u].index=u}}return v};this.getPlaylistItem=function(u){if(!b.utils.exists(u)){u=this.getCurrentItem()}return this.getPlaylist()[u]};this.getPosition=function(){return this.callInternal("jwGetPosition")};this.getRenderingMode=function(){return this.renderingMode};this.getState=function(){return this.callInternal("jwGetState")};this.getVolume=function(){return this.callInternal("jwGetVolume")};this.getWidth=function(){return this.callInternal("jwGetWidth")};this.setFullscreen=function(u){if(!b.utils.exists(u)){this.callInternal("jwSetFullscreen",!this.callInternal("jwGetFullscreen"))}else{this.callInternal("jwSetFullscreen",u)}return this};this.setMute=function(u){if(!b.utils.exists(u)){this.callInternal("jwSetMute",!this.callInternal("jwGetMute"))}else{this.callInternal("jwSetMute",u)}return this};this.lock=function(){return this};this.unlock=function(){return this};this.load=function(u){this.callInternal("jwLoad",u);return this};this.playlistItem=function(u){this.callInternal("jwPlaylistItem",u);return this};this.playlistPrev=function(){this.callInternal("jwPlaylistPrev");return this};this.playlistNext=function(){this.callInternal("jwPlaylistNext");return this};this.resize=function(v,u){if(this.renderingMode=="html5"){g.jwResize(v,u)}else{this.container.width=v;this.container.height=u;var w=document.getElementById(this.id+"_wrapper");if(w){w.style.width=v+"px";w.style.height=u+"px"}}return this};this.play=function(u){if(typeof u=="undefined"){u=this.getState();if(u==b.api.events.state.PLAYING||u==b.api.events.state.BUFFERING){this.callInternal("jwPause")}else{this.callInternal("jwPlay")}}else{this.callInternal("jwPlay",u)}return this};this.pause=function(u){if(typeof u=="undefined"){u=this.getState();if(u==b.api.events.state.PLAYING||u==b.api.events.state.BUFFERING){this.callInternal("jwPause")}else{this.callInternal("jwPlay")}}else{this.callInternal("jwPause",u)}return this};this.stop=function(){this.callInternal("jwStop");return this};this.seek=function(u){this.callInternal("jwSeek",u);return this};this.setVolume=function(u){this.callInternal("jwSetVolume",u);return this};this.loadInstream=function(v,u){r=new b.api.instream(this,g,v,u);return r};this.onBufferChange=function(u){return this.eventListener(b.api.events.JWPLAYER_MEDIA_BUFFER,u)};this.onBufferFull=function(u){return this.eventListener(b.api.events.JWPLAYER_MEDIA_BUFFER_FULL,u)};this.onError=function(u){return this.eventListener(b.api.events.JWPLAYER_ERROR,u)};this.onFullscreen=function(u){return this.eventListener(b.api.events.JWPLAYER_FULLSCREEN,u)};this.onMeta=function(u){return this.eventListener(b.api.events.JWPLAYER_MEDIA_META,u)};this.onMute=function(u){return this.eventListener(b.api.events.JWPLAYER_MEDIA_MUTE,u)};this.onPlaylist=function(u){return this.eventListener(b.api.events.JWPLAYER_PLAYLIST_LOADED,u)};this.onPlaylistItem=function(u){return this.eventListener(b.api.events.JWPLAYER_PLAYLIST_ITEM,u)};this.onReady=function(u){return this.eventListener(b.api.events.API_READY,u)};this.onResize=function(u){return this.eventListener(b.api.events.JWPLAYER_RESIZE,u)};this.onComplete=function(u){return this.eventListener(b.api.events.JWPLAYER_MEDIA_COMPLETE,u)};this.onSeek=function(u){return this.eventListener(b.api.events.JWPLAYER_MEDIA_SEEK,u)};this.onTime=function(u){return this.eventListener(b.api.events.JWPLAYER_MEDIA_TIME,u)};this.onVolume=function(u){return this.eventListener(b.api.events.JWPLAYER_MEDIA_VOLUME,u)};this.onBeforePlay=function(u){return this.eventListener(b.api.events.JWPLAYER_MEDIA_BEFOREPLAY,u)};this.onBeforeComplete=function(u){return this.eventListener(b.api.events.JWPLAYER_MEDIA_BEFORECOMPLETE,u)};this.onBuffer=function(u){return this.stateListener(b.api.events.state.BUFFERING,u)};this.onPause=function(u){return this.stateListener(b.api.events.state.PAUSED,u)};this.onPlay=function(u){return this.stateListener(b.api.events.state.PLAYING,u)};this.onIdle=function(u){return this.stateListener(b.api.events.state.IDLE,u)};this.remove=function(){if(!k){throw"Cannot call remove() before player is ready";return}q(this)};function q(u){h=[];if(b.utils.getOuterHTML(u.container)!=o){b.api.destroyPlayer(u.id,o)}}this.setup=function(v){if(b.embed){var u=this.id;q(this);var w=b(u);w.config=v;return new b.embed(w)}return this};this.registerPlugin=function(w,v,u){b.plugins.registerPlugin(w,v,u)};this.setPlayer=function(u,v){g=u;this.renderingMode=v};this.stateListener=function(u,v){if(!t[u]){t[u]=[];this.eventListener(b.api.events.JWPLAYER_PLAYER_STATE,f(u))}t[u].push(v);return this};this.detachMedia=function(){if(this.renderingMode=="html5"){return this.callInternal("jwDetachMedia")}};this.attachMedia=function(){if(this.renderingMode=="html5"){return this.callInternal("jwAttachMedia")}};function f(u){return function(w){var v=w.newstate,y=w.oldstate;if(v==u){var x=t[v];if(x){for(var z=0;z<x.length;z++){if(typeof x[z]=="function"){x[z].call(this,{oldstate:y,newstate:v})}}}}}}this.componentListener=function(u,v,w){if(!p[u]){p[u]={}}if(!p[u][v]){p[u][v]=[];this.eventListener(v,l(u,v))}p[u][v].push(w);return this};function l(u,v){return function(x){if(u==x.component){var w=p[u][v];if(w){for(var y=0;y<w.length;y++){if(typeof w[y]=="function"){w[y].call(this,x)}}}}}}this.addInternalListener=function(u,v){try{u.jwAddEventListener(v,'function(dat) { jwplayer("'+this.id+'").dispatchEvent("'+v+'", dat); }')}catch(w){b.utils.log("Could not add internal listener")}};this.eventListener=function(u,v){if(!m[u]){m[u]=[];if(g&&k){this.addInternalListener(g,u)}}m[u].push(v);return this};this.dispatchEvent=function(w){if(m[w]){var v=_utils.translateEventResponse(w,arguments[1]);for(var u=0;u<m[w].length;u++){if(typeof m[w][u]=="function"){m[w][u].call(this,v)}}}};this.dispatchInstreamEvent=function(u){if(r){r.dispatchEvent(u,arguments)}};this.callInternal=function(){if(k){var w=arguments[0],u=[];for(var v=1;v<arguments.length;v++){u.push(arguments[v])}if(typeof g!="undefined"&&typeof g[w]=="function"){if(u.length==2){return(g[w])(u[0],u[1])}else{if(u.length==1){return(g[w])(u[0])}else{return(g[w])()}}}return null}else{h.push(arguments)}};this.playerReady=function(v){k=true;if(!g){this.setPlayer(document.getElementById(v.id))}this.container=document.getElementById(this.id);for(var u in m){this.addInternalListener(g,u)}this.eventListener(b.api.events.JWPLAYER_PLAYLIST_ITEM,function(w){s={}});this.eventListener(b.api.events.JWPLAYER_MEDIA_META,function(w){b.utils.extend(s,w.metadata)});this.dispatchEvent(b.api.events.API_READY);while(h.length>0){this.callInternal.apply(this,h.shift())}};this.getItemMeta=function(){return s};this.getCurrentItem=function(){return this.callInternal("jwGetPlaylistIndex")};function n(w,y,x){var u=[];if(!y){y=0}if(!x){x=w.length-1}for(var v=y;v<=x;v++){u.push(w[v])}return u}return this};b.api.selectPlayer=function(d){var c;if(!b.utils.exists(d)){d=0}if(d.nodeType){c=d}else{if(typeof d=="string"){c=document.getElementById(d)}}if(c){var e=b.api.playerById(c.id);if(e){return e}else{return b.api.addPlayer(new b.api(c))}}else{if(typeof d=="number"){return b.getPlayers()[d]}}return null};b.api.events={API_READY:"jwplayerAPIReady",JWPLAYER_READY:"jwplayerReady",JWPLAYER_FULLSCREEN:"jwplayerFullscreen",JWPLAYER_RESIZE:"jwplayerResize",JWPLAYER_ERROR:"jwplayerError",JWPLAYER_MEDIA_BEFOREPLAY:"jwplayerMediaBeforePlay",JWPLAYER_MEDIA_BEFORECOMPLETE:"jwplayerMediaBeforeComplete",JWPLAYER_COMPONENT_SHOW:"jwplayerComponentShow",JWPLAYER_COMPONENT_HIDE:"jwplayerComponentHide",JWPLAYER_MEDIA_BUFFER:"jwplayerMediaBuffer",JWPLAYER_MEDIA_BUFFER_FULL:"jwplayerMediaBufferFull",JWPLAYER_MEDIA_ERROR:"jwplayerMediaError",JWPLAYER_MEDIA_LOADED:"jwplayerMediaLoaded",JWPLAYER_MEDIA_COMPLETE:"jwplayerMediaComplete",JWPLAYER_MEDIA_SEEK:"jwplayerMediaSeek",JWPLAYER_MEDIA_TIME:"jwplayerMediaTime",JWPLAYER_MEDIA_VOLUME:"jwplayerMediaVolume",JWPLAYER_MEDIA_META:"jwplayerMediaMeta",JWPLAYER_MEDIA_MUTE:"jwplayerMediaMute",JWPLAYER_PLAYER_STATE:"jwplayerPlayerState",JWPLAYER_PLAYLIST_LOADED:"jwplayerPlaylistLoaded",JWPLAYER_PLAYLIST_ITEM:"jwplayerPlaylistItem",JWPLAYER_INSTREAM_CLICK:"jwplayerInstreamClicked",JWPLAYER_INSTREAM_DESTROYED:"jwplayerInstreamDestroyed"};b.api.events.state={BUFFERING:"BUFFERING",IDLE:"IDLE",PAUSED:"PAUSED",PLAYING:"PLAYING"};b.api.playerById=function(d){for(var c=0;c<a.length;c++){if(a[c].id==d){return a[c]}}return null};b.api.addPlayer=function(c){for(var d=0;d<a.length;d++){if(a[d]==c){return c}}a.push(c);return c};b.api.destroyPlayer=function(h,d){var g=-1;for(var l=0;l<a.length;l++){if(a[l].id==h){g=l;continue}}if(g>=0){try{a[g].callInternal("jwDestroy")}catch(k){}var c=document.getElementById(a[g].id);if(document.getElementById(a[g].id+"_wrapper")){c=document.getElementById(a[g].id+"_wrapper")}if(c){if(d){b.utils.setOuterHTML(c,d)}else{var j=document.createElement("div");var f=c.id;if(c.id.indexOf("_wrapper")==c.id.length-8){newID=c.id.substring(0,c.id.length-8)}j.setAttribute("id",f);c.parentNode.replaceChild(j,c)}}a.splice(g,1)}return null};b.getPlayers=function(){return a.slice(0)}})(jwplayer);var _userPlayerReady=(typeof playerReady=="function")?playerReady:undefined;playerReady=function(b){var a=jwplayer.api.playerById(b.id);if(a){a.playerReady(b)}else{jwplayer.api.selectPlayer(b.id).playerReady(b)}if(_userPlayerReady){_userPlayerReady.call(this,b)}};(function(a){a.api.instream=function(c,j,n,q){var h=c;var b=j;var g=n;var k=q;var e={};var p={};function f(){h.callInternal("jwLoadInstream",n,q)}function m(r,s){b.jwInstreamAddEventListener(s,'function(dat) { jwplayer("'+h.id+'").dispatchInstreamEvent("'+s+'", dat); }')}function d(r,s){if(!e[r]){e[r]=[];m(b,r)}e[r].push(s);return this}function o(r,s){if(!p[r]){p[r]=[];d(a.api.events.JWPLAYER_PLAYER_STATE,l(r))}p[r].push(s);return this}function l(r){return function(t){var s=t.newstate,v=t.oldstate;if(s==r){var u=p[s];if(u){for(var w=0;w<u.length;w++){if(typeof u[w]=="function"){u[w].call(this,{oldstate:v,newstate:s,type:t.type})}}}}}}this.dispatchEvent=function(u,t){if(e[u]){var s=_utils.translateEventResponse(u,t[1]);for(var r=0;r<e[u].length;r++){if(typeof e[u][r]=="function"){e[u][r].call(this,s)}}}};this.onError=function(r){return d(a.api.events.JWPLAYER_ERROR,r)};this.onFullscreen=function(r){return d(a.api.events.JWPLAYER_FULLSCREEN,r)};this.onMeta=function(r){return d(a.api.events.JWPLAYER_MEDIA_META,r)};this.onMute=function(r){return d(a.api.events.JWPLAYER_MEDIA_MUTE,r)};this.onComplete=function(r){return d(a.api.events.JWPLAYER_MEDIA_COMPLETE,r)};this.onSeek=function(r){return d(a.api.events.JWPLAYER_MEDIA_SEEK,r)};this.onTime=function(r){return d(a.api.events.JWPLAYER_MEDIA_TIME,r)};this.onVolume=function(r){return d(a.api.events.JWPLAYER_MEDIA_VOLUME,r)};this.onBuffer=function(r){return o(a.api.events.state.BUFFERING,r)};this.onPause=function(r){return o(a.api.events.state.PAUSED,r)};this.onPlay=function(r){return o(a.api.events.state.PLAYING,r)};this.onIdle=function(r){return o(a.api.events.state.IDLE,r)};this.onInstreamClick=function(r){return d(a.api.events.JWPLAYER_INSTREAM_CLICK,r)};this.onInstreamDestroyed=function(r){return d(a.api.events.JWPLAYER_INSTREAM_DESTROYED,r)};this.play=function(r){b.jwInstreamPlay(r)};this.pause=function(r){b.jwInstreamPause(r)};this.seek=function(r){b.jwInstreamSeek(r)};this.destroy=function(){b.jwInstreamDestroy()};this.getState=function(){return b.jwInstreamGetState()};this.getDuration=function(){return b.jwInstreamGetDuration()};this.getPosition=function(){return b.jwInstreamGetPosition()};f()}})(jwplayer);(function(a){var c=a.utils;a.embed=function(h){var k={width:400,height:300,components:{controlbar:{position:"over"}}};var g=c.mediaparser.parseMedia(h.container);var f=new a.embed.config(c.extend(k,g,h.config),this);var j=a.plugins.loadPlugins(h.id,f.plugins);function d(n,m){for(var l in m){if(typeof n[l]=="function"){(n[l]).call(n,m[l])}}}function e(){if(j.getStatus()==c.loaderstatus.COMPLETE){for(var n=0;n<f.modes.length;n++){if(f.modes[n].type&&a.embed[f.modes[n].type]){var p=f.modes[n].config;var t=f;if(p){t=c.extend(c.clone(f),p);var s=["file","levels","playlist"];for(var m=0;m<s.length;m++){var q=s[m];if(c.exists(p[q])){for(var l=0;l<s.length;l++){if(l!=m){var o=s[l];if(c.exists(t[o])&&!c.exists(p[o])){delete t[o]}}}}}}var r=new a.embed[f.modes[n].type](document.getElementById(h.id),f.modes[n],t,j,h);if(r.supportsConfig()){r.embed();d(h,f.events);return h}}}c.log("No suitable players found");new a.embed.logo(c.extend({hide:true},f.components.logo),"none",h.id)}}j.addEventListener(a.events.COMPLETE,e);j.addEventListener(a.events.ERROR,e);j.load();return h};function b(){if(!document.body){return setTimeout(b,15)}var d=c.selectors.getElementsByTagAndClass("video","jwplayer");for(var e=0;e<d.length;e++){var f=d[e];if(f.id==""){f.id="jwplayer_"+Math.round(Math.random()*100000)}a(f.id).setup({})}}b()})(jwplayer);(function(e){var k=e.utils;function h(m){var l=[{type:"flash",src:m?m:"/jwplayer/player.swf"},{type:"html5"},{type:"download"}];if(k.isAndroid()){l[0]=l.splice(1,1,l[0])[0]}return l}var a={players:"modes",autoplay:"autostart"};function b(o){var n=o.toLowerCase();var m=["left","right","top","bottom"];for(var l=0;l<m.length;l++){if(n==m[l]){return true}}return false}function c(m){var l=false;l=(m instanceof Array)||(typeof m=="object"&&!m.position&&!m.size);return l}function j(l){if(typeof l=="string"){if(parseInt(l).toString()==l||l.toLowerCase().indexOf("px")>-1){return parseInt(l)}}return l}var g=["playlist","dock","controlbar","logo","display"];function f(l){var o={};switch(k.typeOf(l.plugins)){case"object":for(var n in l.plugins){o[k.getPluginName(n)]=n}break;case"string":var p=l.plugins.split(",");for(var m=0;m<p.length;m++){o[k.getPluginName(p[m])]=p[m]}break}return o}function d(p,o,n,l){if(k.typeOf(p[o])!="object"){p[o]={}}var m=p[o][n];if(k.typeOf(m)!="object"){p[o][n]=m={}}if(l){if(o=="plugins"){var q=k.getPluginName(n);m[l]=p[q+"."+l];delete p[q+"."+l]}else{m[l]=p[n+"."+l];delete p[n+"."+l]}}}e.embed.deserialize=function(m){var n=f(m);for(var l in n){d(m,"plugins",n[l])}for(var q in m){if(q.indexOf(".")>-1){var p=q.split(".");var o=p[0];var q=p[1];if(k.isInArray(g,o)){d(m,"components",o,q)}else{if(n[o]){d(m,"plugins",n[o],q)}}}}return m};e.embed.config=function(l,v){var u=k.extend({},l);var s;if(c(u.playlist)){s=u.playlist;delete u.playlist}u=e.embed.deserialize(u);u.height=j(u.height);u.width=j(u.width);if(typeof u.plugins=="string"){var m=u.plugins.split(",");if(typeof u.plugins!="object"){u.plugins={}}for(var q=0;q<m.length;q++){var r=k.getPluginName(m[q]);if(typeof u[r]=="object"){u.plugins[m[q]]=u[r];delete u[r]}else{u.plugins[m[q]]={}}}}for(var t=0;t<g.length;t++){var p=g[t];if(k.exists(u[p])){if(typeof u[p]!="object"){if(!u.components[p]){u.components[p]={}}if(p=="logo"){u.components[p].file=u[p]}else{u.components[p].position=u[p]}delete u[p]}else{if(!u.components[p]){u.components[p]={}}k.extend(u.components[p],u[p]);delete u[p]}}if(typeof u[p+"size"]!="undefined"){if(!u.components[p]){u.components[p]={}}u.components[p].size=u[p+"size"];delete u[p+"size"]}}if(typeof u.icons!="undefined"){if(!u.components.display){u.components.display={}}u.components.display.icons=u.icons;delete u.icons}for(var o in a){if(u[o]){if(!u[a[o]]){u[a[o]]=u[o]}delete u[o]}}var n;if(u.flashplayer&&!u.modes){n=h(u.flashplayer);delete u.flashplayer}else{if(u.modes){if(typeof u.modes=="string"){n=h(u.modes)}else{if(u.modes instanceof Array){n=u.modes}else{if(typeof u.modes=="object"&&u.modes.type){n=[u.modes]}}}delete u.modes}else{n=h()}}u.modes=n;if(s){u.playlist=s}return u}})(jwplayer);(function(a){a.embed.download=function(c,g,b,d,f){this.embed=function(){var k=a.utils.extend({},b);var q={};var j=b.width?b.width:480;if(typeof j!="number"){j=parseInt(j,10)}var m=b.height?b.height:320;if(typeof m!="number"){m=parseInt(m,10)}var u,o,n;var s={};if(b.playlist&&b.playlist.length){s.file=b.playlist[0].file;o=b.playlist[0].image;s.levels=b.playlist[0].levels}else{s.file=b.file;o=b.image;s.levels=b.levels}if(s.file){u=s.file}else{if(s.levels&&s.levels.length){u=s.levels[0].file}}n=u?"pointer":"auto";var l={display:{style:{cursor:n,width:j,height:m,backgroundColor:"#000",position:"relative",textDecoration:"none",border:"none",display:"block"}},display_icon:{style:{cursor:n,position:"absolute",display:u?"block":"none",top:0,left:0,border:0,margin:0,padding:0,zIndex:3,width:50,height:50,backgroundImage:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALdJREFUeNrs18ENgjAYhmFouDOCcQJGcARHgE10BDcgTOIosAGwQOuPwaQeuFRi2p/3Sb6EC5L3QCxZBgAAAOCorLW1zMn65TrlkH4NcV7QNcUQt7Gn7KIhxA+qNIR81spOGkL8oFJDyLJRdosqKDDkK+iX5+d7huzwM40xptMQMkjIOeRGo+VkEVvIPfTGIpKASfYIfT9iCHkHrBEzf4gcUQ56aEzuGK/mw0rHpy4AAACAf3kJMACBxjAQNRckhwAAAABJRU5ErkJggg==)"}},display_iconBackground:{style:{cursor:n,position:"absolute",display:u?"block":"none",top:((m-50)/2),left:((j-50)/2),border:0,width:50,height:50,margin:0,padding:0,zIndex:2,backgroundImage:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEpJREFUeNrszwENADAIA7DhX8ENoBMZ5KR10EryckCJiIiIiIiIiIiIiIiIiIiIiIh8GmkRERERERERERERERERERERERGRHSPAAPlXH1phYpYaAAAAAElFTkSuQmCC)"}},display_image:{style:{width:j,height:m,display:o?"block":"none",position:"absolute",cursor:n,left:0,top:0,margin:0,padding:0,textDecoration:"none",zIndex:1,border:"none"}}};var h=function(v,x,y){var w=document.createElement(v);if(y){w.id=y}else{w.id=c.id+"_jwplayer_"+x}a.utils.css(w,l[x].style);return w};q.display=h("a","display",c.id);if(u){q.display.setAttribute("href",a.utils.getAbsolutePath(u))}q.display_image=h("img","display_image");q.display_image.setAttribute("alt","Click to download...");if(o){q.display_image.setAttribute("src",a.utils.getAbsolutePath(o))}if(true){q.display_icon=h("div","display_icon");q.display_iconBackground=h("div","display_iconBackground");q.display.appendChild(q.display_image);q.display_iconBackground.appendChild(q.display_icon);q.display.appendChild(q.display_iconBackground)}_css=a.utils.css;_hide=function(v){_css(v,{display:"none"})};function r(v){_imageWidth=q.display_image.naturalWidth;_imageHeight=q.display_image.naturalHeight;t()}function t(){a.utils.stretch(a.utils.stretching.UNIFORM,q.display_image,j,m,_imageWidth,_imageHeight)}q.display_image.onerror=function(v){_hide(q.display_image)};q.display_image.onload=r;c.parentNode.replaceChild(q.display,c);var p=(b.plugins&&b.plugins.logo)?b.plugins.logo:{};q.display.appendChild(new a.embed.logo(b.components.logo,"download",c.id));f.container=document.getElementById(f.id);f.setPlayer(q.display,"download")};this.supportsConfig=function(){if(b){var j=a.utils.getFirstPlaylistItemFromConfig(b);if(typeof j.file=="undefined"&&typeof j.levels=="undefined"){return true}else{if(j.file){return e(j.file,j.provider,j.playlistfile)}else{if(j.levels&&j.levels.length){for(var h=0;h<j.levels.length;h++){if(j.levels[h].file&&e(j.levels[h].file,j.provider,j.playlistfile)){return true}}}}}}else{return true}};function e(j,l,h){if(h){return false}var k=["image","sound","youtube","http"];if(l&&(k.toString().indexOf(l)>-1)){return true}if(!l||(l&&l=="video")){var m=a.utils.extension(j);if(m&&a.utils.extensionmap[m]){return true}}return false}}})(jwplayer);(function(a){a.embed.flash=function(f,g,l,e,j){function m(o,n,p){var q=document.createElement("param");q.setAttribute("name",n);q.setAttribute("value",p);o.appendChild(q)}function k(o,p,n){return function(q){if(n){document.getElementById(j.id+"_wrapper").appendChild(p)}var s=document.getElementById(j.id).getPluginConfig("display");o.resize(s.width,s.height);var r={left:s.x,top:s.y};a.utils.css(p,r)}}function d(p){if(!p){return{}}var r={};for(var o in p){var n=p[o];for(var q in n){r[o+"."+q]=n[q]}}return r}function h(q,p){if(q[p]){var s=q[p];for(var o in s){var n=s[o];if(typeof n=="string"){if(!q[o]){q[o]=n}}else{for(var r in n){if(!q[o+"."+r]){q[o+"."+r]=n[r]}}}}delete q[p]}}function b(q){if(!q){return{}}var t={},s=[];for(var n in q){var p=a.utils.getPluginName(n);var o=q[n];s.push(n);for(var r in o){t[p+"."+r]=o[r]}}t.plugins=s.join(",");return t}function c(p){var n=p.netstreambasepath?"":"netstreambasepath="+encodeURIComponent(window.location.href.split("#")[0])+"&";for(var o in p){if(typeof(p[o])=="object"){n+=o+"="+encodeURIComponent("[[JSON]]"+a.utils.strings.jsonToString(p[o]))+"&"}else{n+=o+"="+encodeURIComponent(p[o])+"&"}}return n.substring(0,n.length-1)}this.embed=function(){l.id=j.id;var A;var r=a.utils.extend({},l);var o=r.width;var y=r.height;if(f.id+"_wrapper"==f.parentNode.id){A=document.getElementById(f.id+"_wrapper")}else{A=document.createElement("div");A.id=f.id+"_wrapper";a.utils.wrap(f,A);a.utils.css(A,{position:"relative",width:o,height:y})}var p=e.setupPlugins(j,r,k);if(p.length>0){a.utils.extend(r,b(p.plugins))}else{delete r.plugins}var s=["height","width","modes","events"];for(var v=0;v<s.length;v++){delete r[s[v]]}var q="opaque";if(r.wmode){q=r.wmode}h(r,"components");h(r,"providers");if(typeof r["dock.position"]!="undefined"){if(r["dock.position"].toString().toLowerCase()=="false"){r.dock=r["dock.position"];delete r["dock.position"]}}var x=a.utils.getCookies();for(var n in x){if(typeof(r[n])=="undefined"){r[n]=x[n]}}var z="#000000";var u;if(a.utils.isIE()){var w='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" bgcolor="'+z+'" width="100%" height="100%" id="'+f.id+'" name="'+f.id+'" tabindex=0"">';w+='<param name="movie" value="'+g.src+'">';w+='<param name="allowfullscreen" value="true">';w+='<param name="allowscriptaccess" value="always">';w+='<param name="seamlesstabbing" value="true">';w+='<param name="wmode" value="'+q+'">';w+='<param name="flashvars" value="'+c(r)+'">';w+="</object>";a.utils.setOuterHTML(f,w);u=document.getElementById(f.id)}else{var t=document.createElement("object");t.setAttribute("type","application/x-shockwave-flash");t.setAttribute("data",g.src);t.setAttribute("width","100%");t.setAttribute("height","100%");t.setAttribute("bgcolor","#000000");t.setAttribute("id",f.id);t.setAttribute("name",f.id);t.setAttribute("tabindex",0);m(t,"allowfullscreen","true");m(t,"allowscriptaccess","always");m(t,"seamlesstabbing","true");m(t,"wmode",q);m(t,"flashvars",c(r));f.parentNode.replaceChild(t,f);u=t}j.container=u;j.setPlayer(u,"flash")};this.supportsConfig=function(){if(a.utils.hasFlash()){if(l){var o=a.utils.getFirstPlaylistItemFromConfig(l);if(typeof o.file=="undefined"&&typeof o.levels=="undefined"){return true}else{if(o.file){return flashCanPlay(o.file,o.provider)}else{if(o.levels&&o.levels.length){for(var n=0;n<o.levels.length;n++){if(o.levels[n].file&&flashCanPlay(o.levels[n].file,o.provider)){return true}}}}}}else{return true}}return false};flashCanPlay=function(n,p){var o=["video","http","sound","image"];if(p&&(o.toString().indexOf(p)<0)){return true}var q=a.utils.extension(n);if(!q){return true}if(a.utils.exists(a.utils.extensionmap[q])&&!a.utils.exists(a.utils.extensionmap[q].flash)){return false}return true}}})(jwplayer);(function(a){a.embed.html5=function(c,g,b,d,f){function e(j,k,h){return function(l){var m=document.getElementById(c.id+"_displayarea");if(h){m.appendChild(k)}j.resize(m.clientWidth,m.clientHeight);k.left=m.style.left;k.top=m.style.top}}this.embed=function(){if(a.html5){d.setupPlugins(f,b,e);c.innerHTML="";var j=a.utils.extend({screencolor:"0x000000"},b);var h=["plugins","modes","events"];for(var k=0;k<h.length;k++){delete j[h[k]]}if(j.levels&&!j.sources){j.sources=b.levels}if(j.skin&&j.skin.toLowerCase().indexOf(".zip")>0){j.skin=j.skin.replace(/\.zip/i,".xml")}var l=new (a.html5(c)).setup(j);f.container=document.getElementById(f.id);f.setPlayer(l,"html5")}else{return null}};this.supportsConfig=function(){if(!!a.vid.canPlayType){if(b){var j=a.utils.getFirstPlaylistItemFromConfig(b);if(typeof j.file=="undefined"&&typeof j.levels=="undefined"){return true}else{if(j.file){return html5CanPlay(a.vid,j.file,j.provider,j.playlistfile)}else{if(j.levels&&j.levels.length){for(var h=0;h<j.levels.length;h++){if(j.levels[h].file&&html5CanPlay(a.vid,j.levels[h].file,j.provider,j.playlistfile)){return true}}}}}}else{return true}}return false};html5CanPlay=function(k,j,l,h){if(h){return false}if(l&&l=="youtube"){return true}if(l&&l!="video"&&l!="http"&&l!="sound"){return false}if(navigator.userAgent.match(/BlackBerry/i)!==null){return false}var m=a.utils.extension(j);if(!a.utils.exists(m)||!a.utils.exists(a.utils.extensionmap[m])){return true}if(!a.utils.exists(a.utils.extensionmap[m].html5)){return false}if(a.utils.isLegacyAndroid()&&m.match(/m4v|mp4/)){return true}return browserCanPlay(k,a.utils.extensionmap[m].html5)};browserCanPlay=function(j,h){if(!h){return true}if(j.canPlayType(h)){return true}else{if(h=="audio/mp3"&&navigator.userAgent.match(/safari/i)){return j.canPlayType("audio/mpeg")}else{return false}}}}})(jwplayer);(function(a){a.embed.logo=function(m,l,d){var j={prefix:"http://l.longtailvideo.com/"+l+"/",file:"",link:"",linktarget:"_top",margin:8,out:0.5,over:1,timeout:5,hide:false,position:"bottom-left"};_css=a.utils.css;var b;var h;k();function k(){o();c();f()}function o(){if(j.prefix){var q=a.version.split(/\W/).splice(0,2).join("/");if(j.prefix.indexOf(q)<0){j.prefix+=q+"/"}}h=a.utils.extend({},j,m)}function p(){var s={border:"none",textDecoration:"none",position:"absolute",cursor:"pointer",zIndex:10};s.display=h.hide?"none":"block";var r=h.position.toLowerCase().split("-");for(var q in r){s[r[q]]=h.margin}return s}function c(){b=document.createElement("img");b.id=d+"_jwplayer_logo";b.style.display="none";b.onload=function(q){_css(b,p());e()};if(!h.file){return}if(h.file.indexOf("http://")===0){b.src=h.file}else{b.src=h.prefix+h.file}}if(!h.file){return}function f(){if(h.link){b.onmouseover=g;b.onmouseout=e;b.onclick=n}else{this.mouseEnabled=false}}function n(q){if(typeof q!="undefined"){q.preventDefault();q.stopPropagation()}if(h.link){window.open(h.link,h.linktarget)}return}function e(q){if(h.link){b.style.opacity=h.out}return}function g(q){if(h.hide){b.style.opacity=h.over}return}return b}})(jwplayer);(function(a){a.html5=function(b){var c=b;this.setup=function(d){a.utils.extend(this,new a.html5.api(c,d));return this};return this}})(jwplayer);(function(a){var d=a.utils;var b=d.css;var c=d.isIOS();a.html5.view=function(n,H,h){var m=n;var y=H;var j=h;var R;var g;var t;var o;var F;var P;var O;var E=false;var x=false;var A,N;var f,S,u;function L(){R=document.createElement("div");R.id=y.id;R.className=y.className;_videowrapper=document.createElement("div");_videowrapper.id=R.id+"_video_wrapper";y.id=R.id+"_video";b(R,{position:"relative",height:j.height,width:j.width,padding:0,backgroundColor:U(),zIndex:0});function U(){if(m.skin.getComponentSettings("display")&&m.skin.getComponentSettings("display").backgroundcolor){return m.skin.getComponentSettings("display").backgroundcolor}return parseInt("000000",16)}b(y,{width:"100%",height:"100%",top:0,left:0,zIndex:1,margin:"auto",display:"block"});b(_videowrapper,{overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0});d.wrap(y,R);d.wrap(y,_videowrapper);o=document.createElement("div");o.id=R.id+"_displayarea";R.appendChild(o);_instreamArea=document.createElement("div");_instreamArea.id=R.id+"_instreamarea";b(_instreamArea,{overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,zIndex:100,background:"000000",display:"none"});R.appendChild(_instreamArea)}function K(){for(var U=0;U<j.plugins.order.length;U++){var V=j.plugins.order[U];if(d.exists(j.plugins.object[V].getDisplayElement)){j.plugins.object[V].height=d.parseDimension(j.plugins.object[V].getDisplayElement().style.height);j.plugins.object[V].width=d.parseDimension(j.plugins.object[V].getDisplayElement().style.width);j.plugins.config[V].currentPosition=j.plugins.config[V].position}}v()}function s(U){x=j.fullscreen}function p(U){if(S){return}switch(U.newstate){case a.api.events.state.PLAYING:if(j.getMedia()&&j.getMedia().hasChrome()){o.style.display="none"}break;default:o.style.display="block";break}l()}function v(V){var X=j.getMedia()?j.getMedia().getDisplayElement():null;if(d.exists(X)){if(O!=X){if(O&&O.parentNode){O.parentNode.replaceChild(X,O)}O=X}for(var U=0;U<j.plugins.order.length;U++){var W=j.plugins.order[U];if(d.exists(j.plugins.object[W].getDisplayElement)){j.plugins.config[W].currentPosition=j.plugins.config[W].position}}}G(j.width,j.height)}this.setup=function(){if(j&&j.getMedia()){y=j.getMedia().getDisplayElement()}L();K();m.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE,p);m.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_LOADED,v);m.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_BEFOREPLAY,s);m.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_META,function(V){l()});var U;if(d.exists(window.onresize)){U=window.onresize}window.onresize=function(V){if(d.exists(U)){try{U(V)}catch(X){}}if(m.jwGetFullscreen()){if(!B()){var W=d.getBoundingClientRect(document.body);j.width=Math.abs(W.left)+Math.abs(W.right);j.height=window.innerHeight;G(j.width,j.height)}}else{G(j.width,j.height)}}};function M(U){switch(U.keyCode){case 27:if(m.jwGetFullscreen()){m.jwSetFullscreen(false)}break;case 32:if(m.jwGetState()!=a.api.events.state.IDLE&&m.jwGetState()!=a.api.events.state.PAUSED){m.jwPause()}else{m.jwPlay()}break}}function G(U,ad){if(R.style.display=="none"){return}var X=[].concat(j.plugins.order);X.reverse();F=X.length+2;if(x&&B()){try{if(j.fullscreen&&!j.getMedia().getDisplayElement().webkitDisplayingFullscreen){j.fullscreen=false}}catch(aa){}}if(!j.fullscreen){g=U;t=ad;if(typeof U=="string"&&U.indexOf("%")>0){g=d.getElementWidth(d.parentNode(R))*parseInt(U.replace("%"),"")/100}else{g=U}if(typeof ad=="string"&&ad.indexOf("%")>0){t=d.getElementHeight(d.parentNode(R))*parseInt(ad.replace("%"),"")/100}else{t=ad}var Y={top:0,bottom:0,left:0,right:0,width:g,height:t,position:"absolute"};b(o,Y);var ae={};var ab;try{ab=j.plugins.object.display.getDisplayElement()}catch(aa){}if(ab){ae.width=d.parseDimension(ab.style.width);ae.height=d.parseDimension(ab.style.height)}var ac=d.extend({},Y,ae,{zIndex:_instreamArea.style.zIndex,display:_instreamArea.style.display});b(_instreamArea,ac);b(R,{height:t,width:g});var Z=w(I,X);if(Z.length>0){F+=Z.length;var W=Z.indexOf("playlist"),V=Z.indexOf("controlbar");if(W>=0&&V>=0){Z[W]=Z.splice(V,1,Z[W])[0]}w(q,Z,true)}A=d.getElementWidth(o);N=d.getElementHeight(o)}else{if(!B()&&!c){w(e,X,true)}}l()}var r;function w(ab,X,Y){r=0;var Z=[];for(var W=0;W<X.length;W++){var aa=X[W];if(d.exists(j.plugins.object[aa].getDisplayElement)){if(j.plugins.config[aa].currentPosition!=a.html5.view.positions.NONE){var U=ab(aa,F--);if(!U){Z.push(aa)}else{var V=U.width;var ac=U.height;if(Y){delete U.width;delete U.height}b(j.plugins.object[aa].getDisplayElement(),U);j.plugins.object[aa].resize(V,ac)}}else{b(j.plugins.object[aa].getDisplayElement(),{display:"none"})}}}return Z}function I(V,W){if(d.exists(j.plugins.object[V].getDisplayElement)){if(j.plugins.config[V].position&&T(j.plugins.config[V].position)){if(!d.exists(j.plugins.object[V].getDisplayElement().parentNode)){R.appendChild(j.plugins.object[V].getDisplayElement())}var U=z(V);U.zIndex=W;return U}}return false}function q(U,V){if(!d.exists(j.plugins.object[U].getDisplayElement().parentNode)){o.appendChild(j.plugins.object[U].getDisplayElement())}return{position:"absolute",width:(d.getElementWidth(o)-d.parseDimension(o.style.right)),height:(d.getElementHeight(o)-d.parseDimension(o.style.bottom)),zIndex:V}}function e(U,V){return{position:"fixed",width:j.width,height:j.height,zIndex:V}}var l=this.resizeMedia=function(){o.style.position="absolute";var W=j.getMedia()?j.getMedia().getDisplayElement():u;if(!W){return}if(W&&W.tagName.toLowerCase()=="video"){if(!W.videoWidth||!W.videoHeight){W.style.width=o.style.width;W.style.height=o.style.height;return}W.style.position="absolute";d.fadeTo(W,1,0.25);if(W.parentNode){W.parentNode.style.left=o.style.left;W.parentNode.style.top=o.style.top}if(j.fullscreen&&m.jwGetStretching()==a.utils.stretching.EXACTFIT&&!d.isMobile()){var U=document.createElement("div");d.stretch(a.utils.stretching.UNIFORM,U,d.getElementWidth(o),d.getElementHeight(o),A,N);d.stretch(a.utils.stretching.EXACTFIT,W,d.parseDimension(U.style.width),d.parseDimension(U.style.height),W.videoWidth?W.videoWidth:400,W.videoHeight?W.videoHeight:300);b(W,{left:U.style.left,top:U.style.top})}else{if(!c){d.stretch(m.jwGetStretching(),W,d.getElementWidth(o),d.getElementHeight(o),W.videoWidth?W.videoWidth:400,W.videoHeight?W.videoHeight:300)}}}else{var V=j.plugins.object.display.getDisplayElement();if(V){j.getMedia().resize(d.parseDimension(V.style.width),d.parseDimension(V.style.height))}else{j.getMedia().resize(d.parseDimension(o.style.width),d.parseDimension(o.style.height))}}};var z=this.getComponentPosition=function(V){var W={position:"absolute",margin:0,padding:0,top:null};var U=j.plugins.config[V].currentPosition.toLowerCase();switch(U.toUpperCase()){case a.html5.view.positions.TOP:W.top=d.parseDimension(o.style.top);W.left=d.parseDimension(o.style.left);W.width=d.getElementWidth(o)-d.parseDimension(o.style.left)-d.parseDimension(o.style.right);W.height=j.plugins.object[V].height;o.style[U]=d.parseDimension(o.style[U])+j.plugins.object[V].height+"px";o.style.height=d.getElementHeight(o)-W.height+"px";break;case a.html5.view.positions.RIGHT:W.top=d.parseDimension(o.style.top);W.right=d.parseDimension(o.style.right);W.width=j.plugins.object[V].width;W.height=d.getElementHeight(o)-d.parseDimension(o.style.top)-d.parseDimension(o.style.bottom);o.style.width=d.getElementWidth(o)-W.width+"px";break;case a.html5.view.positions.BOTTOM:W.left=d.parseDimension(o.style.left);W.width=d.getElementWidth(o)-d.parseDimension(o.style.left)-d.parseDimension(o.style.right);W.height=j.plugins.object[V].height;W.bottom=d.parseDimension(o.style.bottom+r);r+=W.height;o.style.height=d.getElementHeight(o)-W.height+"px";break;case a.html5.view.positions.LEFT:W.top=d.parseDimension(o.style.top);W.left=d.parseDimension(o.style.left);W.width=j.plugins.object[V].width;W.height=d.getElementHeight(o)-d.parseDimension(o.style.top)-d.parseDimension(o.style.bottom);o.style[U]=d.parseDimension(o.style[U])+j.plugins.object[V].width+"px";o.style.width=d.getElementWidth(o)-W.width+"px";break;default:break}return W};this.resize=G;var J,k,Q;var C=this.fullscreen=function(W){if(c){return}var Y;try{Y=j.getMedia().getDisplayElement()}catch(X){}if(W){k=j.width;Q=j.height}var aa={position:"fixed",width:"100%",height:"100%",top:0,left:0,zIndex:2147483000},Z={position:"relative",height:k,width:Q,zIndex:0};if(B()&&Y&&Y.webkitSupportsFullscreen){if(W&&!Y.webkitDisplayingFullscreen){try{b(Y,aa);d.transform(Y);J=o.style.display;o.style.display="none";Y.webkitEnterFullscreen()}catch(V){}}else{if(!W){b(Y,Z);l();if(Y.webkitDisplayingFullscreen){try{Y.webkitExitFullscreen()}catch(V){}}o.style.display=J}}E=false}else{if(W){document.onkeydown=M;clearInterval(P);var U=d.getBoundingClientRect(document.body);j.width=Math.abs(U.left)+Math.abs(U.right);j.height=window.innerHeight;b(R,aa);aa.zIndex=1;if(j.getMedia()&&j.getMedia().getDisplayElement()){b(j.getMedia().getDisplayElement(),aa)}aa.zIndex=2;b(o,aa);E=true}else{document.onkeydown="";j.width=g;j.height=t;b(R,Z);E=false}G(j.width,j.height)}};function T(U){return([a.html5.view.positions.TOP,a.html5.view.positions.RIGHT,a.html5.view.positions.BOTTOM,a.html5.view.positions.LEFT].toString().indexOf(U.toUpperCase())>-1)}function B(){if(m.jwGetState()!=a.api.events.state.IDLE&&!E&&(j.getMedia()&&j.getMedia().getDisplayElement()&&j.getMedia().getDisplayElement().webkitSupportsFullscreen)&&d.useNativeFullscreen()){return true}return false}this.setupInstream=function(U,V){d.css(_instreamArea,{display:"block",position:"absolute"});o.style.display="none";_instreamArea.appendChild(U);u=V;S=true};var D=this.destroyInstream=function(){_instreamArea.style.display="none";_instreamArea.innerHTML="";o.style.display="block";u=null;S=false;G(j.width,j.height)}};a.html5.view.positions={TOP:"TOP",RIGHT:"RIGHT",BOTTOM:"BOTTOM",LEFT:"LEFT",OVER:"OVER",NONE:"NONE"}})(jwplayer);(function(a){var b={backgroundcolor:"",margin:10,font:"Arial,sans-serif",fontsize:10,fontcolor:parseInt("000000",16),fontstyle:"normal",fontweight:"bold",buttoncolor:parseInt("ffffff",16),position:a.html5.view.positions.BOTTOM,idlehide:false,hideplaylistcontrols:false,forcenextprev:false,layout:{left:{position:"left",elements:[{name:"play",type:"button"},{name:"divider",type:"divider"},{name:"prev",type:"button"},{name:"divider",type:"divider"},{name:"next",type:"button"},{name:"divider",type:"divider"},{name:"elapsed",type:"text"}]},center:{position:"center",elements:[{name:"time",type:"slider"}]},right:{position:"right",elements:[{name:"duration",type:"text"},{name:"blank",type:"button"},{name:"divider",type:"divider"},{name:"mute",type:"button"},{name:"volume",type:"slider"},{name:"divider",type:"divider"},{name:"fullscreen",type:"button"}]}}};_utils=a.utils;_css=_utils.css;_hide=function(c){_css(c,{display:"none"})};_show=function(c){_css(c,{display:"block"})};a.html5.controlbar=function(m,Y){window.controlbar=this;var l=m;var D=_utils.extend({},b,l.skin.getComponentSettings("controlbar"),Y);if(D.position==a.html5.view.positions.NONE||typeof a.html5.view.positions[D.position]=="undefined"){return}if(_utils.mapLength(l.skin.getComponentLayout("controlbar"))>0){D.layout=l.skin.getComponentLayout("controlbar")}var ag;var R;var af;var E;var w="none";var h;var k;var ah;var g;var f;var z;var S={};var q=false;var c={};var Q=-1;var ac;var j=false;var p;var d;var V=false;var G=false;var H;var aa=new a.html5.eventdispatcher();_utils.extend(this,aa);function K(){if(!ac){ac=l.skin.getSkinElement("controlbar","background");if(!ac){ac={width:0,height:0,src:null}}}return ac}function O(){af=0;E=0;R=0;if(!q){var ap={height:K().height,backgroundColor:D.backgroundcolor};ag=document.createElement("div");ag.id=l.id+"_jwplayer_controlbar";_css(ag,ap)}var ao=(l.skin.getSkinElement("controlbar","capLeft"));var an=(l.skin.getSkinElement("controlbar","capRight"));if(ao){y("capLeft","left",false,ag)}ad("background",ag,{position:"absolute",height:K().height,left:(ao?ao.width:0),zIndex:0},"img");if(K().src){S.background.src=K().src}ad("elements",ag,{position:"relative",height:K().height,zIndex:1});if(an){y("capRight","right",false,ag)}}this.getDisplayElement=function(){return ag};this.resize=function(ap,an){T();_utils.cancelAnimation(ag);f=ap;z=an;if(G!=l.jwGetFullscreen()){G=l.jwGetFullscreen();if(!G){Z()}d=undefined}var ao=x();J({id:l.id,duration:ah,position:k});v({id:l.id,bufferPercent:g});return ao};this.show=function(){if(j){j=false;_show(ag);W()}};this.hide=function(){if(!j){j=true;_hide(ag);ae()}};function r(){var ao=["timeSlider","volumeSlider","timeSliderRail","volumeSliderRail"];for(var ap in ao){var an=ao[ap];if(typeof S[an]!="undefined"){c[an]=_utils.getBoundingClientRect(S[an])}}}var e;function Z(an){if(j){return}clearTimeout(p);if(D.position==a.html5.view.positions.OVER||l.jwGetFullscreen()){switch(l.jwGetState()){case a.api.events.state.PAUSED:case a.api.events.state.IDLE:if(ag&&ag.style.opacity<1&&(!D.idlehide||_utils.exists(an))){e=false;setTimeout(function(){if(!e){X()}},100)}if(D.idlehide){p=setTimeout(function(){A()},2000)}break;default:e=true;if(an){X()}p=setTimeout(function(){A()},2000);break}}else{X()}}function A(){if(!j){ae();if(ag.style.opacity==1){_utils.cancelAnimation(ag);_utils.fadeTo(ag,0,0.1,1,0)}}}function X(){if(!j){W();if(ag.style.opacity==0){_utils.cancelAnimation(ag);_utils.fadeTo(ag,1,0.1,0,0)}}}function I(an){return function(){if(V&&d!=an){d=an;aa.sendEvent(an,{component:"controlbar",boundingRect:P()})}}}var W=I(a.api.events.JWPLAYER_COMPONENT_SHOW);var ae=I(a.api.events.JWPLAYER_COMPONENT_HIDE);function P(){if(D.position==a.html5.view.positions.OVER||l.jwGetFullscreen()){return _utils.getDimensions(ag)}else{return{x:0,y:0,width:0,height:0}}}function ad(ar,aq,ap,an){var ao;if(!q){if(!an){an="div"}ao=document.createElement(an);S[ar]=ao;ao.id=ag.id+"_"+ar;aq.appendChild(ao)}else{ao=document.getElementById(ag.id+"_"+ar)}if(_utils.exists(ap)){_css(ao,ap)}return ao}function N(){if(l.jwGetHeight()<=40){D.layout=_utils.clone(D.layout);for(var an=0;an<D.layout.left.elements.length;an++){if(D.layout.left.elements[an].name=="fullscreen"){D.layout.left.elements.splice(an,1)}}for(an=0;an<D.layout.right.elements.length;an++){if(D.layout.right.elements[an].name=="fullscreen"){D.layout.right.elements.splice(an,1)}}o()}am(D.layout.left);am(D.layout.center);am(D.layout.right)}function am(aq,an){var ar=aq.position=="right"?"right":"left";var ap=_utils.extend([],aq.elements);if(_utils.exists(an)){ap.reverse()}var aq=ad(aq.position+"Group",S.elements,{"float":"left",styleFloat:"left",cssFloat:"left",height:"100%"});for(var ao=0;ao<ap.length;ao++){C(ap[ao],ar,aq)}}function L(){return R++}function C(ar,au,aw){var aq,ao,ap,an,ax;if(!aw){aw=S.elements}if(ar.type=="divider"){y("divider"+L(),au,true,aw,undefined,ar.width,ar.element);return}switch(ar.name){case"play":y("playButton",au,false,aw);y("pauseButton",au,true,aw);U("playButton","jwPlay");U("pauseButton","jwPause");break;case"prev":y("prevButton",au,true,aw);U("prevButton","jwPlaylistPrev");break;case"stop":y("stopButton",au,true,aw);U("stopButton","jwStop");break;case"next":y("nextButton",au,true,aw);U("nextButton","jwPlaylistNext");break;case"elapsed":y("elapsedText",au,true,aw,null,null,l.skin.getSkinElement("controlbar","elapsedBackground"));break;case"time":ao=!_utils.exists(l.skin.getSkinElement("controlbar","timeSliderCapLeft"))?0:l.skin.getSkinElement("controlbar","timeSliderCapLeft").width;ap=!_utils.exists(l.skin.getSkinElement("controlbar","timeSliderCapRight"))?0:l.skin.getSkinElement("controlbar","timeSliderCapRight").width;aq=au=="left"?ao:ap;ax={height:K().height,position:"relative","float":"left",styleFloat:"left",cssFloat:"left"};var at=ad("timeSlider",aw,ax);y("timeSliderCapLeft",au,true,at,"relative");y("timeSliderRail",au,false,at,"relative");y("timeSliderBuffer",au,false,at,"absolute");y("timeSliderProgress",au,false,at,"absolute");y("timeSliderThumb",au,false,at,"absolute");y("timeSliderCapRight",au,true,at,"relative");ab("time");break;case"fullscreen":y("fullscreenButton",au,false,aw);y("normalscreenButton",au,true,aw);U("fullscreenButton","jwSetFullscreen",true);U("normalscreenButton","jwSetFullscreen",false);break;case"volume":ao=!_utils.exists(l.skin.getSkinElement("controlbar","volumeSliderCapLeft"))?0:l.skin.getSkinElement("controlbar","volumeSliderCapLeft").width;ap=!_utils.exists(l.skin.getSkinElement("controlbar","volumeSliderCapRight"))?0:l.skin.getSkinElement("controlbar","volumeSliderCapRight").width;aq=au=="left"?ao:ap;an=l.skin.getSkinElement("controlbar","volumeSliderRail").width+ao+ap;ax={height:K().height,position:"relative",width:an,"float":"left",styleFloat:"left",cssFloat:"left"};var av=ad("volumeSlider",aw,ax);y("volumeSliderCapLeft",au,false,av,"relative");y("volumeSliderRail",au,false,av,"relative");y("volumeSliderProgress",au,false,av,"absolute");y("volumeSliderThumb",au,false,av,"absolute");y("volumeSliderCapRight",au,false,av,"relative");ab("volume");break;case"mute":y("muteButton",au,false,aw);y("unmuteButton",au,true,aw);U("muteButton","jwSetMute",true);U("unmuteButton","jwSetMute",false);break;case"duration":y("durationText",au,true,aw,null,null,l.skin.getSkinElement("controlbar","durationBackground"));break}}function y(aq,au,ao,ax,ar,an,ap){if(_utils.exists(l.skin.getSkinElement("controlbar",aq))||aq.indexOf("Text")>0||aq.indexOf("divider")===0){var at={height:"100%",position:ar?ar:"relative",display:"block","float":"left",styleFloat:"left",cssFloat:"left"};if((aq.indexOf("next")===0||aq.indexOf("prev")===0)&&(l.jwGetPlaylist().length<2||D.hideplaylistcontrols.toString()=="true")){if(D.forcenextprev.toString()!="true"){ao=false;at.display="none"}}var ay;if(aq.indexOf("Text")>0){aq.innerhtml="00:00";at.font=D.fontsize+"px/"+(K().height+1)+"px "+D.font;at.color=D.fontcolor;at.textAlign="center";at.fontWeight=D.fontweight;at.fontStyle=D.fontstyle;at.cursor="default";if(ap){at.background="url("+ap.src+") no-repeat center";at.backgroundSize="100% "+K().height+"px"}at.padding="0 5px"}else{if(aq.indexOf("divider")===0){if(an){if(!isNaN(parseInt(an))){ay=parseInt(an)}}else{if(ap){var av=l.skin.getSkinElement("controlbar",ap);if(av){at.background="url("+av.src+") repeat-x center left";ay=av.width}}else{at.background="url("+l.skin.getSkinElement("controlbar","divider").src+") repeat-x center left";ay=l.skin.getSkinElement("controlbar","divider").width}}}else{at.background="url("+l.skin.getSkinElement("controlbar",aq).src+") repeat-x center left";ay=l.skin.getSkinElement("controlbar",aq).width}}if(au=="left"){if(ao){af+=ay}}else{if(au=="right"){if(ao){E+=ay}}}if(_utils.typeOf(ax)=="undefined"){ax=S.elements}at.width=ay;if(q){_css(S[aq],at)}else{var aw=ad(aq,ax,at);if(_utils.exists(l.skin.getSkinElement("controlbar",aq+"Over"))){aw.onmouseover=function(az){aw.style.backgroundImage=["url(",l.skin.getSkinElement("controlbar",aq+"Over").src,")"].join("")};aw.onmouseout=function(az){aw.style.backgroundImage=["url(",l.skin.getSkinElement("controlbar",aq).src,")"].join("")}}if(aq.indexOf("divider")==0){aw.setAttribute("class","divider")}aw.innerHTML="&nbsp;"}}}function F(){l.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED,B);l.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_ITEM,t);l.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_BUFFER,v);l.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE,s);l.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_TIME,J);l.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_MUTE,al);l.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_VOLUME,n);l.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_COMPLETE,M)}function B(){if(!D.hideplaylistcontrols){if(l.jwGetPlaylist().length>1||D.forcenextprev.toString()=="true"){_show(S.nextButton);_show(S.prevButton)}else{_hide(S.nextButton);_hide(S.prevButton)}x();ai()}}function t(an){ah=l.jwGetPlaylist()[an.index].duration;Q=-1;J({id:l.id,duration:ah,position:0});v({id:l.id,bufferProgress:0})}function ai(){J({id:l.id,duration:l.jwGetDuration(),position:0});v({id:l.id,bufferProgress:0});al({id:l.id,mute:l.jwGetMute()});s({id:l.id,newstate:a.api.events.state.IDLE});n({id:l.id,volume:l.jwGetVolume()})}function U(ap,aq,ao){if(q){return}if(_utils.exists(l.skin.getSkinElement("controlbar",ap))){var an=S[ap];if(_utils.exists(an)){_css(an,{cursor:"pointer"});if(aq=="fullscreen"){an.onmouseup=function(ar){ar.stopPropagation();l.jwSetFullscreen(!l.jwGetFullscreen())}}else{an.onmouseup=function(ar){ar.stopPropagation();if(_utils.exists(ao)){l[aq](ao)}else{l[aq]()}}}}}}function ab(an){if(q){return}var ao=S[an+"Slider"];_css(S.elements,{cursor:"pointer"});_css(ao,{cursor:"pointer"});ao.onmousedown=function(ap){w=an};ao.onmouseup=function(ap){ap.stopPropagation();ak(ap.pageX)};ao.onmousemove=function(ap){if(w=="time"){h=true;var aq=ap.pageX-c[an+"Slider"].left-window.pageXOffset;_css(S[w+"SliderThumb"],{left:aq})}}}function ak(ao){h=false;var an;if(w=="time"){an=ao-c.timeSliderRail.left+window.pageXOffset;var aq=an/c.timeSliderRail.width*ah;if(aq<0){aq=0}else{if(aq>ah){aq=ah-3}}if(l.jwGetState()==a.api.events.state.PAUSED||l.jwGetState()==a.api.events.state.IDLE){l.jwPlay()}l.jwSeek(aq)}else{if(w=="volume"){an=ao-c.volumeSliderRail.left-window.pageXOffset;var ap=Math.round(an/c.volumeSliderRail.width*100);if(ap<10){ap=0}else{if(ap>100){ap=100}}if(l.jwGetMute()){l.jwSetMute(false)}l.jwSetVolume(ap)}}w="none"}function v(ao){if(_utils.exists(ao.bufferPercent)){g=ao.bufferPercent}if(c.timeSliderRail){var aq=l.skin.getSkinElement("controlbar","timeSliderCapLeft");var ap=c.timeSliderRail.width;var an=isNaN(Math.round(ap*g/100))?0:Math.round(ap*g/100);_css(S.timeSliderBuffer,{width:an,left:aq?aq.width:0})}}function al(an){if(an.mute){_hide(S.muteButton);_show(S.unmuteButton);_hide(S.volumeSliderProgress)}else{_show(S.muteButton);_hide(S.unmuteButton);_show(S.volumeSliderProgress)}}function s(an){if(an.newstate==a.api.events.state.BUFFERING||an.newstate==a.api.events.state.PLAYING){_show(S.pauseButton);_hide(S.playButton)}else{_hide(S.pauseButton);_show(S.playButton)}Z();if(an.newstate==a.api.events.state.IDLE){_hide(S.timeSliderBuffer);_hide(S.timeSliderProgress);_hide(S.timeSliderThumb);J({id:l.id,duration:l.jwGetDuration(),position:0})}else{_show(S.timeSliderBuffer);if(an.newstate!=a.api.events.state.BUFFERING){_show(S.timeSliderProgress);_show(S.timeSliderThumb)}}}function M(an){v({bufferPercent:0});J(_utils.extend(an,{position:0,duration:ah}))}function J(at){if(_utils.exists(at.position)){k=at.position}var ao=false;if(_utils.exists(at.duration)&&at.duration!=ah){ah=at.duration;ao=true}var aq=(k===ah===0)?0:k/ah;var av=c.timeSliderRail;if(av){var ap=isNaN(Math.round(av.width*aq))?0:Math.round(av.width*aq);var au=l.skin.getSkinElement("controlbar","timeSliderCapLeft");var ar=ap+(au?au.width:0);if(S.timeSliderProgress){_css(S.timeSliderProgress,{width:ap,left:au?au.width:0});if(!h){if(S.timeSliderThumb){S.timeSliderThumb.style.left=ar+"px"}}}}if(S.durationText){S.durationText.innerHTML=_utils.timeFormat(ah)}if(S.elapsedText){var an=_utils.timeFormat(k);S.elapsedText.innerHTML=an;if(Q!=an.length){ao=true;Q=an.length}}if(ao){x()}}function o(){var an=S.elements.childNodes;var at,aq;for(var ap=0;ap<an.length;ap++){var ar=an[ap].childNodes;for(var ao in ar){if(isNaN(parseInt(ao,10))){continue}if(ar[ao].id.indexOf(ag.id+"_divider")===0&&aq&&aq.id.indexOf(ag.id+"_divider")===0&&ar[ao].style.backgroundImage==aq.style.backgroundImage){ar[ao].style.display="none"}else{if(ar[ao].id.indexOf(ag.id+"_divider")===0&&at&&at.style.display!="none"){ar[ao].style.display="block"}}if(ar[ao].style.display!="none"){aq=ar[ao]}at=ar[ao]}}}function aj(){if(l.jwGetFullscreen()){_show(S.normalscreenButton);_hide(S.fullscreenButton)}else{_hide(S.normalscreenButton);_show(S.fullscreenButton)}if(l.jwGetState()==a.api.events.state.BUFFERING||l.jwGetState()==a.api.events.state.PLAYING){_show(S.pauseButton);_hide(S.playButton)}else{_hide(S.pauseButton);_show(S.playButton)}if(l.jwGetMute()==true){_hide(S.muteButton);_show(S.unmuteButton);_hide(S.volumeSliderProgress)}else{_show(S.muteButton);_hide(S.unmuteButton);_show(S.volumeSliderProgress)}}function x(){o();aj();var ap={width:f};var ax={"float":"left",styleFloat:"left",cssFloat:"left"};if(D.position==a.html5.view.positions.OVER||l.jwGetFullscreen()){ap.left=D.margin;ap.width-=2*D.margin;ap.top=z-K().height-D.margin;ap.height=K().height}var ar=l.skin.getSkinElement("controlbar","capLeft");var av=l.skin.getSkinElement("controlbar","capRight");ax.width=ap.width-(ar?ar.width:0)-(av?av.width:0);var aq=_utils.getBoundingClientRect(S.leftGroup).width;var au=_utils.getBoundingClientRect(S.rightGroup).width;var at=ax.width-aq-au-1;var ao=at;var an=l.skin.getSkinElement("controlbar","timeSliderCapLeft");var aw=l.skin.getSkinElement("controlbar","timeSliderCapRight");if(_utils.exists(an)){ao-=an.width}if(_utils.exists(aw)){ao-=aw.width}S.timeSlider.style.width=at+"px";S.timeSliderRail.style.width=ao+"px";_css(ag,ap);_css(S.elements,ax);_css(S.background,ax);r();return ap}function n(at){if(_utils.exists(S.volumeSliderRail)){var ap=isNaN(at.volume/100)?1:at.volume/100;var aq=_utils.parseDimension(S.volumeSliderRail.style.width);var an=isNaN(Math.round(aq*ap))?0:Math.round(aq*ap);var au=_utils.parseDimension(S.volumeSliderRail.style.right);var ao=(!_utils.exists(l.skin.getSkinElement("controlbar","volumeSliderCapLeft")))?0:l.skin.getSkinElement("controlbar","volumeSliderCapLeft").width;_css(S.volumeSliderProgress,{width:an,left:ao});if(S.volumeSliderThumb){var ar=(an-Math.round(_utils.parseDimension(S.volumeSliderThumb.style.width)/2));ar=Math.min(Math.max(ar,0),aq-_utils.parseDimension(S.volumeSliderThumb.style.width));_css(S.volumeSliderThumb,{left:ar})}if(_utils.exists(S.volumeSliderCapLeft)){_css(S.volumeSliderCapLeft,{left:0})}}}function T(){try{var ao=(l.id.indexOf("_instream")>0?l.id.replace("_instream",""):l.id);H=document.getElementById(ao);H.addEventListener("mousemove",Z)}catch(an){_utils.log("Could not add mouse listeners to controlbar: "+an)}}function u(){O();N();r();q=true;F();D.idlehide=(D.idlehide.toString().toLowerCase()=="true");if(D.position==a.html5.view.positions.OVER&&D.idlehide){ag.style.opacity=0;V=true}else{ag.style.opacity=1;setTimeout((function(){V=true;W()}),1)}T();ai()}u();return this}})(jwplayer);(function(b){var a=["width","height","state","playlist","item","position","buffer","duration","volume","mute","fullscreen"];var c=b.utils;b.html5.controller=function(o,K,f,h){var n=o,m=f,j=h,y=K,M=true,G=-1,A=false,d=false,P,C=[],q=false;var D=(c.exists(m.config.debug)&&(m.config.debug.toString().toLowerCase()=="console")),N=new b.html5.eventdispatcher(y.id,D);c.extend(this,N);function L(T){if(q){N.sendEvent(T.type,T)}else{C.push(T)}}function s(T){if(!q){q=true;N.sendEvent(b.api.events.JWPLAYER_READY,T);if(b.utils.exists(window.playerReady)){playerReady(T)}if(b.utils.exists(window[f.config.playerReady])){window[f.config.playerReady](T)}while(C.length>0){var V=C.shift();N.sendEvent(V.type,V)}if(f.config.autostart&&!b.utils.isIOS()){O()}while(x.length>0){var U=x.shift();B(U.method,U.arguments)}}}m.addGlobalListener(L);m.addEventListener(b.api.events.JWPLAYER_MEDIA_BUFFER_FULL,function(){m.getMedia().play()});m.addEventListener(b.api.events.JWPLAYER_MEDIA_TIME,function(T){if(T.position>=m.playlist[m.item].start&&G>=0){m.playlist[m.item].start=G;G=-1}});m.addEventListener(b.api.events.JWPLAYER_MEDIA_COMPLETE,function(T){setTimeout(E,25)});m.addEventListener(b.api.events.JWPLAYER_PLAYLIST_LOADED,O);m.addEventListener(b.api.events.JWPLAYER_FULLSCREEN,p);function F(){try{P=F;if(!A){A=true;N.sendEvent(b.api.events.JWPLAYER_MEDIA_BEFOREPLAY);A=false;if(d){d=false;P=null;return}}v(m.item);if(m.playlist[m.item].levels[0].file.length>0){if(M||m.state==b.api.events.state.IDLE){m.getMedia().load(m.playlist[m.item]);M=false}else{if(m.state==b.api.events.state.PAUSED){m.getMedia().play()}}}return true}catch(T){N.sendEvent(b.api.events.JWPLAYER_ERROR,T);P=null}return false}function e(){try{if(m.playlist[m.item].levels[0].file.length>0){switch(m.state){case b.api.events.state.PLAYING:case b.api.events.state.BUFFERING:if(m.getMedia()){m.getMedia().pause()}break;default:if(A){d=true}}}return true}catch(T){N.sendEvent(b.api.events.JWPLAYER_ERROR,T)}return false}function z(T){try{if(m.playlist[m.item].levels[0].file.length>0){if(typeof T!="number"){T=parseFloat(T)}switch(m.state){case b.api.events.state.IDLE:if(G<0){G=m.playlist[m.item].start;m.playlist[m.item].start=T}if(!A){F()}break;case b.api.events.state.PLAYING:case b.api.events.state.PAUSED:case b.api.events.state.BUFFERING:m.seek(T);break}}return true}catch(U){N.sendEvent(b.api.events.JWPLAYER_ERROR,U)}return false}function w(T){P=null;if(!c.exists(T)){T=true}try{if((m.state!=b.api.events.state.IDLE||T)&&m.getMedia()){m.getMedia().stop(T)}if(A){d=true}return true}catch(U){N.sendEvent(b.api.events.JWPLAYER_ERROR,U)}return false}function k(){try{if(m.playlist[m.item].levels[0].file.length>0){if(m.config.shuffle){v(S())}else{if(m.item+1==m.playlist.length){v(0)}else{v(m.item+1)}}}if(m.state!=b.api.events.state.IDLE){var U=m.state;m.state=b.api.events.state.IDLE;N.sendEvent(b.api.events.JWPLAYER_PLAYER_STATE,{oldstate:U,newstate:b.api.events.state.IDLE})}F();return true}catch(T){N.sendEvent(b.api.events.JWPLAYER_ERROR,T)}return false}function I(){try{if(m.playlist[m.item].levels[0].file.length>0){if(m.config.shuffle){v(S())}else{if(m.item===0){v(m.playlist.length-1)}else{v(m.item-1)}}}if(m.state!=b.api.events.state.IDLE){var U=m.state;m.state=b.api.events.state.IDLE;N.sendEvent(b.api.events.JWPLAYER_PLAYER_STATE,{oldstate:U,newstate:b.api.events.state.IDLE})}F();return true}catch(T){N.sendEvent(b.api.events.JWPLAYER_ERROR,T)}return false}function S(){var T=null;if(m.playlist.length>1){while(!c.exists(T)){T=Math.floor(Math.random()*m.playlist.length);if(T==m.item){T=null}}}else{T=0}return T}function H(U){if(!m.playlist||!m.playlist[U]){return false}try{if(m.playlist[U].levels[0].file.length>0){var V=m.state;if(V!==b.api.events.state.IDLE){if(m.playlist[m.item]&&m.playlist[m.item].provider==m.playlist[U].provider){w(false)}else{w()}}v(U);F()}return true}catch(T){N.sendEvent(b.api.events.JWPLAYER_ERROR,T)}return false}function v(T){if(!m.playlist[T]){return}m.setActiveMediaProvider(m.playlist[T]);if(m.item!=T){m.item=T;M=true;N.sendEvent(b.api.events.JWPLAYER_PLAYLIST_ITEM,{index:T})}}function g(U){try{v(m.item);var V=m.getMedia();switch(typeof(U)){case"number":V.volume(U);break;case"string":V.volume(parseInt(U,10));break}m.setVolume(U);return true}catch(T){N.sendEvent(b.api.events.JWPLAYER_ERROR,T)}return false}function r(U){try{v(m.item);var V=m.getMedia();if(typeof U=="undefined"){V.mute(!m.mute);m.setMute(!m.mute)}else{if(U.toString().toLowerCase()=="true"){V.mute(true);m.setMute(true)}else{V.mute(false);m.setMute(false)}}return true}catch(T){N.sendEvent(b.api.events.JWPLAYER_ERROR,T)}return false}function J(U,T){try{m.width=U;m.height=T;j.resize(U,T);N.sendEvent(b.api.events.JWPLAYER_RESIZE,{width:m.width,height:m.height});return true}catch(V){N.sendEvent(b.api.events.JWPLAYER_ERROR,V)}return false}function u(U,V){try{if(typeof U=="undefined"){U=!m.fullscreen}if(typeof V=="undefined"){V=true}if(U!=m.fullscreen){m.fullscreen=(U.toString().toLowerCase()=="true");j.fullscreen(m.fullscreen);if(V){N.sendEvent(b.api.events.JWPLAYER_FULLSCREEN,{fullscreen:m.fullscreen})}N.sendEvent(b.api.events.JWPLAYER_RESIZE,{width:m.width,height:m.height})}return true}catch(T){N.sendEvent(b.api.events.JWPLAYER_ERROR,T)}return false}function R(T){try{w();if(A){d=false}m.loadPlaylist(T);if(m.playlist[m.item].provider){v(m.item);if(m.config.autostart.toString().toLowerCase()=="true"&&!c.isIOS()&&!A){F()}return true}else{return false}}catch(U){N.sendEvent(b.api.events.JWPLAYER_ERROR,U)}return false}function O(T){if(!c.isIOS()){v(m.item);if(m.config.autostart.toString().toLowerCase()=="true"&&!c.isIOS()){F()}}}function p(T){u(T.fullscreen,false)}function t(){try{return m.getMedia().detachMedia()}catch(T){return null}}function l(){try{var T=m.getMedia().attachMedia();if(typeof P=="function"){P()}}catch(U){return null}}b.html5.controller.repeatoptions={LIST:"LIST",ALWAYS:"ALWAYS",SINGLE:"SINGLE",NONE:"NONE"};function E(){if(m.state!=b.api.events.state.IDLE){return}P=E;switch(m.config.repeat.toUpperCase()){case b.html5.controller.repeatoptions.SINGLE:F();break;case b.html5.controller.repeatoptions.ALWAYS:if(m.item==m.playlist.length-1&&!m.config.shuffle){H(0)}else{k()}break;case b.html5.controller.repeatoptions.LIST:if(m.item==m.playlist.length-1&&!m.config.shuffle){w();v(0)}else{k()}break;default:w();break}}var x=[];function Q(T){return function(){if(q){B(T,arguments)}else{x.push({method:T,arguments:arguments})}}}function B(V,U){var T=[];for(i=0;i<U.length;i++){T.push(U[i])}V.apply(this,T)}this.play=Q(F);this.pause=Q(e);this.seek=Q(z);this.stop=Q(w);this.next=Q(k);this.prev=Q(I);this.item=Q(H);this.setVolume=Q(g);this.setMute=Q(r);this.resize=Q(J);this.setFullscreen=Q(u);this.load=Q(R);this.playerReady=s;this.detachMedia=t;this.attachMedia=l;this.beforePlay=function(){return A};this.destroy=function(){if(m.getMedia()){m.getMedia().destroy()}}}})(jwplayer);(function(a){a.html5.defaultSkin=function(){this.text='<?xml version="1.0" ?><skin author="LongTail Video" name="Five" version="1.1"><components><component name="controlbar"><settings><setting name="margin" value="20"/><setting name="fontsize" value="11"/><setting name="fontcolor" value="0x000000"/></settings><layout><group position="left"><button name="play"/><divider name="divider"/><button name="prev"/><divider name="divider"/><button name="next"/><divider name="divider"/><text name="elapsed"/></group><group position="center"><slider name="time"/></group><group position="right"><text name="duration"/><divider name="divider"/><button name="blank"/><divider name="divider"/><button name="mute"/><slider name="volume"/><divider name="divider"/><button name="fullscreen"/></group></layout><elements><element name="background" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAElJREFUOI3t1LERACAMQlFgGvcfxNIhHMK4gsUvUviOmgtNsiAZkBSEKxKEnCYkkQrJn/YwbUNiSDDYRZaQRDaShv+oX9GBZEIuK+8hXVLs+/YAAAAASUVORK5CYII="/><element name="blankButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAYCAYAAAAyJzegAAAAFElEQVQYV2P8//8/AzpgHBUc7oIAGZdH0RjKN8EAAAAASUVORK5CYII="/><element name="capLeft" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAYAAAA7zJfaAAAAQElEQVQIWz3LsRGAMADDQJ0XB5bMINABZ9GENGrszxhjT2WLSqxEJG2JQrTMdV2q5LpOAvyRaVmsi7WdeZ/7+AAaOTq7BVrfOQAAAABJRU5ErkJggg=="/><element name="capRight" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAYAAAA7zJfaAAAAQElEQVQIWz3LsRGAMADDQJ0XB5bMINABZ9GENGrszxhjT2WLSqxEJG2JQrTMdV2q5LpOAvyRaVmsi7WdeZ/7+AAaOTq7BVrfOQAAAABJRU5ErkJggg=="/><element name="divider" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAIAAAC0rgCNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADhJREFUCB0FwcENgEAAw7Aq+893g8APUILNOQcbFRktVGqUVFRkWNz3xTa2sUaLNUosKlRUvvf5AdbWOTtzmzyWAAAAAElFTkSuQmCC"/><element name="playButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAANUlEQVR42u2RsQkAAAjD/NTTPaW6dXLrINJA1kBpGPMAjDWmOgp1HFQXx+b1KOefO4oxY57R73YnVYCQUCQAAAAASUVORK5CYII="/><element name="pauseButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAIUlEQVQ4jWNgGAWjYOiD/0gYG3/U0FFDB4Oho2AUDAYAAEwiL9HrpdMVAAAAAElFTkSuQmCC"/><element name="prevButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAQklEQVQ4y2NgGAWjYOiD/1AMA/JAfB5NjCJD/YH4PRaLyDa0H4lNNUP/DxlD59PCUBCIp3ZEwYA+NZLUKBgFgwEAAN+HLX9sB8u8AAAAAElFTkSuQmCC"/><element name="nextButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAQElEQVQ4y2NgGAWjYOiD/0B8Hojl0cT+U2ooCL8HYn9qGwrD/bQw9P+QMXQ+tSMqnpoRBUpS+tRMUqNgFAwGAADxZy1/mHvFnAAAAABJRU5ErkJggg=="/><element name="timeSliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAOElEQVRIDe3BwQkAIRADwAhhw/nU/kWwUK+KPITMABFh19Y+F0acY8CJvX9wYpXgRElwolSIiMf9ZWEDhtwurFsAAAAASUVORK5CYII="/><element name="timeSliderBuffer" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAN0lEQVRIDe3BwQkAMQwDMBcc55mRe9zi7RR+FCwBEWG39vcfGHFm4MTuhhMlwYlVBSdKhYh43AW/LQMKm1spzwAAAABJRU5ErkJggg=="/><element name="timeSliderProgress" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAIElEQVRIiWNgGAWjYBTQBfynMR61YCRYMApGwSigMQAAiVWPcbq6UkIAAAAASUVORK5CYII="/><element name="timeSliderThumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAYCAYAAAA/OUfnAAAAO0lEQVQYlWP4//8/Awwz0JgDBP/BeN6Cxf/hnI2btiI4u/fsQ3AOHjqK4Jw4eQbBOX/hEoKDYjSd/AMA4cS4mfLsorgAAAAASUVORK5CYII="/><element name="muteButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAAJklEQVQ4y2NgGAUjDcwH4v/kaPxPikZkxcNVI9mBQ5XoGAWDFwAAsKAXKQQmfbUAAAAASUVORK5CYII="/><element name="unmuteButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAAMklEQVQ4y2NgGAWDHPyntub5xBr6Hwv/Pzk2/yfVG/8psRFE25Oq8T+tQnsIaB4FVAcAi2YVysVY52AAAAAASUVORK5CYII="/><element name="volumeSliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAgMAAACdGdVrAAAACVBMVEUAAACmpqampqbBXAu8AAAAAnRSTlMAgJsrThgAAAArSURBVAhbY2AgErBAyA4I2QEhOyBkB4TsYOhAoaCCUCUwDTDtMMNgRuMHAFB5FoGH5T0UAAAAAElFTkSuQmCC"/><element name="volumeSliderProgress" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAgMAAACdGdVrAAAACVBMVEUAAAAAAAAAAACDY+nAAAAAAnRSTlMAgJsrThgAAAArSURBVAhbY2AgErBAyA4I2QEhOyBkB4TsYOhAoaCCUCUwDTDtMMNgRuMHAFB5FoGH5T0UAAAAAElFTkSuQmCC"/><element name="volumeSliderCapRight" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAYCAYAAAAyJzegAAAAFElEQVQYV2P8//8/AzpgHBUc7oIAGZdH0RjKN8EAAAAASUVORK5CYII="/><element name="fullscreenButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAQklEQVRIiWNgGAWjYMiD/0iYFDmSLbDHImdPLQtgBpEiR7Zl2NijAA5oEkT/0Whi5UiyAJ8BVMsHNMtoo2AUDAIAAGdcIN3IDNXoAAAAAElFTkSuQmCC"/><element name="normalscreenButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAP0lEQVRIx2NgGAWjYMiD/1RSQ5QB/wmIUWzJfzx8qhj+n4DYCAY0DyJ7PBbYU8sHMEvwiZFtODXUjIJRMJgBACpWIN2ZxdPTAAAAAElFTkSuQmCC"/></elements></component><component name="display"><elements><element name="background" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAQMAAAAk8RryAAAABlBMVEUAAAAAAAClZ7nPAAAAAnRSTlOZpuml+rYAAAASSURBVBhXY2AYJuA/GBwY6jQAyDyoK8QcL4QAAAAASUVORK5CYII="/><element name="playIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAiUlEQVR42u3XSw2AMBREURwgAQlIQAISKgUpSEFKJeCg5b0E0kWBTVcD9ySTsL0Jn9IBAAAA+K2UUrBlW/Rr5ZDoIeeuoFkxJD9ss03aIXXQqB9SttoG7ZA6qNcOKdttiwcJh9RB+iFl4SshkRBuLR72+9cvH0SOKI2HRo7x/Fi1/uoCAAAAwLsD8ki99IlO2dQAAAAASUVORK5CYII="/><element name="muteIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAVUlEQVR42u3WMQrAIAxAUW/g/SdvGmvpoOBeSHgPsjj5QTANAACARCJilIhYM0tEvJM+Ik3Id9E957kQIb+F3OdCPC0hPkQriqWx9hp/x/QGAABQyAPLB22VGrpLDgAAAABJRU5ErkJggg=="/><element name="errorIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAA/0lEQVR42u2U0QmEMBAF7cASLMESUoIlpARLSCkpwRJSgiWkhOvAXD4WsgRkyaG5DbyB+Yvg8KITAAAAAAAYk+u61mwk15EjPtlEfihmqIiZR1Qx80ghjgdUuiHXGHSVsoag0x6x8DUoyjD5KovmEJ9NTDMRPIT0mtdIUkjlonuNohO+Ha99DTmkuGgKCTcvebAzx82ZoCWC3/3aIMWSRucaxcjORSFY4xpFdjYJGp1rFGcyCYZ/RVh6AUnfcNZ2zih3/mGj1jVCdiNDwyrq1rA/xMdeEXvDVdnYc1vDc3uPkDObXrlaxbNHSOohQhr/WOeLEWfWTgAAAAAAADzNF9sHJ7PJ57MlAAAAAElFTkSuQmCC"/><element name="bufferIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACBklEQVR42u3Zv0sCYRzH8USTzOsHHEWGkC1HgaDgkktGDjUYtDQ01RDSljQ1BLU02+rk1NTm2NLq4Nx/0L/h9fnCd3j4cnZe1/U8xiO8h3uurufF0/3COd/3/0UWYiEWYiEWYiGJQ+J8xuPxKhXjEMZANinjIZhkGuVRNioE4wVURo4JkHm0xKWmhRAc1bh1EyCUw5BcBIjHiApKa4CErko6DEJwuRo6IRKzyJD8FJAyI3Zp2zRImiBcRhlfo5RtlxCcE3CcDNpGrhYIT2IhAJKilO0VRmzJ32fAMTpBTS0QMfGwlcuKMRftE0DJ0wCJdcOsCkBdXP3Mh9CEFUBTPS9mDZJBG6io4aqVzMdCokCw9H3kT6j/C/9iDdSeUMNC7DkyyxAs/Rk6Qss8FPWRZgdVtUH4DjxEn1zxh+/zj1wHlf4MQhNGrwqA6sY40U8JonRJwEQh+AO3AvCG6gHv4U7IY4krxkroWoAOkoQMGfCBrgIm+YBGqPENpIJ66CJg3x66Y0gnSUidAEEnNr9jjLiWMn5DiWP0OC/oAsCgkq43xBdGDMQr7YASP/vEkHvdl1+JOCcEV5sC4hGEOzTlPuKgd0b0xD4JkRcOgnRRTjdErkYhAsQVq6IdUuPJtmk7BCL3t/h88cx91pKQkI/pkDx6pmYTIjEoxiHsN1YWYiEWYiEWknhflZ5IErA5nr8AAAAASUVORK5CYII="/></elements></component><component name="dock"><settings><setting name="fontcolor" value="0xffffff"/></settings><elements><element name="button" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAQMAAAAk8RryAAAABlBMVEUAAAAAAAClZ7nPAAAAAnRSTlOZpuml+rYAAAASSURBVBhXY2AYJuA/GBwY6jQAyDyoK8QcL4QAAAAASUVORK5CYII="/></elements></component><component name="playlist"><settings><setting name="backgroundcolor" value="0xe8e8e8"/></settings><elements><element name="item" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAIAAAC1nk4lAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHBJREFUaN7t2MENwCAMBEEe9N8wSKYC/D8YV7CyJoRkVtVImxkZPQInMxoP0XiIxkM0HsGbjjSNBx544IEHHnjggUe/6UQeey0PIh7XTftGxKPj4eXCtLsHHh+ZxkO0Iw8PR55Ni8ZD9Hu/EAoP0dc5RRg9qeRjVF8AAAAASUVORK5CYII="/><element name="sliderCapTop" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAHCAYAAADnCQYGAAAAFUlEQVQokWP8//8/A7UB46ihI9hQAKt6FPPXhVGHAAAAAElFTkSuQmCC"/><element name="sliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAKElEQVQ4y2P4//8/Az68bNmy/+iYkB6GUUNHDR01dNTQUUNHDaXcUABUDOKhcxnsSwAAAABJRU5ErkJggg=="/><element name="sliderThumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAJUlEQVQ4T2P4//8/Ay4MBP9xYbz6Rg0dNXTU0FFDRw0dNZRyQwHH4NBa7GJsXAAAAABJRU5ErkJggg=="/><element name="sliderCapBottom" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAHCAYAAADnCQYGAAAAFUlEQVQokWP8//8/A7UB46ihI9hQAKt6FPPXhVGHAAAAAElFTkSuQmCC"/></elements></component></components></skin>';this.xml=null;if(window.DOMParser){parser=new DOMParser();this.xml=parser.parseFromString(this.text,"text/xml")}else{this.xml=new ActiveXObject("Microsoft.XMLDOM");this.xml.async="false";this.xml.loadXML(this.text)}return this}})(jwplayer);(function(a){_utils=a.utils;_css=_utils.css;_hide=function(b){_css(b,{display:"none"})};_show=function(b){_css(b,{display:"block"})};a.html5.display=function(k,K){var j={icons:true,showmute:false};var X=_utils.extend({},j,K);var h=k;var W={};var e;var w;var z;var T;var u;var M;var E;var N=!_utils.exists(h.skin.getComponentSettings("display").bufferrotation)?15:parseInt(h.skin.getComponentSettings("display").bufferrotation,10);var s=!_utils.exists(h.skin.getComponentSettings("display").bufferinterval)?100:parseInt(h.skin.getComponentSettings("display").bufferinterval,10);var D=-1;var v=a.api.events.state.IDLE;var O=true;var d;var C=false,V=true;var p="";var g=false;var o=false;var m;var y,R;var L=new a.html5.eventdispatcher();_utils.extend(this,L);var H={display:{style:{cursor:"pointer",top:0,left:0,overflow:"hidden"},click:n},display_icon:{style:{cursor:"pointer",position:"absolute",top:((h.skin.getSkinElement("display","background").height-h.skin.getSkinElement("display","playIcon").height)/2),left:((h.skin.getSkinElement("display","background").width-h.skin.getSkinElement("display","playIcon").width)/2),border:0,margin:0,padding:0,zIndex:3,display:"none"}},display_iconBackground:{style:{cursor:"pointer",position:"absolute",top:((w-h.skin.getSkinElement("display","background").height)/2),left:((e-h.skin.getSkinElement("display","background").width)/2),border:0,backgroundImage:(["url(",h.skin.getSkinElement("display","background").src,")"]).join(""),width:h.skin.getSkinElement("display","background").width,height:h.skin.getSkinElement("display","background").height,margin:0,padding:0,zIndex:2,display:"none"}},display_image:{style:{display:"none",width:e,height:w,position:"absolute",cursor:"pointer",left:0,top:0,margin:0,padding:0,textDecoration:"none",zIndex:1}},display_text:{style:{zIndex:4,position:"relative",opacity:0.8,backgroundColor:parseInt("000000",16),color:parseInt("ffffff",16),textAlign:"center",fontFamily:"Arial,sans-serif",padding:"0 5px",fontSize:14}}};h.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE,q);h.jwAddEventListener(a.api.events.JWPLAYER_MEDIA_MUTE,q);h.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED,P);h.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_ITEM,q);h.jwAddEventListener(a.api.events.JWPLAYER_ERROR,r);Q();function Q(){W.display=G("div","display");W.display_text=G("div","display_text");W.display.appendChild(W.display_text);W.display_image=G("img","display_image");W.display_image.onerror=function(Y){_hide(W.display_image)};W.display_image.onload=B;W.display_icon=G("div","display_icon");W.display_iconBackground=G("div","display_iconBackground");W.display.appendChild(W.display_image);W.display_iconBackground.appendChild(W.display_icon);W.display.appendChild(W.display_iconBackground);f();setTimeout((function(){o=true;if(X.icons.toString()=="true"){J()}}),1)}this.getDisplayElement=function(){return W.display};this.resize=function(Z,Y){if(h.jwGetFullscreen()&&_utils.isMobile()){return}_css(W.display,{width:Z,height:Y});_css(W.display_text,{width:(Z-10),top:((Y-_utils.getBoundingClientRect(W.display_text).height)/2)});_css(W.display_iconBackground,{top:((Y-h.skin.getSkinElement("display","background").height)/2),left:((Z-h.skin.getSkinElement("display","background").width)/2)});if(e!=Z||w!=Y){e=Z;w=Y;d=undefined;J()}if(!h.jwGetFullscreen()){y=Z;R=Y}c();q({})};this.show=function(){if(g){g=false;t(h.jwGetState())}};this.hide=function(){if(!g){F();g=true}};function B(Y){z=W.display_image.naturalWidth;T=W.display_image.naturalHeight;c();if(h.jwGetState()==a.api.events.state.IDLE||h.jwGetPlaylist()[h.jwGetPlaylistIndex()].provider=="sound"){_css(W.display_image,{display:"block",opacity:0});_utils.fadeTo(W.display_image,1,0.1)}C=false}function c(){if(h.jwGetFullscreen()&&h.jwGetStretching()==a.utils.stretching.EXACTFIT){var Y=document.createElement("div");_utils.stretch(a.utils.stretching.UNIFORM,Y,e,w,y,R);_utils.stretch(a.utils.stretching.EXACTFIT,W.display_image,_utils.parseDimension(Y.style.width),_utils.parseDimension(Y.style.height),z,T);_css(W.display_image,{left:Y.style.left,top:Y.style.top})}else{_utils.stretch(h.jwGetStretching(),W.display_image,e,w,z,T)}}function G(Y,aa){var Z=document.createElement(Y);Z.id=h.id+"_jwplayer_"+aa;_css(Z,H[aa].style);return Z}function f(){for(var Y in W){if(_utils.exists(H[Y].click)){W[Y].onclick=H[Y].click}}}function n(Y){if(typeof Y.preventDefault!="undefined"){Y.preventDefault()}else{Y.returnValue=false}if(typeof m=="function"){m(Y);return}else{if(h.jwGetState()!=a.api.events.state.PLAYING){h.jwPlay()}else{h.jwPause()}}}function U(Y){if(E){F();return}W.display_icon.style.backgroundImage=(["url(",h.skin.getSkinElement("display",Y).src,")"]).join("");_css(W.display_icon,{width:h.skin.getSkinElement("display",Y).width,height:h.skin.getSkinElement("display",Y).height,top:(h.skin.getSkinElement("display","background").height-h.skin.getSkinElement("display",Y).height)/2,left:(h.skin.getSkinElement("display","background").width-h.skin.getSkinElement("display",Y).width)/2});b();if(_utils.exists(h.skin.getSkinElement("display",Y+"Over"))){W.display_icon.onmouseover=function(Z){W.display_icon.style.backgroundImage=["url(",h.skin.getSkinElement("display",Y+"Over").src,")"].join("")};W.display_icon.onmouseout=function(Z){W.display_icon.style.backgroundImage=["url(",h.skin.getSkinElement("display",Y).src,")"].join("")}}else{W.display_icon.onmouseover=null;W.display_icon.onmouseout=null}}function F(){if(X.icons.toString()=="true"){_hide(W.display_icon);_hide(W.display_iconBackground);S()}}function b(){if(!g&&X.icons.toString()=="true"){_show(W.display_icon);_show(W.display_iconBackground);J()}}function r(Y){E=true;F();W.display_text.innerHTML=Y.message;_show(W.display_text);W.display_text.style.top=((w-_utils.getBoundingClientRect(W.display_text).height)/2)+"px"}function I(){V=false;W.display_image.style.display="none"}function P(){v=""}function q(Y){if((Y.type==a.api.events.JWPLAYER_PLAYER_STATE||Y.type==a.api.events.JWPLAYER_PLAYLIST_ITEM)&&E){E=false;_hide(W.display_text)}var Z=h.jwGetState();if(Z==v){return}v=Z;if(D>=0){clearTimeout(D)}if(O||h.jwGetState()==a.api.events.state.PLAYING||h.jwGetState()==a.api.events.state.PAUSED){t(h.jwGetState())}else{D=setTimeout(l(h.jwGetState()),500)}}function l(Y){return(function(){t(Y)})}function t(Y){if(_utils.exists(M)){clearInterval(M);M=null;_utils.animations.rotate(W.display_icon,0)}switch(Y){case a.api.events.state.BUFFERING:if(_utils.isIPod()){I();F()}else{if(h.jwGetPlaylist()[h.jwGetPlaylistIndex()].provider=="sound"){x()}u=0;M=setInterval(function(){u+=N;_utils.animations.rotate(W.display_icon,u%360)},s);U("bufferIcon");O=true}break;case a.api.events.state.PAUSED:if(!_utils.isIPod()){if(h.jwGetPlaylist()[h.jwGetPlaylistIndex()].provider!="sound"){_css(W.display_image,{background:"transparent no-repeat center center"})}U("playIcon");O=true}break;case a.api.events.state.IDLE:if(h.jwGetPlaylist()[h.jwGetPlaylistIndex()]&&h.jwGetPlaylist()[h.jwGetPlaylistIndex()].image){x()}else{I()}U("playIcon");O=true;break;default:if(h.jwGetPlaylist()[h.jwGetPlaylistIndex()]&&h.jwGetPlaylist()[h.jwGetPlaylistIndex()].provider=="sound"){if(_utils.isIPod()){I();O=false}else{x()}}else{I();O=false}if(h.jwGetMute()&&X.showmute){U("muteIcon")}else{F()}break}D=-1}function x(){if(h.jwGetPlaylist()[h.jwGetPlaylistIndex()]){var Y=h.jwGetPlaylist()[h.jwGetPlaylistIndex()].image;if(Y){if(Y!=p){p=Y;C=true;W.display_image.src=_utils.getAbsolutePath(Y)}else{if(!(C||V)){V=true;W.display_image.style.opacity=0;W.display_image.style.display="block";_utils.fadeTo(W.display_image,1,0.1)}}}}}function A(Y){return function(){if(!o){return}if(!g&&d!=Y){d=Y;L.sendEvent(Y,{component:"display",boundingRect:_utils.getDimensions(W.display_iconBackground)})}}}var J=A(a.api.events.JWPLAYER_COMPONENT_SHOW);var S=A(a.api.events.JWPLAYER_COMPONENT_HIDE);this.setAlternateClickHandler=function(Y){m=Y};this.revertAlternateClickHandler=function(){m=undefined};return this}})(jwplayer);(function(a){var c=a.utils;var b=c.css;a.html5.dock=function(w,D){function x(){return{align:a.html5.view.positions.RIGHT}}var n=c.extend({},x(),D);if(n.align=="FALSE"){return}var j={};var A=[];var k;var F;var f=false;var C=false;var g={x:0,y:0,width:0,height:0};var z;var o;var y;var m=new a.html5.eventdispatcher();c.extend(this,m);var r=document.createElement("div");r.id=w.id+"_jwplayer_dock";r.style.opacity=1;p();w.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE,q);this.getDisplayElement=function(){return r};this.setButton=function(K,H,I,J){if(!H&&j[K]){c.arrays.remove(A,K);r.removeChild(j[K].div);delete j[K]}else{if(H){if(!j[K]){j[K]={}}j[K].handler=H;j[K].outGraphic=I;j[K].overGraphic=J;if(!j[K].div){A.push(K);j[K].div=document.createElement("div");j[K].div.style.position="absolute";r.appendChild(j[K].div);j[K].div.appendChild(document.createElement("div"));j[K].div.childNodes[0].style.position="relative";j[K].div.childNodes[0].style.width="100%";j[K].div.childNodes[0].style.height="100%";j[K].div.childNodes[0].style.zIndex=10;j[K].div.childNodes[0].style.cursor="pointer";j[K].div.appendChild(document.createElement("img"));j[K].div.childNodes[1].style.position="absolute";j[K].div.childNodes[1].style.left=0;j[K].div.childNodes[1].style.top=0;if(w.skin.getSkinElement("dock","button")){j[K].div.childNodes[1].src=w.skin.getSkinElement("dock","button").src}j[K].div.childNodes[1].style.zIndex=9;j[K].div.childNodes[1].style.cursor="pointer";j[K].div.onmouseover=function(){if(j[K].overGraphic){j[K].div.childNodes[0].style.background=h(j[K].overGraphic)}if(w.skin.getSkinElement("dock","buttonOver")){j[K].div.childNodes[1].src=w.skin.getSkinElement("dock","buttonOver").src}};j[K].div.onmouseout=function(){if(j[K].outGraphic){j[K].div.childNodes[0].style.background=h(j[K].outGraphic)}if(w.skin.getSkinElement("dock","button")){j[K].div.childNodes[1].src=w.skin.getSkinElement("dock","button").src}};if(w.skin.getSkinElement("dock","button")){j[K].div.childNodes[1].src=w.skin.getSkinElement("dock","button").src}}if(j[K].outGraphic){j[K].div.childNodes[0].style.background=h(j[K].outGraphic)}else{if(j[K].overGraphic){j[K].div.childNodes[0].style.background=h(j[K].overGraphic)}}if(H){j[K].div.onclick=function(L){L.preventDefault();a(w.id).callback(K);if(j[K].overGraphic){j[K].div.childNodes[0].style.background=h(j[K].overGraphic)}if(w.skin.getSkinElement("dock","button")){j[K].div.childNodes[1].src=w.skin.getSkinElement("dock","button").src}}}}}l(k,F)};function h(H){return"url("+H+") no-repeat center center"}function t(H){}function l(H,T){p();if(A.length>0){var I=10;var S=I;var P=-1;var Q=w.skin.getSkinElement("dock","button").height;var O=w.skin.getSkinElement("dock","button").width;var M=H-O-I;var R,L;if(n.align==a.html5.view.positions.LEFT){P=1;M=I}for(var J=0;J<A.length;J++){var U=Math.floor(S/T);if((S+Q+I)>((U+1)*T)){S=((U+1)*T)+I;U=Math.floor(S/T)}var K=j[A[J]].div;K.style.top=(S%T)+"px";K.style.left=(M+(w.skin.getSkinElement("dock","button").width+I)*U*P)+"px";var N={x:c.parseDimension(K.style.left),y:c.parseDimension(K.style.top),width:O,height:Q};if(!R||(N.x<=R.x&&N.y<=R.y)){R=N}if(!L||(N.x>=L.x&&N.y>=L.y)){L=N}K.style.width=O+"px";K.style.height=Q+"px";S+=w.skin.getSkinElement("dock","button").height+I}g={x:R.x,y:R.y,width:L.x-R.x+L.width,height:R.y-L.y+L.height}}if(C!=w.jwGetFullscreen()||k!=H||F!=T){k=H;F=T;C=w.jwGetFullscreen();z=undefined;setTimeout(s,1)}}function d(H){return function(){if(!f&&z!=H&&A.length>0){z=H;m.sendEvent(H,{component:"dock",boundingRect:g})}}}function q(H){if(c.isMobile()){if(H.newstate==a.api.events.state.IDLE){v()}else{e()}}else{B()}}function B(H){if(f){return}clearTimeout(y);if(D.position==a.html5.view.positions.OVER||w.jwGetFullscreen()){switch(w.jwGetState()){case a.api.events.state.PAUSED:case a.api.events.state.IDLE:if(r&&r.style.opacity<1&&(!D.idlehide||c.exists(H))){E()}if(D.idlehide){y=setTimeout(function(){u()},2000)}break;default:if(c.exists(H)){E()}y=setTimeout(function(){u()},2000);break}}else{E()}}var s=d(a.api.events.JWPLAYER_COMPONENT_SHOW);var G=d(a.api.events.JWPLAYER_COMPONENT_HIDE);this.resize=l;var v=function(){b(r,{display:"block"});if(f){f=false;s()}};var e=function(){b(r,{display:"none"});if(!f){G();f=true}};function u(){if(!f){G();if(r.style.opacity==1){c.cancelAnimation(r);c.fadeTo(r,0,0.1,1,0)}}}function E(){if(!f){s();if(r.style.opacity==0){c.cancelAnimation(r);c.fadeTo(r,1,0.1,0,0)}}}function p(){try{o=document.getElementById(w.id);o.addEventListener("mousemove",B)}catch(H){c.log("Could not add mouse listeners to dock: "+H)}}this.hide=e;this.show=v;return this}})(jwplayer);(function(a){a.html5.eventdispatcher=function(d,b){var c=new a.events.eventdispatcher(b);a.utils.extend(this,c);this.sendEvent=function(e,f){if(!a.utils.exists(f)){f={}}a.utils.extend(f,{id:d,version:a.version,type:e});c.sendEvent(e,f)}}})(jwplayer);(function(a){var b=a.utils;a.html5.instream=function(y,m,x,z){var t={controlbarseekable:"always",controlbarpausable:true,controlbarstoppable:true,playlistclickable:true};var v,A,C=y,E=m,j=x,w=z,r,H,o,G,e,f,g,l,q,h=false,k,d,n=this;this.load=function(M,K){c();h=true;A=b.extend(t,K);v=a.html5.playlistitem(M);F();d=document.createElement("div");d.id=n.id+"_instream_container";w.detachMedia();r=g.getDisplayElement();f=E.playlist[E.item];e=C.jwGetState();if(e==a.api.events.state.BUFFERING||e==a.api.events.state.PLAYING){r.pause()}H=r.src?r.src:r.currentSrc;o=r.innerHTML;G=r.currentTime;q=new a.html5.display(n,b.extend({},E.plugins.config.display));q.setAlternateClickHandler(function(N){if(_fakemodel.state==a.api.events.state.PAUSED){n.jwInstreamPlay()}else{D(a.api.events.JWPLAYER_INSTREAM_CLICK,N)}});d.appendChild(q.getDisplayElement());if(!b.isMobile()){l=new a.html5.controlbar(n,b.extend({},E.plugins.config.controlbar,{}));if(E.plugins.config.controlbar.position==a.html5.view.positions.OVER){d.appendChild(l.getDisplayElement())}else{var L=E.plugins.object.controlbar.getDisplayElement().parentNode;L.appendChild(l.getDisplayElement())}}j.setupInstream(d,r);p();g.load(v)};this.jwInstreamDestroy=function(K){if(!h){return}h=false;if(e!=a.api.events.state.IDLE){g.load(f,false);g.stop(false)}else{g.stop(true)}g.detachMedia();j.destroyInstream();if(l){try{l.getDisplayElement().parentNode.removeChild(l.getDisplayElement())}catch(L){}}D(a.api.events.JWPLAYER_INSTREAM_DESTROYED,{reason:(K?"complete":"destroyed")},true);w.attachMedia();if(e==a.api.events.state.BUFFERING||e==a.api.events.state.PLAYING){r.play();if(E.playlist[E.item]==f){E.getMedia().seek(G)}}return};this.jwInstreamAddEventListener=function(K,L){k.addEventListener(K,L)};this.jwInstreamRemoveEventListener=function(K,L){k.removeEventListener(K,L)};this.jwInstreamPlay=function(){if(!h){return}g.play(true)};this.jwInstreamPause=function(){if(!h){return}g.pause(true)};this.jwInstreamSeek=function(K){if(!h){return}g.seek(K)};this.jwInstreamGetState=function(){if(!h){return undefined}return _fakemodel.state};this.jwInstreamGetPosition=function(){if(!h){return undefined}return _fakemodel.position};this.jwInstreamGetDuration=function(){if(!h){return undefined}return _fakemodel.duration};this.playlistClickable=function(){return(!h||A.playlistclickable.toString().toLowerCase()=="true")};function s(){_fakemodel=new a.html5.model(this,E.getMedia()?E.getMedia().getDisplayElement():E.container,E);k=new a.html5.eventdispatcher();C.jwAddEventListener(a.api.events.JWPLAYER_RESIZE,p);C.jwAddEventListener(a.api.events.JWPLAYER_FULLSCREEN,p)}function c(){_fakemodel.setMute(E.mute);_fakemodel.setVolume(E.volume)}function F(){if(!g){g=new a.html5.mediavideo(_fakemodel,E.getMedia()?E.getMedia().getDisplayElement():E.container);g.addGlobalListener(I);g.addEventListener(a.api.events.JWPLAYER_MEDIA_META,J);g.addEventListener(a.api.events.JWPLAYER_MEDIA_COMPLETE,u);g.addEventListener(a.api.events.JWPLAYER_MEDIA_BUFFER_FULL,B)}g.attachMedia()}function I(K){if(h){D(K.type,K)}}function B(K){if(h){g.play()}}function u(K){if(h){setTimeout(function(){n.jwInstreamDestroy(true)},10)}}function J(K){if(K.metadata.width&&K.metadata.height){j.resizeMedia()}}function D(K,L,M){if(h||M){k.sendEvent(K,L)}}function p(){var K=E.plugins.object.display.getDisplayElement().style;if(l){var L=E.plugins.object.controlbar.getDisplayElement().style;l.resize(b.parseDimension(K.width),b.parseDimension(K.height));_css(l.getDisplayElement(),b.extend({},L,{zIndex:1001,opacity:1}))}if(q){q.resize(b.parseDimension(K.width),b.parseDimension(K.height));_css(q.getDisplayElement(),b.extend({},K,{zIndex:1000}))}if(j){j.resizeMedia()}}this.jwPlay=function(K){if(A.controlbarpausable.toString().toLowerCase()=="true"){this.jwInstreamPlay()}};this.jwPause=function(K){if(A.controlbarpausable.toString().toLowerCase()=="true"){this.jwInstreamPause()}};this.jwStop=function(){if(A.controlbarstoppable.toString().toLowerCase()=="true"){this.jwInstreamDestroy();C.jwStop()}};this.jwSeek=function(K){switch(A.controlbarseekable.toLowerCase()){case"always":this.jwInstreamSeek(K);break;case"backwards":if(_fakemodel.position>K){this.jwInstreamSeek(K)}break}};this.jwGetPosition=function(){};this.jwGetDuration=function(){};this.jwGetWidth=C.jwGetWidth;this.jwGetHeight=C.jwGetHeight;this.jwGetFullscreen=C.jwGetFullscreen;this.jwSetFullscreen=C.jwSetFullscreen;this.jwGetVolume=function(){return E.volume};this.jwSetVolume=function(K){g.volume(K);C.jwSetVolume(K)};this.jwGetMute=function(){return E.mute};this.jwSetMute=function(K){g.mute(K);C.jwSetMute(K)};this.jwGetState=function(){return _fakemodel.state};this.jwGetPlaylist=function(){return[v]};this.jwGetPlaylistIndex=function(){return 0};this.jwGetStretching=function(){return E.config.stretching};this.jwAddEventListener=function(L,K){k.addEventListener(L,K)};this.jwRemoveEventListener=function(L,K){k.removeEventListener(L,K)};this.skin=C.skin;this.id=C.id+"_instream";s();return this}})(jwplayer);(function(a){var b={prefix:"",file:"",link:"",linktarget:"_top",margin:8,out:0.5,over:1,timeout:5,hide:true,position:"bottom-left"};_css=a.utils.css;a.html5.logo=function(n,r){var q=n;var u;var d;var t;var h=false;g();function g(){o();q.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE,j);c();l()}function o(){if(b.prefix){var v=n.version.split(/\W/).splice(0,2).join("/");if(b.prefix.indexOf(v)<0){b.prefix+=v+"/"}}if(r.position==a.html5.view.positions.OVER){r.position=b.position}try{if(window.location.href.indexOf("https")==0){b.prefix=b.prefix.replace("http://l.longtailvideo.com","https://securel.longtailvideo.com")}}catch(w){}d=a.utils.extend({},b,r)}function c(){t=document.createElement("img");t.id=q.id+"_jwplayer_logo";t.style.display="none";t.onload=function(v){_css(t,k());p()};if(!d.file){return}if(d.file.indexOf("/")>=0){t.src=d.file}else{t.src=d.prefix+d.file}}if(!d.file){return}this.resize=function(w,v){};this.getDisplayElement=function(){return t};function l(){if(d.link){t.onmouseover=f;t.onmouseout=p;t.onclick=s}else{this.mouseEnabled=false}}function s(v){if(typeof v!="undefined"){v.stopPropagation()}if(!h){return}q.jwPause();q.jwSetFullscreen(false);if(d.link){window.open(d.link,d.linktarget)}return}function p(v){if(d.link&&h){t.style.opacity=d.out}return}function f(v){if(h){t.style.opacity=d.over}return}function k(){var x={textDecoration:"none",position:"absolute",cursor:"pointer"};x.display=(d.hide.toString()=="true"&&!h)?"none":"block";var w=d.position.toLowerCase().split("-");for(var v in w){x[w[v]]=parseInt(d.margin)}return x}function m(){if(d.hide.toString()=="true"){t.style.display="block";t.style.opacity=0;a.utils.fadeTo(t,d.out,0.1,parseFloat(t.style.opacity));u=setTimeout(function(){e()},d.timeout*1000)}h=true}function e(){h=false;if(d.hide.toString()=="true"){a.utils.fadeTo(t,0,0.1,parseFloat(t.style.opacity))}}function j(v){if(v.newstate==a.api.events.state.BUFFERING){clearTimeout(u);m()}}return this}})(jwplayer);(function(b){var d={ended:b.api.events.state.IDLE,playing:b.api.events.state.PLAYING,pause:b.api.events.state.PAUSED,buffering:b.api.events.state.BUFFERING};var f=b.utils;var a=f.isMobile();var g,e;var c={};b.html5.mediavideo=function(k,I){var M={abort:A,canplay:r,canplaythrough:r,durationchange:w,emptied:A,ended:r,error:q,loadeddata:w,loadedmetadata:w,loadstart:r,pause:r,play:A,playing:r,progress:G,ratechange:A,seeked:r,seeking:r,stalled:r,suspend:r,timeupdate:Q,volumechange:n,waiting:r,canshowcurrentframe:A,dataunavailable:A,empty:A,load:j,loadedfirstframe:A,webkitfullscreenchange:m};var E={};var N=new b.html5.eventdispatcher();f.extend(this,N);var l=k,D=I,o,h,F,W,H,P,O=false,v=false,z=false,L,J,T;U();this.load=function(Y,Z){if(typeof Z=="undefined"){Z=true}if(!v){return}W=Y;z=(W.duration>0);l.duration=W.duration;f.empty(o);o.style.display="block";o.style.opacity=1;if(g&&e){o.style.width=g;o.style.height=e;g=_previousHieght=0}T=0;s(Y.levels);if(Y.levels&&Y.levels.length>0){if(Y.levels.length==1||f.isIOS()){o.src=Y.levels[0].file}else{if(o.src){o.removeAttribute("src")}for(var X=0;X<Y.levels.length;X++){var aa=o.ownerDocument.createElement("source");aa.src=Y.levels[X].file;o.appendChild(aa);T++}}}else{o.src=Y.file}o.volume=l.volume/100;o.muted=l.mute;if(a){S()}L=J=F=false;l.buffer=0;if(!f.exists(Y.start)){Y.start=0}P=(Y.start>0)?Y.start:-1;u(b.api.events.JWPLAYER_MEDIA_LOADED);if((!a&&Y.levels.length==1)||!O){o.load()}O=false;if(Z){y(b.api.events.state.BUFFERING);u(b.api.events.JWPLAYER_MEDIA_BUFFER,{bufferPercent:0});C()}if(o.videoWidth>0&&o.videoHeight>0){w()}};this.play=function(){if(!v){return}C();if(J){y(b.api.events.state.PLAYING)}else{o.load();y(b.api.events.state.BUFFERING)}o.play()};this.pause=function(){if(!v){return}o.pause();y(b.api.events.state.PAUSED)};this.seek=function(X){if(!v){return}if(!F&&o.readyState>0){if(!(l.duration<=0||isNaN(l.duration))&&!(l.position<=0||isNaN(l.position))){o.currentTime=X;o.play()}}else{P=X}};var B=this.stop=function(X){if(!v){return}if(!f.exists(X)){X=true}t();if(X){J=false;var Y=navigator.userAgent;if(o.webkitSupportsFullscreen){try{o.webkitExitFullscreen()}catch(Z){}}o.style.opacity=0;x();if(f.isIE()){o.src=""}else{o.removeAttribute("src")}f.empty(o);o.load();O=true}if(f.isIPod()){g=o.style.width;e=o.style.height;o.style.width=0;o.style.height=0}else{if(f.isIPad()){o.style.display="none";try{o.webkitExitFullscreen()}catch(aa){}}}y(b.api.events.state.IDLE)};this.fullscreen=function(X){if(X===true){this.resize("100%","100%")}else{this.resize(l.config.width,l.config.height)}};this.resize=function(Y,X){};this.volume=function(X){if(!a){o.volume=X/100;u(b.api.events.JWPLAYER_MEDIA_VOLUME,{volume:(X/100)})}};this.mute=function(X){if(!a){o.muted=X;u(b.api.events.JWPLAYER_MEDIA_MUTE,{mute:X})}};this.getDisplayElement=function(){return o};this.hasChrome=function(){return a&&(h==b.api.events.state.PLAYING)};this.detachMedia=function(){v=false;return this.getDisplayElement()};this.attachMedia=function(){v=true};this.destroy=function(){if(o&&o.parentNode){t();for(var X in M){o.removeEventListener(X,K(X,M[X]),true)}f.empty(o);D=o.parentNode;o.parentNode.removeChild(o);delete c[l.id];o=null}};function K(Y,X){if(E[Y]){return E[Y]}else{E[Y]=function(Z){if(f.exists(Z.target.parentNode)){X(Z)}};return E[Y]}}function U(){h=b.api.events.state.IDLE;v=true;o=p();o.setAttribute("x-webkit-airplay","allow");if(D.parentNode){o.id=D.id;D.parentNode.replaceChild(o,D)}}function p(){var X=c[l.id];if(!X){if(D.tagName.toLowerCase()=="video"){X=D}else{X=document.createElement("video")}c[l.id]=X;if(!X.id){X.id=D.id}}for(var Y in M){X.addEventListener(Y,K(Y,M[Y]),true)}return X}function y(X){if(X==b.api.events.state.PAUSED&&h==b.api.events.state.IDLE){return}if(a){switch(X){case b.api.events.state.PLAYING:S();break;case b.api.events.state.BUFFERING:case b.api.events.state.PAUSED:x();break}}if(h!=X){var Y=h;l.state=h=X;u(b.api.events.JWPLAYER_PLAYER_STATE,{oldstate:Y,newstate:X})}}function A(X){}function n(X){var Y=Math.round(o.volume*100);u(b.api.events.JWPLAYER_MEDIA_VOLUME,{volume:Y},true);u(b.api.events.JWPLAYER_MEDIA_MUTE,{mute:o.muted},true)}function G(Z){if(!v){return}var Y;if(f.exists(Z)&&Z.lengthComputable&&Z.total){Y=Z.loaded/Z.total*100}else{if(f.exists(o.buffered)&&(o.buffered.length>0)){var X=o.buffered.length-1;if(X>=0){Y=o.buffered.end(X)/o.duration*100}}}if(f.useNativeFullscreen()&&f.exists(o.webkitDisplayingFullscreen)){if(l.fullscreen!=o.webkitDisplayingFullscreen){u(b.api.events.JWPLAYER_FULLSCREEN,{fullscreen:o.webkitDisplayingFullscreen},true)}}if(J===false&&h==b.api.events.state.BUFFERING){u(b.api.events.JWPLAYER_MEDIA_BUFFER_FULL);J=true}if(!L){if(Y==100){L=true}if(f.exists(Y)&&(Y>l.buffer)){l.buffer=Math.round(Y);u(b.api.events.JWPLAYER_MEDIA_BUFFER,{bufferPercent:Math.round(Y)})}}}function Q(Y){if(!v){return}if(f.exists(Y)&&f.exists(Y.target)){if(z>0){if(!isNaN(Y.target.duration)&&(isNaN(l.duration)||l.duration<1)){if(Y.target.duration==Infinity){l.duration=0}else{l.duration=Math.round(Y.target.duration*10)/10}}}if(!F&&o.readyState>0){y(b.api.events.state.PLAYING)}if(h==b.api.events.state.PLAYING){if(o.readyState>0&&(P>-1||!F)){F=true;try{if(o.currentTime!=P&&P>-1){o.currentTime=P;P=-1}}catch(X){}o.volume=l.volume/100;o.muted=l.mute}l.position=l.duration>0?(Math.round(Y.target.currentTime*10)/10):0;u(b.api.events.JWPLAYER_MEDIA_TIME,{position:l.position,duration:l.duration});if(l.position>=l.duration&&(l.position>0||l.duration>0)){R();return}}}G(Y)}function j(X){}function r(X){if(!v){return}if(g&&e){o.style.width=g;o.style.height=e;g=_previousHieght=0}if(d[X.type]){if(X.type=="ended"){R()}else{y(d[X.type])}}}function w(Y){if(!v){return}var X=Math.round(o.duration*10)/10;var Z={height:o.videoHeight,width:o.videoWidth,duration:X};if(!z){if((l.duration<X||isNaN(l.duration))&&o.duration!=Infinity){l.duration=X}}u(b.api.events.JWPLAYER_MEDIA_META,{metadata:Z})}function q(Z){if(!v){return}if(h==b.api.events.state.IDLE){return}var Y="There was an error: ";if((Z.target.error&&Z.target.tagName.toLowerCase()=="video")||Z.target.parentNode.error&&Z.target.parentNode.tagName.toLowerCase()=="video"){var X=!f.exists(Z.target.error)?Z.target.parentNode.error:Z.target.error;switch(X.code){case X.MEDIA_ERR_ABORTED:f.log("User aborted the video playback.");return;case X.MEDIA_ERR_NETWORK:Y="A network error caused the video download to fail part-way: ";break;case X.MEDIA_ERR_DECODE:Y="The video playback was aborted due to a corruption problem or because the video used features your browser did not support: ";break;case X.MEDIA_ERR_SRC_NOT_SUPPORTED:Y="The video could not be loaded, either because the server or network failed or because the format is not supported: ";break;default:Y="An unknown error occurred: ";break}}else{if(Z.target.tagName.toLowerCase()=="source"){T--;if(T>0){return}if(f.userAgentMatch(/firefox/i)){f.log("The video could not be loaded, either because the server or network failed or because the format is not supported.");B(false);return}else{Y="The video could not be loaded, either because the server or network failed or because the format is not supported: "}}else{f.log("An unknown error occurred.  Continuing...");return}}B(false);Y+=V();_error=true;u(b.api.events.JWPLAYER_ERROR,{message:Y});return}function V(){var Z="";for(var Y in W.levels){var X=W.levels[Y];var aa=D.ownerDocument.createElement("source");Z+=b.utils.getAbsolutePath(X.file);if(Y<(W.levels.length-1)){Z+=", "}}return Z}function C(){if(!f.exists(H)){H=setInterval(function(){G()},100)}}function t(){clearInterval(H);H=null}function R(){if(h==b.api.events.state.PLAYING){B(false);u(b.api.events.JWPLAYER_MEDIA_BEFORECOMPLETE);u(b.api.events.JWPLAYER_MEDIA_COMPLETE)}}function m(X){if(f.exists(o.webkitDisplayingFullscreen)){if(l.fullscreen&&!o.webkitDisplayingFullscreen){u(b.api.events.JWPLAYER_FULLSCREEN,{fullscreen:false},true)}}}function s(Z){if(Z.length>0&&f.userAgentMatch(/Safari/i)&&!f.userAgentMatch(/Chrome/i)){var X=-1;for(var Y=0;Y<Z.length;Y++){switch(f.extension(Z[Y].file)){case"mp4":if(X<0){X=Y}break;case"webm":Z.splice(Y,1);break}}if(X>0){var aa=Z.splice(X,1)[0];Z.unshift(aa)}}}function S(){setTimeout(function(){o.setAttribute("controls","controls")},100)}function x(){setTimeout(function(){o.removeAttribute("controls")},250)}function u(X,Z,Y){if(v||Y){if(Z){N.sendEvent(X,Z)}else{N.sendEvent(X)}}}}})(jwplayer);(function(a){var c={ended:a.api.events.state.IDLE,playing:a.api.events.state.PLAYING,pause:a.api.events.state.PAUSED,buffering:a.api.events.state.BUFFERING};var b=a.utils.css;a.html5.mediayoutube=function(j,e){var f=new a.html5.eventdispatcher();a.utils.extend(this,f);var l=j;var h=document.getElementById(e.id);var g=a.api.events.state.IDLE;var n,m;function k(p){if(g!=p){var q=g;l.state=p;g=p;f.sendEvent(a.api.events.JWPLAYER_PLAYER_STATE,{oldstate:q,newstate:p})}}this.getDisplayElement=this.detachMedia=function(){return h};this.attachMedia=function(){};this.play=function(){if(g==a.api.events.state.IDLE){f.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER,{bufferPercent:100});f.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER_FULL);k(a.api.events.state.PLAYING)}else{if(g==a.api.events.state.PAUSED){k(a.api.events.state.PLAYING)}}};this.pause=function(){k(a.api.events.state.PAUSED)};this.seek=function(p){};this.stop=function(p){if(!_utils.exists(p)){p=true}l.position=0;k(a.api.events.state.IDLE);if(p){b(h,{display:"none"})}};this.volume=function(p){l.setVolume(p);f.sendEvent(a.api.events.JWPLAYER_MEDIA_VOLUME,{volume:Math.round(p)})};this.mute=function(p){h.muted=p;f.sendEvent(a.api.events.JWPLAYER_MEDIA_MUTE,{mute:p})};this.resize=function(q,p){if(q*p>0&&n){n.width=m.width=q;n.height=m.height=p}};this.fullscreen=function(p){if(p===true){this.resize("100%","100%")}else{this.resize(l.config.width,l.config.height)}};this.load=function(p){o(p);b(n,{display:"block"});k(a.api.events.state.BUFFERING);f.sendEvent(a.api.events.JWPLAYER_MEDIA_BUFFER,{bufferPercent:0});f.sendEvent(a.api.events.JWPLAYER_MEDIA_LOADED);this.play()};this.hasChrome=function(){return(g!=a.api.events.state.IDLE)};function o(v){var s=v.levels[0].file;s=["http://www.youtube.com/v/",d(s),"&amp;hl=en_US&amp;fs=1&autoplay=1"].join("");n=document.createElement("object");n.id=h.id;n.style.position="absolute";var u={movie:s,allowfullscreen:"true",allowscriptaccess:"always"};for(var p in u){var t=document.createElement("param");t.name=p;t.value=u[p];n.appendChild(t)}m=document.createElement("embed");n.appendChild(m);var q={src:s,type:"application/x-shockwave-flash",allowfullscreen:"true",allowscriptaccess:"always",width:n.width,height:n.height};for(var r in q){m.setAttribute(r,q[r])}n.appendChild(m);n.style.zIndex=2147483000;if(h!=n&&h.parentNode){h.parentNode.replaceChild(n,h)}h=n}function d(q){var p=q.split(/\?|\#\!/);var s="";for(var r=0;r<p.length;r++){if(p[r].substr(0,2)=="v="){s=p[r].substr(2)}}if(s==""){if(q.indexOf("/v/")>=0){s=q.substr(q.indexOf("/v/")+3)}else{if(q.indexOf("youtu.be")>=0){s=q.substr(q.indexOf("youtu.be/")+9)}else{s=q}}}if(s.indexOf("?")>-1){s=s.substr(0,s.indexOf("?"))}if(s.indexOf("&")>-1){s=s.substr(0,s.indexOf("&"))}return s}this.embed=m;return this}})(jwplayer);(function(jwplayer){var _configurableStateVariables=["width","height","start","duration","volume","mute","fullscreen","item","plugins","stretching"];var _utils=jwplayer.utils;jwplayer.html5.model=function(api,container,options){var _api=api;var _container=container;var _cookies=_utils.getCookies();var _model={id:_container.id,playlist:[],state:jwplayer.api.events.state.IDLE,position:0,buffer:0,container:_container,config:{width:480,height:320,item:-1,skin:undefined,file:undefined,image:undefined,start:0,duration:0,bufferlength:5,volume:_cookies.volume?_cookies.volume:90,mute:_cookies.mute&&_cookies.mute.toString().toLowerCase()=="true"?true:false,fullscreen:false,repeat:"",stretching:jwplayer.utils.stretching.UNIFORM,autostart:false,debug:undefined,screencolor:undefined}};var _media;var _eventDispatcher=new jwplayer.html5.eventdispatcher();var _components=["display","logo","controlbar","playlist","dock"];jwplayer.utils.extend(_model,_eventDispatcher);for(var option in options){if(typeof options[option]=="string"){var type=/color$/.test(option)?"color":null;options[option]=jwplayer.utils.typechecker(options[option],type)}var config=_model.config;var path=option.split(".");for(var edge in path){if(edge==path.length-1){config[path[edge]]=options[option]}else{if(!jwplayer.utils.exists(config[path[edge]])){config[path[edge]]={}}config=config[path[edge]]}}}for(var index in _configurableStateVariables){var configurableStateVariable=_configurableStateVariables[index];_model[configurableStateVariable]=_model.config[configurableStateVariable]}var pluginorder=_components.concat([]);if(jwplayer.utils.exists(_model.plugins)){if(typeof _model.plugins=="string"){var userplugins=_model.plugins.split(",");for(var userplugin in userplugins){if(typeof userplugins[userplugin]=="string"){pluginorder.push(userplugins[userplugin].replace(/^\s+|\s+$/g,""))}}}}if(jwplayer.utils.isMobile()){pluginorder=["display","logo","dock","playlist"];if(!jwplayer.utils.exists(_model.config.repeat)){_model.config.repeat="list"}}else{if(_model.config.chromeless){pluginorder=["logo","dock","playlist"];if(!jwplayer.utils.exists(_model.config.repeat)){_model.config.repeat="list"}}}_model.plugins={order:pluginorder,config:{},object:{}};if(typeof _model.config.components!="undefined"){for(var component in _model.config.components){_model.plugins.config[component]=_model.config.components[component]}}var playlistVisible=false;for(var pluginIndex in _model.plugins.order){var pluginName=_model.plugins.order[pluginIndex];var pluginConfig=!jwplayer.utils.exists(_model.plugins.config[pluginName])?{}:_model.plugins.config[pluginName];_model.plugins.config[pluginName]=!jwplayer.utils.exists(_model.plugins.config[pluginName])?pluginConfig:jwplayer.utils.extend(_model.plugins.config[pluginName],pluginConfig);if(!jwplayer.utils.exists(_model.plugins.config[pluginName].position)){if(pluginName=="playlist"){_model.plugins.config[pluginName].position=jwplayer.html5.view.positions.NONE}else{_model.plugins.config[pluginName].position=jwplayer.html5.view.positions.OVER}}else{if(pluginName=="playlist"){playlistVisible=true}_model.plugins.config[pluginName].position=_model.plugins.config[pluginName].position.toString().toUpperCase()}}if(_model.plugins.config.controlbar&&playlistVisible){_model.plugins.config.controlbar.hideplaylistcontrols=true}if(typeof _model.plugins.config.dock!="undefined"){if(typeof _model.plugins.config.dock!="object"){var position=_model.plugins.config.dock.toString().toUpperCase();_model.plugins.config.dock={position:position}}if(typeof _model.plugins.config.dock.position!="undefined"){_model.plugins.config.dock.align=_model.plugins.config.dock.position;_model.plugins.config.dock.position=jwplayer.html5.view.positions.OVER}if(typeof _model.plugins.config.dock.idlehide=="undefined"){try{_model.plugins.config.dock.idlehide=_model.plugins.config.controlbar.idlehide}catch(e){}}}function _loadExternal(playlistfile){var loader=new jwplayer.html5.playlistloader();loader.addEventListener(jwplayer.api.events.JWPLAYER_PLAYLIST_LOADED,function(evt){_model.playlist=new jwplayer.html5.playlist(evt);_loadComplete(true)});loader.addEventListener(jwplayer.api.events.JWPLAYER_ERROR,function(evt){_model.playlist=new jwplayer.html5.playlist({playlist:[]});_loadComplete(false)});loader.load(playlistfile)}function _loadComplete(){if(_model.config.shuffle){_model.item=_getShuffleItem()}else{if(_model.config.item>=_model.playlist.length){_model.config.item=_model.playlist.length-1}else{if(_model.config.item<0){_model.config.item=0}}_model.item=_model.config.item}_model.position=0;_model.duration=_model.playlist.length>0?_model.playlist[_model.item].duration:0;_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_PLAYLIST_LOADED,{playlist:_model.playlist});_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_PLAYLIST_ITEM,{index:_model.item})}_model.loadPlaylist=function(arg){var input;if(typeof arg=="string"){if(arg.indexOf("[")==0||arg.indexOf("{")=="0"){try{input=eval(arg)}catch(err){input=arg}}else{input=arg}}else{input=arg}var config;switch(jwplayer.utils.typeOf(input)){case"object":config=input;break;case"array":config={playlist:input};break;default:config={file:input};break}_model.playlist=new jwplayer.html5.playlist(config);_model.item=_model.config.item>=0?_model.config.item:0;if(!_model.playlist[0].provider&&_model.playlist[0].file){_loadExternal(_model.playlist[0].file)}else{_loadComplete()}};function _getShuffleItem(){var result=null;if(_model.playlist.length>1){while(!jwplayer.utils.exists(result)){result=Math.floor(Math.random()*_model.playlist.length);if(result==_model.item){result=null}}}else{result=0}return result}function forward(evt){switch(evt.type){case jwplayer.api.events.JWPLAYER_MEDIA_LOADED:_container=_media.getDisplayElement();break;case jwplayer.api.events.JWPLAYER_MEDIA_MUTE:this.mute=evt.mute;break;case jwplayer.api.events.JWPLAYER_MEDIA_VOLUME:this.volume=evt.volume;break}_eventDispatcher.sendEvent(evt.type,evt)}var _mediaProviders={};_model.setActiveMediaProvider=function(playlistItem){if(playlistItem.provider=="audio"){playlistItem.provider="sound"}var provider=playlistItem.provider;var current=_media?_media.getDisplayElement():null;if(provider=="sound"||provider=="http"||provider==""){provider="video"}if(!jwplayer.utils.exists(_mediaProviders[provider])){switch(provider){case"video":_media=new jwplayer.html5.mediavideo(_model,current?current:_container);break;case"youtube":_media=new jwplayer.html5.mediayoutube(_model,current?current:_container);break}if(!jwplayer.utils.exists(_media)){return false}_media.addGlobalListener(forward);_mediaProviders[provider]=_media}else{if(_media!=_mediaProviders[provider]){if(_media){_media.stop()}_media=_mediaProviders[provider]}}return true};_model.getMedia=function(){return _media};_model.seek=function(pos){_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_MEDIA_SEEK,{position:_model.position,offset:pos});return _media.seek(pos)};_model.setVolume=function(newVol){_utils.saveCookie("volume",newVol);_model.volume=newVol};_model.setMute=function(state){_utils.saveCookie("mute",state);_model.mute=state};_model.setupPlugins=function(){if(!jwplayer.utils.exists(_model.plugins)||!jwplayer.utils.exists(_model.plugins.order)||_model.plugins.order.length==0){jwplayer.utils.log("No plugins to set up");return _model}for(var i=0;i<_model.plugins.order.length;i++){try{var pluginName=_model.plugins.order[i];if(jwplayer.utils.exists(jwplayer.html5[pluginName])){if(pluginName=="playlist"){_model.plugins.object[pluginName]=new jwplayer.html5.playlistcomponent(_api,_model.plugins.config[pluginName])}else{_model.plugins.object[pluginName]=new jwplayer.html5[pluginName](_api,_model.plugins.config[pluginName])}}else{_model.plugins.order.splice(plugin,plugin+1)}if(typeof _model.plugins.object[pluginName].addGlobalListener=="function"){_model.plugins.object[pluginName].addGlobalListener(forward)}}catch(err){jwplayer.utils.log("Could not setup "+pluginName)}}};return _model}})(jwplayer);(function(a){a.html5.playlist=function(b){var d=[];if(b.playlist&&b.playlist instanceof Array&&b.playlist.length>0){for(var c in b.playlist){if(!isNaN(parseInt(c))){d.push(new a.html5.playlistitem(b.playlist[c]))}}}else{d.push(new a.html5.playlistitem(b))}return d}})(jwplayer);(function(a){var c={size:180,position:a.html5.view.positions.NONE,itemheight:60,thumbs:true,fontcolor:"#000000",overcolor:"",activecolor:"",backgroundcolor:"#f8f8f8",font:"_sans",fontsize:"",fontstyle:"",fontweight:""};var b={_sans:"Arial, Helvetica, sans-serif",_serif:"Times, Times New Roman, serif",_typewriter:"Courier New, Courier, monospace"};_utils=a.utils;_css=_utils.css;_hide=function(d){_css(d,{display:"none"})};_show=function(d){_css(d,{display:"block"})};a.html5.playlistcomponent=function(r,C){var x=r;var e=a.utils.extend({},c,x.skin.getComponentSettings("playlist"),C);if(e.position==a.html5.view.positions.NONE||typeof a.html5.view.positions[e.position]=="undefined"){return}var y;var l;var D;var d;var g;var f;var k=-1;var h={background:undefined,item:undefined,itemOver:undefined,itemImage:undefined,itemActive:undefined};this.getDisplayElement=function(){return y};this.resize=function(G,E){l=G;D=E;if(x.jwGetFullscreen()){_hide(y)}else{var F={display:"block",width:l,height:D};_css(y,F)}};this.show=function(){_show(y)};this.hide=function(){_hide(y)};function j(){y=document.createElement("div");y.id=x.id+"_jwplayer_playlistcomponent";y.style.overflow="hidden";switch(e.position){case a.html5.view.positions.RIGHT:case a.html5.view.positions.LEFT:y.style.width=e.size+"px";break;case a.html5.view.positions.TOP:case a.html5.view.positions.BOTTOM:y.style.height=e.size+"px";break}B();if(h.item){e.itemheight=h.item.height}y.style.backgroundColor="#C6C6C6";x.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED,s);x.jwAddEventListener(a.api.events.JWPLAYER_PLAYLIST_ITEM,v);x.jwAddEventListener(a.api.events.JWPLAYER_PLAYER_STATE,m)}function p(){var E=document.createElement("ul");_css(E,{width:y.style.width,minWidth:y.style.width,height:y.style.height,backgroundColor:e.backgroundcolor,backgroundImage:h.background?"url("+h.background.src+")":"",color:e.fontcolor,listStyle:"none",margin:0,padding:0,fontFamily:b[e.font]?b[e.font]:b._sans,fontSize:(e.fontsize?e.fontsize:11)+"px",fontStyle:e.fontstyle,fontWeight:e.fontweight,overflowY:"auto"});return E}function z(E){return function(){var F=f.getElementsByClassName("item")[E];var G=e.fontcolor;var H=h.item?"url("+h.item.src+")":"";if(E==x.jwGetPlaylistIndex()){if(e.activecolor!==""){G=e.activecolor}if(h.itemActive){H="url("+h.itemActive.src+")"}}_css(F,{color:e.overcolor!==""?e.overcolor:G,backgroundImage:h.itemOver?"url("+h.itemOver.src+")":H})}}function o(E){return function(){var F=f.getElementsByClassName("item")[E];var G=e.fontcolor;var H=h.item?"url("+h.item.src+")":"";if(E==x.jwGetPlaylistIndex()){if(e.activecolor!==""){G=e.activecolor}if(h.itemActive){H="url("+h.itemActive.src+")"}}_css(F,{color:G,backgroundImage:H})}}function q(J){var Q=d[J];var P=document.createElement("li");P.className="item";_css(P,{height:e.itemheight,display:"block",cursor:"pointer",backgroundImage:h.item?"url("+h.item.src+")":"",backgroundSize:"100% "+e.itemheight+"px"});P.onmouseover=z(J);P.onmouseout=o(J);var K=document.createElement("div");var G=new Image();var L=0;var M=0;var N=0;if(w()&&(Q.image||Q["playlist.image"]||h.itemImage)){G.className="image";if(h.itemImage){L=(e.itemheight-h.itemImage.height)/2;M=h.itemImage.width;N=h.itemImage.height}else{M=e.itemheight*4/3;N=e.itemheight}_css(K,{height:N,width:M,"float":"left",styleFloat:"left",cssFloat:"left",margin:"0 5px 0 0",background:"black",overflow:"hidden",margin:L+"px",position:"relative"});_css(G,{position:"relative"});K.appendChild(G);G.onload=function(){a.utils.stretch(a.utils.stretching.FILL,G,M,N,this.naturalWidth,this.naturalHeight)};if(Q["playlist.image"]){G.src=Q["playlist.image"]}else{if(Q.image){G.src=Q.image}else{if(h.itemImage){G.src=h.itemImage.src}}}P.appendChild(K)}var F=l-M-L*2;if(D<e.itemheight*d.length){F-=15}var E=document.createElement("div");_css(E,{position:"relative",height:"100%",overflow:"hidden"});var H=document.createElement("span");if(Q.duration>0){H.className="duration";_css(H,{fontSize:(e.fontsize?e.fontsize:11)+"px",fontWeight:(e.fontweight?e.fontweight:"bold"),width:"40px",height:e.fontsize?e.fontsize+10:20,lineHeight:24,"float":"right",styleFloat:"right",cssFloat:"right"});H.innerHTML=_utils.timeFormat(Q.duration);E.appendChild(H)}var O=document.createElement("span");O.className="title";_css(O,{padding:"5px 5px 0 "+(L?0:"5px"),height:e.fontsize?e.fontsize+10:20,lineHeight:e.fontsize?e.fontsize+10:20,overflow:"hidden","float":"left",styleFloat:"left",cssFloat:"left",width:((Q.duration>0)?F-50:F)-10+"px",fontSize:(e.fontsize?e.fontsize:13)+"px",fontWeight:(e.fontweight?e.fontweight:"bold")});O.innerHTML=Q?Q.title:"";E.appendChild(O);if(Q.description){var I=document.createElement("span");I.className="description";_css(I,{display:"block","float":"left",styleFloat:"left",cssFloat:"left",margin:0,paddingLeft:O.style.paddingLeft,paddingRight:O.style.paddingRight,lineHeight:(e.fontsize?e.fontsize+4:16)+"px",overflow:"hidden",position:"relative"});I.innerHTML=Q.description;E.appendChild(I)}P.appendChild(E);return P}function s(F){y.innerHTML="";d=t();if(!d){return}items=[];f=p();for(var G=0;G<d.length;G++){var E=q(G);E.onclick=A(G);f.appendChild(E);items.push(E)}k=x.jwGetPlaylistIndex();o(k)();y.appendChild(f);if(_utils.isIOS()&&window.iScroll){f.style.height=e.itemheight*d.length+"px";var H=new iScroll(y.id)}}function t(){var F=x.jwGetPlaylist();var G=[];for(var E=0;E<F.length;E++){if(!F[E]["ova.hidden"]){G.push(F[E])}}return G}function A(E){return function(){x.jwPlaylistItem(E);x.jwPlay(true)}}function n(){f.scrollTop=x.jwGetPlaylistIndex()*e.itemheight}function w(){return e.thumbs.toString().toLowerCase()=="true"}function v(E){if(k>=0){o(k)();k=E.index}o(E.index)();n()}function m(){if(e.position==a.html5.view.positions.OVER){switch(x.jwGetState()){case a.api.events.state.IDLE:_show(y);break;default:_hide(y);break}}}function B(){for(var E in h){h[E]=u(E)}}function u(E){return x.skin.getSkinElement("playlist",E)}j();return this}})(jwplayer);(function(b){b.html5.playlistitem=function(d){var e={author:"",date:"",description:"",image:"",link:"",mediaid:"",tags:"",title:"",provider:"",file:"",streamer:"",duration:-1,start:0,currentLevel:-1,levels:[]};var c=b.utils.extend({},e,d);if(c.type){c.provider=c.type;delete c.type}if(c.levels.length===0){c.levels[0]=new b.html5.playlistitemlevel(c)}if(!c.provider){c.provider=a(c.levels[0])}else{c.provider=c.provider.toLowerCase()}return c};function a(e){if(b.utils.isYouTube(e.file)){return"youtube"}else{var f=b.utils.extension(e.file);var c;if(f&&b.utils.extensionmap[f]){if(f=="m3u8"){return"video"}c=b.utils.extensionmap[f].html5}else{if(e.type){c=e.type}}if(c){var d=c.split("/")[0];if(d=="audio"){return"sound"}else{if(d=="video"){return d}}}}return""}})(jwplayer);(function(a){a.html5.playlistitemlevel=function(b){var d={file:"",streamer:"",bitrate:0,width:0};for(var c in d){if(a.utils.exists(b[c])){d[c]=b[c]}}return d}})(jwplayer);(function(a){a.html5.playlistloader=function(){var c=new a.html5.eventdispatcher();a.utils.extend(this,c);this.load=function(e){a.utils.ajax(e,d,b)};function d(g){var f=[];try{var f=a.utils.parsers.rssparser.parse(g.responseXML.firstChild);c.sendEvent(a.api.events.JWPLAYER_PLAYLIST_LOADED,{playlist:new a.html5.playlist({playlist:f})})}catch(h){b("Could not parse the playlist")}}function b(e){c.sendEvent(a.api.events.JWPLAYER_ERROR,{message:e?e:"Could not load playlist an unknown reason."})}}})(jwplayer);(function(a){a.html5.skin=function(){var b={};var c=false;this.load=function(d,e){new a.html5.skinloader(d,function(f){c=true;b=f;e()},function(){new a.html5.skinloader("",function(f){c=true;b=f;e()})})};this.getSkinElement=function(d,e){if(c){try{return b[d].elements[e]}catch(f){a.utils.log("No such skin component / element: ",[d,e])}}return null};this.getComponentSettings=function(d){if(c&&b&&b[d]){return b[d].settings}return null};this.getComponentLayout=function(d){if(c){return b[d].layout}return null}}})(jwplayer);(function(a){a.html5.skinloader=function(f,p,k){var o={};var c=p;var l=k;var e=true;var j;var n=f;var s=false;function m(){if(typeof n!="string"||n===""){d(a.html5.defaultSkin().xml)}else{a.utils.ajax(a.utils.getAbsolutePath(n),function(t){try{if(a.utils.exists(t.responseXML)){d(t.responseXML);return}}catch(u){h()}d(a.html5.defaultSkin().xml)},function(t){d(a.html5.defaultSkin().xml)})}}function d(y){var E=y.getElementsByTagName("component");if(E.length===0){return}for(var H=0;H<E.length;H++){var C=E[H].getAttribute("name");var B={settings:{},elements:{},layout:{}};o[C]=B;var G=E[H].getElementsByTagName("elements")[0].getElementsByTagName("element");for(var F=0;F<G.length;F++){b(G[F],C)}var z=E[H].getElementsByTagName("settings")[0];if(z&&z.childNodes.length>0){var K=z.getElementsByTagName("setting");for(var P=0;P<K.length;P++){var Q=K[P].getAttribute("name");var I=K[P].getAttribute("value");var x=/color$/.test(Q)?"color":null;o[C].settings[Q]=a.utils.typechecker(I,x)}}var L=E[H].getElementsByTagName("layout")[0];if(L&&L.childNodes.length>0){var M=L.getElementsByTagName("group");for(var w=0;w<M.length;w++){var A=M[w];o[C].layout[A.getAttribute("position")]={elements:[]};for(var O=0;O<A.attributes.length;O++){var D=A.attributes[O];o[C].layout[A.getAttribute("position")][D.name]=D.value}var N=A.getElementsByTagName("*");for(var v=0;v<N.length;v++){var t=N[v];o[C].layout[A.getAttribute("position")].elements.push({type:t.tagName});for(var u=0;u<t.attributes.length;u++){var J=t.attributes[u];o[C].layout[A.getAttribute("position")].elements[v][J.name]=J.value}if(!a.utils.exists(o[C].layout[A.getAttribute("position")].elements[v].name)){o[C].layout[A.getAttribute("position")].elements[v].name=t.tagName}}}}e=false;r()}}function r(){clearInterval(j);if(!s){j=setInterval(function(){q()},100)}}function b(y,x){var w=new Image();var t=y.getAttribute("name");var v=y.getAttribute("src");var A;if(v.indexOf("data:image/png;base64,")===0){A=v}else{var u=a.utils.getAbsolutePath(n);var z=u.substr(0,u.lastIndexOf("/"));A=[z,x,v].join("/")}o[x].elements[t]={height:0,width:0,src:"",ready:false,image:w};w.onload=function(B){g(w,t,x)};w.onerror=function(B){s=true;r();l()};w.src=A}function h(){for(var u in o){var w=o[u];for(var t in w.elements){var x=w.elements[t];var v=x.image;v.onload=null;v.onerror=null;delete x.image;delete w.elements[t]}delete o[u]}}function q(){for(var t in o){if(t!="properties"){for(var u in o[t].elements){if(!o[t].elements[u].ready){return}}}}if(e===false){clearInterval(j);c(o)}}function g(t,v,u){if(o[u]&&o[u].elements[v]){o[u].elements[v].height=t.height;o[u].elements[v].width=t.width;o[u].elements[v].src=t.src;o[u].elements[v].ready=true;r()}else{a.utils.log("Loaded an image for a missing element: "+u+"."+v)}}m()}})(jwplayer);(function(a){a.html5.api=function(c,p){var n={};var g=document.createElement("div");c.parentNode.replaceChild(g,c);g.id=c.id;n.version=a.version;n.id=g.id;var m=new a.html5.model(n,g,p);var k=new a.html5.view(n,g,m);var l=new a.html5.controller(n,g,m,k);n.skin=new a.html5.skin();n.jwPlay=function(q){if(typeof q=="undefined"){f()}else{if(q.toString().toLowerCase()=="true"){l.play()}else{l.pause()}}};n.jwPause=function(q){if(typeof q=="undefined"){f()}else{if(q.toString().toLowerCase()=="true"){l.pause()}else{l.play()}}};function f(){if(m.state==a.api.events.state.PLAYING||m.state==a.api.events.state.BUFFERING){l.pause()}else{l.play()}}n.jwStop=l.stop;n.jwSeek=l.seek;n.jwPlaylistItem=function(q){if(d){if(d.playlistClickable()){d.jwInstreamDestroy();return l.item(q)}}else{return l.item(q)}};n.jwPlaylistNext=l.next;n.jwPlaylistPrev=l.prev;n.jwResize=l.resize;n.jwLoad=l.load;n.jwDetachMedia=l.detachMedia;n.jwAttachMedia=l.attachMedia;function j(q){return function(){return m[q]}}function e(q,s,r){return function(){var t=m.plugins.object[q];if(t&&t[s]&&typeof t[s]=="function"){t[s].apply(t,r)}}}n.jwGetPlaylistIndex=j("item");n.jwGetPosition=j("position");n.jwGetDuration=j("duration");n.jwGetBuffer=j("buffer");n.jwGetWidth=j("width");n.jwGetHeight=j("height");n.jwGetFullscreen=j("fullscreen");n.jwSetFullscreen=l.setFullscreen;n.jwGetVolume=j("volume");n.jwSetVolume=l.setVolume;n.jwGetMute=j("mute");n.jwSetMute=l.setMute;n.jwGetStretching=function(){return m.stretching.toUpperCase()};n.jwGetState=j("state");n.jwGetVersion=function(){return n.version};n.jwGetPlaylist=function(){return m.playlist};n.jwAddEventListener=l.addEventListener;n.jwRemoveEventListener=l.removeEventListener;n.jwSendEvent=l.sendEvent;n.jwDockSetButton=function(t,q,r,s){if(m.plugins.object.dock&&m.plugins.object.dock.setButton){m.plugins.object.dock.setButton(t,q,r,s)}};n.jwControlbarShow=e("controlbar","show");n.jwControlbarHide=e("controlbar","hide");n.jwDockShow=e("dock","show");n.jwDockHide=e("dock","hide");n.jwDisplayShow=e("display","show");n.jwDisplayHide=e("display","hide");var d;n.jwLoadInstream=function(r,q){if(!d){d=new a.html5.instream(n,m,k,l)}setTimeout(function(){d.load(r,q)},10)};n.jwInstreamDestroy=function(){if(d){d.jwInstreamDestroy()}};n.jwInstreamAddEventListener=o("jwInstreamAddEventListener");n.jwInstreamRemoveEventListener=o("jwInstreamRemoveEventListener");n.jwInstreamGetState=o("jwInstreamGetState");n.jwInstreamGetDuration=o("jwInstreamGetDuration");n.jwInstreamGetPosition=o("jwInstreamGetPosition");n.jwInstreamPlay=o("jwInstreamPlay");n.jwInstreamPause=o("jwInstreamPause");n.jwInstreamSeek=o("jwInstreamSeek");function o(q){return function(){if(d&&typeof d[q]=="function"){return d[q].apply(this,arguments)}else{_utils.log("Could not call instream method - instream API not initialized")}}}n.jwDestroy=function(){l.destroy()};n.jwGetLevel=function(){};n.jwGetBandwidth=function(){};n.jwGetLockState=function(){};n.jwLock=function(){};n.jwUnlock=function(){};function b(){if(m.config.playlistfile){m.addEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED,h);m.loadPlaylist(m.config.playlistfile)}else{if(typeof m.config.playlist=="string"){m.addEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED,h);m.loadPlaylist(m.config.playlist)}else{m.loadPlaylist(m.config);setTimeout(h,25)}}}function h(q){m.removeEventListener(a.api.events.JWPLAYER_PLAYLIST_LOADED,h);m.setupPlugins();k.setup();var q={id:n.id,version:n.version};l.playerReady(q)}if(m.config.chromeless&&!a.utils.isIOS()){b()}else{n.skin.load(m.config.skin,b)}return n}})(jwplayer)};
/*! * tabs/tabs.js * jQuery Tools v1.2.6 - The missing UI library for the Web * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE. *  * http://flowplayer.org/tools/ *  */
(function (a) { a.tools = a.tools || { version: "v1.2.6" }, a.tools.tabs = { conf: { tabs: "a", current: "current", onBeforeClick: null, onClick: null, effect: "default", initialIndex: 0, event: "click", rotate: !1, slideUpSpeed: 400, slideDownSpeed: 400, history: !1 }, addEffect: function (a, c) { b[a] = c } }; var b = { "default": function (a, b) { this.getPanes().hide().eq(a).show(), b.call() }, fade: function (a, b) { var c = this.getConf(), d = c.fadeOutSpeed, e = this.getPanes(); d ? e.fadeOut(d) : e.hide(), e.eq(a).fadeIn(c.fadeInSpeed, b) }, slide: function (a, b) { var c = this.getConf(); this.getPanes().slideUp(c.slideUpSpeed), this.getPanes().eq(a).slideDown(c.slideDownSpeed, b) }, ajax: function (a, b) { this.getPanes().eq(0).load(this.getTabs().eq(a).attr("href"), b) } }, c, d; a.tools.tabs.addEffect("horizontal", function (b, e) { if (!c) { var f = this.getPanes().eq(b), g = this.getCurrentPane(); d || (d = this.getPanes().eq(0).width()), c = !0, f.show(), g.animate({ width: 0 }, { step: function (a) { f.css("width", d - a) }, complete: function () { a(this).hide(), e.call(), c = !1 } }), g.length || (e.call(), c = !1) } }); function e(c, d, e) { var f = this, g = c.add(this), h = c.find(e.tabs), i = d.jquery ? d : c.children(d), j; h.length || (h = c.children()), i.length || (i = c.parent().find(d)), i.length || (i = a(d)), a.extend(this, { click: function (c, d) { var i = h.eq(c); typeof c == "string" && c.replace("#", "") && (i = h.filter("[href*=" + c.replace("#", "") + "]"), c = Math.max(h.index(i), 0)); if (e.rotate) { var k = h.length - 1; if (c < 0) return f.click(k, d); if (c > k) return f.click(0, d) } if (!i.length) { if (j >= 0) return f; c = e.initialIndex, i = h.eq(c) } if (c === j) return f; d = d || a.Event(), d.type = "onBeforeClick", g.trigger(d, [c]); if (!d.isDefaultPrevented()) { b[e.effect].call(f, c, function () { j = c, d.type = "onClick", g.trigger(d, [c]) }), h.removeClass(e.current), i.addClass(e.current); return f } }, getConf: function () { return e }, getTabs: function () { return h }, getPanes: function () { return i }, getCurrentPane: function () { return i.eq(j) }, getCurrentTab: function () { return h.eq(j) }, getIndex: function () { return j }, next: function () { return f.click(j + 1) }, prev: function () { return f.click(j - 1) }, destroy: function () { h.unbind(e.event).removeClass(e.current), i.find("a[href^=#]").unbind("click.T"); return f } }), a.each("onBeforeClick,onClick".split(","), function (b, c) { a.isFunction(e[c]) && a(f).bind(c, e[c]), f[c] = function (b) { b && a(f).bind(c, b); return f } }), e.history && a.fn.history && (a.tools.history.init(h), e.event = "history"), h.each(function (b) { a(this).bind(e.event, function (a) { f.click(b, a); return a.preventDefault() }) }), i.find("a[href^=#]").bind("click.T", function (b) { f.click(a(this).attr("href"), b) }), location.hash && e.tabs == "a" && c.find("[href=" + location.hash + "]").length ? f.click(location.hash) : (e.initialIndex === 0 || e.initialIndex > 0) && f.click(e.initialIndex) } a.fn.tabs = function (b, c) { var d = this.data("tabs"); d && (d.destroy(), this.removeData("tabs")), a.isFunction(c) && (c = { onBeforeClick: c }), c = a.extend({}, a.tools.tabs.conf, c), this.each(function () { d = new e(a(this), b, c), a(this).data("tabs", d) }); return c.api ? d : this } })(jQuery);
/*!	jQuery ColorBox v1.4.1 - 2013-02-14	(c) 2013 Jack Moore - jacklmoore.com/colorbox	license: http://www.opensource.org/licenses/mit-license.php*/
(function(e,t,i){function o(i,o,n){var r=t.createElement(i);return o&&(r.id=Y+o),n&&(r.style.cssText=n),e(r)}function n(e){var t=T.length,i=(A+e)%t;return 0>i?t+i:i}function r(e,t){return Math.round((/%/.test(e)?("x"===t?k.width():k.height())/100:1)*parseInt(e,10))}function h(e){return K.photo||K.photoRegex.test(e)}function l(e){return K.retinaUrl&&i.devicePixelRatio>1?e.replace(K.photoRegex,K.retinaSuffix):e}function s(t){e.contains(w[0],t.target)||w[0]===t.target||(t.stopPropagation(),w.focus())}function a(){var t,i=e.data(N,V);null==i?(K=e.extend({},J),console&&console.log&&console.log("Error: cboxElement missing settings object")):K=e.extend({},i);for(t in K)e.isFunction(K[t])&&"on"!==t.slice(0,2)&&(K[t]=K[t].call(N));K.rel=K.rel||N.rel||e(N).data("rel")||"nofollow",K.href=K.href||e(N).attr("href"),K.title=K.title||N.title,"string"==typeof K.href&&(K.href=e.trim(K.href))}function d(i,o){e(t).trigger(i),at.trigger(i),e.isFunction(o)&&o.call(N)}function c(){var e,t,i,o,n,r=Y+"Slideshow_",h="click."+Y;K.slideshow&&T[1]?(t=function(){clearTimeout(e)},i=function(){(K.loop||T[A+1])&&(e=setTimeout(G.next,K.slideshowSpeed))},o=function(){M.html(K.slideshowStop).unbind(h).one(h,n),at.bind(it,i).bind(tt,t).bind(ot,n),w.removeClass(r+"off").addClass(r+"on")},n=function(){t(),at.unbind(it,i).unbind(tt,t).unbind(ot,n),M.html(K.slideshowStart).unbind(h).one(h,function(){G.next(),o()}),w.removeClass(r+"on").addClass(r+"off")},K.slideshowAuto?o():n()):w.removeClass(r+"off "+r+"on")}function u(i){U||(N=i,a(),T=e(N),A=0,"nofollow"!==K.rel&&(T=e("."+Z).filter(function(){var t,i=e.data(this,V);return i&&(t=e(this).data("rel")||i.rel||this.rel),t===K.rel}),A=T.index(N),-1===A&&(T=T.add(N),A=T.length-1)),m.css({opacity:parseFloat(K.opacity),cursor:K.overlayClose?"pointer":"auto",visibility:"visible"}).show(),j||(j=q=!0,w.css({visibility:"hidden",display:"block"}),E=o(dt,"LoadedContent","width:0; height:0; overflow:hidden").appendTo(v),_=x.height()+C.height()+v.outerHeight(!0)-v.height(),z=y.width()+b.width()+v.outerWidth(!0)-v.width(),D=E.outerHeight(!0),B=E.outerWidth(!0),K.w=r(K.initialWidth,"x"),K.h=r(K.initialHeight,"y"),G.position(),lt&&k.bind("resize."+st+" scroll."+st,function(){m.css({width:k.width(),height:k.height(),top:k.scrollTop(),left:k.scrollLeft()})}).trigger("resize."+st),c(),d(et,K.onOpen),P.add(W).hide(),R.html(K.close).show(),w.focus(),t.addEventListener&&(t.addEventListener("focus",s,!0),at.one(nt,function(){t.removeEventListener("focus",s,!0)})),K.returnFocus&&at.one(nt,function(){e(N).focus()})),G.load(!0))}function f(){!w&&t.body&&(X=!1,k=e(i),w=o(dt).attr({id:V,"class":ht?Y+(lt?"IE6":"IE"):"",role:"dialog",tabindex:"-1"}).hide(),m=o(dt,"Overlay",lt?"position:absolute":"").hide(),L=o(dt,"LoadingOverlay").add(o(dt,"LoadingGraphic")),g=o(dt,"Wrapper"),v=o(dt,"Content").append(W=o(dt,"Title"),H=o(dt,"Current"),F=o("button","Previous"),S=o("button","Next"),M=o("button","Slideshow"),L,R=o("button","Close")),g.append(o(dt).append(o(dt,"TopLeft"),x=o(dt,"TopCenter"),o(dt,"TopRight")),o(dt,!1,"clear:left").append(y=o(dt,"MiddleLeft"),v,b=o(dt,"MiddleRight")),o(dt,!1,"clear:left").append(o(dt,"BottomLeft"),C=o(dt,"BottomCenter"),o(dt,"BottomRight"))).find("div div").css({"float":"left"}),I=o(dt,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),P=S.add(F).add(H).add(M),e(t.body).append(m,w.append(g,I)))}function p(){function i(e){e.which>1||e.shiftKey||e.altKey||e.metaKey||(e.preventDefault(),u(this))}return w?(X||(X=!0,S.click(function(){G.next()}),F.click(function(){G.prev()}),R.click(function(){G.close()}),m.click(function(){K.overlayClose&&G.close()}),e(t).bind("keydown."+Y,function(e){var t=e.keyCode;j&&K.escKey&&27===t&&(e.preventDefault(),G.close()),j&&K.arrowKey&&T[1]&&!e.altKey&&(37===t?(e.preventDefault(),F.click()):39===t&&(e.preventDefault(),S.click()))}),e.isFunction(e.fn.on)?e(t).on("click."+Y,"."+Z,i):e("."+Z).live("click."+Y,i)),!0):!1}var m,w,g,v,x,y,b,C,T,k,E,I,L,W,H,M,S,F,R,P,K,_,z,D,B,N,A,O,j,q,U,$,G,Q,X,J={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,className:!1,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico)((#|\?).*)?$/i,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0},V="colorbox",Y="cbox",Z=Y+"Element",et=Y+"_open",tt=Y+"_load",it=Y+"_complete",ot=Y+"_cleanup",nt=Y+"_closed",rt=Y+"_purge",ht=!e.support.leadingWhitespace,lt=ht&&!i.XMLHttpRequest,st=Y+"_IE6",at=e({}),dt="div";e.colorbox||(e(f),G=e.fn[V]=e[V]=function(t,i){var o=this;if(t=t||{},f(),p()){if(e.isFunction(o))o=e("<a/>"),t.open=!0;else if(!o[0])return o;i&&(t.onComplete=i),o.each(function(){e.data(this,V,e.extend({},e.data(this,V)||J,t))}).addClass(Z),(e.isFunction(t.open)&&t.open.call(o)||t.open)&&u(o[0])}return o},G.position=function(e,t){function i(e){x[0].style.width=C[0].style.width=v[0].style.width=parseInt(e.style.width,10)-z+"px",v[0].style.height=y[0].style.height=b[0].style.height=parseInt(e.style.height,10)-_+"px"}var o,n,h,l=0,s=0,a=w.offset();k.unbind("resize."+Y),w.css({top:-9e4,left:-9e4}),n=k.scrollTop(),h=k.scrollLeft(),K.fixed&&!lt?(a.top-=n,a.left-=h,w.css({position:"fixed"})):(l=n,s=h,w.css({position:"absolute"})),s+=K.right!==!1?Math.max(k.width()-K.w-B-z-r(K.right,"x"),0):K.left!==!1?r(K.left,"x"):Math.round(Math.max(k.width()-K.w-B-z,0)/2),l+=K.bottom!==!1?Math.max(k.height()-K.h-D-_-r(K.bottom,"y"),0):K.top!==!1?r(K.top,"y"):Math.round(Math.max(k.height()-K.h-D-_,0)/2),w.css({top:a.top,left:a.left,visibility:"visible"}),e=w.width()===K.w+B&&w.height()===K.h+D?0:e||0,g[0].style.width=g[0].style.height="9999px",o={width:K.w+B+z,height:K.h+D+_,top:l,left:s},0===e&&w.css(o),w.dequeue().animate(o,{duration:e,complete:function(){i(this),q=!1,g[0].style.width=K.w+B+z+"px",g[0].style.height=K.h+D+_+"px",K.reposition&&setTimeout(function(){k.bind("resize."+Y,G.position)},1),t&&t()},step:function(){i(this)}})},G.resize=function(e){j&&(e=e||{},e.width&&(K.w=r(e.width,"x")-B-z),e.innerWidth&&(K.w=r(e.innerWidth,"x")),E.css({width:K.w}),e.height&&(K.h=r(e.height,"y")-D-_),e.innerHeight&&(K.h=r(e.innerHeight,"y")),e.innerHeight||e.height||(E.css({height:"auto"}),K.h=E.height()),E.css({height:K.h}),G.position("none"===K.transition?0:K.speed))},G.prep=function(t){function i(){return K.w=K.w||E.width(),K.w=K.mw&&K.mw<K.w?K.mw:K.w,K.w}function r(){return K.h=K.h||E.height(),K.h=K.mh&&K.mh<K.h?K.mh:K.h,K.h}if(j){var l,s="none"===K.transition?0:K.speed;E.empty().remove(),E=o(dt,"LoadedContent").append(t),E.hide().appendTo(I.show()).css({width:i(),overflow:K.scrolling?"auto":"hidden"}).css({height:r()}).prependTo(v),I.hide(),e(O).css({"float":"none"}),l=function(){function t(){ht&&w[0].style.removeAttribute("filter")}var i,r,l=T.length,a="frameBorder",c="allowTransparency";j&&(r=function(){clearTimeout($),L.hide(),d(it,K.onComplete)},ht&&O&&E.fadeIn(100),W.html(K.title).add(E).show(),l>1?("string"==typeof K.current&&H.html(K.current.replace("{current}",A+1).replace("{total}",l)).show(),S[K.loop||l-1>A?"show":"hide"]().html(K.next),F[K.loop||A?"show":"hide"]().html(K.previous),K.slideshow&&M.show(),K.preloading&&e.each([n(-1),n(1)],function(){var t,i,o=T[this],n=e.data(o,V);n&&n.href?(t=n.href,e.isFunction(t)&&(t=t.call(o))):t=e(o).attr("href"),t&&(h(t)||n.photo)&&(i=new Image,i.src=t)})):P.hide(),K.iframe?(i=o("iframe")[0],a in i&&(i[a]=0),c in i&&(i[c]="true"),K.scrolling||(i.scrolling="no"),e(i).attr({src:K.href,name:(new Date).getTime(),"class":Y+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",r).appendTo(E),at.one(rt,function(){i.src="//about:blank"}),K.fastIframe&&e(i).trigger("load")):r(),"fade"===K.transition?w.fadeTo(s,1,t):t())},"fade"===K.transition?w.fadeTo(s,0,function(){G.position(0,l)}):G.position(s,l)}},G.load=function(t){var n,s,c,u=G.prep;q=!0,O=!1,N=T[A],t||a(),Q&&w.add(m).removeClass(Q),K.className&&w.add(m).addClass(K.className),Q=K.className,d(rt),d(tt,K.onLoad),K.h=K.height?r(K.height,"y")-D-_:K.innerHeight&&r(K.innerHeight,"y"),K.w=K.width?r(K.width,"x")-B-z:K.innerWidth&&r(K.innerWidth,"x"),K.mw=K.w,K.mh=K.h,K.maxWidth&&(K.mw=r(K.maxWidth,"x")-B-z,K.mw=K.w&&K.w<K.mw?K.w:K.mw),K.maxHeight&&(K.mh=r(K.maxHeight,"y")-D-_,K.mh=K.h&&K.h<K.mh?K.h:K.mh),n=K.href,$=setTimeout(function(){L.show()},100),K.inline?(c=o(dt).hide().insertBefore(e(n)[0]),at.one(rt,function(){c.replaceWith(E.children())}),u(e(n))):K.iframe?u(" "):K.html?u(K.html):h(n)?(n=l(n),e(O=new Image).addClass(Y+"Photo").bind("error",function(){K.title=!1,u(o(dt,"Error").html(K.imgError))}).one("load",function(){var e;K.retinaImage&&i.devicePixelRatio>1&&(O.height=O.height/i.devicePixelRatio,O.width=O.width/i.devicePixelRatio),K.scalePhotos&&(s=function(){O.height-=O.height*e,O.width-=O.width*e},K.mw&&O.width>K.mw&&(e=(O.width-K.mw)/O.width,s()),K.mh&&O.height>K.mh&&(e=(O.height-K.mh)/O.height,s())),K.h&&(O.style.marginTop=Math.max(K.mh-O.height,0)/2+"px"),T[1]&&(K.loop||T[A+1])&&(O.style.cursor="pointer",O.onclick=function(){G.next()}),ht&&(O.style.msInterpolationMode="bicubic"),setTimeout(function(){u(O)},1)}),setTimeout(function(){O.src=n},1)):n&&I.load(n,K.data,function(t,i){u("error"===i?o(dt,"Error").html(K.xhrError):e(this).contents())})},G.next=function(){!q&&T[1]&&(K.loop||T[A+1])&&(A=n(1),G.load())},G.prev=function(){!q&&T[1]&&(K.loop||A)&&(A=n(-1),G.load())},G.close=function(){j&&!U&&(U=!0,j=!1,d(ot,K.onCleanup),k.unbind("."+Y+" ."+st),m.fadeTo(200,0),w.stop().fadeTo(300,0,function(){w.add(m).css({opacity:1,cursor:"auto"}).hide(),d(rt),E.empty().remove(),setTimeout(function(){U=!1,d(nt,K.onClosed)},1)}))},G.remove=function(){e([]).add(w).add(m).remove(),w=null,e("."+Z).removeData(V).removeClass(Z),e(t).unbind("click."+Y)},G.element=function(){return e(N)},G.settings=J)})(jQuery,document,window);
/** Lazy Load - jQuery plugin for lazy loading images * * Copyright (c) 2007-2012 Mika Tuupola * * Licensed under the MIT license: *   http://www.opensource.org/licenses/mit-license.php * * Project home: *   http://www.appelsiini.net/projects/lazyload * * Version:  1.7.2 * */
(function(a,b){$window=a(b),a.fn.lazyload=function(c){function f(){var b=0;d.each(function(){var c=a(this);if(e.skip_invisible&&!c.is(":visible"))return;if(!a.abovethetop(this,e)&&!a.leftofbegin(this,e))if(!a.belowthefold(this,e)&&!a.rightoffold(this,e))c.trigger("appear");else if(++b>e.failure_limit)return!1})}var d=this,e={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null};return c&&(undefined!==c.failurelimit&&(c.failure_limit=c.failurelimit,delete c.failurelimit),undefined!==c.effectspeed&&(c.effect_speed=c.effectspeed,delete c.effectspeed),a.extend(e,c)),$container=e.container===undefined||e.container===b?$window:a(e.container),0===e.event.indexOf("scroll")&&$container.bind(e.event,function(a){return f()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,c.one("appear",function(){if(!this.loaded){if(e.appear){var f=d.length;e.appear.call(b,f,e)}a("<img />").bind("load",function(){c.hide().attr("src",c.data(e.data_attribute))[e.effect](e.effect_speed),b.loaded=!0;var f=a.grep(d,function(a){return!a.loaded});d=a(f);if(e.load){var g=d.length;e.load.call(b,g,e)}}).attr("src",c.data(e.data_attribute))}}),0!==e.event.indexOf("scroll")&&c.bind(e.event,function(a){b.loaded||c.trigger("appear")})}),$window.bind("resize",function(a){f()}),f(),this},a.belowthefold=function(c,d){var e;return d.container===undefined||d.container===b?e=$window.height()+$window.scrollTop():e=$container.offset().top+$container.height(),e<=a(c).offset().top-d.threshold},a.rightoffold=function(c,d){var e;return d.container===undefined||d.container===b?e=$window.width()+$window.scrollLeft():e=$container.offset().left+$container.width(),e<=a(c).offset().left-d.threshold},a.abovethetop=function(c,d){var e;return d.container===undefined||d.container===b?e=$window.scrollTop():e=$container.offset().top,e>=a(c).offset().top+d.threshold+a(c).height()},a.leftofbegin=function(c,d){var e;return d.container===undefined||d.container===b?e=$window.scrollLeft():e=$container.offset().left,e>=a(c).offset().left+d.threshold+a(c).width()},a.inviewport=function(b,c){return!a.rightofscreen(b,c)&&!a.leftofscreen(b,c)&&!a.belowthefold(b,c)&&!a.abovethetop(b,c)},a.extend(a.expr[":"],{"below-the-fold":function(c){return a.belowthefold(c,{threshold:0,container:b})},"above-the-top":function(c){return!a.belowthefold(c,{threshold:0,container:b})},"right-of-screen":function(c){return a.rightoffold(c,{threshold:0,container:b})},"left-of-screen":function(c){return!a.rightoffold(c,{threshold:0,container:b})},"in-viewport":function(c){return!a.inviewport(c,{threshold:0,container:b})},"above-the-fold":function(c){return!a.belowthefold(c,{threshold:0,container:b})},"right-of-fold":function(c){return a.rightoffold(c,{threshold:0,container:b})},"left-of-fold":function(c){return!a.rightoffold(c,{threshold:0,container:b})}})})(jQuery,window);
/** BackgroundColor Transition **/
(function(d){d.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(f,e){d.fx.step[e]=function(g){if(!g.colorInit){g.start=c(g.elem,e);g.end=b(g.end);g.colorInit=true}g.elem.style[e]="rgb("+[Math.max(Math.min(parseInt((g.pos*(g.end[0]-g.start[0]))+g.start[0]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[1]-g.start[1]))+g.start[1]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[2]-g.start[2]))+g.start[2]),255),0)].join(",")+")"}});function b(f){var e;if(f&&f.constructor==Array&&f.length==3){return f}if(e=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(f)){return[parseInt(e[1]),parseInt(e[2]),parseInt(e[3])]}if(e=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(f)){return[parseFloat(e[1])*2.55,parseFloat(e[2])*2.55,parseFloat(e[3])*2.55]}if(e=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(f)){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}if(e=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(f)){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}if(e=/rgba\(0, 0, 0, 0\)/.exec(f)){return a.transparent}return a[d.trim(f).toLowerCase()]}function c(g,e){var f;do{f=d.curCSS(g,e);if(f!=""&&f!="transparent"||d.nodeName(g,"body")){break}e="backgroundColor"}while(g=g.parentNode);return b(f)}var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]}})(jQuery);
(function($){ $.fn.animateHighlight = function(highlightColor, duration) { var highlightBg = highlightColor || "#FFFF9C"; var animateMs = duration || 1500; var originalBg = this.css("backgroundColor"); this.stop().css("background-color", highlightBg).stop().animate({backgroundColor: originalBg}, animateMs);}; })(jQuery);
/** * jQuery Plugin to obtain touch gestures from iPhone, iPod Touch and iPad, should also work with Android mobile phones (not tested yet!) * Common usage: wipe images (left and right to show the previous or next image) *  * @author Andreas Waltl, netCU Internetagentur (http://www.netcu.de) * @version 1.0 (15th July 2010) */
(function ($) { $.fn.touchwipe = function (settings) { var config = { min_move_x: 20, wipeLeft: function () { alert("left"); }, wipeRight: function () { alert("right"); }, preventDefaultEvents: true }; if (settings) $.extend(config, settings); this.each(function () { var startX; var isMoving = false; function cancelTouch() { this.removeEventListener('touchmove', onTouchMove); startX = null; isMoving = false; } function onTouchMove(e) { if (config.preventDefaultEvents) { e.preventDefault(); } if (isMoving) { var x = e.touches[0].pageX; var dx = startX - x; if (Math.abs(dx) >= config.min_move_x) { cancelTouch(); if (dx > 0) { config.wipeLeft(); } else { config.wipeRight(); } } } } function onTouchStart(e) { if (e.touches.length == 1) { startX = e.touches[0].pageX; isMoving = true; this.addEventListener('touchmove', onTouchMove, false); } } this.addEventListener('touchstart', onTouchStart, false); }); return this; }; })(jQuery);
/**  * jQuery Masonry v2.1.05  * A dynamic layout plugin for jQuery * The flip-side of CSS Floats * http://masonry.desandro.com * * Licensed under the MIT license. * Copyright 2012 David DeSandro */
(function(a,b,c){"use strict";var d=b.event,e;d.special.smartresize={setup:function(){b(this).bind("resize",d.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",d.special.smartresize.handler)},handler:function(a,c){var d=this,f=arguments;a.type="smartresize",e&&clearTimeout(e),e=setTimeout(function(){b.event.handle.apply(d,f)},c==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Mason=function(a,c){this.element=b(c),this._create(a),this._init()},b.Mason.settings={isResizable:!0,isAnimated:!1,animationOptions:{queue:!1,duration:500},gutterWidth:0,isRTL:!1,isFitWidth:!1,containerStyle:{position:"relative"}},b.Mason.prototype={_filterFindBricks:function(a){var b=this.options.itemSelector;return b?a.filter(b).add(a.find(b)):a},_getBricks:function(a){var b=this._filterFindBricks(a).css({position:"absolute"}).addClass("masonry-brick");return b},_create:function(c){this.options=b.extend(!0,{},b.Mason.settings,c),this.styleQueue=[];var d=this.element[0].style;this.originalStyle={height:d.height||""};var e=this.options.containerStyle;for(var f in e)this.originalStyle[f]=d[f]||"";this.element.css(e),this.horizontalDirection=this.options.isRTL?"right":"left",this.offset={x:parseInt(this.element.css("padding-"+this.horizontalDirection),10),y:parseInt(this.element.css("padding-top"),10)},this.isFluid=this.options.columnWidth&&typeof this.options.columnWidth=="function";var g=this;setTimeout(function(){g.element.addClass("masonry")},0),this.options.isResizable&&b(a).bind("smartresize.masonry",function(){g.resize()}),this.reloadItems()},_init:function(a){this._getColumns(),this._reLayout(a)},option:function(a,c){b.isPlainObject(a)&&(this.options=b.extend(!0,this.options,a))},layout:function(a,b){for(var c=0,d=a.length;c<d;c++)this._placeBrick(a[c]);var e={};e.height=Math.max.apply(Math,this.colYs);if(this.options.isFitWidth){var f=0;c=this.cols;while(--c){if(this.colYs[c]!==0)break;f++}e.width=(this.cols-f)*this.columnWidth-this.options.gutterWidth}this.styleQueue.push({$el:this.element,style:e});var g=this.isLaidOut?this.options.isAnimated?"animate":"css":"css",h=this.options.animationOptions,i;for(c=0,d=this.styleQueue.length;c<d;c++)i=this.styleQueue[c],i.$el[g](i.style,h);this.styleQueue=[],b&&b.call(a),this.isLaidOut=!0},_getColumns:function(){var a=this.options.isFitWidth?this.element.parent():this.element,b=a.width();this.columnWidth=this.isFluid?this.options.columnWidth(b):this.options.columnWidth||this.$bricks.outerWidth(!0)||b,this.columnWidth+=this.options.gutterWidth,this.cols=Math.floor((b+this.options.gutterWidth)/this.columnWidth),this.cols=Math.max(this.cols,1)},_placeBrick:function(a){var c=b(a),d,e,f,g,h;d=Math.ceil(c.outerWidth(!0)/this.columnWidth),d=Math.min(d,this.cols);if(d===1)f=this.colYs;else{e=this.cols+1-d,f=[];for(h=0;h<e;h++)g=this.colYs.slice(h,h+d),f[h]=Math.max.apply(Math,g)}var i=Math.min.apply(Math,f),j=0;for(var k=0,l=f.length;k<l;k++)if(f[k]===i){j=k;break}var m={top:i+this.offset.y};m[this.horizontalDirection]=this.columnWidth*j+this.offset.x,this.styleQueue.push({$el:c,style:m});var n=i+c.outerHeight(!0),o=this.cols+1-l;for(k=0;k<o;k++)this.colYs[j+k]=n},resize:function(){var a=this.cols;this._getColumns(),(this.isFluid||this.cols!==a)&&this._reLayout()},_reLayout:function(a){var b=this.cols;this.colYs=[];while(b--)this.colYs.push(0);this.layout(this.$bricks,a)},reloadItems:function(){this.$bricks=this._getBricks(this.element.children())},reload:function(a){this.reloadItems(),this._init(a)},appended:function(a,b,c){if(b){this._filterFindBricks(a).css({top:this.element.height()});var d=this;setTimeout(function(){d._appended(a,c)},1)}else this._appended(a,c)},_appended:function(a,b){var c=this._getBricks(a);this.$bricks=this.$bricks.add(c),this.layout(c,b)},remove:function(a){this.$bricks=this.$bricks.not(a),a.remove()},destroy:function(){this.$bricks.removeClass("masonry-brick").each(function(){this.style.position="",this.style.top="",this.style.left=""});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"),b(a).unbind(".masonry")}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var f=function(b){a.console&&a.console.error(b)};b.fn.masonry=function(a){if(typeof a=="string"){var c=Array.prototype.slice.call(arguments,1);this.each(function(){var d=b.data(this,"masonry");if(!d){f("cannot call methods on masonry prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(d[a])||a.charAt(0)==="_"){f("no such method '"+a+"' for masonry instance");return}d[a].apply(d,c)})}else this.each(function(){var c=b.data(this,"masonry");c?(c.option(a||{}),c._init()):b.data(this,"masonry",new b.Mason(a,this))});return this}})(window,jQuery);
/* jQuery ImagesLoaded * https://github.com/desandro/imagesloaded */
(function(c,n){var k="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";c.fn.imagesLoaded=function(l){function m(){var b=c(h),a=c(g);d&&(g.length?d.reject(e,b,a):d.resolve(e));c.isFunction(l)&&l.call(f,e,b,a)}function i(b,a){b.src===k||-1!==c.inArray(b,j)||(j.push(b),a?g.push(b):h.push(b),c.data(b,"imagesLoaded",{isBroken:a,src:b.src}),o&&d.notifyWith(c(b),[a,e,c(h),c(g)]),e.length===j.length&&(setTimeout(m),e.unbind(".imagesLoaded")))}var f=this,d=c.isFunction(c.Deferred)?c.Deferred():
0,o=c.isFunction(d.notify),e=f.find("img").add(f.filter("img")),j=[],h=[],g=[];e.length?e.bind("load.imagesLoaded error.imagesLoaded",function(b){i(b.target,"error"===b.type)}).each(function(b,a){var e=a.src,d=c.data(a,"imagesLoaded");if(d&&d.src===e)i(a,d.isBroken);else if(a.complete&&a.naturalWidth!==n)i(a,0===a.naturalWidth||0===a.naturalHeight);else if(a.readyState||a.complete)a.src=k,a.src=e}):m();return d?d.promise(f):f}})(jQuery);
/*! http://mths.be/placeholder v2.0.7 by @mathias */
//;(function(f,h,$){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=$.fn,c=$.valHooks,k,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){var l=this;l.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':e}).data('placeholder-enabled',true).trigger('blur.placeholder');return l};j.input=a;j.textarea=d;k={get:function(m){var l=$(m);return l.data('placeholder-enabled')&&l.hasClass('placeholder')?'':m.value},set:function(m,n){var l=$(m);if(!l.data('placeholder-enabled')){return m.value=n}if(n==''){m.value=n;if(m!=h.activeElement){e.call(m)}}else{if(l.hasClass('placeholder')){b.call(m,true,n)||(m.value=n)}else{m.value=n}}return l}};a||(c.input=k);d||(c.textarea=k);$(function(){$(h).delegate('form','submit.placeholder',function(){var l=$('.placeholder',this).each(b);setTimeout(function(){l.each(e)},10)})});$(f).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value=''})})}function g(m){var l={},n=/^jQuery\d+$/;$.each(m.attributes,function(p,o){if(o.specified&&!n.test(o.name)){l[o.name]=o.value}});return l}function b(m,n){var l=this,o=$(l);if(l.value==o.attr('placeholder')&&o.hasClass('placeholder')){if(o.data('placeholder-password')){o=o.hide().next().show().attr('id',o.removeAttr('id').data('placeholder-id'));if(m===true){return o[0].value=n}o.focus()}else{l.value='';o.removeClass('placeholder');l==h.activeElement&&l.select()}}}function e(){var q,l=this,p=$(l),m=p,o=this.id;if(l.value==''){if(l.type=='password'){if(!p.data('placeholder-textinput')){try{q=p.clone().attr({type:'text'})}catch(n){q=$('<input>').attr($.extend(g(this),{type:'text'}))}q.removeAttr('name').data({'placeholder-password':true,'placeholder-id':o}).bind('focus.placeholder',b);p.data({'placeholder-textinput':q,'placeholder-id':o}).before(q)}p=p.removeAttr('id').hide().prev().attr('id',o).show()}p.addClass('placeholder');p[0].value=p.attr('placeholder')}else{p.removeClass('placeholder')}}}(this,document,jQuery));
//jquery.cookie.js
jQuery.cookie=function(name,value,options){if(typeof value!='undefined'){options=options||{};if(value===null){value='';options.expires=-1;}var expires='';if(options.expires&&(typeof options.expires=='number'||options.expires.toUTCString)){var date;if(typeof options.expires=='number'){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000));}else{date=options.expires;}expires='; expires='+date.toUTCString();}var path=options.path?'; path='+(options.path):'';var domain=options.domain?'; domain='+(options.domain):'';var secure=options.secure?'; secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('');}else{var cookieValue=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break;}}}return cookieValue;}};
/*! H5F - v1.0.0 - 2012-07-18 * https://github.com/ryanseddon/H5F/ * Copyright (c) 2012 Ryan Seddon; Licensed MIT */
var H5F=H5F||{};(function(a){var b=a.createElement("input"),c=/^[a-zA-Z0-9.!#$%&'*+-\/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,d=/[a-z][\-\.+a-z]*:\/\//i,e=/^(input|select|textarea)$/i,f,g,h,i,j="",k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;k=function(a,b){var c=!a.nodeType||!1,d={validClass:"valid",invalidClass:"error",requiredClass:"required",placeholderClass:"placeholder"};if(typeof b=="object")for(var e in d)typeof b[e]=="undefined"&&(b[e]=d[e]);i=b||d;if(c)for(var f=0,g=a.length;f<g;f++)l(a[f]);else l(a)},l=function(a){var b=a.elements,c=b.length,d,e=!!a.attributes.novalidate;w(a,"invalid",n,!0),w(a,"blur",n,!0),w(a,"input",n,!0),w(a,"keyup",n,!0),w(a,"focus",n,!0),w(a,"submit",function(b){f=!0,!e&&!a.checkValidity()&&y(b)},!1);if(!q()){a.checkValidity=function(){return o(a)};while(c--)d=!!b[c].attributes.required,b[c].nodeName.toLowerCase()!=="fieldset"&&m(b[c])}},m=function(a){var b=a,c=v(b),d={type:b.getAttribute("type"),pattern:b.getAttribute("pattern"),placeholder:b.getAttribute("placeholder")},e=/^(email|url)$/i,f=/^(input|keyup)$/i,g=e.test(d.type)?d.type:d.pattern?d.pattern:!1,i=r(b,g),k=t(b,"step"),l=t(b,"min"),m=t(b,"max"),n=j!=="";b.checkValidity=function(){return o.call(this,b)},b.setCustomValidity=function(a){p.call(b,a)},b.validationMessage=j,b.validity={valueMissing:c,patternMismatch:i,rangeUnderflow:l,rangeOverflow:m,stepMismatch:k,customError:n,valid:!c&&!i&&!k&&!l&&!m&&!n},d.placeholder&&!f.test(h)&&s(b)},n=function(a){var b=z(a)||a,c=/^(input|keyup|focusin|focus)$/i,d=/^(submit|image|button|reset)$/i,f=!0;e.test(b.nodeName)&&!d.test(b.type)&&!d.test(b.nodeName)&&(h=a.type,q()||m(b),b.validity.valid&&b.value!==""||b.value!==b.getAttribute("placeholder")&&b.validity.valid?(B(b,[i.invalidClass,i.requiredClass]),A(b,i.validClass)):c.test(h)?b.validity.valueMissing&&B(b,[i.requiredClass,i.invalidClass,i.validClass]):b.validity.valueMissing?(B(b,[i.invalidClass,i.validClass]),A(b,i.requiredClass)):b.validity.valid||(B(b,[i.validClass,i.requiredClass]),A(b,i.invalidClass)),h==="input"&&f&&(x(b.form,"keyup",n,!0),f=!1))},o=function(a){var b,c,d,e,g=!1;if(a.nodeName.toLowerCase()==="form"){b=a.elements;for(var h=0,i=b.length;h<i;h++)c=b[h],d=!!c.attributes.required,e=!!c.attributes.pattern,c.nodeName.toLowerCase()!=="fieldset"&&(d||e&&d)&&(n(c),!c.validity.valid&&!g&&(f&&c.focus(),g=!0));return!g}return n(a),a.validity.valid},p=function(a){var b=this;j=a,b.validationMessage=j},q=function(){return C(b,"validity")&&C(b,"checkValidity")},r=function(a,b){if(b==="email")return!c.test(a.value);if(b==="url")return!d.test(a.value);if(!b)return!1;var e=a.getAttribute("placeholder"),f=a.value;return g=new RegExp("^(?:"+b+")$"),f===e?!0:f===""?!1:!g.test(a.value)},s=function(a){var c={placeholder:a.getAttribute("placeholder")},d=/^(focus|focusin|submit)$/i,e=/^(input|textarea)$/i,f=/^password$/i,g="placeholder"in b;!g&&e.test(a.nodeName)&&!f.test(a.type)&&(a.value===""&&!d.test(h)?(a.value=c.placeholder,w(a.form,"submit",function(){h="submit",s(a)},!0),A(a,i.placeholderClass)):a.value===c.placeholder&&d.test(h)&&(a.value="",B(a,i.placeholderClass)))},t=function(a,b){var c=parseInt(a.getAttribute("min"),10)||0,d=parseInt(a.getAttribute("max"),10)||!1,e=parseInt(a.getAttribute("step"),10)||1,f=parseInt(a.value,10),g=(f-c)%e;if(!!v(a)||!!isNaN(f))return a.getAttribute("type")==="number"?!0:!1;if(b==="step")return a.getAttribute("step")?g!==0:!1;if(b==="min")return a.getAttribute("min")?f<c:!1;if(b==="max")return a.getAttribute("max")?f>d:!1},u=function(a){var b=!!a.attributes.required;return b?v(a):!1},v=function(a){var b=a.getAttribute("placeholder"),c=!!a.attributes.required;return!(!c||a.value!==""&&a.value!==b)},w=function(a,b,c,d){C(window,"addEventListener")?a.addEventListener(b,c,d):C(window,"attachEvent")&&typeof window.event!="undefined"&&(b==="blur"?b="focusout":b==="focus"&&(b="focusin"),a.attachEvent("on"+b,c))},x=function(a,b,c,d){C(window,"removeEventListener")?a.removeEventListener(b,c,d):C(window,"detachEvent")&&typeof window.event!="undefined"&&a.detachEvent("on"+b,c)},y=function(a){a=a||window.event,a.stopPropagation&&a.preventDefault?(a.stopPropagation(),a.preventDefault()):(a.cancelBubble=!0,a.returnValue=!1)},z=function(a){return a=a||window.event,a.target||a.srcElement},A=function(a,b){var c;a.className?(c=new RegExp("(^|\\s)"+b+"(\\s|$)"),c.test(a.className)||(a.className+=" "+b)):a.className=b},B=function(a,b){var c,d,e=typeof b=="object"?b.length:1,f=e;if(a.className)if(a.className===b)a.className="";else while(e--)c=new RegExp("(^|\\s)"+(f>1?b[e]:b)+"(\\s|$)"),d=a.className.match(c),d&&d.length===3&&(a.className=a.className.replace(c,d[1]&&d[2]?" ":""))},C=function(a,b){var c=typeof a[b],d=new RegExp("^function|object$","i");return!!(d.test(c)&&a[b]||c==="unknown")},window.H5F={setup:k}})(document);
//AdZone definitions
var OA_zones={"ad_a1_frontpage":267,"ad_a2_frontpage":268,"ad_a3_frontpage":269,"ad_a4_frontpage":270,"ad_b_frontpage":275,"ad_f_frontpage":276,"ad_h1_frontpage":271,"ad_h2_frontpage":272,"ad_h3_frontpage":273,"ad_h4_frontpage":274,"ad_t_frontpage":265,"ad_tt_frontpage":266,"ad_test":355,"ad_a1_lifid":292,"ad_a2_lifid":293,"ad_a3_lifid":294,"ad_f_lifid":299,"ad_h1_lifid":295,"ad_h2_lifid":296,"ad_i1_lifid":297,"ad_i2_lifid":298,"ad_t_lifid":291,"ad_tt_lifid":335,"ad_t_lifid_geotest":357,"ad_hh1_lifid":375,"ad_hh2_lifid":376,"ad_a1_lifid_grein":322,"ad_a2_lifid_grein":323,"ad_h1_lifid_grein":325,"ad_h2_lifid_grein":326,"ad_t_lifid_grein":324,"ad_tx_lifid_grein":370,"ad_a1_vidskipti":301,"ad_a2_vidskipti":302,"ad_f_vidskipti":305,"ad_h1_vidskipti":303,"ad_h2_vidskipti":304,"ad_t_vidskipti":300,"ad_tt_vidskipti":334,"ad_a1_vidskipti_grein":327,"ad_a2_vidskipti_grein":328,"ad_h1_vidskipti_grein":329,"ad_h2_vidskipti_grein":330,"ad_t_vidskipti_grein":331,"ad_tx_vidskipti_grein":377,"ad_t_rad":311,"ad_t_smaar":356,"ad_a1_frettir_bilar":362,"ad_a2_frettir_bilar":363,"ad_h1_frettir_bilar":364,"ad_t_frettir_bilar":361,"ad_a1_frettir_grein_bilar":365,"ad_a2_frettir_grein_bilar":366,"ad_h1_frettir_grein_bilar":367,"ad_t_frettir_grein_bilar":368,"ad_a1_frettir":278,"ad_a2_frettir":279,"ad_f_frettir":282,"ad_h1_frettir":280,"ad_h2_frettir":281,"ad_t_frettir":277,"ad_tt_frettir":337,"ad_a1_frettir_kosningar":371,"ad_a1_frettir_vedur":384,"ad_a2_frettir_kosningar":372,"ad_h1_frettir_kosningar":373,"ad_t_frettir_kosningar":374,"ad_t_frettir_vedur":383,"ad_a1_frettir_grein":312,"ad_a2_frettir_grein":313,"ad_h1_frettir_grein":315,"ad_h2_frettir_grein":316,"ad_t_frettir_grein":314,"ad_tx_frettir_grein":354,"ad_a1_jol":220,"ad_a2_jol":221,"ad_b1_jol":222,"ad_g1_jol":224,"ad_h1_jol":223,"ad_h2_jol":225,"ad_t_jol":358,"ad_h1_jol_grein":223,"ad_b1_jol_grein":222,"ad_a1_jol_grein":220,"ad_t_jol_grein":359,"ad_a1_idrottir":284,"ad_a1_idrottir_sportelitan":360,"ad_a2_idrottir":285,"ad_a3_idrottir":286,"ad_f_idrottir":290,"ad_h1_idrottir":287,"ad_h2_idrottir":287,"ad_i1_idrottir":289,"ad_t_idrottir":283,"ad_tt_idrottir":336,"ad_a1_idrottir_enski":342,"ad_h1_idrottir_enski":344,"ad_t_idrottir_enski":343,"ad_a1_idrottir_grein_enski":348,"ad_h1_idrottir_grein_enski":349,"ad_t_idrottir_grein_enski":350,"ad_tx_idrottir_grein_enski":369,"ad_a1_idrottir_grein":317,"ad_a1_idrottir_sportelitan_grein":360,"ad_a2_idrottir_grein":318,"ad_h1_idrottir_grein":320,"ad_h2_idrottir_grein":321,"ad_t_idrottir_grein":319,"ad_tx_idrottir_grein":369,"ad_a1_idrottir_veidi":345,"ad_h1_idrottir_veidi":346,"ad_t_idrottir_veidi":347,"ad_a1_idrottir_grein_veidi":351,"ad_h1_idrottir_grein_veidi":352,"ad_t_idrottir_grein_veidi":353,"ad_tx_idrottir_grein_veidi":369,"ad_a1_skodanir":307,"ad_a2_skodanir":308,"ad_f_skodanir":310,"ad_h1_skodanir":309,"ad_t_skodanir":306,"ad_tt_skodanir":332,"ad_a1_skodanir_grein":338,"ad_a2_skodanir_grein":339,"ad_h1_skodanir_grein":340,"ad_t_skodanir_grein":333,"ad_a1_lifid_harma":385,"ad_h1_lifid_harma":389,"ad_t_lifid_harma":391,"ad_a1_lifid_grein_harma":386,"ad_h1_lifid_grein_harma":390,"ad_t_lifid_grein_harma":392};
//openAd.jquery
(function(f,s,k,t){function x(){l=f(k).width();d.debug&&console.debug&&console.debug("Scheduling recalculation of visible banners for width "+l);u||y()}function y(){u=!0;d.debug&&console.debug&&console.debug("Starting recalculation of visible banners for width "+l);var b,c=h+d.delivery+"/spc.php",c=c+"?zones=",a;for(a in j)b=q[a]?l:Math.round(f(j[a]).parent().width()),v[a]=b>=r[a]&&b<=n[a],v[a]?w[a]?(d.debug&&console.debug&&console.debug("Unhiding already fetched banner "+j[a].id),f(j[a]).slideDown()):(g.push(a),c+=escape(a+"="+OA_zones[j[a].id]+"|"),w[a]=!0,d.debug&&console.debug&&console.debug("Fetching banner "+j[a].id)):(d.debug&&console.debug&&console.debug("Hiding banner "+j[a].id),f(j[a]).hide());c=c+"&nz=1"+("&r="+Math.floor(99999999*Math.random()));s.location&&(c+="&loc="+escape(s.location));k.referrer&&(c+="&referer="+escape(k.referrer));1===d.block&&(c+="&block=1");1===d.blockcampaign&&(c+="&blockcampaign=1");d.target&&(c+="&target="+d.target);1===d.withtext&&(c+="&withtext=1");d.charset&&(c+="&charset="+d.charset);"undefined"!==typeof OA_source&&(c+="&source="+escape(OA_source));l=t;f.getScript(c,F)}function F(){var b,c,a=[];for(b=0;b<g.length;b++)c=g[b],"undefined"!=typeof OA_output[c]&&""!==OA_output[c]&&a.push(c);g=a;k.write=z;k.writeln=z;A()}function A(){for(;0<g.length;){var b,c,a;e=g.shift();p=f(j[e]);d.debug&&console.debug&&console.debug("Rendering banner "+j[e].id);p.slideDown();for(B();null!==(b=/<script/i.exec(OA_output[e]));)if(p.append(OA_output[e].slice(0,b.index)),OA_output[e]=OA_output[e].slice(b.index,OA_output[e].length),b=/^([^>]*)>([\s\S]*?)<\\?\/script>/i.exec(OA_output[e]),null===b)OA_output[e]="";else if(c=b[1]+" ",a=b[2],OA_output[e]=OA_output[e].slice(b[0].length,OA_output[e].length),b=/src\s*=\s*['"]?([^'"]*)['"]?\s/i.exec(c),null===b)b=/^\s*<.*$/m.exec(a),null!==b&&(a=a.slice(b[0].length,a.length)),f.globalEval(a),B();else{0<OA_output[e].length&&g.unshift(e);f.getScript(b[1],A);return}p.append(OA_output[e]);OA_output[e]=""}p=e=t;u=!1;d.debug&&console.debug&&console.debug("Recalculation of visible banners done!");l&&y()}function z(){if(e!==t){for(var b=0;b<arguments.length;b++)m.push(arguments[b]);e!=g[0]&&g.unshift(e)}}function B(){if(0<m.length){m.push(OA_output[e]);OA_output[e]="";for(i=0;i<m.length;i++)OA_output[e]+=m[i];m=[]}}var d,C,h,e,p,D=0,j={},r={},n={},q={},l,w={},v={},u=!1,E,g=[],m=[];f.openx=function(b){if(h)console.error&&(console.error("jQuery.openx was already initialized!"),console.log("Configured options: ",C));else if("string"==typeof b&&(b={server:b}),C=b,b.server){d=f.extend({protocol:k.location.protocol,delivery:"/www/delivery",fl:"fl.js",selector:".oa",min_prefix:"min_",max_prefix:"max_",pw_marker:"pw",resize_delay:200,debug:!1},b);h=d.protocol+"//";h+=d.server;"http:"===d.protocol&&d.http_port&&(h+=":"+d.http_port);"https:"===d.protocol&&d.https_port&&(h+=":"+d.https_port);d.debug&&console.debug&&console.debug("Ad-Server: "+h);f.ajaxSetup({cache:!0});for(var c in OA_zones)f(d.selector).each(function(){var a,b,e,f=RegExp("^"+d.min_prefix+"([0-9]+)$"),h=RegExp("^"+d.max_prefix+"([0-9]+)$"),g;if(this.id===c){a="oa_"+ ++D;j[a]=this;r[a]=0;n[a]=Number.MAX_VALUE;q[a]=!1;b=this.className.split(/\s+/);for(e=0;e<b.length;e++)(g=f.exec(b[e]))&&(r[a]=+g[1]),(g=h.exec(b[e]))&&(n[a]=+g[1]),q[a]=b[e]===d.pw_marker;w[a]=!1;v[a]=!1;d.debug&&console.debug&&console.debug("Slot "+D+": "+this.id+(q[a]?", pagewidth: ":", width: ")+r[a]+(n[a]!=Number.MAX_VALUE?"-"+n[a]:""))}});f(s).resize(function(){clearTimeout(E);E=setTimeout(x,d.resize_timeout)});f.getScript(h+d.delivery+"/"+d.fl,x)}else console.error&&(console.error('Required option "server" is missing!'),console.log("options: ",b))}})(jQuery,window,document);var OA_output={};

$(document).ready(function () {

	//Lazyload - Change from -500 to 200 on production
	$("img.lazy").show().lazyload({ threshold : 200 });
	$(".radioinfo").lazyload({ threshold : 500, appear: function(){ bindRadioInfoBoxes(); } });
	$(".newsscroll").lazyload({ threshold : 600, appear: function(){ bindNewsScrollers(this); } });
	$("iframe.lazy").lazyload({ threshold : 200, appear: function(){ $(this).attr('src', $(this).attr('data-original')); }});
	//checkForAd();
	bindMegaMenu();
    bindTabArea();
    bindCurrencyCalculator();
    startNewsTicker();
    bindSearchToggle();
    bindTvStationTabs();
    bindPopup();

    //bindPaperDetails();
    bindDatePickerLink();
    bindScrollDetails();
    bindDatePickerLink();
    bindJCarouselLite();
    bindVideoLightbox();
    bindScrollMenu();
    bindCurrChannel();
    bindFbSend();
    $.openx('openad.visir.is');

    $("a[rel=newsImage]").colorbox({photo: true,current: 'Mynd {current} af {total}',maxWidth: '90%',maxHeight: '90%',onComplete: function () {$("#colorbox").addClass("show-controls");setTimeout(function () {$("#colorbox").removeClass("show-controls");}, 3000);}});
    $("a[rel=comic]").colorbox({photo:true, current:'Mynd {current} af {total}', onOpen: function(){ $("#colorbox").addClass("no-title");}});
	$(".modal").colorbox({iframe:true, title:false, innerWidth:540, innerHeight:282, onOpen:function(){ $("#colorbox").addClass("colorbox-form"); }});

    $('.totop').click(function(){ $('html, body').animate({ scrollTop: 0 }, 500); return false; })
    //$('input, textarea').placeholder();
    /*AdsDoCenter();*/
    //bindMenuItems();

       /* $('.carousel.zoomclickable ul li').click(function(){ 
    alert(this);
            Popupscrollitem(this, true, false);
            console.log($(this))
		
		return false;
	});*/

});
function bindHoroScope(){
    var valid = $.cookie('horoscope');
    if (valid !== null) {
        $("#horoscope option[value=" + valid + "]").attr("selected", "selected");
        SetHoroscope(valid);
    }
    $('#horoscope').change(function () {
        var valid = $('#horoscope').val();
        $.cookie('horoscope', valid, { expires: 365 });
        SetHoroscope(valid);
    });
    if(valid !== null) {return;} // Exits function if SetHoroscope was already called.
    SetHoroscope(1);
}
function SetHoroscope(id) {
    $('#horoscopeContent').html('<div class="sign sign-'+id+'"></div><span class="text"><span class="date">'+ horoDate +' </span>' + predArray[id].Text + '</span>');
}
function checkForAd(){
	$( "div[class^='ad_']" ).each(function(e) {
		var that = $(this);
		if(!that.find("div[id^='beacon_']").length){
	   		$(this).css("display", "none");
		}
	});
}
function bindMegaMenu(){
	$("#mega-menu a").toggle(function(){
		if(!$(this).parent().hasClass("done")){
			buildMegaMenu(this, 1);
		}
		$(this).parent().addClass('open');
	},function(){
		$(this).parent().removeClass('open');
	});
}

function bindScrollMenu(){
	$(window).scroll(function(){
		var minScroll = 65;
		var fClass = 'fixedmenu';
		var scrollTop = $(window).scrollTop();
		if (scrollTop > minScroll){
			$('#header').addClass(fClass);
		}else{
			$('#header').removeClass(fClass);
		}
	});
}

function bindMenuItems() {

    $("#nav ul.level1 > li").hover(
    function () { $('#nav .selected ul.level2').css('display','none'); $(this).children('ul').css('display','block') }, 
    function () { $(this).children('ul').css('display','none'); $('#nav .selected ul.level2').css('display','block');  })
}

function AdsDoCenter()
{
	$('.ad_A, .ad_C, .ad_D, ad_H').each(function(){
		var w = $(this).find('embed').attr('width');

		if(w == null || w == 0)
			w = $(this).find('img').first().attr('width');
		$(this).css({'width': w, 'display': 'block', margin: '0 auto'});
	});
}

function bindSearchToggle()
{
	$('a.searchtype, .insearch').click(function(){
		$('#searchicons').toggle();
	});
	$('#searchicons ul li').click(function(){
		var p = $(this).attr('class');
		$('#searchwith').val(p);
		$('#searchicons').hide();
		$('.searchtype').attr('class','searchtype ' + p);
	});
}

function bindDatePickerLink()
{
	$('.datepick').datePicker({createButton:false,startDate: '01/01/2000',endDate: (new Date()).asString()}).bind('click', function() {
		$(this).dpDisplay();
		this.blur();
		return false;
	}).bind('dateSelected', function(e, selectedDate, $td) {
		/* Hvað á að vera hérna? */
		document.location = '/section/media/?date=' + selectedDate.getFullYear() + selectedDate.getMonth() + selectedDate.getDate();
	});
}

function bindJCarouselLite(){
	$('.carousel.single').each(function() {
		if($(this).find('li').length > 1){
			$(this).jCarouselLite({
				btnNext: $(this).find('.next'),
				btnPrev: $(this).find('.prev'),
				scroll: 1
			});
		}
	});
	$('.carousel').not('.single').each(function() {
		if($(this).find('li').length > 1){
			$(this).jCarouselLite({
				btnNext: $(this).find('.next'),
				btnPrev: $(this).find('.prev'),
				scroll: 2,
				afterEnd: function (a) {
					if ($("#scollDetails").is(":visible")) {
						Popupscrollitem(a[1], true, false);
					}
				}
			});
		}
	});
	$('.m-box-slider').each(function() {
		if($(this).find('li').length > 1){
			var elem = $(this);
			$(this).jCarouselLite({
				btnNext: $(this).find('.next'),
				btnPrev: $(this).find('.prev'),
				btnGo: $(this).find('.dot'),
				visible: 1,
				auto: true,
				timeout: 15000,
				speed: 500,
				activeClass: 'selected',
				scroll: 1
			});
		}
	});
}

function bindCurrencyCalculator(){
	$('#currencyCalculator input').keyup(function(){
		var val = parseFloat($(this).val().replace(',','.'));
		var tVal = parseFloat($(this).attr('data-value').replace(',','.'));
		var isk = val / tVal;
		var mel = $(this).attr('name');
		$('#currencyCalculator input[name!="'+mel+'"]').each(function(){
			var cVal = parseFloat($(this).attr('data-value').replace(',','.'));
			$(this).val( number_format(cVal * isk, 2, ',', '.') );
		});
	});
}

function bindTabArea(){
	$('.tabarea').each(function(){
		if($(this).find('ul.tabs li.current').length < 1)
		{
			$(this).find('ul.tabs li:eq(0)').addClass('current');
			$(this).find('.tabContent:eq(0)').show();
		}
	});

	$('.tabarea ul.tabs li').not('.disabled').click(function(){
		var ind =  $(this).parents('ul.tabs').find('li').index(this);
		
		$(this).parents('.tabarea').find('.tabContent').hide();
		$(this).parents('.tabarea').find('.tabContent:eq('+ind+')').show();

		$(this).parents('ul.tabs').find('li').removeClass('current');
		$(this).addClass('current');
		
		return false;
	});
}

/* KJörkassinn */
function displayAjax(url, target) {
    var target_div = "#results";
    if (target) { target_div = "#" + target; }

    $.ajax({
        url: url,
 		//cache: false,
        success: function (html) {
            $(target_div).html(html);
        }
    });
}
function postAjax(url, target, formid) {
    var target_div = "#results";
    var form = "#surveyform"
    if (formid) { form = "#" + formid; }
    if (target) { target_div = "#" + target; }
   
    var inp = $(form + "> *").filter(":input");
    for (i in inp) {
        if (inp[i].value != undefined && inp[i].id != "") {

            $("#" + inp[i].id).val(escape(inp[i].value));
        }
    }
    var formdata = $(form).serialize();
    formdata = unescape(formdata);
    $.ajax({
        type: 'POST',
        url: url,
        data: formdata,
        success: function (html) {
            $(target_div).html(html);
        }
    });
}
/* End KJörkassinn */

/** News Ticker begins **/
function writeTickerText(el, org, orgl, l)
{
    if(l < orgl)
    {
        el.text( org.substring(0, ++l) );
        setTimeout(function(){writeTickerText( el, org, orgl, l)},100);
    }
    else
    {
        setTimeout("moveToNextTicker()", 1000);
    }
}
function flashTickerText(el){
	$(el).animateHighlight('#F7FF91', 1500);
	setTimeout("moveToNextTicker()", 6000);
}
function moveToNextTicker()
{
    var objLast = $('.ticker .allnewest.open').last();
    var objNext = $('.ticker .allnewest.closed').last();
    if(objNext.length > 0)
    {
        objLast.hide(0, function(){
            objLast.removeClass('open').addClass('done');
        });
        objNext.show(0, function(){
            objNext.removeClass('closed').addClass('open');
        });
        //var objInnerNext = objNext.find('a');
        //var text = objInnerNext.text();
        //objInnerNext.text('');
        //writeTickerText(objInnerNext, text, text.length, 0);
        flashTickerText(objNext);
    }
}
function startNewsTicker(){
    var obj = $('.ticker .allnewest.open').first();
    //var text = obj.text();
    //obj.text('');
    //writeTickerText(obj ,text , text.length, 0);
    flashTickerText(obj);
}
/** News Ticker ends **/


function doSearch(el) {
    source = document.getElementById("searchwith").value;
    search = $(el).find('input[name*=q]').val()

    if (search.length > 0) {
        if (source == 'visir') {
            document.location.href = 'http://leit.visir.is/leit.aspx?sort=Newest&search=' + search.replace(/ /g, '+');
        }
        else if (source == 'google') {
            window.open('http://www.google.is/search?q=' + escape(search) + '', '_leit');
        }
        else if (source == 'frettabladidsmall') {
            document.location.href = 'http://leit.visir.is/leit.aspx?sort=Newest&SearchType=6&search=' + search;
        }
        else if (source == 'yahoo') {
            window.open('http://search.yahoo.com/search?p=' + search + '', '_leit');
        }
        else if (source == 'ordabok') {
            window.open('http://ordabok.is/index.asp?ordabok=ISL&listaord=' + escape(search) + '', '_leit');
        }
        else if (source == 'wikipedia') {
            window.open('http://en.wikipedia.org/wiki/Special:Search?search=' + escape(search) + '', '_leit');
        }
        else if (source == 'ja') {
            window.open('http://ja.is/hradleit/?q=' + escape(search) + '', '_leit');
        }
        else if (source == 'youtube') {
            window.open('http://www.youtube.com/results?search_query=' + search + '', '_leit');
        }
        else if (source == 'facebook') {
            window.open('http://www.facebook.com/search/?q=' + search + '', '_leit');
        }
    } else {
        alert('Þú verður að skrifa inn leitarorð!');
    }
	return false;
}


/* Helper functions */
function number_format (number, decimals, dec_point, thousands_sep) {
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

function bindPaperDetails()
{
	$('.carousel.zoomable ul li').mouseover(function(){
		if ($('#scollDetails').length < 1) {
			$('body').append('<div id="scollDetails" class="popup">Hleður</div>');
			bindHideScollDetails();
		}
		
		var s = '<div class="close" onclick="closeMe(\'#scollDetails\')"></div>';
		s += $(this).find('.hover').html();
		
		$('#scollDetails').html(s);

		var left = $(this).offset().left - 40;
		var top = $(this).offset().top - 80;

		var style = 'top: ' + top + 'px; left: ' + left + 'px;';

		$('#scollDetails').attr('style', style);

		$('#scollDetails').fadeIn("fast");
		
		return false;
	});
}

function bindScrollDetails()
{
	$('.carousel.zoomable ul li').mouseover(function(){
	    if ($('#scollDetailsZoom').length < 1) {
	        $('body').append('<div id="scollDetailsZoom" class="popup">Hleður</div>');
			bindHideScollDetails();
		}

        var s = '<div class="close" onclick="closeMe(\'#scollDetailsZoom\')"></div>';
		s += $(this).find('.hover').html();

		$('#scollDetailsZoom').html(s);

		var left = $(this).offset().left - 40;
		var top = $(this).offset().top - 80;

		var style = 'top: ' + top + 'px; left: ' + left + 'px;';

		$('#scollDetailsZoom').attr('style', style);

		$('#scollDetailsZoom').fadeIn("fast");
		
		return false;
	});


    $('.carousel.zoomclickable ul li').click(function(){ 

            Popupscrollitem(this, true, false);      
		
		return false;
	});

}
function bindHideScollDetails()
{
    $('#scollDetailsZoom').mouseout(function () {
		$(this).hide();
	});
}


function Popupscrollitem(item, visible, vertical) {
    if (vertical == true) {
        flow = "vertical"
    }
    else {
        flow = "horizontalscroll"
    }
            if ($('#scollDetails').length < 1) {
                $('body').append('<div id="scollDetails" class="' + flow + '" class="popup">Hleður</div>');
            }


            var price = $(item).find('.price').html();
            var title = $(item).find('.texti').html();
            var description = $(item).find('.description').html();
            var link = $(item).find('.link').html();
            var img = $(item).find('img').attr('src');
            img = img.replace("MaxH=140&MaxW=150", "MaxH=260&MaxW=260");
            img = img.replace("MaxH=120&MaxW=120", "MaxH=260&MaxW=260");


            var s = '<div class="close" onclick="closeMe(\'#scollDetails\')"></div>';
            s += '<div class="content"><div class="image"><img src="' + img + '" /></div>';
            s += '<span class="title"><p>' + title + '</p></span>';
            if(description.length > 0){s += '<span class="description"><p>' + description + '</p></span>';}
            if(price.length > 0){s += '<span class="price"><p>Verð: ' + price + '</p></span>';}
            if(link.length > 0){s += '<span class="link"><p style="text-align:right;color:#636363">Nánar á: <a style="color:#636363" href="http://' + link + '" target="_new"> ' + link + '</a></p></span>';}
            s += '</div><span class="bottom"><p>Kynning</p></span>';
            $('#scollDetails').html(s);
            var left = "20%"
            var top = $(item).offset().top - 120;

            if (vertical == true) {
                left = $(item).offset().left + 100 + "px;";
                top = $(item).offset().top - 170;
            }
            
            var style = 'top: ' + top + 'px; left: ' + left;

            $('#scollDetails').attr('style', style);

            if (visible == false) {
                $('#scollDetails').fadeIn("fast");
            }
            else {
                $('#scollDetails .content').fadeIn("slow");
                $('#scollDetails').show();
            }


        }

function closeMe(item) {
	$(item).fadeOut("fast");
}

function bindVideoLightbox() {
    if($('.cbvideo').length){
	    var section = (/^(\/[a-z]*\/)([a-zA-Z]*)/.exec(window.location.pathname)) || 'FRONTPAGE';
	    if(section != undefined && section.length > 1)
	    {
	    	section = section[2];
		    $(".cbvideo a").each(function () {
		        var id = $(this).attr('data-fileid');
		        var title = $(this).attr('data-title');
		        $(this).colorbox({
		            width: 710,
		            innerHeight: 435,
		            opacity: 0.8,
		            title: title,
		            href: '/section/' + section + '&template=cbvideo&fileid=' + id,
		            onComplete: function () { _gaq.push(['_setAccount', 'UA-1570473-1'], ['_setDomainName', '.visir.is'], ['_setCustomVar', 1, 'Section', section, 3], ['_setCustomVar', 2, 'Sub-Section', title.toUpperCase(), 3], ['_trackPageview']); addVirkCount(); }
		        });
		    });
	    }
	}
}
function playVideo(url, autostart, target, width, height, server, url_600, url_300, ctrlbar, endt, startt, livemsg, backgr) {
    if (width) { swidth = width };
    if (height) { sheight = height };
    if (server == 1) { streamer = 'rtmp://klippur.visir.is/vod/_definst_/' };
    if (server == 2) { streamer = 'rtmp://utsending.visir.is/live/' };
    if (server == 4) { streamer = 'rtmp://visirfs.fplive.net/visir/' };
    if (server == 5) { streamer = 'rtmp://utsending.visir.is/rtplive/' };
    if (server == 3) {
        if (url.match('http://(www.)?youtube|youtu\.be')) {
            var youtube_id = url.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0];
        }
        bimg = 'http://i.ytimg.com/vi/' + youtube_id + '/hqdefault.jpg';
    }
    else if (backgr == null && server != 3 || backgr == '' && server != 3) {
        if (startt == null || startt == '') {
            bimg = 'none';
        }
        else {
            bimg = '/jwplayer/assets/thumb.png';
        }
    }
    else { bimg = backgr; };
    //var adtvid = "http://lp.longtailvideo.com/5/adtvideo/adtvideo.swf";
    //var adtex = "http://lp.longtailvideo.com/5/adttext/adttext.swf";
    var playerconfig = {
        id: target,
        autostart: autostart,
        controlbar: ctrlbar,
        skin: "/jwplayer/glow.zip",
        flashplayer: "/jwplayer/player58.swf",
        width: swidth,
        height: sheight,
        image: bimg,
        stretching: "exactfit",
        bufferlength: 10,
        wmode: 'opaque',//'window',
        levels: [
            { bitrate: 1200, file: url, width: 700 },
            { bitrate: 600, file: url_600, width: 700 },
            { bitrate: 300, file: url_300, width: 320 }
        ],
        provider: "rtmp"
    };
    playerconfig.plugins = { gapro: { accountid: "UA-1570473-1"} };
    playerconfig.file = url;
    if (server == 1 | server == 2 | server == 4 | server == 5) { playerconfig.streamer = streamer; } else if (server == 3) { playerconfig.provider = "youtube"; } else { playerconfig.provider = "http"; }
    jwplayer(target).setup(playerconfig)
}

/*Spilin from scroll.js*/
function getCard() {
    var randomnumber = Math.floor(Math.random() * 77)
    var spur = "";
    if (document.getElementById("spur").value == "Skrifaðu spuringuna hér...") {
        spur = "";
    } else {
        spur = "" + document.getElementById("spur").value;
    }
    location.href = "/section/lifid&template=spilin&SpilID=" + randomnumber + "&spur=" + escape(spur)
}

function SpilNidur(p) {
    //tala = document.getElementById('card'+p).style.top;
    //tala =  tala.replace("px", "");
    //if (tala == 10) {
    //	setTimeout("spilScrollDown(0,"+tala+",'card"+p+"')", 1);
    //} else {
    document.getElementById('card' + p).style.top = "0px"
    //}
}
function SpilUp(p) {
    tala = document.getElementById('card' + p).style.top;
    tala = tala.replace("px", "");
    if (tala == 0) {
        setTimeout("spilScrollUp(10,0,'card" + p + "')", 1);
    } else {
        document.getElementById('card' + p).style.top = "10px"
    }

}
function spilScrollDown(b, i, d) {
    var begin_pos = i;
    var end_pos = b
    if (i == b) {
        document.getElementById('' + d).style.top = b + "px";
    } else {
        document.getElementById('' + d).style.top = i + "px";
        i = i - 1
        setTimeout("spilScrollDown(" + end_pos + "," + i + ",'" + d + "')", 1);
    }
}

function spilScrollUp(b, i, d) {
    var begin_pos = i;
    var end_pos = b
    if (i == b) {
        document.getElementById('' + d).style.top = b + "px";
    } else {
        document.getElementById('' + d).style.top = i + "px";
        i = i + 1
        setTimeout("spilScrollUp(" + end_pos + "," + i + ",'" + d + "')", 1);
    }
}

/* Display Flash function from common.js */

function displayFlash(url, autostart, target, width, height, server, url_600, url_300, qplugin, adplugins,categoryid,live,ctrlbar,endt,startt,livemsg, backgr, connectionpoint, subcategoryid) {
    var logohide = true,
    	clipPlayer = "clipPlayer",
		swidth = "700",
    	sheight = "394",
    	streamer, 
    	html5stream,
    	bimg = '',
    	skin = "glow_49.zip",
    	provider = "rtmp",
    	html5provider = "video",
    	ext = /(?:\.([^.]+))?$/.exec(url)[1] || 'mp4',
    	stretch = "uniform";
    //var qplugin;
    if(target) { clipPlayer = target; }
    if(width) { swidth = width; }
    if(height) { sheight = height; }
    
    if(server == 1) { 
    	streamer = 'rtmp://klippur.visir.is/vod/_definst_/'; html5stream = 'http://klippur.visir.is:1935/vod/_definst_/'+ext+':' + url.replace(/^\//g, '') + '/playlist.m3u8'; }
    if(server == 2) { streamer = 'rtmp://utsending.visir.is/live/'; html5stream = 'http://utsending.visir.is:1935/live/' + url + '/playlist.m3u8'; }
    if(server == 4) { streamer = 'rtmp://visirfs.fplive.net/visir/'; }
    if(server == 5) { streamer = 'rtmp://utsending.visir.is/rtplive/'; html5stream = 'http://utsending.visir.is:1935/rtplive/' + url + '/playlist.m3u8';  }
    if(server == 6) { streamer = 'rtmp://' + connectionpoint + '/beint/'; }
    if(server == 2 || server == 6) { skin = "glow2.zip"; }
    if(server == 3) { skin = "glow.zip"; html5stream = url; provider = "youtube"; html5provider = "youtube";}
    if(!server || server === 0) { url = url.replace(/^\//, "http://www.visir.is/"); }
    if(server == 5 || server == 2){ stretch = "exactfit";}
    if(url_600 === '') { url_600 = url; }
    if(url_300 === '') { url_300 = url; }
    if(live == 'live') { logohide = false; }
    if (!ctrlbar){ctrlbar = 'bottom';}
    if (server == 3) {
        if (url.match('http://(www.)?youtube|youtu\.be')) {
            var youtube_id = url.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0];
            bimg = 'http://i.ytimg.com/vi/' + youtube_id + '/hqdefault.jpg';
        }
    }
    else if (backgr === null && server != 3 || backgr === '' && server != 3) {
        if (startt === null || startt === '') {
            bimg = 'none';
        }
        else {
            bimg = '/jwplayer/assets/thumb.png';
        }
    }
    else { bimg = backgr; }
    var playerconfig = {
        modes: [
            {  type: "flash",
               src: "/jwplayer/player59.swf",
               config: {
                    provider: provider,
                    file: url
               }
            },
            {    type: "html5",
                config:{
                    provider: html5provider,
                    file: html5stream
                }
            }
        ],
        id: target,
        autostart: autostart,
        controlbar: ctrlbar,
        skin: "/jwplayer/"+skin,
        //flashplayer: "/jwplayer/player58.swf",
        width: swidth,
        height: sheight,
        image: bimg,
        stretching: stretch,
        bufferlength: 10,
        wmode: 'window',
        levels: [
            { bitrate: 1200, file: url, width: 700 },
            { bitrate: 600, file: url_600, width: 700 },
            { bitrate: 300, file: url_300, width: 320 }
        ]
    };
    if(adplugins == 1) { playerconfig.plugins = { gapro: { accountid: "UA-1570473-1" }, adtvideo: { config: "http://net.visir.is/adPortal/xml.aspx?catid=" + categoryid + "&type=v"} }; }
    else if(adplugins == 2) { playerconfig.plugins = { gapro: { accountid: "UA-1570473-1" }, "/jwplayer/livestream.js": { end: endt, start: startt, title: livemsg} }; }
    else if(adplugins == 3) { playerconfig.plugins = { gapro: { accountid: "UA-1570473-1" }, "http://lp.longtailvideo.com/5/adtvideo/adtvideo.swf": { config: "http://net.visir.is/videoads/xml.aspx?catid=" + categoryid + "&subid="+subcategoryid+"&type=v" }, "http://lp.longtailvideo.com/5/adttext/adttext.swf": { config: "http://net.visir.is/videoads/xml.aspx?catid=" + categoryid + "&subid="+subcategoryid+"&type=t"} }; }
    else if(adplugins == 4) { playerconfig.file = url; playerconfig.plugins = { gapro: { accountid: "UA-1570473-1" }, adtvideo: { config: "http://net.visir.is/adPortal/xml.aspx?catid=" + categoryid + "&type=v"} }; }
    else if(adplugins == 5) { playerconfig.file = url; playerconfig.plugins = { gapro: { accountid: "UA-1570473-1" } }; }
    else if(adplugins == 6) { playerconfig.file = url; playerconfig.plugins = { gapro: { accountid: "UA-1570473-1" }, "http://lp.longtailvideo.com/5/adtvideo/adtvideo.swf": { config: "http://net.visir.is/videoads/xml.aspx?catid=" + categoryid + "&subid="+subcategoryid+"&type=v" }, "http://lp.longtailvideo.com/5/adttext/adttext.swf": { config: "http://net.visir.is/videoads/xml.aspx?catid=" + categoryid + "&subid="+subcategoryid+"&type=t"}, "/jwplayer/related/related.js": { file: '/section/MEDIA&template=rss_jwplaylist&kat='+categoryid+'&subkat='+subcategoryid, oncomplete: true, onclick: 'link', dimensions: '160x90', usedock: true} }; }
    else { playerconfig.plugins = { gapro: { accountid: "UA-1570473-1"} }; }
    //if (qplugin == 1) { playerconfig.plugins = 'qualitymonitor-1 ,gapro: { accountid: "UA-1570473-1"}'; }
    if (server == 1 | server == 2 | server == 4 | server == 5 | server == 6) { playerconfig.streamer = streamer; }  else { playerconfig.provider = "http"; }
    jwplayer(clipPlayer).setup(playerconfig);
}

/* Article Picture Scroller */
var curArtPic = 0, ArtPicLength = 0;
function bindArticlePictureScroller(articleId, complete){

	if($('.hasExtraPictures .articleslider').length == 0)
	{ return false; }

	if(articleId == undefined){ articleId = _articleId; }

	getArtMainPicture(articleId, function(){
		$('.articleslider ul li').first().addClass('first');
		$('.articleslider ul li').last().addClass('last');
		makeArtPicCircular();
		getUlDimentions();
		setCurArtPic($('.articleslider ul li.first').first().index(),false);
		
		$('.articleslider .left-arrow').click(function(){ setPrevArtPic(); return false; });
		$('.articleslider .right-arrow').click(function(){ setNextArtPic(); return false; });
		
		  $(document).keydown(function (e) {
	        if (e.keyCode == 37) {
	            setPrevArtPic();
	        }
	        if (e.keyCode == 39) {
	            setNextArtPic();
	        }
	    });
		if(complete!= undefined)
		{
			complete();
		}
	});
}
function getUlDimentions(){
	var ulwidth = 0;
	var ulheight = 285;
	$('.articleslider li').each(function(){
		var liwidth = $(this).width();
		
		ulwidth += liwidth + 4;
		ulheight = ($(this).height() > ulheight) ? $(this).height() : ulheight;
	});
	$('.articleslider ul').width(ulwidth).height(ulheight + 20);
	$('.articleslider .container').height(ulheight + 4);
	$('.articleslider ul li.first').first().addClass('current');
}
function setCurArtPic(pos, anim){
	//Ef við viljum færa frá síðasta yfir á fyrsta
	if(pos > curArtPic && $('.articleslider li:eq('+curArtPic+')').hasClass('last'))
	{
		//TODO: Move to first 'last' and animate to first 'first'
		var setl = $('.articleslider li.last').first().position().left;
		$('.articleslider ul').css('left', 0- setl);
		pos = $('.articleslider li.first').first().index();
	}

	if(pos < curArtPic && $('.articleslider li:eq('+curArtPic+')').hasClass('first'))
	{
		//TODO: Move to last 'first' and animate to last 'last'
		var setl = $('.articleslider li.first').last().position().left;
		$('.articleslider ul').css('left', 0- setl);
		pos = $('.articleslider li.last').last().index();
	}

	var setl = 0 - $('.articleslider li:eq('+pos+')').position().left;
	$('.articleslider li').removeClass('current');
	$('.articleslider li:eq('+pos+')').addClass('current');

	if(anim == false){
		$('.articleslider ul').css('left',setl);
	}else{
		$('.articleslider ul').animate({left: setl}, 'slow');
	}
	
	if($('.articleslider li:eq('+pos+')').hasClass('last'))
	{ $('.articleslider').addClass('islast'); }
	else
	{ $('.articleslider').removeClass('islast'); }
	
	if($('.articleslider li:eq('+pos+')').hasClass('first'))
	{ $('.articleslider').addClass('isfirst'); }
	else
	{ $('.articleslider').removeClass('isfirst'); }

	curArtPic = pos;
}
function getArtMainPicture(artid, complete){
	var ulwidth = 0;

	var parentul = $('.articleslider ul');
	if(parentul != undefined && parentul.length > 0)
	{ parentul = parentul[0]; }

	$.getJSON('/section/lifid&template=siteextrapictures&AID=' +artid, function(data){
		$(data).each(function(i){
			var item = data[i];
			var liwidth = parseInt((item.width * 285)/item.height);
			var newli = document.createElement('li');
				var newa = document.createElement('a');
					newa.setAttribute('href', item.imgurl + '&MaxW=800&NoBorder=1');
					newa.setAttribute('rel', 'newsImage');
					newa.setAttribute('title', item.caption);
				var newimg = document.createElement('img');
					newimg.setAttribute('src', item.imgurl + '&MaxH=285&NoBorder=1');
				newa.appendChild(newimg);
			newli.appendChild(newa);
			newli.setAttribute('style','width: ' + liwidth + 'px;')
			var newtext = document.createElement('div');
				newtext.setAttribute('class', 'text');
				newtext.appendChild(document.createTextNode(item.caption));
			newli.appendChild(newtext);
			parentul.appendChild(newli);

			ulwidth += liwidth + 10;
		});
		parentul.setAttribute('style','width: ' + ulwidth*2 + 'px;')

		if(complete != undefined)
		{
			complete();
		}
	});
}
function makeArtPicCircular()
{
	var liItems = $('.articleslider li');
	var containerWidth = $('.articleslider').width();
	ArtPicLength = liItems.length;
	//Slice from the front
	var itWidth = 0;
	var itCountF = ArtPicLength
	for(i = 0; i < ArtPicLength; i++)
	{
		itWidth+= $(liItems[i]).width();
		if(itWidth > containerWidth){
			itCountF = i;
			break;
		}
	}
	//Slice from the back
	itWidth = 0;
	var itCountB = 0;
	for(i = 0; i < ArtPicLength; i++)
	{
		itWidth+= $(liItems[ArtPicLength - 1 - i]).width();
		if(itWidth > containerWidth){
			itCountB = i;
			break;
		}
	}
	$('.articleslider ul')
	$('.articleslider ul').append(liItems.slice(0,itCountF+1).clone())
	$('.articleslider ul').prepend(liItems.slice(ArtPicLength-itCountB,ArtPicLength).clone())
}
function setNextArtPic(){
	setCurArtPic(curArtPic+1);
}
function setPrevArtPic(){
	setCurArtPic(curArtPic-1);
}
/* End Article Picture Scroller */

// Bind popup
function bindPopup(){
	$('.radiobox, .m-box-ontheair.tabarea').on('click', 'a', function(event){
			window.open($(this).attr('href'), 'theplayer', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=494,height=545,left = 100,top = 100');
			return false;
	});
	$('#custom-tweet-button a').click(function(){
			window.open($(this).attr('href'), 'twitter', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=550,height=450,left = 100,top = 100');
			return false;
	});
}

// End bind popups

/* NewsScroll */
function bindNewsScrollers(parent){
	$(parent).addClass('carousel');

	var vidcat = $(parent).attr('data-video-cat');
	var vidsubcat = $(parent).attr('data-video-subcat');
	var vidcount = $(parent).attr('data-video-count');
	var multicat = $(parent).attr('data-multicat') || '';
	var dict = (multicat!='') ? { pageNo : 1, mread : 1, seltype : 4 } : { pageNo:1, kat : vidcat, subkat : vidsubcat };

	var preva = document.createElement('a');
		preva.setAttribute('class','prev');
		preva.setAttribute('href','#');
		preva.appendChild(document.createTextNode('Fyrri'));
	
	var carouselbox = document.createElement('div');
		carouselbox.setAttribute('class','carouselbox x6');
		
	var nexta = document.createElement('a');
		nexta.setAttribute('class','next');
		nexta.setAttribute('href','#');
		nexta.appendChild(document.createTextNode('Næsti'));
		
	parent.appendChild(preva);
	parent.appendChild(carouselbox);
	parent.appendChild(nexta);
	
	$.getJSON('/section/MEDIA01&template=mlist', dict,
		function(data){
		var ul = document.createElement('ul');
		$(data.items).each(function(i, item){
			var li = document.createElement('li');
				var lia = document.createElement('a');
					lia.setAttribute('href', item.url );
					lia.setAttribute('data-title', item.text );
					lia.setAttribute('data-fileid', item.fileid );
					var liaspan = document.createElement('span');
						liaspan.setAttribute('class','playbutton');
					lia.appendChild(liaspan);
					var liaimg = document.createElement('img');
						liaimg.setAttribute('src', item.image + '&MaxH=155' );
					lia.appendChild(liaimg);
					var litext = document.createElement('span');
						litext.setAttribute('class','text');
						litext.appendChild(document.createTextNode( item.text ) );
					lia.appendChild(litext);
				li.appendChild(lia);
			ul.appendChild(li);
		});
		carouselbox.appendChild(ul);
		$('li a', parent).each(function () {
			var section = /^(\/[a-z]*\/)([a-zA-Z0-9]*)/.exec($(this).attr('href'))[2];
			var id = $(this).attr('data-fileid');
			var title = $(this).attr('data-title');
			if(section=='MEDIA99'){
				$(this).colorbox({
					width: 710,
					innerHeight: 435,
					opacity: 0.8,
					title: title,
					href: '/section/MEDIA99&template=cbvideo&fileid=' + id,
					onComplete: function () { _gaq.push(['_setAccount', 'UA-1570473-1'], ['_setDomainName', '.visir.is'], ['_setCustomVar', 1, 'Section', section, 3], ['_setCustomVar', 2, 'Sub-Section', title.toUpperCase(), 3], ['_trackPageview']); addVirkCount(); }
				});
			}
		});
		$(parent).jCarouselLite({
			btnNext: $(parent).find('.next'),
			btnPrev: $(parent).find('.prev'),
			scroll: 1
		}).addClass('done');
	});
}
/* End NewsScroll */

/* Radio station info */
function bindRadioInfoBoxes(){
	$('.radioinfo').each(function(){
		var parent = $(this)[0];
			var ul = document.createElement('ul');
		parent.appendChild(ul);
		$.getJSON('/section/FRONTPAGE&template=radiojson', function(data){
			$(data).each(function(i,item){
				var li = document.createElement('li');
					var limynd = document.createElement('div');
						limynd.setAttribute('class','mynd');
							var limyndimg = document.createElement('img');
							limyndimg.setAttribute('src', getRadioImage(item.station));
						limynd.appendChild(limyndimg);
					li.appendChild(limynd);
					var libutton = document.createElement('a');
						libutton.setAttribute('href', getRadioUrl(item.station) );
						libutton.setAttribute('class','listenradio');
						libutton.appendChild(document.createTextNode('Hlusta á stöð'));
					li.appendChild(libutton);
					var litext = document.createElement('span');
						litext.setAttribute('class','text bold');
						litext.appendChild(document.createTextNode('Í loftinu núna:'));
					li.appendChild(litext);
					var lishow = document.createElement('span');
						lishow.setAttribute('class','text');
						lishow.appendChild(document.createTextNode( item.show ));
					li.appendChild(lishow);
				ul.appendChild(li);
			});
			$(parent).addClass('done');
		});
	});
	function getRadioUrl(station) {
		switch(station){
			case 'Bylgjan': return 'http://vefutvarp.visir.is/bylgjan';
			case 'Létt Bylgjan': return 'http://vefutvarp.visir.is/lett_bylgjan';
			case 'Gullbylgjan': return 'http://vefutvarp.visir.is/gull_bylgjan';
			case 'FM957': return 'http://vefutvarp.visir.is/fm957';
			case 'X-ið': return 'http://vefutvarp.visir.is/x977';
			default: return '';
		}
	}
	function getRadioImage(station) {
		switch(station){
			case 'Bylgjan': return '/img/utvarp/stod_bylgjan.png';
			case 'Létt Bylgjan': return '/img/utvarp/stod_lettbylgjan.png';
			case 'Gullbylgjan': return '/img/utvarp/stod_gullbylgjan.png';
			case 'FM957': return '/img/utvarp/stod_fm957.png';
			case 'X-ið': return '/img/utvarp/stod_x.png';
			default: return '';
		}
	}
}
/* End Radio station info */

/* Fill videobox */
function fillVideoBox(url, element){
	$.get(url, function (data) {
        data = data.replace(/(\r\n|[\r\n])/g, "");
        var json = $.parseJSON(data);

        var parent = $(element)[0];
        var ul = document.createElement('ul');
        var patt = /^([\/a-zA-Z0-9&]*=)([A-Z0-9-]*)/;

        jQuery.each(json.items, function (i, item) {
            var fileid = (patt.exec(item.url))[2];

            var ulli = document.createElement('li');
                ulli.setAttribute('class','cbvideo');
                var ullia = document.createElement('a');
                    ullia.setAttribute('href', item.url);
                    ullia.setAttribute('data-fileid', fileid);
                    ullia.setAttribute('data-title', item.text);
                        var ulliaspan = document.createElement('span');
                            ulliaspan.setAttribute('class', 'playbutton');
                    ullia.appendChild(ulliaspan);
                        var ulliaimg = document.createElement('img');
                            ulliaimg.setAttribute('src', item.image + '&MaxW=150');
                            ulliaimg.setAttribute('alt', item.text);
                            ulliaimg.setAttribute('width', 150);
                            ulliaimg.setAttribute('height', 90);
                    ullia.appendChild(ulliaimg);
                    var ulliatext = document.createElement('span');
                        ulliatext.setAttribute('class','text');
                        ulliatext.appendChild(document.createTextNode(item.text + ' ' + item.date));
                    ullia.appendChild(ulliatext);
                ulli.appendChild(ullia);
            ul.appendChild(ulli);
        });

        parent.appendChild(ul);
        $(parent).removeClass('loading');
    });
}
/* End fill videobox */

/* Fill album box */
function bindFillAlbumBox(url, element){
	$.get(url, function (data) {
        data = data.replace(/(\r\n|[\r\n])/g, "");
        var json = $.parseJSON(data);

        var parent = $(element)[0];
        var ul = document.createElement('ul');
        var patt = /^([\/a-zA-Z0-9&]*=)([A-Z0-9-]*)/;

        jQuery.each(json.items, function (i, item) {
            var ulli = document.createElement('li');
            var ullia = document.createElement('a');
            var ullid = document.createElement('div');
                ullid.setAttribute('class', 'crop');
                    ullia.setAttribute('href', item.url);
                    var ulliaimg = document.createElement('img');
                        ulliaimg.setAttribute('src', item.image + '&MaxW=110');
                        ulliaimg.setAttribute('alt', item.text);
                        ullid.appendChild(ulliaimg);
                    var ulliatitle = document.createElement('h3');
                        ulliatitle.appendChild(document.createTextNode(item.text));
                        ullia.appendChild(ullid);
                    ullia.appendChild(ulliatitle);
                ulli.appendChild(ullia);
            ul.appendChild(ulli);
        });

        parent.appendChild(ul);
        $(parent).removeClass('loading');
    });
}
/* End Fill album box */

// TV Stations
function bindTvStationTabs(){
	$('.tvstations .head .logo').click(function(){ 
			$(this).parent().find('ul').toggle(); 
		});

	$('.tvstations ul li').click(function(){
		var ind =  $(this).parents('ul.tabs').find('li').index(this);
		var content = $(this).parents('.tabarea').find('.tabContent:eq('+ind+')')[0];
		var name = $(this).attr('data-value');

		$(this).parents('.tvstations').find('.head').removeClass().addClass('head').addClass(name);

		if(!$(content).hasClass('done'))
		{
			$.getJSON('/section/FRONTPAGE&template=tvstations&station=' + name, function(data){
				var table = document.createElement('table');
				$(data).each(function(i,item){
					var tr = document.createElement('tr');
						var td = document.createElement('td');
							td.appendChild(document.createTextNode(item.date));
						tr.appendChild(td);
						var tdname = document.createElement('td');
							tdname.appendChild(document.createTextNode(item.title));
						tr.appendChild(tdname);
					table.appendChild(tr);
				});
				content.appendChild(table);
				$(content).addClass('done');
			});
		}
		$(this).parent().hide();
	});
}
// End TV Station bindings

function bindFbSend() {
	$('.fb-share, .fb-deila').click(function(){
    	u = location.href;
    	t = document.title;
    	window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(u) + '&t=' + encodeURIComponent(t), 'sharer', 'toolbar=0,status=0,width=626,height=436'); return false;
	});
}

//Bigger ad in T spot

function replaceSwf(targetID, fileid, width, height, url){
   var el = document.getElementById(targetID);
   if(el){
      var div = document.createElement("div");
      el.parentNode.insertBefore(div, el);
      swfobject.removeSWF(targetID);
      div.setAttribute("id", targetID);
   }
   swfobject.embedSWF("http://openad.visir.is/www/images/"+fileid, targetID, width, height, "9.0.0", false, {clickTAG: url, clickTARGET: '_blank'}, {quality:"high",wmode:"opaque",allowscriptaccess:"always"}, {id:targetID} );
}

function bigTopOpen(bigbanner, fallback, url, bannerid, bannertype, open){
	var c = $.cookie(bannerid);
	var cookieid = '';
	cookieid += bannerid || '';
	var replacement = fallback || '1x1.gif';
	var type = bannertype || '';
	var banner = bigbanner || '';
	var ext = /(?:\.([^.]+))?$/.exec(bigbanner)[1];
	var hasFlash = swfobject.hasFlashPlayerVersion("9.0.18");
	if(banner!=='' && type!==4){
		if(type==2 || ext !='swf' || !hasFlash){
			var ibanner = (!hasFlash) ? replacement : bigbanner;
			var a = document.createElement('a');
				a.setAttribute('href', url);
				a.setAttribute('target', '_blank');
				var aimg = document.createElement('img');
					aimg.setAttribute('src','http://openad.visir.is/www/images/'+ibanner);
					aimg.setAttribute('height', 360);
					aimg.setAttribute('width', 1018);
					aimg.setAttribute('alt','');
				a.appendChild(aimg);
			$('body').addClass('big-top');
			document.getElementById('ad_t_inner').appendChild(a);
			//TODO:Write close check if banner is non flash file
		}
		else{
			if(c=='small' && open != 1){
				swfobject.embedSWF("http://openad.visir.is/www/images/"+replacement, "ad_t_inner", "1018", "150", "9.0.0", false, {clickTAG: encodeURIComponent(url), clickTARGET: '_blank'}, {quality:"high",wmode:"opaque",allowscriptaccess:"always"}, {'data-replace':replacement,'data-id':cookieid});
				//TODO: Set Opna as text for created div
			}
			else {
				$('body').addClass('big-top');
				swfobject.embedSWF("http://openad.visir.is/www/images/"+bigbanner, "ad_t_inner", "1018", "360", "9.0.0", false, {clickTAG: encodeURIComponent(url), clickTARGET: '_blank'}, {quality:"high",wmode:"opaque",allowscriptaccess:"always"}, {'data-replace':replacement,'data-id':cookieid});
			}
		}
	}
	else if(type==3){
		var iframe = document.createElement('iframe');
			iframe.setAttribute('src', url);
			iframe.setAttribute('width', 1018);
			iframe.setAttribute('height', 360);
			iframe.setAttribute('frameborder', 0);
			iframe.setAttribute('scrolling', 'no');
		$('body').addClass('big-top');
		document.getElementById('ad_t_inner').appendChild(iframe);
	}
	else if(type==4){

		var adfs = document.createElement('script');
			adfs.setAttribute('src', banner+';click='+url);
		var adfns = document.createElement('noscript');
			var adfnsa = document.createElement('a');
				adfnsa.setAttribute('href', url.replace('adfscript','c')+banner+';c=0');
				adfnsa.setAttribute('target','_blank');
				var adfnsai = document.createElement('img');
					adfnsai.setAttribute('src',url.replace('adfscript','adfserve')+';srctype=4;ord='+Math.floor((Math.random()*10000)+1));
					adfnsai.setAttribute('width',1018);
					adfnsai.setAttribute('height',360);
					adfnsa.appendChild(adfnsai);
				adfns.appendChild(adfnsa);

	}
	//TODO: create div and write css for open close which has open/close functions binded with Loka as text
}
function bigTopClose(){
	var obj = document.getElementById('ad_t_inner');
	var repl = obj.getAttribute('data-replace');
	var cn = obj.getAttribute('data-id');
	$.cookie(cn, "small", { expires: 1 });
	$('body').removeClass('big-top');
	replaceSwf('ad_t_inner', repl, 1018, 150);
	//TODO: Set Opna as text for created div
}

//BigHug
function hugger(center,left,right,state,url,bannerid,smallcenter,open){
	//TODO:Implement close function
	var ext = /(?:\.([^.]+))?$/.exec(center)[1];
	var c = $.cookie(bannerid);
	var cookieid = '';
	cookieid += bannerid || '';
	var replacement = smallcenter || '1x1.gif';
	var height = 150;
	var hasUrl = url || '';
	var hasFlash = swfobject.hasFlashPlayerVersion("9.0.18");
	$('body').addClass('hug');
	if(state!='small'){
		height = 360;
		$('body').addClass('big-top hug');
	}
	//Make center banner
	if(ext!='swf' || !hasFlash){
		var ibanner = (!hasFlash) ? replacement : center;
		var div = document.getElementById('ad_t_inner');
		var centa = document.createElement('a');
			centa.setAttribute('href',url);
			centa.setAttribute('target','_blank');
				var centaimg = document.createElement('img');
					centaimg.setAttribute('src','http://openad.visir.is/www/images/'+ibanner);
					centaimg.setAttribute('height', height);
					centaimg.setAttribute('width', 1018);
					centaimg.setAttribute('alt','');
			centa.appendChild(centaimg);
		div.appendChild(centa);
	}
	else {
		swfobject.embedSWF("http://openad.visir.is/www/images/"+center, "ad_t_inner", "1018", height, "9.0.0", false, {clickTAG: encodeURIComponent(url), clickTARGET: '_blank'}, {quality:"high",wmode:"opaque",allowscriptaccess:"always"}, {'data-replace':replacement,'data-id':cookieid});
	}
	//make left / right
	var divt = document.getElementById('ad_t_inner');
	var divl = document.createElement('div');
		divl.id = 'left-hug';

		var divla = document.createElement('a');
			divla.setAttribute('href',url);
			divla.setAttribute('target','_blank');
				var divlaimg = document.createElement('img');
					divlaimg.setAttribute('src','http://openad.visir.is/www/images/'+left);
					divlaimg.setAttribute('height',850);
					divlaimg.setAttribute('width', 205);
					divlaimg.setAttribute('alt','');
	var divr = document.createElement('div');
		divr.id = 'right-hug';	
		var divra = document.createElement('a');
			divra.setAttribute('href',url);
			divra.setAttribute('target','_blank');
				var divraimg = document.createElement('img');
					divraimg.setAttribute('src','http://openad.visir.is/www/images/'+right);
					divraimg.setAttribute('height',850);
					divraimg.setAttribute('width', 205);
					divraimg.setAttribute('alt','');
	if(hasUrl!==''){
		divla.appendChild(divlaimg); 
		divl.appendChild(divla);
		divra.appendChild(divraimg); 
		divr.appendChild(divra)
	} else {
		divl.appendChild(divlaimg);
		divr.appendChild(divraimg);
	}
	divt.appendChild(divl);
	divt.appendChild(divr);	
}
function customFlashAd(video, mainswf, fb, zone, url, width, height){
	var hasFlash = swfobject.hasFlashPlayerVersion("10.0.0");
	var vid = video || '';
	var fburl = (fb.substring(0, 4) == 'http') ? fb : 'http://openad.visir.is/www/images/'+fb;
	if(!hasFlash){
		var fbbanner = fallback;
			var a = document.createElement('a');
				a.setAttribute('href', url);
				a.setAttribute('target', '_blank');
				var aimg = document.createElement('img');
					aimg.setAttribute('src', fburl);
					aimg.setAttribute('height', width);
					aimg.setAttribute('width', height);
					aimg.setAttribute('alt','auglysing');
				a.appendChild(aimg);
			document.getElementById(zone).appendChild(a);
	}
	else{
		swfobject.embedSWF('http://openad.visir.is/www/images/'+mainswf, zone,width,height,'10.0.0',false, {clickTAG:encodeURIComponent(url),clickTARGET:'_blank',cntsrc:vid},{quality:'high',wmode:'opaque',allowscriptaccess:'always'});
    }
}
function getMegaNewItems(parent){
	$.getJSON('/section/FRONTPAGE&template=json&type=promo', function(data){
				$(data.items).each(function(i,item){
					var divi = document.createElement('div');
						divi.className='new-item '+item.type;
							var divia = document.createElement('a');
								divia.setAttribute('href', item.url);
								var diviadiv = document.createElement('div');
									diviadiv.className='image';
									var diviaimg = document.createElement('img');
										diviaimg.setAttribute('src', item.image);
										diviaimg.setAttribute('alt','');
									diviadiv.appendChild(diviaimg);
									var diviaspan = document.createElement('span');
										diviaspan.className='mm-overlay';
										diviaspan.innerHTML = '&nbsp;';
									diviadiv.appendChild(diviaspan);
								divia.appendChild(diviadiv);
									var diviatype = document.createElement('div');
										diviatype.className='category '+item.cssClass;
										var diviatypeb = document.createElement('span');
											diviatypeb.className='bullet';
										diviatype.appendChild(diviatypeb);
										diviatype.appendChild(document.createTextNode(item.catname));
									divia.appendChild(diviatype);
									var diviah3 = document.createElement('h3');
										diviah3.appendChild(document.createTextNode(item.title));
									divia.appendChild(diviah3);
							divi.appendChild(divia);
					document.getElementById('mega-new-items').appendChild(divi);
				});
		});
	
}
function buildMegaMenu(parent, sort){		
		$.getJSON('/section/FRONTPAGE&template=json&type=menu&sort='+sort, function(data){
				var column = Math.round(data.total/5)+1, count = 1, parentulid=0;

				for(var n = 0; n < 5; n++){
				var div = document.createElement('div');
					div.className='group';
					var ul = document.createElement('ul');
						ul.id='parent'+n;
						ul.className='menu-group';
						div.appendChild(ul);
					document.getElementById('mega-menu-items').appendChild(div);
				}
				$(data.items).each(function(i,items){
					var li = document.createElement('li');
						li.className=(items.letter=='A') ? 'letter first' : 'letter';
						if(items.hasOwnProperty('letter')){
							var lispan = document.createElement('span');
								lispan.innerHTML = items.letter;
								lispan.className='letter-group';
							li.appendChild(lispan);
							document.getElementById('parent'+parentulid).appendChild(li);
						for(var i = 0; i < items.children.length; i++){
									if(items.children[i].profilename != ''){
										var liulli = document.createElement('li');
											var liullia = document.createElement('a');
												liullia.setAttribute('href', items.children[i].url);
												var liullispan = document.createElement('span');
													liullispan.className='child-bullet';
													liullispan.innerHTML = '&nbsp;'
												liullia.appendChild(liullispan);
												liullia.appendChild(document.createTextNode(items.children[i].profilename));
											liulli.appendChild(liullia);
										}
										if((count%column)==0){
											parentulid++;
										}
										count++;
										document.getElementById('parent'+parentulid).appendChild(liulli);
								}
							}
						else{
						var lia = document.createElement('a');
							lia.setAttribute('href',items.url);
							var liaspan = document.createElement('span');
								liaspan.innerHTML=item.profilename;
								liaspan.className="group";
								lia.appendChild(liaspan);
							li.appendChild(lia);
						}						
			});
			if(!$(parent).hasClass("done")){
				getMegaNewItems(parent);
			}
		}).success(function(){
			$(parent).parent().addClass('done');
		});
}

function autoIframe(frameId) {
  document.domain = "visir.is";
  try {
    frame = document.getElementById(frameId);
    innerDoc = (frame.contentDocument) ?
               frame.contentDocument : frame.contentWindow.document;
    objToResize = (frame.style) ? frame.style : frame;
    objToResize.height = innerDoc.body.scrollHeight + 10 + 'px';
  }
  catch (err) {
    window.status = err.message;
  }
}
function check_email(efield) {
	ok = "1234567890qwertyuiop[]asdfghjklzxcvbnm.@-_QWERTYUIOPASDFGHJKLZXCVBNM";
	for (i = 0; i < efield.length; i++) {
		if (ok.indexOf(efield.charAt(i)) < 0) {
			return (false);
		}
	}
	if (document.images) {
		re = /(@.*@)|(\.\.)|(^\.)|(^@)|(@$)|(\.$)|(@\.)/;
		re_two = /^.+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		if (!efield.match(re) && efield.match(re_two)) {
			return (-1);
		}
	}
}


//temp 
function bindCurrChannel(){
	$('.radio .m-box-channels ul li').click(function(){
		
		var ind =  $(this).parents('ul.tabs').find('li').index(this);
		var content = $(this).parents('.tabarea').find('.tabContent:eq('+ind+')')[0];
		var name = $(this).attr('data-value');

		//$(this).parents('.tvstations').find('.head').removeClass().addClass('head').addClass(name);

		if(!$(content).hasClass('done'))
		{
			$(content).addClass('loading');
			$.getJSON('/section/FRONTPAGE&template=radiojson&type=radio&station=' + name, function(data){
				$(data).each(function(i,item){
					var div = document.createElement('div');
						div.className='channel-head';
						if(item.visirimg !== undefined && item.visirimg !== ''){
							var divspan = document.createElement('span');
								divspan.className='show-img';
								var divsimg = document.createElement('img');
									divsimg.setAttribute('src', 'http://img.visir.is/apps/pbcsi.dll/urlget?url='+item.visirimg+'&maxW=98');
									divsimg.setAttribute('alt', item.show);
								divspan.appendChild(divsimg);
							div.appendChild(divspan);
						}
						var h4 = document.createElement('h4');
							h4.appendChild(document.createTextNode(item.station));
							var h4i = document.createElement('i');
								h4i.className='icon-'+name;
							h4.appendChild(h4i);
						div.appendChild(h4);
						var divi = document.createElement('div');
							divi.className='channel-info';
							var icon = document.createElement('i');
								icon.className='icon-onair';
							divi.appendChild(icon);
							var h3 = document.createElement('h3');
								h3.appendChild(document.createTextNode(item.show));
							divi.appendChild(h3);
							var span = document.createElement('span');
								span.className='show-time';
								span.appendChild(document.createTextNode(item.timefrom+'-'+item.timeto));
							divi.appendChild(span);
						div.appendChild(divi);
						content.appendChild(div);
						
						var diviii = document.createElement('div');
							diviii.id='now-'+name;
							var a = document.createElement('a');
								a.className='m-box-listen';
								a.setAttribute('href', 'http://vefutvarp.visir.is/player/#/'+name);
								var iconi = document.createElement('i');
									iconi.className='icon-listen';
								a.appendChild(iconi);
								a.appendChild(document.createTextNode('Hlusta'));
							diviii.appendChild(a);
							var npa = document.createElement('div');
								npa.className='np-artist';
								npa.setAttribute('data-artist', item.artistnow);
								npa.appendChild(document.createTextNode(item.artistnow));
							diviii.appendChild(npa);
							var nps = document.createElement('div');
							    nps.className='np-song';
								nps.setAttribute('data-artist', item.songnow);
								nps.appendChild(document.createTextNode(item.songnow));
							diviii.appendChild(nps);
							if(item.artistnow!=''){
								var npi = document.createElement('div');
									npi.id='np-img-'+name;
								diviii.appendChild(npi);
							}
						content.appendChild(diviii);
					if(item.artistnow!=''){
						displayAjax('/section/FRONTPAGE&template=radiojson&type=artist&station='+name+'&artist='+encodeURIComponent(item.artistnow), 'np-img-'+name);
					}
					$(content).removeClass('loading').addClass('done');
				});
			});
		}
		//$(this).parent().hide();
	});
	$('.radio .m-box-channels ul li:first').click();
}
