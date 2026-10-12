(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[148],{1310:(e,t,a)=>{"use strict";a.d(t,{B4:()=>s,e5:()=>l,tY:()=>n});var r=a(5421),i=a(9896);a(2423);let n=()=>({"X-Client-Package":r.fB,...r.xl&&{"X-Client-Version":r.Qw}});class o extends Error{constructor(e){const t=new URL(e.url);t.search="",super(`HTTP ${e.status} ${e.statusText} (${t.pathname})`);const a=e.headers.get("x-request-id"),r={url:t.href,...a&&{requestID:a}};Error.captureStackTrace?.(this,o),this.name=this.constructor.name,this.res=e,this.details=r}}let s=e=>{if(!e.ok){let t=new o(e);throw i.Ay.error(`${t.message} ${JSON.stringify(t.details)}`),t}},l=e=>e instanceof o&&401==e.res.status},1409:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/slideshow",function(){return a(4031)}])},2423:(e,t,a)=>{"use strict";a(701)},2433:(e,t,a)=>{"use strict";a.d(t,{Bm:()=>r,TR:()=>i,q$:()=>n});let r=()=>{for(let e of["collectionID","collectionKey","castToken"])localStorage.removeItem(e)},i=e=>{if(!e||"object"!=typeof e)throw Error("Unexpected cast data");for(let[t,a]of Object.entries(e))"string"==typeof a||"number"==typeof a?localStorage.setItem(t,a.toString()):localStorage.removeItem(t)},n=()=>{let e=localStorage.getItem("collectionID"),t=localStorage.getItem("collectionKey"),a=localStorage.getItem("castToken");return e&&t&&a?{collectionID:e,collectionKey:t,castToken:a}:void 0}},3670:(e,t,a)=>{"use strict";a.d(t,{q:()=>c,w:()=>o});var r=a(9896);class i{constructor(){this.haveStarted=!1}}let n=new i,o=(e,t)=>{n.pairingCode=e,n.collectionID=t,n.haveStarted||s().then(e=>l(e))},s=async()=>n.cast?n.cast:(n.loader||(n.loader=new Promise(e=>{let t=document.createElement("script");t.src="https://www.gstatic.com/cast/sdk/libs/caf_receiver/v3/cast_receiver_framework.js",t.addEventListener("load",()=>{n.cast=cast,e(cast)}),document.body.appendChild(t)})),await n.loader),l=e=>{if(n.haveStarted)return;n.haveStarted=!0;let t=e.framework.CastReceiverContext.getInstance(),a="urn:x-cast:pair-request",i=new e.framework.CastReceiverOptions;i.skipPlayersLoad=!0,i.disableIdleTimeout=!0,t.addCustomMessageListener(a,({senderId:e,data:i})=>{let o=n.collectionID?.(),s=null;if("object"==typeof i&&null!==i&&"collectionID"in i&&("string"==typeof i.collectionID||"number"==typeof i.collectionID)&&(s=i.collectionID.toString()),s&&o){o!=s&&(r.Ay.info(`request for a new collection ${s}`),t.stop());return}let l=n.pairingCode?.();if(!l){if(o)return;r.Ay.error("got pairing request when refreshing pairing codes"),t.stop();return}t.sendCustomMessage(a,e,{code:l})}),t.addEventListener("senderdisconnected",()=>t.stop()),t.start(i)},c=()=>{let e=n.isChromecast;return void 0===e&&(n.isChromecast=e=window.navigator.userAgent.includes("CrKey")),e}},4031:(e,t,a)=>{"use strict";let r,i;a.r(t),a.d(t,{default:()=>ej});var n=a(2860),o=a(3441),s=a(5729);let l=()=>(0,n.Y)(c,{children:(0,n.FD)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52",children:[(0,n.Y)("circle",{cx:"26",cy:"26",r:"25",fill:"green"}),(0,n.Y)("path",{fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})]})}),c=(0,o.Ay)("div")`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;
    animation: scaleIn 0.3s ease-in-out forwards;

    @keyframes scaleIn {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }

    svg {
        width: 100px;
        height: 100px;

        circle {
            fill: green;
        }

        path {
            transform-origin: 50% 50%;
            stroke-dasharray: 48;
            stroke-dashoffset: 48;
            animation: strokeCheck 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.6s
                forwards;
            stroke: white;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
        }
    }

    @keyframes strokeCheck {
        100% {
            stroke-dashoffset: 0;
        }
    }
`;var m=a(2433),d=a(3670);let f=e=>{let t=e.lastIndexOf(".");return -1==t||0==t?[e,void 0]:[e.slice(0,t),e.slice(t+1)]},h=e=>e.filter(e=>!!e).join("."),u=[{fileType:0,extension:"jpeg",mimeType:"image/jpeg"},{fileType:0,extension:"jpg",mimeType:"image/jpeg"},{fileType:1,extension:"webm",mimeType:"video/webm"},{fileType:1,extension:"mod",mimeType:"video/mpeg"},{fileType:1,extension:"mp4",mimeType:"video/mp4"},{fileType:0,extension:"gif",mimeType:"image/gif"},{fileType:1,extension:"dv",mimeType:"video/x-dv"},{fileType:1,extension:"wmv",mimeType:"video/x-ms-asf"},{fileType:1,extension:"hevc",mimeType:"video/hevc"},{fileType:0,extension:"raf",mimeType:"image/x-fuji-raf"},{fileType:0,extension:"orf",mimeType:"image/x-olympus-orf"},{fileType:0,extension:"crw",mimeType:"image/x-canon-crw"},{fileType:0,extension:"nrw",mimeType:"image/x-nikon-nrw"},{fileType:0,extension:"pef",mimeType:"image/x-pentax-pef"},{fileType:0,extension:"srw",mimeType:"image/x-samsung-srw"},{fileType:1,extension:"mov",mimeType:"video/quicktime"}];var p=a(2620);let y=async e=>{let t=e.slice(0,4100),a=new Uint8Array(await t.arrayBuffer()),r=await (0,p.BI)(a),i=r?.mime;if(i)if(i.startsWith("image/")||i.startsWith("video/"))return i;else throw Error(`Detected MIME type ${i} is not a media file`);let n=(e=>{let[,t]=f(e);return t?.toLowerCase()})(e.name);if(n)return u.find(e=>e.extension==n)?.mimeType};var w=a(6426),g=a(9896);let v=async(e,t)=>{let a,r=new Promise((t,r)=>{a=e=>r(Error(e.message||"Worker failed to start")),e.addEventListener("error",a)});try{return await Promise.race([t,r])}catch(t){throw e.terminate(),t}finally{e.removeEventListener("error",a)}};class T{constructor(e,t){this.name=e,this.worker=t,t.onerror=t=>{g.Ay.error(`Got error event from worker: ${JSON.stringify({event:t,name:e})}`)},g.Ay.debug(()=>`Created ${e} web worker`);const a=(0,w.LV)(t);this.remote=v(t,new a),(0,w.p)(b,t)}terminate(){this.worker.terminate(),g.Ay.debug(()=>`Terminated ${this.name} web worker`)}}let b={logToDisk:g.PD,convertToJPEG:(e,t,a)=>(()=>{let e=globalThis.electron;if(e)return e;throw Error("Attempting to assert globalThis.electron in a non-electron context")})().convertToJPEG(e,t,a)};var k=a(8937);let x=e=>e.map(e=>[Math.random(),e]).sort().map(([,e])=>e),_=e=>{let t=new Uint8Array(e.reduce((e,t)=>e+t.length,0));return e.reduce((e,a)=>(t.set(a,e),e+a.length),0),t},j=e=>e.buffer instanceof ArrayBuffer?e:new Uint8Array(e);var A=a(6221),Y=a.n(A);let H=async e=>(await Y().ready,Y().to_base64(e,Y().base64_variants.ORIGINAL)),q=async e=>(await Y().ready,j(Y().from_base64(e,Y().base64_variants.ORIGINAL))),I=async e=>"string"==typeof e?q(e):e,D=async({encryptedData:e,nonce:t},a)=>(await Y().ready,j(Y().crypto_secretbox_open_easy(await I(e),await I(t),await I(a)))),S=async({encryptedData:e,decryptionHeader:t},a)=>{await Y().ready;let r=Y().crypto_secretstream_xchacha20poly1305_init_pull(await I(t),await I(a));return j(Y().crypto_secretstream_xchacha20poly1305_pull(r,await I(e),null).message)},E=async(e,t)=>JSON.parse(new TextDecoder().decode(await S(e,t))),C=async({encryptedData:e,decryptionHeader:t},a)=>{await Y().ready;let r=Y().crypto_secretstream_xchacha20poly1305_init_pull(await q(t),await I(a)),i=4194304+Y().crypto_secretstream_xchacha20poly1305_ABYTES,n=0,o=[],s=Y().crypto_secretstream_xchacha20poly1305_TAG_MESSAGE;for(;s!==Y().crypto_secretstream_xchacha20poly1305_TAG_FINAL;){let t=i;n+t>e.length&&(t=e.length-n);let a=e.slice(n,n+t),l=Y().crypto_secretstream_xchacha20poly1305_pull(r,a);o.push(l.message),s=l.tag,n+=t}return _(o)},M=()=>(r??=L()).remote,L=()=>new T("crypto",new Worker(a.tu(new URL(a.p+a.u(6107),a.b)))),P=(e,t)=>(0,k.Co)()?E(e,t):M().then(a=>a.decryptMetadataJSON(e,t));var $=a(8128),N=a(1310),B=a(1961);a(2423);let O=$.Ik({url:$.Yj()}),R=0,U=async(e,t)=>{if(R>Date.now())return;let a=await fetch(await (0,B.Sw)(e),{headers:t});if(404===a.status){R=Date.now()+36e5;return}(0,N.B4)(a);let{url:r}=O.parse(await a.json());return fetch(r)},F=async(e,t,a)=>{let r=await U(`/cast/files/${"file"==t?"download":"thumbnail"}/v3/${e}`,{...(0,N.tY)(),"X-Cast-Access-Token":a});return r?r:fetch(await (0,B.Sw)(`/cast/files/${"file"==t?"download":"preview"}/${e}`,{castToken:a}),{headers:(0,N.tY)()})};var z=a(7886);let G=$._H({fileType:$.ai(),title:$.Yj(),creationTime:$.ai(),modificationTime:$.ai(),latitude:$.ai().nullish().transform(z.Hq),longitude:$.ai().nullish().transform(z.Hq),hash:$.Yj().nullish().transform(z.Hq),imageHash:$.Yj().nullish().transform(z.Hq),videoHash:$.Yj().nullish().transform(z.Hq),duration:$.ai().nullish().transform(z.Hq),hasStaticThumbnail:$.zM().nullish().transform(z.Hq)}),W=$._H({visibility:$.ai().nullish().transform(z.Hq)}),J=$._H({dateTime:$.Yj().nullish().transform(z.Hq),offsetTime:$.Yj().nullish().transform(z.Hq),editedTime:$.ai().nullish().transform(z.Hq),editedName:$.Yj().nullish().transform(z.Hq),w:$.ai().nullish().transform(z.Hq),h:$.ai().nullish().transform(z.Hq),caption:$.KC([$.Yj(),$.ai()]).nullish().transform(e=>null==e?void 0:String(e)),uploaderName:$.Yj().nullish().transform(z.Hq),cameraMake:$.Yj().nullish().transform(z.Hq),cameraModel:$.Yj().nullish().transform(z.Hq),lat:$.ai().nullish().transform(z.Hq),long:$.ai().nullish().transform(z.Hq),sv:$.ai().nullish().transform(z.Hq)}),X=e=>e.pubMagicMetadata?.data.editedName??e.metadata.title,K=$.Ik({version:$.ai(),count:$.ai().nullish().transform(z.PW),data:$.Yj(),header:$.Yj()}),V=async(e,t)=>{let{version:a,count:r,data:i,header:n}=e;return{version:a,count:r,data:await P({encryptedData:i,decryptionHeader:n},t)}},Q=$._H({decryptionHeader:$.Yj()}),Z=$._H({fileSize:$.ai().nullish().transform(z.Hq),thumbSize:$.ai().nullish().transform(z.Hq)}),ee=$.Ik({encryptedData:$.Yj().nullish().transform(z.bt),decryptionHeader:$.Yj()}),et=$._H({id:$.ai(),collectionID:$.ai(),ownerID:$.ai(),encryptedKey:$.Yj(),keyDecryptionNonce:$.Yj(),file:Q,thumbnail:Q,info:Z.nullish().transform(z.Hq),updationTime:$.ai(),isDeleted:$.zM().nullish().transform(z.Hq),metadata:ee,magicMetadata:K.nullish().transform(z.Hq),pubMagicMetadata:K.nullish().transform(z.Hq)}),ea=$.Ik({diff:et.array(),hasMore:$.zM()}),er=async(e,t)=>{let a,r,i,n,{id:o,encryptedKey:s,keyDecryptionNonce:l,isDeleted:c,metadata:m,magicMetadata:d,pubMagicMetadata:f,...h}=e,u=await (a={encryptedData:s,nonce:l},r=t,(0,k.Co)()?D(a,r).then(H):M().then(e=>e.decryptBox(a,r))),p=await P(m,u),y=G.parse(ei(o,p));if(d){let e=await V(d,u),t=W.parse(e.data);i={...e,data:t}}if(f){let e=await V(f,u),t=J.parse(e.data);n={...e,data:t}}return{...h,id:o,key:u,metadata:y,magicMetadata:i,pubMagicMetadata:n}},ei=(e,t)=>(e>1e8||"object"!=typeof t||!t||("modificationTime"in t&&t.modificationTime||!("creationTime"in t)||(g.Ay.info(`Patching metadata modification time for file ${e}`),t.modificationTime=t.creationTime),"fileType"in t&&"number"==typeof t.fileType||(g.Ay.info(`Patching metadata file type for file ${e}`),t.fileType=0)),t),en=["arw","cr2","cr3","dng","heic","jp2","nef","nrw","orf","pef","psd","raf","rw2","srw","tif","tiff"],eo=async e=>es().then(t=>t.heicToJPEG(e)),es=async()=>(i??=el()).remote,el=()=>new T("heic-convert-worker",new Worker(a.tu(new URL(a.p+a.u(8012),a.b))));var ec=a(639),em=a.n(ec);let ed=/^(image|video)(?:\.[a-zA-Z0-9]{1,16})?$/,ef=async(e,t)=>{let a,r,i=Object.values((await em().loadAsync(await t.arrayBuffer())).files);if(2!=i.length)throw Error("Live Photo must contain one image and one video");for(let e of i){let t=ed.exec(e.name);if(e.dir||t?.[0]!==e.name||e.unsafeOriginalName!==e.name)throw Error("Invalid Live Photo component name");"image"===t[1]?a=e:r=e}if(!a||!r)throw Error("Live Photo must contain one image and one video");let n=20*t.size+0x1000000,o=await eh(a,n),s=await eh(r,n-o.length),[l]=f(e),[,c]=f(a.name),[,m]=f(r.name);return{imageFileName:h([l,c]),imageData:o,videoFileName:h([l,m]),videoData:s}},eh=(e,t)=>new Promise((a,r)=>{let i=e.internalStream("uint8array"),n=[],o=0,s=!1,l=e=>{s||(s=!0,i.pause(),n.length=0,r(e))};i.on("data",e=>{if(!s){if(e.length>t-o)return void l(Error("Live Photo archive expands beyond limit"));o+=e.length,n.push(e)}}).on("error",l).on("end",()=>{if(!s)try{let e=_(n);n.length=0,s=!0,a(e)}catch(e){l(e)}}).resume()});var eu=a(6107);let ep=async function*(e){let{collectionKey:t,castToken:a}=e,r=[],i=Date.now();i-=9500;let n=0;for(;;){let e=x(await ey(a)),o=!1;for(let s of e){let e,l=await er(s,t);if(!ew(l))continue;try{e=await ev(a,l),n=0,o=!0}catch(e){if(3==(n+=1)||(0,N.e5)(e))throw e;g.Ay.error("Skipping unrenderable file",e),await (0,eu.uk)(100);continue}r.length>1&&URL.revokeObjectURL(r.shift()),r.push(e);let c=Date.now()-i;c>0&&c<12e3&&await (0,eu.uk)(12e3-c),i=Date.now(),yield e}if(!o)return}},ey=async e=>{let t=new Map,a=0;for(;;){let r=await fetch(await (0,B.Sw)("/cast/diff",{sinceTime:a}),{headers:{"X-Cast-Access-Token":e}});(0,N.B4)(r);let{diff:i,hasMore:n}=ea.parse(await r.json());if(!i.length)break;for(let e of i)a=Math.max(a,e.updationTime),e.isDeleted||t.set(e.id,e);if(!n)break}return[...t.values()]},ew=e=>{if(!eg(e)||(e.info?.fileSize??0)>0x6400000)return!1;let[,t]=f(X(e));if(t&&en.includes(t.toLowerCase())){let e;return"heic"==(e=t.toLowerCase())||"heif"==e}return!0},eg=e=>0==e.metadata.fileType||2==e.metadata.fileType,ev=async(e,t)=>{let a=await eT(e,t);return URL.createObjectURL(a)},eT=async(e,t)=>{let a=(0,d.q)(),r=await eb(e,t,a),i=X(t);if(!a&&2==t.metadata.fileType){let{imageData:e,imageFileName:t}=await ef(i,r);i=t,r=new Blob([e])}let n=await y(new File([r],i));if(!n)throw Error(`Could not detect MIME type for file ${i}`);return("image/heif"==n||"image/heic"==n)&&(r=await eo(r)),new Blob([r],{type:n})},eb=async(e,t,a)=>{let r,i;if(!eg(t))throw Error("Can only cast images and live photos");let n=await (0,B.Ej)(),o=await (n?F(t.id,a?"thumbnail":"file",e):fetch(a?`https://cast-albums.ente.com/preview/?fileID=${t.id}`:`https://cast-albums.ente.com/download/?fileID=${t.id}`,{headers:{...(0,N.tY)(),"X-Cast-Access-Token":e}}));return(0,N.B4)(o),new Response(await (r={encryptedData:new Uint8Array(await o.arrayBuffer()),decryptionHeader:a?t.thumbnail.decryptionHeader:t.file.decryptionHeader},i=t.key,(0,k.Co)()?C(r,i):M().then(e=>e.decryptStreamBytes(r,i)))).blob()};var ek=a(1457),ex=a(9145),e_=a(1278);let ej=()=>{let[e,t]=(0,s.useState)(!1),[a,r]=(0,s.useState)(""),i=(0,e_.useRouter)();return((0,s.useEffect)(()=>{let e=()=>void i.push("/"),a=!1;return(async()=>{try{let i=ep((0,m.q$)());for(;!a;){let{value:a,done:n}=await i.next();if(!0==n||!a){t(!0),setTimeout(e,5e3);return}r(a)}}catch(t){g.Ay.error("Failed to prepare generator",t),e()}})(),()=>{a=!0}},[i]),e)?(0,n.Y)(eH,{}):a?(0,d.q)()?(0,n.Y)(eD,{url:a}):(0,n.Y)(eq,{url:a}):(0,n.Y)(eA,{})},eA=()=>(0,n.FD)(eY,{children:[(0,n.Y)(l,{}),(0,n.Y)(ek.A,{variant:"h3",sx:{mt:2,mb:2},children:"Pairing Complete"}),(0,n.FD)(ex.A,{sx:{gap:"4px"},children:[(0,n.Y)(ek.A,{children:"We're preparing your album"}),(0,n.Y)(ek.A,{children:"This should only take a few seconds."})]})]}),eY=(0,o.Ay)(ex.A)`
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
`,eH=()=>(0,n.FD)(eY,{children:[(0,n.Y)(ek.A,{variant:"h3",children:"Try another album"}),(0,n.FD)(ex.A,{sx:{gap:"4px"},children:[(0,n.Y)(ek.A,{children:"This album has no photos that can be shown here"}),(0,n.Y)(ek.A,{children:"Please try another album"})]})]}),eq=({url:e})=>(0,n.Y)(eI,{style:{backgroundImage:`url(${e})`},children:(0,n.Y)("img",{src:e,decoding:"sync",alt:""})}),eI=(0,o.Ay)("div")`
    height: 100vh;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: multiply;
    background-color: rgba(0, 0, 0, 0.5);

    /* The img gets decoding="sync" to switch seamlessly, but there is no
     * equivalent for the background image, so for large images its switch is
     * visibly non-atomic. The long transition masks this. */
    transition: all 2s;

    img {
        width: 100%;
        height: 100%;
        backdrop-filter: blur(10px);
        object-fit: contain;
    }
`,eD=({url:e})=>(0,n.FD)(eS,{children:[(0,n.Y)("img",{className:"svc-bg",src:e,alt:""}),(0,n.Y)("img",{className:"svc-content",src:e,decoding:"sync",alt:""})]}),eS=(0,o.Ay)("div")`
    height: 100vh;

    position: relative;
    overflow: hidden;

    img.svc-bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.1;
    }

    img.svc-content {
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`},6107:(e,t,a)=>{"use strict";a.d(t,{uk:()=>r});let r=e=>new Promise(t=>setTimeout(t,e))},7886:(e,t,a)=>{"use strict";a.d(t,{Hq:()=>r,PW:()=>i,bt:()=>n});let r=e=>null===e?void 0:e,i=e=>e??0,n=e=>e??""},8176:()=>{},8816:()=>{}},e=>{e.O(0,[4137,2966,6994,3304,8862,2130,636,6593,8792],()=>e(e.s=1409)),_N_E=e.O()}]);