import{K as U,L as j,O as q,r as D,e as X,P as Y,F as S,Q as J,R as A,z as a,S as W,T as Z,U as _,i as P,V as ee,W as te,X as z,Y as O,v as le,A as V,t as ae,B as F}from"./DPDus2Qf.js";import{V as R,a as ne,b as N}from"./VPDmYnJL.js";import{m as oe,V as ue,a as I}from"./hLCA1J9t.js";import{f as re,a as ie,b as se,u as de,d as ce,V as C}from"./XhXS6RbD.js";import{u as fe}from"./bY8QF4H3.js";import{V as me}from"./DtxhDzDT.js";import{u as K,a as ve,b as ge}from"./CLGGIAXn.js";import{a as pe,V as T}from"./BejPpa3U.js";import{c as Ve}from"./CvggJvAd.js";import"./DqD-7PI-.js";import"./DPKPTAGr.js";const be=Ve("v-spacer","div","VSpacer"),ye=U({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...oe({origin:"center center",scrollStrategy:"block",transition:{component:ue},zIndex:2400})},"VDialog"),Pe=j()({name:"VDialog",props:ye(),emits:{"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,s){let{emit:l,slots:r}=s;const m=q(e,"modelValue"),{scopeId:x}=fe(),d=D();function E(f){var n,b;const v=f.relatedTarget,h=f.target;if(v!==h&&((n=d.value)!=null&&n.contentEl)&&((b=d.value)!=null&&b.globalTop)&&![document,d.value.contentEl].includes(h)&&!d.value.contentEl.contains(h)){const u=J(d.value.contentEl);if(!u.length)return;const y=u[0],w=u[u.length-1];v===y?w.focus():y.focus()}}X(()=>{document.removeEventListener("focusin",E)}),Y&&S(()=>m.value&&e.retainFocus,f=>{f?document.addEventListener("focusin",E):document.removeEventListener("focusin",E)},{immediate:!0});function B(){var f;l("afterEnter"),(f=d.value)!=null&&f.contentEl&&!d.value.contentEl.contains(document.activeElement)&&d.value.contentEl.focus({preventScroll:!0})}function c(){l("afterLeave")}return S(m,async f=>{var v;f||(await W(),(v=d.value.activatorEl)==null||v.focus({preventScroll:!0}))}),K(()=>{const f=I.filterProps(e),v=A({"aria-haspopup":"dialog"},e.activatorProps),h=A({tabindex:-1},e.contentProps);return a(I,A({ref:d,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},f,{modelValue:m.value,"onUpdate:modelValue":n=>m.value=n,"aria-modal":"true",activatorProps:v,contentProps:h,height:e.fullscreen?void 0:e.height,width:e.fullscreen?void 0:e.width,maxHeight:e.fullscreen?void 0:e.maxHeight,maxWidth:e.fullscreen?void 0:e.maxWidth,role:"dialog",onAfterEnter:B,onAfterLeave:c},x),{activator:r.activator,default:function(){for(var n=arguments.length,b=new Array(n),u=0;u<n;u++)b[u]=arguments[u];return a(me,{root:"VDialog"},{default:()=>{var y;return[(y=r.default)==null?void 0:y.call(r,...b)]}})}})}),re({},d)}}),he=U({autofocus:Boolean,divider:String,focusAll:Boolean,label:{type:String,default:"$vuetify.input.otp"},length:{type:[Number,String],default:6},modelValue:{type:[Number,String],default:void 0},placeholder:String,type:{type:String,default:"number"},...ve(),...ie(),...Z(se({variant:"outlined"}),["baseColor","bgColor","class","color","disabled","error","loading","rounded","style","theme","variant"])},"VOtpInput"),Ee=j()({name:"VOtpInput",props:he(),emits:{finish:e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,s){let{attrs:l,emit:r,slots:m}=s;const{dimensionStyles:x}=ge(e),{isFocused:d,focus:E,blur:B}=de(e),c=q(e,"modelValue","",t=>t==null?[]:String(t).split(""),t=>t.join("")),{t:f}=_(),v=P(()=>Number(e.length)),h=P(()=>Array(v.value).fill(0)),n=D(-1),b=D(),u=D([]),y=P(()=>u.value[n.value]);function w(){if(L(y.value.value)){y.value.value="";return}const t=c.value.slice(),o=y.value.value;t[n.value]=o;let g=null;n.value>c.value.length?g=c.value.length+1:n.value+1!==v.value&&(g="next"),c.value=t,g&&O(b.value,g)}function $(t){const o=c.value.slice(),g=n.value;let p=null;["ArrowLeft","ArrowRight","Backspace","Delete"].includes(t.key)&&(t.preventDefault(),t.key==="ArrowLeft"?p="prev":t.key==="ArrowRight"?p="next":["Backspace","Delete"].includes(t.key)&&(o[n.value]="",c.value=o,n.value>0&&t.key==="Backspace"?p="prev":requestAnimationFrame(()=>{var i;(i=u.value[g])==null||i.select()})),requestAnimationFrame(()=>{p!=null&&O(b.value,p)}))}function H(t,o){var p,i;o.preventDefault(),o.stopPropagation();const g=((p=o==null?void 0:o.clipboardData)==null?void 0:p.getData("Text").slice(0,v.value))??"";L(g)||(c.value=g.split(""),(i=u.value)==null||i[t].blur())}function Q(){c.value=[]}function G(t,o){E(),n.value=o}function M(){B(),n.value=-1}function L(t){return e.type==="number"&&/[^0-9]/g.test(t)}return ee({VField:{color:P(()=>e.color),bgColor:P(()=>e.color),baseColor:P(()=>e.baseColor),disabled:P(()=>e.disabled),error:P(()=>e.error),variant:P(()=>e.variant)}},{scoped:!0}),S(c,t=>{t.length===v.value&&r("finish",t.join(""))},{deep:!0}),S(n,t=>{t<0||W(()=>{var o;(o=u.value[t])==null||o.select()})}),K(()=>{var g;const[t,o]=te(l);return a("div",A({class:["v-otp-input",{"v-otp-input--divided":!!e.divider},e.class],style:[e.style]},t),[a("div",{ref:b,class:"v-otp-input__content",style:[x.value]},[h.value.map((p,i)=>a(z,null,[e.divider&&i!==0&&a("span",{class:"v-otp-input__divider"},[e.divider]),a(ce,{focused:d.value&&e.focusAll||n.value===i,key:i},{...m,loader:void 0,default:()=>a("input",{ref:k=>u.value[i]=k,"aria-label":f(e.label,i+1),autofocus:i===0&&e.autofocus,autocomplete:"one-time-code",class:["v-otp-input__field"],disabled:e.disabled,inputmode:e.type==="number"?"numeric":"text",min:e.type==="number"?0:void 0,maxlength:"1",placeholder:e.placeholder,type:e.type==="number"?"text":e.type,value:c.value[i],onInput:w,onFocus:k=>G(k,i),onBlur:M,onKeydown:$,onPaste:k=>H(i,k)},null)})])),a("input",A({class:"v-otp-input-input",type:"hidden"},o,{value:c.value.join("")}),null),a(I,{contained:!0,"content-class":"v-otp-input__loader","model-value":!!e.loading,persistent:!0},{default:()=>{var p;return[((p=m.loader)==null?void 0:p.call(m))??a(pe,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"24",width:"2"},null)]}}),(g=m.default)==null?void 0:g.call(m)])])}),{blur:()=>{var t;(t=u.value)==null||t.some(o=>o.blur())},focus:()=>{var t;(t=u.value)==null||t[0].focus()},reset:Q,isFocused:d}}}),ke={data(){return{get_otp:!0}}},Oe=Object.assign(ke,{__name:"client",setup(e){return(s,l)=>(ae(),le(z,null,[a(R,{class:"pa-4"},{default:V(()=>[a(ne,{class:"text-h5 justify-center"},{default:V(()=>l[6]||(l[6]=[F("TQue Login")])),_:1}),a(N,null,{default:V(()=>[a(C,{modelValue:s.name,"onUpdate:modelValue":l[0]||(l[0]=r=>s.name=r),label:"Name",type:"text",required:""},null,8,["modelValue"]),a(C,{modelValue:s.phone,"onUpdate:modelValue":l[1]||(l[1]=r=>s.phone=r),label:"Phone",type:"phone",required:""},null,8,["modelValue"]),a(C,{modelValue:s.email,"onUpdate:modelValue":l[2]||(l[2]=r=>s.email=r),label:"Email",type:"email"},null,8,["modelValue"]),a(T,{block:"",color:"primary"},{default:V(()=>l[7]||(l[7]=[F("Get Token")])),_:1})]),_:1})]),_:1}),a(Pe,{modelValue:s.get_otp,"onUpdate:modelValue":l[5]||(l[5]=r=>s.get_otp=r),"max-width":"400",persistent:""},{default:V(()=>[a(R,{title:"Please provide OTP !"},{actions:V(()=>[a(be),a(T,{onClick:l[3]||(l[3]=r=>s.dialog=!1)},{default:V(()=>l[8]||(l[8]=[F(" Disagree ")])),_:1}),a(T,{onClick:l[4]||(l[4]=r=>s.dialog=!1)},{default:V(()=>l[9]||(l[9]=[F(" Agree ")])),_:1})]),default:V(()=>[a(N,null,{default:V(()=>[a(Ee)]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}});export{Oe as default};
