"use strict";(self.webpackChunk_mrcgrtz_elements=self.webpackChunk_mrcgrtz_elements||[]).push([[762],{"./src/hamburger-button/stories/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HamburgerButtonStory:function(){return HamburgerButtonStory},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return index_stories}});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input=styled_components_browser_esm.ZP.input`
  position: absolute;
  inset-block-start: ${p=>p.position.blockStart??""};
  inset-block-end: ${p=>p.position.blockEnd??""};
  inset-inline-start: ${p=>p.position.inlineStart??""};
  inset-inline-end: ${p=>p.position.inlineEnd??""};
  inline-size: 1px;
  block-size: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
`,Hamburger=styled_components_browser_esm.ZP.label`
  position: absolute;
  inset-block-start: ${p=>p.position.blockStart??""};
  inset-block-end: ${p=>p.position.blockEnd??""};
  inset-inline-start: ${p=>p.position.inlineStart??""};
  inset-inline-end: ${p=>p.position.inlineEnd??""};
  z-index: 1;
  inline-size: 2em;
  block-size: 1.5em;
  cursor: pointer;
`,LinesCommon="\n  display: block;\n  position: absolute;\n  border-radius: 4px;\n  inline-size: 100%;\n  block-size: 4px;\n  background-color: currentColor;\n  transition-property: transform;\n  transition-duration: 0.2s;\n  transition-timing-function: ease;\n",Lines=styled_components_browser_esm.ZP.span`
  inset-block-start: 50%;
  margin-block-start: -2px;
  ${LinesCommon}
  ${p=>p.isX?"\n    transform: rotate(225deg);\n    transition-delay: 0.12s;\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  ":"\n    transition-duration: 0.2s;\n    transition-timing-function: ease;\n  "}

  &::before {
    content: '';
    ${LinesCommon}
    ${p=>p.isX?"\n      inset-block-start: 0;\n      opacity: 0;\n      transition: inset-block-start 0.1s ease-out, opacity 0.1s 0.12s ease-out;\n    ":"\n      inset-block-start: -10px;\n      transition: inset-block-start 0.1s 0.25s ease-in, opacity 0.1s ease-in;\n    "}
  }

  &::after {
    content: '';
    ${LinesCommon}
    ${p=>p.isX?"\n      inset-block-end: 0;\n      transform: rotate(-90deg);\n      transition: inset-block-end 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n    ":"\n      inset-block-end: -10px;\n      transition: inset-block-end 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    "}
  }
`,HamburgerButton=_ref=>{let{label:label,labelActive:labelActive,id:id,position:position}=_ref;const[checked,setChecked]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)(react.StrictMode,{children:[(0,jsx_runtime.jsx)(Input,{type:"checkbox",id:id,position:position,checked:checked,onChange:()=>{setChecked(!checked)}}),(0,jsx_runtime.jsx)(Hamburger,{htmlFor:id,"aria-label":checked?labelActive:label,position:position,children:(0,jsx_runtime.jsx)(Lines,{isX:checked})})]})};HamburgerButton.displayName="HamburgerButton",HamburgerButton.defaultProps={label:"Menü anzeigen",labelActive:"Menü ausblenden",id:"toggle"};var hamburger_button=HamburgerButton;try{hamburgerbutton.displayName="hamburgerbutton",hamburgerbutton.__docgenInfo={description:"",displayName:"hamburgerbutton",props:{label:{defaultValue:{value:"Menü anzeigen"},description:"",name:"label",required:!1,type:{name:"string"}},labelActive:{defaultValue:{value:"Menü ausblenden"},description:"",name:"labelActive",required:!1,type:{name:"string"}},id:{defaultValue:{value:"toggle"},description:"",name:"id",required:!1,type:{name:"string"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"{ blockStart?: string | undefined; blockEnd?: string | undefined; inlineStart?: string | undefined; inlineEnd?: string | undefined; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hamburger-button/index.tsx#hamburgerbutton"]={docgenInfo:hamburgerbutton.__docgenInfo,name:"hamburgerbutton",path:"src/hamburger-button/index.tsx#hamburgerbutton"})}catch(__react_docgen_typescript_loader_error){}const meta={title:"Design System/Components",component:hamburger_button,args:{label:"Menü anzeigen",labelActive:"Menü ausblenden",position:{blockStart:"20px",inlineStart:"20px"}}},HamburgerButtonStory=args=>(0,jsx_runtime.jsx)(hamburger_button,{...args});HamburgerButtonStory.displayName="HamburgerButtonStory",HamburgerButtonStory.storyName="Hamburger button";var index_stories=meta;HamburgerButtonStory.parameters={...HamburgerButtonStory.parameters,docs:{...HamburgerButtonStory.parameters?.docs,source:{originalSource:"(args: typeof defaultArgs) => <HamburgerButton {...args} />",...HamburgerButtonStory.parameters?.docs?.source}}};const __namedExportsOrder=["HamburgerButtonStory"]}}]);
//# sourceMappingURL=hamburger-button-stories-index-stories.9dcc20ce.iframe.bundle.js.map