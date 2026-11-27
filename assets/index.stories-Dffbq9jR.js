import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,c as n,n as r,o as i,r as a,s as o,u as s}from"./iframe-BMKO-Q4e.js";import{n as c,t as l}from"./define-DOvjeDoI.js";import{i as u,n as d,r as f,t as p}from"./directive-CT3Cgvrf.js";import{C as m,S as h,b as g,c as _,i as v,l as y,r as b,s as x,u as S,w as C,x as w,y as T}from"./date-formats-CD9SWvYD.js";var E;function D(){return(D=e((()=>{n(),f(),E=p(class extends d{constructor(e){if(super(e),e.type!==u.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return i}})})))()}function O(){return(O=e((()=>{D()})))()}var k;function A(){return(A=e((()=>{n(),k=e=>e??t})))()}function j(){return(j=e((()=>{A()})))()}function M(e,t,n){let[r,i]=h(n?.in,e,t),a=m(),o=n?.locale??a.locale??y,s=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,c=T(r,i);if(isNaN(c))throw RangeError(`Invalid time value`);let l;l=c<-6?`other`:c<-1?`lastWeek`:c<0?`yesterday`:c<1?`today`:c<2?`tomorrow`:c<7?`nextWeek`:`other`;let u=o.formatRelative(l,r,i,{locale:o,weekStartsOn:s});return x(r,u,{locale:o,weekStartsOn:s})}function N(){return(N=e((()=>{S(),C(),w(),g(),_()})))()}var P;function F(){return(F=e((()=>{r(),O(),j(),_(),N(),b(),c(),P=class extends a{static{this.properties={history:{attribute:!1}}}static{this.styles=s`
		:host {
			--chat-font: var(--font, system-ui);
			--chat-text: var(
				--text,
				light-dark(
					oklch(49% 0.0102 248.04deg),
					oklch(84% 0.0102 95.19deg)
				)
			);
			--chat-dialog: var(
				--dialog,
				light-dark(
					oklch(65% 0.0144 251.62deg / 10%),
					oklch(24% 0.0189 262.13deg)
				)
			);
			--chat-dialog-me: var(
				--dialog-me,
				light-dark(
					oklch(60% 0.2606 301.75deg / 20%),
					oklch(48% 0.0732 305.7deg)
				)
			);
			--chat-muted: var(
				--muted,
				light-dark(
					oklab(54.718% -0.0021 -0.0103),
					oklch(69% 0.0144 95.32deg)
				)
			);
		}

		ol {
			display: flex;
			flex-direction: column;
			padding: 0;
			list-style: none;
			font-family: var(--chat-font);
			line-height: 1.25;
		}

		.action {
			align-self: center;
			margin: 0.5rem 0;
			text-align: center;
			max-inline-size: 80%;
			font-size: 0.75rem;
			font-weight: bold;
			color: var(--chat-muted);
		}

		.bubble {
			position: relative;
			align-self: flex-start;
			padding: 0.5rem;
			border-radius: 0.75rem;
			outline: 0;
			max-inline-size: 60%;
			color: var(--chat-text);
			background-color: var(--chat-dialog);
			box-sizing: border-box;
		}

		.bubble.me {
			align-self: flex-end;
			background-color: var(--chat-dialog-me);
		}

		.bubble.emoji {
			padding: 0;
			font-size: 4em;
			background-color: transparent;
		}

		.bubble + li {
			margin-block-start: 0.5rem;
		}

		.name {
			display: block;
			margin-block-end: 0.25em;
			font-size: 0.75rem;
			font-weight: bold;
		}

		.name[hidden] {
			display: none;
		}

		q {
			display: block;
			quotes: none;
		}

		time {
			display: none;
			position: absolute;
			inset-block-start: 100%;
			inset-inline: 0.6667em auto;
			margin-block-start: 0.25em;
			text-align: start;
			font-size: 0.75rem;
			color: var(--chat-muted);
			opacity: 0.75;
			white-space: nowrap;
		}

		.me time {
			inset-inline: auto 0.6667em;
			text-align: end;
		}

		.bubble:active time,
		.bubble:focus-visible time {
			display: block;
		}
	`}renderMessage({content:e,name:n,timestamp:r,isEmoji:i=!1,isMe:a=!1,isAction:s=!1}){return s?o`<li class="action">${e}</li>`:o`
			<li
				class=${E({bubble:!0,me:a,emoji:i})}
				tabindex=${k(r?0:void 0)}
			>
				${n===void 0||n===``?t:o`<span class="name" ?hidden=${i}
								>${n}</span
							>`}
				<q>${e}</q>
				${r?o`<time datetime=${x(r,v)}
								>${M(r,new Date)}</time
							>`:t}
			</li>
		`}render(){return!Array.isArray(this.history)||this.history.length===0?t:o`
			<ol part="list">
				${this.history.map(e=>this.renderMessage(e))}
			</ol>
		`}},l(`mg-chat`,P)})))()}var I,L,R;function z(){return(z=e((()=>{r(),F(),I={title:`Features/Chat`,component:`mg-chat`,args:{history:[{name:`Costello`,content:`Look, you gotta first baseman?`,timestamp:new Date(1938,2,24,12,11,10)},{name:`Abbott`,content:`Certainly.`,timestamp:new Date(1938,2,24,12,11,35),isMe:!0},{name:`Costello`,content:`Who’s playing first?`,timestamp:new Date(1938,2,24,12,11,50)},{name:`Abbott`,content:`That’s right.`,timestamp:new Date(1938,2,24,12,12,4),isMe:!0},{content:`Costello becomes exasperated.`,isAction:!0},{name:`Costello`,content:`When you pay off the first baseman every month, who gets the money?`,timestamp:new Date(1938,2,24,12,12,39)},{name:`Abbott`,content:`Every dollar of it.`,timestamp:new Date(1938,2,24,12,12,50),isMe:!0},{name:`Abbott`,content:`😁`,timestamp:new Date(1938,2,24,12,13,0),isMe:!0,isEmoji:!0}]},render:({history:e})=>o`<mg-chat .history=${e}></mg-chat>`},L={name:`Chat`},R=[`ChatStory`]})))()}z();export{L as ChatStory,R as __namedExportsOrder,I as default};