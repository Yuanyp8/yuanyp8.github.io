"use strict";(self.webpackChunkyuanyp_8_github_io=self.webpackChunkyuanyp_8_github_io||[]).push([[769,1740],{6046:(t,e,o)=>{o.r(e),o.d(e,{Event:()=>s});class s{constructor(t,e,o){this.autoTyper=()=>t,this.isTypeEvent=e,this.eventType=o||"unknown"}async execute(){console.log("Executing empty function!")}}},8472:(t,e,o)=>{o.r(e),o.d(e,{LoopEvent:()=>i});var s=o(6046);class i extends s.Event{constructor(t,e){void 0===e&&(e={}),super(t,!1,"loop"),this.config=e,this.infinite=!e.count}async execute(){const t=this.autoTyper();if(this.config.count)for(let e=0;e<=this.config.count&&t.isActive;e++)await this.loop();else for(;t.isActive;)await this.loop()}async loop(){const t=this.autoTyper();t.queue=[...t.executedQueue];const e=t.queue.shift();e&&await t.executeEvent(e)}}}}]);