"use strict";(self.webpackChunk_mrcgrtz_elements=self.webpackChunk_mrcgrtz_elements||[]).push([[234],{"./src/hamburger-button/stories/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HamburgerButtonStory:function(){return HamburgerButtonStory},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return index_stories}});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Input=styled_components_browser_esm.I4.input`
  position: absolute;
  inset: ${p=>[p.$position.blockStart??"auto",p.$position.inlineEnd??"auto",p.$position.blockEnd??"auto",p.$position.inlineStart??"auto"].join(" ")};
  inline-size: 1px;
  block-size: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
`,Hamburger=styled_components_browser_esm.I4.label`
  position: absolute;
  inset: ${p=>[p.$position.blockStart??"auto",p.$position.inlineEnd??"auto",p.$position.blockEnd??"auto",p.$position.inlineStart??"auto"].join(" ")};
  z-index: 1;
  inline-size: 2em;
  block-size: 1.5em;
  cursor: pointer;
`,LinesCommon="\n  display: block;\n  position: absolute;\n  border-radius: 4px;\n  inline-size: 100%;\n  block-size: 4px;\n  background-color: currentColor;\n  transition-property: transform;\n  transition-duration: 0.2s;\n  transition-timing-function: ease;\n",Lines=styled_components_browser_esm.I4.span`
  inset-block-start: 50%;
  margin-block-start: -2px;
  ${LinesCommon}
  ${p=>p.$isX?styled_components_browser_esm.AH`
          transform: rotate(225deg);
          transition-delay: 0.12s;
          transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        `:styled_components_browser_esm.AH`
          transition-duration: 0.2s;
          transition-timing-function: ease;
        `}

  &::before {
    content: '';
    ${LinesCommon}
    ${p=>p.$isX?styled_components_browser_esm.AH`
            inset-block-start: 0;
            opacity: 0;
            transition:
              inset-block-start 0.1s ease-out,
              opacity 0.1s 0.12s ease-out;
          `:styled_components_browser_esm.AH`
            inset-block-start: -10px;
            transition:
              inset-block-start 0.1s 0.25s ease-in,
              opacity 0.1s ease-in;
          `}
  }

  &::after {
    content: '';
    ${LinesCommon}
    ${p=>p.$isX?styled_components_browser_esm.AH`
            inset-block-end: 0;
            transform: rotate(-90deg);
            transition:
              inset-block-end 0.1s ease-out,
              transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
          `:styled_components_browser_esm.AH`
            inset-block-end: -10px;
            transition:
              inset-block-end 0.1s 0.25s ease-in,
              transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
          `}
  }
`,HamburgerButton=({label:label="Menü anzeigen",labelActive:labelActive="Menü ausblenden",id:id="toggle",position:position})=>{const[checked,setChecked]=(0,react.useState)(!1);return react.createElement(react.StrictMode,null,react.createElement(Input,{type:"checkbox",id:id,$position:position,checked:checked,onChange:()=>{setChecked(!checked)}}),react.createElement(Hamburger,{htmlFor:id,"aria-label":checked?labelActive:label,$position:position},react.createElement(Lines,{$isX:checked})))};var hamburger_button=HamburgerButton;HamburgerButton.__docgenInfo={description:"",methods:[],displayName:"HamburgerButton",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Menü anzeigen'",computed:!1}},labelActive:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Menü ausblenden'",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'toggle'",computed:!1}},position:{required:!0,tsType:{name:"signature",type:"object",raw:"{\n  blockStart?: string;\n  blockEnd?: string;\n  inlineStart?: string;\n  inlineEnd?: string;\n}",signature:{properties:[{key:"blockStart",value:{name:"string",required:!1}},{key:"blockEnd",value:{name:"string",required:!1}},{key:"inlineStart",value:{name:"string",required:!1}},{key:"inlineEnd",value:{name:"string",required:!1}}]}},description:""}}};const meta={title:"Design System/Components",component:hamburger_button,args:{label:"Menü anzeigen",labelActive:"Menü ausblenden",position:{blockStart:"20px",inlineStart:"20px"}}},HamburgerButtonStory=properties=>react.createElement(hamburger_button,properties);HamburgerButtonStory.storyName="Hamburger button";var index_stories=meta;const __namedExportsOrder=["HamburgerButtonStory"];HamburgerButtonStory.parameters={...HamburgerButtonStory.parameters,docs:{...HamburgerButtonStory.parameters?.docs,source:{originalSource:"properties => <HamburgerButton {...properties} />",...HamburgerButtonStory.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=hamburger-button-stories-index-stories.cee5fde4.iframe.bundle.js.map