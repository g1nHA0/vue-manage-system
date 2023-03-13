import{av as X,aw as K,ax as be,d as M,U as ae,be as se,A as Y,q as N,x as S,B as ne,a1 as fe,o as q,e as j,n as ve,u as x,a6 as Be,K as me,aX as z,s as le,aY as ue,bO as we,bP as Te,v as H,R as pe,S as Ne,f as t,b as Q,b9 as Fe,aa as Pe,aD as $e,aQ as W,r as oe,bc as Ae,a4 as xe,bQ as Se,a5 as _e,aR as ce,ae as ke,a3 as De,as as Oe,bR as ie,T as Re,P as ze,a8 as Ve,a7 as te,af as Me,ag as Le,c as Ue,w as _,g as V,t as Z,N as re,i as L}from"./index.6c8171ae.js";import{E as Ie,a as Ke}from"./el-table-column.b0be7732.js";/* empty css                    */import"./el-tag.727fadea.js";import{U as he}from"./event.776e7e11.js";const G=Symbol("tabsRootContextKey"),qe=X({tabs:{type:K(Array),default:()=>be([])}}),je={name:"ElTabBar"},He=M({...je,props:qe,setup(e,{expose:c}){const d=e,E="ElTabBar",i=le(),g=ae(G);g||se(E,"<el-tabs><el-tab-bar /></el-tabs>");const v=Y("tabs"),s=N(),b=N(),l=()=>{let o=0,w=0;const n=["top","bottom"].includes(g.props.tabPosition)?"width":"height",f=n==="width"?"x":"y";return d.tabs.every(a=>{var C,h,$,k;const D=(h=(C=i.parent)==null?void 0:C.refs)==null?void 0:h[`tab-${a.paneName}`];if(!D)return!1;if(!a.active)return!0;w=D[`client${z(n)}`];const U=f==="x"?"left":"top";o=D.getBoundingClientRect()[U]-((k=($=D.parentElement)==null?void 0:$.getBoundingClientRect()[U])!=null?k:0);const O=window.getComputedStyle(D);return n==="width"&&(d.tabs.length>1&&(w-=Number.parseFloat(O.paddingLeft)+Number.parseFloat(O.paddingRight)),o+=Number.parseFloat(O.paddingLeft)),!1}),{[n]:`${w}px`,transform:`translate${z(f)}(${o}px)`}},m=()=>b.value=l();return S(()=>d.tabs,async()=>{await ne(),m()},{immediate:!0}),fe(s,()=>m()),c({ref:s,update:m}),(o,w)=>(q(),j("div",{ref_key:"barRef",ref:s,class:ve([x(v).e("active-bar"),x(v).is(x(g).props.tabPosition)]),style:Be(b.value)},null,6))}});var Qe=me(He,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const We=X({panes:{type:K(Array),default:()=>be([])},currentName:{type:[String,Number],default:""},editable:Boolean,onTabClick:{type:K(Function),default:ue},onTabRemove:{type:K(Function),default:ue},type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),de="ElTabNav",Xe=M({name:de,props:We,setup(e,{expose:c}){const d=le(),E=ae(G);E||se(de,"<el-tabs><tab-nav /></el-tabs>");const i=Y("tabs"),g=we(),v=Te(),s=N(),b=N(),l=N(),m=N(!1),o=N(0),w=N(!1),n=N(!0),f=H(()=>["top","bottom"].includes(E.props.tabPosition)?"width":"height"),a=H(()=>({transform:`translate${f.value==="width"?"X":"Y"}(-${o.value}px)`})),C=()=>{if(!s.value)return;const u=s.value[`offset${z(f.value)}`],p=o.value;if(!p)return;const r=p>u?p-u:0;o.value=r},h=()=>{if(!s.value||!b.value)return;const u=b.value[`offset${z(f.value)}`],p=s.value[`offset${z(f.value)}`],r=o.value;if(u-r<=p)return;const F=u-r>p*2?r+p:u-p;o.value=F},$=async()=>{const u=b.value;if(!m.value||!l.value||!s.value||!u)return;await ne();const p=l.value.querySelector(".is-active");if(!p)return;const r=s.value,F=["top","bottom"].includes(E.props.tabPosition),T=p.getBoundingClientRect(),B=r.getBoundingClientRect(),A=F?u.offsetWidth-B.width:u.offsetHeight-B.height,P=o.value;let y=P;F?(T.left<B.left&&(y=P-(B.left-T.left)),T.right>B.right&&(y=P+T.right-B.right)):(T.top<B.top&&(y=P-(B.top-T.top)),T.bottom>B.bottom&&(y=P+(T.bottom-B.bottom))),y=Math.max(y,0),o.value=Math.min(y,A)},k=()=>{if(!b.value||!s.value)return;const u=b.value[`offset${z(f.value)}`],p=s.value[`offset${z(f.value)}`],r=o.value;if(p<u){const F=o.value;m.value=m.value||{},m.value.prev=F,m.value.next=F+p<u,u-F<p&&(o.value=u-p)}else m.value=!1,r>0&&(o.value=0)},D=u=>{const p=u.code,{up:r,down:F,left:T,right:B}=W;if(![r,F,T,B].includes(p))return;const A=Array.from(u.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),P=A.indexOf(u.target);let y;p===T||p===r?P===0?y=A.length-1:y=P-1:P<A.length-1?y=P+1:y=0,A[y].focus(),A[y].click(),U()},U=()=>{n.value&&(w.value=!0)},O=()=>w.value=!1;return S(g,u=>{u==="hidden"?n.value=!1:u==="visible"&&setTimeout(()=>n.value=!0,50)}),S(v,u=>{u?setTimeout(()=>n.value=!0,50):n.value=!1}),fe(l,k),pe(()=>setTimeout(()=>$(),0)),Ne(()=>k()),c({scrollToActiveTab:$,removeFocus:O}),S(()=>e.panes,()=>d.update(),{flush:"post"}),()=>{const u=m.value?[t("span",{class:[i.e("nav-prev"),i.is("disabled",!m.value.prev)],onClick:C},[t(Q,null,{default:()=>[t(Fe,null,null)]})]),t("span",{class:[i.e("nav-next"),i.is("disabled",!m.value.next)],onClick:h},[t(Q,null,{default:()=>[t(Pe,null,null)]})])]:null,p=e.panes.map((r,F)=>{var T,B,A,P;const y=r.props.disabled,I=(B=(T=r.props.name)!=null?T:r.index)!=null?B:`${F}`,J=!y&&(r.isClosable||e.editable);r.index=`${F}`;const ge=J?t(Q,{class:"is-icon-close",onClick:R=>e.onTabRemove(r,R)},{default:()=>[t($e,null,null)]}):null,Ee=((P=(A=r.slots).label)==null?void 0:P.call(A))||r.props.label,Ce=!y&&r.active?0:-1;return t("div",{ref:`tab-${I}`,class:[i.e("item"),i.is(E.props.tabPosition),i.is("active",r.active),i.is("disabled",y),i.is("closable",J),i.is("focus",w.value)],id:`tab-${I}`,key:`tab-${I}`,"aria-controls":`pane-${I}`,role:"tab","aria-selected":r.active,tabindex:Ce,onFocus:()=>U(),onBlur:()=>O(),onClick:R=>{O(),e.onTabClick(r,I,R)},onKeydown:R=>{J&&(R.code===W.delete||R.code===W.backspace)&&e.onTabRemove(r,R)}},[Ee,ge])});return t("div",{ref:l,class:[i.e("nav-wrap"),i.is("scrollable",!!m.value),i.is(E.props.tabPosition)]},[u,t("div",{class:i.e("nav-scroll"),ref:s},[t("div",{class:[i.e("nav"),i.is(E.props.tabPosition),i.is("stretch",e.stretch&&["top","bottom"].includes(E.props.tabPosition))],ref:b,style:a.value,role:"tablist",onKeydown:D},[e.type?null:t(Qe,{tabs:[...e.panes]},null),p])])])}}}),Ye=X({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:K(Function),default:()=>!0},stretch:Boolean}),ee=e=>ke(e)||De(e),Ge={[he]:e=>ee(e),"tab-click":(e,c)=>c instanceof Event,"tab-change":e=>ee(e),edit:(e,c)=>["remove","add"].includes(c),"tab-remove":e=>ee(e),"tab-add":()=>!0};var Je=M({name:"ElTabs",props:Ye,emits:Ge,setup(e,{emit:c,slots:d,expose:E}){var i,g;const v=Y("tabs"),s=N(),b=oe({}),l=N((g=(i=e.modelValue)!=null?i:e.activeName)!=null?g:"0"),m=a=>{l.value=a,c(he,a),c("tab-change",a)},o=async a=>{var C,h,$;if(!(l.value===a||ce(a)))try{await((C=e.beforeLeave)==null?void 0:C.call(e,a,l.value))!==!1&&(m(a),($=(h=s.value)==null?void 0:h.removeFocus)==null||$.call(h))}catch{}},w=(a,C,h)=>{a.props.disabled||(o(C),c("tab-click",a,h))},n=(a,C)=>{a.props.disabled||ce(a.props.name)||(C.stopPropagation(),c("edit",a.props.name,"remove"),c("tab-remove",a.props.name))},f=()=>{c("edit",void 0,"add"),c("tab-add")};return Ae({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},H(()=>!!e.activeName)),S(()=>e.activeName,a=>o(a)),S(()=>e.modelValue,a=>o(a)),S(l,async()=>{var a;await ne(),(a=s.value)==null||a.scrollToActiveTab()}),xe(G,{props:e,currentName:l,registerPane:h=>b[h.uid]=h,unregisterPane:h=>delete b[h]}),E({currentName:l}),()=>{const a=e.editable||e.addable?t("span",{class:v.e("new-tab"),tabindex:"0",onClick:f,onKeydown:$=>{$.code===W.enter&&f()}},[t(Q,{class:v.is("icon-plus")},{default:()=>[t(Se,null,null)]})]):null,C=t("div",{class:[v.e("header"),v.is(e.tabPosition)]},[a,t(Xe,{ref:s,currentName:l.value,editable:e.editable,type:e.type,panes:Object.values(b),stretch:e.stretch,onTabClick:w,onTabRemove:n},null)]),h=t("div",{class:v.e("content")},[_e(d,"default")]);return t("div",{class:[v.b(),v.m(e.tabPosition),{[v.m("card")]:e.type==="card",[v.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[C,h]:[h,C]])}}});const Ze=X({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),et=["id","aria-hidden","aria-labelledby"],tt={name:"ElTabPane"},at=M({...tt,props:Ze,setup(e){const c=e,d="ElTabPane",E=le(),i=Oe(),g=ae(G);g||se(d,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const v=Y("tab-pane"),s=N(),b=H(()=>c.closable||g.props.closable),l=ie(()=>{var f;return g.currentName.value===((f=c.name)!=null?f:s.value)}),m=N(l.value),o=H(()=>{var f;return(f=c.name)!=null?f:s.value}),w=ie(()=>!c.lazy||m.value||l.value);S(l,f=>{f&&(m.value=!0)});const n=oe({uid:E.uid,slots:i,props:c,paneName:o,active:l,index:s,isClosable:b});return pe(()=>{g.registerPane(n)}),Re(()=>{g.unregisterPane(n.uid)}),(f,a)=>x(w)?ze((q(),j("div",{key:0,id:`pane-${x(o)}`,class:ve(x(v).b()),role:"tabpanel","aria-hidden":!x(l),"aria-labelledby":`tab-${x(o)}`},[_e(f.$slots,"default")],10,et)),[[Ve,x(l)]]):te("v-if",!0)}});var ye=me(at,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const st=Me(Je,{TabPane:ye}),nt=Le(ye);const lt={class:"container"},ot={class:"message-title"},ut=L("\u6807\u4E3A\u5DF2\u8BFB"),ct={class:"handle-row"},it=L("\u5168\u90E8\u6807\u4E3A\u5DF2\u8BFB"),rt={class:"message-title"},dt=L("\u5220\u9664"),bt={class:"handle-row"},ft=L("\u5220\u9664\u5168\u90E8"),vt={class:"message-title"},mt=L("\u8FD8\u539F"),pt={class:"handle-row"},_t=L("\u6E05\u7A7A\u56DE\u6536\u7AD9"),ht=M({name:"tabs"}),wt=M({...ht,setup(e){const c=N("first"),d=oe({unread:[{date:"2018-04-19 20:00:00",title:"\u3010\u7CFB\u7EDF\u901A\u77E5\u3011\u8BE5\u7CFB\u7EDF\u5C06\u4E8E\u4ECA\u665A\u51CC\u66682\u70B9\u52305\u70B9\u8FDB\u884C\u5347\u7EA7\u7EF4\u62A4"},{date:"2018-04-19 21:00:00",title:"\u4ECA\u665A12\u70B9\u6574\u53D1\u5927\u7EA2\u5305\uFF0C\u5148\u5230\u5148\u5F97"}],read:[{date:"2018-04-19 20:00:00",title:"\u3010\u7CFB\u7EDF\u901A\u77E5\u3011\u8BE5\u7CFB\u7EDF\u5C06\u4E8E\u4ECA\u665A\u51CC\u66682\u70B9\u52305\u70B9\u8FDB\u884C\u5347\u7EA7\u7EF4\u62A4"}],recycle:[{date:"2018-04-19 20:00:00",title:"\u3010\u7CFB\u7EDF\u901A\u77E5\u3011\u8BE5\u7CFB\u7EDF\u5C06\u4E8E\u4ECA\u665A\u51CC\u66682\u70B9\u52305\u70B9\u8FDB\u884C\u5347\u7EA7\u7EF4\u62A4"}]}),E=v=>{const s=d.unread.splice(v,1);d.read=s.concat(d.read)},i=v=>{const s=d.read.splice(v,1);d.recycle=s.concat(d.recycle)},g=v=>{const s=d.recycle.splice(v,1);d.read=s.concat(d.read)};return(v,s)=>{const b=Ie,l=Ue,m=Ke,o=nt,w=st;return q(),j("div",lt,[t(w,{modelValue:c.value,"onUpdate:modelValue":s[0]||(s[0]=n=>c.value=n)},{default:_(()=>[t(o,{label:`\u672A\u8BFB\u6D88\u606F(${d.unread.length})`,name:"first"},{default:_(()=>[t(m,{data:d.unread,"show-header":!1,style:{width:"100%"}},{default:_(()=>[t(b,null,{default:_(n=>[V("span",ot,Z(n.row.title),1)]),_:1}),t(b,{prop:"date",width:"180"}),t(b,{width:"120"},{default:_(n=>[t(l,{size:"small",onClick:f=>E(n.$index)},{default:_(()=>[ut]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),V("div",ct,[t(l,{type:"primary"},{default:_(()=>[it]),_:1})])]),_:1},8,["label"]),t(o,{label:`\u5DF2\u8BFB\u6D88\u606F(${d.read.length})`,name:"second"},{default:_(()=>[c.value==="second"?(q(),j(re,{key:0},[t(m,{data:d.read,"show-header":!1,style:{width:"100%"}},{default:_(()=>[t(b,null,{default:_(n=>[V("span",rt,Z(n.row.title),1)]),_:1}),t(b,{prop:"date",width:"150"}),t(b,{width:"120"},{default:_(n=>[t(l,{type:"danger",onClick:f=>i(n.$index)},{default:_(()=>[dt]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),V("div",bt,[t(l,{type:"danger"},{default:_(()=>[ft]),_:1})])],64)):te("",!0)]),_:1},8,["label"]),t(o,{label:`\u56DE\u6536\u7AD9(${d.recycle.length})`,name:"third"},{default:_(()=>[c.value==="third"?(q(),j(re,{key:0},[t(m,{data:d.recycle,"show-header":!1,style:{width:"100%"}},{default:_(()=>[t(b,null,{default:_(n=>[V("span",vt,Z(n.row.title),1)]),_:1}),t(b,{prop:"date",width:"150"}),t(b,{width:"120"},{default:_(n=>[t(l,{onClick:f=>g(n.$index)},{default:_(()=>[mt]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),V("div",pt,[t(l,{type:"danger"},{default:_(()=>[_t]),_:1})])],64)):te("",!0)]),_:1},8,["label"])]),_:1},8,["modelValue"])])}}});export{wt as default};
