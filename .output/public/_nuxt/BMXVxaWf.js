import{_ as f,t as s,J as p,A as r,z as a,B as n,x as d,y as g,L as V,K as h}from"./Be-XpdND.js";import{V as b,a as v,b as y}from"./Dv2Lk-Yp.js";import{b as A,V as o,a as u,c as C,d as k}from"./z8NjOUUL.js";import{V as w,a as c,b as B}from"./CB95GoL3.js";const _={data:()=>({drawer:!0,user:!1,avatar_color:"primary",avatar_name:""}),async mounted(){},methods:{get_sub_title(t){return t.email?t.email:t.phone?t.phone:""},getRandomVuetifyColor(){const t=["red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","grey","blue-grey"],e=Math.floor(Math.random()*t.length);this.avatar_color=t[e]},createAvatarName(t){if(!t)return"";const e=t.trim().split(" ");let l=e[0].charAt(0).toUpperCase();e.length>1?(l+=e[e.length-1].charAt(0).toUpperCase(),e.length>2&&l.length<3&&(l+=e[1].charAt(0).toUpperCase())):e[0].length>1&&(l+=e[0].charAt(1).toUpperCase(),e[0].length>2&&l.length<3&&(l+=e[0].charAt(2).toUpperCase())),this.avatar_name=l}}};function N(t,e,l,U,T,m){return s(),p(b,{id:"inspire"},{default:r(()=>[a(c,null,{default:r(()=>[a(A,{onClick:e[0]||(e[0]=i=>t.drawer=!t.drawer)}),a(w,null,{default:r(()=>e[2]||(e[2]=[n("TQue")])),_:1})]),_:1}),a(k,{modelValue:t.drawer,"onUpdate:modelValue":e[1]||(e[1]=i=>t.drawer=i),dense:""},{append:r(()=>[e[3]||(e[3]=d("hr",null,null,-1)),a(o,{link:"",title:"Logout",to:"/auth/logout","prepend-icon":"mdi-logout",style:{"margin-bottom":"10px","margin-top":"5px"}})]),default:r(()=>[a(u,{color:"transparent",dense:""},{default:r(()=>[t.user?(s(),p(o,{key:0,subtitle:t.user.name,title:m.get_sub_title(t.user)},{prepend:r(()=>[a(C,{color:t.avatar_color},{default:r(()=>[n(g(t.avatar_name),1)]),_:1},8,["color"])]),_:1},8,["subtitle","title"])):V("",!0)]),_:1}),e[4]||(e[4]=d("hr",null,null,-1)),a(u,{dense:""},{default:r(()=>[a(o,{link:"",title:"Token Que","prepend-icon":"mdi-pencil-ruler",to:"/user/token/"}),a(o,{link:"",title:"Scan Card","prepend-icon":"mdi-view-dashboard",to:"/"}),a(o,{link:"",title:"Billing","prepend-icon":"mdi-note-text",to:"/user/billing/"})]),_:1})]),_:1},8,["modelValue"]),a(v,{fluid:""},{default:r(()=>[a(B,null,{default:r(()=>[h(t.$slots,"default")]),_:3})]),_:3}),a(y,{absolute:"",app:""},{default:r(()=>e[5]||(e[5]=[n("©Triophore")])),_:1})]),_:3})}const S=f(_,[["render",N]]);export{S as default};