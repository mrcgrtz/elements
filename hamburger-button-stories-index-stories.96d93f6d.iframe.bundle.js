"use strict";(self.webpackChunk_mrcgrtz_elements=self.webpackChunk_mrcgrtz_elements||[]).push([[762],{"./src/hamburger-button/stories/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HamburgerButtonStory:function(){return HamburgerButtonStory},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return index_stories}});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Input=styled_components_browser_esm.zo.input`
  position: absolute;
  inset: ${p=>[p.$position.blockStart??"auto",p.$position.inlineEnd??"auto",p.$position.blockEnd??"auto",p.$position.inlineStart??"auto"].join(" ")};
  inline-size: 1px;
  block-size: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
`,Hamburger=styled_components_browser_esm.zo.label`
  position: absolute;
  inset: ${p=>[p.$position.blockStart??"auto",p.$position.inlineEnd??"auto",p.$position.blockEnd??"auto",p.$position.inlineStart??"auto"].join(" ")};
  z-index: 1;
  inline-size: 2em;
  block-size: 1.5em;
  cursor: pointer;
`,LinesCommon="\n  display: block;\n  position: absolute;\n  border-radius: 4px;\n  inline-size: 100%;\n  block-size: 4px;\n  background-color: currentColor;\n  transition-property: transform;\n  transition-duration: 0.2s;\n  transition-timing-function: ease;\n",Lines=styled_components_browser_esm.zo.span`
  inset-block-start: 50%;
  margin-block-start: -2px;
  ${LinesCommon}
  ${p=>p.$isX?"\n    transform: rotate(225deg);\n    transition-delay: 0.12s;\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  ":"\n    transition-duration: 0.2s;\n    transition-timing-function: ease;\n  "}

  &::before {
    content: '';
    ${LinesCommon}
    ${p=>p.$isX?"\n      inset-block-start: 0;\n      opacity: 0;\n      transition: inset-block-start 0.1s ease-out, opacity 0.1s 0.12s ease-out;\n    ":"\n      inset-block-start: -10px;\n      transition: inset-block-start 0.1s 0.25s ease-in, opacity 0.1s ease-in;\n    "}
  }

  &::after {
    content: '';
    ${LinesCommon}
    ${p=>p.$isX?"\n      inset-block-end: 0;\n      transform: rotate(-90deg);\n      transition: inset-block-end 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n    ":"\n      inset-block-end: -10px;\n      transition: inset-block-end 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    "}
  }
`,HamburgerButton=({label:label,labelActive:labelActive,id:id,position:position})=>{const[checked,setChecked]=(0,react.useState)(!1);return react.createElement(react.StrictMode,null,react.createElement(Input,{type:"checkbox",id:id,$position:position,checked:checked,onChange:()=>{setChecked(!checked)}}),react.createElement(Hamburger,{htmlFor:id,"aria-label":checked?labelActive:label,$position:position},react.createElement(Lines,{$isX:checked})))};HamburgerButton.defaultProps={label:"Menü anzeigen",labelActive:"Menü ausblenden",id:"toggle"};var hamburger_button=HamburgerButton;HamburgerButton.__docgenInfo={description:"",methods:[],displayName:"HamburgerButton",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Menü anzeigen'",computed:!1}},labelActive:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Menü ausblenden'",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'toggle'",computed:!1}},position:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  blockStart?: string;\n  blockEnd?: string;\n  inlineStart?: string;\n  inlineEnd?: string;\n}",signature:{properties:[{key:"blockStart",value:{name:"string",required:!1}},{key:"blockEnd",value:{name:"string",required:!1}},{key:"inlineStart",value:{name:"string",required:!1}},{key:"inlineEnd",value:{name:"string",required:!1}}]}},description:""}}};const meta={title:"Design System/Components",component:hamburger_button,args:{label:"Menü anzeigen",labelActive:"Menü ausblenden",position:{blockStart:"20px",inlineStart:"20px"}}},HamburgerButtonStory=properties=>react.createElement(hamburger_button,properties);HamburgerButtonStory.storyName="Hamburger button";var index_stories=meta;const __namedExportsOrder=["HamburgerButtonStory"];HamburgerButtonStory.parameters={...HamburgerButtonStory.parameters,docs:{...HamburgerButtonStory.parameters?.docs,source:{originalSource:"properties => <HamburgerButton {...properties} />",...HamburgerButtonStory.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=hamburger-button-stories-index-stories.96d93f6d.iframe.bundle.js.map