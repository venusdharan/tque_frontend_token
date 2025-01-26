import{m as l,u as s,c as C,d as K,a as X,e as $,f as q,g as G,b as J,h as Q,i as U}from"./CLGGIAXn.js";import{L as c,V as W,z as n,K as y,$ as m,X as A,a0 as Y,a1 as Z,i as P,a2 as ee,a3 as ae,R as te}from"./DPDus2Qf.js";import{c as ne,m as x,V as h,a as S,b as ie,d as de,e as le,f as se,g as ce,R as re,u as ue,h as oe,i as ve,j as me,k as ye,l as ge,L as be,n as ke}from"./CvggJvAd.js";import{V,a as fe}from"./DtxhDzDT.js";const Ve=c()({name:"VCardActions",props:l(),setup(e,i){let{slots:t}=i;return W({VBtn:{slim:!0,variant:"text"}}),s(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ce=y({opacity:[Number,String],...l(),...C()},"VCardSubtitle"),Ie=c()({name:"VCardSubtitle",props:Ce(),setup(e,i){let{slots:t}=i;return s(()=>n(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),pe=ne("v-card-title"),Ae=y({appendAvatar:String,appendIcon:m,prependAvatar:String,prependIcon:m,subtitle:[String,Number],title:[String,Number],...l(),...x()},"VCardItem"),Pe=c()({name:"VCardItem",props:Ae(),setup(e,i){let{slots:t}=i;return s(()=>{var u;const a=!!(e.prependAvatar||e.prependIcon),g=!!(a||t.prepend),r=!!(e.appendAvatar||e.appendIcon),b=!!(r||t.append),k=!!(e.title!=null||t.title),f=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[g&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(V,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(A,null,[e.prependAvatar&&n(h,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(S,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[k&&n(pe,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),f&&n(Ie,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(u=t.default)==null?void 0:u.call(t)]),b&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(V,{key:"append-defaults",disabled:!r,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(A,null,[e.appendIcon&&n(S,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(h,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),he=y({opacity:[Number,String],...l(),...C()},"VCardText"),Se=c()({name:"VCardText",props:he(),setup(e,i){let{slots:t}=i;return s(()=>n(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),xe=y({appendAvatar:String,appendIcon:m,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:m,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...K(),...l(),...x(),...X(),...$(),...ie(),...de(),...le(),...q(),...se(),...C(),...Y(),...ce({variant:"elevated"})},"VCard"),Ne=c()({name:"VCard",directives:{Ripple:re},props:xe(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:g}=Z(e),{borderClasses:r}=G(e),{colorClasses:b,colorStyles:k,variantClasses:f}=ue(e),{densityClasses:u}=oe(e),{dimensionStyles:d}=J(e),{elevationClasses:T}=Q(e),{loaderClasses:L}=ve(e),{locationStyles:B}=me(e),{positionClasses:D}=ye(e),{roundedClasses:N}=U(e),o=ge(e,t),_=P(()=>e.link!==!1&&o.isLink.value),v=P(()=>!e.disabled&&e.link!==!1&&(e.link||o.isClickable.value));return s(()=>{const R=_.value?"a":e.tag,F=!!(a.title||e.title!=null),j=!!(a.subtitle||e.subtitle!=null),E=F||j,M=!!(a.append||e.appendAvatar||e.appendIcon),O=!!(a.prepend||e.prependAvatar||e.prependIcon),w=!!(a.image||e.image),z=E||O||M,H=!!(a.text||e.text!=null);return ee(n(R,te({class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":v.value},g.value,r.value,b.value,u.value,T.value,L.value,D.value,N.value,f.value,e.class],style:[k.value,d.value,B.value,e.style],onClick:v.value&&o.navigate,tabindex:e.disabled?-1:void 0},o.linkProps),{default:()=>{var I;return[w&&n("div",{key:"image",class:"v-card__image"},[a.image?n(V,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(fe,{key:"image-img",cover:!0,src:e.image},null)]),n(be,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),z&&n(Pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),H&&n(Se,{key:"text"},{default:()=>{var p;return[((p=a.text)==null?void 0:p.call(a))??e.text]}}),(I=a.default)==null?void 0:I.call(a),a.actions&&n(Ve,null,{default:a.actions}),ke(v.value,"v-card")]}}),[[ae("ripple"),v.value&&e.ripple]])}),{}}});export{Ne as V,pe as a,Se as b,Ve as c};
