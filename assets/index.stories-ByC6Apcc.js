import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,r as n,s as r,u as i}from"./iframe-DpjGMX0L.js";import{n as a,t as o}from"./define-DOvjeDoI.js";var s;function c(){return(c=e((()=>{t(),a(),s=class extends n{static{this.formAssociated=!0}static{this.shadowRootOptions={...n.shadowRootOptions,delegatesFocus:!0}}static{this.properties={type:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},formDisabled:{state:!0}}}static{this.styles=i`
		:host {
			--button-branding: var(--branding, oklch(55% 0.2211 349.43deg));

			display: inline-block;
		}

		button {
			display: inline-block;
			margin: 0;
			padding: 0.25rem 1rem;
			border: 0;
			border-radius: 0.25rem;
			font-size: inherit;
			font-family: var(--font, system-ui);
			font-weight: 600;
			line-height: inherit;
			color: oklch(100% 0 0deg);
			background-color: var(--button-branding);
			box-sizing: border-box;
			appearance: none;
			cursor: pointer;
			transition:
				background-color 0.15s,
				translate 0.1s;
		}

		button:hover {
			background-color: color-mix(
				in oklch,
				var(--button-branding),
				oklch(0% 0 0deg) 18%
			);
		}

		button:active {
			translate: 0 1px;
		}

		button:focus-visible {
			outline: 2px solid var(--button-branding);
			outline-offset: 2px;
		}

		@media (prefers-reduced-motion: reduce) {
			button {
				transition: none;
			}
		}
	`}constructor(){super(),this.handleClick=()=>{let e=this.closest(`form`);this.type===`submit`?e?.requestSubmit():this.type===`reset`&&e?.reset()},this.type=`button`,this.disabled=!1,this.formDisabled=!1}formDisabledCallback(e){this.formDisabled=e}render(){return r`
			<button
				part="button"
				type="button"
				?disabled=${this.disabled||this.formDisabled}
				@click=${this.handleClick}
			>
				<slot></slot>
			</button>
		`}},o(`mg-button`,s)})))()}var l,u,d;function f(){return(f=e((()=>{t(),c(),l={title:`Design System/Components`,component:`mg-button`,argTypes:{type:{options:[`button`,`submit`,`reset`],control:{type:`radio`}}},args:{label:`Lorem ipsum`,type:`button`,disabled:!1},render:({label:e,type:t,disabled:n})=>r`
		<mg-button type=${t} ?disabled=${n}>${e}</mg-button>
	`},u={name:`Button`},d=[`ButtonStory`]})))()}f();export{u as ButtonStory,d as __namedExportsOrder,l as default};