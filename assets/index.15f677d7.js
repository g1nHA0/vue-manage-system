import{av as H,d as R,A,v as p,a3 as B,o as m,e as S,a5 as V,f as E,w,P as U,a8 as q,u as n,g as x,n as f,t as Z,aS as j,K,af as te,ax as oe,bb as ae,aw as _,D as Q,bw as re,q as k,bx as D,R as le,x as ie,a0 as ue,a1 as ce,M as b,a7 as T,b as L,au as de,N as pe,aO as me,a6 as fe,by as ge,bz as ye,aQ as ve,bA as O,ae as P,bB as G,aE as J,ak as be,l as Ce,bC as F,bD as he}from"./index.6c8171ae.js";const Te=H({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),we=["textContent"],Ne={name:"ElBadge"},ke=R({...Ne,props:Te,setup(s,{expose:t}){const e=s,a=A("badge"),o=p(()=>e.isDot?"":B(e.value)&&B(e.max)?e.max<e.value?`${e.max}+`:`${e.value}`:`${e.value}`);return t({content:o}),(l,u)=>(m(),S("div",{class:f(n(a).b())},[V(l.$slots,"default"),E(j,{name:`${n(a).namespace.value}-zoom-in-center`,persisted:""},{default:w(()=>[U(x("sup",{class:f([n(a).e("content"),n(a).em("content",l.type),n(a).is("fixed",!!l.$slots.default),n(a).is("dot",l.isDot)]),textContent:Z(n(o))},null,10,we),[[q,!l.hidden&&(n(o)||l.isDot)]])]),_:1},8,["name"])],2))}});var Be=K(ke,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const Se=te(Be),W=["success","info","warning","error"],i=oe({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:"",id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:Q?document.body:void 0}),xe=H({customClass:{type:String,default:i.customClass},center:{type:Boolean,default:i.center},dangerouslyUseHTMLString:{type:Boolean,default:i.dangerouslyUseHTMLString},duration:{type:Number,default:i.duration},icon:{type:ae,default:i.icon},id:{type:String,default:i.id},message:{type:_([String,Object,Function]),default:i.message},onClose:{type:_(Function),required:!1},showClose:{type:Boolean,default:i.showClose},type:{type:String,values:W,default:i.type},offset:{type:Number,default:i.offset},zIndex:{type:Number,default:i.zIndex},grouping:{type:Boolean,default:i.grouping},repeatNum:{type:Number,default:i.repeatNum}}),Ee={destroy:()=>!0},c=re([]),Me=s=>{const t=c.findIndex(o=>o.id===s),e=c[t];let a;return t>0&&(a=c[t-1]),{current:e,prev:a}},ze=s=>{const{prev:t}=Me(s);return t?t.vm.exposeProxy.bottom:0},$e=["id"],Ie=["innerHTML"],_e={name:"ElMessage"},De=R({..._e,props:xe,emits:Ee,setup(s,{expose:t}){const e=s,{Close:a}=ge,o=A("message"),l=k(),u=k(!1),g=k(0);let d;const C=p(()=>e.type?e.type==="error"?"danger":e.type:"info"),M=p(()=>{const r=e.type;return{[o.bm("icon",r)]:r&&D[r]}}),v=p(()=>e.icon||D[e.type]||""),Y=p(()=>ze(e.id)),z=p(()=>e.offset+Y.value),ee=p(()=>g.value+z.value),se=p(()=>({top:`${z.value}px`,zIndex:e.zIndex}));function N(){e.duration!==0&&({stop:d}=ye(()=>{h()},e.duration))}function $(){d==null||d()}function h(){u.value=!1}function ne({code:r}){r===ve.esc&&h()}return le(()=>{N(),u.value=!0}),ie(()=>e.repeatNum,()=>{$(),N()}),ue(document,"keydown",ne),ce(l,()=>{g.value=l.value.getBoundingClientRect().height}),t({visible:u,bottom:ee,close:h}),(r,I)=>(m(),b(j,{name:n(o).b("fade"),onBeforeLeave:r.onClose,onAfterLeave:I[0]||(I[0]=Re=>r.$emit("destroy")),persisted:""},{default:w(()=>[U(x("div",{id:r.id,ref_key:"messageRef",ref:l,class:f([n(o).b(),{[n(o).m(r.type)]:r.type&&!r.icon},n(o).is("center",r.center),n(o).is("closable",r.showClose),r.customClass]),style:fe(n(se)),role:"alert",onMouseenter:$,onMouseleave:N},[r.repeatNum>1?(m(),b(n(Se),{key:0,value:r.repeatNum,type:n(C),class:f(n(o).e("badge"))},null,8,["value","type","class"])):T("v-if",!0),n(v)?(m(),b(n(L),{key:1,class:f([n(o).e("icon"),n(M)])},{default:w(()=>[(m(),b(de(n(v))))]),_:1},8,["class"])):T("v-if",!0),V(r.$slots,"default",{},()=>[r.dangerouslyUseHTMLString?(m(),S(pe,{key:1},[T(" Caution here, message could've been compromised, never use user's input as message "),x("p",{class:f(n(o).e("content")),innerHTML:r.message},null,10,Ie)],2112)):(m(),S("p",{key:0,class:f(n(o).e("content"))},Z(r.message),3))]),r.showClose?(m(),b(n(L),{key:2,class:f(n(o).e("closeBtn")),onClick:me(h,["stop"])},{default:w(()=>[E(n(a))]),_:1},8,["class","onClick"])):T("v-if",!0)],46,$e),[[q,u.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Le=K(De,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let Oe=1;const X=s=>{const t=!s||P(s)||G(s)||J(s)?{message:s}:s,e={...i,...t};if(!e.appendTo)e.appendTo=document.body;else if(P(e.appendTo)){let a=document.querySelector(e.appendTo);be(a)||(a=document.body),e.appendTo=a}return e},Pe=s=>{const t=c.indexOf(s);if(t===-1)return;c.splice(t,1);const{handler:e}=s;e.close()},Fe=({appendTo:s,...t},e)=>{const{nextZIndex:a}=Ce(),o=`message_${Oe++}`,l=t.onClose,u=document.createElement("div"),g={...t,zIndex:a()+t.zIndex,id:o,onClose:()=>{l==null||l(),Pe(v)},onDestroy:()=>{F(null,u)}},d=E(Le,g,J(g.message)||G(g.message)?{default:g.message}:null);d.appContext=e||y._context,F(d,u),s.appendChild(u.firstElementChild);const C=d.component,v={id:o,vnode:d,vm:C,handler:{close:()=>{C.exposeProxy.visible=!1}},props:d.component.props};return v},y=(s={},t)=>{if(!Q)return{close:()=>{}};if(B(O.max)&&c.length>=O.max)return{close:()=>{}};const e=X(s);if(e.grouping&&c.length){const o=c.find(({vnode:l})=>{var u;return((u=l.props)==null?void 0:u.message)===e.message});if(o)return o.props.repeatNum+=1,o.props.type=e.type,o.handler}const a=Fe(e,t);return c.push(a),a.handler};W.forEach(s=>{y[s]=(t={},e)=>{const a=X(t);return y({...a,type:s},e)}});function He(s){for(const t of c)(!s||s===t.props.type)&&t.handler.close()}y.closeAll=He;y._context=null;const Ve=he(y,"$message");export{Ve as E};
