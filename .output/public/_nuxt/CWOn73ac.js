import{d as ne,V as oe}from"./BejPpa3U.js";import{K as U,L as K,z as E,R as L,a9 as x,i as w,ar as le,o as Q,F as R,e as j,aQ as ue,aq as Y,D as ie,a7 as re,ae as se,a0 as ce,af as ve,a1 as de,a8 as z,ag as me,O as fe,r as he,V as ge,ay as ye,X as we,S as be}from"./DPDus2Qf.js";import{u as G,d as pe,m as ke,e as Se,f as Ee,c as Ve,g as Te,k as F,h as Be,i as Pe}from"./CLGGIAXn.js";import{m as Me,u as xe,a as Ce}from"./bY8QF4H3.js";import{m as De,u as Ie}from"./DR02Mfiq.js";import{w as Re,y as Ne}from"./CvggJvAd.js";import{u as He}from"./UvCbOmDy.js";import{a as Ye,V as Le}from"./DtxhDzDT.js";const Oe=U({...ne({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),tt=K()({name:"VAppBarNavIcon",props:Oe(),setup(e,s){let{slots:u}=s;return G(()=>E(oe,L(e,{class:["v-app-bar-nav-icon"]}),u)),{}}});function We(e){let{rootEl:s,isSticky:u,layoutItemStyles:V}=e;const t=x(!1),r=x(0),a=w(()=>{const b=typeof t.value=="boolean"?"top":t.value;return[u.value?{top:"auto",bottom:"auto",height:void 0}:void 0,t.value?{[b]:le(r.value)}:{top:V.value.top}]});Q(()=>{R(u,b=>{b?window.addEventListener("scroll",S,{passive:!0}):window.removeEventListener("scroll",S)},{immediate:!0})}),j(()=>{window.removeEventListener("scroll",S)});let g=0;function S(){const b=g>window.scrollY?"up":"down",v=s.value.getBoundingClientRect(),d=parseFloat(V.value.top??0),c=window.scrollY-Math.max(0,r.value-d),f=v.height+Math.max(r.value,d)-window.scrollY-window.innerHeight,y=parseFloat(getComputedStyle(s.value).getPropertyValue("--v-body-scroll-y"))||0;v.height<window.innerHeight-d?(t.value="top",r.value=d):b==="up"&&t.value==="bottom"||b==="down"&&t.value==="top"?(r.value=window.scrollY+v.top-y,t.value=!0):b==="down"&&f<=0?(r.value=0,t.value="bottom"):b==="up"&&c<=0&&(y?t.value!=="top"&&(r.value=-c+y+d,t.value="top"):(r.value=v.top+c,t.value="top")),g=window.scrollY}return{isStuck:t,stickyStyles:a}}const _e=100,Xe=20;function q(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function Z(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let s=0;for(let u=e.length-1;u>0;u--){if(e[u].t===e[u-1].t)continue;const V=q(s),t=(e[u].d-e[u-1].d)/(e[u].t-e[u-1].t);s+=(t-V)*Math.abs(t),u===e.length-1&&(s*=.5)}return q(s)*1e3}function Ae(){const e={};function s(t){Array.from(t.changedTouches).forEach(r=>{(e[r.identifier]??(e[r.identifier]=new ue(Xe))).push([t.timeStamp,r])})}function u(t){Array.from(t.changedTouches).forEach(r=>{delete e[r.identifier]})}function V(t){var b;const r=(b=e[t])==null?void 0:b.values().reverse();if(!r)throw new Error(`No samples for touch id ${t}`);const a=r[0],g=[],S=[];for(const v of r){if(a[0]-v[0]>_e)break;g.push({t:v[0],d:v[1].clientX}),S.push({t:v[0],d:v[1].clientY})}return{x:Z(g),y:Z(S),get direction(){const{x:v,y:d}=this,[c,f]=[Math.abs(v),Math.abs(d)];return c>f&&v>=0?"right":c>f&&v<=0?"left":f>c&&d>=0?"down":f>c&&d<=0?"up":$e()}}}return{addMovement:s,endTouch:u,getVelocity:V}}function $e(){throw new Error}function ze(e){let{el:s,isActive:u,isTemporary:V,width:t,touchless:r,position:a}=e;Q(()=>{window.addEventListener("touchstart",B,{passive:!0}),window.addEventListener("touchmove",T,{passive:!1}),window.addEventListener("touchend",N,{passive:!0})}),j(()=>{window.removeEventListener("touchstart",B),window.removeEventListener("touchmove",T),window.removeEventListener("touchend",N)});const g=w(()=>["left","right"].includes(a.value)),{addMovement:S,endTouch:b,getVelocity:v}=Ae();let d=!1;const c=x(!1),f=x(0),y=x(0);let k;function C(n,o){return(a.value==="left"?n:a.value==="right"?document.documentElement.clientWidth-n:a.value==="top"?n:a.value==="bottom"?document.documentElement.clientHeight-n:M())-(o?t.value:0)}function D(n){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const l=a.value==="left"?(n-y.value)/t.value:a.value==="right"?(document.documentElement.clientWidth-n-y.value)/t.value:a.value==="top"?(n-y.value)/t.value:a.value==="bottom"?(document.documentElement.clientHeight-n-y.value)/t.value:M();return o?Math.max(0,Math.min(1,l)):l}function B(n){if(r.value)return;const o=n.changedTouches[0].clientX,l=n.changedTouches[0].clientY,i=25,h=a.value==="left"?o<i:a.value==="right"?o>document.documentElement.clientWidth-i:a.value==="top"?l<i:a.value==="bottom"?l>document.documentElement.clientHeight-i:M(),m=u.value&&(a.value==="left"?o<t.value:a.value==="right"?o>document.documentElement.clientWidth-t.value:a.value==="top"?l<t.value:a.value==="bottom"?l>document.documentElement.clientHeight-t.value:M());(h||m||u.value&&V.value)&&(k=[o,l],y.value=C(g.value?o:l,u.value),f.value=D(g.value?o:l),d=y.value>-20&&y.value<80,b(n),S(n))}function T(n){const o=n.changedTouches[0].clientX,l=n.changedTouches[0].clientY;if(d){if(!n.cancelable){d=!1;return}const h=Math.abs(o-k[0]),m=Math.abs(l-k[1]);(g.value?h>m&&h>3:m>h&&m>3)?(c.value=!0,d=!1):(g.value?m:h)>3&&(d=!1)}if(!c.value)return;n.preventDefault(),S(n);const i=D(g.value?o:l,!1);f.value=Math.max(0,Math.min(1,i)),i>1?y.value=C(g.value?o:l,!0):i<0&&(y.value=C(g.value?o:l,!1))}function N(n){if(d=!1,!c.value)return;S(n),c.value=!1;const o=v(n.changedTouches[0].identifier),l=Math.abs(o.x),i=Math.abs(o.y);(g.value?l>i&&l>400:i>l&&i>3)?u.value=o.direction===({left:"right",right:"left",top:"down",bottom:"up"}[a.value]||M()):u.value=f.value>.5}const I=w(()=>c.value?{transform:a.value==="left"?`translateX(calc(-100% + ${f.value*t.value}px))`:a.value==="right"?`translateX(calc(100% - ${f.value*t.value}px))`:a.value==="top"?`translateY(calc(-100% + ${f.value*t.value}px))`:a.value==="bottom"?`translateY(calc(100% - ${f.value*t.value}px))`:M(),transition:"none"}:void 0);return Y(c,()=>{var l,i;const n=((l=s.value)==null?void 0:l.style.transform)??null,o=((i=s.value)==null?void 0:i.style.transition)??null;ie(()=>{var h,m,P,H;(m=s.value)==null||m.style.setProperty("transform",((h=I.value)==null?void 0:h.transform)||"none"),(H=s.value)==null||H.style.setProperty("transition",((P=I.value)==null?void 0:P.transition)||null)}),re(()=>{var h,m;(h=s.value)==null||h.style.setProperty("transform",n),(m=s.value)==null||m.style.setProperty("transition",o)})}),{isDragging:c,dragProgress:f,dragStyles:I}}function M(){throw new Error}const Fe=["start","end","left","right","top","bottom"],qe=U({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,persistent:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Fe.includes(e)},sticky:Boolean,...pe(),...ke(),...Me(),...se({mobile:null}),...Se(),...De(),...Ee(),...Ve({tag:"nav"}),...ce()},"VNavigationDrawer"),at=K()({name:"VNavigationDrawer",props:qe(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,s){let{attrs:u,emit:V,slots:t}=s;const{isRtl:r}=ve(),{themeClasses:a}=de(e),{borderClasses:g}=Te(e),{backgroundColorClasses:S,backgroundColorStyles:b}=F(z(e,"color")),{elevationClasses:v}=Be(e),{displayClasses:d,mobile:c}=me(e),{roundedClasses:f}=Pe(e),y=Re(),k=fe(e,"modelValue",null,p=>!!p),{ssrBootStyles:C}=He(),{scopeId:D}=xe(),B=he(),T=x(!1),{runOpenDelay:N,runCloseDelay:I}=Ce(e,p=>{T.value=p}),n=w(()=>e.rail&&e.expandOnHover&&T.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),o=w(()=>Ne(e.location,r.value)),l=w(()=>e.persistent),i=w(()=>!e.permanent&&(c.value||e.temporary)),h=w(()=>e.sticky&&!i.value&&o.value!=="bottom");Y(()=>e.expandOnHover&&e.rail!=null,()=>{R(T,p=>V("update:rail",!p))}),Y(()=>!e.disableResizeWatcher,()=>{R(i,p=>!e.permanent&&be(()=>k.value=!p))}),Y(()=>!e.disableRouteWatcher&&!!y,()=>{R(y.currentRoute,()=>i.value&&(k.value=!1))}),R(()=>e.permanent,p=>{p&&(k.value=!0)}),e.modelValue==null&&!i.value&&(k.value=e.permanent||!c.value);const{isDragging:m,dragProgress:P}=ze({el:B,isActive:k,isTemporary:i,width:n,touchless:z(e,"touchless"),position:o}),H=w(()=>{const p=i.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):n.value;return m.value?p*P.value:p}),J=w(()=>["top","bottom"].includes(e.location)?0:n.value),{layoutItemStyles:O,layoutItemScrimStyles:ee}=Ie({id:e.name,order:w(()=>parseInt(e.order,10)),position:o,layoutSize:H,elementSize:J,active:w(()=>k.value||m.value),disableTransitions:w(()=>m.value),absolute:w(()=>e.absolute||h.value&&typeof W.value!="string")}),{isStuck:W,stickyStyles:te}=We({rootEl:B,isSticky:h,layoutItemStyles:O}),_=F(w(()=>typeof e.scrim=="string"?e.scrim:null)),ae=w(()=>({...m.value?{opacity:P.value*.2,transition:"none"}:void 0,...ee.value}));return ge({VList:{bgColor:"transparent"}}),G(()=>{const p=t.image||e.image;return E(we,null,[E(e.tag,L({ref:B,onMouseenter:N,onMouseleave:I,class:["v-navigation-drawer",`v-navigation-drawer--${o.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":T.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":i.value,"v-navigation-drawer--persistent":l.value,"v-navigation-drawer--active":k.value,"v-navigation-drawer--sticky":h.value},a.value,S.value,g.value,d.value,v.value,f.value,e.class],style:[b.value,O.value,C.value,te.value,e.style,["top","bottom"].includes(o.value)?{height:"auto"}:{}]},D,u),{default:()=>{var X,A,$;return[p&&E("div",{key:"image",class:"v-navigation-drawer__img"},[t.image?E(Le,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:e.image}}},t.image):E(Ye,{key:"image-img",alt:"",cover:!0,height:"inherit",src:e.image},null)]),t.prepend&&E("div",{class:"v-navigation-drawer__prepend"},[(X=t.prepend)==null?void 0:X.call(t)]),E("div",{class:"v-navigation-drawer__content"},[(A=t.default)==null?void 0:A.call(t)]),t.append&&E("div",{class:"v-navigation-drawer__append"},[($=t.append)==null?void 0:$.call(t)])]}}),E(ye,{name:"fade-transition"},{default:()=>[i.value&&(m.value||k.value)&&!!e.scrim&&E("div",L({class:["v-navigation-drawer__scrim",_.backgroundColorClasses.value],style:[ae.value,_.backgroundColorStyles.value],onClick:()=>{l.value||(k.value=!1)}},D),null)]})])}),{isStuck:W}}});export{tt as V,at as a};