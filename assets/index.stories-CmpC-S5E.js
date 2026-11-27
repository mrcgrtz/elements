import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,r as n,s as r,u as i}from"./iframe-CYXVyuPD.js";import{a,i as o,n as s,r as c,t as l}from"./define-BZuDyQwc.js";var u;function d(){return(d=e((()=>{t(),s(),u=class extends n{static{this.formAssociated=!0}static{this.shadowRootOptions={...n.shadowRootOptions,delegatesFocus:!0}}static{this.properties={type:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},formDisabled:{state:!0}}}static{this.styles=i`
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
		`}},l(`mg-button`,u)})))()}var f,p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{t(),o(),d(),{expect:f,fn:p,userEvent:m}=__STORYBOOK_MODULE_TEST__,h={title:`Design System/Components`,component:`mg-button`,argTypes:{type:{options:[`button`,`submit`,`reset`],control:{type:`radio`}}},args:{label:`Lorem ipsum`,type:`button`,disabled:!1},render:({label:e,type:t,disabled:n})=>r`
		<mg-button type=${t} ?disabled=${n}>${e}</mg-button>
	`},g=e=>a(e).querySelector(`button`),_=({label:e,type:t,onSubmit:n})=>r`
	<form
		@submit=${e=>{e.preventDefault(),n(e)}}
	>
		<mg-button type=${t}>${e}</mg-button>
	</form>
`,v={name:`Button`,async play({canvasElement:e}){let t=await c(e,`mg-button`);await f(t).toBeInstanceOf(u),await f(t).toHaveAttribute(`type`,`button`),await f(t).toHaveTextContent(`Lorem ipsum`),await f(g(t)).toBeEnabled()}},y={name:`Button, disabled`,tags:[`test-only`],args:{disabled:!0},async play({canvasElement:e}){let t=await c(e,`mg-button`);await f(g(t)).toBeDisabled()}},b={name:`Button, in a disabled fieldset`,tags:[`test-only`],render:({label:e})=>r`
		<fieldset disabled><mg-button>${e}</mg-button></fieldset>
	`,async play({canvasElement:e}){let t=await c(e,`mg-button`);await f(g(t)).toBeDisabled(),e.querySelector(`fieldset`).disabled=!1,await t.updateComplete,await f(g(t)).toBeEnabled()}},x={name:`Button, submitting a form`,tags:[`test-only`],args:{type:`submit`,onSubmit:p()},render:_,async play({args:e,canvasElement:t}){let n=await c(t,`mg-button`);await m.click(g(n)),await f(e.onSubmit).toHaveBeenCalledOnce()}},S={name:`Button, inside a form`,tags:[`test-only`],args:{onSubmit:p()},render:_,async play({args:e,canvasElement:t}){let n=await c(t,`mg-button`);await m.click(g(n)),await f(e.onSubmit).not.toHaveBeenCalled()}},C={name:`Button, resetting a form`,tags:[`test-only`],args:{type:`reset`,label:`Reset`},render:({label:e,type:t})=>r`
		<form>
			<input name="name" value="Abbott" aria-label="Name" />
			<mg-button type=${t}>${e}</mg-button>
		</form>
	`,async play({canvasElement:e}){let t=await c(e,`mg-button`),n=e.querySelector(`input`);await m.clear(n),await m.type(n,`Costello`),await f(n).toHaveValue(`Costello`),await m.click(g(t)),await f(n).toHaveValue(`Abbott`)}},w={name:`Button, outside of a form`,tags:[`test-only`],args:{type:`submit`},async play({canvasElement:e}){let t=await c(e,`mg-button`);await m.click(g(t)),t.type=`reset`,await t.updateComplete,await m.click(g(t))}},T=[`ButtonStory`,`DisabledButtonStory`,`FieldsetButtonStory`,`SubmitButtonStory`,`PlainButtonStory`,`ResetButtonStory`,`FormlessButtonStory`]})))()}E();export{v as ButtonStory,y as DisabledButtonStory,b as FieldsetButtonStory,w as FormlessButtonStory,S as PlainButtonStory,C as ResetButtonStory,x as SubmitButtonStory,T as __namedExportsOrder,h as default};