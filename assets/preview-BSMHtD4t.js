const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./axe-BSkiWfFv.js","./_commonjsHelpers-CqkleIqs.js"])))=>i.map(i=>d[i]);
import{_ as v}from"./iframe-O5q8Vlnd.js";import{expect as h}from"./index-D1pa-M5k.js";const{addons:x}=__STORYBOOK_MODULE_PREVIEW_API__,{global:L}=__STORYBOOK_MODULE_GLOBAL__;var m="storybook/a11y",N=`${m}/result`,A=`${m}/error`,S=`${m}/manual`,f={RESULT:N,ERROR:A,MANUAL:S},{document:R}=L,c=x.getChannel(),O={config:{},options:{}},V=["region"],_=[],p=!1,w=async()=>{if(_.length===0){p=!1;return}p=!0;let a=_.shift();a&&await a(),w()},g=async(a=O)=>{let{default:r}=await v(async()=>{const{default:e}=await import("./axe-BSkiWfFv.js").then(o=>o.a);return{default:e}},__vite__mapDeps([0,1]),import.meta.url),{element:n="body",config:t={},options:s={}}=a,l=R.querySelector(n)??R.body;if(!l)return;r.reset();let u={...t,rules:[...V.map(e=>({id:e,enabled:!1})),...(t==null?void 0:t.rules)??[]]};return r.configure(u),new Promise((e,o)=>{let d=async()=>{try{let i=await r.run(l,s);e(i)}catch(i){o(i)}};_.push(d),p||w()})};c.on(f.MANUAL,async(a,r=O)=>{try{let n=await g(r),t=JSON.parse(JSON.stringify(n));c.emit(f.RESULT,t,a)}catch(n){c.emit(f.ERROR,n)}});function E(){try{return!1}catch{return!1}}var y=!1,I=async({reporting:a,parameters:r,globals:n})=>{let t=r.a11y,s=n.a11y,l=(t==null?void 0:t.manual)!==!0&&(t==null?void 0:t.disable)!==!0&&(t==null?void 0:t.test)!=="off"&&(s==null?void 0:s.manual)!==!0,u=()=>{switch(t==null?void 0:t.test){case"todo":return"warning";case"error":default:return"failed"}};if(l)try{let e=await g(t);if(e){let o=((e==null?void 0:e.violations.length)??0)>0;if(a.addReport({type:"a11y",version:1,result:e,status:o?u():"passed"}),E()&&o&&u()==="failed"){if(!y){let{toHaveNoViolations:d}=await v(async()=>{const{toHaveNoViolations:i}=await import("./matchers-57EZJSQE-oeXCqs4p.js");return{toHaveNoViolations:i}},[],import.meta.url);h.extend({toHaveNoViolations:d}),y=!0}h(e).toHaveNoViolations()}}}catch(e){if(a.addReport({type:"a11y",version:1,result:{error:e},status:"failed"}),E())throw e}},T={a11y:{manual:!1}},M={a11y:{test:"todo"}};export{I as experimental_afterEach,T as initialGlobals,M as parameters};
