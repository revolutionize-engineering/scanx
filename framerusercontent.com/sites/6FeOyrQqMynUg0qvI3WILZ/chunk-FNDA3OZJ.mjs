import{a as B}from"./chunk-VO66NGHP.mjs";import{c as Z,d as $,e as ee,f as te,g as re,h as ne,i as oe,j as ae}from"./chunk-IQU6LE25.mjs";import{A as G,G as J,ba as A,ca as K,fa as n,h as z,ia as Q,j as y,ka as X,l as v,p as T,r as s,v as H}from"./chunk-5MRFIFFE.mjs";function ie(e,o){let a=s(o),p=s(),m=s(!1),g=A.current()===A.canvas,b=o?.onChangeDeps?o.onChangeDeps:[],f=y(o?.onChange,[...b]),h=y(d=>{var i;return!((i=a.current)===null||i===void 0)&&i.transform?a.current.transform(d):d},[]),u=te(()=>B(e)?e:G(h(e)));return v(()=>{if(!B(e)&&m.current){var d,i;let P=h(e);if((d=p.current)===null||d===void 0||d.stop(),f&&f(P,u),!((i=a.current)===null||i===void 0)&&i.animate&&!g){var C;p.current=K(u,P,(C=a.current)===null||C===void 0?void 0:C.transition)}else u.set(P)}m.current=!0},[e,...b]),u}var c;(function(e){e.Fill="fill",e.Contain="contain",e.Cover="cover",e.None="none",e.ScaleDown="scale-down"})(c||(c={}));var l;(function(e){e.Video="Upload",e.Url="URL"})(l||(l={}));function Me(e){let{width:o,height:a,topLeft:p,topRight:m,bottomRight:g,bottomLeft:b,id:f,children:h,...u}=e;return u}function D(e){let o=Me(e);return H(Re,{...o})}var se=!1,Re=z(function(o){let{srcType:a,srcFile:p,srcUrl:m,playing:g,canvasPlay:b,muted:f,playsinline:h,controls:u,progress:d,objectFit:i,backgroundColor:C,radius:P,topLeft:_e,topRight:xe,bottomRight:Ve,bottomLeft:Se,isMixed:Fe,onSeeked:V,onPause:S,onPlay:F,onEnd:k,onClick:O,onMouseEnter:le,onMouseLeave:ue,onMouseDown:de,onMouseUp:ce,poster:pe,restartOnEnter:ke,posterEnabled:me,startTime:w,volume:Y,loop:j}=o,fe=X(),t=s(),ye=re(),E=s(!1),L=s(null),W=s(null),M=ne(),ve=oe(o),R=T(()=>w===100?99.9:w,[w]),U=!M||b,N=T(()=>g,[]),ge=T(()=>M?!0:f,[M,f]),_=y(r=>{if(!t.current)return;let I=(r===1?.999:r)*t.current.duration,Ce=Math.abs(t.current.currentTime-I)<.1;t.current.duration>0&&!Ce&&(t.current.currentTime=I)},[]),x=y(()=>{!(t.current.currentTime>0&&t.current.onplaying&&!t.current.paused&&!t.current.ended&&t.current.readyState>t.current.HAVE_CURRENT_DATA)&&t.current&&!E.current&&fe&&(E.current=!0,t.current.play().catch(I=>{}).finally(()=>E.current=!1))},[]),q=y(()=>{!t.current||E.current||t.current.pause()},[]);v(()=>{g&&U?x():q()},[g,b]),v(()=>{se?_(R*.01):se=!0},[R,p,m]);let be=ie(d,{transform:r=>r*.01,onChange:r=>{_(r)}});J(be,"change",r=>{M||_(r)}),$(()=>{L.current!==null&&t.current&&(!W&&j||!L.current)&&x()}),ee(()=>{t.current&&(W.current=t.current.ended,L.current=t.current.paused,q())});let he=T(()=>{let r="";if(a===l.Url)return m+r;if(a===l.Video)return p+r},[a,p,m,R]);return v(()=>{ye&&t.current&&N&&setTimeout(()=>x(),50)},[]),v(()=>{t.current&&!f&&(t.current.volume=Y/100)},[Y]),H("video",{onClick:O,onMouseEnter:le,onMouseLeave:ue,onMouseDown:de,onMouseUp:ce,src:he,loop:j,ref:t,onSeeked:r=>V?.(r),onPause:r=>S?.(r),onPlay:r=>F?.(r),onEnded:r=>k?.(r),autoPlay:N&&U,poster:me?pe:void 0,onLoadedData:()=>{t.current&&t.current.currentTime<.3&&_(R*.01),U&&t.current&&N&&x()},controls:u,muted:ge,playsInline:h,style:{cursor:O?"pointer":"auto",width:"100%",height:"100%",borderRadius:ve,display:"block",objectFit:i,backgroundColor:C,objectPosition:"50% 50%"}})});D.displayName="Video";D.defaultProps={srcType:l.Url,srcUrl:"https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",srcFile:"",posterEnabled:!1,controls:!1,autoPlay:!0,canvasPlay:!1,loop:!0,muted:!0,playsinline:!0,restartOnEnter:!1,objectFit:c.Cover,backgroundColor:"rgba(0,0,0,0)",radius:0,volume:25,startTime:0};Q(D,{srcType:{type:n.Enum,displaySegmentedControl:!0,title:"Source",options:[l.Url,l.Video]},srcUrl:{type:n.String,title:" ",placeholder:"../example.mp4",hidden(e){return e.srcType===l.Video},description:"Hosted video file URL. For Youtube, use the Youtube component."},srcFile:{type:n.File,title:" ",allowedFileTypes:["mp4"],hidden(e){return e.srcType===l.Url}},playing:{type:n.Boolean,title:"Playing",enabledTitle:"Yes",disabledTitle:"No"},posterEnabled:{type:n.Boolean,title:"Poster",enabledTitle:"Yes",disabledTitle:"No"},poster:{type:n.Image,title:" ",hidden:({posterEnabled:e})=>!e},backgroundColor:{type:n.Color,title:"Background"},...ae,startTime:{title:"Start Time",type:n.Number,min:0,max:100,step:.1,unit:"%"},loop:{type:n.Boolean,title:"Loop",enabledTitle:"Yes",disabledTitle:"No"},objectFit:{type:n.Enum,title:"Fit",options:[c.Cover,c.Fill,c.Contain,c.ScaleDown,c.None]},canvasPlay:{type:n.Boolean,title:"On Canvas",enabledTitle:"Play",disabledTitle:"Pause",hidden(e){return e.autoPlay===!1}},controls:{type:n.Boolean,title:"Controls",enabledTitle:"Show",disabledTitle:"Hide"},muted:{type:n.Boolean,title:"Muted",enabledTitle:"Yes",disabledTitle:"No"},volume:{type:n.Number,max:100,min:0,unit:"%",hidden:({muted:e})=>e},onEnd:{type:n.EventHandler},onSeeked:{type:n.EventHandler},onPause:{type:n.EventHandler},onPlay:{type:n.EventHandler},...Z});export{D as a};
//# sourceMappingURL=chunk-FNDA3OZJ.mjs.map