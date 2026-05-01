import{i as e,r as t,t as n}from"./iframe-CXU3mLdS.js";import{i as r,n as i,r as a,t as o}from"./jsx-runtime-DWLaZTwq.js";var s,c,l,u,d,f,p,m=t((()=>{s=e(n()),i(),c=o(),l=r.input`
	position: absolute;
	inset: ${e=>[e.$position.blockStart??`auto`,e.$position.inlineEnd??`auto`,e.$position.blockEnd??`auto`,e.$position.inlineStart??`auto`].join(` `)};
	inline-size: 1px;
	block-size: 1px;
	clip-path: inset(0);
	overflow: hidden;
`,u=r.label`
	position: absolute;
	inset: ${e=>[e.$position.blockStart??`auto`,e.$position.inlineEnd??`auto`,e.$position.blockEnd??`auto`,e.$position.inlineStart??`auto`].join(` `)};
	z-index: 1;
	inline-size: 2em;
	block-size: 1.5em;
	cursor: pointer;
`,d=`
	display: block;
	position: absolute;
	border-radius: 4px;
	inline-size: 100%;
	block-size: 4px;
	background-color: currentColor;
	transition-property: transform;
	transition-duration: 0.2s;
	transition-timing-function: ease;
`,f=r.span`
	inset-block-start: 50%;
	margin-block-start: -2px;
	${d}
	${e=>e.$isX?a`
					transform: rotate(225deg);
					transition-delay: 0.12s;
					transition-timing-function: cubic-bezier(
						0.215,
						0.61,
						0.355,
						1
					);
				`:a`
					transition-duration: 0.2s;
					transition-timing-function: ease;
				`}

	&::before {
		content: '';
		${d}
		${e=>e.$isX?a`
						inset-block-start: 0;
						opacity: 0;
						transition:
							inset-block-start 0.1s ease-out,
							opacity 0.1s 0.12s ease-out;
					`:a`
						inset-block-start: -10px;
						transition:
							inset-block-start 0.1s 0.25s ease-in,
							opacity 0.1s ease-in;
					`}
	}

	&::after {
		content: '';
		${d}
		${e=>e.$isX?a`
						inset-block-end: 0;
						transform: rotate(-90deg);
						transition:
							inset-block-end 0.1s ease-out,
							transform 0.22s 0.12s
								cubic-bezier(0.215, 0.61, 0.355, 1);
					`:a`
						inset-block-end: -10px;
						transition:
							inset-block-end 0.1s 0.25s ease-in,
							transform 0.22s
								cubic-bezier(0.55, 0.055, 0.675, 0.19);
					`}
	}
`,p=({label:e=`Menü anzeigen`,labelActive:t=`Menü ausblenden`,id:n=`toggle`,position:r})=>{let[i,a]=(0,s.useState)(!1);return(0,c.jsxs)(s.StrictMode,{children:[(0,c.jsx)(l,{type:`checkbox`,id:n,$position:r,checked:i,onChange:(0,s.useCallback)(()=>{a(e=>!e)},[])}),(0,c.jsx)(u,{htmlFor:n,"aria-label":i?t:e,$position:r,children:(0,c.jsx)(f,{$isX:i})})]})},p.__docgenInfo={description:``,methods:[],displayName:`HamburgerButton`,props:{label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Menü anzeigen'`,computed:!1}},labelActive:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Menü ausblenden'`,computed:!1}},id:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'toggle'`,computed:!1}},position:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{
	blockStart?: string;
	blockEnd?: string;
	inlineStart?: string;
	inlineEnd?: string;
}`,signature:{properties:[{key:`blockStart`,value:{name:`string`,required:!1}},{key:`blockEnd`,value:{name:`string`,required:!1}},{key:`inlineStart`,value:{name:`string`,required:!1}},{key:`inlineEnd`,value:{name:`string`,required:!1}}]}},description:``}}}})),h,g,_,v;t((()=>{n(),m(),h=o(),g={title:`Design System/Components`,component:p,args:{label:`Menü anzeigen`,labelActive:`Menü ausblenden`,position:{blockStart:`20px`,inlineStart:`20px`}}},_=e=>(0,h.jsx)(p,{...e}),_.storyName=`Hamburger button`,_.__docgenInfo={description:``,methods:[],displayName:`HamburgerButtonStory`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`properties => <HamburgerButton {...properties} />`,..._.parameters?.docs?.source}}},v=[`HamburgerButtonStory`]}))();export{_ as HamburgerButtonStory,v as __namedExportsOrder,g as default};