import{m as q,u as W,d as ve,e as de,f as me,c as fe,k as ye,g as pe,h as ge,i as he}from"./CLGGIAXn.js";import{K as k,aa as O,a5 as Ie,ap as X,a6 as G,a9 as F,G as be,H as Se,i as n,e as xe,r as Y,aC as L,ar as V,o as Ce,aW as Re,a0 as J,L as Q,a1 as ee,af as we,z as B,a8 as Z,aq as ze,D as Le}from"./DPDus2Qf.js";import{u as te}from"./DPKPTAGr.js";const $=Symbol.for("vuetify:layout"),oe=Symbol.for("vuetify:layout-item"),_=1e3,Ve=k({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),$e=k({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Fe(){const e=O($);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function ke(e){const u=O($);if(!u)throw new Error("[Vuetify] Could not find injected layout");const i=e.id??`layout-item-${Ie()}`,s=X("useLayoutItem");G(oe,{id:i});const a=F(!1);be(()=>a.value=!0),Se(()=>a.value=!1);const{layoutItemStyles:r,layoutItemScrimStyles:c}=u.register(s,{...e,active:n(()=>a.value?!1:e.active.value),id:i});return xe(()=>u.unregister(i)),{layoutItemStyles:r,layoutRect:u.layoutRect,layoutItemScrimStyles:c}}const Pe=(e,u,i,s)=>{let a={top:0,left:0,right:0,bottom:0};const r=[{id:"",layer:{...a}}];for(const c of e){const m=u.get(c),f=i.get(c),g=s.get(c);if(!m||!f||!g)continue;const h={...a,[m.value]:parseInt(a[m.value],10)+(g.value?parseInt(f.value,10):0)};r.push({id:c,layer:h}),a=h}return r};function Ae(e){const u=O($,null),i=n(()=>u?u.rootZIndex.value-100:_),s=Y([]),a=L(new Map),r=L(new Map),c=L(new Map),m=L(new Map),f=L(new Map),{resizeRef:g,contentRect:h}=te(),P=n(()=>{const o=new Map,d=e.overlaps??[];for(const t of d.filter(v=>v.includes(":"))){const[v,l]=t.split(":");if(!s.value.includes(v)||!s.value.includes(l))continue;const y=a.get(v),b=a.get(l),R=r.get(v),w=r.get(l);!y||!b||!R||!w||(o.set(l,{position:y.value,amount:parseInt(R.value,10)}),o.set(v,{position:b.value,amount:-parseInt(w.value,10)}))}return o}),I=n(()=>{const o=[...new Set([...c.values()].map(t=>t.value))].sort((t,v)=>t-v),d=[];for(const t of o){const v=s.value.filter(l=>{var y;return((y=c.get(l))==null?void 0:y.value)===t});d.push(...v)}return Pe(d,a,r,m)}),S=n(()=>!Array.from(f.values()).some(o=>o.value)),x=n(()=>I.value[I.value.length-1].layer),ae=n(()=>({"--v-layout-left":V(x.value.left),"--v-layout-right":V(x.value.right),"--v-layout-top":V(x.value.top),"--v-layout-bottom":V(x.value.bottom),...S.value?void 0:{transition:"none"}})),C=n(()=>I.value.slice(1).map((o,d)=>{let{id:t}=o;const{layer:v}=I.value[d],l=r.get(t),y=a.get(t);return{id:t,...v,size:Number(l.value),position:y.value}})),N=o=>C.value.find(d=>d.id===o),A=X("createLayout"),K=F(!1);Ce(()=>{K.value=!0}),G($,{register:(o,d)=>{let{id:t,order:v,position:l,layoutSize:y,elementSize:b,active:R,disableTransitions:w,absolute:le}=d;c.set(t,v),a.set(t,l),r.set(t,y),m.set(t,R),w&&f.set(t,w);const j=Re(oe,A==null?void 0:A.vnode).indexOf(o);j>-1?s.value.splice(j,0,t):s.value.push(t);const D=n(()=>C.value.findIndex(z=>z.id===t)),E=n(()=>i.value+I.value.length*2-D.value*2),ue=n(()=>{const z=l.value==="left"||l.value==="right",H=l.value==="right",re=l.value==="bottom",M=b.value??y.value,ce=M===0?"%":"px",U={[l.value]:0,zIndex:E.value,transform:`translate${z?"X":"Y"}(${(R.value?0:-(M===0?100:M))*(H||re?-1:1)}${ce})`,position:le.value||i.value!==_?"absolute":"fixed",...S.value?void 0:{transition:"none"}};if(!K.value)return U;const p=C.value[D.value];if(!p)throw new Error(`[Vuetify] Could not find layout item "${t}"`);const T=P.value.get(t);return T&&(p[T.position]+=T.amount),{...U,height:z?`calc(100% - ${p.top}px - ${p.bottom}px)`:b.value?`${b.value}px`:void 0,left:H?void 0:`${p.left}px`,right:H?`${p.right}px`:void 0,top:l.value!=="bottom"?`${p.top}px`:void 0,bottom:l.value!=="top"?`${p.bottom}px`:void 0,width:z?b.value?`${b.value}px`:void 0:`calc(100% - ${p.left}px - ${p.right}px)`}}),ie=n(()=>({zIndex:E.value-1}));return{layoutItemStyles:ue,layoutItemScrimStyles:ie,zIndex:E}},unregister:o=>{c.delete(o),a.delete(o),r.delete(o),m.delete(o),f.delete(o),s.value=s.value.filter(d=>d!==o)},mainRect:x,mainStyles:ae,getLayoutItem:N,items:C,layoutRect:h,rootZIndex:i});const ne=n(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),se=n(()=>({zIndex:u?i.value:void 0,position:u?"relative":void 0,overflow:u?"hidden":void 0}));return{layoutClasses:ne,layoutStyles:se,getLayoutItem:N,items:C,layoutRect:h,layoutRef:g}}const Ee=k({...q(),...Ve({fullHeight:!0}),...J()},"VApp"),Ne=Q()({name:"VApp",props:Ee(),setup(e,u){let{slots:i}=u;const s=ee(e),{layoutClasses:a,getLayoutItem:r,items:c,layoutRef:m}=Ae(e),{rtlClasses:f}=we();return W(()=>{var g;return B("div",{ref:m,class:["v-application",s.themeClasses.value,a.value,f.value,e.class],style:[e.style]},[B("div",{class:"v-application__wrap"},[(g=i.default)==null?void 0:g.call(i)])])}),{getLayoutItem:r,items:c,theme:s}}}),He=k({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...ve(),...q(),...de(),...$e(),...me(),...fe({tag:"footer"}),...J()},"VFooter"),Ke=Q()({name:"VFooter",props:He(),setup(e,u){let{slots:i}=u;const s=Y(),{themeClasses:a}=ee(e),{backgroundColorClasses:r,backgroundColorStyles:c}=ye(Z(e,"color")),{borderClasses:m}=pe(e),{elevationClasses:f}=ge(e),{roundedClasses:g}=he(e),h=F(32),{resizeRef:P}=te(S=>{S.length&&(h.value=S[0].target.clientHeight)}),I=n(()=>e.height==="auto"?h.value:parseInt(e.height,10));return ze(()=>e.app,()=>{const S=ke({id:e.name,order:n(()=>parseInt(e.order,10)),position:n(()=>"bottom"),layoutSize:I,elementSize:n(()=>e.height==="auto"?void 0:I.value),active:n(()=>e.app),absolute:Z(e,"absolute")});Le(()=>{s.value=S.layoutItemStyles.value})}),W(()=>B(e.tag,{ref:P,class:["v-footer",a.value,r.value,m.value,f.value,g.value,e.class],style:[c.value,e.app?s.value:{height:V(e.height)},e.style]},i)),{}}});export{Ke as V,Ne as a,Fe as b,$e as m,ke as u};