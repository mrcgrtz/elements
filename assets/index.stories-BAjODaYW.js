import{i as e,r as t,t as n}from"./iframe-Di20EqEL.js";import{i as r,n as i,t as a}from"./jsx-runtime-D6d80vu8.js";import{c as o,i as s,l as c,r as l,s as u}from"./date-formats-DOeqInZu.js";var d,f,p,m,h,g,_,v,y,b,x=t((()=>{d=e(n()),i(),u(),l(),f=a(),p=r.ol`
	display: flex;
	flex-direction: column;
	padding: 0;
	list-style: none;
	font-family:
		system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
		'Segoe UI Symbol';
	line-height: 1.25;
`,m=r.li`
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
`,h=r.li`
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
`,g=r(h)`
	padding: 0;
	font-size: 4em;
	background-color: transparent;
`,_=r.span`
	display: ${e=>e.hidden?`none`:`block`};
	margin-block-end: 0.25em;
	font-size: 0.75rem;
	font-weight: bold;
`,v=r.q`
	display: block;
	quotes: none;
`,y=r.time`
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
`,b=({history:e})=>{let t=(0,d.useCallback)(({content:e,name:t,timestamp:n,isEmoji:r=!1,isMe:i=!1,isAction:a=!1})=>{if(a)return(0,f.jsx)(m,{children:e},e);let l=n?o(n,new Date):void 0,u=n?c(n,s):void 0,d=n?0:void 0;return r?(0,f.jsxs)(g,{$isMe:i,tabIndex:d,children:[t?(0,f.jsx)(_,{hidden:!0,children:t}):null,(0,f.jsx)(v,{children:e}),n?(0,f.jsx)(y,{$isMe:i,dateTime:u,children:l}):null]},e):(0,f.jsxs)(h,{$isMe:i,tabIndex:d,children:[t?(0,f.jsx)(_,{children:t}):null,(0,f.jsx)(v,{children:e}),n?(0,f.jsx)(y,{$isMe:i,dateTime:u,children:l}):null]},e)},[]);return!Array.isArray(e)||e.length===0?null:(0,f.jsx)(d.StrictMode,{children:(0,f.jsx)(p,{children:e.map(e=>t(e))})})},b.__docgenInfo={description:``,methods:[],displayName:`Chat`,props:{history:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
	readonly content: string;
	readonly name?: string;
	readonly timestamp?: Date;
	readonly isMe?: boolean;
	readonly isEmoji?: boolean;
	readonly isAction?: boolean;
}`,signature:{properties:[{key:`content`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!1}},{key:`timestamp`,value:{name:`Date`,required:!1}},{key:`isMe`,value:{name:`boolean`,required:!1}},{key:`isEmoji`,value:{name:`boolean`,required:!1}},{key:`isAction`,value:{name:`boolean`,required:!1}}]}}],raw:`ChatMessage[]`},description:``}}}})),S,C,w,T;t((()=>{n(),x(),S=a(),C={title:`Features/Chat`,component:b,args:{history:[{name:`Costello`,content:`Look, you gotta first baseman?`,timestamp:new Date(1938,2,24,12,11,10)},{name:`Abbott`,content:`Certainly.`,timestamp:new Date(1938,2,24,12,11,35),isMe:!0},{name:`Costello`,content:`Who’s playing first?`,timestamp:new Date(1938,2,24,12,11,50)},{name:`Abbott`,content:`That’s right.`,timestamp:new Date(1938,2,24,12,12,4),isMe:!0},{content:`Costello becomes exasperated.`,isAction:!0},{name:`Costello`,content:`When you pay off the first baseman every month, who gets the money?`,timestamp:new Date(1938,2,24,12,12,39)},{name:`Abbott`,content:`Every dollar of it.`,timestamp:new Date(1938,2,24,12,12,50),isMe:!0},{name:`Abbott`,content:`😁`,timestamp:new Date(1938,2,24,12,13,0),isMe:!0,isEmoji:!0}]}},w=e=>(0,S.jsx)(b,{...e}),w.storyName=`Chat`,w.__docgenInfo={description:``,methods:[],displayName:`ChatStory`},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`properties => <Chat {...properties} />`,...w.parameters?.docs?.source}}},T=[`ChatStory`]}))();export{w as ChatStory,T as __namedExportsOrder,C as default};