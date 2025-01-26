import{Q as y,Y as M,aI as pe,r as T,aJ as be,e as ee,F as Ce,aH as Se,a0 as F,i as l,a1 as V,a9 as g,ae as j,o as xe,$ as te,a6 as Ie,Z as Re,G as ke,H as we,U as ne,N as D,V as oe,ag as ae,z as H,R as se,aK as R,a8 as $e,aL as G,aM as ze,aN as Ne,aO as Ve,X as J,ay as He,D as Le}from"./Be-XpdND.js";const K=y({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function U(e){const a=M("useRender");a.render=e}function le(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=pe(),t=T();if(be){const o=new ResizeObserver(s=>{e==null||e(s,o),s.length&&(a==="content"?t.value=s[0].contentRect:t.value=s[0].target.getBoundingClientRect())});ee(()=>{o.disconnect()}),Ce(()=>n.el,(s,u)=>{u&&(o.unobserve(u),t.value=void 0),s&&o.observe(s)},{flush:"post"})}return{resizeRef:n,contentRect:Se(t)}}const L=Symbol.for("vuetify:layout"),ue=Symbol.for("vuetify:layout-item"),Q=1e3,Pe=y({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Be=y({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Je(){const e=F(L);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Ae(e){const a=F(L);if(!a)throw new Error("[Vuetify] Could not find injected layout");const n=e.id??`layout-item-${Re()}`,t=M("useLayoutItem");te(ue,{id:n});const o=j(!1);ke(()=>o.value=!0),we(()=>o.value=!1);const{layoutItemStyles:s,layoutItemScrimStyles:u}=a.register(t,{...e,active:l(()=>o.value?!1:e.active.value),id:n});return ee(()=>a.unregister(n)),{layoutItemStyles:s,layoutRect:a.layoutRect,layoutItemScrimStyles:u}}const Oe=(e,a,n,t)=>{let o={top:0,left:0,right:0,bottom:0};const s=[{id:"",layer:{...o}}];for(const u of e){const d=a.get(u),f=n.get(u),b=t.get(u);if(!d||!f||!b)continue;const C={...o,[d.value]:parseInt(o[d.value],10)+(b.value?parseInt(f.value,10):0)};s.push({id:u,layer:C}),o=C}return s};function We(e){const a=F(L,null),n=l(()=>a?a.rootZIndex.value-100:Q),t=T([]),o=V(new Map),s=V(new Map),u=V(new Map),d=V(new Map),f=V(new Map),{resizeRef:b,contentRect:C}=le(),P=l(()=>{const r=new Map,m=e.overlaps??[];for(const i of m.filter(v=>v.includes(":"))){const[v,c]=i.split(":");if(!t.value.includes(v)||!t.value.includes(c))continue;const h=o.get(v),x=o.get(c),$=s.get(v),z=s.get(c);!h||!x||!$||!z||(r.set(c,{position:h.value,amount:parseInt($.value,10)}),r.set(v,{position:x.value,amount:-parseInt(z.value,10)}))}return r}),S=l(()=>{const r=[...new Set([...u.values()].map(i=>i.value))].sort((i,v)=>i-v),m=[];for(const i of r){const v=t.value.filter(c=>{var h;return((h=u.get(c))==null?void 0:h.value)===i});m.push(...v)}return Oe(m,o,s,d)}),I=l(()=>!Array.from(f.values()).some(r=>r.value)),k=l(()=>S.value[S.value.length-1].layer),ce=l(()=>({"--v-layout-left":g(k.value.left),"--v-layout-right":g(k.value.right),"--v-layout-top":g(k.value.top),"--v-layout-bottom":g(k.value.bottom),...I.value?void 0:{transition:"none"}})),w=l(()=>S.value.slice(1).map((r,m)=>{let{id:i}=r;const{layer:v}=S.value[m],c=s.get(i),h=o.get(i);return{id:i,...v,size:Number(c.value),position:h.value}})),Z=r=>w.value.find(m=>m.id===r),B=M("createLayout"),_=j(!1);xe(()=>{_.value=!0}),te(L,{register:(r,m)=>{let{id:i,order:v,position:c,layoutSize:h,elementSize:x,active:$,disableTransitions:z,absolute:fe}=m;u.set(i,v),o.set(i,c),s.set(i,h),d.set(i,$),z&&f.set(i,z);const X=Ie(ue,B==null?void 0:B.vnode).indexOf(r);X>-1?t.value.splice(X,0,i):t.value.push(i);const q=l(()=>w.value.findIndex(N=>N.id===i)),A=l(()=>n.value+S.value.length*2-q.value*2),me=l(()=>{const N=c.value==="left"||c.value==="right",O=c.value==="right",ye=c.value==="bottom",W=x.value??h.value,he=W===0?"%":"px",Y={[c.value]:0,zIndex:A.value,transform:`translate${N?"X":"Y"}(${($.value?0:-(W===0?100:W))*(O||ye?-1:1)}${he})`,position:fe.value||n.value!==Q?"absolute":"fixed",...I.value?void 0:{transition:"none"}};if(!_.value)return Y;const p=w.value[q.value];if(!p)throw new Error(`[Vuetify] Could not find layout item "${i}"`);const E=P.value.get(i);return E&&(p[E.position]+=E.amount),{...Y,height:N?`calc(100% - ${p.top}px - ${p.bottom}px)`:x.value?`${x.value}px`:void 0,left:O?void 0:`${p.left}px`,right:O?`${p.right}px`:void 0,top:c.value!=="bottom"?`${p.top}px`:void 0,bottom:c.value!=="top"?`${p.bottom}px`:void 0,width:N?x.value?`${x.value}px`:void 0:`calc(100% - ${p.left}px - ${p.right}px)`}}),ge=l(()=>({zIndex:A.value-1}));return{layoutItemStyles:me,layoutItemScrimStyles:ge,zIndex:A}},unregister:r=>{u.delete(r),o.delete(r),s.delete(r),d.delete(r),f.delete(r),t.value=t.value.filter(m=>m!==r)},mainRect:k,mainStyles:ce,getLayoutItem:Z,items:w,layoutRect:C,rootZIndex:n});const de=l(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),ve=l(()=>({zIndex:a?n.value:void 0,position:a?"relative":void 0,overflow:a?"hidden":void 0}));return{layoutClasses:de,layoutStyles:ve,getLayoutItem:Z,items:w,layoutRect:C,layoutRef:b}}const Ee=y({...K(),...Pe({fullHeight:!0}),...ne()},"VApp"),Qe=D()({name:"VApp",props:Ee(),setup(e,a){let{slots:n}=a;const t=oe(e),{layoutClasses:o,getLayoutItem:s,items:u,layoutRef:d}=We(e),{rtlClasses:f}=ae();return U(()=>{var b;return H("div",{ref:d,class:["v-application",t.themeClasses.value,o.value,f.value,e.class],style:[e.style]},[H("div",{class:"v-application__wrap"},[(b=n.default)==null?void 0:b.call(n)])])}),{getLayoutItem:s,items:u,theme:t}}}),Me=y({border:[Boolean,Number,String]},"border");function Te(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:se();return{borderClasses:l(()=>{const t=R(e)?e.value:e.border,o=[];if(t===!0||t==="")o.push(`${a}--border`);else if(typeof t=="string"||t===0)for(const s of String(t).split(" "))o.push(`border-${s}`);return o})}}function ie(e){return $e(()=>{const a=[],n={};if(e.value.background)if(G(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&ze(e.value.background)){const t=Ne(e.value.background);if(t.a==null||t.a===1){const o=Ve(t);n.color=o,n.caretColor=o}}}else a.push(`bg-${e.value.background}`);return e.value.text&&(G(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):a.push(`text-${e.value.text}`)),{colorClasses:a,colorStyles:n}})}function et(e,a){const n=l(()=>({text:R(e)?e.value:null})),{colorClasses:t,colorStyles:o}=ie(n);return{textColorClasses:t,textColorStyles:o}}function Fe(e,a){const n=l(()=>({background:R(e)?e.value:null})),{colorClasses:t,colorStyles:o}=ie(n);return{backgroundColorClasses:t,backgroundColorStyles:o}}const je=y({elevation:{type:[Number,String],validator(e){const a=parseInt(e);return!isNaN(a)&&a>=0&&a<=24}}},"elevation");function De(e){return{elevationClasses:l(()=>{const n=R(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}const Ke=y({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function Ue(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:se();return{roundedClasses:l(()=>{const t=R(e)?e.value:e.rounded,o=R(e)?e.value:e.tile,s=[];if(t===!0||t==="")s.push(`${a}--rounded`);else if(typeof t=="string"||t===0)for(const u of String(t).split(" "))s.push(`rounded-${u}`);else(o||t===!1)&&s.push("rounded-0");return s})}}const re=y({tag:{type:String,default:"div"}},"tag"),Ze=y({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...Me(),...K(),...je(),...Be(),...Ke(),...re({tag:"footer"}),...ne()},"VFooter"),tt=D()({name:"VFooter",props:Ze(),setup(e,a){let{slots:n}=a;const t=T(),{themeClasses:o}=oe(e),{backgroundColorClasses:s,backgroundColorStyles:u}=Fe(J(e,"color")),{borderClasses:d}=Te(e),{elevationClasses:f}=De(e),{roundedClasses:b}=Ue(e),C=j(32),{resizeRef:P}=le(I=>{I.length&&(C.value=I[0].target.clientHeight)}),S=l(()=>e.height==="auto"?C.value:parseInt(e.height,10));return He(()=>e.app,()=>{const I=Ae({id:e.name,order:l(()=>parseInt(e.order,10)),position:l(()=>"bottom"),layoutSize:S,elementSize:l(()=>e.height==="auto"?void 0:S.value),active:l(()=>e.app),absolute:J(e,"absolute")});Le(()=>{t.value=I.layoutItemStyles.value})}),U(()=>H(e.tag,{ref:P,class:["v-footer",o.value,s.value,d.value,f.value,b.value,e.class],style:[u.value,e.app?t.value:{height:g(e.height)},e.style]},n)),{}}}),_e=y({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Xe(e){return{dimensionStyles:l(()=>{const n={},t=g(e.height),o=g(e.maxHeight),s=g(e.maxWidth),u=g(e.minHeight),d=g(e.minWidth),f=g(e.width);return t!=null&&(n.height=t),o!=null&&(n.maxHeight=o),s!=null&&(n.maxWidth=s),u!=null&&(n.minHeight=u),d!=null&&(n.minWidth=d),f!=null&&(n.width=f),n})}}const qe=y({fluid:{type:Boolean,default:!1},...K(),..._e(),...re()},"VContainer"),nt=D()({name:"VContainer",props:qe(),setup(e,a){let{slots:n}=a;const{rtlClasses:t}=ae(),{dimensionStyles:o}=Xe(e);return U(()=>H(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},t.value,e.class],style:[o.value,e.style]},n)),{}}});export{Qe as V,nt as a,tt as b,Me as c,je as d,Ke as e,re as f,Te as g,De as h,Ue as i,U as j,et as k,le as l,K as m,_e as n,Xe as o,Fe as p,Be as q,Ae as r,Je as s,ie as u};
