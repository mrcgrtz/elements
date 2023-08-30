"use strict";(self.webpackChunk_mrcgrtz_elements=self.webpackChunk_mrcgrtz_elements||[]).push([[463],{"./src/chat/stories/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ChatStory:function(){return ChatStory},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return index_stories}});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),format=__webpack_require__("./node_modules/date-fns/esm/format/index.js"),_lib_defaultOptions=__webpack_require__("./node_modules/date-fns/esm/_lib/defaultOptions/index.js"),getTimezoneOffsetInMilliseconds=__webpack_require__("./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js"),toDate=__webpack_require__("./node_modules/date-fns/esm/toDate/index.js"),requiredArgs=__webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");function startOfDay(dirtyDate){(0,requiredArgs.Z)(1,arguments);var date=(0,toDate.Z)(dirtyDate);return date.setHours(0,0,0,0),date}var MILLISECONDS_IN_DAY=864e5;var defaultLocale=__webpack_require__("./node_modules/date-fns/esm/_lib/defaultLocale/index.js"),subMilliseconds=__webpack_require__("./node_modules/date-fns/esm/subMilliseconds/index.js"),toInteger=__webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");function formatRelative(dirtyDate,dirtyBaseDate,options){var _ref,_options$locale,_ref2,_ref3,_ref4,_options$weekStartsOn,_options$locale2,_options$locale2$opti,_defaultOptions$local,_defaultOptions$local2;(0,requiredArgs.Z)(2,arguments);var date=(0,toDate.Z)(dirtyDate),baseDate=(0,toDate.Z)(dirtyBaseDate),defaultOptions=(0,_lib_defaultOptions.j)(),locale=null!==(_ref=null!==(_options$locale=null==options?void 0:options.locale)&&void 0!==_options$locale?_options$locale:defaultOptions.locale)&&void 0!==_ref?_ref:defaultLocale.Z,weekStartsOn=(0,toInteger.Z)(null!==(_ref2=null!==(_ref3=null!==(_ref4=null!==(_options$weekStartsOn=null==options?void 0:options.weekStartsOn)&&void 0!==_options$weekStartsOn?_options$weekStartsOn:null==options||null===(_options$locale2=options.locale)||void 0===_options$locale2||null===(_options$locale2$opti=_options$locale2.options)||void 0===_options$locale2$opti?void 0:_options$locale2$opti.weekStartsOn)&&void 0!==_ref4?_ref4:defaultOptions.weekStartsOn)&&void 0!==_ref3?_ref3:null===(_defaultOptions$local=defaultOptions.locale)||void 0===_defaultOptions$local||null===(_defaultOptions$local2=_defaultOptions$local.options)||void 0===_defaultOptions$local2?void 0:_defaultOptions$local2.weekStartsOn)&&void 0!==_ref2?_ref2:0);if(!locale.localize)throw new RangeError("locale must contain localize property");if(!locale.formatLong)throw new RangeError("locale must contain formatLong property");if(!locale.formatRelative)throw new RangeError("locale must contain formatRelative property");var token,diff=function differenceInCalendarDays(dirtyDateLeft,dirtyDateRight){(0,requiredArgs.Z)(2,arguments);var startOfDayLeft=startOfDay(dirtyDateLeft),startOfDayRight=startOfDay(dirtyDateRight),timestampLeft=startOfDayLeft.getTime()-(0,getTimezoneOffsetInMilliseconds.Z)(startOfDayLeft),timestampRight=startOfDayRight.getTime()-(0,getTimezoneOffsetInMilliseconds.Z)(startOfDayRight);return Math.round((timestampLeft-timestampRight)/MILLISECONDS_IN_DAY)}(date,baseDate);if(isNaN(diff))throw new RangeError("Invalid time value");token=diff<-6?"other":diff<-1?"lastWeek":diff<0?"yesterday":diff<1?"today":diff<2?"tomorrow":diff<7?"nextWeek":"other";var utcDate=(0,subMilliseconds.Z)(date,(0,getTimezoneOffsetInMilliseconds.Z)(date)),utcBaseDate=(0,subMilliseconds.Z)(baseDate,(0,getTimezoneOffsetInMilliseconds.Z)(baseDate)),formatStr=locale.formatRelative(token,utcDate,utcBaseDate,{locale:locale,weekStartsOn:weekStartsOn});return(0,format.Z)(date,formatStr,{locale:locale,weekStartsOn:weekStartsOn})}var date_formats=__webpack_require__("./src/constants/date-formats.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const List=styled_components_browser_esm.zo.ol`
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style: none;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
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
  inset-inline-start: ${p=>p.$isMe?"":"0.666667em"};
  inset-inline-end: ${p=>p.$isMe?"0.666667em":""};
  margin-block-start: 0.25em;
  text-align: ${p=>p.$isMe?"end":"start"};
  font-size: 0.75rem;
  color: gray;
  opacity: 0.75;
  white-space: nowrap;
`,Chat=({history:history})=>history&&0!==history.length?(0,jsx_runtime.jsx)(react.StrictMode,{children:(0,jsx_runtime.jsx)(List,{children:history.map((({content:content,name:name,timestamp:timestamp,isEmoji:isEmoji=!1,isMe:isMe=!1,isAction:isAction=!1})=>isAction?(0,jsx_runtime.jsx)(Action,{children:content},content):isEmoji?(0,jsx_runtime.jsxs)(EmojiBubble,{$isMe:isMe,tabIndex:timestamp?0:void 0,children:[name&&(0,jsx_runtime.jsx)(Name,{hidden:!0,children:name}),(0,jsx_runtime.jsx)(Quote,{children:content}),timestamp&&(0,jsx_runtime.jsx)(Time,{$isMe:isMe,dateTime:(0,format.Z)(timestamp,date_formats.si),children:formatRelative(timestamp,new Date)})]},content):(0,jsx_runtime.jsxs)(Bubble,{$isMe:isMe,tabIndex:timestamp?0:void 0,children:[name&&(0,jsx_runtime.jsx)(Name,{children:name}),(0,jsx_runtime.jsx)(Quote,{children:content}),timestamp&&(0,jsx_runtime.jsx)(Time,{$isMe:isMe,dateTime:(0,format.Z)(timestamp,date_formats.si),children:formatRelative(timestamp,new Date)})]},content)))})}):null;Chat.displayName="Chat",Chat.defaultProps={history:[]};var src_chat=Chat;try{chat.displayName="chat",chat.__docgenInfo={description:"",displayName:"chat",props:{history:{defaultValue:{value:"[]"},description:"",name:"history",required:!1,type:{name:"{ content: string; name?: string; timestamp?: Date; isMe?: boolean | undefined; isEmoji?: boolean | undefined; isAction?: boolean | undefined; }[] | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/chat/index.tsx#chat"]={docgenInfo:chat.__docgenInfo,name:"chat",path:"src/chat/index.tsx#chat"})}catch(__react_docgen_typescript_loader_error){}const meta={title:"Features/Chat",component:src_chat,args:{history:[{name:"Costello",content:"Look, you gotta first baseman?",timestamp:new Date(1938,2,24,12,11,10)},{name:"Abbott",content:"Certainly.",timestamp:new Date(1938,2,24,12,11,35),isMe:!0},{name:"Costello",content:"Who’s playing first?",timestamp:new Date(1938,2,24,12,11,50)},{name:"Abbott",content:"That’s right.",timestamp:new Date(1938,2,24,12,12,4),isMe:!0},{content:"Costello becomes exasperated.",isAction:!0},{name:"Costello",content:"When you pay off the first baseman every month, who gets the money?",timestamp:new Date(1938,2,24,12,12,39)},{name:"Abbott",content:"Every dollar of it.",timestamp:new Date(1938,2,24,12,12,50),isMe:!0},{name:"Abbott",content:"😁",timestamp:new Date(1938,2,24,12,13,0),isMe:!0,isEmoji:!0}]}},ChatStory=args=>(0,jsx_runtime.jsx)(src_chat,{...args});ChatStory.displayName="ChatStory",ChatStory.storyName="Chat";var index_stories=meta;ChatStory.parameters={...ChatStory.parameters,docs:{...ChatStory.parameters?.docs,source:{originalSource:"args => <Chat {...args} />",...ChatStory.parameters?.docs?.source}}};const __namedExportsOrder=["ChatStory"]},"./src/constants/date-formats.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{JD:function(){return isoDateTime},XV:function(){return time},Z7:function(){return minute},hT:function(){return date},si:function(){return isoDate},v0:function(){return day},xO:function(){return hour}});const isoDate="yyyy-MM-dd",isoDateTime="yyyy-MM-dd'T'HH:mm:ss",hour="H",minute="m",time="HH:mm",date="dd. MMMM yyyy",day="eeee"}}]);
//# sourceMappingURL=chat-stories-index-stories.02fd4b10.iframe.bundle.js.map