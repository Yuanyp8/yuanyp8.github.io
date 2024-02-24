"use strict";(self.webpackChunkyuanyp_8_github_io=self.webpackChunkyuanyp_8_github_io||[]).push([[8633,9357,769,2422,4442,1466,1740],{6046:(e,t,i)=>{i.r(t),i.d(t,{Event:()=>s});class s{constructor(e,t,i){this.autoTyper=()=>e,this.isTypeEvent=t,this.eventType=i||"unknown"}async execute(){console.log("Executing empty function!")}}},8472:(e,t,i)=>{i.r(t),i.d(t,{LoopEvent:()=>n});var s=i(6046);class n extends s.Event{constructor(e,t){void 0===t&&(t={}),super(e,!1,"loop"),this.config=t,this.infinite=!t.count}async execute(){const e=this.autoTyper();if(this.config.count)for(let t=0;t<=this.config.count&&e.isActive;t++)await this.loop();else for(;e.isActive;)await this.loop()}async loop(){const e=this.autoTyper();e.queue=[...e.executedQueue];const t=e.queue.shift();t&&await e.executeEvent(t)}}},8614:(e,t,i)=>{i.r(t),i.d(t,{RemoveEvent:()=>n});var s=i(6046);class n extends s.Event{constructor(e,t){void 0===t&&(t={}),super(e,!0,"remove"),t={timeBetweenLetter:e.config.delay,...t},this.config=t,this.all=!t.charCount}async execute(){const e=this.autoTyper(),t=this.config.charCount||e.text.length;let i=0;return new Promise((s=>{e.interval((()=>{const n=e.text.slice(0,-1);e.setText(n),i++,i>t&&(e.clearInterval(),s(void 0))}),this.config.timeBetweenLetter)}))}}},8425:(e,t,i)=>{i.r(t),i.d(t,{SleepEvent:()=>n});var s=i(6046);class n extends s.Event{constructor(e,t){void 0===t&&(t={}),super(e,!1,"sleep"),t={ms:2e3,...t},this.config=t}async execute(){const e=this.autoTyper();return new Promise((t=>{e.timeout((()=>{e.clearTimeout(),t(void 0)}),this.config.ms)}))}}},7206:(e,t,i)=>{i.r(t),i.d(t,{TypeEvent:()=>n});var s=i(6046);class n extends s.Event{constructor(e,t){void 0===t&&(t={}),super(e,!0,"type"),t={toType:"nothing defined",timeBetweenLetter:e.config.delay,...t},this.config=t}async execute(){const e=this.autoTyper(),t=this.config.toType.split("");return new Promise((i=>{e.interval((()=>{const s=t.shift();s?e.setText(`${e.text}${s}`):(e.clearInterval(),i(void 0))}),this.config.timeBetweenLetter)}))}}},4026:(e,t,i)=>{i.r(t),i.d(t,{AutoTyper:()=>c});var s=i(8614),n=i(7206),r=i(8425),o=i(8472);class c{constructor(e){void 0===e&&(e={}),e={initialText:"",delay:200,textListener:()=>{},isTypingListener:()=>{},...e},this.config={initialText:e.initialText,delay:e.delay},this.text=e.initialText,this.textListener=e.textListener,this.isTypingListener=e.isTypingListener,this.queue=[],this.executedQueue=[],this.isTyping=!1,this.isActive=!1,this.textListener(this.text),this.isTypingListener(this.isTyping)}remove(e){return void 0===e&&(e={}),this.queue.push(new s.RemoveEvent(this,e)),this}type(e){return void 0===e&&(e={}),this.queue.push(new n.TypeEvent(this,e)),this}loop(e){return void 0===e&&(e={}),this.queue.push(new o.LoopEvent(this,e)),this}sleep(e){return void 0===e&&(e={}),this.queue.push(new r.SleepEvent(this,e)),this}start(){return this.isActive=!0,this.executeEvents(),this}async executeEvents(){const e=this.queue.shift();e&&await this.executeEvent(e)}async executeEvent(e){if(!this.activeInterval&&(e.isTypeEvent&&(this.isTyping=!0,this.isTypingListener(this.isTyping)),await e.execute(),this.executedQueue.push(e),e.isTypeEvent&&(this.isTyping=!1,this.isTypingListener(this.isTyping)),this.queue.length>0&&this.isActive)){const e=this.queue.shift();e&&await this.executeEvent(e)}}setText(e){this.text=e,this.textListener(e)}stop(){this.isActive=!1,this.clearInterval(),this.clearTimeout()}interval(e,t){return void 0!==this.activeInterval||(this.activeInterval=setInterval((()=>{e()}),t||1e3)),this}clearInterval(){return this.activeInterval&&(clearInterval(this.activeInterval),this.activeInterval=void 0),this}timeout(e,t){if(void 0!==this.activeTimeout)return this;this.activeTimeout=setTimeout((()=>{e()}),t||1e3)}clearTimeout(){return this.activeTimeout&&(clearTimeout(this.activeTimeout),this.activeTimeout=void 0),this}}},3661:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var s=i(6540),n=i(4026);const r="Container_XJn6",o="Text_EzQa",c="Cursor_g486",u="Cursor_Blink_vUha";var a=i(4164),h=i(4848);const v=e=>{const{className:t}=e,i=e.delay||500,v=e.words||["nothing to type","are you sure","really?"],l=e.defaultText||"nothing displayed",p=e.typeSpeed||100,[y,d]=(0,s.useState)(l),[T,x]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{const e=new n.AutoTyper({delay:p,textListener:e=>{d(e)},isTypingListener:e=>{x(e)}});return v.forEach((t=>{e.type({toType:t}).sleep({ms:i}).remove()})),e.loop().start(),()=>{e.stop()}}),[]),(0,h.jsxs)("div",{className:(0,a.A)(r,t),children:[(0,h.jsx)("div",{className:o,children:y}),(0,h.jsx)("div",{className:(0,a.A)(c,{[u]:!T})})]})}}}]);