import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,r as n,s as r,u as i}from"./iframe-DpjGMX0L.js";import{n as a,t as o}from"./define-DOvjeDoI.js";var s;function c(){return(c=e((()=>{t(),a(),s=class extends n{static{this.shadowRootOptions={...n.shadowRootOptions,delegatesFocus:!0}}static{this.properties={label:{type:String},labelActive:{type:String,attribute:`label-active`},open:{type:Boolean,reflect:!0}}}static{this.styles=i`
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
		`}},o(`mg-hamburger-button`,s)})))()}var l,u,d;function f(){return(f=e((()=>{t(),c(),l={title:`Design System/Components`,component:`mg-hamburger-button`,args:{label:`Menü anzeigen`,labelActive:`Menü ausblenden`,open:!1},render:({label:e,labelActive:t,open:n})=>r`
		<mg-hamburger-button
			style="position: absolute; inset-block-start: 20px; inset-inline-start: 20px"
			label=${e}
			label-active=${t}
			?open=${n}
		></mg-hamburger-button>
	`},u={name:`Hamburger button`},d=[`HamburgerButtonStory`]})))()}f();export{u as HamburgerButtonStory,d as __namedExportsOrder,l as default};