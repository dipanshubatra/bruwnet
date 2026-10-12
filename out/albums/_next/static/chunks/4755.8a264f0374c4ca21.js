"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4755],{1818:(e,t,i)=>{i.d(t,{T:()=>k});var a,s,n,r,o,l,d,h=i(35035),u=i(35344),c=i(48360),m=i(29222),p=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},v=(e,t,i)=>(p(e,t,"read from private field"),i?i.call(e):t.get(e)),E=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},b=(e,t,i,a)=>(p(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let g="tooltipplacement",f="disabled",A="notooltip";class k extends m.Au.HTMLElement{constructor(){if(super(),E(this,l),E(this,a,void 0),this.preventClick=!1,this.tooltipEl=null,E(this,s,e=>{this.preventClick||this.handleClick(e),setTimeout(v(this,n),0)}),E(this,n,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),E(this,r,e=>{let{key:t}=e;this.keysUsed.includes(t)?this.preventClick||this.handleClick(e):this.removeEventListener("keyup",v(this,r))}),E(this,o,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",v(this,r)):this.addEventListener("keyup",v(this,r),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=(0,c.kg)(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",g,h.Ex.MEDIA_CONTROLLER,h.GC.MEDIA_LANG]}enable(){this.addEventListener("click",v(this,s)),this.addEventListener("keydown",v(this,o)),this.tabIndex=0}disable(){this.removeEventListener("click",v(this,s)),this.removeEventListener("keydown",v(this,o)),this.removeEventListener("keyup",v(this,r)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var s,r,o,l,d;e===h.Ex.MEDIA_CONTROLLER?(t&&(null==(r=null==(s=v(this,a))?void 0:s.unassociateElement)||r.call(s,this),b(this,a,null)),i&&this.isConnected&&(b(this,a,null==(o=this.getRootNode())?void 0:o.getElementById(i)),null==(d=null==(l=v(this,a))?void 0:l.associateElement)||d.call(l,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===g&&this.tooltipEl&&i!==t?this.tooltipEl.placement=i:e===h.GC.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),v(this,n).call(this)}connectedCallback(){var e,t,i;let{style:s}=(0,c.aQ)(this.shadowRoot,":host");s.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let n=this.getAttribute(h.Ex.MEDIA_CONTROLLER);n&&(b(this,a,null==(e=this.getRootNode())?void 0:e.getElementById(n)),null==(i=null==(t=v(this,a))?void 0:t.associateElement)||i.call(t,this)),m.Au.customElements.whenDefined("media-tooltip").then(()=>{var e,t;return(e=l,t=d,p(this,e,"access private method"),t).call(this)})}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=v(this,a))?void 0:e.unassociateElement)||t.call(e,this),b(this,a,null),this.removeEventListener("mouseenter",v(this,n)),this.removeEventListener("focus",v(this,n)),this.removeEventListener("click",v(this,s))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return(0,c.vT)(this,g)}set tooltipPlacement(e){(0,c.tA)(this,g,e)}get mediaController(){return(0,c.vT)(this,h.Ex.MEDIA_CONTROLLER)}set mediaController(e){(0,c.tA)(this,h.Ex.MEDIA_CONTROLLER,e)}get disabled(){return(0,c.Y_)(this,f)}set disabled(e){(0,c.QW)(this,f,e)}get noTooltip(){return(0,c.Y_)(this,A)}set noTooltip(e){(0,c.QW)(this,A,e)}handleClick(e){}}a=new WeakMap,s=new WeakMap,n=new WeakMap,r=new WeakMap,o=new WeakMap,l=new WeakSet,d=function(){this.addEventListener("mouseenter",v(this,n)),this.addEventListener("focus",v(this,n)),this.addEventListener("click",v(this,s));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},k.shadowRootOptions={mode:"open"},k.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      slot[name="icon"] {
        display: inline-flex;
        align-items: center;
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${u.A.shadowRootOptions.mode}">
          ${u.A.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `},k.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},k.getTooltipContentHTML=function(){return""},m.Au.customElements.get("media-chrome-button")||m.Au.customElements.define("media-chrome-button",k)},4857:(e,t,i)=>{function a(e){return null==e?void 0:e.map(n).join(" ")}function s(e){return null==e?void 0:e.split(/\s+/).map(r)}function n(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function r(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function o(e){return null==e?void 0:e.map(d).join(" ")}function l(e){return null==e?void 0:e.split(/\s+/).map(h)}function d(e){if(e){let{id:t,kind:i,language:a,label:s}=e;return[t,i,a,s].filter(e=>null!=e).join(":")}}function h(e){if(e){let[t,i,a,s]=e.split(":");return{id:t,kind:i,language:a,label:s}}}function u(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}i.d(t,{Br:()=>o,MT:()=>s,SF:()=>a,cb:()=>c,gf:()=>u,j3:()=>l});let c=e=>new Promise(t=>setTimeout(t,e))},11993:(e,t,i)=>{i.d(t,{A:()=>n});var a=i(32171),s=i(6029);let n=(0,a.A)((0,s.jsx)("path",{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 18H4V8h16z"}),"CalendarToday")},17202:(e,t,i)=>{i.d(t,{A:()=>n});var a=i(32171),s=i(6029);let n=(0,a.A)((0,s.jsx)("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"}),"Done")},29222:(e,t,i)=>{i.d(t,{Al:()=>c,Au:()=>u});class a{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class s extends a{}class n extends s{constructor(){super(...arguments),this.role=null}}class r{observe(){}unobserve(){}disconnect(){}}let o={createElement:function(){return new l.HTMLElement},createElementNS:function(){return new l.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},l={ResizeObserver:r,document:o,Node:s,Element:n,HTMLElement:class extends n{constructor(){super(...arguments),this.innerHTML=""}get content(){return new l.DocumentFragment}},DocumentFragment:class extends a{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e}),DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},d="global"in globalThis&&(null==globalThis?void 0:globalThis.global)===globalThis||"u"<typeof window||void 0===window.customElements,h=Object.keys(l).every(e=>e in globalThis),u=d&&!h?l:globalThis,c=d&&!h?o:globalThis.document},31247:(e,t,i)=>{i.d(t,{A:()=>_});var a=i(55729),s=i(50212),n=i(26409),r=i(65231),o=i(44331),l=i(64495),d=i(9460),h=i(20415),u=i(50380),c=i(32769),m=i(43263),p=i(5085),v=i(56395),E=i(24713),b=i(24595);let g=(0,b.A)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","vertical","withChildren","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),f=(0,b.A)("MuiListItemIcon",["root","alignItemsFlexStart"]),A=(0,b.A)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);var k=i(3513),y=i(56578),w=i(30767);function T(e){return(0,w.Ay)("MuiMenuItem",e)}let C=(0,b.A)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var I=i(6029);let M=(0,o.Ay)(u.A,{shouldForwardProp:e=>(0,r.A)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,i.dense&&t.dense,i.divider&&t.divider,!i.disableGutters&&t.gutters]}})((0,l.A)(({theme:e})=>({...e.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${C.selected}`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,(e.vars||e).palette.action.selectedOpacity),[`&.${C.focusVisible}`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.focusOpacity}`)}},[`&.${C.selected}:hover`]:{backgroundColor:e.alpha((e.vars||e).palette.primary.main,`${(e.vars||e).palette.action.selectedOpacity} + ${(e.vars||e).palette.action.hoverOpacity}`),"@media (hover: none)":{backgroundColor:e.alpha((e.vars||e).palette.primary.main,(e.vars||e).palette.action.selectedOpacity)}},[`&.${C.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${C.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${g.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${g.inset}`]:{marginLeft:52},[`& .${A.root}`]:{marginTop:0,marginBottom:0},[`& .${A.inset}`]:{paddingLeft:36},[`& .${f.root}`]:{minWidth:36},variants:[{props:({ownerState:e})=>!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:e})=>!e.dense,style:{[e.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:({ownerState:e})=>e.dense,style:{minHeight:32,paddingTop:4,paddingBottom:4,...e.typography.body2,[`& .${f.root} svg`]:{fontSize:"1.25rem"}}}]}))),_=a.forwardRef(function(e,t){let i,r=(0,d.b)({props:e,name:"MuiMenuItem"}),{autoFocus:o=!1,component:l="li",dense:u=!1,divider:b=!1,disableGutters:g=!1,focusVisibleClassName:f,role:A="menuitem",tabIndex:w,className:C,..._}=r,S="menuitemcheckbox"===A||"menuitemradio"===A?!!r.selected:void 0,L=(0,y.x)(),R=a.useContext(h.A),x=a.useMemo(()=>({dense:u||R.dense||!1,disableGutters:g}),[R.dense,u,g]),D=(0,k.W)(),N=(0,v.A)(),P=D.suppressInitialFocusVisible,O=D.itemsFocusableWhenDisabled,U=a.useRef(null);(0,c.A)(()=>{o&&U.current&&(0,m.A)(U.current,L)},[o]);let G={...r,dense:x.dense,divider:b,disableGutters:g},W=(e=>{let{disabled:t,dense:i,divider:a,disableGutters:s,selected:r,classes:o}=e,l=(0,n.A)({root:["root",i&&"dense",t&&"disabled",!s&&"gutters",a&&"divider",r&&"selected"]},T,o);return{...o,...l}})(r),{root:H,...$}=W,B=(0,E.bE)({id:N,ref:t,disabled:r.disabled,focusableWhenDisabled:O,selected:r.selected}),V=(0,p.A)(U,B.ref);return void 0!==w?i=w:"selectedMenu"===D.variant?i=B.tabIndex:(!r.disabled||O)&&(i=-1),(0,I.jsx)(h.A.Provider,{value:x,children:(0,I.jsx)(M,{ref:V,role:A,"aria-checked":S,tabIndex:i,component:l,internalNativeButton:!1,focusableWhenDisabled:O,suppressFocusVisible:P,focusVisibleClassName:(0,s.A)(W.focusVisible,f),className:(0,s.A)(W.root,C),..._,ownerState:G,classes:$})})})},31910:(e,t,i)=>{i.d(t,{A:()=>n});var a=i(32171),s=i(6029);let n=(0,a.A)((0,s.jsx)("path",{d:"M15 8v8H5V8zm1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1"}),"VideocamOutlined")},35035:(e,t,i)=>{i.d(t,{CY:()=>m,Ex:()=>s,GC:()=>o,LJ:()=>n,Np:()=>c,T$:()=>l,U4:()=>p,Up:()=>h,a8:()=>a,br:()=>v,lr:()=>u,nJ:()=>d});let a={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},s={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},n={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},r=Object.entries(n),o=r.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),l=r.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(l).reduce((e,[t,i])=>{let a=o[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});let d=Object.entries(o).reduce((e,[t,i])=>{let a=l[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),h={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},u={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},c={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},m={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},p={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},v={INLINE:"inline",FULLSCREEN:"fullscreen",PICTURE_IN_PICTURE:"picture-in-picture"}},35344:(e,t,i)=>{i.d(t,{A:()=>l});var a=i(48360),s=i(29222);let n="placement",r="bounds";class o extends s.Au.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!(0,a.J9)(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t)return void this.style.removeProperty("--media-tooltip-offset-x");let i=getComputedStyle(this),s=null!=(e=(0,a.CQ)(this,"#"+this.bounds))?e:(0,a.Bk)(this);if(!s)return;let{x:n,width:r}=s.getBoundingClientRect(),{x:o,width:l}=this.getBoundingClientRect(),d=i.getPropertyValue("--media-tooltip-offset-x"),h=d?parseFloat(d.replace("px","")):0,u=i.getPropertyValue("--media-tooltip-container-margin"),c=u?parseFloat(u.replace("px","")):0,m=o-n+h-c,p=o+l-(n+r)+h+c;m<0?this.style.setProperty("--media-tooltip-offset-x",`${m}px`):p>0?this.style.setProperty("--media-tooltip-offset-x",`${p}px`):this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=(0,a.kg)(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[n,r]}get placement(){return(0,a.vT)(this,n)}set placement(e){(0,a.tA)(this,n,e)}get bounds(){return(0,a.vT)(this,r)}set bounds(e){(0,a.tA)(this,r,e)}}o.shadowRootOptions={mode:"open"},o.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `},s.Au.customElements.get("media-tooltip")||s.Au.customElements.define("media-tooltip",o);var l=o},35875:(e,t,i)=>{i.d(t,{A:()=>n});var a=i(32171),s=i(6029);let n=(0,a.A)((0,s.jsx)("path",{d:"M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"}),"FullscreenExitOutlined")},36571:(e,t,i)=>{i.d(t,{A:()=>v});var a=i(55729),s=i(50212),n=i(26409),r=i(44331),o=i(64495),l=i(9460),d=i(24595),h=i(30767);function u(e){return(0,h.Ay)("MuiDialogContent",e)}(0,d.A)("MuiDialogContent",["root","dividers"]);var c=i(5112),m=i(6029);let p=(0,r.Ay)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,i.dividers&&t.dividers]}})((0,o.A)(({theme:e})=>({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px",variants:[{props:({ownerState:e})=>e.dividers,style:{padding:"16px 24px",borderTop:`1px solid ${(e.vars||e).palette.divider}`,borderBottom:`1px solid ${(e.vars||e).palette.divider}`}},{props:({ownerState:e})=>!e.dividers,style:{[`.${c.A.root} + &`]:{paddingTop:0}}}]}))),v=a.forwardRef(function(e,t){let i=(0,l.b)({props:e,name:"MuiDialogContent"}),{className:a,dividers:r=!1,...o}=i,d={...i,dividers:r},h=(e=>{let{classes:t,dividers:i}=e;return(0,n.A)({root:["root",i&&"dividers"]},u,t)})(d);return(0,m.jsx)(p,{className:(0,s.A)(h.root,a),ownerState:d,ref:t,...o})})},43366:(e,t,i)=>{i.d(t,{A:()=>n});var a=i(32171),s=i(6029);let n=(0,a.A)([(0,s.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7M7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9"},"0"),(0,s.jsx)("circle",{cx:"12",cy:"9",r:"2.5"},"1")],"LocationOnOutlined")},46427:(e,t,i)=>{i.d(t,{A:()=>w});var a=i(55729),s=i(50212),n=i(26409),r=i(3161),o=i(8591),l=i(44331),d=i(62254),h=i(64495),u=i(48313),c=i(9460),m=i(64604),p=i(24595),v=i(30767);function E(e){return(0,v.Ay)("MuiLink",e)}let b=(0,p.A)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var g=i(14505),f=i(51987),A=i(6029);let k={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},y=(0,l.Ay)(m.A,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,t[`underline${(0,o.A)(i.underline)}`],"button"===i.component&&t.button]}})((0,h.A)(({theme:e})=>({variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:({underline:e,ownerState:t})=>"always"===e&&"inherit"!==t.color,style:{textDecorationColor:"var(--Link-underlineColor)"}},{props:({underline:e,ownerState:t})=>"always"===e&&"inherit"===t.color,style:e.colorSpace?{textDecorationColor:e.alpha("currentColor",.4)}:null},...Object.entries(e.palette).filter((0,u.A)()).map(([t])=>({props:{underline:"always",color:t},style:{"--Link-underlineColor":e.alpha((e.vars||e).palette[t].main,.4)}})),{props:{underline:"always",color:"textPrimary"},style:{"--Link-underlineColor":e.alpha((e.vars||e).palette.text.primary,.4)}},{props:{underline:"always",color:"textSecondary"},style:{"--Link-underlineColor":e.alpha((e.vars||e).palette.text.secondary,.4)}},{props:{underline:"always",color:"textDisabled"},style:{"--Link-underlineColor":(e.vars||e).palette.text.disabled}},{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${b.focusVisible}`]:{outline:"auto"}}}]}))),w=a.forwardRef(function(e,t){let i=(0,c.b)({props:e,name:"MuiLink"}),l=(0,d.A)(),{className:h,color:u="primary",component:m="a",onBlur:p,onFocus:v,TypographyClasses:b,underline:w="always",variant:T="inherit",sx:C,...I}=i,[M,_]=a.useState(!1),S={...i,color:u,component:m,focusVisible:M,underline:w,variant:T},L=(e=>{let{classes:t,component:i,focusVisible:a,underline:s}=e,r={root:["root",`underline${(0,o.A)(s)}`,"button"===i&&"button",a&&"focusVisible"]};return(0,n.A)(r,E,t)})(S);return(0,A.jsx)(y,{color:u,className:(0,s.A)(L.root,h),classes:b,component:m,onBlur:e=>{(0,r.A)(e.target)||_(!1),p&&p(e)},onFocus:e=>{(0,r.A)(e.target)&&_(!0),v&&v(e)},ref:t,ownerState:S,variant:T,...I,sx:[...void 0===k[u]?[{color:u}]:[],...Array.isArray(C)?C:[C]],style:{...I.style,..."always"===w&&"inherit"!==u&&!k[u]&&{"--Link-underlineColor":(({theme:e,ownerState:t})=>{let i=t.color;if("colorSpace"in e&&e.colorSpace){let a=(0,g.Yn)(e,`palette.${i}.main`)||(0,g.Yn)(e,`palette.${i}`)||t.color;return e.alpha(a,.4)}let a=(0,g.Yn)(e,`palette.${i}.main`,!1)||(0,g.Yn)(e,`palette.${i}`,!1)||t.color,s=(0,g.Yn)(e,`palette.${i}.mainChannel`)||(0,g.Yn)(e,`palette.${i}Channel`);return"vars"in e&&s?`rgba(${s} / 0.4)`:(0,f.X4)(a,.4)})({theme:l,ownerState:S})}}})})},48360:(e,t,i)=>{i.d(t,{Bk:()=>n,CQ:()=>h,DI:()=>m,Ek:()=>o,J9:()=>c,QW:()=>f,Vw:()=>v,Y_:()=>g,aQ:()=>p,bq:()=>function e(t=document){var i;let a=null==t?void 0:t.activeElement;return a?null!=(i=e(a.shadowRoot))?i:a:null},dm:()=>E,kg:()=>s,l5:()=>u,pK:()=>b,qg:()=>d,tA:()=>k,u0:()=>l,vT:()=>A,xf:()=>r});var a=i(35035);function s(e){let t={};for(let i of e)t[i.name]=i.value;return t}function n(e){var t;return null!=(t=r(e))?t:h(e,"media-controller")}function r(e){var t;let{MEDIA_CONTROLLER:i}=a.Ex,s=e.getAttribute(i);if(s)return null==(t=u(e))?void 0:t.getElementById(s)}let o=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},l=(e,t)=>{let i,a;return(i=`slot[name="${t}"]`,!(a=e.shadowRoot.querySelector(i))?[]:a.children)[0]},d=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||d(e,t.getRootNode().host)),h=(e,t)=>{if(!e)return null;let i=e.closest(t);return i||h(e.getRootNode().host,t)};function u(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function c(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let s=e;for(;s&&t>0;){let e=getComputedStyle(s);if(i&&"0"===e.opacity||a&&"hidden"===e.visibility||"none"===e.display)return!1;s=s.parentElement,t--}return!0}function m(e,t,i,a){let s=a.x-i.x,n=a.y-i.y,r=s*s+n*n;return 0===r?0:Math.max(0,Math.min(1,((e-i.x)*s+(t-i.y)*n)/r))}function p(e,t){let i=function(e,t){var i,a;let s;for(s of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=s.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t);return i||v(e,t)}function v(e,t){var i,a;let s=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],n=null==s?void 0:s[s.length-1];if(!(null==n?void 0:n.sheet))return console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};let r=null==n?void 0:n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length);return null==(a=n.sheet.cssRules)?void 0:a[r]}function E(e,t,i=NaN){let a=e.getAttribute(t);return null!=a?+a:i}function b(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}E(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function g(e,t){return e.hasAttribute(t)}function f(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}g(e,t)!=i&&e.toggleAttribute(t,i)}function A(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function k(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;A(e,t,void 0)!==a&&e.setAttribute(t,a)}},50055:(e,t,i)=>{i.d(t,{M:()=>m});var a,s,n,r,o,l,d=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},h=(e,t,i)=>(d(e,t,"read from private field"),i?i.call(e):t.get(e)),u=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},c=(e,t,i,a)=>(d(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class m{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){u(this,o),u(this,a,void 0),u(this,s,void 0),u(this,n,void 0),u(this,r,new Set),c(this,a,e),c(this,s,t),c(this,n,new Set(i))}[Symbol.iterator](){return h(this,o,l).values()}get length(){return h(this,o,l).size}get value(){var e;return null!=(e=[...h(this,o,l)].join(" "))?e:""}set value(e){var t;e!==this.value&&(c(this,r,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...h(this,o,l)][e]}values(){return h(this,o,l).values()}forEach(e,t){h(this,o,l).forEach(e,t)}add(...e){var t,i;e.forEach(e=>h(this,r).add(e)),(""!==this.value||(null==(t=h(this,a))?void 0:t.hasAttribute(`${h(this,s)}`)))&&(null==(i=h(this,a))||i.setAttribute(`${h(this,s)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>h(this,r).delete(e)),null==(t=h(this,a))||t.setAttribute(`${h(this,s)}`,`${this.value}`)}contains(e){return h(this,o,l).has(e)}toggle(e,t){if(void 0!==t)if(t)return this.add(e),!0;else return this.remove(e),!1;return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}a=new WeakMap,s=new WeakMap,n=new WeakMap,r=new WeakMap,o=new WeakSet,l=function(){return h(this,r).size?h(this,r):h(this,n)}},56711:(e,t,i)=>{let a,s;i.d(t,{aH:()=>a8});var n,r,o,l,d,h,u,c,m,p,v,E,b,g,f,A,k,y,w,T,C,I,M,_,S,L,R,x,D,N,P,O,U,G,W,H,$,B,V,q,Q,F,j,Y,K,z,Z,X,J,ee,et,ei,ea,es,en,er,eo,el,ed,eh,eu,ec,em,ep,ev,eE,eb,eg,ef,eA,ek,ey,ew,eT,eC,eI,eM,e_,eS,eL,eR,ex,eD,eN,eP,eO,eU,eG,eW,eH,e$,eB,eV,eq,eQ,eF,ej,eY,eK,ez,eZ,eX,eJ,e0,e1,e2,e5,e3,e4,e8,e7,e9,e6,te,tt,ti,ta,ts,tn,tr,to,tl,td,th,tu,tc,tm,tp,tv,tE,tb,tg,tf,tA,tk,ty,tw=i(35035),tT=i(4857),tC=i(68193);let tI=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],tM=e=>{if(!(0,tT.gf)(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),s=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>{let i;return e&&(i=1===e?(0,tC.t)(tI[t].singular):(0,tC.t)(tI[t].plural),`${e} ${i}`)}).filter(e=>e).join(", ");return i?(0,tC.t)("{time} remaining",{time:s}):s};function t_(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),s=Math.floor(e/60%60),n=Math.floor(e/3600),r=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(n=s=a="0"),s=(((n=n>0||o>0?n+":":"")||r>=10)&&s<10?"0"+s:s)+":",(i?"-":"")+n+s+(a=a<10?"0"+a:a)}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});var tS=i(29222),tL=i(82589),tR=i(48360),tx=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tD=(e,t,i)=>(tx(e,t,"read from private field"),i?i.call(e):t.get(e)),tN=(e,t,i,a)=>(tx(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class tP extends tS.Au.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,n,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=(0,tR.kg)(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[tw.Ex.MEDIA_CONTROLLER,tw.GC.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,s,r,o,l;e===tw.Ex.MEDIA_CONTROLLER&&(t&&(null==(s=null==(a=tD(this,n))?void 0:a.unassociateElement)||s.call(a,this),tN(this,n,null)),i&&this.isConnected&&(tN(this,n,null==(r=this.getRootNode())?void 0:r.getElementById(i)),null==(l=null==(o=tD(this,n))?void 0:o.associateElement)||l.call(o,this)))}connectedCallback(){var e,t,i,a;let s;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),tN(this,n,(i=this,(s=i.getAttribute(tw.Ex.MEDIA_CONTROLLER))?null==(a=i.getRootNode())?void 0:a.getElementById(s):(0,tR.CQ)(i,"media-controller"))),this.getAttribute(tw.Ex.MEDIA_CONTROLLER)&&(null==(t=null==(e=tD(this,n))?void 0:e.associateElement)||t.call(e,this)),tD(this,n)&&(tD(this,n).addEventListener("pointerdown",this),tD(this,n).addEventListener("click",this),tD(this,n).hasAttribute("tabindex")||(tD(this,n).tabIndex=0))}disconnectedCallback(){var e,t,i,a;this.getAttribute(tw.Ex.MEDIA_CONTROLLER)&&(null==(t=null==(e=tD(this,n))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=tD(this,n))||i.removeEventListener("pointerdown",this),null==(a=tD(this,n))||a.removeEventListener("click",this),tN(this,n,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:s,width:n,height:r}=this.getBoundingClientRect(),o=t-a,l=i-s;if(o<0||l<0||o>n||l>r||0===n&&0===r)return;let d=this._pointerType||"mouse";if(this._pointerType=void 0,d===tw.Np.TOUCH)return void this.handleTap(e);if(d===tw.Np.MOUSE||d===tw.Np.PEN)return void this.handleMouseClick(e)}}}get mediaPaused(){return(0,tR.Y_)(this,tw.GC.MEDIA_PAUSED)}set mediaPaused(e){(0,tR.QW)(this,tw.GC.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?tw.a8.MEDIA_PLAY_REQUEST:tw.a8.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new tS.Au.CustomEvent(t,{composed:!0,bubbles:!0}))}}n=new WeakMap,tP.shadowRootOptions={mode:"open"},tP.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},tS.Au.customElements.get("media-gesture-receiver")||tS.Au.customElements.define("media-gesture-receiver",tP);var tO=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tU=(e,t,i)=>(tO(e,t,"read from private field"),i?i.call(e):t.get(e)),tG=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tW=(e,t,i,a)=>(tO(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),tH=(e,t,i)=>(tO(e,t,"access private method"),i);let t$="audio",tB="autohide",tV="breakpoints",tq="gesturesdisabled",tQ="keyboardcontrol",tF="noautohide",tj="userinactive",tY="autohideovercontrols",tK=Object.values(tw.GC);function tz(e,t){var i,a,s;if(!e.isConnected)return;let n=Object.fromEntries((null!=(i=e.getAttribute(tV))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),r=(a=n,s=t,Object.keys(a).filter(e=>s>=parseInt(a[e]))),o=!1;if(Object.keys(n).forEach(t=>{if(r.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),o=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),o=!0)}),o){let t=new CustomEvent(tw.T$.BREAKPOINTS_CHANGE,{detail:r});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(tw.T$.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class tZ extends tS.Au.HTMLElement{constructor(){if(super(),tG(this,p),tG(this,E),tG(this,g),tG(this,A),tG(this,y),tG(this,r,void 0),tG(this,o,0),tG(this,l,null),tG(this,d,null),tG(this,h,void 0),this.breakpointsComputed=!1,tG(this,u,e=>{let t=this.media;for(let i of e)if("childList"===i.type){for(let e of i.removedNodes){if("media"!=e.slot||i.target!=this)continue;let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of i.addedNodes)e===t&&this.handleMediaUpdated(t)}}),tG(this,c,!1),tG(this,m,e=>{tU(this,c)||(setTimeout(()=>{tz(e.target,e.contentRect.width),tW(this,c,!1)},0),tW(this,c,!0))}),tG(this,T,void 0),tG(this,C,()=>{if(!tU(this,T).assignedElements({flatten:!0}).length){tU(this,l)&&this.mediaUnsetCallback(tU(this,l));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=(0,tR.kg)(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}tW(this,r,new MutationObserver(tU(this,u)))}static get observedAttributes(){return[tB,tq].concat(tK).filter(e=>![tw.GC.MEDIA_RENDITION_LIST,tw.GC.MEDIA_AUDIO_TRACK_LIST,tw.GC.MEDIA_CHAPTERS_CUES,tw.GC.MEDIA_WIDTH,tw.GC.MEDIA_HEIGHT,tw.GC.MEDIA_ERROR,tw.GC.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==tB&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(tW(this,l,e),e.localName.includes("-")&&await tS.Au.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;tU(this,r).observe(this,{childList:!0,subtree:!0}),(0,tL.v)(this,tU(this,m));let t=null!=this.getAttribute(t$)?(0,tC.t)("audio player"):(0,tC.t)("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(tj,""),tz(this,this.getBoundingClientRect().width);let i=this.querySelector(":scope > slot[slot=media]");i&&(tW(this,T,i),tU(this,T).addEventListener("slotchange",tU(this,C))),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=tS.Au.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;(0,tL.u)(this,tU(this,m)),clearTimeout(tU(this,d)),tU(this,r).disconnect(),this.media&&this.mediaUnsetCallback(this.media),null==(e=tS.Au.window)||e.removeEventListener("mouseup",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointermove",this),this.removeEventListener("pointerup",this),this.removeEventListener("mouseleave",this),this.removeEventListener("keyup",this),tU(this,T)&&(tU(this,T).removeEventListener("slotchange",tU(this,C)),tW(this,T,null)),tW(this,c,!1)}mediaSetCallback(e){}mediaUnsetCallback(e){tW(this,l,null)}handleEvent(e){switch(e.type){case"pointerdown":tW(this,o,e.timeStamp);break;case"pointermove":tH(this,p,v).call(this,e);break;case"pointerup":tH(this,E,b).call(this,e);break;case"mouseleave":tH(this,g,f).call(this);break;case"mouseup":this.removeAttribute(tQ);break;case"keyup":tH(this,y,w).call(this),this.setAttribute(tQ,"")}}set autohide(e){let t=Number(e);tW(this,h,isNaN(t)?0:t)}get autohide(){return(void 0===tU(this,h)?2:tU(this,h)).toString()}get breakpoints(){return(0,tR.vT)(this,tV)}set breakpoints(e){(0,tR.tA)(this,tV,e)}get audio(){return(0,tR.Y_)(this,t$)}set audio(e){(0,tR.QW)(this,t$,e)}get gesturesDisabled(){return(0,tR.Y_)(this,tq)}set gesturesDisabled(e){(0,tR.QW)(this,tq,e)}get keyboardControl(){return(0,tR.Y_)(this,tQ)}set keyboardControl(e){(0,tR.QW)(this,tQ,e)}get noAutohide(){return(0,tR.Y_)(this,tF)}set noAutohide(e){(0,tR.QW)(this,tF,e)}get autohideOverControls(){return(0,tR.Y_)(this,tY)}set autohideOverControls(e){(0,tR.QW)(this,tY,e)}get userInteractive(){return(0,tR.Y_)(this,tj)}set userInteractive(e){(0,tR.QW)(this,tj,e)}}r=new WeakMap,o=new WeakMap,l=new WeakMap,d=new WeakMap,h=new WeakMap,u=new WeakMap,c=new WeakMap,m=new WeakMap,p=new WeakSet,v=function(e){if("mouse"!==e.pointerType&&e.timeStamp-tU(this,o)<250)return;tH(this,A,k).call(this),clearTimeout(tU(this,d));let t=this.hasAttribute(tY);([this,this.media].includes(e.target)||t)&&tH(this,y,w).call(this)},E=new WeakSet,b=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(tj);[this,this.media].includes(e.target)&&t?tH(this,g,f).call(this):tH(this,y,w).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&tH(this,y,w).call(this)},g=new WeakSet,f=function(){if(0>tU(this,h)||this.hasAttribute(tj))return;this.setAttribute(tj,"");let e=new tS.Au.CustomEvent(tw.T$.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},A=new WeakSet,k=function(){if(!this.hasAttribute(tj))return;this.removeAttribute(tj);let e=new tS.Au.CustomEvent(tw.T$.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},y=new WeakSet,w=function(){tH(this,A,k).call(this),clearTimeout(tU(this,d));let e=parseInt(this.autohide);e<0||tW(this,d,setTimeout(()=>{tH(this,g,f).call(this)},1e3*e))},T=new WeakMap,C=new WeakMap,tZ.shadowRootOptions={mode:"open"},tZ.getTemplateHTML=function(e){return`
    <style>
      
      :host([${tw.GC.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${t$}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${t$}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${t$}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${t$}])[${tq}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${t$}])[${tq}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${t$}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${t$}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${t$}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${t$}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${tF}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${tj}]:not([${tw.GC.MEDIA_PAUSED}]):not([${tw.GC.MEDIA_IS_AIRPLAYING}]):not([${tw.GC.MEDIA_IS_CASTING}]):not([${t$}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${tF}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${tj}]:not([${tF}]):not([${tw.GC.MEDIA_PAUSED}]):not([${tw.GC.MEDIA_IS_CASTING}]):not([${t$}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${tj}][${tY}]:not([${tF}]):not([${tw.GC.MEDIA_PAUSED}]):not([${tw.GC.MEDIA_IS_CASTING}]):not([${t$}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${t$}])[${tw.GC.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${tP.shadowRootOptions.mode}">
          ${tP.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `},tS.Au.customElements.get("media-container")||tS.Au.customElements.define("media-container",tZ);var tX=i(50055),tJ=i(88687);let t0="exitFullscreen"in tS.Al?"exitFullscreen":"webkitExitFullscreen"in tS.Al?"webkitExitFullscreen":"webkitCancelFullScreen"in tS.Al?"webkitCancelFullScreen":void 0,t1="fullscreenElement"in tS.Al?"fullscreenElement":"webkitFullscreenElement"in tS.Al?"webkitFullscreenElement":void 0,t2="fullscreenEnabled"in tS.Al?"fullscreenEnabled":"webkitFullscreenEnabled"in tS.Al?"webkitFullscreenEnabled":void 0,t5=()=>{var e,t;return a||(a=null==(t=null==(e=tS.Al)?void 0:e.createElement)?void 0:t.call(e,"video"))},t3=async(e=t5())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([t4(e,i.signal),t8(e,t)]);return i.abort(),a},t4=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),t8=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await (0,tT.cb)(10)}return e.volume!==t},t7=/.*Version\/.*Safari\/.*/.test(tS.Au.navigator.userAgent),t9=(e=t5())=>(!tS.Au.matchMedia("(display-mode: standalone)").matches||!t7)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),t6=(e=t5())=>(e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[t2])||i&&"webkitSupportsFullscreen"in i})({documentElement:tS.Al,media:e}),ie=t6(),it=t9(),ii=!!tS.Au.WebKitPlaybackTargetAvailabilityEvent,ia=!!tS.Au.chrome,is=e=>(0,tJ.aI)(e.media,e=>[tw.Up.SUBTITLES,tw.Up.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),ir=e=>(0,tJ.aI)(e.media,e=>e.mode===tw.lr.SHOWING&&[tw.Up.SUBTITLES,tw.Up.CAPTIONS].includes(e.kind)),io=(e,t)=>{let i=is(e),a=ir(e),s=!!a.length;if(i.length){if(!1===t||s&&!0!==t)(0,tJ.ip)(tw.lr.DISABLED,i,a);else if(!0===t||!s&&!1!==t){let t=i[0],{options:s}=e;if(!(null==s?void 0:s.noSubtitlesLangPref)){let e=tS.Au.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...tS.Au.navigator.languages]:tS.Au.navigator.languages,s=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));s[0]&&(t=s[0])}let{language:n,label:r,kind:o}=t;(0,tJ.ip)(tw.lr.DISABLED,i,a),(0,tJ.ip)(tw.lr.SHOWING,i,[{language:n,label:r,kind:o}])}}},il=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?id(e,t):Object.entries(e).every(([e,i])=>e in t&&il(i,t[e])))),id=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>il(e,t[i])))},ih=Object.values(tw.U4),iu=t3().then(e=>s=e),ic=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof tS.Au.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=tS.Au.customElements.get(t);i&&e instanceof i||(await tS.Au.customElements.whenDefined(t),tS.Au.customElements.upgrade(e))}))},im=new tS.Au.DOMParser,ip={mediaError:{get(e,t){let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==i?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==(i=null==a?void 0:a.error)?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;let{media:s}=e;if((null==t?void 0:t.type)!=="playing")return null!=(a=null==(i=null==s?void 0:s.error)?void 0:i.message)?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;!i||Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i,options:{noMutedPref:a}={}}=t;if(i){i.muted=e;try{let t=null!==tS.Au.localStorage.getItem("media-chrome-pref-muted"),s=i.hasAttribute("muted");if(a){t&&tS.Au.localStorage.removeItem("media-chrome-pref-muted");return}if(s&&!t)return;tS.Au.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(e){console.debug("Error setting muted pref",e)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:i}}=t,{media:a}=t;if(a&&!a.muted&&!i)try{let i="true"===tS.Au.localStorage.getItem("media-chrome-pref-muted");ip.mediaMuted.set(i,t),e(i)}catch(e){console.debug("Error getting muted pref",e)}}]},mediaLoop:{get(e){let{media:t}=e;return null==t?void 0:t.loop},set(e,t){let{media:i}=t;i&&(i.loop=e)},mediaEvents:["medialooprequest"]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i,options:{noVolumePref:a}={}}=t;if(i){try{null==e?tS.Au.localStorage.removeItem("media-chrome-pref-volume"):i.hasAttribute("muted")||a||tS.Au.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){console.debug("Error setting volume pref",e)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let{media:i}=t;if(!i)return;let a=tS.Au.localStorage.getItem("media-chrome-pref-volume");if(null==a)return;ip.mediaVolume.set(+a,t),e(+a)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&(0,tT.gf)(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),s=i.seekable.end(i.seekable.length-1);if(a||s)return[Number(a.toFixed(3)),Number(s.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[tw.U4.LIVE,tw.U4.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:s}=t;if(ih.includes(s))return s===tw.U4.UNKNOWN?a:s;let n=t.duration;return n===1/0?tw.U4.LIVE:Number.isFinite(n)?tw.U4.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return NaN;let{targetLiveWindow:i}=t,a=ip.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===tw.U4.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(ip.mediaStreamType.get(e)!==tw.U4.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let s=a.end(a.length-1)-i;return t.currentTime>=s},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>is(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>ir(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:s,options:n}=t;if(!s)return;let r=e=>{var i;n.defaultSubtitles&&(e&&![tw.Up.CAPTIONS,tw.Up.SUBTITLES].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||io(t,!0))};return s.addEventListener("loadstart",r),null==(i=s.textTracks)||i.addEventListener("addtrack",r),null==(a=s.textTracks)||a.addEventListener("removetrack",r),()=>{var e,t;s.removeEventListener("loadstart",r),null==(e=s.textTracks)||e.removeEventListener("addtrack",r),null==(t=s.textTracks)||t.removeEventListener("removetrack",r)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=(0,tJ.aI)(i,{kind:tw.Up.CHAPTERS});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e&&im.parseFromString(e,"text/html").body.textContent||e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let s=a.querySelector('track[kind="chapters"][default][src]'),n=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==s||s.addEventListener("load",e),null==n||n.addEventListener("load",e),()=>{null==s||s.removeEventListener("load",e),null==n||n.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:s}=e;if(!a||!s||!s.pictureInPictureElement)return!1;if(s.pictureInPictureElement===a)return!0;if(s.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(t=a.localName)?void 0:t.includes("-"))&&(0,tR.qg)(a,s.pictureInPictureElement);if(s.pictureInPictureElement.localName.includes("-")){let e=s.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i)if(e){if(!tS.Al.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!i.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else tS.Al.pictureInPictureElement&&tS.Al.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:s}=e;return null==(a=null==(i=null==s?void 0:s.videoRenditions)?void 0:i[null==(t=s.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>(e=>{var t;let{media:i,documentElement:a,fullscreenElement:s=i}=e;if(!i||!a)return!1;let n=(e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[t1];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===tw.br.FULLSCREEN?i:a})(e);if(!n)return!1;if(n===s||n===i)return!0;if(n.localName.includes("-")){let e=n.shadowRoot;if(!(t1 in e))return(0,tR.qg)(n,s);for(;null==e?void 0:e[t1];){if(e[t1]===s)return!0;e=null==(t=e[t1])?void 0:t.shadowRoot}}return!1})(e),set(e,t,i){var a,s;e?((e=>{var t;let{media:i,fullscreenElement:a}=e;try{let e=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(e){let i=null==(t=a[e])?void 0:t.call(a);if(i instanceof Promise)return i.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()}catch(e){console.error(e)}})(t),!i.detail||(null==(a=t.media)?void 0:a.inert)||null==(s=t.media)||s.focus()):(e=>{var t;let{documentElement:i}=e;if(t0){let e=null==(t=null==i?void 0:i[t0])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}})(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return!!(null==i?void 0:i.remote)&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&!!i.remote.state},set(e,t){var i,a;let{media:s}=t;if(s&&(!e||(null==(i=s.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=s.remote)?void 0:a.state)==="connected")){if("function"!=typeof s.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");s.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&tS.Au.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!ie||!t6(t))return tw.CY.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;return it&&t9(t)?(null==t?void 0:t.disablePictureInPicture)?tw.CY.UNAVAILABLE:void 0:tw.CY.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===s||(null==t?void 0:t.volume)==void 0)return tw.CY.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==s&&iu.then(t=>e(t?void 0:tw.CY.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return ia&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?tw.CY.UNAVAILABLE:void 0:tw.CY.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>ii?(null==t?void 0:t.availability)==="not-available"?tw.CY.UNAVAILABLE:void 0:tw.CY.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:tw.CY.UNAVAILABLE:tw.CY.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?tw.CY.UNAVAILABLE:void 0:tw.CY.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(e){let{options:{mediaLang:t}={}}=e;return null!=t?t:"en"}}},iv={[tw.a8.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,s,n;let r,o,{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=(0,tJ.aI)(l,{kind:tw.Up.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)||null==(s=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:s.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),r=i.href}}let h=e.mediaDuration.get(t),u=null==(n=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&h===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:n.text;return null!=i&&null==u&&(u=""),{mediaPreviewTime:d,mediaPreviewImage:r,mediaPreviewCoords:o,mediaPreviewChapter:u}},[tw.a8.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[tw.a8.MEDIA_PLAY_REQUEST](e,t){var i,a,s,n;let r=e.mediaStreamType.get(t)===tw.U4.LIVE,o=!(null==(i=t.options)?void 0:i.noAutoSeekToLive),l=e.mediaTargetLiveWindow.get(t)>0;if(r&&o&&!l){let i=null==(a=e.mediaSeekable.get(t))?void 0:a[1];if(i){let a=null!=(n=null==(s=t.options)?void 0:s.seekToLiveOffset)?n:0;e.mediaCurrentTime.set(i-a,t)}}e.mediaPaused.set(!1,t)},[tw.a8.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[tw.a8.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[tw.a8.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[tw.a8.MEDIA_LOOP_REQUEST](e,t,{detail:i}){let a=!!i;return e.mediaLoop.set(a,t),{mediaLoop:a}},[tw.a8.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[tw.a8.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[tw.a8.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,s;let n=null==(i=e.mediaSeekable.get(t))?void 0:i[1];if(Number.isNaN(Number(n)))return;let r=null!=(s=null==(a=t.options)?void 0:a.seekToLiveOffset)?s:0;e.mediaCurrentTime.set(n-r,t)},[tw.a8.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:s}=t,n=is(t),r=(0,tJ.C2)(i),o=null==(a=r[0])?void 0:a.language;o&&!s.noSubtitlesLangPref&&tS.Au.localStorage.setItem("media-chrome-pref-subtitles-lang",o),(0,tJ.ip)(tw.lr.SHOWING,n,r)},[tw.a8.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){let a=is(t);(0,tJ.ip)(tw.lr.DISABLED,a,null!=i?i:[])},[tw.a8.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){io(t,i)},[tw.a8.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[tw.a8.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[tw.a8.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[tw.a8.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[tw.a8.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t,i){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t,i)},[tw.a8.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[tw.a8.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[tw.a8.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[tw.a8.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};var iE=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ib=(e,t,i)=>(iE(e,t,"read from private field"),i?i.call(e):t.get(e)),ig=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},iA=(e,t,i,a)=>(iE(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ik=(e,t,i)=>(iE(e,t,"access private method"),i);let iy=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],iw="defaultsubtitles",iT="defaultstreamtype",iC="defaultduration",iI="fullscreenelement",iM="hotkeys",i_="keyboardbackwardseekoffset",iS="keyboardforwardseekoffset",iL="keyboarddownvolumestep",iR="keyboardupvolumestep",ix="keysused",iD="lang",iN="loop",iP="liveedgeoffset",iO="noautoseektolive",iU="nodefaultstore",iG="nohotkeys",iW="nomutedpref",iH="nosubtitleslangpref",i$="novolumepref",iB="seektoliveoffset";class iV extends tZ{constructor(){super(),ig(this,N),ig(this,U),ig(this,W),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,ig(this,I,new tX.M(this,iM)),ig(this,M,void 0),ig(this,_,void 0),ig(this,S,null),ig(this,L,void 0),ig(this,R,void 0),ig(this,x,e=>{var t;null==(t=ib(this,_))||t.dispatch(e)}),ig(this,D,void 0),ig(this,O,e=>{let{key:t,shiftKey:i}=e;i&&("/"===t||"?"===t)||iy.includes(t)?this.keyboardShortcutHandler(e):this.removeEventListener("keyup",ib(this,O))}),this.associateElement(this);let e={};iA(this,L,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),s=new tS.Au.CustomEvent(tw.nJ[a],{composed:!0,detail:i});this.dispatchEvent(s)}),e=t})}static get observedAttributes(){return super.observedAttributes.concat(iG,iM,iT,iw,iC,iW,i$,iD,iN,iP,iB,iO)}get mediaStore(){return ib(this,_)}set mediaStore(e){var t,i;(ib(this,_)&&(null==(t=ib(this,R))||t.call(this),iA(this,R,void 0)),iA(this,_,e),ib(this,_)||this.hasAttribute(iU))?iA(this,R,null==(i=ib(this,_))?void 0:i.subscribe(ib(this,L))):ik(this,N,P).call(this)}get fullscreenElement(){var e;return null!=(e=ib(this,M))?e:this}set fullscreenElement(e){var t;this.hasAttribute(iI)&&this.removeAttribute(iI),iA(this,M,e),null==(t=ib(this,_))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return(0,tR.Y_)(this,iw)}set defaultSubtitles(e){(0,tR.QW)(this,iw,e)}get defaultStreamType(){return(0,tR.vT)(this,iT)}set defaultStreamType(e){(0,tR.tA)(this,iT,e)}get defaultDuration(){return(0,tR.dm)(this,iC)}set defaultDuration(e){(0,tR.pK)(this,iC,e)}get noHotkeys(){return(0,tR.Y_)(this,iG)}set noHotkeys(e){(0,tR.QW)(this,iG,e)}get keysUsed(){return(0,tR.vT)(this,ix)}set keysUsed(e){(0,tR.tA)(this,ix,e)}get liveEdgeOffset(){return(0,tR.dm)(this,iP)}set liveEdgeOffset(e){(0,tR.pK)(this,iP,e)}get noAutoSeekToLive(){return(0,tR.Y_)(this,iO)}set noAutoSeekToLive(e){(0,tR.QW)(this,iO,e)}get noVolumePref(){return(0,tR.Y_)(this,i$)}set noVolumePref(e){(0,tR.QW)(this,i$,e)}get noMutedPref(){return(0,tR.Y_)(this,iW)}set noMutedPref(e){(0,tR.QW)(this,iW,e)}get noSubtitlesLangPref(){return(0,tR.Y_)(this,iH)}set noSubtitlesLangPref(e){(0,tR.QW)(this,iH,e)}get noDefaultStore(){return(0,tR.Y_)(this,iU)}set noDefaultStore(e){(0,tR.QW)(this,iU,e)}get resolvedLang(){return(0,tC.Ph)()}attributeChangedCallback(e,t,i){var a,s,n,r,o,l,d,h,u,c,m,p;if(super.attributeChangedCallback(e,t,i),e===iG)i!==t&&""===i?(this.hasAttribute(iM)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys();else if(e===iM)ib(this,I).value=i;else if(e===iw&&i!==t)null==(a=ib(this,_))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(iw)}});else if(e===iT)null==(n=ib(this,_))||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(s=this.getAttribute(iT))?s:void 0}});else if(e===iP&&i!==t)null==(r=ib(this,_))||r.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(iP)?+this.getAttribute(iP):void 0,seekToLiveOffset:this.hasAttribute(iB)?+this.getAttribute(iB):this.hasAttribute(iP)?+this.getAttribute(iP):void 0}});else if(e===iB&&i!==t)null==(o=ib(this,_))||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(iB)?+this.getAttribute(iB):this.hasAttribute(iP)?+this.getAttribute(iP):void 0}});else if(e===iO)null==(l=ib(this,_))||l.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(iO)}});else if(e===iI){let e=i?null==(d=this.getRootNode())?void 0:d.getElementById(i):void 0;iA(this,M,e),null==(h=ib(this,_))||h.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===iD&&i!==t?((0,tC.xC)(i),null==(u=ib(this,_))||u.dispatch({type:"optionschangerequest",detail:{mediaLang:i}})):e===iN&&i!==t?null==(c=ib(this,_))||c.dispatch({type:tw.a8.MEDIA_LOOP_REQUEST,detail:null!=i}):e===i$&&i!==t?null==(m=ib(this,_))||m.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(i$)}}):e===iW&&i!==t&&(null==(p=ib(this,_))||p.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(iW)}}))}connectedCallback(){var e,t,i;this.associateElement(this),ib(this,_)||this.hasAttribute(iU)||ik(this,N,P).call(this),null==(e=ib(this,_))||e.dispatch({type:"documentelementchangerequest",detail:tS.Al}),null==(t=ib(this,_))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement}),super.connectedCallback(),ib(this,_)&&!ib(this,R)&&iA(this,R,null==(i=ib(this,_))?void 0:i.subscribe(ib(this,L))),void 0!==ib(this,D)&&ib(this,_)&&this.media&&setTimeout(()=>{var e,t,i;(null==(t=null==(e=this.media)?void 0:e.textTracks)?void 0:t.length)&&(null==(i=ib(this,_))||i.dispatch({type:tw.a8.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:ib(this,D)}))},0),this.hasAttribute(iG)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,t,i,a,s,n;if(null==(e=super.disconnectedCallback)||e.call(this),this.disableHotkeys(),ib(this,_)){let e=ib(this,_).getState();iA(this,D,!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)),null==(i=ib(this,_))||i.dispatch({type:"fullscreenelementchangerequest",detail:void 0}),null==(a=ib(this,_))||a.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(s=ib(this,_))||s.dispatch({type:tw.a8.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}ib(this,R)&&(null==(n=ib(this,R))||n.call(this),iA(this,R,void 0)),this.unassociateElement(this),ib(this,S)&&(ib(this,S).remove(),iA(this,S,null))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=ib(this,_))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=ib(this,_))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){iX(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=iJ(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(tw.a8).forEach(t=>{e.addEventListener(t,ib(this,x))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(tw.a8).forEach(t=>{e.removeEventListener(t,ib(this,x))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),ib(this,_)&&Object.entries(ib(this,_).getState()).forEach(([t,i])=>{iX([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",ik(this,U,G))}disableHotkeys(){this.removeEventListener("keydown",ik(this,U,G)),this.removeEventListener("keyup",ib(this,O))}get hotkeys(){return ib(this,I)}set hotkeys(e){(0,tR.tA)(this,iM,e)}keyboardShortcutHandler(e){var t,i,a,s,n,r,o,l,d;let h,u,c,m=e.target;if(!((null!=(a=null!=(i=null==(t=m.getAttribute(ix))?void 0:t.split(" "))?i:null==m?void 0:m.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||ib(this,I).contains(`no${e.key.toLowerCase()}`)||" "===e.key&&ib(this,I).contains("nospace"))&&!(e.shiftKey&&("/"===e.key||"?"===e.key)&&ib(this,I).contains("noshift+/")))switch(e.key){case" ":case"k":h=ib(this,_).getState().mediaPaused?tw.a8.MEDIA_PLAY_REQUEST:tw.a8.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new tS.Au.CustomEvent(h,{composed:!0,bubbles:!0}));break;case"m":h="off"===this.mediaStore.getState().mediaVolumeLevel?tw.a8.MEDIA_UNMUTE_REQUEST:tw.a8.MEDIA_MUTE_REQUEST,this.dispatchEvent(new tS.Au.CustomEvent(h,{composed:!0,bubbles:!0}));break;case"f":h=this.mediaStore.getState().mediaIsFullscreen?tw.a8.MEDIA_EXIT_FULLSCREEN_REQUEST:tw.a8.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new tS.Au.CustomEvent(h,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new tS.Au.CustomEvent(tw.a8.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{let e=this.hasAttribute(i_)?+this.getAttribute(i_):10;u=Math.max((null!=(s=this.mediaStore.getState().mediaCurrentTime)?s:0)-e,0),c=new tS.Au.CustomEvent(tw.a8.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:u}),this.dispatchEvent(c);break}case"ArrowRight":case"l":{let e=this.hasAttribute(iS)?+this.getAttribute(iS):10;u=Math.max((null!=(n=this.mediaStore.getState().mediaCurrentTime)?n:0)+e,0),c=new tS.Au.CustomEvent(tw.a8.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:u}),this.dispatchEvent(c);break}case"ArrowUp":{let e=this.hasAttribute(iR)?+this.getAttribute(iR):.025;u=Math.min((null!=(r=this.mediaStore.getState().mediaVolume)?r:1)+e,1),c=new tS.Au.CustomEvent(tw.a8.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:u}),this.dispatchEvent(c);break}case"ArrowDown":{let e=this.hasAttribute(iL)?+this.getAttribute(iL):.025;u=Math.max((null!=(o=this.mediaStore.getState().mediaVolume)?o:1)-e,0),c=new tS.Au.CustomEvent(tw.a8.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:u}),this.dispatchEvent(c);break}case"<":u=Math.max((null!=(l=this.mediaStore.getState().mediaPlaybackRate)?l:1)-.25,.25).toFixed(2),c=new tS.Au.CustomEvent(tw.a8.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:u}),this.dispatchEvent(c);break;case">":u=Math.min((null!=(d=this.mediaStore.getState().mediaPlaybackRate)?d:1)+.25,2).toFixed(2),c=new tS.Au.CustomEvent(tw.a8.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:u}),this.dispatchEvent(c);break;case"/":case"?":e.shiftKey&&ik(this,W,H).call(this);break;case"p":h=this.mediaStore.getState().mediaIsPip?tw.a8.MEDIA_EXIT_PIP_REQUEST:tw.a8.MEDIA_ENTER_PIP_REQUEST,c=new tS.Au.CustomEvent(h,{composed:!0,bubbles:!0}),this.dispatchEvent(c)}}}I=new WeakMap,M=new WeakMap,_=new WeakMap,S=new WeakMap,L=new WeakMap,R=new WeakMap,x=new WeakMap,D=new WeakMap,N=new WeakSet,P=function(){var e;this.mediaStore=(({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=ip,requestMap:s=iv,options:n={},monitorStateOwnersOnlyWithSubscriptions:r=!0})=>{let o,l=[],d={options:{...n}},h=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),u=e=>{void 0==e||il(e,h)||(h=Object.freeze({...h,...e}),l.forEach(e=>e(h)))},c=()=>{u(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,s,n,h,p,v,E,b,g,f,A,k,y,w,T,C;let I=!!o;if(o={...d,...null!=o?o:{},...e},I)return;await ic(...Object.values(e));let M=l.length>0&&0===t&&r,_=d.media!==o.media,S=(null==(i=d.media)?void 0:i.textTracks)!==(null==(s=o.media)?void 0:s.textTracks),L=(null==(n=d.media)?void 0:n.videoRenditions)!==(null==(h=o.media)?void 0:h.videoRenditions),R=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(v=o.media)?void 0:v.audioTracks),x=(null==(E=d.media)?void 0:E.remote)!==(null==(b=o.media)?void 0:b.remote),D=d.documentElement!==o.documentElement,N=!!d.media&&(_||M),P=!!(null==(g=d.media)?void 0:g.textTracks)&&(S||M),O=!!(null==(f=d.media)?void 0:f.videoRenditions)&&(L||M),U=!!(null==(A=d.media)?void 0:A.audioTracks)&&(R||M),G=!!(null==(k=d.media)?void 0:k.remote)&&(x||M),W=!!d.documentElement&&(D||M),H=N||P||O||U||G||W,$=0===l.length&&1===t&&r,B=!!o.media&&(_||$),V=!!(null==(y=o.media)?void 0:y.textTracks)&&(S||$),q=!!(null==(w=o.media)?void 0:w.videoRenditions)&&(L||$),Q=!!(null==(T=o.media)?void 0:T.audioTracks)&&(R||$),F=!!(null==(C=o.media)?void 0:C.remote)&&(x||$),j=!!o.documentElement&&(D||$),Y=B||V||q||Q||F||j;if(!(H||Y)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),c(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:s=[],audioTracksEvents:n=[],remoteEvents:r=[],rootEvents:l=[],stateOwnersUpdateHandlers:h=[]}])=>{let c;m[e]||(m[e]={});let p=i=>{u({[e]:t(d,i)})};c=m[e].mediaEvents,i.forEach(t=>{c&&N&&(d.media.removeEventListener(t,c),m[e].mediaEvents=void 0),B&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),c=m[e].textTracksEvents,a.forEach(t=>{var i,a;c&&P&&(null==(i=d.media.textTracks)||i.removeEventListener(t,c),m[e].textTracksEvents=void 0),V&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),c=m[e].videoRenditionsEvents,s.forEach(t=>{var i,a;c&&O&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,c),m[e].videoRenditionsEvents=void 0),q&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),c=m[e].audioTracksEvents,n.forEach(t=>{var i,a;c&&U&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,c),m[e].audioTracksEvents=void 0),Q&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),c=m[e].remoteEvents,r.forEach(t=>{var i,a;c&&G&&(null==(i=d.media.remote)||i.removeEventListener(t,c),m[e].remoteEvents=void 0),F&&(null==(a=o.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),c=m[e].rootEvents,l.forEach(t=>{c&&W&&(d.documentElement.removeEventListener(t,c),m[e].rootEvents=void 0),j&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let v=m[e].stateOwnersUpdateHandlers;if(v&&H&&(Array.isArray(v)?v:[v]).forEach(e=>{"function"==typeof e&&e()}),Y){let t=h.map(e=>e(p,o)).filter(e=>"function"==typeof e);m[e].stateOwnersUpdateHandlers=1===t.length?t[0]:t}else H&&(m[e].stateOwnersUpdateHandlers=void 0)}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),c(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(e){let{type:t,detail:i}=e;s[t]&&null==h.mediaErrorCode?u(s[t](a,d,e)):"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&(Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t}),c())},getState:()=>h,subscribe:e=>(p({},l.length+1),l.push(e),e(h),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(iw),defaultDuration:this.hasAttribute(iC)?+this.getAttribute(iC):void 0,defaultStreamType:null!=(e=this.getAttribute(iT))?e:void 0,liveEdgeOffset:this.hasAttribute(iP)?+this.getAttribute(iP):void 0,seekToLiveOffset:this.hasAttribute(iB)?+this.getAttribute(iB):this.hasAttribute(iP)?+this.getAttribute(iP):void 0,noAutoSeekToLive:this.hasAttribute(iO),noVolumePref:this.hasAttribute(i$),noMutedPref:this.hasAttribute(iW),noSubtitlesLangPref:this.hasAttribute(iH)}})},O=new WeakMap,U=new WeakSet,G=function(e){var t;let{metaKey:i,altKey:a,key:s,shiftKey:n}=e,r=n&&("/"===s||"?"===s);if(r&&(null==(t=ib(this,S))?void 0:t.open)||i||a||!r&&!iy.includes(s))return void this.removeEventListener("keyup",ib(this,O));let o=e.target,l=o instanceof HTMLElement&&("media-volume-range"===o.tagName.toLowerCase()||"media-time-range"===o.tagName.toLowerCase());![" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(s)||ib(this,I).contains(`no${s.toLowerCase()}`)||" "===s&&ib(this,I).contains("nospace")||l||e.preventDefault(),this.addEventListener("keyup",ib(this,O),{once:!0})},W=new WeakSet,H=function(){ib(this,S)||(iA(this,S,tS.Al.createElement("media-keyboard-shortcuts-dialog")),this.appendChild(ib(this,S))),ib(this,S).open=!0};let iq=Object.values(tw.GC),iQ=Object.values(tw.LJ),iF=e=>{var t,i,a,s;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(tS.Au.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let r=null==(s=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,tw.Ex.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:s.call(a,/\s+/);return Array.isArray(n||r)?(n||r).filter(e=>iq.includes(e)):[]},ij=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&tS.Au.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof tS.Au.customElements.get(e.nodeName.toLowerCase()))&&tS.Au.customElements.upgrade(e),iQ.some(t=>t in e)||!!iF(e).length},iY=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},iK={[tw.GC.MEDIA_SUBTITLES_LIST]:tJ.mc,[tw.GC.MEDIA_SUBTITLES_SHOWING]:tJ.mc,[tw.GC.MEDIA_SEEKABLE]:iY,[tw.GC.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(iY).join(" "),[tw.GC.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[tw.GC.MEDIA_RENDITION_LIST]:tT.SF,[tw.GC.MEDIA_AUDIO_TRACK_LIST]:tT.Br},iz=async(e,t,i)=>{var a,s;if(e.isConnected||await (0,tT.cb)(0),"boolean"==typeof i||null==i)return(0,tR.QW)(e,t,i);if("number"==typeof i)return(0,tR.pK)(e,t,i);if("string"==typeof i)return(0,tR.tA)(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let n=null!=(s=null==(a=iK[t])?void 0:a.call(iK,i))?s:i;return e.setAttribute(t,n)},iZ=(e,t)=>{var i;if(null==(i=e.closest)?void 0:i.call(e,'*[slot="media"]'))return;let a=(e,t)=>{var i,a;ij(e)&&t(e);let{children:s=[]}=null!=e?e:{};[...s,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>iZ(e,t))},s=null==e?void 0:e.nodeName.toLowerCase();s.includes("-")&&!ij(e)?tS.Au.customElements.whenDefined(s).then(()=>{a(e,t)}):a(e,t)},iX=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=iF(e),s=t.toLowerCase();a.includes(s)&&iz(e,s,i)})},iJ=(e,t,i)=>{iZ(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},s=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(tw.a8.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(tw.a8.UNREGISTER_MEDIA_STATE_RECEIVER,s);let n=[],r=e=>{let a=e.target;"media"!==a.name&&(n.forEach(e=>iZ(e,i)),(n=[...a.assignedElements({flatten:!0})]).forEach(e=>iZ(e,t)))};e.addEventListener("slotchange",r);let o=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:s=[],type:n,target:r,attributeName:o}=e;"childList"===n?(Array.prototype.forEach.call(a,e=>iZ(e,t)),Array.prototype.forEach.call(s,e=>iZ(e,i))):"attributes"===n&&o===tw.Ex.MEDIA_CHROME_ATTRIBUTES&&(ij(r)?t(r):i(r))})});return o.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{iZ(e,i),e.removeEventListener("slotchange",r),o.disconnect(),e.removeEventListener(tw.a8.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(tw.a8.UNREGISTER_MEDIA_STATE_RECEIVER,s)}};tS.Au.customElements.get("media-controller")||tS.Au.customElements.define("media-controller",iV);var i0=i(1818);let i1=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,i2=e=>{let t=e.mediaIsAirplaying?(0,tC.t)("stop airplay"):(0,tC.t)("start airplay");e.setAttribute("aria-label",t)};class i5 extends i0.T{static get observedAttributes(){return[...super.observedAttributes,tw.GC.MEDIA_IS_AIRPLAYING,tw.GC.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),i2(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===tw.GC.MEDIA_IS_AIRPLAYING&&i2(this)}get mediaIsAirplaying(){return(0,tR.Y_)(this,tw.GC.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){(0,tR.QW)(this,tw.GC.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return(0,tR.vT)(this,tw.GC.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){(0,tR.tA)(this,tw.GC.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new tS.Au.CustomEvent(tw.a8.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}i5.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${tw.GC.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${tw.GC.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${tw.GC.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${tw.GC.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${i1}</slot>
      <slot name="exit">${i1}</slot>
    </slot>
  `},i5.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${(0,tC.t)("start airplay")}</slot>
    <slot name="tooltip-exit">${(0,tC.t)("stop airplay")}</slot>
  `},tS.Au.customElements.get("media-airplay-button")||tS.Au.customElements.define("media-airplay-button",i5);let i3=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,i4=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,i8=e=>{e.setAttribute("aria-checked",(0,tJ.VV)(e).toString())};class i7 extends i0.T{static get observedAttributes(){return[...super.observedAttributes,tw.GC.MEDIA_SUBTITLES_LIST,tw.GC.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","button"),this.setAttribute("aria-label",(0,tC.t)("closed captions")),i8(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===tw.GC.MEDIA_SUBTITLES_SHOWING&&i8(this)}get mediaSubtitlesList(){return i9(this,tw.GC.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){i6(this,tw.GC.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return i9(this,tw.GC.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){i6(this,tw.GC.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new tS.Au.CustomEvent(tw.a8.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}i7.getSlotTemplateHTML=function(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${i3}</slot>
      <slot name="off">${i4}</slot>
    </slot>
  `},i7.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${(0,tC.t)("Enable captions")}</slot>
    <slot name="tooltip-disable">${(0,tC.t)("Disable captions")}</slot>
  `};let i9=(e,t)=>{let i=e.getAttribute(t);return i?(0,tJ.W5)(i):[]},i6=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=(0,tJ.mc)(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};tS.Au.customElements.get("media-captions-button")||tS.Au.customElements.define("media-captions-button",i7);let ae=e=>{let t=e.mediaIsCasting?(0,tC.t)("stop casting"):(0,tC.t)("start casting");e.setAttribute("aria-label",t)};class at extends i0.T{static get observedAttributes(){return[...super.observedAttributes,tw.GC.MEDIA_IS_CASTING,tw.GC.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),ae(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===tw.GC.MEDIA_IS_CASTING&&ae(this)}get mediaIsCasting(){return(0,tR.Y_)(this,tw.GC.MEDIA_IS_CASTING)}set mediaIsCasting(e){(0,tR.QW)(this,tw.GC.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return(0,tR.vT)(this,tw.GC.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){(0,tR.tA)(this,tw.GC.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?tw.a8.MEDIA_EXIT_CAST_REQUEST:tw.a8.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new tS.Au.CustomEvent(e,{composed:!0,bubbles:!0}))}}at.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${tw.GC.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${tw.GC.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${tw.GC.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${tw.GC.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},at.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${(0,tC.t)("Start casting")}</slot>
    <slot name="tooltip-exit">${(0,tC.t)("Stop casting")}</slot>
  `},tS.Au.customElements.get("media-cast-button")||tS.Au.customElements.define("media-cast-button",at);var ai=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aa=(e,t,i)=>(ai(e,t,"read from private field"),i?i.call(e):t.get(e)),as=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},an=(e,t,i,a)=>(ai(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ar=(e,t,i)=>(ai(e,t,"access private method"),i);let ao="open";class al extends tS.Au.HTMLElement{constructor(){super(),as(this,q),as(this,F),as(this,Y),as(this,z),as(this,X),as(this,ee),as(this,$,!1),as(this,B,null),as(this,V,null)}static get observedAttributes(){return[ao,"anchor"]}get open(){return(0,tR.Y_)(this,ao)}set open(e){(0,tR.QW)(this,ao,e)}handleEvent(e){switch(e.type){case"invoke":ar(this,z,Z).call(this,e);break;case"focusout":ar(this,X,J).call(this,e);break;case"keydown":ar(this,ee,et).call(this,e)}}connectedCallback(){ar(this,q,Q).call(this),this.role||(this.role="dialog"),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}disconnectedCallback(){this.removeEventListener("invoke",this),this.removeEventListener("focusout",this),this.removeEventListener("keydown",this)}attributeChangedCallback(e,t,i){ar(this,q,Q).call(this),e===ao&&i!==t&&(this.open?ar(this,F,j).call(this):ar(this,Y,K).call(this))}focus(){an(this,B,(0,tR.bq)());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==i||i.focus()}get keysUsed(){return["Escape","Tab"]}}$=new WeakMap,B=new WeakMap,V=new WeakMap,q=new WeakSet,Q=function(){if(!aa(this,$)&&(an(this,$,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=(0,tR.kg)(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=(0,tR.aQ)(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},F=new WeakSet,j=function(){var e;null==(e=aa(this,V))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},Y=new WeakSet,K=function(){var e;null==(e=aa(this,V))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},z=new WeakSet,Z=function(e){an(this,V,e.relatedTarget),(0,tR.qg)(this,e.relatedTarget)||(this.open=!this.open)},X=new WeakSet,J=function(e){var t;!(0,tR.qg)(this,e.relatedTarget)&&(null==(t=aa(this,B))||t.focus(),aa(this,V)&&aa(this,V)!==e.relatedTarget&&this.open&&(this.open=!1))},ee=new WeakSet,et=function(e){var t,i,a,s,n;let{key:r,ctrlKey:o,altKey:l,metaKey:d}=e;o||l||d||this.keysUsed.includes(r)&&(e.preventDefault(),e.stopPropagation(),"Tab"===r?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(s=null==(a=this.nextElementSibling)?void 0:a.focus)||s.call(a),this.blur()):"Escape"===r&&(null==(n=aa(this,B))||n.focus(),this.open=!1))},al.shadowRootOptions={mode:"open"},al.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `},al.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},tS.Au.customElements.get("media-chrome-dialog")||tS.Au.customElements.define("media-chrome-dialog",al);var ad=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ah=(e,t,i)=>(ad(e,t,"read from private field"),i?i.call(e):t.get(e)),au=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ac=(e,t,i,a)=>(ad(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),am=(e,t,i)=>(ad(e,t,"access private method"),i);class ap extends tS.Au.HTMLElement{constructor(){if(super(),au(this,eu),au(this,em),au(this,ev),au(this,eb),au(this,ef),au(this,ek),au(this,ew),au(this,eC),au(this,ei,void 0),au(this,ea,void 0),au(this,es,void 0),au(this,en,void 0),au(this,er,{}),au(this,eo,[]),au(this,el,()=>{if(this.range.matches(":focus-visible")){let{style:e}=(0,tR.aQ)(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),au(this,ed,()=>{let{style:e}=(0,tR.aQ)(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),au(this,eh,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=(0,tR.kg)(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),ac(this,es,this.shadowRoot.querySelector("#startpoint")),ac(this,en,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",tw.Ex.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,s,n,r,o;e===tw.Ex.MEDIA_CONTROLLER?(t&&(null==(s=null==(a=ah(this,ei))?void 0:a.unassociateElement)||s.call(a,this),ac(this,ei,null)),i&&this.isConnected&&(ac(this,ei,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(r=ah(this,ei))?void 0:r.associateElement)||o.call(r,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),am(this,em,ep).call(this)):(this.range.setAttribute(e,i),am(this,ev,eE).call(this)))}connectedCallback(){var e,t,i;let{style:a}=(0,tR.aQ)(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),ah(this,er).pointer=(0,tR.aQ)(this.shadowRoot,"#pointer"),ah(this,er).progress=(0,tR.aQ)(this.shadowRoot,"#progress"),ah(this,er).thumb=(0,tR.aQ)(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),ah(this,er).activeSegment=(0,tR.aQ)(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let s=this.getAttribute(tw.Ex.MEDIA_CONTROLLER);s&&(ac(this,ei,null==(e=this.getRootNode())?void 0:e.getElementById(s)),null==(i=null==(t=ah(this,ei))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",ah(this,el)),this.shadowRoot.addEventListener("focusout",ah(this,ed)),am(this,em,ep).call(this),(0,tL.v)(this.container,ah(this,eh))}disconnectedCallback(){var e,t;am(this,ev,eE).call(this),null==(t=null==(e=ah(this,ei))?void 0:e.unassociateElement)||t.call(e,this),ac(this,ei,null),this.shadowRoot.removeEventListener("focusin",ah(this,el)),this.shadowRoot.removeEventListener("focusout",ah(this,ed)),(0,tL.u)(this.container,ah(this,eh))}updatePointerBar(e){var t;null==(t=ah(this,er).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=ah(this,er).progress)||e.style.setProperty("width",`${i}%`),null==(t=ah(this,er).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];ac(this,eo,[...i]);let a=i.pop();for(let[e,s]of i.entries()){let[n,r]=[0===e,e===i.length-1],o=n?"calc(var(--segments-gap) / -1)":`${100*s}%`,l=r?a:i[e+1],d=`calc(${(l-s)*100}%${n||r?"":" - var(--segments-gap)"})`,h=tS.Al.createElementNS("http://www.w3.org/2000/svg","rect"),u=(0,tR.Vw)(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);u.style.setProperty("x",o),u.style.setProperty("width",d),t.append(h)}}getPointerRatio(e){return(0,tR.DI)(e.clientX,e.clientY,ah(this,es).getBoundingClientRect(),ah(this,en).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":am(this,eC,eI).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":am(this,ef,eA).call(this,e);break;case"pointerdown":am(this,eb,eg).call(this,e);break;case"pointerup":am(this,ek,ey).call(this);break;case"pointerleave":am(this,ew,eT).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}ei=new WeakMap,ea=new WeakMap,es=new WeakMap,en=new WeakMap,er=new WeakMap,eo=new WeakMap,el=new WeakMap,ed=new WeakMap,eh=new WeakMap,eu=new WeakSet,ec=function(e){let t=ah(this,er).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=ah(this,eo).findIndex((e,t,a)=>{let s=a[t+1];return null!=s&&i>=e&&i<=s}),s=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==s&&t.style.transform||(t.selectorText=s,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},em=new WeakSet,ep=function(){!this.hasAttribute("disabled")&&this.isConnected&&(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},ev=new WeakSet,eE=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),this.removeEventListener("pointerleave",this),null==(e=tS.Au.window)||e.removeEventListener("pointerup",this),null==(t=tS.Au.window)||t.removeEventListener("pointermove",this)},eb=new WeakSet,eg=function(e){var t;ac(this,ea,e.composedPath().includes(this.range)),null==(t=tS.Au.window)||t.addEventListener("pointerup",this,{once:!0})},ef=new WeakSet,eA=function(e){var t;"mouse"!==e.pointerType&&am(this,eb,eg).call(this,e),this.addEventListener("pointerleave",this,{once:!0}),null==(t=tS.Au.window)||t.addEventListener("pointermove",this)},ek=new WeakSet,ey=function(){var e;null==(e=tS.Au.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},ew=new WeakSet,eT=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=tS.Au.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=ah(this,er).activeSegment)||t.style.removeProperty("transform")},eC=new WeakSet,eI=function(e){("pen"!==e.pointerType||0!==e.buttons)&&(this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),am(this,eu,ec).call(this,e),this.dragging&&("mouse"!==e.pointerType||!ah(this,ea))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))},ap.shadowRootOptions={mode:"open"},ap.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, 0);
        height: var(--media-time-range-hover-height, max(100% , 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, 0);
          height: var(--media-time-range-hover-height, max(100%, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(e)}
    </div>
    <div id="rightgap"></div>
  `},ap.getContainerTemplateHTML=function(e){return""},tS.Au.customElements.get("media-chrome-range")||tS.Au.customElements.define("media-chrome-range",ap);var av=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aE=(e,t,i)=>(av(e,t,"read from private field"),i?i.call(e):t.get(e)),ab=(e,t,i,a)=>(av(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class ag extends tS.Au.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eM,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=(0,tR.kg)(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[tw.Ex.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,s,n,r,o;e===tw.Ex.MEDIA_CONTROLLER&&(t&&(null==(s=null==(a=aE(this,eM))?void 0:a.unassociateElement)||s.call(a,this),ab(this,eM,null)),i&&this.isConnected&&(ab(this,eM,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(r=aE(this,eM))?void 0:r.associateElement)||o.call(r,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(tw.Ex.MEDIA_CONTROLLER);a&&(ab(this,eM,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=aE(this,eM))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=aE(this,eM))?void 0:e.unassociateElement)||t.call(e,this),ab(this,eM,null)}}eM=new WeakMap,ag.shadowRootOptions={mode:"open"},ag.getTemplateHTML=function(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `},tS.Au.customElements.get("media-control-bar")||tS.Au.customElements.define("media-control-bar",ag);var af=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aA=(e,t,i)=>(af(e,t,"read from private field"),i?i.call(e):t.get(e)),ak=(e,t,i,a)=>(af(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class ay extends tS.Au.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,e_,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=(0,tR.kg)(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[tw.Ex.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,s,n,r,o;e===tw.Ex.MEDIA_CONTROLLER&&(t&&(null==(s=null==(a=aA(this,e_))?void 0:a.unassociateElement)||s.call(a,this),ak(this,e_,null)),i&&this.isConnected&&(ak(this,e_,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(r=aA(this,e_))?void 0:r.associateElement)||o.call(r,this)))}connectedCallback(){var e,t,i;let{style:a}=(0,tR.aQ)(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let s=this.getAttribute(tw.Ex.MEDIA_CONTROLLER);s&&(ak(this,e_,null==(e=this.getRootNode())?void 0:e.getElementById(s)),null==(i=null==(t=aA(this,e_))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=aA(this,e_))?void 0:e.unassociateElement)||t.call(e,this),ak(this,e_,null)}}e_=new WeakMap,ay.shadowRootOptions={mode:"open"},ay.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `},ay.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},tS.Au.customElements.get("media-text-display")||tS.Au.customElements.define("media-text-display",ay);var aw=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aT=(e,t,i)=>(aw(e,t,"read from private field"),i?i.call(e):t.get(e));class aC extends ay{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eS,void 0),((e,t,i)=>(aw(e,t,"write to private field"),t.set(e,i)))(this,eS,this.shadowRoot.querySelector("slot")),aT(this,eS).textContent=t_(null!=(e=this.mediaDuration)?e:0)}static get observedAttributes(){return[...super.observedAttributes,tw.GC.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===tw.GC.MEDIA_DURATION&&(aT(this,eS).textContent=t_(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return(0,tR.dm)(this,tw.GC.MEDIA_DURATION)}set mediaDuration(e){(0,tR.pK)(this,tw.GC.MEDIA_DURATION,e)}}eS=new WeakMap,aC.getSlotTemplateHTML=function(e,t){return`
    <slot>${t_(t.mediaDuration)}</slot>
  `},tS.Au.customElements.get("media-duration-display")||tS.Au.customElements.define("media-duration-display",aC);let aI={2:(0,tC.t)("Network Error"),3:(0,tC.t)("Decode Error"),4:(0,tC.t)("Source Not Supported"),5:(0,tC.t)("Encryption Error")},aM={2:(0,tC.t)("A network error caused the media download to fail."),3:(0,tC.t)("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:(0,tC.t)("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:(0,tC.t)("The media is encrypted and there are no keys to decrypt it.")},a_=e=>{var t,i;return 1===e.code?null:{title:null!=(t=aI[e.code])?t:`Error ${e.code}`,message:null!=(i=aM[e.code])?i:e.message}};var aS=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};function aL(e){var t;let{title:i,message:a}=null!=(t=a_(e))?t:{},s="";return i&&(s+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(s+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),s}let aR=[tw.GC.MEDIA_ERROR_CODE,tw.GC.MEDIA_ERROR_MESSAGE];class ax extends al{constructor(){super(...arguments),((e,t)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,null)})(this,eL)}static get observedAttributes(){return[...super.observedAttributes,...aR]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!aR.includes(e))return;let s=null!=(a=this.mediaError)?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=s.code&&null!==a_(s),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(s),!this.hasAttribute("aria-label"))){let{title:e}=a_(s);e&&this.setAttribute("aria-label",e)}}get mediaError(){var e;return aS(this,e=eL,"read from private field"),e.get(this)}set mediaError(e){var t;aS(this,t=eL,"write to private field"),t.set(this,e)}get mediaErrorCode(){return(0,tR.dm)(this,"mediaerrorcode")}set mediaErrorCode(e){(0,tR.pK)(this,"mediaerrorcode",e)}get mediaErrorMessage(){return(0,tR.vT)(this,"mediaerrormessage")}set mediaErrorMessage(e){(0,tR.tA)(this,"mediaerrormessage",e)}}eL=new WeakMap,ax.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${aL({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `},ax.formatErrorMessage=aL,tS.Au.customElements.get("media-error-dialog")||tS.Au.customElements.define("media-error-dialog",ax);var aD=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)},aN=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};class aP extends al{constructor(){super(...arguments),aN(this,eR,e=>{var t;if(!this.open)return;let i=null==(t=this.shadowRoot)?void 0:t.querySelector("#content");if(!i)return;let a=e.composedPath(),s=a[0]===this||a.includes(this),n=a.includes(i);s&&!n&&(this.open=!1)}),aN(this,ex,e=>{if(!this.open)return;let t=e.shiftKey&&("/"===e.key||"?"===e.key);"Escape"!==e.key&&!t||e.ctrlKey||e.altKey||e.metaKey||(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",aD(this,eR)),document.addEventListener("keydown",aD(this,ex)))}disconnectedCallback(){this.removeEventListener("click",aD(this,eR)),document.removeEventListener("keydown",aD(this,ex))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"open"===e&&(this.open?(this.addEventListener("click",aD(this,eR)),document.addEventListener("keydown",aD(this,ex))):(this.removeEventListener("click",aD(this,eR)),document.removeEventListener("keydown",aD(this,ex))))}}eR=new WeakMap,ex=new WeakMap,aP.getSlotTemplateHTML=function(e){let t;return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${t=[{keys:["Space","k"],description:"Toggle Playback"},{keys:["m"],description:"Toggle mute"},{keys:["f"],description:"Toggle fullscreen"},{keys:["c"],description:"Toggle captions or subtitles, if available"},{keys:["p"],description:"Toggle Picture in Picture"},{keys:["←","j"],description:"Seek back 10s"},{keys:["→","l"],description:"Seek forward 10s"},{keys:["↑"],description:"Turn volume up"},{keys:["↓"],description:"Turn volume down"},{keys:["< (SHIFT+,)"],description:"Decrease playback rate"},{keys:["> (SHIFT+.)"],description:"Increase playback rate"}].map(({keys:e,description:t})=>{let i=e.map((e,t)=>t>0?`<span class="key-separator">or</span><span class="key">${e}</span>`:`<span class="key">${e}</span>`).join("");return`
      <tr>
        <td>
          <div class="key-combo">${i}</div>
        </td>
        <td class="description">${t}</td>
      </tr>
    `}).join(""),`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${t}</table>
  `}
    </slot>
  `},tS.Au.customElements.get("media-keyboard-shortcuts-dialog")||tS.Au.customElements.define("media-keyboard-shortcuts-dialog",aP);var aO=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};let aU=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,aG=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,aW=e=>{let t=e.mediaIsFullscreen?(0,tC.t)("exit fullscreen mode"):(0,tC.t)("enter fullscreen mode");e.setAttribute("aria-label",t)};class aH extends i0.T{constructor(){super(...arguments),((e,t)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,null)})(this,eD)}static get observedAttributes(){return[...super.observedAttributes,tw.GC.MEDIA_IS_FULLSCREEN,tw.GC.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),aW(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===tw.GC.MEDIA_IS_FULLSCREEN&&aW(this)}get mediaFullscreenUnavailable(){return(0,tR.vT)(this,tw.GC.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){(0,tR.tA)(this,tw.GC.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return(0,tR.Y_)(this,tw.GC.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){(0,tR.QW)(this,tw.GC.MEDIA_IS_FULLSCREEN,e)}handleClick(e){var t,i;aO(this,t=eD,"write to private field"),t.set(this,e);let a=(aO(this,i=eD,"read from private field"),i.get(this)instanceof PointerEvent),s=this.mediaIsFullscreen?new tS.Au.CustomEvent(tw.a8.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new tS.Au.CustomEvent(tw.a8.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(s)}}eD=new WeakMap,aH.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${tw.GC.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${tw.GC.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${tw.GC.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${tw.GC.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${aU}</slot>
      <slot name="exit">${aG}</slot>
    </slot>
  `},aH.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${(0,tC.t)("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${(0,tC.t)("Exit fullscreen mode")}</slot>
  `},tS.Au.customElements.get("media-fullscreen-button")||tS.Au.customElements.define("media-fullscreen-button",aH);let{MEDIA_TIME_IS_LIVE:a$,MEDIA_PAUSED:aB}=tw.GC,{MEDIA_SEEK_TO_LIVE_REQUEST:aV,MEDIA_PLAY_REQUEST:aq}=tw.a8,aQ=e=>{var t;let i=e.mediaPaused||!e.mediaTimeIsLive,a=i?(0,tC.t)("seek to live"):(0,tC.t)("playing live");e.setAttribute("aria-label",a);let s=null==(t=e.shadowRoot)?void 0:t.querySelector('slot[name="text"]');s&&(s.textContent=(0,tC.t)("live")),i?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class aF extends i0.T{static get observedAttributes(){return[...super.observedAttributes,a$,aB]}connectedCallback(){super.connectedCallback(),aQ(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),aQ(this)}get mediaPaused(){return(0,tR.Y_)(this,tw.GC.MEDIA_PAUSED)}set mediaPaused(e){(0,tR.QW)(this,tw.GC.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return(0,tR.Y_)(this,tw.GC.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){(0,tR.QW)(this,tw.GC.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new tS.Au.CustomEvent(aV,{composed:!0,bubbles:!0})),this.hasAttribute(aB)&&this.dispatchEvent(new tS.Au.CustomEvent(aq,{composed:!0,bubbles:!0})))}}aF.getSlotTemplateHTML=function(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${a$}]:not([${aB}])) slot[name=indicator] > *,
      :host([${a$}]:not([${aB}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${a$}]:not([${aB}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${(0,tC.t)("live")}</slot>
  `},tS.Au.customElements.get("media-live-button")||tS.Au.customElements.define("media-live-button",aF);var aj=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aY=(e,t,i)=>(aj(e,t,"read from private field"),i?i.call(e):t.get(e)),aK=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},az=(e,t,i,a)=>(aj(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let aZ="loadingdelay",aX="noautohide",aJ=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;class a0 extends tS.Au.HTMLElement{constructor(){if(super(),aK(this,eN,void 0),aK(this,eP,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=(0,tR.kg)(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[tw.Ex.MEDIA_CONTROLLER,tw.GC.MEDIA_PAUSED,tw.GC.MEDIA_LOADING,aZ]}attributeChangedCallback(e,t,i){var a,s,n,r,o;e===aZ&&t!==i?this.loadingDelay=Number(i):e===tw.Ex.MEDIA_CONTROLLER&&(t&&(null==(s=null==(a=aY(this,eN))?void 0:a.unassociateElement)||s.call(a,this),az(this,eN,null)),i&&this.isConnected&&(az(this,eN,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(r=aY(this,eN))?void 0:r.associateElement)||o.call(r,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(tw.Ex.MEDIA_CONTROLLER);a&&(az(this,eN,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=aY(this,eN))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=aY(this,eN))?void 0:e.unassociateElement)||t.call(e,this),az(this,eN,null)}get loadingDelay(){return aY(this,eP)}set loadingDelay(e){az(this,eP,e);let{style:t}=(0,tR.aQ)(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return(0,tR.Y_)(this,tw.GC.MEDIA_PAUSED)}set mediaPaused(e){(0,tR.QW)(this,tw.GC.MEDIA_PAUSED,e)}get mediaLoading(){return(0,tR.Y_)(this,tw.GC.MEDIA_LOADING)}set mediaLoading(e){(0,tR.QW)(this,tw.GC.MEDIA_LOADING,e)}get mediaController(){return(0,tR.vT)(this,tw.Ex.MEDIA_CONTROLLER)}set mediaController(e){(0,tR.tA)(this,tw.Ex.MEDIA_CONTROLLER,e)}get noAutohide(){return(0,tR.Y_)(this,aX)}set noAutohide(e){(0,tR.QW)(this,aX,e)}}eN=new WeakMap,eP=new WeakMap,a0.shadowRootOptions={mode:"open"},a0.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${tw.GC.MEDIA_LOADING}]:not([${tw.GC.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${tw.GC.MEDIA_LOADING}]:not([${tw.GC.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${tw.GC.MEDIA_LOADING}]:not([${tw.GC.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${aJ}</slot>
    <div id="status" role="status" aria-live="polite">${(0,tC.t)("media loading")}</div>
  `},tS.Au.customElements.get("media-loading-indicator")||tS.Au.customElements.define("media-loading-indicator",a0);let a1=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,a2=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,a5=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,a3=e=>{let t="off"===e.mediaVolumeLevel?(0,tC.t)("unmute"):(0,tC.t)("mute");e.setAttribute("aria-label",t)};class a4 extends i0.T{static get observedAttributes(){return[...super.observedAttributes,tw.GC.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),a3(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===tw.GC.MEDIA_VOLUME_LEVEL&&a3(this)}get mediaVolumeLevel(){return(0,tR.vT)(this,tw.GC.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){(0,tR.tA)(this,tw.GC.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?tw.a8.MEDIA_UNMUTE_REQUEST:tw.a8.MEDIA_MUTE_REQUEST;this.dispatchEvent(new tS.Au.CustomEvent(e,{composed:!0,bubbles:!0}))}}a4.getSlotTemplateHTML=function(e){return`
    <style>
      :host(:not([${tw.GC.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${tw.GC.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${tw.GC.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${tw.GC.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${tw.GC.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${tw.GC.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${tw.GC.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${a1}</slot>
      <slot name="low">${a2}</slot>
      <slot name="medium">${a2}</slot>
      <slot name="high">${a5}</slot>
    </slot>
  `},a4.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${(0,tC.t)("Mute")}</slot>
    <slot name="tooltip-unmute">${(0,tC.t)("Unmute")}</slot>
  `},tS.Au.customElements.get("media-mute-button")||tS.Au.customElements.define("media-mute-button",a4);var a8=a4;let a7=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,a9=e=>{let t=e.mediaIsPip?(0,tC.t)("exit picture in picture mode"):(0,tC.t)("enter picture in picture mode");e.setAttribute("aria-label",t)};class a6 extends i0.T{static get observedAttributes(){return[...super.observedAttributes,tw.GC.MEDIA_IS_PIP,tw.GC.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),a9(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===tw.GC.MEDIA_IS_PIP&&a9(this)}get mediaPipUnavailable(){return(0,tR.vT)(this,tw.GC.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){(0,tR.tA)(this,tw.GC.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return(0,tR.Y_)(this,tw.GC.MEDIA_IS_PIP)}set mediaIsPip(e){(0,tR.QW)(this,tw.GC.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?tw.a8.MEDIA_EXIT_PIP_REQUEST:tw.a8.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new tS.Au.CustomEvent(e,{composed:!0,bubbles:!0}))}}a6.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${tw.GC.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${tw.GC.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${tw.GC.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${tw.GC.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${a7}</slot>
      <slot name="exit">${a7}</slot>
    </slot>
  `},a6.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${(0,tC.t)("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${(0,tC.t)("Exit picture in picture mode")}</slot>
  `},tS.Au.customElements.get("media-pip-button")||tS.Au.customElements.define("media-pip-button",a6),i(79648);let se=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,st=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,si=e=>{let t=e.mediaPaused?(0,tC.t)("play"):(0,tC.t)("pause");e.setAttribute("aria-label",t)};class sa extends i0.T{static get observedAttributes(){return[...super.observedAttributes,tw.GC.MEDIA_PAUSED,tw.GC.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),si(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===tw.GC.MEDIA_PAUSED||e===tw.GC.MEDIA_LANG)&&si(this)}get mediaPaused(){return(0,tR.Y_)(this,tw.GC.MEDIA_PAUSED)}set mediaPaused(e){(0,tR.QW)(this,tw.GC.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?tw.a8.MEDIA_PLAY_REQUEST:tw.a8.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new tS.Au.CustomEvent(e,{composed:!0,bubbles:!0}))}}sa.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${tw.GC.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${tw.GC.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${tw.GC.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${tw.GC.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${se}</slot>
      <slot name="pause">${st}</slot>
    </slot>
  `},sa.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${(0,tC.t)("Play")}</slot>
    <slot name="tooltip-pause">${(0,tC.t)("Pause")}</slot>
  `},tS.Au.customElements.get("media-play-button")||tS.Au.customElements.define("media-play-button",sa);let ss="placeholdersrc";class sn extends tS.Au.HTMLElement{static get observedAttributes(){return[ss,"src"]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=(0,tR.kg)(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){if("src"===e&&(null==i?this.image.removeAttribute("src"):this.image.setAttribute("src",i)),e===ss)if(null==i)this.image.style.removeProperty("background-image");else{var a;a=this.image,a.style["background-image"]=`url('${i}')`}}get placeholderSrc(){return(0,tR.vT)(this,ss)}set placeholderSrc(e){(0,tR.tA)(this,"src",e)}get src(){return(0,tR.vT)(this,"src")}set src(e){(0,tR.tA)(this,"src",e)}}sn.shadowRootOptions={mode:"open"},sn.getTemplateHTML=function(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `},tS.Au.customElements.get("media-poster-image")||tS.Au.customElements.define("media-poster-image",sn);var sr=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};class so extends ay{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eO,void 0),((e,t,i)=>(sr(e,t,"write to private field"),t.set(e,i)))(this,eO,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,tw.GC.MEDIA_PREVIEW_CHAPTER,tw.GC.MEDIA_LANG]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),(e===tw.GC.MEDIA_PREVIEW_CHAPTER||e===tw.GC.MEDIA_LANG)&&i!==t&&null!=i){var a;if((sr(this,a=eO,"read from private field"),a.get(this)).textContent=i,""!==i){let e=(0,tC.t)("chapter: {chapterName}",{chapterName:i});this.setAttribute("aria-valuetext",e)}else this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return(0,tR.vT)(this,tw.GC.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){(0,tR.tA)(this,tw.GC.MEDIA_PREVIEW_CHAPTER,e)}}eO=new WeakMap,tS.Au.customElements.get("media-preview-chapter-display")||tS.Au.customElements.define("media-preview-chapter-display",so);var sl=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sd=(e,t,i)=>(sl(e,t,"read from private field"),i?i.call(e):t.get(e)),sh=(e,t,i,a)=>(sl(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class su extends tS.Au.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eU,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=(0,tR.kg)(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[tw.Ex.MEDIA_CONTROLLER,tw.GC.MEDIA_PREVIEW_IMAGE,tw.GC.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(tw.Ex.MEDIA_CONTROLLER);a&&(sh(this,eU,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=sd(this,eU))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=sd(this,eU))?void 0:e.unassociateElement)||t.call(e,this),sh(this,eU,null)}attributeChangedCallback(e,t,i){var a,s,n,r,o;[tw.GC.MEDIA_PREVIEW_IMAGE,tw.GC.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===tw.Ex.MEDIA_CONTROLLER&&(t&&(null==(s=null==(a=sd(this,eU))?void 0:a.unassociateElement)||s.call(a,this),sh(this,eU,null)),i&&this.isConnected&&(sh(this,eU,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(r=sd(this,eU))?void 0:r.associateElement)||o.call(r,this)))}get mediaPreviewImage(){return(0,tR.vT)(this,tw.GC.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){(0,tR.tA)(this,tw.GC.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(tw.GC.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){e?this.setAttribute(tw.GC.MEDIA_PREVIEW_COORDS,e.join(" ")):this.removeAttribute(tw.GC.MEDIA_PREVIEW_COORDS)}update(){let e,t,i=this.mediaPreviewCoords,a=this.mediaPreviewImage;if(!(i&&a))return;let[s,n,r,o]=i,l=a.split("#")[0],d=getComputedStyle(this),{maxWidth:h,maxHeight:u,minWidth:c,minHeight:m}=d;if("fill"===(d.getPropertyValue("--media-preview-thumbnail-object-fit").trim()||"contain")){let i=parseInt(h)/r,a=parseInt(u)/o,s=parseInt(c)/r,n=parseInt(m)/o;e=i<1?i:Math.max(i,s),t=a<1?a:Math.max(a,n)}else{let i=Math.min(parseInt(h)/r,parseInt(u)/o),a=Math.max(parseInt(c)/r,parseInt(m)/o),s=i<1?i:a>1?a:1;e=s,t=s}let{style:p}=(0,tR.aQ)(this.shadowRoot,":host"),v=(0,tR.aQ)(this.shadowRoot,"img").style,E=this.shadowRoot.querySelector("img"),b=1>Math.min(e,t)?"min":"max";p.setProperty(`${b}-width`,"initial","important"),p.setProperty(`${b}-height`,"initial","important"),p.width=`${r*e}px`,p.height=`${o*t}px`;let g=()=>{v.width=`${this.imgWidth*e}px`,v.height=`${this.imgHeight*t}px`,v.display="block"};E.src!==l&&(E.onload=()=>{this.imgWidth=E.naturalWidth,this.imgHeight=E.naturalHeight,g(),E.onload=null},E.src=l,g()),g(),v.transform=`translate(-${s*e}px, -${n*t}px)`}}eU=new WeakMap,su.shadowRootOptions={mode:"open"},su.getTemplateHTML=function(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `},tS.Au.customElements.get("media-preview-thumbnail")||tS.Au.customElements.define("media-preview-thumbnail",su);var sc=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sm=(e,t,i)=>(sc(e,t,"read from private field"),i?i.call(e):t.get(e));class sp extends ay{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,eG,void 0),((e,t,i)=>(sc(e,t,"write to private field"),t.set(e,i)))(this,eG,this.shadowRoot.querySelector("slot")),sm(this,eG).textContent=t_(0)}static get observedAttributes(){return[...super.observedAttributes,tw.GC.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===tw.GC.MEDIA_PREVIEW_TIME&&null!=i&&(sm(this,eG).textContent=t_(parseFloat(i)))}get mediaPreviewTime(){return(0,tR.dm)(this,tw.GC.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){(0,tR.pK)(this,tw.GC.MEDIA_PREVIEW_TIME,e)}}eG=new WeakMap,tS.Au.customElements.get("media-preview-time-display")||tS.Au.customElements.define("media-preview-time-display",sp);let sv="seekoffset";class sE extends i0.T{static get observedAttributes(){return[...super.observedAttributes,tw.GC.MEDIA_CURRENT_TIME,sv]}connectedCallback(){super.connectedCallback(),this.seekOffset=(0,tR.dm)(this,sv,30)}attributeChangedCallback(e,t,i){var a;super.attributeChangedCallback(e,t,i),a=this.seekOffset,this.setAttribute("aria-label",(0,tC.t)("seek back {seekOffset} seconds",{seekOffset:a})),e===sv&&(this.seekOffset=(0,tR.dm)(this,sv,30))}get seekOffset(){return(0,tR.dm)(this,sv,30)}set seekOffset(e){(0,tR.pK)(this,sv,e),this.setAttribute("aria-label",(0,tC.t)("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),(0,tR.Ek)((0,tR.u0)(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return(0,tR.dm)(this,tw.GC.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){(0,tR.pK)(this,tw.GC.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new tS.Au.CustomEvent(tw.a8.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}sE.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${i}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},sE.getTooltipContentHTML=function(){return(0,tC.t)("Seek backward")},tS.Au.customElements.get("media-seek-backward-button")||tS.Au.customElements.define("media-seek-backward-button",sE);let sb="seekoffset";class sg extends i0.T{static get observedAttributes(){return[...super.observedAttributes,tw.GC.MEDIA_CURRENT_TIME,sb]}connectedCallback(){super.connectedCallback(),this.seekOffset=(0,tR.dm)(this,sb,30)}attributeChangedCallback(e,t,i){var a;super.attributeChangedCallback(e,t,i),a=this.seekOffset,this.setAttribute("aria-label",(0,tC.t)("seek forward {seekOffset} seconds",{seekOffset:a})),e===sb&&(this.seekOffset=(0,tR.dm)(this,sb,30))}get seekOffset(){return(0,tR.dm)(this,sb,30)}set seekOffset(e){(0,tR.pK)(this,sb,e),this.setAttribute("aria-label",(0,tC.t)("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),(0,tR.Ek)((0,tR.u0)(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return(0,tR.dm)(this,tw.GC.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){(0,tR.pK)(this,tw.GC.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new tS.Au.CustomEvent(tw.a8.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}sg.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${i}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},sg.getTooltipContentHTML=function(){return(0,tC.t)("Seek forward")},tS.Au.customElements.get("media-seek-forward-button")||tS.Au.customElements.define("media-seek-forward-button",sg);var sf=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sA=(e,t,i)=>(sf(e,t,"read from private field"),i?i.call(e):t.get(e)),sk=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sy=(e,t,i,a)=>(sf(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sw=(e,t,i)=>(sf(e,t,"access private method"),i);let sT={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},sC=[...Object.values(sT),tw.GC.MEDIA_CURRENT_TIME,tw.GC.MEDIA_DURATION,tw.GC.MEDIA_SEEKABLE],sI=["Enter"," "],sM="&nbsp;/&nbsp;",s_=(e,{timesSep:t=sM}={})=>{var i,a;let s=null!=(i=e.mediaCurrentTime)?i:0,[,n]=null!=(a=e.mediaSeekable)?a:[],r=0;Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(n)&&(r=n);let o=e.remaining?t_(0-(r-s)):t_(s);return e.showDuration?`${o}${t}${t_(r)}`:o};class sS extends ay{constructor(){super(),sk(this,eB),sk(this,eq),sk(this,eF),sk(this,eY),sk(this,eW,void 0),sk(this,eH,null),sk(this,e$,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!sI.includes(a)?this.removeEventListener("keyup",sA(this,eH)):this.addEventListener("keyup",sA(this,eH))}),sy(this,eW,this.shadowRoot.querySelector("slot")),sA(this,eW).innerHTML=`${s_(this)}`}static get observedAttributes(){return[...super.observedAttributes,...sC,"disabled"]}connectedCallback(){let{style:e}=(0,tR.aQ)(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.setAttribute("aria-label",(0,tC.t)("playback time")),sw(this,eF,ej).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),sw(this,eq,eQ).call(this),super.disconnectedCallback()}attributeChangedCallback(e,t,i){this.setAttribute("aria-label",(0,tC.t)("playback time")),sC.includes(e)?this.update():"disabled"===e&&i!==t?null==i?sw(this,eF,ej).call(this):sw(this,eY,eK).call(this):e===sT.NO_TOGGLE&&i!==t&&(this.noToggle?sw(this,eY,eK).call(this):sw(this,eF,ej).call(this)),super.attributeChangedCallback(e,t,i)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return(0,tR.Y_)(this,sT.REMAINING)}set remaining(e){(0,tR.QW)(this,sT.REMAINING,e)}get showDuration(){return(0,tR.Y_)(this,sT.SHOW_DURATION)}set showDuration(e){(0,tR.QW)(this,sT.SHOW_DURATION,e)}get noToggle(){return(0,tR.Y_)(this,sT.NO_TOGGLE)}set noToggle(e){(0,tR.QW)(this,sT.NO_TOGGLE,e)}get mediaDuration(){return(0,tR.dm)(this,tw.GC.MEDIA_DURATION)}set mediaDuration(e){(0,tR.pK)(this,tw.GC.MEDIA_DURATION,e)}get mediaCurrentTime(){return(0,tR.dm)(this,tw.GC.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){(0,tR.pK)(this,tw.GC.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(tw.GC.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(tw.GC.MEDIA_SEEKABLE):this.setAttribute(tw.GC.MEDIA_SEEKABLE,e.join(":"))}update(){let e=s_(this);(e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],s=null;if(Number.isFinite(e.mediaDuration)?s=e.mediaDuration:Number.isFinite(a)&&(s=a),null==i||null===s)return e.setAttribute("aria-description",(0,tC.t)("video not loaded, unknown time."));let n=e.remaining?tM(0-(s-i)):tM(i);if(!e.showDuration)return e.setAttribute("aria-description",n);let r=tM(s),o=(0,tC.t)("{currentTime} of {totalTime}",{currentTime:n,totalTime:r});e.setAttribute("aria-description",o)})(this),e!==sA(this,eW).innerHTML&&(sA(this,eW).innerHTML=e)}}eW=new WeakMap,eH=new WeakMap,e$=new WeakMap,eB=new WeakSet,eV=function(){sA(this,eH)||(sy(this,eH,e=>{let{key:t}=e;sI.includes(t)?this.toggleTimeDisplay():this.removeEventListener("keyup",sA(this,eH))}),this.addEventListener("keydown",sA(this,e$)),this.addEventListener("click",this.toggleTimeDisplay))},eq=new WeakSet,eQ=function(){sA(this,eH)&&(this.removeEventListener("keyup",sA(this,eH)),this.removeEventListener("keydown",sA(this,e$)),this.removeEventListener("click",this.toggleTimeDisplay),sy(this,eH,null))},eF=new WeakSet,ej=function(){this.noToggle||this.hasAttribute("disabled")||(this.setAttribute("role","button"),this.enable(),sw(this,eB,eV).call(this))},eY=new WeakSet,eK=function(){this.removeAttribute("role"),this.disable(),sw(this,eq,eQ).call(this)},sS.getSlotTemplateHTML=function(e,t){return`
    <slot>${s_(t)}</slot>
  `},tS.Au.customElements.get("media-time-display")||tS.Au.customElements.define("media-time-display",sS);var sL=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sR=(e,t,i)=>(sL(e,t,"read from private field"),i?i.call(e):t.get(e)),sx=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sD=(e,t,i,a)=>(sL(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class sN{constructor(e,t,i){sx(this,ez,void 0),sx(this,eZ,void 0),sx(this,eX,void 0),sx(this,eJ,void 0),sx(this,e0,void 0),sx(this,e1,void 0),sx(this,e2,void 0),sx(this,e5,void 0),sx(this,e3,0),sx(this,e4,(e=performance.now())=>{sD(this,e3,requestAnimationFrame(sR(this,e4))),sD(this,eJ,performance.now()-sR(this,eX));let t=1e3/this.fps;if(sR(this,eJ)>t){let i,a;sD(this,eX,e-sR(this,eJ)%t);let s=1e3/((e-sR(this,eZ))/++(i=this,a=e0,{set _(value){sD(i,a,value,void 0)},get _(){return sR(i,a,void 0)}})._),n=(e-sR(this,e1))/1e3/this.duration,r=sR(this,e2)+n*this.playbackRate;r-sR(this,ez).valueAsNumber>0?sD(this,e5,this.playbackRate/this.duration/s):(sD(this,e5,.995*sR(this,e5)),r=sR(this,ez).valueAsNumber+sR(this,e5)),this.callback(r)}}),sD(this,ez,e),this.callback=t,this.fps=i}start(){0===sR(this,e3)&&(sD(this,eX,performance.now()),sD(this,eZ,sR(this,eX)),sD(this,e0,0),sR(this,e4).call(this))}stop(){0!==sR(this,e3)&&(cancelAnimationFrame(sR(this,e3)),sD(this,e3,0))}update({start:e,duration:t,playbackRate:i}){let a=e-sR(this,ez).valueAsNumber,s=Math.abs(t-this.duration);(a>0||a<-.03||s>=.5)&&this.callback(e),sD(this,e2,e),sD(this,e1,performance.now()),this.duration=t,this.playbackRate=i}}ez=new WeakMap,eZ=new WeakMap,eX=new WeakMap,eJ=new WeakMap,e0=new WeakMap,e1=new WeakMap,e2=new WeakMap,e5=new WeakMap,e3=new WeakMap,e4=new WeakMap;var sP=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sO=(e,t,i)=>(sP(e,t,"read from private field"),i?i.call(e):t.get(e)),sU=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sG=(e,t,i,a)=>(sP(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sW=(e,t,i)=>(sP(e,t,"access private method"),i);let sH=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},s$=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class sB extends ap{constructor(){super(),sU(this,to),sU(this,th),sU(this,tc),sU(this,tp),sU(this,tE),sU(this,tg),sU(this,tA),sU(this,e8,null),sU(this,e7,void 0),sU(this,e9,void 0),sU(this,e6,void 0),sU(this,te,void 0),sU(this,tt,void 0),sU(this,ti,void 0),sU(this,ta,void 0),sU(this,ts,void 0),sU(this,tn,void 0),sU(this,tr,()=>{sW(this,to,tl).call(this)?sO(this,e7).start():sO(this,e7).stop()}),sU(this,td,e=>{!this.dragging&&((0,tT.gf)(e)&&(this.range.valueAsNumber=e),sO(this,tn)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),sG(this,e9,this.shadowRoot.querySelectorAll('[part~="box"]')),sG(this,te,this.shadowRoot.querySelector('[part~="preview-box"]')),sG(this,tt,this.shadowRoot.querySelector('[part~="current-box"]'));const e=getComputedStyle(this);sG(this,ti,parseInt(e.getPropertyValue("--media-box-padding-left"))),sG(this,ta,parseInt(e.getPropertyValue("--media-box-padding-right"))),sG(this,e7,new sN(this.range,sO(this,td),60))}static get observedAttributes(){return[...super.observedAttributes,tw.GC.MEDIA_PAUSED,tw.GC.MEDIA_DURATION,tw.GC.MEDIA_SEEKABLE,tw.GC.MEDIA_CURRENT_TIME,tw.GC.MEDIA_PREVIEW_IMAGE,tw.GC.MEDIA_PREVIEW_TIME,tw.GC.MEDIA_PREVIEW_CHAPTER,tw.GC.MEDIA_BUFFERED,tw.GC.MEDIA_PLAYBACK_RATE,tw.GC.MEDIA_LOADING,tw.GC.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",(0,tC.t)("seek")),sO(this,tr).call(this),sG(this,e8,this.getRootNode()),null==(e=sO(this,e8))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),sO(this,e7).stop(),null==(e=sO(this,e8))||e.removeEventListener("transitionstart",this),sG(this,e8,null)}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t!=i){if(e===tw.GC.MEDIA_CURRENT_TIME||e===tw.GC.MEDIA_PAUSED||e===tw.GC.MEDIA_ENDED||e===tw.GC.MEDIA_LOADING||e===tw.GC.MEDIA_DURATION||e===tw.GC.MEDIA_SEEKABLE){let e,t,i,a;sO(this,e7).update({start:sH(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),sO(this,tr).call(this),e=this.range,t=tM(+s$(this)),i=tM(+this.mediaSeekableEnd),a=t&&i?(0,tC.t)("{currentTime} of {totalTime}",{currentTime:t,totalTime:i}):(0,tC.t)("video not loaded, unknown time."),e.setAttribute("aria-valuetext",a)}else e===tw.GC.MEDIA_BUFFERED&&this.updateBufferedBar();(e===tw.GC.MEDIA_DURATION||e===tw.GC.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=sO(this,ts),this.updateBar())}}get mediaChaptersCues(){return sO(this,ts)}set mediaChaptersCues(e){var t;sG(this,ts,e),this.updateSegments(null==(t=sO(this,ts))?void 0:t.map(e=>({start:sH(this,e.startTime),end:sH(this,e.endTime)})))}get mediaPaused(){return(0,tR.Y_)(this,tw.GC.MEDIA_PAUSED)}set mediaPaused(e){(0,tR.QW)(this,tw.GC.MEDIA_PAUSED,e)}get mediaLoading(){return(0,tR.Y_)(this,tw.GC.MEDIA_LOADING)}set mediaLoading(e){(0,tR.QW)(this,tw.GC.MEDIA_LOADING,e)}get mediaDuration(){return(0,tR.dm)(this,tw.GC.MEDIA_DURATION)}set mediaDuration(e){(0,tR.pK)(this,tw.GC.MEDIA_DURATION,e)}get mediaCurrentTime(){return(0,tR.dm)(this,tw.GC.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){(0,tR.pK)(this,tw.GC.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return(0,tR.dm)(this,tw.GC.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){(0,tR.pK)(this,tw.GC.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(tw.GC.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e)return void this.removeAttribute(tw.GC.MEDIA_BUFFERED);let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(tw.GC.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(tw.GC.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){null==e?this.removeAttribute(tw.GC.MEDIA_SEEKABLE):this.setAttribute(tw.GC.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return(0,tR.vT)(this,tw.GC.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){(0,tR.tA)(this,tw.GC.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return(0,tR.dm)(this,tw.GC.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){(0,tR.pK)(this,tw.GC.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return(0,tR.Y_)(this,tw.GC.MEDIA_ENDED)}set mediaEnded(e){(0,tR.QW)(this,tw.GC.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t,i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,s=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=sH(this,s)}let{style:a}=(0,tR.aQ)(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=(0,tR.aQ)(this.shadowRoot,"#current-rail"),t=(0,tR.aQ)(this.shadowRoot,'[part~="current-box"]'),i=sW(this,th,tu).call(this,sO(this,tt)),a=sW(this,tc,tm).call(this,i,this.range.valueAsNumber),s=sW(this,tp,tv).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${s}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":sW(this,tA,tk).call(this);break;case"pointermove":sW(this,tE,tb).call(this,e);break;case"pointerup":sO(this,tn)&&sG(this,tn,!1);break;case"pointerdown":sG(this,tn,!0);break;case"pointerleave":sW(this,tg,tf).call(this,null);break;case"transitionstart":(0,tR.qg)(e.target,this)&&setTimeout(()=>sO(this,tr).call(this),0)}}}e8=new WeakMap,e7=new WeakMap,e9=new WeakMap,e6=new WeakMap,te=new WeakMap,tt=new WeakMap,ti=new WeakMap,ta=new WeakMap,ts=new WeakMap,tn=new WeakMap,tr=new WeakMap,to=new WeakSet,tl=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&(0,tR.J9)(this)},td=new WeakMap,th=new WeakSet,tu=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?(0,tR.CQ)(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),s=e.offsetWidth,n=-(a.left-i.left-s/2),r=i.right-a.left-s/2;return{box:{width:s,min:n,max:r},bounds:i,range:a}},tc=new WeakSet,tm=function(e,t){let i=`${100*t}%`,{width:a,min:s,max:n}=e.box;if(!a)return i;if(!Number.isNaN(s)){let e=`calc(1 / var(--_range-width) * 100 * ${s}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(n)){let e=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},tp=new WeakSet,tv=function(e,t){let{width:i,min:a,max:s}=e.box,n=t*e.range.width;if(n<a+sO(this,ti)){let t=e.range.left-e.bounds.left-sO(this,ti);return`${n-i/2+t}px`}if(n>s-sO(this,ta)){let t=e.bounds.right-e.range.right-sO(this,ta);return`${n+i/2-t-e.range.width}px`}return 0},tE=new WeakSet,tb=function(e){let t=[...sO(this,e9)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this)))return void sW(this,tg,tf).call(this,null);let i=this.mediaSeekableEnd;if(!i)return;let a=(0,tR.aQ)(this.shadowRoot,"#preview-rail"),s=(0,tR.aQ)(this.shadowRoot,'[part~="preview-box"]'),n=sW(this,th,tu).call(this,sO(this,te)),r=(e.clientX-n.range.left)/n.range.width;r=Math.max(0,Math.min(1,r));let o=sW(this,tc,tm).call(this,n,r),l=sW(this,tp,tv).call(this,n,r);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),s.style.setProperty("--_box-shift",`${l}`),s.style.setProperty("--_box-width",`${n.box.width}px`),1>Math.abs(Math.round(sO(this,e6))-Math.round(r*i))&&r>.01&&r<.99||(sG(this,e6,r*i),sW(this,tg,tf).call(this,sO(this,e6)))},tg=new WeakSet,tf=function(e){this.dispatchEvent(new tS.Au.CustomEvent(tw.a8.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},tA=new WeakSet,tk=function(){sO(this,e7).stop();let e=s$(this);this.dispatchEvent(new tS.Au.CustomEvent(tw.a8.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},sB.shadowRootOptions={mode:"open"},sB.getContainerTemplateHTML=function(e){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${tw.GC.MEDIA_PREVIEW_IMAGE}], [${tw.GC.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${tw.GC.MEDIA_PREVIEW_IMAGE}], [${tw.GC.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${tw.GC.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${tw.GC.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${tw.GC.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${tw.GC.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${tw.GC.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${tw.GC.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${tw.GC.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${tw.GC.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${tw.GC.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${tw.GC.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${tw.GC.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${tw.GC.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${su.shadowRootOptions.mode}">
            ${su.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `},tS.Au.customElements.get("media-time-range")||tS.Au.customElements.define("media-time-range",sB),i(35344);var sV=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};class sq extends ap{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,ty,()=>{let e=this.range.value,t=new tS.Au.CustomEvent(tw.a8.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}static get observedAttributes(){return[...super.observedAttributes,tw.GC.MEDIA_VOLUME,tw.GC.MEDIA_MUTED,tw.GC.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",(0,tC.t)("volume")),this.range.addEventListener("input",sV(this,ty))}disconnectedCallback(){this.range.removeEventListener("input",sV(this,ty)),super.disconnectedCallback()}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===tw.GC.MEDIA_VOLUME||e===tw.GC.MEDIA_MUTED){let e;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(e=this.range.valueAsNumber,`${Math.round(100*e)}%`)),this.updateBar()}}get mediaVolume(){return(0,tR.dm)(this,tw.GC.MEDIA_VOLUME,1)}set mediaVolume(e){(0,tR.pK)(this,tw.GC.MEDIA_VOLUME,e)}get mediaMuted(){return(0,tR.Y_)(this,tw.GC.MEDIA_MUTED)}set mediaMuted(e){(0,tR.QW)(this,tw.GC.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return(0,tR.vT)(this,tw.GC.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){(0,tR.tA)(this,tw.GC.MEDIA_VOLUME_UNAVAILABLE,e)}}ty=new WeakMap,tS.Au.customElements.get("media-volume-range")||tS.Au.customElements.define("media-volume-range",sq);class sQ extends i0.T{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,tw.GC.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=(null==(e=this.shadowRoot)?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=(0,tC.t)("Loop"))}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===tw.GC.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return(0,tR.Y_)(this,tw.GC.MEDIA_LOOP)}set mediaLoop(e){(0,tR.QW)(this,tw.GC.MEDIA_LOOP,e)}handleClick(){let e=!this.mediaLoop,t=new tS.Au.CustomEvent(tw.a8.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}sQ.getSlotTemplateHTML=function(e){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${tw.GC.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `},sQ.getTooltipContentHTML=function(){return(0,tC.t)("Loop")},tS.Au.customElements.get("media-loop-button")||tS.Au.customElements.define("media-loop-button",sQ)},57194:(e,t,i)=>{i.d(t,{A:()=>n});var a=i(32171),s=i(6029);let n=(0,a.A)((0,s.jsx)("path",{d:"M14.17 5 19 9.83V19H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9.83c0-.53-.21-1.04-.59-1.41l-4.83-4.83c-.37-.38-.88-.59-1.41-.59M7 15h10v2H7zm0-4h10v2H7zm0-4h7v2H7z"}),"TextSnippetOutlined")},61417:(e,t,i)=>{i.d(t,{A:()=>n});var a=i(32171),s=i(6029);let n=(0,a.A)((0,s.jsx)("path",{d:"m14.25 2.26-.08-.04-.01.02C13.46 2.09 12.74 2 12 2 6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-4.75-3.31-8.72-7.75-9.74M19.41 9h-7.99l2.71-4.7c2.4.66 4.35 2.42 5.28 4.7M13.1 4.08 10.27 9l-1.15 2L6.4 6.3C7.84 4.88 9.82 4 12 4c.37 0 .74.03 1.1.08M5.7 7.09 8.54 12l1.15 2H4.26C4.1 13.36 4 12.69 4 12c0-1.85.64-3.55 1.7-4.91M4.59 15h7.98l-2.71 4.7c-2.4-.67-4.34-2.42-5.27-4.7m6.31 4.91L14.89 13l2.72 4.7C16.16 19.12 14.18 20 12 20c-.38 0-.74-.04-1.1-.09m7.4-3-4-6.91h5.43c.17.64.27 1.31.27 2 0 1.85-.64 3.55-1.7 4.91"}),"CameraOutlined")},63134:(e,t,i)=>{i.d(t,{A:()=>n});var a=i(32171),s=i(6029);let n=(0,a.A)((0,s.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack")},68193:(e,t,i)=>{var a;i.d(t,{Ph:()=>o,xC:()=>r,t:()=>l});let s={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."}},n=(null==(a=globalThis.navigator)?void 0:a.language)||"en",r=e=>{n=e},o=()=>{let[e]=n.split("-");return s[n]?n:s[e]?e:"en"},l=(e,t={})=>(e=>{var t,i,a;let[r]=n.split("-");return(null==(t=s[n])?void 0:t[e])||(null==(i=s[r])?void 0:i[e])||(null==(a=s.en)?void 0:a[e])||e})(e).replace(/\{(\w+)\}/g,(e,i)=>i in t?String(t[i]):`{${i}}`)},77152:(e,t,i)=>{i.d(t,{A:()=>n});var a=i(32171),s=i(6029);let n=(0,a.A)((0,s.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"}),"ContentCopy")},79498:(e,t,i)=>{let a,s=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"],n=["autopictureinpicture","disablepictureinpicture","disableremoteplayback","autoplay","controls","controlslist","crossorigin","loop","muted","playsinline","poster","preload","src"];function r(e){return`
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media">
      <audio${d(e)}></audio>
    </slot>
    <slot></slot>
  `}function o(e){return`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media">
      <video${d(e)}></video>
    </slot>
    <slot></slot>
  `}function l(e,{tag:t,is:i}){let a=globalThis.document?.createElement?.(t,{is:i}),d=a?function(e){let t=[];for(let i=Object.getPrototypeOf(e);i&&i!==HTMLElement.prototype;i=Object.getPrototypeOf(i)){let e=Object.getOwnPropertyNames(i);t.push(...e)}return t}(a):[];return class l extends e{static getTemplateHTML=t.endsWith("audio")?r:o;static shadowRootOptions={mode:"open"};static Events=s;static #e=!1;static get observedAttributes(){return l.#t(),[...a?.constructor?.observedAttributes??[],...n]}static #t(){if(this.#e)return;this.#e=!0;let e=new Set(this.observedAttributes);for(let t of(e.delete("muted"),d))if(!(t in this.prototype))if("function"==typeof a[t])this.prototype[t]=function(...e){return this.#i(),(()=>{if(this.call)return this.call(t,...e);let i=this.nativeEl?.[t];return i?.apply(this.nativeEl,e)})()};else{let i={get(){this.#i();let i=t.toLowerCase();if(e.has(i)){let e=this.getAttribute(i);return null!==e&&(""===e||e)}return this.get?.(t)??this.nativeEl?.[t]}};t!==t.toUpperCase()&&(i.set=function(i){this.#i();let a=t.toLowerCase();e.has(a)?!0===i||!1===i||null==i?this.toggleAttribute(a,!!i):this.setAttribute(a,i):this.set?this.set(t,i):this.nativeEl&&(this.nativeEl[t]=i)}),Object.defineProperty(this.prototype,t,i)}}#a=!1;#s=null;#n=new Map;#r;#o;get;set;call;get nativeEl(){return this.#i(),this.#s??this.querySelector(":scope > [slot=media]")??this.querySelector(t)??this.shadowRoot?.querySelector(t)??null}set nativeEl(e){this.#s=e}get defaultMuted(){return this.hasAttribute("muted")}set defaultMuted(e){this.toggleAttribute("muted",e)}get src(){return this.getAttribute("src")}set src(e){this.setAttribute("src",`${e}`)}get preload(){return this.getAttribute("preload")??this.nativeEl?.preload}set preload(e){this.setAttribute("preload",`${e}`)}#i(){this.#a||(this.#a=!0,this.init())}init(){if(!this.shadowRoot){this.attachShadow({mode:"open"});let e=function(e){let t={};for(let i of e)t[i.name]=i.value;return t}(this.attributes);i&&(e.is=i),t&&(e.part=t),this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}for(let e of(this.nativeEl.muted=this.hasAttribute("muted"),d))this.#l(e);this.#d()}#d(){for(let e of(this.#r=new MutationObserver(this.#h.bind(this)),this.#o=()=>this.#u(),this.shadowRoot?.addEventListener("slotchange",this.#o),this.#u(),this.constructor.Events))this.shadowRoot?.addEventListener(e,this,!0)}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{detail:e.detail}))}#u(){let e=new Map(this.#n),t=this.shadowRoot?.querySelector("slot:not([name])");(t?.assignedElements({flatten:!0}).filter(e=>["track","source"].includes(e.localName))).forEach(t=>{e.delete(t);let i=this.#n.get(t);i||(i=t.cloneNode(),this.#n.set(t,i),this.#r?.observe(t,{attributes:!0})),this.nativeEl?.append(i),this.#c(i)}),e.forEach((e,t)=>{e.remove(),this.#n.delete(t)})}#h(e){for(let t of e)if("attributes"===t.type){let{target:e,attributeName:i}=t,a=this.#n.get(e);a&&i&&(a.setAttribute(i,e.getAttribute(i)??""),this.#c(a))}}#c(e){e&&"track"===e.localName&&e.default&&("chapters"===e.kind||"metadata"===e.kind)&&"disabled"===e.track.mode&&(e.track.mode="hidden")}#l(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}attributeChangedCallback(e,t,i){this.#i(),this.#m(e,t,i)}#m(e,t,i){["id","class"].includes(e)||!l.observedAttributes.includes(e)&&this.constructor.observedAttributes.includes(e)||(null===i?this.nativeEl?.removeAttribute(e):this.nativeEl?.getAttribute(e)!==i&&this.nativeEl?.setAttribute(e,i))}connectedCallback(){this.#i(),this.#o||this.#d()}disconnectedCallback(){for(let e of(this.#r?.disconnect(),this.#r=void 0,this.#o&&(this.shadowRoot?.removeEventListener("slotchange",this.#o),this.#o=void 0),this.constructor.Events))this.shadowRoot?.removeEventListener(e,this,!0);this.#n.forEach(e=>e.remove()),this.#n.clear(),this.#s=null}}}function d(e){let t="";for(let i in e){if(!n.includes(i))continue;let a=e[i];""===a?t+=` ${i}`:t+=` ${i}="${a}"`}return t}let h=l(globalThis.HTMLElement??class{},{tag:"video"});l(globalThis.HTMLElement??class{},{tag:"audio"});class u extends Event{track;constructor(e,t){super(e),this.track=t.track}}let c=new WeakMap;function m(e){var t,i;let a;return c.get(e)??(t=e,i={},(a=c.get(t))||c.set(t,a={}),Object.assign(a,i))}function p(e,t){let i=e.videoTracks;m(t).media=new WeakRef(e),m(t).renditionSet||(m(t).renditionSet=new Set);let a=m(i).trackSet;a.add(t);let s=a.size-1;s in E.prototype||Object.defineProperty(E.prototype,s,{get(){return[...m(this).trackSet][s]}}),queueMicrotask(()=>{i.dispatchEvent(new u("addtrack",{track:t}))})}function v(e){let t=m(e).media?.deref()?.videoTracks;t&&(m(t).trackSet.delete(e),queueMicrotask(()=>{t.dispatchEvent(new u("removetrack",{track:e}))}))}class E extends EventTarget{#p;#v;#E;constructor(){super(),m(this).trackSet=new Set}get #b(){return m(this).trackSet}[Symbol.iterator](){return this.#b.values()}get length(){return this.#b.size}getTrackById(e){return[...this.#b].find(t=>t.id===e)??null}get selectedIndex(){return[...this.#b].findIndex(e=>e.selected)}get onaddtrack(){return this.#p}set onaddtrack(e){this.#p&&(this.removeEventListener("addtrack",this.#p),this.#p=void 0),"function"==typeof e&&(this.#p=e,this.addEventListener("addtrack",e))}get onremovetrack(){return this.#v}set onremovetrack(e){this.#v&&(this.removeEventListener("removetrack",this.#v),this.#v=void 0),"function"==typeof e&&(this.#v=e,this.addEventListener("removetrack",e))}get onchange(){return this.#E}set onchange(e){this.#E&&(this.removeEventListener("change",this.#E),this.#E=void 0),"function"==typeof e&&(this.#E=e,this.addEventListener("change",e))}}class b extends Event{rendition;constructor(e,t){super(e),this.rendition=t.rendition}}function g(e){let t=m(e).media?.deref();return t?[...t.videoTracks].filter(e=>e.selected).flatMap(e=>[...m(e).renditionSet]):[]}class f extends EventTarget{#g;#f;#E;[Symbol.iterator](){return g(this).values()}get length(){return g(this).length}getRenditionById(e){return g(this).find(t=>`${t.id}`==`${e}`)??null}get selectedIndex(){return g(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of g(this).entries())i.selected=t===e}get onaddrendition(){return this.#g}set onaddrendition(e){this.#g&&(this.removeEventListener("addrendition",this.#g),this.#g=void 0),"function"==typeof e&&(this.#g=e,this.addEventListener("addrendition",e))}get onremoverendition(){return this.#f}set onremoverendition(e){this.#f&&(this.removeEventListener("removerendition",this.#f),this.#f=void 0),"function"==typeof e&&(this.#f=e,this.addEventListener("removerendition",e))}get onchange(){return this.#E}set onchange(e){this.#E&&(this.removeEventListener("change",this.#E),this.#E=void 0),"function"==typeof e&&(this.#E=e,this.addEventListener("change",e))}}class A{src;id;width;height;bitrate;frameRate;codec;#A=!1;get selected(){return this.#A}set selected(e){if(this.#A!==e){var t;let i;this.#A=e,t=this,(i=m(t).media?.deref()?.videoRenditions)&&!m(i).changeRequested&&(m(i).changeRequested=!0,queueMicrotask(()=>{delete m(i).changeRequested,m(t).track.selected&&i.dispatchEvent(new Event("change"))}))}}}class k{id;kind;label="";language="";sourceBuffer;#A=!1;addRendition(e,t,i,a,s,n){var r;let o,l,d,h=new A;return h.src=e,h.width=t,h.height=i,h.frameRate=n,h.bitrate=s,h.codec=a,r=this,o=m(r).media?.deref()?.videoRenditions,m(h).media=m(r).media,m(h).track=r,(l=m(r).renditionSet).add(h),(d=l.size-1)in f.prototype||Object.defineProperty(f.prototype,d,{get(){return g(this)[d]}}),queueMicrotask(()=>{o&&r.selected&&o.dispatchEvent(new b("addrendition",{rendition:h}))}),h}removeRendition(e){let t,i;t=m(e).media?.deref()?.videoRenditions,i=m(e).track,m(i).renditionSet.delete(e),queueMicrotask(()=>{let i=m(e).track;t&&i.selected&&t.dispatchEvent(new b("removerendition",{rendition:e}))})}get selected(){return this.#A}set selected(e){this.#A===e||(this.#A=e,!0===e&&function(e){let t=m(e).media?.deref()?.videoTracks??[],i=!1;for(let a of t)a!==e&&(a.selected=!1,i=!0);if(i){if(m(t).changeRequested)return;m(t).changeRequested=!0,queueMicrotask(()=>{delete m(t).changeRequested,t.dispatchEvent(new Event("change"))})}}(this))}}function y(e){let t=m(e).media?.deref();return t?[...t.audioTracks].filter(e=>e.enabled).flatMap(e=>[...m(e).renditionSet]):[]}class w extends EventTarget{#g;#f;#E;[Symbol.iterator](){return y(this).values()}get length(){return y(this).length}getRenditionById(e){return y(this).find(t=>`${t.id}`==`${e}`)??null}get selectedIndex(){return y(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of y(this).entries())i.selected=t===e}get onaddrendition(){return this.#g}set onaddrendition(e){this.#g&&(this.removeEventListener("addrendition",this.#g),this.#g=void 0),"function"==typeof e&&(this.#g=e,this.addEventListener("addrendition",e))}get onremoverendition(){return this.#f}set onremoverendition(e){this.#f&&(this.removeEventListener("removerendition",this.#f),this.#f=void 0),"function"==typeof e&&(this.#f=e,this.addEventListener("removerendition",e))}get onchange(){return this.#E}set onchange(e){this.#E&&(this.removeEventListener("change",this.#E),this.#E=void 0),"function"==typeof e&&(this.#E=e,this.addEventListener("change",e))}}class T{src;id;bitrate;codec;#A=!1;get selected(){return this.#A}set selected(e){if(this.#A!==e){var t;let i;this.#A=e,t=this,(i=m(t).media?.deref()?.audioRenditions)&&!m(i).changeRequested&&(m(i).changeRequested=!0,queueMicrotask(()=>{delete m(i).changeRequested,m(t).track.enabled&&i.dispatchEvent(new Event("change"))}))}}}function C(e,t){let i=e.audioTracks;m(t).media=new WeakRef(e),m(t).renditionSet||(m(t).renditionSet=new Set);let a=m(i).trackSet;a.add(t);let s=a.size-1;s in M.prototype||Object.defineProperty(M.prototype,s,{get(){return[...m(this).trackSet][s]}}),queueMicrotask(()=>{i.dispatchEvent(new u("addtrack",{track:t}))})}function I(e){let t=m(e).media?.deref()?.audioTracks;t&&(m(t).trackSet.delete(e),queueMicrotask(()=>{t.dispatchEvent(new u("removetrack",{track:e}))}))}class M extends EventTarget{#p;#v;#E;constructor(){super(),m(this).trackSet=new Set}get #b(){return m(this).trackSet}[Symbol.iterator](){return this.#b.values()}get length(){return this.#b.size}getTrackById(e){return[...this.#b].find(t=>t.id===e)??null}get onaddtrack(){return this.#p}set onaddtrack(e){this.#p&&(this.removeEventListener("addtrack",this.#p),this.#p=void 0),"function"==typeof e&&(this.#p=e,this.addEventListener("addtrack",e))}get onremovetrack(){return this.#v}set onremovetrack(e){this.#v&&(this.removeEventListener("removetrack",this.#v),this.#v=void 0),"function"==typeof e&&(this.#v=e,this.addEventListener("removetrack",e))}get onchange(){return this.#E}set onchange(e){this.#E&&(this.removeEventListener("change",this.#E),this.#E=void 0),"function"==typeof e&&(this.#E=e,this.addEventListener("change",e))}}class _{id;kind;label="";language="";sourceBuffer;#k=!1;addRendition(e,t,i){var a;let s,n,r,o=new T;return o.src=e,o.codec=t,o.bitrate=i,a=this,s=m(a).media?.deref()?.audioRenditions,m(o).media=m(a).media,m(o).track=a,(n=m(a).renditionSet).add(o),(r=n.size-1)in w.prototype||Object.defineProperty(w.prototype,r,{get(){return y(this)[r]}}),queueMicrotask(()=>{s&&a.enabled&&s.dispatchEvent(new b("addrendition",{rendition:o}))}),o}removeRendition(e){let t,i;t=m(e).media?.deref()?.audioRenditions,i=m(e).track,m(i).renditionSet.delete(e),queueMicrotask(()=>{let i=m(e).track;t&&i.enabled&&t.dispatchEvent(new b("removerendition",{rendition:e}))})}get enabled(){return this.#k}set enabled(e){if(this.#k!==e){let t;this.#k=e,(t=m(this).media?.deref()?.audioTracks)&&!m(t).changeRequested&&(m(t).changeRequested=!0,queueMicrotask(()=>{delete m(t).changeRequested,t.dispatchEvent(new Event("change"))}))}}}let S=R(globalThis.HTMLMediaElement,"video"),L=R(globalThis.HTMLMediaElement,"audio");function R(e,t){if(e?.prototype)return Object.getOwnPropertyDescriptor(e.prototype,`${t}Tracks`)?.get}var x=i(85511);let D=(a=function(e){if(!e?.prototype)return e;let t=R(e,"video");(!t||`${t}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"videoTracks",{get(){var e=this;let t=m(e).videoTracks;if(!t&&(t=new E,m(e).videoTracks=t,S)){let i=S.call(e.nativeEl??e);for(let t of i)p(e,t);i.addEventListener("change",()=>{t.dispatchEvent(new Event("change"))}),i.addEventListener("addtrack",a=>{if([...t].some(e=>e instanceof k)){for(let e of i)v(e);return}p(e,a.track)}),i.addEventListener("removetrack",e=>{v(e.track)})}return t}});let i=R(e,"audio");(!i||`${i}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"audioTracks",{get(){var e=this;let t=m(e).audioTracks;if(!t&&(t=new M,m(e).audioTracks=t,L)){let i=L.call(e.nativeEl??e);for(let t of i)C(e,t);i.addEventListener("change",()=>{t.dispatchEvent(new Event("change"))}),i.addEventListener("addtrack",a=>{if([...t].some(e=>e instanceof _)){for(let e of i)I(e);return}C(e,a.track)}),i.addEventListener("removetrack",e=>{I(e.track)})}return t}}),"addVideoTrack"in e.prototype||(e.prototype.addVideoTrack=function(e,t="",i=""){let a=new k;return a.kind=e,a.label=t,a.language=i,p(this,a),a}),"removeVideoTrack"in e.prototype||(e.prototype.removeVideoTrack=v),"addAudioTrack"in e.prototype||(e.prototype.addAudioTrack=function(e,t="",i=""){let a=new _;return a.kind=e,a.label=t,a.language=i,C(this,a),a}),"removeAudioTrack"in e.prototype||(e.prototype.removeAudioTrack=I),"videoRenditions"in e.prototype||Object.defineProperty(e.prototype,"videoRenditions",{get(){return a(this)}});let a=e=>{let t=m(e).videoRenditions;return t||(m(t=new f).media=new WeakRef(e),m(e).videoRenditions=t),t};"audioRenditions"in e.prototype||Object.defineProperty(e.prototype,"audioRenditions",{get(){return s(this)}});let s=e=>{let t=m(e).audioRenditions;return t||(m(t=new w).media=new WeakRef(e),m(e).audioRenditions=t),t};return e}(h),class extends a{static shadowRootOptions={...a.shadowRootOptions};static getTemplateHTML=(e,t={})=>{let{src:i,...s}=e;return`
        <script type="application/json" id="config">
          ${JSON.stringify(t.config||{})}
        </script>
        ${a.getTemplateHTML(s)}
      `};#y=null;#w=null;constructor(){super(),this.#l("config")}get config(){return this.#w}set config(e){this.#w=e}attributeChangedCallback(e,t,i){"src"!==e&&super.attributeChangedCallback(e,t,i),"src"===e&&t!=i&&this.load()}#T(){var e,t;null==(e=this.#y)||e.remove(),null==(t=this.nativeEl)||t.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",this.#C),this.api&&(this.api.detachMedia(),this.api.destroy(),this.api=null)}async load(){var e,t;let i=!this.api;if(this.#T(),this.src){if(i&&!this.#w&&(this.#w=JSON.parse((null==(e=this.shadowRoot.getElementById("config"))?void 0:e.textContent)||"{}")),x.Ay.isSupported()){switch(await Promise.resolve(),this.api=new x.Ay({liveDurationInfinity:!0,autoStartLoad:!1,...this.config}),this.api.loadSource(this.src),this.api.attachMedia(this.nativeEl),this.nativeEl.preload){case"none":{let e=()=>this.api.startLoad();this.nativeEl.addEventListener("play",e,{once:!0}),this.api.on(x.Ay.Events.DESTROYING,()=>{this.nativeEl.removeEventListener("play",e)});break}case"metadata":{let e=this.api.config.maxBufferLength,t=this.api.config.maxBufferSize;this.api.config.maxBufferLength=1,this.api.config.maxBufferSize=1;let i=()=>{this.api.config.maxBufferLength=e,this.api.config.maxBufferSize=t};this.nativeEl.addEventListener("play",i,{once:!0}),this.api.on(x.Ay.Events.DESTROYING,()=>{this.nativeEl.removeEventListener("play",i)}),this.api.startLoad();break}default:this.api.startLoad()}this.nativeEl.webkitCurrentPlaybackTargetIsWireless&&this.api.stopLoad(),this.nativeEl.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",this.#C),this.#y=document.createElement("source"),this.#y.setAttribute("type","application/x-mpegURL"),this.#y.setAttribute("src",this.src),this.nativeEl.disableRemotePlayback=!1,this.nativeEl.append(this.#y);let e=new WeakMap;this.api.on(x.Ay.Events.MANIFEST_PARSED,(t,i)=>{this.nativeEl.autoplay&&this.nativeEl.paused&&this.nativeEl.play().catch(e=>{console.warn("Autoplay failed:",e)}),s();let a=this.videoTracks.getTrackById("main");for(let[t,s]of(a||((a=this.addVideoTrack("main")).id="main",a.selected=!0),i.levels.entries())){let i=a.addRendition(s.url[0],s.width,s.height,s.videoCodec,s.bitrate);e.set(s,`${t}`),i.id=`${t}`}for(let[e,t]of i.audioTracks.entries()){let i=t.default?"main":"alternative",a=this.addAudioTrack(i,t.name,t.lang);a.id=`${e}`,t.default&&(a.enabled=!0)}}),this.audioTracks.addEventListener("change",()=>{var e;let t=+(null==(e=[...this.audioTracks].find(e=>e.enabled))?void 0:e.id),i=this.api.audioTracks.map(e=>e.id);t!=this.api.audioTrack&&i.includes(t)&&(this.api.audioTrack=t)}),this.api.on(x.Ay.Events.LEVELS_UPDATED,(t,i)=>{let a=this.videoTracks[this.videoTracks.selectedIndex??0];if(!a)return;let s=i.levels.map(t=>e.get(t));for(let e of this.videoRenditions)e.id&&!s.includes(e.id)&&a.removeRendition(e)});let i=null;this.api.on(x.Ay.Events.ERROR,(e,t)=>{t.type===x.Ay.ErrorTypes.NETWORK_ERROR&&t.details===x.Ay.ErrorDetails.FRAG_LOAD_ERROR&&(i=t.frag.level)}),this.api.on(x.Ay.Events.LEVEL_SWITCHED,(e,t)=>{let a=t.level;null!==i&&a<i&&(console.warn(`\u26A0\uFE0F hls.js downgraded quality from level ${i} to ${a} due to fragment load failure.`),this.videoRenditions.selectedIndex=a,i=null)});let a=e=>{let t=e.target.selectedIndex;t!=this.api.nextLevel&&(this.api.nextLevel=t)};null==(t=this.videoRenditions)||t.addEventListener("change",a);let s=()=>{for(let e of this.videoTracks)this.removeVideoTrack(e);for(let e of this.audioTracks)this.removeAudioTrack(e)};this.api.once(x.Ay.Events.DESTROYING,s);return}await Promise.resolve(),this.nativeEl.canPlayType("application/vnd.apple.mpegurl")&&(this.nativeEl.src=this.src)}}#C=()=>{var e,t,i;(null==(e=this.nativeEl)?void 0:e.webkitCurrentPlaybackTargetIsWireless)?null==(t=this.api)||t.stopLoad():null==(i=this.api)||i.startLoad()};#l(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}});globalThis.customElements&&!globalThis.customElements.get("hls-video")&&globalThis.customElements.define("hls-video",D)},79648:(e,t,i)=>{i.d(t,{L5:()=>m,V5:()=>p,ap:()=>c});var a,s=i(1818),n=i(29222),r=i(35035),o=i(50055),l=i(48360),d=i(68193),h=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};let u="rates",c=[1,1.2,1.5,1.7,2],m=1;function p(e){return Math.round(100*e)/100}class v extends s.T{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,a,new o.M(this,u,{defaultValue:c})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${p(null!=(e=this.mediaPlaybackRate)?e:m)}x`}static get observedAttributes(){return[...super.observedAttributes,r.GC.MEDIA_PLAYBACK_RATE,u]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===u&&(h(this,a).value=i),e===r.GC.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=p(Number.isNaN(e)?m:e);this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",(0,d.t)("Playback rate {playbackRate}",{playbackRate:t}))}}get rates(){return h(this,a)}set rates(e){e?Array.isArray(e)?h(this,a).value=e.join(" "):"string"==typeof e&&(h(this,a).value=e):h(this,a).value=""}get mediaPlaybackRate(){return(0,l.dm)(this,r.GC.MEDIA_PLAYBACK_RATE,m)}set mediaPlaybackRate(e){(0,l.pK)(this,r.GC.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(h(this,a).values(),e=>+e).sort((e,t)=>e-t),s=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:m,o=new n.Au.CustomEvent(r.a8.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:s});this.dispatchEvent(o)}}a=new WeakMap,v.getSlotTemplateHTML=function(e){let t=e.mediaplaybackrate?p(+e.mediaplaybackrate):m;return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${t}x</slot>
  `},v.getTooltipContentHTML=function(){return(0,d.t)("Playback rate")},n.Au.customElements.get("media-playback-rate-button")||n.Au.customElements.define("media-playback-rate-button",v)},82589:(e,t,i)=>{i.d(t,{u:()=>l,v:()=>o});var a=i(29222);let s=new WeakMap,n=e=>{let t=s.get(e);return t||s.set(e,t=new Set),t},r=new a.Au.ResizeObserver(e=>{for(let t of e)for(let e of n(t.target))e(t)});function o(e,t){n(e).add(t),r.observe(e)}function l(e,t){let i=n(e);i.delete(t),i.size||r.unobserve(e)}},85378:(e,t,i)=>{i.d(t,{QQ:()=>e9,IA:()=>tv});var a,s,n,r,o,l,d,h,u,c,m,p,v,E,b,g,f,A,k,y,w,T,C,I,M,_,S,L,R,x,D,N,P,O,U,G,W,H,$,B,V,q,Q,F,j,Y,K,z,Z,X,J,ee,et,ei,ea,es,en,er,eo,el,ed,eh,eu,ec,em,ep,ev,eE,eb,eg,ef,eA,ek,ey,ew,eT,eC,eI,eM,e_,eS,eL,eR,ex,eD,eN,eP,eO,eU,eG,eW,eH,e$,eB,eV,eq,eQ=i(35035),eF=i(29222);function ej(e){return e.split("-")[0]}var eY=i(82589);class eK extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}}class ez extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}}var eZ=i(48360),eX=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},eJ=(e,t,i)=>(eX(e,t,"read from private field"),i?i.call(e):t.get(e)),e0=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},e1=(e,t,i,a)=>(eX(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),e2=(e,t,i)=>(eX(e,t,"access private method"),i);function e5({type:e,text:t,value:i,checked:a}){let s=eF.Al.createElement("media-chrome-menu-item");s.type=null!=e?e:"",s.part.add("menu-item"),e&&s.part.add(e),s.value=i,s.checked=a;let n=eF.Al.createElement("span");return n.textContent=t,s.append(n),s}function e3(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let e4="style",e8="hidden",e7="disabled";class e9 extends eF.Au.HTMLElement{constructor(){if(super(),e0(this,h),e0(this,c),e0(this,v),e0(this,b),e0(this,f),e0(this,k),e0(this,C),e0(this,M),e0(this,S),e0(this,R),e0(this,D),e0(this,P),e0(this,U),e0(this,W),e0(this,$),e0(this,V),e0(this,Q),e0(this,j),e0(this,a,null),e0(this,s,null),e0(this,n,null),e0(this,r,new Set),e0(this,o,void 0),e0(this,l,!1),e0(this,d,null),e0(this,p,()=>{let e=eJ(this,r),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));e1(this,r,t)}),e0(this,w,()=>{e2(this,C,I).call(this),e2(this,M,_).call(this,!1)}),e0(this,T,()=>{e2(this,C,I).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=(0,eZ.kg)(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),e1(this,o,new MutationObserver(eJ(this,p)))}static get observedAttributes(){return[e7,e8,e4,"anchor",eQ.Ex.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":e2(this,h,u).call(this,e);break;case"invoke":e2(this,b,g).call(this,e);break;case"click":e2(this,S,L).call(this,e);break;case"toggle":e2(this,D,N).call(this,e);break;case"focusout":e2(this,U,G).call(this,e);break;case"keydown":e2(this,W,H).call(this,e)}}connectedCallback(){var e,t;eJ(this,o).observe(this.defaultSlot,{childList:!0}),e1(this,d,(0,eZ.Vw)(this.shadowRoot,":host")),e2(this,v,E).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),e1(this,a,(0,eZ.xf)(this)),null==(t=null==(e=eJ(this,a))?void 0:e.associateElement)||t.call(e,this),this.hidden||((0,eY.v)(te(this),eJ(this,w)),(0,eY.v)(this,eJ(this,T))),e2(this,c,m).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){var e,t;eJ(this,o).disconnect(),(0,eY.u)(te(this),eJ(this,w)),(0,eY.u)(this,eJ(this,T)),this.disable(),null==(t=null==(e=eJ(this,a))?void 0:e.unassociateElement)||t.call(e,this),e1(this,a,null),e1(this,s,null),e1(this,n,null),this.shadowRoot.removeEventListener("slotchange",this)}attributeChangedCallback(e,t,i){var s,n,r,o;e===e8&&i!==t?(eJ(this,l)||e1(this,l,!0),this.hidden?e2(this,k,y).call(this):e2(this,f,A).call(this),this.dispatchEvent(new ez({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===eQ.Ex.MEDIA_CONTROLLER?(t&&(null==(n=null==(s=eJ(this,a))?void 0:s.unassociateElement)||n.call(s,this),e1(this,a,null)),i&&this.isConnected&&(e1(this,a,(0,eZ.xf)(this)),null==(o=null==(r=eJ(this,a))?void 0:r.associateElement)||o.call(r,this))):e===e7&&i!==t?null==i?this.enable():this.disable():e===e4&&i!==t&&e2(this,v,E).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=(0,eZ.l5)(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(e6)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&e2(this,j,Y).call(this,t)}focus(){if(e1(this,s,(0,eZ.bq)()),this.items.length){e2(this,Q,F).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=e2(this,$,B).call(this,e);i&&(e2(this,j,Y).call(this,i,"checkbox"===i.type),eJ(this,n)&&!this.hidden&&(null==(t=eJ(this,s))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,s=this.items,n=null!=(i=null!=(t=e2(this,$,B).call(this,e))?t:e2(this,V,q).call(this))?i:s[0],r=Math.max(0,s.indexOf(n));"ArrowDown"===a?r++:"ArrowUp"===a?r--:"Home"===e.key?r=0:"End"===e.key&&(r=s.length-1),r<0&&(r=s.length-1),r>s.length-1&&(r=0),e2(this,Q,F).call(this,s[r]),s[r].focus()}}function e6(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function te(e){var t;return null!=(t=e.getAttribute("bounds")?(0,eZ.CQ)(e,`#${e.getAttribute("bounds")}`):(0,eZ.Bk)(e)||e.parentElement)?t:e}a=new WeakMap,s=new WeakMap,n=new WeakMap,r=new WeakMap,o=new WeakMap,l=new WeakMap,d=new WeakMap,h=new WeakSet,u=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&e2(this,c,m).call(this),t.name||eJ(this,p).call(this)},c=new WeakSet,m=function(){let e=this.shadowRoot.querySelector('slot[name="header"]');e.hidden=0===this.shadowRoot.querySelector('slot[name="title"]').assignedNodes().length&&0===e.assignedNodes().length},p=new WeakMap,v=new WeakSet,E=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},b=new WeakSet,g=function(e){e1(this,n,e.relatedTarget),(0,eZ.qg)(this,e.relatedTarget)||(this.hidden=!this.hidden)},f=new WeakSet,A=function(){var e;null==(e=eJ(this,n))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),(0,eY.v)(te(this),eJ(this,w)),(0,eY.v)(this,eJ(this,T))},k=new WeakSet,y=function(){var e;null==(e=eJ(this,n))||e.setAttribute("aria-expanded","false"),(0,eY.u)(te(this),eJ(this,w)),(0,eY.u)(this,eJ(this,T))},w=new WeakMap,T=new WeakMap,C=new WeakSet,I=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:i}=function({anchor:e,floating:t,placement:i}){let{x:a,y:s}=function({anchor:e,floating:t},i){let a,s="x"==(["top","bottom"].includes(ej(i))?"y":"x")?"y":"x",n="y"===s?"height":"width",r=ej(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[n]/2-t[n]/2;switch(r){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[s]-=d;break;case"end":a[s]+=d}return a}(function({anchor:e,floating:t}){var i,a,s;let n,r;return{anchor:(i=e,a=t.offsetParent,n=i.getBoundingClientRect(),r=null!=(s=null==a?void 0:a.getBoundingClientRect())?s:{x:0,y:0},{x:n.x-r.x,y:n.y-r.y,width:n.width,height:n.height}),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:s}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let a=te(this).getBoundingClientRect(),s=a.width-t-e,n=a.height-i-this.offsetHeight,{style:r}=eJ(this,d);r.setProperty("position","absolute"),r.setProperty("right",`${Math.max(0,s)}px`),r.setProperty("--_menu-bottom",`${n}px`);let o=getComputedStyle(this),l=r.getPropertyValue("--_menu-bottom")===o.bottom?n:parseFloat(o.bottom),h=a.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${h}px`)},M=new WeakSet,_=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=eJ(this,d);if(e||a.setProperty("--media-menu-transition-in","none"),i){let e=i.offsetHeight,a=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${a}px`),this.style.setProperty("min-height",`${e}px`),e2(this,C,I).call(this,a)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),e2(this,C,I).call(this);a.removeProperty("--media-menu-transition-in")},S=new WeakSet,L=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(eJ(this,R,x))){null==(t=eJ(this,s))||t.focus(),this.hidden=!0;return}let i=e2(this,$,B).call(this,e);!i||i.hasAttribute("disabled")||(e2(this,Q,F).call(this,i),this.handleSelect(e))},R=new WeakSet,x=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},D=new WeakSet,N=function(e){if(e.target===this)return;e2(this,P,O).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement!=e.target&&("open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new eK({relatedTarget:i})));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);e2(this,M,_).call(this,!0)},P=new WeakSet,O=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},U=new WeakSet,G=function(e){var t;(0,eZ.qg)(this,e.relatedTarget)||(eJ(this,l)&&(null==(t=eJ(this,s))||t.focus()),eJ(this,n)&&eJ(this,n)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))},W=new WeakSet,H=function(e){var t,i,a,n,r;let{key:o,ctrlKey:d,altKey:h,metaKey:u}=e;if(!d&&!h&&!u&&this.keysUsed.includes(o))if(e.preventDefault(),e.stopPropagation(),"Tab"===o){if(eJ(this,l)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(n=null==(a=this.nextElementSibling)?void 0:a.focus)||n.call(a),this.blur()}else"Escape"===o?(null==(r=eJ(this,s))||r.focus(),eJ(this,l)&&(this.hidden=!0)):"Enter"===o||" "===o?this.handleSelect(e):this.handleMove(e)},$=new WeakSet,B=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},V=new WeakSet,q=function(){return this.items.find(e=>0===e.tabIndex)},Q=new WeakSet,F=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},j=new WeakSet,Y=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},e9.shadowRootOptions={mode:"open"},e9.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `},eF.Au.customElements.get("media-chrome-menu")||eF.Au.customElements.define("media-chrome-menu",e9);var tt=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ti=(e,t,i)=>(tt(e,t,"read from private field"),i?i.call(e):t.get(e)),ta=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ts=(e,t,i,a)=>(tt(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),tn=(e,t,i)=>(tt(e,t,"access private method"),i);let tr="type",to="value",tl="checked",td="disabled";class th extends eF.Au.HTMLElement{constructor(){if(super(),ta(this,Z),ta(this,J),ta(this,et),ta(this,er),ta(this,K,!1),ta(this,z,void 0),ta(this,ea,()=>{var e,t;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(e=this.submenuElement.checkedItems)?void 0:e[0],s=null!=(t=null==a?void 0:a.dataset.description)?t:null==a?void 0:a.text,n=eF.Al.createElement("span");n.textContent=null!=s?s:"",i.replaceChildren(n)}),ta(this,es,e=>{let{key:t}=e;this.keysUsed.includes(t)?this.handleClick(e):this.removeEventListener("keyup",ti(this,es))}),ta(this,en,e=>{let{metaKey:t,altKey:i,key:a}=e;t||i||!this.keysUsed.includes(a)?this.removeEventListener("keyup",ti(this,es)):this.addEventListener("keyup",ti(this,es),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=(0,eZ.kg)(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[tr,td,tl,to]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),tu(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":tn(this,Z,X).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":ti(this,en).call(this,e);break;case"keyup":ti(this,es).call(this,e)}}attributeChangedCallback(e,t,i){e===tl&&tu(this)&&!ti(this,K)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===tr&&i!==t?this.role="menuitem"+i:e===td&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(td)||this.enable(),this.role="menuitem"+this.type,ts(this,z,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),tn(this,er,eo).call(this),this.submenuElement&&tn(this,J,ee).call(this),this.shadowRoot.addEventListener("slotchange",this)}disconnectedCallback(){this.disable(),tn(this,er,eo).call(this),ts(this,z,null),this.shadowRoot.removeEventListener("slotchange",this)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=(0,eZ.l5)(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(tr))?e:""}set type(e){this.setAttribute(tr,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(to))?e:this.text}set value(e){this.setAttribute(to,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(tu(this))return"true"===this.getAttribute("aria-checked")}set checked(e){tu(this)&&(ts(this,K,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!tu(this)&&this.invokeTargetElement&&(0,eZ.qg)(this,e.target)&&this.invokeTargetElement.dispatchEvent(new eK({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function tu(e){return"radio"===e.type||"checkbox"===e.type}K=new WeakMap,z=new WeakMap,Z=new WeakSet,X=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?tn(this,J,ee).call(this):tn(this,et,ei).call(this))},J=new WeakSet,ee=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",ti(this,ea)),this.submenuElement.addEventListener("addmenuitem",ti(this,ea)),this.submenuElement.addEventListener("removemenuitem",ti(this,ea)),ti(this,ea).call(this)},et=new WeakSet,ei=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",ti(this,ea)),this.submenuElement.removeEventListener("addmenuitem",ti(this,ea)),this.submenuElement.removeEventListener("removemenuitem",ti(this,ea)),ti(this,ea).call(this)},ea=new WeakMap,es=new WeakMap,en=new WeakMap,er=new WeakSet,eo=function(){var e;let t=null==(e=ti(this,z))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},th.shadowRootOptions={mode:"open"},th.getTemplateHTML=function(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `},th.getSuffixSlotInnerHTML=function(e){return""},eF.Au.customElements.get("media-chrome-menu-item")||eF.Au.customElements.define("media-chrome-menu-item",th);class tc extends e9{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:(0,eZ.Bk)(this).querySelector("media-settings-menu-button")}}tc.getTemplateHTML=function(e){return`
    ${e9.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `},eF.Au.customElements.get("media-settings-menu")||eF.Au.customElements.define("media-settings-menu",tc);class tm extends th{}tm.shadowRootOptions={mode:"open"},tm.getTemplateHTML=function(e){return`
    ${th.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},tm.getSuffixSlotInnerHTML=function(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},eF.Au.customElements.get("media-settings-menu-item")||eF.Au.customElements.define("media-settings-menu-item",tm);var tp=i(1818);class tv extends tp.T{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=(0,eZ.l5)(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new eK({relatedTarget:this}))}}eF.Au.customElements.get("media-chrome-menu-button")||eF.Au.customElements.define("media-chrome-menu-button",tv);var tE=i(68193);class tb extends tv{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",(0,tE.t)("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:(0,eZ.Bk)(this).querySelector("media-settings-menu")}}tb.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `},tb.getTooltipContentHTML=function(){return(0,tE.t)("Settings")},eF.Au.customElements.get("media-settings-menu-button")||eF.Au.customElements.define("media-settings-menu-button",tb);var tg=i(4857),tf=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tA=(e,t,i)=>(tf(e,t,"read from private field"),i?i.call(e):t.get(e)),tk=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ty=(e,t,i,a)=>(tf(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),tw=(e,t,i)=>(tf(e,t,"access private method"),i);class tT extends e9{constructor(){super(...arguments),tk(this,eh),tk(this,ec),tk(this,el,[]),tk(this,ed,void 0)}static get observedAttributes(){return[...super.observedAttributes,eQ.GC.MEDIA_AUDIO_TRACK_LIST,eQ.GC.MEDIA_AUDIO_TRACK_ENABLED,eQ.GC.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eQ.GC.MEDIA_AUDIO_TRACK_ENABLED&&t!==i?this.value=i:e===eQ.GC.MEDIA_AUDIO_TRACK_LIST&&t!==i&&(ty(this,el,(0,tg.j3)(null!=i?i:"")),tw(this,eh,eu).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",tw(this,ec,em))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",tw(this,ec,em))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=(0,eZ.Bk)(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return tA(this,el)}set mediaAudioTrackList(e){ty(this,el,e),tw(this,eh,eu).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=(0,eZ.vT)(this,eQ.GC.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){(0,eZ.tA)(this,eQ.GC.MEDIA_AUDIO_TRACK_ENABLED,e)}}el=new WeakMap,ed=new WeakMap,eh=new WeakSet,eu=function(){if(tA(this,ed)===JSON.stringify(this.mediaAudioTrackList))return;ty(this,ed,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e.sort((e,t)=>e.id.localeCompare(t.id,void 0,{numeric:!0})),e)){let e=e5({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(e3(this,"checked-indicator")),this.defaultSlot.append(e)}},ec=new WeakSet,em=function(){if(null==this.value)return;let e=new eF.Au.CustomEvent(eQ.a8.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},eF.Au.customElements.get("media-audio-track-menu")||eF.Au.customElements.define("media-audio-track-menu",tT);let tC=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,tI=e=>{let t=(0,tE.t)("Audio");e.setAttribute("aria-label",t)};class tM extends tv{static get observedAttributes(){return[...super.observedAttributes,eQ.GC.MEDIA_AUDIO_TRACK_ENABLED,eQ.GC.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),tI(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eQ.GC.MEDIA_LANG&&tI(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=(0,eZ.Bk)(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=(0,eZ.vT)(this,eQ.GC.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){(0,eZ.tA)(this,eQ.GC.MEDIA_AUDIO_TRACK_ENABLED,e)}}tM.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${tC}</slot>
  `},tM.getTooltipContentHTML=function(){return(0,tE.t)("Audio")},eF.Au.customElements.get("media-audio-track-menu-button")||eF.Au.customElements.define("media-audio-track-menu-button",tM);var t_=i(88687),tS=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tL=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tR=(e,t,i)=>(tS(e,t,"access private method"),i);let tx=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class tD extends e9{constructor(){super(...arguments),tL(this,ev),tL(this,eb),tL(this,ep,void 0)}static get observedAttributes(){return[...super.observedAttributes,eQ.GC.MEDIA_SUBTITLES_LIST,eQ.GC.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eQ.GC.MEDIA_SUBTITLES_LIST&&t!==i?tR(this,ev,eE).call(this):e===eQ.GC.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i||"",tR(this,ev,eE).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",tR(this,eb,eg))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",tR(this,eb,eg))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:(0,eZ.Bk)(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return tN(this,eQ.GC.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){tP(this,eQ.GC.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return tN(this,eQ.GC.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){tP(this,eQ.GC.MEDIA_SUBTITLES_SHOWING,e)}}ep=new WeakMap,ev=new WeakSet,eE=function(){var e,t,i,a;let s=(tS(this,t=ep,"read from private field"),t.get(this)!==JSON.stringify(this.mediaSubtitlesList)),n=this.value!==this.getAttribute(eQ.GC.MEDIA_SUBTITLES_SHOWING);if(!s&&!n)return;i=ep,a=JSON.stringify(this.mediaSubtitlesList),tS(this,i,"write to private field"),i.set(this,a),this.defaultSlot.textContent="";let r=!this.value,o=e5({type:"radio",text:this.formatMenuItemText((0,tE.t)("Off")),value:"off",checked:r});for(let t of(o.prepend(e3(this,"checked-indicator")),this.defaultSlot.append(o),this.mediaSubtitlesList)){let i=e5({type:"radio",text:this.formatMenuItemText(t.label,t),value:(0,t_.PH)(t),checked:this.value==(0,t_.PH)(t)});i.prepend(e3(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(e3(this,"captions-indicator")),this.defaultSlot.append(i)}},eb=new WeakSet,eg=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(eQ.GC.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new eF.Au.CustomEvent(eQ.a8.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new eF.Au.CustomEvent(eQ.a8.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},tD.getTemplateHTML=function(e){return`
    ${e9.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${tx}</slot>
  `};let tN=(e,t)=>{let i=e.getAttribute(t);return i?(0,t_.W5)(i):[]},tP=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=(0,t_.mc)(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};eF.Au.customElements.get("media-captions-menu")||eF.Au.customElements.define("media-captions-menu",tD);let tO=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,tU=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,tG=e=>{e.setAttribute("data-captions-enabled",(0,t_.VV)(e).toString())},tW=e=>{e.setAttribute("aria-label",(0,tE.t)("closed captions"))};class tH extends tv{static get observedAttributes(){return[...super.observedAttributes,eQ.GC.MEDIA_SUBTITLES_LIST,eQ.GC.MEDIA_SUBTITLES_SHOWING,eQ.GC.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),tW(this),tG(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eQ.GC.MEDIA_SUBTITLES_SHOWING?tG(this):e===eQ.GC.MEDIA_LANG&&tW(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=(0,eZ.Bk)(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return t$(this,eQ.GC.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){tB(this,eQ.GC.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return t$(this,eQ.GC.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){tB(this,eQ.GC.MEDIA_SUBTITLES_SHOWING,e)}}tH.getSlotTemplateHTML=function(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${tO}</slot>
      <slot name="off">${tU}</slot>
    </slot>
  `},tH.getTooltipContentHTML=function(){return(0,tE.t)("Captions")};let t$=(e,t)=>{let i=e.getAttribute(t);return i?(0,t_.W5)(i):[]},tB=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=(0,t_.mc)(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};eF.Au.customElements.get("media-captions-menu-button")||eF.Au.customElements.define("media-captions-menu-button",tH);var tV=i(50055),tq=i(79648),tQ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tF=(e,t,i)=>(tQ(e,t,"read from private field"),i?i.call(e):t.get(e)),tj=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},tY=(e,t,i)=>(tQ(e,t,"access private method"),i);let tK="rates";class tz extends e9{constructor(){super(),tj(this,eA),tj(this,ey),tj(this,ef,new tV.M(this,tK,{defaultValue:tq.ap})),tY(this,eA,ek).call(this)}static get observedAttributes(){return[...super.observedAttributes,eQ.GC.MEDIA_PLAYBACK_RATE,tK]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===eQ.GC.MEDIA_PLAYBACK_RATE&&t!=i?(this.value=i,tY(this,eA,ek).call(this)):e===tK&&t!=i&&(tF(this,ef).value=i,tY(this,eA,ek).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",tY(this,ey,ew))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",tY(this,ey,ew))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:(0,eZ.Bk)(this).querySelector("media-playback-rate-menu-button")}get rates(){return tF(this,ef)}set rates(e){e?Array.isArray(e)?tF(this,ef).value=e.join(" "):"string"==typeof e&&(tF(this,ef).value=e):tF(this,ef).value="",tY(this,eA,ek).call(this)}get mediaPlaybackRate(){return(0,eZ.dm)(this,eQ.GC.MEDIA_PLAYBACK_RATE,tq.L5)}set mediaPlaybackRate(e){(0,eZ.pK)(this,eQ.GC.MEDIA_PLAYBACK_RATE,e)}}ef=new WeakMap,eA=new WeakSet,ek=function(){this.defaultSlot.textContent="";let e=(0,tq.V5)(this.mediaPlaybackRate),t=new Set(Array.from(tF(this,ef)).map(e=>(0,tq.V5)(Number(e))));for(let i of(e>0&&!t.has(e)&&t.add(e),Array.from(t).sort((e,t)=>e-t))){let t=e5({type:"radio",text:this.formatMenuItemText(`${i}x`,i),value:i.toString(),checked:e===i});t.prepend(e3(this,"checked-indicator")),this.defaultSlot.append(t)}},ey=new WeakSet,ew=function(){if(!this.value)return;let e=new eF.Au.CustomEvent(eQ.a8.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},eF.Au.customElements.get("media-playback-rate-menu")||eF.Au.customElements.define("media-playback-rate-menu",tz);class tZ extends tv{static get observedAttributes(){return[...super.observedAttributes,eQ.GC.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${(0,tq.V5)(null!=(e=this.mediaPlaybackRate)?e:1)}x`}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===eQ.GC.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=(0,tq.V5)(Number.isNaN(e)?1:e);this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",(0,tE.t)("Playback rate {playbackRate}",{playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:(0,eZ.Bk)(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return(0,eZ.dm)(this,eQ.GC.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){(0,eZ.pK)(this,eQ.GC.MEDIA_PLAYBACK_RATE,e)}}tZ.getSlotTemplateHTML=function(e){let t=e.mediaplaybackrate?(0,tq.V5)(+e.mediaplaybackrate):1;return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }

      :host([aria-expanded="true"]) slot {
        display: block;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${t}x</slot>
  `},tZ.getTooltipContentHTML=function(){return(0,tE.t)("Playback rate")},eF.Au.customElements.get("media-playback-rate-menu-button")||eF.Au.customElements.define("media-playback-rate-menu-button",tZ);var tX=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},tJ=(e,t,i)=>(tX(e,t,"read from private field"),i?i.call(e):t.get(e)),t0=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},t1=(e,t,i,a)=>(tX(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),t2=(e,t,i)=>(tX(e,t,"access private method"),i);class t5 extends e9{constructor(){super(...arguments),t0(this,eI),t0(this,e_),t0(this,eT,[]),t0(this,eC,{})}static get observedAttributes(){return[...super.observedAttributes,eQ.GC.MEDIA_RENDITION_LIST,eQ.GC.MEDIA_RENDITION_SELECTED,eQ.GC.MEDIA_RENDITION_UNAVAILABLE,eQ.GC.MEDIA_HEIGHT,eQ.GC.MEDIA_WIDTH]}static formatMenuItemText(e,t){return super.formatMenuItemText(e,t)}static formatRendition(e,{showBitrate:t=!1}={}){let i=`${Math.min(e.width,e.height)}p`;if(t&&e.bitrate){let t=e.bitrate/1e6,a=`${t.toFixed(+(t<1))} Mbps`;return`${i} (${a})`}return this.formatMenuItemText(i,e)}static compareRendition(e,t){var i,a;return t.height===e.height?(null!=(i=t.bitrate)?i:0)-(null!=(a=e.bitrate)?a:0):t.height-e.height}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),t!==i)switch(e){case eQ.GC.MEDIA_RENDITION_SELECTED:this.value=null!=i?i:"auto",t2(this,eI,eM).call(this);break;case eQ.GC.MEDIA_RENDITION_LIST:t1(this,eT,(0,tg.MT)(i)),t2(this,eI,eM).call(this);break;case eQ.GC.MEDIA_HEIGHT:case eQ.GC.MEDIA_WIDTH:t2(this,eI,eM).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",t2(this,e_,eS))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",t2(this,e_,eS))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:(0,eZ.Bk)(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return tJ(this,eT)}set mediaRenditionList(e){t1(this,eT,e),t2(this,eI,eM).call(this)}get mediaRenditionSelected(){return(0,eZ.vT)(this,eQ.GC.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){(0,eZ.tA)(this,eQ.GC.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return(0,eZ.dm)(this,eQ.GC.MEDIA_HEIGHT)}set mediaHeight(e){(0,eZ.pK)(this,eQ.GC.MEDIA_HEIGHT,e)}get mediaWidth(){return(0,eZ.dm)(this,eQ.GC.MEDIA_WIDTH)}set mediaWidth(e){(0,eZ.pK)(this,eQ.GC.MEDIA_WIDTH,e)}compareRendition(e,t){return this.constructor.compareRendition(e,t)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}formatRendition(e,t){return this.constructor.formatRendition(e,t)}showRenditionBitrate(e){return this.mediaRenditionList.some(t=>t!==e&&t.height===e.height&&t.bitrate!==e.bitrate)}}eT=new WeakMap,eC=new WeakMap,eI=new WeakSet,eM=function(){let e,t=!this.mediaRenditionSelected;if(tJ(this,eC).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&tJ(this,eC).mediaHeight===this.mediaHeight&&tJ(this,eC).mediaWidth===this.mediaWidth&&tJ(this,eC).isAuto===t)return;tJ(this,eC).mediaRenditionList=JSON.stringify(this.mediaRenditionList),tJ(this,eC).mediaHeight=this.mediaHeight,tJ(this,eC).mediaWidth=this.mediaWidth,tJ(this,eC).isAuto=t;let i=this.mediaRenditionList.sort(this.compareRendition.bind(this)),a=i.find(e=>e.id===this.mediaRenditionSelected);for(let e of i)e.selected=e===a;for(let e of(this.defaultSlot.textContent="",i)){let i=e5({type:"radio",text:this.formatRendition(e,{showBitrate:this.showRenditionBitrate(e)}),value:`${e.id}`,checked:e.selected&&!t});i.prepend(e3(this,"checked-indicator")),this.defaultSlot.append(i)}let s=a&&this.showRenditionBitrate(a);t&&(a?e=this.formatMenuItemText(`${(0,tE.t)("Auto")} \u2022 ${this.formatRendition(a,{showBitrate:s})}`,a):this.mediaHeight>0&&this.mediaWidth>0&&(e=this.formatMenuItemText(`${(0,tE.t)("Auto")} (${Math.min(this.mediaWidth,this.mediaHeight)}p)`))),e||(e=this.formatMenuItemText((0,tE.t)("Auto")));let n=e5({type:"radio",text:e,value:"auto",checked:t});n.dataset.description=e,n.prepend(e3(this,"checked-indicator")),this.defaultSlot.append(n)},e_=new WeakSet,eS=function(){if(null==this.value)return;let e=new eF.Au.CustomEvent(eQ.a8.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},eF.Au.customElements.get("media-rendition-menu")||eF.Au.customElements.define("media-rendition-menu",t5);let t3=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class t4 extends tv{static get observedAttributes(){return[...super.observedAttributes,eQ.GC.MEDIA_RENDITION_SELECTED,eQ.GC.MEDIA_RENDITION_UNAVAILABLE,eQ.GC.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",(0,tE.t)("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:(0,eZ.Bk)(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return(0,eZ.vT)(this,eQ.GC.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){(0,eZ.tA)(this,eQ.GC.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return(0,eZ.dm)(this,eQ.GC.MEDIA_HEIGHT)}set mediaHeight(e){(0,eZ.pK)(this,eQ.GC.MEDIA_HEIGHT,e)}}t4.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${t3}</slot>
  `},t4.getTooltipContentHTML=function(){return(0,tE.t)("Quality")},eF.Au.customElements.get("media-rendition-menu-button")||eF.Au.customElements.define("media-rendition-menu-button",t4);var t8=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},t7=(e,t,i)=>(t8(e,t,"read from private field"),i?i.call(e):t.get(e)),t9=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},t6=(e,t,i,a)=>(t8(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),ie=(e,t,i)=>(t8(e,t,"access private method"),i);class it extends e9{constructor(){super(),t9(this,eR),t9(this,eD),t9(this,eP),t9(this,eU),t9(this,eH),t9(this,eL,!1),t9(this,eW,e=>{let t=e.target,i=(null==t?void 0:t.nodeName)==="VIDEO",a=ie(this,eU,eG).call(this,t);(i||a)&&(t7(this,eL)?ie(this,eD,eN).call(this):ie(this,eH,e$).call(this,e))}),t9(this,eB,e=>{let t=e.target,i=this.contains(t),a=2===e.button,s=(null==t?void 0:t.nodeName)==="VIDEO",n=ie(this,eU,eG).call(this,t);i||a&&(s||n)||ie(this,eD,eN).call(this)}),t9(this,eV,e=>{"Escape"===e.key&&ie(this,eD,eN).call(this)}),t9(this,eq,e=>{var t,i;let a=e.target;if(null==(t=a.matches)?void 0:t.call(a,'button[invoke="copy"]')){let e=null==(i=a.closest("media-context-menu-item"))?void 0:i.querySelector('input[slot="copy"]');e&&navigator.clipboard.writeText(e.value)}ie(this,eD,eN).call(this)}),this.setAttribute("noautohide",""),ie(this,eR,ex).call(this)}connectedCallback(){super.connectedCallback(),(0,eZ.Bk)(this).addEventListener("contextmenu",t7(this,eW)),this.addEventListener("click",t7(this,eq))}disconnectedCallback(){super.disconnectedCallback(),(0,eZ.Bk)(this).removeEventListener("contextmenu",t7(this,eW)),this.removeEventListener("click",t7(this,eq)),document.removeEventListener("mousedown",t7(this,eB)),document.removeEventListener("keydown",t7(this,eV))}}eL=new WeakMap,eR=new WeakSet,ex=function(){this.hidden=!t7(this,eL)},eD=new WeakSet,eN=function(){t6(this,eL,!1),ie(this,eR,ex).call(this)},eP=new WeakSet,eO=function(){document.querySelectorAll("media-context-menu").forEach(e=>{e!==this&&ie(e,eD,eN).call(e)})},eU=new WeakSet,eG=function(e){return!!e&&(!!e.hasAttribute("slot")&&"media"===e.getAttribute("slot")||!!(e.nodeName.includes("-")&&e.tagName.includes("-"))&&(e.hasAttribute("src")||e.hasAttribute("poster")||e.hasAttribute("preload")||e.hasAttribute("playsinline")))},eW=new WeakMap,eH=new WeakSet,e$=function(e){e.preventDefault(),ie(this,eP,eO).call(this),t6(this,eL,!0),this.style.position="fixed",this.style.left=`${e.clientX}px`,this.style.top=`${e.clientY}px`,ie(this,eR,ex).call(this),document.addEventListener("mousedown",t7(this,eB),{once:!0}),document.addEventListener("keydown",t7(this,eV),{once:!0})},eB=new WeakMap,eV=new WeakMap,eq=new WeakMap,it.getTemplateHTML=function(e){return`
      ${e9.getTemplateHTML(e)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `},eF.Au.customElements.get("media-context-menu")||eF.Au.customElements.define("media-context-menu",it);class ii extends th{}ii.shadowRootOptions={mode:"open"},ii.getTemplateHTML=function(e){return`
    ${th.getTemplateHTML.call(this,e)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `},eF.Au.customElements.get("media-context-menu-item")||eF.Au.customElements.define("media-context-menu-item",ii)},86571:(e,t,i)=>{i.d(t,{A:()=>n});var a=i(32171),s=i(6029);let n=(0,a.A)((0,s.jsx)("path",{d:"M7 14H5v5h5v-2H7zm-2-4h2V7h3V5H5zm12 7h-3v2h5v-5h-2zM14 5v2h3v3h2V5z"}),"FullscreenOutlined")},88687:(e,t,i)=>{i.d(t,{C2:()=>r,PH:()=>o,VV:()=>c,W5:()=>n,aI:()=>u,ip:()=>h,mc:()=>l});var a=i(35035);let s=(e="")=>{let[t,i,s]=e.split(":"),n=s?decodeURIComponent(s):void 0;return{kind:"cc"===t?a.Up.CAPTIONS:a.Up.SUBTITLES,language:i,label:n}},n=(e="",t={})=>((e="")=>e.split(/\s+/))(e).map(e=>{let i=s(e);return{...t,...i}}),r=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?s(e):e):"string"==typeof e?n(e):[e]:[],o=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,l=(e=[])=>Array.prototype.map.call(e,o).join(" "),d=e=>{let t=Object.entries(e).map(([e,t])=>i=>i[e]===t);return e=>t.every(t=>t(e))},h=(e,t=[],i=[])=>{let a=r(i).map(d);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},u=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:d(t);return Array.from(e.textTracks).filter(i)},c=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(a.GC.MEDIA_SUBTITLES_SHOWING)}}}]);