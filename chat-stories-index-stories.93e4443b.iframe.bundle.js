"use strict";(self.webpackChunk_mrcgrtz_elements=self.webpackChunk_mrcgrtz_elements||[]).push([[463],{"./src/chat/stories/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ChatStory:function(){return ChatStory},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return index_stories}});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),format=__webpack_require__("./node_modules/date-fns/format.mjs"),differenceInCalendarDays=__webpack_require__("./node_modules/date-fns/differenceInCalendarDays.mjs"),toDate=__webpack_require__("./node_modules/date-fns/toDate.mjs"),en_US=__webpack_require__("./node_modules/date-fns/locale/en-US.mjs"),_lib_defaultOptions=__webpack_require__("./node_modules/date-fns/_lib/defaultOptions.mjs");function formatRelative(date,baseDate,options){const _date=(0,toDate.Q)(date),_baseDate=(0,toDate.Q)(baseDate),defaultOptions=(0,_lib_defaultOptions.j)(),locale=options?.locale??defaultOptions.locale??en_US._,weekStartsOn=options?.weekStartsOn??options?.locale?.options?.weekStartsOn??defaultOptions.weekStartsOn??defaultOptions.locale?.options?.weekStartsOn??0,diff=(0,differenceInCalendarDays.w)(_date,_baseDate);if(isNaN(diff))throw new RangeError("Invalid time value");let token;token=diff<-6?"other":diff<-1?"lastWeek":diff<0?"yesterday":diff<1?"today":diff<2?"tomorrow":diff<7?"nextWeek":"other";const formatStr=locale.formatRelative(token,_date,_baseDate,{locale:locale,weekStartsOn:weekStartsOn});return(0,format.WU)(_date,formatStr,{locale:locale,weekStartsOn:weekStartsOn})}var date_formats=__webpack_require__("./src/constants/date-formats.ts");const List=styled_components_browser_esm.zo.ol`
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style: none;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Helvetica,
    Arial,
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol';
  line-height: 1.25;
`,Action=styled_components_browser_esm.zo.li`
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
`,Bubble=styled_components_browser_esm.zo.li`
  position: relative;
  align-self: ${p=>p.$isMe?"flex-end":"flex-start"};
  padding: 0.5rem;
  border-radius: 0.75rem;
  outline: 0;
  max-inline-size: 60%;
  color: ${p=>p.$isMe?"white":"black"};
  background-color: ${p=>p.$isMe?"dodgerblue":"gainsboro"};
  box-sizing: border-box;

  & + li {
    margin-block-start: 0.5rem;
  }

  &:active time {
    display: block;
  }
`,EmojiBubble=(0,styled_components_browser_esm.zo)(Bubble)`
  padding: 0;
  font-size: 4em;
  background-color: transparent;
`,Name=styled_components_browser_esm.zo.span`
  display: ${p=>p.hidden?"none":"block"};
  margin-block-end: 0.25em;
  font-size: 0.75rem;
  font-weight: bold;
`,Quote=styled_components_browser_esm.zo.q`
  display: block;
  quotes: none;
`,Time=styled_components_browser_esm.zo.time`
  display: none;
  position: absolute;
  inset-block-start: 100%;
  inset-inline: ${p=>p.$isMe?"auto 0.666667em":"0.666667em auto"};
  margin-block-start: 0.25em;
  text-align: ${p=>p.$isMe?"end":"start"};
  font-size: 0.75rem;
  color: gray;
  opacity: 0.75;
  white-space: nowrap;
`,Chat=({history:history})=>history&&0!==history.length?react.createElement(react.StrictMode,null,react.createElement(List,null,history.map((({content:content,name:name,timestamp:timestamp,isEmoji:isEmoji=!1,isMe:isMe=!1,isAction:isAction=!1})=>isAction?react.createElement(Action,{key:content},content):isEmoji?react.createElement(EmojiBubble,{key:content,$isMe:isMe,tabIndex:timestamp?0:void 0},name&&react.createElement(Name,{hidden:!0},name),react.createElement(Quote,null,content),timestamp&&react.createElement(Time,{$isMe:isMe,dateTime:(0,format.WU)(timestamp,date_formats.si)},formatRelative(timestamp,new Date))):react.createElement(Bubble,{key:content,$isMe:isMe,tabIndex:timestamp?0:void 0},name&&react.createElement(Name,null,name),react.createElement(Quote,null,content),timestamp&&react.createElement(Time,{$isMe:isMe,dateTime:(0,format.WU)(timestamp,date_formats.si)},formatRelative(timestamp,new Date))))))):null;Chat.defaultProps={history:[]};var chat=Chat;Chat.__docgenInfo={description:"",methods:[],displayName:"Chat",props:{history:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\n  content: string;\n  name?: string;\n  timestamp?: Date;\n  isMe?: boolean;\n  isEmoji?: boolean;\n  isAction?: boolean;\n}",signature:{properties:[{key:"content",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!1}},{key:"timestamp",value:{name:"Date",required:!1}},{key:"isMe",value:{name:"boolean",required:!1}},{key:"isEmoji",value:{name:"boolean",required:!1}},{key:"isAction",value:{name:"boolean",required:!1}}]}}],raw:"Array<{\n  content: string;\n  name?: string;\n  timestamp?: Date;\n  isMe?: boolean;\n  isEmoji?: boolean;\n  isAction?: boolean;\n}>"},description:"",defaultValue:{value:"[]",computed:!1}}}};const meta={title:"Features/Chat",component:chat,args:{history:[{name:"Costello",content:"Look, you gotta first baseman?",timestamp:new Date(1938,2,24,12,11,10)},{name:"Abbott",content:"Certainly.",timestamp:new Date(1938,2,24,12,11,35),isMe:!0},{name:"Costello",content:"Who’s playing first?",timestamp:new Date(1938,2,24,12,11,50)},{name:"Abbott",content:"That’s right.",timestamp:new Date(1938,2,24,12,12,4),isMe:!0},{content:"Costello becomes exasperated.",isAction:!0},{name:"Costello",content:"When you pay off the first baseman every month, who gets the money?",timestamp:new Date(1938,2,24,12,12,39)},{name:"Abbott",content:"Every dollar of it.",timestamp:new Date(1938,2,24,12,12,50),isMe:!0},{name:"Abbott",content:"😁",timestamp:new Date(1938,2,24,12,13,0),isMe:!0,isEmoji:!0}]}},ChatStory=properties=>react.createElement(chat,properties);ChatStory.storyName="Chat";var index_stories=meta;ChatStory.parameters={...ChatStory.parameters,docs:{...ChatStory.parameters?.docs,source:{originalSource:"properties => <Chat {...properties} />",...ChatStory.parameters?.docs?.source}}};const __namedExportsOrder=["ChatStory"]},"./src/constants/date-formats.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{JD:function(){return isoDateTime},XV:function(){return time},Z7:function(){return minute},hT:function(){return date},si:function(){return isoDate},v0:function(){return day},xO:function(){return hour}});const isoDate="yyyy-MM-dd",isoDateTime="yyyy-MM-dd'T'HH:mm:ss",hour="H",minute="m",time="HH:mm",date="dd. MMMM yyyy",day="eeee"}}]);