import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-RWc1oJsT.js";import{i as r,r as i,t as a}from"./jsx-runtime-0vT3sW1b.js";import{C as o,S as s,b as c,c as l,i as u,l as d,r as f,s as p,u as m,w as h,x as g,y as _}from"./date-formats-nRXGbxNa.js";function v(e,t,n){let[r,i]=s(n?.in,e,t),a=o(),c=n?.locale??a.locale??d,l=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,u=_(r,i);if(isNaN(u))throw RangeError(`Invalid time value`);let f;f=u<-6?`other`:u<-1?`lastWeek`:u<0?`yesterday`:u<1?`today`:u<2?`tomorrow`:u<7?`nextWeek`:`other`;let m=c.formatRelative(f,r,i,{locale:c,weekStartsOn:l});return p(r,m,{locale:c,weekStartsOn:l})}function y(){return(y=t((()=>{m(),h(),g(),c(),l()})))()}var b,x,S,C,w,T,E,D,O,k;function A(){return(A=t((()=>{b=e(n()),r(),l(),y(),f(),x=a(),S=i.ol`
	display: flex;
	flex-direction: column;
	padding: 0;
	list-style: none;
	font-family:
		system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
		'Segoe UI Symbol';
	line-height: 1.25;
`,C=i.li`
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
`,w=i.li`
	position: relative;
	align-self: ${e=>e.$isMe?`flex-end`:`flex-start`};
	padding: 0.5rem;
	border-radius: 0.75rem;
	outline: 0;
	max-inline-size: 60%;
	color: ${e=>e.$isMe?`white`:`black`};
	background-color: ${e=>e.$isMe?`dodgerblue`:`gainsboro`};
	box-sizing: border-box;

	& + li {
		margin-block-start: 0.5rem;
	}

	&:active time {
		display: block;
	}
`,T=i(w)`
	padding: 0;
	font-size: 4em;
	background-color: transparent;
`,E=i.span`
	display: ${e=>e.hidden?`none`:`block`};
	margin-block-end: 0.25em;
	font-size: 0.75rem;
	font-weight: bold;
`,D=i.q`
	display: block;
	quotes: none;
`,O=i.time`
	display: none;
	position: absolute;
	inset-block-start: 100%;
	inset-inline: ${e=>e.$isMe?`auto 0.666667em`:`0.666667em auto`};
	margin-block-start: 0.25em;
	text-align: ${e=>e.$isMe?`end`:`start`};
	font-size: 0.75rem;
	color: gray;
	opacity: 0.75;
	white-space: nowrap;
`,k=({history:e})=>{let t=(0,b.useCallback)(({content:e,name:t,timestamp:n,isEmoji:r=!1,isMe:i=!1,isAction:a=!1})=>{if(a)return(0,x.jsx)(C,{children:e},e);let o=n?v(n,new Date):void 0,s=n?p(n,u):void 0,c=n?0:void 0;return r?(0,x.jsxs)(T,{$isMe:i,tabIndex:c,children:[t===void 0||t===``?null:(0,x.jsx)(E,{hidden:!0,children:t}),(0,x.jsx)(D,{children:e}),n?(0,x.jsx)(O,{$isMe:i,dateTime:s,children:o}):null]},e):(0,x.jsxs)(w,{$isMe:i,tabIndex:c,children:[t===void 0||t===``?null:(0,x.jsx)(E,{children:t}),(0,x.jsx)(D,{children:e}),n?(0,x.jsx)(O,{$isMe:i,dateTime:s,children:o}):null]},e)},[]);return!Array.isArray(e)||e.length===0?null:(0,x.jsx)(b.StrictMode,{children:(0,x.jsx)(S,{children:e.map(e=>t(e))})})},k.__docgenInfo={description:``,methods:[],displayName:`Chat`,props:{history:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
	readonly content: string;
	readonly name?: string;
	readonly timestamp?: Date;
	readonly isMe?: boolean;
	readonly isEmoji?: boolean;
	readonly isAction?: boolean;
}`,signature:{properties:[{key:`content`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!1}},{key:`timestamp`,value:{name:`Date`,required:!1}},{key:`isMe`,value:{name:`boolean`,required:!1}},{key:`isEmoji`,value:{name:`boolean`,required:!1}},{key:`isAction`,value:{name:`boolean`,required:!1}}]}}],raw:`ChatMessage[]`},description:``}}}})))()}var j,M,N,P;function F(){return(F=t((()=>{n(),A(),j=a(),M={title:`Features/Chat`,component:k,args:{history:[{name:`Costello`,content:`Look, you gotta first baseman?`,timestamp:new Date(1938,2,24,12,11,10)},{name:`Abbott`,content:`Certainly.`,timestamp:new Date(1938,2,24,12,11,35),isMe:!0},{name:`Costello`,content:`Who’s playing first?`,timestamp:new Date(1938,2,24,12,11,50)},{name:`Abbott`,content:`That’s right.`,timestamp:new Date(1938,2,24,12,12,4),isMe:!0},{content:`Costello becomes exasperated.`,isAction:!0},{name:`Costello`,content:`When you pay off the first baseman every month, who gets the money?`,timestamp:new Date(1938,2,24,12,12,39)},{name:`Abbott`,content:`Every dollar of it.`,timestamp:new Date(1938,2,24,12,12,50),isMe:!0},{name:`Abbott`,content:`😁`,timestamp:new Date(1938,2,24,12,13,0),isMe:!0,isEmoji:!0}]}},N=e=>(0,j.jsx)(k,{...e}),N.storyName=`Chat`,N.__docgenInfo={description:``,methods:[],displayName:`ChatStory`},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`properties => <Chat {...properties} />`,...N.parameters?.docs?.source}}},P=[`ChatStory`]})))()}F();export{N as ChatStory,P as __namedExportsOrder,M as default};