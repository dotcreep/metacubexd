function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Setup-DoE3z_4g.js","./vendor-DW_s8V88.js","./Overview-RYWmXj_3.js","./Connections-C1U_d5Nx.js","./index-BuMbUX1G.js","./ConfigTitle-DHyKRuSc.js","./global-B8TJjWgL.js","./Logs-lsQuF366.js","./Proxies-DH0m9NaO.js","./Rules-Bw2BZNnE.js","./Config-DH-Rqh17.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{s as _e,a as qe,m as je,t as L,i as m,c,S,b as _,d as C,e as V,f as pe,g as U,h as Ae,j as v,k as u,l as Fe,n as ze,r as Ne,o as Re,p as J,u as ge,q as B,v as Be,w as H,x as me,y as He,z as Oe,A as z,B as We,I as Xe,C as K,F as G,D as Z,E as Ve,G as Je,H as Ze,J as Ge,K as Ee,L as Qe,M as Ke,N as Ye,O as et,P as tt,Q as st,R as at,T as nt,U as $,V as ot,W as rt,X as q,Y as lt,Z as it,_ as ct,$ as dt,a0 as ut}from"./vendor-DW_s8V88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();const pt="modulepreload",gt=function(e,t){return new URL(e,t).href},ee={},j=function(t,n,s){let a=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link");a=Promise.all(n.map(r=>{if(r=gt(r,s),r in ee)return;ee[r]=!0;const p=r.endsWith(".css"),i=p?'[rel="stylesheet"]':"";if(!!s)for(let g=o.length-1;g>=0;g--){const f=o[g];if(f.href===r&&(!p||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const d=document.createElement("link");if(d.rel=p?"stylesheet":pt,p||(d.as="script",d.crossOrigin=""),d.href=r,document.head.appendChild(d),p)return new Promise((g,f)=>{d.addEventListener("load",g),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${r}`)))})}))}return a.then(()=>t()).catch(o=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o})};var mt=C('<div class="loading loading-spinner">'),ft=C('<button><span class="truncate rounded-none">');const fe=e=>{const[t,n]=_e(e,["class","loading","icon"]);return(()=>{var s=ft(),a=s.firstChild;return qe(s,je({get class(){return L("btn flex items-center",t.loading?"btn-disabled":t.class)}},n),!1,!0),m(s,c(S,{get when(){return t.loading},get children(){return mt()}}),a),m(a,()=>e.icon||e.children),_(()=>a.classList.toggle("flex-1",!t.icon)),s})()};var ht=C('<div><div class="collapse-title pr-4 text-xl font-medium after:!top-8"></div><div>');const Ws=e=>{const{title:t,onCollapse:n}=e,s=()=>e.isOpen?"collapse-open":"collapse-close",a=()=>e.isOpen?"opacity-100":"opacity-0";return(()=>{var o=ht(),r=o.firstChild,p=r.nextSibling;return r.$$click=()=>n(!e.isOpen),m(r,t),m(p,c(S,{get when(){return e.isOpen},get children(){return pe(()=>e.children)()}})),_(i=>{var l=L(s(),"collapse collapse-arrow select-none border-secondary bg-base-200 shadow-md"),d=L(a(),"collapse-content grid grid-cols-2 gap-2 transition-opacity duration-1000 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5");return l!==i.e&&U(o,i.e=l),d!==i.t&&U(p,i.t=d),i},{e:void 0,t:void 0}),o})()};V(["click"]);const vt=["acid","aqua","autumn","black","bumblebee","business","cmyk","coffee","corporate","cupcake","cyberpunk","dark","dim","dracula","emerald","fantasy","forest","garden","halloween","lemonade","light","lofi","luxury","night","nord","pastel","retro","sunset","synthwave","valentine","winter","wireframe"];var P=(e=>(e.Overview="/overview",e.Proxies="/proxies",e.Rules="/rules",e.Conns="/conns",e.Log="/logs",e.Config="/config",e.Setup="/setup",e))(P||{});const yt=10,Xs={title:{align:"center",style:{color:"gray",fontSize:"16px"}},chart:{toolbar:{show:!1},zoom:{enabled:!1},animations:{easing:"linear"}},noData:{text:"Loading..."},legend:{showForSingleSeries:!0,fontSize:"16px",labels:{colors:"gray"},itemMargin:{horizontal:32}},dataLabels:{enabled:!1},grid:{yaxis:{lines:{show:!1}}},stroke:{curve:"smooth"},tooltip:{enabled:!1},xaxis:{range:yt,labels:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{style:{colors:"gray",fontSize:"13px"},formatter:e=>Ae(e).toString()}}};var Y=(e=>(e[e.NOT_CONNECTED=-1]="NOT_CONNECTED",e[e.MEDIUM=200]="MEDIUM",e[e.HIGH=500]="HIGH",e))(Y||{}),he=(e=>(e[e.NOT_CONNECTED=-1]="NOT_CONNECTED",e[e.MEDIUM=800]="MEDIUM",e[e.HIGH=1500]="HIGH",e))(he||{}),ve=(e=>(e.OFF="off",e.DOTS="dots",e.BAR="bar",e.Auto="auto",e))(ve||{}),I=(e=>(e.NATURAL="orderNatural",e.LATENCY_ASC="orderLatency_asc",e.LATENCY_DESC="orderLatency_desc",e.NAME_ASC="orderName_asc",e.NAME_DESC="orderName_desc",e))(I||{}),O=(e=>(e.EN="en-US",e.ZH="zh-CN",e))(O||{}),ye=(e=>(e.Details="details",e.Close="close",e.ID="ID",e.Type="type",e.Process="process",e.Host="host",e.SniffHost="sniffHost",e.Rule="rules",e.Chains="chains",e.DlSpeed="dlSpeed",e.ULSpeed="ulSpeed",e.Download="dl",e.Upload="ul",e.ConnectTime="connectTime",e.SourceIP="sourceIP",e.SourcePort="sourcePort",e.Destination="destination",e.InboundUser="inboundUser",e))(ye||{});const te=200,be=Object.values(ye),bt={...Object.fromEntries(be.map(e=>[e,!0])),ID:!1};var k=(e=>(e.XS="xs",e.SM="sm",e.MD="md",e.LG="lg",e))(k||{}),wt=(e=>(e.Global="global",e.Rule="rule",e.Direct="direct",e))(wt||{}),we=(e=>(e.Info="info",e.Error="error",e.Warning="warning",e.Debug="debug",e.Silent="silent",e))(we||{});const xt=[200,300,500,800,1e3],Pt=xt[0],Ct={add:"Add",overview:"Overview",proxies:"Proxies",proxiesSettings:"Proxies Settings",rules:"Rules",connections:"Connections",connectionsSettings:"Connections Settings",connectionsDetails:"Connections Details",logs:"Logs",logsSettings:"Logs Settings",config:"Config",upload:"Upload",download:"Download",uploadTotal:"Upload Total",downloadTotal:"Download Total",activeConnections:"Active Connections",memoryUsage:"Memory Usage",traffic:"Traffic",memory:"Memory",down:"Down",up:"Up",proxyProviders:"Proxy Providers",ruleProviders:"Rule Providers",search:"Search",ID:"ID",type:"Type",name:"Name",process:"Process",host:"Host",sniffHost:"Sniff Host",chains:"Chains",connectTime:"Time",dlSpeed:"DL Speed",ulSpeed:"UL Speed",dl:"DL",ul:"UL",sourceIP:"Source IP",sourcePort:"Source Port",destination:"Destination",inboundUser:"Inbound User",close:"Close",reset:"Reset",dnsQuery:"DNS Query",dots:"Dots",bar:"Bar",auto:"Auto",off:"Off",proxiesPreviewType:"Proxies preview type",urlForIPv6SupportTest:"URL for IPv6 support test",urlForLatencyTest:"URL for latency test",autoCloseConns:"Automatically Close connections",useTwemoji:"Use Twemoji Mozilla Font",autoSwitchTheme:"Automatically switch theme",favDayTheme:"Favorite light theme",favNightTheme:"Favorite dark theme",renderInTwoColumns:"Render in two columns",updateGEODatabases:"Update GEO Databases",restartCore:"Restart Core",upgradeCore:"Upgrade Core",proxiesSorting:"Proxies Sorting",orderNatural:"Original order in config file",orderLatency_asc:"By latency from low to high",orderLatency_desc:"By latency from high to low",orderName_asc:"By name alphabetically (A-Z)",orderName_desc:"By name alphabetically (Z-A)",ms:"ms",updated:"Updated",tableSize:"Table size",logLevel:"Log Level",info:"info",silent:"silent",debug:"debug",warning:"warning",error:"error",logMaxRows:"Log Maximum Reserved Rows",xs:"Extra small size",sm:"Small size",md:"Normal size",lg:"Large size",switchEndpoint:"Switch Endpoint",switchLanguage:"Switch Language",latencyTestTimeoutDuration:"Latency Test Timeout Duration",all:"All",sequence:"Sequence",payload:"Payload",details:"Details",endpointURL:"Endpoint URL",secret:"Secret",global:"Global",rule:"Rule",direct:"Direct",active:"Active",closed:"Closed",sort:"Sort",hideUnAvailableProxies:"Hide UnAvailable Proxies",reloadConfig:"Reload Config",flushFakeIP:"Flush Fake-IP",tagClientSourceIPWithName:"Tag Client Source IP With Name",tag:"Tag",coreConfig:"Core Config",xdConfig:"XD Config",version:"Version",expire:"Expire",noExpire:"Null",allowLan:"Allow Lan",enableTunDevice:"Enable TUN Device",tunModeStack:"TUN Mode Stack",tunDeviceName:"TUN Device Name",interfaceName:"Interface Name",en:"English",zh:"Chinese",port:"{{ name }} Port"},St={add:"添加",overview:"概览",proxies:"代理",proxiesSettings:"代理设置",rules:"规则",connections:"连接",connectionsSettings:"连接设置",connectionsDetails:"连接详情",logs:"日志",logsSettings:"日志设置",config:"配置",upload:"上传",download:"下载",uploadTotal:"上传总量",downloadTotal:"下载总量",activeConnections:"活动连接",memoryUsage:"内存使用情况",traffic:"流量",memory:"内存",down:"下载",up:"上传",proxyProviders:"代理提供者",ruleProviders:"规则提供者",search:"搜索",ID:"ID",type:"类型",name:"名字",process:"进程",host:"主机",sniffHost:"嗅探域名",chains:"链路",connectTime:"连接时间",dlSpeed:"下载速度",ulSpeed:"上传速度",dl:"下载量",ul:"上传量",sourceIP:"源地址",sourcePort:"源端口",destination:"目标地址",inboundUser:"入站用户",close:"关闭",reset:"重置",dnsQuery:"DNS 查询",dots:"点阵",bar:"条形",auto:"自适应",off:"关闭",proxiesPreviewType:"节点组预览样式",urlForIPv6SupportTest:"测试 IPv6 支持链接",urlForLatencyTest:"测速链接",autoCloseConns:"自动断开连接",useTwemoji:"使用 Twemoji Mozilla 字体",autoSwitchTheme:"自动切换主题",favDayTheme:"浅色主题偏好",favNightTheme:"深色主题偏好",renderInTwoColumns:"双列渲染",updateGEODatabases:"更新 GEO 数据库",restartCore:"重启核心",upgradeCore:"更新核心",proxiesSorting:"节点排序",orderNatural:"原配置文件中的排序",orderLatency_asc:"按延迟从低到高",orderLatency_desc:"按延迟从高到低",orderName_asc:"按名称字母排序 (A-Z)",orderName_desc:"按名称字母排序 (Z-A)",ms:"毫秒",updated:"更新于",tableSize:"表格大小",logLevel:"日志等级",info:"信息",silent:"静默",debug:"调试",warning:"警告",error:"错误",logMaxRows:"日志最大保留行数",xs:"超小尺寸",sm:"小尺寸",md:"正常尺寸",lg:"超大尺寸",switchEndpoint:"切换后端",switchLanguage:"切换语言",latencyTestTimeoutDuration:"测速超时时间",all:"全部",sequence:"序列号",payload:"内容",details:"详情",endpointURL:"后端地址",secret:"密钥",global:"全局",rule:"规则",direct:"直连",active:"活动",closed:"已关闭",sort:"排序",hideUnAvailableProxies:"隐藏不可用节点",reloadConfig:"重载配置",flushFakeIP:"清空 Fake-IP",tagClientSourceIPWithName:"为客户端源 IP 地址添加名称标记",tag:"标记",coreConfig:"核心配置",xdConfig:"XD 配置",version:"版本",expire:"到期时间",noExpire:"不限时",allowLan:"允许局域网访问",enableTunDevice:"开启 TUN 转发",tunModeStack:"TUN 模式堆栈",tunDeviceName:"TUN 设备名称",interfaceName:"接口名称",en:"英文",zh:"中文",port:"{{ name }} 端口"},xe={[O.EN]:Ct,[O.ZH]:St},[Tt,Vs]=v(u(Reflect.has(xe,navigator.language)?navigator.language:O.EN),{name:"lang",storage:localStorage}),[$t,Dt]=Fe(e=>[ze(()=>Re(xe[e.locale]),Ne)]),Pe=()=>Dt(),[Js,Zs]=v(u(ve.Auto),{name:"proxiesPreviewType",storage:localStorage}),[Gs,Es]=v(u(I.NATURAL),{name:"proxiesOrderingType",storage:localStorage}),[Qs,Ks]=v(u(!1),{name:"hideUnAvailableProxies",storage:localStorage}),[Ys,ea]=v(u(!0),{name:"renderProxiesInTwoColumns",storage:localStorage}),[W,ta]=v(u("https://www.gstatic.com/generate_204"),{name:"urlForLatencyTest",storage:localStorage}),[E,sa]=v(u("https://api-ipv6.ip.sb/ip"),{name:"urlForIPv6SupportTest",storage:localStorage}),[Lt,aa]=v(u(!1),{name:"autoCloseConns",storage:localStorage}),[It,na]=v(u(!0),{name:"useTwemoji",storage:localStorage}),[kt,oa]=v(u(!1),{name:"autoSwitchTheme",storage:localStorage}),[Mt,ra]=v(u("nord"),{name:"favDayTheme",storage:localStorage}),[Ut,la]=v(u("sunset"),{name:"favNightTheme",storage:localStorage}),[ia,ca]=v(u(k.XS),{name:"connectionsTableSize",storage:localStorage}),[da,ua]=v(u(bt),{name:"connectionsTableColumnVisibility",storage:localStorage}),[pa,ga]=v(u(be),{name:"connectionsTableColumnOrder",storage:localStorage}),[ma,fa]=v(u([]),{name:"clientSourceIPTags",storage:localStorage}),[ha,va]=v(u(k.XS),{name:"logsTableSize",storage:localStorage}),[ya,ba]=v(u(we.Info),{name:"logLevel",storage:localStorage}),[wa,xa]=v(u(Pt),{name:"logMaxRows",storage:localStorage}),Pa=e=>{let t="table-xs";switch(e){case k.XS:t="table-xs";break;case k.SM:t="table-sm";break;case k.MD:t="table-md";break;case k.LG:t="table-lg";break}return t},[R,Ca]=v(u(5e3),{name:"latencyTestTimeoutDuration",storage:localStorage}),_t=()=>W().startsWith("https"),D=()=>_t()?he:Y,[qt,Ce]=u([]),[Se,jt]=u(null),Sa=()=>{const[e,t]=u([]),[n,s]=u([]),[a,o]=u(!1);return J(()=>{var p;const r=(p=Se())==null?void 0:p.connections;r&&ge(()=>{const i=Te(r,n());if(At(n()),!a()){const l=Ft(i,qt());s(i),t(l.slice(-te))}Ce(l=>l.slice(-(i.length+te)))})}),{closedConnections:e,activeConnections:n,paused:a,setPaused:o}},Te=(e,t)=>{const n=new Map;return t.forEach(s=>n.set(s.id,s)),e.map(s=>{const a=n.get(s.id);return!a||!B.isNumber(a.download)||!B.isNumber(a.upload)?{...s,downloadSpeed:0,uploadSpeed:0}:{...s,downloadSpeed:s.download-a.download,uploadSpeed:s.upload-a.upload}})},At=e=>{Ce(t=>B.unionWith(t,e,(n,s)=>n.id===s.id))},Ft=(e,t)=>B.differenceWith(t,e,(n,s)=>n.id===s.id),Ta=()=>w().delete("connections"),zt=e=>w().delete(`connections/${e}`),[$a,se]=u(!1),[Da,ae]=u(!1),[La,ne]=u(!1),[Ia,oe]=u(!1),[ka,re]=u(!1),Ma=async()=>{const e=w();se(!0);try{await e.put("configs",{searchParams:{force:!0},json:{path:"",payload:""}})}catch{}se(!1)},Ua=async()=>{const e=w();ne(!0);try{await e.post("cache/fakeip/flush")}catch{}ne(!1)},_a=async()=>{const e=w();ae(!0);try{await e.post("configs/geo")}catch{}ae(!1)},qa=async()=>{const e=w();oe(!0);try{await e.post("upgrade")}catch{}oe(!1)},ja=async()=>{const e=w();re(!0);try{await e.post("restart")}catch{}re(!1)},Aa=()=>w().get("configs").json(),Fa=async(e,t,n)=>{try{await w().patch("configs",{json:{[e]:t}}).json(),await n()}catch(s){Be.error(s.message)}},za=async()=>{const e=w(),{version:t}=await e.get("version").json();return t},Nt=()=>w().get("providers/proxies").json(),Rt=()=>w().get("proxies").json(),le=e=>w().put(`providers/proxies/${e}`),$e=e=>w().get(`providers/proxies/${e}/healthcheck`,{timeout:5*1e3}).json(),Bt=(e,t)=>w().put(`proxies/${e}`,{body:JSON.stringify({name:t})}),ie=(e,t,n,s)=>{const a=w();return t!==""?$e(t).then(o=>({delay:o[e]})):a.get(`proxies/${e}/delay`,{searchParams:{url:n,timeout:s}}).json()},ce=(e,t,n)=>w().get(`group/${e}/delay`,{searchParams:{url:t,timeout:n}}).json(),Na=()=>w().get("rules").json(),Ra=()=>w().get("providers/rules").json(),Ba=e=>w().put(`providers/rules/${e}`),Ha=async e=>{const t="https://api.github.com/repos/MetaCubeX/mihomo",n=/(alpha|beta|meta)-?(\w+)/.exec(e);if(!n)return!1;const s=n[1],a=n[2];if(s==="meta"){const{assets:o}=await H.get(`${t}/releases/latest`).json();return!o.some(({name:p})=>p.includes(a))}if(s==="alpha"){const{assets:o}=await H.get(`${t}/releases/tags/Prerelease-Alpha`).json();return!o.some(({name:p})=>p.includes(a))}return!1},Oa=e=>e.includes("sing-box"),Wa=e=>/^https?/.test(e)?e:`${window.location.protocol}//${e}`,N=()=>{const[e,t]=u({}),n=(a,o)=>{t({...e(),[a]:o})};return{map:e,set:n,setWithCallback:async(a,o)=>{n(a,!0);try{await o()}catch{}n(a,!1)}}},Ht=(e="")=>{const t=e.toLowerCase();return t.includes("shadowsocks")?t.replace("shadowsocks","ss"):t==="hysteria"?"hy":t==="wireguard"?"wg":t},Ot=(e="")=>{const t=e.toLowerCase();return!["selector","direct","reject","urltest","loadbalance","fallback","relay"].includes(t)},Xa=(e,t,n,s)=>n===I.NATURAL?e:e.sort((a,o)=>{if(s!=null&&s.has(a)&&!(s!=null&&s.has(o)))return-1;if(s!=null&&s.has(o)&&!(s!=null&&s.has(a)))return 1;const r=t[a],p=t[o];switch(n){case I.LATENCY_ASC:return r===D().NOT_CONNECTED?1:p===D().NOT_CONNECTED?-1:r-p;case I.LATENCY_DESC:return r===D().NOT_CONNECTED?1:p===D().NOT_CONNECTED?-1:p-r;case I.NAME_ASC:return a.localeCompare(o);case I.NAME_DESC:return o.localeCompare(a);default:return 0}}),Va=(e,t,n,s)=>s?e.filter(a=>n!=null&&n.has(a)?!0:t[a]!==D().NOT_CONNECTED):e,{map:Wt,set:Xt}=N(),{map:Vt,setWithCallback:Jt}=N(),{map:Zt,setWithCallback:Gt}=N(),{map:Et,setWithCallback:Qt}=N(),{map:Kt,setWithCallback:Yt}=N(),[es,de]=u(!1),[ts,ss]=u([]),[as,ns]=u(new Set),[ue,os]=u([]),[De,Q]=u({}),[Le,F]=u({}),[Ie,rs]=u({}),ls=e=>{var p;const t={...Ie()},n={...De()},s={...Le()},a=(i,l,d=!0)=>{var f,y,x,b;const g=(f=i.extra)==null?void 0:f[l];if(Array.isArray(g)){const h=(y=g.at(-1))==null?void 0:y.delay;if(h)return h}if(d)return(b=(x=i.history)==null?void 0:x.at(-1))==null?void 0:b.delay},o={};e.forEach(i=>{const{udp:l,xudp:d,type:g,now:f,name:y,provider:x=""}=i;if(t[i.name]={udp:l,xudp:d,type:g,now:f,name:y,provider:x},!f)n[i.name]=a(i,W())||D().NOT_CONNECTED;else if(n[f]!==void 0)n[i.name]=n[f];else{const h=o[f]??new Set;h.add(i.name),o[f]=h}const b=(a(i,E(),!1)??0)>0;s[i.name]=b});const r=Object.keys(o).filter(i=>n[i]!==void 0);for(;r.length>0;){const i=r.shift(),l=n[i];for(const d of((p=o[i])==null?void 0:p.values())??[])n[d]=l,r.push(d)}me(()=>{rs(t),Q(n),F(s)})},X=()=>{const e=async()=>{const[{providers:l},{proxies:d}]=await Promise.all([Nt(),Rt()]),g=[...d.GLOBAL.all??[],"GLOBAL"],f=Object.values(d).filter(b=>{var h;return(h=b.all)==null?void 0:h.length}).sort((b,h)=>g.indexOf(b.name)-g.indexOf(h.name)),y=Object.values(l).filter(b=>b.name!=="default"&&b.vehicleType!=="Compatible"),x=[...Object.values(d),...y.flatMap(b=>b.proxies.filter(h=>!(h.name in d)).map(h=>({...h,provider:b.name})))];me(()=>{ss(f),ns(new Set(["DIRECT","REJECT",...f.map(b=>b.name)])),os(y),ls(x)})},t=async(l,d)=>{await Bt(l.name,d),await e(),Lt()&&ge(()=>{var f;const g=Te(((f=Se())==null?void 0:f.connections)??[],[]);g.length>0&&g.forEach(({id:y,chains:x})=>{x.includes(l.name)&&zt(y)})})},n=async(l,d)=>{const g=E();if(!g||g.length===0){F({});return}let f=!1;try{const{delay:y}=await ie(l,d,g,R());f=y>0}catch{f=!1}F(y=>({...y,[l]:f}))},s=async l=>{const d=E();if(!d||d.length===0){F({});return}const g=await ce(l,d,R()),f=Object.fromEntries(Object.entries(g).map(([y,x])=>[y,x>0]));F(y=>({...y,...f}))};return{collapsedMap:Wt,setCollapsedMap:Xt,proxyIPv6SupportMap:Le,proxyLatencyTestingMap:Vt,proxyGroupLatencyTestingMap:Zt,proxyProviderLatencyTestingMap:Et,updatingMap:Kt,isAllProviderUpdating:es,proxies:ts,proxyGroupNames:as,proxyProviders:ue,proxyLatencyTest:async(l,d)=>{Jt(l,async()=>{const{delay:g}=await ie(l,d,W(),R());Q(f=>({...f,[l]:g}))}),await n(l,d)},proxyGroupLatencyTest:async l=>{Gt(l,async()=>{const d=await ce(l,W(),R());Q(g=>({...g,...d})),await e()}),await s(l)},latencyMap:De,proxyNodeMap:Ie,fetchProxies:e,selectProxyInGroup:t,updateProviderByProviderName:l=>Yt(l,async()=>{try{await le(l)}catch{}await e()}),updateAllProvider:async()=>{de(!0);try{await Promise.allSettled(ue().map(l=>le(l.name))),await e()}finally{de(!1)}},proxyProviderLatencyTest:l=>Qt(l,async()=>{await $e(l),await e()})}},[is,Ja]=v(u(""),{name:"selectedEndpoint",storage:localStorage}),[cs,Za]=v(u([]),{name:"endpointList",storage:localStorage}),w=()=>{const e=M();if(!e)return H.create({});const t=new Headers;return e.secret&&t.set("Authorization",`Bearer ${e.secret}`),H.create({prefixUrl:e.url,headers:t})},M=()=>cs().find(({id:e})=>e===is()),ds=()=>{var e;return(e=M())==null?void 0:e.secret},us=()=>{var e;return new URL(((e=M())==null?void 0:e.url)??"").origin.replace("http","ws")},ps=(e,t={})=>{const n=new URLSearchParams(t);n.set("token",ds()??"");const s=He(`${us()}/${e}?${n.toString()}`),a=Oe(s,"message");return z(()=>{var r;return a()?JSON.parse((r=a())==null?void 0:r.data):null})},[gs,ke]=v(u("sunset"),{name:"theme",storage:localStorage});var ms=C('<li class="tooltip tooltip-bottom">'),fs=C('<div class="drawer drawer-end w-auto sm:ml-auto"><input id=themes type=checkbox class=drawer-toggle><div class="drawer-content flex items-center"><label for=themes class="btn btn-circle btn-primary drawer-button btn-sm"></label></div><div class="drawer-side overflow-x-hidden"><label for=themes class=drawer-overlay></label><ul class="menu gap-2 rounded-l-box bg-base-300 p-2">'),hs=C('<li class="btn btn-xs">'),vs=C('<div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal menu-lg gap-2 p-0">'),ys=C('<ul class="navbar z-50 flex w-auto items-center justify-center bg-base-300 px-4 shadow-lg"><div class="navbar-start gap-4"><div class="drawer w-auto lg:hidden"><input id=navs type=checkbox class=drawer-toggle><div class="drawer-content flex items-center"><label for=navs class="btn btn-circle drawer-button btn-sm"></label></div><div class=drawer-side><label for=navs class=drawer-overlay></label><ul class="menu min-h-full w-2/5 gap-2 rounded-r-box bg-base-300 pt-20"></ul></div></div></div><div class=navbar-end><div class="flex items-center gap-2">'),bs=C("<li>");const ws=({href:e,tooltip:t,children:n})=>(()=>{var s=ms();return Z(s,"data-tip",t),m(s,c(K,{class:"rounded-box",href:e,children:n})),s})(),xs=()=>(()=>{var e=fs(),t=e.firstChild,n=t.nextSibling,s=n.firstChild,a=n.nextSibling,o=a.firstChild,r=o.nextSibling;return m(s,c(Ve,{})),m(r,c(G,{each:vt,children:p=>(()=>{var i=hs();return i.$$click=()=>ke(p),Z(i,"data-theme",p),m(i,p),i})()})),e})(),Ps=()=>{const[e]=Pe(),t=()=>[{href:P.Overview,name:e("overview"),icon:c(Je,{})},{href:P.Proxies,name:e("proxies"),icon:c(Ze,{})},{href:P.Rules,name:e("rules"),icon:c(Ge,{})},{href:P.Conns,name:e("connections"),icon:c(Ee,{})},{href:P.Log,name:e("logs"),icon:c(Qe,{})},{href:P.Config,name:e("config"),icon:c(Ke,{})}],n=We(),[s,a]=u(!1);return(()=>{var o=ys(),r=o.firstChild,p=r.firstChild,i=p.firstChild,l=i.nextSibling,d=l.firstChild,g=l.nextSibling,f=g.firstChild,y=f.nextSibling,x=r.nextSibling,b=x.firstChild;return i.addEventListener("change",h=>a(h.target.checked)),m(d,c(Xe,{})),m(y,c(G,{get each(){return t()},children:({href:h,name:A})=>(()=>{var T=bs();return T.$$click=()=>a(!1),m(T,c(K,{href:h,children:A})),T})()})),m(r,c(Ls,{}),null),m(o,c(S,{get when(){return n.pathname!==P.Setup},get children(){var h=vs(),A=h.firstChild;return m(A,c(G,{get each(){return t()},children:({href:T,name:Me,icon:Ue})=>c(ws,{href:T,tooltip:Me,children:Ue})})),h}}),x),m(b,c(xs,{})),_(()=>i.checked=s()),o})()};V(["click"]);var Cs=C('<span class="badge badge-sm p-px"><span class=scale-75>IPv6');const Ss=e=>{const{proxyIPv6SupportMap:t}=X(),n=z(()=>t()[e.name]===!0);return c(S,{get when(){return n()},get children(){return Cs()}})};var Ts=C("<span>");const $s=e=>{const[t]=Pe(),{latencyMap:n}=X(),[s,a]=u(""),o=z(()=>n()[e.name]);return J(()=>{a("text-success"),o()>D().HIGH?a("text-error"):o()>D().MEDIUM&&a("text-warning")}),c(S,{get when(){return z(()=>typeof o()=="number")()&&o()!==Y.NOT_CONNECTED},get children(){var r=Ts();return m(r,o,null),m(r,()=>t("ms"),null),_(()=>U(r,`whitespace-nowrap text-xs ${s()}`)),r}})};var Ds=C('<div class="text-md flex items-center gap-1 whitespace-nowrap font-bold uppercase sm:text-xl"><span>(</span><a class="text-primary transition-transform hover:rotate-90 hover:scale-125"href=https://github.com/metacubex/metacubexd target=_blank>xd</a><span>)');const Ls=()=>(()=>{var e=Ds(),t=e.firstChild;return m(e,c(K,{class:"bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent",get href(){return M()?"/":"/setup"},children:"metacube"}),t),e})();var Is=C('<div class="sticky bottom-0 z-50 flex items-center justify-end bg-base-100 bg-opacity-80 p-4 backdrop-blur"><div class="flex justify-end gap-2">'),ks=C('<dialog class="modal modal-bottom sm:modal-middle"><div class="modal-box p-0"><div><div class="flex items-center gap-4 text-xl font-bold"><span></span></div></div><div class=p-4></div></div><form method=dialog class=modal-backdrop><button>');const Ms="sticky bottom-0 z-50 flex items-center justify-end bg-base-100 bg-opacity-80 p-4 backdrop-blur",Ga=e=>{let t;return(()=>{var n=ks(),s=n.firstChild,a=s.firstChild,o=a.firstChild,r=o.firstChild,p=a.nextSibling;return Ye(i=>{var l;return(t=i)&&((l=e.ref)==null?void 0:l.call(e,i))},n),s.$$contextmenu=i=>i.preventDefault(),m(o,()=>e.icon,r),m(r,()=>e.title),m(a,c(fe,{class:"btn-circle btn-sm",onClick:()=>t==null?void 0:t.close(),get icon(){return c(et,{size:20})}}),null),m(p,pe(()=>e.children)),m(s,c(S,{get when(){return e.action},get children(){var i=Is(),l=i.firstChild;return m(l,()=>e.action),i}}),null),_(()=>U(a,L(Ms,"top-0 justify-between"))),n})()};V(["contextmenu"]);var Us=C('<div><div class="flex items-center justify-between gap-2"><span class="break-all text-left text-sm"></span><span class="flex items-center gap-1"></span></div><div class="flex items-center justify-between gap-1"><div></div><div class=text-xs>');const Ea=e=>{const{proxyLatencyTest:t,proxyLatencyTestingMap:n}=X(),{proxyName:s,isSelected:a,onClick:o}=e,{proxyNodeMap:r}=X(),p=z(()=>r()[s]),i=()=>{var l,d,g;return Ot((l=p())==null?void 0:l.type)?(d=p())!=null&&d.xudp?"xudp":(g=p())!=null&&g.udp?"udp":null:null};return(()=>{var l=Us(),d=l.firstChild,g=d.firstChild,f=g.nextSibling,y=d.nextSibling,x=y.firstChild,b=x.nextSibling;return tt(l,"click",o,!0),Z(l,"title",s),m(g,s),m(f,c(Ss,{get name(){return e.proxyName}}),null),m(f,c(fe,{class:"btn-circle btn-ghost h-auto min-h-0 w-auto",get icon(){return c(st,{size:20,get class(){return L(n()[s]&&"animate-pulse text-success")}})},onClick:h=>{h.stopPropagation(),t(s,p().provider)}}),null),m(x,()=>{var h;return Ht((h=p())==null?void 0:h.type)},null),m(x,c(S,{get when(){return i()},get children(){return` :: ${i()}`}}),null),m(b,c($s,{get name(){return e.proxyName}})),_(h=>{var A=L("card card-bordered tooltip-bottom flex flex-col justify-between gap-1 border-neutral-focus bg-neutral p-2 text-neutral-content",a&&"border-primary bg-primary-content text-primary",o&&"cursor-pointer"),T=L("text-xs text-slate-500",a&&"text-primary");return A!==h.e&&U(l,h.e=A),T!==h.t&&U(x,h.t=T),h},{e:void 0,t:void 0}),l})()};V(["click"]);var _s=C('<div><div class="flex-1 overflow-y-auto p-2 sm:p-4"><div class=pb-8>');const qs=q(()=>j(()=>import("./Setup-DoE3z_4g.js"),__vite__mapDeps([0,1]),import.meta.url)),js=q(()=>j(()=>import("./Overview-RYWmXj_3.js"),__vite__mapDeps([2,1]),import.meta.url)),As=q(()=>j(()=>import("./Connections-C1U_d5Nx.js"),__vite__mapDeps([3,1,4,5,6]),import.meta.url)),Fs=q(()=>j(()=>import("./Logs-lsQuF366.js"),__vite__mapDeps([7,1,4,5]),import.meta.url)),zs=q(()=>j(()=>import("./Proxies-DH0m9NaO.js"),__vite__mapDeps([8,1,6,5]),import.meta.url)),Ns=q(()=>j(()=>import("./Rules-Bw2BZNnE.js"),__vite__mapDeps([9,1,6]),import.meta.url)),Rs=q(()=>j(()=>import("./Config-DH-Rqh17.js"),__vite__mapDeps([10,1,5]),import.meta.url)),Bs=()=>{const e=ps("connections");return J(()=>jt(e())),null},Hs=()=>{const e=at();return J(()=>{kt()&&ke(e()?Ut():Mt())}),c($t,{get locale(){return Tt()},get children(){var t=_s(),n=t.firstChild,s=n.firstChild;return m(t,c(Ps,{}),n),m(s,c(nt,{get children(){return[c(S,{get when(){return M()},get children(){return[c($,{get path(){return P.Overview},component:js}),c($,{get path(){return P.Proxies},component:zs}),c($,{get path(){return P.Rules},component:Ns}),c($,{get path(){return P.Conns},component:As}),c($,{get path(){return P.Log},component:Fs}),c($,{get path(){return P.Config},component:Rs}),c($,{path:"*",get element(){return c(ot,{get href(){return P.Overview}})}})]}}),c($,{get path(){return M()?P.Setup:"*"},component:qs})]}}),null),m(s,c(S,{get when(){return M()},get children(){return c(Bs,{})}}),null),m(t,c(rt,{position:"bottom-center"}),null),_(a=>{var o=L("relative flex h-screen flex-col overscroll-y-none subpixel-antialiased",It()?"font-twemoji":"font-no-twemoji"),r=gs();return o!==a.e&&U(t,a.e=o),r!==a.t&&Z(t,"data-theme",a.t=r),a},{e:void 0,t:void 0}),t}})};lt.extend(it);ct(()=>c(ut,{get source(){return dt()},get children(){return c(Hs,{})}}),document.getElementById("root"));export{Qs as $,ba as A,fe as B,yt as C,Xs as D,xa as E,xt as F,ha as G,ya as H,wa as I,aa as J,ta as K,we as L,Ga as M,Ca as N,sa as O,Es as P,I as Q,Ks as R,ea as S,k as T,Zs as U,ve as V,Lt as W,W as X,R as Y,E as Z,Gs as _,is as a,Ys as a0,Js as a1,D as a2,$s as a3,X as a4,Va as a5,Xa as a6,Ws as a7,Ea as a8,Na as a9,vt as aA,la as aB,Mt as aC,Ut as aD,It as aE,Ha as aF,Aa as aG,Ra as aa,Ba as ab,N as ac,Tt as ad,za as ae,Oa as af,w as ag,Fa as ah,$a as ai,Ma as aj,Da as ak,_a as al,La as am,Ua as an,Ia as ao,qa as ap,ka as aq,ja as ar,P as as,wt as at,O as au,na as av,Vs as aw,oa as ax,kt as ay,ra as az,Ja as b,ps as c,M as d,cs as e,be as f,bt as g,ca as h,ma as i,fa as j,ia as k,Se as l,qt as m,Sa as n,ye as o,zt as p,pa as q,da as r,Za as s,Wa as t,Pe as u,Ta as v,ga as w,ua as x,Pa as y,va as z};
