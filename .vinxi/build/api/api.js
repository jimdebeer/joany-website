import{createRouter as m}from"radix3";import{sharedConfig as g}from"solid-js";import{provideRequestEvent as l}from"solid-js/web/storage";import{H3Event as u,getRequestURL as y,getRequestIP as q,setResponseStatus as S,getResponseStatus as H,getResponseStatusText as b,getResponseHeaders as v,getResponseHeader as x,setResponseHeader as A,appendResponseHeader as E,getRequestWebStream as $,removeResponseHeader as w,eventHandler as T}from"h3";import{AsyncLocalStorage as P}from"node:async_hooks";import{getContext as C}from"unctx";const _=[];function k(t){let e;const s=h(t),n={duplex:"half",method:t.method,headers:t.headers};return t.node.req.body instanceof ArrayBuffer?new Request(s,{...n,body:t.node.req.body}):new Request(s,{...n,get body(){return e||(e=B(t),e)}})}function L(t){return t.web??={request:k(t),url:h(t)},t.web.request}function I(){return M()}const i=Symbol("$HTTPEvent");function W(t){return typeof t=="object"&&(t instanceof u||t?.[i]instanceof u||t?.__is_event__===!0)}function r(t){return function(...e){let s=e[0];if(W(s))e[0]=s instanceof u||s.__is_event__?s:s[i];else{if(!globalThis.app.config.server.experimental?.asyncContext)throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");if(s=I(),!s)throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");e.unshift(s)}return t(...e)}}const h=r(y),U=r(q),p=r(S),d=r(H),F=r(b),o=r(v),f=r(x),N=r(A),j=r(E),B=r($),D=r(w);function G(){return C("nitro-app",{asyncContext:!!globalThis.app.config.server.experimental?.asyncContext,AsyncLocalStorage:P})}function M(){return G().use().event}const a=Symbol("fetchEvent");function O(t){return{request:L(t),response:K(t),clientAddress:U(t),locals:{},nativeEvent:t,[i]:t}}function z(t){if(!t[a]){const e=O(t);t[a]=e}return t[a]}class J{constructor(e){this.event=e}get(e){const s=f(this.event,e);return Array.isArray(s)?s.join(", "):s}has(e){return this.get(e)!==void 0}set(e,s){return N(this.event,e,s)}delete(e){return D(this.event,e)}append(e,s){j(this.event,e,s)}getSetCookie(){const e=f(this.event,"Set-Cookie");return Array.isArray(e)?e:[e]}forEach(e){return this.entries().forEach(([s,n])=>e(n,s,this))}entries(){return o(this.event).map(([e,s])=>[e,Array.isArray(s)?s.join(", "):s])}keys(){return o(this.event).map(([e])=>e)}values(){return o(this.event).map(([e,s])=>Array.isArray(s)?s.join(", "):s)}[Symbol.iterator](){return this.entries()[Symbol.iterator]()}}function K(t){return{get status(){return d(t)},set status(e){p(t,e)},get statusText(){return F(t)},set statusText(e){p(t,d(),e)},headers:new J(t)}}const re=T(t=>{const e=z(t),s=V(new URL(e.request.url).pathname,e.request.method);if(s)return l(e,async()=>{const R=(await s.handler.import())[e.request.method];e.params=s.params,g.context={event:e};const c=await R(e);if(c===void 0&&e.request.method!=="GET")throw new Error(`API handler for ${e.request.method} "${e.request.url}" did not return a response.`);return c})}),Q=m({routes:_.reduce((t,e)=>{if(e.type!=="api")return t;const s=e.path.replace(/\(.*\)\/?/g,"");if(t[s])throw new Error(`Duplicate API routes for "${s}" found at "${t[s].route.path}" and "${e.path}"`);return t[s]={route:e},t},{})});function V(t,e){const s=Q.lookup(t);if(s){const n=s.route[`$${e}`];return n==="skip"||n===void 0?void 0:{handler:n,params:s.params}}}export{re as default};