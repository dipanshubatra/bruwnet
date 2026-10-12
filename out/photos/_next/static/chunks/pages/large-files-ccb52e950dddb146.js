(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8587],{2779:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>U});var l=i(2860),r=i(20229),s=i(38351),o=i(73750),a=i(94772),n=i(8792),d=i(31910);let c=async e=>{let t=(0,r.v5)().id,i=new Set((await (0,a.UH)()).filter(({owner:e})=>e.id===t).map(({id:e})=>e)),l=await (0,n.Vr)(),o=new Set,d=[];for(let r of l){if(!i.has(r.collectionID)||r.ownerID!==t||o.has(r.id))continue;let l=r.info?.fileSize;l&&!(l<0xa00000)&&p(r,e)&&(o.add(r.id),d.push({id:(0,s.S)("lf_"),file:r,size:l,isSelected:!1}))}return d.sort((e,t)=>t.size-e.size),d},p=(e,t)=>{switch(t){case"all":return!0;case"photos":return e.metadata.fileType===o.pt.image||e.metadata.fileType===o.pt.livePhoto;case"videos":return e.metadata.fileType===o.pt.video}},u=async(e,t)=>{let i=e.filter(e=>e.isSelected),l=i.map(e=>e.file);if(0===l.length)return new Set;let r=0,s=()=>t(++r/2*100);return await (0,a.F0)(l),s(),await (0,d.B0)(),s(),new Set(i.map(e=>e.id))},h={analysisStatus:void 0,largeFiles:[],filter:"all",sortOrder:"desc",selectedCount:0,selectedSize:0,deleteProgress:void 0,selectedFileIDs:new Set},g=(e,t)=>{switch(t.type){case"analyze":return{...e,analysisStatus:"started"};case"analysisFailed":return{...e,analysisStatus:"failed"};case"analysisCompleted":{let i=e.selectedFileIDs,l=m(t.largeFiles.map(e=>({...e,isSelected:i.has(e.file.id)})),e.sortOrder),{selectedCount:r,selectedSize:s}=f(l);return{...e,analysisStatus:"completed",largeFiles:l,selectedCount:r,selectedSize:s}}case"changeFilter":if(t.filter===e.filter||void 0!==e.deleteProgress)return e;return{...h,filter:t.filter,sortOrder:e.sortOrder,selectedFileIDs:e.selectedFileIDs};case"changeSortOrder":{if(void 0!==e.deleteProgress)return e;let i=t.sortOrder,l=m(e.largeFiles,i);return{...e,sortOrder:i,largeFiles:l}}case"toggleSelection":{let i=t.index;if(i<0||i>=e.largeFiles.length)return e;let l=e.largeFiles[i],r=!l.isSelected,s=e.largeFiles.map((e,t)=>t===i?{...e,isSelected:r}:e),o=new Set(e.selectedFileIDs);r?o.add(l.file.id):o.delete(l.file.id);let{selectedCount:a,selectedSize:n}=f(s);return{...e,largeFiles:s,selectedCount:a,selectedSize:n,selectedFileIDs:o}}case"deselectAll":{let t=new Set(e.largeFiles.map(e=>e.file.id)),i=new Set;for(let l of e.selectedFileIDs)t.has(l)||i.add(l);let l=e.largeFiles.map(e=>({...e,isSelected:!1}));return{...e,largeFiles:l,selectedCount:0,selectedSize:0,selectedFileIDs:i}}case"selectAll":{let t=e.largeFiles.map(e=>({...e,isSelected:!0})),i=new Set(e.selectedFileIDs);for(let e of t)i.add(e.file.id);let{selectedCount:l,selectedSize:r}=f(t);return{...e,largeFiles:t,selectedCount:l,selectedSize:r,selectedFileIDs:i}}case"delete":return{...e,deleteProgress:0};case"setDeleteProgress":return{...e,deleteProgress:t.progress};case"deleteFailed":return{...e,deleteProgress:void 0};case"deleteCompleted":{let i=[],l=new Set;for(let r of e.largeFiles)t.removedIDs.has(r.id)?l.add(r.file.id):i.push(r);let r=new Set;for(let t of e.selectedFileIDs)l.has(t)||r.add(t);let{selectedCount:s,selectedSize:o}=f(i);return{...e,largeFiles:i,selectedCount:s,selectedSize:o,deleteProgress:void 0,selectedFileIDs:r}}}},f=e=>({selectedCount:e.reduce((e,{isSelected:t})=>e+ +!!t,0),selectedSize:e.reduce((e,{size:t,isSelected:i})=>e+(i?t:0),0)}),m=(e,t)=>[...e].sort((e,i)=>"desc"===t?i.size-e.size:e.size-i.size);var x=i(96469),v=i(48300),b=i(2025),y=i(6029);let w=(0,b.A)((0,y.jsx)("path",{d:"M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11z"}),"Videocam");var F=i(17772),S=i(88916),Y=i(39024),A=i(96777),k=i(11405),_=i(35482),C=i(63272),z=i(38242),D=i(1339),P=i(80046),I=i(46789),T=i(23863),$=i(31985),E=i(29896),M=i(2327),O=i(69564),R=i(40721),N=i(82002),H=i(42068),V=i(31877),W=i(81278),j=i(55729),B=i(21120),K=i(75364);let U=()=>{let{showMiniDialog:e,onGenericError:t}=(0,$.Af)(),{setIsFileViewerOpen:i}=(0,H.R)(),[r,s]=(0,j.useReducer)(g,h),[o,a]=(0,j.useState)(!1),[n,d]=(0,j.useState)(0);(0,z.Y)("/large-files"),(0,j.useEffect)(()=>{let e=!0;return s({type:"analyze"}),c(r.filter).then(t=>{e&&s({type:"analysisCompleted",largeFiles:t})}).catch(t=>{e&&(E.Ay.error("Failed to find large files",t),s({type:"analysisFailed"}))}),()=>{e=!1}},[r.filter]);let p=(0,j.useCallback)(()=>{e({title:(0,V.t)("trash_files_title"),message:(0,V.t)("trash_files_message"),continue:{text:(0,V.t)("move_to_trash"),color:"critical",action:()=>{s({type:"delete"}),u(r.largeFiles,e=>s({type:"setDeleteProgress",progress:e})).then(e=>s({type:"deleteCompleted",removedIDs:e})).catch(e=>{t(e),s({type:"deleteFailed"})})}}})},[e,t,r.largeFiles]),f=(0,j.useCallback)(e=>{d(e),a(!0),i?.(!0)},[i]),m=(0,j.useCallback)(()=>{a(!1),i?.(!1)},[i]);(0,j.useEffect)(()=>()=>i?.(!1),[i]);let x=(0,j.useMemo)(()=>r.largeFiles.map(e=>e.file),[r.largeFiles]),v=(()=>{switch(r.analysisStatus){case void 0:case"started":return(0,l.Y)(q,{});case"failed":return(0,l.Y)(G,{});case"completed":if(0===r.largeFiles.length&&void 0===r.deleteProgress)return(0,l.Y)(L,{});return(0,l.Y)(Z,{largeFiles:r.largeFiles,onToggleSelection:e=>s({type:"toggleSelection",index:e}),onOpenViewer:f,selectedCount:r.selectedCount,selectedSize:r.selectedSize,deleteProgress:r.deleteProgress,onDeleteFiles:p,onSelectAll:()=>s({type:"selectAll"}),onDeselectAll:()=>s({type:"deselectAll"}),filter:r.filter})}})();return(0,l.FD)(F.A,{sx:{height:"100vh"},children:[(0,l.Y)(X,{filter:r.filter,onChangeFilter:e=>s({type:"changeFilter",filter:e})}),v,(0,l.Y)(M.h,{open:o,onClose:m,files:x,initialIndex:n,onVisualFeedback:()=>{}})]})},X=({filter:e,onChangeFilter:t})=>{let i=(0,W.useRouter)();return(0,l.FD)(F.A,{children:[(0,l.FD)(F.A,{direction:"row",sx:e=>({alignItems:"center",justifyContent:"space-between",padding:"8px 4px",borderBottom:`1px solid ${e.vars.palette.divider}`}),children:[(0,l.Y)(S.A,{sx:{minWidth:"100px"},children:(0,l.Y)(Y.A,{onClick:i.back,children:(0,l.Y)(x.A,{})})}),(0,l.Y)(A.A,{variant:"h6",children:(0,V.t)("large_files_title")}),(0,l.Y)(S.A,{sx:{minWidth:"100px"}})]}),(0,l.Y)(Q,{filter:e,onChangeFilter:t})]})},J=(e,t)=>({height:{xs:28,sm:32},fontSize:{xs:"0.75rem",sm:"0.8125rem"},...t?{pl:{xs:1,sm:1.5},pr:{xs:.5,sm:1}}:{px:{xs:1,sm:1.5}},...!e&&{backgroundColor:"rgba(255, 255, 255, 0.12)"}}),Q=({filter:e,onChangeFilter:t})=>(0,l.FD)(F.A,{direction:"row",sx:{gap:1,pl:3,pr:2,py:4,flexWrap:"wrap"},children:[(0,l.Y)(k.A,{label:(0,V.t)("all"),variant:"all"===e?"filled":"outlined",color:"all"===e?"primary":"default",onClick:()=>t("all"),sx:J("all"===e,!1)}),(0,l.Y)(k.A,{icon:(0,l.Y)(v.A,{sx:{fontSize:"18px !important"}}),label:(0,V.t)("photos"),variant:"photos"===e?"filled":"outlined",color:"photos"===e?"primary":"default",onClick:()=>t("photos"),sx:J("photos"===e,!0)}),(0,l.Y)(k.A,{icon:(0,l.Y)(w,{sx:{fontSize:"18px !important"}}),label:(0,V.t)("videos"),variant:"videos"===e?"filled":"outlined",color:"videos"===e?"primary":"default",onClick:()=>t("videos"),sx:J("videos"===e,!0)})]}),q=()=>(0,l.Y)(D.ae,{children:(0,l.Y)(I.$,{})}),G=()=>(0,l.Y)(D.ae,{children:(0,l.Y)(P.T,{})}),L=()=>(0,l.Y)(D.ae,{children:(0,l.Y)(A.A,{sx:{color:"text.muted",textAlign:"center"},children:(0,V.t)("no_large_files")})}),Z=({largeFiles:e,onToggleSelection:t,onOpenViewer:i,selectedCount:r,selectedSize:s,deleteProgress:o,onDeleteFiles:a,onSelectAll:n,onDeselectAll:d,filter:c})=>(0,l.FD)(S.A,{sx:{flex:1,position:"relative",overflow:"hidden"},children:[(0,l.Y)(B.Ay,{children:({width:r,height:s})=>(0,l.Y)(ee,{width:r,height:s,largeFiles:e,onToggleSelection:t,onOpenViewer:i})}),(0,l.Y)(el,{totalCount:e.length,selectedCount:r,selectedSize:s,deleteProgress:o,onDeleteFiles:a,onSelectAll:n,onDeselectAll:d,filter:c})]}),ee=({width:e,height:t,largeFiles:i,onToggleSelection:r,onOpenViewer:s})=>{let o=(0,j.useMemo)(()=>(0,N.cU)(e),[e]),a=o.columns,n=Math.ceil(i.length/a),d=`${e}`;return(0,l.Y)(K._m,{style:{"--et-padding-inline":`${o.paddingInline}px`},height:t,width:e,itemData:{largeFiles:i,onToggleSelection:r,onOpenViewer:s,layoutParams:o,dataRowCount:n},itemCount:n+1,itemSize:e=>e===n?64:o.itemHeight+o.gap,itemKey:e=>e===n?"padding":`row-${e}`,children:et},d)},et=(0,j.memo)(({index:e,style:t,data:i})=>{let{largeFiles:r,onToggleSelection:s,onOpenViewer:o,layoutParams:a,dataRowCount:n}=i;if(e===n)return(0,l.Y)("div",{style:t});let d=a.columns,c=e*d,p=Math.min(c+d,r.length),u=r.slice(c,p);return(0,l.Y)(es,{layoutParams:a,style:t,children:u.map((e,t)=>{let i=c+t;return(0,l.Y)(ei,{item:e,onToggle:()=>s(i),onOpen:()=>o(i)},e.id)})})},K.t7),ei=(0,j.memo)(({item:e,onToggle:t,onOpen:i})=>{let r=e.isSelected,s=j.useRef(null),o=j.useRef(!1),a=j.useRef(i);(0,j.useEffect)(()=>{a.current=i},[i]);let n=(0,j.useMemo)(()=>window.matchMedia("(pointer: coarse)").matches,[]);return(0,j.useEffect)(()=>()=>{s.current&&clearTimeout(s.current)},[]),(0,l.FD)(eo,{onClick:()=>{o.current||(n?t():i())},onTouchStart:()=>{o.current=!1,s.current=setTimeout(()=>{o.current=!0,a.current()},500)},onTouchEnd:()=>{s.current&&(clearTimeout(s.current),s.current=null)},onTouchMove:()=>{s.current&&(clearTimeout(s.current),s.current=null)},children:[(0,l.Y)(R.IF,{TileComponent:ea,coverFile:e.file,children:(0,l.Y)(R.Qi,{children:(0,l.Y)(en,{className:"size-label",children:(0,O.Kk)(e.size)})})}),(0,l.Y)(ed,{type:"checkbox",checked:r,onChange:e=>{e.stopPropagation(),t()},onClick:e=>e.stopPropagation()}),r&&(0,l.Y)(ec,{})]})}),el=({totalCount:e,selectedCount:t,selectedSize:i,deleteProgress:r,onDeleteFiles:s,onSelectAll:o,onDeselectAll:a,filter:n})=>{let d=t===e,c=(0,j.useMemo)(()=>{switch(n){case"photos":return(0,V.t)("select_all_photos");case"videos":return(0,V.t)("select_all_videos");default:return(0,V.t)("select_all")}},[n]),p=(0,j.useMemo)(()=>{switch(n){case"photos":return(0,V.t)("deselect_all_photos");case"videos":return(0,V.t)("deselect_all_videos");default:return(0,V.t)("deselect_all")}},[n]);return(0,l.FD)(F.A,{direction:"row",sx:{position:"absolute",bottom:0,left:0,right:0,height:64,gap:1,alignItems:"center",justifyContent:"center",paddingBottom:1},children:[(0,l.Y)(T.b,{sx:{width:{xs:150,sm:170},fontSize:{xs:"0.85rem",sm:"0.9rem"}},disabled:void 0!==r,onClick:d?a:o,children:d?p:c}),(0,l.Y)(er,{selectedCount:t,selectedSize:i,deleteProgress:r,onDeleteFiles:s})]})},er=({selectedCount:e,selectedSize:t,deleteProgress:i,onDeleteFiles:r})=>{let s=void 0!==i;return(0,l.Y)(T.b,{sx:e=>({px:{xs:2,sm:3},width:{xs:220,sm:260},minHeight:{xs:42,sm:44},fontSize:{xs:"0.85rem",sm:"0.9rem"},"&.Mui-disabled":s?{backgroundColor:"critical.main",color:"critical.contrastText"}:{backgroundColor:"rgba(0, 0, 0, 0.3)",color:"rgba(0, 0, 0, 0.5)",...e.applyStyles("dark",{backgroundColor:"rgba(255, 255, 255, 0.3)",color:"rgba(255, 255, 255, 0.5)"})}}),disabled:0===e||s,color:"critical",onClick:r,children:s?(0,l.Y)(_.A,{sx:{borderRadius:"4px",width:"100%"},variant:0===i?"indeterminate":"determinate",value:i,color:"inherit"}):(0,l.FD)(F.A,{direction:"row",sx:{gap:1,alignItems:"center"},children:[(0,l.Y)(A.A,{sx:{fontSize:"inherit"},children:(0,V.t)("delete_files_button",{count:e})}),(0,l.FD)(A.A,{sx:{fontSize:"inherit",fontWeight:"regular"},children:["(",(0,O.Kk)(t),")"]})]})})},es=(0,C.Ay)("div",{shouldForwardProp:e=>"layoutParams"!==e})(({layoutParams:e})=>`
    display: grid;
    padding-inline: ${e.paddingInline}px;
    grid-template-columns: repeat(${e.columns}, ${e.itemWidth}px);
    grid-auto-rows: ${e.itemHeight}px;
    gap: ${e.gap}px;
`),eo=(0,C.Ay)("div")`
    position: relative;
    cursor: pointer;
    border-radius: 4px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    user-select: none;

    @media (pointer: fine) {
        &:hover {
            input[type="checkbox"] {
                visibility: visible;
            }
        }
    }
`,ea=(0,C.Ay)("div")`
    display: flex;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    & > img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
`,en=(0,C.Ay)(A.A)`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.7) 0%,
        transparent 100%
    );
    color: white;
    padding: 16px 6px 6px;
    text-align: center;
    font-size: 0.75rem;
    font-weight: 500;
    border-radius: 0 0 4px 4px;

    @media (min-width: 600px) {
        padding: 25px 8px 12px;
        font-size: 1rem;
    }
`,ed=(0,C.Ay)("input")(({theme:e})=>`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    outline: none;
    cursor: pointer;
    width: 31px;
    height: 31px;
    box-sizing: border-box;

    @media (pointer: coarse) {
        pointer-events: none;
    }

    &::before {
        content: "";
        display: block;
        width: 19px;
        height: 19px;
        background-color: ${e.vars.palette.grey[300]};
        border-radius: 50%;
        margin: 6px;
        transition: background-color 0.3s ease, opacity 0.3s ease;
        position: relative;
    }

    &::after {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 5px;
        height: 11px;
        border: solid ${e.vars.palette.grey[800]};
        border-width: 0 2px 2px 0;
        transform: translate(-50%, -60%) rotate(45deg);
        transition: border-color 0.3s ease, opacity 0.3s ease;
        transform-origin: center;
    }

    visibility: hidden;

    &:hover {
        visibility: visible;
        opacity: 0.7;
    }

    &:checked {
        visibility: visible;
        opacity: 1 !important;
    }

    &:checked::before {
        background-color: ${e.vars.palette.accent.main};
    }

    &:checked::after {
        border-color: ${e.vars.palette.grey[300]};
    }
`),ec=(0,C.Ay)(D.hJ)(({theme:e})=>`
    border: 2px solid ${e.vars.palette.accent.main};
    border-radius: 4px;
    pointer-events: none;
`)},38242:(e,t,i)=>{"use strict";i.d(t,{Y:()=>a});var l=i(58206),r=i(81278),s=i(55729),o=i(43678);let a=e=>{let t=(0,r.useRouter)();(0,s.useEffect)(()=>{(0,l.ho)()||((0,o.iN)(e),t.push("/"))},[t,e])}},70021:(e,t,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/large-files",function(){return i(2779)}])}},e=>{e.O(0,[3771,362,5147,4888,1448,1606,1112,1840,45,636,6593,8792],()=>e(e.s=70021)),_N_E=e.O()}]);