import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{a as t,n,r,s as i,u as ee}from"./iframe-DpjGMX0L.js";import{n as te,t as ne}from"./define-DOvjeDoI.js";import{_ as a,a as re,c as ie,d as ae,h as o,n as oe,o as s,p as c,r as se,s as ce,t as l}from"./date-formats-CD9SWvYD.js";var u,d;function f(){return(f=e((()=>{u={lessThanXSeconds:{standalone:{one:`weniger als 1 Sekunde`,other:`weniger als {{count}} Sekunden`},withPreposition:{one:`weniger als 1 Sekunde`,other:`weniger als {{count}} Sekunden`}},xSeconds:{standalone:{one:`1 Sekunde`,other:`{{count}} Sekunden`},withPreposition:{one:`1 Sekunde`,other:`{{count}} Sekunden`}},halfAMinute:{standalone:`eine halbe Minute`,withPreposition:`einer halben Minute`},lessThanXMinutes:{standalone:{one:`weniger als 1 Minute`,other:`weniger als {{count}} Minuten`},withPreposition:{one:`weniger als 1 Minute`,other:`weniger als {{count}} Minuten`}},xMinutes:{standalone:{one:`1 Minute`,other:`{{count}} Minuten`},withPreposition:{one:`1 Minute`,other:`{{count}} Minuten`}},aboutXHours:{standalone:{one:`etwa 1 Stunde`,other:`etwa {{count}} Stunden`},withPreposition:{one:`etwa 1 Stunde`,other:`etwa {{count}} Stunden`}},xHours:{standalone:{one:`1 Stunde`,other:`{{count}} Stunden`},withPreposition:{one:`1 Stunde`,other:`{{count}} Stunden`}},xDays:{standalone:{one:`1 Tag`,other:`{{count}} Tage`},withPreposition:{one:`1 Tag`,other:`{{count}} Tagen`}},aboutXWeeks:{standalone:{one:`etwa 1 Woche`,other:`etwa {{count}} Wochen`},withPreposition:{one:`etwa 1 Woche`,other:`etwa {{count}} Wochen`}},xWeeks:{standalone:{one:`1 Woche`,other:`{{count}} Wochen`},withPreposition:{one:`1 Woche`,other:`{{count}} Wochen`}},aboutXMonths:{standalone:{one:`etwa 1 Monat`,other:`etwa {{count}} Monate`},withPreposition:{one:`etwa 1 Monat`,other:`etwa {{count}} Monaten`}},xMonths:{standalone:{one:`1 Monat`,other:`{{count}} Monate`},withPreposition:{one:`1 Monat`,other:`{{count}} Monaten`}},aboutXYears:{standalone:{one:`etwa 1 Jahr`,other:`etwa {{count}} Jahre`},withPreposition:{one:`etwa 1 Jahr`,other:`etwa {{count}} Jahren`}},xYears:{standalone:{one:`1 Jahr`,other:`{{count}} Jahre`},withPreposition:{one:`1 Jahr`,other:`{{count}} Jahren`}},overXYears:{standalone:{one:`mehr als 1 Jahr`,other:`mehr als {{count}} Jahre`},withPreposition:{one:`mehr als 1 Jahr`,other:`mehr als {{count}} Jahren`}},almostXYears:{standalone:{one:`fast 1 Jahr`,other:`fast {{count}} Jahre`},withPreposition:{one:`fast 1 Jahr`,other:`fast {{count}} Jahren`}}},d=(e,t,n)=>{let r,i=n?.addSuffix?u[e].withPreposition:u[e].standalone;return r=typeof i==`string`?i:t===1?i.one:i.other.replace(`{{count}}`,String(t)),n?.addSuffix?n.comparison&&n.comparison>0?`in `+r:`vor `+r:r}})))()}var p,m,h,g;function _(){return(_=e((()=>{p={full:`EEEE, do MMMM y`,long:`do MMMM y`,medium:`do MMM y`,short:`dd.MM.y`},m={full:`HH:mm:ss zzzz`,long:`HH:mm:ss z`,medium:`HH:mm:ss`,short:`HH:mm`},h={full:`{{date}} 'um' {{time}}`,long:`{{date}} 'um' {{time}}`,medium:`{{date}} {{time}}`,short:`{{date}} {{time}}`},g={date:a({formats:p,defaultWidth:`full`}),time:a({formats:m,defaultWidth:`full`}),dateTime:a({formats:h,defaultWidth:`full`})}})))()}var v,y;function b(){return(b=e((()=>{v={lastWeek:`'letzten' eeee 'um' p`,yesterday:`'gestern um' p`,today:`'heute um' p`,tomorrow:`'morgen um' p`,nextWeek:`eeee 'um' p`,other:`P`},y=(e,t,n,r)=>v[e]})))()}var x,S,C,w,T,E,D,O,le;function k(){return(k=e((()=>{x={narrow:[`v.Chr.`,`n.Chr.`],abbreviated:[`v.Chr.`,`n.Chr.`],wide:[`vor Christus`,`nach Christus`]},S={narrow:[`1`,`2`,`3`,`4`],abbreviated:[`Q1`,`Q2`,`Q3`,`Q4`],wide:[`1. Quartal`,`2. Quartal`,`3. Quartal`,`4. Quartal`]},C={narrow:[`J`,`F`,`M`,`A`,`M`,`J`,`J`,`A`,`S`,`O`,`N`,`D`],abbreviated:[`Jan`,`Feb`,`Mär`,`Apr`,`Mai`,`Jun`,`Jul`,`Aug`,`Sep`,`Okt`,`Nov`,`Dez`],wide:[`Januar`,`Februar`,`März`,`April`,`Mai`,`Juni`,`Juli`,`August`,`September`,`Oktober`,`November`,`Dezember`]},w={narrow:C.narrow,abbreviated:[`Jan.`,`Feb.`,`März`,`Apr.`,`Mai`,`Juni`,`Juli`,`Aug.`,`Sep.`,`Okt.`,`Nov.`,`Dez.`],wide:C.wide},T={narrow:[`S`,`M`,`D`,`M`,`D`,`F`,`S`],short:[`So`,`Mo`,`Di`,`Mi`,`Do`,`Fr`,`Sa`],abbreviated:[`So.`,`Mo.`,`Di.`,`Mi.`,`Do.`,`Fr.`,`Sa.`],wide:[`Sonntag`,`Montag`,`Dienstag`,`Mittwoch`,`Donnerstag`,`Freitag`,`Samstag`]},E={narrow:{am:`vm.`,pm:`nm.`,midnight:`Mitternacht`,noon:`Mittag`,morning:`Morgen`,afternoon:`Nachm.`,evening:`Abend`,night:`Nacht`},abbreviated:{am:`vorm.`,pm:`nachm.`,midnight:`Mitternacht`,noon:`Mittag`,morning:`Morgen`,afternoon:`Nachmittag`,evening:`Abend`,night:`Nacht`},wide:{am:`vormittags`,pm:`nachmittags`,midnight:`Mitternacht`,noon:`Mittag`,morning:`Morgen`,afternoon:`Nachmittag`,evening:`Abend`,night:`Nacht`}},D={narrow:{am:`vm.`,pm:`nm.`,midnight:`Mitternacht`,noon:`Mittag`,morning:`morgens`,afternoon:`nachm.`,evening:`abends`,night:`nachts`},abbreviated:{am:`vorm.`,pm:`nachm.`,midnight:`Mitternacht`,noon:`Mittag`,morning:`morgens`,afternoon:`nachmittags`,evening:`abends`,night:`nachts`},wide:{am:`vormittags`,pm:`nachmittags`,midnight:`Mitternacht`,noon:`Mittag`,morning:`morgens`,afternoon:`nachmittags`,evening:`abends`,night:`nachts`}},O=e=>Number(e)+`.`,le={ordinalNumber:O,era:o({values:x,defaultWidth:`wide`}),quarter:o({values:S,defaultWidth:`wide`,argumentCallback:e=>e-1}),month:o({values:C,formattingValues:w,defaultWidth:`wide`}),day:o({values:T,defaultWidth:`wide`}),dayPeriod:o({values:E,defaultWidth:`wide`,formattingValues:D,defaultFormattingWidth:`wide`})}})))()}var A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{A=/^(\d+)(\.)?/i,j=/\d+/i,M={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},N={any:[/^v/i,/^n/i]},P={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},F={any:[/1/i,/2/i,/3/i,/4/i]},I={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(jänner|januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},L={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},R={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},z={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},B={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},V={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},H={ordinalNumber:ae({matchPattern:A,parsePattern:j,valueCallback:e=>parseInt(e)}),era:c({matchPatterns:M,defaultMatchWidth:`wide`,parsePatterns:N,defaultParseWidth:`any`}),quarter:c({matchPatterns:P,defaultMatchWidth:`wide`,parsePatterns:F,defaultParseWidth:`any`,valueCallback:e=>e+1}),month:c({matchPatterns:I,defaultMatchWidth:`wide`,parsePatterns:L,defaultParseWidth:`any`}),day:c({matchPatterns:R,defaultMatchWidth:`wide`,parsePatterns:z,defaultParseWidth:`any`}),dayPeriod:c({matchPatterns:B,defaultMatchWidth:`wide`,parsePatterns:V,defaultParseWidth:`any`})}})))()}var W;function G(){return(G=e((()=>{f(),_(),b(),k(),U(),W={code:`de`,formatDistance:d,formatLong:g,formatRelative:y,localize:le,match:H,options:{weekStartsOn:1,firstWeekContainsDate:4}}})))()}var K,q,J,Y,X,Z;function Q(){return(Q=e((()=>{n(),ie(),G(),se(),te(),K={fromAttribute(e){if(e!==null&&e!==``)return RegExp(`^-?\\d+$`,`v`).test(e)?Number(e):new Date(e)}},q=e=>{switch(Number(e)){case 0:case 1:case 2:case 3:return`Nachts am`;case 4:case 5:case 6:return`Verdammt früh am Morgen des`;case 7:case 8:case 9:return`Morgens am`;case 10:return`Am frühen Vormittag des`;case 11:return`Vormittags am`;case 12:case 13:return`Zur Mittagszeit am`;case 14:return`Am frühen Nachmittag des`;case 15:case 16:return`Nachmittags am`;case 17:return`Am späten Nachmittag des`;case 18:case 19:return`Am frühen Abend des`;case 20:case 21:return`Abends am`;case 22:return`Spätabends am`;default:return`Kurz vor Mitternacht am`}},J=e=>e*30,Y=e=>e*6,X=e=>t=>{try{return ce(e,t,{locale:W})}catch{return}},Z=class extends r{static{this.properties={dateTime:{attribute:`datetime`,converter:K}}}static{this.styles=ee`
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
	`}render(){let e=X(this.dateTime);if(e(`H`)===void 0||e(`m`)===void 0)return t;let n=Number(e(`H`)),r=Number(e(`m`));return i`
			<time
				part="time"
				datetime=${e(re)}
				title=${`${e(oe)}, der ${e(l)} um ${e(s)} Uhr`}
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="12"
					height="12"
					viewBox="0 0 12 12"
					aria-hidden="true"
				>
					<title>${e(s)} Uhr</title>
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
						transform=${`rotate(${J(n)} 6 6)`}
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
						transform=${`rotate(${Y(r)} 6 6)`}
					/></svg
				>${q(e(`H`))} ${e(l)}</time
			>
		`}},ne(`mg-date-time`,Z)})))()}var ue,de,fe;function $(){return($=e((()=>{n(),Q(),ue={title:`Design System/Components`,component:`mg-date-time`,argTypes:{dateTime:{control:`date`}},args:{dateTime:new Date},render:({dateTime:e})=>i`<mg-date-time .dateTime=${e}></mg-date-time>`},de={name:`Date and time`},fe=[`DateTimeStory`]})))()}$();export{de as DateTimeStory,fe as __namedExportsOrder,ue as default};