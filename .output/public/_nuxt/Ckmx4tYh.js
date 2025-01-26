import{m as C,c as S}from"./CLGGIAXn.js";import{aM as i,aN as u,K as b,L as N,i as k,h as j}from"./DPDus2Qf.js";const V=i.reduce((t,a)=>(t[a]={type:[Boolean,String,Number],default:!1},t),{}),L=i.reduce((t,a)=>{const e="offset"+u(a);return t[e]={type:[String,Number],default:null},t},{}),v=i.reduce((t,a)=>{const e="order"+u(a);return t[e]={type:[String,Number],default:null},t},{}),y={col:Object.keys(V),offset:Object.keys(L),order:Object.keys(v)};function G(t,a,e){let s=t;if(!(e==null||e===!1)){if(a){const n=a.replace(t,"");s+=`-${n}`}return t==="col"&&(s="v-"+s),t==="col"&&(e===""||e===!0)||(s+=`-${e}`),s.toLowerCase()}}const _=["auto","start","end","center","baseline","stretch"],I=b({cols:{type:[Boolean,String,Number],default:!1},...V,offset:{type:[String,Number],default:null},...L,order:{type:[String,Number],default:null},...v,alignSelf:{type:String,default:null,validator:t=>_.includes(t)},...C(),...S()},"VCol"),z=N()({name:"VCol",props:I(),setup(t,a){let{slots:e}=a;const s=k(()=>{const n=[];let l;for(l in y)y[l].forEach(o=>{const c=t[o],g=G(l,o,c);g&&n.push(g)});const r=n.some(o=>o.startsWith("v-col-"));return n.push({"v-col":!r||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),n});return()=>{var n;return j(t.tag,{class:[s.value,t.class],style:t.style},(n=e.default)==null?void 0:n.call(e))}}}),f=["start","end","center"],$=["space-between","space-around","space-evenly"];function d(t,a){return i.reduce((e,s)=>{const n=t+u(s);return e[n]=a(),e},{})}const M=[...f,"baseline","stretch"],h=t=>M.includes(t),w=d("align",()=>({type:String,default:null,validator:h})),R=[...f,...$],P=t=>R.includes(t),E=d("justify",()=>({type:String,default:null,validator:P})),T=[...f,...$,"stretch"],A=t=>T.includes(t),O=d("alignContent",()=>({type:String,default:null,validator:A})),m={align:Object.keys(w),justify:Object.keys(E),alignContent:Object.keys(O)},U={align:"align",justify:"justify",alignContent:"align-content"};function B(t,a,e){let s=U[t];if(e!=null){if(a){const n=a.replace(t,"");s+=`-${n}`}return s+=`-${e}`,s.toLowerCase()}}const K=b({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h},...w,justify:{type:String,default:null,validator:P},...E,alignContent:{type:String,default:null,validator:A},...O,...C(),...S()},"VRow"),J=N()({name:"VRow",props:K(),setup(t,a){let{slots:e}=a;const s=k(()=>{const n=[];let l;for(l in m)m[l].forEach(r=>{const o=t[r],c=B(l,r,o);c&&n.push(c)});return n.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),n});return()=>{var n;return j(t.tag,{class:["v-row",s.value,t.class],style:t.style},(n=e.default)==null?void 0:n.call(e))}}});export{z as V,J as a};