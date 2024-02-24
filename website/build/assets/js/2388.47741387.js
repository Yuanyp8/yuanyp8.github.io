"use strict";(self.webpackChunkyuanyp_8_github_io=self.webpackChunkyuanyp_8_github_io||[]).push([[2388],{2388:(e,t,r)=>{var n=r(6540),a=Object.defineProperty,i={};((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})(i,{assign:()=>j,colors:()=>F,createStringInterpolator:()=>O,skipAnimation:()=>R,to:()=>V,willAdvance:()=>I});var o=k(),s=e=>v(e,o),l=k();s.write=e=>v(e,l);var u=k();s.onStart=e=>v(e,u);var c=k();s.onFrame=e=>v(e,c);var d=k();s.onFinish=e=>v(e,d);var h=[];s.setTimeout=(e,t)=>{const r=s.now()+t,n=()=>{const e=h.findIndex((e=>e.cancel==n));~e&&h.splice(e,1),m-=~e?1:0},a={time:r,handler:e,cancel:n};return h.splice(p(r),0,a),m+=1,b(),a};var p=e=>~(~h.findIndex((t=>t.time>e))||~h.length);s.cancel=e=>{u.delete(e),c.delete(e),d.delete(e),o.delete(e),l.delete(e)},s.sync=e=>{y=!0,s.batchedUpdates(e),y=!1},s.throttle=e=>{let t;function r(){try{e(...t)}finally{t=null}}function n(...e){t=e,s.onStart(r)}return n.handler=e,n.cancel=()=>{u.delete(r),t=null},n};var f="undefined"!=typeof window?window.requestAnimationFrame:()=>{};s.use=e=>f=e,s.now="undefined"!=typeof performance?()=>performance.now():Date.now,s.batchedUpdates=e=>e(),s.catch=console.error,s.frameLoop="always",s.advance=()=>{"demand"!==s.frameLoop?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):_()};var g=-1,m=0,y=!1;function v(e,t){y?(t.delete(e),e(0)):(t.add(e),b())}function b(){g<0&&(g=0,"demand"!==s.frameLoop&&f(w))}function w(){~g&&(f(w),s.batchedUpdates(_))}function _(){const e=g;g=s.now();const t=p(g);t&&(x(h.splice(0,t),(e=>e.handler())),m-=t),m?(u.flush(),o.flush(e?Math.min(64,g-e):16.667),c.flush(),l.flush(),d.flush()):g=-1}function k(){let e=new Set,t=e;return{add(r){m+=t!=e||e.has(r)?0:1,e.add(r)},delete:r=>(m-=t==e&&e.has(r)?1:0,e.delete(r)),flush(r){t.size&&(e=new Set,m-=t.size,x(t,(t=>t(r)&&e.add(t))),m+=e.size,t=e)}}}function x(e,t){e.forEach((e=>{try{t(e)}catch(r){s.catch(r)}}))}var A={arr:Array.isArray,obj:e=>!!e&&"Object"===e.constructor.name,fun:e=>"function"==typeof e,str:e=>"string"==typeof e,num:e=>"number"==typeof e,und:e=>void 0===e};function S(e,t){if(A.arr(e)){if(!A.arr(t)||e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}return e===t}var P=(e,t)=>e.forEach(t);function C(e,t,r){if(A.arr(e))for(let n=0;n<e.length;n++)t.call(r,e[n],`${n}`);else for(const n in e)e.hasOwnProperty(n)&&t.call(r,e[n],n)}var E=e=>A.und(e)?[]:A.arr(e)?e:[e];var O,V,$=()=>"undefined"==typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),F=null,R=!1,I=function(){},j=e=>{e.to&&(V=e.to),e.now&&(s.now=e.now),void 0!==e.colors&&(F=e.colors),null!=e.skipAnimation&&(R=e.skipAnimation),e.createStringInterpolator&&(O=e.createStringInterpolator),e.requestAnimationFrame&&s.use(e.requestAnimationFrame),e.batchedUpdates&&(s.batchedUpdates=e.batchedUpdates),e.willAdvance&&(I=e.willAdvance),e.frameLoop&&(s.frameLoop=e.frameLoop)},z=new Set,M=[],q=[],L=0,T={get idle(){return!z.size&&!M.length},start(e){L>e.priority?(z.add(e),s.onStart(U)):(N(e),s(B))},advance:B,sort(e){if(L)s.onFrame((()=>T.sort(e)));else{const t=M.indexOf(e);~t&&(M.splice(t,1),W(e))}},clear(){M=[],z.clear()}};function U(){z.forEach(N),z.clear(),s(B)}function N(e){M.includes(e)||W(e)}function W(e){M.splice(function(e,t){const r=e.findIndex(t);return r<0?e.length:r}(M,(t=>t.priority>e.priority)),0,e)}function B(e){const t=q;for(let r=0;r<M.length;r++){const n=M[r];L=n.priority,n.idle||(I(n),n.advance(e),n.idle||t.push(n))}return L=0,(q=M).length=0,(M=t).length>0}var G="[-+]?\\d*\\.?\\d+",D=G+"%";function Z(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}var H=new RegExp("rgb"+Z(G,G,G)),J=new RegExp("rgba"+Z(G,G,G,G)),K=new RegExp("hsl"+Z(G,D,D)),Q=new RegExp("hsla"+Z(G,D,D,G)),X=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Y=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,ee=/^#([0-9a-fA-F]{6})$/,te=/^#([0-9a-fA-F]{8})$/;function re(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function ne(e,t,r){const n=r<.5?r*(1+t):r+t-r*t,a=2*r-n,i=re(a,n,e+1/3),o=re(a,n,e),s=re(a,n,e-1/3);return Math.round(255*i)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function ae(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function ie(e){return(parseFloat(e)%360+360)%360/360}function oe(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function se(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function le(e){let t=function(e){let t;return"number"==typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=ee.exec(e))?parseInt(t[1]+"ff",16)>>>0:F&&void 0!==F[e]?F[e]:(t=H.exec(e))?(ae(t[1])<<24|ae(t[2])<<16|ae(t[3])<<8|255)>>>0:(t=J.exec(e))?(ae(t[1])<<24|ae(t[2])<<16|ae(t[3])<<8|oe(t[4]))>>>0:(t=X.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=te.exec(e))?parseInt(t[1],16)>>>0:(t=Y.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=K.exec(e))?(255|ne(ie(t[1]),se(t[2]),se(t[3])))>>>0:(t=Q.exec(e))?(ne(ie(t[1]),se(t[2]),se(t[3]))|oe(t[4]))>>>0:null}(e);if(null===t)return e;t=t||0;return`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`}var ue=(e,t,r)=>{if(A.fun(e))return e;if(A.arr(e))return ue({range:e,output:t,extrapolate:r});if(A.str(e.output[0]))return O(e);const n=e,a=n.output,i=n.range||[0,1],o=n.extrapolateLeft||n.extrapolate||"extend",s=n.extrapolateRight||n.extrapolate||"extend",l=n.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,i);return function(e,t,r,n,a,i,o,s,l){let u=l?l(e):e;if(u<t){if("identity"===o)return u;"clamp"===o&&(u=t)}if(u>r){if("identity"===s)return u;"clamp"===s&&(u=r)}if(n===a)return n;if(t===r)return e<=t?n:a;t===-1/0?u=-u:r===1/0?u-=t:u=(u-t)/(r-t);u=i(u),n===-1/0?u=-u:a===1/0?u+=n:u=u*(a-n)+n;return u}(e,i[t],i[t+1],a[t],a[t+1],l,o,s,n.map)}};Math.PI,Math.PI;var ce=Symbol.for("FluidValue.get"),de=Symbol.for("FluidValue.observers"),he=e=>Boolean(e&&e[ce]),pe=e=>e&&e[ce]?e[ce]():e;function fe(e,t){const r=e[de];r&&r.forEach((e=>{!function(e,t){e.eventObserved?e.eventObserved(t):e(t)}(e,t)}))}var ge=class{constructor(e){if(!e&&!(e=this.get))throw Error("Unknown getter");me(this,e)}},me=(e,t)=>we(e,ce,t);function ye(e,t){if(e[ce]){let r=e[de];r||we(e,de,r=new Set),r.has(t)||(r.add(t),e.observerAdded&&e.observerAdded(r.size,t))}return t}function ve(e,t){const r=e[de];if(r&&r.has(t)){const n=r.size-1;n?r.delete(t):e[de]=null,e.observerRemoved&&e.observerRemoved(n,t)}}var be,we=(e,t,r)=>Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0}),_e=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,ke=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,xe=new RegExp(`(${_e.source})(%|[a-z]+)`,"i"),Ae=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,Se=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,Pe=e=>{const[t,r]=Ce(e);if(!t||$())return e;const n=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(n)return n.trim();if(r&&r.startsWith("--")){const t=window.getComputedStyle(document.documentElement).getPropertyValue(r);return t||e}return r&&Se.test(r)?Pe(r):r||e},Ce=e=>{const t=Se.exec(e);if(!t)return[,];const[,r,n]=t;return[r,n]},Ee=(e,t,r,n,a)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${a})`,Oe=e=>{be||(be=F?new RegExp(`(${Object.keys(F).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map((e=>pe(e).replace(Se,Pe).replace(ke,le).replace(be,le))),r=t.map((e=>e.match(_e).map(Number))),n=r[0].map(((e,t)=>r.map((e=>{if(!(t in e))throw Error('The arity of each "output" value must be equal');return e[t]})))).map((t=>ue({...e,output:t})));return e=>{const r=!xe.test(t[0])&&t.find((e=>xe.test(e)))?.replace(_e,"");let a=0;return t[0].replace(_e,(()=>`${n[a++](e)}${r||""}`)).replace(Ae,Ee)}},Ve="react-spring: ",$e=e=>{const t=e;let r=!1;if("function"!=typeof t)throw new TypeError(`${Ve}once requires a function parameter`);return(...e)=>{r||(t(...e),r=!0)}},Fe=$e(console.warn);$e(console.warn);function Re(e){return A.str(e)&&("#"==e[0]||/\d/.test(e)||!$()&&Se.test(e)||e in(F||{}))}var Ie=$()?n.useEffect:n.useLayoutEffect;function je(){const e=(0,n.useState)()[1],t=(()=>{const e=(0,n.useRef)(!1);return Ie((()=>(e.current=!0,()=>{e.current=!1})),[]),e})();return()=>{t.current&&e(Math.random())}}var ze=[];var Me=Symbol.for("Animated:node"),qe=e=>e&&e[Me],Le=(e,t)=>{return r=e,n=Me,a=t,Object.defineProperty(r,n,{value:a,writable:!0,configurable:!0});var r,n,a},Te=e=>e&&e[Me]&&e[Me].getPayload(),Ue=class{constructor(){Le(this,this)}getPayload(){return this.payload||[]}},Ne=class extends Ue{constructor(e){super(),this._value=e,this.done=!0,this.durationProgress=0,A.num(this._value)&&(this.lastPosition=this._value)}static create(e){return new Ne(e)}getPayload(){return[this]}getValue(){return this._value}setValue(e,t){return A.num(e)&&(this.lastPosition=e,t&&(e=Math.round(e/t)*t,this.done&&(this.lastPosition=e))),this._value!==e&&(this._value=e,!0)}reset(){const{done:e}=this;this.done=!1,A.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,e&&(this.lastVelocity=null),this.v0=null)}},We=class extends Ne{constructor(e){super(0),this._string=null,this._toString=ue({output:[e,e]})}static create(e){return new We(e)}getValue(){const e=this._string;return null==e?this._string=this._toString(this._value):e}setValue(e){if(A.str(e)){if(e==this._string)return!1;this._string=e,this._value=1}else{if(!super.setValue(e))return!1;this._string=null}return!0}reset(e){e&&(this._toString=ue({output:[this.getValue(),e]})),this._value=0,super.reset()}},Be={dependencies:null},Ge=class extends Ue{constructor(e){super(),this.source=e,this.setValue(e)}getValue(e){const t={};return C(this.source,((r,n)=>{var a;(a=r)&&a[Me]===a?t[n]=r.getValue(e):he(r)?t[n]=pe(r):e||(t[n]=r)})),t}setValue(e){this.source=e,this.payload=this._makePayload(e)}reset(){this.payload&&P(this.payload,(e=>e.reset()))}_makePayload(e){if(e){const t=new Set;return C(e,this._addToPayload,t),Array.from(t)}}_addToPayload(e){Be.dependencies&&he(e)&&Be.dependencies.add(e);const t=Te(e);t&&P(t,(e=>this.add(e)))}},De=class extends Ge{constructor(e){super(e)}static create(e){return new De(e)}getValue(){return this.source.map((e=>e.getValue()))}setValue(e){const t=this.getPayload();return e.length==t.length?t.map(((t,r)=>t.setValue(e[r]))).some(Boolean):(super.setValue(e.map(Ze)),!0)}};function Ze(e){return(Re(e)?We:Ne).create(e)}function He(e){const t=qe(e);return t?t.constructor:A.arr(e)?De:Re(e)?We:Ne}var Je=(e,t)=>{const r=!A.fun(e)||e.prototype&&e.prototype.isReactComponent;return(0,n.forwardRef)(((a,i)=>{const o=(0,n.useRef)(null),l=r&&(0,n.useCallback)((e=>{o.current=function(e,t){e&&(A.fun(e)?e(t):e.current=t);return t}(i,e)}),[i]),[u,c]=function(e,t){const r=new Set;Be.dependencies=r,e.style&&(e={...e,style:t.createAnimatedStyle(e.style)});return e=new Ge(e),Be.dependencies=null,[e,r]}(a,t),d=je(),h=()=>{const e=o.current;if(r&&!e)return;!1===(!!e&&t.applyAnimatedValues(e,u.getValue(!0)))&&d()},p=new Ke(h,c),f=(0,n.useRef)();var g;Ie((()=>(f.current=p,P(c,(e=>ye(e,p))),()=>{f.current&&(P(f.current.deps,(e=>ve(e,f.current))),s.cancel(f.current.update))}))),(0,n.useEffect)(h,[]),g=()=>()=>{const e=f.current;P(e.deps,(t=>ve(t,e)))},(0,n.useEffect)(g,ze);const m=t.getComponentProps(u.getValue());return n.createElement(e,{...m,ref:l})}))},Ke=class{constructor(e,t){this.update=e,this.deps=t}eventObserved(e){"change"==e.type&&s.write(this.update)}};var Qe=Symbol.for("AnimatedComponent"),Xe=e=>A.str(e)?e:e&&A.str(e.displayName)?e.displayName:A.fun(e)&&e.name||null;Error,Error;var Ye=e=>e instanceof tt,et=1,tt=class extends ge{constructor(){super(...arguments),this.id=et++,this._priority=0}get priority(){return this._priority}set priority(e){this._priority!=e&&(this._priority=e,this._onPriorityChange(e))}get(){const e=qe(this);return e&&e.getValue()}to(...e){return i.to(this,e)}interpolate(...e){return Fe(`${Ve}The "interpolate" function is deprecated in v9 (use "to" instead)`),i.to(this,e)}toJSON(){return this.get()}observerAdded(e){1==e&&this._attach()}observerRemoved(e){0==e&&this._detach()}_attach(){}_detach(){}_onChange(e,t=!1){fe(this,{type:"change",parent:this,value:e,idle:t})}_onPriorityChange(e){this.idle||T.sort(this),fe(this,{type:"priority",parent:this,priority:e})}};Symbol.for("SpringPhase");var rt,nt,at=({children:e,...t})=>{const r=(0,n.useContext)(it),a=t.pause||!!r.pause,i=t.immediate||!!r.immediate;t=function(e,t){const[r]=(0,n.useState)((()=>({inputs:t,result:e()}))),a=(0,n.useRef)(),i=a.current;let o=i;o?Boolean(t&&o.inputs&&function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(t,o.inputs))||(o={inputs:t,result:e()}):o=r;return(0,n.useEffect)((()=>{a.current=o,i==r&&(r.inputs=r.result=void 0)}),[o]),o.result}((()=>({pause:a,immediate:i})),[a,i]);const{Provider:o}=it;return n.createElement(o,{value:t},e)},it=(rt=at,nt={},Object.assign(rt,n.createContext(nt)),rt.Provider._context=rt,rt.Consumer._context=rt,rt);at.Provider=it.Provider,at.Consumer=it.Consumer;var ot=class extends tt{constructor(e,t){super(),this.source=e,this.idle=!0,this._active=new Set,this.calc=ue(...t);const r=this._get(),n=He(r);Le(this,n.create(r))}advance(e){const t=this._get();S(t,this.get())||(qe(this).setValue(t),this._onChange(t,this.idle)),!this.idle&&lt(this._active)&&ut(this)}_get(){const e=A.arr(this.source)?this.source.map(pe):E(pe(this.source));return this.calc(...e)}_start(){this.idle&&!lt(this._active)&&(this.idle=!1,P(Te(this),(e=>{e.done=!1})),i.skipAnimation?(s.batchedUpdates((()=>this.advance())),ut(this)):T.start(this))}_attach(){let e=1;P(E(this.source),(t=>{he(t)&&ye(t,this),Ye(t)&&(t.idle||this._active.add(t),e=Math.max(e,t.priority+1))})),this.priority=e,this._start()}_detach(){P(E(this.source),(e=>{he(e)&&ve(e,this)})),this._active.clear(),ut(this)}eventObserved(e){"change"==e.type?e.idle?this.advance():(this._active.add(e.parent),this._start()):"idle"==e.type?this._active.delete(e.parent):"priority"==e.type&&(this.priority=E(this.source).reduce(((e,t)=>Math.max(e,(Ye(t)?t.priority:0)+1)),0))}};function st(e){return!1!==e.idle}function lt(e){return!e.size||Array.from(e).every(st)}function ut(e){e.idle||(e.idle=!0,P(Te(e),(e=>{e.done=!0})),fe(e,{type:"idle",parent:e}))}i.assign({createStringInterpolator:Oe,to:(e,t)=>new ot(e,t)});T.advance;var ct=r(961),dt=/^--/;function ht(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||dt.test(e)||ft.hasOwnProperty(e)&&ft[e]?(""+t).trim():t+"px"}var pt={};var ft={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gt=["Webkit","Ms","Moz","O"];ft=Object.keys(ft).reduce(((e,t)=>(gt.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),ft);var mt=/^(matrix|translate|scale|rotate|skew)/,yt=/^(translate)/,vt=/^(rotate|skew)/,bt=(e,t)=>A.num(e)&&0!==e?e+t:e,wt=(e,t)=>A.arr(e)?e.every((e=>wt(e,t))):A.num(e)?e===t:parseFloat(e)===t,_t=class extends Ge{constructor({x:e,y:t,z:r,...n}){const a=[],i=[];(e||t||r)&&(a.push([e||0,t||0,r||0]),i.push((e=>[`translate3d(${e.map((e=>bt(e,"px"))).join(",")})`,wt(e,0)]))),C(n,((e,t)=>{if("transform"===t)a.push([e||""]),i.push((e=>[e,""===e]));else if(mt.test(t)){if(delete n[t],A.und(e))return;const r=yt.test(t)?"px":vt.test(t)?"deg":"";a.push(E(e)),i.push("rotate3d"===t?([e,t,n,a])=>[`rotate3d(${e},${t},${n},${bt(a,r)})`,wt(a,0)]:e=>[`${t}(${e.map((e=>bt(e,r))).join(",")})`,wt(e,t.startsWith("scale")?1:0)])}})),a.length&&(n.transform=new kt(a,i)),super(n)}},kt=class extends ge{constructor(e,t){super(),this.inputs=e,this.transforms=t,this._value=null}get(){return this._value||(this._value=this._get())}_get(){let e="",t=!0;return P(this.inputs,((r,n)=>{const a=pe(r[0]),[i,o]=this.transforms[n](A.arr(a)?a:r.map(pe));e+=" "+i,t=t&&o})),t?"none":e}observerAdded(e){1==e&&P(this.inputs,(e=>P(e,(e=>he(e)&&ye(e,this)))))}observerRemoved(e){0==e&&P(this.inputs,(e=>P(e,(e=>he(e)&&ve(e,this)))))}eventObserved(e){"change"==e.type&&(this._value=null),fe(this,e)}};i.assign({batchedUpdates:ct.unstable_batchedUpdates,createStringInterpolator:Oe,colors:{transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199}});var xt=((e,{applyAnimatedValues:t=(()=>!1),createAnimatedStyle:r=(e=>new Ge(e)),getComponentProps:n=(e=>e)}={})=>{const a={applyAnimatedValues:t,createAnimatedStyle:r,getComponentProps:n},i=e=>{const t=Xe(e)||"Anonymous";return(e=A.str(e)?i[e]||(i[e]=Je(e,a)):e[Qe]||(e[Qe]=Je(e,a))).displayName=`Animated(${t})`,e};return C(e,((t,r)=>{A.arr(e)&&(r=Xe(t)),i[r]=i(t)})),{animated:i}})(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],{applyAnimatedValues:function(e,t){if(!e.nodeType||!e.setAttribute)return!1;const r="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName,{style:n,children:a,scrollTop:i,scrollLeft:o,viewBox:s,...l}=t,u=Object.values(l),c=Object.keys(l).map((t=>r||e.hasAttribute(t)?t:pt[t]||(pt[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())))));void 0!==a&&(e.textContent=a);for(const d in n)if(n.hasOwnProperty(d)){const t=ht(d,n[d]);dt.test(d)?e.style.setProperty(d,t):e.style[d]=t}c.forEach(((t,r)=>{e.setAttribute(t,u[r])})),void 0!==i&&(e.scrollTop=i),void 0!==o&&(e.scrollLeft=o),void 0!==s&&e.setAttribute("viewBox",s)},createAnimatedStyle:e=>new _t(e),getComponentProps:({scrollTop:e,scrollLeft:t,...r})=>r});xt.animated}}]);