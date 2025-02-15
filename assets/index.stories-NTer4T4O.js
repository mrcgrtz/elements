import{r as o,R as i}from"./index-BZISi7jw.js";import{d as a,l as t}from"./styled-components.browser.esm-DMp0W6nh.js";import"./_commonjsHelpers-CqkleIqs.js";const $=a.input`
  position: absolute;
  inset: ${e=>[e.$position.blockStart??"auto",e.$position.inlineEnd??"auto",e.$position.blockEnd??"auto",e.$position.inlineStart??"auto"].join(" ")};
  inline-size: 1px;
  block-size: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
`,x=a.label`
  position: absolute;
  inset: ${e=>[e.$position.blockStart??"auto",e.$position.inlineEnd??"auto",e.$position.blockEnd??"auto",e.$position.inlineStart??"auto"].join(" ")};
  z-index: 1;
  inline-size: 2em;
  block-size: 1.5em;
  cursor: pointer;
`,r=`
  display: block;
  position: absolute;
  border-radius: 4px;
  inline-size: 100%;
  block-size: 4px;
  background-color: currentColor;
  transition-property: transform;
  transition-duration: 0.2s;
  transition-timing-function: ease;
`,S=a.span`
  inset-block-start: 50%;
  margin-block-start: -2px;
  ${r}
  ${e=>e.$isX?t`
          transform: rotate(225deg);
          transition-delay: 0.12s;
          transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        `:t`
          transition-duration: 0.2s;
          transition-timing-function: ease;
        `}

  &::before {
    content: '';
    ${r}
    ${e=>e.$isX?t`
            inset-block-start: 0;
            opacity: 0;
            transition:
              inset-block-start 0.1s ease-out,
              opacity 0.1s 0.12s ease-out;
          `:t`
            inset-block-start: -10px;
            transition:
              inset-block-start 0.1s 0.25s ease-in,
              opacity 0.1s ease-in;
          `}
  }

  &::after {
    content: '';
    ${r}
    ${e=>e.$isX?t`
            inset-block-end: 0;
            transform: rotate(-90deg);
            transition:
              inset-block-end 0.1s ease-out,
              transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
          `:t`
            inset-block-end: -10px;
            transition:
              inset-block-end 0.1s 0.25s ease-in,
              transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
          `}
  }
`,m=({label:e="Menü anzeigen",labelActive:g="Menü ausblenden",id:l="toggle",position:c})=>{const[s,k]=o.useState(!1),f=o.useCallback(()=>{k(y=>!y)},[]);return i.createElement(o.StrictMode,null,i.createElement($,{type:"checkbox",id:l,$position:c,checked:s,onChange:f}),i.createElement(x,{htmlFor:l,"aria-label":s?g:e,$position:c},i.createElement(S,{$isX:s})))},b=o.memo(m);m.__docgenInfo={description:"",methods:[],displayName:"HamburgerButton",props:{label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Menü anzeigen'",computed:!1}},labelActive:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Menü ausblenden'",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'toggle'",computed:!1}},position:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  blockStart?: string;
  blockEnd?: string;
  inlineStart?: string;
  inlineEnd?: string;
}`,signature:{properties:[{key:"blockStart",value:{name:"string",required:!1}},{key:"blockEnd",value:{name:"string",required:!1}},{key:"inlineStart",value:{name:"string",required:!1}},{key:"inlineEnd",value:{name:"string",required:!1}}]}},description:""}}};const v={title:"Design System/Components",component:b,args:{label:"Menü anzeigen",labelActive:"Menü ausblenden",position:{blockStart:"20px",inlineStart:"20px"}}},n=e=>i.createElement(b,{...e});n.storyName="Hamburger button";n.__docgenInfo={description:"",methods:[],displayName:"HamburgerButtonStory"};var u,p,d;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:"properties => <HamburgerButton {...properties} />",...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const H=["HamburgerButtonStory"];export{n as HamburgerButtonStory,H as __namedExportsOrder,v as default};
