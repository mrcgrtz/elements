import{r as f,R as a}from"./index-BZISi7jw.js";import{d as l}from"./styled-components.browser.esm-DMp0W6nh.js";import{n as A,g as q,d as z,e as I,f as p,i as g}from"./date-formats-DBLjY4bn.js";import"./_commonjsHelpers-CqkleIqs.js";function h(e,u,t){var y,b;const[o,n]=A(t==null?void 0:t.in,e,u),c=q(),r=c.locale??I,d=c.weekStartsOn??((b=(y=c.locale)==null?void 0:y.options)==null?void 0:b.weekStartsOn)??0,i=z(o,n);if(isNaN(i))throw new RangeError("Invalid time value");let s;i<-6?s="other":i<-1?s="lastWeek":i<0?s="yesterday":i<1?s="today":i<2?s="tomorrow":i<7?s="nextWeek":s="other";const S=r.formatRelative(s,o,n,{locale:r,weekStartsOn:d});return p(o,S,{locale:r,weekStartsOn:d})}const _=l.ol`
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style: none;
  font-family:
    system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  line-height: 1.25;
`,j=l.li`
  align-self: center;
  margin: 0.5rem 0;
  text-align: center;
  max-inline-size: 80%;
  font-size: 0.75rem;
  font-weight: bold;
  color: gray;

  & i {
    font-style: normal;
  }
`,D=l.li`
  position: relative;
  align-self: ${e=>e.$isMe?"flex-end":"flex-start"};
  padding: 0.5rem;
  border-radius: 0.75rem;
  outline: 0;
  max-inline-size: 60%;
  color: ${e=>e.$isMe?"white":"black"};
  background-color: ${e=>e.$isMe?"dodgerblue":"gainsboro"};
  box-sizing: border-box;

  & + li {
    margin-block-start: 0.5rem;
  }

  &:active time {
    display: block;
  }
`,N=l(D)`
  padding: 0;
  font-size: 4em;
  background-color: transparent;
`,k=l.span`
  display: ${e=>e.hidden?"none":"block"};
  margin-block-end: 0.25em;
  font-size: 0.75rem;
  font-weight: bold;
`,w=l.q`
  display: block;
  quotes: none;
`,E=l.time`
  display: none;
  position: absolute;
  inset-block-start: 100%;
  inset-inline: ${e=>e.$isMe?"auto 0.666667em":"0.666667em auto"};
  margin-block-start: 0.25em;
  text-align: ${e=>e.$isMe?"end":"start"};
  font-size: 0.75rem;
  color: gray;
  opacity: 0.75;
  white-space: nowrap;
`,$=({history:e=[]})=>{const u=f.useCallback(({content:t,name:o,timestamp:n,isEmoji:c=!1,isMe:r=!1,isAction:d=!1})=>d?a.createElement(j,{key:t},t):c?a.createElement(N,{key:t,$isMe:r,tabIndex:n?0:void 0},o&&a.createElement(k,{hidden:!0},o),a.createElement(w,null,t),n&&a.createElement(E,{$isMe:r,dateTime:p(n,g)},h(n,new Date))):a.createElement(D,{key:t,$isMe:r,tabIndex:n?0:void 0},o&&a.createElement(k,null,o),a.createElement(w,null,t),n&&a.createElement(E,{$isMe:r,dateTime:p(n,g)},h(n,new Date))),[]);return e.length===0?null:a.createElement(f.StrictMode,null,a.createElement(_,null,e.map(t=>u(t))))},M=f.memo($);$.__docgenInfo={description:"",methods:[],displayName:"Chat",props:{history:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  readonly content: string;
  readonly name?: string;
  readonly timestamp?: Date;
  readonly isMe?: boolean;
  readonly isEmoji?: boolean;
  readonly isAction?: boolean;
}`,signature:{properties:[{key:"content",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!1}},{key:"timestamp",value:{name:"Date",required:!1}},{key:"isMe",value:{name:"boolean",required:!1}},{key:"isEmoji",value:{name:"boolean",required:!1}},{key:"isAction",value:{name:"boolean",required:!1}}]}}],raw:"ChatMessage[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};const U={title:"Features/Chat",component:M,args:{history:[{name:"Costello",content:"Look, you gotta first baseman?",timestamp:new Date(1938,2,24,12,11,10)},{name:"Abbott",content:"Certainly.",timestamp:new Date(1938,2,24,12,11,35),isMe:!0},{name:"Costello",content:"Who’s playing first?",timestamp:new Date(1938,2,24,12,11,50)},{name:"Abbott",content:"That’s right.",timestamp:new Date(1938,2,24,12,12,4),isMe:!0},{content:"Costello becomes exasperated.",isAction:!0},{name:"Costello",content:"When you pay off the first baseman every month, who gets the money?",timestamp:new Date(1938,2,24,12,12,39)},{name:"Abbott",content:"Every dollar of it.",timestamp:new Date(1938,2,24,12,12,50),isMe:!0},{name:"Abbott",content:"😁",timestamp:new Date(1938,2,24,12,13,0),isMe:!0,isEmoji:!0}]}},m=e=>a.createElement(M,{...e});m.storyName="Chat";m.__docgenInfo={description:"",methods:[],displayName:"ChatStory"};var C,v,x;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:"properties => <Chat {...properties} />",...(x=(v=m.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const B=["ChatStory"];export{m as ChatStory,B as __namedExportsOrder,U as default};
