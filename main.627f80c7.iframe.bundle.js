(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(tsx|mdx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(tsx|mdx))$":function(module,exports,__webpack_require__){var map={"./button/stories/index.stories.tsx":"./src/button/stories/index.stories.tsx","./chat/stories/index.stories.tsx":"./src/chat/stories/index.stories.tsx","./datetime/stories/index.stories.tsx":"./src/datetime/stories/index.stories.tsx","./hamburger-button/stories/index.stories.tsx":"./src/hamburger-button/stories/index.stories.tsx","./logo/stories/index.stories.tsx":"./src/logo/stories/index.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(tsx|mdx))$"},"./src/button/stories/index.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ButtonStory",(function(){return index_stories_ButtonStory}));var _templateObject;__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js");var Button=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").a.button(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  display: inline-block;\n  margin: 0;\n  padding: 0.25rem 1rem;\n  border: 0;\n  font-size: inherit;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n    'Segoe UI Symbol';\n  line-height: inherit;\n  color: white;\n  background-color: lightgrey;\n  box-sizing: border-box;\n  appearance: none;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    background-color: dodgerblue;\n  }\n"])));Button.defaultProps={type:"button"};var src_button=Button;try{button.displayName="button",button.__docgenInfo={description:"",displayName:"button",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/index.tsx#button"]={docgenInfo:button.__docgenInfo,name:"button",path:"src/button/index.tsx#button"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Design System/Components",component:src_button,argTypes:{type:{options:["button","submit","reset"],control:{type:"radio"}}},args:{children:"Lorem ipsum",type:"button",disabled:!1}},index_stories_ButtonStory=function ButtonStory(args){return Object(jsx_runtime.jsx)(src_button,Object.assign({},args))};index_stories_ButtonStory.displayName="ButtonStory",index_stories_ButtonStory.storyName="Button";__webpack_exports__.default=meta;index_stories_ButtonStory.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},index_stories_ButtonStory.parameters);try{Meta.displayName="Meta",Meta.__docgenInfo={description:"Metadata to configure the stories for a component.",displayName:"Meta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/stories/index.stories.tsx#Meta"]={docgenInfo:Meta.__docgenInfo,name:"Meta",path:"src/button/stories/index.stories.tsx#Meta"})}catch(__react_docgen_typescript_loader_error){}},"./src/chat/stories/index.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ChatStory",(function(){return index_stories_ChatStory}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),format=__webpack_require__("./node_modules/date-fns/esm/format/index.js"),formatRelative=__webpack_require__("./node_modules/date-fns/esm/formatRelative/index.js"),date_formats=__webpack_require__("./src/constants/date-formats.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var List=styled_components_browser_esm.a.ol(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  list-style: none;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n    'Segoe UI Symbol';\n  line-height: 1.25;\n"]))),Action=styled_components_browser_esm.a.li(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n  align-self: center;\n  margin: 0.5rem 0;\n  text-align: center;\n  max-width: 80%;\n  font-size: 0.75rem;\n  font-weight: bold;\n  color: gray;\n\n  & i {\n    font-style: normal;\n  }\n"]))),Bubble=styled_components_browser_esm.a.li(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n  position: relative;\n  align-self: ",";\n  padding: 0.5rem;\n  border-radius: 0.75rem;\n  outline: 0;\n  max-width: 60%;\n  color: ",";\n  background-color: ",";\n  box-sizing: border-box;\n  & + li {\n    margin-top: 0.5rem;\n  }\n  &:active time {\n    display: block;\n  }\n"])),(function(p){return p.isMe?"flex-end":"flex-start"}),(function(p){return p.isMe?"white":"black"}),(function(p){return p.isMe?"dodgerblue":"gainsboro"})),EmojiBubble=Object(styled_components_browser_esm.a)(Bubble)(_templateObject4||(_templateObject4=_taggedTemplateLiteralLoose(["\n  padding: 0;\n  font-size: 4em;\n  background-color: transparent;\n"]))),Name=styled_components_browser_esm.a.span(_templateObject5||(_templateObject5=_taggedTemplateLiteralLoose(["\n  display: ",";\n  margin-bottom: 0.25em;\n  font-size: 0.75rem;\n  font-weight: bold;\n"])),(function(p){return p.hidden?"none":"block"})),Quote=styled_components_browser_esm.a.q(_templateObject6||(_templateObject6=_taggedTemplateLiteralLoose(["\n  display: block;\n  quotes: none;\n"]))),Time=styled_components_browser_esm.a.time(_templateObject7||(_templateObject7=_taggedTemplateLiteralLoose(["\n  display: none;\n  position: absolute;\n  top: 100%;\n  left: ",";\n  right: ",";\n  margin-top: 0.25em;\n  text-align: ",";\n  font-size: 0.75rem;\n  color: gray;\n  opacity: 0.75;\n  white-space: nowrap;\n"])),(function(p){return p.isMe?"":"0.666667em"}),(function(p){return p.isMe?"0.666667em":""}),(function(p){return p.isMe?"right":"left"})),chat_Chat=function Chat(_ref){var history=_ref.history;return history&&0!==history.length?Object(jsx_runtime.jsx)(List,{children:history.map((function(_ref2){var content=_ref2.content,name=_ref2.name,timestamp=_ref2.timestamp,_ref2$isEmoji=_ref2.isEmoji,isEmoji=void 0!==_ref2$isEmoji&&_ref2$isEmoji,_ref2$isMe=_ref2.isMe,isMe=void 0!==_ref2$isMe&&_ref2$isMe,_ref2$isAction=_ref2.isAction;return void 0!==_ref2$isAction&&_ref2$isAction?Object(jsx_runtime.jsx)(Action,{children:content},content):isEmoji?Object(jsx_runtime.jsxs)(EmojiBubble,{isMe:isMe,tabIndex:timestamp?0:void 0,children:[name&&Object(jsx_runtime.jsx)(Name,{hidden:!0,children:name}),Object(jsx_runtime.jsx)(Quote,{children:content}),timestamp&&Object(jsx_runtime.jsx)(Time,{isMe:isMe,dateTime:Object(format.a)(timestamp,date_formats.d),children:Object(formatRelative.a)(timestamp,new Date)})]},content):Object(jsx_runtime.jsxs)(Bubble,{isMe:isMe,tabIndex:timestamp?0:void 0,children:[name&&Object(jsx_runtime.jsx)(Name,{children:name}),Object(jsx_runtime.jsx)(Quote,{children:content}),timestamp&&Object(jsx_runtime.jsx)(Time,{isMe:isMe,dateTime:Object(format.a)(timestamp,date_formats.d),children:Object(formatRelative.a)(timestamp,new Date)})]},content)}))}):null};chat_Chat.displayName="Chat",chat_Chat.defaultProps={history:[]};var src_chat=chat_Chat;try{chat.displayName="chat",chat.__docgenInfo={description:"",displayName:"chat",props:{history:{defaultValue:{value:"[]"},description:"",name:"history",required:!1,type:{name:"{ content: string; name?: string; timestamp?: Date; isMe?: boolean | undefined; isEmoji?: boolean | undefined; isAction?: boolean | undefined; }[] | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/chat/index.tsx#chat"]={docgenInfo:chat.__docgenInfo,name:"chat",path:"src/chat/index.tsx#chat"})}catch(__react_docgen_typescript_loader_error){}var meta={title:"Features/Chat",component:src_chat,args:{history:[{name:"Costello",content:"Look, you gotta first baseman?",timestamp:new Date(1938,2,24,12,11,10)},{name:"Abbott",content:"Certainly.",timestamp:new Date(1938,2,24,12,11,35),isMe:!0},{name:"Costello",content:"Who’s playing first?",timestamp:new Date(1938,2,24,12,11,50)},{name:"Abbott",content:"That’s right.",timestamp:new Date(1938,2,24,12,12,4),isMe:!0},{content:"Costello becomes exasperated.",isAction:!0},{name:"Costello",content:"When you pay off the first baseman every month, who gets the money?",timestamp:new Date(1938,2,24,12,12,39)},{name:"Abbott",content:"Every dollar of it.",timestamp:new Date(1938,2,24,12,12,50),isMe:!0},{name:"Abbott",content:"😁",timestamp:new Date(1938,2,24,12,13,0),isMe:!0,isEmoji:!0}]}},index_stories_ChatStory=function ChatStory(args){return Object(jsx_runtime.jsx)(src_chat,Object.assign({},args))};index_stories_ChatStory.displayName="ChatStory",index_stories_ChatStory.storyName="Chat";__webpack_exports__.default=meta;index_stories_ChatStory.parameters=Object.assign({storySource:{source:"(args) => <Chat {...args} />"}},index_stories_ChatStory.parameters);try{Meta.displayName="Meta",Meta.__docgenInfo={description:"Metadata to configure the stories for a component.",displayName:"Meta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/chat/stories/index.stories.tsx#Meta"]={docgenInfo:Meta.__docgenInfo,name:"Meta",path:"src/chat/stories/index.stories.tsx#Meta"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/date-formats.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"d",(function(){return ISO_DATE})),__webpack_require__.d(__webpack_exports__,"e",(function(){return ISO_DATE_TIME})),__webpack_require__.d(__webpack_exports__,"c",(function(){return HOUR})),__webpack_require__.d(__webpack_exports__,"f",(function(){return MINUTE})),__webpack_require__.d(__webpack_exports__,"g",(function(){return TIME})),__webpack_require__.d(__webpack_exports__,"a",(function(){return DATE})),__webpack_require__.d(__webpack_exports__,"b",(function(){return DAY}));var ISO_DATE="yyyy-MM-dd",ISO_DATE_TIME="yyyy-MM-dd'T'HH:mm:ss",HOUR="H",MINUTE="m",TIME="HH:mm",DATE="dd. MMMM yyyy",DAY="eeee"},"./src/datetime/stories/index.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DateTimeStory",(function(){return index_stories_DateTimeStory}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js");var _templateObject,_templateObject2,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),format=__webpack_require__("./node_modules/date-fns/esm/format/index.js"),de=__webpack_require__("./node_modules/date-fns/esm/locale/de/index.js"),date_formats=__webpack_require__("./src/constants/date-formats.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["dateTime"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var Wrapper=styled_components_browser_esm.a.time(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n    'Segoe UI Symbol';\n  font-size: 0.75rem;\n  line-height: 1.5;\n  color: dimgrey;\n  white-space: nowrap;\n"]))),Svg=styled_components_browser_esm.a.svg(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n  margin-right: 0.75ex;\n  width: 1em;\n  height: 1em;\n  vertical-align: -2px;\n  fill: currentColor;\n"]))),getTimeOfDay=function getTimeOfDay(hour){switch(Number(hour)){case 0:case 1:case 2:case 3:return"Nachts am";case 4:case 5:case 6:return"Verdammt früh am Morgen des";case 7:case 8:case 9:return"Morgens am";case 10:return"Am frühen Vormittag des";case 11:return"Vormittags am";case 12:case 13:return"Zur Mittagszeit am";case 14:return"Am frühen Nachmittag des";case 15:case 16:return"Nachmittags am";case 17:return"Am späten Nachmittag des";case 18:case 19:return"Am frühen Abend des";case 20:case 21:return"Abends am";case 22:return"Spätabends am";default:return"Kurz vor Mitternacht am"}},transformHour=function transformHour(hour){return 30*Number(hour)},transformMinute=function transformMinute(minute){return 6*Number(minute)},datetime_DateTime=function DateTime(_ref){var dateTime=_ref.dateTime,rest=_objectWithoutProperties(_ref,_excluded),f=function f(as){return Object(format.a)(dateTime,as,{locale:de.a})};return Object(jsx_runtime.jsxs)(Wrapper,Object.assign({},rest,{dateTime:f(date_formats.e),title:f(date_formats.b)+", der "+f(date_formats.a)+" um "+f(date_formats.g)+" Uhr",children:[Object(jsx_runtime.jsxs)(Svg,{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12","aria-hidden":"true",children:[Object(jsx_runtime.jsxs)("title",{children:[f(date_formats.g)," Uhr"]}),Object(jsx_runtime.jsx)("circle",{cx:"6",cy:"6",r:"5.425",stroke:"currentColor",strokeWidth:"1.15",fill:"none"}),Object(jsx_runtime.jsx)("line",{x1:"6",y1:"6",x2:"6",y2:"4",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.35",fill:"none",transform:"rotate("+transformHour(f(date_formats.c))+" 6 6)"}),Object(jsx_runtime.jsx)("line",{x1:"6",y1:"6",x2:"6",y2:"2.5",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"1.35",fill:"none",transform:"rotate("+transformMinute(f(date_formats.f))+" 6 6)"})]}),getTimeOfDay(f(date_formats.c))," ",f(date_formats.a)]}))};datetime_DateTime.displayName="DateTime";var src_datetime=datetime_DateTime;try{datetime.displayName="datetime",datetime.__docgenInfo={description:"",displayName:"datetime",props:{dateTime:{defaultValue:null,description:"",name:"dateTime",required:!0,type:{name:"number | Date"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/datetime/index.tsx#datetime"]={docgenInfo:datetime.__docgenInfo,name:"datetime",path:"src/datetime/index.tsx#datetime"})}catch(__react_docgen_typescript_loader_error){}var defaultArgs={dateTime:new Date},meta={title:"Design System/Components",component:src_datetime,argTypes:{dateTime:{control:"date"}},args:defaultArgs},index_stories_DateTimeStory=function DateTimeStory(args){return Object(jsx_runtime.jsx)(src_datetime,Object.assign({},args))};index_stories_DateTimeStory.displayName="DateTimeStory",index_stories_DateTimeStory.storyName="Date and time";__webpack_exports__.default=meta;index_stories_DateTimeStory.parameters=Object.assign({storySource:{source:"(args) => (\n  \n  <DateTime {...args} />\n)"}},index_stories_DateTimeStory.parameters);try{Meta.displayName="Meta",Meta.__docgenInfo={description:"Metadata to configure the stories for a component.",displayName:"Meta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/datetime/stories/index.stories.tsx#Meta"]={docgenInfo:Meta.__docgenInfo,name:"Meta",path:"src/datetime/stories/index.stories.tsx#Meta"})}catch(__react_docgen_typescript_loader_error){}},"./src/hamburger-button/stories/index.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"HamburgerButtonStory",(function(){return index_stories_HamburgerButtonStory}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var _templateObject,_templateObject2,_templateObject3,react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),styled_components_browser_esm=(__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}var Input=styled_components_browser_esm.a.input(_templateObject||(_templateObject=_taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: ",";\n  bottom: ",";\n  left: ",";\n  right: ",";\n  width: 1px;\n  height: 1px;\n  clip: rect(1px, 1px, 1px, 1px);\n  overflow: hidden;\n"])),(function(p){return p.position.top||""}),(function(p){return p.position.bottom||""}),(function(p){return p.position.left||""}),(function(p){return p.position.right||""})),Hamburger=styled_components_browser_esm.a.label(_templateObject2||(_templateObject2=_taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: ",";\n  bottom: ",";\n  left: ",";\n  right: ",";\n  z-index: 1;\n  width: 2em;\n  height: 1.5em;\n  cursor: pointer;\n"])),(function(p){return p.position.top||""}),(function(p){return p.position.bottom||""}),(function(p){return p.position.left||""}),(function(p){return p.position.right||""})),LinesCommon="\n  display: block;\n  position: absolute;\n  border-radius: 4px;\n  width: 100%;\n  height: 4px;\n  background-color: currentColor;\n  transition-property: transform;\n  transition-duration: 0.2s;\n  transition-timing-function: ease;\n",Lines=styled_components_browser_esm.a.span(_templateObject3||(_templateObject3=_taggedTemplateLiteralLoose(["\n  top: 50%;\n  margin-top: -2px;\n  ","\n  ","\n\n  &::before {\n    content: '';\n    ","\n    ","\n  }\n\n  &::after {\n    content: '';\n    ","\n    ","\n  }\n"])),LinesCommon,(function(p){return p.isX?"\n    transform: rotate(225deg);\n    transition-delay: 0.12s;\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  ":"\n    transition-duration: 0.2s;\n    transition-timing-function: ease;\n  "}),LinesCommon,(function(p){return p.isX?"\n      top: 0;\n      opacity: 0;\n      transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;\n    ":"\n      top: -10px;\n      transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;\n    "}),LinesCommon,(function(p){return p.isX?"\n      bottom: 0;\n      transform: rotate(-90deg);\n      transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n    ":"\n      bottom: -10px;\n      transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    "})),hamburger_button_HamburgerButton=function HamburgerButton(_ref){var label=_ref.label,labelActive=_ref.labelActive,id=_ref.id,position=_ref.position,_React$useState2=_slicedToArray(react_default.a.useState(!1),2),checked=_React$useState2[0],toggle=_React$useState2[1];return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(Input,{type:"checkbox",id:id,position:position,checked:checked,onChange:function onChange(){return toggle(!checked)}}),Object(jsx_runtime.jsx)(Hamburger,{htmlFor:id,"aria-label":checked?labelActive:label,position:position,children:Object(jsx_runtime.jsx)(Lines,{isX:checked})})]})};hamburger_button_HamburgerButton.defaultProps={label:"Menü anzeigen",labelActive:"Menü ausblenden",id:"toggle"};var hamburger_button=hamburger_button_HamburgerButton;try{hamburgerbutton.displayName="hamburgerbutton",hamburgerbutton.__docgenInfo={description:"",displayName:"hamburgerbutton",props:{label:{defaultValue:{value:"Menü anzeigen"},description:"",name:"label",required:!1,type:{name:"string"}},labelActive:{defaultValue:{value:"Menü ausblenden"},description:"",name:"labelActive",required:!1,type:{name:"string"}},id:{defaultValue:{value:"toggle"},description:"",name:"id",required:!1,type:{name:"string"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"{ top?: string | undefined; bottom?: string | undefined; left?: string | undefined; right?: string | undefined; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hamburger-button/index.tsx#hamburgerbutton"]={docgenInfo:hamburgerbutton.__docgenInfo,name:"hamburgerbutton",path:"src/hamburger-button/index.tsx#hamburgerbutton"})}catch(__react_docgen_typescript_loader_error){}var meta={title:"Design System/Components",component:hamburger_button,args:{label:"Menü anzeigen",labelActive:"Menü ausblenden",position:{top:"20px",left:"20px"}}},index_stories_HamburgerButtonStory=function HamburgerButtonStory(args){return Object(jsx_runtime.jsx)(hamburger_button,Object.assign({},args))};index_stories_HamburgerButtonStory.displayName="HamburgerButtonStory",index_stories_HamburgerButtonStory.storyName="Hamburger button";__webpack_exports__.default=meta;index_stories_HamburgerButtonStory.parameters=Object.assign({storySource:{source:"(args) => (\n  \n  <HamburgerButton {...args} />\n)"}},index_stories_HamburgerButtonStory.parameters);try{Meta.displayName="Meta",Meta.__docgenInfo={description:"Metadata to configure the stories for a component.",displayName:"Meta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hamburger-button/stories/index.stories.tsx#Meta"]={docgenInfo:Meta.__docgenInfo,name:"Meta",path:"src/hamburger-button/stories/index.stories.tsx#Meta"})}catch(__react_docgen_typescript_loader_error){}},"./src/logo/stories/index.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LogoStory",(function(){return LogoStory})),__webpack_require__.d(__webpack_exports__,"SolidColorLogoStory",(function(){return SolidColorLogoStory}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js");var _templateObject,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var Svg=styled_components_browser_esm.a.svg(_templateObject||(_templateObject=function _taggedTemplateLiteralLoose(strings,raw){return raw||(raw=strings.slice(0)),strings.raw=raw,strings}(["\n  width: 340px;\n  height: 190px;\n  vertical-align: bottom;\n"]))),logo_Logo=function Logo(_ref){var title=_ref.title,url=_ref.url,urlRelations=_ref.urlRelations,solidColor=_ref.solidColor;return Object(jsx_runtime.jsx)("a",{href:url,rel:null==urlRelations?void 0:urlRelations.join(" "),className:"h-card","aria-label":title,children:Object(jsx_runtime.jsxs)(Svg,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 340 190",role:"img","aria-labelledby":"logo-title",fill:solidColor,children:[Object(jsx_runtime.jsx)("title",{className:"p-name",id:"logo-title",children:title}),solidColor?Object(jsx_runtime.jsx)("path",{d:"M236.305 68.36c0-19.988 16.07-36.19 35.894-36.19 19.825 0 35.895 16.202 35.895 36.19 0 19.987-16.07 36.19-35.895 36.19-19.824 0-35.894-16.203-35.894-36.19zm-31.906-1.005s.06 4.371.18 6.031c2.551 35.408 31.851 63.334 67.62 63.334a67.082 67.082 0 0 0 35.58-10.159c-2.383 17.66-17.411 31.27-35.58 31.27-4.194 0-12.002-2.017-12.169-2.131a35.582 35.582 0 0 1-6.805-3.328c-1.236-.345-2.574-.573-3.958-.573-2.955 0-5.636.686-7.608 1.639l-3.36 3.387-13.54 13.652C236.987 182.554 253.73 190 272.199 190 309.645 190 340 159.395 340 121.64V68.36C340 30.605 309.645 0 272.2 0c-20.725 0-39.277 9.374-51.713 24.147C208.14 9.38 189.657 0 169.002 0c-20.305 0-38.51 9.063-50.85 23.398C105.813 9.063 87.607 0 67.303 0 30.131 0 0 30.38 0 67.857v35.688c0 18.322 14.731 33.175 32.903 33.175V67.355c0-19.433 15.624-35.186 34.898-35.186 17.012 0 31.178 12.272 34.269 28.515-.246 2.357-.37 42.861-.37 42.861 0 18.322 14.732 33.175 32.904 33.175V67.355c0-19.433 15.624-35.186 34.897-35.186 19.274 0 34.898 15.753 34.898 35.186zm0 6.031h.18c-.12-1.66-.18 0-.18 0z"}):Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsxs)("defs",{children:[Object(jsx_runtime.jsxs)("linearGradient",{id:"logo-a",x1:"100%",x2:"3%",y1:"57%",y2:"65%",children:[Object(jsx_runtime.jsx)("stop",{offset:"0%",stopColor:"#d12b97"}),Object(jsx_runtime.jsx)("stop",{offset:"100%",stopColor:"#c82a91"})]}),Object(jsx_runtime.jsxs)("linearGradient",{id:"logo-b",x1:"29%",x2:"84%",y1:"83%",y2:"75%",children:[Object(jsx_runtime.jsx)("stop",{offset:"0%",stopColor:"#b22581"}),Object(jsx_runtime.jsx)("stop",{offset:"100%",stopColor:"#da4da9"})]}),Object(jsx_runtime.jsxs)("linearGradient",{id:"logo-c",x1:"60%",x2:"34%",y1:"14%",y2:"98%",children:[Object(jsx_runtime.jsx)("stop",{offset:"0%",stopColor:"#601445"}),Object(jsx_runtime.jsx)("stop",{offset:"100%",stopColor:"#bc2788"})]}),Object(jsx_runtime.jsxs)("linearGradient",{id:"logo-d",x1:"14%",x2:"42%",y1:"54%",y2:"-13%",children:[Object(jsx_runtime.jsx)("stop",{offset:"0%",stopColor:"#8f1d67"}),Object(jsx_runtime.jsx)("stop",{offset:"100%",stopColor:"#c5298f"})]}),Object(jsx_runtime.jsxs)("linearGradient",{id:"logo-e",x1:"36%",x2:"29%",y1:"13%",y2:"13%",children:[Object(jsx_runtime.jsx)("stop",{offset:"0%",stopColor:"#99206e"}),Object(jsx_runtime.jsx)("stop",{offset:"100%",stopColor:"#b82685"})]}),Object(jsx_runtime.jsxs)("linearGradient",{id:"logo-f",x1:"96%",x2:"38%",y1:"5%",y2:"72%",children:[Object(jsx_runtime.jsx)("stop",{offset:"0%",stopColor:"#6d164e"}),Object(jsx_runtime.jsx)("stop",{offset:"100%",stopColor:"#a62277"})]})]}),Object(jsx_runtime.jsx)("mask",{id:"logo-mask",fill:"#fff",children:Object(jsx_runtime.jsx)("path",{d:"M236.305 68.36c0-19.988 16.07-36.19 35.894-36.19 19.825 0 35.895 16.202 35.895 36.19 0 19.987-16.07 36.19-35.895 36.19-19.824 0-35.894-16.203-35.894-36.19zm-31.906-1.005s.06 4.371.18 6.031c2.551 35.408 31.851 63.334 67.62 63.334a67.082 67.082 0 0 0 35.58-10.159c-2.383 17.66-17.411 31.27-35.58 31.27-4.194 0-12.002-2.017-12.169-2.131a35.582 35.582 0 0 1-6.805-3.328c-1.236-.345-2.574-.573-3.958-.573-2.955 0-5.636.686-7.608 1.639l-3.36 3.387-13.54 13.652C236.987 182.554 253.73 190 272.199 190 309.645 190 340 159.395 340 121.64V68.36C340 30.605 309.645 0 272.2 0c-20.725 0-39.277 9.374-51.713 24.147C208.14 9.38 189.657 0 169.002 0c-20.305 0-38.51 9.063-50.85 23.398C105.813 9.063 87.607 0 67.303 0 30.131 0 0 30.38 0 67.857v35.688c0 18.322 14.731 33.175 32.903 33.175V67.355c0-19.433 15.624-35.186 34.898-35.186 17.012 0 31.178 12.272 34.269 28.515-.246 2.357-.37 42.861-.37 42.861 0 18.322 14.732 33.175 32.904 33.175V67.355c0-19.433 15.624-35.186 34.897-35.186 19.274 0 34.898 15.753 34.898 35.186zm0 6.031h.18c-.12-1.66-.18 0-.18 0z"})}),Object(jsx_runtime.jsxs)("g",{mask:"url(#logo-mask)",children:[Object(jsx_runtime.jsx)("path",{fill:"url(#logo-a)",d:"M42 43L26.71 190h152.3l-4.343-112L42 43z"}),Object(jsx_runtime.jsx)("path",{fill:"url(#logo-b)",d:"M340 94v96H226l114-96z"}),Object(jsx_runtime.jsx)("path",{fill:"#941f6a",d:"M174 77l4.21 113h48.4L340 94.575V54.85L174 77z"}),Object(jsx_runtime.jsx)("path",{fill:"#d4319c",d:"M0 178l29 12H0v-12z"}),Object(jsx_runtime.jsx)("path",{fill:"#de5db1",d:"M0 164l28 26-28-11v-15z"}),Object(jsx_runtime.jsx)("path",{fill:"url(#logo-c)",d:"M0 164.19L28 190 43 43 0 59.355V164.19z"}),Object(jsx_runtime.jsx)("path",{fill:"#881c61",d:"M0 22l43 22L0 60V22z"}),Object(jsx_runtime.jsx)("path",{fill:"#aa237a",d:"M0 23.5L43 44 9.035 0H0v23.5z"}),Object(jsx_runtime.jsx)("path",{fill:"#bf288a",d:"M8 0h70L43 44 8 0z"}),Object(jsx_runtime.jsx)("path",{fill:"url(#logo-d)",d:"M77 0h65l33 79L42 44 77 0z"}),Object(jsx_runtime.jsx)("path",{fill:"url(#logo-e)",d:"M141 0h105l-72 78-33-78z"}),Object(jsx_runtime.jsx)("path",{fill:"url(#logo-f)",d:"M245 0h95v56L173 78l72-78z"}),Object(jsx_runtime.jsx)("path",{fill:"#e685c4",d:"M230 0h16l-18 18 2-18z"}),Object(jsx_runtime.jsx)("path",{fill:"#b52683",d:"M246 0h24l-42 18 18-18z"})]})]})]})})};logo_Logo.displayName="Logo",logo_Logo.defaultProps={title:"Marc Görtz",url:"https://marcgoertz.de/",urlRelations:["start","me"],solidColor:""};var src_logo=logo_Logo;try{logo.displayName="logo",logo.__docgenInfo={description:"",displayName:"logo",props:{title:{defaultValue:{value:"Marc Görtz"},description:"",name:"title",required:!1,type:{name:"string"}},url:{defaultValue:{value:"https://marcgoertz.de/"},description:"",name:"url",required:!1,type:{name:"string"}},urlRelations:{defaultValue:{value:"['start', 'me']"},description:"",name:"urlRelations",required:!1,type:{name:"string[]"}},solidColor:{defaultValue:{value:""},description:"",name:"solidColor",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/logo/index.tsx#logo"]={docgenInfo:logo.__docgenInfo,name:"logo",path:"src/logo/index.tsx#logo"})}catch(__react_docgen_typescript_loader_error){}var meta={title:"Design System/Logos",component:src_logo,args:{title:"Marc Görtz",url:"https://marcgoertz.de/",urlRelations:["start","me"]}},index_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(src_logo,Object.assign({},args))};index_stories_Template.displayName="Template";var LogoStory=index_stories_Template.bind({});LogoStory.storyName="Default logo";var SolidColorLogoStory=index_stories_Template.bind({});SolidColorLogoStory.argTypes={solidColor:{control:"color"}},SolidColorLogoStory.args={solidColor:"#bada55"},SolidColorLogoStory.storyName="Logo with solid color";__webpack_exports__.default=meta;LogoStory.parameters=Object.assign({storySource:{source:"(args) => <Logo {...args} />"}},LogoStory.parameters),SolidColorLogoStory.parameters=Object.assign({storySource:{source:"(args) => <Logo {...args} />"}},SolidColorLogoStory.parameters);try{Meta.displayName="Meta",Meta.__docgenInfo={description:"Metadata to configure the stories for a component.",displayName:"Meta",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/logo/stories/index.stories.tsx#Meta"]={docgenInfo:Meta.__docgenInfo,name:"Meta",path:"src/logo/stories/index.stories.tsx#Meta"})}catch(__react_docgen_typescript_loader_error){}},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);