import{d as l,L as m,M as d,c as o,t as f,v as _,N as x,_ as z}from"./entry.GWxPOYWt.js";const S=l({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(r){m(e=>({fbd9edca:u.value}));const n=d(),t=r,p=o(()=>{var e;return((((e=n.nuxtIcon)==null?void 0:e.aliases)||{})[t.name]||t.name).replace(/^i-/,"")}),u=o(()=>`url('https://api.iconify.design/${p.value.replace(":","/")}.svg')`),a=o(()=>{var s,c,i;if(!t.size&&typeof((s=n.nuxtIcon)==null?void 0:s.size)=="boolean"&&!((c=n.nuxtIcon)!=null&&c.size))return;const e=t.size||((i=n.nuxtIcon)==null?void 0:i.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,s)=>(f(),_("span",{style:x({width:a.value,height:a.value})},null,4))}}),v=z(S,[["__scopeId","data-v-c408336b"]]);export{v as default};