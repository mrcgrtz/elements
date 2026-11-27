import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,r as n,s as r,u as i}from"./iframe-CYXVyuPD.js";import{a,i as o,n as s,r as c,t as l}from"./define-BZuDyQwc.js";var u;function d(){return(d=e((()=>{t(),s(),u=class extends n{static{this.shadowRootOptions={...n.shadowRootOptions,delegatesFocus:!0}}static{this.properties={label:{type:String},labelActive:{type:String,attribute:`label-active`},open:{type:Boolean,reflect:!0}}}static{this.styles=i`
		:host {
			display: inline-block;
			inline-size: 2em;
			block-size: 1.5em;
		}

		button {
			position: relative;
			margin: 0;
			padding: 0;
			border: 0;
			inline-size: 100%;
			block-size: 100%;
			color: inherit;
			background: none;
			appearance: none;
			cursor: pointer;
		}

		.lines,
		.lines::before,
		.lines::after {
			display: block;
			position: absolute;
			border-radius: 4px;
			inline-size: 100%;
			block-size: 4px;
			background-color: currentcolor;
			transition-property: transform;
			transition-duration: 0.2s;
			transition-timing-function: ease;
		}

		.lines {
			inset-block-start: 50%;
			margin-block-start: -2px;
		}

		.lines::before,
		.lines::after {
			content: '';
		}

		.lines::before {
			inset-block-start: -10px;
			transition:
				inset-block-start 0.1s 0.25s ease-in,
				opacity 0.1s ease-in;
		}

		.lines::after {
			inset-block-end: -10px;
			transition:
				inset-block-end 0.1s 0.25s ease-in,
				transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
		}

		:host([open]) .lines {
			transform: rotate(225deg);
			transition-delay: 0.12s;
			transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		}

		:host([open]) .lines::before {
			inset-block-start: 0;
			opacity: 0;
			transition:
				inset-block-start 0.1s ease-out,
				opacity 0.1s 0.12s ease-out;
		}

		:host([open]) .lines::after {
			inset-block-end: 0;
			transform: rotate(-90deg);
			transition:
				inset-block-end 0.1s ease-out,
				transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
		}
	`}constructor(){super(),this.handleClick=()=>{this.open=!this.open,this.dispatchEvent(new CustomEvent(`toggle`,{detail:{open:this.open},bubbles:!0,composed:!0}))},this.label=`Menü anzeigen`,this.labelActive=`Menü ausblenden`,this.open=!1}render(){return r`
			<button
				part="button"
				type="button"
				aria-expanded=${this.open?`true`:`false`}
				aria-label=${this.open?this.labelActive:this.label}
				@click=${this.handleClick}
			>
				<span class="lines" aria-hidden="true"></span>
			</button>
		`}},l(`mg-hamburger-button`,u)})))()}var f,p,m,h,g,_,v;function y(){return(y=e((()=>{t(),o(),d(),{expect:f,fn:p,userEvent:m}=__STORYBOOK_MODULE_TEST__,h={title:`Design System/Components`,component:`mg-hamburger-button`,args:{label:`Menü anzeigen`,labelActive:`Menü ausblenden`,open:!1,onToggle:p()},render:({label:e,labelActive:t,open:n,onToggle:i})=>r`
		<mg-hamburger-button
			style="position: absolute; inset-block-start: 20px; inset-inline-start: 20px"
			label=${e}
			label-active=${t}
			?open=${n}
			@toggle=${i}
		></mg-hamburger-button>
	`},g={name:`Hamburger button`,async play({args:e,canvasElement:t,step:n}){let r=await c(t,`mg-hamburger-button`),i=a(r).querySelector(`button`);await f(r).toBeInstanceOf(u),await f(i).toHaveAccessibleName(`Menü anzeigen`),await f(i).toHaveAttribute(`aria-expanded`,`false`),await n(`opens on click`,async()=>{await m.click(i),await r.updateComplete,await f(r).toHaveAttribute(`open`),await f(i).toHaveAccessibleName(`Menü ausblenden`),await f(i).toHaveAttribute(`aria-expanded`,`true`),await f(e.onToggle).toHaveBeenLastCalledWith(f.objectContaining({detail:{open:!0}}))}),await n(`closes on another click`,async()=>{await m.click(i),await r.updateComplete,await f(r).not.toHaveAttribute(`open`),await f(i).toHaveAccessibleName(`Menü anzeigen`),await f(e.onToggle).toHaveBeenLastCalledWith(f.objectContaining({detail:{open:!1}})),await f(e.onToggle).toHaveBeenCalledTimes(2)})}},_={name:`Hamburger button, with custom labels`,tags:[`test-only`],args:{label:`Show menu`,labelActive:`Hide menu`,open:!0},async play({canvasElement:e}){let t=await c(e,`mg-hamburger-button`),n=a(t).querySelector(`button`);await f(n).toHaveAccessibleName(`Hide menu`),await f(n).toHaveAttribute(`aria-expanded`,`true`)}},v=[`HamburgerButtonStory`,`CustomLabelsHamburgerButtonStory`]})))()}y();export{_ as CustomLabelsHamburgerButtonStory,g as HamburgerButtonStory,v as __namedExportsOrder,h as default};