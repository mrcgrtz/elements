import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,n,r,s as i,u as ee}from"./iframe-CYXVyuPD.js";import{a as te,i as ne,n as re,r as a,t as ie}from"./define-BZuDyQwc.js";import{_ as o,a as ae,c as oe,d as se,h as s,n as ce,o as c,p as l,r as le,s as ue,t as u}from"./date-formats-CD9SWvYD.js";var d,f;function p(){return(p=e((()=>{d={lessThanXSeconds:{standalone:{one:`weniger als 1 Sekunde`,other:`weniger als {{count}} Sekunden`},withPreposition:{one:`weniger als 1 Sekunde`,other:`weniger als {{count}} Sekunden`}},xSeconds:{standalone:{one:`1 Sekunde`,other:`{{count}} Sekunden`},withPreposition:{one:`1 Sekunde`,other:`{{count}} Sekunden`}},halfAMinute:{standalone:`eine halbe Minute`,withPreposition:`einer halben Minute`},lessThanXMinutes:{standalone:{one:`weniger als 1 Minute`,other:`weniger als {{count}} Minuten`},withPreposition:{one:`weniger als 1 Minute`,other:`weniger als {{count}} Minuten`}},xMinutes:{standalone:{one:`1 Minute`,other:`{{count}} Minuten`},withPreposition:{one:`1 Minute`,other:`{{count}} Minuten`}},aboutXHours:{standalone:{one:`etwa 1 Stunde`,other:`etwa {{count}} Stunden`},withPreposition:{one:`etwa 1 Stunde`,other:`etwa {{count}} Stunden`}},xHours:{standalone:{one:`1 Stunde`,other:`{{count}} Stunden`},withPreposition:{one:`1 Stunde`,other:`{{count}} Stunden`}},xDays:{standalone:{one:`1 Tag`,other:`{{count}} Tage`},withPreposition:{one:`1 Tag`,other:`{{count}} Tagen`}},aboutXWeeks:{standalone:{one:`etwa 1 Woche`,other:`etwa {{count}} Wochen`},withPreposition:{one:`etwa 1 Woche`,other:`etwa {{count}} Wochen`}},xWeeks:{standalone:{one:`1 Woche`,other:`{{count}} Wochen`},withPreposition:{one:`1 Woche`,other:`{{count}} Wochen`}},aboutXMonths:{standalone:{one:`etwa 1 Monat`,other:`etwa {{count}} Monate`},withPreposition:{one:`etwa 1 Monat`,other:`etwa {{count}} Monaten`}},xMonths:{standalone:{one:`1 Monat`,other:`{{count}} Monate`},withPreposition:{one:`1 Monat`,other:`{{count}} Monaten`}},aboutXYears:{standalone:{one:`etwa 1 Jahr`,other:`etwa {{count}} Jahre`},withPreposition:{one:`etwa 1 Jahr`,other:`etwa {{count}} Jahren`}},xYears:{standalone:{one:`1 Jahr`,other:`{{count}} Jahre`},withPreposition:{one:`1 Jahr`,other:`{{count}} Jahren`}},overXYears:{standalone:{one:`mehr als 1 Jahr`,other:`mehr als {{count}} Jahre`},withPreposition:{one:`mehr als 1 Jahr`,other:`mehr als {{count}} Jahren`}},almostXYears:{standalone:{one:`fast 1 Jahr`,other:`fast {{count}} Jahre`},withPreposition:{one:`fast 1 Jahr`,other:`fast {{count}} Jahren`}}},f=(e,t,n)=>{let r,i=n?.addSuffix?d[e].withPreposition:d[e].standalone;return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`in `+r:`vor `+r:r}})))()}var m,h,g,_;function v(){return(v=e((()=>{m={full:`EEEE, do MMMM y`,long:`do MMMM y`,medium:`do MMM y`,short:`dd.MM.y`},h={full:`HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},g={full:`{{date}} 'um' {{time}}`,long:`{{date}} 'um' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},_={date:o({formats:m,defaultWidth:`full`}),time:o({formats:h,defaultWidth:`full`}),dateTime:o({formats:g,defaultWidth:`full`})}})))()}var y,b;function x(){return(x=e((()=>{y={lastWeek:`'letzten' eeee 'um' p`,yesterday:`'gestern um' p`,today:`'heute um' p`,tomorrow:`'morgen um' p`,nextWeek:`eeee 'um' p`,other:`P`},b=(e,t,n,r)=>y[e]})))()}var S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{S={narrow:[`v.Chr.`,`n.Chr.`],abbreviated:[`v.Chr.`,`n.Chr.`],wide:[`vor Christus`,`nach Christus`]},C={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1. Quartal`,`2. Quartal`,`3. Quartal`,`4. Quartal`]},w={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`Jan`,`Feb`,`Mär`,`Apr`,`Mai`,`Jun`,`Jul`,`Aug`,`Sep`,`Okt`,`Nov`,`Dez`],wide:[`Januar`,`Februar`,`März`,`April`,`Mai`,`Juni`,`Juli`,`August`,`September`,`Oktober`,`November`,`Dezember`]},T={narrow:w.narrow,abbreviated:[`Jan.`,`Feb.`,`März`,`Apr.`,`Mai`,`Juni`,`Juli`,`Aug.`,`Sep.`,`Okt.`,`Nov.`,`Dez.`],wide:w.wide},E={narrow:[`S`,`M`,`D`,`M`,`D`,`F`,`S`],short:[`So`,`Mo`,`Di`,`Mi`,`Do`,`Fr`,`Sa`],abbreviated:[`So.`,`Mo.`,`Di.`,`Mi.`,`Do.`,`Fr.`,`Sa.`],wide:[`Sonntag`,`Montag`,`Dienstag`,`Mittwoch`,`Donnerstag`,`Freitag`,`Samstag`]},D={narrow:{am:`vm.`,pm:`nm.`,midnight:`Mitternacht`,noon:`Mittag`,morning:`Morgen`,afternoon:`Nachm.`,evening:`Abend`,night:`Nacht`},abbreviated:{am:`vorm.`,pm:`nachm.`,midnight:`Mitternacht`,noon:`Mittag`,morning:`Morgen`,afternoon:`Nachmittag`,evening:`Abend`,night:`Nacht`},wide:{am:`vormittags`,pm:`nachmittags`,midnight:`Mitternacht`,noon:`Mittag`,morning:`Morgen`,afternoon:`Nachmittag`,evening:`Abend`,night:`Nacht`}},O={narrow:{am:`vm.`,pm:`nm.`,midnight:`Mitternacht`,noon:`Mittag`,morning:`morgens`,afternoon:`nachm.`,evening:`abends`,night:`nachts`},abbreviated:{am:`vorm.`,pm:`nachm.`,midnight:`Mitternacht`,noon:`Mittag`,morning:`morgens`,afternoon:`nachmittags`,evening:`abends`,night:`nachts`},wide:{am:`vormittags`,pm:`nachmittags`,midnight:`Mitternacht`,noon:`Mittag`,morning:`morgens`,afternoon:`nachmittags`,evening:`abends`,night:`nachts`}},k=e=>Number(e)+`.`,A={ordinalNumber:k,era:s({values:S,defaultWidth:`wide`}),quarter:s({values:C,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:s({values:w,formattingValues:T,defaultWidth:`wide`}),day:s({values:E,defaultWidth:`wide`}),dayPeriod:s({values:D,defaultWidth:`wide`,formattingValues:O,defaultFormattingWidth:`wide`})}})))()}var M,de,N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{M=/^(\d+)(\.)?/i,de=/\d+/i,N={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},P={any:[/^v/i,/^n/i]},F={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},I={any:[/1/i,/2/i,/3/i,/4/i]},L={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(jänner|januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},R={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},z={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},B={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},V={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},H={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},U={ordinalNumber:se({matchPattern:M,parsePattern:de,valueCallback:e=>parseInt(e)}),era:l({matchPatterns:N,defaultMatchWidth:`wide`,parsePatterns:P,defaultParseWidth:`any`}),quarter:l({matchPatterns:F,defaultMatchWidth:`wide`,parsePatterns:I,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:l({matchPatterns:L,defaultMatchWidth:`wide`,parsePatterns:R,defaultParseWidth:`any`}),day:l({matchPatterns:z,defaultMatchWidth:`wide`,parsePatterns:B,defaultParseWidth:`any`}),dayPeriod:l({matchPatterns:V,defaultMatchWidth:`wide`,parsePatterns:H,defaultParseWidth:`any`})}})))()}var G;function K(){return(K=e((()=>{p(),v(),x(),j(),W(),G={code:`de`,formatDistance:f,formatLong:_,formatRelative:b,localize:A,match:U,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var q,J,fe,pe,me,Y;function he(){return(he=e((()=>{n(),oe(),K(),le(),re(),q={fromAttribute(e){if(e!==null&&e!==``)return RegExp(`^-?\\d+$`,`v`).test(e)?Number(e):new Date(e)}},J=e=>{switch(Number(e)){case 0:case 1:case 2:case 3:return`Nachts am`;case 4:case 5:case 6:return`Verdammt früh am Morgen des`;case 7:case 8:case 9:return`Morgens am`;case 10:return`Am frühen Vormittag des`;case 11:return`Vormittags am`;case 12:case 13:return`Zur Mittagszeit am`;case 14:return`Am frühen Nachmittag des`;case 15:case 16:return`Nachmittags am`;case 17:return`Am späten Nachmittag des`;case 18:case 19:return`Am frühen Abend des`;case 20:case 21:return`Abends am`;case 22:return`Spätabends am`;default:return`Kurz vor Mitternacht am`}},fe=e=>e*30,pe=e=>e*6,me=e=>t=>{try{return ue(e,t,{locale:G})}catch{return}},Y=class extends r{static{this.properties={dateTime:{attribute:`datetime`,converter:q}}}static{this.styles=ee`
		time {
			font-family: var(--font, system-ui);
			font-size: 0.75rem;
			line-height: 1.5;
			color: var(
				--muted,
				light-dark(
					oklab(54.718% -0.0021 -0.0103),
					oklch(69% 0.0144 95.32deg)
				)
			);
			white-space: nowrap;
		}

		svg {
			margin-inline-end: 0.75ex;
			inline-size: 1em;
			block-size: 1em;
			vertical-align: -2px;
			fill: currentcolor;
		}
	`}render(){let e=me(this.dateTime);if(e(`H`)===void 0||e(`m`)===void 0)return t;let n=Number(e(`H`)),r=Number(e(`m`));return i`
			<time
				part="time"
				datetime=${e(ae)}
				title=${`${e(ce)}, der ${e(u)} um ${e(c)} Uhr`}
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="12"
					height="12"
					viewBox="0 0 12 12"
					aria-hidden="true"
				>
					<title>${e(c)} Uhr</title>
					<circle
						cx="6"
						cy="6"
						r="5.425"
						stroke="currentColor"
						stroke-width="1.15"
						fill="none"
					/>
					<line
						x1="6"
						y1="6"
						x2="6"
						y2="4"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-width="1.35"
						fill="none"
						transform=${`rotate(${fe(n)} 6 6)`}
					/>
					<line
						x1="6"
						y1="6"
						x2="6"
						y2="2.5"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-width="1.35"
						fill="none"
						transform=${`rotate(${pe(r)} 6 6)`}
					/></svg
				>${J(e(`H`))} ${e(u)}</time
			>
		`}},ie(`mg-date-time`,Y)})))()}var X,Z,Q,$,ge,_e,ve,ye,be,xe,Se;function Ce(){return(Ce=e((()=>{n(),ne(),he(),{expect:X}=__STORYBOOK_MODULE_TEST__,Z={title:`Design System/Components`,component:`mg-date-time`,argTypes:{dateTime:{control:`date`}},args:{dateTime:new Date},render:({dateTime:e})=>i`<mg-date-time .dateTime=${e}></mg-date-time>`},Q=e=>te(e).querySelector(`time`),$=e=>te(e).textContent.replaceAll(RegExp(`\\s+`,`gv`),` `).trim(),ge={name:`Date and time`,async play({canvasElement:e}){let t=await a(e,`mg-date-time`);await X(t).toBeInstanceOf(Y),await X(Q(t)).toBeVisible()}},_e={name:`Date and time, fixed`,tags:[`test-only`],args:{dateTime:new Date(1999,3,17,22,11,18)},async play({canvasElement:e}){let t=await a(e,`mg-date-time`),n=Q(t);await X(n).toHaveAttribute(`datetime`,`1999-04-17T22:11:18`),await X(n).toHaveAttribute(`title`,`Samstag, der 17. April 1999 um 22:11 Uhr`),await X($(t)).toBe(`22:11 Uhr Spätabends am 17. April 1999`);let[r,i]=n.querySelectorAll(`line`);await X(r).toHaveAttribute(`transform`,`rotate(660 6 6)`),await X(i).toHaveAttribute(`transform`,`rotate(66 6 6)`)}},ve={name:`Date and time, invalid`,tags:[`test-only`],args:{dateTime:new Date(`invalid date`)},async play({canvasElement:e}){let t=await a(e,`mg-date-time`);await X(Q(t)).toBeNull()}},ye={name:`Date and time, from attribute`,tags:[`test-only`],render:()=>i`<mg-date-time datetime="1999-04-17T22:11:18"></mg-date-time>`,async play({canvasElement:e,step:t}){let n=await a(e,`mg-date-time`);await t(`parses a date string`,async()=>{await X(n.dateTime).toEqual(new Date(1999,3,17,22,11,18)),await X(Q(n)).toHaveAttribute(`datetime`,`1999-04-17T22:11:18`)}),await t(`parses a timestamp`,async()=>{n.setAttribute(`datetime`,`924379878000`),await n.updateComplete,await X(n.dateTime).toBe(924379878e3),await X(Q(n)).not.toBeNull()}),await t(`ignores an empty value`,async()=>{n.setAttribute(`datetime`,``),await n.updateComplete,await X(n.dateTime).toBeUndefined(),await X(Q(n)).toBeNull()}),await t(`ignores a missing value`,async()=>{n.removeAttribute(`datetime`),await n.updateComplete,await X(n.dateTime).toBeUndefined(),await X(Q(n)).toBeNull()})}},be=[...Array.from({length:4},()=>`Nachts am`),...Array.from({length:3},()=>`Verdammt früh am Morgen des`),...Array.from({length:3},()=>`Morgens am`),`Am frühen Vormittag des`,`Vormittags am`,...Array.from({length:2},()=>`Zur Mittagszeit am`),`Am frühen Nachmittag des`,...Array.from({length:2},()=>`Nachmittags am`),`Am späten Nachmittag des`,...Array.from({length:2},()=>`Am frühen Abend des`),...Array.from({length:2},()=>`Abends am`),`Spätabends am`,`Kurz vor Mitternacht am`],xe={name:`Date and time, on different times of the day`,tags:[`test-only`],args:{dateTime:new Date(2020,1,12,0,0,0)},async play({canvasElement:e,step:t}){let n=await a(e,`mg-date-time`);for(let[e,r]of be.entries())await t(`renders a text for ${e} o’clock`,async()=>{n.dateTime=new Date(2020,1,12,e,0,0),await n.updateComplete;let t=`${String(e).padStart(2,`0`)}:00 Uhr`;await X($(n)).toBe(`${t} ${r} 12. Februar 2020`)})}},Se=[`DateTimeStory`,`FixedDateTimeStory`,`InvalidDateTimeStory`,`AttributeDateTimeStory`,`TimesOfDayStory`]})))()}Ce();export{ye as AttributeDateTimeStory,ge as DateTimeStory,_e as FixedDateTimeStory,ve as InvalidDateTimeStory,xe as TimesOfDayStory,Se as __namedExportsOrder,Z as default};