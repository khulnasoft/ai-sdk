import{d as m,v as o,P as u,Q as p,L as t,x as l,M as c,N as f,O as x,t as r,y as d}from"./entry.Ufb_uReL.js";import{a as w}from"./index.0iJ1w440.js";const _={class:"flex flex-col w-full max-w-md py-24 mx-auto stretch"},h={key:"m.id",class:"whitespace-pre-wrap"},S=m({__name:"index",setup(b){const{messages:i,input:a,handleSubmit:n}=w();return(v,s)=>(r(),o("div",_,[(r(!0),o(u,null,p(t(i),e=>(r(),o("div",h,d(e.role==="user"?"User: ":"AI: ")+" "+d(e.content),1))),128)),l("form",{onSubmit:s[1]||(s[1]=(...e)=>t(n)&&t(n)(...e))},[c(l("input",{class:"fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl","onUpdate:modelValue":s[0]||(s[0]=e=>x(a)?a.value=e:null),placeholder:"Say something..."},null,512),[[f,t(a)]])],32)]))}});export{S as default};