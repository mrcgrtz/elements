import{r as y,R as t}from"./iframe-BzWvKY4e.js";import{d as l}from"./styled-components.browser.esm-DaGgSTxx.js";import{n as C,g as v,d as D,e as M,f,i as b}from"./date-formats-PPPMtrGl.js";function g(e,u,n){const[o,a]=C(n?.in,e,u),c=v(),r=c.locale??M,d=c.weekStartsOn??c.locale?.options?.weekStartsOn??0,i=D(o,a);if(isNaN(i))throw new RangeError("Invalid time value");let s;i<-6?s="other":i<-1?s="lastWeek":i<0?s="yesterday":i<1?s="today":i<2?s="tomorrow":i<7?s="nextWeek":s="other";const x=r.formatRelative(s,o,a,{locale:r,weekStartsOn:d});return f(o,x,{locale:r,weekStartsOn:d})}const $=l.ol`
	display: flex;
	flex-direction: column;
	padding: 0;
	list-style: none;
	font-family:
		system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
		'Segoe UI Symbol';
	line-height: 1.25;
`,S=l.li`
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
`,E=l.li`
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
`,A=l(E)`
	padding: 0;
	font-size: 4em;
	background-color: transparent;
`,h=l.span`
	display: ${e=>e.hidden?"none":"block"};
	margin-block-end: 0.25em;
	font-size: 0.75rem;
	font-weight: bold;
`,k=l.q`
	display: block;
	quotes: none;
`,w=l.time`
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
`,p=({history:e})=>{const u=y.useCallback(({content:n,name:o,timestamp:a,isEmoji:c=!1,isMe:r=!1,isAction:d=!1})=>d?t.createElement(S,{key:n},n):c?t.createElement(A,{key:n,$isMe:r,tabIndex:a?0:void 0},o?t.createElement(h,{hidden:!0},o):null,t.createElement(k,null,n),a?t.createElement(w,{$isMe:r,dateTime:f(a,b)},g(a,new Date)):null):t.createElement(E,{key:n,$isMe:r,tabIndex:a?0:void 0},o?t.createElement(h,null,o):null,t.createElement(k,null,n),a?t.createElement(w,{$isMe:r,dateTime:f(a,b)},g(a,new Date)):null),[]);return!Array.isArray(e)||e.length===0?null:t.createElement(y.StrictMode,null,t.createElement($,null,e.map(n=>u(n))))};p.__docgenInfo={description:"",methods:[],displayName:"Chat",props:{history:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
	readonly content: string;
	readonly name?: string;
	readonly timestamp?: Date;
	readonly isMe?: boolean;
	readonly isEmoji?: boolean;
	readonly isAction?: boolean;
}`,signature:{properties:[{key:"content",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!1}},{key:"timestamp",value:{name:"Date",required:!1}},{key:"isMe",value:{name:"boolean",required:!1}},{key:"isEmoji",value:{name:"boolean",required:!1}},{key:"isAction",value:{name:"boolean",required:!1}}]}}],raw:"ChatMessage[]"},description:""}}};const _={title:"Features/Chat",component:p,args:{history:[{name:"Costello",content:"Look, you gotta first baseman?",timestamp:new Date(1938,2,24,12,11,10)},{name:"Abbott",content:"Certainly.",timestamp:new Date(1938,2,24,12,11,35),isMe:!0},{name:"Costello",content:"Who’s playing first?",timestamp:new Date(1938,2,24,12,11,50)},{name:"Abbott",content:"That’s right.",timestamp:new Date(1938,2,24,12,12,4),isMe:!0},{content:"Costello becomes exasperated.",isAction:!0},{name:"Costello",content:"When you pay off the first baseman every month, who gets the money?",timestamp:new Date(1938,2,24,12,12,39)},{name:"Abbott",content:"Every dollar of it.",timestamp:new Date(1938,2,24,12,12,50),isMe:!0},{name:"Abbott",content:"😁",timestamp:new Date(1938,2,24,12,13,0),isMe:!0,isEmoji:!0}]}},m=e=>t.createElement(p,{...e});m.storyName="Chat";m.__docgenInfo={description:"",methods:[],displayName:"ChatStory"};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"properties => <Chat {...properties} />",...m.parameters?.docs?.source}}};const j=["ChatStory"];export{m as ChatStory,j as __namedExportsOrder,_ as default};
