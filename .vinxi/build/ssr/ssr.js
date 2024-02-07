import{ssr as l,ssrHydrationKey as u,escape as o,createComponent as i,ssrAttribute as k,isServer as N,getRequestEvent as _,ssrElement as g,mergeProps as P,useAssets as B,NoHydration as E,HydrationScript as F,Hydration as j,renderToStream as z}from"solid-js/web";import{Index as O,createSignal as A,createEffect as J,For as U,onCleanup as W,ErrorBoundary as D,lazy as G,createComponent as V,sharedConfig as Z}from"solid-js";import{provideRequestEvent as X}from"solid-js/web/storage";import{H3Event as v,setResponseStatus as Q,sendRedirect as K,getCookie as Y,setCookie as ee,setHeader as te,getRequestURL as se,getRequestIP as ne,getResponseStatus as re,getResponseStatusText as oe,getResponseHeaders as ae,getResponseHeader as ie,setResponseHeader as le,appendResponseHeader as ce,getRequestWebStream as de,removeResponseHeader as ue,eventHandler as pe}from"h3";import{getContext as he}from"unctx";import{AsyncLocalStorage as me}from"node:async_hooks";var fe=["<div",' class="menu">',"</div>"],ge=["<div","><div>","</div></div>"];function be(e){const t=["a","h",...e.data.map((s,n)=>n)];return l(fe,u(),o(i(O,{each:t,children:s=>{const n=s()==="a"?-2:s()==="h"?-1:Number(s());return l(ge,u()+k("class",n===e.active?"menu-active":o(void 0,!0),!1),typeof s()=="number"?o(Number(s()))+1:o(s()))}})))}const H={title:"Principles & Practices",date:"1st april 2022",hero:"https://media.istockphoto.com/id/534130204/photo/textured-paint-background.jpg?s=612x612&w=0&k=20&c=Crg3Wj1y8R1uEM7UpZ16ti0szfykU8Z0NV1GEv9Oqc8=",blocks:[{html:`<b>Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”</b>
      <p>As Cicero would put it, “Um, not so fast.” The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.
      Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.
      As Cicero would put it, “Um, not so fast.”
      The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.
      </p>
      <img src="/horse.svg" />
      <p>Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text f
      </p>
      <p>
      My ballz!
      <p>`},{html:'<h1>WORDS OF CONSESSION</h1><p>Art as a theory</p><b>Block theory powerful words in block "Goentoeroe"</b>'},{expandable:!0,title:"Joany",html:"<b>bla bla</b>"},{expandable:!0,title:"Joany in the slurperloere with friends",html:"<b>bla bla</b>"},{expandable:!0,title:"Joany on the spot",html:"<b>bla bla</b>"},{expandable:!0,title:"Joany GURT",html:"<b>bla bla</b>"}]};var ye=["<div",'><div class="expander" style="','"><div class="" style="','">','</div></div><div style="','">',"</div><!--$-->","<!--/--></div>"],ve=["<div",' style="','">',"</div>"],we=["<div",' class="page-nested" style="','"><img style="','"','><div class="page-inner"><div style="','"><div style="','"><!--$-->',"<!--/--><!--$-->",'<!--/--></div><div style="','">',"</div><div>",'</div></div><div style="','">',"</div></div></div>"],xe=["<div",' class="home" style="','">',"</div>"],ke=["<div",' class="home-item" style="','"><div style="','"><!--$-->','<!--/--><div style="','">','</div></div><div style="','"><!--$-->',"<!--/--><!--$-->",'<!--/--></div><div style="','"></div></div>'],Re=["<div",' class="page-about page-nested">',"</div>"],$e=["<div",' class="page"><div class="page-menu">','</div><div class="page-main">','</div><div class="page-rest"></div></div>'];const q=e=>{if(e.block.expandable){const[t,s]=A(!1);return l(ye,u(),"display:flex;border-bottom:2px solid black","transition:border-radius 0.5s;cursor:pointer;display:flex;width:30px;border-top-left-radius:148px;border-top-right-radius:148px;height:15px;background:black;color:white;justify-content:center;align-items:center;margin-top:30px;padding-top:4px"+(";margin-left:"+(~~(Math.random()*10)*10+"%"))+";position:relative",t()?"-":"+","user-select:none;margin-top:10px;max-width:450px;margin-bottom:15px;font-weight:500",o(e.block.title),t()?o(i(q,{get block(){return{html:e.block.html}}})):o(null))}return l(ve,u(),"margin-top:32px",e.block.html)},Se=e=>l(we,u(),"width:100%;margin-top:24px","min-width:100%;background-color:#eee",k("src",o(e.data.hero,!0),!1),"padding-right:90px","font-size:98px",e.index<9?"0":"",o(e.index)+1,"margin-bottom:8px",o(e.data.title),o(e.data.date),"margin-top:-16px;width:100%",o(e.data.blocks.map(t=>i(q,{block:t})))),Ce=e=>l(xe,u(),"display:flex;gap:30px;flex-wrap:wrap",o(i(U,{get each(){return e.data},children:(t,s)=>l(ke,u(),"padding:10px;cursor:pointer;display:flex;width:450px;position:relative;margin-bottom:60px","width:200px;height:60px;border:1xp solid blue;position:absolute;transform-origin:left;transform:rotate(90deg) translate(20px,-50px);font-size:18px",o(t.title),"font-size:11px;margin-top:5px"+(";opacity:"+.4)+";font-weight:600",o(t.date),"width:160px;margin-right:14px;font-size:32px",s()<9?"0":o(null),o(s())+1,`width:100%;box-sizing:border-box;height:300px;background-image:url(${o(t.hero,!0)});background-repeat:no-repeat;background-size:cover;background-position:center`)}))),Te=()=>l(Re,u(),H.blocks[0].html);function _e(e){const[t,s]=A(-1);return typeof window<"u"&&(window.addEventListener("hashchange",()=>{s(Number(window.location.hash.split("#")[1]*1))}),setTimeout(()=>{const n=window.location.hash.split("#")[1];s(n!==void 0?n*1:-1)}),J(()=>{window.location.hash=t()+""})),l($e,u(),o(i(be,{get active(){return t()},get data(){return e.data},setActive:s})),t()===-2?o(i(Te,{})):t()===-1?o(i(Ce,{get data(){return e.data},setActive:s})):o(i(Se,{get data(){return e.data[t()]},get index(){return t()}})))}const Ee=[H,{title:"Principles & Practices",date:"1st april 2022",hero:"https://images.mome.hu/image/xl/uploads/bak_vivien_reka_0_20220616_141901_4afb44b94a.jpg",blocks:[]},{title:"The aesthetics of pause",hero:"https://images.mome.hu/image/xl/uploads/bak_vivien_reka_0_20220616_165755_7dda57df8f.jpg",date:"1st april 2022",blocks:[{html:"<p>The aim of my thesis is to understand the pause as a visual aesthetic element. Beyond its practical manifestation, I analyse the works of contemporary artists who use white space as an expressive tool.</p>"}]},{title:"Veronika Szalai’s doctoral thesis defence",hero:"https://images.mome.hu/image/hero/uploads/bak_vivien_reka_0_20220616_165957_5b397c1231.jpg",date:"1st april 2022",blocks:[{html:"<p>The aim of my thesis is to understand the pause as a visual aesthetic element. Beyond its practical manifestation, I analyse the works of contemporary artists who use white space as an expressive tool.</p>"}]},{title:"Furnpboldi Percoloeroe",hero:"https://www.moma.org/media/W1siZiIsIjIxMTIwMyJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MTUwMFx1MDAzZSJdXQ.jpg?sha=582a516a14957aa3",date:"2 jan 2024",blocks:[]},{title:"Lynda Benglis: Victor",hero:"https://images.mome.hu/image/xl-2x/uploads/11_szalai_veronika_vedese_557b67e7ad.jpg",date:"1st april 2022",blocks:[{html:"<p>The aim of my thesis is to understand the pause as a visual aesthetic element. Beyond its practical manifestation, I analyse the works of contemporary artists who use white space as an expressive tool.</p>"},{expandable:!0,title:"Joany",html:"<b>bla bla</b>"},{expandable:!0,title:"Joany in the slurperloere with friends",html:"<b>bla bla</b>"},{expandable:!0,title:"Joany on the spot",html:"<b>bla bla</b>"},{expandable:!0,title:"Joany GURT",html:"<b>bla bla</b>"}]},{title:"Aestetoeroe Dankelitus",hero:"https://walker-web.imgix.net/cms/ex2014ld_ins_027.jpg?auto=format,compress&w=1920&h=1200&fit=crop&dpr=1.5",date:"2 jan 2024",blocks:[]}];function Ae(){return i(_e,{data:Ee})}function He(e){if(N){const t=_();t.response.status=e.code,t.response.statusText=e.text,W(()=>!t.nativeEvent.handled&&(t.response.status=200))}return null}function qe(e){return i(D,{get fallback(){return i(He,{code:500})},get children(){return e.children}})}var Me=" ";const Le={style:e=>g("style",e.attrs,()=>o(e.children),!0),link:e=>g("link",e.attrs,void 0,!0),script:e=>e.attrs.src?g("script",P(()=>e.attrs,{get id(){return e.key}}),()=>l(Me),!0):null};function w(e){let{tag:t,attrs:{key:s,...n}={key:void 0},children:r}=e;return Le[t]({attrs:n,key:s,children:r})}var Ie=["<script",">","<\/script>"],Ne=["<script",' type="module" async',"><\/script>"];const Pe=l("<!DOCTYPE html>");function M(e,t,s=[]){for(let n=0;n<t.length;n++){const r=t[n];if(r.path!==e[0].path)continue;let a=[...s,r];if(r.children){const d=e.slice(1);if(d.length===0||(a=M(d,r.children,a),!a))continue}return a}}function Be(e){const t=_();let s=[];return Promise.resolve().then(async()=>{if(t.router&&t.router.matches){const n=[...t.router.matches];for(;n.length&&(!n[0].info||!n[0].info.filesystem);)n.shift();const r=n.length&&M(n,t.routes);if(r)for(let a=0;a<r.length;a++){const d=r[a],f=await globalThis.MANIFEST.client.inputs[d.$component.src].assets();s.push.apply(s,f)}else console.warn("No route matched for preloading js assets")}s=[...new Map(s.map(n=>[n.attrs.key,n])).values()].filter(n=>n.attrs.rel==="modulepreload"&&!t.assets.find(r=>r.attrs.key===n.attrs.key))}),B(()=>s.length?s.map(n=>w(n)):void 0),i(E,{get children(){return[Pe,i(e.document,{get assets(){return[i(F,{}),t.assets.map(n=>w(n))]},get scripts(){return[l(Ie,u(),`window.manifest = ${JSON.stringify(t.manifest)}`),l(Ne,u(),k("src",o(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path,!0),!1))]},get children(){return i(j,{get children(){return i(qe,{get children(){return i(Ae,{})}})}})}})]}})}function Fe(e){let t;const s=L(e),n={duplex:"half",method:e.method,headers:e.headers};return e.node.req.body instanceof ArrayBuffer?new Request(s,{...n,body:e.node.req.body}):new Request(s,{...n,get body(){return t||(t=Qe(e),t)}})}function je(e){return e.web??={request:Fe(e),url:L(e)},e.web.request}function ze(){return et()}const R=Symbol("$HTTPEvent");function Oe(e){return typeof e=="object"&&(e instanceof v||e?.[R]instanceof v||e?.__is_event__===!0)}function c(e){return function(...t){let s=t[0];if(Oe(s))t[0]=s instanceof v||s.__is_event__?s:s[R];else{if(!globalThis.app.config.server.experimental?.asyncContext)throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");if(s=ze(),!s)throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");t.unshift(s)}return e(...t)}}const L=c(se),Je=c(ne),x=c(Q),$=c(re),Ue=c(oe),b=c(ae),S=c(ie),We=c(le),De=c(ce),Ge=c(K),Ve=c(Y),Ze=c(ee),Xe=c(te),Qe=c(de),Ke=c(ue);function Ye(){return he("nitro-app",{asyncContext:!!globalThis.app.config.server.experimental?.asyncContext,AsyncLocalStorage:me})}function et(){return Ye().use().event}const y=Symbol("fetchEvent");function tt(e){return{request:je(e),response:rt(e),clientAddress:Je(e),locals:{},nativeEvent:e,[R]:e}}function st(e){if(!e[y]){const t=tt(e);e[y]=t}return e[y]}class nt{constructor(t){this.event=t}get(t){const s=S(this.event,t);return Array.isArray(s)?s.join(", "):s}has(t){return this.get(t)!==void 0}set(t,s){return We(this.event,t,s)}delete(t){return Ke(this.event,t)}append(t,s){De(this.event,t,s)}getSetCookie(){const t=S(this.event,"Set-Cookie");return Array.isArray(t)?t:[t]}forEach(t){return this.entries().forEach(([s,n])=>t(n,s,this))}entries(){return b(this.event).map(([t,s])=>[t,Array.isArray(s)?s.join(", "):s])}keys(){return b(this.event).map(([t])=>t)}values(){return b(this.event).map(([t,s])=>Array.isArray(s)?s.join(", "):s)}[Symbol.iterator](){return this.entries()[Symbol.iterator]()}}function rt(e){return{get status(){return $(e)},set status(t){x(e,t)},get statusText(){return Ue(e)},set statusText(t){x(e,$(),t)},headers:new nt(e)}}function ot(e){e.forEach(t=>{if(!t.attrs.href)return;let s=document.head.querySelector(`link[href="${t.attrs.href}"]`);s||(s=document.createElement("link"),s.setAttribute("rel","preload"),s.setAttribute("as","style"),s.setAttribute("href",t.attrs.href),document.head.appendChild(s))})}function at(e,t,s,n="default"){return G(async()=>{{const a=(await e.import())[n],h=(await t.inputs?.[e.src].assets()).filter(p=>p.tag==="style"||p.attrs.rel==="stylesheet");return typeof window<"u"&&ot(h),{default:p=>[...h.map(m=>w(m)),V(a,p)]}}})}const it=[],lt=ct(it.filter(e=>e.type==="page"));function ct(e){function t(s,n,r,a){const d=Object.values(s).find(h=>r.startsWith(h.id+"/"));return d?(t(d.children||(d.children=[]),n,r.slice(d.id.length)),s):(s.push({...n,id:r,path:r.replace(/\/\([^)/]+\)/g,"")}),s)}return e.sort((s,n)=>s.path.length-n.path.length).reduce((s,n)=>t(s,n,n.path,n.path),[])}function dt(){function e(s){return{...s,...s.$$route?s.$$route.require().route:void 0,info:{...s.$$route?s.$$route.require().route.info:{},filesystem:!0},component:at(s.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:s.children?s.children.map(e):void 0}}return lt.map(e)}function ut(e){const t=Ve(e,"flash");if(!t)return;let s=JSON.parse(t);if(!s||!s.result)return[];const n=[...s.input.slice(0,-1),new Map(s.input[s.input.length-1])];return Ze(e,"flash","",{maxAge:0}),{url:s.url,result:s.error?new Error(s.result):s.result,input:n}}async function I(e){const t=globalThis.MANIFEST.client;return globalThis.MANIFEST.ssr,e.response.headers.set("Cache-Control","no-cache"),Object.assign(e,{manifest:await t.json(),assets:[...await t.inputs[t.handler].assets()],router:{submission:ut(e)},routes:dt(),$islands:new Set})}function pt(e,t={}){return pe({onRequest:t.onRequest,onBeforeResponse:t.onBeforeResponse,handler:s=>{const n=st(s);return X(n,async()=>{const r=await I(n);let a={...t};if(a.onCompleteAll){const p=a.onCompleteAll;a.onCompleteAll=m=>{T(r)(m),p(m)}}else a.onCompleteAll=T(r);if(a.onCompleteShell){const p=a.onCompleteShell;a.onCompleteShell=m=>{C(r,s)(),p(m)}}else a.onCompleteShell=C(r,s);const d=z(()=>(Z.context.event=r,e(r)),a);if(r.response&&r.response.headers.get("Location"))return Ge(n,r.response.headers.get("Location"));const{writable:h,readable:f}=new TransformStream;return d.pipeTo(h),f})}})}function C(e,t){return()=>{e.response&&e.response.headers.get("Location")&&(x(t,302),Xe(t,"Location",e.response.headers.get("Location")))}}function T(e){return({write:t})=>{const s=e.response&&e.response.headers.get("Location");s&&t(`<script>window.location="${s}"<\/script>`)}}function ht(e,t={}){return pt(e,{...t,createPageEvent:I})}var mt=['<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="/favicon.ico">',"</head>"],ft=["<html",' lang="en">','<body><div id="app">',"</div><!--$-->","<!--/--></body></html>"];const kt=ht(()=>i(Be,{document:({assets:e,children:t,scripts:s})=>l(ft,u(),i(E,{get children(){return l(mt,o(e))}}),o(t),o(s))}));export{kt as default};