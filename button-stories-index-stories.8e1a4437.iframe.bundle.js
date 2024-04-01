"use strict";(self.webpackChunk_mrcgrtz_elements=self.webpackChunk_mrcgrtz_elements||[]).push([[67],{"./src/button/stories/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ButtonStory:function(){return ButtonStory},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return index_stories}});var react=__webpack_require__("./node_modules/react/index.js");const StyledButton=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").zo.button`
  display: inline-block;
  margin: 0;
  padding: 0.25rem 1rem;
  border: 0;
  font-size: inherit;
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
  line-height: inherit;
  color: white;
  background-color: lightgrey;
  box-sizing: border-box;
  appearance: none;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: dodgerblue;
  }
`,Button=properties=>react.createElement(react.StrictMode,null,react.createElement(StyledButton,properties));Button.defaultProps={type:"button"};var src_button=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{defaultValue:{value:"'button'",computed:!1},required:!1}}};const meta={title:"Design System/Components",component:src_button,argTypes:{type:{options:["button","submit","reset"],control:{type:"radio"}}},args:{children:"Lorem ipsum",type:"button",disabled:!1}},ButtonStory=properties=>react.createElement(src_button,properties);ButtonStory.storyName="Button";var index_stories=meta;ButtonStory.parameters={...ButtonStory.parameters,docs:{...ButtonStory.parameters?.docs,source:{originalSource:"properties => <Button {...properties} />",...ButtonStory.parameters?.docs?.source}}};const __namedExportsOrder=["ButtonStory"]}}]);