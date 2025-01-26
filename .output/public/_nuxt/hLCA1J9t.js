import{aw as Re,ax as Ne,L as _e,z as H,R as I,ay as ce,K as U,r as W,P as q,aq as de,F as M,a7 as $,az as Ke,i as A,S as me,ar as V,am as xe,D as ge,aA as He,ap as ye,aa as Ve,aB as Se,ac as Ze,a9 as X,ag as Je,o as Qe,aC as $e,a6 as et,aD as tt,aE as nt,a0 as ot,O as at,a1 as rt,af as it,a8 as st,e as lt,aF as ct,a2 as ut,aj as ft,a3 as vt,X as dt}from"./DPDus2Qf.js";import{i as Z,j as mt,s as ue,k as gt,l as De,n as Ie,B as ae,o as Oe}from"./XhXS6RbD.js";import{q as pe,r as re,s as ie,t as ke,v as Pe,w as yt,x as ht}from"./CvggJvAd.js";import{m as wt,a as Et,u as bt}from"./bY8QF4H3.js";import{m as xt,a as St,k as Ot,b as pt,u as kt}from"./CLGGIAXn.js";import{m as Pt,M as At}from"./DtxhDzDT.js";const Q=new WeakMap;function Ct(e,n){Object.keys(n).forEach(t=>{if(Re(t)){const o=Ne(t),a=Q.get(e);if(n[t]==null)a==null||a.forEach(i=>{const[c,r]=i;c===o&&(e.removeEventListener(o,r),a.delete(i))});else if(!a||![...a].some(i=>i[0]===o&&i[1]===n[t])){e.addEventListener(o,n[t]);const i=a||new Set;i.add([o,n[t]]),Q.has(e)||Q.set(e,i)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function Tt(e,n){Object.keys(n).forEach(t=>{if(Re(t)){const o=Ne(t),a=Q.get(e);a==null||a.forEach(i=>{const[c,r]=i;c===o&&(e.removeEventListener(o,r),a.delete(i))})}else e.removeAttribute(t)})}function We(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function Lt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?Bt(e):he(e))return e;e=e.parentElement}return document.scrollingElement}function te(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(he(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function he(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Bt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function Ft(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Mt=U({target:[Object,Array]},"v-dialog-transition"),dn=_e()({name:"VDialogTransition",props:Mt(),setup(e,n){let{slots:t}=n;const o={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,i){var w;await new Promise(m=>requestAnimationFrame(m)),await new Promise(m=>requestAnimationFrame(m)),a.style.visibility="";const{x:c,y:r,sx:u,sy:v,speed:s}=Ce(e.target,a),h=Z(a,[{transform:`translate(${c}px, ${r}px) scale(${u}, ${v})`,opacity:0},{}],{duration:225*s,easing:mt});(w=Ae(a))==null||w.forEach(m=>{Z(m,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*s,easing:ue})}),h.finished.then(()=>i())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,i){var w;await new Promise(m=>requestAnimationFrame(m));const{x:c,y:r,sx:u,sy:v,speed:s}=Ce(e.target,a);Z(a,[{},{transform:`translate(${c}px, ${r}px) scale(${u}, ${v})`,opacity:0}],{duration:125*s,easing:gt}).finished.then(()=>i()),(w=Ae(a))==null||w.forEach(m=>{Z(m,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*s,easing:ue})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?H(ce,I({name:"dialog-transition"},o,{css:!1}),t):H(ce,{name:"dialog-transition"},t)}});function Ae(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function Ce(e,n){const t=De(e),o=Ie(n),[a,i]=getComputedStyle(n).transformOrigin.split(" ").map(k=>parseFloat(k)),[c,r]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let u=t.left+t.width/2;c==="left"||r==="left"?u-=t.width/2:(c==="right"||r==="right")&&(u+=t.width/2);let v=t.top+t.height/2;c==="top"||r==="top"?v-=t.height/2:(c==="bottom"||r==="bottom")&&(v+=t.height/2);const s=t.width/o.width,h=t.height/o.height,w=Math.max(1,s,h),m=s/w||0,d=h/w||0,f=o.width*o.height/(window.innerWidth*window.innerHeight),p=f>.12?Math.min(1.5,(f-.12)*10+1):1;return{x:u-(a+o.left),y:v-(i+o.top),sx:m,sy:d,speed:p}}function se(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Rt(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Te(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,i=t==="top"?0:t==="bottom"?n.height:t;return se({x:a,y:i},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,i=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return se({x:a,y:i},n)}return se({x:n.width/2,y:n.height/2},n)}const qe={static:Ht,connected:$t},Nt=U({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in qe},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function _t(e,n){const t=W({}),o=W();q&&de(()=>!!(n.isActive.value&&e.locationStrategy),i=>{var c,r;M(()=>e.locationStrategy,i),$(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(c=e.locationStrategy(n,e,t))==null?void 0:c.updateLocation:o.value=(r=qe[e.locationStrategy](n,e,t))==null?void 0:r.updateLocation});function a(i){var c;(c=o.value)==null||c.call(o,i)}return{contentStyles:t,updateLocation:o}}function Ht(){}function Vt(e,n){const t=Ie(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function $t(e,n,t){(Array.isArray(e.target.value)||Ft(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:i}=Ke(()=>{const d=pe(n.location,e.isRtl.value),f=n.origin==="overlap"?d:n.origin==="auto"?re(d):pe(n.origin,e.isRtl.value);return d.side===f.side&&d.align===ie(f).align?{preferredAnchor:ke(d),preferredOrigin:ke(f)}:{preferredAnchor:d,preferredOrigin:f}}),[c,r,u,v]=["minWidth","minHeight","maxWidth","maxHeight"].map(d=>A(()=>{const f=parseFloat(n[d]);return isNaN(f)?1/0:f})),s=A(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const d=n.offset.split(" ").map(parseFloat);return d.length<2&&d.push(0),d}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let h=!1;const w=new ResizeObserver(()=>{h&&m()});M([e.target,e.contentEl],(d,f)=>{let[p,k]=d,[S,x]=f;S&&!Array.isArray(S)&&w.unobserve(S),p&&!Array.isArray(p)&&w.observe(p),x&&w.unobserve(x),k&&w.observe(k)},{immediate:!0}),$(()=>{w.disconnect()});function m(){if(h=!1,requestAnimationFrame(()=>h=!0),!e.target.value||!e.contentEl.value)return;const d=De(e.target.value),f=Vt(e.contentEl.value,e.isRtl.value),p=te(e.contentEl.value),k=12;p.length||(p.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(f.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),f.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const S=p.reduce((O,b)=>{const g=b.getBoundingClientRect(),E=new ae({x:b===document.documentElement?0:g.x,y:b===document.documentElement?0:g.y,width:b.clientWidth,height:b.clientHeight});return O?new ae({x:Math.max(O.left,E.left),y:Math.max(O.top,E.top),width:Math.min(O.right,E.right)-Math.max(O.left,E.left),height:Math.min(O.bottom,E.bottom)-Math.max(O.top,E.top)}):E},void 0);S.x+=k,S.y+=k,S.width-=k*2,S.height-=k*2;let x={anchor:a.value,origin:i.value};function T(O){const b=new ae(f),g=Te(O.anchor,d),E=Te(O.origin,b);let{x:N,y:_}=Rt(g,E);switch(O.anchor.side){case"top":_-=s.value[0];break;case"bottom":_+=s.value[0];break;case"left":N-=s.value[0];break;case"right":N+=s.value[0];break}switch(O.anchor.align){case"top":_-=s.value[1];break;case"bottom":_+=s.value[1];break;case"left":N-=s.value[1];break;case"right":N+=s.value[1];break}return b.x+=N,b.y+=_,b.width=Math.min(b.width,u.value),b.height=Math.min(b.height,v.value),{overflows:Oe(b,S),x:N,y:_}}let B=0,R=0;const P={x:0,y:0},l={x:!1,y:!1};let L=-1;for(;!(L++>10);){const{x:O,y:b,overflows:g}=T(x);B+=O,R+=b,f.x+=O,f.y+=b;{const E=Pe(x.anchor),N=g.x.before||g.x.after,_=g.y.before||g.y.after;let j=!1;if(["x","y"].forEach(C=>{if(C==="x"&&N&&!l.x||C==="y"&&_&&!l.y){const D={anchor:{...x.anchor},origin:{...x.origin}},z=C==="x"?E==="y"?ie:re:E==="y"?re:ie;D.anchor=z(D.anchor),D.origin=z(D.origin);const{overflows:Y}=T(D);(Y[C].before<=g[C].before&&Y[C].after<=g[C].after||Y[C].before+Y[C].after<(g[C].before+g[C].after)/2)&&(x=D,j=l[C]=!0)}}),j)continue}g.x.before&&(B+=g.x.before,f.x+=g.x.before),g.x.after&&(B-=g.x.after,f.x-=g.x.after),g.y.before&&(R+=g.y.before,f.y+=g.y.before),g.y.after&&(R-=g.y.after,f.y-=g.y.after);{const E=Oe(f,S);P.x=S.width-E.x.before-E.x.after,P.y=S.height-E.y.before-E.y.after,B+=E.x.before,f.x+=E.x.before,R+=E.y.before,f.y+=E.y.before}break}const oe=Pe(x.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${x.anchor.side} ${x.anchor.align}`,transformOrigin:`${x.origin.side} ${x.origin.align}`,top:V(le(R)),left:e.isRtl.value?void 0:V(le(B)),right:e.isRtl.value?V(le(-B)):void 0,minWidth:V(oe==="y"?Math.min(c.value,d.width):c.value),maxWidth:V(Le(xe(P.x,c.value===1/0?0:c.value,u.value))),maxHeight:V(Le(xe(P.y,r.value===1/0?0:r.value,v.value)))}),{available:P,contentBox:f}}return M(()=>[a.value,i.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>m()),me(()=>{const d=m();if(!d)return;const{available:f,contentBox:p}=d;p.height>f.y&&requestAnimationFrame(()=>{m(),requestAnimationFrame(()=>{m()})})}),{updateLocation:m}}function le(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Le(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let fe=!0;const ne=[];function Dt(e){!fe||ne.length?(ne.push(e),ve()):(fe=!1,e(),ve())}let Be=-1;function ve(){cancelAnimationFrame(Be),Be=requestAnimationFrame(()=>{const e=ne.shift();e&&e(),ne.length?ve():fe=!0})}const ee={none:null,close:qt,block:jt,reposition:zt},It=U({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in ee}},"VOverlay-scroll-strategies");function Wt(e,n){if(!q)return;let t;ge(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=He(),await new Promise(o=>setTimeout(o)),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=ee[e.scrollStrategy])==null||o.call(ee,n,e,t)}))}),$(()=>{t==null||t.stop()})}function qt(e){function n(t){e.isActive.value=!1}je(e.targetEl.value??e.contentEl.value,n)}function jt(e,n){var c;const t=(c=e.root.value)==null?void 0:c.offsetParent,o=[...new Set([...te(e.targetEl.value,n.contained?t:void 0),...te(e.contentEl.value,n.contained?t:void 0)])].filter(r=>!r.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,i=(r=>he(r)&&r)(t||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((r,u)=>{r.style.setProperty("--v-body-scroll-x",V(-r.scrollLeft)),r.style.setProperty("--v-body-scroll-y",V(-r.scrollTop)),r!==document.documentElement&&r.style.setProperty("--v-scrollbar-offset",V(a)),r.classList.add("v-overlay-scroll-blocked")}),$(()=>{o.forEach((r,u)=>{const v=parseFloat(r.style.getPropertyValue("--v-body-scroll-x")),s=parseFloat(r.style.getPropertyValue("--v-body-scroll-y")),h=r.style.scrollBehavior;r.style.scrollBehavior="auto",r.style.removeProperty("--v-body-scroll-x"),r.style.removeProperty("--v-body-scroll-y"),r.style.removeProperty("--v-scrollbar-offset"),r.classList.remove("v-overlay-scroll-blocked"),r.scrollLeft=-v,r.scrollTop=-s,r.style.scrollBehavior=h}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function zt(e,n,t){let o=!1,a=-1,i=-1;function c(r){Dt(()=>{var s,h;const u=performance.now();(h=(s=e.updateLocation).value)==null||h.call(s,r),o=(performance.now()-u)/(1e3/60)>2})}i=(typeof requestIdleCallback>"u"?r=>r():requestIdleCallback)(()=>{t.run(()=>{je(e.targetEl.value??e.contentEl.value,r=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{c(r)})})):c(r)})})}),$(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(i),cancelAnimationFrame(a)})}function je(e,n){const t=[document,...te(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),$(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const Yt=Symbol.for("vuetify:v-menu"),Xt=U({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...wt()},"VOverlay-activator");function Ut(e,n){let{isActive:t,isTop:o,contentEl:a}=n;const i=ye("useActivator"),c=W();let r=!1,u=!1,v=!0;const s=A(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),h=A(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!s.value),{runOpenDelay:w,runCloseDelay:m}=Et(e,l=>{l===(e.openOnHover&&r||s.value&&u)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==l&&(v=!0),t.value=l)}),d=W(),f={onClick:l=>{l.stopPropagation(),c.value=l.currentTarget||l.target,t.value||(d.value=[l.clientX,l.clientY]),t.value=!t.value},onMouseenter:l=>{var L;(L=l.sourceCapabilities)!=null&&L.firesTouchEvents||(r=!0,c.value=l.currentTarget||l.target,w())},onMouseleave:l=>{r=!1,m()},onFocus:l=>{Ze(l.target,":focus-visible")!==!1&&(u=!0,l.stopPropagation(),c.value=l.currentTarget||l.target,w())},onBlur:l=>{u=!1,l.stopPropagation(),m()}},p=A(()=>{const l={};return h.value&&(l.onClick=f.onClick),e.openOnHover&&(l.onMouseenter=f.onMouseenter,l.onMouseleave=f.onMouseleave),s.value&&(l.onFocus=f.onFocus,l.onBlur=f.onBlur),l}),k=A(()=>{const l={};if(e.openOnHover&&(l.onMouseenter=()=>{r=!0,w()},l.onMouseleave=()=>{r=!1,m()}),s.value&&(l.onFocusin=()=>{u=!0,w()},l.onFocusout=()=>{u=!1,m()}),e.closeOnContentClick){const L=Ve(Yt,null);l.onClick=()=>{t.value=!1,L==null||L.closeParents()}}return l}),S=A(()=>{const l={};return e.openOnHover&&(l.onMouseenter=()=>{v&&(r=!0,v=!1,w())},l.onMouseleave=()=>{r=!1,m()}),l});M(o,l=>{var L;l&&(e.openOnHover&&!r&&(!s.value||!u)||s.value&&!u&&(!e.openOnHover||!r))&&!((L=a.value)!=null&&L.contains(document.activeElement))&&(t.value=!1)}),M(t,l=>{l||setTimeout(()=>{d.value=void 0})},{flush:"post"});const x=Se();ge(()=>{x.value&&me(()=>{c.value=x.el})});const T=Se(),B=A(()=>e.target==="cursor"&&d.value?d.value:T.value?T.el:ze(e.target,i)||c.value),R=A(()=>Array.isArray(B.value)?void 0:B.value);let P;return M(()=>!!e.activator,l=>{l&&q?(P=He(),P.run(()=>{Gt(e,i,{activatorEl:c,activatorEvents:p})})):P&&P.stop()},{flush:"post",immediate:!0}),$(()=>{P==null||P.stop()}),{activatorEl:c,activatorRef:x,target:B,targetEl:R,targetRef:T,activatorEvents:p,contentEvents:k,scrimEvents:S}}function Gt(e,n,t){let{activatorEl:o,activatorEvents:a}=t;M(()=>e.activator,(u,v)=>{if(v&&u!==v){const s=r(v);s&&c(s)}u&&me(()=>i())},{immediate:!0}),M(()=>e.activatorProps,()=>{i()}),$(()=>{c()});function i(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&Ct(u,I(a.value,v))}function c(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&Tt(u,I(a.value,v))}function r(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const v=ze(u,n);return o.value=(v==null?void 0:v.nodeType)===Node.ELEMENT_NODE?v:void 0,o.value}}function ze(e,n){var o,a;if(!e)return;let t;if(e==="parent"){let i=(a=(o=n==null?void 0:n.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;i!=null&&i.hasAttribute("data-no-activator");)i=i.parentNode;t=i}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function Kt(){if(!q)return X(!1);const{ssr:e}=Je();if(e){const n=X(!1);return Qe(()=>{n.value=!0}),n}else return X(!0)}const Zt=U({eager:Boolean},"lazy");function Jt(e,n){const t=X(!1),o=A(()=>t.value||e.eager||n.value);M(n,()=>t.value=!0);function a(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:o,onAfterLeave:a}}const Fe=Symbol.for("vuetify:stack"),K=$e([]);function Qt(e,n,t){const o=ye("useStack"),a=!t,i=Ve(Fe,void 0),c=$e({activeChildren:new Set});et(Fe,c);const r=X(+n.value);de(e,()=>{var h;const s=(h=K.at(-1))==null?void 0:h[1];r.value=s?s+10:+n.value,a&&K.push([o.uid,r.value]),i==null||i.activeChildren.add(o.uid),$(()=>{if(a){const w=nt(K).findIndex(m=>m[0]===o.uid);K.splice(w,1)}i==null||i.activeChildren.delete(o.uid)})});const u=X(!0);a&&ge(()=>{var h;const s=((h=K.at(-1))==null?void 0:h[0])===o.uid;setTimeout(()=>u.value=s)});const v=A(()=>!c.activeChildren.size);return{globalTop:tt(u),localTop:v,stackStyles:A(()=>({zIndex:r.value}))}}function en(e){return{teleportTarget:A(()=>{const t=e();if(t===!0||!q)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=[...o.children].find(i=>i.matches(".v-overlay-container"));return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function tn(){return!0}function Ye(e,n,t){if(!e||Xe(e,t)===!1)return!1;const o=We(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(i=>i==null?void 0:i.contains(e.target))}function Xe(e,n){return(typeof n.value=="object"&&n.value.closeConditional||tn)(e)}function nn(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;e.shadowTarget=e.target,n._clickOutside.lastMousedownWasOutside&&Ye(e,n,t)&&setTimeout(()=>{Xe(e,t)&&o&&o(e)},0)}function Me(e,n){const t=We(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const on={mounted(e,n){const t=a=>nn(a,e,n),o=a=>{e._clickOutside.lastMousedownWasOutside=Ye(a,e,n)};Me(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},beforeUnmount(e,n){e._clickOutside&&(Me(e,t=>{var i;if(!t||!((i=e._clickOutside)!=null&&i[n.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[n.instance.$.uid])}};function an(e){const{modelValue:n,color:t,...o}=e;return H(ce,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&H("div",I({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const rn=U({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...Xt(),...xt(),...St(),...Zt(),...Nt(),...It(),...ot(),...Pt()},"VOverlay"),mn=_e()({name:"VOverlay",directives:{ClickOutside:on},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...rn()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const i=ye("VOverlay"),c=W(),r=W(),u=W(),v=at(e,"modelValue"),s=A({get:()=>v.value,set:y=>{y&&e.disabled||(v.value=y)}}),{themeClasses:h}=rt(e),{rtlClasses:w,isRtl:m}=it(),{hasContent:d,onAfterLeave:f}=Jt(e,s),p=Ot(A(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:k,localTop:S,stackStyles:x}=Qt(s,st(e,"zIndex"),e._disableGlobalStack),{activatorEl:T,activatorRef:B,target:R,targetEl:P,targetRef:l,activatorEvents:L,contentEvents:oe,scrimEvents:O}=Ut(e,{isActive:s,isTop:S,contentEl:u}),{teleportTarget:b}=en(()=>{var G,Ee,be;const y=e.attach||e.contained;if(y)return y;const F=((G=T==null?void 0:T.value)==null?void 0:G.getRootNode())||((be=(Ee=i.proxy)==null?void 0:Ee.$el)==null?void 0:be.getRootNode());return F instanceof ShadowRoot?F:!1}),{dimensionStyles:g}=pt(e),E=Kt(),{scopeId:N}=bt();M(()=>e.disabled,y=>{y&&(s.value=!1)});const{contentStyles:_,updateLocation:j}=_t(e,{isRtl:m,contentEl:u,target:R,isActive:s});Wt(e,{root:c,contentEl:u,targetEl:P,isActive:s,updateLocation:j});function C(y){a("click:outside",y),e.persistent?J():s.value=!1}function D(y){return s.value&&k.value&&(!e.scrim||y.target===r.value||y instanceof MouseEvent&&y.shadowTarget===r.value)}q&&M(s,y=>{y?window.addEventListener("keydown",z):window.removeEventListener("keydown",z)},{immediate:!0}),lt(()=>{q&&window.removeEventListener("keydown",z)});function z(y){var F,G;y.key==="Escape"&&k.value&&(e.persistent?J():(s.value=!1,(F=u.value)!=null&&F.contains(document.activeElement)&&((G=T.value)==null||G.focus())))}const Y=yt();de(()=>e.closeOnBack,()=>{ht(Y,y=>{k.value&&s.value?(y(!1),e.persistent?J():s.value=!1):y()})});const we=W();M(()=>s.value&&(e.absolute||e.contained)&&b.value==null,y=>{if(y){const F=Lt(c.value);F&&F!==document.scrollingElement&&(we.value=F.scrollTop)}});function J(){e.noClickAnimation||u.value&&Z(u.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ue})}function Ue(){a("afterEnter")}function Ge(){f(),a("afterLeave")}return kt(()=>{var y;return H(dt,null,[(y=t.activator)==null?void 0:y.call(t,{isActive:s.value,targetRef:l,props:I({ref:B},L.value,e.activatorProps)}),E.value&&d.value&&H(ct,{disabled:!b.value,to:b.value},{default:()=>[H("div",I({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},h.value,w.value,e.class],style:[x.value,{"--v-overlay-opacity":e.opacity,top:V(we.value)},e.style],ref:c},N,o),[H(an,I({color:p,modelValue:s.value&&!!e.scrim,ref:r},O.value),null),H(At,{appear:!0,persisted:!0,transition:e.transition,target:R.value,onAfterEnter:Ue,onAfterLeave:Ge},{default:()=>{var F;return[ut(H("div",I({ref:u,class:["v-overlay__content",e.contentClass],style:[g.value,_.value]},oe.value,e.contentProps),[(F=t.default)==null?void 0:F.call(t,{isActive:s})]),[[ft,s.value],[vt("click-outside"),{handler:C,closeConditional:D,include:()=>[T.value]}]])]}})])]})])}),{activatorEl:T,scrimEl:r,target:R,animateClick:J,contentEl:u,globalTop:k,localTop:S,updateLocation:j}}});export{dn as V,mn as a,Yt as b,Zt as c,Lt as g,rn as m,Jt as u};
