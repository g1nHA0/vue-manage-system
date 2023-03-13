import{be as W,bq as de,av as q,aw as v,ax as I,aY as k,d as A,J as ce,A as j,q as se,o as y,M as P,w as R,e as S,O as pe,n as m,u as t,b3 as ae,a5 as C,a7 as g,g as B,f as L,bV as fe,b as T,t as X,aO as _,a6 as ve,aA as me,aC as ye,aD as ge,bW as be,bX as he,N as ke,bY as Ee,K as N,ap as $e,U as we,bm as V,bZ as Ce,b_ as Re,x as J,ar as Ue,as as Se,aT as Pe,v as Y,ad as Le,a4 as Fe,b7 as Te,bv as G,aP as Z,af as _e}from"./index.6c8171ae.js";import{E as Oe}from"./el-progress.bad7d12d.js";const ne=Symbol("uploadContextKey"),De="ElUpload";class Be extends Error{constructor(l,a,d,u){super(l),this.name="UploadAjaxError",this.status=a,this.method=d,this.url=u}}function Q(n,l,a){let d;return a.response?d=`${a.response.error||a.response}`:a.responseText?d=`${a.responseText}`:d=`fail to ${l.method} ${n} ${a.status}`,new Be(d,a.status,l.method,n)}function je(n){const l=n.responseText||n.response;if(!l)return l;try{return JSON.parse(l)}catch{return l}}const qe=n=>{typeof XMLHttpRequest>"u"&&W(De,"XMLHttpRequest is undefined");const l=new XMLHttpRequest,a=n.action;l.upload&&l.upload.addEventListener("progress",i=>{const f=i;f.percent=i.total>0?i.loaded/i.total*100:0,n.onProgress(f)});const d=new FormData;if(n.data)for(const[i,f]of Object.entries(n.data))Array.isArray(f)?d.append(i,...f):d.append(i,f);d.append(n.filename,n.file,n.file.name),l.addEventListener("error",()=>{n.onError(Q(a,n,l))}),l.addEventListener("load",()=>{if(l.status<200||l.status>=300)return n.onError(Q(a,n,l));n.onSuccess(je(l))}),l.open(n.method,a,!0),n.withCredentials&&"withCredentials"in l&&(l.withCredentials=!0);const u=n.headers||{};if(u instanceof Headers)u.forEach((i,f)=>l.setRequestHeader(f,i));else for(const[i,f]of Object.entries(u))de(f)||l.setRequestHeader(i,String(f));return l.send(d),l},oe=["text","picture","picture-card"];let Ae=1;const le=()=>Date.now()+Ae++,re=q({action:{type:String,default:"#"},headers:{type:v(Object)},method:{type:String,default:"post"},data:{type:Object,default:()=>I({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},type:{type:String,default:"select"},fileList:{type:v(Array),default:()=>I([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:oe,default:"text"},httpRequest:{type:v(Function),default:qe},disabled:Boolean,limit:Number}),Ne=q({...re,beforeUpload:{type:v(Function),default:k},beforeRemove:{type:v(Function)},onRemove:{type:v(Function),default:k},onChange:{type:v(Function),default:k},onPreview:{type:v(Function),default:k},onSuccess:{type:v(Function),default:k},onProgress:{type:v(Function),default:k},onError:{type:v(Function),default:k},onExceed:{type:v(Function),default:k}}),Me=q({files:{type:v(Array),default:()=>I([])},disabled:{type:Boolean,default:!1},handlePreview:{type:v(Function),default:k},listType:{type:String,values:oe,default:"text"}}),Ke={remove:n=>!!n},He=["onKeydown"],ze=["src"],Ie=["onClick"],Ve=["onClick"],We=["onClick"],Xe={name:"ElUploadList"},Je=A({...Xe,props:Me,emits:Ke,setup(n,{emit:l}){const a=n,{t:d}=ce(),u=j("upload"),i=j("icon"),f=j("list"),w=se(!1),U=r=>{a.handlePreview(r)},E=r=>{l("remove",r)};return(r,h)=>(y(),P(Ee,{tag:"ul",class:m([t(u).b("list"),t(u).bm("list",r.listType),t(u).is("disabled",r.disabled)]),name:t(f).b()},{default:R(()=>[(y(!0),S(ke,null,pe(r.files,s=>(y(),S("li",{key:s.uid||s.name,class:m([t(u).be("list","item"),t(u).is(s.status),{focusing:w.value}]),tabindex:"0",onKeydown:ae(e=>!r.disabled&&E(s),["delete"]),onFocus:h[0]||(h[0]=e=>w.value=!0),onBlur:h[1]||(h[1]=e=>w.value=!1),onClick:h[2]||(h[2]=e=>w.value=!1)},[C(r.$slots,"default",{file:s},()=>[r.listType==="picture"||s.status!=="uploading"&&r.listType==="picture-card"?(y(),S("img",{key:0,class:m(t(u).be("list","item-thumbnail")),src:s.url,alt:""},null,10,ze)):g("v-if",!0),r.listType!=="picture"&&(s.status==="uploading"||r.listType!=="picture-card")?(y(),S("div",{key:1,class:m(t(u).be("list","item-info"))},[B("a",{class:m(t(u).be("list","item-name")),onClick:_(e=>U(s),["prevent"])},[L(t(T),{class:m(t(i).m("document"))},{default:R(()=>[L(t(fe))]),_:1},8,["class"]),B("span",{class:m(t(u).be("list","item-file-name"))},X(s.name),3)],10,Ie),s.status==="uploading"?(y(),P(t(Oe),{key:0,type:r.listType==="picture-card"?"circle":"line","stroke-width":r.listType==="picture-card"?6:2,percentage:Number(s.percentage),style:ve(r.listType==="picture-card"?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):g("v-if",!0)],2)):g("v-if",!0),B("label",{class:m(t(u).be("list","item-status-label"))},[r.listType==="text"?(y(),P(t(T),{key:0,class:m([t(i).m("upload-success"),t(i).m("circle-check")])},{default:R(()=>[L(t(me))]),_:1},8,["class"])):["picture-card","picture"].includes(r.listType)?(y(),P(t(T),{key:1,class:m([t(i).m("upload-success"),t(i).m("check")])},{default:R(()=>[L(t(ye))]),_:1},8,["class"])):g("v-if",!0)],2),r.disabled?g("v-if",!0):(y(),P(t(T),{key:2,class:m(t(i).m("close")),onClick:e=>E(s)},{default:R(()=>[L(t(ge))]),_:2},1032,["class","onClick"])),g(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),g(" This is a bug which needs to be fixed "),g(" TODO: Fix the incorrect navigation interaction "),r.disabled?g("v-if",!0):(y(),S("i",{key:3,class:m(t(i).m("close-tip"))},X(t(d)("el.upload.deleteTip")),3)),r.listType==="picture-card"?(y(),S("span",{key:4,class:m(t(u).be("list","item-actions"))},[B("span",{class:m(t(u).be("list","item-preview")),onClick:e=>r.handlePreview(s)},[L(t(T),{class:m(t(i).m("zoom-in"))},{default:R(()=>[L(t(be))]),_:1},8,["class"])],10,Ve),r.disabled?g("v-if",!0):(y(),S("span",{key:0,class:m(t(u).be("list","item-delete")),onClick:e=>E(s)},[L(t(T),{class:m(t(i).m("delete"))},{default:R(()=>[L(t(he))]),_:1},8,["class"])],10,We))],2)):g("v-if",!0)])],42,He))),128)),C(r.$slots,"append")]),_:3},8,["class","name"]))}});var x=N(Je,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue"]]);const Ye=q({disabled:{type:Boolean,default:!1}}),Ge={file:n=>$e(n)},Ze=["onDrop","onDragover"],Qe={name:"ElUploadDrag"},xe=A({...Qe,props:Ye,emits:Ge,setup(n,{emit:l}){const a=n,d="ElUploadDrag",u=we(ne);u||W(d,"usage: <el-upload><el-upload-dragger /></el-upload>");const i=j("upload"),f=se(!1),w=E=>{if(a.disabled)return;f.value=!1;const r=Array.from(E.dataTransfer.files),h=u.accept.value;if(!h){l("file",r);return}const s=r.filter(e=>{const{type:o,name:p}=e,b=p.includes(".")?`.${p.split(".").pop()}`:"",c=o.replace(/\/.*$/,"");return h.split(",").map($=>$.trim()).filter($=>$).some($=>$.startsWith(".")?b===$:/\/\*$/.test($)?c===$.replace(/\/\*$/,""):/^[^/]+\/[^/]+$/.test($)?o===$:!1)});l("file",s)},U=()=>{a.disabled||(f.value=!0)};return(E,r)=>(y(),S("div",{class:m([t(i).b("dragger"),t(i).is("dragover",f.value)]),onDrop:_(w,["prevent"]),onDragover:_(U,["prevent"]),onDragleave:r[0]||(r[0]=_(h=>f.value=!1,["prevent"]))},[C(E.$slots,"default")],42,Ze))}});var et=N(xe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue"]]);const tt=q({...re,beforeUpload:{type:v(Function),default:k},onRemove:{type:v(Function),default:k},onStart:{type:v(Function),default:k},onSuccess:{type:v(Function),default:k},onProgress:{type:v(Function),default:k},onError:{type:v(Function),default:k},onExceed:{type:v(Function),default:k}}),st=["onKeydown"],at=["name","multiple","accept"],nt={name:"ElUploadContent",inheritAttrs:!1},ot=A({...nt,props:tt,setup(n,{expose:l}){const a=n,d=j("upload"),u=V({}),i=V(),f=e=>{if(e.length===0)return;const{autoUpload:o,limit:p,fileList:b,multiple:c,onStart:$,onExceed:F}=a;if(p&&b.length+e.length>p){F(e,b);return}c||(e=e.slice(0,1));for(const M of e){const O=M;O.uid=le(),$(O),o&&w(O)}},w=async e=>{if(i.value.value="",!a.beforeUpload)return U(e);let o;try{o=await a.beforeUpload(e)}catch{o=!1}if(o===!1){a.onRemove(e);return}let p=e;o instanceof Blob&&(o instanceof File?p=o:p=new File([o],e.name,{type:e.type})),U(Object.assign(p,{uid:e.uid}))},U=e=>{const{headers:o,data:p,method:b,withCredentials:c,name:$,action:F,onProgress:M,onSuccess:O,onError:ie,httpRequest:ue}=a,{uid:K}=e,H={headers:o||{},withCredentials:c,file:e,data:p,method:b,filename:$,action:F,onProgress:D=>{M(D,e)},onSuccess:D=>{O(D,e),delete u.value[K]},onError:D=>{ie(D,e),delete u.value[K]}},z=ue(H);u.value[K]=z,z instanceof Promise&&z.then(H.onSuccess,H.onError)},E=e=>{const o=e.target.files;!o||f(Array.from(o))},r=()=>{a.disabled||(i.value.value="",i.value.click())},h=()=>{r()};return l({abort:e=>{Ce(u.value).filter(e?([p])=>String(e.uid)===p:()=>!0).forEach(([p,b])=>{b instanceof XMLHttpRequest&&b.abort(),delete u.value[p]})},upload:w}),(e,o)=>(y(),S("div",{class:m([t(d).b(),t(d).m(e.listType),t(d).is("drag",e.drag)]),tabindex:"0",onClick:r,onKeydown:ae(_(h,["self"]),["enter","space"])},[e.drag?(y(),P(et,{key:0,disabled:e.disabled,onFile:f},{default:R(()=>[C(e.$slots,"default")]),_:3},8,["disabled"])):C(e.$slots,"default",{key:1}),B("input",{ref_key:"inputRef",ref:i,class:m(t(d).e("input")),name:e.name,multiple:e.multiple,accept:e.accept,type:"file",onChange:E,onClick:o[0]||(o[0]=_(()=>{},["stop"]))},null,42,at)],42,st))}});var ee=N(ot,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue"]]);const te="ElUpload",lt=n=>{var l;(l=n.url)!=null&&l.startsWith("blob:")&&URL.revokeObjectURL(n.url)},rt=(n,l)=>{const a=Re(n,"fileList",void 0,{passive:!0}),d=s=>a.value.find(e=>e.uid===s.uid);function u(s){var e;(e=l.value)==null||e.abort(s)}function i(s=["ready","uploading","success","fail"]){a.value=a.value.filter(e=>!s.includes(e.status))}const f=(s,e)=>{const o=d(e);!o||(console.error(s),o.status="fail",a.value.splice(a.value.indexOf(o),1),n.onError(s,o,a.value),n.onChange(o,a.value))},w=(s,e)=>{const o=d(e);!o||(n.onProgress(s,o,a.value),o.status="uploading",o.percentage=Math.round(s.percent))},U=(s,e)=>{const o=d(e);!o||(o.status="success",o.response=s,n.onSuccess(s,o,a.value),n.onChange(o,a.value))},E=s=>{const e={name:s.name,percentage:0,status:"ready",size:s.size,raw:s,uid:s.uid};if(n.listType==="picture-card"||n.listType==="picture")try{e.url=URL.createObjectURL(s)}catch(o){Ue(te,o.message),n.onError(o,e,a.value)}a.value=[...a.value,e],n.onChange(e,a.value)},r=async s=>{const e=s instanceof File?d(s):s;e||W(te,"file to be removed not found");const o=p=>{u(p);const b=a.value;b.splice(b.indexOf(p),1),n.onRemove(p,b),lt(p)};n.beforeRemove?await n.beforeRemove(e,a.value)!==!1&&o(e):o(e)};function h(){a.value.filter(({status:s})=>s==="ready").forEach(({raw:s})=>{var e;return s&&((e=l.value)==null?void 0:e.upload(s))})}return J(()=>n.listType,s=>{s!=="picture-card"&&s!=="picture"||(a.value=a.value.map(e=>{const{raw:o,url:p}=e;if(!p&&o)try{e.url=URL.createObjectURL(o)}catch(b){n.onError(b,e,a.value)}return e}))}),J(a,s=>{for(const e of s)e.uid||(e.uid=le()),e.status||(e.status="success")},{immediate:!0,deep:!0}),{uploadFiles:a,abort:u,clearFiles:i,handleError:f,handleProgress:w,handleStart:E,handleSuccess:U,handleRemove:r,submit:h}},it={name:"ElUpload"},ut=A({...it,props:Ne,setup(n,{expose:l}){const a=n,d=Se(),u=Pe(),i=V(),{abort:f,submit:w,clearFiles:U,uploadFiles:E,handleStart:r,handleError:h,handleRemove:s,handleSuccess:e,handleProgress:o}=rt(a,i),p=Y(()=>a.listType==="picture-card"),b=Y(()=>({...a,onStart:r,onProgress:o,onSuccess:e,onError:h,onRemove:s}));return Le(()=>{E.value.forEach(({url:c})=>{c!=null&&c.startsWith("blob:")&&URL.revokeObjectURL(c)})}),Fe(ne,{accept:Te(a,"accept")}),l({abort:f,submit:w,clearFiles:U,handleStart:r,handleRemove:s}),(c,$)=>(y(),S("div",null,[t(p)&&c.showFileList?(y(),P(x,{key:0,disabled:t(u),"list-type":c.listType,files:t(E),"handle-preview":c.onPreview,onRemove:t(s)},G({append:R(()=>[c.listType==="picture-card"?(y(),P(ee,Z({key:0,ref_key:"uploadRef",ref:i},t(b)),{default:R(()=>[t(d).trigger?C(c.$slots,"trigger",{key:0}):g("v-if",!0),!t(d).trigger&&t(d).default?C(c.$slots,"default",{key:1}):g("v-if",!0)]),_:3},16)):g("v-if",!0)]),_:2},[c.$slots.file?{name:"default",fn:R(({file:F})=>[C(c.$slots,"file",{file:F})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):g("v-if",!0),c.listType!=="picture-card"?(y(),P(ee,Z({key:1,ref_key:"uploadRef",ref:i},t(b)),{default:R(()=>[t(d).trigger?C(c.$slots,"trigger",{key:0}):g("v-if",!0),!t(d).trigger&&t(d).default?C(c.$slots,"default",{key:1}):g("v-if",!0)]),_:3},16)):g("v-if",!0),c.$slots.trigger?C(c.$slots,"default",{key:2}):g("v-if",!0),C(c.$slots,"tip"),!t(p)&&c.showFileList?(y(),P(x,{key:3,disabled:t(u),"list-type":c.listType,files:t(E),"handle-preview":c.onPreview,onRemove:t(s)},G({_:2},[c.$slots.file?{name:"default",fn:R(({file:F})=>[C(c.$slots,"file",{file:F})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):g("v-if",!0)]))}});var dt=N(ut,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue"]]);const ft=_e(dt);export{ft as E};
