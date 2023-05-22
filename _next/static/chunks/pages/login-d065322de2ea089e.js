(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{6426:function(e,r,t){"use strict";t.d(r,{kZ:function(){return c},rg:function(){return l}});var n=t(7294);const s=(0,n.createContext)(null);function l({clientId:e,onScriptLoadSuccess:r,onScriptLoadError:t,children:l}){const o=function(e={}){const{onScriptLoadSuccess:r,onScriptLoadError:t}=e,[s,l]=(0,n.useState)(!1),o=(0,n.useRef)(r);o.current=r;const i=(0,n.useRef)(t);return i.current=t,(0,n.useEffect)((()=>{const e=document.createElement("script");return e.src="https://accounts.google.com/gsi/client",e.async=!0,e.defer=!0,e.onload=()=>{var e;l(!0),null===(e=o.current)||void 0===e||e.call(o)},e.onerror=()=>{var e;l(!1),null===(e=i.current)||void 0===e||e.call(i)},document.body.appendChild(e),()=>{document.body.removeChild(e)}}),[]),s}({onScriptLoadSuccess:r,onScriptLoadError:t}),i=(0,n.useMemo)((()=>({clientId:e,scriptLoadedSuccessfully:o})),[e,o]);return n.createElement(s.Provider,{value:i},l)}function o(){const e=(0,n.useContext)(s);if(!e)throw new Error("Google OAuth components must be used within GoogleOAuthProvider");return e}function i(e){var r;return null!==(r=null===e||void 0===e?void 0:e.clientId)&&void 0!==r?r:null===e||void 0===e?void 0:e.client_id}const a={large:40,medium:32,small:20};function c({onSuccess:e,onError:r,useOneTap:t,promptMomentNotification:s,type:l="standard",theme:c="outline",size:u="large",text:d,shape:m,logo_alignment:f,width:h,locale:v,...p}){const x=(0,n.useRef)(null),{clientId:b,scriptLoadedSuccessfully:g}=o(),j=(0,n.useRef)(e);j.current=e;const w=(0,n.useRef)(r);w.current=r;const y=(0,n.useRef)(s);return y.current=s,(0,n.useEffect)((()=>{var e,r,n;if(g)return null===(e=window.google)||void 0===e||e.accounts.id.initialize({client_id:b,callback:e=>{var r;if(!(null===e||void 0===e?void 0:e.credential))return null===(r=w.current)||void 0===r?void 0:r.call(w);const{credential:t,select_by:n}=e;j.current({credential:t,clientId:i(e),select_by:n})},...p}),null===(r=window.google)||void 0===r||r.accounts.id.renderButton(x.current,{type:l,theme:c,size:u,text:d,shape:m,logo_alignment:f,width:h,locale:v}),t&&(null===(n=window.google)||void 0===n||n.accounts.id.prompt(y.current)),()=>{var e;t&&(null===(e=window.google)||void 0===e||e.accounts.id.cancel())}}),[b,g,t,l,c,u,d,m,f,h,v]),n.createElement("div",{ref:x,style:{height:a[u]}})}},7156:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return t(1502)}])},4950:function(e,r,t){"use strict";var n=t(5893),s=t(155),l=t(7516),o=t(3750);r.Z=function(e){var r=e.type,t=void 0===r?"warning":r,i=e.title,a=void 0===i?"Alert title":i,c=e.action,u=e.className,d="error"===t?l.Cw1:"success"===t?o.nRB:s.SZZ;return(0,n.jsxs)("div",{className:"flex flex-col sm:flex-row gap-2.5 items-stretch justify-between rounded-md overflow-hidden p-1.5 border _alert ".concat(t," ").concat(u||""),children:[(0,n.jsxs)("div",{className:"flex items-stretch flex-grow",children:[(0,n.jsx)("div",{className:"min-h-[32px] min-w-[32px] max-h-[50] max-w-[50px] flex-shrink-0 rounded-md overflow-hidden p-1.5 _flex_center text-white _alert_icon_wrapper",style:{aspectRatio:"1/1"},children:(0,n.jsx)(d,{className:"w-full h-full"})}),(0,n.jsx)("div",{className:"px-2.5 flex items-center",children:(0,n.jsx)("h6",{className:"_h6 font-medium text-sm",children:a})})]}),c&&(0,n.jsx)("div",{className:"flex flex-shrink-0 justify-end sm:justify-start items-center",children:c})]})}},5795:function(e,r,t){"use strict";var n=t(5893),s=t(7294),l=t(5155),o=t(782),i=t(4950),a=t(4811),c=t(6097),u=t(4779),d=t(2077);r.Z=function(e){var r=e.className,t=e.showToast,m=e.messageKey,f=e.type,h=void 0===f?"success":f,v=e.disabledCloseButton,p=m||a.QA,x=(0,s.useState)((0,u.Gg)(p)),b=x[0],g=x[1],j=function(e){(0,u.Z3)(p),e&&g(null)};return setTimeout((function(){j()}),1500),(0,s.useEffect)((function(){t&&b&&o.Am.success(b,c.Z)}),[]),(0,n.jsx)(n.Fragment,{children:b&&!t?(0,n.jsx)("div",{className:r||"",children:(0,n.jsx)(i.Z,{type:h,title:b,action:!v&&(0,n.jsx)(d.Z,{onClick:function(){return j(!0)},className:"small green outlined",StartIcon:(0,n.jsx)(l.nfZ,{size:10})})})}):null})}},9264:function(e,r,t){"use strict";var n=t(5893),s=t(2175);r.Z=function(e){var r=e.name,t=e.showError,l=e.msg,o=(0,s.u6)(),i=o.errors,a=o.touched;return t||i[r]&&a[r]?(0,n.jsxs)("div",{className:"flex items-center space-x-1.5 text-red-600 text-xs mt-1.5",children:[(0,n.jsx)("div",{children:(0,n.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,n.jsx)("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"})]})})}),(0,n.jsx)("span",{children:l||i[r]})]}):null}},2082:function(e,r,t){"use strict";var n=t(5893),s=t(2175),l=t(9264);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){o(e,r,t[r])}))}return e}function a(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}r.Z=function(e){var r=e.name,t=(e.className,e.type),o=void 0===t?"text":t,u=e.disabledErrorMessage,d=a(e,["name","className","type","disabledErrorMessage"]),m=(0,s.u6)(),f=m.errors,h=m.touched;if(!r)throw new Error("name is required");var v=f[r]&&h[r];return(0,n.jsxs)("div",{children:[(0,n.jsx)(s.gN,i({name:r,type:o},d,{isError:v,component:c})),!u&&(0,n.jsx)(l.Z,{name:r})]})};var c=function(e){var r=e.field,t=(e.form,e.className),s=e.label,l=e.isError,o=e.isTextArea,c=a(e,["field","form","className","label","isError","isTextArea"]);return(0,n.jsxs)("label",{className:"inline-block w-full",children:[s&&(0,n.jsx)("label",{htmlFor:r.name,className:"_subtitle2 mb-1.5 block",children:s}),o?(0,n.jsx)("textarea",i({id:r.name,className:"_input ".concat(t||""," ").concat(l?"!border-red-500":"")},r,c)):(0,n.jsx)("input",i({id:r.name,className:"_input ".concat(t||""," ").concat(l?"!border-red-500":"")},r,c))]})}},6097:function(e,r){"use strict";r.Z={position:"bottom-right",autoClose:6e3,hideProgressBar:!0}},1502:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return P}});var n=t(5893),s=t(2175),l=t(9008),o=t(1664),i=t(1163),a=t(7294),c=t(6426),u=t(4231),d=t(3513),m=t(4950),f=t(2077),h=t(1907),v=t(5795),p=t(9264);function x(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){x(e,r,t[r])}))}return e}function g(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var j=function(e){e.indeterminate;var r=e.className,t=e.name,l=e.value,o=(e.onChange,e.label),i=e.disabledErrorMessage,a=g(e,["indeterminate","className","name","value","onChange","label","disabledErrorMessage"]);if(!t)throw new Error("name is required");if(!l)throw new Error("value is required");var c=(0,s.u6)(),u=c.errors,d=c.touched,m=u[t]&&d[t];return(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)(s.gN,b({type:"checkbox",name:t,value:l,component:w,className:r,label:o,isError:m},a)),!i&&(0,n.jsx)(p.Z,{name:t})]})},w=function(e){var r=e.field,t=(e.form,e.className),s=e.label,l=e.isError,o=g(e,["field","form","className","label","isError"]);return(0,n.jsxs)("label",{className:"flex items-center cursor-pointer ".concat(t||""),children:[(0,n.jsxs)("label",{className:"_checkbox bounce",style:l&&{"--border":"red","--border-hover":"red"},children:[(0,n.jsx)("input",b({},r,o)),(0,n.jsxs)("div",{className:"checkbox_icon_wrapper",children:[(0,n.jsx)("svg",{viewBox:"0 0 21 21",className:"checked_svg",children:(0,n.jsx)("polyline",{points:"5 10.75 8.5 14.25 16 6"})}),(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",className:"indeterminate_svg",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fill:"#fff",d:"M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"})})]})]}),s&&(0,n.jsx)("span",{className:"ml-3 inline-block _subtitle2 select-none leading-[14px] ".concat(l?"text-red-600":""),children:s})]})},y=t(2082),N=t(4811),_=t(7537),O=t(8604),E=t(8313);function S(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var k={email:"",password:"",rememberMe:["rememberMe"]},Z=u.Ry().shape({email:u.Z_().required().email().trim().lowercase().label("Email"),password:u.Z_().required().label("Password")});var P=function(){var e,r=(0,a.useContext)(E.globalContext).saveAuthUser,t=(0,a.useState)(!1),u=t[0],p=t[1],x=(0,a.useState)(!1),b=x[0],g=x[1],w=(0,i.useRouter)(),P=null===w||void 0===w||null===(e=w.query)||void 0===e?void 0:e[N.ly];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.default,{children:(0,n.jsxs)("title",{children:["Login ",N.OA]})}),(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"w-full sm:w-[400px] relative _form_wrapper",children:[u&&(0,n.jsx)("div",{className:"_absolute_full"}),(0,n.jsx)("h3",{className:"_h3",children:"Login"}),(0,n.jsxs)("div",{className:"relative !mt-7",children:[u&&(0,n.jsx)("div",{className:"_absolute_full _flex_center bg-white/75",children:(0,n.jsx)(h.Z,{size:20,className:"text-primary-500"})}),(0,n.jsx)(c.rg,{clientId:"666454721418-vksp2ivmd1470oivphu7cjnkssaip2o8.apps.googleusercontent.com",children:(0,n.jsx)(c.kZ,{onSuccess:function(e){var t;t=e,d.ZP.post("/google-login",{idToken:null===t||void 0===t?void 0:t.credential}).then((function(e){var t,n=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data,s=n.user,l=n.token;r(s,l,!0)})).catch((function(e){p(!1),g((0,O.FU)(e))}))},onError:function(){g("Something went wrong. Try again"),p(!1)}})})]}),(0,n.jsxs)("div",{className:"mt-5",children:[(0,n.jsx)(s.J9,{initialValues:k,validationSchema:Z,onSubmit:function(e,t){var n=t.setSubmitting;n(!1),p(!0),g(!1);var s=1===e.rememberMe.length?1:0;d.ZP.post("/login",function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){S(e,r,t[r])}))}return e}({},e,{remember:s})).then((function(e){var t,n=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data,l=n.user,o=n.token;r(l,o,s,P)})).catch((function(e){g((0,O.FU)(e))})).finally((function(){p(!1),n(!0)}))},children:function(e){var r=e.handleSubmit;return(0,n.jsxs)("form",{className:"flex flex-col gap-4",children:[(0,n.jsx)(v.Z,{type:"success",disabledCloseButton:!0,messageKey:"_changed_password_success"}),(0,n.jsx)(v.Z,{type:"error",disabledCloseButton:!0}),b&&(0,n.jsx)(m.Z,{type:"error",title:b}),(0,n.jsx)(y.Z,{name:"email",type:"email",label:"Email",placeholder:"Email"}),(0,n.jsx)(y.Z,{name:"password",type:"password",label:"Password",placeholder:"Password"}),(0,n.jsxs)("div",{className:"flex justify-between items-start gap-2 flex-wrap",children:[(0,n.jsx)(j,{name:"rememberMe",value:"rememberMe",label:"Remember me"}),(0,n.jsx)(o.default,{href:_.Z.forgotPassword.name,children:(0,n.jsx)("a",{className:"_subtitle2 _link",children:"Forgot password?"})})]}),(0,n.jsx)(f.Z,{loading:u,onClick:r,type:"submit",className:"w-full",children:"Login"})]})}}),(0,n.jsx)("div",{className:"flex justify-center mt-3.5",children:(0,n.jsxs)("p",{className:"_subtitle2",children:["Don't have any account?",(0,n.jsx)(o.default,{href:"".concat(_.Z.register.name).concat((0,O.u)(w)),children:(0,n.jsx)("a",{className:"_subtitle2 _link ml-1.5",children:"Create One"})})]})})]})]})})]})}}},function(e){e.O(0,[158,141,774,888,179],(function(){return r=7156,e(e.s=r);var r}));var r=e.O();_N_E=r}]);