import{v as c,bl as Ke,s as $e,q as V,a3 as Se,av as je,al as We,aw as J,bb as Ce,ax as Ue,ae as Q,d as _e,b5 as qe,as as Xe,am as Ye,an as Ze,a2 as Ge,aT as Je,A as Ie,bm as ee,bn as Qe,bo as et,bp as tt,bq as at,a1 as ot,x as te,B as k,ar as Ee,R as st,S as nt,b7 as lt,P as rt,a8 as it,o as d,e as x,a7 as v,N as ae,n as y,u as t,a5 as j,g as N,M as w,w as B,au as W,b as L,aP as oe,f as ut,aB as dt,aO as ct,aY as pt,t as U,a6 as ft,K as vt,D as mt,ay as Pe,af as yt}from"./index.6c8171ae.js";import{U as se}from"./event.776e7e11.js";const ht=o=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(o),bt=["class","style"],gt=/^on[A-Z]/,xt=(o={})=>{const{excludeListeners:m=!1,excludeKeys:l}=o,a=c(()=>((l==null?void 0:l.value)||[]).concat(bt)),i=$e();return i?c(()=>{var p;return Ke(Object.entries((p=i.proxy)==null?void 0:p.$attrs).filter(([r])=>!a.value.includes(r)&&!(m&&gt.test(r))))}):c(()=>({}))};function wt(o){const m=V();function l(){if(o.value==null)return;const{selectionStart:i,selectionEnd:p,value:r}=o.value;if(i==null||p==null)return;const g=r.slice(0,Math.max(0,i)),u=r.slice(Math.max(0,p));m.value={selectionStart:i,selectionEnd:p,value:r,beforeTxt:g,afterTxt:u}}function a(){if(o.value==null||m.value==null)return;const{value:i}=o.value,{beforeTxt:p,afterTxt:r,selectionStart:g}=m.value;if(p==null||r==null||g==null)return;let u=i.length;if(i.endsWith(r))u=i.length-r.length;else if(i.startsWith(p))u=p.length;else{const h=p[g-1],S=i.indexOf(h,g-1);S!==-1&&(u=S+1)}o.value.setSelectionRange(u,u)}return[l,a]}let b;const St=`
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,Ct=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function It(o){const m=window.getComputedStyle(o),l=m.getPropertyValue("box-sizing"),a=Number.parseFloat(m.getPropertyValue("padding-bottom"))+Number.parseFloat(m.getPropertyValue("padding-top")),i=Number.parseFloat(m.getPropertyValue("border-bottom-width"))+Number.parseFloat(m.getPropertyValue("border-top-width"));return{contextStyle:Ct.map(r=>`${r}:${m.getPropertyValue(r)}`).join(";"),paddingSize:a,borderSize:i,boxSizing:l}}function ze(o,m=1,l){var a;b||(b=document.createElement("textarea"),document.body.appendChild(b));const{paddingSize:i,borderSize:p,boxSizing:r,contextStyle:g}=It(o);b.setAttribute("style",`${g};${St}`),b.value=o.value||o.placeholder||"";let u=b.scrollHeight;const h={};r==="border-box"?u=u+p:r==="content-box"&&(u=u-i),b.value="";const S=b.scrollHeight-i;if(Se(m)){let f=S*m;r==="border-box"&&(f=f+i+p),u=Math.max(f,u),h.minHeight=`${f}px`}if(Se(l)){let f=S*l;r==="border-box"&&(f=f+i+p),u=Math.min(f,u)}return h.height=`${u}px`,(a=b.parentNode)==null||a.removeChild(b),b=void 0,h}const Et=je({id:{type:String,default:void 0},size:We,disabled:Boolean,modelValue:{type:J([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:J([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String,default:""},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Ce,default:""},prefixIcon:{type:Ce,default:""},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:J([Object,Array,String]),default:()=>Ue({})}}),Pt={[se]:o=>Q(o),input:o=>Q(o),change:o=>Q(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},zt=["role"],$t=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder"],kt=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder"],Nt={name:"ElInput",inheritAttrs:!1},Vt=_e({...Nt,props:Et,emits:Pt,setup(o,{expose:m,emit:l}){const a=o,i={suffix:"append",prefix:"prepend"},p=$e(),r=qe(),g=Xe(),u=c(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=r["aria-haspopup"],e["aria-owns"]=r["aria-owns"],e["aria-expanded"]=r["aria-expanded"]),e}),h=xt({excludeKeys:c(()=>Object.keys(u.value))}),{form:S,formItem:f}=Ye(),{inputId:ne}=Ze(a,{formItemContext:f}),ke=Ge(),P=Je(),s=Ie("input"),le=Ie("textarea"),O=ee(),z=ee(),T=V(!1),_=V(!1),A=V(!1),R=V(!1),re=V(),q=ee(a.inputStyle),F=c(()=>O.value||z.value),ie=c(()=>{var e;return(e=S==null?void 0:S.statusIcon)!=null?e:!1}),M=c(()=>(f==null?void 0:f.validateState)||""),ue=c(()=>M.value&&Qe[M.value]),Ne=c(()=>R.value?et:tt),Ve=c(()=>[r.style,a.inputStyle]),de=c(()=>[a.inputStyle,q.value,{resize:a.resize}]),C=c(()=>at(a.modelValue)?"":String(a.modelValue)),D=c(()=>a.clearable&&!P.value&&!a.readonly&&!!C.value&&(T.value||_.value)),X=c(()=>a.showPassword&&!P.value&&!a.readonly&&!!C.value&&(!!C.value||T.value)),$=c(()=>a.showWordLimit&&!!h.value.maxlength&&(a.type==="text"||a.type==="textarea")&&!P.value&&!a.readonly&&!a.showPassword),Y=c(()=>Array.from(C.value).length),Te=c(()=>!!$.value&&Y.value>Number(h.value.maxlength)),Ae=c(()=>!!g.suffix||!!a.suffixIcon||D.value||a.showPassword||$.value||!!M.value&&ie.value),[Fe,Me]=wt(O);ot(z,e=>{if(!$.value||a.resize!=="both")return;const n=e[0],{width:I}=n.contentRect;re.value={right:`calc(100% - ${I+15+6}px)`}});const H=()=>{const{type:e,autosize:n}=a;if(!(!mt||e!=="textarea"))if(n){const I=Pe(n)?n.minRows:void 0,E=Pe(n)?n.maxRows:void 0;q.value={...ze(z.value,I,E)}}else q.value={minHeight:ze(z.value).minHeight}},K=()=>{const e=F.value;!e||e.value===C.value||(e.value=C.value)},ce=e=>{const{el:n}=p.vnode;if(!n)return;const E=Array.from(n.querySelectorAll(`.${s.e(e)}`)).find(He=>He.parentNode===n);if(!E)return;const we=i[e];g[we]?E.style.transform=`translateX(${e==="suffix"?"-":""}${n.querySelector(`.${s.be("group",we)}`).offsetWidth}px)`:E.removeAttribute("style")},Z=()=>{ce("prefix"),ce("suffix")},G=async e=>{Fe();let{value:n}=e.target;a.formatter&&(n=a.parser?a.parser(n):n,n=a.formatter(n)),!A.value&&n!==C.value&&(l(se,n),l("input",n),await k(),K(),Me())},pe=e=>{l("change",e.target.value)},fe=e=>{l("compositionstart",e),A.value=!0},ve=e=>{var n;l("compositionupdate",e);const I=(n=e.target)==null?void 0:n.value,E=I[I.length-1]||"";A.value=!ht(E)},me=e=>{l("compositionend",e),A.value&&(A.value=!1,G(e))},Be=()=>{R.value=!R.value,ye()},ye=async()=>{var e;await k(),(e=F.value)==null||e.focus()},Le=()=>{var e;return(e=F.value)==null?void 0:e.blur()},he=e=>{T.value=!0,l("focus",e)},be=e=>{var n;T.value=!1,l("blur",e),a.validateEvent&&((n=f==null?void 0:f.validate)==null||n.call(f,"blur").catch(I=>Ee()))},Oe=e=>{_.value=!1,l("mouseleave",e)},Re=e=>{_.value=!0,l("mouseenter",e)},ge=e=>{l("keydown",e)},De=()=>{var e;(e=F.value)==null||e.select()},xe=()=>{l(se,""),l("change",""),l("clear"),l("input","")};return te(()=>a.modelValue,()=>{var e;k(()=>H()),a.validateEvent&&((e=f==null?void 0:f.validate)==null||e.call(f,"change").catch(n=>Ee()))}),te(C,()=>K()),te(()=>a.type,async()=>{await k(),K(),H(),Z()}),st(async()=>{!a.formatter&&a.parser,K(),Z(),await k(),H()}),nt(async()=>{await k(),Z()}),m({input:O,textarea:z,ref:F,textareaStyle:de,autosize:lt(a,"autosize"),focus:ye,blur:Le,select:De,clear:xe,resizeTextarea:H}),(e,n)=>rt((d(),x("div",oe(t(u),{class:[e.type==="textarea"?t(le).b():t(s).b(),t(s).m(t(ke)),t(s).is("disabled",t(P)),t(s).is("exceed",t(Te)),{[t(s).b("group")]:e.$slots.prepend||e.$slots.append,[t(s).bm("group","append")]:e.$slots.append,[t(s).bm("group","prepend")]:e.$slots.prepend,[t(s).m("prefix")]:e.$slots.prefix||e.prefixIcon,[t(s).m("suffix")]:e.$slots.suffix||e.suffixIcon||e.clearable||e.showPassword,[t(s).bm("suffix","password-clear")]:t(D)&&t(X)},e.$attrs.class],style:t(Ve),role:e.containerRole,onMouseenter:Re,onMouseleave:Oe}),[v(" input "),e.type!=="textarea"?(d(),x(ae,{key:0},[v(" prepend slot "),e.$slots.prepend?(d(),x("div",{key:0,class:y(t(s).be("group","prepend"))},[j(e.$slots,"prepend")],2)):v("v-if",!0),N("div",{class:y([t(s).e("wrapper"),t(s).is("focus",T.value)])},[v(" prefix slot "),e.$slots.prefix||e.prefixIcon?(d(),x("span",{key:0,class:y(t(s).e("prefix"))},[N("span",{class:y(t(s).e("prefix-inner"))},[j(e.$slots,"prefix"),e.prefixIcon?(d(),w(t(L),{key:0,class:y(t(s).e("icon"))},{default:B(()=>[(d(),w(W(e.prefixIcon)))]),_:1},8,["class"])):v("v-if",!0)],2)],2)):v("v-if",!0),N("input",oe({id:t(ne),ref_key:"input",ref:O,class:t(s).e("inner")},t(h),{type:e.showPassword?R.value?"text":"password":e.type,disabled:t(P),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,onCompositionstart:fe,onCompositionupdate:ve,onCompositionend:me,onInput:G,onFocus:he,onBlur:be,onChange:pe,onKeydown:ge}),null,16,$t),v(" suffix slot "),t(Ae)?(d(),x("span",{key:1,class:y(t(s).e("suffix"))},[N("span",{class:y(t(s).e("suffix-inner"))},[!t(D)||!t(X)||!t($)?(d(),x(ae,{key:0},[j(e.$slots,"suffix"),e.suffixIcon?(d(),w(t(L),{key:0,class:y(t(s).e("icon"))},{default:B(()=>[(d(),w(W(e.suffixIcon)))]),_:1},8,["class"])):v("v-if",!0)],64)):v("v-if",!0),t(D)?(d(),w(t(L),{key:1,class:y([t(s).e("icon"),t(s).e("clear")]),onMousedown:ct(t(pt),["prevent"]),onClick:xe},{default:B(()=>[ut(t(dt))]),_:1},8,["class","onMousedown"])):v("v-if",!0),t(X)?(d(),w(t(L),{key:2,class:y([t(s).e("icon"),t(s).e("password")]),onClick:Be},{default:B(()=>[(d(),w(W(t(Ne))))]),_:1},8,["class"])):v("v-if",!0),t($)?(d(),x("span",{key:3,class:y(t(s).e("count"))},[N("span",{class:y(t(s).e("count-inner"))},U(t(Y))+" / "+U(t(h).maxlength),3)],2)):v("v-if",!0),t(M)&&t(ue)&&t(ie)?(d(),w(t(L),{key:4,class:y([t(s).e("icon"),t(s).e("validateIcon"),t(s).is("loading",t(M)==="validating")])},{default:B(()=>[(d(),w(W(t(ue))))]),_:1},8,["class"])):v("v-if",!0)],2)],2)):v("v-if",!0)],2),v(" append slot "),e.$slots.append?(d(),x("div",{key:1,class:y(t(s).be("group","append"))},[j(e.$slots,"append")],2)):v("v-if",!0)],64)):(d(),x(ae,{key:1},[v(" textarea "),N("textarea",oe({id:t(ne),ref_key:"textarea",ref:z,class:t(le).e("inner")},t(h),{tabindex:e.tabindex,disabled:t(P),readonly:e.readonly,autocomplete:e.autocomplete,style:t(de),"aria-label":e.label,placeholder:e.placeholder,onCompositionstart:fe,onCompositionupdate:ve,onCompositionend:me,onInput:G,onFocus:he,onBlur:be,onChange:pe,onKeydown:ge}),null,16,kt),t($)?(d(),x("span",{key:0,style:ft(re.value),class:y(t(s).e("count"))},U(t(Y))+" / "+U(t(h).maxlength),7)):v("v-if",!0)],64))],16,zt)),[[it,e.type!=="hidden"]])}});var Tt=vt(Vt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const Mt=yt(Tt);export{Mt as E,ht as i,xt as u};
