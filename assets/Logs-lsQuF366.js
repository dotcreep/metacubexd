import{c as t,L as V,i as e,F as C,b as w,d as v,k as y,p as P,j as X,g as I,M as Z,ae as G,P as J,ap as K,aq as Q,t as A,D as U,e as Y}from"./vendor-DW_s8V88.js";import{c as ee,g as te,a as re,e as le,f as j,r as ae}from"./index-BuMbUX1G.js";import{u as W,z as se,T as ne,A as ie,L as g,E as oe,F as ce,G as N,H as O,I as B,M as de,c as ge,B as ue,y as he}from"./index-hv_j-1W6.js";import{C as M}from"./ConfigTitle-DHyKRuSc.js";var ve=v('<div class="flex flex-col gap-4"><div><select class="select select-bordered w-full"></select></div><div><select class="select select-bordered w-full"></select></div><div><select class="select select-bordered w-full">'),k=v("<option>");const fe=i=>{const[a]=W();return t(de,{ref:c=>{var o;return(o=i.ref)==null?void 0:o.call(i,c)},get icon(){return t(V,{size:24})},get title(){return a("logsSettings")},get children(){var c=ve(),o=c.firstChild,d=o.firstChild,_=o.nextSibling,b=_.firstChild,$=_.nextSibling,p=$.firstChild;return e(o,t(M,{withDivider:!0,get children(){return a("tableSize")}}),d),d.addEventListener("change",r=>se(r.target.value)),e(d,t(C,{get each(){return Object.values(ne)},children:r=>(()=>{var s=k();return s.value=r,e(s,()=>a(r)),s})()})),e(_,t(M,{withDivider:!0,get children(){return a("logLevel")}}),b),b.addEventListener("change",r=>ie(r.target.value)),e(b,t(C,{get each(){return[g.Info,g.Error,g.Warning,g.Debug,g.Silent]},children:r=>(()=>{var s=k();return s.value=r,e(s,()=>a(r)),s})()})),e($,t(M,{withDivider:!0,get children(){return a("logMaxRows")}}),p),p.addEventListener("change",r=>oe(parseInt(r.target.value))),e(p,t(C,{each:ce,children:r=>(()=>{var s=k();return s.value=r,e(s,r),s})()})),w(()=>d.value=N()),w(()=>b.value=O()),w(()=>p.value=B()),c}})};var me=v("<span>"),be=v('<div class="flex h-full flex-col gap-2"><div class="join w-full"><input type=search class="input join-item input-primary input-sm flex-1 flex-shrink-0 sm:input-md"></div><div class="overflow-x-auto whitespace-nowrap rounded-md bg-base-300"><table><thead class="sticky top-0 z-10"></thead><tbody>'),pe=v("<tr>"),_e=v('<th class=bg-base-200><div class="flex items-center"><div>'),$e=v('<tr class="hover:!bg-primary hover:text-primary-content">'),Se=v("<td class=py-2>");const q=(i,a,c,o)=>{const d=ae(i.getValue(a),c);return o({itemRank:d}),d.passed},Fe=()=>{let i;const[a]=W();let c=1;const[o,d]=y([]),_=ge("logs",{level:O()});P(()=>{const l=_();l&&(d(f=>[{...l,seq:c},...f].slice(0,B())),c++)});const[b,$]=y(""),[p,r]=X(y([]),{name:"logsTableSorting",storage:localStorage}),s=[{header:a("sequence"),accessorFn:l=>l.seq},{header:a("type"),accessorFn:l=>l.type,cell:({row:l})=>{const f=l.original.type;let u="";switch(f){case g.Error:u="text-error";break;case g.Warning:u="text-warning";break;case g.Info:u="text-info";break;case g.Debug:u="text-success";break}return(()=>{var S=me();return I(S,u),e(S,()=>`[${l.original.type}]`),S})()}},{header:a("payload"),accessorFn:l=>l.payload}],E=ee({filterFns:{fuzzy:q},state:{get globalFilter(){return b()},get sorting(){return p()}},get data(){return o()},sortDescFirst:!0,columns:s,onGlobalFilterChange:$,onSortingChange:r,globalFilterFn:q,getFilteredRowModel:te(),getSortedRowModel:re(),getCoreRowModel:le()});return(()=>{var l=be(),f=l.firstChild,u=f.firstChild,S=f.nextSibling,R=S.firstChild,D=R.firstChild,H=D.nextSibling;return u.$$input=n=>$(n.target.value),e(f,t(ue,{class:"join-item btn-sm sm:btn-md",onClick:()=>i==null?void 0:i.showModal(),get icon(){return t(Z,{})}}),null),e(D,t(G,{get each(){return E.getHeaderGroups()},children:n=>{const m=n();return(()=>{var h=pe();return e(h,t(G,{get each(){return m.headers},children:L=>{const x=L();return(()=>{var z=_e(),T=z.firstChild,F=T.firstChild;return J(F,"click",x.column.getToggleSortingHandler(),!0),e(F,()=>j(x.column.columnDef.header,x.getContext())),e(T,()=>({asc:t(K,{}),desc:t(Q,{})})[x.column.getIsSorted()]??null,null),w(()=>I(F,A(x.column.getCanSort()&&"cursor-pointer select-none","flex-1"))),z})()}})),h})()}})),e(H,t(C,{get each(){return E.getRowModel().rows},children:n=>(()=>{var m=$e();return e(m,t(C,{get each(){return n.getVisibleCells()},children:h=>(()=>{var L=Se();return e(L,()=>j(h.column.columnDef.cell,h.getContext())),L})()})),m})()})),e(l,t(fe,{ref:n=>i=n}),null),w(n=>{var m=a("search"),h=A(he(N()),"table relative rounded-none");return m!==n.e&&U(u,"placeholder",n.e=m),h!==n.t&&I(R,n.t=h),n},{e:void 0,t:void 0}),l})()};Y(["input","click"]);export{Fe as default};
