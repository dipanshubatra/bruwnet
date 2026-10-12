"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4783],{44783:(e,r,t)=>{t.r(r),t.d(r,{FullScreenDropZone:()=>b});var n=t(2860),o=t(58096),a=t(46758),i=t(64604),l=t(44331),s=t(59523),d=t(10782),c=t(31877),u=t(55729),p=t(58597);let f=e=>{if(!e)return!1;for(let r of Array.from(e.items))if("file"==r.kind)return!0;for(let r of Array.from(e.types))if("Files"==r)return!0;return!1},b=({message:e,disabled:r,onDrop:t,children:l})=>{let{getRootProps:s,getInputProps:b}=(0,p.VB)({noClick:!0,noKeyboard:!0,disabled:r,onDrop(e){A(!1),e.length&&t([...e])}}),[w,y]=(0,u.useState)(!1),[v,A]=(0,u.useState)(!1),g=(0,u.useCallback)(e=>{f(e.dataTransfer)&&y(!0)},[]),x=(0,u.useCallback)(e=>{if(!f(e.dataTransfer)){A(!1),y(!1);return}A(!0),y(!1)},[]),D=(0,u.useCallback)(()=>{y(!1)},[]);return(0,u.useEffect)(()=>{let e=e=>{"Escape"!=e.code||v||D()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[v,D]),(0,n.FD)(n.FK,{children:[(0,n.Y)("input",{...b()}),(0,n.FD)(a.A,{sx:{flex:1},...s({onDragEnter:g}),children:[(w||v)&&(0,n.FD)(h,{onDrop:x,onDragLeave:D,children:[(0,n.Y)(k,{disabled:v,onClick:D,children:(0,n.Y)(o.A,{})}),(0,n.Y)(i.A,{variant:"h3",children:v?(0,n.Y)(d.$,{}):e??(0,c.t)("upload_dropzone_hint")})]}),l]})]})},h=(0,l.Ay)(a.A)(({theme:e})=>`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    outline: none;
    justify-content: center;
    align-items: center;
    transition: border 0.24s ease-in-out;
    border-width: 5px;
    border-style: solid;
    border-color: ${e.vars.palette.accent.light};
    background-color: ${e.vars.palette.backdrop.base};
    backdrop-filter: blur(10px);
    z-index: calc(var(--mui-zIndex-tooltip) + 1);
`),k=(0,l.Ay)(s.A)`
    position: absolute;
    top: 10px;
    right: 10px;
`}}]);