import{R as o,r as s}from"./iframe-CwSP09l9.js";import{d as a}from"./styled-components.browser.esm-Dbren9sV.js";const i=a.button`
	display: inline-block;
	margin: 0;
	padding: 0.25rem 1rem;
	border: 0;
	font-size: inherit;
	font-family:
		system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
		'Segoe UI Symbol';
	line-height: inherit;
	color: white;
	background-color: lightgrey;
	box-sizing: border-box;
	appearance: none;
	cursor: pointer;

	&:hover,
	&:focus {
		background-color: dodgerblue;
	}
`,r=({type:t="button",...n})=>o.createElement(s.StrictMode,null,o.createElement(i,{type:t,...n}));r.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{defaultValue:{value:"'button'",computed:!1},required:!1}}};const d={title:"Design System/Components",component:r,argTypes:{type:{options:["button","submit","reset"],control:{type:"radio"}}},args:{children:"Lorem ipsum",type:"button",disabled:!1}},e=t=>o.createElement(r,{...t});e.storyName="Button";e.__docgenInfo={description:"",methods:[],displayName:"ButtonStory"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"properties => <Button {...properties} />",...e.parameters?.docs?.source}}};const l=["ButtonStory"];export{e as ButtonStory,l as __namedExportsOrder,d as default};
