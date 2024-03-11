import{k as Q,a4 as se,i as e,c as l,S as T,d as f,a5 as y,a2 as K,N as Y,F as I,a1 as ie,ay as ce,p as ee,P as oe,b as g,D as R,a3 as le,v as de}from"./vendor-DW_s8V88.js";import{u as j,ae as ue,af as M,ag as ge,B as D,ah as $,ai as pe,aj as he,ak as ve,al as fe,am as be,an as me,ao as xe,ap as _e,aq as $e,ar as Ce,b as ke,as as ye,at as O,au as W,av as Se,aw as we,ad as Ee,ax as De,ay as Z,az as Te,aA as J,aB as Le,aC as Ne,aD as Pe,aE as Ae,aF as Ie,aG as Fe}from"./index-hv_j-1W6.js";import{C as S}from"./ConfigTitle-DHyKRuSc.js";var Be=f('<div class="flex flex-col p-4">'),Re=f('<div class="flex flex-col"><form class="flex gap-2 sm:flex-row"><input type=search name=name class="input input-bordered min-w-0 flex-1"placeholder=google.com><div class="flex items-center gap-2"><select name=type class="select select-bordered"><option>A</option><option>AAAA</option><option>MX'),je=f("<div class=py-2>"),Oe=f('<form class="grid grid-cols-3 gap-2 sm:grid-cols-5">'),Ge=f('<div class="grid grid-cols-2 gap-2 sm:grid-cols-4"><div class=form-control><label for=enable-allow-lan class="label gap-2"><span class=label-text></span></label><input id=enable-allow-lan type=checkbox class=toggle></div><div class=form-control><label for=enable-tun-device class="label gap-2"><span class=label-text></span></label><input id=enable-tun-device type=checkbox class=toggle></div><div class=form-control><label for=tun-ip-stack class="label gap-2"><span class=label-text></span></label><select id=tun-ip-stack class="select select-bordered flex-1"><option>Mixed</option><option>gVisor</option><option>System</option><option>LWIP</option></select></div><div class=form-control><label for=device-name class="label gap-2"><span class=label-text></span></label><input id=device-name class="input input-bordered min-w-0"></div><div class=form-control><label for=interface-name class="label gap-2"><span class=label-text></span></label><input id=interface-name class="input input-bordered min-w-0">'),Me=f('<div class="flex flex-col gap-4"><select class="select select-bordered"><option></option><option></option><option></option></select><div class="grid grid-cols-2 gap-2 sm:grid-cols-3">'),Qe=f('<div class=form-control><label class=label><span class=label-text></span></label><input type=number class="input input-bordered">'),Ue=f('<div class="flex flex-col gap-2"><div class="flex flex-col"><select class="select select-bordered"></select></div><div class="flex flex-col"><select class="select select-bordered">'),qe=f('<div class="grid grid-cols-1 gap-4 sm:grid-cols-2"><div class="flex flex-col gap-2"><div class="flex flex-col items-center"><input type=checkbox class=toggle></div><div class="flex flex-col"><select class="select select-bordered"></select></div></div><div class="flex flex-col gap-2"><div class="flex flex-col items-center"><input type=checkbox class=toggle>'),G=f("<option>"),Ve=f('<span class="absolute -right-1 -top-1 flex h-3 w-3"><span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-info opacity-75"></span><span class="inline-flex h-3 w-3 rounded-full bg-info">'),ze=f('<div class="grid grid-cols-2 gap-4"><kbd class=kbd></kbd><div class=relative><kbd class="kbd w-full">'),He=f('<div class="mx-auto flex max-w-screen-md flex-col gap-4">');const Xe=y.object({name:y.string(),type:y.string()}),We=()=>{const[s]=j(),t=ge(),{form:x,isSubmitting:r}=K({extend:le({schema:Xe}),onSubmit:h=>t.get("dns/query",{searchParams:{name:h.name,type:h.type}}).json().then(({Answer:i})=>C((i==null?void 0:i.map(({data:o})=>o))||[])).catch(i=>de.error(i.message))}),[b,C]=Q([]);return(()=>{var h=Re(),i=h.firstChild,o=i.firstChild,n=o.nextSibling;return n.firstChild,Y(x,i,()=>x),e(n,l(D,{type:"submit",class:"btn-primary",get loading(){return r()},get children(){return s("dnsQuery")}}),null),e(h,l(T,{get when(){return b().length>0},get children(){var _=Be();return e(_,l(I,{get each(){return b()},children:d=>(()=>{var p=je();return e(p,d),p})()})),_}}),null),h})()},Ze=y.object({port:y.number(),"socks-port":y.number(),"redir-port":y.number(),"tproxy-port":y.number(),"mixed-port":y.number()}),Je=({backendVersion:s})=>{const[t]=j(),x=ie(),r=[{label:()=>t("port",{name:"HTTP"}),key:"port",onChange:n=>void $("port",Number(n.target.value),o)},{label:()=>t("port",{name:"Socks"}),key:"socks-port",onChange:n=>void $("socks-port",Number(n.target.value),o)},{label:()=>t("port",{name:"Redir"}),key:"redir-port",onChange:n=>void $("redir-port",Number(n.target.value),o)},{label:()=>t("port",{name:"TProxy"}),key:"tproxy-port",onChange:n=>void $("tproxy-port",Number(n.target.value),o)},{label:()=>t("port",{name:"Mixed"}),key:"mixed-port",onChange:n=>void $("mixed-port",Number(n.target.value),o)}],{form:b,setInitialValues:C,reset:h}=K({extend:le({schema:Ze})}),[i,{refetch:o}]=ce(Fe);return ee(()=>{const n=i();n&&(C(n),h())}),(()=>{var n=Me(),_=n.firstChild,d=_.firstChild,p=d.nextSibling,w=p.nextSibling,k=_.nextSibling;return _.addEventListener("change",u=>void $("mode",u.target.value,o)),e(d,()=>t("global")),e(p,()=>t("rule")),e(w,()=>t("direct")),e(n,l(T,{get when(){return!M(s())},get children(){return[(()=>{var u=Oe();return Y(b,u,()=>b),e(u,l(I,{each:r,children:c=>(()=>{var v=Qe(),L=v.firstChild,F=L.firstChild,E=L.nextSibling;return e(F,()=>c.label()),oe(E,"change",c.onChange),g(m=>{var B=c.key,N=c.key,P=c.key,A=c.label();return B!==m.e&&R(L,"for",m.e=B),N!==m.t&&R(E,"id",m.t=N),P!==m.a&&R(E,"name",m.a=P),A!==m.o&&R(E,"placeholder",m.o=A),m},{e:void 0,t:void 0,a:void 0,o:void 0}),v})()})),u})(),(()=>{var u=Ge(),c=u.firstChild,v=c.firstChild,L=v.firstChild,F=v.nextSibling,E=c.nextSibling,m=E.firstChild,B=m.firstChild,N=m.nextSibling,P=E.nextSibling,A=P.firstChild,te=A.firstChild,U=A.nextSibling,q=P.nextSibling,V=q.firstChild,ae=V.firstChild,z=V.nextSibling,ne=q.nextSibling,H=ne.firstChild,re=H.firstChild,X=H.nextSibling;return e(L,()=>t("allowLan")),F.addEventListener("change",a=>void $("allow-lan",a.target.checked,o)),e(B,()=>t("enableTunDevice")),N.addEventListener("change",a=>void $("tun",{enable:a.target.checked},o)),e(te,()=>t("tunModeStack")),U.addEventListener("change",a=>void $("tun",{stack:a.target.value},o)),e(ae,()=>t("tunDeviceName")),z.addEventListener("change",a=>void $("tun",{device:a.target.value},o)),e(re,()=>t("interfaceName")),X.addEventListener("change",a=>void $("interface-name",a.target.value,o)),g(()=>{var a;return F.checked=(a=i())==null?void 0:a["allow-lan"]}),g(()=>{var a;return N.checked=(a=i())==null?void 0:a.tun.enable}),g(()=>{var a;return U.value=(a=i())==null?void 0:a.tun.stack}),g(()=>{var a;return z.value=(a=i())==null?void 0:a.tun.device}),g(()=>{var a;return X.value=(a=i())==null?void 0:a["interface-name"]}),u})()]}}),k),e(k,l(D,{class:"btn-primary",get loading(){return pe()},onClick:he,get children(){return t("reloadConfig")}}),null),e(k,l(D,{class:"btn-secondary",get loading(){return ve()},onClick:fe,get children(){return t("updateGEODatabases")}}),null),e(k,l(D,{class:"btn-accent",get loading(){return be()},onClick:me,get children(){return t("flushFakeIP")}}),null),e(k,l(T,{get when(){return!M(s())},get children(){return l(D,{class:"btn-error",get loading(){return xe()},onClick:_e,get children(){return t("upgradeCore")}})}}),null),e(k,l(D,{class:"btn-warning",get loading(){return $e()},onClick:Ce,get children(){return t("restartCore")}}),null),e(k,l(D,{class:"btn-info",onClick:()=>{ke(""),x(ye.Setup)},get children(){return t("switchEndpoint")}}),null),g(()=>{var u;return _.value=(u=i())==null?void 0:u.mode}),g(()=>d.value=O.Global),g(()=>p.value=O.Rule),g(()=>w.value=O.Direct),n})()},Ke=()=>{const[s]=j(),t=[{label:()=>s("en"),value:W.EN},{label:()=>s("zh"),value:W.ZH}];return(()=>{var x=qe(),r=x.firstChild,b=r.firstChild,C=b.firstChild,h=b.nextSibling,i=h.firstChild,o=r.nextSibling,n=o.firstChild,_=n.firstChild;return e(b,l(S,{get children(){return s("useTwemoji")}}),C),C.addEventListener("change",d=>Se(d.target.checked)),e(h,l(S,{get children(){return s("switchLanguage")}}),i),i.addEventListener("change",d=>we(d.target.value)),e(i,l(I,{each:t,children:d=>(()=>{var p=G();return e(p,()=>d.label()),g(()=>p.selected=Ee()===d.value),g(()=>p.value=d.value),p})()})),e(n,l(S,{get children(){return s("autoSwitchTheme")}}),_),_.addEventListener("change",d=>De(d.target.checked)),e(o,l(T,{get when(){return Z()},get children(){var d=Ue(),p=d.firstChild,w=p.firstChild,k=p.nextSibling,u=k.firstChild;return e(p,l(S,{get children(){return s("favDayTheme")}}),w),w.addEventListener("change",c=>Te(c.target.value)),e(w,l(I,{each:J,children:c=>(()=>{var v=G();return v.value=c,e(v,c),v})()})),e(k,l(S,{get children(){return s("favNightTheme")}}),u),u.addEventListener("change",c=>Le(c.target.value)),e(u,l(I,{each:J,children:c=>(()=>{var v=G();return v.value=c,e(v,c),v})()})),g(()=>w.value=Ne()),g(()=>u.value=Pe()),d}}),null),g(()=>C.checked=Ae()),g(()=>_.checked=Z()),x})()},Ye=({backendVersion:s})=>{const[t,x]=Q(!1);return ee(async()=>{const r=s();r&&x(await Ie(r))}),(()=>{var r=ze(),b=r.firstChild,C=b.nextSibling,h=C.firstChild;return e(b,()=>"1.135.1"),e(C,l(T,{get when(){return t()},get children(){return Ve()}}),h),e(h,s),r})()},al=()=>{const[s]=j(),[t,x]=Q("");return se(async()=>{x(await ue())}),(()=>{var r=He();return e(r,l(T,{get when(){return!M(t())},get children(){return[l(S,{withDivider:!0,get children(){return s("dnsQuery")}}),l(We,{})]}}),null),e(r,l(S,{withDivider:!0,get children(){return s("coreConfig")}}),null),e(r,l(Je,{backendVersion:t}),null),e(r,l(S,{withDivider:!0,get children(){return s("xdConfig")}}),null),e(r,l(Ke,{}),null),e(r,l(S,{withDivider:!0,get children(){return s("version")}}),null),e(r,l(Ye,{backendVersion:t}),null),r})()};export{al as default};
